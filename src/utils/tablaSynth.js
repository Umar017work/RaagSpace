// Indian Classical Tabla Synthesizer Engine using Web Audio API
// High-Fidelity Physical Modeling Synthesis:
// - Bayan (Dagga / Bass): Resonant dual-oscillator sub-bass with authentic wrist-pitch modulation (Gumki / Meend glide)
// - Dayan (Treble Drum): Bessel circular membrane harmonic modes (f0, 1.59f0, 2.14f0, 2.8f0) + metallic ringing chime + finger attack noise
// - Compound Strokes (Dha, Dhin): Perfectly phase-aligned dual strikes
// - Classical Thekas + Fast Drum Rolls / Tihai Jhala Sequences

export const TAAL_DEFINITIONS = [
  {
    id: "teentaal",
    name: "Teentaal",
    hindiName: "तीनताल",
    beatsCount: 16,
    vibhags: [4, 4, 4, 4],
    sam: 1,
    taalis: [1, 5, 13],
    khalis: [9],
    defaultBpm: 80,
    layaDefault: "Madhya",
    description: "The supreme 16-beat king of Hindustani rhythm. 3 claps (Taali) and 1 wave (Khali).",
    bols: [
      { beat: 1, bol: "Dha", type: "open_both", mark: "X", accent: 1.15 },
      { beat: 2, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 3, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 4, bol: "Dha", type: "open_both", mark: "", accent: 1.0 },
      { beat: 5, bol: "Dha", type: "open_both", mark: "2", accent: 1.1 },
      { beat: 6, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 7, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 8, bol: "Dha", type: "open_both", mark: "", accent: 1.0 },
      { beat: 9, bol: "Dha", type: "open_both", mark: "0", accent: 0.9 },
      { beat: 10, bol: "Tin", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 11, bol: "Tin", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 12, bol: "Ta", type: "closed_dayan", mark: "", accent: 0.95 },
      { beat: 13, bol: "Ta", type: "closed_dayan", mark: "3", accent: 1.05 },
      { beat: 14, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 15, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 16, bol: "Dha", type: "open_both", mark: "", accent: 1.0 }
    ]
  },
  {
    id: "roopak",
    name: "Roopak Taal",
    hindiName: "रूपक ताल",
    beatsCount: 7,
    vibhags: [3, 2, 2],
    sam: 1, // In Roopak, Sam is Khali (0)
    taalis: [4, 6],
    khalis: [1],
    defaultBpm: 75,
    layaDefault: "Madhya",
    description: "Unique 7-beat asymmetrical cycle where the first beat (Sam) is Khali (open wave).",
    bols: [
      { beat: 1, bol: "Tin", type: "open_dayan", mark: "0", accent: 1.0 },
      { beat: 2, bol: "Tin", type: "open_dayan", mark: "", accent: 0.85 },
      { beat: 3, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 4, bol: "Dhin", type: "open_dhin", mark: "1", accent: 1.1 },
      { beat: 5, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 6, bol: "Dhin", type: "open_dhin", mark: "2", accent: 1.1 },
      { beat: 7, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 }
    ]
  },
  {
    id: "ektaal",
    name: "Ektaal",
    hindiName: "एकताल",
    beatsCount: 12,
    vibhags: [2, 2, 2, 2, 2, 2],
    sam: 1,
    taalis: [1, 5, 9, 11],
    khalis: [3, 7],
    defaultBpm: 60,
    layaDefault: "Vilambit",
    description: "Majestic 12-beat classical cycle favored for Khayal compositions.",
    bols: [
      { beat: 1, bol: "Dhin", type: "open_dhin", mark: "X", accent: 1.15 },
      { beat: 2, bol: "Dhin", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 3, bol: "DhaGe", type: "open_both", mark: "0", accent: 0.9 },
      { beat: 4, bol: "Tirakit", type: "closed_dayan", mark: "", accent: 0.9 },
      { beat: 5, bol: "Tu", type: "open_dayan", mark: "2", accent: 1.1 },
      { beat: 6, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 7, bol: "Kat", type: "closed_bayan", mark: "0", accent: 0.85 },
      { beat: 8, bol: "Tin", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 9, bol: "DhaGe", type: "open_both", mark: "3", accent: 1.1 },
      { beat: 10, bol: "Tirakit", type: "closed_dayan", mark: "", accent: 0.9 },
      { beat: 11, bol: "Dhi", type: "open_dhin", mark: "4", accent: 1.1 },
      { beat: 12, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 }
    ]
  },
  {
    id: "jhaptaal",
    name: "Jhaptaal",
    hindiName: "झपताल",
    beatsCount: 10,
    vibhags: [2, 3, 2, 3],
    sam: 1,
    taalis: [1, 3, 8],
    khalis: [6],
    defaultBpm: 72,
    layaDefault: "Madhya",
    description: "Deeply contemplative 10-beat cycle divided 2-3-2-3.",
    bols: [
      { beat: 1, bol: "Dhi", type: "open_dhin", mark: "X", accent: 1.15 },
      { beat: 2, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 3, bol: "Dhi", type: "open_dhin", mark: "2", accent: 1.1 },
      { beat: 4, bol: "Dhi", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 5, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 6, bol: "Ti", type: "closed_dayan", mark: "0", accent: 0.85 },
      { beat: 7, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 8, bol: "Dhi", type: "open_dhin", mark: "3", accent: 1.1 },
      { beat: 9, bol: "Dhi", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 10, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 }
    ]
  },
  {
    id: "keherwa",
    name: "Keherwa",
    hindiName: "कहरवा",
    beatsCount: 8,
    vibhags: [4, 4],
    sam: 1,
    taalis: [1],
    khalis: [5],
    defaultBpm: 92,
    layaDefault: "Drut",
    description: "Lively, swinging 8-beat rhythm popular in Bhajans, Ghazals, and folk bandishes.",
    bols: [
      { beat: 1, bol: "Dha", type: "open_both", mark: "X", accent: 1.2 },
      { beat: 2, bol: "Ge", type: "open_bayan", mark: "", accent: 0.95 },
      { beat: 3, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 4, bol: "Tin", type: "open_dayan", mark: "", accent: 0.95 },
      { beat: 5, bol: "Na", type: "closed_dayan", mark: "0", accent: 0.85 },
      { beat: 6, bol: "Ke", type: "closed_bayan", mark: "", accent: 0.9 },
      { beat: 7, bol: "Dhin", type: "open_dhin", mark: "", accent: 1.05 },
      { beat: 8, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 }
    ]
  },
  {
    id: "dadra",
    name: "Dadra",
    hindiName: "दादरा",
    beatsCount: 6,
    vibhags: [3, 3],
    sam: 1,
    taalis: [1],
    khalis: [4],
    defaultBpm: 104,
    layaDefault: "Drut",
    description: "Gentle swinging 6-beat cycle (3+3), ideal for Thumri and light-classical melody.",
    bols: [
      { beat: 1, bol: "Dha", type: "open_both", mark: "X", accent: 1.2 },
      { beat: 2, bol: "Dhi", type: "open_dhin", mark: "", accent: 0.95 },
      { beat: 3, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 },
      { beat: 4, bol: "Dha", type: "open_both", mark: "0", accent: 0.95 },
      { beat: 5, bol: "Ti", type: "closed_dayan", mark: "", accent: 0.85 },
      { beat: 6, bol: "Na", type: "open_dayan", mark: "", accent: 0.9 }
    ]
  }
];

// High-Fidelity Tabla Synthesizer Engine
class TablaSynthesizer {
  constructor() {
    this.ctx = null;
    this.timer = null;
    this.isPlaying = false;
    this.currentTaal = TAAL_DEFINITIONS[0];
    this.bpm = 80;
    this.currentBeatIndex = 0;
    this.rootPitchFreq = 138.59; // C# default
    this.onBeatChange = null;
    this.volume = 0.85;
    this.isRollPlaying = false;
    this.rollTimer = null;
    
    // Nodes
    this.masterGain = null;
    this.compressor = null;
    this.bayanPanner = null;
    this.dayanPanner = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this._setupAudioGraph();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _setupAudioGraph() {
    if (!this.ctx) return;
    
    // Master Gain & Studio Dynamics Compressor
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

    // Warm studio bus compressor for punchy classical master sound
    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
    this.compressor.knee.setValueAtTime(6, this.ctx.currentTime);
    this.compressor.ratio.setValueAtTime(4, this.ctx.currentTime);
    this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
    this.compressor.release.setValueAtTime(0.18, this.ctx.currentTime);

    // Stereo spatial field: Bayan positioned slightly Left (-0.25), Dayan slightly Right (+0.25)
    if (this.ctx.createStereoPanner) {
      this.bayanPanner = this.ctx.createStereoPanner();
      this.bayanPanner.pan.setValueAtTime(-0.25, this.ctx.currentTime);
      this.bayanPanner.connect(this.masterGain);

      this.dayanPanner = this.ctx.createStereoPanner();
      this.dayanPanner.pan.setValueAtTime(0.25, this.ctx.currentTime);
      this.dayanPanner.connect(this.masterGain);
    }

    this.masterGain.connect(this.compressor);
    this.compressor.connect(this.ctx.destination);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 0.05);
    }
  }

  setRootPitch(freq) {
    if (freq && !isNaN(freq)) {
      this.rootPitchFreq = freq;
    }
  }

  // Authentic Bayan Bass Stroke with Meend / Gumki Wrist Modulation
  playBayan(time, isAccent = true, velocity = 1.0) {
    if (!this.ctx) return;
    const now = time || this.ctx.currentTime;
    
    // Sub-bass fundamental + 2nd harmonic
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Natural Gumki pitch glide: strikes with finger pressure then dips with wrist release
    const startFreq = isAccent ? 98 : 84;
    const peakFreq = isAccent ? 108 : 92;
    const settleFreq = isAccent ? 62 : 56;

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(startFreq, now);
    osc1.frequency.linearRampToValueAtTime(peakFreq, now + 0.04);
    osc1.frequency.exponentialRampToValueAtTime(settleFreq, now + 0.28);

    // Subtle 2nd harmonic for skin presence
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(startFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(settleFreq * 1.5, now + 0.18);

    // Deep sub-octave thump
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(startFreq * 0.5, now);
    subOsc.frequency.exponentialRampToValueAtTime(settleFreq * 0.5, now + 0.22);

    // Lowpass filter modeling the large wooden/clay dagga chamber
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, now);
    filter.Q.setValueAtTime(2.2, now);

    const baseVol = (isAccent ? 0.52 : 0.38) * velocity;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(baseVol, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);

    const targetBus = this.bayanPanner || this.masterGain || this.ctx.destination;
    gain.connect(targetBus);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + 0.45);
    osc2.stop(now + 0.45);
    subOsc.stop(now + 0.45);
  }

  // Authentic Dayan Treble Stroke with Bessel Modes & Ringing Chime
  playDayan(time, strokeType = "open", velocity = 1.0) {
    if (!this.ctx) return;
    const now = time || this.ctx.currentTime;
    
    // Fundamental tuned pitch based on vocalist's selected root Sa (e.g. 138.59Hz or 277.18Hz)
    const f0 = this.rootPitchFreq > 200 ? this.rootPitchFreq : this.rootPitchFreq * 2;
    
    // Physical membrane modes of circular syahi loaded head:
    // Mode (0,1): f0
    // Mode (1,1): 1.59 * f0
    // Mode (2,1): 2.14 * f0
    // Mode (0,2): 2.30 * f0
    // Mode (1,2): 2.92 * f0 (metallic kinar chime)
    const mode1 = this.ctx.createOscillator();
    const mode2 = this.ctx.createOscillator();
    const mode3 = this.ctx.createOscillator();
    const chime = this.ctx.createOscillator();

    const gain1 = this.ctx.createGain();
    const gain2 = this.ctx.createGain();
    const gain3 = this.ctx.createGain();
    const chimeGain = this.ctx.createGain();

    mode1.type = 'sine';
    mode1.frequency.setValueAtTime(f0, now);

    mode2.type = 'sine';
    mode2.frequency.setValueAtTime(f0 * 1.59, now);

    mode3.type = 'triangle';
    mode3.frequency.setValueAtTime(f0 * 2.14, now);

    // High crystalline metallic chime
    chime.type = 'sine';
    chime.frequency.setValueAtTime(f0 * 2.92, now);

    // Attack noise burst (finger striking the parchment rim)
    this._playFingerSlapNoise(now, strokeType === "closed" ? 0.03 : 0.015, velocity);

    let duration = 0.45;
    let mainVol = 0.42 * velocity;

    if (strokeType === "open") {
      // Tun / Tin: sustained bell-like ring
      duration = 0.52;
      mainVol = 0.44 * velocity;
      gain1.gain.setValueAtTime(mainVol, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      gain2.gain.setValueAtTime(mainVol * 0.55, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.65);

      gain3.gain.setValueAtTime(mainVol * 0.35, now);
      gain3.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.4);

      chimeGain.gain.setValueAtTime(mainVol * 0.28, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.35);
    } else if (strokeType === "na") {
      // Na / Ta: crisp rim stroke, sharp and bright
      duration = 0.22;
      mainVol = 0.48 * velocity;
      gain1.gain.setValueAtTime(mainVol * 0.7, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      gain2.gain.setValueAtTime(mainVol * 0.8, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.5);

      gain3.gain.setValueAtTime(mainVol * 0.4, now);
      gain3.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.35);

      chimeGain.gain.setValueAtTime(mainVol * 0.5, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.4);
    } else {
      // Closed stroke (Ti / Te / Ta): dampened muted stroke on syahi
      duration = 0.085;
      mainVol = 0.32 * velocity;
      gain1.gain.setValueAtTime(mainVol, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      gain2.gain.setValueAtTime(mainVol * 0.3, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.5);

      gain3.gain.setValueAtTime(0.0001, now);
      chimeGain.gain.setValueAtTime(0.0001, now);
    }

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(f0 * 1.5, now);
    bandpass.Q.setValueAtTime(1.8, now);

    mode1.connect(gain1);
    mode2.connect(gain2);
    mode3.connect(gain3);
    chime.connect(chimeGain);

    const targetBus = this.dayanPanner || this.masterGain || this.ctx.destination;
    gain1.connect(targetBus);
    gain2.connect(targetBus);
    gain3.connect(targetBus);
    chimeGain.connect(bandpass);
    bandpass.connect(targetBus);

    mode1.start(now);
    mode2.start(now);
    mode3.start(now);
    chime.start(now);

    mode1.stop(now + duration + 0.02);
    mode2.stop(now + duration + 0.02);
    mode3.stop(now + duration + 0.02);
    chime.stop(now + duration + 0.02);
  }

  // High-Frequency finger slap attack noise on skin
  _playFingerSlapNoise(time, duration = 0.02, velocity = 1.0) {
    if (!this.ctx) return;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(2400, time);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18 * velocity, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    
    const targetBus = this.dayanPanner || this.masterGain || this.ctx.destination;
    noiseGain.connect(targetBus);

    whiteNoise.start(time);
  }

  // Dry closed palm thud on Bayan (Kat / Ke)
  playClosedBayan(time, velocity = 1.0) {
    if (!this.ctx) return;
    const now = time || this.ctx.currentTime;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.06);

    gain.gain.setValueAtTime(0.32 * velocity, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, now);

    osc.connect(filter);
    filter.connect(gain);
    
    const targetBus = this.bayanPanner || this.masterGain || this.ctx.destination;
    gain.connect(targetBus);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Trigger Individual Bol with Precision
  playBol(bolType, velocity = 1.0) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch (bolType) {
      case "open_both": // Dha = Bayan (Ge) + Dayan (Na/Tin)
        this.playBayan(now, true, velocity);
        this.playDayan(now, "na", velocity);
        break;
      case "open_dhin": // Dhin = Bayan (subtle Ge) + Dayan (Tun ringing center)
        this.playBayan(now, false, velocity * 0.95);
        this.playDayan(now, "open", velocity);
        break;
      case "open_bayan": // Ge
        this.playBayan(now, true, velocity);
        break;
      case "open_dayan": // Tin / Na
        this.playDayan(now, "open", velocity);
        break;
      case "closed_dayan": // Ta / Ti / Tirakit
        this.playDayan(now, "closed", velocity);
        break;
      case "closed_bayan": // Kat / Ke
        this.playClosedBayan(now, velocity);
        break;
      default:
        this.playDayan(now, "open", velocity);
    }
  }

  // Classical Drum Roll / Fast Tirakita Jhala Sequence
  playDrumRoll(onComplete) {
    this.init();
    if (!this.ctx) return;
    this.stop();
    this.isRollPlaying = true;

    // Signature classical drum roll pattern:
    // Dha - Ti - Ra - Ki - Ta | Dha - Ti - Ra - Ki - Ta | Dha - Ge - Na - Ti | DHA (Sam landing)!
    const rollPattern = [
      { bol: "open_both", dur: 0.11, v: 1.1 },   // Dha
      { bol: "closed_dayan", dur: 0.07, v: 0.8 }, // Ti
      { bol: "closed_bayan", dur: 0.07, v: 0.8 }, // Ra
      { bol: "closed_dayan", dur: 0.07, v: 0.8 }, // Ki
      { bol: "closed_dayan", dur: 0.07, v: 0.85 },// Ta

      { bol: "open_both", dur: 0.11, v: 1.15 },  // Dha
      { bol: "closed_dayan", dur: 0.07, v: 0.85 }, // Ti
      { bol: "closed_bayan", dur: 0.07, v: 0.85 }, // Ra
      { bol: "closed_dayan", dur: 0.07, v: 0.85 }, // Ki
      { bol: "closed_dayan", dur: 0.07, v: 0.9 }, // Ta

      { bol: "open_both", dur: 0.10, v: 1.2 },   // Dha
      { bol: "open_bayan", dur: 0.09, v: 0.95 }, // Ge
      { bol: "open_dayan", dur: 0.09, v: 0.95 }, // Na
      { bol: "closed_dayan", dur: 0.08, v: 0.9 }, // Ti

      { bol: "open_both", dur: 0.40, v: 1.4 }    // Resonant SAM DHA!
    ];

    let index = 0;
    const playNext = () => {
      if (!this.isRollPlaying || index >= rollPattern.length) {
        this.isRollPlaying = false;
        if (onComplete) onComplete();
        return;
      }

      const item = rollPattern[index];
      this.playBol(item.bol, item.v);
      index++;
      this.rollTimer = setTimeout(playNext, item.dur * 1000);
    };

    playNext();
  }

  stopRoll() {
    this.isRollPlaying = false;
    if (this.rollTimer) {
      clearTimeout(this.rollTimer);
      this.rollTimer = null;
    }
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.stopRoll();
    this.isPlaying = true;

    const tick = () => {
      if (!this.isPlaying) return;

      const currentBol = this.currentTaal.bols[this.currentBeatIndex];
      const velocity = currentBol.accent || 1.0;
      this.playBol(currentBol.type, velocity);

      if (this.onBeatChange) {
        this.onBeatChange(this.currentBeatIndex, currentBol);
      }

      this.currentBeatIndex = (this.currentBeatIndex + 1) % this.currentTaal.beatsCount;

      const beatIntervalMs = (60 / this.bpm) * 1000;
      this.timer = setTimeout(tick, beatIntervalMs);
    };

    tick();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.stopRoll();
    this.currentBeatIndex = 0;
  }

  setTaal(taalId) {
    const found = TAAL_DEFINITIONS.find(t => t.id === taalId) || TAAL_DEFINITIONS[0];
    const wasPlaying = this.isPlaying;
    this.stop();
    this.currentTaal = found;
    this.currentBeatIndex = 0;
    if (wasPlaying) {
      this.start();
    }
  }

  setBpm(newBpm) {
    this.bpm = Math.max(30, Math.min(260, newBpm));
  }
}

export const tablaSynth = new TablaSynthesizer();
