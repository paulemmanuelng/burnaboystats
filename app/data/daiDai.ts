// "Dai Dai"'s two live figures, in one place.
//
// These used to be declared inside app/dai-dai/page.tsx, which was fine while
// exactly one page showed them. The Spanish edition at /dai-dai/es shows the
// same numbers, and the stats bot rewrites these strings hourly — a second
// copy in another file would simply be missed by the bot and start lying
// within a day. One home, two readers, no drift.
//
// Both are bot-written (scripts/watched-metrics.json targets THIS file now):
// dai-dai-video-views and spotify-streams-dai-dai.

// Views of the official "Dai Dai" video (youtube.com/watch?v=fcnDmrtj6Sk),
// shown in whole millions — rewritten only when the figure ticks over another
// million, so the page changes exactly when the number does.
export const DAI_DAI_VIDEO_VIEWS = "843M";

// Total Spotify streams for "Dai Dai" — same live pipeline as the video count.
export const DAI_DAI_SPOTIFY_STREAMS = "356M";
