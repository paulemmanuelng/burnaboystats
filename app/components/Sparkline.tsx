import styles from "./Sparkline.module.css";

// A tiny, dependency-free trend line for a numeric series. Gold stroke on the
// dark canvas with a soft fill beneath and a bright dot on the latest point —
// matches the site's custom-SVG viz (TierDonut/RankedBars). Purely presentational.
export default function Sparkline({
  data,
  width = 104,
  height = 30,
  strokeWidth = 1.75,
  ariaLabel,
}: {
  data: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  ariaLabel?: string;
}) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = strokeWidth + 1;
  const x = (i: number) => pad + (i / (data.length - 1)) * (width - pad * 2);
  const y = (v: number) => pad + (1 - (v - min) / range) * (height - pad * 2);

  const points = data.map((v, i) => `${x(i).toFixed(2)},${y(v).toFixed(2)}`);
  const line = `M${points.join("L")}`;
  const area = `${line}L${x(data.length - 1).toFixed(2)},${height}L${x(0).toFixed(2)},${height}Z`;
  const lastX = x(data.length - 1);
  const lastY = y(data[data.length - 1]);

  return (
    <svg
      className={styles.spark}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label={ariaLabel ?? "Trend"}
    >
      <path className={styles.area} d={area} />
      <path className={styles.line} d={line} strokeWidth={strokeWidth} />
      <circle className={styles.dot} cx={lastX} cy={lastY} r={strokeWidth + 0.75} />
    </svg>
  );
}
