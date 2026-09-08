import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Every external origin the code reaches for is named in the CSP.
 *
 * The policy is report-only, which is exactly why it rots: a directive that is
 * wrong costs nothing today and takes the site down the day it is enforced. Two
 * had already drifted. `connect-src` omitted https://formsubmit.co, the contact
 * form's POST target and the only non-same-origin fetch in the app — and since
 * connect-src is declared it does not fall back to default-src, so enforcing
 * would have broken the form. `font-src` omitted the CDN the country-flag
 * polyfill hardcodes, which nothing on a Mac would ever reveal because the
 * polyfill only fires when the flag render test fails.
 *
 * So the policy is checked against the source rather than against intent.
 */

const ROOT = process.cwd();
const CONFIG = readFileSync(join(ROOT, "next.config.mjs"), "utf8");

/** Origins that are allowed to appear in source without being in the policy. */
const EXEMPT = new Set([
  // Documentation, canonical URLs and structured-data vocabularies are never
  // fetched by the browser — they are strings in prose, links, or @context.
  "https://schema.org",
  "https://burnaboystats.com",
  "https://www.burnaboystats.com",
]);

/** Directives whose host lists we police, in the order a browser reads them. */
const DIRECTIVES = ["script-src", "style-src", "img-src", "font-src", "connect-src"];

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(p)) out.push(p);
  }
  return out;
}

/** The policy string, split into directive -> allowed origins. */
function policy(): Record<string, string[]> {
  const m = /"Content-Security-Policy-Report-Only",\s*value:\s*\[([\s\S]*?)\]\.join/.exec(CONFIG);
  if (!m) throw new Error("could not find the CSP array in next.config.mjs");
  const out: Record<string, string[]> = {};
  for (const line of m[1].split("\n")) {
    const q = /"([a-z-]+) ([^"]*)"/.exec(line);
    if (!q) continue;
    out[q[1]] = q[2].split(/\s+/).filter((t) => t.startsWith("http"));
  }
  return out;
}

describe("the CSP names every origin the code reaches for", () => {
  const pol = policy();

  it("the policy still parses, so this guard is testing something", () => {
    expect(Object.keys(pol)).toEqual(expect.arrayContaining(DIRECTIVES));
    expect(pol["img-src"].length).toBeGreaterThan(0);
  });

  // Two attempts at a general detector were abandoned, and the reason is worth
  // writing down. Matching only literal `fetch(`/`src=` positions missed every
  // CDN this site uses, because they live in helpers — the Spotify image host
  // is a bare string in app/lib/covers.ts and never appears at a src= at all.
  // Inverting it to "every origin that is not an href" then flagged 40+ source
  // citations, because in this codebase URLs ARE data: cars.ts alone cites
  // bugatti.com, ferrari.com and porsche.com as spec sources. Subresource-ness
  // is not recoverable from source text here. So the guard makes the smaller
  // claims that are actually true, and the CSP's own comment carries the rest.

  it("every image host the cover helpers hand out is in img-src", () => {
    const imgSrc = new Set(pol["img-src"] ?? []);
    const hosts = new Set<string>();
    for (const f of ["app/lib/covers.ts", "app/lib/artistImages.ts", "app/lib/spotifyImage.ts"]) {
      for (const m of readFileSync(join(ROOT, f), "utf8").matchAll(/(https:\/\/[a-z0-9.-]+)\//gi)) {
        hosts.add(m[1].toLowerCase());
      }
    }
    expect(hosts.size, "no image hosts found — have the helpers moved?").toBeGreaterThan(0);
    const missing = [...hosts].filter((h) => !imgSrc.has(h));
    expect(missing, "a cover helper hands out an image host img-src does not allow").toEqual([]);
  });

  it("every literal fetch target is in connect-src", () => {
    const connect = new Set(pol["connect-src"] ?? []);
    const targets = new Set<string>();
    for (const f of walk(join(ROOT, "app"))) {
      const src = readFileSync(f, "utf8");
      // fetch("https://…") and fetch(`https://…`), including a concatenated
      // first segment, which is how the contact form builds its endpoint.
      for (const m of src.matchAll(/fetch\(\s*["'`](https:\/\/[a-z0-9.-]+)/gi)) {
        targets.add(m[1].toLowerCase());
      }
    }
    const missing = [...targets].filter((t) => !connect.has(t));
    expect(missing, "the app fetches an origin connect-src does not allow").toEqual([]);
  });

  it("the contact form's POST target is in connect-src, not merely in default-src", () => {
    // The specific shape that was wrong: connect-src is declared, so a declared
    // directive stops inheriting from default-src entirely.
    expect(pol["connect-src"]).toContain("https://formsubmit.co");
  });

  it("the flag polyfill is self-hosted, so font-src needs no third party", () => {
    const poly = readFileSync(join(ROOT, "app/components/FlagEmojiPolyfill.tsx"), "utf8");
    expect(
      poly,
      "called with no arguments the polyfill injects a jsdelivr @font-face that font-src does not allow"
    ).toMatch(/polyfillCountryFlagEmojis\(\s*["'][^"']+["']\s*,\s*["']\/fonts\//);
    expect(pol["font-src"] ?? []).toEqual([]);
  });
});
