import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PraharClock from '../components/PraharClock';
import RaagGrid from '../components/RaagGrid';
import ThaatMatrix from '../components/ThaatMatrix';
import SwarGyaanGame from '../components/SwarGyaanGame';
import RiyazJournal from '../components/RiyazJournal';
import SingingPrinciples from '../components/SingingPrinciples';
import RaagDetailModal from '../components/RaagDetailModal';
import TanpuraCompanion from '../components/TanpuraCompanion';
import Footer from '../components/Footer';
import { RAAGS_DATA } from '../data/raags';

export default function HomePage() {
  const [selectedRaag, setSelectedRaag] = useState(null);

  const handleQuickSelectSample = () => {
    const yaman = RAAGS_DATA.find(r => r.id === 'yaman') || RAAGS_DATA[0];
    setSelectedRaag(yaman);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-ivory-100 flex flex-col relative selection:bg-gold-500/20 selection:text-gold-300">
      {/* Top Navbar */}
      <Navbar onOpenPractice={handleQuickSelectSample} />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        {/* Hero Section */}
        <Hero onQuickSelectSample={handleQuickSelectSample} />

        {/* 24-Hour Prahar Astronomical Clock */}
        <PraharClock />

        {/* The Core 'Choose a Raag' Section (10 Raags) */}
        <RaagGrid
          raags={RAAGS_DATA}
          onSelectRaag={(raag) => setSelectedRaag(raag)}
        />

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

      {/* Floating Tanpura Drone Companion */}
      <TanpuraCompanion />

      {/* Footer */}
      <Footer />
    </div>
  );
}
