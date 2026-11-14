import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BeforeAfter from '../components/BeforeAfter';

export default function Transformations() {
  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="BEFORE & AFTER"
          title="Beauty in Every Transformation"
          subtitle="Witness how refined skin prep, custom contouring, and artistic detailing bring out each client's unique radiance."
        />

        <BeforeAfter />
      </div>
    </section>
  );
}
