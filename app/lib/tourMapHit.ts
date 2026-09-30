/**
 * Nearest tap and nearest click on the tour map (design response §4, item 9).
 *
 * A tap or click selects the nearest played country or dot when the tap is
 * within 22 SCREEN px of any played outline or dot, measured to a dot's edge
 * or a shape's outline, even if the tap lands on unplayed land. Distance
 * wins, so a tap on Congo or Burundi beside Rwanda, or on Togo beside Benin,
 * selects them: those are the cases the rule exists for. Only a tap beyond
 * 22 px of all of them dismisses.
 *
 * Everything here is in map units (the worldShapes viewBox); the caller turns
 * 22 px into units with the map's current scale, so the reach is a thumb's at
 * every view and on every screen. The listeners map does the same for its
 * dots (ListenerMap.tsx, `nearest`); shapes add the outline distance.
 */

export const HIT_PX = 22;

/** One shape's rings, each a flat [x0, y0, x1, y1, …] list. */
export interface HitShape {
  code: number;
  rings: number[][];
  /** Bounding box, to skip a shape that cannot beat the best so far. */
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}
export interface HitDot {
  code: number;
  x: number;
  y: number;
}

/** A worldShapes path ("M x,y L x,y … Z M …", absolute M/L/Z only) as rings. */
export function toHitShape(code: number, d: string): HitShape {
  const rings = d
    .split("M")
    .filter((r) => r.trim())
    .map((r) => r.replace(/Z/g, "").split("L").flatMap((p) => p.split(",").map(Number)));
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const r of rings)
    for (let i = 0; i + 1 < r.length; i += 2) {
      x0 = Math.min(x0, r[i]); x1 = Math.max(x1, r[i]);
      y0 = Math.min(y0, r[i + 1]); y1 = Math.max(y1, r[i + 1]);
    }
  return { code, rings, x0, y0, x1, y1 };
}

/** Even-odd inside test across all of a shape's rings (holes included). */
function inside(s: HitShape, x: number, y: number): boolean {
  let hit = false;
  for (const r of s.rings) {
    const n = r.length / 2;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const xi = r[2 * i], yi = r[2 * i + 1], xj = r[2 * j], yj = r[2 * j + 1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
    }
  }
  return hit;
}

/** Distance from a point to a shape's outline; 0 inside it. */
export function distanceToShape(s: HitShape, x: number, y: number): number {
  if (inside(s, x, y)) return 0;
  let best = Infinity;
  for (const r of s.rings) {
    const n = r.length / 2;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const ax = r[2 * j], ay = r[2 * j + 1], bx = r[2 * i], by = r[2 * i + 1];
      const dx = bx - ax, dy = by - ay;
      const len = dx * dx + dy * dy;
      const t = len ? Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / len)) : 0;
      best = Math.min(best, Math.hypot(x - (ax + t * dx), y - (ay + t * dy)));
    }
  }
  return best;
}

/**
 * The played country nearest a point, or null when none is within reach.
 *
 * @param reach  22 px in map units at the current scale
 * @param dotR   a dot's radius in map units at the current scale
 */
export function nearestPlayed(
  x: number,
  y: number,
  shapes: readonly HitShape[],
  dots: readonly HitDot[],
  reach: number,
  dotR: number,
): number | null {
  let best: number | null = null;
  let bestD = reach;
  // A dot's distance is to its edge, and it goes negative inside the dot,
  // so where two dots overlap (Barbados and Saint Lucia) the nearer centre
  // wins rather than whichever was drawn last.
  for (const d of dots) {
    const dist = Math.hypot(d.x - x, d.y - y) - dotR;
    if (dist < bestD) {
      bestD = dist;
      best = d.code;
    }
  }
  for (const s of shapes) {
    // A shape whose box is further than the best so far cannot win.
    const bx = Math.max(s.x0 - x, 0, x - s.x1), by = Math.max(s.y0 - y, 0, y - s.y1);
    if (Math.hypot(bx, by) > bestD) continue;
    const dist = distanceToShape(s, x, y);
    if (dist < bestD || (best === null && dist <= bestD)) {
      bestD = dist;
      best = s.code;
    }
  }
  return best;
}
