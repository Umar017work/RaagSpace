import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { usePitch } from '../context/PitchContext';

export default function TanpuraCompanion() {
  const { selectedRoot, changeRoot, isTanpuraPlaying, toggleDrone, pitchRoots } = usePitch();

  return (
    <aside aria-label="Tanpura Drone Practice Companion" className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-30">
      <div className="flex items-center gap-2 sm:gap-3 p-2 sm:px-4 sm:py-2.5 rounded-full bg-navy-900/90 border border-gold-500/35 backdrop-blur-md shadow-2xl shadow-navy-950 transition-all hover:border-gold-500/50">
        
        {/* Toggle Button */}
        <button
          onClick={toggleDrone}
          className={`min-h-[38px] flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
            isTanpuraPlaying
              ? 'bg-gold-500 text-navy-950 shadow-gold-glow animate-pulse'
              : 'bg-navy-800 text-gold-300 hover:bg-navy-750 border border-gold-500/20'
          }`}
          title="Play continuous background tanpura drone to practice singing"
        >
          {isTanpuraPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5" />
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
        <div className="flex items-center gap-1.5 text-xs text-ivory-300/80 pr-1">
          <span className="hidden sm:inline text-[11px] text-ivory-400/60 uppercase">Pitch:</span>
          <select
            value={selectedRoot.name}
            onChange={(e) => changeRoot(e.target.value)}
            aria-label="Tanpura Root Pitch"
            className="bg-navy-950 border border-white/[0.08] text-gold-300 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-gold-500/50 cursor-pointer font-serif"
          >
            {pitchRoots.map(r => (
              <option key={r.name} value={r.name} className="bg-navy-900 text-ivory-100">
                {r.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </aside>
  );
}
