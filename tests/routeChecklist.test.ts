import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { SEGMENT_LABELS, hasOwnBreadcrumb } from "../app/lib/seo";

/**
 * The route checklist, enforced mechanically.
 *
 * Every user-facing route is supposed to ship five things: its own
 * opengraph-image.tsx, a sitemap entry, a breadcrumb label for each of its
 * segments, at least one inbound link, and a search-index doc. Nothing about
 * adding a route makes any of those happen, and nothing about forgetting one
 * fails a build, a type check or a screenshot — /dai-dai/es shipped for weeks
 * publishing `"name":"es"` as the leaf of the BreadcrumbList Google reads,
 * because a directory called `es` needed a line in SEGMENT_LABELS that nobody
 * was reminded to write.
 *
 * So the reminder lives here, driven off the filesystem: `app/**\/page.tsx` is
 * the list of routes, and a new one that skipped a step fails on the commit
 * that adds it rather than in a Search Console email a month later.
 *
 * A `robots: { index: false }` route legitimately opts out of the SEARCH
 * surfaces — the sitemap, its own OG image, the site search index. It does not
 * opt out of breadcrumbs (the site-wide <Breadcrumbs> renders on it regardless,
 * knowing nothing about robots) or of naming its own og:url, so those two are
 * checked everywhere.
 */

const walk = (dir: string, out: string[] = []) => {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

const APP_FILES = walk("app");
const SOURCES = new Map(
  APP_FILES.filter((f) => /\.tsx?$/.test(f)).map((f) => [f, readFileSync(f, "utf8")] as const),
);

const OG_DIRS = new Set(
  APP_FILES.filter((f) => /(^|\/)opengraph-image\.tsx$/.test(f)).map(dirname),
);

const SITEMAP = readFileSync("app/sitemap.ts", "utf8");
const INDEX_PATHS = [
  ...[...readFileSync("app/lib/searchIndex.ts", "utf8").matchAll(/path: "([^"]+)"/g)],
  ...[...readFileSync("app/lib/searchIndex.generated.ts", "utf8").matchAll(/"path": "([^"]+)"/g)],
].map((m) => m[1]);

interface Route {
  /** URL path, dynamic segments left as `[song]`. */
  path: string;
  /** The page file, for failure messages. */
  file: string;
  dir: string;
  dynamic: boolean;
  /** Static segments only — a `[slug]` has no fixed label to write. */
  segments: string[];
  noindex: boolean;
}

const routes: Route[] = APP_FILES.filter((f) => /(^|\/)page\.tsx$/.test(f))
  .sort()
  .map((file) => {
    const path =
      "/" + file.replace(/^app\//, "").replace(/page\.tsx$/, "").replace(/\/$/, "");
    const src = SOURCES.get(file)!;
    return {
      path: path === "/" ? "/" : path,
      file,
      dir: dirname(file),
      dynamic: path.includes("["),
      segments: path.split("/").filter(Boolean).filter((s) => !s.startsWith("[")),
      // Only a route that opts out unconditionally counts. /afrobeats/[artist]
      // passes `noindex: !a.swept` — indexed for most artists, so it owes the
      // full checklist.
      noindex: /robots:\s*\{\s*index:\s*false/.test(src),
    };
  });

/** `/music/[song]` as a regex source matching `/music/anything`. */
const asPattern = (path: string) =>
  "^" + path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\[[^\]]+\\\]/g, "[^/]+") + "$";

/** `/music/[song]` as it is written in a template literal: `/music/${sg.slug}`. */
const asTemplate = (path: string) =>
  "`" + path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\[[^\]]+\\\]/g, "\\$\\{[^}]+\\}") + "`";

const indexed = routes.filter((r) => !r.noindex);

describe("route checklist", () => {
  it("finds every route under app/", () => {
    // A sanity anchor: if the walk breaks, every other test in this file passes
    // vacuously. The number is allowed to grow — it is the floor that would
    // catch a glob that stopped globbing, not a cap on new pages.
    expect(routes.length).toBeGreaterThanOrEqual(39);
    expect(routes.map((r) => r.path)).toContain("/");
    expect(routes.map((r) => r.path)).toContain("/afrobeats/[artist]/charts");
  });

  it("gives every indexed route its own opengraph-image", () => {
    // Next resolves the CLOSEST opengraph-image up the tree, so a route without
    // one silently borrows its parent's — the home page's, for a top-level
    // route. It renders, it looks deliberate, and it advertises the wrong page.
    const missing = indexed
      .filter((r) => !OG_DIRS.has(r.dir))
      .map((r) => `${r.path} — add ${r.dir}/opengraph-image.tsx`);
    expect(missing).toEqual([]);
  });

  it("gives every indexed route a sitemap entry", () => {
    const missing = indexed
      .filter((r) =>
        r.dynamic
          ? !new RegExp(asTemplate(r.path)).test(SITEMAP)
          : !SITEMAP.includes(`path: "${r.path === "/" ? "" : r.path}"`),
      )
      .map((r) => `${r.path} — add it to app/sitemap.ts`);
    expect(missing).toEqual([]);
  });

  it("gives every indexed route a search-index doc", () => {
    const missing = indexed
      .filter((r) => !INDEX_PATHS.some((p) => new RegExp(asPattern(r.path)).test(p)))
      .map((r) => `${r.path} — add a doc to app/lib/searchIndex.ts, or generate one`);
    expect(missing).toEqual([]);
  });

  it("gives every indexed route at least one inbound link", () => {
    // An orphan page is reachable only by typing its URL: no crawl path, no
    // reader path. Links written as JSX (`href="/x"`), as data (`href: "/x"` in
    // links.ts) and as templates (`href={`/music/${slug}`}`) all count; the
    // page's own directory does not, so a page linking to itself is not cover.
    //
    // Indexed routes only, and /primitives is why: it is an internal scratch
    // page, noindex and nofollow, deliberately kept out of the nav and the
    // sitemap. Linking to it to satisfy a test would be the test making the
    // site worse. A page nobody should find is allowed to be unfindable.
    const orphans = indexed
      .filter((r) => {
        const lit = r.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(`href[:=]\\s*(?:"${lit}"|\\{${asTemplate(r.path)}\\})`);
        return ![...SOURCES].some(
          ([f, s]) => f !== r.file && (r.dir === "app" || dirname(f) !== r.dir) && re.test(s),
        );
      })
      .map((r) => `${r.path} — nothing in app/ links to it`);
    expect(orphans).toEqual([]);
  });

  it("gives every breadcrumb segment a written label", () => {
    // The <Breadcrumbs> in the root layout builds its trail by mapping each URL
    // segment through SEGMENT_LABELS and falling back to the raw segment. The
    // fallback never throws and never warns; it just publishes the slug. Routes
    // in OWN_BREADCRUMB hand-write their own trail and the site-wide one stands
    // down, so their segments need no label.
    const missing = routes
      .filter((r) => !hasOwnBreadcrumb(r.path.replace(/\[[^\]]+\]/g, "x")))
      .flatMap((r) =>
        r.segments
          .filter((s) => !SEGMENT_LABELS[s])
          .map((s) => `${r.path} — SEGMENT_LABELS has no "${s}", so the trail publishes "${s}"`),
      );
    // Dynamic segments carry data-driven labels instead; the board's artist
    // slugs are covered by tests/structuredData.test.ts.
    expect([...new Set(missing)].sort()).toEqual([]);
  });

  it("never lets a route inherit the home page's og:url", () => {
    // Open Graph DOES cascade. A page that sets no `openGraph` block inherits
    // the root layout's whole block — including `url: "/"` — so it ships the
    // home page's card, pointing at the home page, under its own URL. /search
    // and /primitives both did; /primitives had already been fixed for
    // `alternates.canonical` and missed the identical inheritance one field
    // over. `pageMetadata()` sets og:url from the path, so calling it counts.
    const inheriting = routes
      .filter((r) => r.path !== "/") // the home page IS the root block
      .filter((r) => {
        const src = SOURCES.get(r.file)!;
        return !src.includes("pageMetadata(") && !src.includes("openGraph");
      })
      .map((r) => `${r.path} — sets no openGraph, so og:url resolves to the home page`);
    expect(inheriting).toEqual([]);
  });
});
