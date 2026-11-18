// @vitest-environment node
import { describe, it, expect } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import nextConfig from "../next.config.mjs";
import { DATA_DOWNLOADS } from "../app/lib/dataDownloads";
import { EXEMPT_PATH } from "../app/lib/botBlock";

// Next's server modules read AsyncLocalStorage off the global, which `next
// start` sets up and a test runner does not; set it before loading them.
(globalThis as { AsyncLocalStorage?: unknown }).AsyncLocalStorage ??= AsyncLocalStorage;
const { unstable_getResponseFromNextConfig } = await import("next/experimental/testing/server");

/**
 * Search Console's 404s on 18 Nov 2026 held four page URLs that nothing on the
 * site links to: /chart-peaks.csv, /awards.csv, /music/albums and /stats. Each
 * now 308s to the page that holds what it names
 * (docs/ops/seo-review-2026-11-18.md).
 *
 * These run Next's own reading of next.config.mjs: its validation of every
 * route, then the first redirect that matches, in the file's order. So a
 * source that caught too much or too little shows here. A destination must be
 * a real route, or the redirect only moves the 404.
 */

type Answer = { status: number; location: string | null };
async function answer(config: object, path: string): Promise<Answer> {
  const res = await unstable_getResponseFromNextConfig({ url: `https://burnaboystats.com${path}`, nextConfig: config });
  const location = res.headers.get("location");
  return { status: res.status, location: location ? location.replace(/^https:\/\/burnaboystats\.com/, "") : null };
}

/** The app/ file that serves a static path, a page or a route handler. */
const routeFile = (path: string) =>
  ["page.tsx", "route.ts"].map((f) => join(process.cwd(), "app", path, f)).find((f) => existsSync(f));

/** The four, as Search Console listed them, and where each goes. */
const REPORTED = [
  ["/chart-peaks.csv", "/api/v1/chart-peaks.csv"],
  ["/awards.csv", "/api/v1/awards.csv"],
  ["/stats", "/records/by-the-numbers"],
  ["/music/albums", "/music"],
] as const;

describe("Search Console's four stray URLs 308 to real pages", () => {
  it.each(REPORTED)("%s → %s", async (source, destination) => {
    expect(await answer(nextConfig, source)).toEqual({ status: 308, location: destination });
    expect(routeFile(destination), destination).toBeDefined();
  });

  it("negative control: with Next's default config each one falls through, to a path no file serves", async () => {
    // /music/albums would reach /music/[song], whose dynamicParams = false
    // makes any name outside its list a 404, "albums" included.
    for (const [source] of REPORTED) {
      expect(await answer({}, source), source).toEqual({ status: 200, location: null });
      expect(routeFile(source), source).toBeUndefined();
    }
  });
});

describe("every download in app/lib/dataDownloads.ts has one, read from the data", () => {
  it("/<slug>.csv → the path the file is published at", async () => {
    expect(DATA_DOWNLOADS.length).toBeGreaterThanOrEqual(4);
    for (const d of DATA_DOWNLOADS) {
      expect(await answer(nextConfig, `/${d.slug}.csv`), d.slug).toEqual({ status: 308, location: d.path });
      expect(routeFile(d.path), d.path).toBeDefined();
      // The proxy's matcher skips any path with a file extension, so only
      // next.config.mjs could answer this one.
      expect(EXEMPT_PATH.test(`/${d.slug}.csv`), d.slug).toBe(true);
    }
  });

  it("app/data/downloadRedirects.json is current (npx tsx scripts/build-download-redirects.mjs)", () => {
    const rows = DATA_DOWNLOADS.map((d) => ({ source: `/${d.slug}.csv`, destination: d.path, permanent: true }));
    expect(readFileSync(join(process.cwd(), "app/data/downloadRedirects.json"), "utf8")).toBe(JSON.stringify(rows, null, 2) + "\n");
  });
});

describe("negative control: real pages and files, and near misses, are not caught", () => {
  // Live pages and files: each is served as it stands, with no redirect. The
  // destinations above are among them, so none of the redirects loops.
  const REAL = [
    "/records/by-the-numbers",
    "/music",
    "/music/albums/love-damini",
    "/music/albums/african-giant",
    "/music/listeners",
    "/music/last-last",
    "/stat-card",
    "/press",
    "/api",
    "/api/v1/stats",
    ...DATA_DOWNLOADS.map((d) => d.path),
  ];
  it.each(REAL)("%s is served, not redirected", async (path) => {
    expect(await answer(nextConfig, path)).toEqual({ status: 200, location: null });
  });

  // Not pages, and not downloads: they stay 404s, so the sources are exact
  // paths, not patterns that sweep up whatever looks close.
  it.each(["/streams.csv", "/stats.csv", "/certifications.json", "/stats/2026", "/statistics", "/music/albums-list"])(
    "%s is left alone",
    async (path) => {
      expect(await answer(nextConfig, path)).toEqual({ status: 200, location: null });
    },
  );
});
