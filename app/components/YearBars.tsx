import styles from "./yearBars.module.css";
import { niceTicks } from "../lib/charts/niceTicks";

export interface YearCount {
  year: number;
  value: number;
}

/**
 * Yearly counts as bars, every year labelled (site review 8 Oct 2026, Job 5 ·
 * J5-2 (b), (e)). Discrete counts per year read as bars, not as a line that
 * implies a value between two ceremonies. HTML and CSS — no viewBox, so the
 * 11px labels are 11px at every width — on a zero-based axis with round
 * ticks (niceTicks). Bars are the single-series --other; the running year,
 * still open, is hatched and its key line says to when it is counted.
 *
 * `years` must hold every year in its span (a year with no count is a 0, not
 * a gap). The phone prints two-digit years and says so in the key line.
 */
export default function YearBars({
  years,
  running,
  ariaLabel,
  valueLabel,
  layout,
}: {
  years: YearCount[];
  /** The year still running, and the dated words for it ("updated 10 Oct 2026"). */
  running?: { year: number; asOf: string };
  ariaLabel: string;
  /** Column heading for the hidden data table. */
  valueLabel: string;
  layout: "desktop" | "phone";
}) {
  if (!years.length) return null;
  const max = Math.max(...years.map((y) => y.value), 1);
  const ticks = niceTicks(0, max);
  const top = ticks[ticks.length - 1];
  const phone = layout === "phone";
  const first = years[0].year;
  const last = years[years.length - 1].year;
  const short = (y: number) => String(y).slice(-2);
  const keyParts = [
    phone ? `'${short(first)}–'${short(last)} = ${first}–${last}` : null,
    running ? `hatched = ${running.year} so far · ${running.asOf}` : null,
  ].filter(Boolean) as string[];
  const key = keyParts.join(" · ");

  return (
    <figure className={phone ? `${styles.figure} ${styles.phone}` : styles.figure}>
      <div className={styles.plot} role="img" aria-label={ariaLabel}>
        {ticks.map((t) => (
          <span key={t} className={styles.tick} style={{ bottom: `${(t / top) * 100}%` }} aria-hidden="true">
            <span className={styles.tickLabel}>{t}</span>
          </span>
        ))}
        <div className={styles.bars} aria-hidden="true">
          {years.map((y) => (
            <span key={y.year} className={styles.slot}>
              <span
                className={`${styles.bar} ${running?.year === y.year ? styles.partial : ""}`}
                style={{ height: `${(y.value / top) * 100}%` }}
              />
            </span>
          ))}
        </div>
      </div>
      <div className={styles.years} aria-hidden="true">
        {years.map((y) => (
          <span key={y.year} className={styles.year}>
            {phone ? short(y.year) : y.year}
          </span>
        ))}
      </div>
      {key && <p className={styles.key}>{key.charAt(0).toUpperCase() + key.slice(1)}</p>}

      {/* The same counts as text, for screen readers and crawlers. */}
      <div className="visuallyHidden">
        <table>
          <caption>{ariaLabel}</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {years.map((y) => (
              <tr key={y.year}>
                <th scope="row">{y.year}</th>
                <td>{y.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
