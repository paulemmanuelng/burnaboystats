import Link from "next/link";
import styles from "./onThisDayBand.module.css";
import { KIND_INK, KIND_LABEL, anniversary, yearsAgo, type OnThisDayPick } from "../lib/onThisDay";

/**
 * The home page's "On this day" band — desktop. MobileOnThisDayCard is the
 * phone's.
 *
 * It sits under "History made", the page's one dated story, so the upper page
 * (hero, scoreboard, history) keeps its place to the pixel. The pick is made
 * once, in app/page.tsx, from the London date at render and handed to both
 * layouts — a server render with nothing to recompute in the browser, which is
 * what keeps hydration quiet. The home page revalidates hourly, so the band
 * turns over within the hour after London's midnight.
 *
 * Three rows at most: the day's lead event (rank, then the most recent year)
 * and the next two. The day page holds the rest.
 */
export default function OnThisDayBand({ pick }: { pick: OnThisDayPick | null }) {
  if (!pick) return null;
  const { day, events, mode } = pick;
  const year = Number(pick.iso.slice(0, 4));
  const shown = events.slice(0, 3);
  const lead = shown[0];

  return (
    <section className={styles.band} aria-labelledby="otd-title">
      <div className={styles.inner}>
        <div className={styles.lead}>
          <div className={styles.kicker}>
            {mode === "today" ? `On this day · ${day.label}` : "On this day"}
          </div>
          <h2 id="otd-title" className={styles.title}>
            {mode === "today" ? `${yearsAgo(year - lead.year)} today` : `Coming up: ${day.label}`}
          </h2>
          <div className={styles.links}>
            <Link href={`/on-this-day/${day.slug}`} className={styles.link}>
              {events.length > 1 ? `All ${events.length} on ${day.label}` : `${day.label}, every year`} →
            </Link>
            <Link href="/on-this-day" className={styles.link}>
              The calendar →
            </Link>
          </div>
        </div>

        <ol className={styles.list}>
          {shown.map((e) => (
            <li key={e.id}>
              <Link href={e.href} className={styles.row}>
                <span className={styles.year}>{e.year}</span>
                <span className={styles.body}>
                  <span className={styles.meta}>
                    <span className={styles.tag} style={{ color: KIND_INK[e.kind], borderColor: KIND_INK[e.kind] }}>
                      {KIND_LABEL[e.kind]}
                    </span>
                    <span className={styles.ago}>
                      {mode === "today" ? yearsAgo(year - e.year) : anniversary(year - e.year)}
                    </span>
                  </span>
                  <span className={styles.headline}>{e.headline}</span>
                  <span className={styles.detail}>{e.detail}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
