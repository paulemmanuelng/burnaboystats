import BreadcrumbBar from "../../../components/BreadcrumbBar";
import MobileTourMap from "../../../components/MobileTourMap";
import TourMapDesktop from "../../../components/TourMapDesktop";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";
import { countryCount, regionCount } from "../../../data/performedCountries";
import TourMapText from "../../../components/TourMapText";
import { tourMapProps } from "../../../lib/tourMapData";
import { TOURS_EDITED_ON } from "../../../data/tours";
import { REVENUE_STAMP } from "../../../lib/revenueSource";
import styles from "./map.module.css";

export const metadata = pageMetadata({
  title: "Where Burna Boy Has Performed — Interactive World Map",
  description: `An interactive map of every country Burna Boy has performed in — ${countryCount} countries across ${regionCount} regions. Hover a country to see the shows there.`,
  path: "/records/tours/map",
  shareTitle: "Where Burna Boy Has Performed",
  shareDescription: `Every country he's taken to the stage — ${countryCount} and counting.`,
});

const dataset = datasetJsonLd({
  name: "Countries where Burna Boy has performed live",
  description: `Every country Burna Boy has performed in live — ${countryCount} countries across ${regionCount} regions, from tours, festivals and one-off shows.`,
  path: "/records/tours/map",
  keywords: ["Burna Boy", "tour", "countries performed", "live performances", "concerts", "festivals"],
  variableMeasured: ["Country", "Region", "Notable performances"],
  // The later of the tour data's last edit and the box-office board's read —
  // the sitemap's lastmod for this route (D-04, 4 Oct 2026).
  dateModified: [TOURS_EDITED_ON, REVENUE_STAMP].sort().at(-1)!,
});

/**
 * Held before first paint: on a ?country= visit the phone panel's space is
 * reserved (mobileTourMap.module.css, html[data-tm-deep]), because the page
 * is static and reads the parameter only in the browser (item 76).
 */
const RESERVE_PANEL = 'if(/[?&]country=/.test(location.search))document.documentElement.setAttribute("data-tm-deep","")';

export default function PerformanceMapPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <script dangerouslySetInnerHTML={{ __html: RESERVE_PANEL }} />

      {/* Two separate layouts, split at 900px (owner rule 1): the phone
          screen (region views, the panel in the flow) and the desktop page
          (the whole map on the first screen, the close-up, the card inside
          the frame). */}
      <MobileTourMap data={tourMapProps} />

      <div className={styles.desktopOnly}>
        {/* The first stop inside the main content, ahead of the breadcrumb
            and the map (item 14). The site's own "Skip to content" stays the
            first Tab on the page. The phone has its own. */}
        <a href="#country-list" className={styles.skip}>
          Skip to country list
        </a>
        <BreadcrumbBar path="/records/tours/map" />
        <TourMapDesktop data={tourMapProps} />
      </div>

      <TourMapText countries={tourMapProps.countries} itinerariesFrom={tourMapProps.totals.itinerariesFrom} />
    </main>
  );
}
