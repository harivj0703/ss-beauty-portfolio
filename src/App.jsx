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
import BrushStrokeIntro from './components/BrushStrokeIntro';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState('Bridal Makeup');
  // Always show on fresh page load so the user can experience the animation
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
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

      {/* Replay Intro Floating Action Button */}
      <button
        onClick={handleReplayIntro}
        title="Replay Makeup Brush Intro"
        className="fixed bottom-24 right-6 z-30 flex items-center gap-2 px-3.5 py-2 rounded-full bg-cream-pink/90 hover:bg-cream-pink text-burgundy border border-blush shadow-md hover:shadow-lg transition-all text-xs font-sans font-medium backdrop-blur-sm hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-3.5 h-3.5 text-rose-burgundy animate-spin" style={{ animationDuration: '6s' }} />
        <span>Replay Intro</span>
      </button>

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
