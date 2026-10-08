// The lookups for the release-page maps lib/releasePages.ts builds, with no
// dataset behind them.
//
// The maps are built on the server and handed to client components (the
// chart explorer, the /music tracklist dialog) as props, so the songs and
// album-page datasets stay out of the browser bundle. The lookups those
// components run live here, because importing them from releasePages.ts would
// pull both datasets in with them.

import { titleKey } from "./titleKey";

// KEYED BY KIND AS WELL. An album row looks up album pages and a single or
// feature row looks up song pages, never the other way round: "No Sign of
// Weakness" is both an album (with a page) and, since 23 Sep 2026, a certified
// title track (without one), and a title-only map sent the single's row to the
// album's page.

export type ReleaseKind = "album" | "song";

export const linkKey = (kind: ReleaseKind, title: string) => `${kind}|${titleKey(title)}`;

/** Look a release up in a map built by releasePageLinks(). */
export const releasePathFor = (
  links: Record<string, string> | undefined,
  title: string,
  kind: ReleaseKind
): string | undefined => (links ? links[linkKey(kind, title)] : undefined);

/**
 * A tracklist line with its guest dropped, lower-cased: the key of
 * trackPageLinks(). A tracklist writes the guest into the title ("Single
 * (feat. Wizkid)"), the song pages don't, so the line is matched with its
 * "(feat. …)" dropped, as the album pages match theirs.
 */
export const bareTrack = (track: string) => track.replace(/\s*\(feat\..*$/i, "").trim().toLowerCase();

/** A tracklist line's song page, from a map built by trackPageLinks(). */
export const trackPathFor = (links: Record<string, string> | undefined, track: string): string | undefined =>
  links?.[bareTrack(track)];
