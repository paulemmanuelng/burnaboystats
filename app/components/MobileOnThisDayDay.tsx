import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import OnThisDaySaveCard from "./OnThisDaySaveCard";
import { KindPill } from "./OnThisDayKind";
import { CANONICAL_ORIGIN } from "../lib/seo";
import { cardFilename, cardPath, cardPreviewSrc } from "../lib/cardPreview";
import {
  dayLedeShort,
  dayMeta,
  dayShareText,
  isRecordLine,
  milestones,
  neighbours,
  yearGroups,
  type OnThisDayDay,
} from "../lib/onThisDay";

/**
 * The phone's day page (designs/desktop/OTD Day Page.dc.html, phone): the
 * events grouped by year, newest first, each row a link to the page that
 * holds the record; then the day's card with "Save or share", the pager
 * cards and a one-line source note. The desktop page is its own markup.
 */
export default function MobileOnThisDayDay({ day }: { day: OnThisDayDay }) {
  const { prev, next } = neighbours(day.key);
  const groups = yearGroups(day);
  const card = cardPath(day.slug);

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

      <div className={styles.dayHero}>
        <p className={styles.dayKicker}>Burna Boy · On this day</p>
        {/* The page's <h1>, one per layout — only one is ever visible. */}
        <h1 className={styles.dayTitle}>{day.label}</h1>
        <p className={styles.dayLede}>{dayLedeShort(day)}</p>
      </div>

      {groups.map((g) => (
        <section key={g.year} className={styles.yearGroup} aria-labelledby={`otd-ym-${g.year}`}>
          <div className={styles.yearHead}>
            <h2 id={`otd-ym-${g.year}`} className={styles.yearNum}>
              {g.year}
            </h2>
            <span className={styles.yearCount}>{milestones(g.events.length)}</span>
          </div>
          <ol className={styles.dayRows}>
            {g.events.map((e) => (
              <li key={e.id}>
                <Link href={e.href} className={styles.dayRow}>
                  <span className={styles.dayRowTags}>
                    <KindPill kind={e.kind} className={styles.tag} />
                    {e === day.lead && <span className={styles.cardTag}>On the card</span>}
                    <span className={styles.dayRowArrow} aria-hidden="true">
                      ↗
                    </span>
                  </span>
                  <span className={styles.dayRowHeadline}>{e.headline}</span>
                  {isRecordLine(e) ? (
                    <span className={styles.recordLine}>
                      <span className={styles.recordLabel}>Record</span>
                      {e.detail}
                    </span>
                  ) : (
                    <span className={styles.dayRowDetail}>{e.detail}</span>
                  )}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section className={styles.cardBlock} aria-labelledby="otd-card-m">
        <a href={card} className={styles.cardThumb}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a route-drawn WebP, sized by the route */}
          <img
            src={cardPreviewSrc(day.slug, 320)}
            alt={`The ${day.label} card: ${day.lead.year}, ${day.lead.headline}`}
            width={144}
            height={180}
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className={styles.cardCopy}>
          <p id="otd-card-m" className={styles.cardName}>
            The {day.label} card
          </p>
          <p className={styles.cardNote}>Ready to post. Tap to see it full size.</p>
        </div>
        <OnThisDaySaveCard
          src={card}
          filename={cardFilename(day.slug)}
          shareText={dayShareText(day, CANONICAL_ORIGIN)}
          className={`btn btnPrimary ${styles.saveBtn}`}
        >
          <span>Save or share</span>
          <span aria-hidden="true">↓</span>
        </OnThisDaySaveCard>
      </section>

      <nav className={styles.pagerCards} aria-label="Other dates">
        <Link href={`/on-this-day/${prev.slug}`} className={styles.pagerCard}>
          <span className={styles.pagerLabel}>← {prev.label}</span>
          <span className={styles.pagerHeadline}>{prev.lead.headline}</span>
          <span className={styles.pagerMeta}>{dayMeta(prev)}</span>
        </Link>
        <Link href={`/on-this-day/${next.slug}`} className={`${styles.pagerCard} ${styles.pagerCardNext}`}>
          <span className={styles.pagerLabel}>{next.label} →</span>
          <span className={styles.pagerHeadline}>{next.lead.headline}</span>
          <span className={styles.pagerMeta}>{dayMeta(next)}</span>
        </Link>
      </nav>

      <p className={styles.dayNote}>
        Every milestone here is filed on the day its own source prints.{" "}
        <Link href="/methodology">How dates are filed</Link>
      </p>
    </div>
  );
}
