// Live Spotify figures, each with ONE home so the auto-refresh bot updates a
// single value. Followers comes from Spotify's official API (reliable); the
// hourly `stats-live` workflow keeps it current behind a sanity gate.
//
// Stored as the DISPLAYED string ("17.1M") on purpose: the bot only rewrites it
// when the value crosses a 0.1M boundary, so the page changes only when the
// number visibly changes — no churn from sub-tenths wiggle.
export const spotifyFollowersDisplay = "17.1M";
