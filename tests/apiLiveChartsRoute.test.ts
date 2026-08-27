import { describe, it, expect } from "vitest";
import { GET, dynamicParams } from "../app/api/v1/live-charts/[artist]/route";
import { LIVE_BOARDS } from "../app/data/liveBoards";

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
