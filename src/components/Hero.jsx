import React from 'react';
import { ArrowDown, Play, Sparkles, Music, ShieldCheck, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ onQuickSelectSample }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-28 md:pb-36">
      
      {/* Ambient Radial Golden Shimmer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95vw] max-w-[850px] h-[450px] bg-gold-500/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-28 left-1/4 w-[80vw] max-w-[500px] h-[350px] bg-indigo-600/[0.05] blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle fine concentric circles representing Nada Brahma / Sound Vibrations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] border border-gold-500/[0.05] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] sm:w-[1250px] h-[950px] sm:h-[1250px] border border-white/[0.02] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/35 bg-navy-900/90 backdrop-blur-md shadow-gold-glow animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-ivory-200 font-semibold font-sans">
            Hindustani Classical Singing Companion • नाद ब्रह्म
          </span>
        </div>

        {/* Main Title with Gold Foil Gradient */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-ivory-50 leading-[1.05]">
          Raag<span className="text-gold-gradient font-normal italic">Space</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ivory-200/90 font-light leading-relaxed px-2">
          Master the divine architecture of Indian classical music. 
          Discover raags aligned with nature's 8 prahars, practice 20 canonical alankars across 6 thaats, and calibrate your voice with real-time tanpura, tabla, and pitch detection.
        </p>

        {/* Responsive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-4 pb-2 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#raags"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 hover:brightness-110 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore 11 Raags</span>
            <ArrowDown className="w-4 h-4 text-navy-950" />
          </a>

          <Link
            to="/riyaz"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide text-gold-200 border border-gold-500/50 hover:border-gold-400 bg-gold-500/15 hover:bg-gold-500/25 transition-all duration-300 shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Alankar Riyaz (20 Paltas)</span>
          </Link>

          <button
            onClick={onQuickSelectSample}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide text-ivory-200 border border-white/[0.1] hover:border-gold-400/60 bg-navy-900/80 hover:bg-navy-850 transition-all duration-300"
          >
            <Play className="w-4 h-4 text-gold-400 fill-gold-400/20" />
            <span>Sample (Raag Yaman)</span>
          </button>
        </div>

        {/* Luxury Stats / Value Strip (4 cols) */}
        <div className="pt-10 sm:pt-12 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto text-center">
          
          <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/[0.05] hover:border-gold-500/30 transition-all">
            <div className="font-serif text-3xl sm:text-4xl text-ivory-50 font-bold">11 Raags</div>
            <div className="text-[10px] sm:text-xs text-gold-400/90 tracking-widest uppercase mt-1 font-semibold">
              Canonical Scales
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/[0.05] hover:border-gold-500/30 transition-all">
            <div className="font-serif text-3xl sm:text-4xl text-ivory-50 font-bold">20 Alankars</div>
            <div className="text-[10px] sm:text-xs text-gold-400/90 tracking-widest uppercase mt-1 font-semibold">
              6-Thaat Palta Gym
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/[0.05] hover:border-gold-500/30 transition-all">
            <div className="font-serif text-3xl sm:text-4xl text-ivory-50 font-bold">8 Prahars</div>
            <div className="text-[10px] sm:text-xs text-gold-400/90 tracking-widest uppercase mt-1 font-semibold">
              Solar Time Clock
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-900/50 border border-white/[0.05] hover:border-gold-500/30 transition-all">
            <div className="font-serif text-3xl sm:text-4xl text-gold-300 font-bold">Sur Meter</div>
            <div className="text-[10px] sm:text-xs text-gold-400/90 tracking-widest uppercase mt-1 font-semibold">
              Live Pitch Detection
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
