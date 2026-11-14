import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceHighlights from './components/ExperienceHighlights';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Transformations from './sections/Transformations';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import Instagram from './sections/Instagram';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedService, setSelectedService] = useState('Bridal Makeup');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#302720] flex flex-col font-sans selection:bg-[#C6A36A]/20 selection:text-[#302720]">
      {/* Top Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onBookClick={handleBookClick} />
        <ExperienceHighlights />
        <About />
        <Portfolio />
        <Transformations />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Testimonials />
        <Instagram />
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}
