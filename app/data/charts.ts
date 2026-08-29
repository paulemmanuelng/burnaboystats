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
//  The airplay rule has one carve-out, and it is narrow: where a country
//  publishes NO non-airplay national chart, its airplay chart is the only
//  national chart it has, and is used (Israel, Bulgaria, Uruguay). Where a
//  country runs both, the non-airplay chart wins every time — Poland, Spain
//  and Nigeria each have a higher airplay peak that this file does not use.
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
  // NIGERIAN COVERAGE IS THINNER THAN THE NIGERIAN CERTIFICATION DATA, AND
  // CANNOT BE FULLY CLOSED. 63 releases hold a Nigerian plaque; 16 have a
  // Nigerian chart peak. That gap was investigated properly on 21 Aug 2026 and
  // the limit is structural, not effort:
  //   * TurnTable serves ONLY the current week at /charts/1 — `?week=` and
  //     `?weekNumber=` are ignored — and publishes no per-artist or per-song
  //     chart-history page. Its routes are charts, certification, news,
  //     magazine, business, powerlist. There is nothing to read a peak off.
  //   * The Wayback archive of /charts/1 holds 154 captures, July 2022 → Aug
  //     2026, and they ARE machine-readable: `__NEXT_DATA__` →
  //     props.pageProps.chartData.chartItems, each row carrying rank,
  //     highestPosition and weeksOnChart. But they cover ~120 distinct weeks of
  //     the ~213 in that era. A sample, never a register read in full.
  //   * Everything before July 2022 is invisible: the predecessor TurnTable Top
  //     50 archived as a Nuxt shell whose state object carries `charts:[]`, the
  //     rows having been fetched from a backend that is now dead and was never
  //     archived.
  // A 63-week sample surfaced 47 titles with no Nigerian entry here. They were
  // NOT added. `highestPosition` read from a sampled week is a FLOOR — "at
  // least #N" — not the proven peak every other entry in this file is, and the
  // one provable class (a peak of 1, which cannot improve) turned out to be
  // empty: all four Nigerian No. 1s the archive shows are already on file. So
  // adding them would have traded a uniform standard for a bigger count.
  // The same sample independently reproduced 11 of the peaks already here and
  // contradicted none of them, which is the reassuring half of the exercise.
  // If you revisit this: read the ALBUMS chart (chartCategoryId 2) separately —
  // "I Told Them...", "Love, Damini" and "No Sign of Weakness" are albums here
  // and same-named songs sit at 23, 36 and 19 on the songs chart, so a naive
  // title join silently overwrites three album peaks. And fetch slowly;
  // web.archive.org rate-limits hard above about one request every few seconds.
  NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable Top 100" },
  ZA: { name: "South Africa", flag: "🇿🇦", body: "The Official SA Charts" },
  SR: { name: "Suriname", flag: "🇸🇷", body: "Nationale Top 40" },
  AR: { name: "Argentina", flag: "🇦🇷", body: "Billboard Argentina Hot 100" },
  PA: { name: "Panama", flag: "🇵🇦", body: "PRODUCE International Chart" },
  CO: { name: "Colombia", flag: "🇨🇴", body: "Billboard Colombia Hot 100" },
  // Switched from Billboard Ecuador Hot 100 in Aug 2026: IFPI Latin America
  // now publishes an Ecuador chart, and an industry-body chart outranks a
  // Billboard country chart everywhere else in this file.
  EC: { name: "Ecuador", flag: "🇪🇨", body: "IFPI Latin America" },
  CR: { name: "Costa Rica", flag: "🇨🇷", body: "FONÓTICA Streaming" },
  VN: { name: "Vietnam", flag: "🇻🇳", body: "Billboard Vietnam Hot 100" },
  BR: { name: "Brazil", flag: "🇧🇷", body: "Billboard Brasil Hot 100" },
  JP: { name: "Japan", flag: "🇯🇵", body: "Billboard Japan Hot 100" },
  SG: { name: "Singapore", flag: "🇸🇬", body: "RIAS Top Charts" },
  // RIM is Malaysia's official chart body. Since March 2022 it splits by
  // repertoire — Top 20 International, Top 10 Domestic (Malay), Top 10 Chinese
  // — so there is no combined chart a foreign act can enter, and the
  // International chart IS the official one for Burna Boy. Do not substitute a
  // position from the regional Official Southeast Asia Charts: different body.
  MY: { name: "Malaysia", flag: "🇲🇾", body: "RIM Charts (Intl. streaming)" },
  LV: { name: "Latvia", flag: "🇱🇻", body: "Latvia Streaming Chart" },
  CL: { name: "Chile", flag: "🇨🇱", body: "Billboard Chile Songs" },
  // Airplay exceptions. The no-airplay rule exists so we never take an airplay
  // position when a sales/streaming chart also exists — Poland, Spain and
  // Nigeria all run both, and we use the non-airplay one in every case. These
  // countries publish no non-airplay national chart at all, so airplay is the
  // only national chart there is, and it's what every tracker uses. Excluding
  // them doesn't make the dataset stricter, just emptier.
  BG: { name: "Bulgaria", flag: "🇧🇬", body: "PROPHON (airplay — no other national chart)" },
  UY: { name: "Uruguay", flag: "🇺🇾", body: "Monitor Latino (airplay — no other national chart)" },
  // Verified individually before adding, because each one adds a No. 1 to the
  // career tally. Venezuela's Record Report is described as the country's
  // official singles chart and has been airplay-based since 1990. ASAP EGC is
  // El Salvador's IFPI national affiliate — the standing ZPAV has in Poland —
  // and its chart is airplay. The Dominican Republic publishes no non-airplay
  // national chart at all; what exists there is platform charts, which this
  // file excludes everywhere.
  VE: { name: "Venezuela", flag: "🇻🇪", body: "Record Report (airplay — the national chart)" },
  SV: { name: "El Salvador", flag: "🇸🇻", body: "ASAP EGC (airplay — no other national chart)" },
  DO: { name: "Dominican Republic", flag: "🇩🇴", body: "Monitor Latino (airplay — no other national chart)" },
  // Aug 2026 sweep additions — same standing as the exceptions above: none of
  // these countries publishes a non-airplay national chart, so the monitor
  // chart IS the national chart (Monitor Latino across Central America and
  // the Caribbean, TopHit in the ex-USSR states, Radiomonitor in Turkey).
  // Estonia's own Eesti Tipp-40 folded in 2020. Russia is the odd one out in
  // the other direction: TopHit's Russian chart is STREAMING, not airplay —
  // no industry body has published a chart there since IFPI left in 2022.
  EE: { name: "Estonia", flag: "🇪🇪", body: "TopHit weekly (airplay — no other national chart)" },
  GT: { name: "Guatemala", flag: "🇬🇹", body: "Monitor Latino (airplay — no other national chart)" },
  HN: { name: "Honduras", flag: "🇭🇳", body: "Monitor Latino (airplay — no other national chart)" },
  NI: { name: "Nicaragua", flag: "🇳🇮", body: "Monitor Latino (airplay — no other national chart)" },
  PY: { name: "Paraguay", flag: "🇵🇾", body: "Monitor Latino (airplay — no other national chart)" },
  PR: { name: "Puerto Rico", flag: "🇵🇷", body: "Monitor Latino (airplay — no other national chart)" },
  TR: { name: "Turkey", flag: "🇹🇷", body: "Radiomonitor Türkiye Intl. (airplay — no other national chart)" },
  KZ: { name: "Kazakhstan", flag: "🇰🇿", body: "TopHit weekly (airplay — no other national chart)" },
  MD: { name: "Moldova", flag: "🇲🇩", body: "TopHit weekly (airplay — no other national chart)" },
  UA: { name: "Ukraine", flag: "🇺🇦", body: "TopHit weekly (airplay — no other national chart)" },
  RU: { name: "Russia", flag: "🇷🇺", body: "TopHit streaming (no industry chart since 2022)" },
  // Croatia needs no airplay exception: Billboard Croatia Songs is a
  // sales/streaming chart, and we already count 14 other Billboard country
  // charts. HDU's own Top lista has it at No. 1, but that IS an airplay chart
  // and Croatia has a non-airplay option, so the rule above says use this one.
  HR: { name: "Croatia", flag: "🇭🇷", body: "Billboard Croatia Songs" },
  PE: { name: "Peru", flag: "🇵🇪", body: "Billboard Peru Songs" },
  BO: { name: "Bolivia", flag: "🇧🇴", body: "Billboard Bolivia Songs" },
  GLB: { name: "Global", flag: "🌍", body: "Billboard Global 200" },
  GLBX: { name: "Global (excl. US)", flag: "🌐", body: "Billboard Global Excl. US" },
};

export interface ChartEntry {
  c: string;
  peak: number;
  note?: string;
  /**
   * How long the release held its peak, and how long it charted at all.
   *
   * Both OPTIONAL, and both absent on nearly every entry — a peak is published
   * by every chart body, longevity is not, and inventing it would be worse than
   * omitting it. Populate only where the owning body states it.
   *
   * These exist because longevity had nowhere to live and so lived in prose,
   * where nothing could keep it honest. The note on "Dai Dai" below read "a 4th
   * week atop the Global 200 and a 6th week atop the Global 200 Excl. US" while
   * the true figures were the 5th and the 8th — wrong on a page that had been
   * serving it for days, with no test able to see it. A number in a sentence
   * cannot be checked against anything; a number in a field can.
   *
   * `weeksAtPeak` counts weeks AT the peak position, which for a No. 1 is the
   * figure people mean by "N weeks at No. 1". It is not a total.
   */
  weeksAtPeak?: number;
  /** Total weeks on that country's chart, where the body publishes a run. */
  weeks?: number;
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
    { c: "NG", peak: 1 }, { c: "UK", peak: 1 }, { c: "NL", peak: 2 }, { c: "FR", peak: 6 }, { c: "SE", peak: 7 },
    { c: "CA", peak: 18 }, { c: "BE", peak: 20 }, { c: "IE", peak: 25 }, { c: "US", peak: 31 },
    { c: "DE", peak: 46 }, { c: "AU", peak: 56 },
  ] },
  { title: "Love, Damini", year: 2022, entries: [
    { c: "UK", peak: 2 }, { c: "NG", peak: 3 }, { c: "NL", peak: 2 }, { c: "CA", peak: 6 }, { c: "SE", peak: 12 },
    { c: "US", peak: 14 }, { c: "FR", peak: 17 }, { c: "IE", peak: 23 }, { c: "BE", peak: 24 },
    { c: "DE", peak: 61 },
  ] },
  { title: "Twice as Tall", year: 2020, entries: [
    { c: "NL", peak: 10 }, { c: "UK", peak: 11 }, { c: "CH", peak: 12 }, { c: "CA", peak: 19 }, { c: "BE", peak: 22 },
    { c: "FR", peak: 29 }, { c: "IE", peak: 31 }, { c: "NO", peak: 34 }, { c: "NG", peak: 25 }, { c: "SE", peak: 47 }, { c: "US", peak: 54 },
    { c: "AT", peak: 69 },
  ] },
  { title: "African Giant", year: 2019, entries: [
    { c: "IE", peak: 12 }, { c: "UK", peak: 16 }, { c: "CA", peak: 33 }, { c: "FR", peak: 54 },
    { c: "BE", peak: 58 }, { c: "DE", peak: 80 }, { c: "US", peak: 104 },
  ] },
  { title: "No Sign of Weakness", year: 2025, entries: [
    { c: "NG", peak: 1 }, { c: "UK", peak: 6 }, { c: "NL", peak: 57 }, { c: "FR", peak: 58 }, { c: "CA", peak: 65 },
    { c: "BE", peak: 136 }, { c: "US", peak: 200 },
  ] },
];

export const singleCharts: ChartRelease[] = [
  // Fan chart round-ups circulate a longer "Dai Dai" list than this one. The
  // extras are consistently charts this dataset excludes by rule, so check the
  // chart BODY before adding one — the country alone tells you nothing:
  //   Bulgaria #3   — PROPHON airplay, INCLUDED under the exception above:
  //                   Bulgaria publishes no non-airplay national chart.
  //   Uruguay #3    — Monitor Latino airplay, included on the same grounds.
  //                   Round-ups say #5; the sourced chart table says #3.
  //   Croatia #14   — Billboard Croatia Songs. Included as a Billboard country
  //                   chart, NOT as an airplay exception — HDU's Top lista has
  //                   it at #1 but that is airplay, and Croatia has this
  //                   non-airplay option, so #14 is the one that applies.
  //   Malaysia #8   — IFPI Malaysia. RIM is the official body and has it at
  //                   #12, which is what we carry. See the MY note below.
  //   Hungary #8    — not a chart we could source; MAHASZ Single Top 40, the
  //                   official singles chart, has it at #9.
  // MENA (#1) and North Africa (#3) are real IFPI charts but regional, not
  // national, so they live in the note rather than as country entries.
  // Aug 2026 sweep (against the song's cited chart table) — the same
  // body-first checks, entry by entry:
  //   Lithuania #1  — TopHit airplay. AGATA (streaming) exists and is what we
  //                   track; verified weeks 27→31 directly (5 → 20 → 7), so
  //                   the peak stays #5 and the airplay #1 does not apply.
  //   Estonia #1    — TopHit airplay, INCLUDED: Eesti Tipp-40 folded in 2020,
  //                   so Estonia has no non-airplay chart. Verified on
  //                   tophit.com, week of 17–23 Jul 2026.
  //   Ecuador #1    — IFPI Latin America, week 24 — verified on @ifpilatam's
  //                   own Top-uno graphic. Replaces Billboard Ecuador (#4).
  //   Mexico #10    — Monitor Latino airplay. Billboard México Songs exists
  //                   (non-airplay); Dai Dai just isn't on it — so no entry.
  //   Chile #1, Peru #5, Bolivia #1 — Monitor Latino airplay; the Billboard
  //                   country charts exist and are what we track (14/23/25).
  //   Slovakia #6   — the radio chart; Singles Digitál (#1) is ours.
  //   Japan #12     — Oricon digital sales; Billboard Japan Hot 100 (#25) is
  //                   the composite standard we track.
  //   Hungary #2    — Editors' Choice radio list; MAHASZ Single Top 40 (#9)
  //                   is the official singles chart.
  //   Remix/instrumental rows (Greece, Poland, Lithuania) are versions, not
  //   the song, and genre/format charts (Latin Airplay, Pop Songs, Rhythmic,
  //   ARIA Hip Hop, Canada AC/CHR) stay out of country entries as always.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", year: 2026, entries: [
    { c: "CH", peak: 1, weeksAtPeak: 10 }, { c: "NL", peak: 1, weeksAtPeak: 7, weeks: 13, note: "seven weeks at No.1, not consecutive - two from 20 June, then five from 25 July" }, { c: "SR", peak: 1 }, { c: "CO", peak: 1 }, { c: "AE", peak: 1 }, { c: "AT", peak: 1, weeksAtPeak: 9, weeks: 13 }, { c: "BE", peak: 1, weeksAtPeak: 9, weeks: 14, note: "Wallonia #1 · Flanders #1 — the run figures are Wallonia's Ultratop 50" }, { c: "SK", peak: 1 }, { c: "DE", peak: 1, weeksAtPeak: 8, weeks: 13 }, { c: "LB", peak: 1 }, { c: "GR", peak: 1 }, { c: "AR", peak: 1 }, { c: "FR", peak: 1, weeksAtPeak: 6 }, { c: "LU", peak: 1 }, { c: "PT", peak: 1 }, { c: "PA", peak: 1 }, { c: "SE", peak: 1, weeksAtPeak: 6, weeks: 14, note: "six weeks at No.1, not consecutive - weeks 28-32 and 34" }, { c: "IT", peak: 1 }, { c: "IN", peak: 1 }, { c: "CZ", peak: 1 }, { c: "IS", peak: 1, note: "Billboard Iceland Songs" }, { c: "VE", peak: 1 }, { c: "SV", peak: 1 }, { c: "DO", peak: 1 }, { c: "NO", peak: 1, weeksAtPeak: 4 }, { c: "EC", peak: 1 }, { c: "EE", peak: 1 }, { c: "PL", peak: 1, weeksAtPeak: 1, weeks: 12 }, { c: "GLB", peak: 1, weeksAtPeak: 5 }, { c: "GLBX", peak: 1, weeksAtPeak: 9 },
    { c: "UK", peak: 2, weeksAtPeak: 5, weeks: 12 }, { c: "ES", peak: 2 }, { c: "UY", peak: 2 }, { c: "PR", peak: 2 },
    { c: "CA", peak: 3 }, { c: "SA", peak: 3 }, { c: "SG", peak: 3 }, { c: "BG", peak: 3 }, { c: "IE", peak: 3 }, { c: "PY", peak: 3 },
    // HU sits at 8, not the fan-circulated 2: MAHASZ's own Single Top 40 (live
    // week and archive search alike) has the peak at 8 — the "2" belongs to
    // their Editors' Choice/radio lists, which the rules above exclude.
    { c: "HN", peak: 4 }, { c: "HU", peak: 8 },
    { c: "LT", peak: 5 }, { c: "CR", peak: 5 }, { c: "RO", peak: 5 }, { c: "LV", peak: 5 }, { c: "MY", peak: 5 }, { c: "GT", peak: 5 }, { c: "DK", peak: 5 },
    { c: "IL", peak: 6 }, { c: "FI", peak: 6 }, { c: "NI", peak: 6 },
    { c: "NG", peak: 7 }, { c: "TR", peak: 7 },
    { c: "KZ", peak: 8 }, { c: "AU", peak: 10 },
    { c: "NZ", peak: 13 }, { c: "HR", peak: 13 },
    { c: "EG", peak: 14 }, { c: "CL", peak: 14 }, { c: "US", peak: 17 }, { c: "ZA", peak: 20 },
    { c: "PE", peak: 23 }, { c: "BO", peak: 25 }, { c: "JP", peak: 25 }, { c: "BR", peak: 27 },
    { c: "RU", peak: 31 }, { c: "MD", peak: 34 }, { c: "UA", peak: 90 }, { c: "VN", peak: 93 },
  ], note: "No.1 on both Billboard global charts — the week counts are on the entries themselves, so this sentence cannot go stale again. Also No.1 on Billboard's US World Digital Song Sales and Latin Airplay charts, No.1 on the IFPI Middle East & North Africa chart (No.3 on North Africa), and No.1 on BMAT's Central America & Caribbean airplay chart." },
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
  // From the Black Panther: Wakanda Forever soundtrack. Peaks per the song's
  // cited chart table; its UK Afrobeats No.1, UK Hip-Hop/R&B and US Rhythmic
  // Airplay placings are genre/component/airplay charts, excluded by the rules
  // at the top of this file.
  { title: "Alone", year: 2022, entries: [
    { c: "FR", peak: 19 }, { c: "UK", peak: 28 }, { c: "SE", peak: 33 }, { c: "CH", peak: 45 },
    { c: "IE", peak: 50 }, { c: "NL", peak: 58 }, { c: "CA", peak: 73 }, { c: "PT", peak: 97 },
    { c: "GLB", peak: 143 },
  ] },
  { title: "Cheat on Me", credit: "feat. Dave", year: 2023, entries: [
    { c: "NG", peak: 4 }, { c: "UK", peak: 19 }, { c: "IE", peak: 42 }, { c: "FR", peak: 109 }, { c: "GLB", peak: 194 },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, entries: [
    { c: "NG", peak: 8 }, { c: "UK", peak: 36 }, { c: "NZ", peak: 36 }, { c: "US", peak: 80 },
  ] },
  { title: "Big 7", year: 2023, entries: [{ c: "NG", peak: 2 }, { c: "UK", peak: 53 }] },
  // The NATIVE's recap of TurnTable's I Told Them... week: "Giza" at No. 2,
  // ahead of City Boys (3), Cheat on Me (4) and Big 7 (5). Its only official
  // national-chart placement — a home smash on the strength of Seyi Vibez.
  { title: "Giza", credit: "feat. Seyi Vibez", year: 2023, entries: [{ c: "NG", peak: 2 }] },
  { title: "Real Life", credit: "feat. Stormzy", year: 2020, entries: [{ c: "UK", peak: 54 }] },
  { title: "On the Low", year: 2018, entries: [
    { c: "FR", peak: 78 }, { c: "NL", peak: 97 },
  ] },
  { title: "Kilometre", year: 2021, entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 84 }] },
  { title: "TaTaTa", credit: "feat. Travis Scott", year: 2025, entries: [{ c: "NG", peak: 5 }, { c: "UK", peak: 84 }] },
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
/**
 * Weeks at the peak for one release in one country, or null where the chart
 * body publishes no run.
 *
 * The point of this helper is that prose calls it instead of stating a number.
 * A sentence that says "six weeks at No. 1 in France" is a claim nothing can
 * check; a sentence that renders weeksAtPeak("Dai Dai", "FR") is the same claim
 * wired to the thing it describes, so the two cannot drift apart. That drift is
 * not hypothetical — the note on "Dai Dai" was serving "a 4th week atop the
 * Global 200" to /records/charts while the real figure was the 5th.
 */
/**
 * Total weeks on one country's chart, or null where the body publishes none.
 *
 * Deliberately a SEPARATE reader from weeksAtPeak rather than an options flag:
 * "weeks at No. 1" and "weeks on chart" are different claims that have been
 * conflated repeatedly (Norway was circulated as 13 weeks on chart when
 * VG-lista's own page says 10), and two names make the conflation harder to
 * write by accident than one function with a parameter.
 */
export function weeksOnChart(title: string, country: string): number | null {
  const r = allChartItems.find((x) => x.title === title);
  return r?.entries.find((e) => e.c === country)?.weeks ?? null;
}

export function weeksAtPeak(title: string, country: string): number | null {
  const r = allChartItems.find((x) => x.title === title);
  return r?.entries.find((e) => e.c === country)?.weeksAtPeak ?? null;
}

/** Every entry that carries a published run, for tests and for any page that
 *  wants to show longevity without knowing which entries have it. */
export const entriesWithLongevity = allChartItems.flatMap((r) =>
  r.entries
    .filter((e) => e.weeksAtPeak !== undefined || e.weeks !== undefined)
    .map((e) => ({ title: r.title, country: e.c, peak: e.peak, weeksAtPeak: e.weeksAtPeak ?? null, weeks: e.weeks ?? null }))
);

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
// The two country figures are NOT the same and must not be paired with the
// wrong one. `chartCountryCount` is every territory he has CHARTED in; this is
// the subset where a release actually reached No. 1 — 33 against 71. A stat
// tile reading "48 No. 1s / 71 countries" says he topped the chart in 71
// places, which is not what the data says. Use this wherever the figure beside
// a No. 1s count is meant to describe those No. 1s.
export const numberOneCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.filter((e) => e.peak === 1).map((e) => e.c))
).size;

// Where the tracked charts actually come from, counted from the data rather
// than asserted. Published on /methodology and /records/charts so the mix of
// sources is visible instead of implied: most territories use their national
// industry body's chart, but some countries have no such chart and Billboard's
// country chart is the principal one there.
export const chartSourceSplit = (() => {
  const used = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)));
  let nationalBody = 0;
  let billboardCountry = 0;
  let global = 0;
  for (const code of used) {
    const meta = CHART_COUNTRIES[code];
    if (!meta) continue;
    if (code === "GLB" || code === "GLBX") global += 1;
    else if (/^Billboard/i.test(meta.body)) billboardCountry += 1;
    else nationalBody += 1;
  }
  return { nationalBody, billboardCountry, global };
})();

export const chartCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.map((e) => e.c))
).size;
