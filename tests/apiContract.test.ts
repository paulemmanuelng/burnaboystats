import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

import { GET as index } from "../app/api/v1/route";
import { GET as stats } from "../app/api/v1/stats/route";
import { GET as charts } from "../app/api/v1/charts/route";
import { GET as certifications } from "../app/api/v1/certifications/route";
import { GET as songsRoute } from "../app/api/v1/songs/route";
import { GET as awards } from "../app/api/v1/awards/route";
import { GET as tours } from "../app/api/v1/tours/route";
import { GET as afrobeats } from "../app/api/v1/afrobeats/route";
import { GET as liveCharts } from "../app/api/v1/live-charts/route";
import { GET as liveChartsArtist } from "../app/api/v1/live-charts/[artist]/route";

import { chartEntryCount, chartCountryCount } from "../app/data/charts";
import { chartedCountryCount } from "../app/lib/analysis";
import { allItems, totalAwards } from "../app/data/certifications";
import { songs } from "../app/data/songs";
import { totalNominations } from "../app/data/awards";
import { tours as tourRuns } from "../app/data/tours";
import { sweptArtists, afrobeatsArtists } from "../app/data/afrobeats";
import { liveCharts as liveSnapshot } from "../app/data/liveCharts";
import { LIVE_BOARDS } from "../app/data/liveBoards";

/**
 * The /api/v1 CONTRACT — what the dataset promises versus what it serves.
 *
 * tests/apiRoutes.test.ts checks that the routes exist and are documented; it
 * matches substrings in source files, so it stayed green through every bug
 * below. These call the handlers and read the JSON, because the only thing a
 * consumer ever sees is the JSON.
 *
 * It is CC BY: anyone may join against it and nobody has a page to sanity-check
 * against, so a field that lies travels further here than anywhere else on the
 * site.
 */

const body = async (res: Response) => (await res.json()) as Record<string, any>;
const artistRes = (artist: string) =>
  liveChartsArtist(new Request("http://x/"), { params: Promise.resolve({ artist }) });

describe("/api/v1/songs — spotifyTrackId is a track ID", () => {
  // It served `s.spotify`, which data/songs.ts stores as the full share URL.
  // GET https://api.spotify.com/v1/tracks/https%3A%2F%2Fopen.spotify.com%2F...
  // is a 400 from Spotify, for every song, and the field name and the docs page
  // both told the consumer to do exactly that.
  const ID = /^[A-Za-z0-9]{22}$/;

  it("serves a bare base62 ID, never a URL", async () => {
    const rows = (await body(songsRoute())).data as any[];
    const withId = rows.filter((r) => r.spotifyTrackId !== null);
    expect(withId.length).toBeGreaterThan(0);
    for (const r of withId) {
      expect(r.spotifyTrackId, `${r.slug} is not an ID`).toMatch(ID);
      expect(r.spotifyTrackId).not.toContain("open.spotify.com");
    }
  });

  it("loses no song to the parse — every stored value resolves", async () => {
    // A regex that silently returned null would read as "no verified ID" and
    // quietly shrink the dataset instead of failing.
    const rows = (await body(songsRoute())).data as any[];
    const stored = songs.filter((s) => s.spotify).map((s) => s.slug).sort();
    const served = rows.filter((r) => r.spotifyTrackId).map((r) => r.slug).sort();
    expect(served).toEqual(stored);
  });

  it("keeps the URL available, and agreeing with the ID", async () => {
    const rows = (await body(songsRoute())).data as any[];
    for (const r of rows) {
      if (r.spotifyTrackId === null) {
        expect(r.spotifyUrl, `${r.slug} has a URL but no ID`).toBeNull();
      } else {
        expect(r.spotifyUrl).toBe(`https://open.spotify.com/track/${r.spotifyTrackId}`);
      }
    }
  });
});

describe("count says what it counts", () => {
  // `count` was documented as a collection count while /charts set it to 278
  // chart entries over 38 releases and /certifications to 234 awards over 85.
  // Either number is defensible; publishing one under a name that implies the
  // other is not.
  const CASES = [
    { name: "charts", get: charts, count: chartEntryCount, countOf: "chart entries",
      collection: (d: any) => d.releases, lengthAt: (d: any) => d.totals.chartedReleases },
    { name: "certifications", get: certifications, count: totalAwards(), countOf: "certifications",
      collection: (d: any) => d.releases, lengthAt: (d: any) => d.totals.certifiedReleases },
    { name: "songs", get: songsRoute, count: songs.length, countOf: "songs",
      collection: (d: any) => d, lengthAt: null },
    { name: "awards", get: awards, count: totalNominations, countOf: "nominations",
      collection: (d: any) => d.nominations, lengthAt: null },
    { name: "tours", get: tours, count: tourRuns.length, countOf: "tours",
      collection: (d: any) => d.tours, lengthAt: null },
  ];

  for (const c of CASES)
    it(`/${c.name} counts ${c.countOf}`, async () => {
      const b = await body(c.get());
      expect(b.count).toBe(c.count);
      expect(b.countOf).toBe(c.countOf);
      // Where count is NOT the array's length, the array's own length has to be
      // published too, or the endpoint has hidden one of the two figures.
      const len = c.collection(b.data).length;
      if (b.count !== len) {
        expect(c.lengthAt, `${c.name}: count ${b.count} ≠ ${len} rows, and the row count is unpublished`).not.toBeNull();
        expect(c.lengthAt!(b.data)).toBe(len);
      }
    });

  it("never publishes a number without a unit", async () => {
    // The pair is enforced in the Envelope type too; this catches the routes
    // that build their body by hand rather than through apiJson.
    const all = [index(), stats(), charts(), certifications(), songsRoute(), awards(),
      tours(), afrobeats(), liveCharts()];
    for (const res of all) {
      const b = await body(res);
      if (b.count === undefined) continue;
      expect(typeof b.count, `${b.endpoint}`).toBe("number");
      expect(typeof b.countOf, `${b.endpoint} counts without saying what`).toBe("string");
      expect((b.countOf as string).length).toBeGreaterThan(0);
    }
  });
});

describe("/api/v1/afrobeats — the subject is a row, not an appendix", () => {
  it("gives the subject every field the board artists carry", async () => {
    // `[subject, ...artists]` is the obvious fold for a comparison dataset. It
    // returned undefined for the subject's territories and threw on
    // `.releases.length` — on the one artist the board exists to compare to.
    const d = (await body(afrobeats())).data;
    const artistKeys = Object.keys(d.artists[0]).sort();
    const subjectKeys = Object.keys(d.subject).sort();
    expect(artistKeys.filter((k) => !subjectKeys.includes(k))).toEqual([]);
  });

  it("calls the subject's 69 territories territories, not countries", async () => {
    const d = (await body(afrobeats())).data;
    expect(d.subject.chartTerritories).toBe(chartCountryCount);
    // 69 includes Billboard's two worldwide charts; 67 is the country figure.
    expect(d.subject.chartTerritories).toBe(chartedCountryCount + 2);
    expect(d.subject.certifiedCountries).not.toBe(d.subject.chartTerritories);
  });

  it("folds the subject's releases back to his own certification total", async () => {
    const d = (await body(afrobeats())).data;
    expect(d.subject.releases.length).toBe(allItems.length);
    const plaques = d.subject.releases.reduce((n: number, r: any) => n + r.certifications.length, 0);
    expect(plaques).toBe(totalAwards());
    // Same vocabulary as the board's own rows, or the two cannot be compared.
    const kinds = new Set(d.artists.flatMap((a: any) => a.releases.map((r: any) => r.kind)));
    for (const r of d.subject.releases) expect(kinds).toContain(r.kind);
  });

  it("publishes only artists whose sweep is done", async () => {
    // An artist still awaiting a register sweep has not been counted by the one
    // rule this endpoint advertises, so publishing them would put an
    // unverified row under a claim of comparability.
    const d = (await body(afrobeats())).data;
    expect(d.artists.map((a: any) => a.slug).sort()).toEqual(sweptArtists.map((a) => a.slug).sort());
    expect(d.artists.length).toBeLessThanOrEqual(afrobeatsArtists.length);
  });
});

describe("the board is the same size wherever the API says it", () => {
  const size = (text: string) => Number(text.match(/(\d+)\s+artists/)![1]);

  it("the index and the endpoint agree on how many artists", async () => {
    // The directory said 15 (the board without its subject) while the endpoint
    // it points at said 16, about the same board.
    const listed = (await body(index())).data.endpoints
      .find((e: any) => e.path.endsWith("/afrobeats")).description;
    const b = await body(afrobeats());
    expect(size(listed)).toBe(sweptArtists.length + 1);
    expect(size(b.description)).toBe(sweptArtists.length + 1);
    expect(b.count).toBe(sweptArtists.length + 1);
  });

  it("the docs page counts the same list", () => {
    const docs = readFileSync("app/api/page.tsx", "utf8");
    expect(docs).toContain("sweptArtists.length + 1");
    // The expression, not the word — the comment beside it names the list it
    // used to count, and a prose mention is not a figure.
    expect(docs, "the docs page counts artists the endpoint may not publish").not.toMatch(
      /afrobeatsArtists\.length/
    );
  });
});

describe("every endpoint states its licence", () => {
  // CC BY's single condition is attribution. The live-charts pair shipped with
  // neither a licence block nor an X-License header — a consumer reading only
  // that JSON was never told there was a condition at all.
  const ENDPOINTS: [string, () => Response | Promise<Response>][] = [
    ["index", index], ["stats", stats], ["charts", charts],
    ["certifications", certifications], ["songs", songsRoute], ["awards", awards],
    ["tours", tours], ["afrobeats", afrobeats], ["live-charts", liveCharts],
    ["live-charts/[artist]", () => artistRes(LIVE_BOARDS[0].slug)],
  ];

  for (const [name, get] of ENDPOINTS)
    it(`${name} carries the licence in the body and the headers`, async () => {
      const res = await get();
      expect(res.headers.get("x-license"), `${name} has no X-License header`).toBe("CC-BY-4.0");
      expect(res.headers.get("access-control-allow-origin")).toBe("*");
      const b = await body(res);
      expect(b.license?.name, `${name} has no licence block`).toBe("CC BY 4.0");
      expect(b.license.url).toBe("https://creativecommons.org/licenses/by/4.0/");
      expect(b.license.attribution).toMatch(/^Data from Burna Boy Stats \(https:\/\//);
      expect(b.source, `${name} does not say where it came from`).toMatch(/^https:\/\//);
      expect(b.methodology).toMatch(/\/methodology$/);
      expect(b.docs).toMatch(/\/api$/);
    });
});

describe("the live-charts snapshots keep their top-level shape", () => {
  // app/lib/useLiveRelease.ts reads `d.releases` straight off the body for the
  // page's own country panels, so provenance had to be added AROUND that, not
  // by wrapping the payload in the apiJson envelope.
  it("serves releases at the top level, not under data", async () => {
    const b = await body(liveCharts());
    expect(Array.isArray(b.releases)).toBe(true);
    expect(b.releases.length).toBe(liveSnapshot.length);
    expect(b.data, "wrapping the snapshot in `data` breaks the live-charts page").toBeUndefined();
    expect(b.updated).toBeTruthy();
  });

  it("does the same for a board artist", async () => {
    const b = await body(await artistRes(LIVE_BOARDS[0].slug));
    expect(b.artist).toBe(LIVE_BOARDS[0].slug);
    expect(Array.isArray(b.releases)).toBe(true);
    expect(b.data).toBeUndefined();
  });

  it("says these are platform charts, not official ones", async () => {
    // The site's hardest rule: platform placements never mix into the official
    // chart record. The endpoint that serves them has to say which it is.
    for (const b of [await body(liveCharts()), await body(await artistRes(LIVE_BOARDS[0].slug))])
      expect(b.description.toUpperCase()).toContain("PLATFORM");
  });

  it("keeps the 404 lean — it replaced a 61KB HTML page", async () => {
    const res = await artistRes("does-not-exist");
    expect(res.status).toBe(404);
    expect(res.headers.get("x-license")).toBe("CC-BY-4.0");
    expect((await res.text()).length).toBeLessThan(2000);
  });
});

describe("the envelope the docs page draws", () => {
  it("has exactly the keys /api documents", async () => {
    // The /api page hand-writes a sample response. Pin the real envelope so a
    // new or renamed key cannot ship without the docs being updated with it.
    const b = await body(charts());
    expect(Object.keys(b)).toEqual([
      "artist", "endpoint", "description", "updated", "count", "countOf",
      "license", "source", "methodology", "docs", "data",
    ]);
    const docs = readFileSync("app/api/page.tsx", "utf8");
    for (const k of ["count", "countOf", "updated", "license", "endpoint"])
      expect(docs, `the sample payload omits ${k}`).toContain(`${k}:`);
  });
});
