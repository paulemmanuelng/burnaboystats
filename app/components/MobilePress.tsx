import Link from "next/link";
import styles from "./mobilePress.module.css";
import CopyButton from "./CopyButton";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

type Prose = (link: string) => React.ReactNode;
type CopyBox = { code: string; kind: string; button: string };

/**
 * /press on a phone.
 *
 * Built from designs/mobile/CPC Phone.dc.html (page "press") and its copy
 * states board in Curator Press Correction - Mobile.dc.html, for the design
 * response of 30 Sep 2026, §11 and items 42–44, 48–50, 53, 72, 75. The API
 * screen's grammar: back bar with a gold badge (the tile count, from data),
 * hero, then the page's sections. The five-tab bar stays (/press is in
 * BACK_BAR_ROUTES, not ACTION_BAR_ROUTES): six things to copy or download, so
 * no single action for a bottom bar.
 *
 * Every sentence, figure and file is handed in by the page, which prints the
 * same words on desktop. The Copy button is the site's one CopyButton, which
 * draws itself; only the box around it belongs to this screen. Keep exploring is rendered once by the page.
 *
 * No state of its own, so this stays a server component.
 */
export default function MobilePress({
  reviewedLabel,
  lede,
  figures,
  figuresIntro,
  creditIntro,
  credits,
  deepLink,
  apiProse,
  downloadsIntro,
  downloads,
  datasetCitation,
  unitsProse,
  cardsProse,
  embedsProse,
  trustProse,
}: {
  reviewedLabel: string;
  lede: string;
  /** `live` marks the one figure that moves by itself: gold. The rest are ink. */
  figures: { value: string; label: string; sub: string; href: string; live?: boolean }[];
  figuresIntro: string;
  creditIntro: string;
  credits: CopyBox[];
  deepLink: string;
  apiProse: Prose;
  downloadsIntro: string;
  downloads: {
    slug: string;
    file: string;
    href: string;
    filename: string;
    count: string;
    countOf: string;
    what: string;
  }[];
  datasetCitation: CopyBox;
  unitsProse: Prose;
  cardsProse: Prose;
  embedsProse: Prose;
  trustProse: Prose;
}) {
  // A link in running prose: gold, with the site's in-text underline
  // (globals.css, the .proseLink rule: 1px, 2px offset).
  const link = `${styles.link} proseLink`;
  const copyBox = (c: CopyBox) => (
    <div key={c.kind} className={styles.copyBox}>
      <code className={styles.copyCode}>{c.code}</code>
      <div className={styles.copyFoot}>
        <span className={styles.copyKind}>{c.kind}</span>
        <CopyButton value={c.code} label={c.button} />
      </div>
    </div>
  );

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Press &amp; data kit</span>
        {/* Gold, as on the sibling back-bar screens (owner decision, 30 Sep). */}
        <span className={styles.badge}>
          {figures.length} {figures.length === 1 ? "figure" : "figures"}
        </span>
        <MobileMenuButton className={styles.menuAfterBadge} />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>For journalists, bloggers &amp; fan pages</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Press &amp; <span className={styles.gold}>Data Kit</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
        <p className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed <strong>{reviewedLabel}</strong>
        </p>
      </div>

      <div className={styles.body}>
        <section aria-labelledby="m-figures">
          <h2 id="m-figures" className={styles.h2}>The headline figures</h2>
          <p className={styles.p}>{figuresIntro}</p>
          {/* Each tile is itself the link: → at its foot, --bg-raised when
              pressed (item 48). */}
          <div className={styles.tiles}>
            {figures.map((f) => (
              <Link key={f.label} href={f.href} className={styles.tile}>
                <span className={`${styles.tileValue} ${f.live ? styles.tileLive : ""}`}>{f.value}</span>
                <span className={styles.tileLabel}>{f.label}</span>
                <span className={styles.tileFoot}>
                  <span className={styles.tileSub}>{f.sub}</span>
                  <span className={styles.tileArrow} aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="m-cite">
          <h2 id="m-cite" className={styles.h2}>How to credit</h2>
          <p className={styles.p}>{creditIntro}</p>
          {credits.map(copyBox)}
          <p className={styles.small}>{deepLink}</p>
        </section>

        <section aria-labelledby="m-api">
          <h2 id="m-api" className={styles.h2}>The open API</h2>
          <p className={styles.p}>{apiProse(link)}</p>
        </section>

        {/* Plain <a download>, not <Link>: these are files, not pages to
            prefetch. The whole row is the link (items 50, 72). */}
        <section aria-labelledby="m-downloads">
          <h2 id="m-downloads" className={styles.h2}>Download the data</h2>
          <p className={styles.p}>{downloadsIntro}</p>
          <div className={styles.dlList}>
            {downloads.map((d) => (
              <a
                key={d.slug}
                href={d.href}
                download={d.filename}
                className={styles.dlRow}
                aria-label={`Download ${d.file} (${d.count} ${d.countOf})`}
                aria-describedby={`m-dl-what-${d.slug}`}
              >
                <span className={styles.dlText}>
                  <span className={styles.dlFile}>
                    {d.file}{" "}
                    <span className={styles.dlMeta}>
                      · <span className={styles.dlCount}>{d.count}</span> {d.countOf}
                    </span>
                  </span>
                  <span id={`m-dl-what-${d.slug}`} className={styles.dlWhat}>{d.what}</span>
                </span>
                <span className={styles.dlPill}>
                  <span aria-hidden="true">↓</span> Download
                </span>
              </a>
            ))}
          </div>
          <h3 className={styles.h3}>How to cite</h3>
          {copyBox(datasetCitation)}
          <p className={styles.note}>{unitsProse(link)}</p>
        </section>

        <section aria-labelledby="m-cards">
          <h2 id="m-cards" className={styles.h2}>Ready-made stat cards</h2>
          <p className={styles.p}>{cardsProse(link)}</p>
        </section>

        <section aria-labelledby="m-embeds">
          <h2 id="m-embeds" className={styles.h2}>Live stat boxes for your site</h2>
          <p className={styles.p}>{embedsProse(link)}</p>
        </section>

        <section aria-labelledby="m-trust">
          <h2 id="m-trust" className={styles.h2}>Why the numbers hold up</h2>
          <p className={styles.p}>{trustProse(link)}</p>
        </section>
      </div>
    </div>
  );
}
