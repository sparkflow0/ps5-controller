import React, { useEffect } from 'react';

const configuratorMarkup = `


<canvas id="bgCanvas"></canvas>
<div class="zoho-loading-overlay" id="zohoLoadingOverlay" aria-live="polite" aria-hidden="false">
<div class="zoho-loading-card">
<div class="zoho-loading-spinner" aria-hidden="true"></div>
<div class="zoho-loading-text" data-i18n="loadingConfigurator">Loading configurator...</div>
</div>
</div>
<audio id="sfxClick" preload="auto" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="></audio>
<audio id="sfxClick2" preload="auto" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="></audio>
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="index.html" style="display:block;">
<div class="nav-logo-mark"></div>
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
</div>
</div>
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
<a class="mobile-nav-link" href="/#premadeSection" data-i18n="navPremade">تصاميم جاهزة</a>
<a class="mobile-nav-link" href="/#contactSection" data-i18n="navContact">تواصل معنا</a>
<a class="mobile-nav-link mobile-nav-cta" href="/configurator" data-i18n="navBuildCta">صمّم ذراعك الآن</a>
<button class="mobile-nav-link mobile-nav-lang" id="mobileLangToggle" type="button">EN</button>
<button class="mobile-nav-link mobile-nav-theme" id="mobileThemeToggle" type="button">فاتح</button>
</aside>
<div class="page-content">
<div class="main-layout">
<!-- CONTROLLER COLUMN (LEFT) -->
<div class="controller-column">
<div class="controller-wrapper" id="controllerWrapper">
<div class="controller-area" id="controllerArea">
<div class="controller-bg"></div>
<div class="controller-flip" id="controllerFlip">
<div class="controller-face controller-face-front" id="controllerFaceFront">
<img alt="PS5 Controller Front" src="/assets/controller.png"/>
</div>
<div class="controller-face controller-face-back" id="controllerFaceBack">
<img alt="PS5 Controller Back" src="/assets/controller_back.png"/>
</div>
</div>
</div>
<!-- buttons under the controller -->
<div class="controller-buttons-stack">
<button class="flip-toggle" id="controllerFlipBtn" type="button" aria-label="الأمام">
<span class="flip-toggle-preview" aria-hidden="true">
<img class="flip-toggle-front" alt="" src="/assets/controller.png"/>
<img class="flip-toggle-back" alt="" src="/assets/controller_back.png"/>
</span>
</button>
</div>
    <div class="mobile-panel-switch" id="mobilePanelSwitch" aria-label="تبديل لوحة الأجزاء والألوان">
      <button class="panel-switch-btn active" data-panel="options" type="button" aria-pressed="true">
        <span data-i18n="partsOptionsHeading">الخيارات</span>
      </button>
      <button class="panel-switch-btn" data-panel="colors" type="button" aria-pressed="false">
        <span data-i18n="partsColorsHeading">الألوان</span>
      </button>
    </div>
  </div>
</div>
<!-- COLORS COLUMN (MIDDLE) -->
<div class="colors-column" id="colors-column">
<div class="color-panel">
<!-- Top header: part name + options title -->
<div class="color-panel-header" id="colorPanelHeaderTop">
<div class="color-panel-title" id="colorPanelTitle">اختر جزءًا</div>
<div class="color-panel-sub" id="optionsPanelSub">الخيارات</div>
</div>
<!-- Options grid (stick type ...) -->
<div class="color-panel-grid" id="optionsPanelGrid"></div>
<!-- Bottom header: colors title -->
<div class="color-panel-header" id="colorPanelHeaderBottom">
<div class="color-panel-sub" id="colorPanelSub">الألوان</div>
</div>
<!-- Colors grid -->
<div class="color-panel-grid2" id="colorPanelGrid"></div>
<!-- Empty state (shown when no part is selected) -->
<div class="color-empty-placeholder" id="colorEmptyState">
<!-- change the image path to whatever big icon you want -->
<img alt="Select a part" src="/assets/icons/shells.png"/>
</div>
</div>
</div>
<!-- PARTS COLUMN (RIGHT) -->
<div class="parts-column">
<button class="mobile-selected-part" id="mobileSelectedPart" type="button" aria-label="Selected part">
<img alt="" src="/assets/icons/shells.png"/>
</button>
<div class="parts-panel">
<div class="mobile-options-drawer" id="mobileOptionsDrawer" aria-live="polite">
<div class="mobile-options-tabs">
<button class="mobile-options-tab" data-tab="options" data-i18n="partsOptionsHeading" type="button">الخيارات</button>
<button class="mobile-options-tab" data-tab="colors" data-i18n="partsColorsHeading" type="button">الألوان</button>
</div>
<div class="mobile-options-grid" id="mobileOptionsGrid"></div>
</div>
<div class="parts-accordion">
<div class="accordion-item open">
<button class="accordion-header" type="button">
<div class="parts-title" data-i18n="partsOptionsHeading">الخيارات</div>
<span aria-hidden="true" class="accordion-icon"></span>
</button>
<div class="accordion-content">
<div class="accordion-body">
<div class="parts-list" data-list="primary"></div>
</div>
</div>
</div>
<div class="accordion-item">
<button class="accordion-header" type="button">
<div class="parts-title" data-i18n="partsColorsHeading">الألوان</div>
<span aria-hidden="true" class="accordion-icon"></span>
</button>
<div class="accordion-content">
<div class="accordion-body">
<div class="parts-list" data-list="secondary"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="configurator-controls" id="configuratorControls" aria-label="Configurator controls">
<button class="control-btn control-colors" data-panel="colors" type="button" aria-label="الألوان">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true">
<circle cx="7" cy="9" r="3.2" fill="#ff5c7a"/>
<circle cx="16.5" cy="8.5" r="3" fill="#42a5ff"/>
<circle cx="13" cy="16" r="4" fill="#f6d743"/>
</svg>
</span>
<span class="control-label" data-i18n="partsColorsHeading">الألوان</span>
</button>
<button class="control-btn control-options active" data-panel="options" type="button" aria-label="الخيارات">
<span class="control-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
<path d="M4 7h10"/>
<path d="M4 12h16"/>
<path d="M4 17h8"/>
<circle cx="17" cy="7" r="2.2" fill="currentColor"/>
<circle cx="9" cy="17" r="2.2" fill="currentColor"/>
</svg>
</span>
<span class="control-label" data-i18n="partsOptionsHeading">الخيارات</span>
</button>
<button class="control-btn control-flip" id="flipControlBtn" data-action="flip" type="button" aria-label="الأمام">
<span class="flip-preview" aria-hidden="true">
<img class="flip-preview-front" alt="" src="/assets/controller.png"/>
<img class="flip-preview-back" alt="" src="/assets/controller_back.png"/>
</span>
</button>
<button class="control-btn control-lang" id="langSwitchBtn" type="button" aria-label="اختيار اللغة">
<span class="control-icon" aria-hidden="true">
<svg class="flag-icon flag-en" viewBox="0 0 24 16" role="img" aria-hidden="true">
<rect width="24" height="16" fill="#0a3d8f"/>
<rect x="10" width="4" height="16" fill="#ffffff"/>
<rect y="6" width="24" height="4" fill="#ffffff"/>
<rect x="11" width="2" height="16" fill="#d91c1c"/>
<rect y="7" width="24" height="2" fill="#d91c1c"/>
</svg>
<svg class="flag-icon flag-ar" viewBox="0 0 24 16" role="img" aria-hidden="true">
<rect width="24" height="16" fill="#0b7a3b"/>
<rect x="3" y="6" width="18" height="4" fill="#f4f4f4"/>
</svg>
</span>
<span class="control-label" data-i18n="chooseLanguage">EN</span>
</button>
</div>
<!-- FIXED BOTTOM BAR: total + add to cart -->
<div class="controller-bottom-bar">
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="summaryAmount">د.ب 0.00</div>
</div>
<button class="add-to-cart-btn" data-i18n="addToCart" id="addToCartBtn">
        <span class="cart-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <circle cx="9" cy="20" r="1.8"></circle>
            <circle cx="18" cy="20" r="1.8"></circle>
            <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h8.5a2 2 0 0 0 2-1.5l1.6-7.5H6.2"></path>
          </svg>
        </span>
        <span class="add-label">أضِف إلى السلة</span>
        <span class="add-amount" id="summaryAmountAlt">د.ب 0.00</span>
      </button>
</div>
</div>
<div class="part-tooltip" id="partTooltip"></div>



`;
const configuratorScript = `


    const isMobile =
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.innerWidth < 700;

    const sfxClickEl = document.getElementById("sfxClick");
    const sfxClick2El = document.getElementById("sfxClick2");

    function playSfx(el) {
      if (!el) return;
      try {
        el.currentTime = 0;
        el.play();
      } catch { }
    }
    const playClick = () => playSfx(sfxClickEl);
    const playClick2 = () => playSfx(sfxClick2El);

    const ZOHO_ACCESS_TOKEN = "${import.meta.env.VITE_ZOHO_ACCESS_TOKEN || ""}";
    const ZOHO_ORG_ID = "${import.meta.env.VITE_ZOHO_ORG_ID || ""}";
    // Always go through our proxy (rewritten in Firebase Hosting to the cloud function).
    const ZOHO_BASE = "/zoho/inventory/v1";
    const ZOHO_ITEMS_ENDPOINT = ZOHO_BASE + "/items";

    const dynamicColorsByPart = {};
    const dynamicOptionsByPart = {};
    const dynamicPricesByPart = {};
    const selectedPriceByPart = {};
    let availablePartsSet = new Set();

    function normalizeVariant(str) {
      return (str || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    }

    /* ---------- I18N ---------- */
    const i18n = window.__EZ_I18N__ || {};

    let currentLang = "ar";

    function t(key) {
      return (i18n[currentLang] && i18n[currentLang][key]) || key;
    }

    /* ---------- Controller / color configuration ---------- */

    const BASE_WIDTH = 1166;
    const BASE_HEIGHT = 768;

    const FRONT_PARTS = [
      { id: "shell", icon: "/assets/icons/shells.png", mask: "/assets/masks/leftShell.png", priority: 4, side: "front" },
      { id: "trimpiece", icon: "/assets/icons/trimpiece.png", mask: "/assets/masks/centerBody.png", priority: 1, side: "front" },
      { id: "stickL", icon: "/assets/icons/stickL.png", mask: "/assets/masks/stickL.png", priority: 3, side: "front" },
      { id: "stickR", icon: "/assets/icons/stickR.png", mask: "/assets/masks/stickR.png", priority: 3, side: "front" },
      { id: "faceButtons", icon: "/assets/icons/faceButtons.png", mask: "/assets/masks/faceButtons.png", priority: 4, side: "front" },
      { id: "touchpad", icon: "/assets/icons/touchpad.png", mask: "/assets/masks/touchpad.png", priority: 2, side: "front" },
      { id: "bumpers", icon: "/assets/icons/bumpers.png", mask: "/assets/masks/bumperL.png", priority: 2, side: "front" },
      { id: "psButton", icon: "/assets/icons/psButton.png", mask: "/assets/masks/psButton.png", priority: 1, side: "front" },
      { id: "share", icon: "/assets/icons/share.png", mask: "/assets/masks/share.png", priority: 4, side: "front" },
      { id: "options", icon: "/assets/icons/options.png", mask: "/assets/masks/options.png", priority: 4, side: "front" },
    ];

    const BACK_PARTS = [
      { id: "backShellMain", icon: "/assets/icons/backShellMain.png", mask: "/assets/masks/backShellMain.png", priority: 1, side: "back" },
      { id: "backTriggers", icon: "/assets/icons/backTriggers.png", mask: "/assets/masks/backTriggers.png", priority: 2, side: "back" }
    ];

    const ALL_PARTS = [...FRONT_PARTS, ...BACK_PARTS];

    const PART_KEYS = {
      shell: "part_shell",
      trimpiece: "part_trimpiece",
      psButton: "part_psButton",
      share: "part_share",
      options: "part_options",
      faceButtons: "part_faceButtons",
      stickL: "part_stickL",
      stickR: "part_stickR",
      touchpad: "part_touchpad",
      bumpers: "part_bumpers",
      backShellMain: "part_backShellMain",
      backHandles: "part_backHandles",
      backTriggers: "part_backTriggers"
    };

    const PART_SLUG_TO_ID = {};
    ALL_PARTS.forEach(p => {
      PART_SLUG_TO_ID[normalizeVariant(p.id)] = p.id;
    });

    function getPartLabel(partId) {
      const key = PART_KEYS[partId] || partId;
      return t(key);
    }

    const PRICES = {
      psButton: 4.0,
      share: 3.0,
      options: 3.0,
      faceButtons: 6.0,
      stickL: 5.0,
      stickR: 5.0,
      touchpad: 10.0,
      bumpers: 8.0,
      trimpiece: 12.0,
      shell: 15.0,
      backShellMain: 15.0,
      backHandles: 10.0,
      backTriggers: 8.0
    };

    const SHELL_COLORS = [
      { hex: "#FF7A21", key: "color_orange" },
      { hex: "#E6D63A", key: "color_yellow" },
      { hex: "#6ECFFF", key: "color_lightBlue" },
      { hex: "#8E8E8E", key: "color_steelGray" },
      { hex: "#0C4BFF", key: "color_blue" },
      { hex: "#001F63", key: "color_midnightBlue" },
      { hex: "#C2185B", key: "color_magenta" },
      { hex: "#F5F5F5", key: "color_softWhite" },
      { hex: "#D400A8", key: "color_hotPink_shell" },
      { hex: "#0A0A0A", key: "color_matteBlack" }
    ];

    const THUMB_OPTIONS = [
      { hex: "#6ECFFF", key: "option_tmr" },
      { hex: "#E6D63A", key: "option_halleffect" },
      { hex: "#FF7A21", key: "option_standard" }
    ];

    const ACCESSORY_COLORS = [
      { hex: "#0A0A0A", key: "color_black" },
      { hex: "#D8D8D8", key: "color_lightGray" },
      { hex: "#C41E2E", key: "color_red" },
      { hex: "#2B2C79", key: "color_darkBluePurple" },
      { hex: "#F2D400", key: "color_yellow" },
      { hex: "#E56A1E", key: "color_orange" },
      { hex: "#A6DA8C", key: "color_mintGreen" },
      { hex: "#4A23A8", key: "color_royalPurple" },
      { hex: "#E03875", key: "color_hotPink" },
      { hex: "#77CBF7", key: "color_skyBlue" },
      { hex: "#C75AC9", key: "color_pinkViolet" },
      { hex: "#5C2DAF", key: "color_indigoPurple" },
      { hex: "#EDEDED", key: "color_clear" },
      { hex: "#D43838", key: "color_transRed" },
      { hex: "#2448B5", key: "color_transBlue" },
      { hex: "#68D78B", key: "color_transGreen" },
      { hex: "#4E2B8C", key: "color_transPurple" },
      { hex: "#4A4A4A", key: "color_gunmetal" },
      { hex: "#8C3B2F", key: "color_transBrown" },
      { hex: "#E3E3E3", key: "color_frostedWhite" }
    ];

    const COLOR_LOOKUP = {};
    const OPTION_LOOKUP = {};

    function seedColorLookup() {
      const colorSources = [...SHELL_COLORS, ...ACCESSORY_COLORS];
      colorSources.forEach(({ hex, key }) => {
        const slugFromKey = normalizeVariant(key.replace(/^color_/, ""));
        if (slugFromKey) COLOR_LOOKUP[slugFromKey] = { hex, key };
        const labelEn = i18n.en[key];
        const slugFromLabel = normalizeVariant(labelEn);
        if (slugFromLabel) COLOR_LOOKUP[slugFromLabel] = { hex, key };
      });
    }

    function seedOptionLookup() {
      THUMB_OPTIONS.forEach(({ hex, key }) => {
        const slugFromKey = normalizeVariant(key.replace(/^option_/, ""));
        if (slugFromKey) OPTION_LOOKUP[slugFromKey] = { hex, key };
        const labelEn = i18n.en[key];
        const slugFromLabel = normalizeVariant(labelEn);
        if (slugFromLabel) OPTION_LOOKUP[slugFromLabel] = { hex, key };
      });
    }

    seedColorLookup();
    seedOptionLookup();

    const TRANSPARENT_HEXES = new Set([
      "#ededed",
      "#d43838",
      "#2448b5",
      "#68d78b",
      "#4e2b8c",
      "#8c3b2f",
      "#e3e3e3"
    ]);

    const SHELL_PART_IDS = new Set([
      "shell",
      "trimpiece",
      "backShellMain",
      "backHandles"
    ]);

    const THUMB_PART_IDS = new Set([
      "stickL",
      "stickR",
    ]);

    function getPaletteForPart(partId) {
      // Only use Zoho-provided colors; no fallback palette.
      const dynamicPalette = dynamicColorsByPart[partId];
      return Array.isArray(dynamicPalette) ? dynamicPalette : [];
    }

    function getOptionsForPart(partId) {
      // Only use Zoho-provided gamemode options; no fallback options.
      const dynamicOptions = dynamicOptionsByPart[partId];
      return Array.isArray(dynamicOptions) ? dynamicOptions : [];
    }

    function addVariantToMap(targetMap, partId, variant) {
      if (!targetMap[partId]) targetMap[partId] = [];
      const variantSlug = normalizeVariant(variant.key || "");
      const existing = targetMap[partId].find(v => normalizeVariant(v.key || "") === variantSlug);
      if (existing) {
        if (variant.price != null) existing.price = variant.price;
        if (variant.qty != null) existing.qty = variant.qty;
      } else {
        targetMap[partId].push(variant);
      }
    }

    function parseColorVariant(valueRaw) {
      const value = (valueRaw || "").trim();
      const normalized = normalizeVariant(value.replace(/^color_/, ""));
      // Hex color?
      const stripped = value.replace("#", "");
      if (/^[0-9a-f]{6}$/i.test(stripped)) {
        const hex = value.startsWith("#") ? value : "#" + value;
        return { hex, key: hex };
      }
      if (COLOR_LOOKUP[normalized]) return COLOR_LOOKUP[normalized];
      return null;
    }

    function parseOptionVariant(valueRaw) {
      const normalized = normalizeVariant(valueRaw);
      if (OPTION_LOOKUP[normalized]) return OPTION_LOOKUP[normalized];
      return null;
    }

    function recomputeAvailableParts() {
      const nextSet = new Set();
      ALL_PARTS.forEach(part => {
        const hasColors = (dynamicColorsByPart[part.id] || []).length > 0;
        const hasOptions = (dynamicOptionsByPart[part.id] || []).length > 0;
        const hasPrice = dynamicPricesByPart[part.id] != null;
        if (hasColors || hasOptions || hasPrice) nextSet.add(part.id);
      });
      availablePartsSet = nextSet;
    }

    function addPriceFallback(partId, price) {
      if (typeof price === "number" && !Number.isNaN(price) && price >= 0) {
        if (dynamicPricesByPart[partId] == null) dynamicPricesByPart[partId] = price;
      }
    }

    function getItemQty(item) {
      const candidates = [
        item.available_stock,
        item.available_quantity,
        item.availablequantity,
        item.stock_on_hand,
        item.quantity_available,
        item.quantityavailable
      ];
      for (const c of candidates) {
        const n = Number(c);
        if (!Number.isNaN(n)) return n;
      }
      return null;
    }

    function parseZohoItem(item) {
      const rawName = (item && (item.name || item.item_name)) || "";
      const normalizedName = normalizeVariant(rawName);

      // Base controller item: ps5_original_controller
      if (normalizedName === "ps5originalcontroller") {
        const basePrice = typeof item.rate === "number" ? item.rate : parseFloat(item.rate);
        if (!Number.isNaN(basePrice)) baseControllerPrice = basePrice;
        return;
      }

      const match = /^ps5_([^_]+)_([^_]+)_(.+)$/i.exec(rawName.trim());
      if (!match) return;
      const partSlug = normalizeVariant(match[1]);
      const typeSlug = normalizeVariant(match[2]);
      const valueRaw = match[3];
      const partId = PART_SLUG_TO_ID[partSlug];
      if (!partId) return;
      const price = typeof item.rate === "number" ? item.rate : parseFloat(item.rate);
      const qty = getItemQty(item);

      if (typeSlug === "gamemode") {
        const opt = parseOptionVariant(valueRaw);
        if (!opt) return;
        addVariantToMap(dynamicOptionsByPart, partId, { ...opt, price, qty });
        addPriceFallback(partId, price);
        return;
      }

      if (typeSlug === "color") {
        const col = parseColorVariant(valueRaw);
        if (!col) return;
        addVariantToMap(dynamicColorsByPart, partId, { ...col, price, qty });
        addPriceFallback(partId, price);
        return;
      }
    }

    async function fetchZohoItems() {

      const perPage = 200;
      const maxPages = 10; // safety cap to avoid runaway loops
      const allItems = [];

      for (let page = 1; page <= maxPages; page++) {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("per_page", String(perPage));
        if (ZOHO_ORG_ID) {
          params.set("organization_id", ZOHO_ORG_ID);
        }
        const url = ZOHO_ITEMS_ENDPOINT + "?" + params.toString();
        console.log("[Zoho Debug] Fetching items page", page, "from:", url);
        try {
          const headers = {};
          if (ZOHO_ACCESS_TOKEN) {
            headers.Authorization = "Zoho-oauthtoken " + ZOHO_ACCESS_TOKEN;
          }
          const res = await fetch(url, Object.keys(headers).length ? { headers } : undefined);
          if (!res.ok) {
            let body = "";
            try { body = await res.text(); } catch { /* ignore */ }
            console.error("[Zoho Debug] Response body:", body);
            throw new Error("HTTP " + res.status + (body ? (": " + body) : ""));
          }
          const data = await res.json();
          const items = (data && Array.isArray(data.items)) ? data.items.filter(it => {
            const status = (it.status || it.item_status || "").toLowerCase();
            return status === "" || status === "active";
          }) : [];
          allItems.push(...items);
          console.log("[Zoho Debug] Page", page, "items:", items.length, "Total so far:", allItems.length);
          if (items.length < perPage) break;
        } catch (err) {
          console.error("[Zoho] Failed to fetch items", err);
          break;
        }
      }
      return allItems;
    }

    function logZohoSummary(items) {
      const sample = items.map(it => ({
        name: it.name || it.item_name,
        id: it.item_id || it.itemid || "n/a"
      }));
      console.log("[Zoho Debug] Items fetched:", items.length, "Names/ids:", sample);
    }

    async function bootstrapZohoInventory() {
      setZohoLoading(true);
      try {
        const items = await fetchZohoItems();
        if (!items.length) return;
        items.forEach(parseZohoItem);
        Object.keys(configState).forEach(pid => {
          const val = configState[pid];
          if (!val) return;
          const hasOptionMatch = (dynamicOptionsByPart[pid] || []).some(entry => (entry.hex || "").toLowerCase() === (val || "").toLowerCase());
          setPartPrice(pid, val, hasOptionMatch);
        });
        recomputeAvailableParts();
        logZohoSummary(items);
        buildPartsList();
        if (selectedPartId) {
          const selPartObj = ALL_PARTS.find(p => p.id === selectedPartId);
          if (!selPartObj || !isPartActive(selPartObj)) {
            clearSelection();
            resetColorPanel();
            resetOptionsPanel();
          }
        }
        if (selectedPartId) {
          openColorPanelForPart(selectedPartId);
        }
        updateSummary();
      } finally {
        setZohoLoading(false);
      }
    }

    const controllerWrapper = document.getElementById("controllerWrapper");
    const controllerArea = document.getElementById("controllerArea");
    const faceFrontEl = document.getElementById("controllerFaceFront");
    const faceBackEl = document.getElementById("controllerFaceBack");

    const controllerFlipBtn = document.getElementById("controllerFlipBtn");
    //const previewBtn = document.getElementById("previewBtn");

    const summaryAmountEl = document.getElementById("summaryAmount");
    const addToCartBtn = document.getElementById("addToCartBtn");
    const addToCartHome = addToCartBtn ? { parent: addToCartBtn.parentElement, next: addToCartBtn.nextSibling } : null;

    const colorPanelTitle = document.getElementById("colorPanelTitle");
    const colorPanelSub = document.getElementById("colorPanelSub");
    const optionsPanelSub = document.getElementById("optionsPanelSub");
    const colorPanelGrid = document.getElementById("colorPanelGrid");       // colors grid
    const optionsPanelGrid = document.getElementById("optionsPanelGrid");   // options grid
    const colorPanelHeaderTop = document.getElementById("colorPanelHeaderTop");
    const colorPanelHeaderBottom = document.getElementById("colorPanelHeaderBottom");
    const colorEmptyState = document.getElementById("colorEmptyState");

    const partsLists = Array.from(document.querySelectorAll(".parts-list"));
    const primaryList = document.querySelector('.parts-list[data-list="primary"]');
    const secondaryList = document.querySelector('.parts-list[data-list="secondary"]');
    const accordionItems = Array.from(document.querySelectorAll(".accordion-item"));
    const partTooltip = document.getElementById("partTooltip");

    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    const themeToggle = document.getElementById("themeToggle");
    const mobileThemeToggle = document.getElementById("mobileThemeToggle");
    const navMenuBtn = document.querySelector(".nav-menu-btn");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileNavDrawer = document.getElementById("mobileNavDrawer");
    const langSwitchBtn = document.getElementById("langSwitchBtn");
    const configuratorControls = document.getElementById("configuratorControls");
    const panelButtons = configuratorControls ? configuratorControls.querySelectorAll("[data-panel]") : [];
    const panelSwitchButtons = document.querySelectorAll(".panel-switch-btn");
    const flipControlBtn = document.getElementById("flipControlBtn");
    const zohoLoadingOverlay = document.getElementById("zohoLoadingOverlay");
    const mobileOptionsDrawer = document.getElementById("mobileOptionsDrawer");
    const mobileOptionsGrid = document.getElementById("mobileOptionsGrid");
    const mobileOptionsTabs = mobileOptionsDrawer ? mobileOptionsDrawer.querySelectorAll(".mobile-options-tab") : [];
    const mobileSelectedPart = document.getElementById("mobileSelectedPart");
    const mobileSelectedPartImg = mobileSelectedPart ? mobileSelectedPart.querySelector("img") : null;
    const mobileQuery = window.matchMedia("(max-width: 900px)");
    let currentPanel = "options";
    let mobileDrawerOptions = [];
    let mobileDrawerColors = [];
    let showMobileDrawer = false;

    const layers = {};
    const maskDataById = {};
    let masksReady = false;
    let currentSide = "front";
    let selectedPartId = null;
    let selectionPaletteMode = null; // "options" or "colors"
    let baseControllerPrice = 0;
    let hoverPartId = null;
    let tooltipVisible = false;

    const partsRowsById = {};
    const configState = {};
    ALL_PARTS.forEach(p => { configState[p.id] = null; });

    function setZohoLoading(isLoading) {
      if (!zohoLoadingOverlay) return;
      zohoLoadingOverlay.classList.toggle("is-hidden", !isLoading);
      zohoLoadingOverlay.setAttribute("aria-hidden", isLoading ? "false" : "true");
    }

    function setPanel(panel) {
      currentPanel = panel;
      const mobile = isMobileLayout();
      selectionPaletteMode = mobile ? null : panel;

      document.body.classList.toggle("config-panel-options", panel === "options");
      document.body.classList.toggle("config-panel-colors", panel === "colors");

      panelButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.panel === panel);
        btn.setAttribute("aria-pressed", btn.dataset.panel === panel ? "true" : "false");
      });
      panelSwitchButtons.forEach(btn => {
        const isActive = btn.dataset.panel === panel;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      if (!mobile && accordionItems.length >= 2) {
        accordionItems.forEach((item, idx) => {
          const isOptions = panel === "options";
          item.classList.toggle("open", isOptions ? idx === 0 : idx === 1);
        });
        refreshAccordionHeights();
      }

      if (selectedPartId) {
        openColorPanelForPart(selectedPartId);
      }
      if (mobile) {
        setMobileDrawerVisible(false);
      }
    }

    function isMobileLayout() {
      return mobileQuery && mobileQuery.matches;
    }

    function disableMobilePanels() {
      document.body.classList.remove("config-panel-options", "config-panel-colors");
      selectionPaletteMode = null;
      panelButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      setMobileDrawerVisible(false);
    }

    function setMobileActionBar(isMobile) {
      if (!addToCartBtn || !addToCartHome) return;
      if (addToCartBtn.parentElement !== addToCartHome.parent) {
        if (addToCartHome.next && addToCartHome.next.parentNode === addToCartHome.parent) {
          addToCartHome.parent.insertBefore(addToCartBtn, addToCartHome.next);
        } else {
          addToCartHome.parent.appendChild(addToCartBtn);
        }
      }
    }

    function setMobileDrawerTab(tab) {
      selectionPaletteMode = tab;
      updateMobileOptionsDrawer();
    }

    function setMobileDrawerVisible(visible) {
      showMobileDrawer = visible;
      document.body.classList.toggle("mobile-options-open", visible);
      updateMobileOptionsDrawer();
    }

    function updateMobileSelectedPartBadge() {
      if (!mobileSelectedPart || !mobileSelectedPartImg) return;
      mobileSelectedPart.style.display = "none";
    }

    if (mobileOptionsDrawer) {
      mobileOptionsDrawer.addEventListener("click", (e) => {
        if (!isMobileLayout()) return;
        const btn = e.target.closest(".mobile-options-tab");
        if (!btn || btn.disabled) return;
        const tab = btn.dataset.tab;
        if (tab) setMobileDrawerTab(tab);
      });
    }

    if (mobileSelectedPart) {
      mobileSelectedPart.addEventListener("click", () => {
        if (!isMobileLayout() || !selectedPartId) return;
        setMobileDrawerVisible(true);
        openColorPanelForPart(selectedPartId);
      });
    }

    panelSwitchButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const panel = btn.dataset.panel;
        if (!panel) return;
        setPanel(panel);
      });
    });

    if (configuratorControls) {
      configuratorControls.addEventListener("click", (e) => {
        if (!isMobileLayout()) return;
        const btn = e.target.closest(".control-btn");
        if (!btn) return;
        if (btn.id === "langSwitchBtn") {
          currentLang = currentLang === "ar" ? "en" : "ar";
          applyLanguage();
          return;
        }
        if (btn.dataset.action === "flip") {
          setSide(currentSide === "front" ? "back" : "front");
          playClick();
          return;
        }
        const panel = btn.dataset.panel;
        if (panel) setPanel(panel);
      });

      if (isMobileLayout()) {
        setPanel(currentPanel);
        setMobileActionBar(true);
      } else {
        disableMobilePanels();
        setMobileActionBar(false);
      }

      if (mobileQuery && mobileQuery.addEventListener) {
        mobileQuery.addEventListener("change", (e) => {
          if (e.matches) {
            setPanel(currentPanel);
            setMobileActionBar(true);
          } else {
            disableMobilePanels();
            setMobileActionBar(false);
          }
        });
      } else if (mobileQuery && mobileQuery.addListener) {
        mobileQuery.addListener((e) => {
          if (e.matches) {
            setPanel(currentPanel);
            setMobileActionBar(true);
          } else {
            disableMobilePanels();
            setMobileActionBar(false);
          }
        });
      }
    }

    function updateNavLangLabel() {
      const label = currentLang === "ar" ? "EN" : "AR";
      if (navLangToggle) navLangToggle.textContent = label;
      if (mobileLangToggle) mobileLangToggle.textContent = label;
    }

    function toggleLanguage() {
      currentLang = currentLang === "ar" ? "en" : "ar";
      applyLanguage();
    }

    let currentTheme = localStorage.getItem("ez_theme") || "dark";

    function applyTheme() {
      document.body.classList.toggle("theme-light", currentTheme === "light");
    }

    function themeLabel() {
      const lightLabel = t("themeLight");
      const darkLabel = t("themeDark");
      return currentTheme === "dark" ? lightLabel : darkLabel;
    }

    function updateThemeLabel() {
      const label = themeLabel();
      if (themeToggle) themeToggle.textContent = label;
      if (mobileThemeToggle) mobileThemeToggle.textContent = label;
    }

    function toggleTheme() {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("ez_theme", currentTheme);
      applyTheme();
      updateThemeLabel();
    }

    if (navLangToggle) {
      navLangToggle.addEventListener("click", toggleLanguage);
    }

    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("click", toggleLanguage);
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener("click", toggleTheme);
    }

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

    applyTheme();
    updateThemeLabel();

    /* ----- Layers & masks ----- */

    function buildPartLayers() {
      ALL_PARTS.forEach(part => {
        const layer = document.createElement("div");
        layer.className = "part-layer";
        layer.dataset.partId = part.id;
        layer.style.setProperty("--mask-url", "url('" + part.mask + "')");
        if (part.side === "front") faceFrontEl.appendChild(layer);
        else faceBackEl.appendChild(layer);
        layers[part.id] = layer;
      });
    }
    buildPartLayers();

    function loadMask(part) {
      return new Promise(resolve => {
        const img = new Image();
        img.src = part.mask;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          maskDataById[part.id] = {
            width: canvas.width,
            height: canvas.height,
            data: imageData.data
          };
          resolve();
        };
        img.onerror = () => resolve();
      });
    }

    (async function () {
      for (const part of ALL_PARTS) await loadMask(part);
      masksReady = true;
    })();

    /* ----- Money & summary ----- */

    function formatMoney(v) {
      return i18n[currentLang].currencyPrefix + v.toFixed(2);
    }

    function hasCustomizations() {
      return Object.values(configState).some(Boolean);
    }

    function getBasePrice(partId) {
      const chosen = selectedPriceByPart[partId];
      if (typeof chosen === "number" && !Number.isNaN(chosen)) return chosen;
      const dynamic = dynamicPricesByPart[partId];
      if (typeof dynamic === "number" && !Number.isNaN(dynamic)) return dynamic;
      return PRICES[partId] || 0;
    }

    function computeTotal() {
      let tSum = baseControllerPrice || 0;
      for (const p of ALL_PARTS) {
        if (!configState[p.id]) continue;
        tSum += getBasePrice(p.id);
      }
      return tSum;
    }

    function updateSummary() {
      summaryAmountEl.textContent = formatMoney(computeTotal());
      const summaryAmountAltEl = document.getElementById("summaryAmountAlt");
      if (summaryAmountAltEl) summaryAmountAltEl.textContent = formatMoney(computeTotal());
      const navLabelEl = document.querySelector(".nav-amount-label");
      if (navLabelEl) {
        navLabelEl.textContent = hasCustomizations()
          ? "PS5 Controller (Customized)"
          : "PS5 Original Controller (No Customizations)";
      }
    }

    /* ----- Color application ----- */

    function setPartPrice(partId, variantHex, isOption) {
      const palette = isOption ? dynamicOptionsByPart[partId] : dynamicColorsByPart[partId];
      const hexLower = (variantHex || "").toLowerCase();
      const match = palette ? palette.find(entry => (entry.hex || "").toLowerCase() === hexLower) : null;
      if (match && typeof match.price === "number" && !Number.isNaN(match.price)) {
        selectedPriceByPart[partId] = match.price;
      } else if (typeof dynamicPricesByPart[partId] === "number" && !Number.isNaN(dynamicPricesByPart[partId])) {
        selectedPriceByPart[partId] = dynamicPricesByPart[partId];
      } else {
        selectedPriceByPart[partId] = PRICES[partId] || 0;
      }
    }

    function formatQtyDisplay(qty) {
      if (typeof qty !== "number" || Number.isNaN(qty)) return "";
      if (qty <= 0) return currentLang === "ar" ? "(نفدت الكمية)" : "(Out of Stock)";
      if (qty < 5) {
        if (qty === 1) return currentLang === "ar" ? "(المتبقي قطعة واحدة فقط)" : "(1 piece left)";
        return currentLang === "ar" ? "(المتبقي " + qty + " قطع)" : "(" + qty + " pieces left)";
      }
      return "";
    }

    function applyColor(partId, colorHex) {
      configState[partId] = colorHex;
      setPartPrice(partId, colorHex, false);
      const layer = layers[partId];
      if (!layer) return;
      layer.style.setProperty("--tint", colorHex);
      if (TRANSPARENT_HEXES.has(colorHex.toLowerCase())) {
        layer.style.setProperty("--tint-opacity", "0.35");
      } else {
        layer.style.setProperty("--tint-opacity", "1");
      }
      updateSummary();
    }

    function applyOptions(partId, colorHex) {
      configState[partId] = colorHex;
      setPartPrice(partId, colorHex, true);
      const layer = layers[partId];
      if (!layer) return;
      layer.style.setProperty("--tint", colorHex);
      if (TRANSPARENT_HEXES.has(colorHex.toLowerCase())) {
        layer.style.setProperty("--tint-opacity", "0.35");
      } else {
        layer.style.setProperty("--tint-opacity", "1");
      }
      updateSummary();
    }

    function clearSelection() {
      selectedPartId = null;
      selectionPaletteMode = null;
      controllerArea.classList.remove("has-selection");
      controllerArea.style.removeProperty("--selected-mask-url");
      if (isMobileLayout()) {
        setMobileDrawerVisible(false);
      }

      Object.values(layers).forEach(layer => {
        if (!layer) return;
        layer.classList.remove("selected");
      });

      Object.values(partsRowsById).forEach(rows => {
        if (!rows) return;
        rows.forEach(row => row.classList.remove("active"));
      });
    }

    function resetColorPanel() {
      colorPanelTitle.textContent = t("selectPart");
      colorPanelSub.textContent = "";
      optionsPanelSub.textContent = "";

      colorPanelGrid.innerHTML = "";
      optionsPanelGrid.innerHTML = "";

      // hide headers + grids
      colorPanelHeaderTop.style.display = "none";
      colorPanelHeaderBottom.style.display = "none";
      colorPanelGrid.style.display = "none";
      optionsPanelGrid.style.display = "none";

      // show empty placeholder
      colorEmptyState.style.display = "flex";
      mobileDrawerOptions = [];
      mobileDrawerColors = [];
      updateMobileOptionsDrawer();
      if (isMobileLayout()) {
        setMobileDrawerVisible(false);
      }
    }

    function resetOptionsPanel() {
      optionsPanelSub.textContent = "";
      optionsPanelGrid.innerHTML = "";
    }

    function buildPaletteCells(target, entries, isOption) {
      target.innerHTML = "";
      entries.forEach(({ hex, key, qty, price }) => {
        const cell = document.createElement("div");
        cell.className = isOption ? "cd-cell-op" : "cd-cell";

        const sw = document.createElement("button");
        sw.className = isOption ? "cd-swatch-op" : "cd-swatch";
        sw.style.backgroundColor = hex;
        const numericQty = typeof qty === "number" ? qty : null;
        const isOut = numericQty !== null && numericQty <= 0;
        if (isOut) {
          sw.setAttribute("disabled", "disabled");
          sw.classList.add("out-of-stock");
          sw.style.filter = "none";
          sw.style.boxShadow = "none";
        }
        sw.addEventListener("click", (e) => {
          e.stopPropagation();
          if (!selectedPartId || isOut) return;
          if (isOption) {
            applyOptions(selectedPartId, hex);
          } else {
            applyColor(selectedPartId, hex);
            playClick2();
          }
        });

        const lbl = document.createElement("div");
        lbl.className = "cd-color-name";
        lbl.style.textAlign = "center";
        const labelText = isOption ? t(key) : (key && t(key) ? t(key) : hex);
        const priceVal = typeof price === "number" ? i18n[currentLang].currencyPrefix + price.toFixed(2) : "";
        const qtyDisplay = formatQtyDisplay(numericQty);
        const lines = [labelText];
        if (priceVal) lines.push(priceVal);
        if (qtyDisplay) lines.push(qtyDisplay);
        lbl.innerHTML = lines.join("<br/>");

        cell.appendChild(sw);
        cell.appendChild(lbl);
        target.appendChild(cell);
      });
    }

    function updateMobileOptionsDrawer() {
      if (!mobileOptionsDrawer || !mobileOptionsGrid || !mobileOptionsTabs) return;
      if (!showMobileDrawer || !isMobileLayout() || !selectedPartId) {
        mobileOptionsDrawer.style.display = "none";
        updateMobileSelectedPartBadge();
        return;
      }

      const hasOptions = mobileDrawerOptions && mobileDrawerOptions.length;
      const hasColors = mobileDrawerColors && mobileDrawerColors.length;
      if (!hasOptions && !hasColors) {
        mobileOptionsDrawer.style.display = "none";
        updateMobileSelectedPartBadge();
        return;
      }

      mobileOptionsDrawer.style.display = "flex";

      let activeTab = selectionPaletteMode;
      if (activeTab !== "options" && activeTab !== "colors") {
        activeTab = hasColors ? "colors" : "options";
      }
      if (activeTab === "colors" && !hasColors) activeTab = "options";
      if (activeTab === "options" && !hasOptions) activeTab = "colors";
      selectionPaletteMode = activeTab;

      mobileOptionsTabs.forEach(btn => {
        const tab = btn.dataset.tab;
        const isOptionsTab = tab === "options";
        const enabled = isOptionsTab ? hasOptions : hasColors;
        btn.disabled = !enabled;
        btn.classList.toggle("active", tab === activeTab);
      });

      const entries = activeTab === "colors" ? mobileDrawerColors : mobileDrawerOptions;
      buildPaletteCells(mobileOptionsGrid, entries, activeTab === "options");
      updateMobileSelectedPartBadge();
    }

    /* ----- Palette panel ----- */

    function openColorPanelForPart(partId) {
      const label = getPartLabel(partId);

      // hide everything by default
      colorEmptyState.style.display = "none";
      colorPanelHeaderTop.style.display = "none";
      colorPanelHeaderBottom.style.display = "none";
      colorPanelGrid.style.display = "none";
      optionsPanelGrid.style.display = "none";

      colorPanelTitle.textContent = label;
      colorPanelSub.textContent = "";
      optionsPanelSub.textContent = "";

      colorPanelGrid.innerHTML = "";
      optionsPanelGrid.innerHTML = "";

      const palette = getPaletteForPart(partId);
      const optionspalette = getOptionsForPart(partId);

      const hasOptions = optionspalette && optionspalette.length;
      const hasColors = palette && palette.length;

      // If selectionPaletteMode is set, honor it; otherwise default to colors when available, else options.
      const mobile = isMobileLayout();
      const showOptions = mobile ? hasOptions : (selectionPaletteMode === "options" ? true : (selectionPaletteMode === "colors" ? false : (!hasColors && hasOptions)));
      const showColors = mobile ? hasColors : (selectionPaletteMode === "colors" ? true : (selectionPaletteMode === "options" ? false : hasColors));

      let renderedSomething = false;

      if (showOptions && hasOptions) {
        optionsPanelSub.style.display = "block";
        optionsPanelGrid.style.display = "grid";
        colorPanelHeaderTop.style.display = "block";
        optionsPanelSub.textContent = t("availableOptions");
        buildPaletteCells(optionsPanelGrid, optionspalette, true);
        renderedSomething = true;
      }

      if (showColors && hasColors) {
        colorPanelHeaderTop.style.display = "block";
        colorPanelHeaderBottom.style.display = "block";
        colorPanelGrid.style.display = "grid";
        colorPanelSub.textContent = t("availableColors");
        buildPaletteCells(colorPanelGrid, palette, false);
        renderedSomething = true;
      }

      mobileDrawerOptions = optionspalette || [];
      mobileDrawerColors = palette || [];
      updateMobileOptionsDrawer();

      if (!renderedSomething) {
        // show empty placeholder
        colorEmptyState.style.display = "flex";
        mobileDrawerOptions = [];
        mobileDrawerColors = [];
        updateMobileOptionsDrawer();
      }
    }

    /* ----- Side toggle ----- */

    function setSide(side) {
      if (side === currentSide) return;
      currentSide = side;

      if (currentSide === "back") controllerWrapper.classList.add("is-back");
      else controllerWrapper.classList.remove("is-back");

      updateFlipControl();

      clearSelection();
      resetColorPanel();
      resetOptionsPanel();
    }

    if (controllerFlipBtn) {
      controllerFlipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        setSide(currentSide === "front" ? "back" : "front");
        playClick();
      });
    }

    /* ----- Preview button ----- */

    // previewBtn.addEventListener("click", () => {
    //   clearSelection();
    //   resetColorPanel();
    //   playClick2();
    // });

    /* ----- Parts list ----- */

    function createPartRow(part, listType) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "parts-item";
      row.dataset.partId = part.id;
      row.dataset.side = part.side;
      row.dataset.listType = listType || "";

      const thumb = document.createElement("div");
      thumb.className = "parts-thumb";

      const img = document.createElement("img");
      img.src = part.icon || "/assets/icons/shells.png";
      img.alt = getPartLabel(part.id);
      thumb.appendChild(img);

      const nameEl = document.createElement("div");
      nameEl.className = "parts-name";
      nameEl.textContent = getPartLabel(part.id);

      row.appendChild(thumb);
      row.appendChild(nameEl);

      row.addEventListener("click", () => {
        const targetSide = part.side;
        if (currentSide !== targetSide) setSide(targetSide);

        clearSelection();

        selectedPartId = part.id;
        selectionPaletteMode = listType || null;
        controllerArea.classList.add("has-selection");
        controllerArea.style.setProperty("--selected-mask-url", "url('" + part.mask + "')");

        const layer = layers[part.id];
        if (layer) layer.classList.add("selected");

        Object.values(partsRowsById).forEach(rArr => {
          if (!rArr) return;
          rArr.forEach(r => r.classList.remove("active"));
        });
        (partsRowsById[part.id] || []).forEach(r => r.classList.add("active"));

        playClick();
        openColorPanelForPart(part.id);
        if (isMobileLayout()) {
          setMobileDrawerVisible(true);
        }
      });

      if (!partsRowsById[part.id]) partsRowsById[part.id] = [];
      partsRowsById[part.id].push(row);
      return row;
    }

    function isPartActive(part) {
      return availablePartsSet.has(part.id);
    }

    function buildPartsList() {
      partsLists.forEach(list => list.innerHTML = "");
      Object.keys(partsRowsById).forEach(k => delete partsRowsById[k]);

      const optionParts = [...FRONT_PARTS, ...BACK_PARTS].filter(p => {
        const hasGamemode = (dynamicOptionsByPart[p.id] || []).length > 0;
        return hasGamemode && isPartActive(p);
      });

      const colorOnlyParts = [...FRONT_PARTS, ...BACK_PARTS].filter(p => {
        const hasColors = (dynamicColorsByPart[p.id] || []).length > 0;
        return hasColors && isPartActive(p);
      });

      if (primaryList) {
        optionParts.forEach(p => primaryList.appendChild(createPartRow(p, "options")));
      }
      if (secondaryList) {
        colorOnlyParts.forEach(p => secondaryList.appendChild(createPartRow(p, "colors")));
      }
      refreshAccordionHeights();
    }

    /* ----- Hit testing ----- */

    function getPartsForSide(side) {
      const base = side === "back" ? BACK_PARTS : FRONT_PARTS;
      return base.filter(isPartActive);
    }

    function hitTestPart(designX, designY, side) {
      const parts = getPartsForSide(side);
      const sorted = [...parts].sort((a, b) => b.priority - a.priority);
      for (const part of sorted) {
        const mask = maskDataById[part.id];
        if (!mask) continue;
        const x = Math.floor(designX / BASE_WIDTH * mask.width);
        const y = Math.floor(designY / BASE_HEIGHT * mask.height);
        if (x < 0 || y < 0 || x >= mask.width || y >= mask.height) continue;
        const idx = (y * mask.width + x) * 4 + 3;
        const alpha = mask.data[idx];
        if (alpha > 20) return part.id;
      }
      return null;
    }

    /* ----- Controller click ----- */

    controllerArea.addEventListener("click", (e) => {
      if (!masksReady) return;
      const rect = controllerArea.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      if (relX < 0 || relX > 1 || relY < 0 || relY > 1) return;
      const designX = relX * BASE_WIDTH;
      const designY = relY * BASE_HEIGHT;
      const partId = hitTestPart(designX, designY, currentSide);
      if (!partId) return;
      const partObj = ALL_PARTS.find(p => p.id === partId);
      if (partObj && !isPartActive(partObj)) return;

      clearSelection();

      selectedPartId = partId;
      selectionPaletteMode = null;
      controllerArea.classList.add("has-selection");

      const part = ALL_PARTS.find(p => p.id === partId);
      if (part) {
        controllerArea.style.setProperty("--selected-mask-url", "url('" + part.mask + "')");
      }

      const layer = layers[partId];
      if (layer) layer.classList.add("selected");

      const rows = partsRowsById[partId] || [];
      if (rows.length) {
        Object.values(partsRowsById).forEach(rArr => {
          if (!rArr) return;
          rArr.forEach(r => r.classList.remove("active"));
        });
        rows.forEach(r => r.classList.add("active"));
      }

      playClick();
      if (!selectionPaletteMode) {
        const hasOpts = (dynamicOptionsByPart[partId] || []).length > 0;
        selectionPaletteMode = hasOpts ? "options" : "colors";
      }
      openColorPanelForPart(partId);
      if (isMobileLayout()) {
        setMobileDrawerVisible(true);
      }
    });

    /* ----- Hover tooltip (desktop only) ----- */

    controllerArea.addEventListener("mousemove", (e) => {
      if (!masksReady || isMobile) return;

      const rect = controllerArea.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      if (relX < 0 || relX > 1 || relY < 0 || relY > 1) {
        if (tooltipVisible) {
          partTooltip.classList.remove("visible");
          tooltipVisible = false;
          hoverPartId = null;
        }
        return;
      }

      const designX = relX * BASE_WIDTH;
      const designY = relY * BASE_HEIGHT;
      const partId = hitTestPart(designX, designY, currentSide);

      if (!partId) {
        if (tooltipVisible) {
          partTooltip.classList.remove("visible");
          tooltipVisible = false;
          hoverPartId = null;
        }
        return;
      }

      const label = getPartLabel(partId);
      partTooltip.textContent = label;
      partTooltip.style.left = e.clientX + "px";
      partTooltip.style.top = e.clientY + "px";

      if (!tooltipVisible || hoverPartId !== partId) {
        hoverPartId = partId;
        partTooltip.classList.add("visible");
        tooltipVisible = true;
      }
    });

    controllerArea.addEventListener("mouseleave", () => {
      if (tooltipVisible) {
        partTooltip.classList.remove("visible");
        tooltipVisible = false;
        hoverPartId = null;
      }
    });

    /* ----- Click outside → clear selection + color drawer ----- */

    document.addEventListener("click", (e) => {
      const clickInsideController = controllerArea.contains(e.target);

      const clickInsideColors =
        colorPanelGrid.contains(e.target) ||
        optionsPanelGrid.contains(e.target) ||
        colorPanelHeaderTop.contains(e.target) ||
        colorPanelHeaderBottom.contains(e.target) ||
        colorEmptyState.contains(e.target);

      const clickInsideParts = partsLists.some(list => list.contains(e.target));
      const clickInsideSideToggle = controllerFlipBtn ? controllerFlipBtn.contains(e.target) : false;
      const clickInsideNav = document.querySelector(".top-nav").contains(e.target);

      if (
        !clickInsideController &&
        !clickInsideColors &&
        !clickInsideParts &&
        !clickInsideSideToggle &&
        !clickInsideNav
      ) {
        clearSelection();
        resetColorPanel();
        resetOptionsPanel();
        // const colorsColumn = document.getElementById("colors-column");
        // colorsColumn.style.display = "none";
      }
    });

    /* ----- Add to cart button (with localStorage + redirect to cart) ----- */

    const CART_KEY = "ezCart";

    function buildConfigSnapshot() {
      const snapshot = {};
      for (const partId in configState) {
        if (Object.prototype.hasOwnProperty.call(configState, partId)) {
          snapshot[partId] = configState[partId];
        }
      }
      return snapshot;
    }

    function loadCart() {
      try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    function saveCart(items) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }

    addToCartBtn.addEventListener("click", () => {
      const total = computeTotal();
      if (total <= 0) {
        alert(t("alertNone"));
        return;
      }

      const cartItems = loadCart();
      const snapshot = buildConfigSnapshot();
      const hasCustom = hasCustomizations();
      const cartName = hasCustom
        ? "PS5 Controller (Customized)"
        : "PS5 Original Controller (No Customizations)";

      // Build a richer SVG preview for the sales order (controller + colored markers)
      function buildPreviewSvg(config) {
        const entries = Object.entries(config || {}).filter(([, val]) => val);
        const width = 500;
        const height = 300;
        const partPos = {
          stickL: { x: 220, y: 200 },
          stickR: { x: 320, y: 210 },
          faceButtons: { x: 400, y: 160 },
          touchpad: { x: 260, y: 120 },
          shell: { x: 260, y: 150 },
          trimpiece: { x: 260, y: 180 },
          bumpers: { x: 260, y: 90 },
          psButton: { x: 260, y: 210 },
          backShellMain: { x: 260, y: 150 },
          backTriggers: { x: 260, y: 110 }
        };
        const dots = entries.map(([part, hex]) => {
          const pos = partPos[part] || { x: width / 2, y: height / 2 };
          const fill = typeof hex === "string" ? hex : (hex && hex.hex) || "#444";
          return (
            '<g><circle cx="' + pos.x + '" cy="' + pos.y + '" r="18" fill="' + fill + '" opacity="0.85" />' +
            "</g>"
          );
        }).join("");
        const ctrl = document.querySelector(".controller-face-front img");
        const ctrlSrc = (ctrl && ctrl.src) || "/assets/controller.png";
        const svg =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + " " + height + '" style="background:#0b0b0f">' +
          '<image href="' + ctrlSrc + '" x="10" y="20" width="480" height="260" preserveAspectRatio="xMidYMid meet" opacity="0.9"/>' +
          dots +
          "</svg>";
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
      }

      const preview = hasCustom ? buildPreviewSvg(snapshot) : null;

      const cartItem = {
        id: Date.now(),
        name: cartName,
        unitPrice: total,
        quantity: 1,
        config: snapshot,
        preview
      };

      cartItems.push(cartItem);
      saveCart(cartItems);

      window.location.href = "/cart";
    });

    /* ----- Apply language to UI ----- */

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

      if (currentLang === "ar") {
        document.body.style.fontFamily = "'Cairo', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      } else {
        document.body.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      }

      const logoEl = document.querySelector("[data-i18n='logo']");
      if (logoEl) logoEl.textContent = t("logo");

      const totalLabelEl = document.querySelector("[data-i18n='totalLabel']");
      if (totalLabelEl) totalLabelEl.textContent = t("totalLabel");

      const addToCartTextEl = document.querySelector("[data-i18n='addToCart']");
      if (addToCartTextEl) {
        const labelEl = addToCartTextEl.querySelector(".add-label");
        if (labelEl) labelEl.textContent = t("addToCart");
        else addToCartTextEl.textContent = t("addToCart");
      }

      const loadingTextEl = document.querySelector("[data-i18n='loadingConfigurator']");
      if (loadingTextEl) loadingTextEl.textContent = t("loadingConfigurator");

      document.querySelectorAll("[data-i18n='navPremade']").forEach(el => {
        el.textContent = t("navPremade");
      });
      document.querySelectorAll("[data-i18n='navContact']").forEach(el => {
        el.textContent = t("navContact");
      });
      document.querySelectorAll("[data-i18n='navBuildCta']").forEach(el => {
        el.textContent = t("navBuildCta");
      });

      if (langSwitchBtn) {
        const labelEl = langSwitchBtn.querySelector("[data-i18n='chooseLanguage']");
        const targetLang = currentLang === "ar" ? "en" : "ar";
        if (labelEl) labelEl.textContent = targetLang.toUpperCase();
        else langSwitchBtn.textContent = targetLang.toUpperCase();
        langSwitchBtn.dataset.lang = currentLang === "ar" ? "en" : "ar";
        langSwitchBtn.setAttribute("aria-label", t("chooseLanguage"));
      }
      document.querySelectorAll("[data-i18n='partsOptionsHeading']").forEach(el => {
        el.textContent = t("availableOptions");
      });
      document.querySelectorAll("[data-i18n='partsColorsHeading']").forEach(el => {
        el.textContent = t("availableColors");
      });

      // const previewBtnEl = document.getElementById("previewBtn");
      // if (previewBtnEl) previewBtnEl.textContent = t("preview");

      updateNavLangLabel();
      updateThemeLabel();
      updateFlipControl();

      buildPartsList();

      if (selectedPartId) {
        controllerArea.classList.add("has-selection");
        const part = ALL_PARTS.find(p => p.id === selectedPartId);
        if (part) {
          controllerArea.style.setProperty("--selected-mask-url", 'url(' + part.mask + ')');
        }

        const rows = partsRowsById[selectedPartId] || [];
        rows.forEach(row => row.classList.add("active"));
        const layer = layers[selectedPartId];
        if (layer) layer.classList.add("selected");
        openColorPanelForPart(selectedPartId);
      } else {
        controllerArea.classList.remove("has-selection");
        controllerArea.style.removeProperty("--selected-mask-url");
        resetColorPanel();
        resetOptionsPanel();

      }

      updateSummary();
    }

    function updateFlipControl() {
      const label = currentSide === "front" ? t("front") : t("back");
      if (flipControlBtn) {
        flipControlBtn.setAttribute("aria-label", label);
        flipControlBtn.classList.toggle("is-back", currentSide === "back");
      }
      if (controllerFlipBtn) {
        controllerFlipBtn.setAttribute("aria-label", label);
        controllerFlipBtn.classList.toggle("is-back", currentSide === "back");
      }
    }

    function refreshAccordionHeights() {
      accordionItems.forEach(item => {
        const content = item.querySelector(".accordion-content");
        if (!content) return;
        if (item.classList.contains("open")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      });
    }

    accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
      if (!header || !content) return;
      header.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.classList.toggle("open", !isOpen);
        refreshAccordionHeights();
      });
    });

    window.addEventListener("resize", refreshAccordionHeights);

    // Initial language application
    applyLanguage();
    bootstrapZohoInventory();
    refreshAccordionHeights();
  

`;

function ConfiguratorPage() {
  useEffect(() => {
    document.body.classList.add('configurator-page-active');
    const scriptEl = document.createElement('script');
    scriptEl.textContent = configuratorScript;
    document.body.appendChild(scriptEl);
    return () => {
      document.body.classList.remove('configurator-page-active');
      document.body.removeChild(scriptEl);
    };
  }, []);

  return (
    <div className="configurator-page">
      <div dangerouslySetInnerHTML={{ __html: configuratorMarkup }} />
    </div>
  );
}

export default ConfiguratorPage;
