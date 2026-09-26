import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import OnThisDaySaveCard from "./OnThisDaySaveCard";
import { KindMark, KindPill } from "./OnThisDayKind";
import { CANONICAL_ORIGIN } from "../lib/seo";
import { cardFilename, cardPath, cardPreviewSrc } from "../lib/cardPreview";
import {
  KIND_MARK,
  homeAge,
  homeDayLink,
  homeLeadAge,
  homeRows,
  homeWhen,
  isRecordLine,
  type OnThisDayPick,
} from "../lib/onThisDay";

/**
 * The phone home's "On this day" card (designs/desktop/OTD Home Card.dc.html,
 * phone) — OnThisDayBand is the desktop's.
 *
 * The desktop's order, stacked: the kicker with the date and countdown, the
 * lead milestone as the title, its kind, year and age, its detail; the day's
 * other anniversaries, each with its own age; the day's card as a 96×120
 * thumbnail with an outlined "Save or share ↓"; then two full-width 44px link
 * rows. No gold action — the screen's one is elsewhere.
 *
 * Last on the screen, under "History made". Same pick as the desktop band,
 * made once in app/page.tsx from the London date.
 */
export default function MobileOnThisDayCard({ pick }: { pick: OnThisDayPick | null }) {
  if (!pick) return null;
  const { day } = pick;
  const [lead, ...rest] = homeRows(pick);
  const card = cardPath(day.slug);

  return (
    <section className={styles.homeCard} aria-labelledby="otd-title-m">
      <p className={styles.homeKicker}>
        On this day · <span className={styles.homeWhen}>{homeWhen(pick)}</span>
      </p>
      <h2 id="otd-title-m" className={styles.homeTitle}>
        {lead.headline}
      </h2>
      <p className={styles.homeMeta}>
        <KindPill kind={lead.kind} className={styles.homePill} />
        {lead.year} · <span className={styles.homeAge}>{homeLeadAge(pick)}</span>
      </p>
      <p className={isRecordLine(lead) ? styles.homeRecord : styles.homeDetail}>{lead.detail}</p>

      {rest.length > 0 && (
        <ol className={styles.homeRest}>
          {rest.map((e) => (
            <li key={e.id}>
              <Link href={e.href} className={styles.homeRow}>
                <span className={styles.homeRowYear}>{e.year}</span>
                <span className={styles.homeRowBody}>
                  <span className={styles.homeRowHeadline}>
                    <KindMark kind={e.kind} className={styles.homeRowMark} />
                    {e.headline}
                  </span>
                  <span className={styles.homeRowMeta}>
                    {KIND_MARK[e.kind].word} · {homeAge(pick, e)}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}

      <div className={styles.homeCardBox}>
        <a href={card} className={styles.homeThumb}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a route-drawn WebP, sized by the route */}
          <img
            src={cardPreviewSrc(day.slug, 320)}
            alt={`The ${day.label} card: ${day.lead.year}, ${day.lead.headline}`}
            width={96}
            height={120}
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className={styles.homeCardCopy}>
          <p className={styles.homeCardName}>The {day.label} card, ready to post</p>
          <OnThisDaySaveCard
            src={card}
            filename={cardFilename(day.slug)}
            shareText={`Burna Boy on this day, ${day.label}: ${day.lead.year} — ${day.lead.headline}. ${CANONICAL_ORIGIN}/on-this-day/${day.slug}`}
            className={`btn btnSecondary ${styles.homeSave}`}
          >
            <span>Save or share</span>
            <span aria-hidden="true">↓</span>
          </OnThisDaySaveCard>
        </div>
      </div>

      <div className={styles.homeLinks}>
        <Link href={`/on-this-day/${day.slug}`} className={styles.homeLinkRow}>
          <span>{homeDayLink(pick)}</span>
          <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/on-this-day" className={styles.homeLinkRow}>
          <span>The calendar</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
