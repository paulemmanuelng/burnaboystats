// Spotify follower counts — Burna Boy's, and the field's on the followers board
// on /records/africas-biggest — one home for the board, its note and source line,
// the stat card and /api/v1/stats.
//
// Maintained BY HAND: Spotify's API stopped returning the `followers` field for
// standard app credentials in 2026 (it comes back undefined), so it can't be
// auto-fetched like the other live figures. It moves slowly, so a re-read every
// few weeks is fine. Read each artist's own page, open.spotify.com/artist/<id>
// (the About panel prints the exact count; it is in the page as served), and
// replace the WHOLE list below with the new day's counts and the date beside
// it — never one row, so every comparison the board prints is one day's reading.
// Everything else is derived from the list: the displayed figures, the top
// five, the gaps the note quotes, and the source line's counts.
//
// Burna Boy adds roughly 10–15 thousand a day — 17,810,103 on 17 Sep,
// 17,870,932 on 21 Sep, 17,911,287 on 24 Sep, 17,954,252 on 27 Sep,
// 18,016,193 on 2 Oct — so the second decimal moves within a day or two of any
// reading; the display is a dated reading, not a live figure.

/** The day every count in `spotifyFollowersRead` was read. */
export const SPOTIFY_FOLLOWERS_READ_ON = "2026-10-02";

export interface FollowersReading {
  name: string;
  /** Flag and country, as the board prints them under the name. */
  sub: string;
  spotifyId: string;
  followers: number;
}

/**
 * Read 2 Oct 2026 in the owner's browser, from each artist's own Spotify page
 * (the About panel's exact count). Burna Boy and the nineteen
 * artists of the Afrobeats board; Diamond Platnumz and Black Coffee, whom the
 * followers board has always quoted; and MOLIY, a Ghanaian act high on kworb's
 * monthly-listeners list, as a check that a big audience is not a big following.
 * Highest first.
 */
export const spotifyFollowersRead: FollowersReading[] = [
  { name: "Burna Boy", sub: "🇳🇬 Nigeria", spotifyId: "3wcj11K77LjEY1PkEazffa", followers: 18_016_193 },
  { name: "Wizkid", sub: "🇳🇬 Nigeria", spotifyId: "3tVQdUvClmAT7URs9V3rsp", followers: 12_942_563 },
  { name: "Davido", sub: "🇳🇬 Nigeria", spotifyId: "0Y3agQaa6g2r0YmHPOO9rh", followers: 12_093_688 },
  { name: "Rema", sub: "🇳🇬 Nigeria", spotifyId: "46pWGuE3dSwY3bMMXGBvVS", followers: 12_016_160 },
  { name: "Asake", sub: "🇳🇬 Nigeria", spotifyId: "3a1tBryiczPAZpgoZN9Rzg", followers: 10_895_091 },
  { name: "Omah Lay", sub: "🇳🇬 Nigeria", spotifyId: "5yOvAmpIR7hVxiS6Ls5DPO", followers: 8_093_748 },
  { name: "Ayra Starr", sub: "🇳🇬 Nigeria", spotifyId: "3ZpEKRjHaHANcpk10u6Ntq", followers: 7_891_673 },
  { name: "Ruger", sub: "🇳🇬 Nigeria", spotifyId: "0a1SidMjD8D6EHvJph4n2H", followers: 6_437_508 },
  { name: "Seyi Vibez", sub: "🇳🇬 Nigeria", spotifyId: "4zmZ8lVLzGc84S4v2B1rLx", followers: 6_120_625 },
  { name: "Kizz Daniel", sub: "🇳🇬 Nigeria", spotifyId: "1X6cBGnXpEpN7CmflLKmLV", followers: 6_088_803 },
  { name: "Fireboy DML", sub: "🇳🇬 Nigeria", spotifyId: "75VKfyoBlkmrJFDqo1o2VY", followers: 5_765_756 },
  { name: "Olamide", sub: "🇳🇬 Nigeria", spotifyId: "4ovtyvs7j1jSmwhkBGHqSr", followers: 5_580_691 },
  { name: "Tyla", sub: "🇿🇦 South Africa", spotifyId: "3SozjO3Lat463tQICI9LcE", followers: 5_469_187 },
  { name: "Tems", sub: "🇳🇬 Nigeria", spotifyId: "687cZJR45JO7jhk1LHIbgq", followers: 5_133_917 },
  { name: "BNXN", sub: "🇳🇬 Nigeria", spotifyId: "3zaDigUwjHvjOkSn0NDf9x", followers: 4_449_006 },
  { name: "Tiwa Savage", sub: "🇳🇬 Nigeria", spotifyId: "1hNaHKp2Za5YdOAG0WnRbc", followers: 3_954_403 },
  { name: "Black Sherif", sub: "🇬🇭 Ghana", spotifyId: "2LiqbH7OhqP0yuaG8VL1wJ", followers: 3_129_871 },
  { name: "Victony", sub: "🇳🇬 Nigeria", spotifyId: "1E5hfn5BduN2nnoZCJmUVG", followers: 2_912_300 },
  { name: "CKay", sub: "🇳🇬 Nigeria", spotifyId: "048LktY5zMnakWq7PTtFrz", followers: 2_303_560 },
  { name: "Diamond Platnumz", sub: "🇹🇿 Tanzania", spotifyId: "3cAisWS37sGCCtRgWfvrod", followers: 1_952_487 },
  { name: "Oxlade", sub: "🇳🇬 Nigeria", spotifyId: "3WTrdbZU99dgTtt3ZkyamT", followers: 1_842_132 },
  { name: "Black Coffee", sub: "🇿🇦 South Africa", spotifyId: "6wMr4zKPrrR0UVz08WtUWc", followers: 1_734_137 },
  { name: "MOLIY", sub: "🇬🇭 Ghana", spotifyId: "2hVWBpjLW4Q7fboYz2pVYK", followers: 345_706 },
];

/** 18,016,193 → "18.02M", the board's and the card's spelling. */
export const followersCompact = (n: number): string => `${(n / 1e6).toFixed(2)}M`;

const burnaFollowers = spotifyFollowersRead.find((r) => r.name === "Burna Boy")!;
export const spotifyFollowersDisplay = followersCompact(burnaFollowers.followers);

// Burna Boy's global rank by Spotify monthly listeners (lower is better).
// One home for the figure; auto-updated hourly by the live stats bot.
export const spotifyGlobalRank = "90";
