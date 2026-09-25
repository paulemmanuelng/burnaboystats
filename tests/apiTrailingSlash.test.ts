// @vitest-environment node
import { describe, it, expect } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import nextConfig from "../next.config.mjs";

// Next's server modules read AsyncLocalStorage off the global, which `next
// start` sets up and a test runner does not; set it before loading them.
(globalThis as { AsyncLocalStorage?: unknown }).AsyncLocalStorage ??= AsyncLocalStorage;
const { unstable_getResponseFromNextConfig } = await import("next/experimental/testing/server");

/**
 * F-07: an /api/ URL with a trailing slash is answered, not bounced.
 *
 * Next's built-in trailing-slash redirect (/x/ → 308 → /x) runs before
 * anything next.config.mjs sets — on Vercel it is the first route, ahead of
 * headers() — so the 308 it sent for /api/v1/stats/ had no
 * Access-Control-Allow-Origin. Measured on production, 25 Sep 2026:
 *
 *   curl -sI -H "Origin: https://example.com" https://burnaboystats.com/api/v1/stats/
 *   HTTP/2 308 · location: /api/v1/stats · no access-control-allow-origin
 *
 * A fetch from another site stops at that redirect, and a preflight there
 * (OPTIONS) fails outright: a preflight answer must be a 2xx. The config now
 * switches the built-in off, puts it back word for word for every path outside
 * /api/, and rewrites /api/<x>/ to /api/<x>, so the route's own response —
 * CORS, licence and cache headers — answers the slash form for every method.
 *
 * These run Next's own reading of next.config.mjs (headers, redirects,
 * rewrites, in its order). Whether the platform then serves the rewritten
 * route is for the curl proof on a real server.
 */

type Answer = { status: number; location: string | null; rewrite: string | null };
async function answer(config: object, path: string): Promise<Answer> {
  const res = await unstable_getResponseFromNextConfig({ url: `https://burnaboystats.com${path}`, nextConfig: config });
  const strip = (u: string | null) => (u ? u.replace(/^https:\/\/burnaboystats\.com/, "") : null);
  return {
    status: res.status,
    location: strip(res.headers.get("location")),
    rewrite: strip(res.headers.get("x-middleware-rewrite")),
  };
}

/** Next's default reading: nothing but the built-in trailing-slash redirect.
 *  That redirect is what production answered /api/v1/stats/ with. */
const BUILT_IN = {};

const API_SLASH = [
  ["/api/v1/stats/", "/api/v1/stats"],
  ["/api/v1/", "/api/v1"],
  ["/api/v1/live-charts/wizkid/", "/api/v1/live-charts/wizkid"],
  ["/api/v1/awards.csv/", "/api/v1/awards.csv"],
  ["/api/v1/nope/", "/api/v1/nope"],
  ["/api/v1/stats/?x=1", "/api/v1/stats?x=1"],
  ["/api/subscribe/", "/api/subscribe"],
] as const;

const PAGES_SLASH = [
  "/records/",
  "/records/tours/?x=1",
  "/compare/in/united-kingdom/",
  "/music/albums/love-damini/",
  // /api itself is the docs PAGE, not an endpoint: it keeps its redirect.
  "/api/",
  // Only the /api/ segment is exempt, not every path that starts with "api".
  "/apis/",
  "/api-docs/x/",
];

describe("F-07: /api/<x>/ is served as /api/<x>, with no redirect", () => {
  it.each(API_SLASH)("%s is rewritten to %s", async (path, target) => {
    const a = await answer(nextConfig, path);
    expect(a.location, "no redirect").toBeNull();
    expect(a.rewrite).toBe(target);
    expect(a.status).toBe(200);
  });

  it("leaves the no-slash API URLs untouched", async () => {
    for (const path of ["/api/v1/stats", "/api/v1", "/api/v1/live-charts/wizkid", "/api"]) {
      const a = await answer(nextConfig, path);
      expect(a, path).toEqual({ status: 200, location: null, rewrite: null });
    }
  });

  it("negative control: Next's built-in redirect, the one production sent, is caught", async () => {
    const shipped = await answer(BUILT_IN, "/api/v1/stats/");
    expect(shipped).toEqual({ status: 308, location: "/api/v1/stats", rewrite: null });
    expect(shipped.rewrite).not.toBe("/api/v1/stats");
  });
});

describe("F-07: every other page keeps Next's trailing-slash redirect", () => {
  it.each(PAGES_SLASH)("%s redirects exactly as the built-in did", async (path) => {
    const built = await answer(BUILT_IN, path);
    expect(built.status).toBe(308);
    expect(await answer(nextConfig, path)).toEqual(built);
  });

  it("the built-in is off, so the API exemption is not undone by it", async () => {
    expect((nextConfig as { skipTrailingSlashRedirect?: boolean }).skipTrailingSlashRedirect).toBe(true);
  });

  it("/_next/ is the one exception: Next keeps every custom redirect off it", async () => {
    // The built-in trailing-slash redirect covered /_next/<x>/ too; a redirect
    // in next.config.mjs cannot (Next prefixes each one with (?!/_next)). Next
    // never links an asset with a trailing slash, so nothing real is lost.
    expect((await answer(BUILT_IN, "/_next/static/x.js/")).status).toBe(308);
    expect((await answer(nextConfig, "/_next/static/x.js/")).location).toBeNull();
  });

  it("the site's own redirects still fire", async () => {
    expect(await answer(nextConfig, "/tour")).toEqual({ status: 308, location: "/records/tours", rewrite: null });
    expect(await answer(nextConfig, "/tour/")).toEqual({ status: 308, location: "/tour", rewrite: null });
  });
});
