import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Heart, Eye, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "6+ Years of Experience",
      description: "Over six years of hands-on expertise in South Indian bridal traditions, festive makeup, and on-venue styling."
    },
    {
      icon: Heart,
      title: "Personalized Makeup Looks",
      description: "No one-size-fits-all artistry. Every palette, contour, and highlight is tailored to harmonize with your features and attire."
    },
    {
      icon: Eye,
      title: "Meticulous Attention to Detail",
      description: "From symmetrical winged liner and seamless blending to crisp saree pleating and secure poola jada hair setting."
    },
    {
      icon: Sparkles,
      title: "Professional Makeup Artistry",
      description: "Techniques specifically calibrated for 4K video, daylight ceremonies, and bright evening stage spotlights with zero flashback."
    },
    {
      icon: ShieldCheck,
      title: "Client-Centered Satisfaction",
      description: "A calm, gentle, and punctual presence on your wedding morning, ensuring you feel deeply pampered and confident."
    },
    {
      icon: MapPin,
      title: "Thiruvannamalai & Chengam",
      description: "Rooted in Tamil Nadu, offering convenient on-location bridal vanity services directly at your home or wedding mandapam."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="WHY CHOOSE US"
          title="The Essence of Elevated Artistry"
          subtitle="Crafted with passion, experience, and an unwavering commitment to making your special day truly memorable."
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
                className="p-8 rounded-2xl bg-white/70 border border-gold/25 shadow-sm hover:shadow-luxury hover:border-gold/50 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-espresso mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-taupe font-sans font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-gold font-medium">
                    SS Beauty Promise
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
