// ============================================================
//  OFFICIAL CHART ENTRIES — peak positions per country/chart.
//  Sourced from Wikipedia's cited chart tables (Billboard, Official
//  Charts, SNEP, ARIA, RMNZ, IRMA, Ultratop, GfK, etc.), verified
//  June 2026. peak = highest position reached so far.
// ============================================================

export interface ChartCountry {
  name: string;
  flag: string;
  body: string;
}

export const CHART_COUNTRIES: Record<string, ChartCountry> = {
  US: { name: "United States", flag: "🇺🇸", body: "Billboard" },
  UK: { name: "United Kingdom", flag: "🇬🇧", body: "Official Charts" },
  IE: { name: "Ireland", flag: "🇮🇪", body: "IRMA" },
  CA: { name: "Canada", flag: "🇨🇦", body: "Billboard Canada" },
  AU: { name: "Australia", flag: "🇦🇺", body: "ARIA" },
  FR: { name: "France", flag: "🇫🇷", body: "SNEP" },
  DE: { name: "Germany", flag: "🇩🇪", body: "GfK Entertainment" },
  NL: { name: "Netherlands", flag: "🇳🇱", body: "Dutch Charts" },
  SE: { name: "Sweden", flag: "🇸🇪", body: "Sverigetopplistan" },
  BE: { name: "Belgium", flag: "🇧🇪", body: "Ultratop" },
  NZ: { name: "New Zealand", flag: "🇳🇿", body: "RMNZ" },
  ZA: { name: "South Africa", flag: "🇿🇦", body: "TOSAC" },
  WW: { name: "Global", flag: "🌍", body: "Billboard Global 200" },
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
    { c: "NL", peak: 10 }, { c: "UK", peak: 11 }, { c: "CA", peak: 19 }, { c: "BE", peak: 22 },
    { c: "FR", peak: 29 }, { c: "IE", peak: 31 }, { c: "SE", peak: 47 }, { c: "US", peak: 54 },
  ] },
  { title: "No Sign of Weakness", year: 2025, entries: [
    { c: "UK", peak: 6 }, { c: "NL", peak: 57 }, { c: "FR", peak: 58 }, { c: "CA", peak: 65 },
    { c: "BE", peak: 136 }, { c: "US", peak: 200 },
  ] },
  { title: "African Giant", year: 2019, entries: [
    { c: "IE", peak: 12 }, { c: "UK", peak: 16 }, { c: "CA", peak: 33 }, { c: "FR", peak: 54 },
    { c: "BE", peak: 58 }, { c: "DE", peak: 80 }, { c: "US", peak: 104 },
  ] },
];

export const singleCharts: ChartRelease[] = [
  { title: "Last Last", year: 2022, entries: [
    { c: "ZA", peak: 1 }, { c: "UK", peak: 4 }, { c: "NZ", peak: 12 }, { c: "SE", peak: 21 },
    { c: "FR", peak: 23 }, { c: "IE", peak: 27 }, { c: "CA", peak: 30 }, { c: "WW", peak: 39 },
    { c: "US", peak: 44 }, { c: "AU", peak: 79 },
  ] },
  { title: "Dai Dai", credit: "with Shakira", year: 2026, entries: [
    { c: "US", peak: 5, note: "variant chart · still climbing" }, { c: "NZ", peak: 15, note: "Hot Singles" },
    { c: "SE", peak: 24 }, { c: "UK", peak: 28 }, { c: "WW", peak: 46 }, { c: "CA", peak: 55 },
    { c: "FR", peak: 58 }, { c: "IE", peak: 86 },
  ] },
  { title: "City Boys", year: 2023, entries: [
    { c: "NZ", peak: 12 }, { c: "UK", peak: 14 }, { c: "US", peak: 20, note: "variant chart" },
    { c: "FR", peak: 28 }, { c: "IE", peak: 44 }, { c: "SE", peak: 58 }, { c: "CA", peak: 70 },
    { c: "WW", peak: 143 },
  ] },
  { title: "For My Hand", credit: "feat. Ed Sheeran", year: 2022, entries: [
    { c: "ZA", peak: 4 }, { c: "US", peak: 13, note: "Bubbling Under Hot 100" },
    { c: "NZ", peak: 15, note: "Hot Singles" }, { c: "UK", peak: 18 }, { c: "SE", peak: 38 },
    { c: "IE", peak: 47 }, { c: "WW", peak: 52 }, { c: "CA", peak: 63 }, { c: "FR", peak: 173 },
  ] },
  { title: "TaTaTa", credit: "feat. Travis Scott", year: 2025, entries: [
    { c: "NZ", peak: 5, note: "Hot Singles" }, { c: "UK", peak: 84 },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, entries: [
    { c: "NZ", peak: 36 }, { c: "UK", peak: 36 }, { c: "US", peak: 80 },
  ] },
  { title: "On the Low", year: 2018, entries: [{ c: "FR", peak: 78 }] },
];

export const featureCharts: ChartRelease[] = [
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", year: 2019, entries: [
    { c: "UK", peak: 1 }, { c: "IE", peak: 2 }, { c: "AU", peak: 40 }, { c: "CA", peak: 82 },
  ] },
  { title: "Jerusalema (Remix)", credit: "Master KG ft. Burna Boy", year: 2020, entries: [
    { c: "FR", peak: 2 }, { c: "IE", peak: 4 }, { c: "WW", peak: 38 },
  ] },
  { title: "Location", credit: "Dave ft. Burna Boy", year: 2019, entries: [
    { c: "UK", peak: 6 }, { c: "IE", peak: 20 },
  ] },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", year: 2024, entries: [
    { c: "IE", peak: 7 }, { c: "UK", peak: 20 }, { c: "FR", peak: 45 }, { c: "WW", peak: 50 },
    { c: "US", peak: 87 }, { c: "CA", peak: 92 },
  ] },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", year: 2019, entries: [
    { c: "UK", peak: 8 }, { c: "IE", peak: 20 }, { c: "FR", peak: 28 }, { c: "AU", peak: 77 },
  ] },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", year: 2025, entries: [
    { c: "US", peak: 16 }, { c: "UK", peak: 22 }, { c: "CA", peak: 46 }, { c: "WW", peak: 60 },
    { c: "IE", peak: 93 }, { c: "AU", peak: 96 },
  ] },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", year: 2020, entries: [
    { c: "US", peak: 12, note: "Bubbling Under Hot 100" }, { c: "IE", peak: 43 }, { c: "UK", peak: 43 },
    { c: "CA", peak: 70 }, { c: "AU", peak: 84 },
  ] },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", year: 2020, entries: [{ c: "UK", peak: 67 }] },
];

// Helpers
export function chartTier(peak: number): "one" | "top10" | "top40" | "rest" {
  if (peak === 1) return "one";
  if (peak <= 10) return "top10";
  if (peak <= 40) return "top40";
  return "rest";
}

export const allChartItems: ChartRelease[] = [...albumCharts, ...singleCharts, ...featureCharts];
export const chartEntryCount = allChartItems.reduce((n, r) => n + r.entries.length, 0);
export const chartedReleaseCount = allChartItems.length;
export const numberOnes = allChartItems.reduce(
  (n, r) => n + r.entries.filter((e) => e.peak === 1).length,
  0
);
export const chartCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.map((e) => e.c))
).size;
