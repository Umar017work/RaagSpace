// Indian Classical Tabla Synthesizer Engine using Web Audio API
// Produces authentic Bayan (bass) and Dayan (treble ring) strokes for classical thekas.

export const TAAL_DEFINITIONS = [
  {
    id: "teentaal",
    name: "Teentaal",
    beatsCount: 16,
    vibhags: [4, 4, 4, 4],
    sam: 1,
    taalis: [1, 5, 13],
    khalis: [9],
    defaultBpm: 80,
    bols: [
      { beat: 1, bol: "Dha", type: "open_both", mark: "X" },
      { beat: 2, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 3, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 4, bol: "Dha", type: "open_both", mark: "" },
      { beat: 5, bol: "Dha", type: "open_both", mark: "2" },
      { beat: 6, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 7, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 8, bol: "Dha", type: "open_both", mark: "" },
      { beat: 9, bol: "Dha", type: "open_both", mark: "0" },
      { beat: 10, bol: "Tin", type: "open_dayan", mark: "" },
      { beat: 11, bol: "Tin", type: "open_dayan", mark: "" },
      { beat: 12, bol: "Ta", type: "closed_dayan", mark: "" },
      { beat: 13, bol: "Ta", type: "closed_dayan", mark: "3" },
      { beat: 14, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 15, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 16, bol: "Dha", type: "open_both", mark: "" }
    ]
  },
  {
    id: "roopak",
    name: "Roopak Taal",
    beatsCount: 7,
    vibhags: [3, 2, 2],
    sam: 1, // Note: In Roopak, Sam is Khali (0)
    taalis: [4, 6],
    khalis: [1],
    defaultBpm: 75,
    bols: [
      { beat: 1, bol: "Tin", type: "open_dayan", mark: "0" },
      { beat: 2, bol: "Tin", type: "open_dayan", mark: "" },
      { beat: 3, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 4, bol: "Dhin", type: "open_dhin", mark: "1" },
      { beat: 5, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 6, bol: "Dhin", type: "open_dhin", mark: "2" },
      { beat: 7, bol: "Na", type: "open_dayan", mark: "" }
    ]
  },
  {
    id: "ektaal",
    name: "Ektaal",
    beatsCount: 12,
    vibhags: [2, 2, 2, 2, 2, 2],
    sam: 1,
    taalis: [1, 5, 9, 11],
    khalis: [3, 7],
    defaultBpm: 60,
    bols: [
      { beat: 1, bol: "Dhin", type: "open_dhin", mark: "X" },
      { beat: 2, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 3, bol: "DhaGe", type: "open_both", mark: "0" },
      { beat: 4, bol: "Tirakit", type: "closed_dayan", mark: "" },
      { beat: 5, bol: "Tu", type: "open_dayan", mark: "2" },
      { beat: 6, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 7, bol: "Kat", type: "closed_bayan", mark: "0" },
      { beat: 8, bol: "Tin", type: "open_dayan", mark: "" },
      { beat: 9, bol: "DhaGe", type: "open_both", mark: "3" },
      { beat: 10, bol: "Tirakit", type: "closed_dayan", mark: "" },
      { beat: 11, bol: "Dhi", type: "open_dhin", mark: "4" },
      { beat: 12, bol: "Na", type: "open_dayan", mark: "" }
    ]
  },
  {
    id: "jhaptaal",
    name: "Jhaptaal",
    beatsCount: 10,
    vibhags: [2, 3, 2, 3],
    sam: 1,
    taalis: [1, 3, 8],
    khalis: [6],
    defaultBpm: 72,
    bols: [
      { beat: 1, bol: "Dhi", type: "open_dhin", mark: "X" },
      { beat: 2, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 3, bol: "Dhi", type: "open_dhin", mark: "2" },
      { beat: 4, bol: "Dhi", type: "open_dhin", mark: "" },
      { beat: 5, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 6, bol: "Ti", type: "closed_dayan", mark: "0" },
      { beat: 7, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 8, bol: "Dhi", type: "open_dhin", mark: "3" },
      { beat: 9, bol: "Dhi", type: "open_dhin", mark: "" },
      { beat: 10, bol: "Na", type: "open_dayan", mark: "" }
    ]
  },
  {
    id: "keherwa",
    name: "Keherwa",
    beatsCount: 8,
    vibhags: [4, 4],
    sam: 1,
    taalis: [1],
    khalis: [5],
    defaultBpm: 90,
    bols: [
      { beat: 1, bol: "Dha", type: "open_both", mark: "X" },
      { beat: 2, bol: "Ge", type: "open_bayan", mark: "" },
      { beat: 3, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 4, bol: "Tin", type: "open_dayan", mark: "" },
      { beat: 5, bol: "Na", type: "closed_dayan", mark: "0" },
      { beat: 6, bol: "Ke", type: "closed_bayan", mark: "" },
      { beat: 7, bol: "Dhin", type: "open_dhin", mark: "" },
      { beat: 8, bol: "Na", type: "open_dayan", mark: "" }
    ]
  },
  {
    id: "dadra",
    name: "Dadra",
    beatsCount: 6,
    vibhags: [3, 3],
    sam: 1,
    taalis: [1],
    khalis: [4],
    defaultBpm: 100,
    bols: [
      { beat: 1, bol: "Dha", type: "open_both", mark: "X" },
      { beat: 2, bol: "Dhi", type: "open_dhin", mark: "" },
      { beat: 3, bol: "Na", type: "open_dayan", mark: "" },
      { beat: 4, bol: "Dha", type: "open_both", mark: "0" },
      { beat: 5, bol: "Ti", type: "closed_dayan", mark: "" },
      { beat: 6, bol: "Na", type: "open_dayan", mark: "" }
    ]
  }
];

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
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setRootPitch(freq) {
    if (freq && !isNaN(freq)) {
      this.rootPitchFreq = freq;
    }
  }

  // Play synthesized Bayan bass strike with pitch glide (Gumki)
  playBayan(time, isAccent = true) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const startFreq = isAccent ? 95 : 80;
    const endFreq = isAccent ? 60 : 55;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, time);
    osc.frequency.exponentialRampToValueAtTime(endFreq, time + 0.18);

    gain.gain.setValueAtTime(isAccent ? 0.45 : 0.28, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.36);
  }

  // Play Dayan treble ring tuned to root pitch
  playDayan(time, isOpen = true) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const tunedFreq = this.rootPitchFreq; // Matches root Sa

    osc.type = 'sine';
    osc.frequency.setValueAtTime(tunedFreq, time);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(tunedFreq * 2.75, time); // High metallic chime

    const duration = isOpen ? 0.38 : 0.08;
    gain.gain.setValueAtTime(isOpen ? 0.35 : 0.22, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    oscHarmonic.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    oscHarmonic.start(time);

    osc.stop(time + duration + 0.02);
    oscHarmonic.stop(time + duration + 0.02);
  }

  // Play closed strike (Ta/Kat)
  playClosedStrike(time) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(190, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.06);

    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.08);
  }

  playBol(bolType) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch (bolType) {
      case "open_both": // Dha
        this.playBayan(now, true);
        this.playDayan(now, true);
        break;
      case "open_dhin": // Dhin
        this.playBayan(now, false);
        this.playDayan(now, true);
        break;
      case "open_bayan": // Ge
        this.playBayan(now, true);
        break;
      case "open_dayan": // Tin / Na / Tun
        this.playDayan(now, true);
        break;
      case "closed_dayan": // Ta / Ti
        this.playDayan(now, false);
        break;
      case "closed_bayan": // Kat / Ke
        this.playClosedStrike(now);
        break;
      default:
        this.playDayan(now, true);
    }
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const tick = () => {
      if (!this.isPlaying) return;

      const currentBol = this.currentTaal.bols[this.currentBeatIndex];
      this.playBol(currentBol.type);

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
