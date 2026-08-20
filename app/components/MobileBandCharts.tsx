"use client"; // four independent accordions, a territory filter and paging

import { useMemo, useState } from "react";
import styles from "./mobileBandCharts.module.css";
import BackLink from "./BackLink";
import ScrollRail from "./ScrollRail";
import { spotifyImage } from "../lib/spotifyImage";
import { BAND_ORDER, bandsOf, type BandName } from "../lib/peakBands";

/**
 * Mobile chart board — "how high?" before "where?".
 *
 * The screen this replaces rendered one row per RELEASE with a wrapping field
 * of country pills under it. Asake's ran to 14 screens and 1,249 rows, most of
 * them carrying one or two pills, and a reader scrolling that could not answer
 * the only question they arrived with.
 *
 * Four peak bands answer it in four lines. Collapsed, the whole screen is about
 * one and a bit. Each band opens independently — a reader comparing a Top 10 to
 * a Top 40 has to be able to hold both open — and every band opens at 20 rows
 * however long its tail.
 */

const PAGE = 20;

export interface ChartRow {
  title: string;
  country: string;
  peak: number;
  cover?: string;
}

export interface Territory {
  code: string;
  name: string;
  flag: string;
  body: string;
  count: number;
}

const RAIL_SHOWN = 6;

export default function MobileBandCharts({
  releases,
  territories,
  entryCount,
  territoryCount,
  numberOnes,
  releaseCount,
  artistName,
  backHref,
  sourceNote,
  lede,
}: {
  releases: { title: string; cover?: string; entries: { c: string; peak: number }[] }[];
  territories: Territory[];
  entryCount: number;
  territoryCount: number;
  numberOnes: number;
  releaseCount: number;
  artistName: string;
  backHref: string;
  sourceNote: string;
  lede: string;
}) {
  const [open, setOpen] = useState<Record<BandName, boolean>>({
    "No. 1": false,
    "Top 10": false,
    "Top 40": false,
    Beyond: false,
  });
  const [shown, setShown] = useState<Record<BandName, number>>({
    "No. 1": PAGE,
    "Top 10": PAGE,
    "Top 40": PAGE,
    Beyond: PAGE,
  });
  const [only, setOnly] = useState<string | null>(null);
  const [railOpen, setRailOpen] = useState(false);

  const byCode = useMemo(
    () => Object.fromEntries(territories.map((t) => [t.code, t])),
    [territories]
  );

  // Filtering REMOVES rows rather than dimming them. A row here is one
  // country's entry, so narrowing to Nigeria genuinely means "the Nigerian
  // rows" — dimming the rest would be noise, not context.
  const bands = useMemo(() => {
    const src = only
      ? releases
          .map((r) => ({ ...r, entries: r.entries.filter((e) => e.c === only) }))
          .filter((r) => r.entries.length > 0)
      : releases;
    return bandsOf(src);
  }, [releases, only]);

  const toggle = (name: BandName) => {
    setOpen((o) => ({ ...o, [name]: !o[name] }));
    // Collapsing resets the depth. Paging Beyond out to 77 and then reopening
    // would dump all 77 and throw the reader's scroll position to nowhere.
    if (open[name]) setShown((s) => ({ ...s, [name]: PAGE }));
  };

  const railTerritories = railOpen ? territories : territories.slice(0, RAIL_SHOWN);
  const railRest = territories.length - RAIL_SHOWN;

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href={backHref} aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>{artistName} · charts</span>
        <span className={styles.backCount}>{entryCount}</span>
      </div>

      <section className={styles.hero}>
        <div className={styles.kicker}>Peak positions · the permanent record</div>
        <h1 className={styles.title}>
          {artistName} <span className={styles.gold}>Charts</span>
        </h1>
        {/* One template literal, not JSX across lines. Splitting this sentence
            is what published "24of them" — the same bug the charts page's own
            comment records, which I walked straight back into. */}
        <p className={styles.lede}>{lede}</p>
      </section>

      <div className={styles.statGrid}>
        <div className={styles.statCell}>
          <div className={`${styles.statNum} ${styles.statGold}`}>{entryCount}</div>
          <div className={styles.statLabel}>Chart entries</div>
        </div>
        <div className={styles.statCell}>
          <div className={`${styles.statNum} ${styles.statGold}`}>{numberOnes}</div>
          <div className={styles.statLabel}>No. 1 peaks</div>
        </div>
        <div className={styles.statCell}>
          <div className={styles.statNum}>{territoryCount}</div>
          <div className={styles.statLabel}>Territories</div>
        </div>
        <div className={styles.statCell}>
          <div className={styles.statNum}>{releaseCount}</div>
          <div className={styles.statLabel}>Releases</div>
        </div>
      </div>

      <ScrollRail className={styles.rail} label="Filter by territory">
        <button
          type="button"
          className={`${styles.chip} ${only === null ? styles.chipOn : ""}`}
          aria-pressed={only === null}
          onClick={() => setOnly(null)}
        >
          All
        </button>
        {railTerritories.map((t) => (
          <button
            key={t.code}
            type="button"
            className={`${styles.chip} ${only === t.code ? styles.chipOn : ""}`}
            aria-pressed={only === t.code}
            onClick={() => setOnly(only === t.code ? null : t.code)}
          >
            <span aria-hidden="true">{t.flag}</span> {t.name}
          </button>
        ))}
        {!railOpen && railRest > 0 && (
          <button type="button" className={styles.chipMore} onClick={() => setRailOpen(true)}>
            +{railRest} more
          </button>
        )}
      </ScrollRail>
      <p className={styles.railNote}>Territory rail · most-charted first</p>

      <div className={styles.bands}>
        {BAND_ORDER.map((name) => {
          const band = bands.find((b) => b.name === name)!;
          const rows = band.rows;
          const empty = rows.length === 0;
          const isOpen = open[name] && !empty;
          const visible = rows.slice(0, shown[name]);
          const key = name.replace(/\W+/g, "-").toLowerCase();

          return (
            <section key={name} className={styles.band}>
              <button
                type="button"
                className={styles.bandHead}
                style={{ borderLeftColor: band.ink }}
                aria-expanded={isOpen}
                aria-controls={`band-panel-${key}`}
                disabled={empty}
                aria-disabled={empty}
                onClick={() => toggle(name)}
              >
                <span className={styles.bandName} style={{ color: band.ink }}>{name}</span>
                <span
                  className={styles.bandCount}
                  style={{ color: empty ? "var(--text-muted)" : band.ink }}
                >
                  {rows.length}
                </span>
                {/* Zero is stated. A band with nothing in it still renders — the
                    absence IS the finding, and hiding it reads as though the
                    question was never asked. */}
                <span className={styles.bandNote}>
                  {empty
                    ? "none held"
                    : `${band.releases} ${band.releases === 1 ? "release" : "releases"}`}
                </span>
                {!empty && <span className={styles.chev} aria-hidden="true">▾</span>}
              </button>

              {isOpen && (
                <div id={`band-panel-${key}`} className={styles.bandPanel}>
                  {visible.map((r, i) => {
                    const t = byCode[r.country];
                    return (
                      <div key={`${r.title}-${r.country}-${r.peak}-${i}`} className={styles.row}>
                        {r.cover ? (
                          <span
                            className={styles.cover}
                            style={{ backgroundImage: `url(${spotifyImage(r.cover, 300)})` }}
                            aria-hidden="true"
                          />
                        ) : (
                          <span className={styles.coverEmpty} aria-hidden="true" />
                        )}
                        <span className={styles.main}>
                          <span className={styles.rowTitle}>{r.title}</span>
                          <span className={styles.meta}>
                            {t ? `${t.flag} ${t.name} · ${t.body}` : r.country}
                          </span>
                        </span>
                        <span className={styles.peak} data-band={name}>
                          {r.peak === 1 ? "No. 1" : `#${r.peak}`}
                        </span>
                      </div>
                    );
                  })}

                  {rows.length > shown[name] && (
                    <button
                      type="button"
                      className={styles.expander}
                      aria-controls={`band-panel-${key}`}
                      onClick={() =>
                        setShown((s) => ({
                          ...s,
                          // The long tail pages; the three tight bands reveal in
                          // one press, because a reader who taps "All 68 Top 40"
                          // has explicitly asked for 68 rows.
                          [name]:
                            name === "Beyond" ? s[name] + PAGE : rows.length,
                        }))
                      }
                    >
                      <span>
                        {name === "Beyond"
                          ? `Show ${Math.min(PAGE, rows.length - shown[name])} more`
                          : `All ${rows.length} ${name === "No. 1" ? "No. 1s" : name}`}
                      </span>
                      <span className={styles.arrow} aria-hidden="true">↓</span>
                    </button>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <div className={styles.sourceWrap}>
        <p className={styles.source}>{sourceNote}</p>
      </div>

      <div className={styles.spacer} />
    </div>
  );
}
