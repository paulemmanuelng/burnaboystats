import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

/**
 * The root error and not-found boundaries carry no CSS module (speed pass,
 * 30 Sep 2026).
 *
 * A boundary's CSS is preloaded on EVERY page. Next hoists the stylesheets of
 * the root error.tsx and not-found.tsx into each page's head, because any page
 * may need to render them. AppState, which both boundaries render, imported
 * appState.module.css, and Turbopack merged that module into a 124 KB shared
 * chunk (15edx, 18 KB gzip). So home, /search and the 404 page each carried a
 * <link rel="preload" as="style"> for it at VeryHigh priority, and nine of the
 * ten measured routes blocked first render on it.
 *
 * AppState's rules now sit at the end of globals.css under `appState*` class
 * names. One *.module.css import anywhere under the boundaries brings the
 * preload back, and nothing on screen would show it. This walks each
 * boundary's own relative imports, transitively, and fails on any CSS module.
 */
const ROOT = process.cwd();
const BOUNDARIES = ["app/error.tsx", "app/not-found.tsx", "app/global-error.tsx"];

/** The module specifiers a source file imports statically. */
function importsOf(src: string): string[] {
  const out: string[] = [];
  for (const m of src.matchAll(/^import\s+(?:[^;]*?\s+from\s+)?["']([^"']+)["']/gm)) out.push(m[1]);
  return out;
}

/** Whether a source file imports a CSS module. */
function importsCssModule(src: string): boolean {
  return importsOf(src).some((s) => s.endsWith(".module.css"));
}

function resolveLocal(from: string, spec: string): string | null {
  if (!spec.startsWith(".")) return null;
  const base = resolve(dirname(from), spec);
  for (const c of [base, `${base}.tsx`, `${base}.ts`, join(base, "index.tsx"), join(base, "index.ts")]) {
    if (/\.(tsx?|css)$/.test(c) && existsSync(c)) return c;
  }
  return null;
}

/** Every local file a boundary reaches through static imports, itself included. */
function reached(entry: string): string[] {
  const seen = new Set<string>();
  const walk = (file: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    if (!/\.tsx?$/.test(file)) return;
    for (const spec of importsOf(readFileSync(file, "utf8"))) {
      const next = resolveLocal(file, spec);
      if (next) walk(next);
    }
  };
  walk(join(ROOT, entry));
  return [...seen].map((f) => f.slice(ROOT.length + 1));
}

describe("the root boundaries import no CSS module", () => {
  it("AppState.tsx, error.tsx and not-found.tsx import no *.module.css", () => {
    for (const f of ["app/components/AppState.tsx", "app/error.tsx", "app/not-found.tsx"]) {
      expect(importsCssModule(readFileSync(join(ROOT, f), "utf8")), f).toBe(false);
    }
  });

  it("nor does anything they reach, transitively", () => {
    for (const b of BOUNDARIES) {
      const files = reached(b);
      // The walk really goes through AppState, so it is checking something.
      if (b !== "app/global-error.tsx") expect(files).toContain("app/components/AppState.tsx");
      expect(files.filter((f) => f.endsWith(".module.css")), b).toEqual([]);
    }
  });

  it("negative control: the line AppState.tsx shipped fails the guard", () => {
    expect(importsCssModule(`import styles from "./appState.module.css";`)).toBe(true);
    expect(importsCssModule(`import Link from "next/link";`)).toBe(false);
  });

  it("AppState's class names all have their rules in globals.css", () => {
    // The move renamed every class; one missed rename would leave an element
    // unstyled with no error anywhere.
    const src = readFileSync(join(ROOT, "app/components/AppState.tsx"), "utf8");
    const css = readFileSync(join(ROOT, "app/globals.css"), "utf8");
    const used = new Set(src.match(/\bappState[A-Z]\w*/g) ?? []);
    expect(used.size).toBeGreaterThan(15);
    for (const name of used) {
      expect(css, `.${name} has no rule in globals.css`).toMatch(new RegExp(`\\.${name}(?![\\w-])`));
    }
  });
});
