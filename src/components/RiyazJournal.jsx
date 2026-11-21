import React, { useState, useEffect } from 'react';
import { BookOpen, Flame, Clock, Award, Star, Trash2, Calendar, CheckCircle } from 'lucide-react';

const STORAGE_KEY = "raagspace_riyaz_journal";

export default function RiyazJournal() {
  const [journalData, setJournalData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      totalMinutes: 25,
      streak: 3,
      lastPracticedDate: new Date().toISOString().slice(0, 10),
      dailyGoalMinutes: 20,
      todayMinutes: 15,
      entries: [
        { id: 1, date: "2026-11-20", raag: "Raag Yaman", duration: "12 mins", note: "Clean glides from 'Ni to Ga; steady breath on Teevra Ma.", rating: 5 },
        { id: 2, date: "2026-11-19", raag: "Raag Bhairav", duration: "10 mins", note: "Worked on Komal Re and Dha microtonal andolan.", rating: 4 }
      ]
    };
  });

  const [newNote, setNewNote] = useState("");
  const [selectedRaag, setSelectedRaag] = useState("Raag Yaman");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(journalData));
    } catch (e) {}
  }, [journalData]);

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      raag: selectedRaag,
      duration: "15 mins",
      note: newNote.trim(),
      rating: 5
    };

    setJournalData(prev => ({
      ...prev,
      todayMinutes: prev.todayMinutes + 15,
      totalMinutes: prev.totalMinutes + 15,
      entries: [newEntry, ...prev.entries]
    }));

    setNewNote("");
  };

  const handleDeleteEntry = (id) => {
    setJournalData(prev => ({
      ...prev,
      entries: prev.entries.filter(entry => entry.id !== id)
    }));
  };

  const progressPercent = Math.min(100, Math.round((journalData.todayMinutes / journalData.dailyGoalMinutes) * 100));

  return (
    <section id="riyaz-journal" className="py-16 sm:py-20 border-t border-white/[0.06] bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase mb-2 font-semibold px-3 py-1 rounded-full bg-gold-500/[0.06] border border-gold-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Personal Practice Journal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory-50 font-bold mb-3">
            Riyaz Log & Daily Streak Tracker
          </h2>
          <p className="text-ivory-300/80 text-xs sm:text-sm font-light">
            Keep track of your classical riyaz, vocal reflections, and consistency. Saved offline directly in your browser.
          </p>
        </div>

        {/* Stats Strip: Streak, Today's Goal, Total Time */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          
          {/* Daily Streak */}
          <div className="p-5 rounded-2xl bg-navy-900/60 border border-white/[0.08] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-ivory-50">
                {journalData.streak} Days
              </div>
              <div className="text-[11px] text-ivory-400/70 uppercase tracking-wider">
                Active Riyaz Streak
              </div>
            </div>
          </div>

          {/* Today's Goal */}
          <div className="p-5 rounded-2xl bg-navy-900/60 border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs">
              <span className="text-ivory-400/80">Today's Target:</span>
              <span className="text-gold-300 font-bold font-mono">{journalData.todayMinutes} / {journalData.dailyGoalMinutes}m</span>
            </div>
            <div className="w-full h-2 bg-navy-950 rounded-full overflow-hidden mt-3">
              <div
                className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[10px] text-ivory-400/60 mt-2 text-right">
              {progressPercent >= 100 ? "Goal Achieved! 🎯" : `${journalData.dailyGoalMinutes - journalData.todayMinutes}m remaining`}
            </div>
          </div>

          {/* Total Riyaz Time */}
          <div className="p-5 rounded-2xl bg-navy-900/60 border border-white/[0.08] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-ivory-50">
                {journalData.totalMinutes} Mins
              </div>
              <div className="text-[11px] text-ivory-400/70 uppercase tracking-wider">
                Total Lifetime Practice
              </div>
            </div>
          </div>

        </div>

        {/* Add Quick Journal Entry */}
        <form onSubmit={handleAddEntry} className="max-w-4xl mx-auto p-5 sm:p-6 rounded-3xl bg-navy-900/70 border border-gold-500/25 space-y-4 shadow-card-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-300">
              Log Today's Riyaz Reflection
            </h4>
            <select
              value={selectedRaag}
              onChange={(e) => setSelectedRaag(e.target.value)}
              className="bg-navy-950 border border-white/[0.1] text-gold-300 rounded-xl px-3 py-1.5 text-xs font-serif"
            >
              <option value="Raag Yaman">Raag Yaman</option>
              <option value="Raag Bhairav">Raag Bhairav</option>
              <option value="Raag Bageshri">Raag Bageshri</option>
              <option value="Raag Darbari">Raag Darbari Kanada</option>
              <option value="Raag Bhimpalasi">Raag Bhimpalasi</option>
              <option value="Raag Malkauns">Raag Malkauns</option>
              <option value="Raag Jaunpuri">Raag Jaunpuri</option>
              <option value="Raag Desh">Raag Desh</option>
              <option value="Raag Bhairavi">Raag Bhairavi</option>
              <option value="Raag Durga">Raag Durga</option>
            </select>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What did you work on? (e.g. 'Steady sustain on Vadi Ga; practiced Teentaal Bandish at 80 BPM')"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-navy-950 border border-white/[0.08] text-xs text-ivory-100 placeholder-ivory-400/40 focus:outline-none focus:border-gold-500/50"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gold-500 text-navy-950 hover:brightness-110 shadow-gold-glow transition-all whitespace-nowrap"
            >
              Add Entry (+15m)
            </button>
          </div>
        </form>

        {/* Recent Riyaz Logs */}
        <div className="max-w-4xl mx-auto space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-ivory-400 font-semibold px-1">
            Recent Practice Notes
          </h4>

          {journalData.entries.map(entry => (
            <div
              key={entry.id}
              className="p-4 rounded-2xl bg-navy-900/50 border border-white/[0.06] flex items-start justify-between gap-4 group hover:border-gold-500/30 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold text-ivory-50">{entry.raag}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-[11px] text-gold-400/90 font-mono">{entry.duration}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-[11px] text-ivory-400/60">{entry.date}</span>
                </div>
                <p className="text-xs text-ivory-300/80 font-light">
                  {entry.note}
                </p>
              </div>

              <button
                onClick={() => handleDeleteEntry(entry.id)}
                className="opacity-0 group-hover:opacity-100 p-1.5 text-ivory-400/60 hover:text-red-400 transition-all"
                title="Delete note"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
