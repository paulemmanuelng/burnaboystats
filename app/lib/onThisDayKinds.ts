/**
 * ON THIS DAY — the six kinds, and nothing else.
 *
 * Kept apart from lib/onThisDay.ts, which reads every dataset on the site:
 * the phone calendar's month panel is a client component, and it draws a
 * kind's mark. Importing the mark from here keeps the certifications, charts
 * and tours out of the browser bundle. lib/onThisDay.ts re-exports all of it.
 */

export type OnThisDayKind = "release" | "chart" | "streaming" | "certification" | "award" | "show";

/**
 * The word each kind wears. A show is a "Show": until 26 Sep 2026 it was
 * "Live", and on this site "Live" means happening now (the green LIVE pill,
 * the live-data card), not a 2018 club night. The union has no "Live" in it,
 * so the old word cannot come back through a label.
 */
export type OnThisDayKindWord = "Release" | "Charts" | "Streaming" | "Certification" | "Awards" | "Show";

export interface OnThisDayKindMark {
  /** The shape — what tells the kinds apart. Never a colour. */
  shape: "square" | "triangle" | "diamond" | "ring" | "star" | "dot";
  /** The shape as an SVG path on a 12×12 box. */
  d: string;
  /** Filled in ink, or (the ring alone) drawn as an outline. */
  filled: boolean;
  /** The word printed beside the mark: the pill, the legend, the tally. */
  word: OnThisDayKindWord;
  /** What a screen reader hears where only the mark is drawn. */
  aria: string;
}

/**
 * The kinds are shape plus word, in ink (docs-design/design-response-on-this-day.md
 * §1, approved 26 Sep 2026). Colour does no work: gold marks what is live and
 * what is the action, cyan and silver are the chart peak bands, green is live
 * data — a kind that borrowed any of them collided with its meaning, and
 * Release and Certification were the same colour at dot size. The mark draws
 * in currentColor, so it is whatever ink the text around it is.
 *
 * Shows lead most days, so theirs is the quietest mark.
 */
export const KIND_MARK: Record<OnThisDayKind, OnThisDayKindMark> = {
  release: { shape: "square", d: "M2.5 2.5h7v7h-7z", filled: true, word: "Release", aria: "Release" },
  chart: { shape: "triangle", d: "M6 1.6L10.8 10H1.2z", filled: true, word: "Charts", aria: "Charts" },
  streaming: { shape: "diamond", d: "M6 1.2L10.8 6L6 10.8L1.2 6z", filled: true, word: "Streaming", aria: "Streaming" },
  certification: {
    shape: "ring",
    d: "M6 1.9a4.1 4.1 0 1 1 0 8.2a4.1 4.1 0 1 1 0-8.2z",
    filled: false,
    word: "Certification",
    aria: "Certification",
  },
  award: {
    shape: "star",
    d: "M6 1l1.5 3.2l3.5.4l-2.6 2.4l.7 3.5L6 8.8L2.9 10.5l.7-3.5L1 4.6l3.5-.4z",
    filled: true,
    word: "Awards",
    aria: "Awards",
  },
  show: { shape: "dot", d: "M6 3a3 3 0 1 1 0 6a3 3 0 1 1 0-6z", filled: true, word: "Show", aria: "Show" },
};

/** The kinds in the order every legend and tally lists them. */
export const KIND_ORDER: OnThisDayKind[] = ["release", "chart", "streaming", "certification", "award", "show"];
