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
    <section id="services" className="py-20 lg:py-28 bg-[#F0E8DE]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="BESPOKE BEAUTY EXPERIENCES"
          title="Beauty Services"
          subtitle="From grand wedding muhurthams to intimate family celebrations, discover specialized makeup artistry and hairstyling crafted with passion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookService={handleBookService}
            />
          ))}
        </div>

        {/* Customized packages note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-taupe font-sans tracking-wide">
            Need a customized bridal package for your wedding entourage or multiple ceremonies?{' '}
            <a
              href="#contact"
              className="text-gold font-medium hover:underline ml-1"
            >
              Contact Silambarasi for bespoke consultation.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
