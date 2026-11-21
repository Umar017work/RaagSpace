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

// 1st string tuning options
export const TANPURA_FIRST_STRINGS = [
  { id: 'Pa', label: 'Pa (Pancham)', ratio: 1.5, desc: 'Standard for Yaman, Bhupali, Bhairav, Bilawal' },
  { id: 'Ma', label: 'Ma (Madhyam)', ratio: 4/3, desc: 'For Raags omitting Pa (Malkauns, Bageshri)' },
  { id: 'Ni', label: 'Ni (Shuddha Ni)', ratio: 15/8, desc: 'For Marwa, Puriya, Sohini' }
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
  "'Pa": -5,

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
  "Ma'": 17,
  "Pa'": 19
};

const PitchContext = createContext(null);

export function PitchProvider({ children }) {
  const [selectedRoot, setSelectedRoot] = useState(PITCH_ROOTS[1]); // Default C# (Kali 1)
  const [isTanpuraPlaying, setIsTanpuraPlaying] = useState(false);
  const [tanpuraFirstString, setTanpuraFirstString] = useState(TANPURA_FIRST_STRINGS[0]); // Pa
  const [tanpuraMode, setTanpuraMode] = useState('ambient'); // 'ambient' | 'plucked'
  const [tanpuraVolume, setTanpuraVolume] = useState(0.85);

  const audioCtxRef = useRef(null);
  const droneNodesRef = useRef([]);
  const masterGainRef = useRef(null);
  const pluckTimerRef = useRef(null);
  const currentPluckStringRef = useRef(0);

  // Compute exact Hz frequency for any swara based on currently selected root Sa
  const getSwaraFreq = (swaraName) => {
    const middleSa = selectedRoot.freq * 2; 
    const semitones = SWARA_SEMITONES[swaraName];
    if (semitones === undefined) {
      return middleSa;
    }
    return middleSa * Math.pow(2, semitones / 12);
  };

  const initAudio = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const stopDrone = () => {
    if (pluckTimerRef.current) {
      clearInterval(pluckTimerRef.current);
      pluckTimerRef.current = null;
    }

    if (masterGainRef.current && audioCtxRef.current) {
      try {
        const now = audioCtxRef.current.currentTime;
        masterGainRef.current.gain.linearRampToValueAtTime(0.0001, now + 0.2);
      } catch (e) {}
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
    }, 220);
  };

  // Pluck a single acoustic Tanpura string with Jawari buzz harmonics
  const pluckString = (freq, duration = 3.5, velocity = 1.0) => {
    const ctx = initAudio();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Jawari buzz simulation: multiple harmonically related oscillators with distinct decay
    const oscFundamental = ctx.createOscillator();
    const oscJawari1 = ctx.createOscillator();
    const oscJawari2 = ctx.createOscillator();
    const gainMaster = ctx.createGain();
    const gainJawari = ctx.createGain();

    oscFundamental.type = 'sawtooth';
    oscFundamental.frequency.setValueAtTime(freq, now);

    oscJawari1.type = 'triangle';
    oscJawari1.frequency.setValueAtTime(freq * 2.002, now); // subtle shimmer beating

    oscJawari2.type = 'sine';
    oscJawari2.frequency.setValueAtTime(freq * 3.003, now);

    // Warm resonant acoustic filter modeling the hollow gourd (Tumba)
    const tumbaFilter = ctx.createBiquadFilter();
    tumbaFilter.type = 'lowpass';
    tumbaFilter.frequency.setValueAtTime(1100, now);
    tumbaFilter.Q.setValueAtTime(2.5, now);

    // Pluck attack & exponential ringing decay
    const vol = 0.16 * velocity * tanpuraVolume;
    gainMaster.gain.setValueAtTime(0.0001, now);
    gainMaster.gain.linearRampToValueAtTime(vol, now + 0.04);
    gainMaster.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gainJawari.gain.setValueAtTime(0.0001, now);
    gainJawari.gain.linearRampToValueAtTime(vol * 0.45, now + 0.08);
    gainJawari.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);

    oscFundamental.connect(tumbaFilter);
    oscJawari1.connect(gainJawari);
    oscJawari2.connect(gainJawari);
    gainJawari.connect(tumbaFilter);

    tumbaFilter.connect(gainMaster);
    gainMaster.connect(ctx.destination);

    oscFundamental.start(now);
    oscJawari1.start(now);
    oscJawari2.start(now);

    oscFundamental.stop(now + duration + 0.05);
    oscJawari1.stop(now + duration + 0.05);
    oscJawari2.stop(now + duration + 0.05);
  };

  // Start continuous ambient shimmer drone
  const startAmbientDrone = (targetRoot) => {
    const ctx = initAudio();
    if (!ctx) return;

    droneNodesRef.current.forEach(node => {
      try { node.stop(); node.disconnect(); } catch (e) {}
    });
    droneNodesRef.current = [];

    const root = targetRoot || selectedRoot;
    const baseFreq = root.freq; // Sa (Kharaj)
    const firstStringFreq = baseFreq * tanpuraFirstString.ratio;
    const madhyaSa = baseFreq * 2;

    const master = ctx.createGain();
    masterGainRef.current = master;
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.24 * tanpuraVolume, ctx.currentTime + 1.2);
    master.connect(ctx.destination);

    // 4 strings: 1st String (Pa/Ma/Ni), 2nd String (Sa), 3rd String (Sa), 4th String (Kharaj Sa)
    const strings = [
      { f: firstStringFreq, vol: 0.10, wave: 'sawtooth', filterFreq: 900 },
      { f: madhyaSa, vol: 0.14, wave: 'sine', filterFreq: 1400 },
      { f: madhyaSa * 1.0015, vol: 0.08, wave: 'triangle', filterFreq: 1600 },
      { f: baseFreq, vol: 0.16, wave: 'sawtooth', filterFreq: 650 }
    ];

    strings.forEach(({ f, vol, wave, filterFreq }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(filterFreq, ctx.currentTime);
      filter.Q.setValueAtTime(2.0, ctx.currentTime);

      osc.type = wave;
      osc.frequency.setValueAtTime(f, ctx.currentTime);

      gain.gain.setValueAtTime(vol, ctx.currentTime);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      osc.start();
      droneNodesRef.current.push(osc);
    });

    setIsTanpuraPlaying(true);
  };

  // Start sequential plucking cycle: String 1 -> 2 -> 3 -> 4
  const startPluckedDrone = (targetRoot) => {
    const ctx = initAudio();
    if (!ctx) return;

    const root = targetRoot || selectedRoot;
    const baseFreq = root.freq;
    const firstStringFreq = baseFreq * tanpuraFirstString.ratio;
    const madhyaSa = baseFreq * 2;

    const stringSequence = [
      firstStringFreq, // String 1: Pa / Ma / Ni
      madhyaSa,        // String 2: Sa
      madhyaSa,        // String 3: Sa
      baseFreq         // String 4: Low Kharaj Sa
    ];

    setIsTanpuraPlaying(true);
    currentPluckStringRef.current = 0;

    // Immediately pluck first string
    pluckString(stringSequence[0], 3.2, 1.1);

    // Loop through strings every 1.15 seconds (authentic natural strum speed)
    pluckTimerRef.current = setInterval(() => {
      currentPluckStringRef.current = (currentPluckStringRef.current + 1) % stringSequence.length;
      const idx = currentPluckStringRef.current;
      const isFirst = idx === 0;
      pluckString(stringSequence[idx], 3.2, isFirst ? 1.15 : 0.95);
    }, 1150);
  };

  const startDrone = (rootOverride) => {
    stopDrone();
    setTimeout(() => {
      if (tanpuraMode === 'plucked') {
        startPluckedDrone(rootOverride);
      } else {
        startAmbientDrone(rootOverride);
      }
    }, 50);
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

  const setFirstStringTuning = (tuningId) => {
    const target = TANPURA_FIRST_STRINGS.find(s => s.id === tuningId) || TANPURA_FIRST_STRINGS[0];
    setTanpuraFirstString(target);
    if (isTanpuraPlaying) {
      setTimeout(() => startDrone(), 100);
    }
  };

  const setMode = (mode) => {
    setTanpuraMode(mode);
    if (isTanpuraPlaying) {
      setTimeout(() => startDrone(), 100);
    }
  };

  const setVolume = (vol) => {
    const val = Math.max(0, Math.min(1, vol));
    setTanpuraVolume(val);
    if (masterGainRef.current && audioCtxRef.current) {
      try {
        masterGainRef.current.gain.linearRampToValueAtTime(0.24 * val, audioCtxRef.current.currentTime + 0.05);
      } catch (e) {}
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
        tanpuraFirstString,
        setFirstStringTuning,
        tanpuraMode,
        setTanpuraMode: setMode,
        tanpuraVolume,
        setTanpuraVolume: setVolume,
        firstStrings: TANPURA_FIRST_STRINGS
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
