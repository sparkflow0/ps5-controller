import React, { useEffect } from 'react';

const checkoutMarkup = `
<canvas id="bgCanvas"></canvas>
<!-- TOP NAV -->
<div class="top-nav">
<div class="nav-logo">
<a class="nav-left" href="/">
<span class="nav-logo-text">Fhonel Store</span>
<div class="nav-page-title" data-i18n="checkoutTitle">إتمام الشراء</div>
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
<div class="nav-summary">
<div class="nav-amount-block">
<div class="nav-amount-label" data-i18n="totalLabel">الإجمالي</div>
<div class="nav-amount-value" id="navTotal">د.ب 0.00</div>
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
</div>
<!-- PAGE CONTENT -->
<div class="page-content">
<div class="checkout-layout">
<!-- LEFT: FORM -->
<div class="card">
<div class="card-title" data-i18n="formTitle">بيانات العميل والدفع</div>
<form id="checkoutForm">

<!-- Personal Info -->
<div class="form-row">
<div class="form-field">
<label data-i18n="firstNameLabel" for="firstName">الاسم الأول *</label>
<input id="firstName" name="firstName" required=""/>
</div>
<div class="form-field">
<label data-i18n="lastNameLabel" for="lastName">اسم العائلة *</label>
<input id="lastName" name="lastName" required=""/>
</div>
</div>
<div class="form-row">
<div class="form-field">
<label data-i18n="phoneLabel" for="phone">رقم الهاتف *</label>
<input id="phone" name="phone" required="" type="tel"/>
</div>
<div class="form-field">
<label data-i18n="emailLabel" for="email">البريد الإلكتروني (اختياري)</label>
<input id="email" name="email" type="email"/>
</div>
</div>

<!-- Country & Shipping Options -->
<div class="form-row">
  <div class="form-field">
    <label data-i18n="countryLabel" for="country">الدولة *</label>
    <select id="country" name="country" required class="select-input">
      <!-- Options injected by JS -->
    </select>
  </div>
</div>

<!-- Bahrain Shipping Choices -->
<div class="form-field" id="bhShippingOptions" style="display:none; margin-bottom: 20px;">
    <label data-i18n="shippingMethodLabel" style="margin-bottom: 10px; display: block;">طريقة الشحن</label>
    <div class="radio-group" style="display: flex; gap: 20px;">
        <label class="radio-option">
            <input type="radio" name="shippingType" value="delivery" checked />
            <span data-i18n="shippingBahrainDelivery">توصيل (3 د.ب)</span>
        </label>
        <label class="radio-option">
            <input type="radio" name="shippingType" value="pickup" />
            <span data-i18n="shippingBahrainPickup">استلام من المتجر (مجاني)</span>
        </label>
    </div>
</div>

<!-- Address Section (Conditional) -->
<div id="addressSection">
    <div class="form-row">
        <div class="form-field">
            <label data-i18n="cityLabel" for="city">المدينة *</label>
            <input id="city" name="city" required />
        </div>
        <div class="form-field">
            <label data-i18n="addressLine1Label" for="addressLine1">العنوان *</label>
            <input id="addressLine1" name="addressLine1" required />
        </div>
    </div>
</div>

<input type="hidden" name="shippingMethod" id="shippingMethod" value="delivery" />
<input type="hidden" name="shippingCost" id="shippingCostInput" value="0" />
<input type="hidden" name="paymentMethod" value="online" />

<div class="terms-row">
<input id="agree" required="" type="checkbox"/>
<label data-i18n="termsText" for="agree">
              أقر بأن جميع بيانات التخصيص صحيحة، وأوافق على الشروط والأحكام وسياسة الاستبدال.
            </label>
</div>
<button class="place-order-btn" data-i18n="placeOrderBtn" type="submit">
            تأكيد الطلب
          </button>
</form>
</div>
<!-- RIGHT: ORDER SUMMARY -->
<div class="card">
<div class="card-title" data-i18n="summaryTitle">ملخص الطلب</div>
<div data-i18n="summaryEmpty" id="summaryEmpty" style="font-size:0.85rem; opacity:0.8; margin-bottom:8px; display:none;">
          لا توجد عناصر في السلة. يرجى العودة إلى صفحة التخصيص.
        </div>
<div class="summary-items-list" id="summaryItemsList"></div>
<hr class="summary-hr"/>
<div class="summary-row">
<div data-i18n="itemsCountLabel">عدد القطع</div>
<div id="summaryItemsCount">0</div>
</div>
<div class="summary-row">
<div data-i18n="subtotalLabel">الإجمالي الفرعي</div>
<div id="summarySubtotal">د.ب 0.00</div>
</div>
<div class="summary-row">
<div data-i18n="shippingLabel">الشحن</div>
<div id="summaryShippingCost">د.ب 0.00</div>
</div>
<div class="summary-row total">
<div data-i18n="totalDueLabel">الإجمالي المستحق (بدون رسوم الدفع)</div>
<div id="summaryTotal">د.ب 0.00</div>
</div>
</div>
</div>
</div>
`;

const checkoutScript = `
    const CART_KEY = "ezCart";
    const i18n = window.__EZ_I18N__ || {};
    let currentLang = localStorage.getItem("ez_lang") || "ar";

    // Arab Countries List
    const arabCountries = ["BH", "SA", "AE", "KW", "OM", "QA", "EG", "IQ", "JO", "LB", "PS", "YE", "SY", "SD", "DZ", "MA", "TN", "LY", "MR", "SO", "DJ", "KM"];

    function t(key) {
      return (i18n[currentLang] && i18n[currentLang][key]) || key;
    }

    function formatMoney(value) {
      const prefix = i18n[currentLang].currencyPrefix || "";
      return prefix + (Number(value) || 0).toFixed(2);
    }

    // --- UI Update Function ---
    function updateShippingUI() {
        const countrySelect = document.getElementById("country");
        const country = countrySelect.value;
        const isBahrain = country === "BH";
        
        const bhOptions = document.getElementById("bhShippingOptions");
        const addressSection = document.getElementById("addressSection");
        const cityInput = document.getElementById("city");
        const addressInput = document.getElementById("addressLine1");

        // Show/Hide Bahrain Options
        bhOptions.style.display = isBahrain ? "block" : "none";

        let shippingCost = 0;
        let requiresAddress = true;

        const { count } = computeCartTotals();

        if (isBahrain) {
            const deliveryType = document.querySelector('input[name="shippingType"]:checked').value;
            if (deliveryType === "pickup") {
                shippingCost = 0;
                requiresAddress = false;
            } else {
                shippingCost = 3.00;
                requiresAddress = true;
            }
        } else {
            // International Shipping: 5 BD for 1-2 items, +5 for each additional 2
            // 1-2 items -> 1 pair -> 5 BD
            // 3-4 items -> 2 pairs -> 10 BD
            const pairs = Math.ceil(count / 2);
            shippingCost = pairs * 5.00;
            requiresAddress = true;
        }

        // Update Address Visibility & Requirements
        if (requiresAddress) {
            addressSection.style.display = "block";
            cityInput.setAttribute("required", "required");
            addressInput.setAttribute("required", "required");
        } else {
            addressSection.style.display = "none";
            cityInput.removeAttribute("required");
            addressInput.removeAttribute("required");
            cityInput.value = ""; // Clear values if hidden
            addressInput.value = "";
        }

        // Update Hidden Inputs
        document.getElementById("shippingCostInput").value = shippingCost;
        document.getElementById("shippingMethod").value = isBahrain ? document.querySelector('input[name="shippingType"]:checked').value : "international";

        // Update Summary
        document.getElementById("summaryShippingCost").textContent = formatMoney(shippingCost);
        
        const { total } = computeCartTotals();
        const finalTotal = total + shippingCost;
        document.getElementById("summaryTotal").textContent = formatMoney(finalTotal);
    }

    function populateCountries() {
        const select = document.getElementById("country");
        select.innerHTML = "";
        
        arabCountries.forEach(code => {
            const option = document.createElement("option");
            option.value = code;
            const name = i18n[currentLang].arabCountries && i18n[currentLang].arabCountries[code] 
                         ? i18n[currentLang].arabCountries[code] 
                         : code;
            option.textContent = name;
            select.appendChild(option);
        });

        // Set default to BH
        select.value = "BH";
    }

    // --- Standard Checkout Logic ---
    
    function loadCart() {
      try {
        const raw = localStorage.getItem("ezCart");
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    const cartItems = loadCart();

    function computeCartTotals() {
      let total = 0;
      let count = 0;
      for (const item of cartItems) {
        count += item.quantity;
        total += item.unitPrice * item.quantity;
      }
      return { total, count };
    }

    function renderSummary() {
      const listEl = document.getElementById("summaryItemsList");
      const emptyEl = document.getElementById("summaryEmpty");
      
      listEl.innerHTML = "";
      if (!cartItems.length) {
        emptyEl.style.display = "block";
      } else {
        emptyEl.style.display = "none";
      }

      cartItems.forEach(item => {
        const row = document.createElement("div");
        row.className = "summary-item-row";
        const nameEl = document.createElement("div");
        nameEl.textContent = (item.name || t("productName")) + " × " + item.quantity;
        const priceEl = document.createElement("div");
        priceEl.textContent = formatMoney(item.unitPrice * item.quantity);
        row.appendChild(nameEl);
        row.appendChild(priceEl);
        listEl.appendChild(row);
      });

      const { total, count } = computeCartTotals();
      document.getElementById("navTotal").textContent = formatMoney(total);
      document.getElementById("summaryItemsCount").textContent = count;
      document.getElementById("summarySubtotal").textContent = formatMoney(total);
      
      // Trigger shipping update to set final totals
      updateShippingUI();
    }

    // --- Initialize ---

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

      // Populate countries first to ensure names are localized
      populateCountries();

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
      });

      renderSummary();
      updateShippingUI(); // Ensure UI state is correct
    }

    // Event Listeners
    const countrySelect = document.getElementById("country");
    countrySelect.addEventListener("change", updateShippingUI);

    const shippingRadios = document.querySelectorAll('input[name="shippingType"]');
    shippingRadios.forEach(radio => radio.addEventListener("change", updateShippingUI));

    // Nav Toggles
    const navLangToggle = document.getElementById("langToggle");
    const mobileLangToggle = document.getElementById("mobileLangToggle");
    
    function toggleLanguage() {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("ez_lang", currentLang);
      applyLanguage();
    }

    if (navLangToggle) navLangToggle.addEventListener("click", toggleLanguage);
    if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleLanguage);

    // Initial Load
    applyLanguage();


    // --- Form Submit ---
    const checkoutForm = document.getElementById("checkoutForm");
    checkoutForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!cartItems.length) {
        alert(t("alertNoItems"));
        return;
      }

      const formData = new FormData(checkoutForm);
      const data = Object.fromEntries(formData.entries());
      data.agree = document.getElementById("agree").checked;
      
      // Add totals
      const { total } = computeCartTotals();
      data.subtotal = total;
      data.shippingCost = Number(data.shippingCost);
      data.total = total + data.shippingCost;
      data.itemsCount = computeCartTotals().count;
      data.cart = cartItems;
      data.fullName = ((data.firstName || "") + " " + (data.lastName || "")).trim();
      
      // Address Fallback for Pickup
      if (!data.addressLine1) {
          data.addressLine1 = "Store Pickup";
          data.city = "Manama"; // Default for pickup
      }

      try {
        localStorage.setItem("ezOrderDraft", JSON.stringify(data));
        window.location.href = "/payment";
      } catch (err) {
        console.error(err);
        alert(t("paymentStartFailed"));
      }
    });
`;

function CheckoutPage() {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = checkoutScript;
    document.body.appendChild(scriptEl);
    return () => {
      if (document.body.contains(scriptEl)) document.body.removeChild(scriptEl);
    };
  }, []);

  return (
    <div className="checkout-page">
      <div dangerouslySetInnerHTML={{ __html: checkoutMarkup }} />
    </div>
  );
}

export default CheckoutPage;
