import { worldShapes, MAP_W, MAP_H } from "../../data/worldShapes";

/**
 * The replay's map shapes as one static SVG sprite: every shape in
 * app/data/worldShapes.ts, keyed `s<ISO numeric>`, built from that file at
 * deploy time so it can never drift from it.
 *
 * The replay under the takeover grid places these with <use href="…#s756">
 * in its world map and its Europe view. Kept out of the page itself because
 * the path data is ~120 KB of numbers that gzip poorly: inline, it doubled the
 * compressed HTML of the site's most-read page for a figure below the fold,
 * and it went out a second time in the page's hydration payload. As a file it
 * is fetched once, cached, and shared by /dai-dai and /dai-dai/es.
 *
 * vector-effect rides on each path so a stroke stays in screen pixels at any
 * zoom — the world map at 0.8 px a unit and the Europe crop at 3.4.
 */
export const dynamic = "force-static";

export function GET() {
  const paths = worldShapes.map((s) => `<path id="s${s.code}" d="${s.d}" vector-effect="non-scaling-stroke"/>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAP_W} ${MAP_H}"><defs>${paths}</defs></svg>`;
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
}
