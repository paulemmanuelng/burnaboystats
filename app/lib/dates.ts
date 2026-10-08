/**
 * The site's short month, "Sep" — never "Sept".
 *
 * Node's ICU (78) and current browsers print September's short form in en-GB
 * as "Sept" ("30 Sept"), while every other month is three letters and the
 * site's own typed dates, chart weeks and stamps write "Sep" ("17 to 24 Sep
 * 2026", "Sep 2023"). So a September stamp came out one way from a formatter
 * and the other from the prose beside it: /updates' phone list printed 90
 * "NN Sept" lines on 5 Oct 2026 (core-19). Every en-GB short-month formatter
 * goes through here.
 */
export const noSept = (s: string): string => s.replace(/\bSept\b/g, "Sep");

/** `Date#toLocaleDateString("en-GB", opts)`, with September as "Sep". */
export const enGbDate = (d: Date, opts: Intl.DateTimeFormatOptions): string =>
  noSept(d.toLocaleDateString("en-GB", opts));

/** "5 Oct 2026" — an ISO day as the site stamps it (UTC, short month). */
export const shortStamp = (iso: string): string =>
  enGbDate(new Date(`${iso}T12:00:00Z`), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/**
 * The provenance component's one date format (design review 8 Oct 2026,
 * J0-13): a day prints "7 Oct 2026" (shortStamp), a month the data records
 * without a day prints "Oct 2026", after "As of" (or "as of" inside a
 * sentence). Long-form dates inside prose ("7 October 2026") are copy, not
 * this format. The component formats through provDateText and sentenceDate
 * (app/lib/provenance.ts), the one place that picks between the two.
 */

/** "Oct 2026": a month the data records without a day (UTC, "Sep" never "Sept"). */
export const monthStamp = (ym: string): string => {
  if (!/^\d{4}-\d{2}$/.test(ym)) throw new Error(`monthStamp: not YYYY-MM: ${ym}`);
  return enGbDate(new Date(`${ym}-15T12:00:00Z`), { month: "short", year: "numeric", timeZone: "UTC" });
};
