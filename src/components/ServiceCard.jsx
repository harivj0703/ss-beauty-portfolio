import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ service, index = 0, onBookService }) {
  // Give each service card an organic, fluid corner radius so they don't look like identical rigid dashboard blocks
  const getCardShape = (idx) => {
    const mod = idx % 4;
    if (mod === 0) return 'rounded-[2.5rem]';
    if (mod === 1) return 'rounded-tr-[3.5rem] rounded-bl-[3rem] rounded-tl-3xl rounded-br-3xl';
    if (mod === 2) return 'rounded-tl-[3.5rem] rounded-br-[3rem] rounded-tr-3xl rounded-bl-3xl';
    return 'rounded-[2.5rem]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className={`group relative flex flex-col overflow-hidden bg-warmwhite border-2 border-blush/70 shadow-bubbly hover:shadow-bubbly-hover hover:-translate-y-2 transition-all duration-400 ${getCardShape(index)}`}
    >
      {/* Image Container with Organic Oval / Curved Bottom */}
      <div className={`relative ${service.aspect || 'aspect-square'} overflow-hidden bg-cream-pink`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
          style={{ objectPosition: service.imagePosition || 'center 20%' }}
          loading="lazy"
        />

        {/* Romantic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/20 to-transparent opacity-60"></div>

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-warmwhite/90 backdrop-blur-sm text-[10px] uppercase font-sans tracking-widest text-burgundy font-bold shadow-xs border border-blush">
            {service.category}
          </span>
          {service.badge && (
            <span className="px-3 py-1 rounded-full bg-burgundy text-warmwhite text-[10px] uppercase font-sans tracking-wider font-semibold shadow-xs">
              {service.badge}
            </span>
          )}
        </div>

        {/* Duration Pill */}
        {service.duration && (
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs text-warmwhite font-sans backdrop-blur-md px-3 py-1 rounded-full bg-burgundy/70 border border-white/20">
            <Clock className="w-3.5 h-3.5 text-rose-soft" />
            <span>{service.duration}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-medium text-burgundy group-hover:text-rose-burgundy transition-colors">
            {service.title}
          </h3>

          <p className="mt-2.5 text-sm text-espresso/75 font-sans font-light leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Feature List */}
          <ul className="mt-4 space-y-2 border-t border-blush/60 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-espresso/80 font-sans">
                <span className="w-4 h-4 rounded-full bg-cream-pink text-rose-burgundy flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pill Book Now Button */}
        <div className="mt-6 pt-4 border-t border-blush/60">
          <button
            onClick={() => onBookService(service.title)}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-pink hover:bg-burgundy text-burgundy hover:text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-xs hover:shadow-burgundy-glow group/btn"
          >
            <Calendar className="w-3.5 h-3.5 text-rose-burgundy group-hover/btn:text-warmwhite transition-colors" />
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
