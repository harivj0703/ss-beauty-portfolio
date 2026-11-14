import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Looks");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === "All Looks"
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

  // Organic shape variation helper
  const getOrganicCorners = (idx) => {
    const mod = idx % 3;
    if (mod === 0) return 'rounded-[2.5rem]';
    if (mod === 1) return 'rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl';
    return 'rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl';
  };

  return (
    <div className="w-full">
      {/* Bubbly Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-16">
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-300 relative ${
                isActive
                  ? 'bg-burgundy text-warmwhite shadow-burgundy-glow scale-105'
                  : 'bg-warmwhite hover:bg-cream-pink text-burgundy/80 hover:text-burgundy border border-blush shadow-xs'
              }`}
            >
              {category}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rose-burgundy animate-pulse"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Organic Asymmetrical Editorial Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => {
            const cornerStyle = getOrganicCorners(index);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden bg-cream-pink shadow-bubbly hover:shadow-bubbly-hover cursor-pointer border-2 border-blush/60 transition-all duration-500 hover:-translate-y-1.5 ${cornerStyle}`}
                onClick={() => openLightbox(index)}
              >
                {/* Image Frame */}
                <div className={`relative ${item.aspect === 'tall' ? 'aspect-[3/4.2]' : 'aspect-[3/3.8]'} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/85 via-burgundy/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-warmwhite/90 backdrop-blur-md text-[10px] uppercase font-sans tracking-widest text-burgundy font-bold shadow-xs border border-blush">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <div className="w-9 h-9 rounded-full bg-warmwhite text-burgundy flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4 text-burgundy" />
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 text-left">
                    <h3 className="font-display font-medium text-lg text-warmwhite leading-snug">
                      {item.title}
                    </h3>
                    {item.details && (
                      <p className="mt-1 text-xs text-rose-soft font-sans font-light">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subtle Organic Footer Bar */}
                <div className="p-4 bg-warmwhite/90 border-t border-blush flex items-center justify-between text-left">
                  <span className="font-display font-medium text-sm text-burgundy truncate max-w-[200px]">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-rose-burgundy font-sans tracking-widest uppercase font-semibold">
                    View
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
