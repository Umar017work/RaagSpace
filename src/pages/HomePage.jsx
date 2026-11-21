import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Music, Layers, Activity, FastForward } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PraharClock from '../components/PraharClock';
import RaagGrid from '../components/RaagGrid';
import ThaatMatrix from '../components/ThaatMatrix';
import SwarGyaanGame from '../components/SwarGyaanGame';
import RiyazJournal from '../components/RiyazJournal';
import SingingPrinciples from '../components/SingingPrinciples';
import RaagDetailModal from '../components/RaagDetailModal';
import QuickSearchModal from '../components/QuickSearchModal';
import TanpuraCompanion from '../components/TanpuraCompanion';
import Footer from '../components/Footer';
import { RAAGS_DATA } from '../data/raags';

export default function HomePage() {
  const [selectedRaag, setSelectedRaag] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleQuickSelectSample = () => {
    const yaman = RAAGS_DATA.find(r => r.id === 'yaman') || RAAGS_DATA[0];
    setSelectedRaag(yaman);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-ivory-100 flex flex-col relative selection:bg-gold-500/20 selection:text-gold-300">
      
      {/* Top Navbar */}
      <Navbar
        onOpenPractice={handleQuickSelectSample}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        {/* Hero Section */}
        <Hero onQuickSelectSample={handleQuickSelectSample} />

        {/* 24-Hour Prahar Astronomical Clock */}
        <PraharClock />

        {/* The Core 'Choose a Raag' Section (11 Raags) */}
        <RaagGrid
          raags={RAAGS_DATA}
          onSelectRaag={(raag) => setSelectedRaag(raag)}
        />

        {/* Feature Showcase: Dedicated Alankar & Riyaz Academy */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-950 border border-gold-500/40 p-8 sm:p-12 shadow-2xl shadow-navy-950 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/[0.06] blur-3xl rounded-full pointer-events-none" />

            <div className="space-y-4 max-w-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 bg-gold-500/10 border border-gold-500/30">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Foundational Riyaz Curriculum</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ivory-50 tracking-tight">
                Alankar & Palta Studio
              </h2>

              <p className="text-sm sm:text-base text-ivory-200/90 font-light leading-relaxed">
                Practice 20 canonical alankars systematically taught by legendary gurus. Features real-time 6-Thaat transposition (Bilawal, Kalyan, Khamaj, Kafi, Asavari, Bhairav), progressive Pyramid drills, and micro-pitch Komal Swar training.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-ivory-300/80">
                <span className="flex items-center gap-1.5 font-medium text-gold-300">
                  <FastForward className="w-4 h-4 text-gold-400" />
                  <span>45–180 BPM Tempo</span>
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 font-medium text-gold-300">
                  <Activity className="w-4 h-4 text-gold-400" />
                  <span>Sur Meter Live Feedback</span>
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 font-medium text-gold-300">
                  <Layers className="w-4 h-4 text-gold-400" />
                  <span>Pyramid Voice Culture</span>
                </span>
              </div>
            </div>

            <div className="relative flex-shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/riyaz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 hover:brightness-110 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Enter Alankar Studio</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </Link>
              
              <Link
                to="/raag/bhupali"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-xs tracking-wide text-ivory-200 border border-gold-500/30 hover:border-gold-400/60 bg-navy-950/80 hover:bg-navy-900 transition-all text-center"
              >
                <span>Practice Raag Bhupali →</span>
              </Link>
            </div>

          </div>
        </section>

        {/* The 10 Thaats & Scale Comparator */}
        <ThaatMatrix />

        {/* Swar Gyaan Ear Training Game */}
        <SwarGyaanGame />

        {/* Local Riyaz Journal & Streak Tracker */}
        <RiyazJournal />

        {/* Foundational Principles for Singing */}
        <SingingPrinciples />
      </main>

      {/* Modal for Deep Exploration & Swara Practice */}
      {selectedRaag && (
        <RaagDetailModal
          raag={selectedRaag}
          onClose={() => setSelectedRaag(null)}
        />
      )}

      {/* Quick Command Palette / Search Modal */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectRaag={(raag) => setSelectedRaag(raag)}
      />

      {/* Floating Tanpura Drone Companion */}
      <TanpuraCompanion />

      {/* Footer */}
      <Footer />
    </div>
  );
}
