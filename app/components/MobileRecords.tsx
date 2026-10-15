import Link from "./SiteLink";
import styles from "./mobileRecords.module.css";
import type { RevenueShow } from "../data/tourRevenue";
import type { RecordShelf } from "../lib/recordShelves";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { ProvDateText } from "./Provenance";

/**
 * The mobile records hub.
 *
 * A distinct screen, not the desktop hub narrowed: a two-up headline grid, the
 * record books on their four shelves as dense rows (Job 4, fix 80; Wayfinding
 * §3, Mobile 04), then a condensed box-office list. Built from
 * designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 04.
 *
 * Every figure arrives derived from app/data.
 */
const figure = (n: number) => new Intl.NumberFormat("en-GB").format(n);

export default function MobileRecords({
  headline,
  shelves,
  shows,
  hisShows,
  showCount,
}: {
  headline: { value: string; label: string; note: string; href: string }[];
  shelves: RecordShelf[];
  shows: RevenueShow[];
  hisShows: number;
  showCount: number;
}) {
  const bookCount = shelves.reduce((n, s) => n + s.books.length, 0);
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Records</span>
        <span className={styles.backNote}>{bookCount} books</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Record-breaking</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.h1}>
          Career <span className={styles.gold}>Records</span>
        </h1>
        <p className={styles.lede}>
          Charts, awards, tours and the firsts that made history.
        </p>
      </div>

      {/* Headline stats — two up */}
      <div className={styles.headlineGrid}>
        {headline.map((s) => (
          <Link key={s.label} href={s.href} className={styles.headlineCell}>
            <div className={styles.headlineValue}>{s.value}</div>
            <div className={styles.headlineLabel}>{s.label}</div>
            <div className={styles.headlineNote}>{s.note}</div>
          </Link>
        ))}
      </div>

      {/* The record books, shelf by shelf */}
      <div className={styles.sectionLabel}>The record books</div>
      <div className={styles.shelves}>
        {shelves.map((shelf) => (
          <div key={shelf.name} className={styles.shelf}>
            <div className={styles.shelfHead}>
              <span className={styles.shelfTick} aria-hidden="true" />
              <h2 className={styles.shelfName}>{shelf.name}</h2>
              <span className={styles.shelfCount}>
                {shelf.books.length}
                <span className="visuallyHidden"> books</span>
              </span>
            </div>
            <div className={styles.bookList}>
              {shelf.books.map((b) => (
                <Link key={b.href} href={b.href} className={styles.bookRow}>
                  <span className={styles.bookMain}>
                    <span className={styles.bookTitle}>{b.title}</span>
                    <span className={styles.bookDesc}>{b.desc}</span>
                  </span>
                  <span className={styles.bookSide}>
                    <span className={styles.bookFigure}>{figure(b.figure)}</span>
                    <span className={styles.bookUnit}>{b.unit}</span>
                    {b.day ? (
                      <ProvDateText className={styles.bookDate} date={{ label: "Updated", day: b.day }} />
                    ) : null}
                  </span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Box office */}
      <div className={styles.boxHead}>
        <div className={styles.kicker}>Box office</div>
        <h2 className={styles.h2}>Highest-grossing shows</h2>
        <p className={styles.boxLede}>
          {hisShows} of the {showCount} verified African single-show grosses are his.
        </p>
      </div>
      <div className={styles.showList}>
        {shows.map((s, i) => (
          <Link
            key={`${s.artist}-${s.venue}-${s.year}-${i}`}
            href="/records/tours/revenue"
            className={styles.showRow}
          >
            <span className={styles.showRank}>{i + 1}</span>
            <span className={styles.showMain}>
              <span className={styles.showVenue}>{s.flag} {s.venue}</span>
              <span className={styles.showMeta}>{s.artist} · {s.year}</span>
            </span>
            <span
              className={`${styles.showGross} ${s.artist === "Burna Boy" ? styles.showGrossHis : ""}`}
            >
              ${(s.revenue / 1e6).toFixed(2)}M
            </span>
          </Link>
        ))}
      </div>

      <Link href="/records/tours/revenue" className={styles.allBtn}>
        Full leaderboard<span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
