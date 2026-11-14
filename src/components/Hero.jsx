import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, MapPin, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Hero({ onBookClick }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-blush/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#C6A36A_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="text-xs uppercase font-medium tracking-widest-editorial text-gold font-sans">
                PROFESSIONAL MAKEUP ARTIST
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-espresso tracking-tight leading-[1.08] mb-4"
            >
              Beauty, <span className="italic font-normal font-serif text-gold">Elevated.</span>
            </motion.h1>

            {/* Artist Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-sm font-sans uppercase tracking-widest font-semibold text-espresso/90">
                Meet Silambarasi
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span className="text-xs font-sans tracking-wide text-taupe flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {BUSINESS_CONFIG.locationsSummary}
              </span>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-taupe font-sans font-light max-w-xl leading-relaxed mb-8"
            >
              Enhancing natural beauty and creating unforgettable looks with over 6 years of makeup artistry experience. Specialized in South Indian bridal transformations, muhurtham styling, and personalized modern elegance.
            </motion.p>

            {/* Badges / Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center gap-6 pb-8 border-b border-gold/20 mb-8"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-sans font-semibold tracking-wider text-espresso">
                    6+ YEARS EXPERIENCE
                  </div>
                  <div className="text-[11px] text-taupe">Professional Artistry</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-sans font-semibold tracking-wider text-espresso">
                    BRIDAL SPECIALIST
                  </div>
                  <div className="text-[11px] text-taupe">Personalized Aesthetics</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => {
                  if (onBookClick) onBookClick();
                  else scrollToSection('#contact');
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold hover:bg-gold-dark text-white font-sans text-xs uppercase tracking-widest font-medium shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 transition-all duration-300 gap-2.5 group"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-espresso/20 hover:border-gold text-espresso hover:text-gold bg-white/50 backdrop-blur-sm font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300"
              >
                Explore My Work
              </button>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Image Composition (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Elegant Background Gold Border Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold/40 rounded-2xl hidden sm:block pointer-events-none"></div>

            {/* Soft Blush Shadow Accent Box */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-blush/30 rounded-2xl -z-10 hidden sm:block"></div>

            {/* Main Portrait Container */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gold/30 bg-beige-soft group">
              <img
                src="/images/hero/hero-bride.webp"
                alt="SS Beauty Parlour - Professional Bridal Makeup by Silambarasi"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />

              {/* Subtle Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-60"></div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ivory/90 backdrop-blur-md border border-gold/30 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest font-medium text-gold">
                      Signature Bridal Look
                    </span>
                    <h3 className="text-sm font-display font-medium text-espresso mt-0.5">
                      Muhurtham Artistry & Temple Ornaments
                    </h3>
                  </div>
                  <span className="text-xs font-serif italic text-gold font-medium">
                    SS
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-8 bg-ivory p-4 rounded-xl shadow-xl border border-gold/40 flex items-center gap-3.5 z-20"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center font-display font-bold text-xl text-gold">
                6+
              </div>
              <div className="text-left">
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-espresso">
                  Years Artistry
                </div>
                <div className="text-[11px] text-taupe font-sans">
                  Thiruvannamalai & Chengam
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
