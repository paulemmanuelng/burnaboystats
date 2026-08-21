// Which releases have a page of their own, as a title → path map.
//
// The ledger and the chart tables are terminal: a reader looking at "Last Last"
// with its twelve plaques has no way from that row to the page about it, even
// though 15 song pages and 11 album pages exist and are the best writing on the
// site. The rows knew nothing about them.
//
// SERVER-ONLY, and passed down as a prop the way `covers` already is — the
// explorers are client components and importing songs/albumPages into them
// would ship both datasets to the browser for the sake of a handful of hrefs.
//
// Keyed by titleKey, because the data files disagree about punctuation: albums
// writes "I Told Them…" with a real ellipsis where certifications writes three
// dots, and an exact match silently returns nothing. That mismatch has already
// cost this site a chart peak on the homepage once.

import { songs } from "../data/songs";
import { albumPages } from "../data/albumPages";
import { titleKey } from "./titleKey";

/** title (as any file writes it) → the release's own page, when it has one. */
export function releasePageLinks(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const a of albumPages) out[titleKey(a.title)] = `/music/albums/${a.slug}`;
  // Songs second: a title that is somehow both should resolve to the song page,
  // which is the more specific of the two.
  for (const s of songs) out[titleKey(s.title)] = `/music/${s.slug}`;
  return out;
}

/** Look a title up in a map built by releasePageLinks(). */
export const releasePathFor = (
  links: Record<string, string> | undefined,
  title: string
): string | undefined => (links ? links[titleKey(title)] : undefined);
