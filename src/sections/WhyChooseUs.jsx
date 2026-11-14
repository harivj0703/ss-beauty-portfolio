import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Eye, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "6+ Years of Dedicated Artistry",
      description: "Over six years of specialized experience in South Indian bridal traditions, festive makeup, and on-venue mandapam styling."
    },
    {
      icon: Heart,
      title: "Bespoke & Personalized Looks",
      description: "Never a formulaic look. Every base, eye detail, and contour is tailored to your skin tone, jewelry, and wedding saree."
    },
    {
      icon: Eye,
      title: "Meticulous Attention to Detail",
      description: "From precision winged liner and flawless blending to crisp Kanjivaram saree pleating and secure poola jada floral hair setting."
    },
    {
      icon: Sparkles,
      title: "Professional HD Formulation",
      description: "Techniques calibrated for daylight muhurthams, flash photography, and bright 4K evening spotlights with zero flashback."
    },
    {
      icon: ShieldCheck,
      title: "Client-Centered Calm & Care",
      description: "A serene, gentle, and punctual presence on your wedding morning, ensuring you feel deeply relaxed and radiant."
    },
    {
      icon: MapPin,
      title: "Thiruvannamalai & Chengam",
      description: "Local expertise with the flexibility to travel directly to your wedding mandapam or venue across Tamil Nadu."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FFF8F6] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-blob bg-cream-pink/60 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="OUR PHILOSOPHY"
          title="The Essence of Elevated Artistry"
          subtitle="Crafted with passion, experience, and an unwavering commitment to making your special milestone unforgettable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-9 rounded-[2.5rem] bg-cream-pink/50 hover:bg-cream-pink/80 border-2 border-blush/60 shadow-bubbly hover:shadow-bubbly-hover transition-all duration-400 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-warmwhite text-rose-burgundy flex items-center justify-center mb-6 shadow-sm border border-blush">
                    <Icon className="w-7 h-7 text-burgundy" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-burgundy mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-espresso/75 font-sans font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-blush/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-burgundy"></span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-burgundy font-semibold">
                    The SS Beauty Signature
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
