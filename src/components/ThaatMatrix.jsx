import React, { useState } from 'react';
import { Layers, GitCompare, Sparkles, Check, X } from 'lucide-react';
import { RAAGS_DATA } from '../data/raags';

const THAATS = [
  { name: "Bilawal", swaras: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"], desc: "Natural Major scale. All pure shuddha swaras." },
  { name: "Kalyan", swaras: ["Sa", "Re", "Ga", "Ḿ", "Pa", "Dha", "Ni"], desc: "Lydian mode. Sharp 4th (Teevra Ma)." },
  { name: "Khamaj", swaras: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni̲"], desc: "Mixolydian. Flat 7th (Komal Ni)." },
  { name: "Kafi", swaras: ["Sa", "Re", "Ga̲", "Ma", "Pa", "Dha", "Ni̲"], desc: "Dorian. Flat 3rd & 7th (Komal Ga, Komal Ni)." },
  { name: "Asavari", swaras: ["Sa", "Re", "Ga̲", "Ma", "Pa", "Dha̲", "Ni̲"], desc: "Natural Minor. Flat 3rd, 6th, and 7th." },
  { name: "Bhairav", swaras: ["Sa", "Re̲", "Ga", "Ma", "Pa", "Dha̲", "Ni"], desc: "Double Harmonic. Flat 2nd and 6th." },
  { name: "Bhairavi", swaras: ["Sa", "Re̲", "Ga̲", "Ma", "Pa", "Dha̲", "Ni̲"], desc: "Phrygian. All four flat notes (Re, Ga, Dha, Ni)." },
  { name: "Poorvi", swaras: ["Sa", "Re̲", "Ga", "Ḿ", "Pa", "Dha̲", "Ni"], desc: "Komal Re & Dha with Teevra Ma." },
  { name: "Marwa", swaras: ["Sa", "Re̲", "Ga", "Ḿ", "Dha", "Ni"], desc: "Komal Re & Teevra Ma without Pancham." },
  { name: "Todi", swaras: ["Sa", "Re̲", "Ga̲", "Ḿ", "Pa", "Dha̲", "Ni"], desc: "Komal Re, Ga, Dha with Teevra Ma." }
];

export default function ThaatMatrix() {
  const [raagAId, setRaagAId] = useState("yaman");
  const [raagBId, setRaagBId] = useState("bhairav");

  const raagA = RAAGS_DATA.find(r => r.id === raagAId) || RAAGS_DATA[0];
  const raagB = RAAGS_DATA.find(r => r.id === raagBId) || RAAGS_DATA[1];

  return (
    <section id="thaat-matrix" className="py-16 sm:py-20 border-t border-white/[0.06] bg-navy-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase mb-2 font-semibold px-3 py-1 rounded-full bg-gold-500/[0.06] border border-gold-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Classical Musicology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory-50 font-bold mb-3">
            The 10 Thaats & Scale Comparator
          </h2>
          <p className="text-ivory-300/80 text-xs sm:text-sm font-light">
            Pandit Bhatkhande's classification organizes all ragas under 10 parent scales (Thaats). Compare how swaras transform between ragas.
          </p>
        </div>

        {/* 10 Thaats Matrix Table */}
        <div className="rounded-3xl bg-navy-900/60 border border-white/[0.08] p-5 sm:p-7 overflow-x-auto no-scrollbar shadow-card-subtle">
          <table className="w-full text-left text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-white/[0.08] text-[11px] uppercase tracking-wider text-gold-400">
                <th className="py-3 px-4">Thaat</th>
                <th className="py-3 px-2">Sa</th>
                <th className="py-3 px-2">Re</th>
                <th className="py-3 px-2">Ga</th>
                <th className="py-3 px-2">Ma</th>
                <th className="py-3 px-2">Pa</th>
                <th className="py-3 px-2">Dha</th>
                <th className="py-3 px-2">Ni</th>
                <th className="py-3 px-4">Scale Character</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {THAATS.map((t, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 font-serif text-sm font-bold text-ivory-50">
                    {t.name}
                  </td>
                  {["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"].map((baseNote) => {
                    const matchedSwara = t.swaras.find(s => s.startsWith(baseNote) || s.startsWith(baseNote.toLowerCase()) || (baseNote === "Ma" && s.startsWith("Ḿ")));
                    const isKomal = matchedSwara && matchedSwara.includes("̲");
                    const isTeevra = matchedSwara && matchedSwara.includes("Ḿ");

                    return (
                      <td key={baseNote} className="py-3 px-2">
                        {matchedSwara ? (
                          <span className={`px-2 py-0.5 rounded-md font-mono text-xs ${
                            isTeevra ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                            isKomal ? 'bg-gold-500/15 text-gold-300 border border-gold-500/40' :
                            'bg-navy-950 text-ivory-200 border border-white/[0.06]'
                          }`}>
                            {matchedSwara}
                          </span>
                        ) : (
                          <span className="text-ivory-400/40 font-mono">—</span>
                        )}
                      </td>
                    );
                  })}
                  <td className="py-3 px-4 text-ivory-300/70 text-[11px] font-light">
                    {t.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Live Two-Raag Comparator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/70 border border-gold-500/30 shadow-card-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase font-semibold mb-1">
                <GitCompare className="w-3.5 h-3.5" />
                <span>Side-by-Side Scale Comparison</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50">
                Compare Two Ragas
              </h3>
            </div>

            {/* Selectors */}
            <div className="flex items-center gap-3">
              <select
                value={raagAId}
                onChange={(e) => setRaagAId(e.target.value)}
                aria-label="First Raag to compare"
                className="bg-navy-950 border border-gold-500/40 text-gold-300 rounded-xl px-3 py-1.5 text-xs font-serif"
              >
                {RAAGS_DATA.map(r => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </select>

              <span className="text-xs text-ivory-400/60 font-mono">VS</span>

              <select
                value={raagBId}
                onChange={(e) => setRaagBId(e.target.value)}
                aria-label="Second Raag to compare"
                className="bg-navy-950 border border-gold-500/40 text-gold-300 rounded-xl px-3 py-1.5 text-xs font-serif"
              >
                {RAAGS_DATA.map(r => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Raag A */}
            <div className="p-5 rounded-2xl bg-navy-950/80 border border-white/[0.08] space-y-3">
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl font-serif font-bold text-ivory-50">{raagA.name}</h4>
                <span className="text-xs text-gold-400 font-mono">{raagA.thaat} Thaat</span>
              </div>
              <div className="text-xs text-ivory-300/80">
                <strong>Aroha:</strong> <span className="font-serif text-sm text-gold-300">{raagA.aroha}</span>
              </div>
              <div className="text-xs text-ivory-300/80">
                <strong>Avroha:</strong> <span className="font-serif text-sm text-gold-300">{raagA.avroha}</span>
              </div>
              <div className="pt-2 border-t border-white/[0.04] text-xs text-ivory-400/80 flex items-center justify-between">
                <span>Vadi: <strong className="text-ivory-100">{raagA.vadi}</strong></span>
                <span>Samvadi: <strong className="text-ivory-100">{raagA.samvadi}</strong></span>
              </div>
            </div>

            {/* Raag B */}
            <div className="p-5 rounded-2xl bg-navy-950/80 border border-white/[0.08] space-y-3">
              <div className="flex items-baseline justify-between">
                <h4 className="text-xl font-serif font-bold text-ivory-50">{raagB.name}</h4>
                <span className="text-xs text-gold-400 font-mono">{raagB.thaat} Thaat</span>
              </div>
              <div className="text-xs text-ivory-300/80">
                <strong>Aroha:</strong> <span className="font-serif text-sm text-gold-300">{raagB.aroha}</span>
              </div>
              <div className="text-xs text-ivory-300/80">
                <strong>Avroha:</strong> <span className="font-serif text-sm text-gold-300">{raagB.avroha}</span>
              </div>
              <div className="pt-2 border-t border-white/[0.04] text-xs text-ivory-400/80 flex items-center justify-between">
                <span>Vadi: <strong className="text-ivory-100">{raagB.vadi}</strong></span>
                <span>Samvadi: <strong className="text-ivory-100">{raagB.samvadi}</strong></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
