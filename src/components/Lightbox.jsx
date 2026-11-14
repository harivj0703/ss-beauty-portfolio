import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-burgundy-dark/90 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Top Controls Bar */}
        <div className="absolute top-5 left-5 right-5 sm:top-7 sm:left-10 sm:right-10 flex items-center justify-between z-20 text-warmwhite">
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="text-xs uppercase font-sans tracking-widest text-rose-soft font-semibold">
              {currentItem.category}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-white/80 font-sans">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all hover:scale-105 active:scale-95 focus:outline-none"
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
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 active:scale-95 focus:outline-none"
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
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 active:scale-95 focus:outline-none"
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
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-rose-dusty/40 bg-black/40 max-h-[70vh]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto max-w-full object-contain mx-auto select-none"
            />
          </div>

          {/* Bubbly Caption Box */}
          <div className="mt-4 p-5 rounded-2xl bg-warmwhite/95 text-espresso backdrop-blur-md border border-blush max-w-xl w-full text-center shadow-2xl">
            <h3 className="font-display font-medium text-xl text-burgundy">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="mt-1 text-xs sm:text-sm text-espresso/80 font-sans leading-relaxed">
                {currentItem.description}
              </p>
            )}
            {currentItem.details && (
              <div className="mt-2 text-[10px] font-sans font-semibold uppercase tracking-widest text-rose-burgundy">
                {currentItem.details}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
