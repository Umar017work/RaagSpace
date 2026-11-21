import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, Download, Trash2, AlertCircle, RefreshCw, Volume2 } from 'lucide-react';

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioTotalDuration, setAudioTotalDuration] = useState(0);
  const [micError, setMicError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const audioPlayerRef = useRef(null);

  // Timer while recording
  useEffect(() => {
    if (isRecording) {
      setRecordingDuration(0);
      timerRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  const startRecording = async () => {
    setMicError(null);
    audioChunksRef.current = [];

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setMicError("Microphone recording is not supported in this browser.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);

        // Stop all audio tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start(250); // chunk every 250ms
      setIsRecording(true);
    } catch (err) {
      console.error("Mic access error:", err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setMicError("Microphone access was denied. Please allow microphone permissions in your browser bar.");
      } else {
        setMicError(`Unable to access microphone: ${err.message || 'Check microphone connection.'}`);
      }
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleDownload = () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    a.download = `Raag_Yaman_Riyaz_${timestamp}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDiscard = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setIsPlayingAudio(false);
    setAudioCurrentTime(0);
    setAudioTotalDuration(0);
    setRecordingDuration(0);
  };

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-navy-900/60 border border-white/[0.08] shadow-card-subtle space-y-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-1">
            <Mic className="w-3.5 h-3.5" />
            <span>Vocal Riyaz Recorder</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50">
            Record & Review Your Singing
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 font-light">
            Record your voice alongside the Tanpura drone, replay to evaluate pitch accuracy, and download your riyaz take.
          </p>
        </div>
      </div>

      {/* Permission or Hardware Error Alert */}
      {micError && (
        <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/30 text-xs text-red-200 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-red-300">Microphone Notice: </span>
            <span>{micError}</span>
          </div>
        </div>
      )}

      {/* Main Recorder Controls Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-navy-950/80 border border-gold-500/25 text-center flex flex-col items-center justify-center">
        
        {/* State 1: Ready to Record or Currently Recording */}
        {!audioUrl ? (
          <div className="flex flex-col items-center gap-5">
            {/* Visual Pulse Orb */}
            <div className={`relative flex items-center justify-center w-24 h-24 rounded-full transition-all ${
              isRecording 
                ? 'bg-red-500/20 ring-4 ring-red-500/40 animate-pulse' 
                : 'bg-navy-900 border border-gold-500/40 shadow-gold-glow'
            }`}>
              {isRecording ? (
                <span className="w-8 h-8 rounded-md bg-red-500" />
              ) : (
                <Mic className="w-10 h-10 text-gold-400" />
              )}
            </div>

            {/* Live Duration Timer */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-ivory-50 tracking-wider">
                {formatTimer(recordingDuration)}
              </div>
              <div className="text-xs text-ivory-400/70 mt-1 uppercase tracking-widest font-medium">
                {isRecording ? 'Recording in progress... Sing your bandish' : 'Microphone Ready'}
              </div>
            </div>

            {/* Primary Action Button */}
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:brightness-110 shadow-gold-glow transition-all transform hover:scale-105"
              >
                <Mic className="w-4 h-4 text-navy-950" />
                <span>Start Practice Recording</span>
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide bg-red-600 hover:bg-red-500 text-white shadow-lg transition-all animate-pulse"
              >
                <Square className="w-4 h-4 fill-white" />
                <span>Stop Recording</span>
              </button>
            )}
          </div>
        ) : (
          /* State 2: Review, Replay & Download Take */
          <div className="w-full max-w-lg space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-ivory-100">
                  Take Recorded Successfully
                </span>
              </div>
              <span className="text-xs font-mono text-gold-300">
                Duration: {formatTimer(audioTotalDuration || recordingDuration)}
              </span>
            </div>

            {/* Native HTML5 Audio Player */}
            <audio
              ref={audioPlayerRef}
              src={audioUrl}
              onTimeUpdate={() => {
                if (audioPlayerRef.current) {
                  setAudioCurrentTime(audioPlayerRef.current.currentTime);
                }
              }}
              onLoadedMetadata={() => {
                if (audioPlayerRef.current) {
                  setAudioTotalDuration(audioPlayerRef.current.duration);
                }
              }}
              onEnded={() => setIsPlayingAudio(false)}
              onPlay={() => setIsPlayingAudio(true)}
              onPause={() => setIsPlayingAudio(false)}
              className="hidden"
            />

            {/* Custom Replay Controller */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-ivory-300/80">
                <span>{formatTimer(audioCurrentTime)}</span>
                <span>{formatTimer(audioTotalDuration || recordingDuration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={audioTotalDuration || 1}
                step="0.1"
                value={audioCurrentTime}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setAudioCurrentTime(val);
                  if (audioPlayerRef.current) {
                    audioPlayerRef.current.currentTime = val;
                  }
                }}
                className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
            </div>

            {/* Replay & Download Button Toolbar */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (!audioPlayerRef.current) return;
                  if (isPlayingAudio) {
                    audioPlayerRef.current.pause();
                  } else {
                    audioPlayerRef.current.play();
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-gold-500 text-navy-950 shadow-gold-glow hover:brightness-110 transition-all"
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause Replay</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    <span>Listen to Take</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-navy-900 hover:bg-navy-850 text-gold-300 border border-gold-500/40 hover:border-gold-300 transition-all shadow-sm"
                title="Download recording as audio file"
              >
                <Download className="w-3.5 h-3.5 text-gold-400" />
                <span>Download Audio</span>
              </button>

              <button
                onClick={handleDiscard}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-ivory-400/80 hover:text-red-300 border border-white/[0.08] hover:border-red-500/30 transition-all"
                title="Discard take and record again"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>New Take</span>
              </button>
            </div>

          </div>
        )}

      </div>

      <div className="text-[11px] text-ivory-400/60 text-center font-light">
        Audio stays local in your browser memory and is never uploaded to any remote server.
      </div>

    </section>
  );
}
