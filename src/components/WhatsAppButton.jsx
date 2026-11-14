import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getGeneralWhatsAppUrl } from '../config/business';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const url = getGeneralWhatsAppUrl(
      "Hello SS Beauty Parlour! I would like to enquire about a makeup booking."
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden md:block transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2 pointer-events-none'
        } bg-burgundy text-warmwhite text-xs px-3.5 py-2 rounded-full shadow-lg border border-blush/40 font-sans tracking-wide`}
      >
        Chat with Silambarasi
      </div>

      {/* Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact SS Beauty Parlour on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle Pulse Ping */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60"></span>
        
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </button>
    </div>
  );
}
