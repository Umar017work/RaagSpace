import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenPractice }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-navy-950/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3">
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
              <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded border border-gold-500/30 text-gold-400 bg-gold-500/5 font-sans">
                Classical
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-ivory-300/80">
          <a href="#raags" className="hover:text-gold-300 transition-colors">
            Explore Raags (10)
          </a>
          <a href="#principles" className="hover:text-gold-300 transition-colors">
            Singing Guide
          </a>
          <a href="#tanpura" onClick={(e) => { e.preventDefault(); onOpenPractice(); }} className="hover:text-gold-300 transition-colors">
            Sample Practice
          </a>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#raags"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 border border-gold-500/40 hover:border-gold-400 bg-gold-500/[0.06] hover:bg-gold-500/15 transition-all shadow-gold-glow"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Choose Raag</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-ivory-300 hover:text-ivory-50 bg-navy-900/80 border border-white/[0.08]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900/95 border-b border-white/[0.08] px-6 py-5 space-y-4 backdrop-blur-xl animate-fadeIn">
          <a
            href="#raags"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-ivory-200 hover:text-gold-300 py-1"
          >
            Explore Raags (10)
          </a>
          <a
            href="#principles"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-ivory-200 hover:text-gold-300 py-1"
          >
            Singing Foundations (Riyaz)
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPractice();
            }}
            className="w-full text-left text-sm font-medium text-gold-300 py-1 flex items-center justify-between"
          >
            <span>Preview Raag Yaman</span>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      )}
    </header>
  );
}
