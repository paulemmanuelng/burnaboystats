import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * A tier's colour is its meaning, so both layouts must read it from one place.
 *
 * The mobile certifications screen carried its own four hex values. A Diamond
 * plaque rendered #8fe3f0 there and #31A1C0 on the desktop ledger — the same
 * award in two colours, on a palette where the colour IS the tier. And #8fe3f0
 * is --cyan, which globals.css reserves for the Top 10 peak band in as many
 * words, so the top tier was wearing the chart screen's band colour.
 *
 * This also guards the theming work: a light theme redefines --tier-* once, and
 * any hardcoded copy would keep painting dark values straight over it.
 */
function walk(dir: string, out: string[] = []) {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|css)$/.test(p)) out.push(p);
  }
  return out;
}

const FILES = walk("app");
const TOKENS = readFileSync("app/globals.css", "utf8");

/**
 * Read a file with its comments removed.
 *
 * Without this the guard flags its own explanation: the comment above the tier
 * map in MobileCerts names both #31A1C0 and #8fe3f0 to say what went wrong, and
 * BrandMark's comment names #FBB417 to say which gold the logo is NOT. A scan
 * that cannot tell code from prose punishes exactly the files somebody bothered
 * to document.
 */
function code(path: string) {
  return readFileSync(path, "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/(^|[^:])\/\/[^\n]*/g, "$1 ");
}

/** The literal each tier token owns, pulled from globals.css itself. */
function tokenValue(name: string) {
  const m = new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,8})`).exec(TOKENS);
  if (!m) throw new Error(`--${name} not found in globals.css`);
  return m[1].toLowerCase();
}

/**
 * EVERY literal a token owns. A themed token is `light-dark(<light>, <dark>)`,
 * so it owns two — and a component that hardcodes either one has made the same
 * mistake. Reading only the first hex would quietly stop checking the dark
 * value on the day a token started theming, which is exactly when this file
 * matters most.
 */
function tokenValues(name: string): string[] {
  const decl = new RegExp(`--${name}:\\s*([^;]+);`).exec(TOKENS);
  if (!decl) throw new Error(`--${name} not found in globals.css`);
  const hexes = decl[1].match(/#[0-9a-fA-F]{3,8}/g);
  if (!hexes) throw new Error(`--${name} holds no literal: ${decl[1]}`);
  return hexes.map((h) => h.toLowerCase());
}

describe("tier colours come from the tokens", () => {
  it("globals.css still owns a value for every tier", () => {
    for (const t of ["tier-diamond", "tier-platinum", "tier-gold", "tier-silver"])
      expect(tokenValue(t)).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("no component hardcodes a tier colour instead of using its token", () => {
    const tiers = ["tier-diamond", "tier-platinum", "tier-gold", "tier-silver"];
    const literals = new Map(tiers.map((t) => [tokenValue(t), t]));
    const bad: string[] = [];
    for (const f of FILES) {
      if (f.endsWith("globals.css")) continue; // where they are defined
      const src = code(f);
      for (const [hex, tier] of literals)
        if (src.toLowerCase().includes(hex))
          bad.push(`${f} hardcodes ${hex} — use var(--${tier})`);
    }
    expect(bad).toEqual([]);
  });

  it("a tier map's colours come from the tier tokens, not from other tokens", () => {
    /**
     * The gap the two tests above left open. They catch a hardcoded tier VALUE,
     * and they catch --cyan on a cert screen. Neither caught app/page.tsx
     * mapping Diamond to var(--cyan) and Platinum to var(--silver) — the Top 10
     * and Top 40 peak-band tokens — because no literal was typed and the file
     * is not named like a cert screen. The homepage painted two tiers in
     * another palette's colours for as long as that map existed.
     *
     * So: wherever the four tier names are mapped to colours, every value must
     * name a --tier-* token.
     */
    const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];
    const bad: string[] = [];
    for (const f of FILES.filter((p) => p.endsWith(".tsx") || p.endsWith(".ts"))) {
      const src = code(f);
      for (const m of src.matchAll(/\{([^{}]*Diamond\s*:[^{}]*)\}/g)) {
        const body = m[1];
        if (!TIERS.every((t) => new RegExp(`\\b${t}\\s*:`).test(body))) continue;
        for (const t of TIERS) {
          const v = new RegExp(`\\b${t}\\s*:\\s*("([^"]*)"|\`([^\`]*)\`)`).exec(body);
          if (!v) continue;
          const value = v[2] ?? v[3] ?? "";
          if (!/var\(--tier-/.test(value)) {
            bad.push(`${f}: ${t} -> ${value.slice(0, 70)}`);
          }
        }
      }
    }
    expect(
      bad,
      "a tier's colour IS its meaning; read it from --tier-* so both layouts and both themes agree"
    ).toEqual([]);
  });

  it("--cyan is the Top 10 peak band and is never used as a tier colour", () => {
    // The exact confusion this file exists for: mobile painted its Diamond tier
    // in --cyan. globals.css reserves it for the peak band.
    const cyans = tokenValues("cyan");
    const certScreens = FILES.filter((f) => /Cert|certification/i.test(f));
    const bad = certScreens.flatMap((f) =>
      cyans
        .filter((c) => code(f).toLowerCase().includes(c))
        .map((c) => `${f} uses ${c}`)
    );
    expect(bad, `--cyan (${cyans.join(" / ")}) is the Top 10 band, not a tier`).toEqual([]);
  });
});
