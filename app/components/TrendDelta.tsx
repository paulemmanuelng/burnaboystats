import styles from "./TrendDelta.module.css";

// A directional change indicator: ▲ +2 (a rise, gold) / ▼ −1 (a drop, red).
// Pass an improvement-oriented value — positive always means "better" — so for
// a chart rank moving #22 → #17 you pass +5 (places gained), not −5. The arrow
// carries direction independently of colour (accessibility).
function fmt(n: number, format: "int" | "pct" | "compact"): string {
  if (format === "pct") return `${n.toFixed(1)}%`;
  if (format === "compact") {
    if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
    if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
    if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  }
  return n.toLocaleString("en-US");
}

export default function TrendDelta({
  value,
  format = "int",
  suffix = "",
  label,
}: {
  value: number;
  format?: "int" | "pct" | "compact";
  suffix?: string;
  label?: string; // optional trailing context, e.g. "this week"
}) {
  if (!value) return <span className={styles.flat} aria-label="no change">—</span>;
  const up = value > 0;
  const magnitude = fmt(Math.abs(value), format);

  return (
    <span
      className={`${styles.delta} ${up ? styles.up : styles.down}`}
      aria-label={`${up ? "up" : "down"} ${magnitude}${suffix}${label ? ` ${label}` : ""}`}
    >
      <span className={styles.arrow} aria-hidden="true">{up ? "▲" : "▼"}</span>
      <span className={styles.num}>{up ? "+" : "−"}{magnitude}{suffix}</span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </span>
  );
}
