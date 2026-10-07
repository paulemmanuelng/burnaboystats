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
//  national chart it has, and is used. The countries this applies to are named
//  and justified one by one in CHART_COUNTRIES below, and pinned by
//  AIRPLAY_EXCEPTIONS in tests/charts.test.ts — add one there deliberately,
//  never here. This sentence used to list three of them by name, which read as
//  the complete set long after it had stopped being one, and a count would rot
//  the same way. Where a country runs both, the non-airplay chart wins every
//  time — Poland, Spain and Nigeria each have a higher airplay peak that this
//  file does not use.
//
//  Cross-checked against each chart body's data via the songs' cited
//  tables, June 2026. peak = highest position reached so far.
// ============================================================

/** The day Burna Boy's rows in this file were last read at the chart bodies —
 *  the 2 Oct 2026 charts sweep (docs/sweeps/charts-sweep-2026-10-02.md), which
 *  added the MK and SI rows and re-read others ("read 2 Oct 2026" below).
 *  /records/charts prints its month as the source line's "as of", which had
 *  stayed "September 2026" over those rows (5 Oct 2026, crossSite-08). Move it
 *  with the next read; tests/debug1005Records.test.tsx holds it to the newest
 *  "read <day>" note in this file. */
export const BURNA_LAST_CHART_SWEEP = "2026-10-02";

/** The day this file's rows last changed WITHOUT a chart read. 7 Oct 2026:
 *  twenty-seven releases refiled from `featureCharts` to `singleCharts` by
 *  Spotify's credit roles (the credit-role rule, app/data/creditRoles.ts) — no
 *  peak moved, but /records/charts' group counts and its lead/featured split
 *  did. The page still PRINTS BURNA_LAST_CHART_SWEEP as its "as of". */
export const CHARTS_EDITED_ON = "2026-10-07";

/** The date /records/charts is stamped with in the sitemap: the later of the
 *  chart read and an edit made without one. */
export const CHARTS_STAMP = [BURNA_LAST_CHART_SWEEP, CHARTS_EDITED_ON].sort().at(-1)!;

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
  // Lebanon is an airplay carve-out and was not labelled as one until 3 Sep
  // 2026. The Official Lebanese Top 20 is compiled by Ipsos from automated
  // song recognition across the Lebanese FM stations carrying 80%+ of the
  // radio audience — airplay frequency, not consumption. It qualifies on the
  // same basis as Bulgaria and Uruguay: IFPI's Official MENA Chart is
  // streaming-based but REGIONAL across 13 markets, and publishes no Lebanon
  // country chart, so OLT20 is the only national chart there is.
  LB: { name: "Lebanon", flag: "🇱🇧", body: "The Official Lebanese Top 20 (Ipsos airplay — no other national chart)" },
  EG: { name: "Egypt", flag: "🇪🇬", body: "Official Egypt Top 20 (MENA Chart)" },
  RO: { name: "Romania", flag: "🇷🇴", body: "Billboard Romania Songs" },
  SK: { name: "Slovakia", flag: "🇸🇰", body: "Singles Digitál Top 100" },
  CZ: { name: "Czech Republic", flag: "🇨🇿", body: "ČNS IFPI" },
  LT: { name: "Lithuania", flag: "🇱🇹", body: "AGATA" },
  LU: { name: "Luxembourg", flag: "🇱🇺", body: "Billboard Luxembourg Songs" },
  NO: { name: "Norway", flag: "🇳🇴", body: "VG-lista" },
  PL: { name: "Poland", flag: "🇵🇱", body: "ZPAV Streaming Top 100" },
  // NIGERIAN COVERAGE WAS THINNER THAN THE NIGERIAN CERTIFICATION DATA. 63
  // releases hold a Nigerian plaque; until 18 Sep 2026 only 16 had a Nigerian
  // chart peak, and until 17 Sep this comment said the gap could not be closed — that TurnTable
  // serves only the current week, that the Wayback captures are a sample, and
  // that everything before July 2022 is invisible. ALL THREE WERE WRONG. The
  // body's own archive route serves every weekly issue:
  //   turntablecharts.com/api/ttc-proxy/api/chart/{1|2}/{week}/{year}
  //   (1 = singles, 2 = albums; a turntablecharts.com Referer is required; the
  //   payload is base64 JSON; validate weekNumber AND dateCreated on every
  //   response; about 100 requests a minute before it rate-limits)
  // — 306 singles issues from the Top 50 of 5 Nov 2020 through today and 201
  // album issues from 2 Nov 2022, the batch-3 sweep of the Afrobeats board
  // walked it whole (docs/sweeps/*-chart-peaks-v1.md, "Re-read 17 Sep 2026").
  // A peak is the best rank in ANY issue: `highestPosition` resets on the
  // 7 Jul 2022 relaunch (Top 50 → Top 100) and again on every re-entry, so a
  // single issue's counter is a floor, never the peak. Read the ALBUMS chart
  // separately — "I Told Them...", "Love, Damini" and "No Sign of Weakness"
  // are albums there while same-named songs sit on the singles chart, and a
  // naive title join overwrites the album peaks.
  // Burna Boy's OWN catalogue had that full walk on 18 Sep 2026 (all 306
  // singles issues and 201 album issues, every row with Burna Boy in the
  // credit): 89 releases now carry a Nigerian peak, none of the 22 already on
  // file moved, and the 8 plaqued titles still without one ("On the Low",
  // "Location", "Wonderful", "Bank On It", "No Fit Vex", "Level Up", "Lenu
  // (Remix)", "B.D'or") never appear in the archive — all but the last were
  // released before the chart began. Evidence, issue by issue, in
  // docs/sweeps/burna-boy-nigeria-2026-09-18.md; the walker that read it is
  // scripts/turntable-walk.mjs.
  NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable Top 100 / Top 100 Albums" },
  ZA: { name: "South Africa", flag: "🇿🇦", body: "The Official SA Charts" },
  SR: { name: "Suriname", flag: "🇸🇷", body: "Nationale Top 40" },
  AR: { name: "Argentina", flag: "🇦🇷", body: "Billboard Argentina Hot 100" },
  // Panama, same case, same date. PRODUCE's Top 50 Internacional is monitored
  // by BMAT across 60 Panamanian radio and TV channels, a play counted once a
  // song has aired 50 seconds — airplay. The alternative on offer is Monitor
  // Latino, which is also airplay, so there is no non-airplay national chart
  // to prefer.
  PA: { name: "Panama", flag: "🇵🇦", body: "PRODUCE Top 50 Internacional (BMAT airplay — no other national chart)" },
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
  // El Salvador was defined here for a single "Dai Dai" No. 1 added on the same
  // commit as the Dominican one, and on the same basis: a fan round-up, not the
  // body. It comes out for a different reason, though. There is no El Salvador
  // chart to contradict it — ASAP EGC publishes none at all, and Monitor Latino
  // names El Salvador in none of the fourteen weekly round-ups covering the
  // song. What Monitor Latino DOES show is "Dai Dai" at No. 1 on its regional
  // Top Centroamérica on 15 June, which is almost certainly the figure that was
  // read as a national one. The release note below already records the regional
  // Central America & Caribbean No. 1, where it belongs. See RETRACTIONS #8.
  // The Dominican Republic was defined here for a single "Dai Dai" entry whose
  // peak of 1 came from a fan round-up and never from the body. Monitor Latino's
  // own weekly posts name the No. 1 on each country's Top 20 General, and across
  // all sixteen weeks of the song's life the Dominican No. 1 is Amenazzy, then
  // Yiyo Sarante for eleven weeks, then Yenddi, then DaniLeigh — while the SAME
  // posts name Dai Dai the No. 1 elsewhere in those very weeks. Positive absence,
  // not silence. Entry and country both removed; see RETRACTIONS #7. Re-add both
  // together if the position is ever read at the body.
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
  // North Macedonia and Slovenia, 2 Oct 2026 — the same standing, and the same
  // wording, the Afrobeats board already gives them (EXTRA_COUNTRIES in
  // afrobeats.ts): neither publishes a sales/streaming national chart, so
  // Radiomonitor's All Radio chart is the national chart. Radiomonitor's public
  // widget serves the CURRENT week only, with no archive, so every peak read
  // there is a floor and says so on its entry.
  MK: { name: "North Macedonia", flag: "🇲🇰", body: "Radiomonitor North Macedonia (airplay — no other national chart)" },
  SI: { name: "Slovenia", flag: "🇸🇮", body: "Radiomonitor Slovenia (airplay — no other national chart)" },
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
  /**
   * The issue date of the chart on which the peak was FIRST reached, ISO
   * "YYYY-MM-DD" — the chart's own date, as the body prints it, never the day
   * the peak was read here. Optional like the two above, for the same reason.
   *
   * Carried so far by the Top 10 peaks whose issue a read recorded: every
   * Nigerian one, from the issue-by-issue walk in
   * docs/sweeps/burna-boy-nigeria-2026-09-18.md ("Set on issue"), and the two
   * UK No. 1s dated by the Official Charts Company (the notes in firsts.ts and
   * timeline.ts). /on-this-day lists a peak on its anniversary only when this
   * is set; a peak with no recorded issue stays off the calendar.
   */
  peakDate?: string;
}

export interface ChartRelease {
  title: string;
  credit?: string;
  year: number;
  entries: ChartEntry[];
  note?: string; // optional footnote under the release (e.g. multi-territory charts)
}

export const albumCharts: ChartRelease[] = [
  { title: "I Told Them…", year: 2023, entries: [
    { c: "NG", peak: 1, peakDate: "2023-08-31" }, { c: "UK", peak: 1, peakDate: "2023-09-01" }, { c: "NL", peak: 2 }, { c: "FR", peak: 6 }, { c: "SE", peak: 7 },
    { c: "CA", peak: 18 }, { c: "BE", peak: 11, note: "Wallonia #11 · Flanders #20" }, { c: "IE", peak: 25 }, { c: "US", peak: 31 },
    { c: "DE", peak: 46 }, { c: "AU", peak: 56 },
    // Read 18 Sep 2026: RMNZ artist page (12, 13 weeks, first charted 1 Sep
    // 2023); Hitlisten uge 35/2023 (13, new, 1 week); austriancharts.at (39,
    // 5 Sep 2023, 1 week).
    { c: "NZ", peak: 12 }, { c: "DK", peak: 13 }, { c: "AT", peak: 39 },
    // Read 2 Oct 2026 at the bodies, settling the cross-table leads above:
    // Schweizer Hitparade Alben, 3 Sep 2023 (7, new; 6 weeks); Topplista Album
    // 2023 uke 35 (6, new; 2 weeks). BE moves from Flanders' 20 to Wallonia's 11
    // (Ultratop Albums Top 200 Wallonia, 2 Sep 2023) under the better-peak rule.
    { c: "CH", peak: 7 }, { c: "NO", peak: 6 },
  ] },
  { title: "Love, Damini", year: 2022, entries: [
    // NG peakDate: TurnTable issue 1480, printed Oct 28th – Nov 3rd, 2022;
    // dateCreated 2 Nov is the record stamp. Dated to the Thursday that closes
    // the printed week, like every other TurnTable peak
    // (docs/sweeps/burna-boy-nigeria-2026-09-18.md).
    { c: "UK", peak: 2 }, { c: "NG", peak: 3, peakDate: "2022-11-03", note: "Peak still open — still on TurnTable's Top 100 Albums at the 10 Sep 2026 issue, so it may yet climb." }, { c: "NL", peak: 2 }, { c: "CA", peak: 6 }, { c: "SE", peak: 12 },
    { c: "US", peak: 14 }, { c: "FR", peak: 17 }, { c: "IE", peak: 23 }, { c: "BE", peak: 24 },
    { c: "DE", peak: 61 },
    // Read 2 Oct 2026: Schweizer Hitparade Alben, 17 Jul 2022 (6, new; 10
    // weeks); Hitlisten Album Top-40 uge 28/2022 (8, new); Topplista Album 2022
    // uke 28 (6, new; 10 weeks).
    { c: "CH", peak: 6 }, { c: "DK", peak: 8 }, { c: "NO", peak: 6 },
  ] },
  { title: "Twice as Tall", year: 2020, entries: [
    { c: "NL", peak: 10 }, { c: "UK", peak: 11 }, { c: "CH", peak: 12 }, { c: "CA", peak: 19 }, { c: "BE", peak: 22 },
    // TurnTable Official Top 50 Albums (now Top 100 Albums): 17 on the 2 Feb 2023
    // and 16 Feb 2023 issues; 25 was its debut on the chart's first issue,
    // 2 Nov 2022. Every issue to 10 Sep 2026 read (26, 184 weeks, still charting).
    { c: "FR", peak: 29 }, { c: "IE", peak: 31 }, { c: "NO", peak: 34 }, { c: "NG", peak: 17, note: "TurnTable Official Top 100 Albums — 17 on the 2 and 16 February 2023 issues; still on the chart at the 10 Sep 2026 issue." }, { c: "SE", peak: 47 }, { c: "US", peak: 54 },
    { c: "AT", peak: 69 },
  ] },
  { title: "African Giant", year: 2019, entries: [
    // Re-read at the bodies 18 Sep 2026: Dutch Album Top 100 entry 3 Aug 2019
    // at 12 (155 weeks); IRMA Top 100 issue of 2 Aug 2019 — 80, one week (the
    // 12 this row carried was never Ireland's); Schweizer Hitparade entry 4 Aug
    // 2019 at 64; TurnTable Official Top 100 Albums peak 23 on the 30 Jul 2026
    // issue, still on the chart (36 on 10 Sep 2026, 158 weeks). Germany's 80
    // was not on Offizielle Charts' run and is out.
    { c: "NL", peak: 12 }, { c: "UK", peak: 16 }, { c: "NG", peak: 23, note: "Peak still open — still on TurnTable's Top 100 Albums at the 10 Sep 2026 issue, so it may yet climb." },
    { c: "CA", peak: 33 }, { c: "FR", peak: 54 }, { c: "BE", peak: 58 }, { c: "CH", peak: 64 },
    { c: "IE", peak: 80 }, { c: "US", peak: 104 },
  ] },
  // TurnTable Official Top 100 Albums: 51 issues from a No. 96 debut on the
  // 14 Mar 2024 issue; peak 41 on the 4 Jul 2024 issue — the best rank in any
  // of the 193 archive issues, 5 Jan 2023 → 10 Sep 2026 (89 on the last). Read
  // at the ttc-proxy archive 18 Sep 2026. Outside had no chart row at all.
  { title: "Outside", year: 2018, entries: [
    { c: "NG", peak: 41, note: "Peak still open — still on TurnTable's Top 100 Albums at the 10 Sep 2026 issue, so it may yet climb." },
  ] },
  { title: "No Sign of Weakness", year: 2025, entries: [
    // Schweizer Hitparade Alben Top 100, issue of 20 Jul 2025: 28, one week
    // (swisscharts.com/charts/alben/20-07-2025); AFP/Audiogest TOP semana 29 de
    // 2025, Top 200 Álbuns: 66, new, one week (audiogest.pt PDF). Read 18 Sep 2026.
    { c: "NG", peak: 1, peakDate: "2025-07-17" }, { c: "UK", peak: 6 }, { c: "CH", peak: 28 }, { c: "NL", peak: 57 }, { c: "FR", peak: 58 }, { c: "CA", peak: 65 },
    // BE 118, not Flanders' 136: Ultratop Albums Top 200 Wallonia, 19 Jul 2025
    // (118, new, one week) — the better-peak rule, read 2 Oct 2026.
    { c: "PT", peak: 66 }, { c: "BE", peak: 118, note: "Wallonia #118 · Flanders #136" }, { c: "US", peak: 200 },
  ] },
];

export const singleCharts: ChartRelease[] = [
  // Fan chart round-ups circulate a longer "Dai Dai" list than this one. The
  // extras are consistently charts this dataset excludes by rule, so check the
  // chart BODY before adding one — the country alone tells you nothing:
  //   Bulgaria #2   — PROPHON airplay, INCLUDED under the exception above:
  //                   Bulgaria publishes no non-airplay national chart. Read
  //                   off the Svetovniyat (World) TOP 10, the combined list:
  //                   No.2 on 14 Aug, 21 Aug and 28 Aug 2026 (was #3, the
  //                   10 Jul issue; re-read 2 Oct 2026).
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
  // The July 2026 A–Z sweep, which is where four of the entries below come
  // from. Airplay-only peaks were dropped even where they were higher (Croatia,
  // Uruguay), and several entries that had been taken from a country's AIRPLAY
  // chart were corrected to that country's official sales/streaming chart:
  // Costa Rica (FONÓTICA airplay #1 → streaming #5), Nigeria (TurnTable airplay
  // #3 → Top 100 #7), South Africa (TOSAC airplay #12 → streaming #20) and
  // Lithuania (TopHit airplay #2 → AGATA #5).
  // This block spent a month above "My Oasis": it was written directly above
  // Dai Dai while Dai Dai was still in featureCharts, and the move here — it is
  // a lead credit, not a feature — left it behind, annotating a song with no
  // Costa Rica, Nigeria, South Africa or Lithuania entry at all. Its South
  // Africa figure said #30, which was the sweep's own under-read of TOSAC
  // streaming; corrected to #20 on 29 Jul 2026. The airplay #12 is unchanged.
  // The week counts live on the entries themselves, so the release note below
  // cannot go stale on them.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", year: 2026, entries: [
    // TWO TRAPS, recorded next to the rows they would corrupt.
    //
    // UK PEAK IS 2, NOT 1. The Official Charts Company's song page carries a
    // second block headed "Official Singles Chart Update" whose Peak reads 1 —
    // that is the MIDWEEK FLASH chart, not the Official Singles Chart. A sweep
    // reading the wrong block would "upgrade" this to a No. 1 the song never had.
    //
    // DO NOT take Swedish or Portuguese week counts from Hung Medien. Its
    // swedishcharts.com and portuguesecharts.com mirrors have gone stale for
    // this song — Sweden's last chart date there is 07/08/2026 and Portugal's
    // run stops at week 31 — so they read LOW and would look like a correction.
    // Sverigetopplistan's own statistics endpoint is the source: 20 weeks as of
    // vecka 40 (2 Oct 2026).
    { c: "CH", peak: 1, weeksAtPeak: 16, weeks: 19 }, { c: "NL", peak: 1, weeksAtPeak: 7, weeks: 17, note: "seven weeks at No.1, not consecutive - two from 20 June, then five from 25 July; No.3 on 29 August and 5 September, No.4 on 12 September, No.6 on 19 September. Single Top 100 figures only - the Dutch Top 40 (12 weeks at No.1 to 12 September) is a separate chart this row does not table" }, { c: "SR", peak: 1, weeksAtPeak: 7, weeks: 10 }, { c: "CO", peak: 1, weeksAtPeak: 4, weeks: 10, note: "four weeks at No.1, consecutive - 27 June to 18 July 2026; the weeks figure is a floor, the row's counter read 10 on the 1 August issue before it left the free top 25 and Billboard gates ranks 26-100" }, { c: "AE", peak: 1, weeksAtPeak: 9, weeks: 18 }, { c: "AT", peak: 1, weeksAtPeak: 14, weeks: 18 }, { c: "BE", peak: 1, weeksAtPeak: 9, weeks: 19, note: "Wallonia #1 · Flanders #1 — the run figures are Wallonia's Ultratop 50" }, { c: "SK", peak: 1, weeksAtPeak: 8, weeks: 17, note: "eight weeks at No.1, not consecutive - weeks 26 and 27, then 30 to 35; No.2 in week 36, so the run at the top is final" }, { c: "DE", peak: 1, weeksAtPeak: 13, weeks: 18, note: "thirteen weeks at No.1, consecutive - 3 July to 25 September 2026, the newest issue read at two sources; 18 weeks on chart as printed to 25 September" }, { c: "LB", peak: 1 }, { c: "GR", peak: 1, weeksAtPeak: 7, weeks: 15, note: "seven weeks at No.1, not consecutive - weeks 26, 27, 29 and 30, with a week at No.2 between; IFPI Greece then paused the chart over the summer and returned with a single combined 34 (31-34) edition, No.1, then No.1 again in weeks 35 and 36, No.4 in week 37 and No.7 in week 38. That combined edition is ONE published chart covering four calendar weeks and IFPI's own weeks counter treats it as one - so this figure counts editions, not calendar weeks" }, { c: "AR", peak: 1, weeksAtPeak: 1, weeks: 11 }, { c: "FR", peak: 1, weeksAtPeak: 9, weeks: 18, note: "nine weeks at No.1, consecutive - SNEP's own weekly Top Singles, semaine 28 (10 juillet) through semaine 36 (4 septembre 2026), an unbroken La-Semaine-Derniere-1er chain. THE WEEKS FIGURE IS COUNTED, NOT PUBLISHED: SNEP prints no weeks-on-chart column, only La Semaine Derniere, so 18 is the number of consecutive SNEP issues the record appears in - semaine 22 (29 mai, debut at No.95) through semaine 39 (25 septembre, No.6, credited to SHAKIRA alone as in 35-38). Every other weeks figure in this file is stated by the owning body itself; this one is the exception and says so. Watch semaine 30 (24 juillet): SNEP titles the No.1 row DAI DAI (A CAPPELLA), credited to SHAKIRA alone, with no plain DAI DAI anywhere in that week's Top 200 - same chart entry, different metadata, and the one week that needed a judgement call" }, { c: "LU", peak: 1, weeksAtPeak: 12, weeks: 17, note: "twelve weeks at No.1 and 17 on the chart, as Billboard's own Luxembourg Songs page prints them for the week of 26 September 2026 (LW 1)" }, { c: "PT", peak: 1, weeksAtPeak: 8, weeks: 19 }, { c: "PA", peak: 1, weeksAtPeak: 5, note: "five weeks at No.1, not consecutive - 11 and 18 June, then 2, 9 and 23 July, with a week at No.2 on 25 June; PRODUCE published no Top 50 Internacional for the 16 July week" }, { c: "SE", peak: 1, weeksAtPeak: 7, weeks: 20, note: "seven weeks at No.1, not consecutive - weeks 28-32, then 34 and 35" }, { c: "IT", peak: 1, weeksAtPeak: 4, weeks: 16 }, { c: "IN", peak: 1, weeksAtPeak: 1, weeks: 11 }, { c: "CZ", peak: 1, weeksAtPeak: 3, weeks: 16 }, { c: "IS", peak: 1, note: "Billboard Iceland Songs" }, { c: "VE", peak: 1, weeksAtPeak: 1, weeks: 16 }, { c: "NO", peak: 1, weeksAtPeak: 4 }, { c: "EC", peak: 1 }, { c: "EE", peak: 1 }, { c: "PL", peak: 1, weeksAtPeak: 1, weeks: 14 }, { c: "GLB", peak: 1, weeksAtPeak: 7, weeks: 17, note: "seven weeks at No.1, not consecutive - it fell to No.3 in the 15 August issue and retook the top the following week; the run closed at seven - No.3 on the 12 and 19 September issues, No.4 on 26 September" }, { c: "GLBX", peak: 1, weeksAtPeak: 10, weeks: 18, note: "ten weeks at No.1, consecutive - 4 July to 5 September 2026; No.2 on the 12 and 19 September issues and No.3 on 26 September, so the run is final" },
    { c: "UK", peak: 2, weeksAtPeak: 5, weeks: 17 }, { c: "ES", peak: 2 }, { c: "UY", peak: 2 }, { c: "PR", peak: 2 },
    { c: "BG", peak: 2 }, { c: "CA", peak: 3 }, { c: "SA", peak: 3 }, { c: "SG", peak: 3 }, { c: "IE", peak: 3, weeksAtPeak: 1, weeks: 18 }, { c: "PY", peak: 3 },
    // MK and SI: Radiomonitor's All Radio widget, read 2 Oct 2026. It serves the
    // current week only, so both are floors, not run peaks.
    // HU sits at 8, not the fan-circulated 2: MAHASZ's own Single Top 40 (live
    // week and archive search alike) has the peak at 8 — the "2" belongs to
    // their Editors' Choice/radio lists, which the rules above exclude.
    { c: "HN", peak: 4 }, { c: "SI", peak: 4, note: "Radiomonitor's widget shows the current week only; read 2 Oct 2026, the run's best may be higher." }, { c: "HU", peak: 8 },
    // LT: AGATA's 2026-W40 issue (read 2 Oct 2026) prints 54 | 41 | 18 — 18
    // weeks, one of them at No.5 (W27), and still on the Top 100.
    { c: "LT", peak: 5, weeksAtPeak: 1, weeks: 18 }, { c: "CR", peak: 5 }, { c: "RO", peak: 5 }, { c: "LV", peak: 5 }, { c: "MY", peak: 5 }, { c: "GT", peak: 5 }, { c: "DK", peak: 5 },
    { c: "IL", peak: 5 }, { c: "FI", peak: 6 }, { c: "NI", peak: 6 },
    // NG: 18 weeks, 21 May to 17 Sep 2026 (No.98 on the last); off the 24 Sep
    // issue, so the run is closed — re-read 2 Oct 2026.
    { c: "NG", peak: 7, peakDate: "2026-06-18" }, { c: "TR", peak: 7 },
    { c: "KZ", peak: 8 }, { c: "MK", peak: 9, note: "Radiomonitor's widget shows the current week only; read 2 Oct 2026, the run's best may be higher." }, { c: "AU", peak: 10 },
    { c: "NZ", peak: 13 }, { c: "HR", peak: 13 },
    { c: "EG", peak: 14 }, { c: "CL", peak: 14 }, { c: "US", peak: 17 }, { c: "ZA", peak: 20 },
    { c: "PE", peak: 23 }, { c: "BO", peak: 25 }, { c: "JP", peak: 25 },
    // BR: Billboard Brasil Hot 100. 16 is the body's own "Semanas no Chart"
    // counter at exit (7 Sep 2026, No.92); off the 14, 21 and 28 Sep issues,
    // so the run is closed — read 2 Oct 2026.
    { c: "BR", peak: 27, weeks: 16 },
    { c: "RU", peak: 31 }, { c: "MD", peak: 34 }, { c: "UA", peak: 90 }, { c: "VN", peak: 93 },
  ], note: "No.1 on both Billboard global charts. Also No.1 on Billboard's US World Digital Song Sales and Latin Airplay charts, No.1 on the IFPI Middle East & North Africa chart (No.3 on North Africa), and No.1 on BMAT's Central America & Caribbean airplay chart." },
  { title: "Last Last", year: 2022, entries: [
    // NG 3, not 2: TurnTable Top 50 debut, issue of 19 May 2022 (ttc-proxy chart
    // 1, week 20/2022, id 1096 — rank 3, highestPosition 3); 46 issues in all,
    // never higher, and the Top 100 counter from 7 Jul 2022 reads 4. Re-read
    // 17 Sep 2026 across 229 consecutive issues.
    { c: "ZA", peak: 1 }, { c: "NG", peak: 3, peakDate: "2022-05-19" }, { c: "UK", peak: 4 }, { c: "NZ", peak: 12 },
    { c: "NL", peak: 14 }, { c: "SE", peak: 21 }, { c: "FR", peak: 23 }, { c: "IE", peak: 27 },
    { c: "CA", peak: 30 }, { c: "CH", peak: 38 }, { c: "GLB", peak: 39 }, { c: "US", peak: 44 },
    { c: "BE", peak: 49 }, { c: "AU", peak: 79 }, { c: "PT", peak: 142 },
    // Suriname's Nationale Top 40, read 2 Oct 2026: No.12 on the archive's
    // first list (1–8 Dec 2022, a plain 40-item list ranked by position).
    { c: "SR", peak: 12, note: "Best rank in a published Nationale Top 40 list; the run began before the first list the archive holds (1–8 Dec 2022), so this is a floor." },
  ] },
  { title: "City Boys", year: 2023, entries: [
    { c: "NG", peak: 2, peakDate: "2023-09-07" }, { c: "NL", peak: 14 }, { c: "UK", peak: 14 }, { c: "CH", peak: 24 },
    { c: "FR", peak: 27 }, { c: "IE", peak: 44 }, { c: "SE", peak: 58 }, { c: "CA", peak: 70 },
    { c: "GLB", peak: 143 },
  ] },
  { title: "For My Hand", credit: "feat. Ed Sheeran", year: 2022, entries: [
    { c: "NG", peak: 1, peakDate: "2022-07-14" }, { c: "SR", peak: 3 }, { c: "ZA", peak: 4 }, { c: "UK", peak: 18 }, { c: "DK", peak: 23 },
    { c: "NL", peak: 25 }, { c: "SE", peak: 38 }, { c: "IE", peak: 47 }, { c: "GLB", peak: 52 },
    { c: "CH", peak: 59 }, { c: "CA", peak: 63 }, { c: "FR", peak: 173 },
  ] },
  // From the Black Panther: Wakanda Forever soundtrack. Peaks per the song's
  // cited chart table; its UK Afrobeats No.1, UK Hip-Hop/R&B and US Rhythmic
  // Airplay placings are genre/component/airplay charts, excluded by the rules
  // at the top of this file.
  { title: "Alone", year: 2022, entries: [
    { c: "FR", peak: 19 }, { c: "UK", peak: 28 }, { c: "CH", peak: 45 },
    { c: "IE", peak: 50 }, { c: "NL", peak: 58 }, { c: "CA", peak: 73 }, { c: "PT", peak: 97 },
    { c: "GLB", peak: 143 }, { c: "NG", peak: 17 }
  ] },
  { title: "Cheat on Me", credit: "feat. Dave", year: 2023, entries: [
    { c: "NG", peak: 4, peakDate: "2023-08-31" }, { c: "UK", peak: 19 }, { c: "IE", peak: 42 }, { c: "FR", peak: 109 }, { c: "GLB", peak: 194 },
    // Read 2 Oct 2026: Schweizer Hitparade, 3 Sep 2023 (56, new, 1 week);
    // Sverigetopplistan vecka 35/2023 (65, 1 week).
    { c: "CH", peak: 56 }, { c: "SE", peak: 65 },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, entries: [
    { c: "NG", peak: 8, peakDate: "2023-06-08" }, { c: "UK", peak: 36 }, { c: "NZ", peak: 36 }, { c: "US", peak: 80 },
  ] },
  { title: "Big 7", year: 2023, entries: [{ c: "NG", peak: 2, peakDate: "2023-08-03" }, { c: "UK", peak: 53 }] },
  // The NATIVE's recap of TurnTable's I Told Them... week: "Giza" at No. 2,
  // ahead of City Boys (3), Cheat on Me (4) and Big 7 (5). Its only official
  // national-chart placement — a home smash on the strength of Seyi Vibez.
  { title: "Giza", credit: "feat. Seyi Vibez", year: 2023, entries: [{ c: "NG", peak: 2, peakDate: "2023-08-31" }] },
  { title: "Real Life", credit: "feat. Stormzy", year: 2020, entries: [{ c: "UK", peak: 54 }, { c: "NG", peak: 40 }] },
  { title: "On the Low", year: 2018, entries: [
    { c: "FR", peak: 78 }, { c: "NL", peak: 97 },
  ] },
  // UK 84 removed 2 Oct 2026: Kilometre never made the Official Singles Chart —
  // the OCC prints it only on the Official Afrobeats Chart (No. 1, 15 May 2021),
  // a genre chart; five full Top 100 issues around release (30 Apr–28 May 2021)
  // have no row, and Burna Boy's OCC artist page lists it under Afrobeats only.
  { title: "Kilometre", year: 2021, entries: [{ c: "NG", peak: 1, peakDate: "2021-05-06" }] },
  // CH: Schweizer Hitparade, 1 Jun 2025 (75, new, 1 week). SR: the Nationale
  // Top 40 prints it "Ta Ta Ta — Burna Boy ft Travis Scott", No.6 for four lists
  // from 3–10 Jul 2025. Both read 2 Oct 2026.
  { title: "TaTaTa", credit: "feat. Travis Scott", year: 2025, entries: [{ c: "NG", peak: 5, peakDate: "2025-05-29" }, { c: "SR", peak: 6 }, { c: "CH", peak: 75 }, { c: "UK", peak: 84 }] },
  { title: "Higher", year: 2024, entries: [{ c: "NG", peak: 1, peakDate: "2024-07-11" }, { c: "UK", peak: 99 }] },
  { title: "Love", year: 2025, entries: [{ c: "NG", peak: 1, peakDate: "2025-07-24" }] },
  // ── Nigeria sweep, 18 Sep 2026 ─────────────────────────────────────────
  // Every issue of TurnTable's Official Nigeria Top 100 (306 issues, 5 Nov
  // 2020 → 10 Sep 2026, the Top 50 era included) walked at the body's own
  // archive route; a peak is the best rank in any issue. Rows below had no
  // chart row at all before the sweep — most are album cuts that charted on
  // release week, priced by the same rule as every other entry here. Evidence
  // per row (issue id, date, weeks) in docs/sweeps/burna-boy-nigeria-2026-09-18.md.
  { title: "B. D'OR", credit: "feat. Wizkid", year: 2021, entries: [{ c: "NG", peak: 2, peakDate: "2021-12-23" }] },
  { title: "Bundle by Bundle", year: 2024, entries: [{ c: "NG", peak: 2, peakDate: "2024-12-26" }] },
  { title: "It's Plenty", year: 2022, entries: [{ c: "SR", peak: 2, note: "Best rank in a published Nationale Top 40 list; the run began before the first list the archive holds (1–8 Dec 2022), so this is a floor." }, { c: "NG", peak: 3, peakDate: "2022-07-21" }] },
  { title: "Common Person", year: 2022, entries: [{ c: "NG", peak: 4, peakDate: "2022-08-11" }] },
  { title: "Question", credit: "feat. Don Jazzy", year: 2021, entries: [{ c: "NG", peak: 4, peakDate: "2021-09-02" }] },
  { title: "Update", year: 2025, entries: [{ c: "NG", peak: 4, peakDate: "2025-02-27" }] },
  { title: "Dem Dey", year: 2025, entries: [{ c: "NG", peak: 5, peakDate: "2025-07-17" }] },
  { title: "Different Size", credit: "feat. Victony", year: 2022, entries: [{ c: "NG", peak: 8, peakDate: "2022-07-14" }] },
  { title: "Want It All", credit: "feat. Polo G", year: 2021, entries: [{ c: "NG", peak: 8, peakDate: "2021-10-07" }] },
  { title: "Cloak & Dagger", credit: "feat. J Hus", year: 2022, entries: [{ c: "NG", peak: 9, peakDate: "2022-07-14" }, { c: "UK", peak: 47 }] },
  { title: "No Panic", year: 2025, entries: [{ c: "NG", peak: 13 }] },
  { title: "20 10 20", year: 2020, entries: [{ c: "NG", peak: 14 }] },
  { title: "Change Your Mind", credit: "feat. Shaboozey", year: 2025, entries: [{ c: "NG", peak: 14 }] },
  { title: "Dey Play", year: 2023, entries: [{ c: "NG", peak: 14 }] },
  { title: "Way Too Big", year: 2020, entries: [{ c: "NG", peak: 14 }] },
  { title: "Science", year: 2022, entries: [{ c: "NG", peak: 15 }] },
  { title: "Sweet Love", year: 2025, entries: [{ c: "NG", peak: 15 }] },
  { title: "On Form", year: 2023, entries: [{ c: "NG", peak: 17 }] },
  { title: "Tested, Approved & Trusted", year: 2023, entries: [{ c: "SR", peak: 5 }, { c: "NG", peak: 19 }] },
  { title: "Vanilla", year: 2022, entries: [{ c: "NG", peak: 19 }] },
  { title: "Buy You Life", year: 2025, entries: [{ c: "NG", peak: 21 }] },
  { title: "Normal", year: 2023, entries: [{ c: "NG", peak: 21 }] },
  { title: "Rollercoaster", credit: "feat. J Balvin", year: 2022, entries: [{ c: "NG", peak: 21 }] },
  { title: "28 Grams", year: 2025, entries: [{ c: "NG", peak: 23 }] },
  { title: "Dirty Secrets", year: 2022, entries: [{ c: "NG", peak: 23 }] },
  { title: "I Told Them", credit: "feat. GZA", year: 2023, entries: [{ c: "NG", peak: 23 }] },
  { title: "Don't Let Me Drown", year: 2025, entries: [{ c: "NG", peak: 24 }] },
  { title: "23", year: 2020, entries: [{ c: "NG", peak: 26 }] },
  { title: "Glory", credit: "feat. Ladysmith Black Mambazo", year: 2022, entries: [{ c: "NG", peak: 26 }] },
  { title: "Wild Dreams", credit: "feat. Khalid", year: 2022, entries: [{ c: "NG", peak: 27 }, { c: "SE", peak: 55 }] },
  { title: "Born Winner", year: 2025, entries: [{ c: "NG", peak: 28 }] },
  { title: "Monsters You Made", credit: "feat. Chris Martin", year: 2020, entries: [{ c: "NG", peak: 29 }] },
  { title: "Whiskey", year: 2022, entries: [{ c: "NG", peak: 29 }] },
  { title: "Empty Chairs", credit: "feat. Mick Jagger", year: 2025, entries: [{ c: "NG", peak: 30 }] },
  { title: "Onyeka (Baby)", year: 2020, entries: [{ c: "NG", peak: 30 }] },
  { title: "Toni-Ann Singh", credit: "feat. Popcaan", year: 2022, entries: [{ c: "NG", peak: 30 }] },
  { title: "Solid", credit: "feat. Blxst & Kehlani", year: 2022, entries: [{ c: "NG", peak: 31 }] },
  { title: "Thanks", credit: "feat. J. Cole", year: 2023, entries: [{ c: "NG", peak: 31 }] },
  { title: "If I'm Lying", year: 2023, entries: [{ c: "NG", peak: 33 }] },
  { title: "How Bad Could It Be", year: 2022, entries: [{ c: "NG", peak: 34 }] },
  { title: "Come Gimme", year: 2025, entries: [{ c: "NG", peak: 36 }] },
  { title: "Virgil", year: 2023, entries: [{ c: "NG", peak: 41 }] },
  { title: "Jagele", year: 2022, entries: [{ c: "SR", peak: 24, note: "Best rank in a published Nationale Top 40 list; the run began before the first list the archive holds (1–8 Dec 2022), so this is a floor." }, { c: "NG", peak: 42 }] },
  { title: "Kabiyesi", year: 2025, entries: [{ c: "NG", peak: 43 }] },
  { title: "Pardon", credit: "with Stromae", year: 2025, entries: [{ c: "NG", peak: 56 }] },
  { title: "Ye", year: 2018, entries: [{ c: "NG", peak: 70 }] },
  // ── Charts sweep, 2 Oct 2026 ───────────────────────────────────────────
  // Schweizer Hitparade, 3 Apr 2022: No.78 (new), again No.78 on 24 Apr 2022;
  // 3 weeks. Evidence in docs/sweeps/charts-sweep-2026-10-02.md.
  { title: "Gbona", year: 2018, entries: [{ c: "CH", peak: 78 }] },
  // ── His main-artist credits on another act's record, or a co-billed one ──
  // Spotify's credits panel names Burna Boy a Main Artist on each of these
  // (the credit-role rule, Paul, 6 Oct 2026; Spotify's credits as of 7 Oct
  // 2026), so each is one of his lead releases and sits under Singles, as the
  // same records do in certifications.ts. The credit is kept as the chart
  // prints it; the co-lead tag comes from app/data/creditRoles.ts. All
  // twenty-seven were in featureCharts until 7 Oct 2026
  // (docs/sourcing/credit-roles-2026-10-07.md).
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", year: 2019, entries: [
    { c: "UK", peak: 1, peakDate: "2020-01-03" }, { c: "IE", peak: 2 }, { c: "DK", peak: 11 }, { c: "NL", peak: 25 },
    { c: "CH", peak: 27 }, { c: "SE", peak: 30 }, { c: "AU", peak: 40 }, { c: "AT", peak: 57 },
    { c: "CA", peak: 82 },
    // Read 2 Oct 2026, each row billing Burna Boy in the credit or the title:
    // AGATA 2019-W48 (25, new; 13 weeks); ČNS IFPI CZ Singles Digitál 48/2019
    // (66, 1 week) and SK 48/2019 (48; 8 weeks); GfK 29.11.2019 (75, 1 week).
    // VG-lista's No.26 (2019-48) is NOT added: VG-lista was a Top 20 then.
    { c: "LT", peak: 25 }, { c: "SK", peak: 48 }, { c: "CZ", peak: 66 }, { c: "DE", peak: 75 },
  ] },
  // BE 2 removed 2 Oct 2026: that was Wallonia's Ultratip (the bubbling-under
  // list), an extension chart. My Oasis is in no Ultratop 50 issue on either
  // side (Ultratop's own item page: "BE | Tip (V) | Tip (W)"). LT: AGATA
  // 2020-W33, 71 (3 weeks).
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", year: 2020, entries: [
    { c: "SR", peak: 2 }, { c: "HU", peak: 39 }, { c: "IE", peak: 43 },
    { c: "UK", peak: 43 }, { c: "CH", peak: 52 }, { c: "CA", peak: 70 }, { c: "LT", peak: 71 },
    { c: "AU", peak: 84 }, { c: "PT", peak: 140 },
  ] },
  // AU 37 removed 2 Oct 2026: no We Pray row in any ARIA Top 50 Singles issue
  // from release (26 Aug 2024) to 30 Jun 2025, read issue by issue. The UK 20,
  // IE 7 and IS 30 rows credit Coldplay alone at the bodies and are held for
  // the owner's ruling (docs/sweeps/charts-sweep-2026-10-02.md), not changed.
  { title: "We Pray", credit: "Coldplay ft. Little Simz, Burna Boy, Elyanna & TINI", year: 2024, entries: [
    { c: "LB", peak: 1 }, { c: "NL", peak: 4 }, { c: "HK", peak: 4 }, { c: "IE", peak: 7 }, { c: "AE", peak: 8 },
    { c: "BE", peak: 9 }, { c: "SR", peak: 11 }, { c: "UK", peak: 20 }, { c: "IN", peak: 20 },
    { c: "NZ", peak: 21 }, { c: "CH", peak: 22 }, { c: "AT", peak: 28 }, { c: "IS", peak: 30 }, { c: "AR", peak: 36 },
    { c: "FI", peak: 38 }, { c: "DE", peak: 40 }, { c: "FR", peak: 45 }, { c: "GLB", peak: 50 },
    { c: "ES", peak: 53 }, { c: "PT", peak: 61 }, { c: "IT", peak: 71 }, { c: "SE", peak: 79 }, { c: "NG", peak: 83 },
    { c: "US", peak: 87 }, { c: "CA", peak: 92 },
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
    { c: "DE", peak: 92 }, { c: "AU", peak: 96 }, { c: "NL", peak: 97 }, { c: "PT", peak: 111 }, { c: "NG", peak: 18 }
  ] },
  // 2019 here made the UK #46 impossible: BPI's own register (artist 5863 /
  // title 5511) dates MIST FT BURNA BOY — ROLLIN' to 23 June 2021, and the OCC
  // run that produced the #46 entered on 8 July 2021 for 11 weeks. The year
  // arrived in a bulk chart-expansion commit with no per-row sourcing;
  // certifications.ts, which was written off the BPI row, had 2021 all along.
  { title: "Rollin'", credit: "Mist ft. Burna Boy", year: 2021, entries: [{ c: "UK", peak: 46 }] },
  { title: "Talibans II", credit: "Byron Messia ft. Burna Boy", year: 2023, entries: [
    { c: "CA", peak: 53 }, { c: "US", peak: 99 }, { c: "NG", peak: 16 }
  ] },
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", year: 2025, entries: [{ c: "FR", peak: 61 }, { c: "NG", peak: 36 }] },
  { title: "Only You", credit: "J. Cole ft. Burna Boy", year: 2026, entries: [{ c: "US", peak: 78 }] },
  { title: "Just Like Me", credit: "21 Savage, Burna Boy & Metro Boomin", year: 2024, entries: [{ c: "US", peak: 67 }, { c: "NG", peak: 72 }] },
  // UK 59 removed 2 Oct 2026: it was the Official Streaming Chart, a component
  // chart — the OCC song page carries a Streaming block only, and the Singles
  // Chart of 26 Mar 2021 holds three Bieber tracks, none of them this one.
  // Added the same day: Hitlisten uge 12/2021 (28, 1 week), ČNS IFPI SK 12/2021
  // (49, 1 week), Sverigetopplistan vecka 12/2021 (100, 1 week).
  { title: "Loved by You", credit: "Justin Bieber ft. Burna Boy", year: 2021, entries: [{ c: "NG", peak: 4, peakDate: "2021-03-25" }, { c: "DK", peak: 28 }, { c: "SK", peak: 49 }, { c: "US", peak: 87 }, { c: "SE", peak: 100 }] },
  { title: "Tshwala Bam (Remix)", credit: "TitoM, Yuppe & Burna Boy ft. S.N.E", year: 2024, entries: [{ c: "NG", peak: 1, peakDate: "2024-05-23" }] },
  // From the Nigeria sweep, 18 Sep 2026 (every issue of TurnTable's Official
  // Nigeria Top 100, its own archive route): credits as the chart prints them.
  // Evidence per row in docs/sweeps/burna-boy-nigeria-2026-09-18.md.
  { title: "Laho II", credit: "Shallipopi & Burna Boy", year: 2025, entries: [{ c: "NG", peak: 2, peakDate: "2025-05-01" }] },
  { title: "Do I", credit: "Phyno & Burna Boy", year: 2023, entries: [{ c: "NG", peak: 6, peakDate: "2024-01-11" }] },
  { title: "Rotate", credit: "Becky G, Burna Boy", year: 2021, entries: [{ c: "NG", peak: 8, peakDate: "2021-03-04" }] },
  { title: "Second Sermon (Remix)", credit: "Black Sherif ft. Burna Boy", year: 2021, entries: [{ c: "NG", peak: 9, peakDate: "2022-04-14" }] },
  { title: "All My Life (Burna Boy Remix)", credit: "Lil Durk & J. Cole ft. Burna Boy", year: 2023, entries: [{ c: "NG", peak: 19 }] },
  { title: "Birthday", credit: "Fredo, Burna Boy & Steel Banglez", year: 2026, entries: [{ c: "NG", peak: 34 }] },
  { title: "I FEEL IT", credit: "Jon Bellion ft. Burna Boy", year: 2021, entries: [{ c: "NG", peak: 36 }] },
  { title: "Yaba Buluku (Remix)", credit: "DJ Tárico & Burna Boy ft. Preck & Nelson Tivane", year: 2021, entries: [{ c: "NG", peak: 39 }] },
  { title: "Coming Home", credit: "Usher & Burna Boy", year: 2024, entries: [{ c: "NG", peak: 58 }] },
  { title: "ROBOSHOTTA", credit: "Busta Rhymes ft. Burna Boy", year: 2023, entries: [{ c: "NG", peak: 59 }] },
  { title: "Masculine", credit: "J Hus ft. Burna Boy", year: 2023, entries: [{ c: "UK", peak: 24 }, { c: "IE", peak: 77 }, { c: "NG", peak: 80 }] },
  { title: "Teary Eyes", credit: "YoungBoy Never Broke Again & Burna Boy", year: 2026, entries: [{ c: "NG", peak: 85 }] },
  // From the charts sweep, 2 Oct 2026: Official Singles Chart (OCC) and IRMA's
  // Top 100, each read at the weekly issue; credits as the OCC prints them.
  // Evidence in docs/sweeps/charts-sweep-2026-10-02.md.
  { title: "Play Play", credit: "J Hus ft. Burna Boy", year: 2020, entries: [{ c: "UK", peak: 11 }, { c: "IE", peak: 38 }] },
  { title: "Good Time", credit: "J Hus ft. Burna Boy", year: 2017, entries: [{ c: "UK", peak: 88 }] },
];

export const featureCharts: ChartRelease[] = [
  { title: "Jerusalema (Remix)", credit: "Master KG ft. Burna Boy & Nomcebo Zikode", year: 2020, entries: [
    { c: "BE", peak: 1 }, { c: "CH", peak: 1 }, { c: "HU", peak: 1 }, { c: "NL", peak: 1 },
    { c: "SR", peak: 1 }, { c: "AT", peak: 2 }, { c: "FR", peak: 2 },
    { c: "IT", peak: 2 }, { c: "DE", peak: 3 }, { c: "SE", peak: 3 }, { c: "IE", peak: 4 },
    { c: "ES", peak: 10 }, { c: "PT", peak: 15 }, { c: "GLB", peak: 38 }, { c: "SK", peak: 46 }, { c: "UK", peak: 55 }, { c: "NG", peak: 20 }
  ] },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", year: 2019, entries: [
    { c: "BE", peak: 5 }, { c: "UK", peak: 8 }, { c: "IE", peak: 20 }, { c: "FR", peak: 28 },
    // Read 2 Oct 2026: AGATA 2019-W35 and W36 (46; 10 weeks); Schweizer
    // Hitparade 25 Aug 2019 (51, new; 3 weeks).
    { c: "LT", peak: 46 }, { c: "CH", peak: 51 },
    { c: "AU", peak: 77 },
  ] },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", year: 2019, entries: [{ c: "UK", peak: 46 }] },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", year: 2020, entries: [{ c: "NG", peak: 1, peakDate: "2020-11-05" }, { c: "UK", peak: 67 }] },
  { title: "Sungba (Remix)", credit: "Asake ft. Burna Boy", year: 2022, entries: [{ c: "NG", peak: 1, peakDate: "2022-03-31" }] },
  // ── Nigeria sweep, 18 Sep 2026 ─────────────────────────────────────────
  // Every issue of TurnTable's Official Nigeria Top 100 (306 issues, 5 Nov
  // 2020 → 10 Sep 2026, the Top 50 era included) walked at the body's own
  // archive route; a peak is the best rank in any issue. Feature rows below had no chart row before the sweep; the credit is as
  // the chart prints it, in the artists' own spellings. Evidence
  // per row (issue id, date, weeks) in docs/sweeps/burna-boy-nigeria-2026-09-18.md.
  { title: "Hey Boy", credit: "Sia ft. Burna Boy", year: 2021, entries: [{ c: "NG", peak: 18 }] },
  // ── Charts sweep, 2 Oct 2026 ───────────────────────────────────────────
  // UK and Irish feature rows that had no chart row at all. Official Singles
  // Chart (OCC) and IRMA's Top 100, each read at the weekly issue: credits as
  // the OCC prints them. Evidence in docs/sweeps/charts-sweep-2026-10-02.md.
  { title: "She's Not Anyone", credit: "D-Block Europe ft. Burna Boy", year: 2022, entries: [{ c: "UK", peak: 30 }, { c: "IE", peak: 86 }] },
  { title: "Siberia", credit: "Headie One ft. Burna Boy", year: 2021, entries: [{ c: "UK", peak: 35 }, { c: "IE", peak: 72 }] },
];

// Helpers
// chartTier is pure and lives in lib/chartTier.ts, so a client component can
// use it without importing this dataset.
export { chartTier } from "../lib/chartTier";

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
// the subset where a release actually reached No. 1, and it is far smaller. A
// stat tile pairing a No. 1s count with chartCountryCount says he topped the
// chart in every territory he has ever appeared in, which is not what the data
// says. Use this wherever the figure beside a No. 1s count is meant to
// describe those No. 1s. (Both figures move with the data, so this comment
// no longer quotes them — a stale numeral in a comment is the same defect it
// is warning about.)
export const numberOneCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.filter((e) => e.peak === 1).map((e) => e.c))
).size;

/** A chart NOT published by a national industry body: an airplay chart, or one
 *  compiled by a broadcast/streaming monitor on its own account.
 *
 *  Named monitors rather than a country list on purpose — a list would have to
 *  be remembered every time a territory is added, and the split below shipped
 *  wrong precisely because nothing was remembering. Any new Monitor Latino or
 *  TopHit row is classified the moment it lands. `airplay` catches PROPHON,
 *  which IS Bulgaria's national body but publishes only an airplay chart; the
 *  monitor names catch Russia, whose TopHit row is streaming and so says
 *  nothing about airplay. */
const NOT_A_NATIONAL_BODY =
  /airplay|Ipsos|BMAT|Radiomonitor|TopHit|Monitor Latino|Mediabase|Record Report/i;

// Where the tracked charts actually come from, counted from the data rather
// than asserted. Published on /methodology and /records/charts so the mix of
// sources is visible instead of implied.
//
// The classifier used to have three buckets and no idea what an airplay
// carve-out was: anything whose body did not begin "Billboard" was counted as
// "national industry-body charts", so all fifteen airplay charts and Russia's
// TopHit streaming row were published as national bodies — 53 where the honest
// figure is 37, on the two pages that argue for this site's rigour, and in
// direct contradiction of the airplay rule stated three paragraphs above.
// Monitor Latino is not Guatemala's industry body; TopHit is not Ukraine's.
export const chartSourceSplit = (() => {
  const used = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)));
  let nationalBody = 0;
  let airplayMonitor = 0;
  let billboardCountry = 0;
  let global = 0;
  for (const code of used) {
    const meta = CHART_COUNTRIES[code];
    if (!meta) continue;
    if (code === "GLB" || code === "GLBX") global += 1;
    else if (/^Billboard/i.test(meta.body)) billboardCountry += 1;
    else if (NOT_A_NATIONAL_BODY.test(meta.body)) airplayMonitor += 1;
    else nationalBody += 1;
  }
  return { nationalBody, airplayMonitor, billboardCountry, global };
})();

export const chartCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.map((e) => e.c))
).size;
