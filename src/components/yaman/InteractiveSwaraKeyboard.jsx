import React, { useState } from 'react';
import { Volume2, Sparkles, Music } from 'lucide-react';
import { usePitch } from '../../context/PitchContext';
import { YAMAN_SWARAS } from '../../data/yamanPracticeData';
import { tonePlayer } from '../../utils/audioSynth';

export default function InteractiveSwaraKeyboard({ swaras = YAMAN_SWARAS, raagName = "Raag Yaman" }) {
  const { selectedRoot, getSwaraFreq } = usePitch();
  const [activeSwaraName, setActiveSwaraName] = useState(null);

  const handlePlaySwara = (swaraName) => {
    const freq = getSwaraFreq(swaraName);
    tonePlayer.playTone(freq, 0.95);
    setActiveSwaraName(swaraName);
    setTimeout(() => {
      setActiveSwaraName(null);
    }, 700);
  };

  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-navy-900/60 border border-white/[0.08] shadow-card-subtle">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Interactive Sargam Keypad</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50">
            Swaras of {raagName}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 font-light">
            Pitch is dynamically calibrated to your root: <strong className="text-gold-300 font-semibold">{selectedRoot.label}</strong>. Tap any swara to calibrate your vocal pitch.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-ivory-400/80">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
            <span>Vadi Swara</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full border border-gold-400 bg-gold-400/20" />
            <span>Samvadi</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <span>Altered (Komal/Teevra)</span>
          </div>
        </div>
      </div>

      {/* Swara Keypad Grid (Touch targets >= 56px height) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {swaras.map((swara) => {
          const freq = Math.round(getSwaraFreq(swara.name));
          const isActive = activeSwaraName === swara.name;
          const isVadi = swara.isVadi;
          const isSamvadi = swara.isSamvadi;
          const isTeevra = swara.isTeevra;

          return (
            <button
              key={swara.name}
              type="button"
              onClick={() => handlePlaySwara(swara.name)}
              className={`relative py-4 px-3 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center justify-between min-h-[96px] group select-none ${
                isActive
                  ? 'bg-gold-500 text-navy-950 border-gold-300 scale-105 shadow-gold-glow z-10'
                  : isVadi
                  ? 'bg-navy-950/90 text-ivory-50 border-gold-500/60 hover:border-gold-400 hover:bg-navy-900 shadow-gold-glow'
                  : isSamvadi
                  ? 'bg-navy-950/80 text-ivory-50 border-gold-500/35 hover:border-gold-400 hover:bg-navy-900'
                  : isTeevra
                  ? 'bg-navy-950/70 text-ivory-100 border-amber-500/35 hover:border-amber-400 hover:bg-navy-900'
                  : 'bg-navy-950/60 text-ivory-200 border-white/[0.08] hover:border-gold-500/35 hover:bg-navy-900'
              }`}
            >
              {/* Top Tag */}
              <span className={`text-[10px] tracking-wider uppercase font-semibold leading-none ${
                isActive ? 'text-navy-950' : isVadi ? 'text-gold-400' : isSamvadi ? 'text-gold-300/90' : isTeevra ? 'text-amber-400' : 'text-ivory-400/60'
              }`}>
                {isVadi ? '👑 Vadi' : isSamvadi ? 'Queen' : isTeevra ? 'Teevra' : swara.octave}
              </span>

              {/* Main Swara Glyph */}
              <div className="text-2xl sm:text-3xl font-serif font-bold tracking-wide my-1">
                {swara.name}
              </div>

              {/* Pitch in Hertz */}
              <div className={`text-[11px] font-mono leading-none ${
                isActive ? 'text-navy-900 font-bold' : 'text-ivory-400/70'
              }`}>
                {freq} Hz
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ivory-400/60">
        <span>Click or tap any swara to hear the pure acoustic pitch relative to your Sa.</span>
        <span className="hidden sm:inline font-mono">12-TET Shruti Calibrated</span>
      </div>
    </section>
  );
}
