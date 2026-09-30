/**
 * `?country=` on the tour map (design response §5 "Deep links", item 76).
 *
 * Read in the browser, so the page stays static:
 * - a played country ("gb", or "uk", the charts' spelling of it): that
 *   country selected;
 * - a real country with no documented show ("pe"): nothing selected, and one
 *   line where the card or panel would be, "No documented show in Peru.";
 * - anything else ("xx"): as if there were no parameter, and the parameter is
 *   dropped from the address.
 *
 * "Real" is the browser's own region list (Intl.DisplayNames), less the codes
 * it names that are not countries: the EU and the eurozone, the UN, "Unknown
 * Region", the pseudo-locales, and the exceptionally reserved codes for
 * Ascension, Clipperton, Diego Garcia, Ceuta and Melilla, the Canaries and
 * Tristan da Cunha.
 */

const NOT_A_COUNTRY = new Set(["AC", "CP", "DG", "EA", "EU", "EZ", "IC", "QO", "TA", "UN", "XA", "XB", "ZZ"]);
const ALIAS: Record<string, string> = { uk: "gb" };

export type CountryParam =
  | { kind: "played"; a2: string }
  | { kind: "unplayed"; a2: string; name: string }
  | { kind: "invalid" }
  | null;

/** The English name of a real country's alpha-2 code, or null. */
export function countryNameOf(a2: string): string | null {
  const code = a2.toUpperCase();
  if (!/^[A-Z]{2}$/.test(code) || NOT_A_COUNTRY.has(code)) return null;
  try {
    const name = new Intl.DisplayNames(["en"], { type: "region", fallback: "none" }).of(code);
    return name && name !== code ? name : null;
  } catch {
    return null;
  }
}

export function readCountryParam(search: string, played: readonly { a2: string }[]): CountryParam {
  const raw = new URLSearchParams(search).get("country");
  if (raw === null) return null;
  const v = raw.trim().toLowerCase();
  const a2 = ALIAS[v] ?? v;
  if (played.some((c) => c.a2 === a2)) return { kind: "played", a2 };
  const name = countryNameOf(a2);
  return name ? { kind: "unplayed", a2, name } : { kind: "invalid" };
}

/** The current address with ?country= set to `a2`, or removed (null). */
export function withCountry(href: string, a2: string | null): string {
  const url = new URL(href);
  if (a2) url.searchParams.set("country", a2);
  else url.searchParams.delete("country");
  return url.pathname + url.search + url.hash;
}
