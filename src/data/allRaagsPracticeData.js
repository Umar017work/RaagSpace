/**
 * RaagSpace — Comprehensive Practice & Bandish Data for all 10 Canonical Raags
 * Public domain traditional compositions, chalan/pakad, and timestamped notation data.
 */

export const ALL_RAAGS_PRACTICE = {
  yaman: {
    id: "yaman",
    name: "Raag Yaman",
    hindiName: "राग यमन",
    thaat: "Kalyan",
    jati: "Shadav - Sampurna",
    vadi: "Ga (Gandhar)",
    samvadi: "Ni (Nishad)",
    timeDisplay: "Evening (1st Prahar, 6:00 PM – 9:00 PM)",
    aroha: "‘Ni Re Ga, Ḿ Dha Ni Ṡ",
    arohaSimple: "‘Ni Re Ga, Ma(t) Dha Ni Sa’",
    avroha: "Ṡ Ni Dha Pa, Ḿ Ga Re Sa",
    avrohaSimple: "Sa’ Ni Dha Pa, Ma(t) Ga Re Sa",
    pakad: "‘Ni Re Ga Re, ‘Ni Re Sa, Pa Ḿ Ga Re Sa",
    rasa: "Shringar (Romantic Longing) & Shanta (Peaceful Devotion)",
    introduction: "Raag Yaman is the foundational evening masterpiece of Hindustani classical music. Characterized by sharp Teevra Madhyam (Ḿ) and beginning its ascent from mandra Nishad (‘Ni Re Ga), it creates an expansive aura of spiritual poise and romantic yearning.",
    swaras: [
      { name: "‘Ni", label: "Mandra Ni", octave: "mandra", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Starting Ascent" },
      { name: "Re", label: "Shuddha Re", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Bridge Note" },
      { name: "Ga", label: "Shuddha Ga", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi (Primary King)" },
      { name: "Ḿ", label: "Teevra Ma", octave: "madhya", isTeevra: true, isKomal: false, isVadi: false, isSamvadi: false, role: "Signature Sharp 4th" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Consonant Pillar" },
      { name: "Dha", label: "Shuddha Dha", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Upper Harmonic" },
      { name: "Ni", label: "Shuddha Ni", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi (Queen)" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Taar Octave Apex" }
    ],
    modules: [
      {
        id: "yaman_bandish",
        title: "Traditional Bandish: Eri Aali Piya Bina (Sthayi)",
        subtitle: "Madhya Laya Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 75,
        totalDuration: 12.8,
        description: "Public domain traditional Khayal bandish. Arrives from beat 9 (Khali) onto the Sam on Gandhar.",
        notationData: [
          { id: "yb9", beat: 9, vibhag: "0", start: 0.0, end: 0.8, swara: "‘Ni", lyric: "E-", hindiLyric: "ए-", meaning: "Oh my..." },
          { id: "yb10", beat: 10, vibhag: "0", start: 0.8, end: 1.6, swara: "Re", lyric: "ri", hindiLyric: "री", meaning: "...friend," },
          { id: "yb11", beat: 11, vibhag: "0", start: 1.6, end: 2.4, swara: "Ga", lyric: "aa-", hindiLyric: "आ-", meaning: "...dear" },
          { id: "yb12", beat: 12, vibhag: "0", start: 2.4, end: 3.2, swara: "Re", lyric: "li", hindiLyric: "ली", meaning: "friend," },
          { id: "yb13", beat: 13, vibhag: "3", start: 3.2, end: 4.0, swara: "Ga", lyric: "pi-", hindiLyric: "पि-", meaning: "without" },
          { id: "yb14", beat: 14, vibhag: "3", start: 4.0, end: 4.8, swara: "Ḿ", lyric: "ya", hindiLyric: "या", meaning: "my beloved" },
          { id: "yb15", beat: 15, vibhag: "3", start: 4.8, end: 5.6, swara: "Dha", lyric: "bi-", hindiLyric: "बि-", meaning: "without" },
          { id: "yb16", beat: 16, vibhag: "3", start: 5.6, end: 6.4, swara: "Ni", lyric: "na", hindiLyric: "ना", meaning: "him," },
          { id: "yb1", beat: 1, vibhag: "X", start: 6.4, end: 7.2, swara: "Ṡ", lyric: "sa-", hindiLyric: "स-", meaning: "peace..." },
          { id: "yb2", beat: 2, vibhag: "X", start: 7.2, end: 8.0, swara: "Ni", lyric: "khi", hindiLyric: "खी", meaning: "...dear friend," },
          { id: "yb3", beat: 3, vibhag: "X", start: 8.0, end: 8.8, swara: "Dha", lyric: "kal", hindiLyric: "कल", meaning: "rest/calm" },
          { id: "yb4", beat: 4, vibhag: "X", start: 8.8, end: 9.6, swara: "Pa", lyric: "na", hindiLyric: "ना", meaning: "does not" },
          { id: "yb5", beat: 5, vibhag: "2", start: 9.6, end: 10.4, swara: "Ḿ", lyric: "pa-", hindiLyric: "प-", meaning: "come..." },
          { id: "yb6", beat: 6, vibhag: "2", start: 10.4, end: 11.2, swara: "Ga", lyric: "ra-", hindiLyric: "र-", meaning: "...to" },
          { id: "yb7", beat: 7, vibhag: "2", start: 11.2, end: 12.0, swara: "Re", lyric: "ta", hindiLyric: "त", meaning: "me," },
          { id: "yb8", beat: 8, vibhag: "2", start: 12.0, end: 12.8, swara: "Sa", lyric: "mo-he", hindiLyric: "मोहे", meaning: "in my heart." }
        ]
      },
      {
        id: "yaman_pakad",
        title: "Yaman Chalan & Pakad Phrasing",
        subtitle: "Meditative Contours",
        taal: "Free Laya (Sargam Drill)",
        bpm: 60,
        totalDuration: 9.0,
        description: "Contour drill emphasizing resting on Vadi Ga and Samvadi Ni.",
        notationData: [
          { id: "yp1", beat: 1, vibhag: "1", start: 0.0, end: 1.0, swara: "‘Ni", lyric: "‘Ni", hindiLyric: "‘नि", meaning: "Mandra Ni" },
          { id: "yp2", beat: 2, vibhag: "1", start: 1.0, end: 2.0, swara: "Re", lyric: "Re", hindiLyric: "रे", meaning: "Rishabh" },
          { id: "yp3", beat: 3, vibhag: "1", start: 2.0, end: 3.5, swara: "Ga", lyric: "Gaa-", hindiLyric: "गा-", meaning: "Vadi Ga" },
          { id: "yp4", beat: 4, vibhag: "2", start: 3.5, end: 4.5, swara: "Ḿ", lyric: "Ḿ", hindiLyric: "मं", meaning: "Teevra Ma" },
          { id: "yp5", beat: 5, vibhag: "2", start: 4.5, end: 5.5, swara: "Dha", lyric: "Dha", hindiLyric: "ध", meaning: "Dhaivat" },
          { id: "yp6", beat: 6, vibhag: "2", start: 5.5, end: 7.0, swara: "Ni", lyric: "Nii-", hindiLyric: "नी-", meaning: "Samvadi Ni" },
          { id: "yp7", beat: 7, vibhag: "3", start: 7.0, end: 9.0, swara: "Ṡ", lyric: "Saa’", hindiLyric: "सां-", meaning: "Taar Sa" }
        ]
      }
    ]
  },

  bhairav: {
    id: "bhairav",
    name: "Raag Bhairav",
    hindiName: "राग भैरव",
    thaat: "Bhairav",
    jati: "Sampurna - Sampurna",
    vadi: "Dha̲ (Komal Dhaivat)",
    samvadi: "Re̲ (Komal Rishabh)",
    timeDisplay: "Dawn / Brahma Muhurta (4:00 AM – 7:00 AM)",
    aroha: "Sa Re̲ Ga Ma Pa Dha̲ Ni Ṡ",
    arohaSimple: "Sa Re(k) Ga Ma Pa Dha(k) Ni Sa’",
    avroha: "Ṡ Ni Dha̲ Pa Ma Ga Re̲ Sa",
    avrohaSimple: "Sa’ Ni Dha(k) Pa Ma Ga Re(k) Sa",
    pakad: "Ga Ma Dha̲(~) Pa, Ma Ga Re̲(~) Sa",
    rasa: "Bhakti (Solemn Devotion) & Shanta (Primordial Stillness)",
    introduction: "Raag Bhairav is the monumental dawn raga invoking sunrise and the cosmic awakening of consciousness. It is revered for its slow, dignified andolon (microtonal oscillation) on Komal Rishabh and Komal Dhaivat.",
    swaras: [
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Base Drone" },
      { name: "Re̲", label: "Komal Rishabh", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: true, role: "Samvadi (Andolan)" },
      { name: "Ga", label: "Shuddha Gandhar", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Ascending Pivot" },
      { name: "Ma", label: "Shuddha Madhyam", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Restful Bridge" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Pillar Note" },
      { name: "Dha̲", label: "Komal Dhaivat", octave: "madhya", isTeevra: false, isKomal: true, isVadi: true, isSamvadi: false, role: "Vadi (Andolan)" },
      { name: "Ni", label: "Shuddha Nishad", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Leading Tone" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Apex" }
    ],
    modules: [
      {
        id: "bhairav_bandish",
        title: "Traditional Bandish: Jago Mohan Pyare (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 70,
        totalDuration: 13.6,
        description: "Classic morning invocation awakening the divine spirit at dawn.",
        notationData: [
          { id: "bb9", beat: 9, vibhag: "0", start: 0.0, end: 0.85, swara: "Sa", lyric: "Jaa-", hindiLyric: "जा-", meaning: "Awake..." },
          { id: "bb10", beat: 10, vibhag: "0", start: 0.85, end: 1.7, swara: "Re̲", lyric: "go", hindiLyric: "गो", meaning: "...arise," },
          { id: "bb11", beat: 11, vibhag: "0", start: 1.7, end: 2.55, swara: "Ga", lyric: "Mo-", hindiLyric: "मो-", meaning: "Beloved" },
          { id: "bb12", beat: 12, vibhag: "0", start: 2.55, end: 3.4, swara: "Ma", lyric: "han", hindiLyric: "हन", meaning: "Mohan," },
          { id: "bb13", beat: 13, vibhag: "3", start: 3.4, end: 4.25, swara: "Pa", lyric: "pyaa-", hindiLyric: "प्या-", meaning: "dear" },
          { id: "bb14", beat: 14, vibhag: "3", start: 4.25, end: 5.1, swara: "Dha̲", lyric: "re", hindiLyric: "रे", meaning: "one," },
          { id: "bb15", beat: 15, vibhag: "3", start: 5.1, end: 5.95, swara: "Ni", lyric: "ka-", hindiLyric: "क-", meaning: "the lotus" },
          { id: "bb16", beat: 16, vibhag: "3", start: 5.95, end: 6.8, swara: "Ṡ", lyric: "mal", hindiLyric: "मल", meaning: "blooms," },
          { id: "bb1", beat: 1, vibhag: "X", start: 6.8, end: 7.65, swara: "Ṡ", lyric: "dal", hindiLyric: "दल", meaning: "petals" },
          { id: "bb2", beat: 2, vibhag: "X", start: 7.65, end: 8.5, swara: "Ni", lyric: "foo-", hindiLyric: "फू-", meaning: "open" },
          { id: "bb3", beat: 3, vibhag: "X", start: 8.5, end: 9.35, swara: "Dha̲", lyric: "le", hindiLyric: "ले", meaning: "wide," },
          { id: "bb4", beat: 4, vibhag: "X", start: 9.35, end: 10.2, swara: "Pa", lyric: "re", hindiLyric: "रे", meaning: "now," },
          { id: "bb5", beat: 5, vibhag: "2", start: 10.2, end: 11.05, swara: "Ma", lyric: "jaa-", hindiLyric: "जा-", meaning: "awaken" },
          { id: "bb6", beat: 6, vibhag: "2", start: 11.05, end: 11.9, swara: "Ga", lyric: "go", hindiLyric: "गो", meaning: "awake," },
          { id: "bb7", beat: 7, vibhag: "2", start: 11.9, end: 12.75, swara: "Re̲", lyric: "pyaa-", hindiLyric: "प्या-", meaning: "beloved," },
          { id: "bb8", beat: 8, vibhag: "2", start: 12.75, end: 13.6, swara: "Sa", lyric: "re", hindiLyric: "रे", meaning: "my soul." }
        ]
      }
    ]
  },

  bageshri: {
    id: "bageshri",
    name: "Raag Bageshri",
    hindiName: "राग बागेश्री",
    thaat: "Kafi",
    jati: "Audav - Sampurna",
    vadi: "Ma (Madhyam)",
    samvadi: "Sa (Shadja)",
    timeDisplay: "Midnight (2nd Prahar of Night, 9:00 PM – 12:00 AM)",
    aroha: "Sa Ga̲ Ma Dha Ni̲ Ṡ",
    arohaSimple: "Sa Ga(k) Ma Dha Ni(k) Sa’",
    avroha: "Ṡ Ni̲ Dha, Ma, Pa Dha Ga̲, Ma Re Sa",
    avrohaSimple: "Sa’ Ni(k) Dha Ma, Pa Dha Ga(k), Ma Re Sa",
    pakad: "Ma Dha Ni̲ Dha Ma, Pa Dha Ga̲ Ma",
    rasa: "Viraha (Poetic Longing) & Shringar (Intimate Love)",
    introduction: "A supreme romantic midnight melody expressing yearning and the tender beauty of reunion. Madhyam (Ma) serves as the vibrant emotional sanctuary of this raga.",
    swaras: [
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi" },
      { name: "Ga̲", label: "Komal Gandhar", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Sweet Third" },
      { name: "Ma", label: "Shuddha Madhyam", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi (Nucleus)" },
      { name: "Pa", label: "Pancham (Vakra)", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Descent Only" },
      { name: "Dha", label: "Shuddha Dhaivat", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Warm Step" },
      { name: "Ni̲", label: "Komal Nishad", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Yearning Flat 7th" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Taar Shadja" }
    ],
    modules: [
      {
        id: "bageshri_bandish",
        title: "Traditional Bandish: Kaun Gat Bhayi (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 72,
        totalDuration: 13.3,
        description: "Poignant Khayal bandish resting eloquently upon Madhyam.",
        notationData: [
          { id: "bg9", beat: 9, vibhag: "0", start: 0.0, end: 0.83, swara: "Ma", lyric: "Kau-", hindiLyric: "कौ-", meaning: "What..." },
          { id: "bg10", beat: 10, vibhag: "0", start: 0.83, end: 1.66, swara: "Dha", lyric: "na", hindiLyric: "न", meaning: "...state" },
          { id: "bg11", beat: 11, vibhag: "0", start: 1.66, end: 2.5, swara: "Ni̲", lyric: "ga-", hindiLyric: "ग-", meaning: "has become" },
          { id: "bg12", beat: 12, vibhag: "0", start: 2.5, end: 3.33, swara: "Dha", lyric: "ti", hindiLyric: "ति", meaning: "of mine," },
          { id: "bg13", beat: 13, vibhag: "3", start: 3.33, end: 4.16, swara: "Ma", lyric: "bha-", hindiLyric: "भ-", meaning: "without" },
          { id: "bg14", beat: 14, vibhag: "3", start: 4.16, end: 5.0, swara: "Pa", lyric: "yi", hindiLyric: "यी", meaning: "my" },
          { id: "bg15", beat: 15, vibhag: "3", start: 5.0, end: 5.83, swara: "Dha", lyric: "mo-", hindiLyric: "मो-", meaning: "beloved," },
          { id: "bg16", beat: 16, vibhag: "3", start: 5.83, end: 6.66, swara: "Ga̲", lyric: "ri", hindiLyric: "री", meaning: "friend," },
          { id: "bg1", beat: 1, vibhag: "X", start: 6.66, end: 7.5, swara: "Ma", lyric: "aa-", hindiLyric: "आ-", meaning: "come" },
          { id: "bg2", beat: 2, vibhag: "X", start: 7.5, end: 8.33, swara: "Ma", lyric: "li", hindiLyric: "ली", meaning: "to me," },
          { id: "bg3", beat: 3, vibhag: "X", start: 8.33, end: 9.16, swara: "Ga̲", lyric: "pi-", hindiLyric: "पि-", meaning: "my" },
          { id: "bg4", beat: 4, vibhag: "X", start: 9.16, end: 10.0, swara: "Re", lyric: "ya", hindiLyric: "या", meaning: "beloved" },
          { id: "bg5", beat: 5, vibhag: "2", start: 10.0, end: 10.83, swara: "Sa", lyric: "bi-", hindiLyric: "बि-", meaning: "without" },
          { id: "bg6", beat: 6, vibhag: "2", start: 10.83, end: 11.66, swara: "‘Ni̲", lyric: "na", hindiLyric: "न", meaning: "him" },
          { id: "bg7", beat: 7, vibhag: "2", start: 11.66, end: 12.5, swara: "‘Dha", lyric: "kal", hindiLyric: "कल", meaning: "no peace" },
          { id: "bg8", beat: 8, vibhag: "2", start: 12.5, end: 13.3, swara: "Sa", lyric: "na", hindiLyric: "ना", meaning: "is found." }
        ]
      }
    ]
  },

  darbari: {
    id: "darbari",
    name: "Raag Darbari Kanada",
    hindiName: "राग दरबारी कान्हड़ा",
    thaat: "Asavari",
    jati: "Sampurna - Shadav (Vakra)",
    vadi: "Re (Rishabh)",
    samvadi: "Pa (Pancham)",
    timeDisplay: "Late Night (Midnight – 3:00 AM)",
    aroha: "Sa Re Ga̲(~) Ma Pa, Dha̲ Ni̲ Ṡ",
    arohaSimple: "Sa Re Ga(k) Ma Pa Dha(k) Ni(k) Sa’",
    avroha: "Ṡ Dha̲ Ni̲ Pa, Ma Pa Ga̲(~) Ma Re Sa",
    avrohaSimple: "Sa’ Dha(k) Ni(k) Pa, Ma Pa Ga(k) Ma Re Sa",
    pakad: "‘Ni̲ Sa Re, Ga̲(~) Ma Re Sa, ‘Dha̲ ‘Ni̲ Pa",
    rasa: "Gambhir (Grave Solemnity) & Veera (Imperial Majesty)",
    introduction: "Originated in Emperor Akbar's imperial court by legendary Miyan Tansen. Its slow oscillations on Komal Ga and Komal Dha in the mandra saptak command majestic stillness.",
    swaras: [
      { name: "‘Dha̲", label: "Mandra Komal Dha", octave: "mandra", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Deep Foundation" },
      { name: "‘Ni̲", label: "Mandra Komal Ni", octave: "mandra", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Lower Gateway" },
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Imperial Drone" },
      { name: "Re", label: "Shuddha Rishabh", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi (Sovereign Re)" },
      { name: "Ga̲", label: "Komal Gandhar (Andolan)", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Kanada Andolan" },
      { name: "Ma", label: "Shuddha Madhyam", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Passage Note" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi Anchor" },
      { name: "Dha̲", label: "Komal Dhaivat (Andolan)", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Grave Resonant Swara" }
    ],
    modules: [
      {
        id: "darbari_bandish",
        title: "Traditional Chalan: Mandra Saptak Resonances",
        subtitle: "Vilambit to Madhya Laya",
        taal: "Teentaal (16 Beats)",
        bpm: 65,
        totalDuration: 14.7,
        description: "Classic deep exploration of the royal Canadian phrasing.",
        notationData: [
          { id: "db9", beat: 9, vibhag: "0", start: 0.0, end: 0.92, swara: "‘Ni̲", lyric: "‘Ni̲", hindiLyric: "‘नि", meaning: "Mandra Ni" },
          { id: "db10", beat: 10, vibhag: "0", start: 0.92, end: 1.84, swara: "Sa", lyric: "Saa", hindiLyric: "सा", meaning: "Shadja" },
          { id: "db11", beat: 11, vibhag: "0", start: 1.84, end: 2.76, swara: "Re", lyric: "Re-", hindiLyric: "रे-", meaning: "Vadi Re" },
          { id: "db12", beat: 12, vibhag: "0", start: 2.76, end: 3.68, swara: "Ga̲", lyric: "Gaa̲(andolan)", hindiLyric: "गा(दोलन)", meaning: "Oscillating Ga" },
          { id: "db13", beat: 13, vibhag: "3", start: 3.68, end: 4.6, swara: "Ma", lyric: "Ma", hindiLyric: "म", meaning: "Madhyam" },
          { id: "db14", beat: 14, vibhag: "3", start: 4.6, end: 5.52, swara: "Re", lyric: "Re", hindiLyric: "रे", meaning: "Rishabh" },
          { id: "db15", beat: 15, vibhag: "3", start: 5.52, end: 6.44, swara: "Sa", lyric: "Sa", hindiLyric: "स", meaning: "Descent to Sa" },
          { id: "db16", beat: 16, vibhag: "3", start: 6.44, end: 7.36, swara: "‘Dha̲", lyric: "‘Dha̲", hindiLyric: "‘ध", meaning: "Lower Dha" },
          { id: "db1", beat: 1, vibhag: "X", start: 7.36, end: 8.28, swara: "‘Ni̲", lyric: "‘Ni̲", hindiLyric: "‘नि", meaning: "Lower Ni" },
          { id: "db2", beat: 2, vibhag: "X", start: 8.28, end: 9.2, swara: "Pa", lyric: "Pa-", hindiLyric: "प-", meaning: "Samvadi Pa" },
          { id: "db3", beat: 3, vibhag: "X", start: 9.2, end: 10.12, swara: "Ma", lyric: "Ma", hindiLyric: "म", meaning: "Madhyam" },
          { id: "db4", beat: 4, vibhag: "X", start: 10.12, end: 11.04, swara: "Pa", lyric: "Pa", hindiLyric: "प", meaning: "Pancham" },
          { id: "db5", beat: 5, vibhag: "2", start: 11.04, end: 11.96, swara: "Ga̲", lyric: "Ga̲", hindiLyric: "ग", meaning: "Komal Ga" },
          { id: "db6", beat: 6, vibhag: "2", start: 11.96, end: 12.88, swara: "Ma", lyric: "Ma", hindiLyric: "म", meaning: "Madhyam" },
          { id: "db7", beat: 7, vibhag: "2", start: 12.88, end: 13.8, swara: "Re", lyric: "Ree-", hindiLyric: "रे-", meaning: "Vadi Re" },
          { id: "db8", beat: 8, vibhag: "2", start: 13.8, end: 14.7, swara: "Sa", lyric: "Saa", hindiLyric: "सा", meaning: "Rest on Sa" }
        ]
      }
    ]
  },

  bhimpalasi: {
    id: "bhimpalasi",
    name: "Raag Bhimpalasi",
    hindiName: "राग भीमपलासी",
    thaat: "Kafi",
    jati: "Audav - Sampurna",
    vadi: "Ma (Madhyam)",
    samvadi: "Sa (Shadja)",
    timeDisplay: "Late Afternoon (3:00 PM – 6:00 PM)",
    aroha: "‘Ni̲ Sa Ga̲ Ma Pa Ni̲ Ṡ",
    arohaSimple: "‘Ni(k) Sa Ga(k) Ma Pa Ni(k) Sa’",
    avroha: "Ṡ Ni̲ Dha Pa Ma Ga̲ Re Sa",
    avrohaSimple: "Sa’ Ni(k) Dha Pa Ma Ga(k) Re Sa",
    pakad: "Pa Ma Ga̲ Ma, Ga̲ Re Sa",
    rasa: "Karuna (Tender Emotion) & Shanta (Afternoon Calm)",
    introduction: "A late-afternoon jewel balancing serene contemplation with intense lyrical passion. Madhyam (Ma) is approached with prolonged meend (glide) from Pancham.",
    swaras: [
      { name: "‘Ni̲", label: "Mandra Komal Ni", octave: "mandra", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Ascent Launch" },
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi" },
      { name: "Ga̲", label: "Komal Ga", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Tender Minor 3rd" },
      { name: "Ma", label: "Shuddha Ma", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Launch Pad for Meend" },
      { name: "Dha", label: "Shuddha Dha", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Descent Bridge" },
      { name: "Ni̲", label: "Komal Ni", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Expressive 7th" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Taar Apex" }
    ],
    modules: [
      {
        id: "bhimpalasi_bandish",
        title: "Traditional Bandish: Ja Ja Re Apne Mandirva (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 75,
        totalDuration: 12.8,
        description: "Classic late-afternoon composition with sweet meend on Madhyam.",
        notationData: [
          { id: "bp9", beat: 9, vibhag: "0", start: 0.0, end: 0.8, swara: "Pa", lyric: "Jaa-", hindiLyric: "जा-", meaning: "Go..." },
          { id: "bp10", beat: 10, vibhag: "0", start: 0.8, end: 1.6, swara: "Ma", lyric: "ja", hindiLyric: "जा", meaning: "...away," },
          { id: "bp11", beat: 11, vibhag: "0", start: 1.6, end: 2.4, swara: "Ga̲", lyric: "re-", hindiLyric: "रे-", meaning: "oh" },
          { id: "bp12", beat: 12, vibhag: "0", start: 2.4, end: 3.2, swara: "Ma", lyric: "e", hindiLyric: "ए", meaning: "wanderer," },
          { id: "bp13", beat: 13, vibhag: "3", start: 3.2, end: 4.0, swara: "Pa", lyric: "ap-", hindiLyric: "अप-", meaning: "to your" },
          { id: "bp14", beat: 14, vibhag: "3", start: 4.0, end: 4.8, swara: "Ni̲", lyric: "ne", hindiLyric: "ने", meaning: "own" },
          { id: "bp15", beat: 15, vibhag: "3", start: 4.8, end: 5.6, swara: "Ṡ", lyric: "man-", hindiLyric: "मं-", meaning: "sacred" },
          { id: "bp16", beat: 16, vibhag: "3", start: 5.6, end: 6.4, swara: "Ni̲", lyric: "dir-", hindiLyric: "दिर-", meaning: "abode," },
          { id: "bp1", beat: 1, vibhag: "X", start: 6.4, end: 7.2, swara: "Dha", lyric: "va", hindiLyric: "वा", meaning: "home," },
          { id: "bp2", beat: 2, vibhag: "X", start: 7.2, end: 8.0, swara: "Pa", lyric: "su-", hindiLyric: "सु-", meaning: "listen" },
          { id: "bp3", beat: 3, vibhag: "X", start: 8.0, end: 8.8, swara: "Ma", lyric: "na", hindiLyric: "न", meaning: "to me," },
          { id: "bp4", beat: 4, vibhag: "X", start: 8.8, end: 9.6, swara: "Ga̲", lyric: "pa-", hindiLyric: "प-", meaning: "wander" },
          { id: "bp5", beat: 5, vibhag: "2", start: 9.6, end: 10.4, swara: "Re", lyric: "va", hindiLyric: "वा", meaning: "not," },
          { id: "bp6", beat: 6, vibhag: "2", start: 10.4, end: 11.2, swara: "Sa", lyric: "kaa-", hindiLyric: "का-", meaning: "why" },
          { id: "bp7", beat: 7, vibhag: "2", start: 11.2, end: 12.0, swara: "‘Ni̲", lyric: "he", hindiLyric: "हे", meaning: "delay" },
          { id: "bp8", beat: 8, vibhag: "2", start: 12.0, end: 12.8, swara: "Sa", lyric: "re", hindiLyric: "रे", meaning: "here." }
        ]
      }
    ]
  },

  malkauns: {
    id: "malkauns",
    name: "Raag Malkauns",
    hindiName: "राग मालकौंस",
    thaat: "Bhairavi",
    jati: "Audav - Audav",
    vadi: "Ma (Madhyam)",
    samvadi: "Sa (Shadja)",
    timeDisplay: "Deep Midnight (3rd Prahar, 12:00 AM – 3:00 AM)",
    aroha: "Sa Ga̲ Ma Dha̲ Ni̲ Ṡ",
    arohaSimple: "Sa Ga(k) Ma Dha(k) Ni(k) Sa’",
    avroha: "Ṡ Ni̲ Dha̲ Ma Ga̲ Sa",
    avrohaSimple: "Sa’ Ni(k) Dha(k) Ma Ga(k) Sa",
    pakad: "‘Dha̲ ‘Ni̲ Sa Ma, Ga̲ Ma Ga̲ Sa",
    rasa: "Veera (Spiritual Heroism) & Shanta (Trance-like Meditation)",
    introduction: "An ancient, hypnotic pentatonic masterpiece created by Lord Shiva. Stripping away Re and Pa leaves pure mystical tension and profound spiritual trance.",
    swaras: [
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi Anchor" },
      { name: "Ga̲", label: "Komal Gandhar", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Mystic Third" },
      { name: "Ma", label: "Shuddha Madhyam", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Dha̲", label: "Komal Dhaivat", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Hypnotic Sixth" },
      { name: "Ni̲", label: "Komal Nishad", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Flat 7th Gateway" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Taar Apex" }
    ],
    modules: [
      {
        id: "malkauns_bandish",
        title: "Traditional Bandish: Man Tarpat Hari Darshan (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 70,
        totalDuration: 13.6,
        description: "Devotional midnight masterwork invoking deep meditative trance.",
        notationData: [
          { id: "mk9", beat: 9, vibhag: "0", start: 0.0, end: 0.85, swara: "Sa", lyric: "Man", hindiLyric: "मन", meaning: "My heart" },
          { id: "mk10", beat: 10, vibhag: "0", start: 0.85, end: 1.7, swara: "Ga̲", lyric: "tar-", hindiLyric: "तर-", meaning: "yearns" },
          { id: "mk11", beat: 11, vibhag: "0", start: 1.7, end: 2.55, swara: "Ma", lyric: "pat", hindiLyric: "पत", meaning: "deeply" },
          { id: "mk12", beat: 12, vibhag: "0", start: 2.55, end: 3.4, swara: "Dha̲", lyric: "ha-", hindiLyric: "ह-", meaning: "for the" },
          { id: "mk13", beat: 13, vibhag: "3", start: 3.4, end: 4.25, swara: "Ni̲", lyric: "ri", hindiLyric: "रि", meaning: "divine" },
          { id: "mk14", beat: 14, vibhag: "3", start: 4.25, end: 5.1, swara: "Ṡ", lyric: "dar-", hindiLyric: "दर-", meaning: "sight" },
          { id: "mk15", beat: 15, vibhag: "3", start: 5.1, end: 5.95, swara: "Ni̲", lyric: "shan", hindiLyric: "शन", meaning: "of God," },
          { id: "mk16", beat: 16, vibhag: "3", start: 5.95, end: 6.8, swara: "Dha̲", lyric: "ko", hindiLyric: "को", meaning: "today," },
          { id: "mk1", beat: 1, vibhag: "X", start: 6.8, end: 7.65, swara: "Ma", lyric: "aaj", hindiLyric: "आज", meaning: "now," },
          { id: "mk2", beat: 2, vibhag: "X", start: 7.65, end: 8.5, swara: "Ga̲", lyric: "mo-", hindiLyric: "मो-", meaning: "grant" },
          { id: "mk3", beat: 3, vibhag: "X", start: 8.5, end: 9.35, swara: "Sa", lyric: "re", hindiLyric: "रे", meaning: "me" },
          { id: "mk4", beat: 4, vibhag: "X", start: 9.35, end: 10.2, swara: "‘Ni̲", lyric: "pra-", hindiLyric: "प्र-", meaning: "thy" },
          { id: "mk5", beat: 5, vibhag: "2", start: 10.2, end: 11.05, swara: "‘Dha̲", lyric: "bhu", hindiLyric: "भु", meaning: "grace," },
          { id: "mk6", beat: 6, vibhag: "2", start: 11.05, end: 11.9, swara: "‘Ni̲", lyric: "ki-", hindiLyric: "कि-", meaning: "shower" },
          { id: "mk7", beat: 7, vibhag: "2", start: 11.9, end: 12.75, swara: "Sa", lyric: "pa", hindiLyric: "पा", meaning: "mercy" },
          { id: "mk8", beat: 8, vibhag: "2", start: 12.75, end: 13.6, swara: "Ma", lyric: "kripa", hindiLyric: "कृपा", meaning: "on me." }
        ]
      }
    ]
  },

  jaunpuri: {
    id: "jaunpuri",
    name: "Raag Jaunpuri",
    hindiName: "राग जौनपुरी",
    thaat: "Asavari",
    jati: "Shadav - Sampurna",
    vadi: "Dha̲ (Komal Dhaivat)",
    samvadi: "Ga̲ (Komal Gandhar)",
    timeDisplay: "Late Morning (2nd Prahar, 9:00 AM – 12:00 PM)",
    aroha: "Sa Re Ma Pa Dha̲ Ni̲ Ṡ",
    arohaSimple: "Sa Re Ma Pa Dha(k) Ni(k) Sa’",
    avroha: "Ṡ Ni̲ Dha̲ Pa, Ma Ga̲ Re Sa",
    avrohaSimple: "Sa’ Ni(k) Dha(k) Pa, Ma Ga(k) Re Sa",
    pakad: "Ma Pa Dha̲ Ni̲ Dha̲ Pa, Ma Ga̲ Re Sa",
    rasa: "Karuna (Tender Pathos) & Bhakti (Morning Devotion)",
    introduction: "Named after the historic Jaunpur Sultanate, celebrated for its bright soaring flight on Re and Ma while touching tender komal notes as midday draws near.",
    swaras: [
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Base Drone" },
      { name: "Re", label: "Shuddha Re", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Bright Step" },
      { name: "Ga̲", label: "Komal Ga", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: true, role: "Samvadi (Queen)" },
      { name: "Ma", label: "Shuddha Ma", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Ascending Pivot" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Pillar Swara" },
      { name: "Dha̲", label: "Komal Dha", octave: "madhya", isTeevra: false, isKomal: true, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Ni̲", label: "Komal Ni", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Taar Approach" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "High Apex" }
    ],
    modules: [
      {
        id: "jaunpuri_bandish",
        title: "Traditional Bandish: Baje Re Muraliya (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 76,
        totalDuration: 12.6,
        description: "Joyful late morning devotional bandish.",
        notationData: [
          { id: "jp9", beat: 9, vibhag: "0", start: 0.0, end: 0.79, swara: "Ma", lyric: "Baa-", hindiLyric: "बा-", meaning: "Plays..." },
          { id: "jp10", beat: 10, vibhag: "0", start: 0.79, end: 1.58, swara: "Pa", lyric: "je", hindiLyric: "जे", meaning: "...the flute," },
          { id: "jp11", beat: 11, vibhag: "0", start: 1.58, end: 2.37, swara: "Dha̲", lyric: "re", hindiLyric: "रे", meaning: "sweetly," },
          { id: "jp12", beat: 12, vibhag: "0", start: 2.37, end: 3.16, swara: "Ni̲", lyric: "mu-", hindiLyric: "मु-", meaning: "enchanting" },
          { id: "jp13", beat: 13, vibhag: "3", start: 3.16, end: 3.95, swara: "Ṡ", lyric: "ra-", hindiLyric: "र-", meaning: "flute" },
          { id: "jp14", beat: 14, vibhag: "3", start: 3.95, end: 4.74, swara: "Ni̲", lyric: "li-", hindiLyric: "ली-", meaning: "melodies" },
          { id: "jp15", beat: 15, vibhag: "3", start: 4.74, end: 5.53, swara: "Dha̲", lyric: "ya", hindiLyric: "या", meaning: "ringing," },
          { id: "jp16", beat: 16, vibhag: "3", start: 5.53, end: 6.32, swara: "Pa", lyric: "re", hindiLyric: "रे", meaning: "in the grove," },
          { id: "jp1", beat: 1, vibhag: "X", start: 6.32, end: 7.11, swara: "Dha̲", lyric: "dhu-", hindiLyric: "धु-", meaning: "sweet" },
          { id: "jp2", beat: 2, vibhag: "X", start: 7.11, end: 7.9, swara: "Pa", lyric: "na", hindiLyric: "न", meaning: "tunes" },
          { id: "jp3", beat: 3, vibhag: "X", start: 7.9, end: 8.69, swara: "Ma", lyric: "su-", hindiLyric: "सु-", meaning: "hearing" },
          { id: "jp4", beat: 4, vibhag: "X", start: 8.69, end: 9.48, swara: "Ga̲", lyric: "ni", hindiLyric: "नि", meaning: "this," },
          { id: "jp5", beat: 5, vibhag: "2", start: 9.48, end: 10.27, swara: "Re", lyric: "mo-", hindiLyric: "मो-", meaning: "my soul" },
          { id: "jp6", beat: 6, vibhag: "2", start: 10.27, end: 11.06, swara: "Sa", lyric: "he", hindiLyric: "हे", meaning: "is charmed," },
          { id: "jp7", beat: 7, vibhag: "2", start: 11.06, end: 11.85, swara: "Re", lyric: "pra-", hindiLyric: "प्र-", meaning: "oh lord" },
          { id: "jp8", beat: 8, vibhag: "2", start: 11.85, end: 12.6, swara: "Ma", lyric: "bhu", hindiLyric: "भु", meaning: "Krishna." }
        ]
      }
    ]
  },

  desh: {
    id: "desh",
    name: "Raag Desh",
    hindiName: "राग देश",
    thaat: "Khamaj",
    jati: "Audav - Sampurna",
    vadi: "Re (Rishabh)",
    samvadi: "Pa (Pancham)",
    timeDisplay: "2nd Prahar of Night (9:00 PM – 12:00 AM) & Monsoon",
    aroha: "Sa Re Ma Pa Ni Ṡ",
    arohaSimple: "Sa Re Ma Pa Ni Sa’",
    avroha: "Ṡ Ni̲ Dha Pa, Ma Ga Re, ‘Ni Sa",
    avrohaSimple: "Sa’ Ni(k) Dha Pa, Ma Ga Re, ‘Ni Sa",
    pakad: "Re Ma Pa Ni Ṡ, Re’ ‘Ni Dha Pa, Ma Ga Re",
    rasa: "Deshbhakti (Patriotism), Joy & Monsoon Yearning",
    introduction: "The musical heartbeat of India, celebrated immortal in Vande Mataram. Famous for using Shuddha Ni in ascent and sweet Komal Ni in descent.",
    swaras: [
      { name: "‘Ni", label: "Mandra Shuddha Ni", octave: "mandra", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Lower Anchor" },
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Root" },
      { name: "Re", label: "Shuddha Re", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Ga", label: "Shuddha Ga (Descent)", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Descent Resting" },
      { name: "Ma", label: "Shuddha Ma", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Soaring Note" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi (Queen)" },
      { name: "Dha", label: "Shuddha Dha (Descent)", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Descent Step" },
      { name: "Ni̲", label: "Komal Ni (Descent)", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Komal Flavor" },
      { name: "Ni", label: "Shuddha Ni (Ascent)", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Ascending Shuddha Ni" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Apex" }
    ],
    modules: [
      {
        id: "desh_bandish",
        title: "Traditional Bandish: Karam Kar Deejo (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 75,
        totalDuration: 12.8,
        description: "Evocative monsoon bandish highlighting dual Nishad phrasing.",
        notationData: [
          { id: "ds9", beat: 9, vibhag: "0", start: 0.0, end: 0.8, swara: "Re", lyric: "Ka-", hindiLyric: "क-", meaning: "Grant..." },
          { id: "ds10", beat: 10, vibhag: "0", start: 0.8, end: 1.6, swara: "Ma", lyric: "ram", hindiLyric: "रम", meaning: "...grace," },
          { id: "ds11", beat: 11, vibhag: "0", start: 1.6, end: 2.4, swara: "Pa", lyric: "kar", hindiLyric: "कर", meaning: "shower" },
          { id: "ds12", beat: 12, vibhag: "0", start: 2.4, end: 3.2, swara: "Ni", lyric: "dee-", hindiLyric: "दी-", meaning: "mercy," },
          { id: "ds13", beat: 13, vibhag: "3", start: 3.2, end: 4.0, swara: "Ṡ", lyric: "jo", hindiLyric: "जो", meaning: "oh lord," },
          { id: "ds14", beat: 14, vibhag: "3", start: 4.0, end: 4.8, swara: "Ni̲", lyric: "mo-", hindiLyric: "मो-", meaning: "upon" },
          { id: "ds15", beat: 15, vibhag: "3", start: 4.8, end: 5.6, swara: "Dha", lyric: "pe", hindiLyric: "पे", meaning: "me," },
          { id: "ds16", beat: 16, vibhag: "3", start: 5.6, end: 6.4, swara: "Pa", lyric: "khwa-", hindiLyric: "ख्वा-", meaning: "oh divine" },
          { id: "ds1", beat: 1, vibhag: "X", start: 6.4, end: 7.2, swara: "Ma", lyric: "ja", hindiLyric: "जा", meaning: "protector," },
          { id: "ds2", beat: 2, vibhag: "X", start: 7.2, end: 8.0, swara: "Ga", lyric: "mo-", hindiLyric: "मो-", meaning: "listen" },
          { id: "ds3", beat: 3, vibhag: "X", start: 8.0, end: 8.8, swara: "Re", lyric: "ri", hindiLyric: "री", meaning: "to my" },
          { id: "ds4", beat: 4, vibhag: "X", start: 8.8, end: 9.6, swara: "Sa", lyric: "ar-", hindiLyric: "अर-", meaning: "earnest" },
          { id: "ds5", beat: 5, vibhag: "2", start: 9.6, end: 10.4, swara: "‘Ni", lyric: "ji", hindiLyric: "जी", meaning: "prayer," },
          { id: "ds6", beat: 6, vibhag: "2", start: 10.4, end: 11.2, swara: "Sa", lyric: "su-", hindiLyric: "सु-", meaning: "hear" },
          { id: "ds7", beat: 7, vibhag: "2", start: 11.2, end: 12.0, swara: "Re", lyric: "ni-", hindiLyric: "नि-", meaning: "my" },
          { id: "ds8", beat: 8, vibhag: "2", start: 12.0, end: 12.8, swara: "Re", lyric: "ye", hindiLyric: "ये", meaning: "cry." }
        ]
      }
    ]
  },

  bhairavi: {
    id: "bhairavi",
    name: "Raag Bhairavi",
    hindiName: "राग भैरवी",
    thaat: "Bhairavi",
    jati: "Sampurna - Sampurna",
    vadi: "Ma (Madhyam)",
    samvadi: "Sa (Shadja)",
    timeDisplay: "Dawn / Concluding Raag (Universal Concert Finale)",
    aroha: "Sa Re̲ Ga̲ Ma Pa Dha̲ Ni̲ Ṡ",
    arohaSimple: "Sa Re(k) Ga(k) Ma Pa Dha(k) Ni(k) Sa’",
    avroha: "Ṡ Ni̲ Dha̲ Pa Ma Ga̲ Re̲ Sa",
    avrohaSimple: "Sa’ Ni(k) Dha(k) Pa Ma Ga(k) Re(k) Sa",
    pakad: "Ma Ga̲, Sa Re̲ Sa, ‘Dha̲ ‘Ni̲ Sa",
    rasa: "Karuna (Universal Compassion) & Shanta (Peaceful Farewell)",
    introduction: "The queen of Hindustani ragas. Universally performed as the concluding masterpiece of any Indian classical recital. All 4 komal swaras reign supreme.",
    swaras: [
      { name: "‘Dha̲", label: "Mandra Komal Dha", octave: "mandra", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Lower Depth" },
      { name: "‘Ni̲", label: "Mandra Komal Ni", octave: "mandra", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Lower Gateway" },
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi Anchor" },
      { name: "Re̲", label: "Komal Re", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Tender Step" },
      { name: "Ga̲", label: "Komal Ga", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Melancholic Third" },
      { name: "Ma", label: "Shuddha Ma", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Pillar" },
      { name: "Dha̲", label: "Komal Dha", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Flat 6th" },
      { name: "Ni̲", label: "Komal Ni", octave: "madhya", isTeevra: false, isKomal: true, isVadi: false, isSamvadi: false, role: "Flat 7th" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "High Apex" }
    ],
    modules: [
      {
        id: "bhairavi_bandish",
        title: "Traditional Thumri: Babul Mora Naihar Chhooto Jaye",
        subtitle: "Keherwa / Teentaal Laya",
        taal: "Teentaal (16 Beats)",
        bpm: 72,
        totalDuration: 13.3,
        description: "The immortal farewell composition by Nawab Wajid Ali Shah.",
        notationData: [
          { id: "bh9", beat: 9, vibhag: "0", start: 0.0, end: 0.83, swara: "Ma", lyric: "Baa-", hindiLyric: "बा-", meaning: "Father..." },
          { id: "bh10", beat: 10, vibhag: "0", start: 0.83, end: 1.66, swara: "Ga̲", lyric: "bul", hindiLyric: "बुल", meaning: "...beloved," },
          { id: "bh11", beat: 11, vibhag: "0", start: 1.66, end: 2.5, swara: "Sa", lyric: "mo-", hindiLyric: "मो-", meaning: "my" },
          { id: "bh12", beat: 12, vibhag: "0", start: 2.5, end: 3.33, swara: "Re̲", lyric: "ra", hindiLyric: "रा", meaning: "childhood home," },
          { id: "bh13", beat: 13, vibhag: "3", start: 3.33, end: 4.16, swara: "Sa", lyric: "nai-", hindiLyric: "नै-", meaning: "natal" },
          { id: "bh14", beat: 14, vibhag: "3", start: 4.16, end: 5.0, swara: "‘Ni̲", lyric: "har", hindiLyric: "हर", meaning: "nest" },
          { id: "bh15", beat: 15, vibhag: "3", start: 5.0, end: 5.83, swara: "‘Dha̲", lyric: "chhoo-", hindiLyric: "छू-", meaning: "is left" },
          { id: "bh16", beat: 16, vibhag: "3", start: 5.83, end: 6.66, swara: "‘Ni̲", lyric: "to", hindiLyric: "टो", meaning: "behind," },
          { id: "bh1", beat: 1, vibhag: "X", start: 6.66, end: 7.5, swara: "Sa", lyric: "jaaye", hindiLyric: "जाये", meaning: "departed," },
          { id: "bh2", beat: 2, vibhag: "X", start: 7.5, end: 8.33, swara: "Re̲", lyric: "chaar", hindiLyric: "चार", meaning: "four" },
          { id: "bh3", beat: 3, vibhag: "X", start: 8.33, end: 9.16, swara: "Ga̲", lyric: "ka-", hindiLyric: "क-", meaning: "palanquin" },
          { id: "bh4", beat: 4, vibhag: "X", start: 9.16, end: 10.0, swara: "Ma", lyric: "haar", hindiLyric: "हार", meaning: "bearers" },
          { id: "bh5", beat: 5, vibhag: "2", start: 10.0, end: 10.83, swara: "Pa", lyric: "mil", hindiLyric: "मिल", meaning: "gather" },
          { id: "bh6", beat: 6, vibhag: "2", start: 10.83, end: 11.66, swara: "Dha̲", lyric: "do-", hindiLyric: "डो-", meaning: "to carry" },
          { id: "bh7", beat: 7, vibhag: "2", start: 11.66, end: 12.5, swara: "Ni̲", lyric: "li", hindiLyric: "ली", meaning: "the bride" },
          { id: "bh8", beat: 8, vibhag: "2", start: 12.5, end: 13.3, swara: "Ṡ", lyric: "uthaye", hindiLyric: "उठाये", meaning: "away." }
        ]
      }
    ]
  },

  durga: {
    id: "durga",
    name: "Raag Durga",
    hindiName: "राग दुर्गा",
    thaat: "Bilawal",
    jati: "Audav - Audav",
    vadi: "Ma (Madhyam)",
    samvadi: "Sa (Shadja)",
    timeDisplay: "Late Night (2nd Prahar, 9:00 PM – 12:00 AM)",
    aroha: "Sa Re Ma Pa Dha Ṡ",
    arohaSimple: "Sa Re Ma Pa Dha Sa’",
    avroha: "Ṡ Dha Pa Ma Re, ‘Dha Sa",
    avrohaSimple: "Sa’ Dha Pa Ma Re, ‘Dha Sa",
    pakad: "‘Dha Sa Re, Ma Re, Pa Dha Ma, Re ‘Dha Sa",
    rasa: "Veera (Noble Heroism), Joy & Pristine Peace",
    introduction: "A crystalline, pure pentatonic raga omitting both Ga and Ni. It projects innocent courage, noble serenity, and spiritual clarity.",
    swaras: [
      { name: "‘Dha", label: "Mandra Dha", octave: "mandra", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Lower Anchor" },
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi Anchor" },
      { name: "Re", label: "Shuddha Re", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Noble Second" },
      { name: "Ma", label: "Shuddha Ma", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Pure Fifth" },
      { name: "Dha", label: "Shuddha Dha", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Consonant 6th" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Apex" }
    ],
    modules: [
      {
        id: "durga_bandish",
        title: "Traditional Bandish: Sakhi Mori Room Jhoom (Sthayi)",
        subtitle: "Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 75,
        totalDuration: 12.8,
        description: "Pure and joyful pentatonic bandish celebrating the noble rain showers.",
        notationData: [
          { id: "dg9", beat: 9, vibhag: "0", start: 0.0, end: 0.8, swara: "Ma", lyric: "Sa-", hindiLyric: "स-", meaning: "Friend..." },
          { id: "dg10", beat: 10, vibhag: "0", start: 0.8, end: 1.6, swara: "Re", lyric: "khi", hindiLyric: "खी", meaning: "...dear," },
          { id: "dg11", beat: 11, vibhag: "0", start: 1.6, end: 2.4, swara: "‘Dha", lyric: "mo-", hindiLyric: "मो-", meaning: "my" },
          { id: "dg12", beat: 12, vibhag: "0", start: 2.4, end: 3.2, swara: "Sa", lyric: "ri", hindiLyric: "री", meaning: "companion," },
          { id: "dg13", beat: 13, vibhag: "3", start: 3.2, end: 4.0, swara: "Re", lyric: "room", hindiLyric: "रूम", meaning: "gently" },
          { id: "dg14", beat: 14, vibhag: "3", start: 4.0, end: 4.8, swara: "Ma", lyric: "jhoom", hindiLyric: "झूम", meaning: "dancing," },
          { id: "dg15", beat: 15, vibhag: "3", start: 4.8, end: 5.6, swara: "Pa", lyric: "ba-", hindiLyric: "बा-", meaning: "clouds" },
          { id: "dg16", beat: 16, vibhag: "3", start: 5.6, end: 6.4, swara: "Dha", lyric: "dar", hindiLyric: "दर", meaning: "gather," },
          { id: "dg1", beat: 1, vibhag: "X", start: 6.4, end: 7.2, swara: "Ṡ", lyric: "aa-", hindiLyric: "आ-", meaning: "bringing" },
          { id: "dg2", beat: 2, vibhag: "X", start: 7.2, end: 8.0, swara: "Dha", lyric: "ye", hindiLyric: "ये", meaning: "rain," },
          { id: "dg3", beat: 3, vibhag: "X", start: 8.0, end: 8.8, swara: "Pa", lyric: "bar-", hindiLyric: "बर-", meaning: "showers" },
          { id: "dg4", beat: 4, vibhag: "X", start: 8.8, end: 9.6, swara: "Ma", lyric: "san", hindiLyric: "सन", meaning: "fall" },
          { id: "dg5", beat: 5, vibhag: "2", start: 9.6, end: 10.4, swara: "Re", lyric: "laa-", hindiLyric: "ला-", meaning: "upon" },
          { id: "dg6", beat: 6, vibhag: "2", start: 10.4, end: 11.2, swara: "‘Dha", lyric: "ge", hindiLyric: "गे", meaning: "earth," },
          { id: "dg7", beat: 7, vibhag: "2", start: 11.2, end: 12.0, swara: "Sa", lyric: "an-", hindiLyric: "अं-", meaning: "peace" },
          { id: "dg8", beat: 8, vibhag: "2", start: 12.0, end: 12.8, swara: "Re", lyric: "gan", hindiLyric: "गन", meaning: "in courtyard." }
        ]
      }
    ]
  },
  bhupali: {
    id: "bhupali",
    name: "Raag Bhupali",
    hindiName: "राग भूपाली",
    thaat: "Kalyan",
    jati: "Audav - Audav (Pentatonic)",
    vadi: "Ga (Gandhar)",
    samvadi: "Dha (Dhaivat)",
    timeDisplay: "First Prahar of Night (7:00 PM – 10:00 PM)",
    aroha: "Sa Re Ga Pa Dha Ṡ",
    arohaSimple: "Sa Re Ga Pa Dha Sa’",
    avroha: "Ṡ Dha Pa Ga Re Sa",
    avrohaSimple: "Sa’ Dha Pa Ga Re Sa",
    pakad: "Ga Re Sa, ‘Dha Sa Re Ga, Pa Ga, Dha Pa Ga Re Sa",
    rasa: "Bhakti (Deep Devotion), Shanti (Tranquility) & Shringar",
    introduction: "Raag Bhupali (also Bhoopali / Bhoop) is one of the most serene and foundational evening ragas of Hindustani music. Belongs to Kalyan Thaat but employs strictly five shuddha swaras, completely omitting Madhyam (Ma) and Nishad (Ni). Gandhar is its glowing nucleus, sustained with smooth Meend from Pa and Re.",
    youtubeVideoId: "xNxpbMfCSXc",
    youtubeTitle: "Raag Bhupali Theory & Sargam Geet Lesson",
    swaras: [
      { name: "‘Dha", label: "Mandra Dha", octave: "mandra", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Lower Foundation" },
      { name: "Sa", label: "Shadja", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Pillar Tonic" },
      { name: "Re", label: "Shuddha Re", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Ascent Bridge" },
      { name: "Ga", label: "Shuddha Ga", octave: "madhya", isTeevra: false, isKomal: false, isVadi: true, isSamvadi: false, role: "Vadi Swara (King)" },
      { name: "Pa", label: "Pancham", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Resonant 5th" },
      { name: "Dha", label: "Shuddha Dha", octave: "madhya", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: true, role: "Samvadi Swara (Queen)" },
      { name: "Ṡ", label: "Taar Sa", octave: "taar", isTeevra: false, isKomal: false, isVadi: false, isSamvadi: false, role: "Taar Octave Apex" }
    ],
    modules: [
      {
        id: "bhupali_sargam_geet",
        title: "Classical Sargam Geet: Pratham Sur Sadhe (Sthayi)",
        subtitle: "Madhya Laya Teentaal (16 Matras)",
        taal: "Teentaal (16 Beats)",
        bpm: 75,
        totalDuration: 12.8,
        description: "Foundational traditional bandish taught across Gharanas. Begins on beat 9 (Khali) and resolves majestically on Sam on Gandhar.",
        notationData: [
          { id: "bp9", beat: 9, vibhag: "0", start: 0.0, end: 0.8, swara: "Ga", lyric: "Pra-", hindiLyric: "प्र-", meaning: "First..." },
          { id: "bp10", beat: 10, vibhag: "0", start: 0.8, end: 1.6, swara: "Re", lyric: "tham", hindiLyric: "थम", meaning: "...tune" },
          { id: "bp11", beat: 11, vibhag: "0", start: 1.6, end: 2.4, swara: "Sa", lyric: "sur", hindiLyric: "सुर", meaning: "the swaras" },
          { id: "bp12", beat: 12, vibhag: "0", start: 2.4, end: 3.2, swara: "‘Dha", lyric: "sa-", hindiLyric: "सा-", meaning: "master" },
          { id: "bp13", beat: 13, vibhag: "3", start: 3.2, end: 4.0, swara: "Sa", lyric: "dhe", hindiLyric: "धे", meaning: "the pitch," },
          { id: "bp14", beat: 14, vibhag: "3", start: 4.0, end: 4.8, swara: "Re", lyric: "sab", hindiLyric: "सब", meaning: "all" },
          { id: "bp15", beat: 15, vibhag: "3", start: 4.8, end: 5.6, swara: "Ga", lyric: "gu-", hindiLyric: "गु-", meaning: "virtuous" },
          { id: "bp16", beat: 16, vibhag: "3", start: 5.6, end: 6.4, swara: "Pa", lyric: "ni", hindiLyric: "नी", meaning: "masters," },
          { id: "bp1", beat: 1, vibhag: "X", start: 6.4, end: 7.2, swara: "Ga", lyric: "jan", hindiLyric: "जन", meaning: "singers," },
          { id: "bp2", beat: 2, vibhag: "X", start: 7.2, end: 8.0, swara: "Re", lyric: "gaa-", hindiLyric: "गा-", meaning: "singing" },
          { id: "bp3", beat: 3, vibhag: "X", start: 8.0, end: 8.8, swara: "Sa", lyric: "ye", hindiLyric: "ये", meaning: "sweetly" },
          { id: "bp4", beat: 4, vibhag: "X", start: 8.8, end: 9.6, swara: "‘Dha", lyric: "bhoo-", hindiLyric: "भू-", meaning: "Raag" },
          { id: "bp5", beat: 5, vibhag: "2", start: 9.6, end: 10.4, swara: "Sa", lyric: "pa-", hindiLyric: "पा-", meaning: "Bhoopali," },
          { id: "bp6", beat: 6, vibhag: "2", start: 10.4, end: 11.2, swara: "Re", lyric: "li", hindiLyric: "ली", meaning: "melody" },
          { id: "bp7", beat: 7, vibhag: "2", start: 11.2, end: 12.0, swara: "Ga", lyric: "ra-", hindiLyric: "रा-", meaning: "of" },
          { id: "bp8", beat: 8, vibhag: "2", start: 12.0, end: 12.8, swara: "Re", lyric: "ga", hindiLyric: "ग", meaning: "peace." }
        ]
      }
    ]
  }
};
