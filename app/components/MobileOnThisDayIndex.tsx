import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import { KindMark } from "./OnThisDayKind";
import { KIND_MARK, KIND_ORDER, MONTHS, onThisDayCounts, onThisDayDays, onThisDayEvents } from "../lib/onThisDay";

/**
 * The phone's On this day calendar — the desktop page draws twelve month
 * grids; a 44px tap target will not fit seven to a row on a phone, so here
 * each month lists only its days that HAVE a milestone, as chips. The same
 * days, the same links, the same counts.
 */
export default function MobileOnThisDayIndex() {
  const kinds = KIND_ORDER.filter((k) => onThisDayCounts[k] > 0);

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>On this day</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <p className={styles.kicker}>Burna Boy · the calendar</p>
        {/* The page's <h1>, one per layout — only one is ever visible. */}
        <h1 className={styles.title}>
          On this <span className={styles.gold}>day</span>
        </h1>
        <p className={styles.lede}>
          {onThisDayEvents.length} dated milestones on {onThisDayDays.length} days of the year. Tap a date for
          everything that happened on it.
        </p>
      </div>

      <div className={styles.tally}>
        {kinds.map((k) => (
          <span key={k} className={styles.tallyItem}>
            <KindMark kind={k} className={styles.dot} />
            {KIND_MARK[k].word} {onThisDayCounts[k]}
          </span>
        ))}
      </div>

      {MONTHS.map((name, i) => {
        const days = onThisDayDays.filter((d) => d.month === i + 1);
        return (
          <section key={name} className={styles.month} aria-labelledby={`otd-m-${i}`}>
            <h2 id={`otd-m-${i}`} className={styles.monthName}>
              {name}
              <span className={styles.monthCount}>{days.length ? `${days.length} dates` : "no dated milestone yet"}</span>
            </h2>
            {days.length > 0 && (
              <div className={styles.chips}>
                {days.map((d) => (
                  <Link
                    key={d.key}
                    href={`/on-this-day/${d.slug}`}
                    className={styles.chip}
                    aria-label={`${d.label} — ${d.events.length} milestone${d.events.length === 1 ? "" : "s"}`}
                  >
                    {d.day}
                    <KindMark kind={d.lead.kind} alone size={8} className={styles.chipDot} />
                  </Link>
                ))}
              </div>
            )}
          </section>
        );
      })}

      <p className={styles.note}>
        Only records that carry their own day are here: a certification on the award date its body&apos;s
        register prints, a chart peak on the issue that first carried it, a show on the night itself. A record
        known only by its year stays off the calendar until its day is read — see the{" "}
        <Link href="/methodology">methodology</Link>.
      </p>
    </div>
  );
}
