import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TIME_CATEGORIES } from '../data/raags';
import { Play, Square, Sun, Moon, Search, Music, ChevronRight, Info, Sparkles } from 'lucide-react';
import { tonePlayer } from '../utils/audioSynth';

export default function RaagGrid({ raags, onSelectRaag }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingRaagId, setPlayingRaagId] = useState(null);
  const [activeNoteName, setActiveNoteName] = useState(null);

  // Filter raags by time category and search query
  const filteredRaags = raags.filter(raag => {
    const matchesCategory = selectedCategory === 'all' || raag.timeCategory === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      raag.name.toLowerCase().includes(q) ||
      raag.thaat.toLowerCase().includes(q) ||
      raag.mood.toLowerCase().includes(q) ||
      raag.jati.toLowerCase().includes(q) ||
      raag.vadi.toLowerCase().includes(q) ||
      raag.hindiName.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handlePlayAroha = (e, raag) => {
    e.stopPropagation();

    if (playingRaagId === raag.id) {
      tonePlayer.stopSequence();
      setPlayingRaagId(null);
      setActiveNoteName(null);
      return;
    }

    tonePlayer.stopSequence();
    setPlayingRaagId(raag.id);

    tonePlayer.playSequence(
      raag.swaraNotes,
      (noteName) => {
        setActiveNoteName(noteName);
      },
      () => {
        setPlayingRaagId(null);
        setActiveNoteName(null);
      }
    );
  };

  return (
    <section id="raags" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs sm:text-sm tracking-widest uppercase mb-3 font-semibold px-3 py-1 rounded-full bg-gold-500/[0.06] border border-gold-500/20">
          <Music className="w-3.5 h-3.5" />
          <span>Curated Melodic Scales • 10 Canonical Raags</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ivory-50 font-bold mb-4 tracking-tight">
          Choose a Raag
        </h2>
        <p className="text-ivory-200/80 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
          Each raag possesses an authentic tonal architecture, emotional temperament, and alignment with the clock of nature. 
          Select any raag to study its sargam and acoustic vibrations.
        </p>
      </div>

      {/* Controls Bar: Categories & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        
        {/* Category Pills (Touch-friendly & horizontally scrollable on small mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-navy-900/90 border border-white/[0.08] backdrop-blur-md overflow-x-auto no-scrollbar scroll-smooth">
          {TIME_CATEGORIES.map(category => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                  isSelected
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-sm font-semibold'
                    : 'text-ivory-300/70 hover:text-ivory-100 hover:bg-white/[0.04]'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Minimal Search Input */}
        <div className="relative w-full md:w-80 flex-shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-400/60" />
          <input
            type="text"
            placeholder="Search by raag, thaat, vadi or mood..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-navy-900/80 border border-white/[0.08] focus:border-gold-500/60 rounded-xl text-xs sm:text-sm text-ivory-50 placeholder-ivory-400/40 focus:outline-none focus:ring-1 focus:ring-gold-500/40 transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Results Count & Filter Status */}
      <div className="flex items-center justify-between text-xs text-ivory-400/70 mb-6 px-1">
        <span>Showing <strong className="text-gold-300 font-semibold">{filteredRaags.length}</strong> of {raags.length} raags</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-gold-400/80 hover:text-gold-300 hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredRaags.length === 0 && (
        <div className="py-16 text-center border border-white/[0.08] rounded-3xl bg-navy-900/40 p-8">
          <p className="text-ivory-200 text-lg font-serif">No raags match your criteria.</p>
          <p className="text-xs text-ivory-400/70 mt-1">Try resetting the search query or selecting ‘All Raags’.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-5 px-5 py-2 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-300 border border-gold-500/30 hover:bg-gold-500/20 transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Raag Cards Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredRaags.map(raag => {
          const isPlaying = playingRaagId === raag.id;

          return (
            <div
              key={raag.id}
              onClick={() => onSelectRaag(raag)}
              className="group relative cursor-pointer rounded-3xl bg-navy-900/60 hover:bg-navy-900/95 border border-white/[0.08] hover:border-gold-500/45 p-6 sm:p-7 transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Title, Devanagari & Tags */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50 group-hover:text-gold-200 transition-colors tracking-tight">
                      {raag.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs sm:text-sm font-serif text-gold-400/90 font-medium">
                        {raag.hindiName}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-[11px] text-ivory-400/75 uppercase tracking-wider font-mono">
                        {raag.jati}
                      </span>
                    </div>
                  </div>
                  
                  {/* Mood Tag */}
                  <span className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full border border-gold-500/25 text-gold-300/90 bg-gold-500/[0.06] flex-shrink-0">
                    {raag.moodTag}
                  </span>
                </div>

                {/* Subtitle Details: Prahar & Thaat */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-ivory-300/80 pt-3 pb-4 border-t border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-gold-400/90">
                    {raag.timeCategory === 'morning' ? (
                      <Sun className="w-3.5 h-3.5" />
                    ) : (
                      <Moon className="w-3.5 h-3.5" />
                    )}
                    <span className="text-ivory-200">{raag.timeDisplay.split('(')[0]}</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <div>
                    <span className="text-ivory-400/60">Thaat:</span>{' '}
                    <span className="text-ivory-100 font-medium">{raag.thaat}</span>
                  </div>
                </div>

                {/* Highly Readable Sargam Notation Box */}
                <div className="my-3 p-4 rounded-2xl bg-navy-950/90 border border-white/[0.08] group-hover:border-gold-500/30 transition-colors">
                  
                  {/* Sargam Header: Label & Vadi/Samvadi Callouts */}
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="uppercase tracking-widest text-gold-400/90 font-semibold flex items-center gap-1">
                      <span>Aroha (Ascent)</span>
                    </span>
                    <div className="text-[11px] text-ivory-300/80 flex items-center gap-1.5">
                      <span className="text-gold-300 font-semibold">Vadi: {raag.vadi.split(' ')[0]}</span>
                      <span className="text-white/20">|</span>
                      <span>Samvadi: {raag.samvadi.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Clean Primary Sargam String */}
                  <div className="text-base sm:text-lg font-serif tracking-wider text-ivory-50 font-medium leading-relaxed">
                    {raag.aroha}
                  </div>

                  {/* Visual Swara Scale Sequence Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-white/[0.06]">
                    {raag.swaraNotes.map((note, nIdx) => {
                      const isVadi = note.isVadi;
                      const isSamvadi = note.isSamvadi;
                      const isCurrentPlaying = isPlaying && activeNoteName === note.name;

                      return (
                        <span
                          key={nIdx}
                          className={`text-xs px-2 py-0.5 rounded-md font-mono transition-all border ${
                            isCurrentPlaying
                              ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold scale-110 shadow-gold-glow'
                              : isVadi
                              ? 'bg-gold-500/15 text-gold-300 border-gold-500/40 font-semibold'
                              : isSamvadi
                              ? 'bg-ivory-200/10 text-ivory-100 border-ivory-300/30'
                              : 'bg-navy-900/60 text-ivory-300/70 border-white/[0.04]'
                          }`}
                          title={`${note.name} ${isVadi ? '(Vadi Swara)' : isSamvadi ? '(Samvadi Swara)' : ''}`}
                        >
                          {note.name}
                          {isVadi && <span className="ml-0.5 text-[9px] text-gold-400 font-bold">★</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Verification Notice Pill if applicable */}
                {raag.hasVerificationFlag && (
                  <div className="mb-3 flex items-center gap-1.5 text-[11px] text-gold-400/80 bg-gold-500/[0.04] px-2.5 py-1 rounded-lg border border-gold-500/20">
                    <Info className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{raag.verificationStatus}</span>
                  </div>
                )}

                {/* Short Nuance Description */}
                <p className="text-xs text-ivory-300/75 leading-relaxed line-clamp-2 mb-4 font-light">
                  {raag.description}
                </p>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between gap-3">
                {/* Audio Preview Tone Button */}
                <button
                  type="button"
                  onClick={(e) => handlePlayAroha(e, raag)}
                  className={`min-h-[40px] inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isPlaying
                      ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                      : 'text-gold-300/90 hover:text-gold-200 bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30'
                  }`}
                  title="Hear sequential swaras of Aroha"
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>{activeNoteName || 'Singing...'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-gold-400/30 text-gold-400" />
                      <span>Hear Aroha</span>
                    </>
                  )}
                </button>

                {/* View Details Link & Yaman Studio Link */}
                <div className="flex items-center gap-2">
                  {raag.id === 'yaman' && (
                    <Link
                      to="/raag/yaman"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-300 hover:text-gold-200 px-2.5 py-1.5 rounded-lg bg-gold-500/15 border border-gold-500/35 hover:bg-gold-500/25 transition-all shadow-sm"
                      title="Open dedicated practice page with Bandish & Voice Recorder"
                    >
                      <span>Studio</span>
                      <ChevronRight className="w-3 h-3 text-gold-400" />
                    </Link>
                  )}

                  <div className="inline-flex items-center gap-1 text-xs font-medium text-ivory-300/70 group-hover:text-gold-300 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
