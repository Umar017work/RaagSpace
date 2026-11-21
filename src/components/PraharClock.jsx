import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sun, Moon, Sparkles, ChevronRight, Compass } from 'lucide-react';

const PRAHARS = [
  {
    id: 1,
    name: "1st Prahar of Day (Pratah)",
    hindiName: "प्रथम प्रहर (प्रातःकाल)",
    timeRange: "4:00 AM – 7:00 AM",
    startHour: 4,
    endHour: 7,
    mood: "Primordial stillness, awakening, solemn devotion (Bhakti / Shanta)",
    raags: [
      { id: "bhairav", name: "Raag Bhairav", thaat: "Bhairav" },
      { id: "bhairavi", name: "Raag Bhairavi", thaat: "Bhairavi" }
    ],
    icon: Sun,
    glowColor: "#E5C468"
  },
  {
    id: 2,
    name: "2nd Prahar of Day (Purvahna)",
    hindiName: "द्वितीय प्रहर (पूर्वाह्न)",
    timeRange: "7:00 AM – 10:00 AM",
    startHour: 7,
    endHour: 10,
    mood: "Bright hope, gentle lyrical warmth, optimism",
    raags: [
      { id: "jaunpuri", name: "Raag Jaunpuri", thaat: "Asavari" }
    ],
    icon: Sun,
    glowColor: "#F3E5AB"
  },
  {
    id: 3,
    name: "3rd Prahar of Day (Madhyahna)",
    hindiName: "तृतीय प्रहर (मध्याह्न)",
    timeRange: "10:00 AM – 1:00 PM",
    startHour: 10,
    endHour: 13,
    mood: "Brilliant radiance, midday heat, spiritual majesty",
    raags: [
      { id: "jaunpuri", name: "Raag Jaunpuri (Midday transition)", thaat: "Asavari" }
    ],
    icon: Sun,
    glowColor: "#D4AF37"
  },
  {
    id: 4,
    name: "4th Prahar of Day (Aparahna)",
    hindiName: "चतुर्थ प्रहर (अपराह्न)",
    timeRange: "1:00 PM – 4:00 PM",
    startHour: 13,
    endHour: 16,
    mood: "Sweet pensive calm, afternoon yearning (Karuna)",
    raags: [
      { id: "bhimpalasi", name: "Raag Bhimpalasi", thaat: "Kafi" }
    ],
    icon: Sun,
    glowColor: "#E5C468"
  },
  {
    id: 5,
    name: "1st Prahar of Night (Sandhya / Sunset)",
    hindiName: "प्रथम प्रहर (संध्याकाल)",
    timeRange: "4:00 PM – 7:00 PM",
    startHour: 16,
    endHour: 19,
    mood: "Twilight transitions, tender contemplation (Sandhiprakash)",
    raags: [
      { id: "bhimpalasi", name: "Raag Bhimpalasi", thaat: "Kafi" },
      { id: "yaman", name: "Raag Yaman (Dusk onwards)", thaat: "Kalyan" }
    ],
    icon: Moon,
    glowColor: "#AA820A"
  },
  {
    id: 6,
    name: "2nd Prahar of Night (Pradosha)",
    hindiName: "द्वितीय प्रहर (प्रदोष)",
    timeRange: "7:00 PM – 10:00 PM",
    startHour: 19,
    endHour: 22,
    mood: "Noble romantic serenity, devotional joy (Shringar / Shanta)",
    raags: [
      { id: "bhupali", name: "Raag Bhupali", thaat: "Kalyan" },
      { id: "yaman", name: "Raag Yaman", thaat: "Kalyan" },
      { id: "desh", name: "Raag Desh", thaat: "Khamaj" }
    ],
    icon: Moon,
    glowColor: "#D4AF37"
  },
  {
    id: 7,
    name: "3rd Prahar of Night (Nisheeth)",
    hindiName: "तृतीय प्रहर (निशीथ)",
    timeRange: "10:00 PM – 1:00 AM",
    startHour: 22,
    endHour: 1, // wraps past midnight
    mood: "Intimate poetic longing, pure nighttime serenity",
    raags: [
      { id: "bageshri", name: "Raag Bageshri", thaat: "Kafi" },
      { id: "durga", name: "Raag Durga", thaat: "Bilawal" }
    ],
    icon: Moon,
    glowColor: "#8C6F19"
  },
  {
    id: 8,
    name: "4th Prahar of Night (Midnight Silence)",
    hindiName: "चतुर्थ प्रहर (मध्यरात्रि)",
    timeRange: "1:00 AM – 4:00 AM",
    startHour: 1,
    endHour: 4,
    mood: "Profound majesty, meditative ascetic trance, sovereign silence",
    raags: [
      { id: "darbari", name: "Raag Darbari Kanada", thaat: "Asavari" },
      { id: "malkauns", name: "Raag Malkauns", thaat: "Bhairavi" }
    ],
    icon: Moon,
    glowColor: "#E5C468"
  }
];

function getCurrentPraharIndex() {
  const hour = new Date().getHours();
  // Find which prahar hour belongs to
  if (hour >= 4 && hour < 7) return 0;
  if (hour >= 7 && hour < 10) return 1;
  if (hour >= 10 && hour < 13) return 2;
  if (hour >= 13 && hour < 16) return 3;
  if (hour >= 16 && hour < 19) return 4;
  if (hour >= 19 && hour < 22) return 5;
  if (hour >= 22 || hour < 1) return 6;
  return 7;
}

export default function PraharClock() {
  const [activePraharIndex, setActivePraharIndex] = useState(getCurrentPraharIndex());
  const [currentHourText, setCurrentHourText] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentHourText(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setActivePraharIndex(getCurrentPraharIndex());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const activePrahar = PRAHARS[activePraharIndex];
  const realCurrentIdx = getCurrentPraharIndex();

  return (
    <section id="prahar-cycle" className="py-16 sm:py-20 border-t border-white/[0.06] bg-navy-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase mb-2 font-semibold px-3 py-1 rounded-full bg-gold-500/[0.06] border border-gold-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>24-Hour Time Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory-50 font-bold mb-3">
            The 8 Prahars of Indian Music
          </h2>
          <p className="text-ivory-300/80 text-xs sm:text-sm font-light">
            Classical ragas are tuned to the biorhythms of the solar cycle. Local time: <strong className="text-gold-300 font-mono">{currentHourText}</strong>
          </p>
        </div>

        {/* Interactive Prahar Wheel / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {PRAHARS.map((p, idx) => {
            const isSelected = activePraharIndex === idx;
            const isNow = realCurrentIdx === idx;
            const Icon = p.icon;

            return (
              <button
                key={p.id}
                onClick={() => setActivePraharIndex(idx)}
                className={`p-3 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center justify-between min-h-[96px] relative ${
                  isSelected
                    ? 'bg-gold-500 text-navy-950 border-gold-300 font-bold shadow-gold-glow scale-105 z-10'
                    : 'bg-navy-900/60 text-ivory-300 border-white/[0.06] hover:border-gold-500/40 hover:bg-navy-900'
                }`}
              >
                {isNow && (
                  <span className={`absolute -top-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                    isSelected ? 'bg-navy-950 text-gold-300 border border-gold-400' : 'bg-gold-500 text-navy-950 shadow-sm'
                  }`}>
                    Now
                  </span>
                )}

                <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider">
                  <Icon className="w-3 h-3" />
                  <span>P{p.id}</span>
                </div>

                <div className={`text-xs font-serif font-bold ${
                  isSelected ? 'text-navy-950' : 'text-ivory-100'
                }`}>
                  {p.timeRange.split('–')[0]}
                </div>

                <div className={`text-[9px] ${
                  isSelected ? 'text-navy-900' : 'text-ivory-400/60'
                }`}>
                  {p.raags.length} {p.raags.length === 1 ? 'Raag' : 'Raags'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Prahar Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/70 border border-gold-500/35 shadow-card-subtle flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/25">
                {activePrahar.timeRange}
              </span>
              <span className="text-xs font-serif text-gold-300/90">{activePrahar.hindiName}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50">
              {activePrahar.name}
            </h3>

            <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-light">
              <strong className="text-gold-300 font-medium">Spiritual Character & Rasa:</strong> {activePrahar.mood}
            </p>
          </div>

          {/* Recommended Raags for this Prahar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {activePrahar.raags.map(raag => (
              <Link
                key={raag.id}
                to={`/raag/${raag.id}`}
                className="p-4 rounded-2xl bg-navy-950/80 border border-gold-500/30 hover:border-gold-400 hover:bg-navy-950 transition-all group flex items-center justify-between gap-4 min-w-[200px]"
              >
                <div>
                  <div className="text-base font-serif font-bold text-ivory-50 group-hover:text-gold-300 transition-colors">
                    {raag.name}
                  </div>
                  <div className="text-[10px] text-ivory-400/70 uppercase">
                    {raag.thaat} Thaat
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
