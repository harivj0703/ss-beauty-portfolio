import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 relative ${
                isActive
                  ? 'bg-espresso text-ivory shadow-md scale-105'
                  : 'bg-white/70 hover:bg-white text-taupe-soft hover:text-espresso border border-gold/20'
              }`}
            >
              {category}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Editorial Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-gold/20 bg-beige-soft shadow-luxury cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Editorial Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Pill at Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-sm text-[10px] uppercase font-sans tracking-widest text-espresso font-semibold border border-gold/30 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon Button at Top Right */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <div className="w-9 h-9 rounded-full bg-ivory/90 backdrop-blur-sm text-espresso flex items-center justify-center border border-gold/30 shadow-md">
                      <Maximize2 className="w-4 h-4 text-gold" />
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-display font-medium text-lg text-ivory leading-snug">
                      {item.title}
                    </h3>
                    {item.details && (
                      <p className="mt-1 text-xs text-gold-light font-sans font-light">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subtle static bottom info bar for accessibility */}
                <div className="p-4 bg-white/60 border-t border-gold/10 flex items-center justify-between">
                  <span className="font-display font-medium text-sm text-espresso truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-taupe font-sans tracking-wider uppercase">
                    View Look
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
