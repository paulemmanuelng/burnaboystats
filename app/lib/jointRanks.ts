/**
 * Places in a ranked list, ties sharing one (1, 1, 3), over values already
 * sorted high to low: a list that ties never invents an order the data does
 * not have. One rule for the /compare/in/<country> boards and their link
 * previews (app/lib/ogCountryCard.ts), so a page and its card cannot rank the
 * same tie two ways (live debug 15 Oct 2026, question 1).
 */
export function jointRanks(values: readonly number[]): number[] {
  return values.map((v) => values.indexOf(v) + 1);
}

/** The places as a board prints them: "=10" on every row that shares its
 *  value, "12" on a row that does not (hubTable's rankLabel, Africa's
 *  Biggest's "=n"). */
export function jointRankLabels(values: readonly number[]): string[] {
  const places = jointRanks(values);
  return values.map((v, i) => `${values.indexOf(v) !== values.lastIndexOf(v) ? "=" : ""}${places[i]}`);
}
