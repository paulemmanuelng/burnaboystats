// Career-wide streaming totals — the sum of every song and every video.
//
// These were tracked by the stats bot for weeks before they were shown
// anywhere, which made them the one automated figure the site collected but
// never published. Both live here as their own home so the hourly bot can
// rewrite exactly one string per figure and have it update everywhere.
//
// Auto-updated hourly by scripts/apply-stat-updates.mjs (the
// spotify-total-streams and youtube-total-views metrics), read from kworb's
// artist totals. Displayed in whole billions — these move by millions a day,
// so more precision would be noise.

// Every Burna Boy song on Spotify, lead and featured credits combined.
// Maintained from Paul's live tracking — the bot's kworb artist-totals
// source undercounts by ~107.6M (it misses some featured credits), which is
// why this figure is no longer auto-published. Refreshed 6 Aug 2026 as
// kworb's current total (10,529,639,831) plus that documented gap
// (~10,637,253,512); the gap itself was measured against Paul's tracked
// 10,608,257,587 on 31 Jul 2026. The spotify-total-streams metric still
// monitors the source for movement.
export const spotifyTotalStreams = "10.64B";

// Every Burna Boy video on YouTube, across his channel and others'.
export const youtubeTotalViews = "3.16B";
