import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Testimonial from '../components/Testimonial';
import { TESTIMONIALS_DATA } from '../data/testimonials';

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
      </div>
    </section>
  );
}
