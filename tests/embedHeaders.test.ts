// @vitest-environment node
import { describe, it, expect } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import nextConfig from "../next.config.mjs";
import { EMBED_SLUGS } from "../app/lib/embedWidgets";

// Next's server modules read AsyncLocalStorage off the global, which `next
// start` sets up and a test runner does not; set it before loading them.
(globalThis as { AsyncLocalStorage?: unknown }).AsyncLocalStorage ??= AsyncLocalStorage;
const { unstable_getResponseFromNextConfig } = await import("next/experimental/testing/server");

/**
 * Framing is allowed on the embed widgets, /embed/<widget>, and nowhere else.
 *
 * The site sends X-Frame-Options: SAMEORIGIN everywhere, which is right for a
 * site and fatal for a widget: an embed that every other site's browser refuses
 * to draw is not an embed. No X-Frame-Options value allows framing, so the
 * widgets get none, plus Content-Security-Policy: frame-ancestors *. Every other
 * path must come out of this change with exactly the headers it had, so the
 * cases below include the near misses — the gallery page at /embed itself, its
 * share card one segment deeper, a path that merely starts with "embed".
 *
 * These run Next's own reading of next.config.mjs. That the platform serves the
 * same headers is for the curl on a real server (done for the PR).
 */

async function headersFor(path: string, host = "burnaboystats.com") {
  const res = await unstable_getResponseFromNextConfig({ url: `https://${host}${path}`, nextConfig });
  return res.headers;
}

/** The report-only policy every page carries, read off the home page. */
const SITE_REPORT_ONLY = (await headersFor("/")).get("content-security-policy-report-only")!;

const WIDGETS = EMBED_SLUGS.map((s) => `/embed/${s}`);
const NOT_WIDGETS = [
  "/",
  "/embed",
  "/embed/opengraph-image/abc123",
  "/embedded",
  "/records/embed/x",
  "/press",
  "/api/v1/stats",
  "/dai-dai",
  "/records/tours/map",
];

describe("framing is allowed on /embed/<widget> only", () => {
  it("the site-wide policy is what it was: SAMEORIGIN, frame-ancestors 'self'", () => {
    expect(SITE_REPORT_ONLY).toContain("frame-ancestors 'self'");
    expect(SITE_REPORT_ONLY).toContain("report-uri /api/csp-report");
  });

  it.each(WIDGETS)("%s may be framed by any site", async (path) => {
    for (const p of [path, `${path}?theme=dark`]) {
      const h = await headersFor(p);
      expect(h.get("x-frame-options"), p).toBeNull();
      expect(h.get("content-security-policy"), p).toBe("frame-ancestors *");
      // The report-only policy is the site's, with only frame-ancestors moved,
      // so an embed on another site files no violation report.
      expect(h.get("content-security-policy-report-only"), p).toBe(
        SITE_REPORT_ONLY.replace("frame-ancestors 'self'", "frame-ancestors *"),
      );
      expect(h.get("x-robots-tag"), p).toBe("noindex, indexifembedded");
      // The rest of the baseline still applies.
      expect(h.get("x-content-type-options"), p).toBe("nosniff");
      expect(h.get("referrer-policy"), p).toBe("strict-origin-when-cross-origin");
    }
  });

  it.each(NOT_WIDGETS)("%s keeps X-Frame-Options and frame-ancestors 'self'", async (path) => {
    const h = await headersFor(path);
    expect(h.get("x-frame-options")).toBe("SAMEORIGIN");
    expect(h.get("content-security-policy")).toBeNull();
    expect(h.get("content-security-policy-report-only")).toBe(SITE_REPORT_ONLY);
    expect(h.get("x-content-type-options")).toBe("nosniff");
  });

  it("a preview deployment's widget is still noindex, nofollow", async () => {
    const h = await headersFor(WIDGETS[0], "burnaboystats-abc123.vercel.app");
    expect(h.get("x-robots-tag")).toBe("noindex, nofollow");
    expect(h.get("x-frame-options")).toBeNull();
  });
});
