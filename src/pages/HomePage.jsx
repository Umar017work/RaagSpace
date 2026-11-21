import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RaagGrid from '../components/RaagGrid';
import SingingPrinciples from '../components/SingingPrinciples';
import RaagDetailModal from '../components/RaagDetailModal';
import TanpuraCompanion from '../components/TanpuraCompanion';
import Footer from '../components/Footer';
import { RAAGS_DATA } from '../data/raags';

export default function HomePage() {
  const [selectedRaag, setSelectedRaag] = useState(null);

  const handleQuickSelectSample = () => {
    // Quick select the first raag (Raag Yaman)
    const yaman = RAAGS_DATA.find(r => r.id === 'yaman') || RAAGS_DATA[0];
    setSelectedRaag(yaman);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-ivory-100 flex flex-col relative selection:bg-gold-500/20 selection:text-gold-300">
      {/* Top Navbar */}
      <Navbar onOpenPractice={handleQuickSelectSample} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onQuickSelectSample={handleQuickSelectSample} />

        {/* The Core 'Choose a Raag' Section */}
        <RaagGrid
          raags={RAAGS_DATA}
          onSelectRaag={(raag) => setSelectedRaag(raag)}
        />

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
