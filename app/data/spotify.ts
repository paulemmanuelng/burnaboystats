// Burna Boy's Spotify follower count, one home for the leaderboard + stat cards.
// Maintained BY HAND: Spotify's API stopped returning the `followers` field for
// standard app credentials in 2026 (it comes back undefined), so it can't be
// auto-fetched like the other live figures. It moves slowly, so a manual bump
// every few weeks is fine — read it off the artist's Spotify page (the About
// panel prints the exact count) and update this one string.
//
// Read 24 Sep 2026: 17,911,287 at open.spotify.com/artist/3wcj11K77LjEY1PkEazffa
// (the About panel). The count adds roughly 10–15 thousand a day — 17,810,103
// on 17 Sep, 17,870,932 on 21 Sep, 17,911,287 on 24 Sep — so the second decimal
// moves within a day or two of any reading; the string is a dated reading, not a
// live figure. The board on /records/africas-biggest that ranks him against the
// field is re-read whole, never one row at a time.
export const spotifyFollowersDisplay = "17.91M";

// Burna Boy's global rank by Spotify monthly listeners (lower is better).
// One home for the figure; auto-updated hourly by the live stats bot.
export const spotifyGlobalRank = "82";
