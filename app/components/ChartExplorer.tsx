"use client"; // interactive: filter chart entries + toggle a sortable table view

import { useEffect, useMemo, useState } from "react";
import styles from "../records/charts/charts.module.css";
import { chartTier, type ChartCountry, type ChartRelease } from "../data/charts";
import { track } from "../lib/analytics";

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
        {item.note ? <span className={styles.releaseNote}>{item.note}</span> : null}
      </div>
      <div className={styles.peaks}>
        {entries.map((e) => {
          const c = countries[e.c];
          const dim = !!((country && e.c !== country) || (peakMax && e.peak > peakMax));
          return (
            <span
              key={e.c}
              className={`${styles.peak} ${styles[chartTier(e.peak)]} ${dim ? styles.peakDim : ""}`}
              title={`${c.name} — ${c.body}${e.note ? ` (${e.note})` : ""}`}
            >
              <span className={styles.flag}>{c.flag}</span>#{e.peak}
            </span>
          );
        })}
      </div>
    </div>
  );
}

type SortKey = "song" | "country" | "peak" | "year";
interface FlatRow {
  song: string;
  credit?: string;
  year: number;
  type: string;
  code: string;
  peak: number;
}

const PK_CLASS: Record<string, string | undefined> = {
  one: styles.pkOne,
  top10: styles.pkTop10,
  top40: styles.pkTop40,
  rest: styles.pkRest,
};

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
  const [view, setView] = useState<"cards" | "table">("cards");
  const [sortKey, setSortKey] = useState<SortKey>("peak");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  // Track filter engagement (fires once per change; skips the empty initial state).
  useEffect(() => {
    if (country || peak) track("chart_filter", { country: country ?? "", peak: peak ?? "" });
  }, [country, peak]);

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

  // Flat, one-row-per-chart-entry data for the sortable table view (respects the
  // same country/peak filters, but filters individual entries rather than releases).
  const flatRows: FlatRow[] = useMemo(() => {
    const typed = [
      ...albums.map((r) => ({ r, type: "Album" })),
      ...singles.map((r) => ({ r, type: "Single" })),
      ...features.map((r) => ({ r, type: "Feature" })),
    ];
    return typed.flatMap(({ r, type }) =>
      r.entries
        .filter((e) => (!country || e.c === country) && (!peakMax || e.peak <= peakMax))
        .map((e) => ({ song: r.title, credit: r.credit, year: r.year, type, code: e.c, peak: e.peak }))
    );
  }, [albums, singles, features, country, peakMax]);

  const sortedRows = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;
    return [...flatRows].sort((a, b) => {
      let cmp =
        sortKey === "song" ? a.song.localeCompare(b.song)
        : sortKey === "country" ? countries[a.code].name.localeCompare(countries[b.code].name)
        : sortKey === "year" ? a.year - b.year
        : a.peak - b.peak;
      if (cmp === 0) cmp = a.peak - b.peak || a.song.localeCompare(b.song);
      return cmp * dir;
    });
  }, [flatRows, sortKey, sortDir, countries]);

  const onSort = (k: SortKey) => {
    if (sortKey === k) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(k);
      setSortDir(k === "year" ? "desc" : "asc"); // newest-first feels right for year
    }
  };

  const headerCell = (label: string, k: SortKey, right = false) => (
    <th
      className={`${styles.th} ${right ? styles.thRight : ""}`}
      aria-sort={sortKey === k ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
    >
      <button type="button" className={styles.thBtn} onClick={() => onSort(k)}>
        {label}
        <span className={styles.sortArrow} aria-hidden="true">
          {sortKey === k ? (sortDir === "asc" ? "▲" : "▼") : "↕"}
        </span>
      </button>
    </th>
  );

  return (
    <div>
      {/* View toggle: the scannable "snack" cards vs the sortable "meal" table. */}
      <div className={styles.viewBar}>
        <div className={styles.viewToggle}>
          <button
            type="button"
            aria-pressed={view === "cards"}
            className={`${styles.viewBtn} ${view === "cards" ? styles.viewBtnOn : ""}`}
            onClick={() => setView("cards")}
          >
            Cards
          </button>
          <button
            type="button"
            aria-pressed={view === "table"}
            className={`${styles.viewBtn} ${view === "table" ? styles.viewBtnOn : ""}`}
            onClick={() => {
              setView("table");
              track("chart_view", { view: "table" });
            }}
          >
            Table
          </button>
        </div>
        {view === "table" && (
          <span className={styles.viewHint}>{flatRows.length} chart entries · click a header to sort</span>
        )}
      </div>

      <div className={styles.filterBar}>
        <button
          type="button"
          className={styles.filterToggle}
          aria-expanded={filtersOpen}
          aria-controls="chart-filters"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>Filters{active ? ` · ${view === "table" ? flatRows.length : totalShown} shown` : ""}</span>
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
              Showing <b>{view === "table" ? flatRows.length : totalShown}</b> of{" "}
              {view === "table" ? "all" : totalAll} {view === "table" ? "chart entries" : "releases"}
              <button className={styles.clearBtn} onClick={() => { setCountry(null); setPeak(null); }}>
                Clear ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {view === "cards" ? (
        totalShown === 0 ? (
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
        )
      ) : flatRows.length === 0 ? (
        <p className={styles.empty}>No chart entries match that filter. Try another country or peak.</p>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {headerCell("Song", "song")}
                {headerCell("Chart", "country")}
                {headerCell("Peak", "peak", true)}
                {headerCell("Year", "year", true)}
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((r, i) => (
                <tr key={`${r.song}-${r.code}-${i}`} className={r.peak === 1 ? styles.rowOne : ""}>
                  <td className={styles.tdSong}>
                    <span className={styles.tSong}>{r.song}</span>
                    {r.credit ? <span className={styles.tCredit}>{r.credit}</span> : null}
                  </td>
                  <td className={styles.tdChart}>
                    <span className={styles.flag}>{countries[r.code].flag}</span>
                    <span className={styles.tCountry}>{countries[r.code].name}</span>
                  </td>
                  <td className={`${styles.tdPeak} ${PK_CLASS[chartTier(r.peak)] ?? ""}`}>#{r.peak}</td>
                  <td className={styles.tdYear}>{r.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
