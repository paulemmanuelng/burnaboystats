import { statBoxes, HIGHLIGHT, rankOf } from "./africasBiggest";
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
export const DAI_DAI_VIDEO_VIEWS = "1.14B";

// Total Spotify streams for "Dai Dai" — same live pipeline as the video count.
export const DAI_DAI_SPOTIFY_STREAMS = "473M";

// ---------------------------------------------------------------------------
// The billion-views milestone, read from the leaderboard that ranks it — the
// "fastest to a billion" board on /records/africas-biggest — so the Dai Dai
// page's card and that board can never disagree. Ranks are competition
// ranks (a tie shares one); "joint 5th" / "5.º (empatado)" are spelled per
// edition here, derived, so both cards move the day the board does.
const billionBoard = statBoxes.find((b) => b.id === "fastest-to-a-billion-youtube");
const billionEntries = billionBoard?.entries ?? [];
const ownIndex = billionEntries.findIndex((e) => e.name === HIGHLIGHT);
export const DAI_DAI_1B_DAYS = parseInt(billionEntries[ownIndex]?.value ?? "0", 10);
export const daiDaiBillionRank = ownIndex < 0 ? 0 : rankOf(billionEntries, ownIndex);
export const daiDaiBillionTied =
  billionEntries.filter((e) => parseInt(e.value ?? "", 10) === DAI_DAI_1B_DAYS).length > 1;
const ordinalEn = (n: number) => `${n}${["th", "st", "nd", "rd"][(n % 100 > 10 && n % 100 < 14) || n % 10 > 3 ? 0 : n % 10]}`;
export const DAI_DAI_1B_RANK_EN = `${daiDaiBillionTied ? "joint " : ""}${ordinalEn(daiDaiBillionRank)}`;
export const DAI_DAI_1B_RANK_ES = `${daiDaiBillionRank}.º${daiDaiBillionTied ? " (empatado)" : ""}`;

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
export const DAI_DAI_SPOTIFY_DEBUT = "2026-05-15"; // entered at No. 114 on release day, Friday 15 May
/**
 * Spotify's OWN columns, read off the Daily Top Songs Global chart dated
 * 20 Sep 2026 (charts.spotify.com, read 21 Sep — the chart page opens without
 * a login): Dai Dai — No. 11, Prev 7, Peak 1, **Streak 122**, 2,433,811
 * streams, and in the expanded row **Total days on chart 123**, first entry
 * 15 May 2026 at No. 114, release 14 May 2026 (Spotify prints the day before
 * for a Friday drop; the song was released on Friday 15 May, the date of
 * Billboard's release story). The 19 Sep chart, read the
 * same evening: No. 7, Prev 15, Streak 121, 2,934,986 — the return to the top
 * ten. The reads before it — the 15 Sep chart (No. 20, Prev 20, Streak 117,
 * 2,430,949, Total 118), the 14 Sep chart (No. 20, Prev 9, Streak 116, 2,423,416, Total 117),
 * the 13 Sep chart (No. 9, Prev 4, Streak 115, 2,580,521, Total 116) and the
 * 7 Sep chart (No. 11, Prev 6, Streak 109, 2,631,577, Total 110) — are on the
 * same archive, by date in the URL.
 *
 * The total is the important addition. Every other figure here is derived from
 * two dates and DAYS_OFF, so DAYS_OFF could be wrong without any arithmetic
 * complaining — and it was. Spotify prints the total itself, which pins the one
 * number nothing on this side could check.
 */
export const DAI_DAI_SPOTIFY_BODY_READ = {
  date: "2026-09-20",
  streak: 122,
  totalDaysOnChart: 123,
  debutPosition: 114,
  /** The row's own Peak column on that chart: "Peak 1". The story's chapter
   *  06 figure prints it rather than typing "No. 1". */
  peak: 1,
} as const;
export const DAI_DAI_SPOTIFY_STREAK_SINCE = "2026-05-22"; // 122 days back from the 20 Sep body read
export const DAI_DAI_SPOTIFY_CONFIRMED_THROUGH = "2026-09-20";
/**
 * Days it has dropped off the chart, ever. SIX, all of them in 16-21 May.
 *
 * This read 1 from May until 9 Sep 2026, sourced to live tracking and stated in
 * both editions as "on it every day but one since". It is forced the other way
 * by Spotify's own two columns: 15 May to 7 Sep inclusive is 116 days, the
 * chart says the song has spent 110 of them on it, and 116 - 110 = 6 (and on
 * the 15 Sep chart, 124 days against a total of 118: still 6). The feed ledger
 * above says the same thing six more times.
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
 * added up across several spells.
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
 * confirming "37 of them at No. 1". Spotify's chart is login-gated to a
 * scraper, so like everything else here this is a record of what was read
 * off-site, not something a bot refreshes — which is exactly why it needs a
 * date.
 *
 * Then walked day by day, 14 Sep 2026, on charts.spotify.com's own archive
 * (every Daily Top Songs Global chart from 28 Jun to 13 Sep, by date in the
 * URL, signed in): 37 chart days at No. 1 in six spells — 30 Jun; 3–7 Jul;
 * 10–14 Jul; 17–30 Jul; 7–16 Aug; 21–22 Aug — and not at No. 1 on any chart
 * from 23 Aug (No. 2, Prev 1) to 13 Sep (No. 9). The feed's 37 stands, now
 * read at the body and confirmed through the 13 Sep chart.
 */
export const DAI_DAI_SPOTIFY_NO1_DAYS = 37;
export const DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF = "2026-09-20"; // 20 Sep chart: No. 11 (19 Sep: No. 7) — the 37 stands
export const DAI_DAI_SPOTIFY_NO1_FIRST_DAY = "2026-06-30";
export const DAI_DAI_SPOTIFY_NO1_LAST_DAY = "2026-08-22";

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
 * THE LAST DAY AT No. 1 IS THE CHART DATED 22 AUGUST 2026 — established on
 * 14 Sep 2026 by walking every daily chart from 28 Jun to 13 Sep on
 * charts.spotify.com itself (see the No. 1 total above). The chart is not
 * anonymously scrapeable, but its archive is readable by date in the URL in a
 * signed-in browser, so the run could be walked the way the YouTube run was,
 * and was. What is stated is what was read: 37 days at No. 1 in total, the
 * first on 30 June and the last on 22 August, confirmed through the chart
 * dated 13 September 2026.
 *
 * If it returns to No. 1, set this false and move the anchor — do not simply
 * add days, because the gap in between is not established either.
 */
export const DAI_DAI_SPOTIFY_NO1_RUN_ENDED = true;
/** The day the ending was confirmed, and by whom. */
export const DAI_DAI_SPOTIFY_NO1_ENDED_SEEN_ON = "2026-09-09";

/**
 * TOTAL days spent inside the global Top 10, and the chart the count was read
 * off. A total, not a streak: the song left the Top 10 for five charts (7–11
 * Sep: No. 11, 12, 14, 14, 11) and came back at No. 4 on 12 Sep.
 *
 * Was typed into both editions as a bare "72", inside a clause that then said
 * all three figures were "read the same day"; for a while they were not, and
 * the card carried two dates. 72 is sourced: the 30 Aug feed entry, reading
 * the chart dated 28 August — "its 72nd day inside the Top 10 and, by the
 * chart's own streak column, a 99th consecutive day on it". That entry is also
 * why the streak column governs here rather than the feed's other day-counts,
 * which are totals.
 *
 * Then walked day by day at charts.spotify.com on 14 Sep 2026, from the 28 Aug
 * chart (No. 3, streak 99 — the 72nd day) to the 13 Sep chart (No. 9, prev 4,
 * streak 115, 2,580,521 streams). Eleven of the sixteen charts after 28 Aug
 * had it at No. 10 or better — 29 Aug–6 Sep (2, 5, 8, 9, 9, 9, 6, 2, 6), then
 * 12 and 13 Sep (4, 9). 72 + 11 = 83. kworb's all-time tally of the same chart
 * (global_daily_totals, T10 column) reads 82 through 12 Sep: the same
 * arithmetic from the other direction, and an independent check on the 72.
 * Carry this forward only by reading the chart, and only ever as a total.
 */
// 84th on the chart dated 19 Sep 2026: No. 7 (Prev 15), 2,934,986 streams,
// read at charts.spotify.com on 21 Sep; the 20 Sep chart has it back at No. 11,
// so the count stops at 84 and the stamp at that chart. The charts in between
// (16–18 Sep: 20, 20, 15) added nothing: 83 through the 15 Sep chart, 84
// through the 19th.
export const DAI_DAI_SPOTIFY_TOP10_DAYS = 84;
export const DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF = "2026-09-20";

const longDate = (iso: string, locale: "en-GB" | "es-ES") =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * THE ANCHORS SPLIT ONCE (7–14 Sep 2026), so the card prints each figure under
 * its own date rather than one shared one; they have since re-converged on the
 * 13 Sep chart, and the two stamps print the same date until they split again.
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
export const DAI_DAI_SPOTIFY_NO1_FIRST_LONG = longDate(DAI_DAI_SPOTIFY_NO1_FIRST_DAY, "en-GB");
export const DAI_DAI_SPOTIFY_NO1_FIRST_LONG_ES = longDate(DAI_DAI_SPOTIFY_NO1_FIRST_DAY, "es-ES");
export const DAI_DAI_SPOTIFY_NO1_LAST_LONG = longDate(DAI_DAI_SPOTIFY_NO1_LAST_DAY, "en-GB");
export const DAI_DAI_SPOTIFY_NO1_LAST_LONG_ES = longDate(DAI_DAI_SPOTIFY_NO1_LAST_DAY, "es-ES");
export const DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG = longDate(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH, "en-GB");
export const DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES = longDate(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH, "es-ES");
/** The chart the No. 1 total and the Top 10 count both stop at — the same
 *  chart as the streak again since 14 Sep 2026 (all three read off one chart). */
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

/**
 * AND THE SECOND SPELL HAS ENDED TOO. Read at the body on 16 Sep 2026:
 * YouTube's Global Daily Top Music Videos chart, dated 14 Sep 2026, has
 * "Dai Dai" at No. 2 behind a new entry. As with the first ending, the exact
 * last day of the second spell is not established (the chart renders only its
 * latest issue), so the prose says the spell ended and names the chart that
 * showed it — never a length for the second spell.
 */
export const DAI_DAI_YT_SECOND_SPELL_ENDED_SEEN_ON = "2026-09-14";

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

// ---------------------------------------------------------------------------
// The story's dates and its figures' data (the /dai-dai redesign, 26 Sep 2026).
//
// Each of these was already in the repo — as a typed kicker, a JSON-LD field,
// a comment or a sourcing doc — and nowhere a figure could read it. They are
// transcribed here so the seven chapter figures draw from data rather than
// carrying their own copies of the same numbers.

/** Release day: Friday 15 May 2026 (Billboard's release story; see the
 *  DAI_DAI_SPOTIFY_BODY_READ note on why Spotify prints the 14th). */
export const DAI_DAI_RELEASE_DATE = "2026-05-15";

/** The first-ever FIFA World Cup Final halftime show, MetLife Stadium — the
 *  MusicEvent's startDate on the English page. */
export const DAI_DAI_HALFTIME_DATE = "2026-07-19";

/** The halftime performance on YouTube (the link the hero used to carry). The
 *  story's chapter 07 shows its poster and loads the player only on a tap. */
export const DAI_DAI_HALFTIME_VIDEO_ID = "T3thHUtPdhc";

/**
 * The 37 days at No. 1 on Spotify's Global Daily Top Songs chart, as the SIX
 * spells walked day by day at charts.spotify.com on 14 Sep 2026 (the note on
 * DAI_DAI_SPOTIFY_NO1_DAYS above): 30 Jun; 3–7 Jul; 10–14 Jul; 17–30 Jul;
 * 7–16 Aug; 21–22 Aug. Inclusive chart dates.
 *
 * tests/daiDaiStoryFigures.test.tsx holds these to DAI_DAI_SPOTIFY_NO1_DAYS and
 * to the first and last days, so the strip and the prose cannot part company.
 */
export const DAI_DAI_SPOTIFY_NO1_SPELLS: readonly (readonly [from: string, to: string])[] = [
  ["2026-06-30", "2026-06-30"],
  ["2026-07-03", "2026-07-07"],
  ["2026-07-10", "2026-07-14"],
  ["2026-07-17", "2026-07-30"],
  ["2026-08-07", "2026-08-16"],
  ["2026-08-21", "2026-08-22"],
];

/**
 * The Billboard Global 200 run, one row per issue from its debut to the latest
 * issue read — 17 weeks, which is the entry's own `weeks` in charts.ts.
 *
 * `pos: null` means NO READING IS HELD for that issue. It is never filled from
 * a neighbouring week: the figure draws it hatched. The 5 Jul 2026 feed entry
 * ("a new peak of No. 3 … jumps six places") names no chart date, so it cannot
 * be placed on an issue and is not.
 *
 * Sources, every one already in the repo:
 * - 6 Jun debut at No. 114: docs/sourcing/DAI-DAI-RUNS-2026-08-29.md.
 * - 18 Jul – 8 Aug No. 1, 15 Aug No. 3, 22 and 29 Aug No. 1: the same doc,
 *   counted at the body.
 * - 5 Sep No. 1 (the run's seventh and last week), 12 and 19 Sep No. 3,
 *   26 Sep No. 4: the GLB note in charts.ts.
 */
export const DAI_DAI_GLOBAL_200_RUN: readonly { issue: string; pos: number | null }[] = [
  { issue: "2026-06-06", pos: 114 },
  { issue: "2026-06-13", pos: null },
  { issue: "2026-06-20", pos: null },
  { issue: "2026-06-27", pos: null },
  { issue: "2026-07-04", pos: null },
  { issue: "2026-07-11", pos: null },
  { issue: "2026-07-18", pos: 1 },
  { issue: "2026-07-25", pos: 1 },
  { issue: "2026-08-01", pos: 1 },
  { issue: "2026-08-08", pos: 1 },
  { issue: "2026-08-15", pos: 3 },
  { issue: "2026-08-22", pos: 1 },
  { issue: "2026-08-29", pos: 1 },
  { issue: "2026-09-05", pos: 1 },
  { issue: "2026-09-12", pos: 3 },
  { issue: "2026-09-19", pos: 3 },
  { issue: "2026-09-26", pos: 4 },
];

/** The single's cover on Spotify's CDN (640px rung; spotifyImage/spotifySrcSet
 *  derive the others). The hero shows it on desktop, chapter 01 everywhere. */
export const DAI_DAI_COVER = "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4";

/** The official "Dai Dai" video — the one DAI_DAI_VIDEO_VIEWS counts
 *  (scripts/watched-metrics.json, dai-dai-video-views). The record's "The
 *  video" list shows its poster and loads the player only on a tap. */
export const DAI_DAI_VIDEO_ID = "fcnDmrtj6Sk";

/**
 * The three rows of the record's national-charts table that charts.ts does not
 * hold, because by its own rules it cannot: a regional chart (the Official
 * MENA Chart covers 13 markets and is no country's chart), a radio countdown
 * (the UK's Big Top 40, on the Capital and Heart networks) and an airplay chart
 * (Billboard's Rhythmic Airplay). Each figure is transcribed from what the page
 * already published and the updates feed dated:
 *
 * - MENA: No. 1 ("tops the Official MENA Chart's Top 20", feed). The page has
 *   never stated a week count, so none is given here.
 * - Big Top 40: No. 1 for 4 weeks, the charts of 9 to 30 August 2026 (the
 *   page's card; "a 2nd atop the UK's Big Top 40" and "tops the UK's Big Top
 *   40", feed). No weeks-on-chart figure was ever read.
 * - Rhythmic Airplay: No. 1 for 2 weeks, the charts dated 5 and 12 September
 *   2026 (the page's card; "goes to No. 1 on Billboard's Rhythmic Airplay chart
 *   dated 5 September 2026", feed). No weeks-on-chart figure was ever read.
 *
 * `null` is "not stated": the table prints those words, never a guess.
 */
export const DAI_DAI_OTHER_CHARTS = {
  MENA: { chart: "Official MENA Chart Top 20", peak: 1, weeksAtNo1: null, weeksOnChart: null },
  BIG_TOP_40: { chart: "Big Top 40", peak: 1, weeksAtNo1: 4, weeksOnChart: null },
  RHYTHMIC: { chart: "Billboard Rhythmic Airplay", peak: 1, weeksAtNo1: 2, weeksOnChart: null },
} as const satisfies Record<string, { chart: string; peak: number; weeksAtNo1: number | null; weeksOnChart: number | null }>;
