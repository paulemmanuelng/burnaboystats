// @vitest-environment node
import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { zpav, parseSearch, bodyFor, API } from "../scripts/cert-watch/adapters/zpav.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { createFixtureHttp } from "../scripts/cert-watch/http.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { FIX, LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/** ZPAV (olis.pl's award API) on real saved responses. */
describe("parse", () => {
  it("reads the positive control: Shakira, Burna Boy | Dai Dai | złote płyty | date_1 2026-08-26", () => {
    const rows = parseSearch(fixture("zpav/zlote-burna.json"), 6);
    expect(rows).toHaveLength(1);
    expect(zpav.control.find(rows[0])).toBe(true);
    expect(rows[0]).toMatchObject({
      credit: "Shakira, Burna Boy",
      title: "Dai Dai",
      formatRaw: "singiel",
      format: "single",
      reading: { tier: "Gold", x: 1 },
      dateRaw: "2026-08-26",
      tierRaw: "złote płyty · date_1: 2026-08-26",
    });
  });

  it("reads a multiple from the FILLED date_N: One Dance is one row, 3× Platinum", () => {
    const rows = parseSearch(fixture("zpav/platynowe-drake.json"), 7);
    const od = rows.filter((r) => r.title === "ONE DANCE");
    expect(od).toHaveLength(1);
    expect(od[0]).toMatchObject({ credit: "DRAKE", reading: { tier: "Platinum", x: 3 }, tierRaw: "platynowe płyty · date_3: 2021-08-11" });
  });

  it("reads every step of a record listed once per step (Rema's Calm Down, date_1 … date_4)", () => {
    const rows = parseSearch(fixture("zpav/platynowe-rema.json"), 7).filter((r) => /calm down/i.test(r.title));
    expect(rows.map((r) => r.reading?.x).sort()).toEqual([1, 2, 3, 4]);
  });

  it("says so when the served subcategory is not the one asked for", () => {
    // LABELLED EDIT of the request, not the response: the Gold response read as if Platinum was asked for.
    expect(() => parseSearch(fixture("zpav/zlote-burna.json"), 7)).toThrow(/served subcategory 6 for 7/);
  });

  it("reads the live capture: the newest 100 of each subcategory, every row parsed", () => {
    for (const [f, sub] of [["zpav/run-2026-09-24/zlote__newest.json.gz", 6], ["zpav/run-2026-09-24/platynowe__newest.json.gz", 7], ["zpav/run-2026-09-24/diamentowe__newest.json.gz", 8]] as const) {
      const rows = parseSearch(fixture(f), sub);
      expect(rows, f).toHaveLength(100);
      expect(rows.filter((r) => !r.reading), f).toEqual([]);
    }
  });
});

describe("the request", () => {
  it("is the page's own XHR: minimal JSON, X-Requested-With and Referer", async () => {
    const calls: { method: string; url: string; headers: Record<string, string>; body: string }[] = [];
    const ctx = {
      deep: false,
      artistNames: ["Burna Boy"],
      request: async (req: { method: string; url: string; headers: Record<string, string>; body: string }) => {
        calls.push(req);
        const sub = JSON.parse(req.body).subcategory_id;
        return { ok: true, status: 200, headers: {}, body: fixture(`zpav/run-2026-09-24/${{ 6: "zlote", 7: "platynowe", 8: "diamentowe" }[sub as 6 | 7 | 8]}__newest.json.gz`) };
      },
    };
    const got = await zpav.read(ctx);
    expect(calls.map((c) => c.body)).toEqual([bodyFor(6), bodyFor(7), bodyFor(8)]);
    expect(calls[0]).toMatchObject({
      method: "POST",
      url: API,
      headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", Referer: "https://www.olis.pl/charts/oficjalna-lista-wyroznien/zlote-plyty" },
    });
    expect(JSON.parse(bodyFor(6))).toEqual({ category_id: 3, subcategory_id: 6, limit: 100 });
    expect(JSON.parse(bodyFor(7, "Burna Boy"))).toEqual({ category_id: 3, subcategory_id: 7, search_in: "contractor", keyword: "Burna Boy", limit: 100 });
    expect(got.rows).toHaveLength(300);
    expect(got.cursor).toEqual({ lastDate: "2026-09-23" });
  });

  it("reads the real Cloudflare 302 (no XHR headers) as a different page, never as no awards", async () => {
    const http = createFixtureHttp({
      root: FIX,
      robotsDir: join(FIX, "robots"),
      routes: [{ method: "POST", match: () => true, file: "challenge/pl-olis-bare.txt", status: 302, headersFile: "headers/PL_olis_bare_site.txt" }],
    });
    const err = await zpav.read({ deep: false, artistNames: [], request: (r: object) => http.request(r) }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(AdapterError);
    expect((err as AdapterError).kind).toBe("mismatch");
    expect((err as Error).message).toMatch(/redirected to http:\/\/google\.com\//);
  });
});

describe("diff", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(zpav, rows, { index, liveArtists: LIVE_ARTISTS, config });

  it("One Dance's date_3 row is Wizkid's (through the Drake lead alias) and in sync with the site's 3× Platinum", () => {
    const od = parseSearch(fixture("zpav/platynowe-drake.json"), 7).filter((r) => r.title === "ONE DANCE");
    const got = run(od);
    expect(got.counts.matched).toBe(1);
    expect(got.candidates).toEqual([]);
    // LABELLED EDIT: the site at PL Platinum ×1 — a row count would say "1×"; the step says 3×.
    const low = frozenIndex((j) => (releaseOf(j, "wizkid", "One Dance").holdings["PL|"] = { tier: "Platinum", x: 1 }));
    expect(run(od, low).candidates[0]).toMatchObject({ kind: "UPGRADE", artist: "wizkid", reading: { tier: "Platinum", x: 3 } });
  });

  it("the site ahead (Calm Down at PL Diamond, the register's platinum steps up to 4×) yields nothing", () => {
    expect(run(parseSearch(fixture("zpav/platynowe-rema.json"), 7)).candidates).toEqual([]);
  });

  it("Dai Dai Gold is in sync with the site", () => {
    expect(run(parseSearch(fixture("zpav/zlote-burna.json"), 6)).candidates).toEqual([]);
  });
});
