// ============================================================
//  OFFICIAL CHART ENTRIES — peak positions per country.
//
//  One entry per country, using that country's PRINCIPAL national
//  singles/albums chart (Billboard Hot 100 / 200, the Official Charts
//  Company, SNEP, GfK, ARIA, RMNZ, IRMA, Ultratop, Hung Medien, FIMI,
//  PROMUSICAE, AFP, TurnTable, TOSAC, Billboard Global 200, etc.).
//
//  Excluded by design: genre/component charts (Afrobeats, Hip-Hop/R&B),
//  airplay-only charts, and "extension" charts that sit below the main
//  chart (US "Bubbling Under", NZ "Hot Singles", NL "Single Tip").
//  Where a country runs two main charts (Belgium = Flanders + Wallonia,
//  Netherlands = Single Top 100 + Top 40) the better peak is shown.
//
//  Cross-checked against each chart body's data via the songs' cited
//  tables, June 2026. peak = highest position reached so far.
// ============================================================

export interface ChartCountry {
  name: string;
  flag: string;
  body: string;
}

export const CHART_COUNTRIES: Record<string, ChartCountry> = {
  US: { name: "United States", flag: "🇺🇸", body: "Billboard Hot 100 / 200" },
  UK: { name: "United Kingdom", flag: "🇬🇧", body: "Official Charts Company" },
  IE: { name: "Ireland", flag: "🇮🇪", body: "IRMA" },
  CA: { name: "Canada", flag: "🇨🇦", body: "Billboard Canada" },
  AU: { name: "Australia", flag: "🇦🇺", body: "ARIA" },
  NZ: { name: "New Zealand", flag: "🇳🇿", body: "Recorded Music NZ" },
  FR: { name: "France", flag: "🇫🇷", body: "SNEP" },
  DE: { name: "Germany", flag: "🇩🇪", body: "GfK / Offizielle Charts" },
  NL: { name: "Netherlands", flag: "🇳🇱", body: "Dutch Charts" },
  SE: { name: "Sweden", flag: "🇸🇪", body: "Sverigetopplistan" },
  BE: { name: "Belgium", flag: "🇧🇪", body: "Ultratop" },
  CH: { name: "Switzerland", flag: "🇨🇭", body: "Schweizer Hitparade" },
  AT: { name: "Austria", flag: "🇦🇹", body: "Ö3 Austria Top 40" },
  DK: { name: "Denmark", flag: "🇩🇰", body: "Hitlisten" },
  IT: { name: "Italy", flag: "🇮🇹", body: "FIMI" },
  ES: { name: "Spain", flag: "🇪🇸", body: "PROMUSICAE" },
  PT: { name: "Portugal", flag: "🇵🇹", body: "AFP" },
  FI: { name: "Finland", flag: "🇫🇮", body: "Suomen virallinen lista" },
  HU: { name: "Hungary", flag: "🇭🇺", body: "MAHASZ Single Top 40" },
  GR: { name: "Greece", flag: "🇬🇷", body: "IFPI Greece" },
  HK: { name: "Hong Kong", flag: "🇭🇰", body: "Billboard Hong Kong Songs" },
  IN: { name: "India", flag: "🇮🇳", body: "IMI International Top 20" },
  IL: { name: "Israel", flag: "🇮🇱", body: "Mako Hit List (official singles chart)" },
  IS: { name: "Iceland", flag: "🇮🇸", body: "Tónlistinn" },
  AE: { name: "United Arab Emirates", flag: "🇦🇪", body: "The Official UAE Chart" },
  SA: { name: "Saudi Arabia", flag: "🇸🇦", body: "The Official Saudi Arabia Chart" },
  LB: { name: "Lebanon", flag: "🇱🇧", body: "The Official Lebanese Top 20" },
  EG: { name: "Egypt", flag: "🇪🇬", body: "Official Egypt Top 20 (MENA Chart)" },
  RO: { name: "Romania", flag: "🇷🇴", body: "Billboard Romania Songs" },
  SK: { name: "Slovakia", flag: "🇸🇰", body: "Singles Digitál Top 100" },
  CZ: { name: "Czech Republic", flag: "🇨🇿", body: "ČNS IFPI" },
  LT: { name: "Lithuania", flag: "🇱🇹", body: "AGATA" },
  LU: { name: "Luxembourg", flag: "🇱🇺", body: "Billboard Luxembourg Songs" },
  NO: { name: "Norway", flag: "🇳🇴", body: "VG-lista" },
  PL: { name: "Poland", flag: "🇵🇱", body: "ZPAV Streaming Top 100" },
  NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable Top 100" },
  ZA: { name: "South Africa", flag: "🇿🇦", body: "The Official SA Charts" },
  SR: { name: "Suriname", flag: "🇸🇷", body: "Nationale Top 40" },
  AR: { name: "Argentina", flag: "🇦🇷", body: "Billboard Argentina Hot 100" },
  PA: { name: "Panama", flag: "🇵🇦", body: "PRODUCE International Chart" },
  CO: { name: "Colombia", flag: "🇨🇴", body: "Billboard Colombia Hot 100" },
  EC: { name: "Ecuador", flag: "🇪🇨", body: "Billboard Ecuador Hot 100" },
  CR: { name: "Costa Rica", flag: "🇨🇷", body: "FONÓTICA Streaming" },
  VN: { name: "Vietnam", flag: "🇻🇳", body: "Billboard Vietnam Hot 100" },
  BR: { name: "Brazil", flag: "🇧🇷", body: "Billboard Brasil Hot 100" },
  JP: { name: "Japan", flag: "🇯🇵", body: "Billboard Japan Hot 100" },
  SG: { name: "Singapore", flag: "🇸🇬", body: "RIAS Top Charts" },
  MY: { name: "Malaysia", flag: "🇲🇾", body: "RIM Charts (Intl. streaming)" },
  LV: { name: "Latvia", flag: "🇱🇻", body: "Latvia Streaming Chart" },
  GLB: { name: "Global", flag: "🌍", body: "Billboard Global 200" },
  GLBX: { name: "Global (excl. US)", flag: "🌐", body: "Billboard Global Excl. US" },
};

export interface ChartEntry {
  c: string;
  peak: number;
  note?: string;
}

export interface ChartRelease {
  title: string;
  credit?: string;
  year: number;
  entries: ChartEntry[];
  note?: string; // optional footnote under the release (e.g. multi-territory charts)
}

export const albumCharts: ChartRelease[] = [
  { title: "I Told Them...", year: 2023, entries: [
    { c: "UK", peak: 1 }, { c: "NL", peak: 2 }, { c: "FR", peak: 6 }, { c: "SE", peak: 7 },
    { c: "CA", peak: 18 }, { c: "BE", peak: 20 }, { c: "IE", peak: 25 }, { c: "US", peak: 31 },
    { c: "DE", peak: 46 }, { c: "AU", peak: 56 },
  ] },
  { title: "Love, Damini", year: 2022, entries: [
    { c: "UK", peak: 2 }, { c: "NL", peak: 2 }, { c: "CA", peak: 6 }, { c: "SE", peak: 12 },
    { c: "US", peak: 14 }, { c: "FR", peak: 17 }, { c: "IE", peak: 23 }, { c: "BE", peak: 24 },
    { c: "DE", peak: 61 },
  ] },
  { title: "Twice as Tall", year: 2020, entries: [
    { c: "NL", peak: 10 }, { c: "UK", peak: 11 }, { c: "CH", peak: 12 }, { c: "CA", peak: 19 }, { c: "BE", peak: 22 },
    { c: "FR", peak: 29 }, { c: "IE", peak: 31 }, { c: "NO", peak: 34 }, { c: "SE", peak: 47 }, { c: "US", peak: 54 },
    { c: "AT", peak: 69 },
  ] },
  { title: "African Giant", year: 2019, entries: [
    { c: "IE", peak: 12 }, { c: "UK", peak: 16 }, { c: "CA", peak: 33 }, { c: "FR", peak: 54 },
    { c: "BE", peak: 58 }, { c: "DE", peak: 80 }, { c: "US", peak: 104 },
  ] },
  { title: "No Sign of Weakness", year: 2025, entries: [
    { c: "UK", peak: 6 }, { c: "NL", peak: 57 }, { c: "FR", peak: 58 }, { c: "CA", peak: 65 },
    { c: "BE", peak: 136 }, { c: "US", peak: 200 },
  ] },
];

export const singleCharts: ChartRelease[] = [
  { title: "Last Last", year: 2022, entries: [
    { c: "ZA", peak: 1 }, { c: "NG", peak: 2 }, { c: "UK", peak: 4 }, { c: "NZ", peak: 12 },
    { c: "NL", peak: 14 }, { c: "SE", peak: 21 }, { c: "FR", peak: 23 }, { c: "IE", peak: 27 },
    { c: "CA", peak: 30 }, { c: "CH", peak: 38 }, { c: "GLB", peak: 39 }, { c: "US", peak: 44 },
    { c: "BE", peak: 49 }, { c: "AU", peak: 79 }, { c: "PT", peak: 142 },
  ] },
  { title: "City Boys", year: 2023, entries: [
    { c: "NG", peak: 2 }, { c: "NL", peak: 14 }, { c: "UK", peak: 14 }, { c: "CH", peak: 24 },
    { c: "FR", peak: 27 }, { c: "IE", peak: 44 }, { c: "SE", peak: 58 }, { c: "CA", peak: 70 },
    { c: "GLB", peak: 143 },
  ] },
  { title: "For My Hand", credit: "feat. Ed Sheeran", year: 2022, entries: [
    { c: "NG", peak: 1 }, { c: "SR", peak: 3 }, { c: "ZA", peak: 4 }, { c: "UK", peak: 18 }, { c: "DK", peak: 23 },
    { c: "NL", peak: 25 }, { c: "SE", peak: 38 }, { c: "IE", peak: 47 }, { c: "GLB", peak: 52 },
    { c: "CH", peak: 59 }, { c: "CA", peak: 63 }, { c: "FR", peak: 173 },
  ] },
  { title: "Cheat on Me", credit: "feat. Dave", year: 2023, entries: [
    { c: "UK", peak: 19 }, { c: "IE", peak: 42 }, { c: "FR", peak: 109 }, { c: "GLB", peak: 194 },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, entries: [
    { c: "UK", peak: 36 }, { c: "NZ", peak: 36 }, { c: "US", peak: 80 },
  ] },
  { title: "Big 7", year: 2023, entries: [{ c: "UK", peak: 53 }] },
  { title: "Real Life", credit: "feat. Stormzy", year: 2020, entries: [{ c: "UK", peak: 54 }] },
  { title: "On the Low", year: 2018, entries: [
    { c: "FR", peak: 78 }, { c: "NL", peak: 97 },
  ] },
  { title: "Kilometre", year: 2021, entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 84 }] },
  { title: "TaTaTa", credit: "feat. Travis Scott", year: 2025, entries: [{ c: "UK", peak: 84 }] },
  { title: "Higher", year: 2024, entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 99 }] },
  { title: "Love", year: 2025, entries: [{ c: "NG", peak: 1 }] },
];

export const featureCharts: ChartRelease[] = [
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", year: 2019, entries: [
    { c: "UK", peak: 1 }, { c: "IE", peak: 2 }, { c: "DK", peak: 11 }, { c: "NL", peak: 25 },
    { c: "CH", peak: 27 }, { c: "SE", peak: 30 }, { c: "AU", peak: 40 }, { c: "AT", peak: 57 },
    { c: "CA", peak: 82 },
  ] },
  { title: "Jerusalema (Remix)", credit: "Master KG ft. Nomcebo Zikode & Burna Boy", year: 2020, entries: [
    { c: "BE", peak: 1 }, { c: "CH", peak: 1 }, { c: "HU", peak: 1 }, { c: "NL", peak: 1 },
    { c: "SR", peak: 1 }, { c: "ZA", peak: 1 }, { c: "AT", peak: 2 }, { c: "FR", peak: 2 },
    { c: "IT", peak: 2 }, { c: "DE", peak: 3 }, { c: "SE", peak: 3 }, { c: "IE", peak: 4 },
    { c: "ES", peak: 10 }, { c: "PT", peak: 15 }, { c: "GLB", peak: 38 }, { c: "SK", peak: 46 }, { c: "UK", peak: 55 },
  ] },
  // Swept A–Z against the song's cited chart table, July 2026. Airplay-only
  // peaks were dropped even where they were higher (Croatia, Uruguay), and
  // several entries that had been taken from a country's AIRPLAY chart were
  // corrected to that country's official sales/streaming chart: Costa Rica
  // (FONÓTICA airplay #1 → streaming #5), Nigeria (TurnTable airplay #3 →
  // Top 100 #7), South Africa (TOSAC airplay #12 → streaming #30) and
  // Lithuania (TopHit airplay #2 → AGATA #5).
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", year: 2026, entries: [
    { c: "CH", peak: 1 }, { c: "NL", peak: 1 }, { c: "SR", peak: 1 }, { c: "CO", peak: 1 }, { c: "AE", peak: 1 }, { c: "AT", peak: 1 }, { c: "BE", peak: 1, note: "Wallonia #1 · Flanders #1" }, { c: "SK", peak: 1 }, { c: "DE", peak: 1 }, { c: "LB", peak: 1 }, { c: "GR", peak: 1 }, { c: "AR", peak: 1 }, { c: "FR", peak: 1 }, { c: "LU", peak: 1 }, { c: "PT", peak: 1 }, { c: "PA", peak: 1 }, { c: "SE", peak: 1 }, { c: "GLB", peak: 1 }, { c: "GLBX", peak: 1 },
    { c: "NO", peak: 2 }, { c: "IN", peak: 2 },
    { c: "SA", peak: 3 }, { c: "ES", peak: 3 },
    { c: "EC", peak: 4 },
    { c: "UK", peak: 5 }, { c: "CZ", peak: 5 }, { c: "LT", peak: 5 }, { c: "CR", peak: 5 },
    { c: "IT", peak: 6 }, { c: "NG", peak: 7 }, { c: "PL", peak: 9 }, { c: "LV", peak: 10 },
    { c: "IS", peak: 10, note: "Billboard Iceland Songs" }, { c: "AU", peak: 12 }, { c: "IL", peak: 13 }, { c: "DK", peak: 13 }, { c: "IE", peak: 14 }, { c: "EG", peak: 14 },
    { c: "CA", peak: 16 }, { c: "MY", peak: 17 }, { c: "SG", peak: 20 }, { c: "RO", peak: 21 },
    { c: "HU", peak: 26 }, { c: "ZA", peak: 30 }, { c: "FI", peak: 35 },
    { c: "BR", peak: 36 }, { c: "US", peak: 42 },
    { c: "JP", peak: 60 }, { c: "VN", peak: 93 },
  ], note: "No.1 on both Billboard global charts — a 2nd week atop the Global 200 and a 4th week atop the Global 200 Excl. US. Also No.1 on Billboard's US World Digital Song Sales chart, No.1 on the IFPI Middle East & North Africa chart and No.3 on North Africa." },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", year: 2020, entries: [
    { c: "BE", peak: 2 }, { c: "SR", peak: 2 }, { c: "HU", peak: 39 }, { c: "IE", peak: 43 },
    { c: "UK", peak: 43 }, { c: "CH", peak: 52 }, { c: "CA", peak: 70 },
    { c: "AU", peak: 84 }, { c: "PT", peak: 140 },
  ] },
  { title: "We Pray", credit: "Coldplay ft. Little Simz, Burna Boy, Elyanna & TINI", year: 2024, entries: [
    { c: "LB", peak: 1 }, { c: "NL", peak: 4 }, { c: "HK", peak: 4 }, { c: "IE", peak: 7 }, { c: "AE", peak: 8 },
    { c: "BE", peak: 9 }, { c: "SR", peak: 11 }, { c: "UK", peak: 20 }, { c: "IN", peak: 20 },
    { c: "NZ", peak: 21 }, { c: "CH", peak: 22 }, { c: "AT", peak: 28 }, { c: "IS", peak: 30 }, { c: "AR", peak: 36 },
    { c: "AU", peak: 37 }, { c: "FI", peak: 38 }, { c: "DE", peak: 40 }, { c: "FR", peak: 45 }, { c: "GLB", peak: 50 },
    { c: "ES", peak: 53 }, { c: "PT", peak: 61 }, { c: "IT", peak: 71 }, { c: "SE", peak: 79 }, { c: "NG", peak: 83 },
    { c: "US", peak: 87 }, { c: "CA", peak: 92 },
  ] },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", year: 2019, entries: [
    { c: "BE", peak: 5 }, { c: "UK", peak: 8 }, { c: "IE", peak: 20 }, { c: "FR", peak: 28 },
    { c: "AU", peak: 77 },
  ] },
  { title: "Location", credit: "Dave ft. Burna Boy", year: 2019, entries: [
    { c: "UK", peak: 6 }, { c: "IE", peak: 20 },
  ] },
  { title: "Mera Na", credit: "Sidhu Moose Wala ft. Burna Boy & Steel Banglez", year: 2023, entries: [
    { c: "CA", peak: 14 }, { c: "UK", peak: 87 },
  ] },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", year: 2025, entries: [
    { c: "US", peak: 16 }, { c: "UK", peak: 22 }, { c: "NZ", peak: 29 }, { c: "CH", peak: 29 },
    { c: "CA", peak: 46 }, { c: "GR", peak: 56 }, { c: "GLB", peak: 60 }, { c: "IE", peak: 82 }, { c: "SE", peak: 91 },
    { c: "DE", peak: 92 }, { c: "AU", peak: 96 }, { c: "NL", peak: 97 }, { c: "PT", peak: 111 },
  ] },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", year: 2019, entries: [{ c: "UK", peak: 46 }] },
  { title: "Rollin'", credit: "Mist ft. Burna Boy", year: 2019, entries: [{ c: "UK", peak: 46 }] },
  { title: "Talibans II", credit: "Byron Messia ft. Burna Boy", year: 2023, entries: [
    { c: "CA", peak: 53 }, { c: "US", peak: 99 },
  ] },
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", year: 2025, entries: [{ c: "FR", peak: 61 }] },
  { title: "Only You", credit: "J. Cole ft. Burna Boy", year: 2026, entries: [{ c: "US", peak: 78 }] },
  { title: "Just Like Me", credit: "21 Savage, Burna Boy & Metro Boomin", year: 2024, entries: [{ c: "US", peak: 67 }] },
  { title: "Loved by You", credit: "Justin Bieber ft. Burna Boy", year: 2021, entries: [{ c: "UK", peak: 59 }, { c: "US", peak: 87 }] },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", year: 2020, entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 67 }] },
  { title: "Sungba (Remix)", credit: "Asake ft. Burna Boy", year: 2022, entries: [{ c: "NG", peak: 1 }] },
  { title: "Tshwala Bam (Remix)", credit: "TitoM, Yuppe & Burna Boy feat. S.N.E", year: 2024, entries: [{ c: "NG", peak: 1 }] },
];

// Helpers
export function chartTier(peak: number): "one" | "top10" | "top40" | "rest" {
  if (peak === 1) return "one";
  if (peak <= 10) return "top10";
  if (peak <= 40) return "top40";
  return "rest";
}

export const allChartItems: ChartRelease[] = [...albumCharts, ...singleCharts, ...featureCharts];

// "Dai Dai"'s OWN No. 1s — country charts only (excludes the two global charts).
// Used by the Dai Dai story so it never shows Burna Boy's career No. 1 total.
export const daiDaiNumberOnes = (() => {
  const dd = allChartItems.find((r) => r.title === "Dai Dai");
  return dd ? dd.entries.filter((e) => e.peak === 1 && e.c !== "GLB" && e.c !== "GLBX").length : 0;
})();

// Total official-chart entries for "Dai Dai" — every national + global chart it
// has appeared on. Data-driven so it tracks as new charts are added.
export const daiDaiChartEntryCount = (() => {
  const dd = allChartItems.find((r) => r.title === "Dai Dai");
  return dd ? dd.entries.length : 0;
})();
export const chartEntryCount = allChartItems.reduce((n, r) => n + r.entries.length, 0);
export const chartedReleaseCount = allChartItems.length;
// Distinct releases that topped at least one country's main chart.
export const numberOneReleases = allChartItems.filter((r) =>
  r.entries.some((e) => e.peak === 1)
).length;
// "No. 1s" headline = total #1 chart placements — every country where a release
// reached #1 counts (so a song that's #1 in five countries adds five). Mirrors
// chartEntryCount (both count placements) and recomputes automatically whenever
// a #1 is added to the data above, so the tally always tracks the charts.
export const numberOnes = allChartItems.reduce(
  (n, r) => n + r.entries.filter((e) => e.peak === 1).length,
  0
);
export const chartCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.map((e) => e.c))
).size;
