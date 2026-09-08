import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { ogFonts } from "../app/lib/og-lockup";
import { ogId, OG_ART, ROOT_OG_IMAGE } from "../app/lib/og-image";

/**
 * Every share card carries the brand lockup, and carries it in the right face.
 *
 * docs/design/LOGO.md has specified since the crown shipped that OG images use
 * the horizontal lockup top-left at 44px. Thirty-seven cards did not — the mark
 * reached the favicon, the nav and the footer and stopped there, which is how a
 * spec line rots: nothing renders it, so nothing fails.
 *
 * Two failure modes here are silent, which is why they are pinned rather than
 * eyeballed:
 *
 *  1. `fonts: options.fonts || defaultFonts` — supplying a font list REPLACES
 *     next/og's default rather than extending it. Every card sets
 *     `fontFamily: "sans-serif"`, which matches no loaded family and falls back
 *     to the HEAD of the list. Put Anton first, or drop geist, and all
 *     thirty-seven cards silently reset into the poster face. Nothing throws.
 *
 *  2. A card that draws <OgLockup /> but forgets `fonts` gets the default list,
 *     which has no Anton — so the wordmark renders in Geist and looks merely
 *     slightly wrong rather than broken. Also nothing throws.
 */

const ROOT = process.cwd();

function ogRoutes(dir = join(ROOT, "app"), out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) ogRoutes(p, out);
    else if (e === "opengraph-image.tsx") out.push(p.slice(ROOT.length + 1));
  }
  return out;
}

const ROUTES = ogRoutes();
const src = (f: string) => readFileSync(join(ROOT, f), "utf8");

describe("the share cards carry the lockup", () => {
  it("there are share cards to check", () => {
    expect(ROUTES.length).toBeGreaterThan(30);
  });

  it("every card draws the lockup — its own, or the shared generator's", () => {
    const bare = ROUTES.filter((f) => {
      const s = src(f);
      return !s.includes("<OgLockup") && !/from "[./]*lib\/og-image"/.test(s);
    });
    expect(bare, "a share card renders no brand mark at all").toEqual([]);
  });

  it("every card that builds its own ImageResponse supplies the font list", () => {
    const missing = ROUTES.filter(
      (f) => src(f).includes("new ImageResponse") && !src(f).includes("fonts: ogFonts")
    );
    expect(
      missing,
      "this card gets next/og's default list, which has no Anton — the wordmark renders in Geist"
    ).toEqual([]);
  });
});

describe("the font list keeps the cards in the face they were drawn in", () => {
  it("geist is first, so `sans-serif` still falls back to it", () => {
    expect(
      ogFonts[0].name,
      "the head of the list is the fallback for every `fontFamily: \"sans-serif\"` on the site"
    ).toBe("geist");
  });

  it("Anton and Space Mono are loaded, under the names the lockup asks for", () => {
    expect(ogFonts.map((f) => f.name)).toEqual(["geist", "Anton", "Space Mono"]);
  });

  it("the vendored geist is byte-identical to the one next/og would have used", () => {
    // Not a nicety: this is what makes the swap invisible. next/og's default is
    // its own Geist-Regular.ttf, and public/fonts holds a copy so the render
    // does not reach into node_modules. A different Geist is a different card.
    const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
    expect(sha(join(ROOT, "public/fonts/Geist-Regular.ttf"))).toBe(
      sha(join(ROOT, "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"))
    );
  });

  it("the font files are real and present", () => {
    for (const f of ogFonts) {
      expect(f.data.length, `${f.name} is empty`).toBeGreaterThan(10_000);
      // TrueType/OpenType magic — a 404 page saved as .ttf would pass a size check.
      expect([0x00010000, 0x4f54544f]).toContain(f.data.readUInt32BE(0));
    }
  });
});

describe("the art version bumps the cached previews", () => {
  it("ogId folds in OG_ART, so redrawing a card changes its URL", () => {
    // The whole point: the copy on every card is identical either side of the
    // lockup, so a text-only id would leave every scraped preview frozen on the
    // logo-less image.
    expect(OG_ART).toBeTruthy();
    const before = ogId("certifications");
    expect(ogId("certifications")).toBe(before); // stable within a version
    const salted = (art: string, s: string) => {
      let h = 5381;
      const x = `${art}|${s}`;
      for (let i = 0; i < x.length; i++) h = ((h * 33) ^ x.charCodeAt(i)) >>> 0;
      return h.toString(36);
    };
    expect(before).toBe(salted(OG_ART, "certifications"));
    expect(before).not.toBe(salted("lockup-0", "certifications"));
  });
});

describe("the lockup is the one in the design file", () => {
  const lockup = src("app/lib/og-lockup.tsx");

  /** Blank out comments, preserving length: the note ABOUT a file is not a use
   *  of it. The first cut of the next assertion failed on its own docstring. */
  const code = lockup
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(m.length - p1.length));

  it("draws the crown as geometry, not as the lockup SVG's live text", () => {
    // LOGO.md: "Outline the text before using a lockup anywhere Anton is not
    // loaded." resvg is handed no fonts, so <img src=".../horizontal.svg">
    // would render the bars and drop BOTH lines of type without erroring.
    expect(code).not.toMatch(/burnaboystats-horizontal\.svg/);
    expect(lockup).toContain('viewBox="0 0 84 74"');
  });

  it("keeps LOGO.md's crown geometry exactly", () => {
    for (const frag of [
      'x="7" y="25" width="11" height="33" rx="5.5"',
      'x="22" y="36" width="11" height="22" rx="5.5"',
      'x="37" y="15" width="11" height="43" rx="5.5"',
      'x="52" y="36" width="11" height="22" rx="5.5"',
      'x="67" y="25" width="11" height="33" rx="5.5"',
      'x="7" y="64" width="71" height="6.5" rx="3.25"',
    ]) {
      expect(lockup, `crown geometry drifted from LOGO.md: ${frag}`).toContain(frag);
    }
  });

  it("never renders the crown without its dot, and the dot stays green", () => {
    // LOGO.md rule: "Never render the crown without its dot. Never recolour it."
    expect(lockup).toContain('<circle cx="42" cy="8" r="4" fill="#3ed17f"/>');
  });

  it("STATS is the only gradient text, per LOGO.md rule 1", () => {
    expect(lockup).toContain("backgroundClip");
    expect(lockup.match(/backgroundClip/g)!.length).toBe(1);
  });
});

describe("no card is left on a URL that cannot be re-scraped", () => {
  /**
   * Next derives the `?<hash>` on a static og:image from the ROUTE FILE alone.
   * Fourteen routes drew their card entirely through lib/og-image.tsx, so the
   * lockup landed on them and their URL did not move by a byte — a build diff
   * caught it, nothing else would have.
   */
  const EXEMPT = new Set([
    // The root card is cited by hand, at its bare path, on /404, /search and
    // /primitives (they declare their own openGraph block, which drops the
    // inherited `images`). generateImageMetadata would put an id in the path
    // and 404 all three. It is versioned through ROOT_OG_IMAGE instead.
    "app/opengraph-image.tsx",
  ]);

  it("every share card versions its own URL", () => {
    const unversioned = ROUTES.filter(
      (f) => !EXEMPT.has(f) && !src(f).includes("generateImageMetadata")
    );
    expect(
      unversioned,
      "this card's URL is Next's hash of its own file, so a change made in lib/ leaves every cached preview stale"
    ).toEqual([]);
  });

  it("the exemption is real — the root card is still the one cited by hand", () => {
    // If nothing cites the bare path any more, the exemption should go and the
    // root should be versioned like everything else.
    const citing = ["app/not-found.tsx", "app/search/page.tsx", "app/primitives/page.tsx"];
    for (const f of citing) {
      expect(src(f), `${f} no longer cites the root card`).toContain("ROOT_OG_IMAGE");
    }
    expect(src("app/opengraph-image.tsx")).not.toContain("generateImageMetadata");
  });

  it("the hand-cited root URL carries the art version", () => {
    expect(ROOT_OG_IMAGE).toBe(`/opengraph-image?${OG_ART}`);
  });

  it("nobody cites a bare, unversioned /opengraph-image", () => {
    const bare: string[] = [];
    for (const f of ["app/not-found.tsx", "app/search/page.tsx", "app/primitives/page.tsx"]) {
      if (/url:\s*"\/opengraph-image"/.test(src(f))) bare.push(f);
    }
    expect(bare, "a hardcoded bare path can never be re-scraped when the art changes").toEqual([]);
  });
});

describe("nothing on a card can run under the mark", () => {
  /**
   * The mark takes the top-right corner on the ten bespoke stat cards, and it
   * is absolutely positioned — so a long kicker does not push it, it runs
   * straight under it. "Shakira × Burna Boy · 2026 World Cup Anthem" and
   * "Burna Boy · Best of Burn Series, Vol. 1 · 2011" both did exactly that, and
   * only a rendered card showed it. The kicker is capped so it wraps instead.
   */
  const CLEARS_WITHOUT_A_CAP = new Set([
    // The kicker lives in a 560px left column; the mark sits at x≈906 and the
    // column ends at 624, so they cannot meet however long the kicker gets.
    "app/records/cars/[car]/opengraph-image.tsx",
    // "The Afrobeats Board" is fixed copy, two words, on a card whose mark sits
    // above the headline rather than beside the kicker.
    "app/afrobeats/opengraph-image.tsx",
  ]);

  it("every card with a corner mark caps the text that shares its line", () => {
    const uncapped = ROUTES.filter((f) => {
      const s = src(f);
      const hasCornerMark = /<div style=\{\{ position: "absolute", top: \d+, right: \d+/.test(s);
      return hasCornerMark && !CLEARS_WITHOUT_A_CAP.has(f) && !s.includes("maxWidth: 780");
    });
    expect(
      uncapped,
      "this card's kicker can grow into the mark — cap it, or say here why it cannot"
    ).toEqual([]);
  });

  it("the exemptions still describe real cards", () => {
    for (const f of CLEARS_WITHOUT_A_CAP) {
      expect(ROUTES, `${f} is exempt but no longer exists`).toContain(f);
    }
  });
});
