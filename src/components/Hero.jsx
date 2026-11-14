import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MapPin, Sparkles, Award } from 'lucide-react';
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
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC]/60 to-[#FFF8F6]"
    >
      {/* Organic Fluid Background Blobs */}
      <div className="absolute top-12 left-0 w-80 sm:w-96 h-80 sm:h-96 rounded-blob bg-blush/35 blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-6 right-0 w-96 sm:w-[32rem] h-96 sm:h-[32rem] rounded-blob-alt bg-rose-dusty/15 blur-3xl pointer-events-none animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-cream-pink/50 blur-2xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Organic Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-pink border border-rose-dusty/30 shadow-sm w-fit mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-burgundy animate-pulse" />
              <span className="text-[11px] uppercase font-sans tracking-[0.22em] text-burgundy font-semibold">
                THE ART OF BEAUTY
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-burgundy tracking-tight leading-[1.08] mb-3"
            >
              Every Face <br />
              <span className="font-serif italic text-rose-burgundy font-normal">
                Has a Story.
              </span>
            </motion.h1>

            {/* Artist Calligraphy Accent */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-baseline gap-3 mb-4"
            >
              <span className="text-xs uppercase font-sans tracking-widest text-espresso/70 font-semibold">
                Makeup Artistry by
              </span>
              <span className="font-script text-4xl sm:text-5xl text-rose-burgundy leading-none">
                Silambarasi
              </span>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-espresso/80 font-sans font-light max-w-xl leading-relaxed mb-8"
            >
              Creating beautiful, personalized makeup looks with over 6 years of experience. Rooted in passion and dedicated to making every bride feel extraordinarily radiant, confident, and celebrated.
            </motion.p>

            {/* Organic Experience & Location Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pb-8 border-b border-rose-dusty/20 mb-8"
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-warmwhite border border-rose-dusty/30 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-cream-pink flex items-center justify-center text-rose-burgundy">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-sans font-bold tracking-wider text-burgundy">
                    6+ YEARS OF MAKEUP ARTISTRY
                  </div>
                  <div className="text-[10px] text-espresso/70">Professional South Indian Styling</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-warmwhite border border-rose-dusty/30 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-cream-pink flex items-center justify-center text-rose-burgundy">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-sans font-bold tracking-wider text-burgundy">
                    THIRUVANNAMALAI · CHENGAM
                  </div>
                  <div className="text-[10px] text-espresso/70">Tamil Nadu, India</div>
                </div>
              </div>
            </motion.div>

            {/* Pill CTA Buttons */}
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-burgundy hover:bg-burgundy-rose text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold shadow-burgundy-glow hover:-translate-y-0.5 transition-all duration-300 gap-2.5 group"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-burgundy/30 hover:border-burgundy text-burgundy bg-warmwhite/80 hover:bg-cream-pink font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                EXPLORE MY WORK
              </button>
            </motion.div>
          </div>

          {/* Right Column: Organic Masked Bridal Image Composition (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0 pt-4"
          >
            {/* Background Organic Floating Layer */}
            <div className="absolute -inset-4 rounded-blob bg-gradient-to-tr from-blush to-cream-pink -z-10 opacity-70 transform rotate-3 animate-float-slow"></div>

            {/* Outer Decorative Contour Ring */}
            <div className="absolute -inset-2 rounded-blob-alt border-2 border-rose-dusty/40 pointer-events-none"></div>

            {/* Main Portrait Frame with Organic Curves */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-blob overflow-hidden shadow-2xl border-4 border-warmwhite bg-cream-pink group">
              <img
                src="/images/hero/hero-bride.jpeg"
                alt="SS Beauty Parlour - Professional Bridal Artistry by Silambarasi"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Romantic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent opacity-60"></div>

              {/* Caption Pill at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-warmwhite/90 backdrop-blur-md border border-rose-dusty/30 shadow-lg text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-rose-burgundy">
                      Signature Muhurtham Artistry
                    </span>
                    <h3 className="text-sm font-display font-medium text-burgundy mt-0.5">
                      Traditional Silk & Temple Radiance
                    </h3>
                  </div>
                  <span className="text-xs font-serif italic text-rose-burgundy font-medium">
                    SS
                  </span>
                </div>
              </div>
            </div>

            {/* REPOSITIONED: Floating Experience Bubble (Clean top-right placement with zero overlapping) */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-4 right-2 sm:-top-6 sm:-right-4 lg:-top-6 lg:-right-6 bg-warmwhite/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5 rounded-full sm:rounded-[2rem] shadow-bubbly border-2 border-blush flex items-center gap-3 z-30 max-w-[230px] sm:max-w-none transition-transform hover:scale-105"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-burgundy to-rose-burgundy flex items-center justify-center font-display font-bold text-lg sm:text-xl text-warmwhite shadow-sm shrink-0">
                6+
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-burgundy leading-tight">
                  Years Artistry
                </div>
                <div className="text-[10px] sm:text-[11px] text-espresso/70 font-sans leading-tight mt-0.5">
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
