/**
 * The replay's props, built on the server from app/data/daiDaiRuns.ts.
 *
 * Everything language-dependent that the browser would otherwise format — a
 * country's name, a chart's date — is formatted here, once, so the client's
 * own ICU can never disagree with the HTML (the takeover grid learned that the
 * hard way: React #418). The statuses and positions are the data's own and do
 * not depend on the edition: tests/daiDaiRuns.test.tsx holds EN and ES to the
 * same frames.
 */
import { CHART_COUNTRIES, daiDaiNumberOnes } from "../data/charts";
import { DAI_DAI_HALFTIME_DATE, DAI_DAI_RELEASE_DATE } from "../data/daiDai";
import { daiDaiFrames, daiDaiRuns, endBest, frameOf, GLOBAL_CODES, type Status } from "../data/daiDaiRuns";
import { countryName } from "./DaiDaiRecord";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";

/** One week of one chart, as the player needs it. */
export interface ReplayPoint {
  s: Status;
  /** Position, when s === "on". */
  p?: number;
  /** The body's own date for the issue, in words, in the edition's language. */
  d: string;
  /** The body's own label ("semaine 28", "W34"), when it numbers its weeks. */
  l?: string;
  /** The repo file that states it; absent for an unread week. */
  src?: string;
}

export interface ReplayRun {
  code: string;
  /** ISO numeric: the id of the country's map shape. Absent for the globals. */
  iso?: number;
  flag: string;
  name: string;
  body: string;
  peak: number;
  weeksAtPeak: number | null;
  /** The end frame's position — the charts.ts peak, test-enforced. */
  best: number;
  /** Where the end frame's ● sits on a country whose run is not recorded:
   *  the middle of its shape's largest ring, in map units. */
  mark?: [number, number];
  /** One per frame; [] = run not recorded (peak only). */
  pts: ReplayPoint[];
}

export interface ReplayData {
  /** Each frame's week, in words ("13 July 2026"). */
  frames: string[];
  /** Each frame as d/m, for the small multiples' column heads ("13/7"). */
  frameShort: string[];
  /** Frame index of the release and of the halftime show (the scrubber's two ▲). */
  releaseFrame: number;
  halftimeFrame: number;
  /** "15 May", "19 Jul" and the latest issue held, "26 Sep". */
  releaseShort: string;
  halftimeShort: string;
  lastShort: string;
  /** The 66 national charts, then the two globals. */
  countries: ReplayRun[];
  globals: ReplayRun[];
  /** Countries at No. 1 at their peak — daiDaiNumberOnes, the takeover grid's figure. */
  numberOnes: number;
  /** Every shape the sprite at /dai-dai/replay-map.svg holds (ISO numeric), and its viewBox. */
  shapes: number[];
  mapW: number;
  mapH: number;
}

/** The middle of a shape's largest ring. The shapes are absolute M/L/Z paths. */
function centreOf(d: string): [number, number] {
  let best: [number, number, number] = [0, 0, -1];
  for (const ring of d.split("Z")) {
    const n = ring.match(/-?\d+(?:\.\d+)?/g);
    if (!n || n.length < 4) continue;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let i = 0; i + 1 < n.length; i += 2) {
      const x = +n[i], y = +n[i + 1];
      x0 = Math.min(x0, x);
      x1 = Math.max(x1, x);
      y0 = Math.min(y0, y);
      y1 = Math.max(y1, y);
    }
    const a = (x1 - x0) * (y1 - y0);
    if (a > best[2]) best = [(x0 + x1) / 2, (y0 + y1) / 2, a];
  }
  return [+best[0].toFixed(1), +best[1].toFixed(1)];
}
const shapeD = new Map(worldShapes.map((s) => [s.code, s.d]));

const MONTHS_SHORT = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"],
};

const longDate = (iso: string, lang: "en" | "es") =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

const shortDate = (iso: string, lang: "en" | "es") => {
  const [, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS_SHORT[lang][m - 1]}`;
};

/** The globals' names, as the phone's tiles and the small multiples print them. */
const GLOBAL_SHORT: Record<(typeof GLOBAL_CODES)[number], string> = { GLB: "Global 200", GLBX: "Global Excl. US" };

export function buildReplayData(lang: "en" | "es"): ReplayData {
  const runOf = (code: string): ReplayRun => {
    const r = daiDaiRuns.find((x) => x.code === code)!;
    const isGlobal = (GLOBAL_CODES as readonly string[]).includes(code);
    return {
      code,
      ...(r.iso !== undefined ? { iso: r.iso } : {}),
      flag: isGlobal ? "🌐" : (CHART_COUNTRIES[code]?.flag ?? "🏳"),
      name: isGlobal ? GLOBAL_SHORT[code as keyof typeof GLOBAL_SHORT] : countryName(code, lang),
      body: r.body,
      peak: r.peak,
      weeksAtPeak: r.weeksAtPeak ?? null,
      best: endBest(r),
      ...(!r.points.length && r.iso !== undefined && shapeD.has(r.iso) ? { mark: centreOf(shapeD.get(r.iso)!) } : {}),
      pts: r.points.map((p) => ({
        s: p.status,
        ...(p.pos !== undefined ? { p: p.pos } : {}),
        d: longDate(p.chartDate, lang),
        ...(p.label ? { l: p.label } : {}),
        ...(p.source ? { src: p.source } : {}),
      })),
    };
  };

  const frameIndex = (d: string) => daiDaiFrames.indexOf(frameOf(d));
  const lastIssue = daiDaiRuns
    .flatMap((r) => r.points.filter((p) => p.status === "on").map((p) => p.chartDate))
    .reduce((a, b) => (a > b ? a : b));

  return {
    frames: daiDaiFrames.map((f) => longDate(f, lang)),
    frameShort: daiDaiFrames.map((f) => {
      const [, m, d] = f.split("-").map(Number);
      return `${d}/${m}`;
    }),
    releaseFrame: frameIndex(DAI_DAI_RELEASE_DATE),
    halftimeFrame: frameIndex(DAI_DAI_HALFTIME_DATE),
    releaseShort: shortDate(DAI_DAI_RELEASE_DATE, lang),
    halftimeShort: shortDate(DAI_DAI_HALFTIME_DATE, lang),
    lastShort: shortDate(lastIssue, lang),
    countries: daiDaiRuns.filter((r) => !(GLOBAL_CODES as readonly string[]).includes(r.code)).map((r) => runOf(r.code)),
    globals: GLOBAL_CODES.map((c) => runOf(c)),
    numberOnes: daiDaiNumberOnes,
    shapes: worldShapes.map((s) => s.code),
    mapW: MAP_W,
    mapH: MAP_H,
  };
}
