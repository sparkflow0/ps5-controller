import React, { useEffect } from 'react';

const posMarkup = `
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">POS</div>
    </a>
  </div>
  <button class="nav-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNavDrawer">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="nav-right">
    <a class="nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
    <a class="nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
    <a class="nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
    <button class="nav-link nav-lang" id="langToggle" type="button">EN</button>
  </div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
</aside>
<div class="page-content" style="padding-top:80px; display:flex; justify-content:center;">
  <div class="card" style="width:100%; max-width:1100px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); color:#fff;">
    <div class="card-title">Point of Sale</div>
    <div id="posStatus" style="margin-bottom:10px; opacity:0.85; font-size:0.95rem;"></div>
    <div class="pos-grid" id="posGrid"></div>
  </div>
</div>

<style>
  .pos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }
  .pos-item {
    padding: 12px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .pos-name {
    font-weight: 700;
  }
  .pos-price {
    color: #9ef56e;
    font-weight: 700;
  }
  .pos-stock {
    font-size: 0.9rem;
    opacity: 0.85;
  }
  .pos-btn {
    margin-top: auto;
    padding: 8px 10px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(135deg, #7CFC00, #2ecc71);
    color: #000;
    font-weight: 700;
    cursor: pointer;
  }
  .pos-btn:disabled {
    background: rgba(255,255,255,0.2);
    color: #444;
    cursor: not-allowed;
  }
</style>
`;

const posScript = `
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const navLangToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");

  const navText = {
    ar: {
      navPremade: "تصاميم جاهزة",
      navContact: "تواصل معنا",
      navBuildCta: "صمّم ذراعك الآن"
    },
    en: {
      navPremade: "Premade controllers",
      navContact: "Contact",
      navBuildCta: "Build your own"
    }
  };

  function updateNavLabels() {
    const labels = navText[navLang] || navText.ar;
    document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
      el.textContent = labels.navPremade;
    });
    document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
      el.textContent = labels.navContact;
    });
    document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
      el.textContent = labels.navBuildCta;
    });
  }

  function updateNavLangLabel() {
    const label = navLang === "ar" ? "EN" : "AR";
    if (navLangToggle) navLangToggle.textContent = label;
    if (mobileLangToggle) mobileLangToggle.textContent = label;
    updateNavLabels();
  }

  function toggleNavLang() {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    document.documentElement.lang = navLang;
    document.documentElement.dir = navLang === "ar" ? "rtl" : "ltr";
    updateNavLangLabel();
  }

  updateNavLangLabel();
  if (navLangToggle) navLangToggle.addEventListener("click", toggleNavLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleNavLang);

  function setMobileNavOpen(isOpen) {
    if (!mobileNavOverlay || !mobileNavDrawer) return;
    mobileNavOverlay.classList.toggle("open", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.classList.toggle("mobile-nav-open", isOpen);
    if (navMenuBtn) {
      navMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }

  if (navMenuBtn && mobileNavOverlay && mobileNavDrawer) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNavDrawer.classList.contains("open");
      setMobileNavOpen(!isOpen);
    });
    mobileNavOverlay.addEventListener("click", () => setMobileNavOpen(false));
    mobileNavDrawer.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMobileNavOpen(false));
    });
  }

  const statusEl = document.getElementById("posStatus");
  const gridEl = document.getElementById("posGrid");
  const CART_KEY = "ezCart";

  function setStatus(msg) { statusEl.textContent = msg; }

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
  }
  function saveCart(items) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {}
  }

  function addToCart(item) {
    const cart = loadCart();
    cart.push({
      id: Date.now(),
      name: item.name || "Item",
      unitPrice: item.rate || 0,
      quantity: 1,
      config: null,
      preview: item.image_url || ""
    });
    saveCart(cart);
    setStatus("Added to cart: " + (item.name || "Item"));
  }

  async function loadItems() {
    setStatus("Loading items...");
    gridEl.innerHTML = "";
    try {
      const res = await fetch("/zoho/inventory/v1/items?organization_id=892379608&per_page=200");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      const items = (json.items || []).filter(it => {
        const active = (it.status || "").toLowerCase() === "active";
        const name = (it.name || "").toLowerCase();
        return active && !name.startsWith("ps5_");
      });
      if (!items.length) {
        setStatus("No items found.");
        return;
      }
      setStatus(items.length + " items loaded.");
      items.forEach(it => {
        const card = document.createElement("div");
        card.className = "pos-item";

        const name = document.createElement("div");
        name.className = "pos-name";
        name.textContent = it.name || "Item";

        const price = document.createElement("div");
        price.className = "pos-price";
        const rate = typeof it.rate === "number" ? it.rate.toFixed(2) : "0.00";
        price.textContent = (it.currency_code || "BHD") + " " + rate;

        const stock = document.createElement("div");
        stock.className = "pos-stock";
        const avail = it.available_stock != null ? it.available_stock : it.stock_on_hand;
        stock.textContent = "Stock: " + (avail != null ? avail : "—");

        const btn = document.createElement("button");
        btn.className = "pos-btn";
        btn.textContent = "Add to cart";
        btn.disabled = avail != null && avail <= 0;
        btn.addEventListener("click", () => addToCart(it));

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(stock);
        card.appendChild(btn);
        gridEl.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      setStatus("Failed to load items: " + err.message);
    }
  }

  loadItems();
`;

function POSPage() {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = posScript;
    document.body.appendChild(scriptEl);
    return () => {
      document.body.removeChild(scriptEl);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: posMarkup }} />;
}

export default POSPage;
