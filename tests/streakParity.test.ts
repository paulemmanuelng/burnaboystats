import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { updates } from "../app/data/updates";
import { daiDaiYouTubeDaysAtNo1 } from "../app/data/daiDai";

// Platform streaks — Spotify's daily and weekly charts, Apple Music, iTunes,
// Mediatraffic, YouTube — are the one class of figure on /dai-dai with nowhere
// to live but prose. They are not official national charts, so they get no
// ChartEntry and none of the protection that gave the Billboard week counts;
// and the stats bot does not fetch them, so watched-metrics.json never sees
// them either. They are hand-maintained, they move most days, and nothing
// checked them.
//
// On 21 Aug 2026 two were wrong on the live site: the Spotify Global Weekly
// card read "4 weeks" during the 5th, and the YouTube most-viewed run read
// "33 days" during the 48th. In BOTH cases updates.ts already carried the
// correct figure — the feed was right and the card had simply been left
// behind. That is the failure this file exists to catch, and it is catchable
// precisely because the site already publishes the true number somewhere.
//
// The rule is a FLOOR, not equality: a card may legitimately run ahead of the
// feed, because Paul updates from live tracking and does not write an entry for
// every tick. It may never run behind, because that means the site is
// contradicting its own published log.
//
// Only the English page is checked. daiDaiParity.test.ts already holds the
// Spanish edition to the same figures, so a drift there fails over there.

const A = "[’']"; // the source uses curly apostrophes; accept either
const ORD = "(\\d+)(?:st|nd|rd|th)";

/** Does an entry state a day/week count at all? Used to spot phrasing drift. */
const HAS_COUNT = /\d+(?:st|nd|rd|th)?\s+(?:straight\s+|consecutive\s+)?(?:day|week)/;

interface Streak {
  id: string;
  /** Pulls the figure off its card in app/dai-dai/page.tsx. */
  page: string;
  /** For a card whose figure is DERIVED rather than typed, the value itself.
   *  The YouTube run moved into app/data/daiDai.ts after "48 days" sat on both
   *  editions for a month while this file stayed green — it holds the card and
   *  the feed to each other, and two copies of a wrong number agree perfectly.
   *  `page` still has to match, so the card cannot quietly lose its figure; it
   *  just no longer supplies the number. */
  derived?: number;
  /** Precise readings of the same figure in updates.ts prose. Group 1 is the
   *  number — NEVER rely on "first digits in the match": "at No. 1 for 57 days"
   *  would yield the 1. That mistake made this check silently compare the wrong
   *  number while reporting green. */
  feed: string[];
  /** Loose topic match. An entry matching this AND stating a count, but newer
   *  than anything `feed` matched, means the prose has taken a shape these
   *  patterns do not read — coverage lost silently. That is a failure. */
  topic: string;
}

const STREAKS: Streak[] = [
  {
    id: "Spotify Global Daily — days at No. 1",
    page: `v: "(\\d+) days", l: ["\`]in total at No\\. 1 on Spotify${A}s Global Daily`,
    feed: [
      `${ORD} day as the most-streamed song on Earth`,
      `${ORD} day atop Spotify${A}s Global Daily`,
      `for a ${ORD} day in total`,
      `${ORD} day on top:`,
      `(\\d+) of them at No\\. 1`,
    ],
    topic: `Global Daily Top Songs`,
  },
  {
    id: "Spotify Global Weekly — weeks at No. 1",
    page: `v: "(\\d+) weeks", l: "at No\\. 1 on Spotify${A}s Global Weekly`,
    feed: [`${ORD} week atop the weekly list`, `${ORD} on Spotify${A}s Global Weekly Top Songs`],
    topic: `Global Weekly|weekly list|Weekly Top Songs Global`,
  },
  {
    id: "Apple Music Europe — days at No. 1",
    page: `v: "(\\d+) days", l: "at No\\. 1 on Apple Music${A}s European songs`,
    feed: [`${ORD} day atop Apple Music${A}s European`, `at No\\. 1 for (\\d+) days`],
    topic: `Apple Music${A}s European`,
  },
  {
    id: "iTunes worldwide — days at No. 1",
    page: `v: "(\\d+) days", l: "at No\\. 1 on the worldwide iTunes songs`,
    feed: [`${ORD} on the worldwide iTunes`, `${ORD} day at No\\. 1 on worldwide iTunes`],
    topic: `worldwide iTunes`,
  },
  {
    id: "United World Chart — weeks at No. 1",
    page: `v: "(\\d+) weeks", l: "at No\\. 1 on Mediatraffic${A}s United World`,
    feed: [
      `${ORD} atop Mediatraffic`,
      // "a 10th WEEK atop Mediatraffic's..." — the natural way to write it,
      // and the pattern set is meant to grow with the prose rather than the
      // prose being bent to fit it.
      `${ORD} week atop Mediatraffic`,
      `${ORD} straight week as the world${A}s biggest song`,
    ],
    topic: `United World Chart`,
  },
  {
    id: "Spotify Global Music Video — days at No. 1",
    page: `v: "(\\d+) days", l: "at No\\. 1 on Spotify${A}s Global Music Video`,
    feed: [
      `${ORD} day at No\\. 1 on Spotify${A}s Global Music Video`,
      `${ORD} day at the top of Spotify${A}s Global Music Video`,
    ],
    topic: `Global Music Video`,
  },
  {
    id: "YouTube most-viewed — days at No. 1",
    page: `v: \`\\$\\{daiDaiYouTubeDaysAtNo1\\} days\`, l: "as the most-viewed music video on YouTube`,
    derived: daiDaiYouTubeDaysAtNo1,
    feed: [
      `${ORD} day as YouTube${A}s most-viewed`,
      `${ORD} day as the world${A}s most-viewed`,
      // "an 80th STRAIGHT day as the world's most-viewed" — a run reads better
      // with the word in, and the pattern set is meant to grow with the prose
      // rather than the prose being bent to fit it.
      `${ORD} straight day as (?:YouTube${A}s|the world${A}s) most-viewed`,
      `(\\d+) straight days as the most-viewed`,
    ],
    topic: `most-viewed`,
  },
];

const SRC = readFileSync(join(process.cwd(), "app", "dai-dai", "page.tsx"), "utf8");

const onPage = (s: Streak) => SRC.match(new RegExp(s.page));

const inFeed = (s: Streak) => {
  const hits: { n: number; date: string }[] = [];
  for (const pattern of s.feed) {
    for (const u of updates) {
      for (const m of u.text.matchAll(new RegExp(pattern, "g"))) hits.push({ n: Number(m[1]), date: u.date });
    }
  }
  return hits;
};

describe("platform streaks on /dai-dai never fall behind the updates feed", () => {
  it.each(STREAKS.map((s) => [s.id, s] as const))("%s", (_id, s) => {
    const card = onPage(s);
    expect(card, `no card on /dai-dai matches this streak — was it renamed or removed?`).not.toBeNull();

    const hits = inFeed(s);
    expect(
      hits.length,
      `no updates.ts entry matches any pattern for this streak, so nothing is being checked. Add the new phrasing to STREAKS[].feed.`,
    ).toBeGreaterThan(0);

    const newestMatched = hits.map((h) => h.date).sort().pop()!;
    const relevant = updates.filter((u) => new RegExp(s.topic).test(u.text) && HAS_COUNT.test(u.text));
    const missed = relevant.filter((u) => u.date > newestMatched);
    expect(
      missed.map((u) => `${u.date}: ${u.text.slice(0, 120)}…`),
      `updates.ts states this streak in wording these patterns cannot read, so the newest figure is going unchecked. Add the phrasing to STREAKS[].feed.`,
    ).toEqual([]);

    const best = hits.reduce((a, b) => (b.n > a.n ? b : a));
    const shown = s.derived ?? Number(card![1]);
    expect(
      shown,
      `the card says ${s.derived ?? card![1]} but updates.ts already published ${best.n} on ${best.date}. The page is contradicting the site's own log — running ahead of the feed is fine, behind it is not.`,
    ).toBeGreaterThanOrEqual(best.n);
  });
});
