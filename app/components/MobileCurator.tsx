import styles from "./mobileCurator.module.css";
import MobileProvenance from "./MobileProvenance";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * /curator on a phone.
 *
 * Built from designs/mobile/CPC Phone.dc.html (page "curator"), drawn for the
 * design response of 30 Sep 2026, §11 and items 42–47. The phone back bar the
 * sibling prose screens use (/about, /methodology): back to home, "About the
 * curator", no badge, the menu sheet (where the theme control lives). The
 * masthead and the breadcrumb bar are desktop-only on this route, and the
 * five-tab bar stays (/curator is in BACK_BAR_ROUTES, not ACTION_BAR_ROUTES).
 *
 * Every sentence and figure is handed in by the page, which prints the same
 * words on desktop. Keep exploring is rendered once by the page, after this
 * screen, for both layouts.
 *
 * No state, so this stays a server component.
 */
export default function MobileCurator({
  reviewedOn,
  whoIAm,
  whyIntro,
  whyClose,
  tracks,
  howIntro,
  sources,
  howClose,
  independence,
  useTheData,
  reachMe,
}: {
  /** The ISO day the data was last reviewed (provenanceSpecs reviewedOn). */
  reviewedOn: string;
  whoIAm: string;
  whyIntro: string;
  whyClose: string;
  /** The figure strip under "Why this site exists", read off the data. */
  tracks: { value: number; label: string }[];
  howIntro: string;
  sources: { kind: string; source: string }[];
  /** The close of "How I work", with this layout's link class. */
  howClose: (link: string) => React.ReactNode;
  independence: string;
  useTheData: string;
  /** "Reach me", one node per paragraph, with this layout's link class. */
  reachMe: (link: string) => React.ReactNode[];
}) {
  // A link in running prose: gold, with the site's in-text underline
  // (globals.css, the .proseLink rule: 1px, 2px offset).
  const link = `${styles.link} proseLink`;
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>About the curator</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>The person behind the numbers</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          About the <span className={styles.gold}>Curator</span>
        </h1>
        <p className={styles.lede}>
          I&apos;m <strong>Ukpaka Emmanuel</strong> — Paul, on X — and Burna Boy Stats is
          researched, verified and maintained by me, one figure at a time.
        </p>
        <MobileProvenance size="reviewed" day={reviewedOn} className={styles.reviewedSlot} />
      </div>

      <div className={styles.body}>
        <h2 className={styles.h2}>Who I am</h2>
        <p className={styles.p}>{whoIAm}</p>

        <h2 className={styles.h2}>Why this site exists</h2>
        <p className={styles.p}>{whyIntro}</p>
        {/* Figures at rest, in ink. Two across; the fifth spans the row. */}
        <ul className={styles.strip}>
          {tracks.map((t) => (
            <li key={t.label} className={styles.stripCell}>
              <span className={styles.stripValue}>{t.value}</span>
              <span className={styles.stripLabel}>{t.label}</span>
            </li>
          ))}
        </ul>
        <p className={`${styles.p} ${styles.after}`}>{whyClose}</p>

        <h2 className={styles.h2}>How I work</h2>
        <p className={styles.p}>{howIntro}</p>
        <dl className={styles.sources}>
          {sources.map((r) => (
            <div key={r.kind} className={styles.sourceRow}>
              <dt className={styles.sourceKind}>{r.kind}</dt>
              <dd className={styles.sourceText}>{r.source}</dd>
            </div>
          ))}
        </dl>
        <p className={`${styles.p} ${styles.after}`}>{howClose(link)}</p>

        <h2 className={styles.h2}>Independence</h2>
        <p className={styles.p}>{independence}</p>

        <h2 className={styles.h2}>Use the data</h2>
        <p className={styles.p}>{useTheData}</p>

        <h2 className={styles.h2}>Reach me</h2>
        {reachMe(link).map((body, i) => (
          <p key={i} className={styles.p}>
            {body}
          </p>
        ))}
      </div>
    </div>
  );
}
