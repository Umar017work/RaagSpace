import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Repeat, FastForward, Sliders, Volume2, Music, Sparkles, BookOpen, Layers } from 'lucide-react';
import { usePitch } from '../../context/PitchContext';
import { YAMAN_PRACTICE_MODULES } from '../../data/yamanPracticeData';
import { MelodyPracticeEngine } from '../../utils/audioSynth';

export default function PracticePlayer({ practiceModules = YAMAN_PRACTICE_MODULES }) {
  const { getSwaraFreq, selectedRoot } = usePitch();
  
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);
  const currentModule = practiceModules[selectedModuleIndex] || practiceModules[0];

  // Display mode: 'both' | 'sargam' | 'lyrics'
  const [displayMode, setDisplayMode] = useState('both');
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isLooping, setIsLooping] = useState(false);

  const engineRef = useRef(null);

  // Initialize practice engine
  useEffect(() => {
    const engine = new MelodyPracticeEngine(getSwaraFreq);
    engine.loadModule(currentModule);
    engine.setSpeed(playbackSpeed);
    engine.setLoop(isLooping);

    engine.onProgressCallback = (time, activeIdx) => {
      setCurrentTime(time);
      setActiveItemIndex(activeIdx);
    };

    engine.onStateChangeCallback = (state) => {
      setIsPlaying(state.isPlaying);
    };

    engineRef.current = engine;

    return () => {
      engine.stop();
    };
  }, [currentModule]);

  // Update pitch frequency function if root changes
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.getSwaraFreq = getSwaraFreq;
    }
  }, [getSwaraFreq]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!engineRef.current) return;
    if (isPlaying) {
      engineRef.current.pause();
    } else {
      engineRef.current.play();
    }
  };

  // Handle Stop
  const handleStop = () => {
    if (engineRef.current) {
      engineRef.current.stop();
      setCurrentTime(0);
      setActiveItemIndex(-1);
    }
  };

  // Handle Seek / Scrub
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (engineRef.current) {
      engineRef.current.seek(newTime);
    }
  };

  // Handle Speed Change
  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (engineRef.current) {
      engineRef.current.setSpeed(speed);
    }
  };

  // Handle Loop Toggle
  const toggleLoop = () => {
    const next = !isLooping;
    setIsLooping(next);
    if (engineRef.current) {
      engineRef.current.setLoop(next);
    }
  };

  // Format seconds to mm:ss.d
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    const tenths = Math.floor((seconds % 1) * 10);
    return `${m}:${s < 10 ? '0' : ''}${s}.${tenths}`;
  };

  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-navy-900/70 border border-white/[0.08] shadow-card-subtle space-y-6">
      
      {/* Player Header with Module Selector & Disclaimer */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-1">
            <Music className="w-3.5 h-3.5" />
            <span>Interactive Bandish Practice Studio</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50">
            {currentModule.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 font-light">
            {currentModule.subtitle} • {currentModule.taal} • Pitch: <span className="text-gold-300 font-semibold">{selectedRoot.label}</span>
          </p>
        </div>

        {/* Practice Module Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-navy-950/80 border border-white/[0.06] overflow-x-auto no-scrollbar">
          {practiceModules.map((mod, idx) => (
            <button
              key={mod.id}
              onClick={() => {
                if (engineRef.current) engineRef.current.stop();
                setSelectedModuleIndex(idx);
              }}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedModuleIndex === idx
                  ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40'
                  : 'text-ivory-300/70 hover:text-ivory-100 hover:bg-white/[0.03]'
              }`}
            >
              {mod.title.includes(':') ? mod.title.split(':')[1].trim() : mod.title}
            </button>
          ))}
        </div>
      </div>

      {/* Display Mode Switcher (Lyrics / Sargam / Both) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-navy-950/60 border border-white/[0.06]">
        <div className="flex items-center gap-2 text-xs text-ivory-300/80">
          <Layers className="w-4 h-4 text-gold-400" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">Notation Display Mode:</span>
        </div>

        <div className="flex items-center gap-1.5 bg-navy-900/90 p-1 rounded-xl border border-white/[0.06]">
          <button
            onClick={() => setDisplayMode('both')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              displayMode === 'both'
                ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                : 'text-ivory-300/70 hover:text-ivory-100'
            }`}
          >
            Both (Sargam + Lyrics)
          </button>
          <button
            onClick={() => setDisplayMode('sargam')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              displayMode === 'sargam'
                ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                : 'text-ivory-300/70 hover:text-ivory-100'
            }`}
          >
            Sargam Only
          </button>
          <button
            onClick={() => setDisplayMode('lyrics')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              displayMode === 'lyrics'
                ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                : 'text-ivory-300/70 hover:text-ivory-100'
            }`}
          >
            Lyrics Only
          </button>
        </div>
      </div>

      {/* Synchronized Notation Grid */}
      <div className="p-5 sm:p-7 rounded-3xl bg-navy-950/90 border border-gold-500/25 shadow-inner">
        
        {/* Avartan / Measures Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-2 sm:gap-2.5">
          {currentModule.notationData.map((item, idx) => {
            const isCurrent = activeItemIndex === idx;
            const isSam = item.vibhag === 'X';

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (engineRef.current) {
                    engineRef.current.seek(item.start);
                    if (!isPlaying) engineRef.current.play();
                  }
                }}
                className={`relative cursor-pointer p-2.5 sm:p-3 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center justify-between min-h-[90px] select-none ${
                  isCurrent
                    ? 'bg-gold-500 text-navy-950 border-gold-300 scale-105 shadow-gold-glow z-10'
                    : isSam
                    ? 'bg-navy-900 text-ivory-100 border-gold-500/40 hover:border-gold-400'
                    : 'bg-navy-900/60 text-ivory-200 border-white/[0.06] hover:border-gold-500/30'
                }`}
                title={`Beat ${item.beat} (Vibhag ${item.vibhag}): ${item.swara} / ${item.lyric}`}
              >
                {/* Beat Number & Vibhag Marker */}
                <div className={`text-[10px] font-mono leading-none flex items-center gap-1 ${
                  isCurrent ? 'text-navy-900 font-bold' : isSam ? 'text-gold-400 font-bold' : 'text-ivory-400/60'
                }`}>
                  <span>{item.beat}</span>
                  <span className="text-[9px]">({item.vibhag})</span>
                </div>

                {/* Sargam (if mode is both or sargam) */}
                {(displayMode === 'both' || displayMode === 'sargam') && (
                  <div className={`text-lg sm:text-xl font-serif font-bold tracking-wide my-0.5 leading-tight ${
                    isCurrent ? 'text-navy-950' : 'text-gold-300'
                  }`}>
                    {item.swara}
                  </div>
                )}

                {/* Lyrics Syllable (if mode is both or lyrics) */}
                {(displayMode === 'both' || displayMode === 'lyrics') && (
                  <div className={`text-xs sm:text-sm font-serif leading-tight font-medium ${
                    isCurrent ? 'text-navy-900 font-bold' : 'text-ivory-100'
                  }`}>
                    {item.lyric}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Meaning / Active Syllable Strip */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-ivory-300/80">
          <div className="flex items-center gap-2">
            <span className="text-gold-400 font-semibold uppercase tracking-wider text-[11px]">Current Note:</span>
            {activeItemIndex >= 0 ? (
              <span className="font-serif text-ivory-50 text-sm">
                Beat {currentModule.notationData[activeItemIndex].beat} •{' '}
                <strong className="text-gold-300">{currentModule.notationData[activeItemIndex].swara}</strong> (
                {currentModule.notationData[activeItemIndex].hindiLyric}) —{' '}
                <em>"{currentModule.notationData[activeItemIndex].meaning}"</em>
              </span>
            ) : (
              <span className="text-ivory-400/60 italic">Press play to start synchronized practice</span>
            )}
          </div>
          <div className="text-[11px] text-ivory-400/60 font-mono">
            Click any beat tile to jump directly to it
          </div>
        </div>
      </div>

      {/* Audio Scrub / Seek Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-mono text-ivory-300/80">
          <span>{formatTime(currentTime)}</span>
          <span className="text-ivory-400/60">{formatTime(currentModule.totalDuration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={currentModule.totalDuration}
          step="0.05"
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-navy-950 rounded-lg appearance-none cursor-pointer accent-gold-400 hover:accent-gold-300"
          aria-label="Practice player seek bar"
        />
      </div>

      {/* Controls Bar: Play, Pause, Stop, Speed, Loop */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        
        {/* Main Transport Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 flex items-center justify-center hover:brightness-110 shadow-gold-glow transition-all transform hover:scale-105"
            aria-label={isPlaying ? 'Pause practice melody' : 'Play practice melody'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={handleStop}
            className="p-3 rounded-full bg-navy-950 border border-white/[0.08] hover:border-gold-500/40 text-ivory-300 hover:text-ivory-50 transition-all"
            title="Stop & Reset to Start"
            aria-label="Stop"
          >
            <Square className="w-4 h-4" />
          </button>

          <button
            onClick={toggleLoop}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
              isLooping
                ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 shadow-gold-glow'
                : 'bg-navy-950 text-ivory-400/80 border-white/[0.08] hover:text-ivory-200'
            }`}
            title="Loop practice phrase continuously"
          >
            <Repeat className="w-3.5 h-3.5" />
            <span>Loop Phrase</span>
          </button>
        </div>

        {/* Playback Speed Selector */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-ivory-400/70 text-[11px] uppercase tracking-wider flex items-center gap-1">
            <FastForward className="w-3.5 h-3.5 text-gold-400" />
            <span>Speed:</span>
          </span>
          <div className="flex items-center gap-1 bg-navy-950 p-1 rounded-xl border border-white/[0.08]">
            {[0.5, 0.75, 1.0, 1.25, 1.5].map(speed => (
              <button
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  playbackSpeed === speed
                    ? 'bg-gold-500 text-navy-950 font-bold'
                    : 'text-ivory-300/70 hover:text-ivory-100'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Honest Synthesizer Notice */}
      <div className="p-3 rounded-xl bg-gold-500/[0.03] border border-gold-500/20 text-[11px] text-ivory-300/70 flex items-center justify-between">
        <span>
          <strong className="text-gold-300 font-semibold">Synthesized Reference Guide:</strong> Real-time synthesized melodic guide for pitch and rhythm calibration. Not a human vocal recording.
        </span>
        <span className="font-mono text-gold-400/80">Sa = {selectedRoot.name}</span>
      </div>

    </section>
  );
}
