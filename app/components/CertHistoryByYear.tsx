"use client"; // interactive: switch between years

import { useState } from "react";
import styles from "../certifications/certifications.module.css";
import {
  tierOf,
  certHistoryYears,
  intlCertsInYear,
  bestIntlYearBefore,
  type CertEvent,
  type Country,
} from "../data/certifications";
import { awardLabel } from "../lib/awardName";
import { useCertView } from "../lib/useCertView";
import { ALL_VIEW, logLedeTail } from "../lib/certScope";
import { shortDay } from "../lib/dates";

const YEARS = certHistoryYears;

// Notes shown under a year's log.
//
// The plaque counts in these lines are now genuinely computed from certHistory,
// so they cannot drift. They were not: this note read "Fifty-one international
// plaques ... past his own previous best of 39 in 2023" while the arrays held 52
// and 44, and the stat rail on the same page rendered the derived 52 beside it. The "most certified African artist in <year>" half cannot: it needs
// every other African artist's per-year count, and no certifying body publishes
// that, no aggregator compiles it. Those lines are maintained by Paul from the
// fan community's own tracking, and are the only claims on this site not
// re-derivable from its data — worth knowing before editing or extending them.
// (The all-time "most certified African artist" record IS press-sourced; that's
// a different claim and it lives in the updates feed.)
//
// The figure is a count of certifications — rows in this dated log — not of
// plaques. An upgrade APPENDS a row (the earlier tier's stays), so "Dai Dai"
// in the US is three of 2026's rows (2x, 6x, 19x) and one plaque: the 7 Oct
// 2026 19x moved this figure from 71 to 72 while the plaque count held at 251.
// The note said "72 international plaques" until 8 Oct 2026 (debug pass of
// 7 Oct, DATA-1); the 2023 best it is set against is counted the same way.
const YEAR_NOTES: Partial<Record<number, string>> = {
  2026: (() => {
    const best = bestIntlYearBefore(2026);
    const prior = best ? ` past his own previous best of ${best[1]} in ${best[0]}.` : ".";
    return `${intlCertsInYear(2026)} international certifications and counting, upgrades included — the most certified African artist of 2026, and Burna Boy's biggest certification year on record,${prior}`;
  })(),
  2025: "Burna Boy was the most certified African artist in 2025.",
};

function EventBadge({ event, countries }: { event: CertEvent; countries: Record<string, Country> }) {
  const country = countries[event.country];
  return (
    <span className={`${styles.cBadge} ${styles[tierOf(event.level)]}`} title={`${country.name} — ${event.body ?? country.body}`}>
      <span className={styles.flag}>{country.flag}</span>
      {awardLabel(event)}
    </span>
  );
}

export default function CertHistoryByYear({
  history,
  countries,
  switched = false,
  featured = [],
}: {
  history: CertEvent[];
  countries: Record<string, Country>;
  /** The page carries the certs switches (/certifications), so the log's
   *  lede follows them (certScope.logLedeTail). */
  switched?: boolean;
  /** The titles the Lead switch leaves out (certUnits.featuredTitlesOf):
   *  each of their rows carries an ink "Featured" tag, in every view (fix 20). */
  featured?: readonly string[];
}) {
  const [view] = useCertView();
  // Off the switched page the log speaks for the all-view, always.
  const shownView = switched ? view : ALL_VIEW;
  const tail = logLedeTail(shownView);
  // Fix 20: the log lists every announcement whatever the switches say, so a
  // switch that is off is named on the year rail, not acted on in the rows.
  const narrowed = shownView.scope !== "all" || shownView.credit !== "all";
  const featuredSet = new Set(featured);
  // The design opens on the newest year rather than on nothing — the log is
  // the point of the section, so it should not start empty, and it never goes
  // empty either: a year chip picks its year, it does not toggle. Clicking the
  // lit chip used to deselect it and leave six chips over nothing, while the
  // phone's rail (MobileCerts) always keeps a year on.
  const [year, setYear] = useState<number>(YEARS[0]);
  // The year's rows in the log's own order, reversed: the latest logged first
  // (fix 19). Only 39 of the rows carry a day, out of order within their
  // years, so the order is the log's, never a date sort. `filter` makes a new
  // array, so `history` itself is never reversed.
  const items = history.filter((e) => e.year === year).reverse();
  const counts = history.reduce<Record<number, number>>((acc, e) => {
    acc[e.year] = (acc[e.year] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section id="cert-by-year" className={styles.logBand}>
      <div className={styles.wide}>
        <div className={styles.logHead}>
          <div>
            <div className={styles.logKicker}>Year by year</div>
            <h2 className={styles.logTitle}>Every announcement, by year</h2>
          </div>
          <p className={styles.logLede}>
            Each international announcement as it landed — a release can appear twice in a
            year if it was certified at two tiers. {tail}
          </p>
        </div>

        <div className={styles.yearRow}>
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className={`${styles.yearBtn} ${year === y ? styles.yearBtnOn : ""}`}
              aria-pressed={year === y}
              onClick={() => setYear(y)}
            >
              {y}
              <span className={styles.yearSep} aria-hidden="true">·</span>
              <span className={styles.yearCount}>{counts[y] ?? 0}</span>
              <span className="visuallyHidden">certifications</span>
            </button>
          ))}
          {/* One unit, so the caption wraps with its chip, never alone. */}
          {narrowed && (
            <span className={styles.notFilteredRow}>
              <span className={styles.notFiltered}>Not filtered</span>
              <span className={styles.notFilteredCaption}>
                This log lists every announcement; the switches change the totals above.
              </span>
            </span>
          )}
        </div>

        {YEAR_NOTES[year] && <p className={styles.yearNote}>{YEAR_NOTES[year]}</p>}

        {/* Fix 19: what the list is — the year, its rows, and their order. */}
        <p className={styles.logLabel}>
          {year} · {counts[year] ?? 0} · latest logged first
        </p>

        {items.length > 0 && (
          <div className={styles.eventList}>
            {items.map((event, i) => (
              <div key={`${event.title}-${event.country}-${i}`} className={styles.eventRow}>
                <div className={styles.eventMain}>
                  <span className={styles.eventTitle}>
                    {event.title}
                    {/* Full ink and an outline tag, never opacity (fix 20). */}
                    {featuredSet.has(event.title) && <span className={styles.featuredTag}>Featured</span>}
                  </span>
                  <span className={styles.eventMeta}>
                    {[event.album ? "Album" : event.credit, event.body ?? countries[event.country].body]
                      .filter(Boolean)
                      .join(" · ")}
                    {/* The award's day ends the meta, only where the register
                        printed one (fix 19): no date column, no placeholder. */}
                    {event.date && (
                      <>
                        {/* No-break both sides: the date never opens a line on its "·". */}
                        {"\u00a0·\u00a0"}
                        <time dateTime={event.date}>{shortDay(event.date)}</time>
                      </>
                    )}
                  </span>
                </div>
                <EventBadge event={event} countries={countries} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
