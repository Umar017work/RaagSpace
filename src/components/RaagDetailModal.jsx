import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Play, Square, Volume2, Sparkles, Clock, Compass, BookOpen, Music, AlertCircle, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { tonePlayer } from '../utils/audioSynth';

export default function RaagDetailModal({ raag, onClose }) {
  const [isPlayingSeq, setIsPlayingSeq] = useState(false);
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!raag) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        tonePlayer.stopSequence();
        onClose();
      }
    };

    // Lock body scroll while modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
      tonePlayer.stopSequence();
    };
  }, [raag, onClose]);

  if (!raag) return null;

  const handlePlaySingleNote = (freq, index) => {
    tonePlayer.playTone(freq, 0.9);
    setActiveNoteIndex(index);
    setTimeout(() => setActiveNoteIndex(null), 800);
  };

  const handlePlayFullAroha = () => {
    if (isPlayingSeq) {
      tonePlayer.stopSequence();
      setIsPlayingSeq(false);
      setActiveNoteIndex(null);
      return;
    }

    setIsPlayingSeq(true);
    tonePlayer.playSequence(
      raag.swaraNotes,
      (note, index) => {
        setActiveNoteIndex(index);
      },
      () => {
        setIsPlayingSeq(false);
        setActiveNoteIndex(null);
      }
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-raag-title"
    >
      {/* Click outside to close */}
      <div 
        className="absolute inset-0" 
        onClick={() => {
          tonePlayer.stopSequence();
          onClose();
        }} 
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-navy-900 border border-gold-500/35 rounded-3xl shadow-2xl shadow-navy-950 overflow-hidden z-10 max-h-[92vh] sm:max-h-[88vh] flex flex-col">
        {/* Subtle decorative gold top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-gold-500/70 to-transparent flex-shrink-0" />

        {/* Modal Header */}
        <div className="p-5 sm:p-7 pb-4 flex items-start justify-between border-b border-white/[0.08] flex-shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/25">
                {raag.thaat} Thaat
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs text-ivory-300/80 font-mono">{raag.jati}</span>
              <span className="text-white/20">•</span>
              <span className="text-xs text-ivory-300/80">{raag.timeDisplay}</span>
            </div>
            
            <h3 id="modal-raag-title" className="text-3xl sm:text-4xl font-serif font-bold text-ivory-50 flex items-baseline gap-3">
              <span>{raag.name}</span>
              <span className="text-xl sm:text-2xl font-serif text-gold-400/90 font-normal">
                ({raag.hindiName})
              </span>
            </h3>
          </div>

          <button
            onClick={() => {
              tonePlayer.stopSequence();
              onClose();
            }}
            className="p-2 sm:p-2.5 rounded-full text-ivory-300/70 hover:text-ivory-50 hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all flex-shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Body (Scrollable with custom scrollbar) */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto">
          
          {/* Dedicated Practice Studio Banner for Yaman */}
          {raag.id === 'yaman' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-navy-950 border border-gold-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-gold-glow">
              <div>
                <div className="flex items-center gap-1.5 text-gold-300 font-semibold text-xs tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Dedicated Studio Available</span>
                </div>
                <div className="text-sm font-serif text-ivory-50 font-bold mt-0.5">
                  Raag Yaman Full Practice & Learning Studio
                </div>
                <div className="text-xs text-ivory-300/80 font-light mt-0.5">
                  Synchronized Bandish (Lyrics + Sargam), Speed Controls & Voice Recorder.
                </div>
              </div>

              <Link
                to="/raag/yaman"
                onClick={() => {
                  tonePlayer.stopSequence();
                  onClose();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gold-500 text-navy-950 hover:brightness-110 shadow-gold-glow transition-all flex-shrink-0"
              >
                <span>Open Studio</span>
                <ArrowRight className="w-3.5 h-3.5 text-navy-950" />
              </Link>
            </div>
          )}

          {/* Interactive Swara Pitch Keyboard */}
          <div className="p-4 sm:p-5 rounded-2xl bg-navy-950/90 border border-gold-500/25 shadow-inner">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="text-xs uppercase tracking-wider text-ivory-300 font-semibold flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-gold-400" />
                <span>Interactive Swara Pitch Keypad</span>
              </span>
              <button
                onClick={handlePlayFullAroha}
                className="self-start sm:self-auto text-xs text-gold-300 hover:text-gold-200 font-medium flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 transition-all"
              >
                {isPlayingSeq ? (
                  <>
                    <Square className="w-3 h-3 fill-gold-400" />
                    <span>Stop Sequence</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-gold-400" />
                    <span>Play Scale Sequence</span>
                  </>
                )}
              </button>
            </div>

            {/* Individual Swara Note Touch Buttons */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {raag.swaraNotes.map((swara, idx) => {
                const isActive = activeNoteIndex === idx;
                const isVadi = swara.isVadi;
                const isSamvadi = swara.isSamvadi;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePlaySingleNote(swara.freq, idx)}
                    className={`py-3 px-2 rounded-xl text-center transition-all border flex flex-col items-center justify-center min-h-[56px] ${
                      isActive
                        ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold scale-105 shadow-gold-glow'
                        : isVadi
                        ? 'bg-navy-900 text-gold-200 border-gold-500/50 hover:bg-navy-850'
                        : isSamvadi
                        ? 'bg-navy-900 text-ivory-50 border-ivory-300/40 hover:bg-navy-850'
                        : 'bg-navy-900/90 text-ivory-200 hover:border-gold-500/40 border-white/[0.08] hover:bg-navy-850'
                    }`}
                  >
                    <div className="text-base sm:text-lg font-serif font-bold leading-none">
                      {swara.name}
                    </div>
                    <div className="text-[10px] text-ivory-400/60 font-mono mt-1">
                      {Math.round(swara.freq)}Hz
                    </div>
                    {isVadi && (
                      <span className="text-[9px] text-gold-400 uppercase tracking-tighter font-semibold">
                        Vadi
                      </span>
                    )}
                    {isSamvadi && (
                      <span className="text-[9px] text-ivory-300 uppercase tracking-tighter">
                        Samvadi
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-ivory-400/60 mt-2.5 text-center">
              Tap any swara to sound its acoustic tone for vocal riyaz calibration (Root Sa = 261.63Hz).
            </p>
          </div>

          {/* High-Readability Notation Grid: Aroha, Avroha, Pakad */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5" />
              <span>Sargam Architecture</span>
            </h4>

            {/* Aroha Box */}
            <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/[0.08]">
              <div className="flex items-center justify-between text-xs text-gold-400/90 font-semibold mb-1">
                <span>AROHA (ASCENDING ORDER)</span>
                <span className="text-ivory-400/60 font-mono text-[11px]">Ascent</span>
              </div>
              <div className="text-base sm:text-xl font-serif text-ivory-50 tracking-wider font-medium">
                {raag.aroha}
              </div>
              <div className="text-xs font-mono text-ivory-400/70 mt-1">
                Standard notation: {raag.arohaSimple}
              </div>
            </div>

            {/* Avroha Box */}
            <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/[0.08]">
              <div className="flex items-center justify-between text-xs text-gold-400/90 font-semibold mb-1">
                <span>AVROHA (DESCENDING ORDER)</span>
                <span className="text-ivory-400/60 font-mono text-[11px]">Descent</span>
              </div>
              <div className="text-base sm:text-xl font-serif text-ivory-50 tracking-wider font-medium">
                {raag.avroha}
              </div>
              <div className="text-xs font-mono text-ivory-400/70 mt-1">
                Standard notation: {raag.avrohaSimple}
              </div>
            </div>

            {/* Pakad Box */}
            <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/[0.08]">
              <div className="flex items-center justify-between text-xs text-gold-400/90 font-semibold mb-1">
                <span>PAKAD (SIGNATURE CATCH-PHRASE)</span>
                <span className="text-ivory-400/60 font-mono text-[11px]">Essence</span>
              </div>
              <div className="text-base sm:text-xl font-serif text-gold-300/90 tracking-wider font-medium">
                {raag.pakad}
              </div>
            </div>
          </div>

          {/* Musical Details Strip: Vadi, Samvadi, Jati */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-navy-950/50 border border-white/[0.08] text-center">
            <div>
              <div className="text-[11px] text-ivory-400/70 uppercase tracking-wider">Vadi (King)</div>
              <div className="font-serif text-base sm:text-lg text-gold-300 font-bold mt-0.5">
                {raag.vadi}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-ivory-400/70 uppercase tracking-wider">Samvadi (Queen)</div>
              <div className="font-serif text-base sm:text-lg text-gold-300 font-bold mt-0.5">
                {raag.samvadi}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-ivory-400/70 uppercase tracking-wider">Jati & Level</div>
              <div className="text-xs sm:text-sm text-ivory-100 font-medium mt-1">
                {raag.difficulty}
              </div>
            </div>
          </div>

          {/* Explicit Musical Verification & Gharana Variations Section */}
          <div className={`p-4 rounded-2xl border ${
            raag.hasVerificationFlag 
              ? 'bg-gold-500/[0.04] border-gold-500/35' 
              : 'bg-navy-950/50 border-white/[0.08]'
          }`}>
            <div className="flex items-start gap-2.5">
              {raag.hasVerificationFlag ? (
                <AlertCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-gold-400/80 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h5 className="text-xs uppercase tracking-wider text-gold-300 font-bold mb-1">
                  Musicological Verification: {raag.verificationStatus}
                </h5>
                <p className="text-xs text-ivory-300/85 leading-relaxed font-light">
                  {raag.verificationNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Nuances and Aesthetic Character */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-gold-400/90 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Singing Character & Vocal Rasa</span>
            </h4>
            <p className="text-sm text-ivory-200/90 leading-relaxed font-light">
              {raag.description}
            </p>
          </div>

          {/* Classical & Film References */}
          {raag.popularSongs && (
            <div className="p-4 rounded-2xl bg-gold-500/[0.03] border border-gold-500/20 text-xs text-ivory-300/85">
              <span className="text-gold-300 font-semibold">Seminal Compositions & References: </span>
              <span>{raag.popularSongs}</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-navy-950/80 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-ivory-400/70 hidden sm:inline">
            RaagSpace • Hindustani Riyaz Companion
          </span>
          <button
            onClick={() => {
              tonePlayer.stopSequence();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/15 hover:bg-gold-500/25 text-gold-300 border border-gold-500/35 transition-all text-center"
          >
            Close Guide (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
