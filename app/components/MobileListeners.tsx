import Link from "next/link";
import styles from "./mobileListeners.module.css";
import ListenerMap from "./ListenerMap";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import {
  listenerCities,
  listenerCountries,
  cityCount,
  listenerCountryCount,
  topCity,
  top50Listeners,
  mostCities,
  mostCitiesTie,
  countryName,
  formatListeners,
  compactListeners,
  listenersReadOnLabel,
  MONTHLY_LISTENERS_ON_READ,
  nigeriaListeners,
  nigeriaCityCount,
  citiesOutsideAfrica,
  nycWithBrooklyn,
  pctOf,
  spell,
} from "../data/listeners";

/**
 * The mobile "where the world listens" screen.
 *
 * The same shape as the tour-map screen (MobileTourMap, design screen 20):
 * the map in a small framed card, then the data as stacked rows rather than a
 * table — here the fifty cities ranked, then the countries. The list is not
 * decoration: fifty dots on a phone-width world overlap (Brooklyn sits on New
 * York; eight German cities share a corner of Europe), so the ranked rows are
 * the accessible reading for anyone who can't work a pinch-zoom.
 */
export default function MobileListeners() {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/music" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Listeners</span>
        <span className={styles.badge}>{cityCount} cities</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Spotify listeners</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. */}
        <h1 className={styles.title}>
          Where the world <span className={styles.gold}>listens</span>
        </h1>
        <p className={styles.lede}>
          His {cityCount} biggest cities on Spotify, in {listenerCountryCount} countries — {topCity.city} first at{" "}
          {formatListeners(topCity.listeners)} a month. {mostCities.name} places {spell(mostCities.cities.length)} of the{" "}
          {cityCount}{mostCitiesTie === 1 ? ", more than anywhere else" : ""}. Read {listenersReadOnLabel}.
        </p>
      </div>

      {/* Map */}
      <div className={styles.mapCard}>
        <div className={styles.mapInner}>
          <ListenerMap />
        </div>
        <p className={styles.mapHint}>
          Each dot is a city, sized by its monthly listeners; a tap near one shows its
          figure. The list below is the same {cityCount} in order, each with its count.
        </p>
      </div>

      {/* The fifty */}
      <div className={styles.sectionHead}>
        <h2 id="m-the-fifty" className={styles.sectionKicker}>The {cityCount}</h2>
        <span className={styles.sectionNote}>read {listenersReadOnLabel}</span>
      </div>
      <ol className={styles.cities} role="list" aria-labelledby="m-the-fifty">
        {listenerCities.map((c) => (
          <li key={c.rank} className={styles.city}>
            <span className={styles.cityRank}>{String(c.rank).padStart(2, "0")}</span>
            <span className={styles.cityName}>
              <span aria-hidden="true">{c.flag} </span>
              {c.city}{" "}
              <span className={styles.cityCountry}>{countryName(c)}</span>
            </span>
            <span className={styles.cityCount}>{compactListeners(c.listeners)}</span>
          </li>
        ))}
      </ol>

      {/* By country */}
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionKicker}>By country</h2>
        <span className={styles.sectionNote}>{listenerCountryCount} in the {cityCount}</span>
      </div>
      <div className={styles.regions}>
        {listenerCountries.map((r) => (
          <div key={r.code} className={styles.region}>
            <div className={styles.regionTop}>
              <span className={styles.regionName}>
                <span aria-hidden="true">{r.flag} </span>
                {r.name}
              </span>
              <span className={styles.regionCount}>{formatListeners(r.listeners)}</span>
            </div>
            <p className={styles.regionList}>
              {r.cities.map((c) => `${c.city} ${compactListeners(c.listeners)}`).join(" · ")}
            </p>
          </div>
        ))}
      </div>

      <p className={styles.footNote}>
        The {cityCount} cities hold {formatListeners(top50Listeners)} of his{" "}
        {compactListeners(MONTHLY_LISTENERS_ON_READ)} monthly listeners on {listenersReadOnLabel} —{" "}
        {pctOf(top50Listeners, MONTHLY_LISTENERS_ON_READ)}. Nigeria&apos;s {spell(nigeriaCityCount)} cities hold{" "}
        {formatListeners(nigeriaListeners)} of that ({pctOf(nigeriaListeners, top50Listeners)}), and{" "}
        {citiesOutsideAfrica} of the {cityCount} are outside Africa. Spotify
        publishes only an artist&apos;s top {cityCount} cities, so every country figure is a floor. Monthly
        listeners are a rolling 28-day count — all {cityCount} rows are one day&apos;s reading of Spotify&apos;s
        own city counts, via ChartMasters&apos; Artist Global Impact tool.
        {nycWithBrooklyn != null && (
          <> Spotify lists Brooklyn apart from New York City; together the two are {formatListeners(nycWithBrooklyn)}, and on the map they share a dot.</>
        )}
      </p>

      <div className={styles.spacer} />

      <div className={styles.actionBar}>
        <Link href="/records/tours/map" className={styles.actionPrimary}>
          Where he&apos;s performed
        </Link>
      </div>
    </div>
  );
}
