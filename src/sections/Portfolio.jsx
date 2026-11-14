import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Gallery from '../components/Gallery';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F0E8DE]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="MAKEUP PORTFOLIO"
          title="Every Look Tells a Story"
          subtitle="A collection of beautiful transformations, signature bridal muhurthams, and unforgettable moments."
        />

        <Gallery />
      </div>
    </section>
  );
}
