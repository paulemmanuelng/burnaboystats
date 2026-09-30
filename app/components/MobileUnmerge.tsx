import styles from "./mobileUnmerge.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/** How a ledger row reads: a remix's before and after share a tinted group,
 *  and a result is marked = under a heavier rule (design response item 51). */
export type SumStep = "before" | "after" | "result";

/**
 * /analysis/spotify-unmerge on a phone.
 *
 * Built from designs/mobile/CPC Phone.dc.html (page "correction"), for the
 * design response of 30 Sep 2026, §11 and items 42–44, 51–55, 59, 78. The
 * Analysis screen's grammar: back bar back to /analysis, "Spotify
 * correction", a gold badge counting the questions (from data), then the
 * page. The five-tab bar stays (the route is in BACK_BAR_ROUTES, not
 * ACTION_BAR_ROUTES).
 *
 * Every sentence and figure is handed in by the page, which prints the same
 * words on desktop. The answer and the six questions are quoted and feed the
 * FAQPage and ClaimReview data, which the page emits once; this screen only
 * paints them, so a phone reader (and Googlebot at phone width) sees every
 * answer the schema promises (tests/faqMobileVisibility.test.tsx).
 *
 * No state, so this stays a server component.
 */
export default function MobileUnmerge({
  answer,
  sub,
  whatHappened,
  arithmeticIntro,
  sums,
  arithmeticClose,
  today,
  todayNote,
  checkIt,
  faqs,
}: {
  answer: React.ReactNode;
  sub: string;
  whatHappened: React.ReactNode[];
  arithmeticIntro: string;
  /** Fixed points, written down on purpose: ink, never a slot. */
  sums: { label: string; value: string; note?: string; step?: SumStep }[];
  arithmeticClose: React.ReactNode;
  /** Null when the career total cannot be read: the figure block goes with
   *  the paragraphs (item 52). */
  today: { total: string; paragraphs: React.ReactNode[] } | null;
  todayNote: string;
  /** "How to check it yourself", with this layout's link class. */
  checkIt: (link: string) => React.ReactNode[];
  faqs: { q: string; a: string }[];
}) {
  // A link in running prose: gold, with the site's in-text underline
  // (globals.css, the .proseLink rule: 1px, 2px offset).
  const link = `${styles.link} proseLink`;
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/analysis" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Spotify correction</span>
        {/* Gold, as on the sibling back-bar screens (owner decision, 30 Sep). */}
        <span className={styles.badge}>
          {faqs.length} {faqs.length === 1 ? "question" : "questions"}
        </span>
        <MobileMenuButton className={styles.menuAfterBadge} />
      </div>

      <div className={styles.hero}>
        {/* A label, so muted (item 54). */}
        <div className={styles.kicker}>The February 2026 correction</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Did Burna Boy lose Spotify streams <span className={styles.gold}>to bots?</span>
        </h1>
        <p className={styles.answer}>{answer}</p>
        <p className={styles.sub}>{sub}</p>
      </div>

      <div className={styles.body}>
        <h2 className={styles.h2}>What actually happened</h2>
        {whatHappened.map((body, i) => (
          <p key={i} className={styles.p}>
            {body}
          </p>
        ))}

        <h2 className={styles.h2}>The arithmetic</h2>
        <p className={styles.p}>{arithmeticIntro}</p>
        {/* Label, its note, then the value in ink display numerals. The =
            beside a result is aria-hidden: the label already says what it is. */}
        <dl className={styles.sums}>
          {sums.map((s) => (
            <div key={s.label} className={`${styles.sumRow} ${s.step ? styles[s.step] : ""}`}>
              <dt className={styles.sumLabel}>
                {s.label}
                {s.note ? <span className={styles.sumNote}>{s.note}</span> : null}
              </dt>
              <dd className={styles.sumValue}>
                <span className={styles.sumOp} aria-hidden="true">
                  {s.step === "result" ? "=" : ""}
                </span>
                <span className={styles.sumFigure}>{s.value}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className={styles.p}>{arithmeticClose}</p>

        <h2 className={styles.h2}>Where that leaves him today</h2>
        {today ? (
          <>
            {/* The page's one live figure, in gold, in its own block. */}
            <div className={styles.liveBlock}>
              <div className={styles.liveLabel}>
                <span className={styles.liveDot} aria-hidden="true" />
                Career Spotify streams · updates daily
              </div>
              <div className={styles.liveValue}>{today.total}</div>
            </div>
            {today.paragraphs.map((body, i) => (
              <p key={i} className={styles.p}>
                {body}
              </p>
            ))}
          </>
        ) : null}
        <p className={styles.note}>{todayNote}</p>

        <h2 className={styles.h2}>How to check it yourself</h2>
        {checkIt(link).map((body, i) => (
          <p key={i} className={styles.p}>
            {body}
          </p>
        ))}

        <h2 className={styles.h2}>Common questions</h2>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
