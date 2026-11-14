import React, { useState, useEffect } from 'react';
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
import BrushStrokeIntro from './components/BrushStrokeIntro';

export default function App() {
  const [selectedService, setSelectedService] = useState('Bridal Makeup');
  const [showIntro, setShowIntro] = useState(() => {
    // Show on initial session, but allow instant replay
    return !sessionStorage.getItem('ss_intro_seen');
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('ss_intro_seen', 'true');
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

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
    <div className="min-h-screen bg-[#FFF8F6] text-[#38232C] flex flex-col font-sans selection:bg-[#F2C9D3] selection:text-[#641D35] relative">
      
      {/* Animated Opening Makeup Brush Stroke Intro */}
      {showIntro && (
        <BrushStrokeIntro onComplete={handleIntroComplete} />
      )}

      {/* Floating Pill Top Navigation */}
      <Navbar onBookClick={handleBookClick} onReplayIntro={handleReplayIntro} />

      {/* Main Content Sections with Organic Transitions */}
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
