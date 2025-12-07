const functions = require("firebase-functions");

const ZOHO_TOKEN_URL = "https://accounts.zoho.com/oauth/v2/token";
const ZOHO_BASE = "https://www.zohoapis.com";

const {
  client_id: ZOHO_CLIENT_ID,
  client_secret: ZOHO_CLIENT_SECRET,
  refresh_token: ZOHO_REFRESH_TOKEN,
  org_id: ZOHO_ORG_ID,
} = (functions.config().zoho || {});

let cachedAccessToken = null;
let cachedExpiry = 0;

function ensureConfig() {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN || !ZOHO_ORG_ID) {
    throw new Error("Missing Zoho config. Set functions config: zoho.client_id, zoho.client_secret, zoho.refresh_token, zoho.org_id");
  }
}

async function refreshAccessToken() {
  ensureConfig();
  const params = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });
  const res = await fetch(ZOHO_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Zoho refresh failed (${res.status}): ${body}`);
  }
  const json = await res.json();
  if (!json.access_token) throw new Error("Zoho refresh response missing access_token");
  cachedAccessToken = json.access_token;
  const expiresIn = Number(json.expires_in_sec || json.expires_in || 0);
  cachedExpiry = Date.now() + expiresIn * 1000 - 60_000; // refresh 1 min early
  return cachedAccessToken;
}

async function getAccessToken() {
  if (cachedAccessToken && Date.now() < cachedExpiry) return cachedAccessToken;
  return refreshAccessToken();
}

async function fetchZohoJson(url, options, label) {
  const res = await fetch(url, options);
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    // not JSON
  }
  if (!res.ok) {
    console.error("[orderHandler] Zoho", label || "", "status", res.status, text);
  } else {
    console.log("[orderHandler] Zoho", label || "", "status", res.status, json && json.code ? json.code : "ok");
  }
  return json;
}

exports.zohoProxy = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(204).send("");

  try {
    ensureConfig();
    let path = req.path || "/";
    if (path.startsWith("/zoho")) path = path.replace(/^\/zoho/, "");
    if (path.startsWith("/api/")) path = path.replace(/^\/api\//, "/inventory/");
    if (!path.startsWith("/inventory/")) {
      path = "/inventory" + (path.startsWith("/") ? path : "/" + path);
    }
    const urlObj = new URL(ZOHO_BASE + path);
    if (!urlObj.searchParams.has("organization_id")) {
      urlObj.searchParams.set("organization_id", ZOHO_ORG_ID);
    }

    const attempt = async (retry) => {
      const token = await getAccessToken();
      const hopByHop = new Set([
        "connection",
        "proxy-connection",
        "keep-alive",
        "te",
        "transfer-encoding",
        "upgrade",
        "host",
      ]);
      const headers = {};
      Object.entries(req.headers).forEach(([k, v]) => {
        const lower = k.toLowerCase();
        if (hopByHop.has(lower)) return;
        if (lower === "content-length") return;
        headers[k] = v;
      });
      headers.authorization = `Zoho-oauthtoken ${token}`;

      const forwardRes = await fetch(urlObj.toString(), {
        method: req.method,
        headers,
        body: req.method === "GET" || req.method === "HEAD" ? undefined : req.rawBody,
      });

      if (forwardRes.status === 401 && retry) {
        await refreshAccessToken();
        return attempt(false);
      }

      const contentType = forwardRes.headers.get("content-type") || "";
      res.status(forwardRes.status);
      forwardRes.headers.forEach((value, key) => {
        const lower = key.toLowerCase();
        if (["content-encoding", "transfer-encoding", "content-length", "connection"].includes(lower)) return;
        res.setHeader(key, value);
      });

      if (contentType.includes("application/json")) {
        const data = await forwardRes.json();
        res.json(data);
      } else {
        const buf = Buffer.from(await forwardRes.arrayBuffer());
        res.send(buf);
      }
    };

    await attempt(true);
  } catch (err) {
    console.error("[zohoProxy] error", err);
    res.status(500).json({ error: "zoho-proxy-error", detail: err.message });
  }
});

function buildAddress(customer) {
  const name = (customer.name || customer.fullName || "PS5 Customer").slice(0, 30);
  const address = "N/A"; // minimize to avoid Zoho length issues
  return {
    attention: name,
    address,
  };
}

function splitName(name) {
  if (!name) return { first: "PS5", last: "Customer" };
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: parts[0] };
  const first = parts.shift();
  const last = parts.join(" ");
  return { first, last };
}

exports.orderHandler = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  let zohoEnabled = true;
  try {
    ensureConfig();
  } catch {
    zohoEnabled = false;
  }

  try {
    const body = req.body || {};
    const customer = body.customer || body || {};
    const cart = Array.isArray(body.items || body.cart) ? (body.items || body.cart) : [];
    const total = cart.reduce((s, it) => s + (Number(it.unitPrice) || 0) * (Number(it.quantity) || 0), 0);

    let contact_id = null;
    let salesorder = null;
    let so_confirm = null;
    let invoice = null;
    let payment = null;

    if (zohoEnabled) {
      try {
        const token = await getAccessToken();
        const itemsJson = await fetchZohoJson(`${ZOHO_BASE}/inventory/v1/items?organization_id=${ZOHO_ORG_ID}&per_page=200`, {
          headers: { Authorization: `Zoho-oauthtoken ${token}` }
        }, "items");
        const itemMap = {};
        (itemsJson.items || []).forEach(it => {
          const nameKey = (it.name || it.item_name || "").toLowerCase();
          itemMap[nameKey] = it;
        });
        const baseItem = itemMap["ps5_original_controller"];

        const line_items = cart.map(it => {
          const nameKey = (it.name || "").toLowerCase();
          const mapped = itemMap[nameKey];
          return {
            item_id: mapped ? mapped.item_id : (baseItem ? baseItem.item_id : undefined),
            name: it.name || "PS5 Controller",
            description: it.config ? JSON.stringify(it.config) : "",
            quantity: it.quantity || 1,
            rate: it.unitPrice || 0
          };
        });

        const contact_name = customer.name || customer.fullName || "PS5 Customer";
        const { first: first_name, last: last_name } = splitName(contact_name);
        const shorten = (v, max = 60) => (v || "").toString().slice(0, max);
        const contactPayload = {
          contact_name: contact_name.slice(0, 50),
          display_name: contact_name.slice(0, 50),
          company_name: customer.company || "",
          customer_sub_type: "individual",
          email: customer.email || "",
          phone: customer.phone || customer.mobile || "",
          billing_address: buildAddress(customer),
          shipping_address: buildAddress(customer),
          contact_persons: [
            {
              salutation: customer.salutation || "",
              first_name,
              last_name,
              email: customer.email || "",
              phone: customer.phone || "",
              mobile: customer.mobile || customer.phone || ""
            }
          ]
        };

        const shippingAddress = buildAddress(customer);
        const billingAddress = buildAddress(customer);

        try {
          const contactJson = await fetchZohoJson(`${ZOHO_BASE}/inventory/v1/contacts?organization_id=${ZOHO_ORG_ID}`, {
            method: "POST",
            headers: {
              Authorization: `Zoho-oauthtoken ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(contactPayload)
          }, "contacts");
          contact_id = contactJson.contact ? contactJson.contact.contact_id : null;
        } catch (e) {
          // ignore
        }

        try {
          const soPayload = {
            customer_id: contact_id || undefined,
            contact_name,
            customer_name: contact_name,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            line_items,
            payment_options: { payment_mode: "cash" }
          };
          salesorder = await fetchZohoJson(`${ZOHO_BASE}/inventory/v1/salesorders?organization_id=${ZOHO_ORG_ID}`, {
            method: "POST",
            headers: {
              Authorization: `Zoho-oauthtoken ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(soPayload)
          }, "salesorders");
        } catch (e) {
          // ignore
        }

        // Confirm the sales order if created
        if (salesorder && salesorder.salesorder && salesorder.salesorder.salesorder_id) {
          try {
            const soId = salesorder.salesorder.salesorder_id;
            so_confirm = await fetchZohoJson(`${ZOHO_BASE}/inventory/v1/salesorders/${soId}/status/confirmed?organization_id=${ZOHO_ORG_ID}`, {
              method: "POST",
              headers: { Authorization: `Zoho-oauthtoken ${token}` }
            }, "salesorders_confirm");
          } catch (e) {
            // ignore
          }
        }

        // Create invoice regardless (attach salesorder_id when available)
        try {
          const invPayload = {
            customer_id: contact_id || undefined,
            salesorder_id: salesorder && salesorder.salesorder && salesorder.salesorder.salesorder_id ? salesorder.salesorder.salesorder_id : undefined,
            contact_name,
            customer_name: contact_name,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            line_items,
            payment_options: { payment_mode: "cash" }
          };
          invoice = await fetchZohoJson(`${ZOHO_BASE}/inventory/v1/invoices?organization_id=${ZOHO_ORG_ID}`, {
            method: "POST",
            headers: {
              Authorization: `Zoho-oauthtoken ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(invPayload)
          }, "invoices");
        } catch (e) {
          // ignore
        }

        // Record payment against the invoice (cash, paid)
        if (invoice && invoice.invoice && invoice.invoice.invoice_id) {
          try {
            const payPayload = {
              customer_id: contact_id || undefined,
              payment_mode: "cash",
              amount: total,
              invoices: [
                {
                  invoice_id: invoice.invoice.invoice_id,
                  amount_applied: total
                }
              ]
            };
            payment = await fetchZohoJson(`${ZOHO_BASE}/inventory/v1/customerpayments?organization_id=${ZOHO_ORG_ID}`, {
              method: "POST",
              headers: {
                Authorization: `Zoho-oauthtoken ${token}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payPayload)
            }, "customerpayments");
          } catch (e) {
            // ignore
          }
        }

      } catch (err) {
        console.error("[orderHandler] Zoho error", err);
      }
    }

    res.json({
      status: "paid_demo",
      payment_method: "cash",
      total,
      contact_id,
      salesorder,
      so_confirm,
      invoice,
      payment
    });
  } catch (err) {
    console.error("[orderHandler] error", err);
    res.json({
      status: "paid_demo",
      payment_method: "cash",
      total: 0,
      error: err.message
    });
  }
});
