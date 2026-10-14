/**
 * A pair page's one line under the h1 (design review 8 Oct 2026, J2-3 and
 * fix 45): who holds more certifications, by how much, and whose are worth
 * more units. "Burna Boy holds twice the certifications (179 vs 88); Wizkid's
 * are worth more units."
 *
 * The counts are every certification each side HOLDS under the page's own
 * switches — priced plus not comparable (pricedPlaques + excludedPlaques), so
 * Burna Boy's unpriced Colombian single counts: 179, not the 178 the head
 * counts as priced. The units are the two totals the head prints. Nothing is
 * typed: every number in the sentence is an argument.
 *
 * With more and fewer the two counts:
 * - more ÷ fewer in [1.95, 2.05) → "twice the certifications";
 * - from 2.05 → "{r}× the certifications", r to a tenth below 10 and whole
 *   from 10 (the verdict's own rounding: "1,848×", "3.8×");
 * - lower → "more certifications";
 * - equal → "Both hold {n} certifications".
 * Then ", and they are worth more units" when the side holding more also
 * leads on units, "; {other}'s are worth more units" when it trails, and
 * "; their units are level" when neither leads. The band edges are compared
 * in whole numbers, so 39 against 20 is twice and 41 against 20 is 2.1×,
 * never a float's 2.0499….
 *
 * "Certifications", not the fix's "plaques": the site's one noun since Copy 2
 * (B-10), as every other count on this page reads.
 */
export type PairLineInput = {
  nameA: string;
  nameB: string;
  /** Every certification each side holds under the page's switches: priced + not comparable. */
  plaquesA: number;
  plaquesB: number;
  /** The two certified-unit totals. */
  totalA: number;
  totalB: number;
};

const fmt = (n: number) => n.toLocaleString("en-US");
/** "Wizkid's", "Tems'": the page's own possessive. */
const possessive = (n: string) => (n.endsWith("s") ? `${n}'` : `${n}'s`);
const certs = (n: number) => (n === 1 ? "certification" : "certifications");

/** more ÷ fewer as the sentence prints it, rounded in whole numbers: a tenth below 10, whole from 10. */
function ratioWords(more: number, fewer: number): string {
  const tenths = Math.round((more * 10) / fewer);
  // 9.96 rounds to ten: whole, as from 10.
  if (more >= fewer * 10 || tenths >= 100) return fmt(Math.round(more / fewer));
  return `${Math.floor(tenths / 10)}.${tenths % 10}`;
}

export function pairLine({ nameA, nameB, plaquesA, plaquesB, totalA, totalB }: PairLineInput): string {
  const unitsLeader = totalA > totalB ? nameA : totalB > totalA ? nameB : null;
  if (plaquesA === plaquesB) {
    return `Both hold ${fmt(plaquesA)} ${certs(plaquesA)}; ${unitsLeader ? `${possessive(unitsLeader)} are worth more units` : "their units are level"}.`;
  }
  const aHolds = plaquesA > plaquesB;
  const [holder, other] = aHolds ? [nameA, nameB] : [nameB, nameA];
  const [more, fewer] = aHolds ? [plaquesA, plaquesB] : [plaquesB, plaquesA];
  const how =
    fewer > 0 && more * 100 >= fewer * 205
      ? `${ratioWords(more, fewer)}× the certifications`
      : fewer > 0 && more * 100 >= fewer * 195
        ? "twice the certifications"
        : "more certifications";
  const units = unitsLeader === holder ? ", and they are worth more units" : unitsLeader === other ? `; ${possessive(other)} are worth more units` : "; their units are level";
  return `${holder} holds ${how} (${fmt(more)} vs ${fmt(fewer)})${units}.`;
}
