import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Quote } from 'lucide-react';

export default function TamilQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const quotes = [
    {
      tamil: "அழகு என்பது முகத்தில் மட்டும் இல்லை, தன்னம்பிக்கையிலும் மலர்கிறது.",
      meaning: "Beauty is not only on the face; it also blooms through confidence.",
      theme: "Confidence & Grace"
    },
    {
      tamil: "ஒவ்வொரு பெண்ணின் அழகும் தனித்துவமானது.",
      meaning: "Every woman's beauty is unique.",
      theme: "Individuality & Radiance"
    },
    {
      tamil: "முகத்தில் ஒரு புன்னகை, மனதில் ஒரு நம்பிக்கை – அதுவே உண்மையான அழகு.",
      meaning: "A smile on the face and confidence in the heart – that is true beauty.",
      theme: "Inner Harmony"
    },
    {
      tamil: "அழகை மாற்றுவது அல்ல எங்கள் கலை, இயற்கையான அழகை மெருகூட்டுவதே எங்கள் நோக்கம்.",
      meaning: "Our art is not about changing beauty, but enhancing natural beauty.",
      theme: "Artistry Philosophy"
    },
    {
      tamil: "ஒவ்வொரு விழாவிலும் உங்கள் அழகு ஒரு அழகான நினைவாக மலரட்டும்.",
      meaning: "May your beauty blossom into a beautiful memory at every celebration.",
      theme: "Cherished Memories"
    }
  ];

  // Auto-rotation every 6 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, quotes.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const currentQuote = quotes[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC]/70 to-[#FFF8F6] relative overflow-hidden">
      {/* Organic Background Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-blob bg-blush/40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-blob-alt bg-rose-dusty/25 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-pink border border-blush shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-burgundy animate-pulse" />
            <span className="text-[11px] uppercase font-sans tracking-[0.2em] text-burgundy font-semibold">
              TAMIL BEAUTY INSPIRATIONS
            </span>
          </div>

          {/* Tamil Section Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tamil font-semibold text-burgundy tracking-normal leading-[1.3] mb-2">
            அழகின் அழகான தருணங்கள்
          </h2>

          {/* English Subtitle */}
          <p className="text-sm sm:text-base font-serif italic text-rose-burgundy tracking-wide">
            Beauty, Confidence & Elegance
          </p>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-8 h-[1px] bg-rose-dusty/40"></span>
            <span className="w-2 h-2 rounded-full bg-rose-burgundy"></span>
            <span className="w-8 h-[1px] bg-rose-dusty/40"></span>
          </div>
        </div>

        {/* Central Rotating Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-[3rem] bg-warmwhite/90 backdrop-blur-md border-2 border-blush shadow-bubbly"
        >
          {/* Background Decorative Floral Watermark */}
          <div className="absolute top-6 right-8 text-cream-pink opacity-80 pointer-events-none">
            <Quote className="w-20 h-20 text-cream-pink stroke-none fill-cream-pink" />
          </div>

          {/* Animated Quote Content */}
          <div className="relative min-h-[170px] sm:min-h-[190px] flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-center"
              >
                {/* Theme Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-cream-pink text-[10px] uppercase font-sans tracking-widest text-rose-burgundy font-semibold mb-6">
                  {currentQuote.theme}
                </span>

                {/* Tamil Quote Text */}
                <blockquote className="font-tamil font-medium text-2xl sm:text-3xl md:text-4xl text-burgundy leading-[1.5] max-w-3xl mb-5 px-2">
                  "{currentQuote.tamil}"
                </blockquote>

                {/* English Meaning */}
                <p className="font-serif italic text-base sm:text-lg text-espresso/80 max-w-2xl leading-relaxed">
                  "{currentQuote.meaning}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Bar: Prev, Indicators, Play/Pause, Next */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-blush/60 flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Tamil Quote"
              className="w-10 h-10 rounded-full bg-cream-pink hover:bg-burgundy text-burgundy hover:text-warmwhite flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to Tamil quote ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-7 h-2.5 bg-burgundy'
                      : 'w-2.5 h-2.5 bg-blush hover:bg-rose-dusty'
                  }`}
                />
              ))}

              {/* Accessible Pause/Play Toggle */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume auto rotation" : "Pause auto rotation"}
                title={isPaused ? "Resume" : "Pause"}
                className="ml-2 p-1.5 rounded-full text-espresso/60 hover:text-burgundy transition-colors"
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                )}
              </button>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Tamil Quote"
              className="w-10 h-10 rounded-full bg-cream-pink hover:bg-burgundy text-burgundy hover:text-warmwhite flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
