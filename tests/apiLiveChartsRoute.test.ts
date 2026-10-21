import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { GET, dynamicParams } from "../app/api/v1/live-charts/[artist]/route";
import { GET as burnaGET } from "../app/api/v1/live-charts/route";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { liveCharts as burnaLive } from "../app/data/liveCharts";
import { withApiCountryCodes } from "../app/lib/liveChartMeta";
// @ts-expect-error — plain .mjs registry shared with the build script
import { stampFirstSeen, FIRST_SEEN_BEFORE_TRACKING } from "../scripts/live-artists.mjs";

// /api/v1 is advertised as an open JSON dataset, so an unknown artist is an
// ordinary question a consumer will ask. It used to be answered with the site's
// HTML 404 page: 61,507 bytes of markup, Content-Type text/html, and — worst of
// all — no Access-Control-Allow-Origin, so a browser client could not parse the
// body OR read the status. The fetch failed on CORS instead of returning 404.
//
// The cause was `dynamicParams = false`, which makes Next answer an
// ungenerated param without ever invoking the handler. No change inside the
// handler could have fixed it, which is why an earlier attempt to return JSON
// here was dead code.

const call = (artist: string) => GET(new Request("http://x/"), { params: Promise.resolve({ artist }) });

describe("GET /api/v1/live-charts/[artist]", () => {
  it("runs the handler for unknown slugs", () => {
    // The single line the whole fix rests on. False means Next short-circuits
    // to the HTML 404 page and everything below becomes unreachable.
    expect(dynamicParams).toBe(true);
  });

  it("answers a known artist with the snapshot", async () => {
    const res = await call(LIVE_BOARDS[0].slug);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(res.headers.get("access-control-allow-origin")).toBe("*");
    const body = await res.json();
    expect(body.artist).toBe(LIVE_BOARDS[0].slug);
    expect(Array.isArray(body.releases)).toBe(true);
  });

  it("answers an unknown artist in JSON, with CORS, not HTML", async () => {
    const res = await call("does-not-exist");
    expect(res.status).toBe(404);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(
      res.headers.get("access-control-allow-origin"),
      "without CORS a browser client cannot even read the 404 it received",
    ).toBe("*");
    const body = await res.json();
    expect(body.error).toBe("not_found");
    expect(body.known).toEqual(LIVE_BOARDS.map((b) => b.slug));
  });

  it("keeps the error small — it replaced a 61KB HTML page", async () => {
    const text = await (await call("does-not-exist")).text();
    expect(text.length).toBeLessThan(2000);
  });

  it("bounds the slug it echoes back", async () => {
    // The slug is arbitrary input and appears twice in the body, so an
    // unbounded echo would let a long path inflate the response.
    const body = await (await call("z".repeat(4000))).json();
    expect(body.artist.length).toBeLessThanOrEqual(65);
    expect((await (await call("z".repeat(4000))).text()).length).toBeLessThan(2000);
  });

  it("caches both answers, so probing cannot become repeated work", async () => {
    for (const slug of [LIVE_BOARDS[0].slug, "does-not-exist"]) {
      const res = await call(slug);
      expect(res.headers.get("cache-control"), `${slug} is uncached`).toMatch(/max-age/);
    }
  });
});

// firstSeen is the builder's bookkeeping for the artwork floor's new-release
// grace (scripts/live-artists.mjs), and it stays out of the open data. Every
// release already on a board when the date began to be recorded is stamped
// FIRST_SEEN_BEFORE_TRACKING ("2026-01-01"), months before the Afrobeats Board
// went live on 20 Aug 2026, and a release that leaves a board and comes back is
// stamped new again. In the API it would read as a real first-charted date
// (review, 18 Oct 2026).
//
// No committed file carries firstSeen yet: the builder writes it from its next
// run. So the rows here are stamped by the builder's own stampFirstSeen, the
// way that first run stamps them: every release the previous file holds gets
// the sentinel, and one release new to the board gets the snapshot date.
describe("firstSeen stays out of the live-charts API", () => {
  type Row = { title: string; kind: string; cover?: string; firstSeen?: string };
  const rows = (): Row[] => [...LIVE_BOARDS.flatMap((b) => b.releases), ...burnaLive];

  beforeAll(() => {
    for (const b of LIVE_BOARDS) stampFirstSeen(b.releases, b.releases.slice(1), b.updated);
    // His board resolves no covers, so the builder never stamps it. The
    // endpoint shares the helper, so it is held to the same answer.
    stampFirstSeen(burnaLive, burnaLive.slice(1), "2026-10-18");
  });
  afterAll(() => {
    for (const r of rows()) delete r.firstSeen;
  });

  it("is on the rows the routes read, so the checks below are not vacuous", () => {
    // Every row carries a date, and the row the stamp treats as new carries
    // the board's own date. Which OTHER dates a board holds is the data's
    // business: once the builder writes firstSeen, a board whose releases all
    // arrived after tracking began holds no sentinel at all. Asking every board
    // for one failed the publish gate on 19-20 Oct 2026, when Tiwa Savage's
    // board was all new releases. His board is never written by the builder,
    // so it always holds the sentinel, and it keeps that check from being
    // vacuous.
    for (const b of LIVE_BOARDS) {
      for (const r of b.releases) expect(r.firstSeen, `${b.slug} → ${r.title}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (b.releases.length) {
        expect(JSON.stringify(b.releases), b.slug).toContain(`"firstSeen":${JSON.stringify(b.updated)}`);
      }
    }
    expect(JSON.stringify(burnaLive)).toContain(`"firstSeen":${JSON.stringify(FIRST_SEEN_BEFORE_TRACKING)}`);
  });

  it("holds for a board whose releases all arrived after tracking began (Tiwa Savage, 19-20 Oct 2026)", () => {
    const tiwa = LIVE_BOARDS.find((b) => b.slug === "tiwa-savage")!;
    const board = tiwa.releases.map((r) => ({ ...r, firstSeen: "2026-10-20" }));
    stampFirstSeen(board, board.slice(1), tiwa.updated);
    const raw = JSON.stringify(board);
    // The rule this replaced asked every board for the sentinel, and this one has none.
    expect(raw).not.toContain(`"firstSeen":${JSON.stringify(FIRST_SEEN_BEFORE_TRACKING)}`);
    for (const r of board) expect(r.firstSeen).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(raw).toContain(`"firstSeen":${JSON.stringify(tiwa.updated)}`);
  });

  it("is not in any board's /api/v1/live-charts/<artist> body", async () => {
    for (const b of LIVE_BOARDS) {
      const text = await (await call(b.slug)).text();
      expect(text, b.slug).not.toContain("firstSeen");
      expect(text, b.slug).not.toContain(FIRST_SEEN_BEFORE_TRACKING);
    }
  });

  it("is not in Burna Boy's /api/v1/live-charts body", async () => {
    const text = await burnaGET().text();
    expect(text).not.toContain("firstSeen");
  });

  it("takes out only firstSeen: every other field on the row is still served", async () => {
    for (const b of LIVE_BOARDS) {
      const body = await (await call(b.slug)).json();
      expect(body.releases.length, b.slug).toBe(b.releases.length);
      b.releases.forEach((r: Row, i: number) => {
        const { firstSeen: _stamp, ...rest } = r;
        const served = body.releases[i];
        expect(Object.keys(served).sort(), `${b.slug} ${r.title}`).toEqual(Object.keys(rest).sort());
        expect(served.cover, `${b.slug} ${r.title}`).toBe(r.cover);
      });
    }
    const [one] = withApiCountryCodes([
      { title: "T", kind: "song", cover: "https://x/c.jpg", firstSeen: "2026-10-18", platforms: [] },
    ]);
    expect(one).toEqual({ title: "T", kind: "song", cover: "https://x/c.jpg", platforms: [] });
  });
});
