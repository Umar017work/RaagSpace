import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Music, Compass, Sparkles, BookOpen, Volume2, ShieldCheck, Sun, Moon } from 'lucide-react';
import { YAMAN_METADATA } from '../data/yamanPracticeData';
import { usePitch } from '../context/PitchContext';
import InteractiveSwaraKeyboard from '../components/yaman/InteractiveSwaraKeyboard';
import PracticePlayer from '../components/yaman/PracticePlayer';
import VoiceRecorder from '../components/yaman/VoiceRecorder';
import Footer from '../components/Footer';

export default function YamanPracticePage() {
  const { selectedRoot, changeRoot, isTanpuraPlaying, toggleDrone, pitchRoots } = usePitch();

  return (
    <div className="min-h-screen bg-navy-950 text-ivory-100 flex flex-col selection:bg-gold-500/20 selection:text-gold-300">
      
      {/* Top Header / Breadcrumbs Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-navy-950/85 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Back to Home Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-ivory-300 hover:text-gold-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform text-gold-400" />
            <span>Back to RaagSpace Library</span>
          </Link>

          {/* Quick Pitch & Drone Control in Header */}
          <div className="flex items-center gap-3">
            {/* Tanpura Toggle Button */}
            <button
              onClick={toggleDrone}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                isTanpuraPlaying
                  ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-gold-glow animate-pulse'
                  : 'bg-navy-900 text-gold-300 border-gold-500/30 hover:border-gold-400'
              }`}
              title="Toggle acoustic Tanpura drone"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isTanpuraPlaying ? 'Tanpura Active' : 'Tanpura Drone'}</span>
            </button>

            {/* Root Selector */}
            <div className="flex items-center gap-1.5 text-xs text-ivory-300/80">
              <span className="text-[11px] text-ivory-400/60 uppercase hidden sm:inline">Root (Sa):</span>
              <select
                value={selectedRoot.name}
                onChange={(e) => changeRoot(e.target.value)}
                aria-label="Root note selector"
                className="bg-navy-900 border border-white/[0.1] text-gold-300 rounded-xl px-2.5 py-1.5 text-xs focus:outline-none focus:border-gold-500/50 cursor-pointer font-serif"
              >
                {pitchRoots.map(r => (
                  <option key={r.name} value={r.name} className="bg-navy-900 text-ivory-100">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Raag Yaman Overview Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-navy-900/50 border border-gold-500/30 p-6 sm:p-10 lg:p-12 shadow-card-subtle">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-gold-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-300 bg-gold-500/10 border border-gold-500/30">
                {YAMAN_METADATA.thaat} Thaat
              </span>
              <span className="text-white/20">•</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-ivory-200 bg-navy-950/80 border border-white/[0.08]">
                Jati: {YAMAN_METADATA.jati.split('(')[0]}
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-xs text-gold-400/90 font-medium">
                <Moon className="w-3.5 h-3.5" />
                <span>{YAMAN_METADATA.timeDisplay}</span>
              </span>
            </div>

            {/* Title & Devanagari */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-ivory-50 tracking-tight">
                {YAMAN_METADATA.name}
              </h1>
              <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-normal">
                {YAMAN_METADATA.hindiName}
              </span>
            </div>

            {/* Introduction Narrative */}
            <p className="max-w-4xl text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
              {YAMAN_METADATA.introduction}
            </p>

            {/* Core Musicological Grid (Aroha, Avroha, Pakad, Vadi/Samvadi) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
              
              {/* Aroha Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                  Aroha (Ascent)
                </div>
                <div className="text-lg font-serif text-ivory-50 tracking-wider font-bold">
                  {YAMAN_METADATA.aroha}
                </div>
                <div className="text-[11px] text-ivory-400/70 font-mono mt-0.5">
                  {YAMAN_METADATA.arohaSimple}
                </div>
              </div>

              {/* Avroha Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                  Avroha (Descent)
                </div>
                <div className="text-lg font-serif text-ivory-50 tracking-wider font-bold">
                  {YAMAN_METADATA.avroha}
                </div>
                <div className="text-[11px] text-ivory-400/70 font-mono mt-0.5">
                  {YAMAN_METADATA.avrohaSimple}
                </div>
              </div>

              {/* Pakad Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                  Pakad (Catch Phrase)
                </div>
                <div className="text-base font-serif text-gold-300 font-bold leading-tight">
                  {YAMAN_METADATA.pakad}
                </div>
                <div className="text-[10px] text-ivory-400/60 mt-1 line-clamp-1">
                  {YAMAN_METADATA.pakadExplanation}
                </div>
              </div>

              {/* Vadi & Samvadi */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                    Vadi & Samvadi
                  </div>
                  <div className="text-sm font-serif text-ivory-100">
                    <strong className="text-gold-300">Vadi:</strong> {YAMAN_METADATA.vadi.split('(')[0]} (Ga)
                  </div>
                  <div className="text-sm font-serif text-ivory-100">
                    <strong className="text-ivory-200">Samvadi:</strong> {YAMAN_METADATA.samvadi.split('(')[0]} (Ni)
                  </div>
                </div>
                <div className="text-[10px] text-ivory-400/60 pt-2 border-t border-white/[0.04]">
                  Rasa: {YAMAN_METADATA.rasa.split('(')[0]}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 1: Interactive Swara Scale Keypad */}
        <InteractiveSwaraKeyboard />

        {/* Section 2: Audio Practice Player with Synchronized Notation */}
        <PracticePlayer />

        {/* Section 3: Browser Voice Recorder */}
        <VoiceRecorder />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
