// @vitest-environment node
import { describe, it, expect } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import nextConfig from "../next.config.mjs";
import { EMBED_SLUGS, EMBED_WIDGETS } from "../app/lib/embedWidgets";
import embedWidgetList from "../app/data/embedWidgetList.json";

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
 * share card one segment deeper, a path that merely starts with "embed", and a
 * name one segment after /embed that is not a widget. That last is the site's
 * 404 page, and the first cut of the rule (any one segment after /embed)
 * sent it out framable; the slugs are named now, from the widget list.
 *
 * These run Next's own reading of next.config.mjs. That the platform serves the
 * same headers is for the curl on a real server (done for the PR).
 *
 * One more near miss is a real slug in other letters, /embed/LATEST. Next
 * matches config sources without regard to case, so the framing rules take it
 * for a widget; the route does not, and it was the 404 page, framable. The
 * config now rewrites it to the widget. Next's test helper cannot read that
 * path (it matches case-insensitively, then extracts params case-sensitively,
 * and throws), so those cases build the rules the way `next start` does.
 */

async function headersFor(path: string, host = "burnaboystats.com") {
  const res = await unstable_getResponseFromNextConfig({ url: `https://${host}${path}`, nextConfig });
  return res.headers;
}

/**
 * The headers and the first beforeFiles rewrite for a path, from the rules as
 * `next start` builds them: the server's own buildCustomRoute, with the
 * config's case setting (router-utils/filesystem.js). Headers apply in order,
 * a later rule's header replacing an earlier one's, as in resolve-routes.js.
 */
const { default: loadCustomRoutes } = await import("next/dist/lib/load-custom-routes");
const { normalizeConfig } = await import("next/dist/server/config-shared");
const { buildCustomRoute } = await import("next/dist/server/lib/router-utils/filesystem");
const { matchHas } = await import("next/dist/shared/lib/router/utils/prepare-destination");
const resolvedConfig = await normalizeConfig("phase-production-build", nextConfig);
const customRoutes = await loadCustomRoutes(resolvedConfig);
const caseSensitive = resolvedConfig.experimental?.caseSensitiveRoutes;
const serverHeaderRules = customRoutes.headers.map((r) => buildCustomRoute("header", r, "", caseSensitive));
const serverBeforeFiles = customRoutes.rewrites.beforeFiles.map((r) => buildCustomRoute("before_files_rewrite", r));

function serverRoute(path: string, host = "burnaboystats.com") {
  const req = { headers: { host } } as unknown as Parameters<typeof matchHas>[0];
  const matches = (r: (typeof serverHeaderRules)[number] | (typeof serverBeforeFiles)[number]) =>
    r.match(path) !== false && ((!r.has && !r.missing) || matchHas(req, {}, r.has, r.missing) !== false);
  const headers = new Map<string, string>();
  for (const r of serverHeaderRules.filter(matches)) {
    for (const h of r.headers) headers.set(h.key.toLowerCase(), h.value);
  }
  return { headers, rewrite: serverBeforeFiles.find(matches)?.destination ?? null };
}

/** The report-only policy every page carries, read off the home page. */
const SITE_REPORT_ONLY = (await headersFor("/")).get("content-security-policy-report-only")!;

const WIDGETS = EMBED_SLUGS.map((s) => `/embed/${s}`);
const NOT_WIDGETS = [
  "/",
  "/embed",
  "/embed/nope",
  "/embed/NOPE",
  `/embed/${EMBED_SLUGS[0]}x`,
  `/embed/${EMBED_SLUGS[0].toUpperCase()}X`,
  "/embed/opengraph-image/abc123",
  "/embedded",
  "/records/embed/x",
  "/press",
  "/api/v1/stats",
  "/dai-dai",
  "/records/tours/map",
];
/** Each slug in other letters, [path, slug]: all capitals, and each word capitalised. */
const CASED = EMBED_SLUGS.flatMap((s) => [
  [`/embed/${s.toUpperCase()}`, s],
  [`/embed/${s.replace(/(^|-)([a-z])/g, (_, d: string, c: string) => d + c.toUpperCase())}`, s],
]);

describe("framing is allowed on /embed/<widget> only", () => {
  it("reads the slugs from a generated list that matches the widgets", () => {
    // next.config.mjs cannot import TypeScript, so it reads
    // app/data/embedWidgetList.json. Stale, it would frame a retired name and
    // refuse a new widget: run scripts/build-embed-list.mjs.
    expect(embedWidgetList).toEqual(EMBED_WIDGETS.map((w) => ({ slug: w.slug, name: w.name })));
  });

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

  it("the rules as next start builds them give every path above the same headers", async () => {
    // So the cases below, which only that reading can take, are read right.
    for (const p of [...WIDGETS, ...NOT_WIDGETS]) {
      const helper = await headersFor(p);
      const { headers } = serverRoute(p);
      for (const key of ["x-frame-options", "content-security-policy", "content-security-policy-report-only", "x-robots-tag"]) {
        expect(headers.get(key) ?? null, `${p} ${key}`).toBe(helper.get(key));
      }
    }
  });

  it.each(CASED)("%s is served the %s widget, not a framable 404", (path, slug) => {
    const { headers, rewrite } = serverRoute(path);
    // The framing rules take it for the widget...
    expect(headers.get("x-frame-options")).toBeUndefined();
    expect(headers.get("content-security-policy")).toBe("frame-ancestors *");
    // ...so it has to be the widget. Without the rewrite it was the 404 page.
    expect(rewrite).toBe(`/embed/${slug}`);
  });

  it.each(WIDGETS)("%s rewrites to itself", (path) => {
    expect(serverRoute(path).rewrite).toBe(path);
  });

  it("a preview deployment's widget is still noindex, nofollow", async () => {
    const h = await headersFor(WIDGETS[0], "burnaboystats-abc123.vercel.app");
    expect(h.get("x-robots-tag")).toBe("noindex, nofollow");
    expect(h.get("x-frame-options")).toBeNull();
  });
});
