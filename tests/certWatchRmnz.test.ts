// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { verdict } from "../scripts/cert-watch/health.mjs";
import { rmnz, parseLevel, ajaxUrl, sspUrl, parseSsp, TABLES } from "../scripts/cert-watch/adapters/rmnz.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * RMNZ via RadioScope's TablePress tables, on REAL saved responses from the
 * live dry run of 24 Sep 2026: the singles and albums pages (each carrying
 * its per-load SSP URL and token) and the SSP answers.
 */
const R = "rmnz/run-2026-09-24/";
const singlesPage = fixture(`${R}singles-page.html.gz`);
const albumsPage = fixture(`${R}albums-page.html.gz`);
const s500 = fixture(`${R}ssp-2052-newest500.json.gz`);
const a500 = fixture(`${R}ssp-2051-newest500.json.gz`);
const rain = fixture(`${R}ssp-2052-search-raindance.json.gz`);

describe("parse", () => {
  it("takes the SSP URL and token from each page's own DT_TP block, on the page's host", () => {
    const s = ajaxUrl(singlesPage, "2052")!;
    const a = ajaxUrl(albumsPage, "2051")!;
    expect(s).toMatch(/^https:\/\/www\.radioscope\.co\.nz\/wp-json\/tablepress\/v1\/ssp\/2052\?r=/);
    expect(a).toMatch(/^https:\/\/www\.radioscope\.co\.nz\/wp-json\/tablepress\/v1\/ssp\/2051\?r=/);
    expect(ajaxUrl(singlesPage, "2051")).toBeNull();
  });

  it("builds the SSP query with URLSearchParams (brackets encoded), ordered by date certified", () => {
    const u = new URL(sspUrl("https://www.radioscope.co.nz/wp-json/tablepress/v1/ssp/2052?r=T&n=N", { length: 100 }));
    expect(u.searchParams.get("r")).toBe("T");
    expect(u.searchParams.get("order[0][column]")).toBe("4");
    expect(u.searchParams.get("order[0][dir]")).toBe("desc");
    expect(u.searchParams.get("length")).toBe("100");
    expect(u.search).toContain("order%5B0%5D%5Bcolumn%5D=4");
  });

  it("reads the newest 500 singles verbatim, every level parsed; recordsTotal is the floor", () => {
    const got = parseSsp(s500, { format: "single", table: "2052" });
    expect(got.total).toBe(24435);
    expect(got.rows).toHaveLength(500);
    expect(got.rows.filter((r) => !r.reading)).toEqual([]);
    expect(got.rows[0]).toMatchObject({ credit: "Toto", title: "Africa", tierRaw: "Plat x11", reading: { tier: "Platinum", x: 11 }, dateRaw: "2026-09-17" });
    expect(parseSsp(a500, { format: "album", table: "2051" }).total).toBe(4066);
  });

  it("the Raindance search: three cumulative rows, the control among them", () => {
    const got = parseSsp(rain, { format: "single", table: "2052" });
    const r = got.rows.filter((x) => x.title === "Raindance");
    expect(r.map((x) => `${x.credit} | ${x.tierRaw} | ${x.dateRaw}`)).toEqual([
      "Dave feat. Tems | Plat x2 | 2026-08-27",
      "Dave feat. Tems | Plat x1 | 2026-03-19",
      "Dave feat. Tems | Gold | 2026-02-05",
    ]);
    expect(got.rows.filter(rmnz.control.find)).toHaveLength(1);
  });

  it("reads the level forms the register prints", () => {
    expect(parseLevel("Gold")).toEqual({ tier: "Gold", x: 1 });
    expect(parseLevel("Gold ")).toEqual({ tier: "Gold", x: 1 });
    expect(parseLevel("Plat x2")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseLevel("Plat x 2")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseLevel("Plat")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseLevel("plat x1")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseLevel("Diamond")).toBeNull();
  });

  it("an SSP answer that is not the table's JSON is a changed format", () => {
    expect(() => parseSsp(singlesPage, { format: "single", table: "2052" })).toThrow(AdapterError);
  });
});

describe("read", () => {
  const serve = () => {
    const calls: { url: string; headers?: Record<string, string>; repeat?: number }[] = [];
    const request = async (req: { url: string; headers?: Record<string, string>; repeat?: number }) => {
      calls.push(req);
      const u = req.url;
      const body = u === TABLES[0].page ? singlesPage : u === TABLES[1].page ? albumsPage : u.includes("/ssp/2051") ? a500 : u.includes("search%5Bvalue%5D=Raindance") ? rain : s500;
      return { ok: true, status: 200, headers: {}, body, url: u };
    };
    return { calls, request };
  };

  it("reads each table as a pair — a fresh page load for its token, then the SSP call with the page's XHR headers", async () => {
    const s = serve();
    const got = await rmnz.read({ deep: true, request: s.request });
    const kinds = s.calls.map((c) => (c.url.includes("/ssp/") ? `ssp ${new URL(c.url).searchParams.get("length")}${new URL(c.url).searchParams.get("search[value]") ? " search" : ""}` : `page${c.repeat ? ` (re-read ${c.repeat})` : ""}`));
    expect(kinds).toEqual(["page", "ssp 500", "page (re-read 1)", "ssp 500", "page (re-read 2)", "ssp 100 search"]);
    const ssp = s.calls.find((c) => c.url.includes("/ssp/"))!;
    expect(ssp.headers).toEqual({ Accept: "application/json", "X-Requested-With": "XMLHttpRequest", Referer: TABLES[0].page });
    // No cookie is sent or needed: the token in the URL is enough (24 Sep 2026).
    expect(Object.keys(ssp.headers!).some((h) => /cookie/i.test(h))).toBe(false);
    expect(got).toMatchObject({ total: 24435 + 4066, newestDate: "2026-09-17" });
  });

  it("a WAF block or a decoy is a challenge, and the adapter stops", async () => {
    const e = await rmnz.read({ deep: false, request: async () => ({ ok: true, status: 200, headers: {}, body: fixture("decoy/za-risa-browser.html"), url: "x" }) }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("challenge");
  });
});

describe("diff", () => {
  const rows = [...parseSsp(s500, { format: "single", table: "2052" }).rows, ...parseSsp(rain, { format: "single", table: "2052" }).rows];
  const run = (r: unknown[], index = frozenIndex()) => evaluateRows(rmnz, r, { index, liveArtists: LIVE_ARTISTS, config });

  it("the cumulative Raindance rows fold to Plat x2 — in sync with the site", () => {
    const got = run(rows);
    expect(got.candidates.filter((c) => c.release === "Raindance")).toEqual([]);
  });

  it("…and an UPGRADE to Platinum ×2 against the site at Platinum ×1, with every step kept", () => {
    // LABELLED EDIT: the site at NZ Platinum ×1 on Raindance.
    const lower = frozenIndex((j) => (releaseOf(j, "tems", "Raindance").holdings["NZ|"] = { tier: "Platinum", x: 1 }));
    const c = run(rows, lower).candidates.filter((x) => x.release === "Raindance");
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "UPGRADE", reading: { tier: "Platinum", x: 2 }, tierRaw: "Plat x2" });
    expect(c[0].rows).toHaveLength(3);
  });
});

describe("the live control (review, 24 Sep 2026)", () => {
  const serveWith = (singles: string) => async (req: { url: string }) => {
    const u = req.url;
    const body = u === TABLES[0].page ? singlesPage : u === TABLES[1].page ? albumsPage : u.includes("/ssp/2051") ? a500 : u.includes("search%5Bvalue%5D=Raindance") ? rain : singles;
    return { ok: true, status: 200, headers: {}, body, url: u };
  };
  const now = new Date("2026-09-24T06:17:00Z");

  it("the deep read (newest 500) reaches back past 2026-08-27 — the control is checked on it", async () => {
    const got = await rmnz.read({ deep: true, request: serveWith(s500) });
    expect(got.window.singlesOldest! < "2026-08-27").toBe(true);
    expect(verdict({ adapter: rmnz, got, deep: true, now, config }).notes).toContain("control Dave feat. Tems | Raindance | Plat x2 present");
  });

  it("the daily newest 100 did not reach it on 24 Sep (back to 2026-09-10): not due, and the line says so", async () => {
    // LABELLED EDIT: the first 100 rows of the real newest-500 answer, which
    // is what length=100 serves (the same order, the same moment).
    const d = JSON.parse(s500);
    const first100 = JSON.stringify({ ...d, data: d.data.slice(0, 100) });
    const got = await rmnz.read({ deep: false, request: serveWith(first100) });
    expect(got.window).toEqual({ singlesOldest: "2026-09-10" });
    const v = verdict({ adapter: rmnz, got, deep: false, now, config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("control row older than today's read reaches — checked on deep runs");
    // …while a daily read that DID reach it and lacked the row is a changed
    // format (LABELLED EDIT: the 500 answer without the Raindance Plat x2 row).
    const lost = JSON.stringify({ ...d, data: d.data.filter((r: string[]) => !(r[2] === "Raindance" && r[3] === "Plat x2")) });
    const bad = await rmnz.read({ deep: false, request: serveWith(lost) });
    expect(verdict({ adapter: rmnz, got: bad, deep: false, now, config })).toMatchObject({ status: "format", detail: "control row missing (Dave feat. Tems | Raindance | Plat x2)" });
  });
});
