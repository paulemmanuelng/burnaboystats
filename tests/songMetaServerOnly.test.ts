import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { songs } from "../app/data/songs";
import { songMetaDescription } from "../app/lib/songMeta";
import { generateMetadata } from "../app/music/[song]/page";

// The chart dataset stays out of the browser (review of 8 Oct 2026).
//
// The "Alone" row of data/songs.ts built its meta description in a getter that
// read data/charts.ts. data/songs.ts is not server-only: lib/covers.ts imports
// it, and MobileCerts and CertExplorer — client components — import coverFor
// from covers.ts. So charts.ts went into the browser bundle of /certifications
// and all 19 /afrobeats artist pages, about 25 KB raw and 6.9 KB gzipped each,
// where main shipped it on none. The description is now written by
// lib/songMeta.ts, which only the song page's generateMetadata calls.
// Same walker as tests/tourRevenueServerOnly.test.ts, pointed at charts.ts.

const ROOT = process.cwd();
const CHARTS = join(ROOT, "app/data/charts.ts");
const SONGS = join(ROOT, "app/data/songs.ts");

function appFiles(dir = join(ROOT, "app")): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? appFiles(p) : /\.(ts|tsx|js|mjs)$/.test(f) ? [p] : [];
  });
}

/** Specifiers a module imports for a VALUE — `import type` and all-`type`
 *  brace lists are erased by the compiler and bundle nothing. */
function valueImports(src: string): string[] {
  const code = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  const out: string[] = [];
  for (const m of code.matchAll(/(?:^|\n)\s*(?:import|export)\s+([\s\S]*?)\s*from\s*["']([^"']+)["']/g)) {
    const [, clause, spec] = m;
    if (/^type\b/.test(clause)) continue;
    const brace = clause.match(/\{([\s\S]*)\}/);
    const outside = clause.replace(/\{[\s\S]*\}/, "").replace(/[\s,]/g, "");
    if (brace && !outside) {
      const names = brace[1].split(",").map((s) => s.trim()).filter(Boolean);
      if (names.length && names.every((n) => /^type\s/.test(n))) continue;
    }
    out.push(spec);
  }
  for (const m of code.matchAll(/(?:^|\n)\s*import\s*["']([^"']+)["']/g)) out.push(m[1]);
  for (const m of code.matchAll(/import\(\s*["']([^"']+)["']\s*\)/g)) out.push(m[1]);
  return out;
}

function resolveSpec(from: string, spec: string): string | null {
  const base = spec.startsWith(".") ? resolve(dirname(from), spec) : spec.startsWith("@/") ? join(ROOT, spec.slice(2)) : null;
  if (!base) return null;
  for (const ext of ["", ".ts", ".tsx", ".js", ".mjs", "/index.ts", "/index.tsx"]) {
    const p = base + ext;
    if (existsSync(p) && statSync(p).isFile()) return p;
  }
  return null;
}

/** Every chain from a "use client" module to `target`. `override` swaps a
 *  file's text, for the negative control. */
function clientChains(target: string, override: Record<string, string> = {}): string[] {
  const text = (f: string) => override[f] ?? readFileSync(f, "utf8");
  const clients = appFiles().filter((f) => /^\s*["']use client["']/.test(text(f)));
  const chains: string[] = [];
  for (const c of clients) {
    const parent = new Map<string, string | null>([[c, null]]);
    const queue = [c];
    while (queue.length) {
      const f = queue.shift()!;
      for (const spec of valueImports(text(f))) {
        const r = resolveSpec(f, spec);
        if (!r || parent.has(r)) continue;
        parent.set(r, f);
        queue.push(r);
      }
    }
    if (parent.has(target)) {
      const chain: string[] = [];
      for (let x: string | null | undefined = target; x; x = parent.get(x)) chain.unshift(relative(ROOT, x));
      chains.push(chain.join(" → "));
    }
  }
  return chains;
}

describe("data/charts.ts stays out of the browser", () => {
  it("no 'use client' module reaches app/data/charts.ts through a value import", () => {
    expect(clientChains(CHARTS)).toEqual([]);
  });

  it("data/songs.ts does not import data/charts.ts", () => {
    const reached = valueImports(readFileSync(SONGS, "utf8")).map((s) => resolveSpec(SONGS, s));
    expect(reached).not.toContain(CHARTS);
  });

  it("the walker sees the chain that carried it (it would pass vacuously otherwise)", () => {
    expect(clientChains(SONGS)).toEqual(
      expect.arrayContaining(["app/components/MobileCerts.tsx → app/lib/covers.ts → app/data/songs.ts"]),
    );
    expect(clientChains(SONGS).some((c) => c.startsWith("app/components/CertExplorer.tsx → "))).toBe(true);
  });

  it("negative control: the branch's songs.ts import line is caught, with the chain that carried it", () => {
    // app/data/songs.ts:12 on seo/burna-boy-queries 6322b69a, verbatim.
    const shipped = `import { allChartItems, CHART_COUNTRIES } from "./charts";\n` + readFileSync(SONGS, "utf8");
    const chains = clientChains(CHARTS, { [SONGS]: shipped });
    expect(chains).toContain("app/components/MobileCerts.tsx → app/lib/covers.ts → app/data/songs.ts → app/data/charts.ts");
    expect(chains.some((c) => c.startsWith("app/components/CertExplorer.tsx → "))).toBe(true);
  });

  it("lib/songMeta.ts, which does read charts.ts, is reached by no client module", () => {
    expect(clientChains(join(ROOT, "app/lib/songMeta.ts"))).toEqual([]);
  });
});

describe("the song page's description is the one lib/songMeta.ts writes", () => {
  it("“Alone” has no description in data/songs.ts, and its page derives one", async () => {
    const alone = songs.find((s) => s.slug === "alone")!;
    expect(alone.metaDescription).toBeUndefined();
    const meta = await generateMetadata({ params: Promise.resolve({ song: "alone" }) });
    expect(meta.description).toBe(songMetaDescription(alone));
    expect(meta.description).toMatch(/^Burna Boy's “Alone” \(Black Panther: Wakanda Forever, 2022\): charted in \w+ countries/);
  });

  it("a row with its own description keeps it, word for word", async () => {
    const lastLast = songs.find((s) => s.slug === "last-last")!;
    expect(lastLast.metaDescription).toBeTruthy();
    expect(songMetaDescription(lastLast)).toBe(lastLast.metaDescription);
    const meta = await generateMetadata({ params: Promise.resolve({ song: "last-last" }) });
    expect(meta.description).toBe(lastLast.metaDescription);
  });
});
