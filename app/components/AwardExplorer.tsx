"use client"; // interactive: filter awards by result (won / nominated)

import { useState } from "react";
import styles from "../records/awards/awards.module.css";
import { ceremonies, ceremonyWins, type AwardNom } from "../data/awards";

const RESULTS = [
  { key: "won", label: "Won" },
  { key: "nom", label: "Nominated" },
];

function Row({ nom }: { nom: AwardNom }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowMain}>
        <span className={styles.category}>{nom.category}</span>
        {nom.work && <span className={styles.work}>{nom.work}</span>}
      </div>
      <div className={styles.rowMeta}>
        <span className={styles.year}>{nom.year}</span>
        <span className={`${styles.badge} ${nom.won ? styles.won : styles.nom}`}>
          {nom.won ? "Won" : "Nominated"}
        </span>
      </div>
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
            {ceremonies.map((c) => (
              <button
                key={c.name}
                className={`${styles.fChip} ${ceremony === c.name ? styles.fChipOn : ""}`}
                onClick={() => setCeremony(ceremony === c.name ? null : c.name)}
              >
                {c.name}
              </button>
            ))}
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
        <p className={styles.empty}>Nothing matches that filter.</p>
      ) : (
        groups.map((g) => {
          const wins = ceremonyWins(g);
          return (
            <div key={g.name}>
              <h2 className={`secTitle ${styles.group}`}>
                <span className="goldText">{g.name}</span>{" "}
                <span className={styles.count}>
                  ({wins > 0 ? `${wins} won · ` : ""}{g.noms.length} {g.noms.length === 1 ? "nomination" : "nominations"})
                </span>
              </h2>
              <div className={styles.list}>
                {g.shown
                  .slice()
                  .sort((a, b) => a.year - b.year)
                  .map((n, i) => (
                    <Row key={`${n.year}-${n.category}-${i}`} nom={n} />
                  ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
