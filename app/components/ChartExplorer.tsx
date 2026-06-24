"use client"; // interactive: filter chart entries by country and peak tier

import { useState } from "react";
import styles from "../records/charts/charts.module.css";
import { chartTier, type ChartCountry, type ChartRelease } from "../data/charts";

type Countries = Record<string, ChartCountry>;

const PEAKS = [
  { key: "one", label: "No. 1", max: 1 },
  { key: "top10", label: "Top 10", max: 10 },
  { key: "top40", label: "Top 40", max: 40 },
];

function Row({
  item,
  countries,
  country,
  peakMax,
}: {
  item: ChartRelease;
  countries: Countries;
  country: string | null;
  peakMax: number | null;
}) {
  const entries = [...item.entries].sort((a, b) => a.peak - b.peak);
  return (
    <div className={styles.row}>
      <div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.credit}>
          {item.credit ? `${item.credit} · ${item.year}` : item.year}
        </span>
      </div>
      <div className={styles.peaks}>
        {entries.map((e) => {
          const c = countries[e.c];
          const dim = !!((country && e.c !== country) || (peakMax && e.peak > peakMax));
          return (
            <span
              key={e.c}
              className={`${styles.peak} ${styles[chartTier(e.peak)]} ${dim ? styles.peakDim : ""}`}
              title={`${c.name} — ${c.body}`}
            >
              <span className={styles.flag}>{c.flag}</span>#{e.peak}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function ChartExplorer({
  albums,
  singles,
  features,
  countries,
}: {
  albums: ChartRelease[];
  singles: ChartRelease[];
  features: ChartRelease[];
  countries: Countries;
}) {
  const [country, setCountry] = useState<string | null>(null);
  const [peak, setPeak] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const peakMax = peak ? PEAKS.find((p) => p.key === peak)!.max : null;
  const keep = (it: ChartRelease) =>
    (!country || it.entries.some((e) => e.c === country)) &&
    (!peakMax || it.entries.some((e) => e.peak <= peakMax));

  // Most-charted first: rank by how many territories a release charted in, then
  // by its best (lowest) peak, then newest — so the biggest hits lead each list.
  const byReach = (a: ChartRelease, b: ChartRelease) =>
    b.entries.length - a.entries.length ||
    Math.min(...a.entries.map((e) => e.peak)) - Math.min(...b.entries.map((e) => e.peak)) ||
    b.year - a.year;

  const groups = [
    { label: "Albums", items: albums.filter(keep).sort(byReach) },
    { label: "Singles", items: singles.filter(keep).sort(byReach) },
    { label: "Featured", items: features.filter(keep).sort(byReach) },
  ];
  const totalAll = albums.length + singles.length + features.length;
  const totalShown = groups.reduce((n, g) => n + g.items.length, 0);
  const active = country || peak;

  return (
    <div>
      <div className={styles.filterBar}>
        <button
          type="button"
          className={styles.filterToggle}
          aria-expanded={filtersOpen}
          aria-controls="chart-filters"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>Filters{active ? ` · ${totalShown} shown` : ""}</span>
          <span aria-hidden="true">{filtersOpen ? "▲" : "▼"}</span>
        </button>
        <div id="chart-filters" className={`${styles.filterBody} ${filtersOpen ? styles.filterOpen : ""}`}>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Peak</span>
            <button className={`${styles.fChip} ${!peak ? styles.fChipOn : ""}`} onClick={() => setPeak(null)}>All</button>
            {PEAKS.map((p) => (
              <button
                key={p.key}
                className={`${styles.fChip} ${peak === p.key ? styles.fChipOn : ""}`}
                onClick={() => setPeak(peak === p.key ? null : p.key)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Country</span>
            <button className={`${styles.fChip} ${!country ? styles.fChipOn : ""}`} onClick={() => setCountry(null)}>All</button>
            {Object.entries(countries).map(([code, c]) => (
              <button
                key={code}
                className={`${styles.fChip} ${country === code ? styles.fChipOn : ""}`}
                title={`${c.name} — ${c.body}`}
                onClick={() => setCountry(country === code ? null : code)}
              >
                <span className={styles.flag}>{c.flag}</span>
                {code}
              </button>
            ))}
          </div>
          {active && (
            <div className={styles.filterMeta}>
              Showing <b>{totalShown}</b> of {totalAll} releases
              <button className={styles.clearBtn} onClick={() => { setCountry(null); setPeak(null); }}>
                Clear ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {totalShown === 0 ? (
        <p className={styles.empty}>No releases match that filter. Try another country or peak.</p>
      ) : (
        groups.map(
          (g) =>
            g.items.length > 0 && (
              <div key={g.label}>
                <h2 className={`secTitle ${styles.group}`}>
                  <span className="goldText">{g.label}</span>{" "}
                  <span className={styles.count}>({g.items.length})</span>
                </h2>
                <div className={styles.list}>
                  {g.items.map((it) => (
                    <Row key={it.title} item={it} countries={countries} country={country} peakMax={peakMax} />
                  ))}
                </div>
              </div>
            )
        )
      )}
    </div>
  );
}
