"use client"; // interactive: filter awards by result (won / nominated)

import { useEffect, useState } from "react";
import styles from "../records/awards/awards.module.css";
import { ceremonies, ceremonyWins, type AwardNom } from "../data/awards";
import { track } from "../lib/analytics";
import FilterEmpty from "./FilterEmpty";

const RESULTS = [
  { key: "won", label: "Won" },
  { key: "nom", label: "Nominated" },
];

const BODY_PREVIEW = 8; // award bodies shown before the "Show all" toggle

function Row({ nom }: { nom: AwardNom }) {
  return (
    <div className={`${styles.row} ${nom.won ? styles.rowWon : ""}`}>
      <span className={styles.year}>{nom.year}</span>
      <div className={styles.rowMain}>
        <span className={styles.category}>{nom.category}</span>
        {nom.work && <span className={styles.work}>{nom.work}</span>}
      </div>
      <span className={`${styles.result} ${nom.won ? styles.won : styles.nom}`}>
        {nom.won ? "Won" : "Nominated"}
      </span>
    </div>
  );
}

const YEARS = Array.from(new Set(ceremonies.flatMap((c) => c.noms.map((n) => n.year)))).sort(
  (a, b) => b - a
);

export default function AwardExplorer() {
  const [result, setResult] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [ceremony, setCeremony] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showAllBodies, setShowAllBodies] = useState(false);

  // Track filter engagement (fires once per change; skips the empty initial state).
  useEffect(() => {
    if (result || year || ceremony) {
      track("award_filter", { result: result ?? "", year: year ?? "", body: ceremony ?? "" });
    }
  }, [result, year, ceremony]);

  const match = (n: AwardNom) =>
    (!result || (result === "won" ? n.won : !n.won)) && (!year || n.year === year);

  const groups = ceremonies
    .filter((c) => !ceremony || c.name === ceremony)
    .map((c) => ({ ...c, shown: c.noms.filter(match) }))
    .filter((c) => c.shown.length > 0);

  const totalAll = ceremonies.reduce((n, c) => n + c.noms.length, 0);
  const totalShown = groups.reduce((n, g) => n + g.shown.length, 0);
  const active = result || year || ceremony;

  const clearAll = () => {
    setResult(null);
    setYear(null);
    setCeremony(null);
  };

  return (
    <div>
      <div className={styles.filterBar}>
        <button
          type="button"
          className={styles.filterToggle}
          aria-expanded={filtersOpen}
          aria-controls="award-filters"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>Filters{active ? ` · ${totalShown} shown` : ""}</span>
          <span aria-hidden="true">{filtersOpen ? "▲" : "▼"}</span>
        </button>
        <div id="award-filters" className={`${styles.filterBody} ${filtersOpen ? styles.filterOpen : ""}`}>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Result</span>
            <button className={`${styles.fChip} ${!result ? styles.fChipOn : ""}`} onClick={() => setResult(null)}>All</button>
            {RESULTS.map((r) => (
              <button
                key={r.key}
                className={`${styles.fChip} ${result === r.key ? styles.fChipOn : ""}`}
                onClick={() => setResult(result === r.key ? null : r.key)}
              >
                {r.label}
              </button>
            ))}
          </div>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Year</span>
            <button className={`${styles.fChip} ${!year ? styles.fChipOn : ""}`} onClick={() => setYear(null)}>All</button>
            {YEARS.map((y) => (
              <button
                key={y}
                className={`${styles.fChip} ${year === y ? styles.fChipOn : ""}`}
                onClick={() => setYear(year === y ? null : y)}
              >
                {y}
              </button>
            ))}
          </div>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Award body</span>
            <button className={`${styles.fChip} ${!ceremony ? styles.fChipOn : ""}`} onClick={() => setCeremony(null)}>All</button>
            {(showAllBodies
              ? ceremonies
              : ceremonies.filter((c, i) => i < BODY_PREVIEW || c.name === ceremony)
            ).map((c) => (
              <button
                key={c.name}
                className={`${styles.fChip} ${ceremony === c.name ? styles.fChipOn : ""}`}
                onClick={() => setCeremony(ceremony === c.name ? null : c.name)}
              >
                {c.name}
              </button>
            ))}
            {ceremonies.length > BODY_PREVIEW && (
              <button
                type="button"
                className={styles.moreBodies}
                aria-expanded={showAllBodies}
                onClick={() => setShowAllBodies((s) => !s)}
              >
                {showAllBodies ? "Show fewer ▲" : `Show all ${ceremonies.length} ▾`}
              </button>
            )}
          </div>
          {active && (
            <div className={styles.filterMeta}>
              Showing <b>{totalShown}</b> of {totalAll}
              <button className={styles.clearBtn} onClick={clearAll}>Clear ✕</button>
            </div>
          )}
        </div>
      </div>

      {totalShown === 0 ? (
        // Narrowest first: a single year is tighter than a body, which is
        // tighter than won-vs-nominated.
        <FilterEmpty
          body={`There's no ${[
            result === "won" ? "win" : result === "nominated" ? "nomination" : "nomination",
            ceremony && `at the ${ceremony}`,
            year && `in ${year}`,
          ]
            .filter(Boolean)
            .join(" ")}. That's a real gap in the record, not a missing page.`}
          onClear={clearAll}
          narrowest={
            year
              ? { label: String(year), drop: () => setYear(null) }
              : ceremony
                ? { label: ceremony, drop: () => setCeremony(null) }
                : result
                  ? { label: result === "won" ? "Won" : "Nominated", drop: () => setResult(null) }
                  : undefined
          }
        />
      ) : (
        groups.map((g) => {
          const wins = ceremonyWins(g);
          return (
            <section key={g.name} className={styles.ceremony}>
              <div className={styles.ceremonyGrid}>
                <div className={styles.ceremonyHead}>
                  <h2 className={styles.ceremonyName}>{g.name}</h2>
                  <div className={styles.ceremonyPills}>
                    {wins > 0 && <span className={styles.winPill}>{wins} won</span>}
                    <span className={styles.nomPill}>
                      {g.noms.length} {g.noms.length === 1 ? "nomination" : "nominations"}
                    </span>
                  </div>
                </div>
                <div className={styles.list}>
                {g.shown
                  .slice()
                  .sort((a, b) => a.year - b.year)
                  .map((n, i) => (
                    <Row key={`${n.year}-${n.category}-${i}`} nom={n} />
                  ))}
                </div>
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
