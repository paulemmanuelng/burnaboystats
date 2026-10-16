import { BAR_H, BODY, FIG_LH, HEAD_LH, MONO_LINE, MONO_SIZE, MONO_TRACK } from "./og-figure";
import { fitSize, monoWidth, wrapLines } from "./ogFit";
import { allPairs, canonicalPair, pairCopy } from "./comparePairs";
import type { ComparableArtist } from "./certUnits";

/**
 * The pair previews' geometry (Job 6 · J6-4, fixes 128 and 129), apart from
 * the route so the guards can read it: the title's size, the two columns,
 * the vertical rhythm, and the one figure size every pair card shares.
 */

/** The title: Anton at 80 across the body, at most two lines. */
export const PAIR_HEAD = 80;
/** The body's width and the two columns'. */
export const PAIR_WIDTH = BODY.right - BODY.left;
export const PAIR_GAP = 32;
export const PAIR_COLUMN = (PAIR_WIDTH - PAIR_GAP) / 2;
/** The figures' size at most (the drawing's 52 at half size). */
export const PAIR_FIGURE_CAP = 104;

/** The vertical rhythm, in px: title → columns → verdict, and inside a column. */
export const PAIR_SPACE = { afterTitle: 18, overFigure: 2, overLabel: 8, overBar: 10, beforeVerdict: 18 } as const;

/** A total as the cards print it. */
export const pairUnits = (n: number) => n.toLocaleString("en-US");

/**
 * The card's own verdict: who leads, by how much, and the scope (live debug
 * 15 Oct 2026, PV-06, Paul "yes"). The two totals are printed large above
 * it, so it does not repeat them: the page's sentence (pairCopy's sub, which
 * the page's description keeps) did, and wrapped to two lines.
 */
export function pairVerdict(a: ComparableArtist, b: ComparableArtist, copy = pairCopy(a, b)) {
  const [x, y] = copy.totals;
  if (x === y) return `Level · ${copy.scope}`;
  return `${(x > y ? a : b).name} leads by at least ${pairUnits(Math.abs(x - y))} · ${copy.scope}`;
}

/** The tracking a verdict may take, widest first: the labels' own, then tighter in half-pixel steps. */
export const VERDICT_TRACKS = [MONO_TRACK, 1.5, 1, 0.5, 0] as const;

/**
 * The verdict as the card draws it: one line, in capitals, at the labels'
 * tracking where it fits the body; where it does not (the longest names with
 * an eight-figure lead), at the widest tighter step that does, so it stays
 * one line at the 28px floor. Only a verdict too long even untracked, which
 * no pair on the board is, would wrap.
 */
export function verdictLine(verdict: string): { lines: string[]; tracking: number } {
  const text = verdict.toUpperCase();
  const tracking = VERDICT_TRACKS.find((t) => monoWidth(text, MONO_SIZE, t) <= PAIR_WIDTH);
  return tracking === undefined
    ? { lines: wrapLines(text, "mono", MONO_SIZE, PAIR_WIDTH, 2, MONO_TRACK), tracking: MONO_TRACK }
    : { lines: [text], tracking };
}

/**
 * The one figure size for every pair card: the largest, at most the cap, at
 * which the widest total on the board fits its column — a slot sized for its
 * longest value. Computed once.
 */
let family: number | undefined;
export const pairFamilySize = () =>
  (family ??= fitSize(
    allPairs().flatMap(([x, y]) => {
      const [a, b] = canonicalPair(x, y);
      return pairCopy(a, b).totals.map(pairUnits);
    }),
    PAIR_COLUMN,
    PAIR_FIGURE_CAP,
  ));

/** The body's height for a title of `titleLines` and a verdict of `verdictLines`, at figure size `fig`. */
export const pairBodyHeight = (titleLines: number, verdictLines: number, fig: number) =>
  titleLines * PAIR_HEAD * HEAD_LH +
  PAIR_SPACE.afterTitle +
  MONO_LINE + PAIR_SPACE.overFigure + fig * FIG_LH + PAIR_SPACE.overLabel + MONO_LINE + PAIR_SPACE.overBar + BAR_H +
  PAIR_SPACE.beforeVerdict +
  verdictLines * MONO_LINE;

/** The largest figure, at most the family's, that keeps the body inside its box (fix 128). */
export const pairFigureSize = (titleLines: number, verdictLines: number) => {
  const room = BODY.bottom - BODY.top - pairBodyHeight(titleLines, verdictLines, 0);
  return Math.max(28, Math.min(pairFamilySize(), Math.floor(room / FIG_LH)));
};
