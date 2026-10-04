import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { revenueSourceStrings, leaksIn } from "../scripts/client-leaks.mjs";

// The box-office board's `source` notes are data only, and must not ship to a
// browser. Debug pass 3 Oct 2026 (k1): app/data/tours.ts value-imported
// revenueShows for the Stade de France line, and tours.ts is bundled into
// client components (MobileTours; CertExplorer and TracklistDialog through
// albumPages), so the whole board — 85 notes, 79 of them "from the owner's
// screenshot" — sat in /_next/static/immutable/chunks/2v7v6qjuaw4a1.js.
// The live moments moved to app/data/liveMoments.ts, which only server code
// imports. scripts/check-seo.mjs scans the built chunks as well.

const ROOT = process.cwd();
const TARGET = join(ROOT, "app/data/tourRevenue.ts");

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

/** Every chain from a "use client" module to tourRevenue.ts. `override` swaps
 *  a file's text, for the negative control. */
function clientChains(override: Record<string, string> = {}): string[] {
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
    if (parent.has(TARGET)) {
      const chain: string[] = [];
      for (let x: string | null | undefined = TARGET; x; x = parent.get(x)) chain.unshift(relative(ROOT, x));
      chains.push(chain.join(" → "));
    }
  }
  return chains;
}

describe("the box-office source notes stay on the server (k1, 3 Oct 2026)", () => {
  it("no 'use client' module reaches app/data/tourRevenue.ts through a value import", () => {
    expect(clientChains()).toEqual([]);
  });

  it("the walker sees client modules at all (it would pass vacuously otherwise)", () => {
    const toursFile = join(ROOT, "app/data/tours.ts");
    // MobileTours value-imports upcomingShows from tours.ts — the path k1 rode.
    expect(valueImports(readFileSync(join(ROOT, "app/components/MobileTours.tsx"), "utf8")).map((s) => resolveSpec(join(ROOT, "app/components/MobileTours.tsx"), s))).toContain(toursFile);
  });

  it("negative control: tours.ts's shipped import line is caught, with the chain that carried it", () => {
    const toursFile = join(ROOT, "app/data/tours.ts");
    // tours.ts:9 on origin/main 6005ca8e, verbatim.
    const shipped = `import { revenueShows } from "./tourRevenue";\n` + readFileSync(toursFile, "utf8");
    const chains = clientChains({ [toursFile]: shipped });
    expect(chains).toContain("app/components/MobileTours.tsx → app/data/tours.ts → app/data/tourRevenue.ts");
    expect(chains.some((c) => c.startsWith("app/components/CertExplorer.tsx → "))).toBe(true);
  });

  it("a type-only import is erased and does not count", () => {
    expect(valueImports(`import type { RevenueShow } from "../data/tourRevenue";`)).toEqual([]);
    expect(valueImports(`import { type RevenueShow } from "../data/tourRevenue";`)).toEqual([]);
    expect(valueImports(`import { revenueShows, type RevenueShow } from "../data/tourRevenue";`)).toEqual(["../data/tourRevenue"]);
  });
});

describe("the post-build chunk scan (scripts/check-seo.mjs) reads its notes off the data", () => {
  const sources: string[] = revenueSourceStrings(readFileSync(TARGET, "utf8"));

  it("reads every row's note (distinct notes; many rows share a post)", () => {
    const rowNotes = readFileSync(TARGET, "utf8").match(/\bsource:\s*"/g) ?? [];
    expect(rowNotes.length).toBeGreaterThanOrEqual(80);
    expect(sources.length).toBe(new Set(sources).size);
    expect(sources.length).toBeGreaterThanOrEqual(40);
    expect(sources.every((s) => s.length > 10)).toBe(true);
  });

  it("negative control: flags the line the live chunk 2v7v6qjuaw4a1.js shipped", () => {
    // Verbatim from https://burnaboystats.com/_next/static/immutable/chunks/2v7v6qjuaw4a1.js (4 Oct 2026).
    const shipped = `revenue:6147209,source:"TouringData, X post of 29 Dec 2025 (I TOLD THEM…), from the owner's screenshot"},{artist:"Burna Boy",venue:"Stade de France"`;
    expect(leaksIn(shipped, sources)).toEqual(["TouringData, X post of 29 Dec 2025 (I TOLD THEM…), from the owner's screenshot"]);
    // The same note with its ellipsis escaped, as another minifier might write it.
    expect(leaksIn(shipped.replace("…", "\\u2026"), sources).length).toBe(1);
    expect(leaksIn(`revenue:6147209},{artist:"Burna Boy"`, sources)).toEqual([]);
  });
});
