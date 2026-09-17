// Equal Earth projection (Šavrič, Patterson & Jenny, 2018) — the same one the
// site's world map was drawn with (data/worldShapes.ts: d3-geo geoEqualEarth,
// Natural Earth 110m, 900 × 470). The shapes ship as static paths and the site
// carries no mapping dependency, so a point that has to land ON those shapes —
// a city, an island marker — is projected here with the same formula.
//
// SCALE AND TRANSLATE were fitted, not copied: the generator was not kept, so
// the three constants below are the least-squares fit of the projection to the
// four island markers hand-placed in data/performedCountries.ts (Mauritius,
// Kosovo, Curaçao, Barbados) — residual under 3 px, and Lagos, London, Sydney
// and New York all land inside their countries' paths. Regenerate the fit if
// worldShapes.ts is ever re-projected.
const A1 = 1.340264;
const A2 = -0.081106;
const A3 = 0.000893;
const A4 = 0.003796;
const SCALE = 167.8786;
const TX = 448.6977;
const TY = 235.3565;

/** Map-space x/y (the worldShapes viewBox) for a longitude/latitude in degrees. */
export function projectEqualEarth(lon: number, lat: number): { x: number; y: number } {
  const l = (lon * Math.PI) / 180;
  const p = (lat * Math.PI) / 180;
  const th = Math.asin((Math.sqrt(3) / 2) * Math.sin(p));
  const t2 = th * th;
  const t6 = t2 * t2 * t2;
  const x = (2 * Math.sqrt(3) * l * Math.cos(th)) / (3 * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)));
  const y = th * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
  return { x: +(SCALE * x + TX).toFixed(1), y: +(TY - SCALE * y).toFixed(1) };
}
