import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Editorial Section Title Component
 * Features serif luxury typography, eyebrow badge, and champagne gold accent lines.
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="w-6 h-[1px] bg-gold"></span>
          <span className="text-xs uppercase font-medium tracking-widest-editorial text-gold font-sans">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-gold"></span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-espresso tracking-tight leading-tight"
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
          className="mt-4 text-base sm:text-lg text-taupe font-sans font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {center && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="w-12 h-[1px] bg-gold/30"></span>
          <span className="w-2 h-2 rotate-45 border border-gold/60"></span>
          <span className="w-12 h-[1px] bg-gold/30"></span>
        </div>
      )}
    </div>
  );
}
