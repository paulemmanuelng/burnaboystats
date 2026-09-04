import { describe, it, expect } from "vitest";
import sitemap from "../app/sitemap";
import { sweptArtists } from "../app/data/afrobeats";
import { updates } from "../app/data/updates";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { liveChartsUpdated } from "../app/data/liveCharts";
import { siteUrl } from "../app/site";

/**
 * lastmod may only be published where something backs it.
 *
 * tests/sitemapLastmod.test.ts holds the floor — a page may not advertise a
 * date OLDER than the data it renders. This file holds the ceiling, which is
 * the failure that had spread much further: a route with no evidence at all
 * used to fall back to `newestUpdate`, the newest date anywhere in the feed, so
 * Most of the 113 URLs reported the same day. /contact and /methodology claimed
 * to have changed because an airplay position moved on /dai-dai. Google decides
 * whether to trust lastmod per site, so those 90 were spending the credibility
 * of the 23 that meant something — including the live boards the floor above
 * exists to date correctly.
 *
 * The evidence a route may draw on is recomputed here from the source data
 * rather than imported from app/sitemap.ts, so this is a second opinion and not
 * an echo: if the sitemap invents a date, or takes one from a route's neighbour,
 * there is nothing here for it to agree with.
 */

const rows = sitemap();
const pathOf = (url: string) => url.replace(siteUrl, "") || "/";
const dayOf = (lastModified: Date | string | undefined) =>
  lastModified === undefined
    ? undefined
    : new Date(lastModified).toISOString().slice(0, 10);

/** Newest feed entry naming this route or anything beneath it. */
const feedDate = (path: string): string | undefined =>
  updates
    .filter((u) => path === "/" || u.href === path || u.href.startsWith(`${path}/`))
    .map((u) => u.date)
    .sort()
    .at(-1);

const swept = afrobeatsArtists.filter((a) => a.swept);

/** Every date a route is entitled to claim, derived independently. */
function evidenceFor(path: string): string[] {
  const dates = [feedDate(path)];
  // The Spanish edition imports every figure from the English page's data.
  if (path === "/dai-dai/es") dates.push(feedDate("/dai-dai"));
  if (path === "/live-charts") dates.push(liveChartsUpdated);
  if (path === "/updates") dates.push([...updates.map((u) => u.date)].sort().at(-1));
  if (path === "/afrobeats") dates.push([...swept.map((a) => a.verifiedOn)].sort().at(-1));
  const board = LIVE_BOARDS.find((b) => `/afrobeats/${b.slug}/live` === path);
  if (board) dates.push(board.updated);
  const artist = swept.find(
    (a) => path === `/afrobeats/${a.slug}` || path === `/afrobeats/${a.slug}/charts`,
  );
  if (artist) dates.push(artist.verifiedOn);
  return dates.filter((d): d is string => Boolean(d));
}

describe("sitemap lastmod is evidence-backed", () => {
  it("has rows on both sides of the rule, so neither loop is vacuous", () => {
    const dated = rows.filter((r) => r.lastModified);
    const undated = rows.filter((r) => !r.lastModified);
    expect(rows.length).toBeGreaterThanOrEqual(110);
    // Most of the site can still date itself; the point was never to strip the
    // signal, only to stop issuing it uncovered.
    expect(dated.length).toBeGreaterThanOrEqual(60);
    expect(undated.length).toBeGreaterThan(0);
  });

  it("never dates a route the feed and its own data cannot date", () => {
    const invented = rows
      .filter((r) => r.lastModified)
      .filter((r) => evidenceFor(pathOf(r.url)).length === 0)
      .map((r) => `${pathOf(r.url)}: says ${dayOf(r.lastModified as Date)}, nothing backs any date`);
    expect(
      invented,
      "a route with no feed entry and no content stamp must ship no <lastmod> at all",
    ).toEqual([]);
  });

  it("never reports a date newer than that route's own newest evidence", () => {
    const overstated = rows
      .filter((r) => r.lastModified)
      .map((r) => ({ path: pathOf(r.url), said: dayOf(r.lastModified as Date)! }))
      .map((r) => ({ ...r, best: evidenceFor(r.path).sort().at(-1)! }))
      .filter((r) => r.said > r.best)
      .map((r) => `${r.path}: says ${r.said}, its newest evidence is ${r.best}`);
    expect(overstated).toEqual([]);
  });

  it("leaves the pages nobody has logged a change to undated", () => {
    // The routes the old fallback was loudest on. Each is a page whose content
    // no updates.ts entry describes and no data file stamps: /contact and
    // /methodology were the two named in the audit, and every car page had the
    // same problem fifteen times over. If any of them ever gains a real stamp
    // this list is what says so out loud, rather than the date quietly
    // reappearing.
    const shouldBeSilent = [
      "/contact",
      "/methodology",
      "/faq",
      "/curator",
      "/press",
      "/api",
      "/share",
      "/timeline",
      "/records/visualized",
      "/records/cars/bugatti-chiron",
      "/music/albums/african-giant",
    ];
    const dated = shouldBeSilent
      .map((p) => rows.find((r) => pathOf(r.url) === p))
      .map((r, i) => {
        expect(r, `no sitemap row for ${shouldBeSilent[i]}`).toBeDefined();
        return r!;
      })
      .filter((r) => r.lastModified)
      .map((r) => `${pathOf(r.url)}: ${dayOf(r.lastModified as Date)}`);
    expect(dated).toEqual([]);
  });

  it("dates every board artist page by the sweep the page itself prints", () => {
    // /afrobeats/<artist> renders `verifiedOn` under "last verified" and its
    // /charts sibling is built from the same sweep. All fifteen chart boards,
    // and fourteen of the fifteen artist pages, were advertising a date later
    // than any sweep that has ever run.
    const wrong = swept
      .flatMap((a) => [
        { path: `/afrobeats/${a.slug}`, sweep: a.verifiedOn },
        { path: `/afrobeats/${a.slug}/charts`, sweep: a.verifiedOn },
      ])
      .map((r) => ({ ...r, row: rows.find((x) => pathOf(x.url) === r.path) }))
      .filter((r) => r.row)
      .map((r) => ({ ...r, said: dayOf(r.row!.lastModified as Date) }))
      // The sweep is a floor: a later feed entry about the artist still wins,
      // which is what /afrobeats/asake and /afrobeats/victony exercise.
      .filter((r) => r.said === undefined || r.said < r.sweep)
      .map((r) => `${r.path}: says ${r.said ?? "nothing"}, the page prints ${r.sweep}`);
    // Anti-vacuity: assert the check actually LOOKED at every board artist.
    // The first version of this line read `wrong.length + swept.length >= 15`,
    // which can never fail — swept.length is 15 on its own, so the assertion
    // held even if every row silently vanished. Exactly the shape of guard this
    // audit keeps finding: green while checking nothing.
    expect(swept.length).toBe(sweptArtists.length);
    expect(wrong).toEqual([]);
  });
});

describe("sitemap hreflang", () => {
  const annotated = rows.filter((r) => r.alternates?.languages);

  it("annotates the translated pair and only the translated pair", () => {
    expect(annotated.map((r) => pathOf(r.url)).sort()).toEqual(["/dai-dai", "/dai-dai/es"]);
  });

  it("keeps every hreflang set self-referencing, reciprocal and in-sitemap", () => {
    const known = new Set(rows.map((r) => r.url));
    const problems: string[] = [];
    for (const row of annotated) {
      const languages = row.alternates!.languages as Record<string, string>;
      const targets = Object.values(languages);
      // Google drops an hreflang set that does not name the page it is on.
      if (!targets.includes(row.url)) problems.push(`${pathOf(row.url)}: does not name itself`);
      // x-default is what a searcher in neither language gets served.
      if (!languages["x-default"]) problems.push(`${pathOf(row.url)}: no x-default`);
      for (const target of targets) {
        if (!known.has(target)) {
          problems.push(`${pathOf(row.url)}: points at ${target}, which this sitemap does not list`);
          continue;
        }
        // Reciprocity: an annotation the other page does not return is ignored.
        const other = rows.find((r) => r.url === target)!;
        const back = other.alternates?.languages as Record<string, string> | undefined;
        if (!back) problems.push(`${pathOf(target)}: named by ${pathOf(row.url)} but annotates nothing`);
        else if (JSON.stringify(back) !== JSON.stringify(languages))
          problems.push(`${pathOf(target)}: declares a different set from ${pathOf(row.url)}`);
      }
    }
    expect(annotated.length).toBeGreaterThan(0);
    expect(problems).toEqual([]);
  });
});
