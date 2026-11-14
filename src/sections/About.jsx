import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { BUSINESS_CONFIG } from '../config/business';

export default function About() {
  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const keyPoints = [
    "Personalized consultations to understand your unique bridal vision",
    "Specialized in South Indian traditional Muhurtham & contemporary receptions",
    "Flawless HD skin finish calibrated for 4K video with zero flashback",
    "Dedicated on-venue vanity services in Thiruvannamalai and Chengam"
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFF8F6] relative overflow-hidden">
      {/* Background Bubbly Shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-blob bg-cream-pink/70 blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-blob-alt bg-blush/30 blur-3xl pointer-events-none animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="ABOUT SILAMBARASI"
          title="Behind Every Beautiful Transformation"
          subtitle="Passionate about bringing out your natural radiance with elegance, precision, and heartfelt artistry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Asymmetrical Artist Portrait with Fluid Framing (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Soft Organic Backdrop Blob */}
            <div className="absolute -inset-4 rounded-blob-alt bg-gradient-to-br from-cream-pink to-blush -z-10 opacity-70 transform -rotate-2"></div>
            
            {/* Double Border Organic Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-warmwhite bg-cream-pink group">
              <img
                src="/images/artist/silambarasi-portrait.jpeg"
                alt="Silambarasi - Professional Makeup Artist at SS Beauty Parlour"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent"></div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-warmwhite/95 backdrop-blur-md border border-blush shadow-lg text-left">
                <div className="text-[10px] uppercase tracking-widest text-rose-burgundy font-sans font-bold">
                  Lead Artist & Founder
                </div>
                <div className="text-2xl font-display font-medium text-burgundy mt-0.5">
                  Silambarasi
                </div>
                <div className="text-xs text-espresso/70 font-sans mt-1">
                  6+ Years Makeup Artistry · Thiruvannamalai & Chengam
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Biography & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Natural Tamil Beauty Quote & Philosophy Accent */}
            <div className="p-6 sm:p-7 rounded-3xl bg-cream-pink/70 border-l-4 border-burgundy shadow-sm mb-6">
              {/* Tamil Quote 2: Subtle and Graceful */}
              <p className="font-tamil font-medium text-lg sm:text-xl text-burgundy leading-[1.6] mb-2">
                "ஒவ்வொரு பெண்ணின் அழகும் தனித்துவமானது."
              </p>
              <p className="font-serif italic text-sm sm:text-base text-rose-burgundy leading-relaxed">
                "{BUSINESS_CONFIG.artist.bioIntro}"
              </p>
            </div>

            {/* Biography Copy */}
            <div className="space-y-4 text-base sm:text-lg text-espresso/80 font-sans font-light leading-relaxed mb-8">
              <p>
                {BUSINESS_CONFIG.artist.bioFull}
              </p>
              <p>
                From timeless South Indian Muhurtham silk draping to modern reception glam, Silambarasi brings a calm, warm, and meticulous touch to your wedding preparations. Makeup is an art, and every brushstroke honors the beauty already present in you.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3 mb-10">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cream-pink text-rose-burgundy flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-espresso/85 font-sans">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill Button */}
            <div>
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-rose text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-burgundy-glow group"
              >
                <span>EXPLORE MY PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 text-warmwhite group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Natural Tamil Beauty Quote Ribbon between About & Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-blush/60 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-rose-dusty/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-burgundy"></span>
            <span className="w-8 sm:w-12 h-[1px] bg-rose-dusty/40"></span>
          </div>

          {/* Tamil Quote 1: Crafted Dream Vision */}
          <p className="font-tamil font-medium text-xl sm:text-2xl md:text-3xl text-burgundy tracking-wide leading-relaxed px-4">
            "உங்கள் கனவு தோற்றம்… எங்கள் கைவண்ணத்தில்!"
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-espresso/65 mt-1 tracking-wider">
            Crafting your dream bridal vision with signature artistry
          </p>
        </motion.div>

      </div>
    </section>
  );
}
