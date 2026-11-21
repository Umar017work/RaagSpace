import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, TrendingUp, Sparkles, Youtube, CheckCircle } from 'lucide-react';
import { usePitch } from '../../context/PitchContext';
import { tonePlayer } from '../../utils/audioSynth';
import { PYRAMID_ALANKAR } from '../../data/alankarsData';

export default function PyramidAlankarModule({ onOpenVideo }) {
  const { selectedRoot, getSwaraFreq } = usePitch();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  
  const timerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const stepIndexRef = useRef(-1);

  const activeTier = PYRAMID_ALANKAR.steps.find(s => s.level === selectedLevel) || PYRAMID_ALANKAR.steps[0];

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    stopPlayback();
  }, [selectedLevel]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const stopPlayback = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    isPlayingRef.current = false;
    stepIndexRef.current = -1;
    setCurrentStepIndex(-1);
  };

  const playLevel = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    setIsPlaying(true);
    isPlayingRef.current = true;
    stepIndexRef.current = 0;
    setCurrentStepIndex(0);

    const notes = activeTier.notes;
    const freq = getSwaraFreq(notes[0]);
    tonePlayer.playTone(freq, 0.6);

    const intervalMs = 600;
    timerRef.current = setInterval(() => {
      if (!isPlayingRef.current) return;
      const nextIdx = stepIndexRef.current + 1;
      if (nextIdx >= notes.length) {
        stopPlayback();
        return;
      }
      stepIndexRef.current = nextIdx;
      setCurrentStepIndex(nextIdx);
      const f = getSwaraFreq(notes[nextIdx]);
      tonePlayer.playTone(f, 0.6);
    }, intervalMs);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/60 border border-gold-500/25 shadow-card-subtle space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Voice Culture & Lung Agility Drills</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50 flex items-center gap-2">
            <span>{PYRAMID_ALANKAR.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 font-light">
            {PYRAMID_ALANKAR.subtitle}
          </p>
        </div>

        <button
          onClick={() => onOpenVideo(PYRAMID_ALANKAR.youtubeId, PYRAMID_ALANKAR.title, PYRAMID_ALANKAR.instructor)}
          className="self-start sm:self-center inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 transition-all"
        >
          <Youtube className="w-3.5 h-3.5 text-rose-400" />
          <span>Watch Pyramid Video</span>
        </button>
      </div>

      {/* Pyramid Steps Grid */}
      <div className="space-y-2">
        {PYRAMID_ALANKAR.steps.map((tier) => {
          const isSelected = selectedLevel === tier.level;

          return (
            <div
              key={tier.level}
              onClick={() => setSelectedLevel(tier.level)}
              className={`p-3 sm:p-4 rounded-2xl cursor-pointer transition-all border flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-navy-950/90 border-gold-500/50 shadow-gold-glow'
                  : 'bg-navy-950/40 border-white/[0.05] hover:border-gold-500/25 hover:bg-navy-950/60'
              }`}
            >
              {/* Level indicator & Swara Row */}
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                  isSelected
                    ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                    : 'bg-navy-900 text-ivory-300 border border-white/[0.1]'
                }`}>
                  {tier.level}
                </span>

                <div className="flex flex-wrap items-center gap-1.5">
                  {tier.notes.map((note, idx) => {
                    const isNoteActive = isSelected && currentStepIndex === idx;
                    return (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition-all ${
                          isNoteActive
                            ? 'bg-gold-400 text-navy-950 scale-110 shadow-gold-glow'
                            : isSelected
                            ? 'bg-navy-900 text-ivory-100 border border-gold-500/30'
                            : 'bg-navy-900/60 text-ivory-300/80'
                        }`}
                      >
                        {note}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Devanagari translation & Action */}
              <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
                <span className="font-serif text-gold-300/80 text-sm">
                  {tier.devanagari}
                </span>

                {isSelected && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playLevel();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm"
                  >
                    {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                    <span>{isPlaying ? 'Pause' : 'Hear Tier'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
