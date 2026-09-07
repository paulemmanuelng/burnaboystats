// Spotify's image CDN serves every image at several fixed widths, each behind a
// different hash prefix on the SAME suffix. We were only ever using the largest
// (640px) — a 108KB file for a cover that renders at 150px. Building a srcset
// from the smaller variants lets the browser pick the right one for its viewport
// and pixel density, so nothing gets softer and small slots stop paying for 640px.
//
// Album covers and artist photos use different prefix families and different
// widths, so we detect which family a URL belongs to rather than guessing.

import { BLANK_PIXEL } from "./blankPixel";

const ALBUM_VARIANTS: Record<number, string> = {
  64: "ab67616d00004851",
  300: "ab67616d00001e02",
  640: "ab67616d0000b273",
};

const ARTIST_VARIANTS: Record<number, string> = {
  160: "ab6761610000f178",
  320: "ab67616100005174",
  640: "ab6761610000e5eb",
};

const CDN = "https://i.scdn.co/image/";

/** The variant family a Spotify image URL belongs to, plus its hash suffix. */
function parse(url: string): { variants: Record<number, string>; suffix: string } | null {
  if (!url.startsWith(CDN)) return null;
  const hash = url.slice(CDN.length);
  for (const variants of [ALBUM_VARIANTS, ARTIST_VARIANTS]) {
    for (const prefix of Object.values(variants)) {
      if (hash.startsWith(prefix)) return { variants, suffix: hash.slice(prefix.length) };
    }
  }
  return null;
}

/**
 * A `srcset` across every width Spotify offers for this image.
 * Returns undefined for anything that isn't a recognised Spotify CDN URL, so
 * callers can spread it onto an <img> and get today's behaviour unchanged.
 *
 * `maxWidth` caps the ladder. It exists for art that is deliberately
 * de-emphasised — the nine wall tiles on the mobile board are greyscaled, sit
 * under a scrim reaching 0.94 opacity and paint 220px wide, and at the 640 rung
 * apiece they were most of that screen's 904KB. Capping them at 320 is a real
 * trade: a little softer on a dense screen, about 650KB lighter. Leave it unset
 * for anything the reader is meant to look AT.
 */
export function spotifySrcSet(url: string, maxWidth?: number): string | undefined {
  const parsed = parse(url);
  if (!parsed) return undefined;
  return Object.entries(parsed.variants)
    .filter(([width]) => maxWidth === undefined || Number(width) <= maxWidth)
    .map(([width, prefix]) => `${CDN}${prefix}${parsed.suffix} ${width}w`)
    .join(", ");
}

/**
 * The URL for a specific width, falling back to the original URL when the image
 * isn't a Spotify one. Use for the `src` so no-srcset clients get a sane size.
 */
export function spotifyImage(url: string, width: number): string {
  // Cover art is optional on every release type — `cover?: string` on
  // AlbumEntry, AfroRelease and the live feed — and nine call sites pass
  // `cover ?? ""` into here. Returning that empty string put `src=""` on the
  // /music "Latest album" hero (both layouts) and `url()` on eight cover
  // tiles: an empty URL resolves against the DOCUMENT, so a browser re-fetches
  // the whole page as an image and paints a broken-image icon. The 1x1 costs
  // nothing over the wire and leaves the sized box empty, which is what a
  // release whose art has not landed yet should look like.
  if (!url) return BLANK_PIXEL;
  const parsed = parse(url);
  if (!parsed) return url;
  const available = Object.keys(parsed.variants)
    .map(Number)
    .sort((a, b) => a - b);
  const best = available.find((w) => w >= width) ?? available[available.length - 1];
  return `${CDN}${parsed.variants[best]}${parsed.suffix}`;
}

/**
 * The 1x/2x pair for an image painted as a CSS `background-image`.
 *
 * A background cannot carry a srcset, so every one of them was pinned to a
 * single width — and the width picked was the retina one. On a 1x display
 * /music was fetching eleven 640px covers to paint them at 283px and
 * /afrobeats sixteen 640px artist photos at 325px: 1.3MB per page, on both,
 * of pixels that screen cannot show.
 *
 * Returned as two custom properties rather than an `image-set()`, because a
 * stylesheet can switch on them with a plain `min-resolution` query that every
 * browser has had for years, and a browser that somehow understood neither
 * still gets the 1x image instead of no image at all.
 */
export function spotifyBgVars(url: string, cssWidth: number): Record<string, string> {
  return {
    "--art-1x": `url(${spotifyImage(url, cssWidth)})`,
    "--art-2x": `url(${spotifyImage(url, cssWidth * 2)})`,
  };
}
