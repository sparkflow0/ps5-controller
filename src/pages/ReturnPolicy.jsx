import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { i18n } from '../i18n.js';

const ReturnPolicy = () => {
    const navigate = useNavigate();
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('ez_lang') || 'ar');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
        return () => {
            document.documentElement.style.overflowY = '';
            document.body.style.overflowY = '';
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }, [currentLang]);

    useEffect(() => {
        document.body.classList.toggle('mobile-nav-open', isMobileMenuOpen);
        return () => document.body.classList.remove('mobile-nav-open');
    }, [isMobileMenuOpen]);

    const t = (key) => i18n[currentLang][key] || key;

    const toggleLang = () => {
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setCurrentLang(newLang);
        localStorage.setItem('ez_lang', newLang);
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="policy-page">
            <header className="top-nav">
                <div className="nav-left">
                    <button type="button" className="nav-left" onClick={() => navigate('/')}>
                        <span className="nav-logo-text">Fhonel Store</span>
                    </button>
                </div>
                <button
                    className="nav-menu-btn"
                    type="button"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="nav-right">
                    <button className="nav-link" type="button" onClick={() => navigate('/')}>{t('navPremade')}</button>
                    <button className="nav-link" type="button" onClick={() => navigate('/')}>{t('navContact')}</button>
                    <button className="nav-cta" type="button" onClick={() => navigate('/configurator')}>{t('navBuildCta')}</button>
                    <button className="nav-link nav-lang" type="button" onClick={toggleLang}>{currentLang === 'ar' ? 'EN' : 'AR'}</button>
                </div>
            </header>

            <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>
            <aside className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`} id="mobileNavDrawer" aria-hidden={!isMobileMenuOpen}>
                <button className="mobile-nav-link" type="button" onClick={() => { navigate('/'); closeMobileMenu(); }}>{t('navPremade')}</button>
                <button className="mobile-nav-link" type="button" onClick={() => { navigate('/'); closeMobileMenu(); }}>{t('navContact')}</button>
                <button className="mobile-nav-link mobile-nav-cta" type="button" onClick={() => { navigate('/configurator'); closeMobileMenu(); }}>{t('navBuildCta')}</button>
                <button className="mobile-nav-link mobile-nav-lang" type="button" onClick={() => { toggleLang(); closeMobileMenu(); }}>{currentLang === 'ar' ? 'EN' : 'AR'}</button>
            </aside>

            <section className="section" style={{ marginTop: '80px', minHeight: '60vh' }}>
                <div className="section-header">
                    <h1 className="section-title">{t('returnsTitle')}</h1>
                </div>
                <div className="policy-content" dangerouslySetInnerHTML={{ __html: t('returnsContent') }} />
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <button onClick={() => navigate('/privacy')} className="nav-link">{t('footerPrivacy')}</button>
                        <button onClick={() => navigate('/terms')} className="nav-link">{t('footerTerms')}</button>
                        <button onClick={() => navigate('/returns')} className="nav-link">{t('footerReturns')}</button>
                    </div>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/fhonelstore/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/fhonelstore/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                            </svg>
                        </a>
                        <a href="mailto:Fhonelstore.2022@gmail.com" className="social-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                        <a href="https://wa.me/97333699393" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span data-i18n="footerText">{t('footerText')}</span>
                    <span> {new Date().getFullYear()}</span>
                </div>
            </footer>
        </div>
    );
};

export default ReturnPolicy;
