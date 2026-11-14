import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Sparkles, Columns, SplitSquareVertical, AlertCircle } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' or 'side-by-side'
  const containerRef = useRef(null);

  const transformationSets = [
    {
      id: 1,
      title: "Bridal Muhurtham Transformation",
      description: "Pre-makeup skin preparation elevated to radiant bridal glow with defined eyes and traditional bridal finish.",
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
        {/* Set Selector */}
        <div className="flex items-center gap-2">
          {transformationSets.map((set, idx) => (
            <button
              key={set.id}
              onClick={() => {
                setActiveSetIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-wider transition-all ${
                activeSetIndex === idx
                  ? 'bg-espresso text-ivory shadow-md'
                  : 'bg-white/80 hover:bg-white text-taupe border border-gold/20'
              }`}
            >
              Look {idx + 1}: {set.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* View Mode Toggle: Slider vs Side-by-Side */}
        <div className="flex items-center p-1 rounded-full bg-white/80 border border-gold/30">
          <button
            onClick={() => setViewMode('slider')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-colors ${
              viewMode === 'slider'
                ? 'bg-gold text-white font-medium'
                : 'text-taupe hover:text-espresso'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            Interactive Slider
          </button>
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-colors ${
              viewMode === 'side-by-side'
                ? 'bg-gold text-white font-medium'
                : 'text-taupe hover:text-espresso'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            Side by Side
          </button>
        </div>
      </div>

      {/* Main Comparison Display */}
      {viewMode === 'slider' ? (
        /* Interactive Split Slider */
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-gold/40 select-none bg-beige-soft cursor-ew-resize"
        >
          {/* After Image (Full Background) */}
          <img
            src={currentSet.afterImage}
            alt={`${currentSet.title} - After Artistry`}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />

          {/* After Label (Bottom Right) */}
          <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full bg-espresso/80 backdrop-blur-md text-ivory text-xs uppercase tracking-widest font-sans font-medium border border-gold/30 pointer-events-none z-10">
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
            {/* Before Label (Bottom Left) */}
            <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-espresso/80 backdrop-blur-md text-ivory text-xs uppercase tracking-widest font-sans font-medium border border-gold/30 pointer-events-none z-10">
              Before
            </div>
          </div>

          {/* Drag Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-gold flex items-center justify-center text-espresso pointer-events-auto cursor-ew-resize">
              <Sliders className="w-4 h-4 text-gold rotate-90" />
            </div>
          </div>
        </div>
      ) : (
        /* Side by Side Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before Card */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gold/30 bg-beige-soft group">
            <img
              src={currentSet.beforeImage}
              alt="Before Artistry"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-espresso/80 text-white text-xs uppercase tracking-widest font-sans font-medium backdrop-blur-sm">
              Before
            </div>
          </div>

          {/* After Card */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gold/30 bg-beige-soft group">
            <img
              src={currentSet.afterImage}
              alt="After Artistry"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-white text-xs uppercase tracking-widest font-sans font-medium backdrop-blur-sm">
              After Artistry
            </div>
          </div>
        </div>
      )}

      {/* Description & Instruction Card */}
      <div className="mt-6 p-6 rounded-2xl bg-white/70 border border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-display font-medium text-espresso">
            {currentSet.title}
          </h3>
          <p className="text-sm text-taupe font-sans mt-0.5">
            {currentSet.description}
          </p>
        </div>
        <div className="text-xs uppercase font-sans font-semibold tracking-wider text-gold shrink-0">
          {currentSet.details}
        </div>
      </div>

      {/* Transparent Editorial Disclaimer (As specified in prompt) */}
      <div className="mt-4 flex items-center gap-2 text-xs text-taupe/80 italic font-sans px-2">
        <AlertCircle className="w-3.5 h-3.5 text-gold shrink-0" />
        <span>
          Note: Visual demonstration placeholders shown above during initial release. Client transformations will be updated with actual wedding photographs upon client consent.
        </span>
      </div>
    </div>
  );
}
