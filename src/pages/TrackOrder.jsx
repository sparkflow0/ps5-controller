import React, { useEffect } from 'react';

const trackMarkup = `
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">تتبع الطلب</div>
    </a>
  </div>
</div>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="max-width:960px; width:100%; color:#fff; background:rgba(0,0,0,0.45); border:1px solid rgba(255,255,255,0.08);">
    <div class="card-title" id="trackTitle">تتبع الطلب</div>
    <div id="trackStatus" style="margin:8px 0; font-size:0.95rem; opacity:0.9;"></div>
    <div id="stepsList" class="steps-list"></div>
  </div>
</div>

<style>
  .steps-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
    margin-top: 10px;
    position: relative;
  }
  .step-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
  }
  .step-line {
    position: absolute;
    top: 50%;
    left: calc(100% - 6px);
    width: 12px;
    height: 2px;
    background: linear-gradient(90deg, rgba(124,252,0,0.8), rgba(124,252,0,0.2));
  }
  .step-card:last-child .step-line { display: none; }
  .step-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .step-icon {
    width: 64px;
    height: 64px;
    object-fit: contain;
    filter: none;
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .step-card.pending .step-icon {
    filter: grayscale(1) brightness(0.7);
    opacity: 0.7;
  }
  .step-title {
    font-weight: 700;
    text-align: center;
  }
  .step-status {
    font-size: 0.9rem;
    opacity: 0.85;
    text-align: center;
  }
  @media (max-width: 900px) {
    .steps-list { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
  }
  @media (max-width: 640px) {
    .steps-list { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
  }
</style>
`;

const trackScript = `
  const statusEl = document.getElementById("trackStatus");
  const stepsListEl = document.getElementById("stepsList");

  function setStatus(msg) {
    statusEl.textContent = msg;
  }

  function addStep(label, value, done, icon, hasLine) {
    const card = document.createElement("div");
    card.className = "step-card" + (done ? " step-done" : " pending");
    const iconWrap = document.createElement("div");
    iconWrap.className = "step-icon-wrap";
    const img = document.createElement("img");
    img.className = "step-icon";
    img.src = icon;
    img.alt = label;
    iconWrap.appendChild(img);
    const title = document.createElement("div");
    title.className = "step-title";
    title.textContent = label;
    const status = document.createElement("div");
    status.className = "step-status";
    status.textContent = value;
    card.appendChild(iconWrap);
    card.appendChild(title);
    card.appendChild(status);
    if (hasLine) {
      const line = document.createElement("div");
      line.className = "step-line";
      card.appendChild(line);
    }
    stepsListEl.appendChild(card);
  }

  function getOrderId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("order") || params.get("order_id") || params.get("id");
  }

  async function fetchJson(url, label) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(label + " HTTP " + res.status);
    return res.json();
  }

  async function load() {
    const orderId = getOrderId();
    if (!orderId) {
      setStatus("No order id provided in the link.");
      return;
    }
    setStatus("Loading order " + orderId + " …");
    stepsListEl.innerHTML = "";

    try {
      const so = await fetchJson("/zoho/inventory/v1/salesorders/" + encodeURIComponent(orderId), "salesorder");
      const salesorder = so.salesorder || {};
      const soId = salesorder.salesorder_id ? String(salesorder.salesorder_id) : String(orderId);
      const soNumber = salesorder.salesorder_number || "";
      const soStatus = salesorder.status || "Unknown";
      const stepIcons = {
        order: "/assets/track/order.png",
        process: "/assets/track/process.png",
        ontheway: "/assets/track/ontheway.png",
        delivered: "/assets/track/delivered.png"
      };
      const orderDone = true;

      // Packages (scoped to this sales order)
      let packages = [];
      try {
        const pkg = await fetchJson("/zoho/inventory/v1/packages?salesorder_id=" + encodeURIComponent(orderId) + "&per_page=200", "packages");
        packages = (pkg.packages || []).filter(p => {
          const pid = p.salesorder_id != null ? String(p.salesorder_id) : "";
          const pnum = p.salesorder_number || "";
          return (pid && pid === soId) || (soNumber && pnum === soNumber);
        });
      } catch (e) {
        // ignore
      }
      const pkgSummary = packages.length ? packages.length + " total" : "Not created yet";
      const processingDone = packages.length > 0;

      // Shipments (scoped to this sales order)
      let shipments = [];
      try {
        const ship = await fetchJson("/zoho/inventory/v1/shipmentorders?salesorder_id=" + encodeURIComponent(orderId) + "&per_page=200", "shipments");
        shipments = (ship.shipmentorders || []).filter(s => {
          const sid = s.salesorder_id != null ? String(s.salesorder_id) : "";
          const snum = s.salesorder_number || "";
          return (sid && sid === soId) || (soNumber && snum === soNumber);
        });
      } catch (e) {
        // ignore
      }
      const onTheWayDone = shipments.length > 0;

      // Delivered (check shipment delivery_status or package delivery_status/status)
      const deliveredFromShipments = shipments.filter(sh => {
        const d = (sh.delivery_status || sh.status || "").toLowerCase();
        return d.includes("delivered");
      });
      const deliveredFromPackages = packages.filter(p => {
        const d = (p.delivery_status || p.status || "").toLowerCase();
        return d.includes("delivered");
      });
      const deliveredCount = deliveredFromShipments.length || deliveredFromPackages.length;
      const deliveredDone = deliveredCount > 0;

      // Render steps horizontally with icons and connectors
      stepsListEl.innerHTML = "";
      addStep("Order Received", soStatus, orderDone, stepIcons.order, true);
      addStep("Order Processing", pkgSummary, processingDone, stepIcons.process, true);
      addStep("On the way", shipments.length ? shipments.length + " total" : "Not created yet", onTheWayDone, stepIcons.ontheway, true);
      addStep("Delivered", deliveredCount ? deliveredCount + " delivered" : "Not delivered yet", deliveredDone, stepIcons.delivered, false);

      setStatus("Order loaded.");
    } catch (err) {
      console.error(err);
      setStatus("Failed to load order: " + err.message);
    }
  }

  load();
`;

function TrackOrderPage() {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = trackScript;
    document.body.appendChild(scriptEl);
    return () => {
      document.body.removeChild(scriptEl);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: trackMarkup }} />;
}

export default TrackOrderPage;
