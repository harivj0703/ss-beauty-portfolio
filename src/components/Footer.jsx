import React from 'react';
import { ArrowUp, Instagram, MessageCircle, MapPin, Heart } from 'lucide-react';
import { BUSINESS_CONFIG, generateWhatsAppBookingUrl } from '../config/business';

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
    const url = generateWhatsAppBookingUrl({
      message: "Hello Silambarasi, I would like to inquire about SS Beauty Parlour."
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-espresso text-ivory pt-16 pb-12 border-t border-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold bg-gold/15 flex items-center justify-center font-display font-semibold text-lg text-gold">
                SS
              </div>
              <div>
                <span className="font-display font-semibold text-lg tracking-widest uppercase text-ivory">
                  SS Beauty Parlour
                </span>
                <span className="block text-[10px] uppercase font-sans tracking-widest text-gold font-medium">
                  Silambarasi · Artistry
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-ivory/80 max-w-sm">
              "{BUSINESS_CONFIG.tagline}"
            </p>

            <p className="text-xs text-white/60 font-sans font-light leading-relaxed max-w-md">
              Specialized in professional South Indian bridal makeup, muhurtham styling, high-definition makeup, and personalized beauty experiences.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SS Beauty Parlour on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-espresso transition-colors flex items-center justify-center text-ivory"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={openWhatsApp}
                aria-label="Chat with Silambarasi on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center text-ivory"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans font-light">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Silambarasi', href: '#about' },
                { name: 'Makeup Portfolio', href: '#portfolio' },
                { name: 'Beauty Services', href: '#services' },
                { name: 'Transformations', href: '#transformations' },
                { name: 'Appointment & Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/70 hover:text-gold transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Locations (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold">
              Primary Locations
            </h4>
            <div className="space-y-2 text-xs font-sans text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white/90">Thiruvannamalai</div>
                  <div className="text-[11px] text-white/50">Tamil Nadu, India</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white/90">Chengam</div>
                  <div className="text-[11px] text-white/50">Tamil Nadu, India</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gold/80 italic font-serif">
                Available for on-location wedding and reception appointments.
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-gold hover:text-espresso text-white/80 transition-all text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
