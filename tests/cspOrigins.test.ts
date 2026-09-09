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

  it("every fetch target in the app is in connect-src", () => {
    /**
     * This guard used to match `fetch("https://…")` only, and its own comment
     * claimed that covered "a concatenated first segment, which is how the
     * contact form builds its endpoint". It did not. ContactForm.tsx:42-43 is:
     *
     *     const endpoint = "https://formsubmit.co/ajax/" + atob(ENCODED_TO);
     *     const res = await fetch(endpoint, { … });
     *
     * The argument is a VARIABLE, so the pattern matched nothing, `targets` was
     * empty, and `expect([]).toEqual([])` passed for the one origin in the app
     * it exists to police. A guard whose subject is empty is not a guard, so it
     * now collects every https origin that reaches a fetch — through a variable
     * or directly — and refuses to run on an empty set.
     */
    const connect = new Set(pol["connect-src"] ?? []);
    const targets = new Set<string>();
    for (const f of walk(join(ROOT, "app"))) {
      const src = readFileSync(f, "utf8");
      if (!/\bfetch\s*\(/.test(src)) continue;
      // Every https origin in a file that fetches — the endpoint literal a few
      // lines above the call included.
      for (const m of src.matchAll(/["'`](https:\/\/[a-z0-9.-]+)/gi)) {
        const origin = m[1].toLowerCase();
        if (EXEMPT.has(origin)) continue;
        targets.add(origin);
      }
    }
    expect(
      targets.size,
      "no fetch origin found in app/ — the detector has stopped seeing the thing it polices"
    ).toBeGreaterThan(0);
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

/**
 * The non-CSP security headers are still declared.
 *
 * Everything above polices the CSP's host lists, which is the part that drifts
 * as the code reaches for new origins. It says nothing about the four headers
 * beside it — and those are the ones actually enforced in production, while the
 * CSP is still report-only. Deleting a line from `securityHeaders` would take
 * clickjacking or MIME-sniffing protection off every response on the site and
 * pass CI in silence, because nothing reads them.
 *
 * Checked as a pair: the header must be present AND carry the value that makes
 * it do something. `X-Frame-Options: ALLOWALL` is a header, not a defence.
 */
describe("the enforced security headers survive an edit to next.config.mjs", () => {
  const REQUIRED: [string, RegExp, string][] = [
    ["X-Content-Type-Options", /nosniff/, "stops MIME-sniffing a text response into a script"],
    ["X-Frame-Options", /SAMEORIGIN|DENY/, "the ENFORCED clickjacking defence — the CSP's frame-ancestors is only report-only"],
    ["Referrer-Policy", /strict-origin-when-cross-origin|no-referrer/, "keeps full URLs off outbound referers"],
    ["Permissions-Policy", /camera=\(\)/, "denies camera, microphone and geolocation by default"],
  ];

  it.each(REQUIRED)("%s is set and still restrictive", (key, value, why) => {
    const entry = new RegExp(`key:\\s*["']${key}["'][^}]*?value:\\s*([\\s\\S]*?)[,}]`, "i").exec(CONFIG);
    expect(entry, `${key} is gone from next.config.mjs — ${why}`).toBeTruthy();
    expect(entry![1], `${key} is present but no longer restrictive — ${why}`).toMatch(value);
  });

  // The CSP is deliberately report-only (see the note in next.config.mjs), so
  // this is not a demand that it be enforced. It is a check that the day it IS
  // enforced, the switch is the only thing that changed: an enforcing policy
  // must never ship still carrying script-src 'unsafe-inline', because that is
  // the directive the whole exercise exists to remove.
  it("does not enforce a CSP that still allows inline script", () => {
    const enforcing = /key:\s*["']Content-Security-Policy["']/.test(CONFIG);
    if (!enforcing) return;
    const policy = /key:\s*["']Content-Security-Policy["'][\s\S]*?value:\s*\[([\s\S]*?)\]\.join/.exec(CONFIG);
    expect(policy, "the CSP is enforcing but this check cannot read it").toBeTruthy();
    expect(
      /script-src[^"]*'unsafe-inline'/.test(policy![1]),
      "the CSP was switched to enforcing while script-src still allows 'unsafe-inline' — add nonces first, that is the work enforcement was waiting on"
    ).toBe(false);
  });
});
