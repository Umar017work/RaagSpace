import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, FastForward, Sliders, Volume2, Disc, Drum, Sparkles, Zap, RotateCcw } from 'lucide-react';
import { tablaSynth, TAAL_DEFINITIONS } from '../../utils/tablaSynth';
import { usePitch } from '../../context/PitchContext';

export default function TablaCompanion() {
  const { selectedRoot } = usePitch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTaalId, setSelectedTaalId] = useState("teentaal");
  const [bpm, setBpm] = useState(80);
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [isRollPlaying, setIsRollPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [lastStroke, setLastStroke] = useState(null);

  // Tap Tempo state
  const tapTimesRef = useRef([]);

  const currentTaal = TAAL_DEFINITIONS.find(t => t.id === selectedTaalId) || TAAL_DEFINITIONS[0];

  useEffect(() => {
    tablaSynth.setRootPitch(selectedRoot.freq);
  }, [selectedRoot]);

  useEffect(() => {
    tablaSynth.onBeatChange = (beatIdx, bolObj) => {
      setActiveBeatIndex(beatIdx);
      setLastStroke(bolObj);
    };
  }, []);

  const togglePlayback = () => {
    if (isPlaying) {
      tablaSynth.stop();
      setIsPlaying(false);
      setActiveBeatIndex(0);
      setLastStroke(null);
    } else {
      tablaSynth.setRootPitch(selectedRoot.freq);
      tablaSynth.setBpm(bpm);
      tablaSynth.setTaal(selectedTaalId);
      tablaSynth.setVolume(volume);
      tablaSynth.start();
      setIsPlaying(true);
    }
  };

  const handleTaalChange = (taalId) => {
    setSelectedTaalId(taalId);
    const target = TAAL_DEFINITIONS.find(t => t.id === taalId);
    if (target) {
      setBpm(target.defaultBpm);
      tablaSynth.setBpm(target.defaultBpm);
    }
    tablaSynth.setTaal(taalId);
    setActiveBeatIndex(0);
  };

  const handleBpmChange = (newBpm) => {
    const val = parseInt(newBpm, 10);
    setBpm(val);
    tablaSynth.setBpm(val);
  };

  const handleVolumeChange = (newVol) => {
    const val = parseFloat(newVol);
    setVolume(val);
    tablaSynth.setVolume(val);
  };

  const handleTriggerDrumRoll = () => {
    setIsRollPlaying(true);
    setIsPlaying(false);
    tablaSynth.playDrumRoll(() => {
      setIsRollPlaying(false);
    });
  };

  // Tap-tempo feature
  const handleTapTempo = () => {
    const now = performance.now();
    tapTimesRef.current.push(now);
    if (tapTimesRef.current.length > 4) {
      tapTimesRef.current.shift();
    }
    if (tapTimesRef.current.length >= 2) {
      const intervals = [];
      for (let i = 1; i < tapTimesRef.current.length; i++) {
        intervals.push(tapTimesRef.current[i] - tapTimesRef.current[i - 1]);
      }
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      if (avgInterval > 200 && avgInterval < 2000) {
        const computedBpm = Math.round(60000 / avgInterval);
        handleBpmChange(computedBpm);
      }
    }
  };

  useEffect(() => {
    return () => {
      tablaSynth.stop();
    };
  }, []);

  const totalBeats = currentTaal.beatsCount;

  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-gold-500/30 shadow-card-subtle space-y-8 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-500/[0.04] blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 bg-gold-500/10 border border-gold-500/30 flex items-center gap-1.5">
              <Drum className="w-3.5 h-3.5 text-gold-400" />
              <span>Studio Acoustic Tabla Engine</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-ivory-300/80 font-mono">
              Dayan tuned to <strong className="text-gold-300 font-serif">{selectedRoot.label}</strong>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50 flex items-baseline gap-3">
            <span>Hindustani Taal & Theka Player</span>
            <span className="text-lg font-normal text-gold-400/90 font-serif">
              ताल साधना
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 max-w-2xl font-light">
            Physical modeling acoustics: Resonant Bayan with wrist-modulated Gumki glide, Bessel-mode tuned Dayan, and authentic classical strokes.
          </p>
        </div>

        {/* Master Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Drum Roll / Jhala Button */}
          <button
            onClick={handleTriggerDrumRoll}
            disabled={isRollPlaying}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border shadow-sm ${
              isRollPlaying
                ? 'bg-amber-500/20 text-amber-300 border-amber-400 animate-pulse'
                : 'bg-navy-950 text-amber-300 border-amber-500/40 hover:bg-amber-500/15 hover:border-amber-400'
            }`}
            title="Play high-velocity classical drum roll (Tirakit Jhala) with resonant Sam landing"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>{isRollPlaying ? 'Rolling...' : 'Drum Roll (झाला)'}</span>
          </button>

          {/* Primary Play / Stop Button */}
          <button
            onClick={togglePlayback}
            className={`px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md ${
              isPlaying
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm animate-pulse'
                : 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:brightness-110 shadow-gold-glow hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Stop Theka</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                <span>Start Theka</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Taal Selection Pills */}
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-gold-400/90 flex items-center justify-between">
          <span>Choose Classical Taal (ताल चयन)</span>
          <span className="text-[11px] text-ivory-400/60 font-mono">
            {currentTaal.beatsCount} Matras • {currentTaal.layaDefault} Laya
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {TAAL_DEFINITIONS.map(taal => {
            const isSelected = selectedTaalId === taal.id;
            return (
              <button
                key={taal.id}
                onClick={() => handleTaalChange(taal.id)}
                className={`py-3 px-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gold-500 text-navy-950 font-bold border-gold-300 shadow-gold-glow scale-[1.02]'
                    : 'bg-navy-950/70 text-ivory-200 border-white/[0.08] hover:border-gold-500/40 hover:bg-navy-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm">{taal.name}</span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-navy-950 font-bold' : 'text-ivory-400/60'}`}>
                    {taal.beatsCount}M
                  </span>
                </div>
                <div className={`text-[11px] font-serif mt-0.5 truncate ${isSelected ? 'text-navy-900' : 'text-gold-400/80'}`}>
                  {taal.hindiName}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Active Bol & Matra Circular Wheel Display */}
      <div className="p-6 rounded-3xl bg-navy-950/90 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Active Stroke Glow Badge */}
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="relative">
            <div className={`w-20 h-20 rounded-2xl border flex flex-col items-center justify-center transition-all duration-150 ${
              isPlaying
                ? currentTaal.bols[activeBeatIndex].mark === 'X'
                  ? 'bg-gold-400 text-navy-950 border-gold-200 shadow-gold-glow scale-105'
                  : 'bg-navy-900 text-gold-300 border-gold-500/40 shadow-sm'
                : 'bg-navy-900/60 text-ivory-400 border-white/[0.08]'
            }`}>
              <span className="text-2xl font-serif font-bold leading-none">
                {currentTaal.bols[activeBeatIndex].bol}
              </span>
              <span className="text-[10px] font-mono mt-1 opacity-80">
                Beat {activeBeatIndex + 1}/{totalBeats}
              </span>
            </div>

            {/* Glowing ring on Sam */}
            {isPlaying && currentTaal.bols[activeBeatIndex].mark === 'X' && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-gold-400 text-navy-950 text-[9px] font-black uppercase tracking-wider shadow-gold-glow animate-bounce">
                सम Sam
              </span>
            )}
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold">
              Current Stroke Character
            </div>
            <div className="text-base font-serif text-ivory-50 font-bold">
              {currentTaal.bols[activeBeatIndex].bol} ({currentTaal.name})
            </div>
            <div className="text-xs text-ivory-300/70 font-light mt-0.5">
              {currentTaal.bols[activeBeatIndex].mark === 'X' 
                ? '★ Sam (Beat 1 — Master Resolution Point)' 
                : currentTaal.bols[activeBeatIndex].mark === '0'
                ? '○ Khali (Open Unaccented Wave)'
                : currentTaal.bols[activeBeatIndex].mark 
                ? `Taali (Clap ${currentTaal.bols[activeBeatIndex].mark})` 
                : 'Sub-beat transition'}
            </div>
          </div>
        </div>

        {/* Center / Right: Linear Matra Beads Tracker */}
        <div className="flex-1 w-full max-w-xl">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-1.5">
            {currentTaal.bols.map((b, idx) => {
              const isCurrent = isPlaying && activeBeatIndex === idx;
              const isSam = b.mark === 'X';
              const isKhali = b.mark === '0';

              return (
                <div
                  key={idx}
                  className={`p-2 rounded-xl text-center transition-all duration-150 border flex flex-col items-center justify-between min-h-[58px] ${
                    isCurrent
                      ? 'bg-gold-400 text-navy-950 border-gold-200 scale-105 shadow-gold-glow z-10'
                      : isSam
                      ? 'bg-navy-900 text-ivory-50 border-gold-500/50'
                      : isKhali
                      ? 'bg-navy-950/80 text-ivory-300/80 border-white/[0.08]'
                      : 'bg-navy-900/60 text-ivory-200 border-white/[0.04]'
                  }`}
                >
                  <div className={`text-[9px] font-mono leading-none ${
                    isCurrent ? 'text-navy-950 font-bold' : isSam ? 'text-gold-400 font-bold' : 'text-ivory-400/50'
                  }`}>
                    {b.beat}
                  </div>
                  <div className={`text-xs font-serif font-bold ${
                    isCurrent ? 'text-navy-950' : 'text-ivory-100'
                  }`}>
                    {b.bol}
                  </div>
                  <div className={`text-[9px] font-mono ${
                    isCurrent ? 'text-navy-950 font-bold' : isSam ? 'text-gold-400' : isKhali ? 'text-rose-400' : 'text-transparent'
                  }`}>
                    {b.mark || '•'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Controls Console: Tempo, Presets, Tap Tempo & Volume Slider */}
      <div className="p-5 sm:p-6 rounded-2xl bg-navy-950 border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Tempo Slider & BPM Display */}
        <div className="flex-1 w-full space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ivory-300 font-medium flex items-center gap-1.5">
              <FastForward className="w-3.5 h-3.5 text-gold-400" />
              <span>Tempo (लय): <strong className="text-gold-300 font-mono text-sm">{bpm} BPM</strong></span>
            </span>

            {/* Quick Laya Presets */}
            <div className="flex items-center gap-1">
              {[
                { label: 'Vilambit', val: 56 },
                { label: 'Madhya', val: 84 },
                { label: 'Drut', val: 128 },
                { label: 'Ati-Drut', val: 160 }
              ].map(p => (
                <button
                  key={p.label}
                  onClick={() => handleBpmChange(p.val)}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                    bpm === p.val
                      ? 'bg-gold-500 text-navy-950 font-bold'
                      : 'bg-navy-900 text-ivory-400 hover:text-gold-300'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <input
            type="range"
            min="40"
            max="220"
            value={bpm}
            onChange={(e) => handleBpmChange(e.target.value)}
            className="w-full accent-gold-500 h-1.5 bg-navy-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Tap Tempo & Volume */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
          {/* Tap Button */}
          <button
            onClick={handleTapTempo}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-navy-900 border border-white/[0.1] text-ivory-200 hover:text-gold-300 hover:border-gold-500/40 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            title="Tap rhythmically to set tempo automatically"
          >
            <RotateCcw className="w-3.5 h-3.5 text-gold-400" />
            <span>Tap Tempo</span>
          </button>

          {/* Volume Slider */}
          <div className="flex items-center gap-2 text-xs text-ivory-300">
            <Volume2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(e.target.value)}
              className="w-24 accent-gold-500 h-1.5 bg-navy-800 rounded-lg cursor-pointer"
              title="Tabla Volume"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
