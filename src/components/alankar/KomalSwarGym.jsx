import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Sparkles, Youtube, CheckCircle, Activity } from 'lucide-react';
import { usePitch } from '../../context/PitchContext';
import { tonePlayer } from '../../utils/audioSynth';
import { KOMAL_SWAR_MODULES } from '../../data/alankarsData';

export default function KomalSwarGym({ onOpenVideo }) {
  const { selectedRoot, getSwaraFreq } = usePitch();
  const [activeModuleId, setActiveModuleId] = useState(KOMAL_SWAR_MODULES[0].id);
  const [isPlayingPhrase, setIsPlayingPhrase] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  const timerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const stepIndexRef = useRef(-1);

  const activeModule = KOMAL_SWAR_MODULES.find(m => m.id === activeModuleId) || KOMAL_SWAR_MODULES[0];

  useEffect(() => {
    isPlayingRef.current = isPlayingPhrase;
  }, [isPlayingPhrase]);

  useEffect(() => {
    stopPhrase();
  }, [activeModuleId]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const stopPhrase = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlayingPhrase(false);
    isPlayingRef.current = false;
    stepIndexRef.current = -1;
    setActiveStepIndex(-1);
  };

  const playDrillPhrase = () => {
    if (isPlayingPhrase) {
      stopPhrase();
      return;
    }

    setIsPlayingPhrase(true);
    isPlayingRef.current = true;
    stepIndexRef.current = 0;
    setActiveStepIndex(0);

    const notes = activeModule.drillPhrase;
    const f0 = getSwaraFreq(notes[0]);
    tonePlayer.playTone(f0, 0.7);

    const intervalMs = 650;
    timerRef.current = setInterval(() => {
      if (!isPlayingRef.current) return;
      const next = stepIndexRef.current + 1;
      if (next >= notes.length) {
        stopPhrase();
        return;
      }
      stepIndexRef.current = next;
      setActiveStepIndex(next);
      const f = getSwaraFreq(notes[next]);
      tonePlayer.playTone(f, 0.7);
    }, intervalMs);
  };

  const playSingleSwara = (swaraName) => {
    const f = getSwaraFreq(swaraName);
    tonePlayer.playTone(f, 0.95);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/60 border border-gold-500/25 shadow-card-subtle space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Komal & Teevra Swar Precision Mastery</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50">
            Micro-Pitch Riyaz & Vocal Placement
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 font-light">
            Master the subtle tuning of flat and sharp notes with pitch comparison against your Sa ({selectedRoot.label}).
          </p>
        </div>

        <button
          onClick={() => onOpenVideo(activeModule.youtubeId, activeModule.name, activeModule.instructor)}
          className="self-start sm:self-center inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 transition-all"
        >
          <Youtube className="w-3.5 h-3.5 text-rose-400" />
          <span>Watch Riyaz Lesson</span>
        </button>
      </div>

      {/* Module Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {KOMAL_SWAR_MODULES.map((mod) => {
          const isSelected = activeModuleId === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModuleId(mod.id)}
              className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-500/15 text-amber-300 border-amber-400 shadow-sm scale-[1.02]'
                  : 'bg-navy-950/60 text-ivory-300 border-white/[0.06] hover:border-white/[0.15]'
              }`}
            >
              <div className="font-serif font-bold text-sm">
                {mod.name}
              </div>
              <div className="text-[10px] text-ivory-400/60 mt-1 truncate">
                {mod.interval}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Module Focus Card */}
      <div className="p-6 rounded-2xl bg-navy-950/90 border border-white/[0.08] space-y-6">
        
        {/* Contrast Note Comparison Bar */}
        <div className="p-4 rounded-xl bg-navy-900/80 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-0.5">
              Ear Calibration Contrast
            </div>
            <div className="text-sm font-medium text-ivory-100">
              {activeModule.contrast}
            </div>
            <div className="text-xs text-ivory-400/80 mt-1 italic">
              Tip: "{activeModule.keyTip}"
            </div>
          </div>
        </div>

        {/* Drill Phrase Flow */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold uppercase tracking-wider text-gold-400">
              Riyaz Phrase Pattern
            </span>
            <span className="text-ivory-400/70">
              Click individual notes to check pitch
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {activeModule.drillPhrase.map((swara, idx) => {
              const isCurrent = activeStepIndex === idx;
              const isAltered = swara.includes('̲') || swara.includes('Ḿ');

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => playSingleSwara(swara)}
                  className={`px-3.5 py-2.5 rounded-xl font-serif text-lg font-bold transition-all border select-none ${
                    isCurrent
                      ? 'bg-amber-400 text-navy-950 border-amber-200 scale-110 shadow-gold-glow z-10'
                      : isAltered
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-navy-900 text-ivory-100 border-white/[0.08] hover:border-gold-500/40'
                  }`}
                >
                  {swara}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-serif text-gold-300/80 pt-1">
            {activeModule.drillHindi}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={playDrillPhrase}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              isPlayingPhrase
                ? 'bg-amber-400 text-navy-950 shadow-gold-glow'
                : 'bg-amber-500 hover:bg-amber-400 text-navy-950 shadow-sm hover:scale-105'
            }`}
          >
            {isPlayingPhrase ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlayingPhrase ? 'Pause Practice' : 'Play Drill Phrase'}</span>
          </button>

          <span className="text-[11px] text-ivory-400/60">
            Listen, then sing in unison with the tone player
          </span>
        </div>

      </div>

    </div>
  );
}
