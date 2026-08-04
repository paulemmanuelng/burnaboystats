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

  // Higher — his own 2024 single
  higher: "https://cdn-images.dzcdn.net/images/cover/a01a6cc7f3c7d316f597492e03caa8fe/100x100-000000-80-0-0.jpg",
  // Do I (Remix) — Phyno ft. Burna Boy
  "do i": "https://cdn-images.dzcdn.net/images/cover/060b1718eafdeecf3642fb53b072d2e8/100x100-000000-80-0-0.jpg",
  // Question — Burna Boy ft. Don Jazzy
  question: "https://cdn-images.dzcdn.net/images/cover/f1ded2f2f5b80c9b054ee9f742cce6fd/100x100-000000-80-0-0.jpg",
  // Want It All — Burna Boy ft. Polo G
  "want it all": "https://cdn-images.dzcdn.net/images/cover/65652c3850bfa36fcf7fe016ffe792f3/100x100-000000-80-0-0.jpg",
  // Onyeka (Baby) — on Twice As Tall's deluxe edition
  "onyeka baby": "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/100x100-000000-80-0-0.jpg",
  // Own It — Stormzy ft. Burna Boy & Ed Sheeran
  "own it": "https://cdn-images.dzcdn.net/images/cover/c118f131cf627543b95df1ad9a4c1571/100x100-000000-80-0-0.jpg",
  // Donne-moi l'accord — Dadju & Burna Boy
  "donne moi l accord": "https://cdn-images.dzcdn.net/images/cover/046cf3983b563fea65147732eeb653c2/100x100-000000-80-0-0.jpg",
  // Play Play — J Hus ft. Burna Boy, "Big Conspiracy"
  "play play": "https://cdn-images.dzcdn.net/images/cover/fd4f0303fd35a1ecdfaa76ea1a4e29a4/100x100-000000-80-0-0.jpg",
  // Second Sermon (Remix) — Black Sherif ft. Burna Boy
  "second sermon": "https://cdn-images.dzcdn.net/images/cover/6d35385e5b10cc9daea1e7c8dfdf5cff/100x100-000000-80-0-0.jpg",
  // Simmer — Mahalia ft. Burna Boy
  simmer: "https://cdn-images.dzcdn.net/images/cover/eceac2149053e31a54687b05e125c93d/100x100-000000-80-0-0.jpg",
  // Loved By You — Justin Bieber ft. Burna Boy, "Justice"
  "loved by you": "https://cdn-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/100x100-000000-80-0-0.jpg",
  // Enjoy Yourself (Remix) — Pop Smoke ft. Burna Boy
  "enjoy yourself": "https://cdn-images.dzcdn.net/images/cover/337e152ccbf267774a30a08fbceae106/100x100-000000-80-0-0.jpg",
  // Rollin' — MIST ft. Burna Boy
  rollin: "https://cdn-images.dzcdn.net/images/cover/123c9286e946a0ad60a4126acbee6f60/100x100-000000-80-0-0.jpg",
  // Lenu (Remix) — BNXN ft. Burna Boy
  lenu: "https://cdn-images.dzcdn.net/images/cover/aef7ccf16f0481793eea256ab167aa88/100x100-000000-80-0-0.jpg",
  // All Eyes on Me — AKA ft. Burna Boy, Da L.E.S & JR
  "all eyes on me": "https://cdn-images.dzcdn.net/images/cover/51a425dcf87f37e33159744d5685471d/100x100-000000-80-0-0.jpg",
  // B. D'OR — Burna Boy ft. Wizkid
  "b d or": "https://cdn-images.dzcdn.net/images/cover/22ffd179c90c11da9bbb429c9c13d4a4/100x100-000000-80-0-0.jpg",
  // Mera Na — Sidhu Moose Wala ft. Burna Boy
  "mera na": "https://cdn-images.dzcdn.net/images/cover/79427388e8d1b09867081a1edf9a62a2/100x100-000000-80-0-0.jpg",
  // Only You — J. Cole ft. Burna Boy
  "only you": "https://cdn-images.dzcdn.net/images/cover/ba58221a878715b6d99912ce63ea63d5/100x100-000000-80-0-0.jpg",
  // just like me — 21 Savage ft. Burna Boy & Metro Boomin
  "just like me": "https://cdn-images.dzcdn.net/images/cover/d1efd9562706fbc4facf4e86cbe78be4/100x100-000000-80-0-0.jpg",
  // Tshwala Bam — TitoM & Yuppe ft. Burna Boy & S.N.E
  "tshwala bam": "https://cdn-images.dzcdn.net/images/cover/04a3890df3db451da1b4dea992f59ab2/100x100-000000-80-0-0.jpg",
  // Deja-vu — Dr Vades ft. Burna Boy & K-Trap; entered the live feed 4 Aug
  "deja vu": "https://cdn-images.dzcdn.net/images/cover/7a7ad27dccfb97d6c825f6cf4568b50d/100x100-000000-80-0-0.jpg",
  // Be Honest — Jorja Smith ft. Burna Boy. Deezer only licenses karaoke
  // covers of it, so this one comes from the iTunes catalogue instead.
  "be honest": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/17/8d/a1/178da1a7-0ad5-145b-31fb-9a4c150b4a4a/194491116361.jpg/100x100bb.jpg",
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
  const hit = OWN_COVERS[k] ?? TRACK_COVERS[k];
  if (hit) return hit;
  // "Sungba (Remix)" should find the art filed under "sungba": sources write
  // the remix credit inconsistently, and the remix single almost always
  // carries the base release's art in our maps.
  const base = k.replace(/\s+remix$/, "");
  return base !== k ? (OWN_COVERS[base] ?? TRACK_COVERS[base]) : undefined;
}

/** First letter, for the fallback tile when there is no art. */
export function monogramFor(title: string): string {
  return (title.trim()[0] ?? "?").toUpperCase();
}
