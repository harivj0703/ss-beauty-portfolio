import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag, Info } from 'lucide-react';

export default function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev
}) {
  const currentItem = items && items[currentIndex] ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-espresso/90 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Top Controls Bar */}
        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20 text-ivory">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-sans tracking-widest text-gold font-semibold">
              {currentItem.category}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-white/70 font-sans">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Image & Caption Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gold/30 bg-black/40 max-h-[70vh]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto max-w-full object-contain mx-auto select-none"
            />
          </div>

          {/* Caption Box */}
          <div className="mt-4 p-4 rounded-xl bg-ivory/95 text-espresso backdrop-blur-md border border-gold/30 max-w-xl w-full text-center shadow-xl">
            <h3 className="font-display font-medium text-lg text-espresso">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="mt-1 text-xs sm:text-sm text-taupe font-sans leading-relaxed">
                {currentItem.description}
              </p>
            )}
            {currentItem.details && (
              <div className="mt-2 text-[11px] font-sans font-medium uppercase tracking-widest text-gold">
                {currentItem.details}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
