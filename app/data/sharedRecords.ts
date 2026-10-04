// ============================================================================
//  RECORDS TWO BOARD ARTISTS SHARE, WHERE NOTHING ELSE IN THE DATA SAYS SO
// ============================================================================
//
// A country board (/compare/in/<country>) counts a record ONCE however many of
// its artists are credited on it (Paul, 4 Oct 2026: "South Africa's /compare
// board counts a plaque shared by two artists twice. fix that if it is a bug").
// To do that it has to know when two artists' rows are the same record, and a
// title alone cannot say: "Loml" is two records in TCSN's register (Cheque ft.
// Olamide, and Seyi Vibez's own), and "Alone", "Bounce", "Reason" and "Away"
// are each two or three unrelated songs.
//
// certCountry.ts therefore matches the ARTIST WITH the title. Most shared
// records prove themselves from data already on the rows — a credit string
// naming the other artist (Burna Boy's ledger carries "Wizkid ft. Burna Boy"),
// a title annotation naming them ("Mood (Wizkid ft. BNXN)"), or the same
// sleeve on both rows (every cross-artist cover is checked against Deezer's
// contributor list and pinned in tests/afrobeats.test.ts). The rows below are
// the rest: same title on both boards, no credit field (the board's
// AfroRelease has none), and two different sleeves — so each is listed here
// with the register credit that names both artists, quoted from the sweep
// document it was read in.
//
// Add a row only with a register credit naming BOTH artists. Nothing here
// changes an artist's own line; it only stops a country total counting one
// plaque twice. tests/countrySharedRecords.test.tsx holds every same-title
// collision on every board to one answer: merged on evidence, or listed there
// as two records.
// ============================================================================

export interface SharedRecord {
  /** The title as both boards carry it. */
  title: string;
  /** Board slugs credited on the record — two or more. */
  artists: string[];
  /** The register's own credit line, naming them. */
  credit: string;
  /** Where that credit was read. */
  source: string;
}

export const SHARED_RECORDS: SharedRecord[] = [
  {
    title: "Essence",
    artists: ["wizkid", "tems"],
    credit: "Wizkid feat. Tems",
    source: "RiSA register row, read at its origin host (note above AfroCert in afrobeats.ts); docs/sweeps/wizkid-certifications-v1.md",
  },
  {
    title: "2 Sugar",
    artists: ["wizkid", "ayra-starr"],
    credit: "Wizkid ft. Ayra Starr",
    source: "docs/sweeps/ayra-starr-certifications-v1.md (Music Canada names both; TCSN Platinum)",
  },
  {
    title: "Bad Girl",
    artists: ["wizkid", "asake"],
    credit: "Wizkid ft. Asake",
    source: "docs/sweeps/asake-certifications-v1.md",
  },
  {
    title: "Jogodo",
    artists: ["wizkid", "asake"],
    credit: "Wizkid & Asake",
    source: "docs/sweeps/asake-certifications-v1.md",
  },
  {
    title: "MMS",
    artists: ["asake", "wizkid"],
    credit: "Asake & Wizkid",
    source: "docs/sweeps/asake-certifications-v1.md, docs/sweeps/wizkid-certifications-v1.md",
  },
  {
    title: "Gimme Dat",
    artists: ["ayra-starr", "wizkid"],
    credit: "Ayra Starr & Wizkid",
    source: "docs/sweeps/wizkid-certifications-v1.md",
  },
  {
    title: "Apala Disco",
    artists: ["wizkid", "seyi-vibez"],
    credit: "DJ Tunez ft. Wizkid, Seyi Vibez & Terry Apala",
    source: "docs/sweeps/wizkid-certifications-v1.md, docs/sweeps/seyi-vibez-certifications-v1.md",
  },
  {
    title: "Poe",
    artists: ["bnxn", "ruger"],
    credit: "BNXN & Ruger",
    source: "TCSN, docs/sweeps/ruger-certifications-v1.md",
  },
  {
    title: "Bae Bae",
    artists: ["bnxn", "ruger"],
    credit: "BNXN & Ruger",
    source: "TCSN, docs/sweeps/ruger-certifications-v1.md",
  },
  {
    title: "Romeo Must Die (RMD)",
    artists: ["bnxn", "ruger"],
    credit: "BNXN & Ruger",
    source: "TCSN, docs/sweeps/ruger-certifications-v1.md",
  },
];
