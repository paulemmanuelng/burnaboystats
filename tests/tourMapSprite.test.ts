import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { GET } from "../app/dai-dai/replay-map.svg/route";
import { worldShapes } from "../app/data/worldShapes";
import { SPRITE } from "../app/components/TourMapSvg";
import { tourMapProps } from "../app/lib/tourMapData";

/**
 * The tour map draws from the site's one static map sprite, the file the
 * Dai Dai replay already ships (app/dai-dai/replay-map.svg), placed by <use>.
 * Until 30 Sep 2026 the tour map inlined the full path data twice (once per
 * layout, 272 KB of a 351 KB page) and a third time in its JS; the design
 * response's speed rule is "no second full map" (item 8). So every shape the
 * tour map asks for must be in that sprite, and the page must not carry the
 * path data itself.
 */
describe("the tour map's shapes come from the shared sprite", () => {
  it("the sprite serves every shape the map places, by its s<code> id", async () => {
    const svg = await GET().text();
    const ids = new Set([...svg.matchAll(/id="s(\d+)"/g)].map((m) => Number(m[1])));
    const wanted = [...tourMapProps.land, ...tourMapProps.countries.filter((c) => !c.dot).map((c) => c.code)];
    expect(wanted.filter((c) => !ids.has(c))).toEqual([]);
    expect(ids.size).toBe(worldShapes.length);
    expect(SPRITE).toBe("/dai-dai/replay-map.svg");
  });

  it("the land and the played countries together are every shape, once", () => {
    const drawn = [...tourMapProps.land, ...tourMapProps.countries.filter((c) => !c.dot).map((c) => c.code)];
    expect(new Set(drawn).size).toBe(drawn.length);
    expect(drawn.length).toBe(worldShapes.length);
  });

  it("no tour-map component imports the path data into the page", () => {
    for (const f of ["app/components/TourMapSvg.tsx", "app/components/TourMapDesktop.tsx", "app/components/MobileTourMap.tsx", "app/records/tours/map/page.tsx"]) {
      expect(readFileSync(f, "utf8"), f).not.toMatch(/from\s+"[^"]*data\/worldShapes"/);
    }
  });

  it("negative control: the shipped PerformanceMap imported the full shape list", () => {
    const shipped = 'import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";';
    expect(shipped).toMatch(/from\s+"[^"]*data\/worldShapes"/);
  });
});
