import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Testimonial({ item }) {
  return (
    <div className="relative p-8 rounded-2xl bg-white/80 border border-gold/25 shadow-luxury flex flex-col justify-between text-left h-full">
      <div>
        {/* Quote mark & Star rating */}
        <div className="flex items-center justify-between mb-6">
          <Quote className="w-8 h-8 text-gold/30" />
          <div className="flex items-center gap-1 text-gold">
            {[...Array(item.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
        </div>

        {/* Quote content */}
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed mb-6">
          "{item.quote}"
        </p>
      </div>

      <div className="pt-6 border-t border-gold/15">
        <div className="font-display font-medium text-base text-espresso">
          {item.clientName}
        </div>
        <div className="flex items-center gap-2 text-xs text-taupe font-sans mt-0.5">
          <span>{item.occasion}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gold" />
            {item.location}
          </span>
        </div>
      </div>
    </div>
  );
}
