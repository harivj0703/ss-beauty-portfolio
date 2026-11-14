import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getGeneralWhatsAppUrl } from '../config/business';

export default function Navbar({ onBookClick, onReplayIntro }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    const url = getGeneralWhatsAppUrl(
      "Hello SS Beauty Parlour! I would like to enquire about a makeup booking."
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Pill Navigation Container */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Main Floating Nav Capsule */}
          <div
            className={`pointer-events-auto flex items-center justify-between w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 border ${
              isScrolled
                ? 'bg-warmwhite/90 backdrop-blur-md shadow-bubbly border-rose-dusty/30'
                : 'bg-warmwhite/80 backdrop-blur-sm shadow-sm border-blush-soft/50'
            }`}
          >
            {/* Left: Brand Monogram & Name */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              {/* Bubbly SS Monogram */}
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-burgundy to-rose-burgundy text-warmwhite shadow-sm transition-transform duration-300 group-hover:scale-105">
                <span className="font-display font-semibold text-sm sm:text-base tracking-tighter">
                  SS
                </span>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-display font-medium text-xs sm:text-sm tracking-widest text-burgundy uppercase group-hover:text-rose-burgundy transition-colors">
                  SS Beauty Parlour
                </span>
                <span className="text-[9px] uppercase font-sans tracking-widest text-rose-dusty font-semibold">
                  Silambarasi · Artistry
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium text-espresso/80 hover:text-burgundy hover:bg-cream-pink transition-all tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              {/* WhatsApp Quick Icon */}
              <button
                onClick={openWhatsApp}
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/10 text-emerald-800 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              {/* Pill Book Now Button */}
              <button
                onClick={() => {
                  if (onBookClick) onBookClick();
                  else {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-burgundy hover:bg-burgundy-rose text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold shadow-burgundy-glow hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-burgundy hover:bg-cream-pink transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-burgundy" />
                ) : (
                  <Menu className="w-5 h-5 text-burgundy" />
                )}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FFF8F6] shadow-2xl flex flex-col justify-between p-6 pt-20 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6 text-left">
            <div className="border-b border-blush pb-4">
              <span className="font-display font-medium text-xl text-burgundy">
                SS Beauty Parlour
              </span>
              <p className="text-xs text-rose-burgundy mt-0.5">
                Silambarasi · Thiruvannamalai & Chengam
              </p>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-2.5 rounded-full text-sm font-sans font-medium text-espresso/80 hover:text-burgundy hover:bg-cream-pink transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Bottom Buttons */}
          <div className="space-y-3 pt-6 border-t border-blush text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3.5 rounded-full bg-burgundy hover:bg-burgundy-rose text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book An Appointment
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={BUSINESS_CONFIG.contact.callUrl}
                className="py-3 rounded-full border border-burgundy/30 text-burgundy bg-cream-pink/50 hover:bg-cream-pink font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-burgundy" />
                Call Now
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="py-3 rounded-full border border-emerald-600/30 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-[#25D366]" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
