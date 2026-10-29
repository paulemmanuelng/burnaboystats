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
// 18,016,193 on 2 Oct, 18,121,851 on 11 Oct — so the second decimal moves within a day or two of any
// reading; the display is a dated reading, not a live figure.

/** The day every count in `spotifyFollowersRead` was read. */
export const SPOTIFY_FOLLOWERS_READ_ON = "2026-10-11";

export interface FollowersReading {
  name: string;
  /** Flag and country, as the board prints them under the name. */
  sub: string;
  spotifyId: string;
  followers: number;
}

/**
 * Read 11 Oct 2026 in the browser pane, from each artist's own Spotify page
 * (the About panel's exact count; 2 Oct before that). Seyi Vibez passed Kizz
 * Daniel between the two readings. Burna Boy and the nineteen
 * artists of the Afrobeats board; Diamond Platnumz and Black Coffee, whom the
 * followers board has always quoted; and MOLIY, a Ghanaian act high on kworb's
 * monthly-listeners list, as a check that a big audience is not a big following.
 * Highest first.
 */
export const spotifyFollowersRead: FollowersReading[] = [
  { name: "Burna Boy", sub: "🇳🇬 Nigeria", spotifyId: "3wcj11K77LjEY1PkEazffa", followers: 18_121_851 },
  { name: "Wizkid", sub: "🇳🇬 Nigeria", spotifyId: "3tVQdUvClmAT7URs9V3rsp", followers: 13_039_903 },
  { name: "Davido", sub: "🇳🇬 Nigeria", spotifyId: "0Y3agQaa6g2r0YmHPOO9rh", followers: 12_178_294 },
  { name: "Rema", sub: "🇳🇬 Nigeria", spotifyId: "46pWGuE3dSwY3bMMXGBvVS", followers: 12_114_563 },
  { name: "Asake", sub: "🇳🇬 Nigeria", spotifyId: "3a1tBryiczPAZpgoZN9Rzg", followers: 11_023_141 },
  { name: "Omah Lay", sub: "🇳🇬 Nigeria", spotifyId: "5yOvAmpIR7hVxiS6Ls5DPO", followers: 8_174_859 },
  { name: "Ayra Starr", sub: "🇳🇬 Nigeria", spotifyId: "3ZpEKRjHaHANcpk10u6Ntq", followers: 7_958_957 },
  { name: "Ruger", sub: "🇳🇬 Nigeria", spotifyId: "0a1SidMjD8D6EHvJph4n2H", followers: 6_468_037 },
  { name: "Seyi Vibez", sub: "🇳🇬 Nigeria", spotifyId: "4zmZ8lVLzGc84S4v2B1rLx", followers: 6_199_797 },
  { name: "Kizz Daniel", sub: "🇳🇬 Nigeria", spotifyId: "1X6cBGnXpEpN7CmflLKmLV", followers: 6_118_858 },
  { name: "Fireboy DML", sub: "🇳🇬 Nigeria", spotifyId: "75VKfyoBlkmrJFDqo1o2VY", followers: 5_803_810 },
  { name: "Olamide", sub: "🇳🇬 Nigeria", spotifyId: "4ovtyvs7j1jSmwhkBGHqSr", followers: 5_623_998 },
  { name: "Tyla", sub: "🇿🇦 South Africa", spotifyId: "3SozjO3Lat463tQICI9LcE", followers: 5_498_044 },
  { name: "Tems", sub: "🇳🇬 Nigeria", spotifyId: "687cZJR45JO7jhk1LHIbgq", followers: 5_172_342 },
  { name: "BNXN", sub: "🇳🇬 Nigeria", spotifyId: "3zaDigUwjHvjOkSn0NDf9x", followers: 4_521_041 },
  { name: "Tiwa Savage", sub: "🇳🇬 Nigeria", spotifyId: "1hNaHKp2Za5YdOAG0WnRbc", followers: 3_983_995 },
  { name: "Black Sherif", sub: "🇬🇭 Ghana", spotifyId: "2LiqbH7OhqP0yuaG8VL1wJ", followers: 3_155_701 },
  { name: "Victony", sub: "🇳🇬 Nigeria", spotifyId: "1E5hfn5BduN2nnoZCJmUVG", followers: 2_941_494 },
  { name: "CKay", sub: "🇳🇬 Nigeria", spotifyId: "048LktY5zMnakWq7PTtFrz", followers: 2_312_801 },
  { name: "Diamond Platnumz", sub: "🇹🇿 Tanzania", spotifyId: "3cAisWS37sGCCtRgWfvrod", followers: 1_966_418 },
  { name: "Oxlade", sub: "🇳🇬 Nigeria", spotifyId: "3WTrdbZU99dgTtt3ZkyamT", followers: 1_851_403 },
  { name: "Black Coffee", sub: "🇿🇦 South Africa", spotifyId: "6wMr4zKPrrR0UVz08WtUWc", followers: 1_740_634 },
  { name: "MOLIY", sub: "🇬🇭 Ghana", spotifyId: "2hVWBpjLW4Q7fboYz2pVYK", followers: 348_813 },
];

/** 18,016,193 → "18.02M", the board's and the card's spelling. */
export const followersCompact = (n: number): string => `${(n / 1e6).toFixed(2)}M`;

/**
 * The day `spotifyGlobalRank` below was last read off kworb's live listener
 * chart and published: the UTC day of the hourly stats-bot run that wrote it
 * (watched-metrics.json `spotify-listeners-rank`, `field: "publishedOn"`),
 * never by hand. /records/by-the-numbers prints it as the rank's "Read" date
 * (design review 8 Oct 2026, fix 23). Its first value is the metric's own
 * `lastChanged`, the day the bot last wrote the rank.
 */
export const SPOTIFY_RANK_READ_ON = "2026-10-29";

const burnaFollowers = spotifyFollowersRead.find((r) => r.name === "Burna Boy")!;
export const spotifyFollowersDisplay = followersCompact(burnaFollowers.followers);

// Burna Boy's global rank by Spotify monthly listeners (lower is better).
// One home for the figure; auto-updated hourly by the live stats bot.
export const spotifyGlobalRank = "110";
