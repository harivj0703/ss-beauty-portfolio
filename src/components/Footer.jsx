import React from 'react';
import { ArrowUp, Instagram, MessageCircle, MapPin, Phone, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, getGeneralWhatsAppUrl } from '../config/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const url = getGeneralWhatsAppUrl(
      "Hello Silambarasi, I would like to inquire about booking an appointment with SS Beauty Parlour."
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-b from-[#38232C] to-[#25151D] text-warmwhite pt-20 pb-12 rounded-t-[3rem] relative shadow-2xl overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-burgundy to-rose-burgundy flex items-center justify-center font-display font-semibold text-lg text-warmwhite shadow-sm">
                SS
              </div>
              <div>
                <span className="font-display font-semibold text-lg tracking-widest uppercase text-warmwhite">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="block text-[10px] uppercase font-sans tracking-widest text-rose-soft font-semibold">
                  Silambarasi · Artistry
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-rose-soft max-w-sm">
              "{BUSINESS_CONFIG.tagline}"
            </p>

            <p className="text-xs text-white/70 font-sans font-light leading-relaxed max-w-md">
              Specialized in South Indian traditional Muhurtham bridal artistry, contemporary evening reception glam, HD makeup, and personalized styling across Thiruvannamalai & Chengam.
            </p>

            {/* Quick Contact Action Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {/* WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                aria-label="Chat with Silambarasi on WhatsApp"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-white transition-all text-xs font-sans font-semibold border border-[#25D366]/40 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              {/* Direct Call Button */}
              <a
                href={BUSINESS_CONFIG.contact.callUrl}
                aria-label="Call SS Beauty Parlour"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-rose-burgundy hover:text-white transition-colors text-xs font-sans font-semibold text-warmwhite shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-rose-soft" />
                <span>Call Now</span>
              </a>

              {/* Instagram Button */}
              <a
                href={BUSINESS_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SS Beauty Parlour on Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-rose-500 hover:text-white transition-all text-xs font-sans font-semibold text-warmwhite shadow-xs"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-soft" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-rose-soft">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans font-light">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Silambarasi', href: '#about' },
                { name: 'Portfolio Gallery', href: '#portfolio' },
                { name: 'Transformations', href: '#transformations' },
                { name: 'Beauty Services', href: '#services' },
                { name: 'Reservations & Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/70 hover:text-rose-soft transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Locations & Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-rose-soft">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-sans text-white/70">
              {/* WhatsApp / Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">WhatsApp</div>
                  <a
                    href={BUSINESS_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-[#25D366] transition-colors"
                  >
                    {BUSINESS_CONFIG.contact.phone}
                  </a>
                </div>
              </div>

              {/* Direct Phone Call */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-rose-soft" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">Direct Call</div>
                  <a href={BUSINESS_CONFIG.contact.callUrl} className="text-white font-medium hover:text-rose-soft transition-colors">
                    {BUSINESS_CONFIG.contact.phone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-3.5 h-3.5 text-rose-soft" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">Instagram</div>
                  <a
                    href={BUSINESS_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-rose-soft transition-colors flex items-center gap-1"
                  >
                    <span>{BUSINESS_CONFIG.contact.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-white/50" />
                  </a>
                </div>
              </div>

              {/* Service Locations */}
              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <MapPin className="w-3.5 h-3.5 text-rose-soft shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white/90">Thiruvannamalai & Chengam</div>
                  <div className="text-[11px] text-white/50">Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <div>
            © 2026 SS Beauty Parlour. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Artistry by Silambarasi</span>
            <span>·</span>
            <span>Thiruvannamalai & Chengam</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-rose-burgundy hover:text-white text-white/80 transition-all text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
