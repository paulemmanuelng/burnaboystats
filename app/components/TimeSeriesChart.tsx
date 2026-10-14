import styles from "./TimeSeriesChart.module.css";
import TimeSeriesSvg from "./TimeSeriesSvg";
import PxTimeSeries from "./PxTimeSeries";
import {
  SERIES_FORMATS,
  SERIES_TICKS,
  isYearly,
  timeSeriesGeometry,
  type SeriesAnnotation,
  type SeriesFormat,
  type SeriesPoint,
} from "../lib/charts/timeSeriesGeometry";

/**
 * A dated line chart — the site's first chart with a TIME axis.
 *
 * Everything else here plots a ranking or a distribution: how big, how many,
 * where. This one plots WHEN, which is the shape the career's best stories
 * actually have (a climb to sixty million, a certification pace that keeps
 * steepening). Same custom-SVG approach as RankedBars and Sparkline — no
 * charting dependency, renders inside the static page. The desktop chart has
 * no client JS; the phone's (`px`) measures its box so its text stays at its
 * CSS size (site review 8 Oct 2026, J5-1).
 *
 * `annotations` mark the moments worth naming on the line itself. They are
 * matched to the nearest point at or after their date, so a milestone logged
 * between two readings still lands on real data rather than an invented one.
 *
 * Accessibility and crawlers get the same numbers as sighted readers: the
 * series is emitted as a visually-hidden table, not left as an unreadable
 * <svg>. That also means the figures are in the HTML for search engines.
 */

export type { SeriesPoint, SeriesAnnotation, SeriesFormat };

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function TimeSeriesChart({
  points,
  annotations = [],
  format = "plain",
  ariaLabel,
  valueLabel = "Value",
  unitLabel,
  aspect = "wide",
  zeroBased = false,
  area = true,
  px = false,
}: {
  points: SeriesPoint[];
  annotations?: SeriesAnnotation[];
  /** How a value is printed on the axis and in the table — named, not passed
   *  as a function, so the phone's client chart can take it (J5-1). */
  format?: SeriesFormat;
  ariaLabel: string;
  /** Column heading for the hidden data table. */
  valueLabel?: string;
  /** Printed inside the plot: what is being measured and where it comes from
   *  ("Spotify · monthly listeners"). A line with no units is a shape, not a
   *  statistic — and on mobile the section eyebrow that used to carry this
   *  isn't rendered at all. */
  unitLabel?: string;
  /** "tall" trades width for height — a phone column is narrow, and a climb
   *  read at 2.8:1 there flattens into a nearly straight line. */
  aspect?: "wide" | "tall";
  /** The axis from zero with round ticks (niceTicks) — so a 25% climb reads
   *  as 25% (site review 8 Oct 2026, J5-2 (a)). */
  zeroBased?: boolean;
  /** false: the line only, no wash under it (J5-2 (a)). */
  area?: boolean;
  /** The phone: drawn at its CSS box (PxTimeSeries), 1 unit = 1 CSS px, so its
   *  text is never scaled down with the drawing (site review 8 Oct, J5-1).
   *  Desktop leaves it unset and keeps its fixed viewBox, server-rendered. */
  px?: boolean;
}) {
  if (points.length < 2) return null;

  const fmt = SERIES_FORMATS[format];
  const yearly = isYearly(points);

  return (
    <figure className={styles.figure}>
      {px ? (
        <PxTimeSeries
          points={points}
          annotations={annotations}
          format={format}
          ariaLabel={ariaLabel}
          unitLabel={unitLabel}
          zeroBased={zeroBased}
          area={area}
        />
      ) : (
        // A fixed viewBox scaled by CSS: the chart is crisp at any width
        // without measuring the container, which would force this to be a
        // client component.
        <TimeSeriesSvg
          g={timeSeriesGeometry(points, annotations, {
            w: 720,
            h: aspect === "tall" ? 400 : 260,
            pad: { l: 46, r: 16, t: 22, b: 30 },
            zeroBased,
          })}
          format={fmt}
          tickFormat={SERIES_TICKS[format]}
          ariaLabel={ariaLabel}
          unitLabel={unitLabel}
          area={area}
        />
      )}

      {/* The same series as text — for screen readers, and for crawlers that
          never see an SVG's shape.

          The clip lives on a wrapping div, not the table: a <table> treats
          `width: 1px` as a MINIMUM (auto table layout sizes to its content),
          so hiding the table directly let 26 dated rows push the page's
          scroll width to 580px at every mobile size. A block wrapper clips
          properly. */}
      <div className="visuallyHidden">
        <table>
          <caption>{ariaLabel}</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {points.map((p) => (
              <tr key={p.date}>
                <th scope="row">{yearly ? p.date.slice(0, 4) : longDate(p.date)}</th>
                <td>{fmt(p.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
