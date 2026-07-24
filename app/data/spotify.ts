// Burna Boy's Spotify follower count, one home for the leaderboard + stat cards.
// Maintained BY HAND: Spotify's API stopped returning the `followers` field for
// standard app credentials in 2026 (it comes back undefined), so it can't be
// auto-fetched like the other live figures. It moves slowly, so a manual bump
// every few weeks is fine — read it off the artist's Spotify page and update
// this one string.
export const spotifyFollowersDisplay = "17.1M";
