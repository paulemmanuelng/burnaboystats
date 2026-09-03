import Link from "next/link";
import styles from "./mobileFaq.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * The mobile FAQ screen.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 08.
 *
 * The desktop page groups the questions under a sticky category column. A phone
 * has no room for that, so the list runs flat and each question carries its own
 * category label — a reader who lands mid-scroll still knows what they're in.
 *
 * The chip rail used to jump to the DESKTOP group anchors. Those ids sit inside
 * a `.desktopOnly` wrapper that is `display: none` below 900px, so on a phone
 * every chip pointed at an unrendered element and all six were dead taps. The
 * rail now targets anchors this screen renders itself, in an `m-` namespace —
 * reusing the desktop ids would put two of each in one document, and the
 * anchor would then resolve to whichever layout is hidden.
 *
 * This screen keeps the five-tab bar, so there is no action bar here.
 */
export default function MobileFaq({
  total,
  chips,
  items,
  source,
}: {
  total: number;
  chips: { id: string; label: string; count: number }[];
  /** `groupId` is set on the FIRST question of each group — the jump target. */
  items: { group: string; groupId?: string; q: string; a: string }[];
  source: string;
}) {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>FAQ</span>
        <span className={styles.badge}>{total} questions</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Answer first</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Burna Boy <span className={styles.gold}>FAQ</span>
        </h1>
        <p className={styles.lede}>
          Quick, verified answers to the questions people ask most.
        </p>
      </div>

      {/* Category rail */}
      <nav className={styles.rail} aria-label="Jump to a category">
        {chips.map((c) => (
          <a key={c.id} href={`#m-${c.id}`} className={styles.chip}>
            {c.label}
            <span className={styles.chipCount}>{c.count}</span>
          </a>
        ))}
      </nav>

      {/* Questions */}
      <div className={styles.list}>
        {items.map((f) => (
          <div
            key={f.q}
            id={f.groupId ? `m-${f.groupId}` : undefined}
            className={styles.item}
          >
            <div className={styles.itemGroup}>{f.group}</div>
            {/* h3, not h2: the desktop group headings are this page's h2s. */}
            <h3 className={styles.q}>{f.q}</h3>
            <p className={styles.a}>{f.a}</p>
          </div>
        ))}
      </div>

      <p className={styles.source}>{source}</p>
      <div className={styles.spacer} />
    </div>
  );
}
