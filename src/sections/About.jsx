import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { BUSINESS_CONFIG } from '../config/business';

export default function About() {
  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const keyPoints = [
    "Personalized consultations to understand your bridal vision",
    "Specialized in South Indian traditional Muhurtham & modern receptions",
    "Flawless HD skin finish designed for high-resolution cameras",
    "Dedicated on-venue services in Thiruvannamalai and Chengam"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="ABOUT THE ARTIST"
          title="Meet the Artist Behind the Beauty"
          subtitle="Passionate about bringing out your natural radiance with elegance, precision, and heartfelt artistry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Artist Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Double Border Frame */}
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-2xl border border-gold/40 -z-10 hidden sm:block"></div>
            
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gold/30 bg-beige-soft group">
              <img
                src="/images/artist/silambarasi-portrait.webp"
                alt="Silambarasi - Professional Makeup Artist at SS Beauty Parlour"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent"></div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ivory/95 backdrop-blur-md border border-gold/40 shadow-lg text-left">
                <div className="text-xs uppercase tracking-widest text-gold font-sans font-semibold">
                  Founder & Lead Artist
                </div>
                <div className="text-xl font-display font-medium text-espresso mt-0.5">
                  Silambarasi
                </div>
                <div className="text-xs text-taupe font-sans mt-1">
                  6+ Years Makeup Artistry · Thiruvannamalai & Chengam
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Artist Biography & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Philosophy quote badge */}
            <div className="p-6 rounded-2xl bg-white/70 border-l-4 border-gold shadow-sm mb-8">
              <p className="font-serif italic text-lg sm:text-xl text-espresso/90 leading-relaxed">
                "{BUSINESS_CONFIG.artist.bioIntro}"
              </p>
            </div>

            {/* Narrative text */}
            <div className="space-y-4 text-base sm:text-lg text-taupe font-sans font-light leading-relaxed mb-8">
              <p>
                {BUSINESS_CONFIG.artist.bioFull}
              </p>
              <p>
                From timeless South Indian Muhurtham traditions to glamorous evening receptions, Silambarasi brings a calm, warm, and attentive presence to your most cherished milestones. She believes makeup should never mask your natural beauty, but gently elevate it.
              </p>
            </div>

            {/* Key Approach Bullet Points */}
            <div className="space-y-3 mb-10">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-espresso/80 font-sans">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-espresso hover:bg-espresso-soft text-ivory font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-md group"
              >
                <span>Explore My Portfolio</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
