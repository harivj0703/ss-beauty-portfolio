import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function BrushStrokeIntro({ onComplete }) {
  const [phase, setPhase] = useState(1); // 1: Initial, 2: Sweeping & Revealing, 3: Revealed Brand, 4: Done
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    // Phase 1 -> 2: Brush sweep starts after 0.4s
    const t1 = setTimeout(() => setPhase(2), 400);

    // Phase 2 -> 3: Name fully swept, reveal brand after 2.6s
    const t2 = setTimeout(() => setPhase(3), 2600);

    // Phase 3 -> 4: Complete intro after 4.6s
    const t3 = setTimeout(() => {
      handleFinish();
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleFinish = () => {
    setSkip(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!skip && (
        <motion.div
          key="brush-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC] to-[#F2C9D3] overflow-hidden select-none"
        >
          {/* Subtle Organic Background Blobs */}
          <div className="absolute top-10 left-10 w-96 h-96 rounded-blob bg-blush/40 blur-3xl pointer-events-none animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-blob-alt bg-rose-dusty/20 blur-3xl pointer-events-none animate-float-reverse"></div>
          
          {/* Top Bar with Minimal Monogram & Skip Option */}
          <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-10 sm:right-10 flex items-center justify-between z-30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-burgundy flex items-center justify-center text-warmwhite font-display text-xs font-semibold shadow-sm">
                SS
              </div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-burgundy font-medium">
                SS Beauty Parlour
              </span>
            </div>

            <button
              onClick={handleFinish}
              className="px-4 py-1.5 rounded-full bg-white/70 hover:bg-white text-burgundy text-xs font-sans font-medium uppercase tracking-wider border border-burgundy/20 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Skip Intro
            </button>
          </div>

          {/* Central Animation Stage */}
          <div className="relative w-full max-w-4xl px-4 sm:px-6 flex flex-col items-center justify-center text-center z-20">
            
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-rose-dusty"></span>
              <span className="text-xs uppercase font-sans tracking-widest text-burgundy font-semibold">
                THE ART OF TRANSFORMATION
              </span>
              <span className="w-6 h-[1.5px] bg-rose-dusty"></span>
            </motion.div>

            {/* Canvas Stage for Name Reveal & Brush */}
            <div className="relative w-full max-w-2xl py-6 flex items-center justify-center">
              
              {/* The Realistic Brush SVG following path */}
              {phase >= 2 && (
                <motion.div
                  initial={{ x: '-15%', y: '10%', opacity: 0, rotate: -25 }}
                  animate={{
                    x: ['-10%', '35%', '95%', '115%'],
                    y: ['10%', '-8%', '5%', '-20%'],
                    opacity: [0, 1, 1, 0],
                    rotate: [-20, -12, -28, -40]
                  }}
                  transition={{
                    duration: 2.2,
                    ease: [0.25, 0.1, 0.25, 1],
                    times: [0, 0.25, 0.85, 1]
                  }}
                  className="absolute left-0 top-0 z-30 pointer-events-none drop-shadow-xl"
                  style={{ width: '130px', height: '130px', marginTop: '-45px' }}
                >
                  {/* Detailed Luxury Makeup Brush Illustration */}
                  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform">
                    <defs>
                      <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#4D1225" />
                        <stop offset="60%" stop-color="#641D35" />
                        <stop offset="100%" stop-color="#2A0B15" />
                      </linearGradient>
                      <linearGradient id="ferruleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#F2C9D3" />
                        <stop offset="40%" stop-color="#FFFFFF" />
                        <stop offset="70%" stop-color="#D98FA5" />
                        <stop offset="100%" stop-color="#922D4D" />
                      </linearGradient>
                      <linearGradient id="bristleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#641D35" />
                        <stop offset="50%" stop-color="#922D4D" />
                        <stop offset="85%" stop-color="#E8CFCB" />
                        <stop offset="100%" stop-color="#FFFFFF" />
                      </linearGradient>
                    </defs>

                    {/* Long Tapered Luxury Handle */}
                    <path d="M100 15 L52 63 C50 65 47 65 45 63 L43 61 C41 59 41 56 43 54 L91 6 C93 4 97 4 99 6 L100 7 C102 9 102 13 100 15 Z" fill="url(#handleGrad)" />
                    {/* Metallic Rose Gold Ferrule with Rings */}
                    <path d="M52 63 L34 81 C32 83 29 83 27 81 L25 79 C23 77 23 74 25 72 L43 54 Z" fill="url(#ferruleGrad)" stroke="#641D35" stroke-width="0.5" />
                    <line x1="40" y1="67" x2="35" y2="62" stroke="#FFFFFF" stroke-width="1.2" opacity="0.8" />
                    <line x1="33" y1="74" x2="28" y2="69" stroke="#641D35" stroke-width="0.8" opacity="0.5" />

                    {/* Fluffy Angle Bristles with Burgundy Paint Tip */}
                    <path d="M34 81 C30 85 22 93 12 102 C8 106 5 107 4 105 C3 104 4 101 8 97 C17 87 25 79 27 81 Z" fill="url(#bristleGrad)" />
                    <path d="M28 87 C22 93 14 100 6 107 C4 109 2 108 2 106 C2 104 5 99 10 94 C18 86 24 81 25 79 Z" fill="#641D35" opacity="0.95" />
                    
                    {/* Cosmetic Pigment Shimmer Drop */}
                    <circle cx="3" cy="107" r="2.5" fill="#922D4D" />
                  </svg>
                </motion.div>
              )}

              {/* The Flowing Paint Stroke (Underneath) */}
              <svg
                viewBox="0 0 600 120"
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#F2C9D3" stop-opacity="0" />
                    <stop offset="20%" stop-color="#D98FA5" stop-opacity="0.5" />
                    <stop offset="60%" stop-color="#922D4D" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#641D35" stop-opacity="0.15" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 20 65 Q 150 40, 300 68 T 580 50"
                  fill="none"
                  stroke="url(#strokeGradient)"
                  strokeWidth="60"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={phase >= 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </svg>

              {/* The Artist's Name: Revealed progressively as brush travels */}
              <div className="relative z-10 w-full py-2">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={phase >= 2 ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
                  transition={{ duration: 1.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-burgundy tracking-wide leading-none"
                >
                  Silambarasi
                </motion.div>
              </div>

            </div>

            {/* Phase 4: Brand & Tagline Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 space-y-2"
            >
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-semibold text-rose-burgundy">
                PROFESSIONAL MAKEUP ARTIST
              </div>
              
              <h2 className="text-xl sm:text-2xl font-display font-medium text-burgundy tracking-widest uppercase">
                {BUSINESS_CONFIG.brandName}
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-espresso/80 pt-1">
                "{BUSINESS_CONFIG.tagline}"
              </p>

              {/* Enter Button */}
              <div className="pt-6">
                <button
                  onClick={handleFinish}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-burgundy hover:bg-burgundy-rose text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold shadow-burgundy-glow hover:scale-105 active:scale-95 transition-all duration-300 group"
                >
                  <span>Experience The Artistry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
