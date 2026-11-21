import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Music, Layers, Sparkles, BookOpen, Clock, ArrowRight, Zap } from 'lucide-react';
import { RAAGS_DATA } from '../data/raags';
import { ALANKARS_20 } from '../data/alankarsData';

export default function QuickSearchModal({ isOpen, onClose, onSelectRaag }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Raags
  const matchingRaags = RAAGS_DATA.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.hindiName.includes(q) ||
    r.thaat.toLowerCase().includes(q) ||
    r.vadi.toLowerCase().includes(q) ||
    r.mood.toLowerCase().includes(q)
  );

  // Search Alankars
  const matchingAlankars = ALANKARS_20.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.hindiName.includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.pattern.toLowerCase().includes(q) ||
    String(a.number) === q
  );

  const handleOpenRaagStudio = (raagId) => {
    onClose();
    navigate(`/raag/${raagId}`);
  };

  const handleOpenAlankarStudio = () => {
    onClose();
    navigate('/riyaz');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-navy-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-navy-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.08] bg-navy-950/90">
          <Search className="w-5 h-5 text-gold-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search raags, alankars, thaats, swaras (e.g. Bhupali, Yaman, Komal Re)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-ivory-50 placeholder-ivory-400/40 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ivory-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-navy-800 text-ivory-400 border border-white/[0.08]">
            ESC
          </kbd>
        </div>

        {/* Search Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          
          {/* Quick Actions Shortcuts */}
          {!query && (
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-wider text-ivory-400/60 font-semibold px-2">
                Quick Navigation & Studios
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => handleOpenAlankarStudio()}
                  className="p-3 rounded-2xl bg-navy-950/70 border border-gold-500/25 hover:border-gold-500/50 hover:bg-navy-950 text-left flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm text-ivory-50 group-hover:text-gold-200">
                        Alankar & Riyaz Studio
                      </div>
                      <div className="text-[11px] text-ivory-400/70">
                        20 Paltas across 6 Thaats
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ivory-400 group-hover:text-gold-300 transform group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => handleOpenRaagStudio('bhupali')}
                  className="p-3 rounded-2xl bg-navy-950/70 border border-gold-500/25 hover:border-gold-500/50 hover:bg-navy-950 text-left flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                      <Music className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm text-ivory-50 group-hover:text-gold-200">
                        Raag Bhupali Studio
                      </div>
                      <div className="text-[11px] text-ivory-400/70">
                        Audav scale & Sargam Geet
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ivory-400 group-hover:text-gold-300 transform group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          )}

          {/* Raags Results */}
          {matchingRaags.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold px-2 flex items-center justify-between">
                <span>Matching Raags ({matchingRaags.length})</span>
                <span className="text-ivory-400/60 font-mono">Hindustani Library</span>
              </div>
              <div className="space-y-1">
                {matchingRaags.map(raag => (
                  <div
                    key={raag.id}
                    onClick={() => {
                      if (onSelectRaag) onSelectRaag(raag);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-navy-950/60 border border-white/[0.04] hover:border-gold-500/40 hover:bg-navy-950 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-navy-900 border border-white/[0.08] flex items-center justify-center font-serif text-gold-400 font-bold text-xs">
                        {raag.name.charAt(5) || 'R'}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm text-ivory-100 group-hover:text-gold-300 flex items-baseline gap-2">
                          <span>{raag.name}</span>
                          <span className="text-xs text-gold-400/80 font-normal">({raag.hindiName})</span>
                        </div>
                        <div className="text-[11px] text-ivory-400/70 font-light">
                          {raag.thaat} Thaat • Jati: {raag.jati} • Vadi: {raag.vadi}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenRaagStudio(raag.id);
                        }}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-gold-500/10 text-gold-300 border border-gold-500/30 hover:bg-gold-500 hover:text-navy-950 transition-all"
                      >
                        Studio →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alankars Results */}
          {matchingAlankars.length > 0 && (
            <div className="space-y-1.5 pt-2">
              <div className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold px-2 flex items-center justify-between">
                <span>Matching Alankars ({matchingAlankars.length})</span>
                <span className="text-ivory-400/60 font-mono">Palta Gym</span>
              </div>
              <div className="space-y-1">
                {matchingAlankars.map(alankar => (
                  <div
                    key={alankar.id}
                    onClick={() => handleOpenAlankarStudio()}
                    className="p-3 rounded-xl bg-navy-950/60 border border-white/[0.04] hover:border-amber-500/40 hover:bg-navy-950 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-ivory-100 group-hover:text-amber-300 flex items-baseline gap-2">
                        <span>Alankar #{alankar.number}: {alankar.name}</span>
                        <span className="text-xs text-amber-400/80 font-normal">({alankar.hindiName})</span>
                      </div>
                      <div className="text-[11px] text-ivory-400/70 font-mono mt-0.5">
                        {alankar.pattern}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-navy-900 border border-white/[0.08] text-ivory-400">
                      {alankar.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {query && matchingRaags.length === 0 && matchingAlankars.length === 0 && (
            <div className="py-12 text-center text-ivory-400/70 text-sm">
              No matching raags or alankars found for "{query}".
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-navy-950/90 border-t border-white/[0.06] text-[11px] text-ivory-400/60 flex items-center justify-between">
          <span>Search through all 11 raags and 20 canonical alankars</span>
          <span className="text-gold-400/80">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
