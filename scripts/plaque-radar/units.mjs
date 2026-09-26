// Tier arithmetic and the unit-rate projection. Pure — no data files, no
// network — so tests/plaqueRadar.test.ts can pin every number on fixtures.
//
// A "ladder" is one body's TierUnits for one format, exactly as
// app/data/certThresholds.ts writes it: { silver, gold, platinum, diamond },
// null where the body awards no such tier. The radar never types a threshold:
// index.mjs reads them from that file and hands them in.

const DAY = 86_400_000;
const ORDER = ["Silver", "Gold", "Platinum", "Diamond"];

/** Days between two ISO dates (b - a). */
export const daysBetween = (a, b) => Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / DAY);
export const weeksBetween = (a, b) => daysBetween(a, b) / 7;

/** Units a tier stands for: a 3x Platinum single at the BPI is 3 x 600,000. */
export function unitsOf(ladder, tier) {
  if (!ladder || !tier) return 0;
  const base = ladder[tier.level.toLowerCase()];
  if (base == null) return null;
  return base * (tier.level === "Platinum" || tier.level === "Diamond" ? tier.x ?? 1 : 1);
}

/** "Platinum", "2× Platinum", "Silver" … */
export function tierLabel(tier) {
  if (!tier) return "none";
  return (tier.x ?? 1) > 1 ? `${tier.x}× ${tier.level}` : tier.level;
}

/** The higher of two tiers on this ladder (either may be null). */
export function maxTier(ladder, a, b) {
  if (!a) return b ?? null;
  if (!b) return a;
  return (unitsOf(ladder, b) ?? 0) > (unitsOf(ladder, a) ?? 0) ? b : a;
}

/**
 * The next tier up. No plaque -> the ladder's first tier. Silver -> Gold ->
 * Platinum -> 2x Platinum … and where the body awards a Diamond, the step
 * that would reach its units becomes Diamond instead.
 */
export function nextTier(ladder, tier) {
  if (!ladder) return null;
  if (!tier) {
    const first = ORDER.find((l) => ladder[l.toLowerCase()] != null);
    return first ? { level: first, x: 1 } : null;
  }
  if (tier.level === "Silver" || tier.level === "Gold") {
    const after = ORDER.slice(ORDER.indexOf(tier.level) + 1).find((l) => ladder[l.toLowerCase()] != null);
    return after ? { level: after, x: 1 } : null;
  }
  if (tier.level === "Platinum") {
    const x = (tier.x ?? 1) + 1;
    if (ladder.diamond != null && ladder.platinum * x >= ladder.diamond) return { level: "Diamond", x: 1 };
    return { level: "Platinum", x };
  }
  return { level: "Diamond", x: (tier.x ?? 1) + 1 };
}

/**
 * Collapse a title's dated certifications into an increasing staircase:
 * one step per unit level (the EARLIEST date it was seen at), dropping any
 * step that is not above everything dated before it — a transcription that
 * lists a lower tier after a higher one is noise, not a fall.
 */
export function staircase(ladder, dated) {
  const byUnits = new Map();
  for (const d of dated) {
    const u = unitsOf(ladder, d);
    if (!u || !d.date) continue;
    const had = byUnits.get(u);
    if (!had || d.date < had.date) byUnits.set(u, { date: d.date, units: u, level: d.level, x: d.x ?? 1, source: d.source });
  }
  const steps = [...byUnits.values()].sort((a, b) => a.date.localeCompare(b.date) || a.units - b.units);
  const out = [];
  for (const s of steps) {
    if (out.length && s.units <= out[out.length - 1].units) continue;
    if (out.length && s.date === out[out.length - 1].date) out.pop();
    out.push(s);
  }
  return out;
}

/**
 * The weekly unit rate between two dated steps, and what it projects today.
 *
 *   rate      = (units at step B − units at step A) / weeks from A to B
 *   projected = units at the LAST step + rate × weeks since the last step
 *
 * The pair used is the most recent one at least `minWeeks` apart (a Silver
 * and a Gold one week apart say little about a pace). With a release date
 * and a single step, the release counts as a step at zero units — a lifetime
 * average, which flatters an older title and is marked `fromRelease`.
 *
 * Returns null when there is no usable pair.
 */
export function project(steps, asOf, { releaseDate, minWeeks = 2 } = {}) {
  let pts = steps.slice();
  let fromRelease = false;
  if (pts.length === 1 && releaseDate && releaseDate < pts[0].date) {
    pts = [{ date: releaseDate, units: 0, level: null, x: 0, source: "release date" }, ...pts];
    fromRelease = true;
  }
  if (pts.length < 2) return null;
  const last = pts[pts.length - 1];
  let prev = null;
  for (let i = pts.length - 2; i >= 0; i--) {
    if (weeksBetween(pts[i].date, last.date) >= minWeeks) {
      prev = pts[i];
      break;
    }
  }
  if (!prev) return null;
  const weeks = weeksBetween(prev.date, last.date);
  const rate = (last.units - prev.units) / weeks;
  const since = Math.max(0, weeksBetween(last.date, asOf));
  // The pace before the pair used, where there is one — a falling pace means
  // the straight-line projection is generous.
  let earlierRate = null;
  const pi = pts.indexOf(prev);
  if (pi > 0 && !fromRelease) {
    const w = weeksBetween(pts[pi - 1].date, prev.date);
    if (w >= minWeeks) earlierRate = (prev.units - pts[pi - 1].units) / w;
  }
  return {
    from: prev,
    to: last,
    weeks,
    rate,
    since,
    projected: Math.round(last.units + rate * since),
    earlierRate,
    fromRelease,
  };
}

/**
 * Where a projection lands against the next tier.
 *   ratio   projected / units of the next tier (1 or more = reached)
 *   margin  projected − next units (negative = short by that much)
 *   weeksToGo  weeks still needed at the same pace (0 when reached)
 */
export function against(projection, nextUnits) {
  if (!projection || !nextUnits) return null;
  const margin = projection.projected - nextUnits;
  return {
    ratio: projection.projected / nextUnits,
    margin,
    weeksToGo: margin >= 0 ? 0 : projection.rate > 0 ? Math.ceil(-margin / projection.rate) : Infinity,
  };
}
