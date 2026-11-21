import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export const PITCH_ROOTS = [
  { name: 'C', freq: 130.81, label: 'C (Sa)' },
  { name: 'C#', freq: 138.59, label: 'C# (Kali 1)' },
  { name: 'D', freq: 146.83, label: 'D (Safed 2)' },
  { name: 'D#', freq: 155.56, label: 'D# (Kali 2)' },
  { name: 'E', freq: 164.81, label: 'E (Safed 3)' },
  { name: 'F', freq: 174.61, label: 'F (Safed 4)' },
  { name: 'F#', freq: 185.00, label: 'F# (Kali 3)' },
  { name: 'G', freq: 196.00, label: 'G (Safed 5)' },
  { name: 'G#', freq: 207.65, label: 'G# (Kali 4)' },
  { name: 'A', freq: 220.00, label: 'A (Safed 6)' },
  { name: 'A#', freq: 233.08, label: 'A# (Kali 5)' },
  { name: 'B', freq: 246.94, label: 'B (Safed 7)' },
];

// Semitone intervals relative to root Sa in 12-TET / Shruti reference
const SWARA_SEMITONES = {
  // Mandra Saptak (Lower Octave)
  "'Dha": -3,
  "'Dha(k)": -4,
  "'Ni": -1,
  "'Ni(k)": -2,
  "‘Dha": -3,
  "‘Dha(k)": -4,
  "‘Ni": -1,
  "‘Ni(k)": -2,
  "‘Ni̲": -2,

  // Madhya Saptak (Middle Octave)
  "Sa": 0,
  "Re(k)": 1,
  "Re̲": 1,
  "Re": 2,
  "Ga(k)": 3,
  "Ga̲": 3,
  "Ga": 4,
  "Ma": 5,
  "Ma(t)": 6,
  "Ḿ": 6,
  "Pa": 7,
  "Dha(k)": 8,
  "Dha̲": 8,
  "Dha": 9,
  "Ni(k)": 10,
  "Ni̲": 10,
  "Ni": 11,

  // Taar Saptak (Higher Octave)
  "Sa'": 12,
  "Ṡ": 12,
  "Re'": 14,
  "Re'̲": 13,
  "Ga'": 16,
};

const PitchContext = createContext(null);

export function PitchProvider({ children }) {
  const [selectedRoot, setSelectedRoot] = useState(PITCH_ROOTS[1]); // Default C# (Kali 1)
  const [isTanpuraPlaying, setIsTanpuraPlaying] = useState(false);
  
  const audioCtxRef = useRef(null);
  const droneNodesRef = useRef([]);
  const masterGainRef = useRef(null);

  // Compute exact Hz frequency for any swara based on currently selected root Sa
  // Base formula: freq = (rootSa * 2) * 2^(semitones / 12) to place Sa in middle register (C4 range e.g. ~277Hz for C#)
  const getSwaraFreq = (swaraName) => {
    // Middle register base frequency for vocalists (around C4/261Hz)
    const middleSa = selectedRoot.freq * 2; 
    const semitones = SWARA_SEMITONES[swaraName];
    if (semitones === undefined) {
      return middleSa;
    }
    return middleSa * Math.pow(2, semitones / 12);
  };

  const stopDrone = () => {
    if (masterGainRef.current && audioCtxRef.current) {
      try {
        const now = audioCtxRef.current.currentTime;
        masterGainRef.current.gain.linearRampToValueAtTime(0.0001, now + 0.15);
      } catch (e) {
        // ignore
      }
    }

    setTimeout(() => {
      droneNodesRef.current.forEach(node => {
        try {
          node.stop();
          node.disconnect();
        } catch (err) {}
      });
      droneNodesRef.current = [];
      setIsTanpuraPlaying(false);
    }, 160);
  };

  const startDrone = (rootOverride) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      droneNodesRef.current.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
      droneNodesRef.current = [];

      const targetRoot = rootOverride || selectedRoot;
      const ctx = audioCtxRef.current;
      const baseFreq = targetRoot.freq;
      const paFreq = baseFreq * 1.5; // Pancham harmonic for Yaman (Pa - Sa - Sa - Sa)

      const master = ctx.createGain();
      masterGainRef.current = master;
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 1.2);
      master.connect(ctx.destination);

      // 4-string Tanpura acoustic emulation
      const freqs = [
        { f: paFreq, vol: 0.08, wave: 'sine' },
        { f: baseFreq, vol: 0.14, wave: 'sine' },
        { f: baseFreq * 2, vol: 0.04, wave: 'triangle' },
        { f: baseFreq * 0.5, vol: 0.08, wave: 'sine' }
      ];

      freqs.forEach(({ f, vol, wave }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = wave;
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        gain.gain.setValueAtTime(vol, ctx.currentTime);
        osc.connect(gain);
        gain.connect(master);

        osc.start();
        droneNodesRef.current.push(osc);
      });

      setIsTanpuraPlaying(true);
    } catch (err) {
      console.warn("Could not start Tanpura drone:", err);
    }
  };

  const toggleDrone = () => {
    if (isTanpuraPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  const changeRoot = (rootName) => {
    const found = PITCH_ROOTS.find(r => r.name === rootName) || PITCH_ROOTS[0];
    setSelectedRoot(found);
    if (isTanpuraPlaying) {
      setTimeout(() => {
        startDrone(found);
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, []);

  return (
    <PitchContext.Provider
      value={{
        selectedRoot,
        changeRoot,
        isTanpuraPlaying,
        toggleDrone,
        startDrone,
        stopDrone,
        getSwaraFreq,
        pitchRoots: PITCH_ROOTS,
      }}
    >
      {children}
    </PitchContext.Provider>
  );
}

export function usePitch() {
  const context = useContext(PitchContext);
  if (!context) {
    throw new Error('usePitch must be used within a PitchProvider');
  }
  return context;
}
