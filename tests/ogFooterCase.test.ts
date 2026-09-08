import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { cardUrl } from "../app/lib/og-image";

/**
 * The address a share card prints is one that resolves.
 *
 * A hostname is case-insensitive (RFC 4343); a URL path is not, and this site
 * does no case folding — there is no middleware.ts, and next.config.mjs
 * redirects only the vercel host and /tour. So every card that shouted its path
 * was advertising a 404. Measured against production, not inferred:
 *
 *   /timeline                   200      /TIMELINE                   404
 *   /dai-dai                    200      /DAI-DAI                    404
 *   /music/last-last            200      /MUSIC/LAST-LAST            404
 *   /music/albums/love-damini   200      /MUSIC/ALBUMS/LOVE-DAMINI   404
 *   /afrobeats/wizkid           200      /AFROBEATS/WIZKID           404
 *   /afrobeats/wizkid/charts    200      /AFROBEATS/WIZKID/CHARTS    404
 *   /afrobeats/seyi-vibez/live  200      /AFROBEATS/SEYI-VIBEZ/LIVE  404
 *
 * Five built the string as `${slug.toUpperCase()}` and two typed it in caps.
 * Nothing failed, because the PAGE is fine — only the picture of its address is
 * wrong, and the only reader who finds out is one retyping it off a screenshot,
 * which is the single case that line exists for.
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

/** Blank out comments, preserving length: prose ABOUT the bug is not the bug. */
const code = (s: string) =>
  s
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(m.length - p1.length));

describe("cardUrl", () => {
  it("shouts the domain and leaves the path alone", () => {
    expect(cardUrl("/dai-dai")).toBe("BURNABOYSTATS.COM/dai-dai");
    expect(cardUrl("/afrobeats/wizkid/charts")).toBe("BURNABOYSTATS.COM/afrobeats/wizkid/charts");
  });

  it("folds down a path a caller shouts, so the bug cannot come back through it", () => {
    expect(cardUrl("/DAI-DAI")).toBe("BURNABOYSTATS.COM/dai-dai");
    expect(cardUrl("/MUSIC/LAST-LAST")).toBe("BURNABOYSTATS.COM/music/last-last");
  });
});

describe("no card prints an address that 404s", () => {
  it("there are cards to check", () => {
    expect(ROUTES.length).toBeGreaterThan(30);
  });

  it("no card writes a path into its own JSX", () => {
    const offenders: string[] = [];
    for (const f of ROUTES) {
      const s = code(src(f));
      for (const m of s.matchAll(/BURNABOYSTATS\.COM\/\S/g)) {
        const line = s.slice(0, m.index).split("\n").length;
        offenders.push(`${f}:${line} — ${src(f).split("\n")[line - 1].trim()}`);
      }
    }
    expect(
      offenders,
      "build it with cardUrl(path) — a hand-written path gets shouted, and a shouted path is a 404"
    ).toEqual([]);
  });

  it("nothing uppercases a slug on its way to the footer", () => {
    // The exact shape of the original bug, in all five files that had it.
    const offenders = ROUTES.filter((f) => /slug[^\n]*\.toUpperCase\(\)/.test(code(src(f))));
    expect(offenders, "a slug is being shouted into a URL").toEqual([]);
  });

  it("the cards that print an address go through the helper", () => {
    // Seven of them, and not vacuous: if this drops, the guard above is checking
    // a file set that no longer contains any addresses.
    const users = ROUTES.filter((f) => src(f).includes("cardUrl"));
    expect(users.length, "nothing calls cardUrl — has the footer moved?").toBeGreaterThanOrEqual(7);
  });

  it("each of those cards moves its own id, so the fix reaches cached previews", () => {
    // The correction is invisible without this: X, Slack, Facebook and iMessage
    // keep serving the picture they scraped, dead address and all.
    const missing: string[] = [];
    for (const f of ROUTES) {
      const s = src(f);
      if (!s.includes("cardUrl")) continue;
      // Bounded [\s\S], not [^)]: timeline's id array contains totalAwards(),
      // and a negated-paren scan stops dead at that first ")".
      const inId =
        /ogId\([\s\S]{0,400}?cardUrl/.test(s) ||
        /sig[\s\S]{0,400}?cardUrl/.test(s) ||
        // /dai-dai builds its id in a sibling module, shared with the page.
        (f === "app/dai-dai/opengraph-image.tsx" && src("app/dai-dai/ogId.ts").includes("cardUrl"));
      if (!inId) missing.push(f);
    }
    expect(missing, "this card's URL will not change, so the wrong picture stays cached").toEqual([]);
  });
});
