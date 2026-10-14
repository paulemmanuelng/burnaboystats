import type { ComparisonRow } from "./certUnits";

/**
 * The derived summary above a pair's table (design review 8 Oct 2026, J2-5
 * and fix 35): how many priced markets each side leads, how many are level,
 * and which markets on the page are listed but never priced.
 *
 * It counts MARKETS, the table's rows: the United States and its RIAA Latin
 * line are two (engine rule 5), so the count can differ from the header's
 * "Country · N", which counts countries. And it counts EVERY market, the
 * folded tail included: the shipped table's rows alone gave Burna Boy vs
 * Wizkid "10 of the 23", where the pair holds 27 priced markets and he leads
 * 14 of them. The caller passes the rows and the fold together.
 *
 * A market is priced when either side's line there is counted; a side's value
 * is its counted units, or 0 when it holds nothing priced there. A listed-only
 * market (Colombia, whose body publishes no threshold) is priced by nobody and
 * leads nowhere. Nothing is typed: every number is read off the rows.
 */
export type MarketSummary = { a: number; b: number; level: number; priced: number };

export function marketSummary(rows: ComparisonRow[]): MarketSummary {
  let a = 0;
  let b = 0;
  let level = 0;
  for (const r of rows) {
    const ca = r.a?.counted ? r.a.units : null;
    const cb = r.b?.counted ? r.b.units : null;
    if (ca === null && cb === null) continue;
    const va = ca ?? 0;
    const vb = cb ?? 0;
    if (va > vb) a++;
    else if (vb > va) b++;
    else level++;
  }
  return { a, b, level, priced: a + b + level };
}

/** The markets on the page that hold a certification and are priced by
 *  nobody, as their names: "Colombia". A row never folds while it carries an
 *  unpriced line (certUnits rule 2), so the rows on screen hold every one. */
export const listedOnly = (rows: ComparisonRow[]) => rows.filter((r) => !r.a?.counted && !r.b?.counted);

/**
 * Fix 35's sentence, in its parts: the lead clause the page sets in bold,
 * then the rest. "{A} leads {a} of the {m} priced markets" + "; {B} leads
 * {b}[; {t} level]". The listed-only clause (". Colombia is listed, not
 * priced ¹") and the closing stop are the page's, because the mark is markup.
 */
export function summaryWords(nameA: string, nameB: string, s: MarketSummary): { lead: string; rest: string } {
  return {
    lead: `${nameA} leads ${s.a} of the ${s.priced} priced ${s.priced === 1 ? "market" : "markets"}`,
    rest: `; ${nameB} leads ${s.b}${s.level > 0 ? `; ${s.level} level` : ""}`,
  };
}

/** "Colombia", "Colombia and Mexico", "Colombia, Mexico and Peru". */
export const joinListed = (names: string[]) =>
  names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
