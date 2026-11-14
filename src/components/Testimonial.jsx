import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Testimonial({ item }) {
  return (
    <div className="relative p-8 rounded-[2.25rem] bg-warmwhite border-2 border-blush/70 shadow-bubbly hover:shadow-bubbly-hover transition-all duration-300 flex flex-col justify-between text-left h-full">
      <div>
        {/* Quote mark & Star rating */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-cream-pink flex items-center justify-center">
            <Quote className="w-5 h-5 text-rose-burgundy" />
          </div>
          <div className="flex items-center gap-1 text-rose-burgundy">
            {[...Array(item.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-rose-burgundy text-rose-burgundy" />
            ))}
          </div>
        </div>

        {/* Quote content */}
        <p className="text-base font-serif italic text-burgundy leading-relaxed mb-6">
          "{item.quote}"
        </p>
      </div>

      <div className="pt-6 border-t border-blush/60">
        <div className="font-display font-medium text-base text-burgundy">
          {item.clientName}
        </div>
        <div className="flex items-center gap-2 text-xs text-espresso/70 font-sans mt-0.5">
          <span>{item.occasion}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-rose-burgundy" />
            {item.location}
          </span>
        </div>
      </div>
    </div>
  );
}
