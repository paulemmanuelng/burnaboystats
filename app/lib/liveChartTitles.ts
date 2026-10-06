import { songs } from "../data/songs";
import { albums, eps, compilations } from "../data/albums";
import { allChartItems } from "../data/charts";
import { sameTitle } from "./titleKey";

/**
 * A live-chart row's title as the rest of the site spells it.
 *
 * The live boards carry kworb's spellings (titleKey.ts says so), and
 * /live-charts printed them as they came: "wgft", "WE PRAY", "I Told Them...",
 * "No Sign Of Weakness", "Twice As Tall" — none of them the site's own
 * spelling of the same release (5 Oct 2026, core-09). The row keeps its raw
 * `title` for the panel lookup against /api/v1/live-charts; this is only what
 * the reader sees. Burna Boy's catalogue, so it is for his board alone.
 *
 * Matched with sameTitle (case, ellipsis and quote marks folded), never a
 * looser match; the one explicit alias is iTunes's long L.I.F.E title, which
 * no fold can reach.
 */
const ALIASES: Record<string, string> = {
  "L.I.F.E - Leaving an Impact for Eternity": "L.I.F.E",
};

const catalogue: string[] = [
  ...songs.map((s) => s.title),
  ...[...albums, ...eps, ...compilations].map((a) => a.title),
  ...allChartItems.map((r) => r.title),
];

export const catalogueTitle = (title: string): string =>
  ALIASES[title] ?? catalogue.find((t) => sameTitle(t, title)) ?? title;
