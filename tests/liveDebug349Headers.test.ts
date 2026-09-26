// @vitest-environment node
import { describe, it, expect } from "vitest";
import { AsyncLocalStorage } from "node:async_hooks";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import type { NextConfig } from "next";
import type { ReactElement } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
  notFound: () => {
    throw new Error("notFound()");
  },
}));

import nextConfig from "../next.config.mjs";
import { citedImages, imageRobotsProblem } from "../scripts/seo-rules.mjs";
import { EMBED_FONT_FILES } from "../app/lib/embedWidgets";
import { ROOT_OG_IMAGE } from "../app/lib/og-image";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";

// Next's server modules read AsyncLocalStorage off the global, which `next
// start` sets up and a test runner does not (as in tests/embedHeaders.test.ts).
(globalThis as { AsyncLocalStorage?: unknown }).AsyncLocalStorage ??= AsyncLocalStorage;
const { unstable_getResponseFromNextConfig } = await import("next/experimental/testing/server");

/**
 * The live-site debug of PRs 349 and 345 (26 Sep 2026): two findings that live
 * in the response headers next.config.mjs sends, read here by Next's own
 * matcher. That the platform serves the same was checked with curl on the PR's
 * build. The markup findings are in tests/liveDebug349.test.tsx.
 */

async function headersFor(path: string, config: NextConfig = nextConfig, host = "burnaboystats.com") {
  return (await unstable_getResponseFromNextConfig({ url: `https://${host}${path}`, nextConfig: config })).headers;
}

// ── Share cards are indexable ─────────────────────────────────────────────
/** The two rules next.config.mjs carried from 22 Aug to 26 Sep 2026, word for word. */
const SHIPPED_RULES = [
  {
    source: "/opengraph-image",
    headers: [{ key: "X-Robots-Tag", value: "noindex" }],
  },
  {
    source: "/:path*/opengraph-image/:id*",
    headers: [{ key: "X-Robots-Tag", value: "noindex" }],
  },
];
const shippedConfig: NextConfig = {
  ...nextConfig,
  headers: async () => [...(await nextConfig.headers!()), ...SHIPPED_RULES],
};

/** Cards as the live pages cite them: JSON-LD and og:image, root to leaf. */
const CARDS = [
  "/dai-dai/opengraph-image/1p5mclx",
  "/dai-dai/opengraph-image/1p5mclx?3dff696fcee7665f",
  "/dai-dai/es/opengraph-image/p4geud",
  ROOT_OG_IMAGE,
  "/updates/opengraph-image/abc123",
  "/records/cars/opengraph-image/abc123",
  "/music/last-last/opengraph-image/abc123",
  "/compare/burna-boy-vs-rema/opengraph-image/abc123",
];

const problemsFor = async (paths: string[], config: NextConfig = nextConfig) =>
  (await Promise.all(paths.map(async (p) => imageRobotsProblem(p, (await headersFor(p, config)).get("x-robots-tag"))))).filter(Boolean);

describe("every image a page cites is indexable", () => {
  it("the rule refuses the /dai-dai Article.image as it was served", async () => {
    // Served by burnaboystats.com/dai-dai on 26 Sep 2026: the Article's image,
    // and the og:image. The card itself answered `x-robots-tag: noindex`.
    const shipped =
      '<meta property="og:image" content="https://burnaboystats.com/dai-dai/opengraph-image/1p5mclx?3dff696fcee7665f"/>' +
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Dai Dai — Shakira & Burna Boy\'s 2026 FIFA World Cup Anthem","datePublished":"2026-07-16","dateModified":"2026-09-25T12:00:00+00:00","image":["https://burnaboystats.com/dai-dai/opengraph-image/1p5mclx"],"inLanguage":"en","url":"https://burnaboystats.com/dai-dai"}</script>';
    const cited = citedImages(shipped);
    expect(cited.sort()).toEqual(["/dai-dai/opengraph-image/1p5mclx", "/dai-dai/opengraph-image/1p5mclx?3dff696fcee7665f"]);
    expect(imageRobotsProblem(cited[0], "noindex")).toContain("noindex");
    expect(await problemsFor(cited, shippedConfig)).toHaveLength(2);
  });

  it("with the rules that shipped, every card answered noindex", async () => {
    expect(await problemsFor(CARDS, shippedConfig)).toHaveLength(CARDS.length);
  });

  it("now no card does, and nothing else about their headers moved", async () => {
    expect(await problemsFor(CARDS)).toEqual([]);
    for (const p of CARDS) {
      const h = await headersFor(p);
      expect(h.get("x-frame-options"), p).toBe("SAMEORIGIN");
      expect(h.get("x-content-type-options"), p).toBe("nosniff");
    }
  });

  it("the Dai Dai pages cite only indexable images, their cards among them", async () => {
    for (const [route, page] of [
      ["/dai-dai", DaiDaiPage],
      ["/dai-dai/es", DaiDaiPageES],
    ] as const) {
      const cited = citedImages(renderToStaticMarkup((await page()) as ReactElement));
      expect(cited.some((p) => p.startsWith(`${route}/opengraph-image/`)), route).toBe(true);
      expect(await problemsFor(cited), route).toEqual([]);
    }
  });

  it("resources stay noindex: Next's static files and the favicon", async () => {
    for (const p of ["/_next/static/chunks/main.js", "/_next/static/media/font.woff2", "/favicon.ico"]) {
      expect((await headersFor(p)).get("x-robots-tag"), p).toBe("noindex");
    }
  });

  it("a preview deployment's card is still noindex, nofollow", async () => {
    const h = await headersFor(CARDS[0], nextConfig, "burnaboystats-abc123.vercel.app");
    expect(h.get("x-robots-tag")).toBe("noindex, nofollow");
  });
});

// ── The self-hosted fonts are cached for a year ────────────────────────────
const FONT_DIR = join(process.cwd(), "public/fonts");
const FONT_FILES = readdirSync(FONT_DIR).filter((f) => !f.startsWith("."));

/**
 * Each file's bytes, pinned to its name. The fonts are served immutable for a
 * year, so a changed font must take a NEW name (and the reference to it must
 * follow): the browsers that cached the old bytes will never ask again. When
 * this fails, rename the file — Anton-Regular-latin.woff2 becomes
 * Anton-Regular-latin.v2.woff2 — update what names it (app/lib/embedWidgets.ts
 * FONTS, app/lib/og-lockup.tsx, app/components/FlagEmojiPolyfill.tsx), and pin
 * the new name here. Only a new name gets a new line.
 */
const PINNED: Record<string, string> = {
  "Anton-Regular-latin.woff2": "82930dc601ae705d5a6940b0b0d9987cf634456ec6ca766b4ab94db3f13a51ac",
  "Anton-Regular.ttf": "fd9301f2837c99df2be07cc7f0be66e9470f5354d8fcf1606027c67fcd637a53",
  "Geist-Regular-latin.woff2": "13110421a720dddd0649f1fe22038eba65df3be02061cd42750f05e948978490",
  "Geist-Regular.ttf": "bde046ddd9f20be35b0bd56cc79eb752b967fb6661a3fe76cb067bb09f871d76",
  "SpaceMono-Bold-latin.woff2": "af7cf6d2b897ec453acdcdacde4e9bcc8410718af5914de865b453e09f10eebc",
  "SpaceMono-Regular-latin.woff2": "b166e29178e9e01b215454ab8c327d8eaf94c8527a5f848ea9a3d4c87ec37309",
  "SpaceMono-Regular.ttf": "829aad32ab9525358de2a7ebc718d05a6b335e67421aad5e1e09cd1fa796af4e",
  "TwemojiCountryFlags.woff2": "9f04f14429bb6a9f415c7a4dd902a918d7e81a4f7526c415496fdb063954e3b8",
};

/** A Cache-Control that lets a browser reuse the file without asking: a year, immutable. */
const cachedForAYear = (cc: string | null) =>
  !!cc && Number(cc.match(/\bmax-age=(\d+)/)?.[1] ?? 0) >= 31_536_000 && /\bimmutable\b/.test(cc) && !/\bno-cache\b|\bmust-revalidate\b/.test(cc);

describe("the fonts in public/fonts are cached for a year", () => {
  it("the rule refuses the header they were served with", () => {
    // Every /fonts file on 26 Sep 2026, Next's default for public/.
    expect(cachedForAYear("public, max-age=0, must-revalidate")).toBe(false);
  });

  it("the widget's fonts all live there", () => {
    expect(EMBED_FONT_FILES.length).toBeGreaterThan(0);
    for (const f of EMBED_FONT_FILES) expect(f).toMatch(/^\/fonts\/[^/]+$/);
  });

  it.each(FONT_FILES)("/fonts/%s is served public, max-age=31536000, immutable", async (f) => {
    expect(cachedForAYear((await headersFor(`/fonts/${f}`)).get("cache-control"))).toBe(true);
  });

  it("the rule covers /fonts and nothing else", async () => {
    for (const p of ["/", "/dai-dai", "/embed/latest", "/icon-512.png", "/fontsx/a.woff2", "/api/v1/stats"]) {
      expect((await headersFor(p)).get("cache-control"), p).toBeNull();
    }
  });

  it("every file's bytes are the ones pinned to its name", () => {
    expect(FONT_FILES.sort(), "pin a new font here under its own name").toEqual(Object.keys(PINNED).sort());
    for (const f of FONT_FILES) {
      const sha = createHash("sha256").update(readFileSync(join(FONT_DIR, f))).digest("hex");
      expect(sha, `${f} changed under the same name — give it a new one (see PINNED)`).toBe(PINNED[f]);
    }
  });
});
