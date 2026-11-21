// Enhanced Web Audio API synthesizer for pure Indian Classical Swara tones
class AudioTonePlayer {
  constructor() {
    this.ctx = null;
    this.timer = null;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch (e) {
      console.warn("AudioContext initialization note:", e);
    }
    return this.ctx;
  }

  // Play a gentle, warm melodic tone (simulating a warm resonant flute/tanpura harmonic)
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

      // Warm octave harmonic (triangle with subtle shimmer)
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, now);

      const gain1 = this.ctx.createGain();
      const gain2 = this.ctx.createGain();
      const masterGain = this.ctx.createGain();

      // Gentle lowpass acoustic resonance filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      // Smooth anti-pop attack and natural exponential acoustic decay
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.exponentialRampToValueAtTime(0.35, now + 0.06);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      gain2.gain.setValueAtTime(0.0001, now);
      gain2.gain.exponentialRampToValueAtTime(0.08, now + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.75);

      osc1.connect(gain1);
      osc2.connect(gain2);

      gain1.connect(filter);
      gain2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);

      osc1.stop(now + duration + 0.05);
      osc2.stop(now + duration + 0.05);
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

    // Advance real time multiplied by playback speed
    const deltaSec = (deltaMs / 1000) * this.playbackSpeed;
    this.currentTime += deltaSec;

    // Check if sound should trigger for current position
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
