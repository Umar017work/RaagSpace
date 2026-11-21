/**
 * RaagSpace — Comprehensive 20-Alankar Riyaz Curriculum & Thaat Transposition Engine
 * 
 * Sources & Musicological Verification:
 * - Basic Alankars 1–10: Pt. Kuldeep Sagar (Alaap Music Academy, Chennai) [yNZdSURMQAI]
 * - Intermediate Alankars 11–20: Pt. Kuldeep Sagar (Alaap Music Academy, Chennai) [mYjYtOtaXSI]
 * - Pyramid Alankar System: Mandira's Music Academy [6qCozEg8NRA]
 * - Speed & Pitch Accuracy Alankars: Mandira's Music Academy [WHFSmN-brRI]
 * - Daily Alankar Riyaz & Komal Swar Culture: Music Path Online Class [GUo3ILx-LNc, i7ZVdWakJQA, etc.]
 * - 6 Canonical Practice Thaats: Bilawal, Kalyan, Khamaj, Kafi, Asavari, Bhairav
 */

// 6 Canonical Thaats for Alankar Riyaz
export const RIYAZ_THAATS = [
  {
    id: "bilawal",
    name: "Bilawal Thaat",
    hindiName: "बिलावल थाट",
    swaraType: "All Shuddha Swaras (Natural)",
    description: "The baseline Hindustani major scale. All 7 swaras are pure and unaltered.",
    modifications: {},
    youtubeId: "us7116bphmk",
    color: "emerald"
  },
  {
    id: "kalyan",
    name: "Kalyan Thaat",
    hindiName: "कल्याण थाट",
    swaraType: "Teevra Madhyam (॑म)",
    description: "Distinguished by the sharp 4th (Teevra Ma). Replaces Shuddha Ma with Ḿ.",
    modifications: { "Ma": "Ḿ", "म": "म॑" },
    youtubeId: "3ROMYhdPUKI",
    color: "amber"
  },
  {
    id: "khamaj",
    name: "Khamaj Thaat",
    hindiName: "खमाज थाट",
    swaraType: "Komal Nishad (॒नि)",
    description: "Employs Komal Ni in descent (and practice alankars). Replaces Ni with Ni̲.",
    modifications: { "Ni": "Ni̲", "नि": "नि॒" },
    youtubeId: "guZ5r2ujosU",
    color: "blue"
  },
  {
    id: "kafi",
    name: "Kafi Thaat",
    hindiName: "काफी थाट",
    swaraType: "Komal Ga (॒ग) & Komal Ni (॒नि)",
    description: "The spring Dorian mode of Indian music with flat 3rd and flat 7th.",
    modifications: { "Ga": "Ga̲", "ग": "ग॒", "Ni": "Ni̲", "नि": "नि॒" },
    youtubeId: "X8T9k93BIY4",
    color: "purple"
  },
  {
    id: "asavari",
    name: "Asavari Thaat",
    hindiName: "आसावरी थाट",
    swaraType: "Komal Ga (॒ग), Dha (॒ध), Ni (॒नि)",
    description: "Natural minor scale (Aeolian). Employs 3 flat swaras.",
    modifications: { "Ga": "Ga̲", "ग": "ग॒", "Dha": "Dha̲", "ध": "ध॒", "Ni": "Ni̲", "नि": "नि॒" },
    youtubeId: "d8c8cfYEsW8",
    color: "indigo"
  },
  {
    id: "bhairav",
    name: "Bhairav Thaat",
    hindiName: "भैरव थाट",
    swaraType: "Komal Re (॒रे) & Komal Dha (॒ध)",
    description: "The monumental morning scale with flat 2nd and flat 6th.",
    modifications: { "Re": "Re̲", "रे": "रे॒", "Dha": "Dha̲", "ध": "ध॒" },
    youtubeId: "7xfi4IIGjAQ",
    color: "rose"
  }
];

// The 20 Canonical Alankars
export const ALANKARS_20 = [
  // --- 1 to 5: Prarambhik / Foundational ---
  {
    id: "alankar_1",
    number: 1,
    name: "Saral Alankar (Single Swaras)",
    hindiName: "सरल अलंकार (एक-एक स्वर)",
    category: "Basic (1–5)",
    focus: "Breath stability, unwavering pitch center on each note",
    pattern: "1 note per beat (S - R - G - M - P - D - N - Ṡ)",
    aroha: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"],
    arohaHindi: "सा - रे - ग - म - प - ध - नि - सां",
    avrohaHindi: "सां - नि - ध - प - म - ग - रे - सा",
    beats: 8,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_2",
    number: 2,
    name: "Doharav Alankar (Pairs / Doubles)",
    hindiName: "दोहराव अलंकार (दो-दो स्वर)",
    category: "Basic (1–5)",
    focus: "Vocal attack, rapid re-strike of pitch without pitch drift",
    pattern: "2 notes per beat (SS - RR - GG - MM - PP - DD - NN - ṠṠ)",
    aroha: ["Sa", "Sa", "Re", "Re", "Ga", "Ga", "Ma", "Ma", "Pa", "Pa", "Dha", "Dha", "Ni", "Ni", "Ṡ", "Ṡ"],
    avroha: ["Ṡ", "Ṡ", "Ni", "Ni", "Dha", "Dha", "Pa", "Pa", "Ma", "Ma", "Ga", "Ga", "Re", "Re", "Sa", "Sa"],
    arohaHindi: "सा-सा | रे-रे | ग-ग | म-म | प-प | ध-ध | नि-नि | सां-सां",
    avrohaHindi: "सां-सां | नि-नि | ध-ध | प-प | म-म | ग-ग | रे-रे | सा-सा",
    beats: 16,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_3",
    number: 3,
    name: "Tri-Swar Alankar (Triplets)",
    hindiName: "त्रिसप्तक अलंकार (तीन-तीन स्वर)",
    category: "Basic (1–5)",
    focus: "Rhythmic division of 3, abdominal breath pulse",
    pattern: "3 notes per beat (SSS - RRR - GGG - MMM - PPP - DDD - NNN - ṠṠṠ)",
    aroha: ["Sa", "Sa", "Sa", "Re", "Re", "Re", "Ga", "Ga", "Ga", "Ma", "Ma", "Ma", "Pa", "Pa", "Pa", "Dha", "Dha", "Dha", "Ni", "Ni", "Ni", "Ṡ", "Ṡ", "Ṡ"],
    avroha: ["Ṡ", "Ṡ", "Ṡ", "Ni", "Ni", "Ni", "Dha", "Dha", "Dha", "Pa", "Pa", "Pa", "Ma", "Ma", "Ma", "Ga", "Ga", "Ga", "Re", "Re", "Re", "Sa", "Sa", "Sa"],
    arohaHindi: "सासासा | रेरेरे | गगग | ममम | पपप | धधध | निनिनि | सांसांसां",
    avrohaHindi: "सांसांसां | निनिनि | धधध | पपप | ममम | गगग | रेरेरे | सासासा",
    beats: 24,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_4",
    number: 4,
    name: "Tri-Swar Shrinkhala (3-Note Linear Waves)",
    hindiName: "तीन स्वर श्रृंखला",
    category: "Basic (1–5)",
    focus: "Connecting 3 notes smoothly in upward steps",
    pattern: "SRG - RGM - GMP - MPD - PDN - DNṠ",
    aroha: ["Sa", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Pa", "Ma", "Pa", "Dha", "Pa", "Dha", "Ni", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Ni", "Dha", "Pa", "Dha", "Pa", "Ma", "Pa", "Ma", "Ga", "Ma", "Ga", "Re", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-ग | रे-ग-म | ग-म-प | म-प-ध | प-ध-नि | ध-नि-सां",
    avrohaHindi: "सां-नि-ध | नि-ध-प | ध-प-म | प-म-ग | म-ग-रे | ग-रे-सा",
    beats: 18,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_5",
    number: 5,
    name: "Char-Swar Shrinkhala (4-Note Linear Waves)",
    hindiName: "चार स्वर श्रृंखला",
    category: "Basic (1–5)",
    focus: "Building finger and vocal speed across 4 successive swaras",
    pattern: "SRGM - RGMP - GMPD - MPDN - PDNṠ",
    aroha: ["Sa", "Re", "Ga", "Ma", "Re", "Ga", "Ma", "Pa", "Ga", "Ma", "Pa", "Dha", "Ma", "Pa", "Dha", "Ni", "Pa", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Pa", "Ni", "Dha", "Pa", "Ma", "Dha", "Pa", "Ma", "Ga", "Pa", "Ma", "Ga", "Re", "Ma", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-ग-म | रे-ग-म-प | ग-म-प-ध | म-प-ध-नि | प-ध-नि-सां",
    avrohaHindi: "सां-नि-ध-प | नि-ध-प-म | ध-प-म-ग | प-म-ग-रे | म-ग-रे-सा",
    beats: 20,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },

  // --- 6 to 10: Madhyam / Expanding Chains ---
  {
    id: "alankar_6",
    number: 6,
    name: "Panch-Swar Shrinkhala (5-Note Chains)",
    hindiName: "पाँच स्वर श्रृंखला",
    category: "Madhyam (6–10)",
    focus: "Extended phrase breathing and melodic momentum",
    pattern: "SRGMP - RGMPD - GMPDN - MPDNṠ",
    aroha: ["Sa", "Re", "Ga", "Ma", "Pa", "Re", "Ga", "Ma", "Pa", "Dha", "Ga", "Ma", "Pa", "Dha", "Ni", "Ma", "Pa", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Pa", "Ma", "Ni", "Dha", "Pa", "Ma", "Ga", "Dha", "Pa", "Ma", "Ga", "Re", "Pa", "Ma", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-ग-म-प | रे-ग-म-प-ध | ग-म-प-ध-नि | म-प-ध-नि-सां",
    avrohaHindi: "सां-नि-ध-प-म | नि-ध-प-म-ग | ध-प-म-ग-रे | प-म-ग-रे-सा",
    beats: 20,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_7",
    number: 7,
    name: "Shad-Swar Shrinkhala (6-Note Chains)",
    hindiName: "छह स्वर श्रृंखला",
    category: "Madhyam (6–10)",
    focus: "Spanning nearly full octave in one uninterrupted breath",
    pattern: "SRGMPD - RGMPDN - GMPDNṠ",
    aroha: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Ga", "Ma", "Pa", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Pa", "Ma", "Ga", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-ग-म-प-ध | रे-ग-म-प-ध-नि | ग-म-प-ध-नि-सां",
    avrohaHindi: "सां-नि-ध-प-म-ग | नि-ध-प-म-ग-रे | ध-प-म-ग-रे-सा",
    beats: 18,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_8",
    number: 8,
    name: "Sapta-Swar Shrinkhala (Full 7-Note Octave)",
    hindiName: "सप्त स्वर श्रृंखला",
    category: "Madhyam (6–10)",
    focus: "Full saptak ascent from Sa and Re",
    pattern: "SRGMPDN - RGMPDNṠ",
    aroha: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-ग-म-प-ध-नि | रे-ग-म-प-ध-नि-सां",
    avrohaHindi: "सां-नि-ध-प-म-ग-रे | नि-ध-प-म-ग-रे-सा",
    beats: 14,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_9",
    number: 9,
    name: "Chhut Swar (Skipping Thirds / तिहाई फांद)",
    hindiName: "छूट स्वर अलंकार (तृतीय अंतराल)",
    category: "Madhyam (6–10)",
    focus: "Interval leaps (3rds) without glissando distortion",
    pattern: "SG - RM - GP - MD - PN - DṠ",
    aroha: ["Sa", "Ga", "Re", "Ma", "Ga", "Pa", "Ma", "Dha", "Pa", "Ni", "Dha", "Ṡ"],
    avroha: ["Ṡ", "Dha", "Ni", "Pa", "Dha", "Ma", "Pa", "Ga", "Ma", "Re", "Ga", "Sa"],
    arohaHindi: "सा-ग | रे-म | ग-प | म-ध | प-नि | ध-सां",
    avrohaHindi: "सां-ध | नि-प | ध-म | प-ग | म-रे | ग-सा",
    beats: 12,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_10",
    number: 10,
    name: "Vakra Aavartan (Touch & Return)",
    hindiName: "वक्र आवर्तन अलंकार",
    category: "Madhyam (6–10)",
    focus: "Oscillation and rebound around note centers",
    pattern: "SRS - RGR - GMG - MPM - PDP - DND - NṠN - Ṡ",
    aroha: ["Sa", "Re", "Sa", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Pa", "Ma", "Pa", "Dha", "Pa", "Dha", "Ni", "Dha", "Ni", "Ṡ", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Ṡ", "Ni", "Dha", "Ni", "Dha", "Pa", "Dha", "Pa", "Ma", "Pa", "Ma", "Ga", "Ma", "Ga", "Re", "Ga", "Re", "Sa", "Re", "Sa"],
    arohaHindi: "सा-रे-सा | रे-ग-रे | ग-म-ग | म-प-म | प-ध-प | ध-नि-ध | नि-सां-नि | सां",
    avrohaHindi: "सां-नि-सां | नि-ध-नि | ध-प-ध | प-म-प | म-ग-म | ग-रे-ग | रे-सा-रे | सा",
    beats: 22,
    youtubeId: "yNZdSURMQAI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },

  // --- 11 to 15: Vakra & Compound Patterns ---
  {
    id: "alankar_11",
    number: 11,
    name: "Tri-Step Turn (SRGRS)",
    hindiName: "त्रिपद वक्र अलंकार",
    category: "Vakra (11–15)",
    focus: "Turn patterns crucial for classical Chhota Khayal Taans",
    pattern: "SRGRS - RGMRG - GMPMG - MPDPM - PDNPD - DNṠND - Ṡ",
    aroha: ["Sa", "Re", "Ga", "Re", "Sa", "Re", "Ga", "Ma", "Ga", "Re", "Ga", "Ma", "Pa", "Ma", "Ga", "Ma", "Pa", "Dha", "Pa", "Ma", "Pa", "Dha", "Ni", "Dha", "Pa", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Pa", "Dha", "Ni", "Dha", "Pa", "Ma", "Pa", "Dha", "Pa", "Ma", "Ga", "Ma", "Pa", "Ma", "Ga", "Re", "Ga", "Ma", "Ga", "Re", "Sa", "Re", "Ga", "Sa"],
    arohaHindi: "सा-रे-ग-रे-सा | रे-ग-म-ग-रे | ग-म-प-म-ग | म-प-ध-प-म | प-ध-नि-ध-प | ध-नि-सां-नि-ध | सां",
    avrohaHindi: "सां-नि-ध-नि-सां | नि-ध-प-ध-नि | ध-प-म-प-ध | प-म-ग-म-प | म-ग-रे-ग-म | ग-रे-सा-रे-ग | सा",
    beats: 31,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_12",
    number: 12,
    name: "Skipping Return (SGRS)",
    hindiName: "छूट प्रत्यावर्तन अलंकार",
    category: "Vakra (11–15)",
    focus: "Jumping to 3rd then resolving backward into root",
    pattern: "SGRS - RMGR - GPMG - MDPM - PNDP - DṠND - Ṡ",
    aroha: ["Sa", "Ga", "Re", "Sa", "Re", "Ma", "Ga", "Re", "Ga", "Pa", "Ma", "Ga", "Ma", "Dha", "Pa", "Ma", "Pa", "Ni", "Dha", "Pa", "Dha", "Ṡ", "Ni", "Dha", "Ṡ"],
    avroha: ["Ṡ", "Dha", "Ni", "Ṡ", "Ni", "Pa", "Dha", "Ni", "Dha", "Ma", "Pa", "Dha", "Pa", "Ga", "Ma", "Pa", "Ma", "Re", "Ga", "Ma", "Ga", "Sa", "Re", "Ga", "Sa"],
    arohaHindi: "सा-ग-रे-सा | रे-म-ग-रे | ग-प-म-ग | म-ध-प-म | प-नि-ध-प | ध-सां-नि-ध | सां",
    avrohaHindi: "सां-ध-नि-सां | नि-प-ध-नि | ध-म-प-ध | प-ग-म-प | म-रे-ग-म | ग-सा-रे-ग | सा",
    beats: 25,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_13",
    number: 13,
    name: "Char-Swar Vakra (SRGM GRS)",
    hindiName: "चार स्वर वक्र अलंकार",
    category: "Vakra (11–15)",
    focus: "Forward advance of 4, recoil of 3",
    pattern: "SRGM-GRS | RGMP-MGR | GMPD-PMG | MPDN-DPM | PDNṠ-NDP",
    aroha: ["Sa", "Re", "Ga", "Ma", "Ga", "Re", "Sa", "Re", "Ga", "Ma", "Pa", "Ma", "Ga", "Re", "Ga", "Ma", "Pa", "Dha", "Pa", "Ma", "Ga", "Ma", "Pa", "Dha", "Ni", "Dha", "Pa", "Ma", "Pa", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Pa", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Pa", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Pa", "Ma", "Pa", "Dha", "Ni", "Dha", "Pa", "Ma", "Ga", "Ma", "Pa", "Dha", "Pa", "Ma", "Ga", "Re", "Ga", "Ma", "Pa", "Ma", "Ga", "Re", "Sa", "Re", "Ga", "Ma", "Sa"],
    arohaHindi: "सा-रे-ग-म, ग-रे-सा | रे-ग-म-प, म-ग-रे | ग-म-प-ध, प-म-ग | म-प-ध-नि, ध-प-म | प-ध-नि-सां, नि-ध-प | सां",
    avrohaHindi: "सां-नि-ध-प, ध-नि-सां | नि-ध-प-म, प-ध-नि | ध-प-म-ग, म-प-ध | प-म-ग-रे, ग-म-प | म-ग-रे-सा, रे-ग-म | सा",
    beats: 36,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_14",
    number: 14,
    name: "Deergha Swar Riyaz (Sustained Notes)",
    hindiName: "दीर्घ स्वर रियाज़ (आकार अभ्यास)",
    category: "Vakra (11–15)",
    focus: "Tuning resonance in 'Aakaar' (आ-कार) with 4-beat hold per note",
    pattern: "S - - - | R - - - | G - - - | M - - - | P - - - | D - - - | N - - - | Ṡ - - -",
    aroha: ["Sa", "Sa", "Sa", "Sa", "Re", "Re", "Re", "Re", "Ga", "Ga", "Ga", "Ga", "Ma", "Ma", "Ma", "Ma", "Pa", "Pa", "Pa", "Pa", "Dha", "Dha", "Dha", "Dha", "Ni", "Ni", "Ni", "Ni", "Ṡ", "Ṡ", "Ṡ", "Ṡ"],
    avroha: ["Ṡ", "Ṡ", "Ṡ", "Ṡ", "Ni", "Ni", "Ni", "Ni", "Dha", "Dha", "Dha", "Dha", "Pa", "Pa", "Pa", "Pa", "Ma", "Ma", "Ma", "Ma", "Ga", "Ga", "Ga", "Ga", "Re", "Re", "Re", "Re", "Sa", "Sa", "Sa", "Sa"],
    arohaHindi: "सा - - - | रे - - - | ग - - - | म - - - | प - - - | ध - - - | नि - - - | सां - - -",
    avrohaHindi: "सां - - - | नि - - - | ध - - - | प - - - | म - - - | ग - - - | रे - - - | सा - - -",
    beats: 32,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_15",
    number: 15,
    name: "Chhanda Alankar (SRG RS)",
    hindiName: "छन्द अलंकार",
    category: "Vakra (11–15)",
    focus: "3 forward, 2 recoil pattern creating rhythmic syncopation",
    pattern: "SRG RS - RGM GR - GMP MG - MPD PM - PDN DP - DNṠ ND - Ṡ",
    aroha: ["Sa", "Re", "Ga", "Re", "Sa", "Re", "Ga", "Ma", "Ga", "Re", "Ga", "Ma", "Pa", "Ma", "Ga", "Ma", "Pa", "Dha", "Pa", "Ma", "Pa", "Dha", "Ni", "Dha", "Pa", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Pa", "Dha", "Ni", "Dha", "Pa", "Ma", "Pa", "Dha", "Pa", "Ma", "Ga", "Ma", "Pa", "Ma", "Ga", "Re", "Ga", "Ma", "Ga", "Re", "Sa", "Re", "Ga", "Sa"],
    arohaHindi: "सा-रे-ग, रे-सा | रे-ग-म, ग-रे | ग-म-प, म-ग | म-प-ध, प-म | प-ध-नि, ध-प | ध-नि-सां, नि-ध | सां",
    avrohaHindi: "सां-नि-ध, नि-सां | नि-ध-प, ध-नि | ध-प-म, प-ध | प-म-ग, म-प | म-ग-रे, ग-म | ग-रे-सा, रे-ग | सा",
    beats: 31,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },

  // --- 16 to 20: Pitch Accuracy & Velocity ---
  {
    id: "alankar_16",
    number: 16,
    name: "Chhut Swar Double (SG RM GP)",
    hindiName: "छूट स्वर युग्म अलंकार",
    category: "Velocity (16–20)",
    focus: "High-speed interval accuracy across the middle octave",
    pattern: "SGRM - RMPD - GMPN - MPDṠ",
    aroha: ["Sa", "Ga", "Re", "Ma", "Re", "Ma", "Pa", "Dha", "Ga", "Ma", "Pa", "Ni", "Ma", "Pa", "Dha", "Ṡ"],
    avroha: ["Ṡ", "Dha", "Ni", "Pa", "Ni", "Pa", "Ma", "Ga", "Dha", "Pa", "Ma", "Re", "Pa", "Ma", "Ga", "Sa"],
    arohaHindi: "सा-ग-रे-म | रे-म-प-ध | ग-म-प-नि | म-प-ध-सां",
    avrohaHindi: "सां-ध-नि-प | नि-प-म-ग | ध-प-म-रे | प-म-ग-सा",
    beats: 16,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_17",
    number: 17,
    name: "Mandra Saptak Anchor ('Ni Pivot)",
    hindiName: "मन्द्र सप्तक आधार अलंकार",
    category: "Velocity (16–20)",
    focus: "Strengthening Mandra saptak (lower chest voice register)",
    pattern: "'N-S-R | S-R-G | R-G-M | G-M-P | M-P-D | P-D-N | D-N-Ṡ",
    aroha: ["‘Ni", "Sa", "Re", "Sa", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Pa", "Ma", "Pa", "Dha", "Pa", "Dha", "Ni", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Dha", "Ni", "Dha", "Pa", "Dha", "Pa", "Ma", "Pa", "Ma", "Ga", "Ma", "Ga", "Re", "Ga", "Re", "Sa", "Re", "Sa", "‘Ni", "Sa"],
    arohaHindi: "‘नि-सा-रे | सा-रे-ग | रे-ग-म | ग-म-प | म-प-ध | प-ध-नि | ध-नि-सां",
    avrohaHindi: "सां-नि-ध | नि-ध-प | ध-प-म | प-म-ग | म-ग-रे | ग-रे-सा | रे-सा-‘नि | सा",
    beats: 22,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_18",
    number: 18,
    name: "Saptak Fand (Fifth Leap / SP RD GN)",
    hindiName: "सप्तक फांद (पंचम छलांग)",
    category: "Velocity (16–20)",
    focus: "Wide harmonic interval leaping (4ths and 5ths) without straining",
    pattern: "SP - RD - GN - MṠ",
    aroha: ["Sa", "Pa", "Re", "Dha", "Ga", "Ni", "Ma", "Ṡ"],
    avroha: ["Ṡ", "Ma", "Ni", "Ga", "Dha", "Re", "Pa", "Sa"],
    arohaHindi: "सा-प | रे-ध | ग-नि | म-सां",
    avrohaHindi: "सां-म | नि-ग | ध-रे | प-सा",
    beats: 8,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_19",
    number: 19,
    name: "Wave Alternation (SRSRG RGRGM)",
    hindiName: "तरंग युगल अलंकार",
    category: "Velocity (16–20)",
    focus: "Rapid agility and vocal control in fast Drut laya",
    pattern: "SRSRG - RGRGM - GMGMP - MPMPD - PDPDN - DNDNṠ",
    aroha: ["Sa", "Re", "Sa", "Re", "Ga", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Ga", "Ma", "Pa", "Ma", "Pa", "Ma", "Pa", "Dha", "Pa", "Dha", "Pa", "Dha", "Ni", "Dha", "Ni", "Dha", "Ni", "Ṡ"],
    avroha: ["Ṡ", "Ni", "Ṡ", "Ni", "Dha", "Ni", "Dha", "Ni", "Dha", "Pa", "Dha", "Pa", "Dha", "Pa", "Ma", "Pa", "Ma", "Pa", "Ma", "Ga", "Ma", "Ga", "Ma", "Ga", "Re", "Ga", "Re", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-सा-रे-ग | रे-ग-रे-ग-म | ग-म-ग-म-प | म-प-म-प-ध | प-ध-प-ध-नि | ध-नि-ध-नि-सां",
    avrohaHindi: "सां-नि-सां-नि-ध | नि-ध-नि-ध-प | ध-प-ध-प-म | प-म-प-म-ग | म-ग-म-ग-रे | ग-रे-ग-रे-सा",
    beats: 30,
    youtubeId: "mYjYtOtaXSI",
    instructor: "Pt. Kuldeep Sagar (Alaap Music Academy)"
  },
  {
    id: "alankar_20",
    number: 20,
    name: "Drut Super Accuracy Palta (SRGP RGMD)",
    hindiName: "द्रुत स्वर सटीकता पल्टा",
    category: "Velocity (16–20)",
    focus: "Speeding up pitch accuracy (20 New Alankars Mandira's Academy)",
    pattern: "SRGP - RGMD - GMPN - MPDṠ",
    aroha: ["Sa", "Re", "Ga", "Pa", "Re", "Ga", "Ma", "Dha", "Ga", "Ma", "Pa", "Ni", "Ma", "Pa", "Dha", "Ṡ"],
    avroha: ["Ṡ", "Dha", "Pa", "Ma", "Ni", "Pa", "Ma", "Ga", "Dha", "Ma", "Ga", "Re", "Pa", "Ga", "Re", "Sa"],
    arohaHindi: "सा-रे-ग-प | रे-ग-म-ध | ग-म-प-नि | म-प-ध-सां",
    avrohaHindi: "सां-ध-प-म | नि-प-म-ग | ध-म-ग-रे | प-ग-रे-सा",
    beats: 16,
    youtubeId: "WHFSmN-brRI",
    instructor: "Mandira's Music Academy"
  }
];

// Pyramid Alankar Practice (from Mandira's Academy [6qCozEg8NRA])
export const PYRAMID_ALANKAR = {
  title: "Pyramid Alankar (शिखर अलंकार रियाज़)",
  subtitle: "Progressive lung capacity & interval expansion from Sa to Taar Sa",
  youtubeId: "6qCozEg8NRA",
  instructor: "Mandira’s Music Academy",
  steps: [
    { level: 1, notes: ["Sa"], devanagari: "सा" },
    { level: 2, notes: ["Sa", "Re", "Sa"], devanagari: "सा रे सा" },
    { level: 3, notes: ["Sa", "Re", "Ga", "Re", "Sa"], devanagari: "सा रे ग रे सा" },
    { level: 4, notes: ["Sa", "Re", "Ga", "Ma", "Ga", "Re", "Sa"], devanagari: "सा रे ग म ग रे सा" },
    { level: 5, notes: ["Sa", "Re", "Ga", "Ma", "Pa", "Ma", "Ga", "Re", "Sa"], devanagari: "सा रे ग म प म ग रे सा" },
    { level: 6, notes: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"], devanagari: "सा रे ग म प ध प म ग रे सा" },
    { level: 7, notes: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"], devanagari: "सा रे ग म प ध नि ध प म ग रे सा" },
    { level: 8, notes: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Ṡ", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"], devanagari: "सा रे ग म प ध नि सां नि ध प म ग रे सा" }
  ]
};

// Komal Swar Riyaz Training Modules (from Music Path [i7ZVdWakJQA, Nf8eOPJT9Wk, ZJFmcxm7iaY])
export const KOMAL_SWAR_MODULES = [
  {
    id: "komal_re",
    name: "Komal Rishabh Precision (॒रे)",
    hindiName: "कोमल ऋषभ रियाज़",
    interval: "Minor 2nd (1 semitone above Sa)",
    drillPhrase: ["Sa", "Re̲", "Sa", "‘Ni", "Sa", "Re̲", "Ga", "Re̲", "Sa"],
    drillHindi: "सा - रे॒ - सा - ‘नि - सा - रे॒ - ग - रे॒ - सा",
    contrast: "Compare Shuddha Re (Bright, 2 semitones) vs Komal Re (Deep, 1 semitone)",
    youtubeId: "i7ZVdWakJQA",
    instructor: "Music Path Online Class",
    keyTip: "Never slide too low towards Sa. Keep Re̲ crisp, poignant and centered."
  },
  {
    id: "komal_ga",
    name: "Komal Gandhar Precision (॒ग)",
    hindiName: "कोमल गान्धार रियाज़",
    interval: "Minor 3rd (3 semitones above Sa)",
    drillPhrase: ["Sa", "Re", "Ga̲", "Ma", "Ga̲", "Re", "Sa"],
    drillHindi: "सा - रे - ग॒ - म - ग॒ - रे - सा",
    contrast: "Compare Shuddha Ga (Joyful Kalyan/Bilawal) vs Komal Ga (Pensive Kafi/Asavari)",
    youtubeId: "Nf8eOPJT9Wk",
    instructor: "Music Path Online Class",
    keyTip: "Feel the sweet melancholic pull of Ga̲ against Shadja."
  },
  {
    id: "teevra_ma",
    name: "Teevra Madhyam Precision (॑म)",
    hindiName: "तीव्र मध्यम रियाज़",
    interval: "Augmented 4th / Tritone (6 semitones above Sa)",
    drillPhrase: ["‘Ni", "Re", "Ga", "Ḿ", "Pa", "Ḿ", "Ga", "Re", "Sa"],
    drillHindi: "‘नि - रे - ग - म॑ - प - म॑ - ग - रे - सा",
    contrast: "Compare Shuddha Ma (Consonant 4th) vs Teevra Ma (Ascending sharp tension)",
    youtubeId: "3ROMYhdPUKI",
    instructor: "Music Path Online Class",
    keyTip: "Teevra Ma pulls strongly upwards towards Pancham. Do not let it drop flat."
  },
  {
    id: "komal_dha",
    name: "Komal Dhaivat Precision (॒ध)",
    hindiName: "कोमल धैवत रियाज़",
    interval: "Minor 6th (8 semitones above Sa)",
    drillPhrase: ["Pa", "Dha̲", "Pa", "Ma", "Ga", "Ma", "Dha̲", "Pa"],
    drillHindi: "प - ध॒ - प - म - ग - म - ध॒ - प",
    contrast: "Compare Shuddha Dha (Majestic 9 semitones) vs Komal Dha (Dawn/Bhairav 8 semitones)",
    youtubeId: "7xfi4IIGjAQ",
    instructor: "Music Path Online Class",
    keyTip: "Komal Dhaivat in Bhairav carries a slow, meditative oscillation (Andolan)."
  },
  {
    id: "komal_ni",
    name: "Komal Nishad Precision (॒नि)",
    hindiName: "कोमल निषाद रियाज़",
    interval: "Minor 7th (10 semitones above Sa)",
    drillPhrase: ["Pa", "Dha", "Ni̲", "Dha", "Pa", "Ma", "Pa"],
    drillHindi: "प - ध - नि॒ - ध - प - म - प",
    contrast: "Compare Shuddha Ni (Leading tone to Taar Sa) vs Komal Ni (Warm Khamaj/Kafi descent)",
    youtubeId: "guZ5r2ujosU",
    instructor: "Music Path Online Class",
    keyTip: "Komal Ni releases emotional tension as it descends gently to Dhaivat."
  }
];

// Helper to transpose any alankar's swaras into any selected Thaat
export function transposeAlankarToThaat(alankar, thaatId) {
  const thaat = RIYAZ_THAATS.find(t => t.id === thaatId) || RIYAZ_THAATS[0];
  if (!thaat || Object.keys(thaat.modifications).length === 0) {
    return alankar; // Bilawal / original
  }

  const mapSwara = (s) => thaat.modifications[s] || s;

  return {
    ...alankar,
    aroha: alankar.aroha.map(mapSwara),
    avroha: alankar.avroha.map(mapSwara),
    currentThaat: thaat.name
  };
}
