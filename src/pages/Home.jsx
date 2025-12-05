import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToConfigurator = () => {
    navigate('/configurator');
  };

  useEffect(() => {
    document.body.classList.add('home-page-active');
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    const FRONT_PARTS = [
      { id: 'shell', side: 'front' },
      { id: 'psButton', side: 'front' },
      { id: 'share', side: 'front' },
      { id: 'options', side: 'front' },
      { id: 'faceButtons', side: 'front' },
      { id: 'stickL', side: 'front' },
      { id: 'stickR', side: 'front' },
      { id: 'touchpad', side: 'front' },
      { id: 'bumpers', side: 'front' },
      { id: 'trimpiece', side: 'front' }
    ];

    const BACK_PARTS = [
      { id: 'backShellMain', side: 'back' },
      { id: 'backHandles', side: 'back' },
      { id: 'backTriggers', side: 'back' }
    ];

    const ALL_PARTS = [...FRONT_PARTS, ...BACK_PARTS];

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

    const SHELL_PART_IDS = new Set([
      'shell',
      'trimpiece',
      'backShellMain',
      'backHandles'
    ]);

    const SHELL_COLORS = [
      { hex: '#FF7A21', name_en: 'Orange', name_ar: 'برتقالي' },
      { hex: '#E6D63A', name_en: 'Yellow', name_ar: 'أصفر' },
      { hex: '#6ECFFF', name_en: 'Light Blue', name_ar: 'أزرق فاتح' },
      { hex: '#8E8E8E', name_en: 'Steel Gray', name_ar: 'رمادي معدني' },
      { hex: '#0C4BFF', name_en: 'Blue', name_ar: 'أزرق' },
      { hex: '#001F63', name_en: 'Midnight Blue', name_ar: 'أزرق داكن' },
      { hex: '#C2185B', name_en: 'Magenta', name_ar: 'ماجنتا' },
      { hex: '#F5F5F5', name_en: 'Soft White', name_ar: 'أبيض ناعم' },
      { hex: '#D400A8', name_en: 'Hot Pink', name_ar: 'وردي فاقع' },
      { hex: '#0A0A0A', name_en: 'Matte Black', name_ar: 'أسود مطفي' }
    ];

    const ACCESSORY_COLORS = [
      { hex: '#0A0A0A', name_en: 'Black', name_ar: 'أسود' },
      { hex: '#D8D8D8', name_en: 'Light Gray', name_ar: 'رمادي فاتح' },
      { hex: '#C41E2E', name_en: 'Red', name_ar: 'أحمر' },
      { hex: '#2B2C79', name_en: 'Dark Blue-Purple', name_ar: 'أزرق بنفسجي داكن' },
      { hex: '#F2D400', name_en: 'Yellow', name_ar: 'أصفر' },
      { hex: '#E56A1E', name_en: 'Orange', name_ar: 'برتقالي' },
      { hex: '#A6DA8C', name_en: 'Mint Green', name_ar: 'أخضر نعناعي' },
      { hex: '#4A23A8', name_en: 'Royal Purple', name_ar: 'بنفسجي ملكي' },
      { hex: '#E03875', name_en: 'Hot Pink', name_ar: 'وردي فاقع' },
      { hex: '#77CBF7', name_en: 'Sky Blue', name_ar: 'أزرق سماوي' },
      { hex: '#C75AC9', name_en: 'Pink-Violet', name_ar: 'بنفسجي وردي' },
      { hex: '#5C2DAF', name_en: 'Indigo Purple', name_ar: 'نيلي بنفسجي' },
      { hex: '#EDEDED', name_en: 'Clear Transparent', name_ar: 'شفاف' },
      { hex: '#D43838', name_en: 'Transparent Red', name_ar: 'أحمر شفاف' },
      { hex: '#2448B5', name_en: 'Transparent Blue', name_ar: 'أزرق شفاف' },
      { hex: '#68D78B', name_en: 'Transparent Green', name_ar: 'أخضر شفاف' },
      { hex: '#4E2B8C', name_en: 'Transparent Purple', name_ar: 'بنفسجي شفاف' },
      { hex: '#4A4A4A', name_en: 'Gunmetal Gray', name_ar: 'رمادي معدني داكن' },
      { hex: '#8C3B2F', name_en: 'Transparent Brown', name_ar: 'بني شفاف' },
      { hex: '#E3E3E3', name_en: 'Frosted White', name_ar: 'أبيض متجمد' }
    ];

    const TRANSPARENT_HEXES = new Set([
      '#ededed',
      '#d43838',
      '#2448b5',
      '#68d78b',
      '#4e2b8c',
      '#8c3b2f',
      '#e3e3e3'
    ]);

    const THUMB_PARTS = [
      { id: 'shell', mask: '/assets/masks/leftShell.png' },
      { id: 'trimpiece', mask: '/assets/masks/centerBody.png' },
      { id: 'faceButtons', mask: '/assets/masks/faceButtons.png' },
      { id: 'stickL', mask: '/assets/masks/stickL.png' },
      { id: 'stickR', mask: '/assets/masks/stickR.png' },
      { id: 'touchpad', mask: '/assets/masks/touchpad.png' },
      { id: 'share', mask: '/assets/masks/share.png' },
      { id: 'options', mask: '/assets/masks/options.png' },
      { id: 'psButton', mask: '/assets/masks/psButton.png' },
      { id: 'bumpers', mask: '/assets/masks/bumperL.png' }
    ];

    function getPaletteForPart(partId) {
      return SHELL_PART_IDS.has(partId) ? SHELL_COLORS : ACCESSORY_COLORS;
    }

    function randomFrom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateRandomBuild(index, lang) {
      const config = {};
      let total = 0;

      ALL_PARTS.forEach(part => {
        const palette = getPaletteForPart(part.id);
        const chosen = randomFrom(palette);
        config[part.id] = chosen;
        total += PRICES[part.id] || 0;
      });

      const baseName = lang === 'ar' ? 'ذزاع مخصص' : 'Custom Controller';

      return {
        id: index,
        name: baseName + ' #' + (index + 1),
        colors: config,
        total
      };
    }

    function formatMoneyBHD(v, lang) {
      const num = v.toFixed(2);
      return lang === 'ar' ? num + ' د.ب' : 'BHD ' + num;
    }

    const translations = {
      ar: {
        navPremade: 'تصاميم جاهزة',
        navContact: 'تواصل معنا',
        navBuildCta: 'صمّم ذراعك الآن',
        heroBadge: 'متجر إلكتروني لتخصيص أذرع التحكم',
        heroTitle: 'اصنع <span class="highlight">ذراع بلايستيشن 5</span> الخاص فيك',
        heroSub: 'اختر ألوان الهيكل والأزرار والمقابض، وابدأ بذراع فارغ أو انطلق من تصاميم EZ GAMING الجاهزة.',
        heroCreateBtn: 'ابدأ التصميم',
        heroPremadeBtn: 'استعرض التصاميم الجاهزة',
        heroNote: 'الأسعار تبدأ من <strong>4.00 دينار بحريني</strong> – بدون اشتراك، تخصيص كامل حسب ذوقك.',
        heroLiveTag: 'معاينة فورية',
        premadeTitle: 'تصاميم جاهزة من EZ GAMING',
        premadeSub: 'مجموعة من ٢٠ ذراع تحكم جاهزة تم توليدها من نفس نظام الألوان المستخدم في صفحة التخصيص، مع معاينة حقيقية لكل جزء.',
        contactTitle: 'تواصل معنا',
        contactCardTitle: 'أرسل لنا رسالة',
        contactCardText: 'عندك طلبات خاصة، كميات كبيرة، أو شراكات دعائية؟ اكتب لنا التفاصيل وسنرجع لك بأسرع وقت.',
        contactLabelName: 'الاسم',
        contactLabelEmail: 'البريد الإلكتروني',
        contactLabelMessage: 'رسالتك',
        contactSubmit: 'إرسال الرسالة',
        contactMeta: `
          <p><strong>متجر مخصص للاعبين اللي يهتمون بكل تفصيلة في أجهزتهم.</strong></p>
          <p>
          EZ GAMING متخصص في تخصيص أذرع بلايستيشن 5 بجودة عالية – مناسب للستريمرز،
          فرق الرياضات الإلكترونية، واللاعبين اللي يحبون طقم مميز يعكس هويتهم.
          </p>
          <p>نقدر نوفّر لك:</p>
          <ul>
            <li>طلبات شركات وفرق بكميات كبيرة</li>
            <li>تصاميم وألوان حصرية تحمل هوية علامتك</li>
            <li>تعاونات دعائية وجوائز للمسابقات</li>
          </ul>
          <p>اكتب لنا فكرتك، وفريقنا بيرجع لك بخيارات وأسعار خلال يوم عمل إلى يومين.</p>
        `,
        footerText: 'جميع الحقوق محفوظة ©',
        buildTotalLabel: 'الإجمالي:',
        preview: 'معاينة',
        partNames: {
          shell: 'الهيكل الأمامي',
          trimpiece: 'الجزء الأوسط',
          faceButtons: 'أزرار الأوجه',
          stickL: 'العصا اليسرى',
          stickR: 'العصا اليمنى',
          backShellMain: 'الجزء الخلفي'
        },
        formSuccess: 'شكرًا لتواصلك معنا! استلمنا رسالتك وسنرد عليك قريبًا.'
      },
      en: {
        navPremade: 'Premade controllers',
        navContact: 'Contact',
        navBuildCta: 'Build your own',
        heroBadge: 'Next-gen custom shop',
        heroTitle: 'Craft your own <span class="highlight">custom PS5 controller</span>',
        heroSub: 'Choose shell, buttons and triggers. Start from a clean build or pick one of our EZ GAMING presets.',
        heroCreateBtn: 'Create your own controller',
        heroPremadeBtn: 'Browse premade builds',
        heroNote: 'Prices start from <strong>BHD 4.00</strong>. No subscription – just fully custom gear.',
        heroLiveTag: 'Live preview',
        premadeTitle: 'Premade EZ GAMING builds',
        premadeSub: 'A curated set of 20 controllers generated from the same color system used in the configurator, with true previews for each part.',
        contactTitle: 'Contact us',
        contactCardTitle: 'Send us a message',
        contactCardText: "Questions about bulk orders, finishes, or sponsorships? Share the details and we'll get back to you.",
        contactLabelName: 'Name',
        contactLabelEmail: 'Email',
        contactLabelMessage: 'Message',
        contactSubmit: 'Send message',
        contactMeta: `
          <p><strong>A custom shop for players who care about every detail.</strong></p>
          <p>
          EZ GAMING focuses on high-end PS5 controller customization – perfect for streamers,
          esports teams, and players who want hardware that matches their identity.
          </p>
          <p>We can help you with:</p>
          <ul>
            <li>Bulk and corporate orders</li>
            <li>Exclusive colorways for your brand</li>
            <li>Marketing collaborations and giveaway campaigns</li>
          </ul>
          <p>Tell us what you have in mind and we'll reply with options and pricing within 1–2 business days.</p>
        `,
        footerText: 'All rights reserved ©',
        buildTotalLabel: 'Total:',
        preview: 'Preview',
        partNames: {
          shell: 'Shell',
          trimpiece: 'Center',
          faceButtons: 'Face buttons',
          stickL: 'Left stick',
          stickR: 'Right stick',
          backShellMain: 'Back'
        },
        formSuccess: 'Thank you! Your message has been received. We’ll get back to you shortly.'
      }
    };

    let currentLang = localStorage.getItem('ez_lang') || 'ar';

    function applyLangAttributes() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }

    function t(key) {
      return translations[currentLang][key] || key;
    }

    function applyTranslations() {
      const dict = translations[currentLang];

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
      });

      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) el.innerHTML = dict[key];
      });

      const langToggle = document.getElementById('langToggle');
      if (langToggle) langToggle.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    }

    let currentBuilds = [];

    function createBuildCard(build) {
      const dict = translations[currentLang];

      const card = document.createElement('article');
      card.className = 'build-card';

      const thumb = document.createElement('div');
      thumb.className = 'build-thumb';

      const tc = document.createElement('div');
      tc.className = 'thumb-controller';

      const base = document.createElement('div');
      base.className = 'thumb-base';
      tc.appendChild(base);

      THUMB_PARTS.forEach(p => {
        const color = build.colors[p.id];
        if (!color) return;
        const layer = document.createElement('div');
        layer.className = 'thumb-layer';
        layer.style.setProperty('--mask-url', `url('${p.mask}')`);
        layer.style.setProperty('--tint', color.hex);
        if (TRANSPARENT_HEXES.has(color.hex.toLowerCase())) {
          layer.style.setProperty('--tint-opacity', '0.35');
        } else {
          layer.style.setProperty('--tint-opacity', '1');
        }
        tc.appendChild(layer);
      });

      thumb.appendChild(tc);

      const body = document.createElement('div');
      body.className = 'build-body';

      const title = document.createElement('div');
      title.className = 'build-title';
      title.textContent = build.name;

      const price = document.createElement('div');
      price.className = 'build-price';
      price.innerHTML = formatMoneyBHD(build.total, currentLang);

      const colorsRow = document.createElement('div');
      colorsRow.className = 'build-color-row';

      const cta = document.createElement('button');
      cta.className = 'build-cta';
      cta.type = 'button';
      cta.textContent = dict.preview;
      cta.addEventListener('click', goToConfigurator);

      body.appendChild(title);
      body.appendChild(price);
      body.appendChild(colorsRow);
      body.appendChild(cta);

      card.appendChild(thumb);
      card.appendChild(body);

      return card;
    }

    function rebuildPremadeGrid() {
      const grid = document.getElementById('buildGrid');
      if (!grid) return;
      grid.innerHTML = '';

      if (!currentBuilds.length) {
        for (let i = 0; i < 20; i++) {
          currentBuilds.push(generateRandomBuild(i, currentLang));
        }
      } else {
        currentBuilds = currentBuilds.map((b, i) => generateRandomBuild(i, currentLang));
      }

      currentBuilds.forEach(b => grid.appendChild(createBuildCard(b)));
    }

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('ez_lang', lang);
      applyLangAttributes();
      applyTranslations();
      rebuildPremadeGrid();
    }

    const langToggle = document.getElementById('langToggle');
    const contactForm = document.getElementById('contactForm');

    const handleLangToggle = () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    };

    const handleContactSubmit = (e) => {
      e.preventDefault();
      alert(translations[currentLang].formSuccess);
      contactForm?.reset();
    };

    langToggle?.addEventListener('click', handleLangToggle);
    contactForm?.addEventListener('submit', handleContactSubmit);

    applyLangAttributes();
    applyTranslations();
    rebuildPremadeGrid();

    return () => {
      document.body.classList.remove('home-page-active');
      document.body.style.overflowY = '';
      document.documentElement.style.overflowY = '';
      langToggle?.removeEventListener('click', handleLangToggle);
      contactForm?.removeEventListener('submit', handleContactSubmit);
    };
  }, [navigate]);

  return (
    <div className="home-page">
      <header className="top-nav">
        <div className="nav-left">
          <button type="button" className="nav-left" onClick={() => navigate('/')}> 
            <div className="nav-logo-mark" aria-hidden="true"></div>
            <span className="sr-only">EZ GAMING</span>
          </button>
        </div>
        <div className="nav-right">
          <button className="nav-link" type="button" data-i18n="navPremade" onClick={() => scrollToSection('premadeSection')}></button>
          <button className="nav-link" type="button" data-i18n="navContact" onClick={() => scrollToSection('contactSection')}></button>
          <button className="nav-cta" type="button" data-i18n="navBuildCta" onClick={goToConfigurator}></button>
          <button className="nav-link nav-lang" id="langToggle" type="button">EN</button>
        </div>
      </header>

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/assets/back.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-inner">
          <div>
            <h1 className="hero-title" data-i18n-html="heroTitle"></h1>
            <p className="hero-sub" data-i18n="heroSub"></p>
            <div className="hero-actions">
              <button className="hero-btn primary" type="button" data-i18n="heroCreateBtn" onClick={goToConfigurator}></button>
              <button className="hero-btn secondary" type="button" data-i18n="heroPremadeBtn" onClick={() => scrollToSection('premadeSection')}></button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="premadeSection">
        <div className="section-header">
          <div>
            <div className="section-title" data-i18n="premadeTitle"></div>
          </div>
        </div>

        <div className="build-grid" id="buildGrid"></div>
      </section>

      <section className="section" id="contactSection">
        <div className="section-header">
          <div className="section-title" data-i18n="contactTitle"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3 data-i18n="contactCardTitle"></h3>
            <p data-i18n="contactCardText"></p>

            <form id="contactForm">
              <div className="contact-form-group">
                <label className="contact-label" htmlFor="name" data-i18n="contactLabelName"></label>
                <input className="contact-input" id="name" name="name" required />
              </div>
              <div className="contact-form-group">
                <label className="contact-label" htmlFor="email" data-i18n="contactLabelEmail"></label>
                <input className="contact-input" id="email" name="email" type="email" required />
              </div>
              <div className="contact-form-group">
                <label className="contact-label" htmlFor="message" data-i18n="contactLabelMessage"></label>
                <textarea className="contact-textarea" id="message" name="message" required></textarea>
              </div>
              <button className="contact-submit" type="submit" data-i18n="contactSubmit"></button>
            </form>
          </div>

          <div className="contact-meta" data-i18n-html="contactMeta"></div>
        </div>
      </section>

      <footer className="footer">
        <span data-i18n="footerText"></span>
        <span id="year"></span>
      </footer>
    </div>
  );
}

export default HomePage;
