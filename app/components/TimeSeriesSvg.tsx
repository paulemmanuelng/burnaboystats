import styles from "./TimeSeriesChart.module.css";
import { shortDate, type TimeSeriesGeometry } from "../lib/charts/timeSeriesGeometry";

/**
 * The drawing of a dated line chart, from its geometry. No hooks and no
 * directive, so the desktop server chart and the phone's client chart
 * (PxTimeSeries) draw the same marks (site review 8 Oct 2026, J5-1).
 *
 * `px`: the viewBox is the chart's own CSS box, so the text is set at its
 * CSS size (11px labels, mono 700) and never scales with the drawing.
 */
export default function TimeSeriesSvg({
  g,
  format,
  ariaLabel,
  unitLabel,
  px = false,
}: {
  g: TimeSeriesGeometry;
  format: (v: number) => string;
  ariaLabel: string;
  unitLabel?: string;
  px?: boolean;
}) {
  const { w: W, h: H, pad, x, y } = g;
  const label = (cls: string) => (px ? `${cls} ${styles.pxLabel}` : cls);
  return (
    <svg
      className={px ? `${styles.svg} ${styles.pxSvg}` : styles.svg}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
    >
      {g.yTicks.map((v) => (
        <g key={v}>
          <line className={styles.grid} x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} />
          <text className={label(styles.axis)} x={pad.l - 8} y={y(v)} textAnchor="end" dominantBaseline="middle">
            {format(v)}
          </text>
        </g>
      ))}

      {unitLabel && (
        <text className={label(styles.unit)} x={pad.l} y={12}>
          {unitLabel}
        </text>
      )}

      <path className={styles.area} d={g.area} />
      <path className={styles.line} d={g.line} />

      {g.marks.map((m) => (
        <g key={m.date}>
          <line
            className={styles.markLine}
            x1={x(m.point.date)}
            x2={x(m.point.date)}
            y1={y(m.point.value)}
            y2={H - pad.b}
          />
          <circle className={styles.markDot} cx={x(m.point.date)} cy={y(m.point.value)} r={4} />
          <text
            className={label(styles.markLabel)}
            x={x(m.point.date)}
            y={y(m.point.value) - 10}
            textAnchor={x(m.point.date) > W * 0.72 ? "end" : "middle"}
          >
            {m.label}
          </text>
        </g>
      ))}

      <circle className={styles.lastDot} cx={x(g.last.date)} cy={y(g.last.value)} r={4.5} />

      {g.xTicks.map((p) => (
        <text
          key={p.date}
          className={label(styles.axis)}
          x={x(p.date)}
          y={H - pad.b + 18}
          textAnchor={p === g.xTicks[0] ? "start" : p === g.xTicks[g.xTicks.length - 1] ? "end" : "middle"}
        >
          {shortDate(p.date, g.yearly)}
        </text>
      ))}
    </svg>
  );
}
