import React, { useState } from 'react';
import { Volume2, VolumeX, Settings, Music, ChevronUp, ChevronDown, Sliders } from 'lucide-react';
import { usePitch } from '../context/PitchContext';

export default function TanpuraCompanion() {
  const {
    selectedRoot,
    changeRoot,
    isTanpuraPlaying,
    toggleDrone,
    pitchRoots,
    tanpuraFirstString,
    setFirstStringTuning,
    tanpuraMode,
    setTanpuraMode,
    tanpuraVolume,
    setTanpuraVolume,
    firstStrings
  } = usePitch();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside aria-label="Tanpura Drone Practice Companion" className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40">
      
      {/* Expanded Setting Panel */}
      {isExpanded && (
        <div className="mb-3 p-4 sm:p-5 rounded-3xl bg-navy-900/95 border border-gold-500/40 backdrop-blur-xl shadow-2xl shadow-navy-950 w-72 sm:w-80 space-y-4 animate-fade-in text-xs text-ivory-100">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-serif font-bold text-sm tracking-wide text-ivory-50">
                Tanpura Acoustic Suite
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-ivory-400 hover:text-white p-1"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* 1st String Tuning Selector (Pa / Ma / Ni) */}
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block">
              1st String Tuning (प्रथम तार)
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {firstStrings.map(tuning => (
                <button
                  key={tuning.id}
                  onClick={() => setFirstStringTuning(tuning.id)}
                  className={`py-1.5 px-2 rounded-xl text-center font-medium transition-all border ${
                    tanpuraFirstString.id === tuning.id
                      ? 'bg-gold-500 text-navy-950 font-bold border-gold-300 shadow-sm'
                      : 'bg-navy-950/80 text-ivory-300 border-white/[0.08] hover:border-gold-500/30'
                  }`}
                  title={tuning.desc}
                >
                  {tuning.id}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-ivory-400/60 leading-tight">
              {tanpuraFirstString.desc}
            </p>
          </div>

          {/* Strumming Mode Toggle */}
          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block">
              Sound Character
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'ambient', label: 'Ambient Shimmer' },
                { id: 'plucked', label: 'Sequential Pluck' }
              ].map(m => (
                <button
                  key={m.id}
                  onClick={() => setTanpuraMode(m.id)}
                  className={`py-1.5 px-2 rounded-xl text-center text-xs font-medium transition-all border ${
                    tanpuraMode === m.id
                      ? 'bg-gold-500 text-navy-950 font-bold border-gold-300'
                      : 'bg-navy-950/80 text-ivory-300 border-white/[0.08]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Volume Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="uppercase tracking-wider text-gold-400 font-semibold">Volume</span>
              <span className="font-mono text-ivory-300">{Math.round(tanpuraVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={tanpuraVolume}
              onChange={(e) => setTanpuraVolume(parseFloat(e.target.value))}
              className="w-full accent-gold-500 h-1.5 bg-navy-800 rounded-lg cursor-pointer"
            />
          </div>

        </div>
      )}

      {/* Main Floating Pill Capsule */}
      <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:px-4 sm:py-2.5 rounded-full bg-navy-900/95 border border-gold-500/40 backdrop-blur-xl shadow-2xl shadow-navy-950 transition-all hover:border-gold-500/60">
        
        {/* Toggle On/Off Button */}
        <button
          onClick={toggleDrone}
          className={`min-h-[38px] flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
            isTanpuraPlaying
              ? 'bg-gold-500 text-navy-950 shadow-gold-glow animate-pulse font-bold'
              : 'bg-navy-800 text-gold-300 hover:bg-navy-750 border border-gold-500/25'
          }`}
          title="Play continuous background tanpura drone to practice singing"
        >
          {isTanpuraPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 fill-current" />
              <span>Tanpura Active</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-ivory-400" />
              <span>Tanpura Drone</span>
            </>
          )}
        </button>

        {/* Pitch Root Select */}
        <div className="flex items-center gap-1.5 text-xs text-ivory-300/80">
          <span className="hidden sm:inline text-[11px] text-ivory-400/60 uppercase">Sa:</span>
          <select
            value={selectedRoot.name}
            onChange={(e) => changeRoot(e.target.value)}
            aria-label="Tanpura Root Pitch"
            className="bg-navy-950 border border-white/[0.1] text-gold-300 rounded-xl px-2.5 py-1 text-xs focus:outline-none focus:border-gold-500/60 cursor-pointer font-serif font-bold"
          >
            {pitchRoots.map(r => (
              <option key={r.name} value={r.name} className="bg-navy-900 text-ivory-100">
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {/* Expand Settings Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-1.5 rounded-full border transition-all ${
            isExpanded
              ? 'bg-gold-500/20 text-gold-300 border-gold-500/40'
              : 'text-ivory-400 hover:text-white border-transparent hover:bg-white/[0.05]'
          }`}
          title="Tanpura Settings (1st string, acoustic pluck mode, volume)"
        >
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
        </button>

      </div>
    </aside>
  );
}
