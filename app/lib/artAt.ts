import { spotifyImage, spotifySrcSet } from "./spotifyImage";

/**
 * A cover or portrait at the size a slot actually paints.
 *
 * Three CDN families carry the site's art, and each serves any of a few sizes
 * behind a size segment in the URL. The compare page's 48px slots were
 * fetching the largest rung of all three — 640/500/300px — for a thumbnail:
 * over 90% of the page's image bytes, wasted. Spotify's ladder is fixed
 * (spotifyImage.ts); Deezer renders any WxH; Apple's `bb` thumbs likewise.
 * Anything unrecognised comes back unchanged.
 */
const DEEZER = /^(https:\/\/cdn-images\.dzcdn\.net\/images\/[^/]+\/[0-9a-f]+\/)(\d+)x(\d+)(-[^/]*\.jpg)$/;
const APPLE = /^(https:\/\/is1-ssl\.mzstatic\.com\/image\/thumb\/.+\/)(\d+)x(\d+)(bb\.jpg)$/;

export function artAt(url: string, px: number): string {
  if (!url) return url;
  const d = url.match(DEEZER);
  if (d) return `${d[1]}${px}x${px}${d[4]}`;
  const a = url.match(APPLE);
  if (a) return `${a[1]}${px}x${px}${a[4]}`;
  return spotifyImage(url, px);
}

/** A 1x/2x/3x srcset for a square slot of `px` CSS pixels. */
export function artSrcSet(url: string, px: number): string | undefined {
  if (!url) return undefined;
  if (DEEZER.test(url) || APPLE.test(url))
    return [1, 2, 3].map((k) => `${artAt(url, px * k)} ${k}x`).join(", ");
  return spotifySrcSet(url);
}
