import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BeforeAfter from '../components/BeforeAfter';

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 lg:py-32 bg-[#FFF8F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="BEFORE & AFTER"
          title="The Beauty of Transformation"
          subtitle="Witness how delicate skin prep, custom contouring, and artistic detailing reveal each client's inherent radiance."
        />

        <BeforeAfter />
      </div>
    </section>
  );
}
