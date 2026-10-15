import { totalAwards } from "../data/certifications";
import { numberOnes } from "../data/charts";
import { spotifyTotalStreams } from "../data/streamingTotals";
import { plural } from "./plural";
import { ogId } from "./og-image";
import { FIGURE_ART } from "./og-figure";

/**
 * The root link preview's figures, and its URL (Job 6 · J6-4, design review
 * 8 Oct 2026, fix 131).
 *
 * The root card is drawn from live figures now, so it is versioned like every
 * other card: its id folds FIGURE_ART and every string it prints, and Next
 * puts that id in its path (/opengraph-image/<id>). The three pages that cite
 * it by hand (/404, /search, /primitives) import ROOT_OG_IMAGE from here, so
 * they follow the id; a bare /opengraph-image no longer resolves.
 *
 * Its own module, not og-image.tsx: the figures pull in the data, and
 * og-image.tsx is imported by every card.
 */

/** The three figures, each with its label: what the card prints, in order. */
export const rootFigures = () => [
  { value: totalAwards().toLocaleString("en-US"), label: plural(totalAwards(), "certification", "certifications") },
  // numberOnes counts placements, so its label is the charts page's own
  // "No. 1 peaks" (C-14, Paul 14 Oct 2026), not the drawing's "No. 1s".
  { value: numberOnes.toLocaleString("en-US"), label: plural(numberOnes, "No. 1 peak", "No. 1 peaks") },
  // The career figure the bot writes daily (all credits, lead and featured).
  { value: spotifyTotalStreams, label: "Spotify streams" },
];

/** Every string the root card prints. */
export const rootCardTexts = () => rootFigures().flatMap((f) => [f.value, f.label]);

/** The root card's id: the same fold as every figure card's (ogFigureVersions). */
export const ROOT_OG_ID = ogId([FIGURE_ART, ...rootCardTexts()].join("|"));

/** The root card's URL, for the three pages that cite it by hand. */
export const ROOT_OG_IMAGE = `/opengraph-image/${ROOT_OG_ID}`;
