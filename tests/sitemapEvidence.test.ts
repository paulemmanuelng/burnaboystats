import { describe, it, expect } from "vitest";
import sitemap from "../app/sitemap";
import { sweptArtists } from "../app/data/afrobeats";
import { updates } from "../app/data/updates";
import { AFROBEATS_EDITED_ON, AFROBEATS_LAST_CHART_SWEEP, afrobeatsArtists } from "../app/data/afrobeats";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { liveChartsUpdated } from "../app/data/liveCharts";
import { LISTENERS_READ_ON } from "../app/data/listeners";
import { REVENUE_EDITED_ON, REVENUE_READ_ON } from "../app/lib/revenueSource";
import { TOURS_EDITED_ON } from "../app/data/tours";
import { CERTS_EDITED_ON, CERTS_VERIFIED_ON } from "../app/data/certifications";
import { BURNA_LAST_CHART_SWEEP, CHARTS_EDITED_ON } from "../app/data/charts";
import { SONG_ROLES_READ_ON } from "../app/data/songRoles";
import { AWARDS_EDITED_ON } from "../app/data/awards";
import { REJECTED_CLAIMS_EDITED_ON } from "../app/data/rejectedClaims";
import { CAREER_STREAMS_ANCHOR_READ_ON } from "../app/data/streamingTotals";
import { songs } from "../app/data/songs";
import { allFirsts } from "../app/data/firsts";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { certCountryCodes, countrySlug } from "../app/lib/certCountry";
import { comparableArtists } from "../app/lib/certUnits";
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

/** An artist's sweep, or a later edit made without a register read (a
 *  title, credit or sleeve corrected) — AFROBEATS_EDITED_ON, read here
 *  directly rather than through the pageStamp helper the sitemap calls. */
const artistEvidence = (a: { slug: string; verifiedOn: string }): string =>
  [a.verifiedOn, AFROBEATS_EDITED_ON[a.slug] ?? ""].sort().at(-1)!;

/** Newest sweep (or edit) among the artists holding a plaque in this country. */
const countryEvidence = (code: string): string | undefined =>
  comparableArtists
    .filter((a) => a.releases.some((r) => r.certs.some((x) => x.c === code)))
    .map(artistEvidence)
    .sort()
    .at(-1);

/** Every date a route is entitled to claim, derived independently. */
function evidenceFor(path: string): string[] {
  const dates = [feedDate(path)];
  // The Spanish edition imports every figure from the English page's data.
  if (path === "/dai-dai/es") dates.push(feedDate("/dai-dai"));
  if (path === "/live-charts") dates.push(liveChartsUpdated);
  if (path === "/music/listeners") dates.push(LISTENERS_READ_ON);
  // Both box-office pages print the board "as of" its last read at the
  // bodies; the countries page declares that day as its dateModified.
  if (path === "/records/tours/revenue" || path === "/records/tours/revenue/countries") dates.push(REVENUE_READ_ON);
  // An edit to the board's rows made without a re-read ("Bell Centre", 5 Oct
  // 2026) is a dated change to every route that prints them.
  if (["/records/tours/revenue", "/records/tours/revenue/countries", "/records/tours", "/records/tours/map", "/records"].includes(path))
    dates.push(REVENUE_EDITED_ON);
  // The records hub prints the board's top nights and its "as of".
  if (path === "/records") dates.push(REVENUE_READ_ON);
  const pair = allPairs().find(([a, b]) => `/compare/${pairSlug(a, b)}` === path);
  if (pair) dates.push([artistEvidence(pair[0]), artistEvidence(pair[1])].sort().at(-1)!);
  // The tours page and the map print the tour data and the box-office board's
  // nights; /certifications prints the registers' read date (D-04, 4 Oct 2026).
  if (path === "/records/tours" || path === "/records/tours/map") dates.push(TOURS_EDITED_ON, REVENUE_READ_ON);
  if (path === "/certifications") dates.push(CERTS_VERIFIED_ON, CERTS_EDITED_ON);
  // /records/charts prints its rows' groups and counts, refiled without a chart
  // read on 7 Oct 2026 (Rule C), and its chart read "as of".
  if (path === "/records/charts") dates.push(BURNA_LAST_CHART_SWEEP, CHARTS_EDITED_ON);
  // Both Dai Dai editions print the song's chart rows (weeks at No. 1, weeks on
  // chart; the Germany row moved on 10 Oct 2026 with a chart read).
  if (path === "/dai-dai" || path === "/dai-dai/es") dates.push(BURNA_LAST_CHART_SWEEP, CHARTS_EDITED_ON);
  // /records/awards prints every nomination and its "last updated" month.
  if (path === "/records/awards") dates.push(AWARDS_EDITED_ON);
  // His role on the song by Rule C, printed in every song page's kicker and the
  // Dai Dai hero's, both editions (#441, 7 Oct 2026).
  if (songs.some((sg) => path === `/music/${sg.slug}`) || path === "/dai-dai" || path === "/dai-dai/es")
    dates.push(SONG_ROLES_READ_ON);
  // /records/firsts prints his plaque totals and the year's certifications,
  // the role split of his songs past 100 million, and its entries' readings.
  if (path === "/records/firsts")
    dates.push(CERTS_VERIFIED_ON, CERTS_EDITED_ON, SONG_ROLES_READ_ON, ...allFirsts.flatMap((f) => (f.asOf ? [f.asOf] : [])));
  // The board index and the methodology print Burna Boy's plaques (the board
  // row, the off-register count, the rule's exceptions, the Dai Dai rebuttal)
  // and every swept artist's.
  if (path === "/afrobeats" || path === "/methodology")
    dates.push(CERTS_VERIFIED_ON, CERTS_EDITED_ON, ...swept.map(artistEvidence));
  // The methodology also prints the rejected-claims lists, the award-body
  // count, the chart counts, the tour count and the streams anchor's read date.
  if (path === "/methodology")
    dates.push(
      REJECTED_CLAIMS_EDITED_ON,
      AWARDS_EDITED_ON,
      BURNA_LAST_CHART_SWEEP,
      CHARTS_EDITED_ON,
      TOURS_EDITED_ON,
      CAREER_STREAMS_ANCHOR_READ_ON,
    );
  // The head-to-head index prints every artist's chip, ordered by plaque
  // count — Burna Boy's among them (debug pass 5 Oct 2026, compareA-10).
  if (path === "/compare") dates.push(CERTS_VERIFIED_ON, CERTS_EDITED_ON, ...swept.map(artistEvidence));
  // /analysis computes its findings from his plaques (seo-12, 5 Oct 2026).
  if (path === "/analysis") dates.push(CERTS_VERIFIED_ON, CERTS_EDITED_ON);
  // A country board is dated by the artists certified THERE — derived from the
  // plaques themselves here, not from the board builder the sitemap calls.
  const code = certCountryCodes().find((c) => `/compare/in/${countrySlug(c)}` === path);
  if (code) dates.push(countryEvidence(code));
  // The index of the country boards prints every one of them.
  if (path === "/compare/in") dates.push(...certCountryCodes().map(countryEvidence));
  if (path === "/updates") dates.push([...updates.map((u) => u.date)].sort().at(-1));
  if (path === "/afrobeats") dates.push([...swept.map((a) => a.verifiedOn)].sort().at(-1));
  const board = LIVE_BOARDS.find((b) => `/afrobeats/${b.slug}/live` === path);
  if (board) dates.push(board.updated);
  const artist = swept.find(
    (a) => path === `/afrobeats/${a.slug}` || path === `/afrobeats/${a.slug}/charts`,
  );
  if (artist) dates.push(artist.verifiedOn);
  // An edit made without a register read (a credit or sleeve corrected).
  if (artist && AFROBEATS_EDITED_ON[artist.slug]) dates.push(AFROBEATS_EDITED_ON[artist.slug]);
  // Both pages print chart rows, re-read in the board's last chart sweep
  // ("Last re-read in the board's chart sweep of 2 October 2026").
  if (artist) dates.push(AFROBEATS_LAST_CHART_SWEEP);
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
    // /methodology left this list on 14 Sep 2026: its disputed-counts list
    // gained two entries (the African Giant superlative, the "Dai Dai" 6.05M
    // units) and the feed logs the change against the page, which is exactly
    // the evidence a lastmod is meant to rest on.
    const shouldBeSilent = [
      "/contact",
      "/faq",
      "/curator",
      "/press",
      "/api",
      "/share",
      // NOT /timeline since 17 Sep 2026: the feed logs the World Cup halftime
      // correction against it, which is exactly the evidence a lastmod rests on.
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

describe("/compare/in is dated by the boards it indexes", () => {
  // Live, 26 Sep 2026: /compare/in had no stamp of its own, so it took the feed's
  // 23 Sep while printing "27 countries, 1,318 plaques" — totals that moved on
  // the 25th, when /compare/in/united-kingdom and /canada were already dated 25 Sep.
  const said = (p: string) => dayOf(rows.find((r) => pathOf(r.url) === p)?.lastModified as Date | undefined);
  const newestBoard = () =>
    certCountryCodes()
      .map((c) => said(`/compare/in/${countrySlug(c)}`))
      .filter((d): d is string => Boolean(d))
      .sort()
      .at(-1)!;
  const behind = (index: string | undefined, board: string) => index === undefined || index < board;

  it("is never older than its newest country board", () => {
    expect(certCountryCodes().length).toBeGreaterThan(20);
    expect(behind(said("/compare/in"), newestBoard()), `/compare/in says ${said("/compare/in")}`).toBe(false);
  });

  it("negative control: the lastmod that shipped", () => {
    // The live sitemap's <lastmod> for /compare/in on 26 Sep 2026.
    expect(behind("2026-09-23", newestBoard())).toBe(true);
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
