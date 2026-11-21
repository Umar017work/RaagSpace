import React, { useState, useEffect, useRef } from 'react';
import { Mic, Activity, CheckCircle, Volume2, ShieldAlert } from 'lucide-react';
import { usePitch } from '../../context/PitchContext';

// Standard Autocorrelation Pitch Detection Algorithm
function autoCorrelate(buf, sampleRate) {
  const SIZE = buf.length;
  let rms = 0;

  for (let i = 0; i < SIZE; i++) {
    const val = buf[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / SIZE);
  // Volume threshold (avoid background noise)
  if (rms < 0.015) return -1;

  let r1 = 0, r2 = SIZE - 1;
  const thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++) {
    if (Math.abs(buf[i]) < thres) {
      r1 = i;
      break;
    }
  }
  for (let i = 1; i < SIZE / 2; i++) {
    if (Math.abs(buf[SIZE - i]) < thres) {
      r2 = SIZE - i;
      break;
    }
  }

  const bufSlice = buf.slice(r1, r2);
  const c = new Array(bufSlice.length).fill(0);
  for (let i = 0; i < bufSlice.length; i++) {
    for (let j = 0; j < bufSlice.length - i; j++) {
      c[i] = c[i] + bufSlice[j] * bufSlice[j + i];
    }
  }

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1, maxpos = -1;
  for (let i = d; i < bufSlice.length; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;

  // Parabolic interpolation for fine accuracy
  const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  if (a) T0 = T0 - b / (2 * a);

  return sampleRate / T0;
}

export default function SurMeter({ scaleSwaras }) {
  const { selectedRoot, getSwaraFreq } = usePitch();
  const [isActive, setIsActive] = useState(false);
  const [pitchData, setPitchData] = useState({
    freq: 0,
    swara: "—",
    cents: 0,
    status: "Waiting for vocal input...",
    inTune: false
  });
  const [micError, setMicError] = useState(null);

  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const rafIdRef = useRef(null);
  const pitchHistoryRef = useRef([]);
  const canvasRef = useRef(null);

  const startTuner = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioCtx();
      audioCtxRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsActive(true);
      evaluatePitch();
    } catch (err) {
      console.error("SurMeter mic error:", err);
      setMicError("Microphone access is needed for real-time pitch feedback.");
      setIsActive(false);
    }
  };

  const stopTuner = () => {
    setIsActive(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setPitchData({
      freq: 0,
      swara: "—",
      cents: 0,
      status: "Tuner paused",
      inTune: false
    });
  };

  const evaluatePitch = () => {
    if (!analyserRef.current || !audioCtxRef.current) return;

    const buffer = new Float32Array(analyserRef.current.fftSize);
    analyserRef.current.getFloatTimeDomainData(buffer);

    const detectedFreq = autoCorrelate(buffer, audioCtxRef.current.sampleRate);

    // Realistic human vocal fundamental range (70Hz - 900Hz)
    if (detectedFreq > 70 && detectedFreq < 950) {
      // Find closest swara from current scale
      let closestSwara = null;
      let minDiffCents = Infinity;

      const swarasList = scaleSwaras || [
        { name: "‘Ni" }, { name: "Sa" }, { name: "Re" }, { name: "Ga" },
        { name: "Ḿ" }, { name: "Ma" }, { name: "Pa" }, { name: "Dha" },
        { name: "Ni" }, { name: "Ṡ" }
      ];

      swarasList.forEach(swara => {
        const targetFreq = getSwaraFreq(swara.name);
        const cents = 1200 * Math.log2(detectedFreq / targetFreq);
        if (Math.abs(cents) < Math.abs(minDiffCents)) {
          minDiffCents = cents;
          closestSwara = swara.name;
        }
      });

      const inTune = Math.abs(minDiffCents) <= 15;
      let statusText = "In Sur 🎯";
      if (minDiffCents > 15) statusText = `Chadhi / Sharp (+${Math.round(minDiffCents)}¢)`;
      else if (minDiffCents < -15) statusText = `Utari / Flat (${Math.round(minDiffCents)}¢)`;

      setPitchData({
        freq: Math.round(detectedFreq),
        swara: closestSwara || "—",
        cents: Math.max(-50, Math.min(50, Math.round(minDiffCents))),
        status: statusText,
        inTune
      });

      // Update pitch graph
      pitchHistoryRef.current.push(minDiffCents);
      if (pitchHistoryRef.current.length > 50) pitchHistoryRef.current.shift();
      drawGraph();
    }

    rafIdRef.current = requestAnimationFrame(evaluatePitch);
  };

  const drawGraph = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Draw center zero line (Perfect Sur)
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    // Draw ±15 cents tolerance corridor
    ctx.fillStyle = 'rgba(52, 211, 153, 0.08)';
    const corridorTop = height / 2 - (15 / 50) * (height / 2);
    const corridorHeight = (30 / 50) * (height / 2);
    ctx.fillRect(0, corridorTop, width, corridorHeight);

    // Draw pitch stability trail
    const history = pitchHistoryRef.current;
    if (history.length < 2) return;

    ctx.strokeStyle = '#E5C468';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    history.forEach((cents, i) => {
      const x = (i / 50) * width;
      // map cents (-50 to +50) to canvas height
      const y = height / 2 - (cents / 50) * (height / 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  };

  useEffect(() => {
    return () => {
      stopTuner();
    };
  }, []);

  return (
    <section className="p-6 sm:p-7 rounded-3xl bg-navy-900/70 border border-white/[0.08] shadow-card-subtle">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Vocal Pitch Tuner & Sur Meter</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50">
            Real-Time Riyaz Pitch Feedback
          </h3>
          <p className="text-xs text-ivory-300/80 mt-0.5">
            Sing into your microphone to verify whether your voice is landing squarely on pitch. (Root: <strong className="text-gold-300">{selectedRoot.label}</strong>)
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={isActive ? stopTuner : startTuner}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center gap-2 ${
            isActive
              ? 'bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse'
              : 'bg-gold-500 text-navy-950 hover:brightness-110 shadow-gold-glow'
          }`}
        >
          <Mic className="w-3.5 h-3.5" />
          <span>{isActive ? 'Stop Sur Meter' : 'Activate Live Tuner'}</span>
        </button>
      </div>

      {micError && (
        <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 flex-shrink-0" />
          <span>{micError}</span>
        </div>
      )}

      {/* Main Meter Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        
        {/* Left: Swara & Frequency Readout */}
        <div className="p-5 rounded-2xl bg-navy-950/90 border border-white/[0.08] text-center flex flex-col items-center justify-center min-h-[140px]">
          <span className="text-[10px] uppercase tracking-widest text-ivory-400/60 font-semibold mb-1">
            Detected Swara
          </span>
          <div className={`text-4xl sm:text-5xl font-serif font-bold transition-all ${
            pitchData.inTune ? 'text-emerald-400 scale-110' : 'text-gold-300'
          }`}>
            {pitchData.swara}
          </div>
          <div className="text-xs font-mono text-ivory-400/80 mt-1">
            {pitchData.freq > 0 ? `${pitchData.freq} Hz` : 'Silent'}
          </div>
        </div>

        {/* Center: Gauge Dial (-50 to +50 cents) */}
        <div className="p-5 rounded-2xl bg-navy-950/90 border border-white/[0.08] flex flex-col items-center justify-center min-h-[140px] space-y-3">
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-ivory-400/70">
            <span>-50¢ (Utari)</span>
            <span className="text-gold-400 font-bold">0¢ (Sur)</span>
            <span>+50¢ (Chadhi)</span>
          </div>

          {/* Meter Track */}
          <div className="relative w-full h-3 bg-navy-900 rounded-full overflow-hidden border border-white/[0.06]">
            {/* Center target corridor */}
            <div className="absolute left-[35%] right-[35%] top-0 bottom-0 bg-emerald-500/20" />
            {/* Needle */}
            <div
              className={`absolute top-0 bottom-0 w-2.5 rounded-full transition-all duration-100 ${
                pitchData.inTune ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-gold-400'
              }`}
              style={{ left: `calc(50% + ${pitchData.cents}% - 5px)` }}
            />
          </div>

          <div className={`text-xs font-medium tracking-wide flex items-center gap-1.5 ${
            pitchData.inTune ? 'text-emerald-400' : 'text-gold-300'
          }`}>
            {pitchData.inTune && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{pitchData.status}</span>
          </div>
        </div>

        {/* Right: Pitch Stability Graph Canvas */}
        <div className="p-4 rounded-2xl bg-navy-950/90 border border-white/[0.08] flex flex-col items-center justify-center min-h-[140px]">
          <span className="text-[10px] uppercase tracking-widest text-ivory-400/60 font-semibold mb-2 self-start">
            Stability Wave (Steady Breath)
          </span>
          <canvas
            ref={canvasRef}
            width={240}
            height={80}
            className="w-full h-20 bg-navy-900/60 rounded-xl border border-white/[0.04]"
          />
        </div>

      </div>
    </section>
  );
}
