import React, { useState, useEffect } from 'react';
import { Play, Square, FastForward, Sliders, Volume2, Disc, Drum } from 'lucide-react';
import { tablaSynth, TAAL_DEFINITIONS } from '../../utils/tablaSynth';
import { usePitch } from '../../context/PitchContext';

export default function TablaCompanion() {
  const { selectedRoot } = usePitch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTaalId, setSelectedTaalId] = useState("teentaal");
  const [bpm, setBpm] = useState(80);
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);

  const currentTaal = TAAL_DEFINITIONS.find(t => t.id === selectedTaalId) || TAAL_DEFINITIONS[0];

  useEffect(() => {
    tablaSynth.setRootPitch(selectedRoot.freq);
  }, [selectedRoot]);

  useEffect(() => {
    tablaSynth.onBeatChange = (beatIdx) => {
      setActiveBeatIndex(beatIdx);
    };
  }, []);

  const togglePlayback = () => {
    if (isPlaying) {
      tablaSynth.stop();
      setIsPlaying(false);
      setActiveBeatIndex(0);
    } else {
      tablaSynth.setRootPitch(selectedRoot.freq);
      tablaSynth.setBpm(bpm);
      tablaSynth.setTaal(selectedTaalId);
      tablaSynth.start();
      setIsPlaying(true);
    }
  };

  const handleTaalChange = (taalId) => {
    setSelectedTaalId(taalId);
    const target = TAAL_DEFINITIONS.find(t => t.id === taalId);
    if (target) {
      setBpm(target.defaultBpm);
    }
    tablaSynth.setTaal(taalId);
    setActiveBeatIndex(0);
  };

  const handleBpmChange = (newBpm) => {
    const val = parseInt(newBpm, 10);
    setBpm(val);
    tablaSynth.setBpm(val);
  };

  useEffect(() => {
    return () => {
      tablaSynth.stop();
    };
  }, []);

  return (
    <section className="p-6 sm:p-7 rounded-3xl bg-navy-900/70 border border-white/[0.08] shadow-card-subtle space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-1">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Electronic Tabla Accompaniment</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50">
            Hindustani Taal & Theka Player
          </h3>
          <p className="text-xs text-ivory-300/80 mt-0.5">
            Dayan tuned to <strong className="text-gold-300">{selectedRoot.label}</strong>. Practice with authentic classical thekas across Vilambit, Madhya, and Drut Laya.
          </p>
        </div>

        {/* Play/Stop Button */}
        <button
          onClick={togglePlayback}
          className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center gap-2 self-start sm:self-auto ${
            isPlaying
              ? 'bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse'
              : 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:brightness-110 shadow-gold-glow'
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
              <span>Start Tabla Theka</span>
            </>
          )}
        </button>
      </div>

      {/* Taal Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
        {TAAL_DEFINITIONS.map(taal => (
          <button
            key={taal.id}
            onClick={() => handleTaalChange(taal.id)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex-shrink-0 ${
              selectedTaalId === taal.id
                ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-sm'
                : 'text-ivory-300/70 hover:text-ivory-100 hover:bg-white/[0.04]'
            }`}
          >
            {taal.name} ({taal.beatsCount} Beats)
          </button>
        ))}
      </div>

      {/* Interactive Matra Ring / Beat Tiles */}
      <div className="p-5 rounded-2xl bg-navy-950/90 border border-gold-500/25">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-2">
          {currentTaal.bols.map((b, idx) => {
            const isCurrent = isPlaying && activeBeatIndex === idx;
            const isSam = b.mark === 'X' || (selectedTaalId === 'roopak' && b.mark === '0');

            return (
              <div
                key={idx}
                className={`p-2 rounded-xl text-center transition-all duration-150 border flex flex-col items-center justify-between min-h-[76px] ${
                  isCurrent
                    ? 'bg-gold-500 text-navy-950 border-gold-300 scale-105 shadow-gold-glow z-10'
                    : isSam
                    ? 'bg-navy-900 text-ivory-100 border-gold-500/45'
                    : 'bg-navy-900/60 text-ivory-200 border-white/[0.06]'
                }`}
              >
                {/* Beat Number & Mark */}
                <div className={`text-[10px] font-mono leading-none flex items-center gap-0.5 ${
                  isCurrent ? 'text-navy-900 font-bold' : isSam ? 'text-gold-400 font-bold' : 'text-ivory-400/60'
                }`}>
                  <span>{b.beat}</span>
                  {b.mark && <span className="font-bold text-[9px]">({b.mark})</span>}
                </div>

                {/* Bol Text */}
                <div className={`text-base font-serif font-bold tracking-wide my-0.5 ${
                  isCurrent ? 'text-navy-950' : 'text-gold-300'
                }`}>
                  {b.bol}
                </div>

                {/* Subtext */}
                <div className={`text-[9px] uppercase tracking-tighter ${
                  isCurrent ? 'text-navy-900' : 'text-ivory-400/50'
                }`}>
                  {b.mark === 'X' ? 'Sam' : b.mark === '0' ? 'Khali' : 'Taali'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tempo Controls & Laya Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        
        {/* Tempo Slider */}
        <div className="flex-1 max-w-md space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono text-ivory-300">
            <span>Tempo: <strong className="text-gold-300">{bpm} BPM</strong></span>
            <span className="text-ivory-400/60">
              {bpm < 65 ? 'Vilambit (Slow)' : bpm <= 120 ? 'Madhya (Medium)' : 'Drut (Fast)'}
            </span>
          </div>
          <input
            type="range"
            min="40"
            max="220"
            step="2"
            value={bpm}
            onChange={(e) => handleBpmChange(e.target.value)}
            className="w-full h-2 bg-navy-950 rounded-lg appearance-none cursor-pointer accent-gold-400"
            aria-label="Tabla BPM Slider"
          />
        </div>

        {/* Laya Presets */}
        <div className="flex items-center gap-1.5 bg-navy-950 p-1 rounded-xl border border-white/[0.08]">
          <button
            onClick={() => handleBpmChange(55)}
            className="px-2.5 py-1 rounded-lg text-xs font-medium text-ivory-300 hover:text-gold-300"
          >
            Vilambit (55)
          </button>
          <button
            onClick={() => handleBpmChange(80)}
            className="px-2.5 py-1 rounded-lg text-xs font-medium text-ivory-300 hover:text-gold-300"
          >
            Madhya (80)
          </button>
          <button
            onClick={() => handleBpmChange(140)}
            className="px-2.5 py-1 rounded-lg text-xs font-medium text-ivory-300 hover:text-gold-300"
          >
            Drut (140)
          </button>
        </div>

      </div>

    </section>
  );
}
