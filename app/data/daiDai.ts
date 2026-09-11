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
export const DAI_DAI_VIDEO_VIEWS = "1.04B";

// Total Spotify streams for "Dai Dai" — same live pipeline as the video count.
export const DAI_DAI_SPOTIFY_STREAMS = "433M";

// ---------------------------------------------------------------------------
// The Spotify Global Daily Top Songs run.
//
// FOUR figures, and they are NOT interchangeable — conflating them is what went
// wrong here on 29 Aug 2026. The site has always published the STREAK, and a
// "correction" that quietly swapped in the TOTAL then rewrote a dated log entry
// that had been right. See RETRACTIONS.md #5.
//
// The same conflation then ran the other way, and survived four months. This
// file used to read the updates feed's six dated day-counts — 10 Aug 82,
// 11 Aug 83, 14 Aug 86, 15 Aug 87, 18 Aug 90, 21 Aug 93 — as STREAKS, concluded
// they implied a 21 May day one, and explained the one-day gap against
// Spotify's own Streak column as a transcription drift. They are not streaks.
// They are TOTAL days on chart, and every one of them is exact once the song is
// six days off rather than one:
//
//   chart    feed   streak   total (1 day off)   total (6 days off)
//   10 Aug     82       81                  87                  82  ✓
//   11 Aug     83       82                  88                  83  ✓
//   14 Aug     86       85                  91                  86  ✓
//   15 Aug     87       86                  92                  87  ✓
//   18 Aug     90       89                  95                  90  ✓
//   21 Aug     93       92                  98                  93  ✓
//
// Read as streaks they are all wrong by one, which is what produced the drift
// there was then a paragraph explaining. Read as totals they are all right, and
// they have been quietly stating DAYS_OFF = 6 since August.
export const DAI_DAI_SPOTIFY_DEBUT = "2026-05-15"; // entered at No. 114, the day after release
/**
 * Spotify's OWN columns, read off the Daily Top Songs Global chart dated
 * 7 Sep 2026 (Paul, from the chart page): Dai Dai — No. 11, Prev 6, Peak 1,
 * **Streak 109**, 2,631,577 streams, and in the expanded row **Total days on
 * chart 110**, first entry 15 May 2026 at No. 114, release 14 May 2026.
 *
 * The total is the important addition. Every other figure here is derived from
 * two dates and DAYS_OFF, so DAYS_OFF could be wrong without any arithmetic
 * complaining — and it was. Spotify prints the total itself, which pins the one
 * number nothing on this side could check.
 */
export const DAI_DAI_SPOTIFY_BODY_READ = {
  date: "2026-09-07",
  streak: 109,
  totalDaysOnChart: 110,
  debutPosition: 114,
} as const;
export const DAI_DAI_SPOTIFY_STREAK_SINCE = "2026-05-22"; // 109 days back from the body read
export const DAI_DAI_SPOTIFY_CONFIRMED_THROUGH = "2026-09-07";
/**
 * Days it has dropped off the chart, ever. SIX, all of them in 16-21 May.
 *
 * This read 1 from May until 9 Sep 2026, sourced to live tracking and stated in
 * both editions as "on it every day but one since". It is forced the other way
 * by Spotify's own two columns: 15 May to 7 Sep inclusive is 116 days, the
 * chart says the song has spent 110 of them on it, and 116 - 110 = 6. The feed
 * ledger above says the same thing six more times.
 *
 * So the shape of the run changes, though none of the published totals do: the
 * song entered at No. 114 on 15 May, fell straight back off for six days, and
 * returned on 22 May to the streak it has held since. It was never "on it every
 * day but one".
 */
export const DAI_DAI_SPOTIFY_DAYS_OFF = 6;

const daysInclusive = (from: string, to: string) =>
  Math.round(
    (Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000
  ) + 1;

/** CONSECUTIVE days on the chart — the figure the site publishes. */
export const daiDaiSpotifyStraightDays = daysInclusive(
  DAI_DAI_SPOTIFY_STREAK_SINCE,
  DAI_DAI_SPOTIFY_CONFIRMED_THROUGH
);

/** TOTAL days on the chart, streak plus the days before it. A different
 *  number from the one above; never substitute one for the other. */
export const daiDaiSpotifyDaysOnChart =
  daysInclusive(DAI_DAI_SPOTIFY_DEBUT, DAI_DAI_SPOTIFY_CONFIRMED_THROUGH) -
  DAI_DAI_SPOTIFY_DAYS_OFF;

/**
 * TOTAL days spent AT No. 1 on the Spotify Global Daily chart.
 *
 * A fourth, separate number: not the streak, not days-on-chart, not
 * consecutive days at the top — the count of chart days the song has led,
 * added up across two spells either side of the August reclaim.
 *
 * It lived nowhere. It was typed into twelve places in two languages —
 * page copy, the FAQ answer that is also emitted as FAQPage structured data,
 * the story rail, the share card's cache id, and africasBiggest's board note —
 * with no constant behind it and no date saying when it was counted. Its three
 * siblings above all carry an anchor and are pinned; this one was correct only
 * because someone kept remembering it.
 *
 * The anchor is what matters. Reconciled against the updates feed's own dated
 * ledger, which records each new day at No. 1 as it lands: the 31st on
 * 12 Aug, 33rd on 14 Aug, 34th on 15 Aug, 36th on 21 Aug, and the 28 Aug entry
 * confirming "37 of them at No. 1". Spotify's chart is login-gated, so like
 * everything else here this is a record of what was read off-site, not
 * something a scraper refreshes — which is exactly why it needs a date.
 */
export const DAI_DAI_SPOTIFY_NO1_DAYS = 37;
export const DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF = "2026-08-28";

/**
 * THE SPOTIFY No. 1 RUN HAS ENDED, and 37 is therefore a FINAL total rather
 * than one still accruing.
 *
 * Reported by Paul from his own tracking on 9 Sep 2026. That is the source of
 * record for this figure and not a fallback: charts.spotify.com is login-gated
 * (its API answers 401 missing_token to an anonymous caller), so every Spotify
 * number on this site comes from a reading done off-site, and the standing rule
 * is to take those from Paul rather than from an automated kworb pull.
 *
 * The site's own last reading already pointed this way without settling it: on
 * the 28 Aug chart (updates.ts) the song sits at No. 3, so the total had
 * stopped accruing before the anchor above. What was missing was confirmation
 * that it had not gone back up in the days since. It has not.
 *
 * THE EXACT LAST DAY AT No. 1 IS NOT ESTABLISHED and is not published. The
 * login wall means the run cannot be walked day by day the way the YouTube run
 * was, and this project does not publish a figure it has not read. What is
 * stated is what is established: 37 days at No. 1 in total, counted through the
 * chart dated 28 August 2026, and that the run has since ended.
 *
 * If it returns to No. 1, set this false and move the anchor — do not simply
 * add days, because the gap in between is not established either.
 */
export const DAI_DAI_SPOTIFY_NO1_RUN_ENDED = true;
/** The day the ending was confirmed, and by whom. */
export const DAI_DAI_SPOTIFY_NO1_ENDED_SEEN_ON = "2026-09-09";

/**
 * Days spent inside the global Top 10, and the chart that count was read off.
 *
 * Was typed into both editions as a bare "72", inside a clause that then said
 * all three figures were "read the same day". Two of them now are not: this one
 * and the days-at-No. 1 total below both stop at the 28 Aug chart, while the
 * streak runs to 7 Sep. It cannot be carried forward either — the song is at
 * No. 11 on the 7 Sep chart, so the run inside the Top 10 ended somewhere in
 * between and this project does not publish a day it has not counted.
 *
 * 72 is sourced: the 30 Aug feed entry, reading the chart dated 28 August —
 * "its 72nd day inside the Top 10 and, by the chart's own streak column, a 99th
 * consecutive day on it". That entry is also why the streak column governs here
 * rather than the feed's other day-counts, which are totals.
 */
export const DAI_DAI_SPOTIFY_TOP10_DAYS = 72;
export const DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF = "2026-08-28";

const longDate = (iso: string, locale: "en-GB" | "es-ES") =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * THE ANCHORS HAVE SPLIT, so the card prints two dates rather than one.
 *
 * There used to be a single DAI_DAI_SPOTIFY_READ_ON here, defined as the OLDER
 * of the streak and No. 1 anchors, on the reasoning that a shared date could
 * then never over-state. Both anchors pointed at the same 28 Aug chart, so it
 * cost nothing and read cleanly — one sentence, one chart, one date.
 *
 * It costs something now. The streak was re-read on the 7 Sep chart and stands
 * at 109; the days-at-No. 1 total is still the 28 Aug count, because the run
 * ended in between and the last day at No. 1 was never established. Taking the
 * older would print "109 straight days, counted through the chart dated
 * 28 August" — and 109 was not true on 28 August. 99 was. Under-stating the
 * date over-states the figure, which is the failure the min() was there to
 * prevent, arriving through the door it left open.
 *
 * liveClaims.test.ts asks for exactly this when the anchors diverge: give each
 * figure its own date in the card.
 */
export const DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG = longDate(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH, "en-GB");
export const DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES = longDate(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH, "es-ES");
/** The 28 Aug chart, which the No. 1 total and the Top 10 count both stop at. */
export const DAI_DAI_SPOTIFY_NO1_READ_ON_LONG = longDate(DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF, "en-GB");
export const DAI_DAI_SPOTIFY_NO1_READ_ON_LONG_ES = longDate(DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF, "es-ES");

// ---------------------------------------------------------------------------
// The YouTube Global Daily Top Music Videos run, on the same footing and for
// the same reason.
//
// "48 days" sat on both editions for a month. It was last true on 26 July
// 2026, and the updates feed then RE-STATED it on 13 August, when the run was
// on day 66 — so this was not a figure that quietly went unmaintained, it was
// a figure that got copied forward as if freshly counted. streakParity.test.ts
// stayed green throughout, because it holds the card and the feed to EACH
// OTHER; two copies of a wrong number agree perfectly.
//
// The run was then walked day by day at charts.youtube.com — all 97 days from
// the 23 May debut to the 27 Aug chart, twice and from both directions, with
// the chart's own "days on chart" counter (18 on 9 Jun, 97 on 27 Aug) proving
// no chart day is missing from the middle. Rows were matched on video id
// fcnDmrtj6Sk, not on title: from 8 Aug a second row, "Dai dai (Live)" by
// Shakira & Beéle (mapfegnAXOg), sits on the same chart.
export const DAI_DAI_YT_NO1_SINCE = "2026-06-09"; // first day of the run
export const DAI_DAI_YT_CONFIRMED_THROUGH = "2026-08-27"; // last chart read AT No. 1

/**
 * THE RUN HAS ENDED. Read at the body on 8 Sep 2026: YouTube's Global Daily Top
 * Music Videos chart, dated 6 Sep 2026, has LISA's "SaWaDiKa" at No. 1 and
 * "Dai Dai" at No. 2 — and the chart's own Yesterday column shows the same
 * order on 5 Sep, so it was not a one-day dip.
 *
 * The exact last day at No. 1 is NOT established. charts.youtube.com renders
 * only the latest chart; its dated URLs return an empty client-side payload,
 * the same wall the TurnTable Top 50 hit. SaWaDiKa shows 4 days on chart, so it
 * took the top somewhere between 3 and 5 Sep — which brackets the ending but
 * does not date it, and this project does not publish a figure it has not read.
 *
 * So the site states what IS established: 80 days at No. 1 from 9 June through
 * the 27 Aug chart, and that the run has since ended. When the exact date is
 * known, set DAI_DAI_YT_NO1_ENDED and the prose can name it.
 */
export const DAI_DAI_YT_RUN_ENDED = false;
/** The chart that established the run was over, and what it showed. */
export const DAI_DAI_YT_ENDED_SEEN_ON = "2026-09-06";

/**
 * AND IT IS BACK. Read at the body on 9 Sep 2026: YouTube's Global Daily Top
 * Music Videos chart, dated 7 Sep 2026, has "Dai Dai" at No. 1 again — its
 * Yesterday column reads 2, which independently confirms the 6 Sep reading
 * above was right, so the ending was real and this reclaim is new. The row's
 * own "Days on chart" counter reads 108, matching this file's accounting
 * exactly (97 on the 27 Aug chart, plus eleven days). Credited "Shakira &
 * Burna Boy", which is what separates it from "Dai dai (Live)".
 *
 * THE 80 DOES NOT MOVE, and that is the whole point of the instruction above:
 * "do not simply add days, because the gap in between is not established
 * either." The song was demonstrably NOT at No. 1 on 5 or 6 September, so the
 * run from 9 June is a CLOSED count of 80 consecutive days through the 27 Aug
 * chart. What is No. 1 now is a new spell whose first day nobody has read.
 *
 * So the site states both, separately, and neither as a total: 80 straight days
 * to 27 August, and No. 1 again on the chart dated 7 September.
 */
export const DAI_DAI_YT_NO1_AGAIN_SEEN_ON = "2026-09-07";
export const DAI_DAI_YT_DAYS_ON_CHART_AT_RECLAIM = 108;

/** Consecutive days at No. 1 on YouTube's global daily music-video chart. */
export const daiDaiYouTubeDaysAtNo1 = daysInclusive(
  DAI_DAI_YT_NO1_SINCE,
  DAI_DAI_YT_CONFIRMED_THROUGH
);

// Deliberately NOT published: the video has also spent 93 days at No. 1 in
// total (only 28-29 May, 2 June and 8 June were ever missed). That is a
// different metric from the run the card describes, and swapping one number
// for the other inside a sentence that says "as the most-viewed music video
// on YouTube worldwide" is exactly the conflation this repo keeps paying for.
