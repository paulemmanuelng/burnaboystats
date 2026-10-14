import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./mobileVisualized.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import MobileProvenance from "./MobileProvenance";

/**
 * The mobile "visualized" screen.
 *
 * A distinct screen, not the desktop page narrowed: the scatter plot and the
 * choropleth need width and a pointer, so mobile carries the charts that
 * survive one column — ranked bars and composition donuts. Built from
 * designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen 19.
 *
 * The design mocks each donut with a CSS border trick (one colour per edge).
 * These are real arcs computed from the segments, so a 6-of-221 slice draws as
 * 6 of 221 rather than as a quarter of the ring.
 */

import TimeSeriesChart, { type SeriesPoint, type SeriesAnnotation } from "./TimeSeriesChart";

/** The 48px row that ends every phone chart: a link to the page that holds
 *  the figure (site review 8 Oct 2026, J5-1; the desktop section's CTA target
 *  and words where it has one). */
export interface ChartRoute {
  label: string;
  href: string;
}

/** A dated line chart on the mobile screen. `format` names a formatter rather
 *  than passing a function, so the parent stays a server component. */
export interface MobileTimeChart {
  title: string;
  /** What the line measures — the desktop eyebrow has no mobile equivalent. */
  subtitle?: string;
  note: string;
  points: SeriesPoint[];
  annotations?: SeriesAnnotation[];
  format?: "listeners" | "count";
  unitLabel?: string;
  ariaLabel: string;
  /** Zero-based, round ticks, line only (J5-2 (a)). */
  zeroBased?: boolean;
  area?: boolean;
  route: ChartRoute;
}

export interface MobileBar {
  name: string;
  /** Whose row it is, said after the name — "(Burna)", "(Fally)" — on every
   *  row of a list of several artists' (F-08). Never truncated. */
  tag?: string;
  value: string;
  /** 0–1 of the largest value in this set. */
  frac: number;
  /** His row — drawn gold. Everyone else is grey. */
  his?: boolean;
  /** A year still running — hatched (J5-2 (e)); `meta` dates it. */
  partial?: boolean;
  meta?: string;
}

export interface MobileDonut {
  title: string;
  centre: string;
  centreLabel: string;
  legend: { label: string; value: number; color: string }[];
  /** Counts listed after the legend with no arc and no share (Pending, fix 114). */
  extras?: { label: string; value: number }[];
  route: ChartRoute;
}

const R = 34;
const STROKE = 10;
const C = 2 * Math.PI * R;

/** The chart's last child: one whole-row link, label left, → right. */
const RouteRow = ({ route }: { route: ChartRoute }) => (
  <Link className={styles.routeRow} href={route.href}>
    <span>{route.label}</span>
    <span aria-hidden="true">→</span>
  </Link>
);

export default function MobileVisualized({
  chartCount,
  timeCharts = [],
  blocks = [],
  bars,
  donuts,
  footNote,
}: {
  chartCount: number;
  timeCharts?: MobileTimeChart[];
  /** Charts the phone can carry but that aren't bars, donuts or lines — the
   *  scatter and the choropleth. Rendered by the page and passed through, so
   *  this component doesn't need to know how to draw them. */
  blocks?: { title: string; note: ReactNode; chart: ReactNode; route: ChartRoute }[];
  bars: { title: string; note: string; items: MobileBar[]; route: ChartRoute }[];
  donuts: MobileDonut[];
  footNote: string;
}) {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Visualized</span>
        <span className={styles.badge}>{chartCount} charts</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Every stat, charted</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Burna Boy, <span className={styles.gold}>visualized</span>
        </h1>
        <p className={styles.lede}>
          The career plotted — grosses, certifications, chart peaks and award win rate.
        </p>
      </div>

      {/* Ranked bars */}
      {timeCharts.map((c) => (
        <div key={c.title} className={styles.chart}>
          <h2 className={styles.chartTitle}>{c.title}</h2>
          {c.subtitle && <p className={styles.chartSub}>{c.subtitle}</p>}
          <TimeSeriesChart
            points={c.points}
            annotations={c.annotations}
            format={c.format}
            unitLabel={c.unitLabel}
            ariaLabel={c.ariaLabel}
            zeroBased={c.zeroBased}
            area={c.area}
            px
          />
          <p className={styles.chartNote}>{c.note}</p>
          <RouteRow route={c.route} />
        </div>
      ))}

      {blocks.map((b) => (
        <div key={b.title} className={styles.chart}>
          <h2 className={styles.chartTitle}>{b.title}</h2>
          {b.chart}
          <p className={styles.chartNote}>{b.note}</p>
          <RouteRow route={b.route} />
        </div>
      ))}

      {bars.map((c) => (
        <div key={c.title} className={styles.chart}>
          <h2 className={styles.chartTitle}>{c.title}</h2>
          <div className={styles.bars}>
            {/* Keyed by position, not name: the grosses list holds two shows
                at La Défense Arena (Fally Ipupa's and Burna's), so names can
                repeat — React logged a duplicate-key error for exactly that.
                Rank IS the identity in a ranked list; RankedBars agrees. */}
            {c.items.map((it, i) => (
              <div key={i} className={styles.barRow}>
                <div className={styles.barHead}>
                  <span className={styles.barName}>
                    <span className={styles.barVenue}>{it.name}</span>
                    {it.tag && <span className={styles.barTag}> ({it.tag})</span>}
                    {it.meta && <span className={styles.barMeta}> · {it.meta}</span>}
                  </span>
                  <span className={styles.barValue}>{it.value}</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${it.his ? styles.barFillHis : ""} ${it.partial ? styles.barFillPartial : ""}`}
                    style={{ width: `${Math.round(it.frac * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className={styles.chartNote}>{c.note}</p>
          <RouteRow route={c.route} />
        </div>
      ))}

      {/* Donuts */}
      {donuts.map((d) => {
        const total = d.legend.reduce((n, l) => n + l.value, 0);
        let cursor = 0;
        const arcs = d.legend.map((l) => {
          const len = (l.value / total) * C;
          const arc = { color: l.color, dash: `${Math.max(len - 2, 0.5)} ${C - len}`, off: -cursor };
          cursor += len;
          return arc;
        });
        return (
          <div key={d.title} className={styles.donut}>
            <h2 className={styles.chartTitle}>{d.title}</h2>
            <div className={styles.donutBody}>
              <svg
                className={styles.donutSvg}
                viewBox="0 0 96 96"
                role="img"
                aria-label={`${d.title}: ${[...d.legend, ...(d.extras ?? [])].map((l) => `${l.value} ${l.label}`).join(", ")}`}
              >
                <g transform="rotate(-90 48 48)">
                  {arcs.map((a, i) => (
                    <circle
                      key={i}
                      cx="48"
                      cy="48"
                      r={R}
                      fill="none"
                      stroke={a.color}
                      strokeWidth={STROKE}
                      strokeDasharray={a.dash}
                      strokeDashoffset={a.off}
                    />
                  ))}
                </g>
                <text x="48" y="55" textAnchor="middle" className={styles.donutCentre}>
                  {d.centre}
                </text>
              </svg>
              {/* The label sits under the ring, not inside it: "certifications"
                  is wider than a 96px circle's inner hole, and at this size
                  there is no font size that fits it without going under the
                  10px floor. */}
              <div className={styles.donutSide}>
                <div className={styles.donutCentreLabel}>{d.centreLabel}</div>
                <div className={styles.legend}>
                  {d.legend.map((l) => (
                    <div key={l.label} className={styles.legendRow}>
                      <span
                        className={styles.legendDot}
                        style={{ background: l.color }}
                        aria-hidden="true"
                      />
                      <span className={styles.legendLabel}>{l.label}</span>
                      <span className={styles.legendValue}>{l.value}</span>
                    </div>
                  ))}
                  {(d.extras ?? []).map((x) => (
                    <div key={x.label} className={styles.legendRow}>
                      <span className={styles.legendDot} aria-hidden="true" />
                      <span className={styles.legendLabel}>{x.label}</span>
                      <span className={styles.legendValue}>{x.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <RouteRow route={d.route} />
          </div>
        );
      })}

      <MobileProvenance size="p3">{footNote}</MobileProvenance>

    </div>
  );
}
