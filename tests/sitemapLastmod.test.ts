import { describe, it, expect } from "vitest";
import sitemap from "../app/sitemap";
import { updates } from "../app/data/updates";
import { liveChartsUpdated } from "../app/data/liveCharts";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { siteUrl } from "../app/site";

/**
 * `lastmod` is the one signal a crawler uses to decide what to re-fetch, and
 * this sitemap derives it from the updates feed — a hand-written log of facts
 * about Burna Boy, which nobody adds to when the hourly live-charts sweep moves
 * a position.
 *
 * That produced an inversion. A route with NO feed entry falls back to the
 * site's newest date, so the live boards read as fresh by accident. But
 * /live-charts HAS feed entries, three of them, the newest dated 2026-07-30 —
 * so the derivation pinned the site's most frequently changed page to the day
 * of the last hand-written entry that happened to link there, and advertised it
 * as five weeks old while its own Dataset node said today and the board under
 * it had been rebuilt every hour in between. Having been written about made the
 * page look staler than never having been written about.
 *
 * The rule these pin: a page may not advertise a date older than the data it
 * renders. The stamp compared against is the same one the page publishes as
 * `dateModified`, so the sitemap and the page can never disagree.
 */

const rows = sitemap();
const dayOf = (url: string) => {
  const row = rows.find((r) => r.url === url);
  if (!row) throw new Error(`no sitemap entry for ${url}`);
  return (row.lastModified as Date).toISOString().slice(0, 10);
};

/** Every route whose content is written by the live-charts pipeline, and the
 *  stamp that pipeline wrote. Built from the same registry the routes are. */
const pipelineRoutes: { path: string; stamp: string }[] = [
  { path: "/live-charts", stamp: liveChartsUpdated },
  ...LIVE_BOARDS.map((b) => ({ path: `/afrobeats/${b.slug}/live`, stamp: b.updated })),
];

describe("sitemap lastmod", () => {
  it("covers every live route, so the loop below is not empty", () => {
    expect(pipelineRoutes.length).toBe(LIVE_BOARDS.length + 1);
    expect(pipelineRoutes.length).toBeGreaterThanOrEqual(16);
  });

  it("never advertises a live page as older than the data it renders", () => {
    const stale = pipelineRoutes
      .map((r) => ({ ...r, lastmod: dayOf(`${siteUrl}${r.path}`) }))
      .filter((r) => r.lastmod < r.stamp)
      .map((r) => `${r.path}: sitemap says ${r.lastmod}, the page's own data says ${r.stamp}`);
    expect(
      stale,
      "the updates feed does not log the hourly sweep, so these routes have to report their own data file's stamp"
    ).toEqual([]);
  });

  it("still lets a newer feed entry win over the pipeline stamp", () => {
    // The pipeline stamp is a floor, not an override: if somebody logs a real
    // chart fact against /live-charts tomorrow, that date is the later one and
    // it is the one that should ship. Asserted as a relationship so it holds
    // whichever source happens to be ahead on the day this runs.
    const feed = updates
      .filter((u) => u.href === "/live-charts")
      .map((u) => u.date)
      .sort()
      .at(-1);
    const expected = [liveChartsUpdated, feed].filter(Boolean).sort().at(-1);
    expect(dayOf(`${siteUrl}/live-charts`)).toBe(expected);
  });

  it("does not backdate the rest of the sitemap to do it", () => {
    // The fix adds a floor to sixteen routes. Every other route's date still
    // comes from the feed, and none of them may be later than the newest fact
    // logged — a sitemap that reports tomorrow is the failure mode this file's
    // own header comment exists to prevent.
    const newestFact = [...updates.map((u) => u.date)].sort().at(-1)!;
    const pipeline = new Set(pipelineRoutes.map((r) => `${siteUrl}${r.path}`));
    const ahead = rows
      .filter((r) => !pipeline.has(r.url))
      // A row may now carry no lastmod at all: the site-wide fallback is gone,
      // so a route with no evidence says nothing rather than borrowing the
      // newest date in the feed. Nothing is never "ahead" of anything, and
      // tests/sitemapEvidence.test.ts is what holds the omissions themselves.
      .filter((r) => r.lastModified)
      .filter((r) => (r.lastModified as Date).toISOString().slice(0, 10) > newestFact)
      .map((r) => r.url);
    expect(ahead).toEqual([]);
  });
});
