"use client"; // the panel renders on first open, from one shared fetch

import { useState } from "react";
import styles from "../live-charts/liveCharts.module.css";
import { cadenceOf } from "../lib/liveChartMeta";
import { useLiveRelease } from "../lib/useLiveRelease";
import { coverFor, monogramFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import type { LiveEntry } from "../data/liveCharts";

/**
 * One release on the desktop live-charts page.
 *
 * The summary row — cover, title, per-platform chip counts — is everything a
 * scanning reader uses, and it's all this ships with the page. The country
 * tables render on first open from the shared /api/v1/live-charts fetch: the
 * page used to serialise all ~790 rows twice (markup + hydration payload),
 * making it the heaviest page on the site and, through the home page's
 * prefetch, a tax on every visitor.
 */

export interface ReleaseSummary {
  /** Artwork shipped with the release (board artists), if the site's own
   *  catalogue does not hold it. */
  cover?: string;
  title: string;
  kind: "song" | "album";
  ep: boolean;
  total: number;
  no1: number;
  platforms: { platform: string; count: number; numberOnes: number }[];
}

import { flagFor } from "../lib/flagFor";

function Move({ e }: { e: LiveEntry }) {
  if (e.status === "re") return <span className={styles.moveRe}>RE-ENTRY</span>;
  if (e.status === "new") return <span className={styles.moveNew}>NEW</span>;
  if (e.movement === undefined || e.movement === null) return null;
  if (e.movement === 0) return <span className={styles.moveFlat}>–</span>;
  return (
    <span className={e.movement > 0 ? styles.moveUp : styles.moveDown}>
      {e.movement > 0 ? "▲" : "▼"}
      {Math.abs(e.movement)}
    </span>
  );
}

export default function LiveReleaseBlock({
  r,
  source,
}: {
  r: ReleaseSummary;
  /** Where the country panels fetch from, and whose artwork to draw. Burna
   *  Boy's page passes nothing: his covers are in the site's own catalogue.
   *  A board artist ships the URL with the release, resolved at build time. */
  source?: string;
}) {
  const [opened, setOpened] = useState(false);
  const { release, error, loading, retry } = useLiveRelease(r.title, opened, source);
  const art = r.cover ?? coverFor(r.title);

  return (
    <details
      className={styles.release}
      onToggle={(e) => {
        if ((e.target as HTMLDetailsElement).open) setOpened(true);
      }}
    >
      <summary className={styles.summary}>
        <span className={styles.caret} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        <span className={styles.title}>
          {art ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote CDN art, same tile as before
            <img
              className={styles.cover}
              src={spotifyImage(art, 64)}
              srcSet={`${spotifyImage(art, 64)} 1x, ${spotifyImage(art, 300)} 2x`}
              alt=""
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className={styles.coverFallback} data-letter={monogramFor(r.title)} aria-hidden="true" />
          )}
          {r.title}
          {/* The feed only knows song vs album; the two EPs deserve their
              real name. Sits inside the "Albums & EPs" section either way. */}
          {r.kind === "album" && r.ep && <span className={styles.epTag}>EP</span>}
        </span>
        <span className={styles.chips}>
          {r.platforms.map((p) => (
            <span key={p.platform} className={styles.chip}>
              <span className={styles.chipPlatform}>{p.platform}</span>
              <span className={styles.chipCount}>
                {p.count} {p.count === 1 ? "country" : "countries"}
              </span>
              {p.numberOnes > 0 && (
                <span className={styles.chipNo1}>{p.numberOnes} at No.&nbsp;1</span>
              )}
            </span>
          ))}
        </span>
        <span className={styles.total}>
          {r.total} {r.total === 1 ? "chart" : "charts"}
          {r.no1 > 0 && <span className={styles.totalNo1}> · {r.no1} at No. 1</span>}
        </span>
      </summary>

      {loading && <p className={styles.panelLoading}>Loading the country list…</p>}
      {error && (
        <p className={styles.panelLoading}>
          Couldn&apos;t load the country list.{" "}
          <button type="button" className={styles.panelRetry} onClick={retry}>
            Try again
          </button>
        </p>
      )}
      {release?.platforms.map((p) => (
        <div key={p.platform} className={styles.platformBlock}>
          <h3 className={styles.platformName}>
            {p.platform}
            <span className={styles.platformCount}>
              {p.entries.length} {p.entries.length === 1 ? "country" : "countries"}
              <span className={styles.platformCadence}> · {cadenceOf(p.platform)}</span>
            </span>
          </h3>
          <ul className={styles.entries}>
            {p.entries.map((e) => (
              <li key={e.country} className={e.position === 1 ? styles.entryTop : styles.entry}>
                <span className={styles.pos}>#{e.position}</span>
                <span className={styles.flag} aria-hidden="true">{flagFor(e.country)}</span>
                <span className={styles.country}>{e.name}</span>
                <Move e={e} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </details>
  );
}
