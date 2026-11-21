import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, RotateCcw, Volume2, FastForward, Sliders, Youtube, Eye, Layers } from 'lucide-react';
import { usePitch } from '../../context/PitchContext';
import { tonePlayer } from '../../utils/audioSynth';
import { RIYAZ_THAATS, transposeAlankarToThaat } from '../../data/alankarsData';

export default function AlankarPracticePlayer({ alankar, selectedThaat, onSelectThaat, onOpenVideo }) {
  const { selectedRoot, getSwaraFreq } = usePitch();
  
  // Player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(85);
  const [isLooping, setIsLooping] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [activeDirection, setActiveDirection] = useState('both'); // 'both' | 'aroha' | 'avroha'
  const [displayMode, setDisplayMode] = useState('both'); // 'sargam' | 'hindi' | 'both'
  
  // Timer references for robust Web Audio scheduling
  const timerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const stepIndexRef = useRef(-1);

  // Transpose current alankar based on active thaat
  const currentAlankar = transposeAlankarToThaat(alankar, selectedThaat);

  // Compile active note sequence based on direction
  const activeSequence = React.useMemo(() => {
    if (activeDirection === 'aroha') {
      return currentAlankar.aroha.map((s, idx) => ({ swara: s, phase: 'Aroha', index: idx }));
    }
    if (activeDirection === 'avroha') {
      return currentAlankar.avroha.map((s, idx) => ({ swara: s, phase: 'Avroha', index: idx }));
    }
    return [
      ...currentAlankar.aroha.map((s, idx) => ({ swara: s, phase: 'Aroha', index: idx })),
      ...currentAlankar.avroha.map((s, idx) => ({ swara: s, phase: 'Avroha', index: idx + currentAlankar.aroha.length }))
    ];
  }, [currentAlankar, activeDirection]);

  // Keep refs updated
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Reset when alankar or direction changes
  useEffect(() => {
    stopPlayback();
  }, [alankar.id, selectedThaat, activeDirection]);

  // Cleanup on unmount
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

  const playStep = (index) => {
    if (index >= activeSequence.length) {
      if (isLooping) {
        stepIndexRef.current = 0;
        setCurrentStepIndex(0);
        const item = activeSequence[0];
        const freq = getSwaraFreq(item.swara);
        const durationSec = Math.max(0.2, (60 / bpm) * 0.85);
        tonePlayer.playTone(freq, durationSec);
      } else {
        stopPlayback();
      }
      return;
    }

    stepIndexRef.current = index;
    setCurrentStepIndex(index);
    const item = activeSequence[index];
    const freq = getSwaraFreq(item.swara);
    const durationSec = Math.max(0.2, (60 / bpm) * 0.85);
    tonePlayer.playTone(freq, durationSec);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    setIsPlaying(true);
    isPlayingRef.current = true;
    
    // Start immediately on next or first step
    const nextIndex = stepIndexRef.current < 0 || stepIndexRef.current >= activeSequence.length - 1
      ? 0
      : stepIndexRef.current + 1;
    
    playStep(nextIndex);

    const stepIntervalMs = (60 / bpm) * 1000;
    timerRef.current = setInterval(() => {
      if (!isPlayingRef.current) return;
      const cur = stepIndexRef.current;
      playStep(cur + 1);
    }, stepIntervalMs);
  };

  // Adjust tempo while playing smoothly
  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
    if (isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      const stepIntervalMs = (60 / newBpm) * 1000;
      timerRef.current = setInterval(() => {
        if (!isPlayingRef.current) return;
        const cur = stepIndexRef.current;
        playStep(cur + 1);
      }, stepIntervalMs);
    }
  };

  const handleTapSwara = (swaraName, index) => {
    const freq = getSwaraFreq(swaraName);
    tonePlayer.playTone(freq, 0.9);
    setCurrentStepIndex(index);
    stepIndexRef.current = index;
  };

  return (
    <div className="rounded-3xl bg-navy-900/70 border border-gold-500/30 p-6 sm:p-8 lg:p-10 shadow-card-subtle space-y-8 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-gold-500/[0.04] blur-3xl rounded-full pointer-events-none" />

      {/* Top Header: Title, Category & Video Trigger */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 bg-gold-500/10 border border-gold-500/30">
              Alankar #{currentAlankar.number} • {currentAlankar.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-ivory-300/80 font-mono">
              Formula: {currentAlankar.pattern}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-ivory-50 flex flex-wrap items-baseline gap-3">
            <span>{currentAlankar.name}</span>
            <span className="text-lg sm:text-xl font-normal text-gold-400">
              {currentAlankar.hindiName}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 max-w-2xl font-light">
            <strong className="text-gold-300 font-semibold">Riyaz Focus:</strong> {currentAlankar.focus}
          </p>
        </div>

        {/* Masterclass Video Button */}
        {currentAlankar.youtubeId && (
          <button
            onClick={() => onOpenVideo(currentAlankar.youtubeId, currentAlankar.name, currentAlankar.instructor)}
            className="self-start lg:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 hover:border-rose-400 transition-all shadow-sm group"
          >
            <Youtube className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
            <span>Watch Video Masterclass</span>
          </button>
        )}
      </div>

      {/* 6-Thaat Transposition Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-navy-950/80 border border-white/[0.06] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
            <Layers className="w-3.5 h-3.5 text-gold-400" />
            <span>Select Practice Thaat (थाट अभ्यास)</span>
          </div>
          <span className="text-[11px] text-ivory-400/70">
            Transposes all 20 alankars into altered swaras automatically
          </span>
        </div>

        {/* Thaat Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {RIYAZ_THAATS.map((thaat) => {
            const isSelected = selectedThaat === thaat.id;
            return (
              <button
                key={thaat.id}
                onClick={() => onSelectThaat(thaat.id)}
                className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-left border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gold-500 text-navy-950 font-bold border-gold-300 shadow-gold-glow scale-[1.02]'
                    : 'bg-navy-900/80 text-ivory-200 border-white/[0.08] hover:border-gold-500/40 hover:bg-navy-900'
                }`}
              >
                <div className="font-serif font-bold text-sm leading-tight">
                  {thaat.name}
                </div>
                <div className={`text-[10px] mt-0.5 truncate ${
                  isSelected ? 'text-navy-900/90' : 'text-ivory-400/60'
                }`}>
                  {thaat.swaraType}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Swara Display */}
      <div className="space-y-6">
        
        {/* Aroha Section */}
        {(activeDirection === 'both' || activeDirection === 'aroha') && (
          <div className="p-5 sm:p-6 rounded-2xl bg-navy-950/70 border border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold uppercase tracking-wider text-gold-400/90">
                Aroha (आरोह — Ascent)
              </span>
              <span className="text-[11px] text-ivory-400/60">
                Tap any note to hear tone • Calibrated to {selectedRoot.label}
              </span>
            </div>

            {/* Note Tokens */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {currentAlankar.aroha.map((swara, idx) => {
                const globalIndex = idx;
                const isCurrent = currentStepIndex === globalIndex;
                const isTeevraOrKomal = swara.includes('̲') || swara.includes('Ḿ') || swara.includes('‘');

                return (
                  <button
                    key={`aroha-${idx}`}
                    type="button"
                    onClick={() => handleTapSwara(swara, globalIndex)}
                    className={`px-3 sm:px-4 py-2.5 rounded-xl font-serif text-lg sm:text-xl font-bold tracking-wider transition-all duration-150 border select-none ${
                      isCurrent
                        ? 'bg-gold-400 text-navy-950 border-gold-200 scale-110 shadow-gold-glow z-10'
                        : isTeevraOrKomal
                        ? 'bg-navy-900 text-amber-300 border-amber-500/35 hover:border-amber-400 hover:bg-navy-850'
                        : 'bg-navy-900/90 text-ivory-100 border-white/[0.08] hover:border-gold-500/40 hover:bg-navy-850'
                    }`}
                  >
                    <span>{swara}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Traditional Devanagari Bar */}
            <div className="text-xs sm:text-sm font-serif text-gold-300/80 pt-2 border-t border-white/[0.04]">
              {currentAlankar.arohaHindi}
            </div>
          </div>
        )}

        {/* Avroha Section */}
        {(activeDirection === 'both' || activeDirection === 'avroha') && (
          <div className="p-5 sm:p-6 rounded-2xl bg-navy-950/70 border border-white/[0.06] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold uppercase tracking-wider text-gold-400/90">
                Avroha (अवरोह — Descent)
              </span>
              <span className="text-[11px] text-ivory-400/60">
                Tap any note to hear tone
              </span>
            </div>

            {/* Note Tokens */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {currentAlankar.avroha.map((swara, idx) => {
                const globalIndex = activeDirection === 'both'
                  ? currentAlankar.aroha.length + idx
                  : idx;
                const isCurrent = currentStepIndex === globalIndex;
                const isTeevraOrKomal = swara.includes('̲') || swara.includes('Ḿ') || swara.includes('‘');

                return (
                  <button
                    key={`avroha-${idx}`}
                    type="button"
                    onClick={() => handleTapSwara(swara, globalIndex)}
                    className={`px-3 sm:px-4 py-2.5 rounded-xl font-serif text-lg sm:text-xl font-bold tracking-wider transition-all duration-150 border select-none ${
                      isCurrent
                        ? 'bg-gold-400 text-navy-950 border-gold-200 scale-110 shadow-gold-glow z-10'
                        : isTeevraOrKomal
                        ? 'bg-navy-900 text-amber-300 border-amber-500/35 hover:border-amber-400 hover:bg-navy-850'
                        : 'bg-navy-900/90 text-ivory-100 border-white/[0.08] hover:border-gold-500/40 hover:bg-navy-850'
                    }`}
                  >
                    <span>{swara}</span>
                  </button>
                );
              })}
            </div>

            {/* Traditional Devanagari Bar */}
            <div className="text-xs sm:text-sm font-serif text-gold-300/80 pt-2 border-t border-white/[0.04]">
              {currentAlankar.avrohaHindi}
            </div>
          </div>
        )}

      </div>

      {/* Control Console (Play, Tempo, Laya Presets, Direction) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-navy-950 border border-gold-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Playback Primary Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm tracking-wider transition-all shadow-md ${
              isPlaying
                ? 'bg-gold-400 text-navy-950 border border-gold-300 shadow-gold-glow'
                : 'bg-gold-500 hover:bg-gold-400 text-navy-950 border border-gold-400 shadow-gold-glow hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Play Alankar</span>
              </>
            )}
          </button>

          <button
            onClick={stopPlayback}
            className="p-3 rounded-2xl bg-navy-900 border border-white/[0.1] text-ivory-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
            title="Stop playback"
          >
            <Square className="w-4 h-4" />
          </button>

          {/* Loop Toggle */}
          <button
            onClick={() => setIsLooping(!isLooping)}
            className={`flex items-center gap-1.5 px-3.5 py-3 rounded-2xl text-xs font-semibold border transition-all ${
              isLooping
                ? 'bg-gold-500/15 text-gold-300 border-gold-500/40 shadow-sm'
                : 'bg-navy-900 text-ivory-400 border-white/[0.08] hover:text-ivory-200'
            }`}
            title="Loop Alankar practice"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isLooping ? 'animate-spin-slow text-gold-400' : ''}`} />
            <span>Loop</span>
          </button>
        </div>

        {/* Tempo Slider & Laya Presets */}
        <div className="flex-1 w-full md:max-w-md space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ivory-300 font-medium flex items-center gap-1.5">
              <FastForward className="w-3.5 h-3.5 text-gold-400" />
              <span>Tempo (लय): <strong className="text-gold-300 font-mono">{bpm} BPM</strong></span>
            </span>

            {/* Quick Laya Buttons */}
            <div className="flex items-center gap-1">
              {[
                { label: 'Vilambit', bpmVal: 60 },
                { label: 'Madhya', bpmVal: 90 },
                { label: 'Drut', bpmVal: 135 }
              ].map(preset => (
                <button
                  key={preset.label}
                  onClick={() => handleBpmChange(preset.bpmVal)}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                    bpm === preset.bpmVal
                      ? 'bg-gold-500 text-navy-950 font-bold'
                      : 'bg-navy-900 text-ivory-400 hover:text-gold-300'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <input
            type="range"
            min="45"
            max="180"
            value={bpm}
            onChange={(e) => handleBpmChange(Number(e.target.value))}
            className="w-full accent-gold-500 h-1.5 bg-navy-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Direction Switcher (Aroha, Avroha, Both) */}
        <div className="flex items-center rounded-xl bg-navy-900 p-1 border border-white/[0.08] text-xs">
          {[
            { id: 'both', label: 'Both' },
            { id: 'aroha', label: 'Aroha' },
            { id: 'avroha', label: 'Avroha' }
          ].map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDirection(d.id)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeDirection === d.id
                  ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                  : 'text-ivory-300 hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
