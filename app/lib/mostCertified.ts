import type { Cert } from "../data/certifications";
import { badgeWeight } from "./certs";
import { artistSlug } from "./showsDeepLink";
import { count } from "./plural";

/**
 * The "Most certified" strip (design review 8 Oct 2026, Job 3 · J3-3; fixes
 * 68, 69): the top records of a certifications ledger, each linking to its
 * row. Pure — the pages pass the releases of the view the switches leave, so
 * the strip follows the switches (One Dance leaves Wizkid's strip when
 * featured appearances are off).
 */

export type StripRelease = { title: string; certs: readonly Cert[] };

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"] as const;

/** The release's single heaviest plaque (badgeWeight: market, then tier). */
const topWeight = (r: StripRelease) => Math.max(...r.certs.map(badgeWeight));

/**
 * Fix 68's order: plaques ↓, then the highest tier weight (`badgeWeight` of
 * the release's heaviest plaque) ↓, then title A–Z. Not `byMostCertified`
 * (lib/certs), which breaks a tie on the summed weight of every plaque.
 */
export function byStripOrder(a: StripRelease, b: StripRelease): number {
  return b.certs.length - a.certs.length || topWeight(b) - topWeight(a) || a.title.localeCompare(b.title, "en");
}

/** The first `n` of `releases` in fix 68's order (releases with no plaque left out). */
export function mostCertified<R extends StripRelease>(releases: readonly R[], n: number): R[] {
  return releases.filter((r) => r.certs.length > 0).sort(byStripOrder).slice(0, n);
}

/** "{n} certifications · {k} {best tier}" — "19 certifications · 2 Diamond". */
export function stripMeta(r: StripRelease): string {
  const best = TIERS.find((t) => r.certs.some((c) => c.level === t));
  const total = count(r.certs.length, "certification", "certifications");
  if (!best) return total;
  return `${total} · ${r.certs.filter((c) => c.level === best).length} ${best}`;
}

/** A ledger row's id: "row-song-dai-dai", "row-album-love-damini". The strip's
 *  cells link to it; CertExplorer puts it on the row. */
export const rowAnchor = (kind: "album" | "song", title: string) => `row-${kind}-${artistSlug(title)}`;
