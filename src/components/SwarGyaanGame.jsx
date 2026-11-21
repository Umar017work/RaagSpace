import React, { useState } from 'react';
import { Volume2, Trophy, RotateCcw, CheckCircle, XCircle, Sparkles, HelpCircle } from 'lucide-react';
import { usePitch } from '../context/PitchContext';
import { tonePlayer } from '../utils/audioSynth';
import { RAAGS_DATA } from '../data/raags';

const SWARA_CHOICES = ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"];

export default function SwarGyaanGame() {
  const { getSwaraFreq, selectedRoot } = usePitch();
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [targetSwara, setTargetSwara] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);

  const startNewRound = () => {
    // Pick random swara from choices (excluding Sa to make it an active interval)
    const candidates = ["Re", "Ga", "Ma", "Pa", "Dha", "Ni"];
    const randomChoice = candidates[Math.floor(Math.random() * candidates.length)];
    setTargetSwara(randomChoice);
    setFeedback(null);
    setHasStarted(true);

    // Play Sa first as anchor drone, then the mystery swara
    const saFreq = getSwaraFreq("Sa");
    const targetFreq = getSwaraFreq(randomChoice);

    tonePlayer.playTone(saFreq, 0.7);
    setTimeout(() => {
      tonePlayer.playTone(targetFreq, 0.95);
    }, 750);
  };

  const playMysterySoundAgain = () => {
    if (!targetSwara) return;
    const saFreq = getSwaraFreq("Sa");
    const targetFreq = getSwaraFreq(targetSwara);
    tonePlayer.playTone(saFreq, 0.7);
    setTimeout(() => {
      tonePlayer.playTone(targetFreq, 0.95);
    }, 750);
  };

  const handleGuess = (swara) => {
    if (!targetSwara || feedback) return;

    if (swara === targetSwara) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      setFeedback({
        isCorrect: true,
        message: `Shabash! 🎯 That was indeed ${targetSwara}.`
      });
      // Play rewarding chord/tone
      setTimeout(() => {
        tonePlayer.playTone(getSwaraFreq("Sa"), 0.5);
        tonePlayer.playTone(getSwaraFreq(swara), 0.8);
      }, 200);
    } else {
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: `Not quite! You selected ${swara}, but the note was ${targetSwara}.`
      });
      // Play correct note so user learns the interval
      setTimeout(() => {
        tonePlayer.playTone(getSwaraFreq(targetSwara), 0.9);
      }, 300);
    }
  };

  return (
    <section id="swar-gyaan" className="py-16 sm:py-20 border-t border-white/[0.06] bg-navy-950/90 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-gold-500/[0.06] border border-gold-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Ear Training & Musical Intuition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory-50 font-bold">
            Swar Gyaan: Ear Training Challenge
          </h2>
          <p className="text-ivory-300/80 text-xs sm:text-sm font-light">
            Listen to the anchor drone on Sa, identify the mystery melodic interval, and sharpen your musical hearing.
          </p>
        </div>

        {/* Score & Streak Bar */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-navy-900/80 border border-white/[0.08] text-xs">
          <div className="flex items-center gap-2">
            <span className="text-ivory-400">Score:</span>
            <span className="text-gold-300 font-bold font-mono text-sm">{score} pts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-ivory-400">Current Streak:</span>
            <span className="text-gold-400 font-bold font-mono text-sm">🔥 {streak} in a row</span>
          </div>
          <div className="text-ivory-400 font-mono hidden sm:inline">
            Pitch: {selectedRoot.label}
          </div>
        </div>

        {/* Game Arena */}
        <div className="p-6 sm:p-10 rounded-3xl bg-navy-900/60 border border-gold-500/30 text-center space-y-8 shadow-card-subtle">
          
          {!hasStarted ? (
            <div className="space-y-4 py-6">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto text-gold-400 shadow-gold-glow">
                <Volume2 className="w-8 h-8" />
              </div>
              <p className="text-sm text-ivory-200 max-w-md mx-auto font-light">
                Ready to calibrate your ears? The app will sound your root Sa, followed by a mystery swara note.
              </p>
              <button
                onClick={startNewRound}
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:brightness-110 shadow-gold-glow transition-all"
              >
                Begin Ear Training
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Mystery Tone Button */}
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={playMysterySoundAgain}
                  className="w-20 h-20 rounded-full bg-navy-950 border-2 border-gold-400/80 flex items-center justify-center hover:bg-gold-500/10 shadow-gold-glow transition-all group"
                  title="Replay Mystery Tone"
                >
                  <Volume2 className="w-8 h-8 text-gold-300 group-hover:scale-110 transition-transform" />
                </button>
                <span className="text-xs text-ivory-400 font-light">
                  Tap to replay mystery swara (Sa + Mystery Note)
                </span>
              </div>

              {/* Swara Choice Buttons */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5 max-w-xl mx-auto">
                {SWARA_CHOICES.map(swara => (
                  <button
                    key={swara}
                    disabled={Boolean(feedback)}
                    onClick={() => handleGuess(swara)}
                    className={`py-3.5 px-2 rounded-2xl font-serif text-xl sm:text-2xl font-bold border transition-all ${
                      feedback
                        ? swara === targetSwara
                          ? 'bg-emerald-500 text-navy-950 border-emerald-400 shadow-lg scale-105'
                          : 'bg-navy-950/60 text-ivory-400/40 border-white/[0.04]'
                        : 'bg-navy-950 text-ivory-100 border-white/[0.08] hover:border-gold-500/50 hover:bg-navy-850 hover:scale-105'
                    }`}
                  >
                    {swara}
                  </button>
                ))}
              </div>

              {/* Feedback Message & Next Button */}
              {feedback && (
                <div className="p-4 rounded-2xl bg-navy-950/90 border border-white/[0.08] max-w-md mx-auto space-y-3 animate-fadeIn">
                  <div className={`text-sm font-semibold flex items-center justify-center gap-1.5 ${
                    feedback.isCorrect ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {feedback.isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span>{feedback.message}</span>
                  </div>
                  <button
                    onClick={startNewRound}
                    className="px-6 py-2 rounded-full text-xs font-semibold bg-gold-500 text-navy-950 hover:brightness-110 shadow-gold-glow transition-all"
                  >
                    Next Question →
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
