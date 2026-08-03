import Link from "next/link";
import styles from "./mobileAbout.module.css";

/**
 * The mobile about screen.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 07.
 *
 * Two things it does differently from the desktop page, both deliberate:
 *
 * - The fast-facts grid comes *before* the prose. "Burna boy real name" is the
 *   site's top search query, and on a phone that answer shouldn't sit under
 *   four paragraphs of biography.
 * - The prose is abridged to two paragraphs, with the Wikipedia link carrying
 *   the rest. The desktop column runs the full four.
 */
export default function MobileAbout({
  facts,
  timeline,
}: {
  facts: { label: string; value: string }[];
  timeline: { year: string; title: string; text: string }[];
}) {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>About</span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Biography</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          About the <span className={styles.gold}>Giant</span>
        </h1>
        <p className={styles.lede}>
          The story of Damini Ogulu — Afrobeats&apos; African Giant.
        </p>
      </div>

      {/* Fast facts */}
      <div className={styles.facts}>
        {facts.map((f) => (
          <div key={f.label} className={styles.fact}>
            <span className={styles.factLabel}>{f.label}</span>
            <span className={styles.factValue}>{f.value}</span>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className={styles.bio}>
        <p>
          Burna Boy — born <strong>Damini Ebunoluwa Ogulu</strong> on 2 July 1991 in Port
          Harcourt — is one of the most successful African artists of all time.
        </p>
        <p>
          Music runs in the family: his grandfather, Benson Idonije, once managed Fela
          Kuti. His mother, Bose Ogulu, is also his manager.
        </p>
        <a
          className={styles.wikiLink}
          href="https://en.wikipedia.org/wiki/Burna_Boy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full biography on Wikipedia ↗
        </a>
      </div>

      {/* Timeline */}
      <div className={styles.timelineKicker}>Career timeline</div>
      <div className={styles.timelineWrap}>
        <div className={styles.timeline}>
          {timeline.map((t) => (
            <div key={t.year + t.title} className={styles.tRow}>
              <span className={styles.tDot} aria-hidden="true" />
              <div className={styles.tYear}>{t.year}</div>
              <h3 className={styles.tTitle}>{t.title}</h3>
              <p className={styles.tText}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.spacer} />
    </div>
  );
}
