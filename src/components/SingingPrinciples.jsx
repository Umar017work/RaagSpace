import React from 'react';
import { Mic2 } from 'lucide-react';

export default function SingingPrinciples() {
  const principles = [
    {
      step: "01",
      title: "Establish the Adhara Shadja",
      subtitle: "The Sacred Drone (Sa)",
      description: "Before ascending into a raag, internalize your root note with the tanpura. All emotional intervals (Shrutis) gain life only in direct relation to your steady Sa."
    },
    {
      step: "02",
      title: "Center on Vadi & Samvadi",
      subtitle: "The Dominant Swaras",
      description: "A raag is not just a scale; it is an organic hierarchy. Spend restful pauses on the Vadi (primary note) and Samvadi (consonant note) to awaken its signature identity."
    },
    {
      step: "03",
      title: "Align with the Prahar",
      subtitle: "Biorhythmic Harmony",
      description: "Morning raags awaken quiet stillness, afternoon raags mirror tender warmth, and midnight raags embrace deep majesty. Singing in harmony with time deepens resonance."
    }
  ];

  return (
    <section id="principles" className="py-16 sm:py-24 border-t border-white/[0.06] bg-navy-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase mb-2 font-semibold px-3 py-1 rounded-full bg-gold-500/[0.05] border border-gold-500/20">
            <Mic2 className="w-3.5 h-3.5" />
            <span>Foundations of Riyaz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory-50 font-bold mb-3">
            How to Sing a Raag
          </h2>
          <p className="text-ivory-300/70 text-sm font-light">
            Essential classical principles to guide your daily vocal meditation.
          </p>
        </div>

        {/* 3 Columns Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl bg-navy-900/50 border border-white/[0.08] hover:border-gold-500/35 transition-all group hover:shadow-gold-glow"
            >
              <span className="font-serif text-3xl sm:text-4xl text-gold-500/30 group-hover:text-gold-400/60 transition-colors font-bold block mb-3">
                {p.step}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-ivory-100 mb-1 group-hover:text-gold-200 transition-colors">
                {p.title}
              </h3>
              <div className="text-xs uppercase tracking-wider text-gold-400/80 mb-3 font-medium">
                {p.subtitle}
              </div>
              <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
