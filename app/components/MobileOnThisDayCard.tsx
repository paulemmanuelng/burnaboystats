import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import { KIND_INK, KIND_LABEL, anniversary, yearsAgo, type OnThisDayPick } from "../lib/onThisDay";

/**
 * The phone home's "On this day" card — OnThisDayBand is the desktop's.
 *
 * Last on the screen, under "History made", so nothing above it moves. Same
 * pick as the desktop band (made once in app/page.tsx from the London date),
 * same three rows at most, the day page one tap away.
 */
export default function MobileOnThisDayCard({ pick }: { pick: OnThisDayPick | null }) {
  if (!pick) return null;
  const { day, events, mode } = pick;
  const year = Number(pick.iso.slice(0, 4));
  const shown = events.slice(0, 3);
  const lead = shown[0];

  return (
    <section className={styles.homeCard} aria-labelledby="otd-title-m">
      <p className={styles.kicker}>{mode === "today" ? `On this day · ${day.label}` : "On this day"}</p>
      <h2 id="otd-title-m" className={styles.homeTitle}>
        {mode === "today" ? `${yearsAgo(year - lead.year)} today` : `Coming up: ${day.label}`}
      </h2>
      <ol className={styles.list}>
        {shown.map((e) => (
          <li key={e.id}>
            <Link href={e.href} className={styles.row}>
              <span className={styles.rowTop}>
                <span className={styles.year}>{e.year}</span>
                <span className={styles.tag} style={{ color: KIND_INK[e.kind], borderColor: KIND_INK[e.kind] }}>
                  {KIND_LABEL[e.kind]}
                </span>
                <span className={styles.ago}>
                  {mode === "today" ? yearsAgo(year - e.year) : anniversary(year - e.year)}
                </span>
              </span>
              <span className={styles.headline}>{e.headline}</span>
              <span className={styles.detail}>{e.detail}</span>
            </Link>
          </li>
        ))}
      </ol>
      <div className={styles.homeLinks}>
        <Link href={`/on-this-day/${day.slug}`} className={styles.pill}>
          {events.length > 1 ? `All ${events.length} on ${day.label}` : `${day.label}, every year`} ↗
        </Link>
        <Link href="/on-this-day" className={styles.textLink}>
          The calendar →
        </Link>
      </div>
    </section>
  );
}
