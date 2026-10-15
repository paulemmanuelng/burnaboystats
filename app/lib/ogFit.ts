import { cardTextWidth, readMetrics, type Metrics } from "./cardTextWidth";
import { ogFonts } from "./og-lockup";

/**
 * How wide the figure-first link previews set a run of Anton or Space Mono,
 * in px, and the sizes and lines that follow from it (Job 6, design review
 * 8 Oct 2026, fixes 127–128).
 *
 * The same read as cardTextWidth.ts's Geist: each letter's own advance from
 * the font's tables (cmap, hmtx), plus the letter spacing after every letter,
 * which is how Satori lays a run out. So a card knows before it renders
 * whether a figure fits its slot, and how many lines a label takes. Lines are
 * then drawn as separate children: the line count is what these functions
 * say, not whatever the renderer's own wrapping decides.
 */

const metricsOf = (name: string): Metrics => readMetrics(ogFonts.find((f) => f.name === name)!.data);
const ANTON = metricsOf("Anton");
const MONO = metricsOf("Space Mono");

function width(m: Metrics, text: string, size: number, tracking: number) {
  let units = 0;
  let letters = 0;
  for (const ch of text) {
    units += m.advance(m.glyph(ch.codePointAt(0)!));
    letters++;
  }
  return (units * size) / m.unitsPerEm + tracking * letters;
}

/** Anton, measured upper-cased: the cards set it in capitals. */
export const antonWidth = (text: string, size: number, tracking = 0) => width(ANTON, text.toUpperCase(), size, tracking);

/** Space Mono, measured as given (callers pass the text the card prints). */
export const monoWidth = (text: string, size: number, tracking = 0) => width(MONO, text, size, tracking);

/** Geist (the cards' running text), measured as given: cardTextWidth's read. */
export const geistWidth = (text: string, size: number, tracking = 0) => cardTextWidth(text, size, tracking);

export type OgFace = "anton" | "mono" | "geist";
const measure = (face: OgFace, text: string, size: number, tracking: number) =>
  face === "anton" ? antonWidth(text, size, tracking) : face === "mono" ? monoWidth(text, size, tracking) : geistWidth(text, size, tracking);

/**
 * The largest whole size, at most `cap`, at which every one of `texts` fits
 * `boxW` on one line — one size for a family, so a slot is sized for its
 * longest value. Never below `floor` (the 28px minimum, fix 127).
 */
export function fitSize(texts: string[], boxW: number, cap: number, floor = 28, face: OgFace = "anton", tracking = 0): number {
  for (let s = Math.floor(cap); s > floor; s--) {
    if (texts.every((t) => measure(face, t, s, tracking) <= boxW)) return s;
  }
  return floor;
}

/** What a dangling run of punctuation at a cut looks like: dropped before the ellipsis. */
const DANGLING = /[\s,;:·—–-]+$/;

/**
 * `text` broken greedily at spaces into lines no wider than `boxW`. Past
 * `maxLines`, the last line is trimmed back to a word boundary and closed with
 * "…" (a dangling , ; : · or dash dropped first). A single word wider than the
 * box keeps its own line: the caller sizes for that (fitSize).
 */
export function wrapLines(text: string, face: OgFace, size: number, boxW: number, maxLines: number, tracking = 0): string[] {
  const fits = (t: string) => measure(face, t, size, tracking) <= boxW;
  const lines: string[] = [];
  let cur = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const next = cur ? `${cur} ${word}` : word;
    if (!cur || fits(next)) cur = next;
    else {
      lines.push(cur);
      cur = word;
    }
  }
  if (cur) lines.push(cur);
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  let last = kept[maxLines - 1];
  while (last.includes(" ") && !fits(`${last.replace(DANGLING, "")}…`)) last = last.slice(0, last.lastIndexOf(" "));
  kept[maxLines - 1] = `${last.replace(DANGLING, "")}…`;
  return kept;
}
