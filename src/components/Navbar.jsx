import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X, Clock, Layers, Trophy, BookOpen, Search } from 'lucide-react';

export default function Navbar({ onOpenPractice, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-navy-950/90 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gold-500/40 bg-navy-900/90 flex items-center justify-center shadow-gold-glow group-hover:border-gold-400 transition-colors flex-shrink-0">
            <span className="text-gold-400 font-serif text-xl select-none font-semibold">
              र
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif tracking-wider text-ivory-50 font-bold group-hover:text-gold-300 transition-colors">
                RaagSpace
              </span>
              <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded border border-gold-500/30 text-gold-400 bg-gold-500/10 font-sans font-semibold">
                Classical
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-wide text-ivory-300/80">
          <a href="#raags" className="hover:text-gold-300 transition-colors">
            Raags (11)
          </a>
          <Link to="/riyaz" className="text-gold-300 hover:text-gold-200 font-semibold transition-colors flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Alankar Riyaz (20)</span>
          </Link>
          <a href="#prahar-cycle" className="hover:text-gold-300 transition-colors flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-400/80" />
            <span>Prahar Clock</span>
          </a>
          <a href="#thaat-matrix" className="hover:text-gold-300 transition-colors flex items-center gap-1">
            <Layers className="w-3 h-3 text-gold-400/80" />
            <span>10 Thaats</span>
          </a>
          <a href="#swar-gyaan" className="hover:text-gold-300 transition-colors flex items-center gap-1">
            <Trophy className="w-3 h-3 text-gold-400/80" />
            <span>Swar Gyaan</span>
          </a>
          <a href="#riyaz-journal" className="hover:text-gold-300 transition-colors flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-gold-400/80" />
            <span>Journal</span>
          </a>
          <Link to="/raag/bhupali" className="text-ivory-300 hover:text-gold-200 transition-colors">
            Raag Bhupali
          </Link>
        </nav>

        {/* Action Button & Search */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium text-ivory-300/80 bg-navy-900 border border-white/[0.08] hover:border-gold-500/40 hover:text-white transition-all shadow-sm"
            title="Search Raags and Alankars (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono bg-navy-950 text-ivory-400 border border-white/[0.06]">
              Ctrl+K
            </kbd>
          </button>

          <a
            href="#raags"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 border border-gold-500/40 hover:border-gold-400 bg-gold-500/[0.08] hover:bg-gold-500/20 transition-all shadow-gold-glow"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Choose Raag</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-ivory-300 hover:text-ivory-50 bg-navy-900/80 border border-white/[0.08]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 border-b border-white/[0.08] px-6 py-5 space-y-3.5 backdrop-blur-2xl animate-fade-in text-sm">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenSearch) onOpenSearch();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-navy-950 border border-gold-500/30 text-gold-300 font-medium text-xs mb-2"
          >
            <span className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              <span>Search Raags & Alankars...</span>
            </span>
            <span className="text-[10px] uppercase font-mono text-ivory-400">Ctrl+K</span>
          </button>

          <a
            href="#raags"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ivory-200 hover:text-gold-300 py-1"
          >
            Explore Raags (11)
          </a>
          <Link
            to="/riyaz"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-gold-300 hover:text-gold-200 py-1"
          >
            🎵 Alankar Riyaz Studio (20 Alankars & 6 Thaats) →
          </Link>
          <Link
            to="/raag/bhupali"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-gold-300 hover:text-gold-200 py-1"
          >
            ✨ Raag Bhupali Practice Studio →
          </Link>
          <a
            href="#prahar-cycle"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ivory-200 hover:text-gold-300 py-1"
          >
            24-Hour Prahar Clock
          </a>
          <a
            href="#thaat-matrix"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ivory-200 hover:text-gold-300 py-1"
          >
            10 Thaats & Scale Comparator
          </a>
          <a
            href="#swar-gyaan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ivory-200 hover:text-gold-300 py-1"
          >
            Swar Gyaan (Ear Training Game)
          </a>
          <a
            href="#riyaz-journal"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ivory-200 hover:text-gold-300 py-1"
          >
            Riyaz Log & Streak Tracker
          </a>
          <Link
            to="/raag/yaman"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-gold-300 hover:text-gold-200 py-1"
          >
            Open Dedicated Practice Studio (Yaman) →
          </Link>
        </div>
      )}
    </header>
  );
}
