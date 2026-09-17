// Burna Boy's Spotify follower count, one home for the leaderboard + stat cards.
// Maintained BY HAND: Spotify's API stopped returning the `followers` field for
// standard app credentials in 2026 (it comes back undefined), so it can't be
// auto-fetched like the other live figures. It moves slowly, so a manual bump
// every few weeks is fine — read it off the artist's Spotify page (the About
// panel prints the exact count) and update this one string.
//
// Read 17 Sep 2026: 17,810,103 at open.spotify.com/artist/3wcj11K77LjEY1PkEazffa,
// the same figure ChartMasters' Artist Global Impact page carried that day —
// its tracking history (the-artist-spotlight) shows the count adding roughly
// 12–13 thousand a day, so a reading is about a month from drifting out of
// its second decimal. The board on /records/africas-biggest that ranks him
// against the field is re-read whole, never one row at a time.
export const spotifyFollowersDisplay = "17.81M";

// Burna Boy's global rank by Spotify monthly listeners (lower is better).
// One home for the figure; auto-updated hourly by the live stats bot.
export const spotifyGlobalRank = "75";
