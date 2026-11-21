import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, Sparkles, Music, FastForward, Sliders, Layers, Award, Activity } from 'lucide-react';
import { usePitch } from '../context/PitchContext';
import { ALANKARS_20, RIYAZ_THAATS } from '../data/alankarsData';
import AlankarPracticePlayer from '../components/alankar/AlankarPracticePlayer';
import PyramidAlankarModule from '../components/alankar/PyramidAlankarModule';
import KomalSwarGym from '../components/alankar/KomalSwarGym';
import SurMeter from '../components/studio/SurMeter';
import TablaCompanion from '../components/studio/TablaCompanion';
import VoiceRecorder from '../components/yaman/VoiceRecorder';
import MasterclassVideoModal from '../components/studio/MasterclassVideoModal';
import Footer from '../components/Footer';

export default function AlankarStudioPage() {
  const { selectedRoot, changeRoot, isTanpuraPlaying, toggleDrone, pitchRoots } = usePitch();
  
  // Active selected alankar (default Alankar 1)
  const [selectedAlankarId, setSelectedAlankarId] = useState(ALANKARS_20[0].id);
  // Active selected thaat (default Bilawal)
  const [selectedThaat, setSelectedThaat] = useState('bilawal');
  // Category filter
  const [activeCategory, setActiveCategory] = useState('all');
  // Video modal state
  const [videoModalData, setVideoModalData] = useState(null);

  const selectedAlankar = ALANKARS_20.find(a => a.id === selectedAlankarId) || ALANKARS_20[0];

  // Filter alankars
  const filteredAlankars = ALANKARS_20.filter(a => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'basic') return a.category.includes('Basic');
    if (activeCategory === 'madhyam') return a.category.includes('Madhyam');
    if (activeCategory === 'vakra') return a.category.includes('Vakra');
    if (activeCategory === 'velocity') return a.category.includes('Velocity');
    return true;
  });

  const handleOpenVideo = (videoId, title, instructor) => {
    setVideoModalData({ videoId, title, instructor });
  };

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
            <span>Back to RaagSpace</span>
          </Link>

          {/* Quick Pitch & Drone Control */}
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
                aria-label="Root pitch note selector"
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
        
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-navy-900/50 border border-gold-500/30 p-6 sm:p-10 lg:p-12 shadow-card-subtle">
          <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-gold-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-300 bg-gold-500/10 border border-gold-500/30">
                Classical Riyaz Academy
              </span>
              <span className="text-white/20">•</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-ivory-200 bg-navy-950/80 border border-white/[0.08]">
                20 Canonical Alankars • 6 Thaats
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs text-gold-400/90 font-medium">
                Vocal Culture & Pitch Calibration
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5">
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-ivory-50 tracking-tight">
                Alankar & Riyaz Studio
              </h1>
              <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-normal">
                अलंकार साधना
              </span>
            </div>

            <p className="max-w-4xl text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
              Master the foundational geometric patterns (Paltas) of Hindustani music. Practice all 20 canonical alankars with real-time tone generation calibrated to your vocal Sa, transpose across the 6 core Thaats, refine pitch accuracy with the Sur Meter, and follow guided video masterclasses from legendary gurus.
            </p>
          </div>
        </section>

        {/* 20 Alankars Grid Selector */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50">
                Choose an Alankar to Practice
              </h3>
              <p className="text-xs sm:text-sm text-ivory-400/80">
                Showing {filteredAlankars.length} of 20 canonical vocal exercises
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-navy-900 border border-white/[0.08] text-xs">
              {[
                { id: 'all', label: 'All 20' },
                { id: 'basic', label: 'Basic (1–5)' },
                { id: 'madhyam', label: 'Chains (6–10)' },
                { id: 'vakra', label: 'Vakra (11–15)' },
                { id: 'velocity', label: 'Velocity (16–20)' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                      : 'text-ivory-300 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Cards Carousel/Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredAlankars.map(alankar => {
              const isSelected = selectedAlankarId === alankar.id;
              return (
                <button
                  key={alankar.id}
                  onClick={() => setSelectedAlankarId(alankar.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between min-h-[96px] ${
                    isSelected
                      ? 'bg-gold-500/15 border-gold-400 shadow-gold-glow scale-[1.02]'
                      : 'bg-navy-900/60 border-white/[0.06] hover:border-gold-500/30 hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-950 text-gold-400'
                    }`}>
                      #{alankar.number}
                    </span>
                    <span className="text-[10px] text-ivory-400/60 font-mono">
                      {alankar.beats} Beats
                    </span>
                  </div>

                  <div className="my-1">
                    <div className={`font-serif font-bold text-sm line-clamp-1 ${
                      isSelected ? 'text-gold-200' : 'text-ivory-100'
                    }`}>
                      {alankar.name}
                    </div>
                    <div className="text-[11px] font-serif text-gold-400/80 truncate">
                      {alankar.hindiName}
                    </div>
                  </div>

                  <div className="text-[10px] text-ivory-400/60 font-mono truncate">
                    {alankar.pattern}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Primary Interactive Alankar Player (with 6-Thaat Transposition) */}
        <AlankarPracticePlayer
          alankar={selectedAlankar}
          selectedThaat={selectedThaat}
          onSelectThaat={setSelectedThaat}
          onOpenVideo={handleOpenVideo}
        />

        {/* Section: Pyramid Alankar Module */}
        <PyramidAlankarModule
          onOpenVideo={handleOpenVideo}
        />

        {/* Section: Komal & Teevra Swar Precision Gym */}
        <KomalSwarGym
          onOpenVideo={handleOpenVideo}
        />

        {/* Section: Real-Time Vocal Pitch Detection (Sur Meter) */}
        <SurMeter />

        {/* Section: Electronic Tabla Accompaniment */}
        <TablaCompanion />

        {/* Section: Voice Practice Recorder */}
        <VoiceRecorder />

      </main>

      {/* Embedded Video Masterclass Modal */}
      {videoModalData && (
        <MasterclassVideoModal
          videoData={videoModalData}
          onClose={() => setVideoModalData(null)}
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}
