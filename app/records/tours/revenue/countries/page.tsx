import RevenueCountries from "../../../../components/RevenueCountries";
import MobileRevenueCountries from "../../../../components/MobileRevenueCountries";
import { nightsLabel, revenueByCountry, summaryLine, usdFull } from "../../../../lib/revenueByCountry";
import { REVENUE_AS_OF } from "../../../../data/tourRevenue";
import { pageMetadata, datasetJsonLd } from "../../../../lib/seo";

/**
 * /records/tours/revenue/countries — who leads every country and continent for
 * reported box office by African artists.
 *
 * Nothing here is typed: countries, continents, leaders, counts and totals all
 * come from the revenue board's rows through app/lib/revenueByCountry.ts, so
 * the page follows the board as shows are reported.
 */

const PATH = "/records/tours/revenue/countries";
const board = revenueByCountry();
const { countryCount, hisLeads } = board;

const summary = summaryLine(board);
const lede = `Every reported box-office gross by an African artist, added up country by country — ${summary}. Burna Boy leads ${hisLeads} of the ${countryCount}.`;

export const metadata = pageMetadata({
  title: "Highest-Grossing African Artists by Country",
  description: `Who leads every country and continent for reported box office by African artists — ${nightsLabel(board.showCount)} in ${countryCount} countries, totals and best nights.`,
  path: PATH,
  shareTitle: "Highest-grossing African artists by country",
  shareDescription: `Who leads each of ${countryCount} countries for reported box office by African artists. Burna Boy leads ${hisLeads}.`,
});

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Highest-grossing African artists by country — reported box office",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: board.countries.length,
  itemListElement: board.countries.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — ${c.leader.artist}, ${usdFull(c.leader.total)} reported`,
  })),
};

/** "September 2026" → "2026-09": the board's re-read month, as ISO 8601. */
const asOf = new Date(`1 ${REVENUE_AS_OF} 12:00 UTC`);
const dateModified = Number.isNaN(asOf.getTime())
  ? undefined
  : `${asOf.getUTCFullYear()}-${String(asOf.getUTCMonth() + 1).padStart(2, "0")}`;

const dataset = datasetJsonLd({
  name: "Reported box office by country — African artists",
  description: `Reported box-office grosses by African artists summed by country and continent — ${summary} — with each artist's total and best single night.`,
  path: PATH,
  keywords: ["Burna Boy", "box office", "by country", "African artist revenue", "touring revenue", "Boxscore"],
  variableMeasured: ["Country", "Continent", "Artist", "Total reported gross", "Reported nights", "Best single night"],
  dateModified,
});

export default function RevenueCountriesPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <MobileRevenueCountries board={board} lede={lede} />
      <RevenueCountries board={board} lede={lede} path={PATH} />
    </main>
  );
}
