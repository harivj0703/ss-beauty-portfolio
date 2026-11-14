import React from 'react';
import { motion } from 'framer-motion';

/**
 * Bubbly Luxury Section Title
 * Features romantic curves, soft rose badges, and rich burgundy typography.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = ""
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-pink border border-rose-dusty/30 shadow-sm mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-rose-burgundy animate-ping"></span>
          <span className="text-[11px] uppercase font-semibold tracking-[0.2em] text-burgundy font-sans">
            {eyebrow}
          </span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-burgundy tracking-tight leading-[1.15]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-espresso/80 font-sans font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {center && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-10 h-[1.5px] rounded-full bg-rose-dusty/40"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-burgundy/60"></span>
          <span className="w-10 h-[1.5px] rounded-full bg-rose-dusty/40"></span>
        </div>
      )}
    </div>
  );
}
