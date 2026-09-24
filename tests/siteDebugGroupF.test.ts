import { describe, it, expect, vi } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import sharp from "sharp";

import { updates } from "../app/data/updates";
import { feedGuids } from "../app/lib/feedGuid";
import { GET as rss } from "../app/rss.xml/route";
import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import { liveChartsBuiltAt, liveCharts } from "../app/data/liveCharts";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { cleanQuery } from "../app/lib/searchQuery";
import { searchDocs } from "../app/lib/searchIndex";
import { signEmail, verifyEmail } from "../app/lib/subscribeToken";
import { apiHeaders, UPDATED_NOTE, CREDIT_NOTE } from "../app/lib/api";
import { GET as apiNotFound } from "../app/api/[...path]/route";
import { GET as liveChartsRoute } from "../app/api/v1/live-charts/route";
import { GET as liveChartsArtist } from "../app/api/v1/live-charts/[artist]/route";
import { GET as statsRoute } from "../app/api/v1/stats/route";
import { GET as toursRoute } from "../app/api/v1/tours/route";
import { POST as cspReport } from "../app/api/csp-report/route";
import { countriesOf, withApiCountryCodes } from "../app/lib/liveChartMeta";
import { allItems } from "../app/data/certifications";
import { allChartItems } from "../app/data/charts";
import { concerts, festivals, otherShows } from "../app/data/tours";
import { pageMetadata } from "../app/lib/seo";
import { metadata as updatesMetadata } from "../app/updates/page";
import manifest from "../app/manifest";

/**
 * Group F of the full-site debug of 24 Sep 2026: the feeds, the API, the
 * headers and the files around the pages. Each block names the item and quotes
 * what the live site shipped. F-06, which needs the compare page rendered, is
 * in tests/compareCarriedState.test.tsx.
 */

const body = async (res: Response) => (await res.json()) as Record<string, any>;

describe("F-01: a new feed entry never renumbers the old ones", () => {
  it("keeps every existing guid when newer entries are added on top", () => {
    const now = feedGuids(updates);
    for (const added of [1, 2, 3]) {
      const before = feedGuids(updates.slice(added));
      const moved = before.filter((g, i) => g !== now[i + added]);
      expect(moved, `adding ${added} entries renumbered these`).toEqual([]);
    }
  });

  it("the old index-based scheme is what churned (negative control)", () => {
    // Live, 24 Sep 2026: three entries went on top and all 326 older guids
    // moved, "/certifications#2026-09-23-0" becoming "…-3".
    const old = (list: typeof updates) => list.map((u, i) => `${u.href}#${u.date}-${i}`);
    const now = old(updates);
    const before = old(updates.slice(3));
    expect(before.filter((g, i) => g !== now[i + 3]).length).toBe(before.length);
  });

  it("gives every entry a distinct guid, and the feed prints them", async () => {
    const guids = feedGuids(updates);
    expect(new Set(guids).size).toBe(updates.length);
    const xml = await rss().text();
    const printed = [...xml.matchAll(/<guid isPermaLink="false">([^<]+)<\/guid>/g)].map((m) => m[1]);
    expect(printed).toEqual(guids.map((g) => g.replace(/&/g, "&amp;")));
  });

  it("numbers a date from its oldest entry", () => {
    const i = updates.findIndex((u) => u.text.startsWith("Nine more Nigerian plaques, from TurnTable"));
    expect(i).toBeGreaterThanOrEqual(0);
    const u = updates[i];
    const olderSameDay = updates.slice(i + 1).filter((x) => x.date === u.date).length;
    expect(feedGuids(updates)[i]).toBe(`${u.href}#${u.date}-${olderSameDay}`);
  });
});

describe("F-12: no date is stamped ahead of the thing it dates", () => {
  const rows = sitemap();
  const pipeline = new Map<string, string>([
    ["/live-charts", liveChartsBuiltAt],
    ...LIVE_BOARDS.map((b) => [`/afrobeats/${b.slug}/live`, b.builtAt] as [string, string]),
  ]);

  it("reads a feed day as the start of that day, not noon", () => {
    // Live at 05:28 UTC on 24 Sep 2026, /live-charts said
    // "2026-09-24T12:00:00.000Z" — six and a half hours ahead.
    const shipped = new Date("2026-09-24T12:00:00.000Z");
    expect(shipped.getUTCHours()).toBe(12);
    const noon = rows
      .filter((r) => r.lastModified && !pipeline.has(r.url.replace(siteUrl, "") || "/"))
      .filter((r) => (r.lastModified as Date).toISOString().slice(10) !== "T00:00:00.000Z")
      .map((r) => `${r.url}: ${(r.lastModified as Date).toISOString()}`);
    expect(noon).toEqual([]);
  });

  it("dates a live board by the minute it was rebuilt", () => {
    for (const [path, builtAt] of pipeline) {
      const row = rows.find((r) => r.url === `${siteUrl}${path}`);
      expect(row, path).toBeDefined();
      const said = (row!.lastModified as Date).getTime();
      // A later feed entry about the page may still win; nothing earlier may.
      expect(said, path).toBeGreaterThanOrEqual(Date.parse(builtAt));
      const feedDay = updates
        .filter((u) => u.href === path || u.href.startsWith(`${path}/`))
        .map((u) => Date.parse(`${u.date}T00:00:00Z`));
      expect(said, path).toBe(Math.max(Date.parse(builtAt), ...feedDay));
    }
  });

  it("stamps each RSS item at the start of its day", async () => {
    const xml = await rss().text();
    const dates = [...xml.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map((m) => m[1]);
    expect(dates.length).toBe(updates.length);
    // The live feed said "Thu, 24 Sep 2026 12:00:00 GMT" for an entry live
    // from about 09:05 UTC.
    expect(dates.filter((d) => d.endsWith("12:00:00 GMT"))).toEqual([]);
    expect(dates.every((d) => d.endsWith("00:00:00 GMT"))).toBe(true);
  });
});

describe("F-02 / F-04: the search query arrives clean", () => {
  it("takes the first of a repeated q", () => {
    // /search?q=a&q=b: "TypeError: e.replace is not a function".
    expect(cleanQuery(["a", "b"])).toBe("a");
    expect(() => searchDocs(cleanQuery(["a", "b"]), 10)).not.toThrow();
  });

  it("drops control characters", () => {
    // /search?q=%00: React error #418, text vs "".
    expect(cleanQuery("\u0000")).toBe("");
    expect(cleanQuery("wiz\u0000kid\u007f")).toBe("wizkid");
    expect(cleanQuery(undefined)).toBe("");
    expect(cleanQuery(null)).toBe("");
    expect(cleanQuery("Dai Dai")).toBe("Dai Dai");
  });

  it("is what the page hands the results", async () => {
    const { default: SearchPage } = await import("../app/search/page");
    const find = (n: any): any =>
      n && typeof n === "object"
        ? n.props?.initialQuery !== undefined
          ? n
          : [n.props?.children].flat().map(find).find(Boolean)
        : undefined;
    for (const [q, want] of [[["a", "b"], "a"], ["%\u0000", "%"]] as const) {
      const tree = await SearchPage({ searchParams: Promise.resolve({ q: q as string | string[] }) });
      expect(find(tree)?.props.initialQuery).toBe(want);
    }
  });
});

describe("F-05: a malformed confirm token is refused, not thrown on", () => {
  it("returns false for a token with the right length in characters but not in bytes", () => {
    process.env.SUBSCRIBE_SECRET = "test-secret";
    // The live probe: "é" plus 31 "a" — HTTP 500, 0 bytes.
    const token = "é" + "a".repeat(31);
    expect(token.length).toBe(32);
    expect(Buffer.byteLength(token)).toBe(33);
    expect(() => verifyEmail("reader", token)).not.toThrow();
    expect(verifyEmail("reader", token)).toBe(false);
    expect(verifyEmail("reader", signEmail("reader"))).toBe(true);
    expect(verifyEmail("reader", signEmail("reader").toUpperCase())).toBe(false);
  });
});

describe("F-03 / F-08: what `updated` promises, and the headers a browser may read", () => {
  it("no longer promises that `updated` moves with every change", () => {
    expect(UPDATED_NOTE).not.toContain("safely use it to decide whether to re-fetch");
    expect(UPDATED_NOTE).toContain("If-None-Match");
    expect(UPDATED_NOTE).toContain("ETag");
  });

  it("exposes X-License and ETag to cross-origin scripts", async () => {
    // From https://example.com, fetch('/api/v1/stats') read x-license: null.
    const exposed = (apiHeaders()["Access-Control-Expose-Headers"] ?? "").split(/,\s*/);
    expect(exposed).toEqual(expect.arrayContaining(["X-License", "ETag"]));
    for (const res of [statsRoute(), liveChartsRoute(), apiNotFound()]) {
      expect(res.headers.get("access-control-expose-headers")).toContain("ETag");
    }
  });
});

describe("F-07: API paths nothing serves answer in JSON", () => {
  it("answers an unknown /api path with a small JSON 404 carrying CORS", async () => {
    // Live: /api/v1/nope was the 47,364-byte HTML 404 with no ACAO.
    const res = apiNotFound();
    expect(res.status).toBe(404);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(res.headers.get("access-control-allow-origin")).toBe("*");
    const text = await res.text();
    expect(text.length).toBeLessThan(1000);
    expect(JSON.parse(text).error).toBe("not_found");
  });

  it("tells a caller of /live-charts/burna-boy where his board is", async () => {
    const res = await liveChartsArtist(new Request("http://x/"), { params: Promise.resolve({ artist: "burna-boy" }) });
    expect(res.status).toBe(404);
    const b = await body(res);
    expect(b["burna-boy"]).toBe("/api/v1/live-charts");
    expect(b.message).toContain("/api/v1/live-charts");
  });
});

describe("F-09: the live-charts API gives Britain one code", () => {
  it("maps Spotify's GB to UK and leaves everything else alone", () => {
    const shipped = { country: "GB", name: "United Kingdom", position: 12, movement: 0 };
    const [r] = withApiCountryCodes([
      { title: "T", kind: "song", platforms: [{ platform: "Spotify", numberOnes: 0, entries: [shipped, { country: "NG", name: "Nigeria", position: 1 }] }] },
    ]);
    expect(r.platforms[0].entries.map((e) => e.country)).toEqual(["UK", "NG"]);
    expect(shipped.country).toBe("GB"); // the data file is not mutated
  });

  it("serves no GB, and as many codes as the page counts countries", async () => {
    for (const b of [await body(liveChartsRoute()), await body(await liveChartsArtist(new Request("http://x/"), { params: Promise.resolve({ artist: LIVE_BOARDS[0].slug }) }))]) {
      const entries = (b.releases as typeof liveCharts).flatMap((r) => r.platforms.flatMap((p) => p.entries));
      expect(entries.some((e) => e.country === "GB")).toBe(false);
      const codes = new Set(entries.map((e) => e.country).filter((c) => c !== "WW"));
      expect(codes.size).toBe(countriesOf(entries));
    }
    const raw = liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries));
    expect(countriesOf(raw)).toBe(countriesOf(withApiCountryCodes(liveCharts).flatMap((r) => r.platforms.flatMap((p) => p.entries))));
  });
});

describe("F-10: DJ Tárico keeps his accent, and the credit convention is stated", () => {
  it("spells the credit the way the chart record does", () => {
    const cert = allItems.find((r) => r.title === "Yaba Buluku (Remix)");
    const chart = allChartItems.find((r) => r.title === "Yaba Buluku (Remix)");
    expect(cert?.credit).toBe("DJ Tárico & Burna Boy");
    expect(chart?.credit?.startsWith("DJ Tárico")).toBe(true);
    expect(JSON.stringify(allItems)).not.toContain("DJ Tarico");
  });

  it("still finds the record by the unaccented name", () => {
    expect(searchDocs("tarico", 20).some((d) => d.title === "Yaba Buluku (Remix)")).toBe(true);
  });

  it("prints the credit note on both /api layouts", () => {
    expect(CREDIT_NOTE).toContain("with Stromae");
    for (const f of ["app/api/page.tsx", "app/components/MobileApi.tsx"])
      expect(readFileSync(f, "utf8"), f).toContain("{CREDIT_NOTE}");
  });
});

describe("F-11: /api/v1/tours says what `partial` means and counts the concerts", () => {
  it("does not call a finished run in progress", async () => {
    const b = await body(toursRoute());
    expect(b.description).not.toContain("a run still in progress");
    expect(b.data.tours.find((t: any) => t.name === "Space Drift World Tour")?.partial).toBe(true);
  });

  it("publishes the solo concerts the festivals page counts", async () => {
    const b = await body(toursRoute());
    expect(b.data.totals.concerts).toBe(concerts.length);
    expect(b.data.concerts).toHaveLength(concerts.length);
    // The festivals page's appearances total is these three lists together.
    expect(b.data.totals.festivals + b.data.totals.concerts + b.data.totals.otherShows).toBe(
      festivals.length + concerts.length + otherShows.length,
    );
  });
});

describe("F-13: every page advertises the RSS feed", () => {
  it("rides in pageMetadata, the root layout and /updates", () => {
    const m = pageMetadata({ title: "t", description: "d", path: "/records" });
    expect((m.alternates?.types as Record<string, string>)["application/rss+xml"]).toBe("/rss.xml");
    expect((updatesMetadata.alternates?.types as Record<string, string>)["application/rss+xml"]).toBe("/rss.xml");
    expect(readFileSync("app/layout.tsx", "utf8")).toMatch(/alternates:\s*\{\s*canonical:\s*"\/",\s*types:\s*FEED_ALTERNATE/);
  });
});

describe("F-14: the report-only CSP reports somewhere", () => {
  const CONFIG = readFileSync("next.config.mjs", "utf8");

  it("names a report-uri and a report-to endpoint", () => {
    expect(CONFIG).toContain('"report-uri /api/csp-report"');
    expect(CONFIG).toContain('"report-to csp"');
    expect(CONFIG).toMatch(/key:\s*"Reporting-Endpoints",\s*value:\s*'csp="\/api\/csp-report"'/);
  });

  it("logs a report and answers 204", async () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    const report = JSON.stringify({ "csp-report": { "document-uri": "https://burnaboystats.com/", "violated-directive": "img-src" } });
    const res = await cspReport(new Request("http://x/api/csp-report", { method: "POST", body: report, headers: { "Content-Type": "application/csp-report" } }));
    expect(res.status).toBe(204);
    expect(log.mock.calls[0][0]).toContain("violated-directive");
    const huge = await cspReport(new Request("http://x/api/csp-report", { method: "POST", body: "x".repeat(100_000) }));
    expect(huge.status).toBe(204);
    expect(String(log.mock.calls[1][0]).length).toBeLessThan(5000);
    log.mockRestore();
  });
});

describe("F-15: the maskable icon keeps the crown inside the safe zone", () => {
  it("points the manifest at its own file", () => {
    const maskable = manifest().icons!.filter((i) => i.purpose === "maskable");
    expect(maskable.map((i) => i.src)).toEqual(["/icon-maskable-512.png"]);
  });

  it("is full-bleed, and no artwork pixel lies outside the 40% radius", async () => {
    const measure = async (file: string) => {
      const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      let maxR = 0;
      for (let y = 0; y < info.height; y++)
        for (let x = 0; x < info.width; x++) {
          const i = (y * info.width + x) * 4;
          if (data[i + 3] < 16) continue;
          if (Math.abs(data[i] - 10) + Math.abs(data[i + 1] - 10) + Math.abs(data[i + 2] - 11) <= 30) continue;
          maxR = Math.max(maxR, Math.hypot(x + 0.5 - info.width / 2, y + 0.5 - info.height / 2));
        }
      return { maxR, corner: data[3], safe: info.width * 0.4 };
    };
    // The file it pointed at: artwork to 245px, transparent corners.
    const before = await measure("public/icon-512.png");
    expect(before.maxR).toBeGreaterThan(before.safe);
    const after = await measure("public/icon-maskable-512.png");
    expect(after.maxR).toBeLessThanOrEqual(after.safe);
    expect(after.corner).toBe(255);
  });
});

describe("F-16: the create-next-app starter files are gone", () => {
  it.each(["file", "globe", "next", "vercel", "window"])("public/%s.svg", (name) => {
    expect(existsSync(`public/${name}.svg`)).toBe(false);
  });
});
