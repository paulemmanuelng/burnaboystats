import Link from "next/link";
import ListenerMap from "../../components/ListenerMap";
import MobileListeners from "../../components/MobileListeners";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import {
  listenerCities,
  listenerCountries,
  cityCount,
  listenerCountryCount,
  topCity,
  top50Listeners,
  mostCities,
  mostCitiesTie,
  nigeriaListeners,
  nigeriaCityCount,
  citiesOutsideAfrica,
  countryName,
  formatListeners,
  compactListeners,
  listenersReadOnLabel,
  MONTHLY_LISTENERS_ON_READ,
} from "../../data/listeners";
import styles from "./listeners.module.css";

export const metadata = pageMetadata({
  title: `Where the World Listens to Burna Boy — Top ${cityCount} Spotify Cities`,
  description: `The ${cityCount} cities with the most Burna Boy listeners on Spotify, mapped — ${listenerCountryCount} countries, ${topCity.city} first at ${compactListeners(topCity.listeners)} a month. Read ${listenersReadOnLabel}.`,
  path: "/music/listeners",
  shareTitle: "Where the World Listens to Burna Boy",
  shareDescription: `${cityCount} cities, ${listenerCountryCount} countries — ${topCity.city} first at ${compactListeners(topCity.listeners)} monthly listeners.`,
});

const dataset = datasetJsonLd({
  name: "Burna Boy's top Spotify cities by monthly listeners",
  description: `The ${cityCount} cities with the most Burna Boy monthly listeners on Spotify, with each city's count, as read on ${listenersReadOnLabel}.`,
  path: "/music/listeners",
  keywords: ["Burna Boy", "Spotify", "monthly listeners", "cities", "where people listen", "audience"],
  variableMeasured: ["City", "Country", "Monthly listeners"],
});

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const spell = (n: number) => WORDS[n] ?? String(n);
const pct = (n: number, of: number) => `${Math.round((n / of) * 100)}%`;

export default function ListenersPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />

      <MobileListeners />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/music/listeners" />

        <section className={`${styles.wrap} ${styles.head}`}>
          <div className={styles.kicker}>Spotify listeners</div>
          <h1 className={styles.title}>
            Where the world <span className="inkText">listens</span>
          </h1>
          <p className={styles.lede}>
            The {cityCount} cities with the most Burna Boy listeners on Spotify, each sized
            by its monthly count. {topCity.city} leads at {formatListeners(topCity.listeners)};{" "}
            {mostCities.name} places {spell(mostCities.cities.length)} cities in the {cityCount}
            {mostCitiesTie === 1 ? ", more than any other country" : ""}. Hover or tap a dot for
            the figure.
          </p>
          <div className={styles.counts}>
            <span className={styles.countBig}>{cityCount}</span>
            <span className={styles.countWord}>cities</span>
            <span className={styles.countRule} aria-hidden="true" />
            <span className={`${styles.countBig} ${styles.countBigPlain}`}>{listenerCountryCount}</span>
            <span className={styles.countWord}>countries</span>
            <span className={styles.countRule} aria-hidden="true" />
            <span className={`${styles.countBig} ${styles.countBigPlain}`}>{compactListeners(MONTHLY_LISTENERS_ON_READ)}</span>
            <span className={styles.countWord}>monthly listeners · {listenersReadOnLabel}</span>
          </div>
        </section>

        <figure className={`${styles.wrap} ${styles.figure}`}>
          <div className={styles.frame}>
            <ListenerMap />
          </div>
          <figcaption className={styles.legend}>
            <span className={styles.swatchDot} aria-hidden="true" />
            A city in the top {cityCount} — the dot&apos;s area is its monthly listeners
            <span className={styles.swatch} aria-hidden="true" />
            A country with at least one
          </figcaption>
        </figure>

        <section className={`${styles.wrap} ${styles.breakdown}`} aria-label="The fifty cities, ranked">
          <div className={styles.kicker}>The {cityCount}</div>
          <h2 className={styles.breakdownTitle}>
            Every city, ranked
          </h2>
          <ol className={styles.cityGrid}>
            {listenerCities.map((c) => (
              <li key={c.rank} className={styles.cityRow}>
                <span className={styles.cityRank}>{String(c.rank).padStart(2, "0")}</span>
                <span className={styles.cityName}>
                  <span aria-hidden="true">{c.flag} </span>
                  {c.city}{" "}
                  <span className={styles.cityCountry}>{countryName(c)}</span>
                </span>
                <span className={styles.cityBar} aria-hidden="true">
                  <span className={styles.cityBarFill} style={{ width: `${(c.listeners / topCity.listeners) * 100}%` }} />
                </span>
                <span className={styles.cityCount}>{formatListeners(c.listeners)}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${styles.wrap} ${styles.breakdown}`} aria-label="Cities by country">
          <div className={styles.kicker}>By country</div>
          <h2 className={styles.breakdownTitle}>
            {spell(listenerCountryCount)} countries in the {cityCount}
          </h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col" className={styles.numCol}>Cities</th>
                  <th scope="col" className={styles.numCol}>Listeners</th>
                  <th scope="col">Which</th>
                </tr>
              </thead>
              <tbody>
                {listenerCountries.map((c) => (
                  <tr key={c.code}>
                    <th scope="row" className={styles.regionCell}>
                      <span aria-hidden="true">{c.flag} </span>
                      {c.name}
                    </th>
                    <td className={styles.numCol}>{c.cities.length}</td>
                    <td className={styles.numCol}>{formatListeners(c.listeners)}</td>
                    <td className={styles.namesCell}>
                      {c.cities.map((x) => `${x.city} (${compactListeners(x.listeners)})`).join("   ·   ")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td className={styles.numCol}>{cityCount}</td>
                  <td className={styles.numCol}>{formatListeners(top50Listeners)}</td>
                  <td className={styles.tfootPlain}>
                    the {cityCount} cities together — {pct(top50Listeners, MONTHLY_LISTENERS_ON_READ)} of his{" "}
                    {compactListeners(MONTHLY_LISTENERS_ON_READ)} monthly listeners that day
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className={styles.note}>
            Nigeria&apos;s {spell(nigeriaCityCount)} cities hold {formatListeners(nigeriaListeners)} of the{" "}
            {formatListeners(top50Listeners)} in the {cityCount} — {pct(nigeriaListeners, top50Listeners)} — and{" "}
            {citiesOutsideAfrica} of the {cityCount} cities are outside Africa. Spotify publishes only an
            artist&apos;s top {cityCount} cities, so every country total here is a floor: a country&apos;s
            51st-ranked city and below are not counted. Monthly listeners are a rolling 28-day figure that
            moves every day; all {cityCount} rows were read together on {listenersReadOnLabel} from Spotify&apos;s
            own city counts as published by ChartMasters&apos; Artist Global Impact tool, and are that day&apos;s
            reading. Country shapes are Natural Earth 110m data (public domain); Singapore has no shape at that
            resolution and appears as a dot only.
          </p>
        </section>

        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/music" className="btn btnSecondary">
            ← Back to the music
          </Link>
          <Link href="/records/tours/map" className="btn btnPrimary">
            Where he&apos;s performed ↗
          </Link>
          <Link href="/live-charts" className="btn btnSecondary">
            Live charts ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
