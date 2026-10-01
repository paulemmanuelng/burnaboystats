import { describe, it, expect } from "vitest";
import { worldShapes } from "../app/data/worldShapes";
import { performedCountries } from "../app/data/performedCountries";
import { projectEqualEarth } from "../app/lib/equalEarth";
import { HIT_PX, nearestPlayed, distanceToShape, toHitShape } from "../app/lib/tourMapHit";

/**
 * Nearest tap and nearest click (design response §4, item 9): within 22
 * SCREEN px of any played outline or dot, the nearest one is selected, even
 * over unplayed land; only a tap beyond 22px of all of them dismisses.
 *
 * The shipped map (PerformanceMap.tsx, until 30 Sep 2026) took only the
 * element under the pointer, so a tap on Togo beside Benin, or on the sea
 * 4px off Barbados, landed on nothing and closed the card (brief §3.2).
 */

const played = new Set(performedCountries.map((c) => c.code));
const shapes = worldShapes.filter((s) => played.has(s.code)).map((s) => toHitShape(s.code, s.d));
const dots = performedCountries.flatMap((c) => (c.marker ? [{ code: c.code, x: c.marker.x, y: c.marker.y }] : []));
const code = (name: string) => performedCountries.find((c) => c.name === name)!.code;

/** The shipped rule: the played shape under the point, or nothing. */
const underPointer = (x: number, y: number) => shapes.find((s) => distanceToShape(s, x, y) === 0)?.code ?? null;

// Desktop world view: 1158px over 900 units. Phone Africa view: 364px frame,
// 2.7 times the phone's world scale of 0.404.
const DESKTOP = 1158 / 900;
const PHONE_AFRICA = Math.min(364 / 191.9, 260 / 237.7);
const at = (k: number) => ({ reach: HIT_PX / k, dotR: 4 / k });

describe("a tap near a small place counts", () => {
  // A point on Togo (unplayed) just inside its eastern border, where Benin
  // begins: found from the shapes themselves, since Togo is under 5 units wide.
  const togo = toHitShape(768, worldShapes.find((s) => s.code === 768)!.d);
  const onTogo = (() => {
    const y = (togo.y0 + togo.y1) / 2;
    let x = togo.x0;
    for (let t = togo.x0; t <= togo.x1; t += 0.05) if (distanceToShape(togo, t, y) === 0) x = t;
    return { x: x - 0.1, y };
  })();

  it("a tap on Togo, beside Benin, selects Benin", () => {
    expect(distanceToShape(togo, onTogo.x, onTogo.y)).toBe(0); // on Togo
    expect(underPointer(onTogo.x, onTogo.y)).toBeNull(); // not inside any played country
    const { reach, dotR } = at(DESKTOP);
    expect(nearestPlayed(onTogo.x, onTogo.y, shapes, dots, reach, dotR)).toBe(code("Benin"));
  });

  it("negative control: the shipped rule, under the pointer only, selects nothing there", () => {
    expect(underPointer(onTogo.x, onTogo.y)).toBeNull();
  });

  it("a tap inside a country is that country", () => {
    const p = projectEqualEarth(8.0, 9.5); // central Nigeria
    const { reach, dotR } = at(PHONE_AFRICA);
    expect(nearestPlayed(p.x, p.y, shapes, dots, reach, dotR)).toBe(code("Nigeria"));
  });

  it("between Barbados and Saint Lucia, the nearer dot wins", () => {
    const bb = performedCountries.find((c) => c.name === "Barbados")!.marker!;
    const lc = performedCountries.find((c) => c.name === "Saint Lucia")!.marker!;
    const { reach, dotR } = at(DESKTOP);
    // A quarter of the way from Barbados to Saint Lucia.
    const x = bb.x + (lc.x - bb.x) * 0.25, y = bb.y + (lc.y - bb.y) * 0.25;
    expect(nearestPlayed(x, y, shapes, dots, reach, dotR)).toBe(code("Barbados"));
    const x2 = bb.x + (lc.x - bb.x) * 0.75, y2 = bb.y + (lc.y - bb.y) * 0.75;
    expect(nearestPlayed(x2, y2, shapes, dots, reach, dotR)).toBe(code("Saint Lucia"));
  });

  it("a tap beyond 22px of every played country dismisses", () => {
    const p = projectEqualEarth(-140, -40); // the South Pacific
    const { reach, dotR } = at(DESKTOP);
    expect(nearestPlayed(p.x, p.y, shapes, dots, reach, dotR)).toBeNull();
  });

  it("the reach is 22 screen px: a point 30px off Barbados misses, 15px off hits", () => {
    const bb = performedCountries.find((c) => c.name === "Barbados")!.marker!;
    const { reach, dotR } = at(DESKTOP);
    // Due east of Barbados: open sea, no other played place that way.
    expect(nearestPlayed(bb.x + (4 + 15) / DESKTOP, bb.y, shapes, dots, reach, dotR)).toBe(code("Barbados"));
    expect(nearestPlayed(bb.x + (4 + 30) / DESKTOP, bb.y, shapes, dots, reach, dotR)).toBeNull();
  });
});
