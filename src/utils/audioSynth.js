// Enhanced Web Audio API synthesizer for pure Indian Classical Swara tones
// High-Fidelity Acoustic Modeling (Warm Bansuri Flute & Harmonium Timbre)
// Features dual detuned warm oscillators, resonance formant filter, and exponential anti-pop envelopes.

class AudioTonePlayer {
  constructor() {
    this.ctx = null;
    this.timer = null;
    this.masterGain = null;
    this.volume = 0.85;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch (e) {
      console.warn("AudioTonePlayer initialization note:", e);
    }
    return this.ctx;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 0.05);
    }
  }

  // Play a gentle, warm melodic tone (simulating resonant classical Bansuri / Harmonium tone)
  playTone(freq, duration = 0.85) {
    if (!freq || isNaN(freq)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      
      // Fundamental oscillator (Warm sine)
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      // 2nd Harmonic (subtle detuning for acoustic warmth)
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2.001, now);

      // 3rd Harmonic (harmonic shimmer)
      const osc3 = this.ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(freq * 3.0, now);

      // Subtle LFO vibrato (approx 4.5 Hz, very shallow depth +/- 1.5 cents)
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(4.5, now);
      lfoGain.gain.setValueAtTime(freq * 0.003, now); // subtle natural vocal/flute breath vibrato
      lfo.connect(osc1.frequency);

      const gain1 = this.ctx.createGain();
      const gain2 = this.ctx.createGain();
      const gain3 = this.ctx.createGain();

      // Acoustic Lowpass Formant Filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(2.0, now);

      // Smooth anti-pop attack and natural exponential acoustic decay
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.exponentialRampToValueAtTime(0.38, now + 0.045);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      gain2.gain.setValueAtTime(0.0001, now);
      gain2.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.75);

      gain3.gain.setValueAtTime(0.0001, now);
      gain3.gain.exponentialRampToValueAtTime(0.04, now + 0.05);
      gain3.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.5);

      osc1.connect(gain1);
      osc2.connect(gain2);
      osc3.connect(gain3);

      gain1.connect(filter);
      gain2.connect(filter);
      gain3.connect(filter);

      const targetDest = this.masterGain || this.ctx.destination;
      filter.connect(targetDest);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);
      lfo.start(now);

      osc1.stop(now + duration + 0.05);
      osc2.stop(now + duration + 0.05);
      osc3.stop(now + duration + 0.05);
      lfo.stop(now + duration + 0.05);
    } catch (err) {
      console.error("Error playing tone:", err);
    }
  }

  // Play a simple sequence of swaras
  playSequence(notes, onNoteChange, onComplete) {
    this.stopSequence();
    this.init();
    if (!notes || notes.length === 0) return;

    let index = 0;
    const intervalTime = 650; // ms per swara

    const step = () => {
      if (index < notes.length) {
        const note = notes[index];
        this.playTone(note.freq, 0.75);
        if (onNoteChange) onNoteChange(note.name, index);
        index++;
        this.timer = setTimeout(step, intervalTime);
      } else {
        this.timer = null;
        if (onComplete) onComplete();
      }
    };

    step();
  }

  stopSequence() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

export const tonePlayer = new AudioTonePlayer();

/**
 * MelodyPracticeEngine:
 * Timestamp-based audio sequencer for practicing bandish/phrases.
 * Supports play, pause, seek, speed multiplier, loop, and 60fps real-time synchronized notation progress.
 */
export class MelodyPracticeEngine {
  constructor(getSwaraFreqFn) {
    this.getSwaraFreq = getSwaraFreqFn;
    this.player = tonePlayer;
    this.items = [];
    this.totalDuration = 0;
    this.playbackSpeed = 1.0;
    this.isLooping = false;
    this.isPlaying = false;
    this.currentTime = 0;
    this.rafId = null;
    this.lastTimestamp = null;
    this.onProgressCallback = null;
    this.onStateChangeCallback = null;
    this.lastTriggeredIndex = -1;
  }

  loadModule(moduleData) {
    this.stop();
    this.items = moduleData.notationData || [];
    this.totalDuration = moduleData.totalDuration || 12.8;
    this.currentTime = 0;
    this.lastTriggeredIndex = -1;
  }

  setSpeed(speed) {
    this.playbackSpeed = Math.max(0.25, Math.min(2.5, speed));
  }

  setLoop(loop) {
    this.isLooping = Boolean(loop);
  }

  seek(seconds) {
    this.currentTime = Math.max(0, Math.min(this.totalDuration, seconds));
    this.lastTriggeredIndex = -1;
    this._broadcastProgress();
  }

  play() {
    if (this.isPlaying) return;
    this.player.init();
    this.isPlaying = true;
    this.lastTimestamp = performance.now();
    this.lastTriggeredIndex = -1;

    if (this.currentTime >= this.totalDuration) {
      this.currentTime = 0;
    }

    this._notifyState();
    this._tick = this._tick.bind(this);
    this.rafId = requestAnimationFrame(this._tick);
  }

  pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this._notifyState();
  }

  stop() {
    this.pause();
    this.currentTime = 0;
    this.lastTriggeredIndex = -1;
    this._broadcastProgress();
    this._notifyState();
  }

  _tick(timestamp) {
    if (!this.isPlaying) return;

    const deltaMs = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    const deltaSec = (deltaMs / 1000) * this.playbackSpeed;
    this.currentTime += deltaSec;

    this._checkAndPlayCurrentNote();

    if (this.currentTime >= this.totalDuration) {
      if (this.isLooping) {
        this.currentTime = 0;
        this.lastTriggeredIndex = -1;
      } else {
        this.currentTime = this.totalDuration;
        this.pause();
        this._broadcastProgress();
        return;
      }
    }

    this._broadcastProgress();
    this.rafId = requestAnimationFrame(this._tick);
  }

  _checkAndPlayCurrentNote() {
    const currentIndex = this.items.findIndex(
      item => this.currentTime >= item.start && this.currentTime < item.end
    );

    if (currentIndex !== -1 && currentIndex !== this.lastTriggeredIndex) {
      this.lastTriggeredIndex = currentIndex;
      const noteItem = this.items[currentIndex];
      const freq = this.getSwaraFreq ? this.getSwaraFreq(noteItem.swara) : 261.63;
      const duration = (noteItem.end - noteItem.start) / this.playbackSpeed;
      this.player.playTone(freq, Math.min(duration * 0.95, 1.2));
    }
  }

  _broadcastProgress() {
    const activeIndex = this.items.findIndex(
      item => this.currentTime >= item.start && this.currentTime < item.end
    );
    if (this.onProgressCallback) {
      this.onProgressCallback(this.currentTime, activeIndex, this.totalDuration);
    }
  }

  _notifyState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback({
        isPlaying: this.isPlaying,
        playbackSpeed: this.playbackSpeed,
        isLooping: this.isLooping,
        currentTime: this.currentTime,
        totalDuration: this.totalDuration
      });
    }
  }
}
