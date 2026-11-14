import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Testimonial from '../components/Testimonial';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { AlertCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F0E8DE]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CLIENT EXPERIENCES"
          title="Words From Our Beautiful Clients"
          subtitle="Real memories, radiant brides, and unforgettable moments shared with SS Beauty Parlour."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <Testimonial key={item.id} item={item} />
          ))}
        </div>

        {/* Editorial Transparency Note */}
        <div className="mt-10 max-w-2xl mx-auto p-3.5 rounded-xl bg-white/70 border border-gold/30 flex items-center justify-center gap-2 text-xs text-taupe font-sans">
          <AlertCircle className="w-4 h-4 text-gold shrink-0" />
          <span>
            <strong>Editorial Note:</strong> Demonstration testimonials shown above. Replace with genuine bride reviews in <code className="text-espresso font-mono bg-ivory px-1 py-0.5 rounded">src/data/testimonials.js</code>.
          </span>
        </div>
      </div>
    </section>
  );
}
