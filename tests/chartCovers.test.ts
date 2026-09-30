import { readFileSync } from "node:fs";
import { join } from "node:path";
import { albumCharts, singleCharts, featureCharts, chartTier as chartTierFromData } from "../app/data/charts";
import { chartTier } from "../app/lib/chartTier";
import { coverFor } from "../app/lib/covers";
import { chartCovers } from "../app/lib/chartCovers";

/**
 * The chart pages' catalogue, out of the browser (speed pass, 30 Sep 2026).
 *
 * ChartExplorer imported chartTier from data/charts and both chart components
 * called coverFor in the browser, so /records/charts and the board artists'
 * /charts pages shipped data/charts.ts, songs.ts, albums.ts and covers.ts as
 * JS: ~14 KB brotli of first-load. chartTier now lives in lib/chartTier.ts,
 * and the page builds the cover map on the server (lib/chartCovers.ts).
 */
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("the server's cover map is the lookup the browser made", () => {
  const map = chartCovers(albumCharts, singleCharts, featureCharts);

  it("every title in the three arrays maps to coverFor(title), or is absent when that is undefined", () => {
    const titles = [...albumCharts, ...singleCharts, ...featureCharts].map((r) => r.title);
    expect(titles.length).toBeGreaterThan(40);
    let withArt = 0;
    for (const t of titles) {
      const want = coverFor(t);
      if (want === undefined) expect(t in map, t).toBe(false);
      else {
        expect(map[t], t).toBe(want);
        withArt++;
      }
    }
    // Most releases have art: the loop is not comparing undefineds.
    expect(withArt).toBeGreaterThan(titles.length / 2);
    // And the map holds nothing beyond those titles.
    expect(Object.keys(map).every((k) => titles.includes(k))).toBe(true);
  });
});

describe("chartTier moved, unchanged", () => {
  it("data/charts re-exports the very same function", () => {
    expect(chartTierFromData).toBe(chartTier);
  });

  it("still tiers peaks as before", () => {
    expect([1, 2, 10, 11, 40, 41, 200].map(chartTier)).toEqual(["one", "top10", "top10", "top40", "top40", "rest", "rest"]);
  });
});

describe("the chart components import no catalogue", () => {
  const CLIENT = ["app/components/ChartExplorer.tsx", "app/components/MobileOfficialCharts.tsx"];
  /** Whether a source imports lib/covers, or a runtime value (not `import type`)
   *  from data/charts, songs or albums. */
  const importsCatalogue = (src: string) =>
    (src.match(/^import\s[^;]*?from\s+["'][^"']+["'];?/gm) ?? []).some((st) => {
      if (/["'][^"']*lib\/(covers|chartCovers)["']/.test(st)) return true;
      if (/["'][^"']*data\/(charts|songs|albums)["']/.test(st)) return !/^import\s+type\s/.test(st);
      return false;
    });

  it("neither imports lib/covers or a runtime value from data/charts", () => {
    for (const f of CLIENT) {
      const src = read(f);
      expect(src.startsWith('"use client"'), `${f} is a client component`).toBe(true);
      expect(importsCatalogue(src), f).toBe(false);
    }
  });

  it("negative control: the lines they shipped fail", () => {
    expect(importsCatalogue(`import { chartTier, type ChartCountry } from "../data/charts";`)).toBe(true);
    expect(importsCatalogue(`import { coverFor } from "../lib/covers";`)).toBe(true);
    // The type-only import they keep passes.
    expect(importsCatalogue(`import type { ChartCountry } from "../data/charts";`)).toBe(false);
  });
});
