import { albums, eps, compilations } from "../data/albums";
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

// Releases charting now whose art is in neither dataset.
//
// Everything below the first line is a feature on ANOTHER artist's record, so
// the artwork belongs to their release and could never come from albums.ts.
// Each was resolved through Deezer's public API and checked two ways before
// being written here: the track title matches exactly, and the release's
// contributor list actually names Burna Boy — a title search alone returns
// karaoke covers and DJ-mix compilations, whose artwork would be wrong.
//
// Pinned to the ORIGINAL release rather than a later compilation: "Laho II"
// also appears on "Laho III" and "Auracle", and "My Oasis" on "Love Goes".
// Served at 100x100, which is crisp for a 24px tile on any display.
const EXTRA_COVERS: Record<string, string> = {
  "dai dai": "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4",

  // Ginger — WizKid, "Made In Lagos"
  ginger: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/100x100-000000-80-0-0.jpg",
  // Sponono — Kabza De Small, "I Am The King Of Amapiano: Sweet & Dust"
  sponono: "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/100x100-000000-80-0-0.jpg",
  // Location — Dave, "PSYCHODRAMA"
  location: "https://cdn-images.dzcdn.net/images/cover/ad058398e5f4643b846532fe27cfd2f1/100x100-000000-80-0-0.jpg",
  // My Oasis — Sam Smith, single
  "my oasis": "https://cdn-images.dzcdn.net/images/cover/b34fa153a6137126a0c37972033c79fc/100x100-000000-80-0-0.jpg",
  // WE PRAY — Coldplay, "Moon Music"
  "we pray": "https://cdn-images.dzcdn.net/images/cover/8f63a01593c329798544895109f36f8c/100x100-000000-80-0-0.jpg",
  // Laho II — Shallipopi, single
  "laho ii": "https://cdn-images.dzcdn.net/images/cover/de05a8fd998ffade71a75095747c2916/100x100-000000-80-0-0.jpg",
  // 4 Kampé II — Joé Dwet Filé, single. The accented "é" normalises to a space.
  "4 kamp ii": "https://cdn-images.dzcdn.net/images/cover/9817ac9ada270ea7c1f56753c0cabf33/100x100-000000-80-0-0.jpg",
  // Baddest — AKA, single
  baddest: "https://cdn-images.dzcdn.net/images/cover/b86f99833d3100ad7eb753ec6966e3aa/100x100-000000-80-0-0.jpg",
  // Special Someone — Sarkodie, "Sarkology"
  "special someone": "https://cdn-images.dzcdn.net/images/cover/fe71b0ccde246808ca2b15c4e1de9388/100x100-000000-80-0-0.jpg",

  // Sungba (Remix) — Asake feat. Burna Boy, the remix single
  sungba: "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/100x100-000000-80-0-0.jpg",
  // Rockstar — his own 2019 standalone single, on no album we hold
  rockstar: "https://cdn-images.dzcdn.net/images/cover/12cc6ed5c376e339bd5e0e7f3500d375/100x100-000000-80-0-0.jpg",
  // Don't Let Me Drown — his single from the F1 (2025) soundtrack
  "don t let me drown": "https://cdn-images.dzcdn.net/images/cover/bb77038fd6b4b72e6d4fd8a34a889e71/100x100-000000-80-0-0.jpg",
  // Yaba Buluku (Remix) — DJ Tarico; contributors verified to include Burna Boy
  "yaba buluku": "https://cdn-images.dzcdn.net/images/cover/838ae1b6384d70287eb799afdb50512c/100x100-000000-80-0-0.jpg",
  // Hossana — Shatta Wale x Burna Boy
  hossana: "https://cdn-images.dzcdn.net/images/cover/2f2348a8985965e0f13b08e0851f5a8d/100x100-000000-80-0-0.jpg",
  // Jerusalema (Remix) — Master KG feat. Burna Boy & Nomcebo Zikode
  jerusalema: "https://cdn-images.dzcdn.net/images/cover/c9db716ce7cada1e9fd8dbde8e0b1301/100x100-000000-80-0-0.jpg",
};

// Not every album row carries art, so drop the empties rather than mapping a
// title to undefined and handing callers a "cover" that isn't one.
const withCover = (rows: { title: string; cover?: string }[]) =>
  rows.flatMap((r) => (r.cover ? [[key(r.title), r.cover] as const] : []));

// Albums, then EPs, then the compilation — so when a track appears twice,
// the original release's art wins over the later collection.
const allReleases = [...albums, ...eps, ...compilations];

/** Song title → the cover of the release whose tracklist contains it. */
const TRACK_COVERS: Record<string, string> = {};
for (const album of allReleases) {
  if (!album.cover) continue;
  for (const track of album.tracks) {
    // First album wins, so an original release beats a later compilation.
    TRACK_COVERS[key(track)] ??= album.cover;
  }
}

const OWN_COVERS: Record<string, string> = {
  ...Object.fromEntries(withCover(allReleases)),
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
