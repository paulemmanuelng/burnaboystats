import type { Metadata } from "next";
import { CompareView } from "../page";
import { pageMetadata } from "../../lib/seo";
import { certCountryCodes } from "../../lib/certCountry";

/**
 * /compare/in — every market the board is certified in, ranked.
 *
 * The country mode's arrival state as a page of its own, so the 27 country
 * boards have a crawlable index and the breadcrumb under them reads
 * Compare / By country / Canada rather than skipping a level.
 */
export const metadata: Metadata = pageMetadata({
  title: "Certified Units by Country — Afrobeats Artists",
  // Not "every plaque priced at that country's own body's threshold": Greece's
  // are priced at IFPI's June 2013 level and Colombia's not at all, as their
  // own pages say (debug pass, 5 Oct 2026).
  description:
    `Where Afrobeats is certified: ${certCountryCodes().length} markets, each plaque priced at the threshold its country page names, artists ranked market by market.`,
  path: "/compare/in",
  shareTitle: "Certified units by country",
  shareDescription: "One market, every artist — priced market by market.",
});

export default async function CountryIndexPage() {
  return CompareView({ sp: { mode: "country" }, path: "/compare/in" });
}
