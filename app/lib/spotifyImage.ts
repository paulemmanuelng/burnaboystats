// Spotify's image CDN serves every image at several fixed widths, each behind a
// different hash prefix on the SAME suffix. We were only ever using the largest
// (640px) — a 108KB file for a cover that renders at 150px. Building a srcset
// from the smaller variants lets the browser pick the right one for its viewport
// and pixel density, so nothing gets softer and small slots stop paying for 640px.
//
// Album covers and artist photos use different prefix families and different
// widths, so we detect which family a URL belongs to rather than guessing.

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
 */
export function spotifySrcSet(url: string): string | undefined {
  const parsed = parse(url);
  if (!parsed) return undefined;
  return Object.entries(parsed.variants)
    .map(([width, prefix]) => `${CDN}${prefix}${parsed.suffix} ${width}w`)
    .join(", ");
}

/**
 * The URL for a specific width, falling back to the original URL when the image
 * isn't a Spotify one. Use for the `src` so no-srcset clients get a sane size.
 */
export function spotifyImage(url: string, width: number): string {
  const parsed = parse(url);
  if (!parsed) return url;
  const available = Object.keys(parsed.variants)
    .map(Number)
    .sort((a, b) => a - b);
  const best = available.find((w) => w >= width) ?? available[available.length - 1];
  return `${CDN}${parsed.variants[best]}${parsed.suffix}`;
}
