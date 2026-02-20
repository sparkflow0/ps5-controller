import{r as e,j as a}from"./index-BS14bs3e.js";const o=`
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="/">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title" data-i18n="posTitle">نقطة البيع</div>
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
    <button class="nav-link nav-theme" id="themeToggle" type="button">فاتح</button>
    <button class="nav-cart-toggle" id="cartToggle" type="button" aria-label="Open cart">
      <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.89-2-2-2z"/></svg>
      <span class="cart-count-badge" id="cartBadge">0</span>
    </button>
  </div>
</div>

<div class="pos-container">
  <!-- Dynamic Sidebar -->
  <aside class="pos-sidebar">
    <div class="pos-sidebar-inner">
      <div class="pos-search-box">
        <input type="text" id="posSearch" placeholder="بحث عن منتج..." data-i18n-placeholder="posSearchPlaceholder">
        <svg class="search-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      </div>
      
      <div class="pos-filter-group">
        <h3 data-i18n="posCategories">الأقسام</h3>
        <div class="pos-category-list" id="posCategoryList">
          <button class="pos-category-btn active" data-category="all" data-i18n="posCatAll">الكل</button>
        </div>
      </div>

      <div class="pos-filter-group">
        <h3 data-i18n="posStatusFilter">الحالة</h3>
        <div class="pos-status-filters">
           <label class="pos-filter-item">
             <input type="checkbox" id="filterInStock" checked>
             <span data-i18n="posFilterInStock">متوفر فقط</span>
           </label>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="pos-main">
    <div class="pos-toolbar">
      <div id="posStatus" class="pos-status-msg"></div>
      <div class="pos-view-options">
        <span id="posItemCount">0</span> <span data-i18n="posCountSuffix">منتجات</span>
      </div>
    </div>
    
    <div class="pos-grid" id="posGrid">
      <!-- Loading Skeletons -->
      <div class="pos-skeleton"></div>
      <div class="pos-skeleton"></div>
      <div class="pos-skeleton"></div>
      <div class="pos-skeleton"></div>
    </div>
  </main>

  <!-- POS Cart Panel -->
  <aside class="pos-cart-panel" id="posCartPanel">
    <div class="pos-cart-header">
      <button class="pos-cart-close" id="closeCart">&times;</button>
      <h3 data-i18n="posCartTitle">السلة</h3>
      <button class="pos-cart-clear" id="clearCart" data-i18n="posClearCart">مسح</button>
    </div>
    <div class="pos-cart-items" id="posCartItems">
      <!-- Cart items injected here -->
      <div class="pos-cart-empty" data-i18n="posCartEmpty">السلة فارغة</div>
    </div>
    <div class="pos-cart-footer">
      <div class="pos-cart-total-row">
        <span data-i18n="posSubtotal">المجموع</span>
        <span id="posSubtotalValue">0.000 BHD</span>
      </div>
      <button class="pos-checkout-btn" id="posCheckout" data-i18n="posCheckout">إتمام الطلب</button>
    </div>
  </aside>
</div>

<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
  <a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
  <a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
  <a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
  <button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
  <button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>

<style>
  :root {
    --pos-sidebar-w: 260px;
    --pos-cart-w: 320px;
  }
  
  .pos-container {
    display: flex;
    min-height: calc(100vh - 60px);
    margin-top: 60px;
    background: var(--page-bg);
    color: var(--color-text);
  }

  /* Sidebar */
  .pos-sidebar {
    width: var(--pos-sidebar-w);
    border-inline-end: 1px solid var(--border-subtle);
    background: rgba(255,255,255,0.02);
    padding: 20px;
    flex-shrink: 0;
  }
  .pos-sidebar-inner {
    position: sticky;
    top: 80px;
  }
  .pos-search-box {
    position: relative;
    margin-bottom: 24px;
  }
  .pos-search-box input {
    width: 100%;
    padding: 10px 14px;
    padding-inline-start: 38px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    color: var(--color-text);
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .pos-search-box input:focus {
    border-color: var(--accent-glow);
  }
  .search-icon {
    position: absolute;
    top: 50%;
    inset-inline-start: 12px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    fill: var(--color-text-muted);
  }

  .pos-filter-group h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.6;
    margin-bottom: 12px;
  }
  .pos-category-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 24px;
  }
  .pos-category-btn {
    text-align: start;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.2s;
    color: var(--color-text-muted);
  }
  .pos-category-btn:hover {
    background: rgba(255,255,255,0.04);
    color: var(--color-text);
  }
  .pos-category-btn.active {
    background: var(--button-primary-bg);
    color: var(--button-primary-text);
    font-weight: 600;
  }

  /* Main Grid */
  .pos-main {
    flex-grow: 1;
    padding: 24px;
    background: var(--page-bg);
  }
  .pos-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .pos-status-msg {
    font-size: 0.9rem;
    opacity: 0.8;
  }
  .pos-itemCount {
    font-weight: 600;
  }

  .pos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
  }

  /* Product Card */
  .pos-product-card {
    background: var(--card-bg);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
  }
  .pos-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
  .pos-product-img {
    width: 100%;
    aspect-ratio: 1;
    background: rgba(255,255,255,0.03);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .pos-product-img img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  .pos-product-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .pos-product-name {
    font-weight: 600;
    font-size: 0.95rem;
    line-height: 1.3;
    height: 2.6em;
    overflow: hidden;
  }
  .pos-product-price {
    color: var(--accent-glow);
    font-weight: 700;
    font-size: 1.1rem;
  }
  .pos-product-stock {
    font-size: 0.75rem;
    opacity: 0.6;
  }
  .pos-add-btn {
    width: 100%;
    padding: 10px;
    background: var(--button-primary-bg);
    color: var(--button-primary-text);
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.85rem;
    margin-top: auto;
  }
  .pos-add-btn:disabled {
    background: rgba(255,255,255,0.1);
    color: gray;
    cursor: not-allowed;
  }

  /* Cart Panel */
  .pos-cart-panel {
    width: var(--pos-cart-w);
    background: var(--card-bg);
    border-inline-start: 1px solid var(--border-subtle);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  .pos-cart-header {
    padding: 20px;
    border-bottom: 1px solid var(--border-subtle);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pos-cart-items {
    flex-grow: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .pos-cart-empty {
    text-align: center;
    opacity: 0.5;
    margin-top: 40px;
  }
  .pos-cart-item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 8px;
    background: rgba(255,255,255,0.03);
    border-radius: 10px;
  }
  .pos-cart-item-img {
    width: 48px;
    height: 48px;
    background: rgba(255,255,255,0.05);
    border-radius: 6px;
    flex-shrink: 0;
  }
  .pos-cart-item-info {
    flex-grow: 1;
  }
  .pos-cart-item-name {
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .pos-cart-item-price {
    font-size: 0.8rem;
    color: var(--accent-glow);
  }
  .pos-cart-item-ctrl {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pos-cart-item-qty {
    font-size: 0.85rem;
    font-weight: 700;
    min-width: 20px;
    text-align: center;
  }
  .pos-cart-footer {
    padding: 20px;
    border-top: 1px solid var(--border-subtle);
    background: rgba(0,0,0,0.2);
  }
  .pos-cart-total-row {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  .pos-checkout-btn {
    width: 100%;
    padding: 14px;
    background: var(--accent-glow);
    color: #000;
    border-radius: 12px;
    font-weight: 800;
    font-size: 1rem;
    box-shadow: 0 0 20px rgba(158, 245, 110, 0.3);
  }

  /* Nav Cart Toggle */
  .nav-cart-toggle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border-subtle);
    color: var(--color-text);
    transition: all 0.2s;
  }
  .nav-cart-toggle:hover {
    background: rgba(255,255,255,0.1);
    transform: scale(1.05);
  }
  .nav-cart-toggle svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .cart-count-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--accent-glow);
    color: #000;
    font-size: 0.7rem;
    font-weight: 800;
    min-width: 18px;
    height: 18px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  .pos-cart-close {
    display: none; /* Hidden by default (desktop) */
    font-size: 1.5rem;
    line-height: 1;
    color: var(--color-text-muted);
    padding: 10px;
    margin: -10px;
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .pos-sidebar { width: 220px; }
    .pos-cart-panel { width: 280px; }
  }
  @media (max-width: 1000px) {
    .pos-container { flex-direction: column; }
    .pos-sidebar { width: 100%; border-inline-end: none; border-bottom: 1px solid var(--border-subtle); }
    .pos-cart-panel { 
      position: fixed; 
      bottom: 0; 
      left: 0; 
      right: 0; 
      height: 70vh; /* More height on mobile */
      width: 100%; 
      z-index: 200; 
      transform: translateY(100%); 
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
      box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
      border-inline-start: none;
      border-top: 1px solid var(--border-subtle);
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
    }
    .pos-cart-panel.open { transform: translateY(0); }
    .pos-cart-close { display: block; }
  }
</style>
`,n=`
  let navLang = localStorage.getItem("ez_lang") || "ar";
  const i18n = window.__EZ_I18N__ || {};
  
  function t(key) {
    return (i18n[navLang] && i18n[navLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.placeholder = t(key);
    });
    
    // Update labels for toggles
    const langToggle = document.getElementById("langToggle");
    if (langToggle) langToggle.textContent = navLang === "ar" ? "EN" : "AR";
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    if (mobileLangToggle) mobileLangToggle.textContent = navLang === "ar" ? "EN" : "AR";
  }

  // --- Theme Management ---
  let currentTheme = localStorage.getItem("ez_theme") || "dark";
  function applyTheme() {
    document.body.classList.toggle("theme-light", currentTheme === "light");
    const label = currentTheme === "dark" ? t("themeLight") : t("themeDark");
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) themeToggle.textContent = label;
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
    if (mobileThemeToggle) mobileThemeToggle.textContent = label;
  }
  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ez_theme", currentTheme);
    applyTheme();
  }

  // --- Mobile Navigation ---
  function setMobileNavOpen(isOpen) {
    const overlay = document.getElementById("mobileNavOverlay");
    const drawer = document.getElementById("mobileNavDrawer");
    const btn = document.querySelector(".nav-menu-btn");
    
    if (overlay) overlay.classList.toggle("open", isOpen);
    if (drawer) drawer.classList.toggle("open", isOpen);
    if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("mobile-nav-open", isOpen);
  }

  // --- Cart Drawer Logic ---
  function setCartOpen(isOpen) {
    const panel = document.getElementById("posCartPanel");
    if (panel) panel.classList.toggle("open", isOpen);
  }

  let allProducts = [];
  let currentCategory = "all";
  let searchQuery = "";
  let showInStockOnly = true;

  const gridEl = document.getElementById("posGrid");
  const statusEl = document.getElementById("posStatus");
  const countEl = document.getElementById("posItemCount");
  const cartItemsEl = document.getElementById("posCartItems");
  const subtotalValueEl = document.getElementById("posSubtotalValue");
  const categoryListEl = document.getElementById("posCategoryList");

  function setStatus(msg) { statusEl.textContent = msg; }

  async function loadItems() {
    gridEl.innerHTML = '<div class="pos-skeleton"></div>'.repeat(8);
    try {
      const res = await fetch("/zoho/inventory/v1/items?organization_id=892379608&per_page=200");
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      
      allProducts = (json.items || []).filter(it => {
          const status = (it.status || "").toLowerCase();
          const name = it.name || "";
          const sku = it.sku || "";
          const isActive = (status === "" || status === "active");
          const isNotPS5 = !name.toLowerCase().startsWith("ps5_") && !sku.toLowerCase().startsWith("ps5_");
          return isActive && isNotPS5;
      });
      
      renderCategories();
      filterAndRender();
      setStatus(allProducts.length + " " + t("posStatusLoadedSuffix"));
    } catch (err) {
      console.error(err);
      setStatus(t("posStatusFailedPrefix") + err.message);
    }
  }

  function renderCategories() {
    const cats = new Set();
    allProducts.forEach(p => {
      let cat = p.cf_category;
      if (!cat && p.custom_fields) {
          const found = p.custom_fields.find(f => f.label === "Category");
          if (found) cat = found.value;
      }
      if (!cat) cat = p.category_name; 
      
      p._displayCategory = cat || "Other";
      if (cat) cats.add(cat);
    });
    
    categoryListEl.innerHTML = '<button class="pos-category-btn active" data-category="all">' + t("posCatAll") + '</button>';
    const sortedCats = Array.from(cats).sort();
    sortedCats.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "pos-category-btn";
      btn.dataset.category = cat;
      btn.textContent = cat;
      btn.onclick = () => {
        document.querySelectorAll(".pos-category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = cat;
        filterAndRender();
      };
      categoryListEl.appendChild(btn);
    });
    
    document.querySelector('[data-category="all"]').onclick = (e) => {
        document.querySelectorAll(".pos-category-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        currentCategory = "all";
        filterAndRender();
    };
  }

  function filterAndRender() {
    const filtered = allProducts.filter(p => {
      const matchCat = currentCategory === "all" || p._displayCategory === currentCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (p.sku && p.sku.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchStock = !showInStockOnly || (p.available_stock > 0 || p.stock_on_hand > 0);
      return matchCat && matchSearch && matchStock;
    });

    renderGrid(filtered);
    countEl.textContent = filtered.length;
  }

  let lastRenderedHash = "";
  function renderGrid(items) {
    if (items.length === 0) {
      gridEl.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; opacity:0.5;">' + t("posStatusNoItems") + '</div>';
      lastRenderedHash = "empty";
      return;
    }

    const currentHash = items.map(it => it.item_id).join(",");
    if (currentHash === lastRenderedHash) return;
    lastRenderedHash = currentHash;

    const fragment = document.createDocumentFragment();
    items.forEach(it => {
      const card = document.createElement("div");
      card.className = "pos-product-card";
      
      const rate = typeof it.rate === "number" ? it.rate.toFixed(3) : "0.000";
      const avail = it.available_stock != null ? it.available_stock : it.stock_on_hand;
      const hasImage = it.image_name || it.image_id || it.image_url;
      const imageUrl = hasImage ? '/zoho/inventory/v1/items/' + it.item_id + '/image' : '/assets/placeholder.png';

      let html = '<div class="pos-product-img">';
      html += '<img src="' + imageUrl + '" alt="' + it.name + '" onerror="this.src=\\'/assets/placeholder.png\\'">';
      html += '</div>';
      html += '<div class="pos-product-info">';
      html += '<div class="pos-product-name">' + it.name + '</div>';
      html += '<div class="pos-product-price">BHD ' + rate + '</div>';
      html += '<div class="pos-product-stock">' + t("posStockLabel") + ': ' + (avail ?? "—") + '</div>';
      html += '</div>';
      html += '<button class="pos-add-btn" ' + (avail != null && avail <= 0 ? 'disabled' : '') + '>' + t("posAddToCart") + '</button>';
      
      card.innerHTML = html;
      card.querySelector(".pos-add-btn").onclick = () => addToCart(it);
      fragment.appendChild(card);
    });
    
    gridEl.innerHTML = "";
    gridEl.appendChild(fragment);
  }

  // Cart Management
  let cart = [];
  try {
    const saved = localStorage.getItem("ezCart");
    if (saved) cart = JSON.parse(saved);
  } catch(e) {}

  function addToCart(item) {
    const existing = cart.find(c => c.itemId === item.item_id);
    if (existing) {
      existing.quantity++;
    } else {
      const hasImg = item.image_name || item.image_id || item.image_url;
      cart.push({
        id: Date.now(),
        itemId: item.item_id,
        name: item.name,
        unitPrice: item.rate,
        quantity: 1,
        preview: hasImg ? '/zoho/inventory/v1/items/' + item.item_id + '/image' : '/assets/placeholder.png'
      });
    }
    updateCart();
    if (window.innerWidth <= 1000) {
      setCartOpen(true);
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCart();
  }

  function updateCart() {
    localStorage.setItem("ezCart", JSON.stringify(cart));
    renderCart();
    
    const badge = document.getElementById("cartBadge");
    if (badge) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? "flex" : "none";
    }
  }

  function renderCart() {
    cartItemsEl.innerHTML = "";
    if (cart.length === 0) {
      cartItemsEl.innerHTML = '<div class="pos-cart-empty">' + t("posCartEmpty") + '</div>';
      subtotalValueEl.textContent = "0.000 BHD";
      return;
    }

    let subtotal = 0;
    cart.forEach(item => {
      subtotal += item.unitPrice * item.quantity;
      const div = document.createElement("div");
      div.className = "pos-cart-item";
      
      let html = '<img class="pos-cart-item-img" src="' + (item.preview || '/assets/placeholder.png') + '" onerror="this.src=\\'/assets/placeholder.png\\'">';
      html += '<div class="pos-cart-item-info">';
      html += '<div class="pos-cart-item-name">' + item.name + '</div>';
      html += '<div class="pos-cart-item-price">BHD ' + item.unitPrice.toFixed(3) + '</div>';
      html += '</div>';
      html += '<div class="pos-cart-item-ctrl">';
      html += '<button class="qty-minus">-</button>';
      html += '<span class="pos-cart-item-qty">' + item.quantity + '</span>';
      html += '<button class="qty-plus">+</button>';
      html += '</div>';
      
      div.innerHTML = html;
      div.querySelector(".qty-minus").onclick = () => {
        if (item.quantity > 1) { item.quantity--; updateCart(); }
        else { removeFromCart(item.id); }
      };
      div.querySelector(".qty-plus").onclick = () => { item.quantity++; updateCart(); };
      
      cartItemsEl.appendChild(div);
    });
    
    subtotalValueEl.textContent = subtotal.toFixed(3) + " BHD";
  }

  // --- Event Listeners ---
  
  // Search & Filter with debounce
  let searchTimeout;
  document.getElementById("posSearch").oninput = (e) => {
    clearTimeout(searchTimeout);
    searchQuery = e.target.value;
    searchTimeout = setTimeout(() => {
      filterAndRender();
    }, 300);
  };
  document.getElementById("filterInStock").onchange = (e) => {
    showInStockOnly = e.target.checked;
    filterAndRender();
  };

  // Cart Actions
  document.getElementById("clearCart").onclick = () => {
    cart = [];
    updateCart();
  };
  document.getElementById("posCheckout").onclick = () => {
    if (cart.length > 0) window.location.href = "/checkout";
  };
  document.getElementById("cartToggle").onclick = () => setCartOpen(true);
  document.getElementById("closeCart").onclick = () => setCartOpen(false);

  // Mobile Nav Toggles
  document.querySelector(".nav-menu-btn").onclick = () => setMobileNavOpen(true);
  document.getElementById("mobileNavOverlay").onclick = () => setMobileNavOpen(false);
  document.getElementById("mobileNavDrawer").querySelectorAll("a").forEach(a => {
    a.onclick = () => setMobileNavOpen(false);
  });

  // Language & Theme Toggles
  const handleLangToggle = () => {
    navLang = navLang === "ar" ? "en" : "ar";
    localStorage.setItem("ez_lang", navLang);
    location.reload();
  };
  document.getElementById("langToggle").onclick = handleLangToggle;
  document.getElementById("mobileLangToggle").onclick = handleLangToggle;
  
  document.getElementById("themeToggle").onclick = toggleTheme;
  document.getElementById("mobileThemeToggle").onclick = toggleTheme;

  // Initialize
  applyTranslations();
  applyTheme();
  loadItems();
  updateCart(); // Initial badge & items
`;function i(){return e.useEffect(()=>{const t=document.createElement("script");return t.textContent=n,document.body.appendChild(t),()=>{document.body.removeChild(t)}},[]),a.jsx("div",{dangerouslySetInnerHTML:{__html:o}})}export{i as default};
