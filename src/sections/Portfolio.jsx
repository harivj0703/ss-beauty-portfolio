import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Gallery from '../components/Gallery';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC]/40 to-[#FFF8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CURATED PORTFOLIO"
          title="A Little Gallery of Glamour"
          subtitle="A collection of beautiful transformations, authentic Muhurtham bridal looks, and unforgettable moments."
        />

        <Gallery />
      </div>
    </section>
  );
}
