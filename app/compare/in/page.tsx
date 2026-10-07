import type { Metadata } from "next";
import { CompareView } from "../page";
import { pageMetadata } from "../../lib/seo";
import { countryIndexCopy } from "../../lib/certCountry";

/**
 * /compare/in — every market the board is certified in, ranked.
 *
 * The country mode's arrival state as a page of its own, so the 27 country
 * boards have a crawlable index and the breadcrumb under them reads
 * Compare / By country / Canada rather than skipping a level. Its words are
 * countryIndexCopy's, which /compare?mode=country reads as well.
 */
export const metadata: Metadata = pageMetadata({ ...countryIndexCopy(), path: "/compare/in" });

export default async function CountryIndexPage() {
  return CompareView({ sp: { mode: "country" }, path: "/compare/in" });
}
