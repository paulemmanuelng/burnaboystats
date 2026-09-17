import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  listenerCities,
  listenerCountries,
  cityCount,
  listenerCountryCount,
  top50Listeners,
  mostCities,
  listenerShapeCodes,
  LISTENERS_READ_ON,
  MONTHLY_LISTENERS_ON_READ,
} from "../app/data/listeners";
import { projectEqualEarth } from "../app/lib/equalEarth";
import { worldShapes, MAP_W, MAP_H } from "../app/data/worldShapes";
import { performedCountries } from "../app/data/performedCountries";

/**
 * "Where the world listens" is one day's reading of Spotify's top-50 cities,
 * replaced whole. These guards hold the list to that shape and hold the
 * projection to the map it draws on.
 */
describe("the top-50 listener cities", () => {
  it("is exactly the published list: fifty rows, ranks 1..50, listeners descending", () => {
    expect(cityCount).toBe(50);
    expect(listenerCities.map((c) => c.rank)).toEqual(Array.from({ length: 50 }, (_, i) => i + 1));
    for (let i = 1; i < listenerCities.length; i++)
      expect(listenerCities[i].listeners, `${listenerCities[i].city} above ${listenerCities[i - 1].city}`).toBeLessThan(listenerCities[i - 1].listeners);
    expect(new Set(listenerCities.map((c) => `${c.city}|${c.code}`)).size).toBe(50);
  });

  it("matches the raw capture the reading was made from, row for row", () => {
    const raw = JSON.parse(readFileSync(`docs/sourcing/chartmasters/reads/${LISTENERS_READ_ON}-cities.json`, "utf8"));
    expect(raw.readOn).toBe(LISTENERS_READ_ON);
    expect(raw.monthlyListeners).toBe(MONTHLY_LISTENERS_ON_READ);
    expect(raw.cities.map((c: any) => [c.rank, c.city, c.listeners])).toEqual(
      listenerCities.map((c) => [c.rank, c.city, c.listeners]),
    );
    // The tool's own headline for the list — derived here, stated there.
    expect(listenerCountryCount).toBe(raw.countriesInTop50);
  });

  it("derives what the pages print", () => {
    expect(listenerCountryCount).toBe(new Set(listenerCities.map((c) => c.code)).size);
    expect(top50Listeners).toBe(listenerCities.reduce((n, c) => n + c.listeners, 0));
    expect(listenerCountries.reduce((n, c) => n + c.cities.length, 0)).toBe(50);
    expect(listenerCountries.reduce((n, c) => n + c.listeners, 0)).toBe(top50Listeners);
    // sorted by listeners, and the "most cities" country really has the most
    for (let i = 1; i < listenerCountries.length; i++)
      expect(listenerCountries[i].listeners).toBeLessThanOrEqual(listenerCountries[i - 1].listeners);
    expect(Math.max(...listenerCountries.map((c) => c.cities.length))).toBe(mostCities.cities.length);
    expect(top50Listeners).toBeLessThan(MONTHLY_LISTENERS_ON_READ);
  });

  it("every city projects inside the map, and inside its own country's shape", () => {
    const bbox = (d: string) => {
      const pts = [...d.matchAll(/([\d.]+),([\d.]+)/g)].map((m) => [Number(m[1]), Number(m[2])]);
      return {
        x0: Math.min(...pts.map((p) => p[0])),
        x1: Math.max(...pts.map((p) => p[0])),
        y0: Math.min(...pts.map((p) => p[1])),
        y1: Math.max(...pts.map((p) => p[1])),
      };
    };
    const boxes = new Map<number, ReturnType<typeof bbox>[]>();
    for (const s of worldShapes) boxes.set(s.code, [...(boxes.get(s.code) ?? []), bbox(s.d)]);
    const problems: string[] = [];
    for (const c of listenerCities) {
      const { x, y } = projectEqualEarth(c.lon, c.lat);
      if (x < 0 || x > MAP_W || y < 0 || y > MAP_H) problems.push(`${c.city}: off the map at ${x},${y}`);
      if (!c.numeric) continue;
      const inside = (boxes.get(c.numeric) ?? []).some((b) => x >= b.x0 - 1 && x <= b.x1 + 1 && y >= b.y0 - 1 && y <= b.y1 + 1);
      if (!inside) problems.push(`${c.city}: ${x},${y} is outside ${c.country}'s shape (${c.numeric})`);
    }
    expect(problems).toEqual([]);
    // Singapore is the one city with no shape at 110m — the note on the page says so.
    expect(listenerCities.filter((c) => !c.numeric).map((c) => c.city)).toEqual(["Singapore"]);
    expect(listenerShapeCodes.size).toBe(listenerCountryCount - 1);
  });

  it("the projection reproduces the hand-placed island markers within 3 px", () => {
    // The fit's own reference points — if worldShapes.ts is ever re-projected,
    // this is what will fail first.
    const refs: Record<string, [number, number]> = { Mauritius: [57.55, -20.2], Kosovo: [21.0, 42.6], Curaçao: [-68.9, 12.2], Barbados: [-59.5, 13.1] };
    for (const c of performedCountries) {
      if (!c.marker || !refs[c.name]) continue;
      const { x, y } = projectEqualEarth(...refs[c.name]);
      expect(Math.hypot(x - c.marker.x, y - c.marker.y), c.name).toBeLessThan(3.2);
    }
  });

  it("the reading is dated ISO and the date is printed on both layouts", () => {
    expect(LISTENERS_READ_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const desktop = readFileSync("app/music/listeners/page.tsx", "utf8");
    const phone = readFileSync("app/components/MobileListeners.tsx", "utf8");
    const desktopHead = desktop.slice(desktop.indexOf("styles.head"), desktop.indexOf("styles.figure"));
    const phoneHero = phone.slice(phone.indexOf("styles.hero"), phone.indexOf("styles.mapCard"));
    expect(desktopHead, "desktop hero dates its figures").toContain("listenersReadOnLabel");
    expect(phoneHero, "phone hero dates its figures").toContain("listenersReadOnLabel");
    // The share surfaces carry a live figure (Lagos's count), so they carry the date too.
    const og = readFileSync("app/music/listeners/opengraph-image.tsx", "utf8");
    expect(og).toContain("listenersReadOnLabel");
    expect(desktop.slice(desktop.indexOf("shareDescription"), desktop.indexOf("shareDescription") + 200)).toContain("listenersReadOnLabel");
  });

  it("the map is a group of buttons, not an image, and the phone list sits under headings", () => {
    const map = readFileSync("app/components/ListenerMap.tsx", "utf8");
    expect(map).not.toContain('role="img"'); // an img role hides the 50 buttons from assistive tech
    expect(map).toContain('role="group"');
    const phone = readFileSync("app/components/MobileListeners.tsx", "utf8");
    expect((phone.match(/<h2\b/g) ?? []).length).toBe(2);
  });
});
