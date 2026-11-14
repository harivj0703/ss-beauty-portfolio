import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Columns, SplitSquareVertical, AlertCircle, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slider');
  const containerRef = useRef(null);

  const transformationSets = [
    {
      id: 1,
      title: "Bridal Muhurtham Transformation",
      description: "Pre-makeup skin preparation elevated to radiant South Indian bridal glow with defined eyes and traditional bridal finish.",
      beforeImage: "/images/transformations/before-01.webp",
      afterImage: "/images/transformations/after-01.webp",
      details: "Muhurtham Look · HD Finish"
    },
    {
      id: 2,
      title: "Evening Reception Transformation",
      description: "Natural baseline styled into high-glam evening radiance with contoured cheekbones and soft smoky eyes.",
      beforeImage: "/images/transformations/before-02.webp",
      afterImage: "/images/transformations/after-02.webp",
      details: "Reception Glam · Dewy Glow"
    }
  ];

  const currentSet = transformationSets[activeSetIndex];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Transformation Set Tabs & Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Set Selector Pills */}
        <div className="flex items-center gap-2">
          {transformationSets.map((set, idx) => (
            <button
              key={set.id}
              onClick={() => {
                setActiveSetIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeSetIndex === idx
                  ? 'bg-burgundy text-warmwhite shadow-burgundy-glow'
                  : 'bg-warmwhite hover:bg-cream-pink text-burgundy/80 border border-blush'
              }`}
            >
              Look {idx + 1}: {set.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* View Mode Toggle: Slider vs Side-by-Side */}
        <div className="flex items-center p-1 rounded-full bg-warmwhite border border-blush shadow-xs">
          <button
            onClick={() => setViewMode('slider')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
              viewMode === 'slider'
                ? 'bg-rose-burgundy text-warmwhite font-semibold shadow-xs'
                : 'text-espresso/70 hover:text-burgundy'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            Interactive Slider
          </button>
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-rose-burgundy text-warmwhite font-semibold shadow-xs'
                : 'text-espresso/70 hover:text-burgundy'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            Side by Side
          </button>
        </div>
      </div>

      {/* Main Comparison Container with Rounded Organic Styling */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-warmwhite select-none bg-cream-pink cursor-ew-resize"
        >
          {/* After Image (Full Background) */}
          <img
            src={currentSet.afterImage}
            alt={`${currentSet.title} - After Artistry`}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />

          {/* After Pill Label */}
          <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-burgundy/85 backdrop-blur-md text-warmwhite text-xs uppercase tracking-widest font-sans font-semibold border border-white/20 pointer-events-none z-10 shadow-lg">
            After Artistry
          </div>

          {/* Before Image (Clipped Left Layer) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={currentSet.beforeImage}
              alt={`${currentSet.title} - Before Artistry`}
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                height: '100%'
              }}
            />
            {/* Before Pill Label */}
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-espresso/80 backdrop-blur-md text-warmwhite text-xs uppercase tracking-widest font-sans font-semibold border border-white/20 pointer-events-none z-10 shadow-lg">
              Before
            </div>
          </div>

          {/* Drag Divider Line & Bubbly Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-warmwhite shadow-[0_0_15px_rgba(100,29,53,0.4)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-warmwhite shadow-2xl border-2 border-rose-burgundy flex items-center justify-center text-burgundy pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
              <Sliders className="w-4 h-4 text-burgundy rotate-90" />
            </div>
          </div>
        </div>
      ) : (
        /* Side by Side Mode with Organic Rounded Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-2 border-blush bg-cream-pink group">
            <img
              src={currentSet.beforeImage}
              alt="Before Artistry"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-espresso/80 text-warmwhite text-xs uppercase tracking-widest font-sans font-semibold backdrop-blur-sm">
              Before
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-2 border-blush bg-cream-pink group">
            <img
              src={currentSet.afterImage}
              alt="After Artistry"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-burgundy text-warmwhite text-xs uppercase tracking-widest font-sans font-semibold backdrop-blur-sm shadow-sm">
              After Artistry
            </div>
          </div>
        </div>
      )}

      {/* Description Pill Box */}
      <div className="mt-6 p-6 rounded-3xl bg-warmwhite border border-blush shadow-bubbly flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
        <div>
          <h3 className="text-xl font-display font-medium text-burgundy">
            {currentSet.title}
          </h3>
          <p className="text-sm text-espresso/75 font-sans mt-0.5">
            {currentSet.description}
          </p>
        </div>
        <div className="text-xs uppercase font-sans font-bold tracking-wider text-rose-burgundy shrink-0 px-4 py-1.5 rounded-full bg-cream-pink border border-blush">
          {currentSet.details}
        </div>
      </div>

      {/* Honest Disclaimer */}
      <div className="mt-4 flex items-center gap-2 text-xs text-espresso/70 italic font-sans px-2">
        <AlertCircle className="w-3.5 h-3.5 text-rose-burgundy shrink-0" />
        <span>
          Note: Visual demonstration placeholders shown above during initial portfolio release. Client transformations will feature actual wedding client photographs upon consent.
        </span>
      </div>
    </div>
  );
}
