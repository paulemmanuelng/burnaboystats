import { albums } from "../data/albums";
import { songs } from "../data/songs";

/**
 * Cover art lookup for a release title.
 *
 * The live-charts page is generated from kworb, which writes titles its own way
 * ("On The Low", "I Told Them...", "wgft"), so matching is done on a normalised
 * key rather than the raw string — the same normalisation the chart sweeps use.
 *
 * Not every charting release has art here, and that is fine: callers fall back
 * to a monogram rather than a broken image. Add to EXTRA_COVERS as covers are
 * sourced; nothing else needs changing.
 */
function key(title: string) {
  return title
    .replace(/\s*[([](?:feat|ft|with|w\/)\.?\s[^)\]]*[)\]]/gi, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Releases charting now whose art isn't in albums.ts or songs.ts. "Dai Dai" was
// already hardcoded in three places before this existed.
const EXTRA_COVERS: Record<string, string> = {
  "dai dai": "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4",
};

// Not every album row carries art, so drop the empties rather than mapping a
// title to undefined and handing callers a "cover" that isn't one.
const withCover = (rows: { title: string; cover?: string }[]) =>
  rows.flatMap((r) => (r.cover ? [[key(r.title), r.cover] as const] : []));

const COVERS: Record<string, string> = {
  ...Object.fromEntries(withCover(albums)),
  ...Object.fromEntries(withCover(songs)),
  ...EXTRA_COVERS,
};

export function coverFor(title: string): string | undefined {
  return COVERS[key(title)];
}

/** First letter, for the fallback tile when there is no art. */
export function monogramFor(title: string): string {
  return (title.trim()[0] ?? "?").toUpperCase();
}
