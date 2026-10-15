import { worldShapes } from "../data/worldShapes";

/**
 * The world, for the figure-first link previews that carry a map (Job 6 ·
 * J6-4: the tour map's and the listeners'), as one SVG data URI the card
 * draws as an image.
 *
 * Satori lays out boxes and text only, so the map is pure geometry: the
 * shapes the page draws (data/worldShapes.ts, one projection, one file), each
 * filled in the colour the card gives it, with dots and leader lines over
 * them. Shapes of one colour share a single path, so the image the renderer
 * decodes carries each colour once. Any text that labels the map is the
 * card's own (Space Mono, laid out by Satori over the image), because the
 * renderer hands an SVG image no fonts.
 *
 * Its own module, not og-figure.tsx: the shapes are ~120 KB of path data,
 * and every other figure card would load them for nothing.
 */

/** A viewBox in map units: x, y, width, height. */
export type MapBox = readonly [number, number, number, number];

/** A dot, in map units. */
export interface MapDot {
  x: number;
  y: number;
  r: number;
  fill: string;
  /** Fill opacity, 0–1 (1 when absent). */
  opacity?: number;
  /** An edge, one image pixel wide. */
  stroke?: string;
}

/** A straight line, in map units: a label's leader to its dot. */
export interface MapLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke: string;
}

/**
 * The map as an SVG data URI, `px` image pixels wide over `view`. `fill`
 * gives each shape's colour by its ISO numeric code; null leaves it out.
 */
export function worldMap({
  view,
  px,
  fill,
  dots = [],
  lines = [],
}: {
  view: MapBox;
  px: number;
  fill: (code: number) => string | null;
  dots?: MapDot[];
  lines?: MapLine[];
}): string {
  const k = px / view[2]; // image px per map unit
  const byFill = new Map<string, string[]>();
  for (const s of worldShapes) {
    const f = fill(s.code);
    if (!f) continue;
    byFill.set(f, [...(byFill.get(f) ?? []), s.d]);
  }
  const paths = [...byFill].map(([f, ds]) => `<path fill="${f}" d="${ds.join("")}"/>`).join("");
  const edge = (1 / k).toFixed(3); // one image pixel, in map units
  const circles = dots
    .map(
      (d) =>
        `<circle cx="${d.x.toFixed(2)}" cy="${d.y.toFixed(2)}" r="${d.r.toFixed(2)}" fill="${d.fill}"` +
        (d.opacity !== undefined ? ` fill-opacity="${d.opacity}"` : "") +
        (d.stroke ? ` stroke="${d.stroke}" stroke-width="${edge}"` : "") +
        "/>",
    )
    .join("");
  const leaders = lines
    .map((l) => `<line x1="${l.x1.toFixed(2)}" y1="${l.y1.toFixed(2)}" x2="${l.x2.toFixed(2)}" y2="${l.y2.toFixed(2)}" stroke="${l.stroke}" stroke-width="${edge}"/>`)
    .join("");
  const h = Math.round((px * view[3]) / view[2]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${h}" viewBox="${view.join(" ")}">${paths}${circles}${leaders}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
