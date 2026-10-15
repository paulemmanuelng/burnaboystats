import styles from "./daiDaiStrip.module.css";
import { allChartItems, daiDaiNumberOnes, weeksAtPeak } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../data/daiDai";
import { CHAPTER_IDS } from "../lib/daiDaiChapters";

/**
 * The Dai Dai hero's four-figure strip (site review 8 Oct 2026, Job 5 · J5-8,
 * fixes 109 and 111; J5-Q1 "yes"): the song's Billboard Global 200 peak, its
 * days at No. 1 on Spotify Global, its countries at No. 1 and its
 * certifications, each tile a jump to the chapter that tells it (02, 04, 03,
 * 05). Every figure is the data's.
 *
 * Whole-tile links in ink, with no glyph and no gold (fix 109): an in-page
 * jump is not an action, and the hero's one gold is "Skip to the numbers".
 * Both editions render it; the words come in as `labels`.
 */
export interface StripLabels {
  /** The Global 200 peak: "No. {n}" / "N.º {n}". */
  peak: string;
  /** "Billboard Global 200 · {n} wks" — {n} the weeks at that peak. */
  global: string;
  /** The same line when the chart publishes no run. */
  globalNoRun: string;
  spotifyDays: string;
  countries: string;
  certs: string;
}

export const EN_STRIP_LABELS: StripLabels = {
  peak: "No. {n}",
  global: "Billboard Global 200 · {n} wks",
  globalNoRun: "Billboard Global 200",
  spotifyDays: "days No. 1 on Spotify Global",
  countries: "countries at No. 1",
  certs: "certifications",
};

export const ES_STRIP_LABELS: StripLabels = {
  peak: "N.º {n}",
  global: "Billboard Global 200 · {n} sem.",
  globalNoRun: "Billboard Global 200",
  spotifyDays: "días en el N.º 1 en Spotify Global",
  countries: "países en el N.º 1",
  certs: "certificaciones",
};

const fill = (s: string, n: number | string) => s.replace("{n}", String(n));

/** A label never breaks before its "·", nor between a figure and the word
 *  that closes the label: those spaces print as no-break spaces, so a wrapped
 *  label's line opens on a word, not on the separator ("· 7 WKS" at 402,
 *  "· 7 SEM." at 1440 in Spanish), and "7 WKS" stays whole (at 320). */
const keepSeparator = (s: string) => s.replace(/ ·/g, "\u00a0·").replace(/(\d) (\S+)$/, "$1\u00a0$2");

/** The song's Global 200 peak, from its chart entry. */
export const daiDaiGlobalPeak = () => allChartItems.find((r) => r.title === "Dai Dai")?.entries.find((e) => e.c === "GLB")?.peak ?? null;

export interface StripTile {
  href: `#${string}`;
  value: string;
  label: string;
}

/** The four tiles, in the canvas's order (C-26): each links its own chapter. */
export function stripTiles(t: StripLabels): StripTile[] {
  const peak = daiDaiGlobalPeak();
  const weeks = weeksAtPeak("Dai Dai", "GLB");
  const tiles: StripTile[] = [
    ...(peak != null
      ? [{ href: `#${CHAPTER_IDS.global1}` as const, value: fill(t.peak, peak), label: weeks != null ? fill(t.global, weeks) : t.globalNoRun }]
      : []),
    { href: `#${CHAPTER_IDS.streaming}`, value: String(DAI_DAI_SPOTIFY_NO1_DAYS), label: t.spotifyDays },
    { href: `#${CHAPTER_IDS.no1s}`, value: String(daiDaiNumberOnes), label: t.countries },
    { href: `#${CHAPTER_IDS.certs}`, value: String(daiDaiCertCount), label: t.certs },
  ];
  return tiles.map((tile) => ({ ...tile, label: keepSeparator(tile.label) }));
}

export default function DaiDaiStrip({ labels = EN_STRIP_LABELS }: { labels?: StripLabels }) {
  return (
    <div className={styles.strip}>
      {stripTiles(labels).map((tile) => (
        <a key={tile.href} href={tile.href} className={styles.tile}>
          <span className={styles.value}>{tile.value}</span>
          <span className={styles.label}>{tile.label}</span>
        </a>
      ))}
    </div>
  );
}
