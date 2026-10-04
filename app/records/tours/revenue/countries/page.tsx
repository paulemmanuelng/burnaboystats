import RevenueCountries from "../../../../components/RevenueCountries";
import MobileRevenueCountries from "../../../../components/MobileRevenueCountries";
import { nightsLabel, revenueByCountry, summaryLine, usdFull } from "../../../../lib/revenueByCountry";
import { REVENUE_READ_ON } from "../../../../lib/revenueSource";
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
    // The list is ordered by the COUNTRY's total, so the name prints it; the
    // leader's own total rides after it (C6, 3 Oct 2026: Ireland at No. 10
    // printed Burna Boy's $378,802 above the Philippines' $502,612).
    name: `${c.name} — ${usdFull(c.total)} reported; led by ${c.leader.artist} (${usdFull(c.leader.total)})`,
  })),
};

/** The day the board was last re-read, ISO 8601 — the same stamp the sitemap
 *  gives this route (app/sitemap.ts), so the two never disagree. */
const dateModified = REVENUE_READ_ON;

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
