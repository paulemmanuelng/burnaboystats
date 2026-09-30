import { readFileSync } from "node:fs";
import { join } from "node:path";
import { searchIndex } from "../app/lib/searchIndex";
import { SUGGESTED_PATHS, suggestedSearchDocs } from "../app/lib/searchSuggested";

/**
 * The search index out of every page's first-load JS (speed pass, 30 Sep 2026).
 *
 * SearchPalette sits in the nav on every page, and it imported
 * lib/searchIndex statically: 183 KB of JS, 19 KB brotli, in the first-load
 * bundle of all 48 routes, for a box most visits never open. It now loads the
 * index on demand, and its four "Popular pages" come from the server
 * (lib/searchSuggested.ts, through layout.tsx and Nav).
 *
 * One value import of either module puts the whole index back in every
 * page's bundle, silently: the page looks the same. Hence the guard below.
 */

/** Whether a source file imports a runtime value (anything but `import type`)
 *  from lib/searchIndex or lib/searchSuggested. A dynamic import() is not a
 *  static import and does not count. An inline `import { type X }` does: a
 *  compiler may keep it as a side-effect import, which loads the module. */
function importsIndexValue(src: string): boolean {
  const statements = src.match(/^import\s[^;]*?from\s+["'][^"']+["'];?/gm) ?? [];
  return statements.some(
    (st) => /["'][^"']*lib\/search(Index|Suggested)["']/.test(st) && !/^import\s+type\s/.test(st)
  );
}

describe("the palette loads the search index on demand", () => {
  const palette = readFileSync(join(process.cwd(), "app/components/SearchPalette.tsx"), "utf8");
  const nav = readFileSync(join(process.cwd(), "app/components/Nav.tsx"), "utf8");

  it("SearchPalette.tsx has no value import from lib/searchIndex", () => {
    expect(importsIndexValue(palette)).toBe(false);
    // It still reaches the index, through a dynamic import.
    expect(palette).toMatch(/import\(\s*["']\.\.\/lib\/searchIndex["']\s*\)/);
  });

  it("Nav.tsx, which renders it on every page, has none either", () => {
    expect(importsIndexValue(nav)).toBe(false);
  });

  it("negative control: the line SearchPalette shipped fails the guard", () => {
    expect(importsIndexValue(`import { searchDocs, searchIndex } from "../lib/searchIndex";`)).toBe(true);
    // And a value import of the server helper would pull the index in too.
    expect(importsIndexValue(`import { suggestedSearchDocs } from "../lib/searchSuggested";`)).toBe(true);
    // The type-only imports the palette uses now pass.
    expect(importsIndexValue(`import type { SearchDoc } from "../lib/searchIndex";`)).toBe(false);
  });
});

describe("the palette's suggestions, built on the server", () => {
  it("returns the four suggested pages, in order, with only the printed fields", () => {
    const docs = suggestedSearchDocs();
    expect(docs.map((d) => d.path)).toEqual([...SUGGESTED_PATHS]);
    expect(docs).toHaveLength(4);
    for (const d of docs) {
      const full = searchIndex.find((x) => x.path === d.path)!;
      expect(d).toEqual({ title: full.title, path: full.path, section: full.section, description: full.description });
      expect(d).not.toHaveProperty("keywords");
    }
  });

  it("negative control: a path the index does not hold is left out, so four paths yield three", () => {
    const paths = [...SUGGESTED_PATHS.slice(0, 3), "/no-such-page"];
    const docs = suggestedSearchDocs(paths);
    expect(docs).toHaveLength(3);
    expect(docs.map((d) => d.path)).toEqual(SUGGESTED_PATHS.slice(0, 3));
  });
});
