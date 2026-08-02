"use client"; // interactive: switch between years

import { useState, useEffect } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type CertEvent, type Country } from "../data/certifications";

const YEARS = [2026, 2025, 2024, 2023];

const YEAR_NOTES: Partial<Record<number, string>> = {
  2025: "Burna Boy was the most certified African artist in 2025.",
};

function EventBadge({ event, countries }: { event: CertEvent; countries: Record<string, Country> }) {
  const country = countries[event.country];
  return (
    <span className={`${styles.cBadge} ${styles[tierOf(event.level)]}`} title={`${country.name} — ${event.body ?? country.body}`}>
      <span className={styles.flag}>{country.flag}</span>
      {event.x ? `${event.x}× ` : ""}
      {event.level}
    </span>
  );
}

export default function CertHistoryByYear({
  history,
  countries,
}: {
  history: CertEvent[];
  countries: Record<string, Country>;
}) {
  // The design opens on the newest year rather than on nothing — the log is
  // the point of the section, so it should not start empty.
  const [year, setYear] = useState<number | null>(YEARS[0]);
  const items = year === null ? [] : history.filter((e) => e.year === year);
  const counts = history.reduce<Record<number, number>>((acc, e) => {
    acc[e.year] = (acc[e.year] ?? 0) + 1;
    return acc;
  }, {});

  // The "Year" filter chips in CertExplorer jump here and pick a year for us.
  useEffect(() => {
    function onJump(e: Event) {
      setYear((e as CustomEvent<number>).detail);
    }
    window.addEventListener("cert-year-jump", onJump);
    return () => window.removeEventListener("cert-year-jump", onJump);
  }, []);

  return (
    <section id="cert-by-year" className={styles.logBand}>
      <div className={styles.wide}>
        <div className={styles.logHead}>
          <div>
            <div className={styles.logKicker}>The dated log</div>
            <h2 className={styles.logTitle}>Certifications by year</h2>
          </div>
          <p className={styles.logLede}>
            Each announcement as it landed — a release can appear twice in a year if it was
            certified at two tiers.
          </p>
        </div>

        <div className={styles.yearRow}>
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className={`${styles.yearBtn} ${year === y ? styles.yearBtnOn : ""}`}
              aria-pressed={year === y}
              onClick={() => setYear(year === y ? null : y)}
            >
              {y}
              <span className={styles.yearCount}>{counts[y] ?? 0}</span>
            </button>
          ))}
        </div>

        {YEAR_NOTES[year ?? 0] && <p className={styles.yearNote}>{YEAR_NOTES[year ?? 0]}</p>}

        {items.length > 0 && (
          <div className={styles.eventList}>
            {items.map((event, i) => (
              <div key={`${event.title}-${event.country}-${i}`} className={styles.eventRow}>
                <div className={styles.eventMain}>
                  <span className={styles.eventTitle}>{event.title}</span>
                  <span className={styles.eventMeta}>
                    {[event.album ? "Album" : event.credit, countries[event.country].body]
                      .filter(Boolean)
                      .join(" · ")}
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
