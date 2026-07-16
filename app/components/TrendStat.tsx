import Sparkline from "./Sparkline";
import TrendDelta from "./TrendDelta";
import styles from "./TrendStat.module.css";

// A headline "trending" stat: a mono kicker, the big Anton value, a sparkline of
// its recent history, and a directional delta. Composes the two reusable trend
// primitives (Sparkline + TrendDelta) so the same pattern can be dropped anywhere.
export default function TrendStat({
  kicker,
  value,
  series,
  delta,
  deltaFormat = "compact",
  deltaSuffix = "",
  deltaLabel,
  note,
}: {
  kicker: string;
  value: string;
  series?: number[];
  delta?: number;
  deltaFormat?: "int" | "pct" | "compact";
  deltaSuffix?: string;
  deltaLabel?: string;
  note?: string;
}) {
  return (
    <div className={styles.card}>
      <span className={styles.kicker}>{kicker}</span>
      <div className={styles.body}>
        <div className={styles.left}>
          <span className={styles.value}>{value}</span>
          {delta != null ? (
            <TrendDelta value={delta} format={deltaFormat} suffix={deltaSuffix} label={deltaLabel} />
          ) : null}
        </div>
        {series && series.length > 1 ? (
          <Sparkline data={series} width={130} height={40} ariaLabel={`${kicker} trend`} />
        ) : null}
      </div>
      {note ? <p className={styles.note}>{note}</p> : null}
    </div>
  );
}
