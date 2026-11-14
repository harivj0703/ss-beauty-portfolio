import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, generateWhatsAppBookingUrl } from '../config/business';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    const url = generateWhatsAppBookingUrl({
      message: "Hello Silambarasi, I would like to book a makeup appointment."
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            {/* Elegant SS Monogram */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/60 bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-gold">
              <span className="font-display font-semibold text-lg text-gold tracking-tighter">
                SS
              </span>
              <div className="absolute inset-0 rounded-full border border-gold/30 scale-110 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-semibold text-base sm:text-lg tracking-widest text-espresso uppercase group-hover:text-gold transition-colors">
                SS Beauty Parlour
              </span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-taupe font-medium">
                Silambarasi · Artistry
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-sm font-sans font-medium text-espresso/80 hover:text-gold transition-colors py-1 tracking-wide group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              title="Chat on WhatsApp"
              className="p-2.5 rounded-full border border-gold/40 text-espresso hover:bg-gold/10 hover:border-gold transition-colors"
              aria-label="WhatsApp quick chat"
            >
              <MessageCircle className="w-4 h-4 text-espresso" />
            </button>

            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                else {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gold hover:bg-gold-dark text-white font-sans text-xs uppercase tracking-widest font-medium shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-espresso hover:text-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-espresso" />
              ) : (
                <Menu className="w-6 h-6 text-espresso" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-ivory shadow-2xl flex flex-col justify-between p-6 pt-24 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="border-b border-gold/20 pb-4">
              <span className="font-display font-medium text-xl text-espresso">
                SS Beauty Parlour
              </span>
              <p className="text-xs text-taupe mt-1">
                Silambarasi · Thiruvannamalai & Chengam
              </p>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-sans font-medium text-espresso/80 hover:text-gold transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile CTAs */}
          <div className="space-y-3 pt-6 border-t border-gold/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-sans text-xs uppercase tracking-widest font-medium text-center shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-3 rounded-full border border-emerald-600/40 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-sans text-xs uppercase tracking-widest font-medium text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
