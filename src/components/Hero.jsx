import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero({ onQuickSelectSample }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-28 md:pb-36">
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[350px] bg-gold-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-24 left-1/4 w-[80vw] max-w-[450px] h-[300px] bg-indigo-600/[0.06] blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle fine concentric circles representing Nada / Resonance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] border border-gold-500/[0.04] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] sm:w-[1300px] h-[1100px] sm:h-[1300px] border border-white/[0.02] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-gold-500/30 bg-navy-900/80 backdrop-blur-sm mb-6 sm:mb-8 shadow-gold-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-ivory-200 font-medium">
            Hindustani Classical Singing Companion
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-tight text-ivory-50 mb-5 sm:mb-6 leading-tight">
          Raag<span className="text-gold-gradient font-normal italic">Space</span>
        </h1>

        {/* Short Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ivory-200/90 font-light leading-relaxed mb-8 sm:mb-10 px-2">
          Learn, internalize, and sing the timeless melodies of Indian classical music. 
          Discover raags through their distinct swaras, daily time cycles, and contemplative moods.
        </p>

        {/* Responsive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#raags"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:brightness-110 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Choose a Raag</span>
            <ArrowDown className="w-4 h-4 text-navy-950" />
          </a>

          <button
            onClick={onQuickSelectSample}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide text-ivory-200 border border-gold-500/30 hover:border-gold-400/60 bg-navy-900/60 hover:bg-navy-850/80 transition-all duration-300"
          >
            <Play className="w-4 h-4 text-gold-400 fill-gold-400/20" />
            <span>Hear Sample (Raag Yaman)</span>
          </button>
        </div>

        {/* Minimal metadata strip (2 cols mobile, 4 cols desktop) */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto text-center">
          <div className="p-2 sm:p-0">
            <div className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold">10 Raags</div>
            <div className="text-[10px] sm:text-xs text-ivory-400/70 tracking-wider uppercase mt-1">Foundational Scales</div>
          </div>
          <div className="p-2 sm:p-0">
            <div className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold">8 Prahars</div>
            <div className="text-[10px] sm:text-xs text-ivory-400/70 tracking-wider uppercase mt-1">Time Alignment</div>
          </div>
          <div className="p-2 sm:p-0">
            <div className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold">Aroha & Avroha</div>
            <div className="text-[10px] sm:text-xs text-ivory-400/70 tracking-wider uppercase mt-1">Guided Sargam</div>
          </div>
          <div className="p-2 sm:p-0">
            <div className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold">Microtonal Swaras</div>
            <div className="text-[10px] sm:text-xs text-ivory-400/70 tracking-wider uppercase mt-1">Acoustic Pitch</div>
          </div>
        </div>

      </div>
    </section>
  );
}
