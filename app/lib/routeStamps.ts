import { allPairs, pairSlug } from "./comparePairs";
import { certCountryCodes, countrySlug, priceCountry } from "./certCountry";
import { updates } from "../data/updates";
import { songs } from "../data/songs";
import { afrobeatsArtists, pageStamp, chartPageStamp } from "../data/afrobeats";
import { LIVE_BOARDS } from "../data/liveBoards";
import { liveChartsBuiltAt, liveChartsUpdated } from "../data/liveCharts";
import { LISTENERS_READ_ON } from "../data/listeners";
import { REVENUE_STAMP } from "./revenueSource";
import { TOURS_EDITED_ON } from "../data/tours";
import { CERTS_STAMP } from "../data/certifications";
import { CHARTS_STAMP } from "../data/charts";
import { AWARDS_EDITED_ON } from "../data/awards";
import { REJECTED_CLAIMS_EDITED_ON } from "../data/rejectedClaims";
import { CAREER_STREAMS_ANCHOR_READ_ON } from "../data/streamingTotals";
import { SONG_ROLES_READ_ON } from "../data/songRoles";
import { allFirsts } from "../data/firsts";
import { monthlyListenersSeries } from "../data/trends";
import { ANALYSIS_STAMP } from "./analysisStamp";
import { lastUpdated } from "./api";

/*
 * Each route's evidence-backed date: the sitemap's <lastmod> (app/sitemap.ts)
 * and the "Updated {day}" each /records card prints (Job 4, fix 82), so the
 * two can never disagree. Moved here from app/sitemap.ts verbatim on 14 Oct
 * 2026; the sitemap imports lastModFor back. Server-only: it reads the data.
 */

/**
 * lastmod is a claim about a specific URL, and it is only worth making when
 * something can back it. It is derived from the real content log (updates.ts)
 * and from the data each route renders — never from the build time, because a
 * sitemap where every URL reads "modified now" on each deploy trains crawlers
 * to ignore lastmod outright.
 *
 * That was the stated intent from the start, and a site-wide fallback quietly
 * broke it. A route with no evidence of its own reported `newestUpdate` — the
 * newest date ANYWHERE in the feed — so 90 of these 113 URLs advertised the
 * same day, 2026-09-03. /contact, /methodology, /faq and fifteen car pages all
 * claimed to have changed because a Rhythmic Airplay position moved on a page
 * they have nothing to do with. Google's guidance is explicit that it ignores
 * lastmod values it finds unreliable, and it makes that judgement per SITE: a
 * fallback invented for the routes with no evidence was spending the
 * credibility of the ones that had it, including the live boards PR #166 had
 * just gone to the trouble of dating correctly.
 *
 * So there is no fallback. A route reports the newest date among:
 *
 *   1. the updates feed, where an entry names the route or something under it
 *      (an index page did change when one of its children did), and
 *   2. its own content stamp — a date read from the data the page renders and,
 *      where the page publishes one, the same date it declares as
 *      `dateModified`, so the sitemap and the page can never disagree.
 *
 * A route with neither ships no <lastmod> at all. That is valid sitemap XML and
 * it is the honest answer: "we do not know" is a thing a sitemap is allowed to
 * say, and it costs nothing but a recrawl heuristic. Inventing a date costs the
 * whole file's credibility.
 */
/**
 * A day ("2026-09-24") is read as the START of that day; a stamp that already
 * carries a time ("2026-09-24T11:50Z", a live board's builtAt) is read as is.
 * Noon put every entry logged that day in the future until midday: at 05:28
 * UTC on 24 Sep 2026 /live-charts advertised 12:00 that day, and later a board
 * rebuilt at 11:50 still claimed 12:00.
 */
const toDate = (iso: string) => new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso);

/** Newest feed entry naming this route or anything beneath it. */
const feedDate = (path: string | undefined): string | undefined =>
  path === undefined
    ? undefined
    : updates
        .filter((u) => path === "/" || u.href === path || u.href.startsWith(`${path}/`))
        .map((u) => u.date)
        .sort()
        .at(-1);

/** Board artists with a published sweep — the only ones that get pages. */
const sweptArtists = afrobeatsArtists.filter((a) => a.swept);

// A country board changes when any artist certified THERE is re-read — not
// when the roster is, so a sweep of an artist with no Canadian plaque does not
// restamp Canada.
const countryBoardStamps: Record<string, string> = Object.fromEntries(
  certCountryCodes().map((code) => [
    `/compare/in/${countrySlug(code)}`,
    priceCountry(code).lines.map((l) => pageStamp(l.artist)).sort().at(-1)!,
  ]),
);

/**
 * Dates read from the data a route actually renders, for routes the feed
 * cannot describe.
 *
 * THE LIVE BOARDS (PR #166). Nobody logs an updates.ts entry when the hourly
 * sweep moves a position, so their content date lives in the generated data
 * file — which is also the date the page declares as `dateModified` in its
 * Dataset node. Without this, a feed entry that merely LINKS to such a page
 * froze its lastmod at the date of that entry: /live-charts advertised
 * 2026-07-30, the day of the last hand-written entry pointing there, while its
 * own Dataset node said 2026-09-04 and the board underneath had been rebuilt
 * every hour in between. Having been written about made the site's most
 * frequently changed page look staler than never having been written about.
 *
 * THE BOARD ARTIST PAGES. Every figure on /afrobeats/<artist> and its /charts
 * sibling comes from one register sweep, and the artist page PRINTS that
 * sweep's date under "last verified". It is the one date on those pages a
 * reader can check, so it is the one the sitemap reports. It resolves in both
 * directions: where a feed entry about an artist is NEWER than their sweep it
 * still wins, and where an artist has no feed entry at all they stop reporting
 * the newest date anywhere in the log and come down to the sweep their page
 * actually prints — in some cases by more than a fortnight.
 *
 * An earlier draft of this comment named Asake as the artist the sweep raises.
 * That was wrong in both halves: his verifiedOn is 19 Aug, not the 28th, so his
 * 21 Aug feed entry is the NEWER of the two and the feed raises him. Victony is
 * the 28 Aug sweep. Left recorded because the mechanism is easy to state
 * backwards, and a worked example nobody re-derives is how that ships.
 *
 * THE FEED PAGE ITSELF. /updates renders every entry in the log, so the newest
 * entry is literally the newest thing on it.
 *
 * The later of feed and stamp always wins. Since 26 Sep 2026 (PR #340) the
 * feed carries Burna Boy's own stories only, so no feed entry can raise a
 * board artist's route: their stamp is verifiedOn alone, and a plaque added to
 * a board artist has to move verifiedOn with it (tests/afrobeats.test.ts). The
 * removal of those entries is what took /afrobeats/rema back to 23 Sep while
 * its page showed a plaque of the 25th.
 */
/**
 * /records/visualized charts the box-office board, his certifications, his
 * awards, his chart entries, the tour data (the countries he has played), the
 * monthly-listeners series and the live boards' placements. It changed the day
 * the newest of those did (fix 82: "Visualized takes the newest stamp of the
 * datasets it charts"), and both the sitemap and the /records card print it.
 * The live boards' day moves with the hourly sweep, so this does too.
 */
export const VISUALIZED_STAMP = [
  REVENUE_STAMP,
  CERTS_STAMP,
  AWARDS_EDITED_ON,
  CHARTS_STAMP,
  TOURS_EDITED_ON,
  monthlyListenersSeries.at(-1)!.date,
  liveChartsUpdated,
]
  .sort()
  .at(-1)!;

const contentStamp: Record<string, string> = {
  // The minute the board was rebuilt, not its day: the day read as noon ran
  // ahead of the build, and the minute is what the API publishes as builtAt.
  "/live-charts": liveChartsBuiltAt,
  ...Object.fromEntries(LIVE_BOARDS.map((b) => [`/afrobeats/${b.slug}/live`, b.builtAt])),
  ...Object.fromEntries(
    sweptArtists.flatMap((a): [string, string][] => {
      // The later of the sweep the page prints and an edit made without a
      // register read (AFROBEATS_EDITED_ON; sw-5, 3 Oct 2026: CKay's and
      // Olamide's "Trumpet" changed on both lists while their stamps said
      // 18 Sep and 6 Sep) — and, since both pages print chart rows, the last
      // chart sweep (chartPageStamp; 5 Oct 2026: Seyi Vibez's charts page said
      // 6 Sep beside rows re-read on 2 Oct). It is the same date the pages
      // declare as their Dataset's dateModified (D-05, 4 Oct 2026).
      const stamp = chartPageStamp(a);
      return [
        [`/afrobeats/${a.slug}`, stamp],
        [`/afrobeats/${a.slug}/charts`, stamp],
      ];
    }),
  ),
  // The board index prints each artist's plaque and entry totals, Burna Boy's
  // among them, and the hub's off-register count — so it changed the day the
  // newest of those pages or of his plaques did (pageStamp, CERTS_STAMP). It
  // read max(verifiedOn) and said 4 Oct while it printed 5 Oct's "15 of the
  // board's plaques" (review of the 4 Oct debug PR).
  "/afrobeats": [...sweptArtists.map(pageStamp), CERTS_STAMP].sort().at(-1)!,
  // The methodology prints Burna Boy's certification rule and its exceptions,
  // the board's, and the "Dai Dai" rebuttal — every figure derived from those
  // plaques — so its stamp is theirs. The feed alone held it at 14 Sep while
  // the Dai Dai paragraph changed on 4 Oct and its exceptions on 5 Oct.
  // It also prints the rejected-claims lists' own wording, the award-body
  // count, the chart-entry and No. 1 counts, the tour count and the
  // career-streams anchor's read date, so each of those files' stamps counts
  // too. The plaques alone held it at 7 Oct while the "Dai Dai" units row
  // gained its newer circulating figure and the body count went 48 to 49 on
  // 10 Oct 2026 (review of data/leads-1010).
  "/methodology": [
    ...sweptArtists.map(pageStamp),
    CERTS_STAMP,
    REJECTED_CLAIMS_EDITED_ON,
    AWARDS_EDITED_ON,
    CHARTS_STAMP,
    TOURS_EDITED_ON,
    CAREER_STREAMS_ANCHOR_READ_ON,
  ]
    .sort()
    .at(-1)!,
  // The head-to-head index prints every artist's chip, ordered by plaque
  // count, and featured pairs — so it changed the day the newest plaque list
  // did. With no stamp it fell back to the feed (Burna-only by ruling) and
  // said 23 Sep while its chips were re-ordered on 3 Oct (debug pass 5 Oct).
  "/compare": [...sweptArtists.map(pageStamp), CERTS_STAMP].sort().at(-1)!,
  "/updates": [...updates.map((u) => u.date)].sort().at(-1)!,
  // /analysis computes its findings from his plaques and chart entries; its
  // Article declares the same stamp (debug pass 5 Oct 2026, seo-12).
  "/analysis": ANALYSIS_STAMP,
  // /music/listeners prints its read date beside every figure; the 50 cities
  // are re-read by hand and replaced whole, so the read date is the stamp.
  "/music/listeners": LISTENERS_READ_ON,
  // Both box-office pages print the board as last re-read at its bodies; the
  // countries page declares the same day as its Dataset's dateModified (sw-5/C8,
  // 3 Oct 2026: the board said 17 Sep and the countries page said nothing).
  // REVENUE_STAMP is the later of that read and an edit made without one
  // (5 Oct 2026: "Bell Centre", while the routes said 3 Oct).
  "/records/tours/revenue": REVENUE_STAMP,
  "/records/tours/revenue/countries": REVENUE_STAMP,
  // The records hub prints the board too: its top eight nights, the crowd
  // tile naming the row's own publisher, and the board's "as of" — so it is at
  // least the board's stamp. The feed alone held it at 3 Oct while its tile
  // moved to TouringData on 5 Oct (review of the 4 Oct debug PR, D-04).
  "/records": REVENUE_STAMP,
  // The tours page and the map print the tour data (TOURS_EDITED_ON) and the
  // box-office board's nights and grosses (the map's "Biggest reported night"
  // lines, the tours page's source note "as of" the board's read), so each is
  // dated by the later of the two (D-04, 4 Oct 2026: they said 25 Sep and
  // 15 Aug while printing Dublin's 4 Oct night).
  "/records/tours": [TOURS_EDITED_ON, REVENUE_STAMP].sort().at(-1)!,
  "/records/tours/map": [TOURS_EDITED_ON, REVENUE_STAMP].sort().at(-1)!,
  // The certifications page prints "most recently on <CERTS_VERIFIED_ON>" and
  // every plaque counted to that read; its Dataset declares the same day. It
  // said 30 Sep while printing the 250th plaque of 4 Oct (D-04). CERTS_STAMP
  // adds an edit made without a read (its sources line, 5 Oct 2026).
  "/certifications": CERTS_STAMP,
  // /records/charts prints its rows' groups (Singles / Featured) and counts,
  // which moved on 7 Oct 2026 with no chart read (CHARTS_EDITED_ON).
  "/records/charts": CHARTS_STAMP,
  // /records/awards prints every nomination and its source note's "last
  // updated" month, read off AWARDS_EDITED_ON; the feed alone dates a
  // nomination by its announcement (8 Oct), not the day it was added (10 Oct).
  "/records/awards": AWARDS_EDITED_ON,
  // Visualized, the newest of the datasets it charts (VISUALIZED_STAMP). It
  // shipped no <lastmod> until 14 Oct 2026, when its /records card gained a date.
  "/records/visualized": VISUALIZED_STAMP,
  // By the Numbers stamps itself "Updated {lastUpdated}", the newest entry in
  // the feed (its page, STAMP), so the card and the sitemap read that day too.
  // With no stamp here they fell back to the last feed entry naming the route
  // and said 16 Sep while the page said 14 Oct (live debug 15 Oct 2026, REC-13).
  "/records/by-the-numbers": lastUpdated,
  // Every page that prints his role on a song by Rule C is dated by the roles
  // too (SONG_ROLES_READ_ON): each song page's kicker ("Single · 2020 ·
  // Featured") and the Dai Dai hero's ("· Co-lead with Shakira"), both added
  // on 7 Oct 2026 by #441 — which stamped /records/charts for the same move
  // and left these on their feed dates (/music/jerusalema said 17 Sep, debug
  // pass of 7 Oct 2026, DATA-3). The Spanish edition prints roleTagEs.
  // Both Dai Dai editions also print the song's chart rows from charts.ts (the
  // record table's weeks at No. 1 and weeks on chart, the No. 1 and entry
  // counts), so they carry the chart file's stamp as /records/charts does. They
  // said 8 Oct, the feed's date, while the Germany row went to 19 weeks on
  // 10 Oct 2026 (review of data/leads-1010).
  ...Object.fromEntries(songs.map((sg) => [`/music/${sg.slug}`, SONG_ROLES_READ_ON])),
  "/dai-dai": [SONG_ROLES_READ_ON, CHARTS_STAMP].sort().at(-1)!,
  "/dai-dai/es": [SONG_ROLES_READ_ON, CHARTS_STAMP].sort().at(-1)!,
  // /records/firsts prints his certification totals and the year's count
  // (CERTS_STAMP), the "more than 20 songs past 100 million" split by role
  // (SONG_ROLES_READ_ON — rewritten on 7 Oct 2026 by #441 while the route
  // said 24 Sep), and the dated readings its entries carry (asOf).
  "/records/firsts": [CERTS_STAMP, SONG_ROLES_READ_ON, ...allFirsts.flatMap((f) => (f.asOf ? [f.asOf] : []))].sort().at(-1)!,
  // A pair page changes when either side's registers are re-read, or either
  // side's page is edited without a read (pageStamp).
  ...Object.fromEntries(
    allPairs().map(([a, b]) => [`/compare/${pairSlug(a, b)}`, [pageStamp(a), pageStamp(b)].sort().at(-1)!]),
  ),
  ...countryBoardStamps,
  // The index of those boards prints every market's artists, plaques and
  // units, so it changed when the newest of them did. With no stamp it fell
  // back to the feed alone and said 23 Sep while it printed 25 Sep's totals.
  "/compare/in": Object.values(countryBoardStamps).sort().at(-1)!,
};

/**
 * A route whose content is a translation of another. Every FIGURE on
 * /dai-dai/es is imported from the same data the English page reads — that is
 * why the bot-written constants were moved into app/data/daiDai.ts — so the two
 * editions change on exactly the same days and only the words differ. Without
 * this the Spanish edition has no evidence of its own at all, and an indexed
 * page in an hreflang pair would be the one half of the pair with no lastmod.
 */
const TRANSLATION_OF: Record<string, string> = { "/dai-dai/es": "/dai-dai" };

/** The newest date this route has evidence for, or undefined when it has none. */
export function lastModFor(path: string): Date | undefined {
  const p = path || "/";
  const evidence = [feedDate(p), feedDate(TRANSLATION_OF[p]), contentStamp[p]].filter(
    (d): d is string => Boolean(d),
  );
  return evidence.length ? toDate(evidence.sort().at(-1)!) : undefined;
}

/** The same date as a day ("2026-10-10"), for a page that prints it, or
 *  undefined when the route has no evidence (the page then prints no date). */
export function routeDay(path: string): string | undefined {
  return lastModFor(path)?.toISOString().slice(0, 10);
}
