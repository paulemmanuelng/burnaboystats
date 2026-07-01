"use client"; // interactive: switch between years

import { useState, useEffect } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type CertEvent, type Country } from "../data/certifications";

const YEARS = [2026, 2025, 2024];

const YEAR_NOTES: Partial<Record<number, string>> = {
  2025: "Burna Boy was the most certified African artist in 2025.",
};

function EventBadge({ event, countries }: { event: CertEvent; countries: Record<string, Country> }) {
  const country = countries[event.country];
  return (
    <span className={`${styles.cBadge} ${styles[tierOf(event.level)]}`} title={`${country.name} — ${country.body}`}>
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
  const [year, setYear] = useState<number | null>(null);
  const items = year === null ? [] : history.filter((e) => e.year === year);

  // The "Year" filter chips in CertExplorer jump here and pick a year for us.
  useEffect(() => {
    function onJump(e: Event) {
      setYear((e as CustomEvent<number>).detail);
    }
    window.addEventListener("cert-year-jump", onJump);
    return () => window.removeEventListener("cert-year-jump", onJump);
  }, []);

  return (
    <div id="cert-by-year">
      <h2 className="secTitle" style={{ margin: "48px 0 18px" }}>
        <span className="goldText">Certifications by year</span>
      </h2>

      <div className={styles.yearRow}>
        {YEARS.map((y) => (
          <button
            key={y}
            type="button"
            className={`${styles.yearBtn} ${year === y ? styles.yearBtnOn : ""}`}
            onClick={() => setYear(year === y ? null : y)}
          >
            {y}
          </button>
        ))}
      </div>

      {year === null ? null : items.length === 0 ? (
        <p className={styles.empty}>
          No certifications logged for {year} yet.{" "}
          <button type="button" className={styles.clearBtn} onClick={() => setYear(null)}>
            Close ▲
          </button>
        </p>
      ) : (
        <>
          <p className={styles.filterMeta} style={{ margin: "18px 0" }}>
            Burna Boy&apos;s certifications in {year} — <b>{items.length}</b>
            <button type="button" className={styles.clearBtn} onClick={() => setYear(null)}>
              Close ▲
            </button>
          </p>
          {YEAR_NOTES[year] && (
            <p style={{ margin: "0 0 20px", color: "var(--gold)", fontSize: "0.95rem" }}>{YEAR_NOTES[year]}</p>
          )}
          <div className={styles.certGrid}>
            {items.map((event, i) => (
              <div key={i} className={styles.certRow}>
                <div className={styles.certRowHead}>
                  <span className={styles.certTitle}>{event.title}</span>
                  <span className={styles.certCredit}>
                    {event.album ? "Album" : event.credit || ""}
                  </span>
                </div>
                <div className={styles.badges}>
                  <EventBadge event={event} countries={countries} />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className={styles.clearBtn}
            style={{ margin: "18px 0 8px" }}
            onClick={() => setYear(null)}
          >
            Close ▲
          </button>
        </>
      )}
    </div>
  );
}
