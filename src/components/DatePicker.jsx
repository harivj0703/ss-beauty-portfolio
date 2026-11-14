import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, Sparkles, X } from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function DatePicker({
  value = '',
  onChange,
  minDate = '',
  error = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Initialize view year & month from selected value or today
  const today = new Date();
  const todayStr = minDate || today.toISOString().split('T')[0];

  const initialDate = value ? new Date(value) : today;
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());

  // Close calendar popover when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Sync view year/month when value changes externally
  useEffect(() => {
    if (value) {
      const d = new Date(value);
      if (!isNaN(d.getTime())) {
        setViewYear(d.getFullYear());
        setViewMonth(d.getMonth());
      }
    }
  }, [value]);

  // Helper to format date string YYYY-MM-DD
  const formatDateStr = (y, m, d) => {
    const mm = String(m + 1).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    return `${y}-${mm}-${dd}`;
  };

  // Helper to get formatted display label (e.g. "Sat, 21 Nov 2026")
  const getFormattedDisplay = (dateStr) => {
    if (!dateStr) return '';
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const dateObj = new Date(y, m - 1, d);
      return dateObj.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Month navigation
  const prevMonth = (e) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewYear((prev) => prev - 1);
      setViewMonth(11);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const nextMonth = (e) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewYear((prev) => prev + 1);
      setViewMonth(0);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  // Check if previous month should be disabled
  const [minY, minM] = todayStr.split('-').map(Number);
  const isPrevMonthDisabled =
    viewYear < minY || (viewYear === minY && viewMonth <= minM - 1);

  // Generate days in view month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sun

  const handleDaySelect = (day, e) => {
    e.stopPropagation();
    const dateStr = formatDateStr(viewYear, viewMonth, day);
    if (dateStr < todayStr) return; // Prevent past dates

    if (onChange) {
      onChange(dateStr);
    }
    setIsOpen(false);
  };

  // Quick date shortcut generator
  const getQuickShortcuts = () => {
    const list = [];

    // Tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    list.push({
      label: 'Tomorrow',
      dateStr: formatDateStr(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate())
    });

    // Upcoming Saturday
    const sat = new Date(today);
    const dayOfWeek = sat.getDay();
    const daysUntilSat = (6 - dayOfWeek + 7) % 7 || 7;
    sat.setDate(sat.getDate() + daysUntilSat);
    list.push({
      label: 'This Saturday',
      dateStr: formatDateStr(sat.getFullYear(), sat.getMonth(), sat.getDate())
    });

    // Upcoming Sunday
    const sun = new Date(today);
    const daysUntilSun = (7 - sun.getDay()) % 7 || 7;
    sun.setDate(sun.getDate() + daysUntilSun);
    list.push({
      label: 'This Sunday',
      dateStr: formatDateStr(sun.getFullYear(), sun.getMonth(), sun.getDate())
    });

    // +1 Month
    const nextM = new Date(today);
    nextM.setMonth(nextM.getMonth() + 1);
    list.push({
      label: '+1 Month',
      dateStr: formatDateStr(nextM.getFullYear(), nextM.getMonth(), nextM.getDate())
    });

    return list;
  };

  const shortcuts = getQuickShortcuts();

  return (
    <div ref={containerRef} className="relative w-full text-left">
      {/* Clickable Select Input Field */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full pl-11 pr-4 py-3.5 rounded-full border font-sans text-sm bg-cream-pink/30 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all flex items-center justify-between cursor-pointer text-left select-none ${
          error ? 'border-rose-400 bg-rose-50/40' : isOpen ? 'border-burgundy ring-2 ring-rose-burgundy/30 bg-white' : 'border-blush'
        }`}
      >
        <CalendarIcon className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        
        {value ? (
          <span className="font-semibold text-burgundy truncate">
            {getFormattedDisplay(value)}
          </span>
        ) : (
          <span className="text-espresso/50 font-normal">
            Select preferred event date...
          </span>
        )}

        <span className="text-[11px] uppercase tracking-wider font-bold text-rose-burgundy px-2.5 py-0.5 rounded-full bg-cream-pink/70 border border-blush/60 shrink-0 ml-2">
          {isOpen ? 'Close' : 'Choose'}
        </span>
      </button>

      {/* Popover Visual Calendar Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 sm:right-auto sm:w-[340px] mt-2 p-4 sm:p-5 rounded-3xl bg-warmwhite border-2 border-blush shadow-2xl z-50 overflow-hidden"
          >
            {/* Quick Shortcuts Bar */}
            <div className="mb-3.5 pb-3 border-b border-blush/70">
              <div className="text-[10px] uppercase font-sans font-bold tracking-widest text-espresso/60 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-rose-burgundy" />
                <span>Quick Select</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {shortcuts.map((sc) => (
                  <button
                    key={sc.label}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onChange) onChange(sc.dateStr);
                      setIsOpen(false);
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold transition-all ${
                      value === sc.dateStr
                        ? 'bg-burgundy text-warmwhite shadow-xs'
                        : 'bg-cream-pink hover:bg-blush/60 text-burgundy border border-blush/80'
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Month & Year Header with Navigation Arrows */}
            <div className="flex items-center justify-between mb-3 px-1">
              <button
                type="button"
                onClick={prevMonth}
                disabled={isPrevMonthDisabled}
                className="w-8 h-8 rounded-full flex items-center justify-center text-burgundy hover:bg-cream-pink disabled:opacity-30 disabled:pointer-events-none transition-colors border border-blush/50"
                aria-label="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="text-sm font-display font-semibold text-burgundy tracking-wide">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </div>

              <button
                type="button"
                onClick={nextMonth}
                className="w-8 h-8 rounded-full flex items-center justify-center text-burgundy hover:bg-cream-pink transition-colors border border-blush/50"
                aria-label="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Day Names Header Row */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
              {DAY_NAMES.map((d, idx) => (
                <div
                  key={d}
                  className={`text-[10px] uppercase font-sans font-bold tracking-wider py-1 ${
                    idx === 0 || idx === 6 ? 'text-rose-burgundy font-extrabold' : 'text-espresso/60'
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty padding cells before 1st day of month */}
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="w-full aspect-square" />
              ))}

              {/* Days in Month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const dateStr = formatDateStr(viewYear, viewMonth, dayNum);
                const isPast = dateStr < todayStr;
                const isSelected = value === dateStr;
                const isCurrentToday = dateStr === todayStr;

                return (
                  <button
                    key={dateStr}
                    type="button"
                    disabled={isPast}
                    onClick={(e) => handleDaySelect(dayNum, e)}
                    className={`w-full aspect-square rounded-full text-xs font-sans font-semibold transition-all flex items-center justify-center relative select-none ${
                      isSelected
                        ? 'bg-burgundy text-warmwhite font-bold shadow-burgundy-glow scale-105 z-10'
                        : isPast
                        ? 'text-espresso/25 cursor-not-allowed bg-transparent'
                        : 'text-espresso hover:bg-cream-pink hover:text-burgundy hover:scale-105 active:scale-95'
                    } ${isCurrentToday && !isSelected ? 'border border-rose-burgundy/50 font-bold text-rose-burgundy' : ''}`}
                  >
                    <span>{dayNum}</span>
                    {isSelected && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-warmwhite"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Date Summary & Clear Action */}
            {value && (
              <div className="mt-3 pt-2.5 border-t border-blush/60 flex items-center justify-between text-xs">
                <span className="text-espresso/70 truncate text-[11px]">
                  Selected: <strong className="text-burgundy">{getFormattedDisplay(value)}</strong>
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onChange) onChange('');
                  }}
                  className="text-rose-burgundy hover:text-burgundy text-[11px] font-semibold underline underline-offset-2 ml-2 shrink-0"
                >
                  Clear
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
