/**
 * Raag Yaman Dedicated Practice & Learning Data
 * 
 * Musical Review & Authenticity:
 * - Public Domain Traditional Hindustani Khayal Bandish: "Eri Aali Piya Bin"
 * - Taal: Teentaal (16 beats / matras divided into 4 vibhags: 4+4+4+4)
 * - Vibhags: Beat 1 (Sam - X), Beat 5 (Taali - 2), Beat 9 (Khali - 0), Beat 13 (Taali - 3)
 * - Timestamps are precisely mapped to a steady Madhya Laya (75 BPM / ~0.8s per beat).
 */

export const YAMAN_METADATA = {
  id: "yaman",
  name: "Raag Yaman",
  hindiName: "राग यमन",
  thaat: "Kalyan",
  jati: "Shadav - Sampurna (6 notes ascending, 7 notes descending)",
  vadi: "Ga (Gandhar - 👑 Primary Rest Swara)",
  samvadi: "Ni (Nishad - Secondary Rest Swara)",
  timeCategory: "evening",
  timeDisplay: "Evening (1st Prahar of Night, 6:00 PM – 9:00 PM)",
  aroha: "‘Ni Re Ga, Ḿ Dha Ni Ṡ",
  arohaSimple: "‘Ni Re Ga, Ma(t) Dha Ni Sa’",
  avroha: "Ṡ Ni Dha Pa, Ḿ Ga Re Sa",
  avrohaSimple: "Sa’ Ni Dha Pa, Ma(t) Ga Re Sa",
  pakad: "‘Ni Re Ga Re, ‘Ni Re Sa, Pa Ḿ Ga Re Sa",
  pakadExplanation: "Begins from mandra Nishad ('Ni), hovers on Gandhar, returns gracefully to Shadja, then leaps to Pancham before descending through Teevra Madhyam.",
  rasa: "Shringar (Romantic Longing) & Shanta / Bhakti (Meditative Devotion)",
  introduction: "Raag Yaman is universally regarded as the mother-canvas of Hindustani classical music. Revered for its majestic serenity and expansive emotional depth, it is typically the first major evening raga taught to disciples. Its distinct character stems from the brilliant presence of Teevra Madhyam (sharp fourth) alongside six pure shuddha swaras, and the traditional practice of omitting direct Shadja in ascent (commencing melodies from mandra Nishad: ‘Ni Re Ga). When dusk settles, Yaman awakens a mood of noble tranquility, yearning, and spiritual introspection."
};

// Interactive Swaras in Scale
export const YAMAN_SWARAS = [
  { name: "‘Ni", label: "Mandra Nishad", octave: "mandra", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Starting Note of Ascent" },
  { name: "Re", label: "Shuddha Rishabh", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Ascending Bridge" },
  { name: "Ga", label: "Shuddha Gandhar", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
  { name: "Ḿ", label: "Teevra Madhyam", octave: "madhya", isTeevra: true, isKomal: false, isVadi: false, isSamvadi: false, role: "Signature Sharp 4th" },
  { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Restful Pillar" },
  { name: "Dha", label: "Shuddha Dhaivat", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Harmonic Companion" },
  { name: "Ni", label: "Shuddha Nishad", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi Swara (Queen)" },
  { name: "Ṡ", label: "Taar Shadja", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "High Octave Root" }
];

// Timestamped Practice Phrases
// Tempo: 75 BPM (~0.8s per beat)
export const YAMAN_PRACTICE_MODULES = [
  {
    id: "bandish_eri_aali",
    title: "Traditional Bandish: Eri Aali Piya Bina (Sthayi)",
    subtitle: "Madhya Laya Teentaal (16 Matras)",
    taal: "Teentaal (16 Beats)",
    bpm: 75,
    beatDuration: 0.8,
    totalDuration: 12.8, // 16 beats * 0.8s
    description: "The immortal traditional Khayal composition in Raag Yaman. The melody originates on the 9th beat (Khali) and culminates majestically on the Sam (1st beat) on Gandhar.",
    notationData: [
      // Avartan (16 Matras: Beats 9-16 Khali to Taali 3, then Beats 1-8 Sam to Taali 2)
      // Beat 9 (Khali - 0)
      { id: "b9", beat: 9, vibhag: "0", start: 0.0, end: 0.8, swara: "‘Ni", lyric: "E-", hindiLyric: "ए-", meaning: "Oh my..." },
      // Beat 10
      { id: "b10", beat: 10, vibhag: "0", start: 0.8, end: 1.6, swara: "Re", lyric: "ri", hindiLyric: "री", meaning: "...friend," },
      // Beat 11
      { id: "b11", beat: 11, vibhag: "0", start: 1.6, end: 2.4, swara: "Ga", lyric: "aa-", hindiLyric: "आ-", meaning: "...dear" },
      // Beat 12
      { id: "b12", beat: 12, vibhag: "0", start: 2.4, end: 3.2, swara: "Re", lyric: "li", hindiLyric: "ली", meaning: "friend," },

      // Beat 13 (Taali - 3)
      { id: "b13", beat: 13, vibhag: "3", start: 3.2, end: 4.0, swara: "Ga", lyric: "pi-", hindiLyric: "पि-", meaning: "without" },
      // Beat 14
      { id: "b14", beat: 14, vibhag: "3", start: 4.0, end: 4.8, swara: "Ḿ", lyric: "ya", hindiLyric: "या", meaning: "my beloved" },
      // Beat 15
      { id: "b15", beat: 15, vibhag: "3", start: 4.8, end: 5.6, swara: "Dha", lyric: "bi-", hindiLyric: "बि-", meaning: "without" },
      // Beat 16
      { id: "b16", beat: 16, vibhag: "3", start: 5.6, end: 6.4, swara: "Ni", lyric: "na", hindiLyric: "ना", meaning: "him," },

      // Beat 1 (Sam - X) - Culmination on Vadi Ga!
      { id: "b1", beat: 1, vibhag: "X", start: 6.4, end: 7.2, swara: "Ṡ", lyric: "sa-", hindiLyric: "स-", meaning: "peace..." },
      // Beat 2
      { id: "b2", beat: 2, vibhag: "X", start: 7.2, end: 8.0, swara: "Ni", lyric: "khi", hindiLyric: "खी", meaning: "...dear friend," },
      // Beat 3
      { id: "b3", beat: 3, vibhag: "X", start: 8.0, end: 8.8, swara: "Dha", lyric: "kal", hindiLyric: "कल", meaning: "rest/calm" },
      // Beat 4
      { id: "b4", beat: 4, vibhag: "X", start: 8.8, end: 9.6, swara: "Pa", lyric: "na", hindiLyric: "ना", meaning: "does not" },

      // Beat 5 (Taali - 2)
      { id: "b5", beat: 5, vibhag: "2", start: 9.6, end: 10.4, swara: "Ḿ", lyric: "pa-", hindiLyric: "प-", meaning: "come..." },
      // Beat 6
      { id: "b6", beat: 6, vibhag: "2", start: 10.4, end: 11.2, swara: "Ga", lyric: "ra-", hindiLyric: "र-", meaning: "...to" },
      // Beat 7
      { id: "b7", beat: 7, vibhag: "2", start: 11.2, end: 12.0, swara: "Re", lyric: "ta", hindiLyric: "त", meaning: "me," },
      // Beat 8
      { id: "b8", beat: 8, vibhag: "2", start: 12.0, end: 12.8, swara: "Sa", lyric: "mo-he", hindiLyric: "मोहे", meaning: "in this heart." }
    ]
  },
  {
    id: "chalan_pakad",
    title: "Yaman Pakad & Chalan (Core Signature Phrases)",
    subtitle: "Riyaz Scale & Phrasing",
    taal: "Roopak / Free Laya (Sargam Study)",
    bpm: 60,
    beatDuration: 1.0,
    totalDuration: 10.0,
    description: "Slow meditative practice of the defining melodic contour. Focus on sliding from mandra Nishad into Gandhar with pure vocal resonance.",
    notationData: [
      { id: "p1", beat: 1, vibhag: "1", start: 0.0, end: 1.0, swara: "‘Ni", lyric: "‘Ni", hindiLyric: "‘नि", meaning: "Mandra Ni" },
      { id: "p2", beat: 2, vibhag: "1", start: 1.0, end: 2.0, swara: "Re", lyric: "Re", hindiLyric: "रे", meaning: "Rishabh" },
      { id: "p3", beat: 3, vibhag: "1", start: 2.0, end: 3.5, swara: "Ga", lyric: "Gaa-", hindiLyric: "गा-", meaning: "Vadi Ga (Rest)" },
      { id: "p4", beat: 4, vibhag: "2", start: 3.5, end: 4.5, swara: "Ḿ", lyric: "Ḿ", hindiLyric: "मं", meaning: "Teevra Ma" },
      { id: "p5", beat: 5, vibhag: "2", start: 4.5, end: 5.5, swara: "Dha", lyric: "Dha", hindiLyric: "ध", meaning: "Dhaivat" },
      { id: "p6", beat: 6, vibhag: "2", start: 5.5, end: 7.0, swara: "Ni", lyric: "Nii-", hindiLyric: "नी-", meaning: "Samvadi Ni" },
      { id: "p7", beat: 7, vibhag: "3", start: 7.0, end: 8.5, swara: "Ṡ", lyric: "Saaa’", hindiLyric: "सां-", meaning: "Taar Sa" },
      { id: "p8", beat: 8, vibhag: "3", start: 8.5, end: 10.0, swara: "Ga", lyric: "Gaa", hindiLyric: "गा", meaning: "Return to Ga" }
    ]
  }
];
