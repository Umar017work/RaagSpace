import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Moon, Volume2, Sparkles, Music, Youtube } from 'lucide-react';
import { ALL_RAAGS_PRACTICE } from '../data/allRaagsPracticeData';
import { usePitch } from '../context/PitchContext';
import InteractiveSwaraKeyboard from '../components/yaman/InteractiveSwaraKeyboard';
import PracticePlayer from '../components/yaman/PracticePlayer';
import SurMeter from '../components/studio/SurMeter';
import TablaCompanion from '../components/studio/TablaCompanion';
import VoiceRecorder from '../components/yaman/VoiceRecorder';
import MasterclassVideoModal from '../components/studio/MasterclassVideoModal';
import Footer from '../components/Footer';

export default function RaagPracticeStudioPage() {
  const { id } = useParams();
  const raagId = (id || "yaman").toLowerCase();
  const raagData = ALL_RAAGS_PRACTICE[raagId] || ALL_RAAGS_PRACTICE["yaman"];

  const { selectedRoot, changeRoot, isTanpuraPlaying, toggleDrone, pitchRoots } = usePitch();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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

      {/* Main Studio Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Raag Overview Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-navy-900/50 border border-gold-500/30 p-6 sm:p-10 lg:p-12 shadow-card-subtle">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-gold-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-300 bg-gold-500/10 border border-gold-500/30">
                {raagData.thaat} Thaat
              </span>
              <span className="text-white/20">•</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-ivory-200 bg-navy-950/80 border border-white/[0.08]">
                Jati: {raagData.jati}
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-xs text-gold-400/90 font-medium">
                <Moon className="w-3.5 h-3.5" />
                <span>{raagData.timeDisplay}</span>
              </span>

              {/* Masterclass Video Trigger if Available */}
              {raagData.youtubeVideoId && (
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="sm:ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-rose-300 bg-rose-500/15 border border-rose-500/35 hover:bg-rose-500/25 transition-all shadow-sm"
                >
                  <Youtube className="w-3.5 h-3.5 text-rose-400" />
                  <span>Watch Guru Masterclass</span>
                </button>
              )}
            </div>

            {/* Title & Devanagari */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-ivory-50 tracking-tight">
                {raagData.name}
              </h1>
              <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-normal">
                {raagData.hindiName}
              </span>
            </div>

            {/* Introduction Narrative */}
            <p className="max-w-4xl text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
              {raagData.introduction}
            </p>

            {/* Core Musicological Grid (Aroha, Avroha, Pakad, Vadi/Samvadi) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
              
              {/* Aroha Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                  Aroha (Ascent)
                </div>
                <div className="text-lg font-serif text-ivory-50 tracking-wider font-bold">
                  {raagData.aroha}
                </div>
                <div className="text-[11px] text-ivory-400/70 font-mono mt-0.5">
                  {raagData.arohaSimple}
                </div>
              </div>

              {/* Avroha Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                  Avroha (Descent)
                </div>
                <div className="text-lg font-serif text-ivory-50 tracking-wider font-bold">
                  {raagData.avroha}
                </div>
                <div className="text-[11px] text-ivory-400/70 font-mono mt-0.5">
                  {raagData.avrohaSimple}
                </div>
              </div>

              {/* Pakad Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                  Pakad (Catch Phrase)
                </div>
                <div className="text-base font-serif text-gold-300 font-bold leading-tight">
                  {raagData.pakad}
                </div>
                <div className="text-[10px] text-ivory-400/60 mt-1">
                  Rasa: {raagData.rasa}
                </div>
              </div>

              {/* Vadi & Samvadi */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold mb-1">
                    Vadi & Samvadi
                  </div>
                  <div className="text-sm font-serif text-ivory-100">
                    <strong className="text-gold-300">Vadi:</strong> {raagData.vadi}
                  </div>
                  <div className="text-sm font-serif text-ivory-100">
                    <strong className="text-ivory-200">Samvadi:</strong> {raagData.samvadi}
                  </div>
                </div>
                <div className="text-[10px] text-ivory-400/60 pt-2 border-t border-white/[0.04]">
                  Practice Studio • Calibrated to {selectedRoot.label}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 1: Interactive Swara Scale Keypad */}
        <InteractiveSwaraKeyboard
          swaras={raagData.swaras}
          raagName={raagData.name}
        />

        {/* Section 2: Audio Practice Player with Synchronized Notation */}
        <PracticePlayer
          practiceModules={raagData.modules}
        />

        {/* Section 3: Real-Time Pitch Tuner / Sur Meter */}
        <SurMeter
          scaleSwaras={raagData.swaras}
        />

        {/* Section 4: Electronic Tabla & Taal Accompaniment */}
        <TablaCompanion />

        {/* Section 5: Browser Voice Recorder */}
        <VoiceRecorder />

      </main>

      {/* Embedded Video Masterclass Modal */}
      {videoModalOpen && raagData.youtubeVideoId && (
        <MasterclassVideoModal
          videoData={{
            videoId: raagData.youtubeVideoId,
            title: raagData.youtubeTitle || `${raagData.name} Masterclass`,
            instructor: "Classical Vocal Masterclass"
          }}
          onClose={() => setVideoModalOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}
