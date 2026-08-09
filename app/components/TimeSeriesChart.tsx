import styles from "./TimeSeriesChart.module.css";

/**
 * A dated line chart — the site's first chart with a TIME axis.
 *
 * Everything else here plots a ranking or a distribution: how big, how many,
 * where. This one plots WHEN, which is the shape the career's best stories
 * actually have (a climb to sixty million, a certification pace that keeps
 * steepening). Same custom-SVG approach as RankedBars and Sparkline — no
 * charting dependency, no client JS, renders inside the static page.
 *
 * `annotations` mark the moments worth naming on the line itself. They are
 * matched to the nearest point at or after their date, so a milestone logged
 * between two readings still lands on real data rather than an invented one.
 *
 * Accessibility and crawlers get the same numbers as sighted readers: the
 * series is emitted as a visually-hidden table, not left as an unreadable
 * <svg>. That also means the figures are in the HTML for search engines.
 */

export interface SeriesPoint {
  date: string; // ISO "YYYY-MM-DD"
  value: number;
}

export interface SeriesAnnotation {
  date: string;
  label: string;
}

const shortDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function TimeSeriesChart({
  points,
  annotations = [],
  format = (v) => String(v),
  ariaLabel,
  valueLabel = "Value",
  unitLabel,
  aspect = "wide",
}: {
  points: SeriesPoint[];
  annotations?: SeriesAnnotation[];
  /** Renders a value for the axis, the tooltip-style end label and the table. */
  format?: (v: number) => string;
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
}) {
  if (points.length < 2) return null;

  // A fixed viewBox scaled by CSS: the chart is crisp at any width without
  // measuring the container, which would force this to be a client component.
  const W = 720;
  const H = aspect === "tall" ? 400 : 260;
  const padL = 46;
  const padR = 16;
  const padT = 22;
  const padB = 30;

  const values = points.map((p) => p.value);
  const times = points.map((p) => new Date(`${p.date}T12:00:00Z`).getTime());
  const tMin = Math.min(...times);
  const tMax = Math.max(...times);
  const tRange = tMax - tMin || 1;

  // Head-room above and below so the line never touches the frame, and the
  // baseline never implies zero when the series lives in a narrow band.
  const vMin = Math.min(...values);
  const vMax = Math.max(...values);
  const band = vMax - vMin || Math.abs(vMax) || 1;
  const yLo = vMin - band * 0.18;
  const yHi = vMax + band * 0.18;

  const x = (iso: string) =>
    padL +
    ((new Date(`${iso}T12:00:00Z`).getTime() - tMin) / tRange) *
      (W - padL - padR);
  const y = (v: number) =>
    padT + (1 - (v - yLo) / (yHi - yLo)) * (H - padT - padB);

  const coords = points.map(
    (p) => `${x(p.date).toFixed(1)},${y(p.value).toFixed(1)}`,
  );
  const line = `M${coords.join("L")}`;
  const area = `${line}L${x(points[points.length - 1].date).toFixed(1)},${H - padB}L${x(
    points[0].date,
  ).toFixed(1)},${H - padB}Z`;

  // Three horizontal guides: low, middle, high — enough to read the scale
  // without turning the plot into graph paper.
  const yTicks = [vMin, (vMin + vMax) / 2, vMax];

  // First, last and a middle date. More than three crowds a phone.
  const xTicks = [
    points[0],
    points[Math.floor((points.length - 1) / 2)],
    points[points.length - 1],
  ];

  const marks = annotations
    .map((a) => {
      const hit =
        points.find((p) => p.date >= a.date) ?? points[points.length - 1];
      return { ...a, point: hit };
    })
    // Two milestones landing on the same reading would stack their labels.
    .filter(
      (m, i, all) => all.findIndex((o) => o.point.date === m.point.date) === i,
    );

  const last = points[points.length - 1];

  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={ariaLabel}
        preserveAspectRatio="xMidYMid meet"
      >
        {yTicks.map((v) => (
          <g key={v}>
            <line
              className={styles.grid}
              x1={padL}
              x2={W - padR}
              y1={y(v)}
              y2={y(v)}
            />
            <text
              className={styles.axis}
              x={padL - 8}
              y={y(v)}
              textAnchor="end"
              dominantBaseline="middle"
            >
              {format(v)}
            </text>
          </g>
        ))}

        {unitLabel && (
          <text className={styles.unit} x={padL} y={12}>
            {unitLabel}
          </text>
        )}

        <path className={styles.area} d={area} />
        <path className={styles.line} d={line} />

        {marks.map((m) => (
          <g key={m.date}>
            <line
              className={styles.markLine}
              x1={x(m.point.date)}
              x2={x(m.point.date)}
              y1={y(m.point.value)}
              y2={H - padB}
            />
            <circle
              className={styles.markDot}
              cx={x(m.point.date)}
              cy={y(m.point.value)}
              r={4}
            />
            <text
              className={styles.markLabel}
              x={x(m.point.date)}
              y={y(m.point.value) - 10}
              textAnchor={x(m.point.date) > W * 0.72 ? "end" : "middle"}
            >
              {m.label}
            </text>
          </g>
        ))}

        <circle
          className={styles.lastDot}
          cx={x(last.date)}
          cy={y(last.value)}
          r={4.5}
        />

        {xTicks.map((p) => (
          <text
            key={p.date}
            className={styles.axis}
            x={x(p.date)}
            y={H - padB + 18}
            textAnchor={
              p === xTicks[0]
                ? "start"
                : p === xTicks[xTicks.length - 1]
                  ? "end"
                  : "middle"
            }
          >
            {shortDate(p.date)}
          </text>
        ))}
      </svg>

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
                <th scope="row">{longDate(p.date)}</th>
                <td>{format(p.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
