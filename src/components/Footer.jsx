import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy-950 py-14 sm:py-16 text-ivory-300/70 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand & Motto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-ivory-100 tracking-wider">
              RaagSpace
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[11px] text-gold-400/90 tracking-widest uppercase">
              स्वर ब्रह्म
            </span>
          </div>
          <p className="text-ivory-400/60 max-w-sm text-xs font-light">
            Dedicated to the study, preservation, and singing practice of timeless Indian Classical ragas.
          </p>
        </div>

        {/* Center: Quote / Tradition Note */}
        <div className="text-center italic font-serif text-ivory-300/85 max-w-md text-sm border-y md:border-y-0 md:border-x border-white/[0.08] py-3 md:px-8">
          “Nada Brahma — Sound is Divine Consciousness.”
        </div>

        {/* Right: Links & copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex items-center gap-4 text-xs text-ivory-300/70">
            <a href="#raags" className="hover:text-gold-300 transition-colors">Choose Raag</a>
            <span>•</span>
            <a href="#principles" className="hover:text-gold-300 transition-colors">Vocal Guidance</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">Top</a>
          </div>
          <p className="text-ivory-400/40 text-[11px]">
            © {new Date().getFullYear()} RaagSpace. Crafted with devotion for music lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}
