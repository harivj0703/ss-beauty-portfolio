import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Testimonial from '../components/Testimonial';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { AlertCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC]/40 to-[#FFF8F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CLIENT LOVE"
          title="Love From Our Beautiful Clients"
          subtitle="Real memories, glowing brides, and cherished wedding morning moments with SS Beauty Parlour."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <Testimonial key={item.id} item={item} />
          ))}
        </div>

        {/* Editorial Transparency Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-full bg-warmwhite border border-blush shadow-sm flex items-center justify-center gap-2 text-xs text-espresso/70 font-sans">
          <AlertCircle className="w-4 h-4 text-rose-burgundy shrink-0" />
          <span>
            <strong>Editorial Note:</strong> Demonstration testimonials shown above. Replace with genuine bride reviews in <code className="text-burgundy font-mono bg-cream-pink px-2 py-0.5 rounded-full">src/data/testimonials.js</code>.
          </span>
        </div>
      </div>
    </section>
  );
}
