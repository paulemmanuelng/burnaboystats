import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import { KIND_INK, KIND_LABEL, neighbours, yearSpan, type OnThisDayDay } from "../lib/onThisDay";

/**
 * The phone's day page — every event dated this day, newest first, each row
 * a link to the page that holds the record. The desktop page is the same list
 * in a wider frame, beside the card preview.
 */
export default function MobileOnThisDayDay({ day }: { day: OnThisDayDay }) {
  const { prev, next } = neighbours(day.key);
  const n = day.events.length;

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/on-this-day" aria-label="Back to the calendar" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>On this day</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <p className={styles.kicker}>Burna Boy · on this day</p>
        {/* The page's <h1>, one per layout — only one is ever visible. */}
        <h1 className={styles.title}>{day.label}</h1>
        <p className={styles.lede}>
          {n} milestone{n === 1 ? "" : "s"} dated {day.label}, {yearSpan(day.events)} — newest first.
        </p>
        <a href={`/on-this-day/${day.slug}/card`} download={`burna-boy-on-this-day-${day.slug}.png`} className={styles.pill}>
          Post-ready card · 1080×1350 ↓
        </a>
      </div>

      <ol className={styles.list}>
        {day.events.map((e) => (
          <li key={e.id}>
            <Link href={e.href} className={styles.row}>
              <span className={styles.rowTop}>
                <span className={styles.year}>{e.year}</span>
                <span className={styles.tag} style={{ color: KIND_INK[e.kind], borderColor: KIND_INK[e.kind] }}>
                  {KIND_LABEL[e.kind]}
                </span>
              </span>
              <span className={styles.headline}>{e.headline}</span>
              <span className={styles.detail}>{e.detail}</span>
            </Link>
          </li>
        ))}
      </ol>

      <nav className={styles.pager} aria-label="Other dates">
        <Link href={`/on-this-day/${prev.slug}`} className={styles.pagerLink}>
          ← {prev.label}
        </Link>
        <Link href={`/on-this-day/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
          {next.label} →
        </Link>
      </nav>
    </div>
  );
}
