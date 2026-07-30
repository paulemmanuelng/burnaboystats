import { albums } from "../data/albums";
import { songs } from "../data/songs";

/**
 * Cover art lookup for a release title.
 *
 * Resolution order, most specific first:
 *   1. the song's own art (songs.ts) — a single released with its own artwork
 *   2. an album/EP by that name (albums.ts)
 *   3. the album whose verified TRACKLIST contains the song — a track released
 *      as part of a record carries that record's artwork
 *
 * Step 3 is what covers most of the catalogue: "Gbona" has no art of its own,
 * but it is on African Giant, so it shows African Giant's cover.
 *
 * What this cannot resolve is a feature on someone else's record — "Ginger" is
 * WizKid's, "Location" is Dave's, "WE PRAY" is Coldplay's — because we hold no
 * artwork for other artists' albums. Those fall through to a monogram.
 *
 * The live-charts page is generated from kworb, which writes titles its own way
 * ("On The Low", "I Told Them..."), so every lookup goes through a normalised
 * key rather than the raw string.
 */
function key(title: string) {
  return title
    .replace(/\s*[([](?:feat|ft|with|w\/)\.?\s[^)\]]*[)\]]/gi, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Titles a source writes differently from our own data. kworb spells the debut
// album out in full; albums.ts calls it "L.I.F.E".
const TITLE_ALIASES: Record<string, string> = {
  "l i f e leaving an impact for eternity": "l i f e",
};

// Releases charting now whose art is in neither dataset. "Dai Dai" was already
// hardcoded in three places before this existed.
const EXTRA_COVERS: Record<string, string> = {
  "dai dai": "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4",
};

// Not every album row carries art, so drop the empties rather than mapping a
// title to undefined and handing callers a "cover" that isn't one.
const withCover = (rows: { title: string; cover?: string }[]) =>
  rows.flatMap((r) => (r.cover ? [[key(r.title), r.cover] as const] : []));

/** Song title → the cover of the album whose tracklist contains it. */
const TRACK_COVERS: Record<string, string> = {};
for (const album of albums) {
  if (!album.cover) continue;
  for (const track of album.tracks) {
    // First album wins, so an original release beats a later compilation.
    TRACK_COVERS[key(track)] ??= album.cover;
  }
}

const OWN_COVERS: Record<string, string> = {
  ...Object.fromEntries(withCover(albums)),
  ...Object.fromEntries(withCover(songs)),
  ...EXTRA_COVERS,
};

export function coverFor(title: string): string | undefined {
  const k = TITLE_ALIASES[key(title)] ?? key(title);
  return OWN_COVERS[k] ?? TRACK_COVERS[k];
}

/** First letter, for the fallback tile when there is no art. */
export function monogramFor(title: string): string {
  return (title.trim()[0] ?? "?").toUpperCase();
}
