// @vitest-environment node
import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { riaa, riaaLatin, parseRows, parsePage, parseHistory, parseLoadMore, isoDate } from "../scripts/cert-watch/adapters/riaa.mjs";
import { AdapterError, failure } from "../scripts/cert-watch/adapters/base.mjs";
import { classifyPage, isChallenge, createFixtureHttp } from "../scripts/cert-watch/http.mjs";
import { offlineRoutes } from "../scripts/cert-watch/index.mjs";
import { FIX, fixture, config, LIVE_ARTISTS } from "./certWatchHelpers";

/**
 * The RIAA adapters on REAL saved responses (PROVENANCE.json). Positive
 * controls are asserted verbatim; the page-level checks use the real
 * challenge and decoy bodies the 24 Sep re-test saved.
 */
const RIAA_MARKERS = { identity: /id="simple_search_field"/, success: /table_award_row|No matching results/ };
const headersOf = (name: string) => {
  const h: Record<string, string> = {};
  for (const line of fixture(name).split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (m) h[m[1].toLowerCase()] = m[2];
  }
  return h;
};
const statusOf = (name: string) => Number(fixture(name).match(/^HTTP\/[\d.]+ (\d{3})/)?.[1]);

describe("parse", () => {
  it("reads every row of the standard-tab 'burna' search verbatim, programme from the badge", () => {
    const rows = parseRows(fixture("riaa/search-burna.html.gz"));
    expect(rows).toHaveLength(8);
    const dai = rows.find((r) => r.rowId === "default_451299")!;
    expect(dai).toMatchObject({
      credit: "SHAKIRA & BURNA BOY",
      title: "DAI DAI",
      formatRaw: "SINGLE",
      format: "single",
      tierRaw: "badge LA level 2",
      dateRaw: "July 9, 2026",
      programme: "RIAA Latin",
    });
    expect(dai.extra.badgeTitle).toBe("2X Platino");
    const loc = rows.find((r) => r.rowId === "default_428226")!;
    expect([loc.credit, loc.title, loc.tierRaw, loc.programme]).toEqual(["DAVE", "LOCATION (FEAT. BURNA BOY)", "badge DI level 0", null]);
  });

  it("finds the positive controls verbatim", () => {
    const od = parseRows(fixture("riaa/search-one-dance.html.gz"));
    expect(od).toHaveLength(1);
    expect(riaa.control.find(od[0])).toBe(true);
    expect(od[0]).toMatchObject({ credit: "DRAKE", title: "ONE DANCE (FEAT. WIZKID & KYLA)", tierRaw: "badge DI level 11", dateRaw: "October 30, 2023" });
    const latin = parseRows(fixture("riaa/latin-search-burna-2026-09-24.html.gz"));
    expect(latin.filter(riaaLatin.control.find)).toHaveLength(1);
  });

  it("reads what the page says it is, for the served-is-requested check", () => {
    const p = parsePage(fixture("riaa/search-burna.html.gz"));
    expect([p.tabActive, p.se, p.hasMore, p.noResults]).toEqual(["recent-award", "burna", false, false]);
    const newest = parsePage(fixture("riaa/newest-default.html.gz"));
    expect(newest.rows).toHaveLength(30);
    expect([newest.tabActive, newest.se, newest.hasMore]).toEqual(["recent-award", "", true]);
    expect(newest.queryParams).toMatchObject({ tab_active: "recent-award", ord: "desc", col: "certification_date" });
    const none = parsePage(fixture("riaa/run-2026-09-24/latin__asake.html.gz"));
    expect([none.tabActive, none.se, none.rows.length, none.noResults]).toEqual(["platinum-latin", "Asake", 0, true]);
  });

  it("reads every Latin badge form on the Shakira search as RIAA Latin", () => {
    const rows = parseRows(fixture("riaa/latin-search-shakira.html.gz"));
    expect(rows).toHaveLength(28);
    expect(rows.every((r) => r.programme === "RIAA Latin" && r.reading)).toBe(true);
  });

  it("reads an award history's current certification", () => {
    const h = parseHistory(fixture("riaa/history-451299-2026-09-24.json"));
    expect(h.current).toEqual({ label: "2X PLATINO", badgeAlt: "badge LA level 2", badgeTitle: "2X Platino", date: "July 9, 2026" });
    expect(h.first?.label).toBe("ORO");
    expect(h.ladder).toEqual(["2X PLATINO", "PLATINO", "ORO"]);
    expect([h.title, h.credit]).toEqual(["DAI DAI", "SHAKIRA & BURNA BOY"]);
    expect(fixture("riaa/history-451299.json")).toBe(fixture("riaa/history-451299-2026-09-24.json"));
  });

  it("reads the end of a load-more", () => {
    expect(parseLoadMore(fixture("riaa/load-more-end.json"))).toEqual({ rows: [], hasMore: false, nextPage: 3, total: 8 });
    expect(() => parseLoadMore("<html>")).toThrow(AdapterError);
  });

  it("dates", () => {
    expect(isoDate("July 9, 2026")).toBe("2026-07-09");
    expect(isoDate("9 July 2026")).toBeNull();
  });
});

describe("page-level checks on real bodies", () => {
  it("does not mistake RIAA's harmless challenge-platform script for a challenge", () => {
    const body = fixture("riaa/latin-search-burna-2026-09-24.html.gz");
    expect(body).toContain("/cdn-cgi/challenge-platform/");
    const res = { status: 200, headers: headersOf("headers/US_RIAA_Latin_site.txt"), body };
    expect(isChallenge(res, RIAA_MARKERS.success)).toBe(false);
    expect(classifyPage(res, RIAA_MARKERS).kind).toBe("ok");
  });

  it("calls the real Cloudflare and Hostinger walls challenges", () => {
    for (const [body, hdr] of [
      ["challenge/be-ultratop.html", "headers/BE_Ultratop_site.txt"],
      ["challenge/ch-hitparade.html", "headers/CH_hitparade_site.txt"],
      ["challenge/co-hcdn.html", "headers/CO_media_API_site.txt"],
    ]) {
      const res = { status: statusOf(hdr), headers: headersOf(hdr), body: fixture(body) };
      expect(res.status, body).toBe(403);
      expect(classifyPage(res, RIAA_MARKERS).kind, body).toBe("challenge");
    }
  });

  it("calls RiSA's browser decoy and olis.pl's bare 302 a different page", () => {
    const decoy = { status: 200, headers: headersOf("headers/ZA_risa_org_za_browser.txt"), body: fixture("decoy/za-risa-browser.html") };
    expect(Buffer.byteLength(decoy.body)).toBe(1099); // the 1,099-byte decoy, as served
    expect(classifyPage(decoy, RIAA_MARKERS).kind).toBe("mismatch");
    const hdr = headersOf("headers/PL_olis_bare_site.txt");
    const bare = { ok: false, kind: "http", status: statusOf("headers/PL_olis_bare_site.txt"), redirectTo: hdr.location, detail: `redirected to ${hdr.location}` };
    expect(bare.status).toBe(302);
    expect(failure(bare).kind).toBe("mismatch");
  });
});

describe("read() against the saved responses", () => {
  const names = Object.values(LIVE_ARTISTS).map((a) => a.name);
  const makeCtx = async (adapterId: string, extra: Record<string, unknown> = {}, http?: ReturnType<typeof createFixtureHttp>) => {
    const h = http ?? createFixtureHttp({ root: FIX, routes: await offlineRoutes(), robotsDir: join(FIX, "robots") });
    const calls: string[] = [];
    return {
      calls,
      ctx: {
        deep: false,
        cursor: null,
        searchTerms: [...names, ...config.searchTerms],
        artistNames: names,
        watch: config.watchlist.filter((w: { adapter: string }) => w.adapter === adapterId),
        config,
        request: (req: { url: string; method?: string }) => {
          calls.push(`${req.method ?? "GET"} ${req.url}`);
          return h.request({ ...req, adapterId });
        },
        wantsHistory: () => false,
        ...extra,
      },
    };
  };

  it("riaa-latin: sixteen name searches plus the watched award's history", async () => {
    const { ctx, calls } = await makeCtx("riaa-latin");
    const got = await riaaLatin.read(ctx);
    expect(calls.filter((c) => c.startsWith("GET"))).toHaveLength(16);
    expect(calls.filter((c) => c.startsWith("POST"))).toHaveLength(1);
    const dai = got.rows.find((r: { rowId: string }) => r.rowId === "default_451299");
    expect(dai.extra.history.current.label).toBe("2X PLATINO");
    expect(got.rows.every((r: { programme: string }) => r.programme === "RIAA Latin")).toBe(true);
  });

  it("riaa: the daily read is ONE request, and leaves Latin rows to riaa-latin", async () => {
    const { ctx, calls } = await makeCtx("riaa");
    const got = await riaa.read(ctx);
    expect(calls).toHaveLength(1);
    expect(got.rows).toHaveLength(30 - parseRows(fixture("riaa/newest-default.html.gz")).filter((r) => r.programme === "RIAA Latin").length);
    expect(got.cursor.lastDate).toBe("2026-09-23");
  });

  it("refuses a page that is not the search it asked for", async () => {
    // Labelled edit: route the Latin "Wizkid" search to the saved "Asake" page.
    const routes = [
      {
        method: "GET",
        match: (u: string) => u.includes("platinum-latin") && u.includes("se=Burna+Boy"),
        file: "riaa/run-2026-09-24/latin__asake.html.gz",
      },
    ];
    const http = createFixtureHttp({ root: FIX, routes, robotsDir: join(FIX, "robots") });
    const { ctx } = await makeCtx("riaa-latin", { artistNames: ["Burna Boy"] }, http);
    await expect(riaaLatin.read(ctx)).rejects.toMatchObject({ kind: "mismatch" });
  });

  it("calls a page with neither rows nor 'No matching results' a changed format", async () => {
    // Labelled edit: the real newest page with its row class renamed.
    const html = fixture("riaa/newest-default.html.gz").replaceAll("table_award_row", "award_row_v2");
    const http = {
      request: async () => ({ ok: true, status: 200, headers: {}, body: html }),
    } as unknown as ReturnType<typeof createFixtureHttp>;
    const { ctx } = await makeCtx("riaa", {}, http);
    await expect(riaa.read(ctx)).rejects.toMatchObject({ kind: "format" });
  });

  it("never turns a failed fetch into an empty read", async () => {
    const http = {
      request: async () => ({ ok: false, kind: "network", detail: "ECONNRESET" }),
    } as unknown as ReturnType<typeof createFixtureHttp>;
    const { ctx } = await makeCtx("riaa", {}, http);
    await expect(riaa.read(ctx)).rejects.toMatchObject({ kind: "unreachable" });
  });
});
