/**
 * "Dai Dai", week by week — the data the replay under "The world takeover"
 * plays (app/components/DaiDaiReplay.tsx).
 *
 * The shape is the one docs/design/dai-dai-redesign/research/replay.md §3
 * defines: CountryRun, RunPoint, and Status = on | off | unread | no-chart.
 *
 * WHAT IS IN HERE, AND WHAT IS NOT
 *
 * The site stores Dai Dai's chart run as peaks, not runs. This file holds the
 * weekly positions the repo ALREADY states somewhere — in docs/sourcing/, in
 * the `note` strings of app/data/charts.ts and in the dated entries of
 * app/data/updates.ts (replay.md §1b) — transcribed, with each reading pointing
 * at the file that states it and quoting the words that do. Nothing was read
 * afresh for this file.
 *
 * A week the repo does not state is `unread`. It is NEVER filled from the week
 * before or after it: a hatched cell on the map is the honest picture, and it
 * is the rule the whole site follows (see daiDai.ts on the unpublished 93).
 *
 * Only readings a body's own date or week label can place are transcribed. A
 * feed entry that names no chart date ("Up to No. 18 in the UK … its 5th week
 * there") cannot be put on an issue, so it is not — which is why the UK plays
 * as "run not recorded" even though the feed mentions several of its weeks
 * (and why its one dated line does not place it either: see the UK note below
 * TRANSCRIPTIONS).
 * Where a span is written in by its ends ("No. 1 for 15 straight weeks from 14
 * June to 20 September"), every issue between is stated by that sentence.
 * A week is read only when a line states it: the issue itself, a run whose
 * ends take it in, or the body's own last-week column printed on the next
 * issue ("LW 1"). A week that only a count pins — "a 13th week at No. 1" with
 * eleven dated and one issue between — is NOT read (ruling of 26 Sep 2026):
 * the quote a reader is shown has to say the week, not imply it. Every
 * reading carries the quote that states it (RunPoint.quote), and
 * tests/daiDaiRuns.test.tsx finds each one in its file.
 *
 * Peaks, weeks at the peak and weeks on the chart are READ from charts.ts,
 * never retyped (tests/daiDaiRuns.test.tsx). The Billboard Global 200 run is
 * read from DAI_DAI_GLOBAL_200_RUN, the one the story's chapter 02 draws.
 *
 * FRAMES
 *
 * A frame is a calendar week, Monday to Sunday, from the week of release to
 * the week of the latest issue held. Each body dates its own week differently
 * (Sunday-dated Swiss issues, Billboard issue dates that run ahead of their
 * tracking week, ISO week numbers in Sweden, Poland, Greece and Slovakia), so
 * a reading sits in the frame that contains the body's own date for it, and
 * the country card always shows that date or label — never the frame's.
 */
import { allChartItems, CHART_COUNTRIES, type ChartEntry } from "./charts";
import { A2_TO_ISO } from "../lib/isoCodes";
import { DAI_DAI_GLOBAL_200_RUN, DAI_DAI_RELEASE_DATE } from "./daiDai";

export type Family = "official" | "platform"; // never shown on one layer together
export type Cadence = "weekly" | "daily";
/**
 * on       = read, on the chart at `pos`
 * off      = read, not on the chart (before the debut the body's own run states)
 * unread   = no reading exists in our records — the common case
 * no-chart = the body published no chart that week (PA 16 Jul; GR summer 31-34)
 */
export type Status = "on" | "off" | "unread" | "no-chart";

export interface RunPoint {
  /** ISO date (a Monday) of the frame this reading belongs to. */
  frame: string;
  /** The body's OWN date for that issue. Week-numbered bodies that print no
   *  date (Sweden, Portugal, Greece, Slovakia, Norway) carry the Monday of
   *  that ISO week, and their `label` is the body's own number. */
  chartDate: string;
  /** The body's own label for the issue: "semaine 28", "W34", "v33". */
  label?: string;
  status: Status;
  /** Only when status === "on". */
  pos?: number;
  /** The repo file that states it — shown in the card's footnote. */
  source: string;
  /** The words in that file that state this week ("" when unread). Kept on
   *  the server: tests/daiDaiRuns.test.tsx finds every one in its file. */
  quote: string;
}

export interface CountryRun {
  /** A2 as CHART_COUNTRIES uses it (UK, not GB); "GLB"/"GLBX" for the globals. */
  code: string;
  /** ISO numeric (A2_TO_ISO), the id space of the map shapes; absent for the globals. */
  iso?: number;
  /** CHART_COUNTRIES[code].body */
  body: string;
  family: Family;
  cadence: Cadence;
  /** === the charts.ts peak (test-enforced; read, never typed here). */
  peak: number;
  weeksAtPeak?: number;
  weeks?: number;
  /** One point per frame for a recorded run; [] = peak only, run not recorded. */
  points: RunPoint[];
}

/** Derived, not stored. The two Billboard globals are not countries: they
 *  sit in their own tiles and are counted in none of these. */
export interface ReplayFrame {
  frame: string;
  /** Status "on" only, sorted by position. */
  ranked: { code: string; pos: number }[];
  /** Recorded countries with no reading this frame. */
  unread: string[];
  /** Recorded countries whose body published no chart this frame. */
  noChart: string[];
  /** READ No. 1s only. */
  numberOnes: number;
}

// ── Dates ────────────────────────────────────────────────────────────────────

const DAY = 86_400_000;
const ms = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const iso = (t: number) => new Date(t).toISOString().slice(0, 10);
const addDays = (d: string, n: number) => iso(ms(d) + n * DAY);

/** The Monday of the calendar week that contains `d`. */
export function frameOf(d: string): string {
  const dow = new Date(ms(d)).getUTCDay(); // 0 = Sunday
  return addDays(d, -((dow + 6) % 7));
}

/** The Monday of ISO week `w` of 2026 (the only year this run spans). */
function isoWeekMonday(w: number): string {
  // ISO week 1 is the week with 4 January in it.
  const w1 = frameOf("2026-01-04");
  return addDays(w1, (w - 1) * 7);
}

/** ISO week number of a date. */
function isoWeekOf(d: string): number {
  return Math.round((ms(frameOf(d)) - ms(frameOf("2026-01-04"))) / (7 * DAY)) + 1;
}

// ── The transcription ────────────────────────────────────────────────────────

interface Evidence {
  /** The repo file that states it. */
  file: string;
  /** Words from that file, verbatim apart from whitespace and **bold** marks —
   *  tests/daiDaiRuns.test.tsx finds every one of them in its file. */
  quote: string;
}

interface Reading {
  /** The body's own date for the issue (see RunPoint.chartDate). */
  date: string;
  status: "on" | "off" | "no-chart"; // "unread" is never written: it is what a week without a reading IS
  pos?: number;
  label?: string;
  /** Index into the run's evidence. */
  ev: number;
}

interface Transcription {
  code: string;
  evidence: Evidence[];
  readings: Reading[];
  /** The issue the body's own run starts on, where the repo states the debut:
   *  earlier issues are "off" — read, not on the chart. Absent = unknown, so
   *  earlier issues are unread like any other. */
  debut?: string;
  /** The body's own label for an issue, for weeks with no reading. */
  labelOf?: (chartDate: string) => string;
}

const on = (date: string, pos: number, ev: number, label?: string): Reading => ({ date, status: "on", pos, ev, label });

/** Every issue from `from` to `to` inclusive, seven days apart, at `pos` —
 *  for a span the repo states by its two ends. */
function span(from: string, to: string, pos: number, ev: number, labelOf?: (d: string) => string): Reading[] {
  const out: Reading[] = [];
  for (let d = from; ms(d) <= ms(to); d = addDays(d, 7)) out.push(on(d, pos, ev, labelOf?.(d)));
  return out;
}

// Week-numbered bodies. The date each one carries, and its own label.
/** SNEP dates a week "semaine du <Friday>": semaine 28 = 10 juillet. */
const snep = (w: number) => addDays(isoWeekMonday(w), 4);
const snepLabel = (d: string) => `semaine ${isoWeekOf(d)}`;
/** ZPAV's weeks run Friday to Thursday; W23 is 29 May–4 Jun, so the issue
 *  carries its last day, which falls in ISO week 23. */
const zpav = (w: number) => addDays(isoWeekMonday(w), 3);
const zpavLabel = (d: string) => `W${isoWeekOf(d)}`;
/** Sverigetopplistan's "v28", AFP's "Semana 27" (S27), IFPI Greece's and
 *  IFPI ČNS's week numbers, VG-lista's week numbers: no date is held for any
 *  of them, so the issue carries the Monday of that ISO week. */
const wk = (w: number) => isoWeekMonday(w);
const vLabel = (d: string) => `v${isoWeekOf(d)}`;
const sLabel = (d: string) => `S${isoWeekOf(d)}`;
const wLabel = (d: string) => `W${isoWeekOf(d)}`;

const RUNS_DOC = "docs/sourcing/DAI-DAI-RUNS-2026-08-29.md";
const CHARTS = "app/data/charts.ts";
const FEED = "app/data/updates.ts";
const SWEEP_0906 = "docs/sweeps/RESUME-2026-09-06.md";

const TRANSCRIPTIONS: Transcription[] = [
  {
    // Schweizer Hitparade, Sunday-dated.
    code: "CH",
    evidence: [
      { file: RUNS_DOC, quote: "a run table of 24.05 #33 → 09.08 #1 showing No. 1 in the nine weeks from 14.06" },
      { file: FEED, quote: "the Schweizer Hitparade dated 13 September keeps “Dai Dai” at the top for the 14th consecutive chart since 14 June" },
      { file: FEED, quote: "A 15th straight week at No. 1 in Switzerland: the Schweizer Hitparade dated 20 September kept “Dai Dai” at the top in its 18th week on the chart" },
    ],
    // The run table starts at 24.05: hitparade.ch lists a song's run from its
    // first chart, and 24 May to 20 Sep is the 18 weeks the 20 Sep entry says.
    debut: "2026-05-24",
    readings: [on("2026-05-24", 33, 0), ...span("2026-06-14", "2026-09-13", 1, 1), on("2026-09-20", 1, 2)],
  },
  {
    // ZPAV OLiS Streaming Top 100 — the only full table in the repo.
    code: "PL",
    evidence: [
      { file: "docs/sourcing/POLAND-OLIS.md", quote: "a full `history.positions_on_list[]` — every week the record has charted" },
      { file: "docs/sourcing/POLAND-OLIS.md", quote: "| W23 | 29 May–4 Jun | 87 | | W24 | 5–11 Jun | 72 | | W25 | 12–18 Jun | 26 | | W26 | 19–25 Jun | 34 | | W27 | 26 Jun–2 Jul | 10 | | W28 | 3–9 Jul | 9 | | W29 | 10–16 Jul | 19 | | W30 | 17–23 Jul | 4 | | W31 | 24–30 Jul | 4 | | W32 | 31 Jul–6 Aug | 5 | | W33 | 7–13 Aug | 9 | | W34 | 14–20 Aug | 1 |" },
    ],
    debut: zpav(23),
    labelOf: zpavLabel,
    readings: (
      [[23, 87], [24, 72], [25, 26], [26, 34], [27, 10], [28, 9], [29, 19], [30, 4], [31, 4], [32, 5], [33, 9], [34, 1]] as const
    ).map(([w, pos]) => on(zpav(w), pos, 1, `W${w}`)),
  },
  {
    // Single Top 100, Saturday-dated (dutchcharts.nl's own week-by-week table).
    code: "NL",
    evidence: [
      { file: RUNS_DOC, quote: "20.06 #1, 27.06 #1, then 04.07–18.07 at #2, then 25.07 through 22.08 at #1" },
      { file: RUNS_DOC, quote: "it sits at No. 3 on the 29/08/2026 chart" },
      { file: CHARTS, quote: "No.3 on 29 August and 5 September, No.4 on 12 September, No.6 on 19 September" },
    ],
    readings: [
      on("2026-06-20", 1, 0),
      on("2026-06-27", 1, 0),
      ...span("2026-07-04", "2026-07-18", 2, 0),
      ...span("2026-07-25", "2026-08-22", 1, 0),
      on("2026-08-29", 3, 1),
      on("2026-09-05", 3, 2),
      on("2026-09-12", 4, 2),
      on("2026-09-19", 6, 2),
    ],
  },
  {
    // Billboard Luxembourg Songs, issue-dated (Saturdays).
    code: "LU",
    evidence: [
      { file: RUNS_DOC, quote: "Luxembourg — eight consecutive, 11 Jul → 29 Aug. Debut 6 Jun at #15." },
      { file: SWEEP_0906, quote: "Billboard Luxembourg Songs, Week of September 5, 2026: \"Dai Dai (FIFA World Cup Official Song 2026) — Shakira X Burna Boy\" at No.1 with LW 1, PEAK 1, WEEKS 14" },
      { file: CHARTS, quote: "as Billboard's own Luxembourg Songs page prints them for the week of 26 September 2026 (LW 1)" },
      { file: FEED, quote: "spends a 12th week at No. 1 on Billboard's Luxembourg Songs chart (issue of 26 September, 17 weeks on it)" },
    ],
    debut: "2026-06-06",
    // Each read week has a line that says it: the run 11 Jul → 29 Aug; the
    // issue of 5 Sep, read at the body in the 6 Sep sweep; 19 Sep by the "LW
    // 1" Billboard printed on the 26 Sep issue; and 26 Sep itself. The issue of
    // 12 Sep is stated by no line — only the count of twelve implies it — so it
    // is unread (ruling of 26 Sep 2026).
    readings: [
      on("2026-06-06", 15, 0),
      ...span("2026-07-11", "2026-08-29", 1, 0),
      on("2026-09-05", 1, 1),
      on("2026-09-19", 1, 2),
      on("2026-09-26", 1, 3),
    ],
  },
  {
    // Ö3 Austria Top 40, Friday-dated.
    code: "AT",
    evidence: [
      { file: RUNS_DOC, quote: "No. 1 is confirmed on 26 Jun, 17 Jul, 24 Jul, 31 Jul, 7 Aug, 14 Aug, 21 Aug and 28 Aug." },
      // The run that takes in 3 and 10 Jul, the two issues the Wayback captures
      // above could not re-read. The 6 Sep sweep (applied in #216) transcribed
      // it from the Ö3 Top 40 archive at austriancharts.at, a Hung Medien site.
      { file: SWEEP_0906, quote: "then No.1 every week from 26.06.2026 to 04.09.2026 = 11 consecutive" },
      { file: SWEEP_0906, quote: "\"Single Charts vom 4. September 2026\": row 1 reads \"DW 1 / LW 1 / WW 15 / Dai Dai / Shakira & Burna Boy\"" },
      { file: FEED, quote: "Austria's Ö3 Top 40 of 18 September gave it a 13th week at No. 1 there" },
    ],
    // 26 Jun and 17 Jul → 28 Aug read at the body (Wayback); 3 and 10 Jul in
    // the run 26 Jun → 4 Sep; 4 Sep off Ö3's own chart; 18 Sep in the feed.
    // The issue of 11 Sep is stated by no line — only the count of thirteen
    // implies it — so it is unread (ruling of 26 Sep 2026).
    readings: [
      on("2026-06-26", 1, 0),
      on("2026-07-03", 1, 1),
      on("2026-07-10", 1, 1),
      ...span("2026-07-17", "2026-08-28", 1, 0),
      on("2026-09-04", 1, 2),
      on("2026-09-18", 1, 3),
    ],
  },
  {
    // Offizielle Deutsche Charts, Friday-dated. Nine weeks from the 3 Jul
    // chart are the issues of 3 Jul to 28 Aug (the last one's week runs to
    // 3 Sep). The two later No. 1 weeks charts.ts counts are undated here, so
    // those issues stay unread.
    code: "DE",
    evidence: [
      { file: RUNS_DOC, quote: "Germany No. 1 in the nine weeks 3 Jul → 3 Sep. The three weeks before are read and are *not* No. 1: 26 Jun #2, 19 Jun #2, 12 Jun #11." },
    ],
    readings: [on("2026-06-12", 11, 0), on("2026-06-19", 2, 0), on("2026-06-26", 2, 0), ...span("2026-07-03", "2026-08-28", 1, 0)],
  },
  {
    // SNEP Top Singles, "semaine du" a Friday. The 16 weeks are consecutive
    // SNEP issues from semaine 22, so every issue before it is off.
    code: "FR",
    evidence: [
      { file: CHARTS, quote: "semaine 22 (29 mai, debut at No.95) through semaine 37 (11 septembre, No.3, credited to SHAKIRA alone as in 36)" },
      { file: CHARTS, quote: "SNEP's own weekly Top Singles, semaine 28 (10 juillet) through semaine 36 (4 septembre 2026), an unbroken La-Semaine-Derniere-1er chain" },
      { file: FEED, quote: "SNEP's Top Singles for the semaine du 11 septembre has “Dai Dai” at No. 3, down from No. 1" },
    ],
    debut: snep(22),
    labelOf: snepLabel,
    readings: [on(snep(22), 95, 0, "semaine 22"), ...span(snep(28), snep(36), 1, 1, snepLabel), on(snep(37), 3, 2, "semaine 37")],
  },
  {
    // Sverigetopplistan, ISO week numbers; "counted, v21–v35" is the whole run.
    code: "SE",
    evidence: [
      { file: RUNS_DOC, quote: "Sweden No. 1 in v28–v32, v34, v35 — seven, not consecutive: it fell to #2 in v33 behind Victor Leksell & Molly Sandén's \"Tänk om\". Run v21 #96 → v35 #1." },
    ],
    debut: wk(21),
    labelOf: vLabel,
    readings: [on(wk(21), 96, 0, "v21"), ...span(wk(28), wk(32), 1, 0, vLabel), on(wk(33), 2, 0, "v33"), on(wk(34), 1, 0, "v34"), on(wk(35), 1, 0, "v35")],
  },
  {
    // AFP Top 200 Singles, by semana.
    code: "PT",
    evidence: [{ file: RUNS_DOC, quote: "Portugal — eight consecutive, Semanas 27–34. Debut S21 at #182." }],
    debut: wk(21),
    labelOf: sLabel,
    readings: [on(wk(21), 182, 0, "S21"), ...span(wk(27), wk(34), 1, 0, sLabel)],
  },
  {
    // IFPI ČNS Singles Digitál Top 100, by week number.
    code: "SK",
    evidence: [
      { file: CHARTS, quote: "eight weeks at No.1, not consecutive - weeks 26 and 27, then 30 to 35; No.2 in week 36, so the run at the top is final" },
    ],
    labelOf: wLabel,
    readings: [on(wk(26), 1, 0, "W26"), on(wk(27), 1, 0, "W27"), ...span(wk(30), wk(35), 1, 0, wLabel), on(wk(36), 2, 0, "W36")],
  },
  {
    // IFPI Greece Digital Singles Chart (International), by week number. The
    // summer pause published ONE combined edition for weeks 31-34 (IFPI's own
    // counter treats it as one): weeks 31-33 had no chart, and the combined
    // edition sits in week 34, where its number is.
    code: "GR",
    evidence: [
      { file: CHARTS, quote: "seven weeks at No.1, not consecutive - weeks 26, 27, 29 and 30, with a week at No.2 between; IFPI Greece then paused the chart over the summer and returned with a single combined 34 (31-34) edition, No.1, then No.1 again in weeks 35 and 36" },
      { file: RUNS_DOC, quote: "with week 28 spent at #2 behind Hugel's" },
      { file: "docs/sourcing/GREECE-2026-W36.md", quote: "1 | Shakira, Burna Boy | Dai Dai | Sony-Warner | USQX92602560 | P | 1 | 13 | 1 | 2026_35 | -" },
    ],
    labelOf: wLabel,
    readings: [
      on(wk(26), 1, 0, "W26"),
      on(wk(27), 1, 0, "W27"),
      on(wk(28), 2, 1, "W28"),
      on(wk(29), 1, 0, "W29"),
      on(wk(30), 1, 0, "W30"),
      ...[31, 32, 33].map((w): Reading => ({ date: wk(w), status: "no-chart", ev: 0, label: "31-34 (combined)" })),
      on(wk(34), 1, 0, "31-34 (combined)"),
      on(wk(35), 1, 0, "W35"),
      on(wk(36), 1, 2, "W36"),
    ],
  },
  {
    // VG-lista, by week number. Four in-run weeks read from Wayback; the No. 1
    // run starts at week 31 and is four weeks long (charts.ts weeksAtPeak,
    // which the test holds this run's No. 1 count to), and the feed
    // had the fourth on 22 Aug — before week 35's list existed — so the four
    // are weeks 31 to 34.
    code: "NO",
    evidence: [
      { file: RUNS_DOC, quote: "All four readable in-run weeks show the song not at No. 1 — wk26 #4, wk27 #2, wk29 #3, wk30 #2" },
      { file: RUNS_DOC, quote: "this repo says the Norwegian run starts at week 31" },
      { file: FEED, quote: "Norway for a 4th" },
    ],
    labelOf: wLabel,
    readings: [on(wk(26), 4, 0, "W26"), on(wk(27), 2, 0, "W27"), on(wk(29), 3, 0, "W29"), on(wk(30), 2, 0, "W30"), ...span(wk(31), wk(34), 1, 1, wLabel)],
  },
  {
    // PRODUCE Top 50 Internacional, Thursday-dated.
    code: "PA",
    evidence: [
      { file: CHARTS, quote: "five weeks at No.1, not consecutive - 11 and 18 June, then 2, 9 and 23 July, with a week at No.2 on 25 June; PRODUCE published no Top 50 Internacional for the 16 July week" },
    ],
    readings: [
      on("2026-06-11", 1, 0),
      on("2026-06-18", 1, 0),
      on("2026-06-25", 2, 0),
      on("2026-07-02", 1, 0),
      on("2026-07-09", 1, 0),
      { date: "2026-07-16", status: "no-chart", ev: 0 },
      on("2026-07-23", 1, 0),
    ],
  },
  {
    // Billboard Colombia Songs, issue-dated (Saturdays).
    code: "CO",
    evidence: [{ file: CHARTS, quote: "four weeks at No.1, consecutive - 27 June to 18 July 2026" }],
    readings: span("2026-06-27", "2026-07-18", 1, 0),
  },
  {
    // Billboard Global Excl. US, issue-dated (Saturdays).
    code: "GLBX",
    evidence: [
      { file: RUNS_DOC, quote: "Global Excl. US — nine consecutive, 4 Jul → 29 Aug. Debut 30 May at #166." },
      { file: CHARTS, quote: "ten weeks at No.1, consecutive - 4 July to 5 September 2026; No.2 on the 12 and 19 September issues and No.3 on 26 September" },
    ],
    debut: "2026-05-30",
    readings: [on("2026-05-30", 166, 0), ...span("2026-07-04", "2026-09-05", 1, 1), on("2026-09-12", 2, 1), on("2026-09-19", 2, 1), on("2026-09-26", 3, 1)],
  },
  {
    // Billboard Global 200: READ from DAI_DAI_GLOBAL_200_RUN (chapter 02's
    // figure), whose own comment carries its sources. A null there is unread.
    code: "GLB",
    evidence: [
      { file: "app/data/daiDai.ts", quote: "export const DAI_DAI_GLOBAL_200_RUN" },
      { file: RUNS_DOC, quote: "Debut 6 Jun at #114." },
    ],
    debut: DAI_DAI_GLOBAL_200_RUN[0].issue,
    readings: DAI_DAI_GLOBAL_200_RUN.flatMap((r) => (r.pos === null ? [] : [on(r.issue, r.pos, 0)])),
  },
];

// THE UK, AND WHY IT STAYS "RUN NOT RECORDED" (ruling of 26 Sep 2026)
//
// The page's own UK row ends "counted through the chart of 24 September (No.
// 31)". The Official Charts Company runs its chart weeks Friday to Thursday and
// dates a chart by its first day; 24 September 2026 is a Thursday, the LAST
// day of the week that chart covers (18–24 Sep). So the line names that week
// by its end, not by the date the body gives it, and the week straddles two of
// these Monday-to-Sunday frames: dated by the body's own first day (18 Sep) it
// sits in the frame of 14 Sep; dated as the line prints it, in the frame of 21
// Sep. One line, two frames — it does not map to one frame unambiguously, so
// the UK is not placed on either. The dated UK run the 6 Sep sweep copied off
// the OCC's song page (docs/sweeps/RESUME-2026-09-06.md: "14 weeks —
// 11/06/2026 to 10/09/2026") prints the same Thursday dates, so it has the same
// problem and is not transcribed either.

// ── Building the runs ────────────────────────────────────────────────────────

const daiDaiRelease = allChartItems.find((r) => r.title === "Dai Dai");
const daiDaiEntries: ChartEntry[] = daiDaiRelease?.entries ?? [];

/** The replay's frames: every calendar week from the week of release to the
 *  week of the latest issue this file holds. */
export const daiDaiFrames: string[] = (() => {
  const first = frameOf(DAI_DAI_RELEASE_DATE);
  const last = frameOf(
    TRANSCRIPTIONS.flatMap((t) => t.readings.map((r) => r.date)).reduce((a, b) => (ms(a) > ms(b) ? a : b)),
  );
  const out: string[] = [];
  for (let f = first; ms(f) <= ms(last); f = addDays(f, 7)) out.push(f);
  return out;
})();

/** Each transcription as the RunPoint series it stands for: one point per
 *  frame. A frame's issue is the one seven-day step of the body's calendar
 *  that falls in it; with no reading for that issue it is unread — or off,
 *  when it comes before a debut the body's own run states. */
function pointsOf(t: Transcription): RunPoint[] {
  const byDate = new Map(t.readings.map((r) => [r.date, r]));
  const anchor = t.readings[0].date;
  return daiDaiFrames.map((frame) => {
    // The issue in this frame: the anchor moved by whole weeks into it.
    const weeks = Math.floor((ms(frame) - ms(frameOf(anchor))) / (7 * DAY));
    const chartDate = addDays(anchor, weeks * 7);
    const r = byDate.get(chartDate);
    if (r) {
      return {
        frame,
        chartDate,
        label: r.label ?? t.labelOf?.(chartDate),
        status: r.status,
        ...(r.status === "on" ? { pos: r.pos } : {}),
        source: t.evidence[r.ev].file,
        quote: t.evidence[r.ev].quote,
      };
    }
    const before = t.debut !== undefined && ms(chartDate) < ms(t.debut);
    const debutEv = t.evidence[t.readings.find((x) => x.date === t.debut)?.ev ?? 0];
    return {
      frame,
      chartDate,
      label: t.labelOf?.(chartDate),
      status: before ? "off" : "unread",
      source: before ? debutEv.file : "",
      quote: before ? debutEv.quote : "",
    };
  });
}

const transcribed = new Map(TRANSCRIPTIONS.map((t) => [t.code, t]));

/** Every chart "Dai Dai" is on — the 66 countries plus the two Billboard
 *  globals — in charts.ts order, peak and longevity read from charts.ts. */
export const daiDaiRuns: CountryRun[] = daiDaiEntries.map((e) => {
  const t = transcribed.get(e.c);
  return {
    code: e.c,
    ...(A2_TO_ISO[e.c] !== undefined ? { iso: A2_TO_ISO[e.c] } : {}),
    body: CHART_COUNTRIES[e.c]?.body ?? "",
    family: "official",
    cadence: "weekly",
    peak: e.peak,
    ...(e.weeksAtPeak !== undefined ? { weeksAtPeak: e.weeksAtPeak } : {}),
    ...(e.weeks !== undefined ? { weeks: e.weeks } : {}),
    points: t ? pointsOf(t) : [],
  };
});

export const GLOBAL_CODES = ["GLB", "GLBX"] as const;
const isGlobal = (code: string) => (GLOBAL_CODES as readonly string[]).includes(code);

/** The 66 national runs, and the two globals. */
export const daiDaiCountryRuns = daiDaiRuns.filter((r) => !isGlobal(r.code));
export const daiDaiGlobalRuns = daiDaiRuns.filter((r) => isGlobal(r.code));

/** Countries with a recorded run, and those that show only their peak. */
export const daiDaiRecordedCount = daiDaiCountryRuns.filter((r) => r.points.length > 0).length;
export const daiDaiPeakOnlyCount = daiDaiCountryRuns.length - daiDaiRecordedCount;

/** One frame, derived from the points — never from a neighbouring frame. */
export function replayFrame(i: number): ReplayFrame {
  const ranked: { code: string; pos: number }[] = [];
  const unread: string[] = [];
  const noChart: string[] = [];
  for (const r of daiDaiCountryRuns) {
    const p = r.points[i];
    if (!p) continue; // run not recorded
    if (p.status === "on") ranked.push({ code: r.code, pos: p.pos! });
    else if (p.status === "unread") unread.push(r.code);
    else if (p.status === "no-chart") noChart.push(r.code);
  }
  ranked.sort((a, b) => a.pos - b.pos);
  return {
    frame: daiDaiFrames[i],
    ranked,
    unread,
    noChart,
    numberOnes: ranked.filter((x) => x.pos === 1).length,
  };
}

export const daiDaiReplayFrames: ReplayFrame[] = daiDaiFrames.map((_, i) => replayFrame(i));

/** Read weeks at No. 1 up to and including frame `i`. */
export function readWeeksAtNo1(run: CountryRun, i: number): number {
  return run.points.slice(0, i + 1).filter((p) => p.status === "on" && p.pos === 1).length;
}

/**
 * The end frame: every country's best position. A recorded run gives its best
 * READ position, a run not recorded gives its charts.ts peak — and the test
 * holds all 66 to charts.ts, so the replay ends on the takeover grid.
 */
export function endBest(run: CountryRun): number {
  const read = run.points.filter((p) => p.status === "on").map((p) => p.pos!);
  return read.length ? Math.min(...read) : run.peak;
}

/** For tests/daiDaiRuns.test.tsx: the evidence behind every reading. */
export const DAI_DAI_RUN_EVIDENCE: readonly { code: string; evidence: readonly Evidence[] }[] = TRANSCRIPTIONS.map((t) => ({
  code: t.code,
  evidence: t.evidence,
}));
