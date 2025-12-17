import React, { useEffect } from 'react';

const paymentMarkup = `
<canvas id="bgCanvas"></canvas>
<div class="top-nav">
  <div class="nav-logo">
    <a class="nav-left" href="index.html">
      <div class="nav-logo-mark"></div>
      <div class="nav-page-title">الدفع (تجريبي)</div>
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
  <div class="card" style="max-width:540px; width:100%; text-align:center;">
    <div class="card-title">الدفع (تجريبي)</div>
    <div id="paymentDetails" style="margin:10px 0; font-size:0.95rem; opacity:0.9;"></div>
    <button class="place-order-btn" id="payNowBtn" type="button">Pay Now</button>
    <div id="paymentStatus" style="margin-top:12px; font-size:0.9rem; opacity:0.85;"></div>
  </div>
</div>
`;

const paymentScript = `
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

  const orderDraftRaw = localStorage.getItem("ezOrderDraft");
  const paymentDetailsEl = document.getElementById("paymentDetails");
  const statusEl = document.getElementById("paymentStatus");
  const btn = document.getElementById("payNowBtn");

  if (!orderDraftRaw) {
    statusEl.textContent = "No order draft found. Redirecting to cart...";
    setTimeout(() => window.location.href = "/cart", 1200);
  } else {
    const draft = JSON.parse(orderDraftRaw);
    const cart = draft.cart || [];
    const total = cart.reduce((s, it) => s + (it.unitPrice * it.quantity), 0);
    paymentDetailsEl.textContent = "Amount due: " + (draft.currencyPrefix || "BHD ") + total.toFixed(2);

    btn.addEventListener("click", async () => {
      btn.disabled = true;
      statusEl.textContent = "Processing payment (demo)...";
      const succeed = (json) => {
        localStorage.setItem("ezOrderResult", JSON.stringify(json || { status: "paid_demo" }));
        statusEl.textContent = "Payment confirmed. Redirecting...";
        setTimeout(() => window.location.href = "/payment/confirmation", 500);
      };
      try {
        const res = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: orderDraftRaw
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const json = await res.json();
        succeed(json);
      } catch (err) {
        console.error("Payment demo failed; forcing success", err);
        succeed({ status: "paid_demo", payment_method: "cash" });
      }
    });
  }
`;

function PaymentPage() {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = paymentScript;
    document.body.appendChild(scriptEl);
    return () => document.body.removeChild(scriptEl);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: paymentMarkup }} />;
}

export default PaymentPage;
