import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import OnThisDaySaveCard from "./OnThisDaySaveCard";
import { KindMark, KindPill } from "./OnThisDayKind";
import { CANONICAL_ORIGIN } from "../lib/seo";
import { cardFilename, cardPath, cardPreviewSrc } from "../lib/cardPreview";
import {
  KIND_MARK,
  dayShareText,
  homeAge,
  homeDayLink,
  homeLeadAge,
  homeRows,
  homeWhenLine,
  isRecordLine,
  type OnThisDayPick,
} from "../lib/onThisDay";

const NBSP = "\u00a0";

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
 * The title, the thumbnail and "The <day> card, ready to post" open the day's
 * page (Paul, 26 Sep 2026: "it should take me to the page, not the
 * picture"); "Save or share ↓" is the way to the image itself. Every link is
 * its own <a>: none sits inside another.
 *
 * Last on the screen, under "History made". Same pick as the desktop band,
 * made once in app/page.tsx from the London date.
 */
export default function MobileOnThisDayCard({ pick }: { pick: OnThisDayPick | null }) {
  if (!pick) return null;
  const { day } = pick;
  const [lead, ...rest] = homeRows(pick);
  const card = cardPath(day.slug);
  const dayHref = `/on-this-day/${day.slug}`;

  return (
    <section className={styles.homeCard} aria-labelledby="otd-title-m">
      <p className={styles.homeKicker}>
        On this day ·{NBSP}<span className={styles.homeWhen}>{homeWhenLine(pick)}</span>
      </p>
      {/* The title is a link to the day's page, in ink. */}
      <h2 id="otd-title-m" className={styles.homeTitle}>
        <Link href={dayHref} className={styles.homeTitleLink}>
          {lead.headline}
        </Link>
      </h2>
      {/* Each " · " travels with the item after it (a no-break space), so a
          wrap never leaves it hanging: at 390 the age used to drop under
          "2021 ·". */}
      <p className={styles.homeMeta}>
        <KindPill kind={lead.kind} className={styles.homePill} />
        <span>{lead.year}</span>
        <span>
          <span aria-hidden="true">·</span>
          {NBSP}
          <span className={styles.homeAge}>{homeLeadAge(pick)}</span>
        </span>
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
        {/* The thumbnail opens the day's page, not the PNG; the link carries
            the name, so the image inside it is silent. */}
        <Link href={dayHref} className={styles.homeThumb} aria-label={`Open ${day.label}`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a route-drawn WebP, sized by the route */}
          <img
            src={cardPreviewSrc(day.slug, 320)}
            alt=""
            width={96}
            height={120}
            loading="lazy"
            decoding="async"
          />
        </Link>
        <div className={styles.homeCardCopy}>
          <p className={styles.homeCardName}>
            <Link href={dayHref} className={styles.homeCardNameLink}>
              The {day.label} card, ready to post
            </Link>
          </p>
          <OnThisDaySaveCard
            src={card}
            filename={cardFilename(day.slug)}
            shareText={dayShareText(day, CANONICAL_ORIGIN)}
            className={`btn btnSecondary ${styles.homeSave}`}
          >
            <span>Save or share</span>
            <span aria-hidden="true">↓</span>
          </OnThisDaySaveCard>
        </div>
      </div>

      <div className={styles.homeLinks}>
        <Link href={dayHref} className={styles.homeLinkRow}>
          <span>{homeDayLink(pick)}</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/on-this-day" className={styles.homeLinkRow}>
          <span>The calendar</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
