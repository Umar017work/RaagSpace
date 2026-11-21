import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Music, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy-950 py-16 text-ivory-300/70 text-xs relative overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border border-gold-500/40 bg-navy-900 flex items-center justify-center">
                <span className="text-gold-400 font-serif text-sm font-semibold">र</span>
              </div>
              <span className="font-serif text-xl font-bold text-ivory-100 tracking-wider">
                RaagSpace
              </span>
              <span className="text-[10px] text-gold-400/90 font-mono tracking-widest uppercase ml-1">
                स्वर ब्रह्म
              </span>
            </div>

            <p className="text-ivory-400/70 text-xs leading-relaxed font-light">
              A masterclass digital sanctuary dedicated to the study, preservation, and singing practice of canonical Hindustani classical ragas and alankars.
            </p>

            <div className="pt-2 text-[11px] font-serif italic text-gold-300/80">
              “Nada Brahma — Sound is Divine Consciousness.”
            </div>
          </div>

          {/* Col 2: Practice Studios */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Practice Studios
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/riyaz" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>20-Alankar Riyaz Studio</span>
                </Link>
              </li>
              <li>
                <Link to="/raag/yaman" className="hover:text-gold-300 transition-colors">
                  Raag Yaman Studio (Eri Aali Piya)
                </Link>
              </li>
              <li>
                <Link to="/raag/bhupali" className="hover:text-gold-300 transition-colors">
                  Raag Bhupali Studio (Pratham Sur)
                </Link>
              </li>
              <li>
                <Link to="/raag/bhairav" className="hover:text-gold-300 transition-colors">
                  Raag Bhairav (Dawn Awakening)
                </Link>
              </li>
              <li>
                <Link to="/raag/bageshri" className="hover:text-gold-300 transition-colors">
                  Raag Bageshri (Midnight Viraha)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Classical Foundations */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Theory & Systems
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#prahar-cycle" className="hover:text-gold-300 transition-colors">
                  24-Hour Astronomical Prahar Clock
                </a>
              </li>
              <li>
                <a href="#thaat-matrix" className="hover:text-gold-300 transition-colors">
                  10 Parent Thaats (Bhatkhande System)
                </a>
              </li>
              <li>
                <a href="#swar-gyaan" className="hover:text-gold-300 transition-colors">
                  Swar Gyaan (Ear Training Game)
                </a>
              </li>
              <li>
                <a href="#riyaz-journal" className="hover:text-gold-300 transition-colors">
                  Daily Riyaz Log & Streak Tracker
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-gold-300 transition-colors">
                  Foundations for Singing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Acoustic Integrity */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Acoustic Synthesis
            </div>
            <p className="text-ivory-400/70 text-xs leading-relaxed font-light">
              Synthesized reference tones (Tanpura, Tabla, Harmonium) are dynamically calibrated in real time to your selected Sa using Web Audio API physical modeling.
            </p>
            <div className="text-[11px] text-ivory-400/60 pt-1 font-mono">
              Pure client-side offline audio engine • Zero latency
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-ivory-400/50 text-[11px]">
            © {new Date().getFullYear()} RaagSpace. Crafted with devotion for vocalists, instrumentalists, and Indian classical music enthusiasts.
          </p>

          <div className="flex items-center gap-4 text-xs text-ivory-400/70">
            <a href="#raags" className="hover:text-gold-300 transition-colors">Raags (11)</a>
            <span>•</span>
            <Link to="/riyaz" className="hover:text-gold-300 transition-colors">Alankars (20)</Link>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
