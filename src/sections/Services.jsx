import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';

export default function Services({ onSelectService }) {
  const handleBookService = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC]/50 to-[#FFF8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="BESPOKE ARTISTRY"
          title="Your Beauty, Our Artistry"
          subtitle="From majestic South Indian Muhurtham bridal transformations to high-fashion reception looks, explore tailored artistry crafted with passion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onBookService={handleBookService}
            />
          ))}
        </div>

        {/* Personalized Consultation Callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warmwhite border border-blush shadow-bubbly text-xs text-espresso/80 font-sans">
            <span>Planning a multi-day wedding or bridal party package?</span>
            <a
              href="#contact"
              className="text-burgundy font-semibold hover:text-rose-burgundy underline ml-1"
            >
              Consult directly with Silambarasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
