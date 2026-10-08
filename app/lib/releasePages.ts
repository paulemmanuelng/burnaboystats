// Which releases have a page of their own, as a title → path map.
//
// The ledger and the chart tables are terminal: a reader looking at "Last Last"
// with its thirteen plaques has no way from that row to the page about it, even
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

import { songs, daiDaiStoryPage } from "../data/songs";
import { albumPages } from "../data/albumPages";
import { titleKey } from "./titleKey";
// The keys and the lookups, which client components import from there: see
// lib/releaseLinkKeys.ts. Re-exported so a server caller has one import.
import { linkKey, bareTrack, releasePathFor, trackPathFor, type ReleaseKind } from "./releaseLinkKeys";

export { releasePathFor, trackPathFor, type ReleaseKind };

/** kind + title (as any file writes it) → the release's own page, when it has one. */
export function releasePageLinks(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const a of albumPages) out[linkKey("album", a.title)] = `/music/albums/${a.slug}`;
  for (const s of songs) out[linkKey("song", s.title)] = `/music/${s.slug}`;
  // "Dai Dai" is a song page all the same, kept at /dai-dai (data/songs.ts):
  // its 70-chart row on /records/charts and its plaques on /certifications
  // pointed nowhere (CC-09, 8 Oct 2026).
  out[linkKey("song", daiDaiStoryPage.title)] = daiDaiStoryPage.href;
  return out;
}

/**
 * An album's own page, or the discography when it has none.
 *
 * The home page's album covers, 8 on the desktop grid and 8 on the phone rail,
 * all opened /music, so a reader who tapped "Love, Damini" landed on the
 * discography and had to find it again, and the album pages got no link from
 * the home page at all (design review SH-02, 8 Oct 2026).
 */
export const albumPagePath = (title: string): string => {
  const page = albumPages.find((a) => titleKey(a.title) === titleKey(title));
  return page ? `/music/albums/${page.slug}` : "/music";
};

/**
 * Tracklist lines -> the song's own page, keyed by the bare title (bareTrack).
 * Built on the server and passed to the /music dialog, a client component, so
 * the songs dataset stays out of its bundle (MU-27, 8 Oct 2026: the L.I.F.E
 * dialog listed "Like to Party" as plain text beside its own song page).
 */
export function trackPageLinks(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of songs) out[bareTrack(s.title)] = `/music/${s.slug}`;
  return out;
}
