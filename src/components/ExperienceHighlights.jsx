import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function ExperienceHighlights() {
  const items = [
    {
      icon: Clock,
      title: "6+ Years",
      subtitle: "Professional Experience",
      desc: "Dedicated beauty artistry crafted for brides and milestone occasions."
    },
    {
      icon: Sparkles,
      title: "Bridal Specialist",
      subtitle: "Specialized Styling",
      desc: "Traditional South Indian muhurtham, reception & engagement looks."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Looks",
      subtitle: "Client-Centered Focus",
      desc: "Bespoke palettes tailored to your skin tone, attire & natural features."
    },
    {
      icon: MapPin,
      title: "Dual Locations",
      subtitle: "Thiruvannamalai & Chengam",
      desc: "Available for on-venue bridal appointments across Tamil Nadu."
    }
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-warmwhite/95 backdrop-blur-md rounded-3xl border border-blush shadow-bubbly p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-blush">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col text-left ${index > 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-cream-pink text-rose-burgundy flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-burgundy">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="text-xs uppercase font-sans font-semibold tracking-wider text-rose-burgundy mb-1.5">
                  {item.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-espresso/75 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
