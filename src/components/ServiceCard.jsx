import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ service, onBookService }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/90 border border-gold/20 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300"
    >
      {/* Card Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-beige-soft">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-60"></div>

        {/* Category & Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-[10px] uppercase font-sans tracking-widest text-espresso font-semibold border border-gold/30">
            {service.category}
          </span>
          {service.badge && (
            <span className="px-2.5 py-1 rounded-full bg-gold text-white text-[10px] uppercase font-sans tracking-wider font-medium shadow-sm">
              {service.badge}
            </span>
          )}
        </div>

        {/* Duration badge */}
        {service.duration && (
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs text-ivory/90 font-sans backdrop-blur-sm px-2.5 py-1 rounded-full bg-espresso/50">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{service.duration}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex-1 p-6 flex flex-col justify-between text-left">
        <div>
          <h3 className="text-xl font-display font-medium text-espresso group-hover:text-gold transition-colors">
            {service.title}
          </h3>

          <p className="mt-2 text-sm text-taupe font-sans font-light leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Feature List */}
          <ul className="mt-4 space-y-2 border-t border-gold/15 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-espresso/80 font-sans">
                <span className="w-4 h-4 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-6 pt-4 border-t border-gold/15">
          <button
            onClick={() => onBookService(service.title)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gold/40 hover:border-gold bg-gold/5 hover:bg-gold hover:text-white text-espresso font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 group/btn"
          >
            <Calendar className="w-3.5 h-3.5 text-gold group-hover/btn:text-white transition-colors" />
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
