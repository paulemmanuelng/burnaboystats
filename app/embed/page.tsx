import Link from "next/link";
import styles from "./embed.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import EmbedGallery from "../components/EmbedGallery";
import MobileEmbed from "../components/MobileEmbed";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { embedMetas, EMBED_NAME_LIST } from "../lib/embedWidgets";
import { noteParts, EMBED_FITS, EMBED_CREDIT } from "../lib/embedSnippet";

// The boxes are named from the widget list, so the description moves the day
// one is added (check-seo holds it to 160 characters).
export const metadata = pageMetadata({
  title: "Embed Burna Boy's Stats — Live Widgets for Any Site",
  description: `Free live boxes of Burna Boy's numbers for your own site: ${EMBED_NAME_LIST}. Paste one snippet of HTML.`,
  path: "/embed",
  shareTitle: "Embed Burna Boy's stats",
  shareDescription: "Live stat boxes for fan pages, blogs and journalists — paste one snippet and the figures keep themselves current.",
});

const widgets = embedMetas();

const LEDE =
  "A small live box of Burna Boy's numbers for your own site — a fan page, a blog, an article. Paste one snippet of HTML: the figures keep themselves current from this site's verified data, and every box links back to the page it came from.";

// The notes both layouts print, in one place so the two cannot drift. Each is
// a lead and a sentence, like the API page's caveats.
const NOTES: { h: string; p: string }[] = [
  {
    h: "Live, not a screenshot.",
    p: "Each box is built from the same data as the site's own pages, so it changes the day the page does. Your post never needs editing.",
  },
  {
    h: "Light or dark.",
    p: "Without a theme a box follows each reader's device. Add `?theme=light` or `?theme=dark` to the address to pin it; the picker above writes that for you.",
  },
  {
    h: `Any column from ${EMBED_FITS.min} to ${EMBED_FITS.max} px.`,
    p: `At its suggested height, every box was measured to fit at any width in that range, and \`max-width:100%\` lets one shrink into a column narrower than its suggested width. Below ${EMBED_FITS.min} px, a box can run out of room.`,
  },
  {
    h: "Keep the credit line.",
    p: `The line under the iframe, “Source: ${EMBED_CREDIT}”, links to the page the figure comes from. The box links there too, in a new tab.`,
  },
  {
    h: "Free, with attribution.",
    p: "The figures are the site's open data under CC BY 4.0, on the same terms as the API. The box and its credit line are the attribution.",
  },
];

export default function EmbedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Embed Burna Boy's stats",
    description:
      "Live, embeddable boxes of Burna Boy's statistics for other websites, built from the site's verified data.",
    url: `${CANONICAL_ORIGIN}/embed`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <MobileEmbed widgets={widgets} lede={LEDE} notes={NOTES} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/embed" />

        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>For fan pages, blogs &amp; journalists</div>
          <h1 className={styles.h1}>
            Embed Burna Boy&apos;s <span className="inkText">stats</span>
          </h1>
          <p className={styles.lede}>{LEDE}</p>
          <div className={styles.badges}>
            <span className={styles.badge}>{widgets.length} live boxes</span>
            <span className={styles.badge}>Light &amp; dark</span>
            <span className={styles.badge}>Free · no sign-up</span>
          </div>
        </section>

        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="widgets">
          <h2 id="widgets" className={styles.h2}>The boxes</h2>
          <p className={styles.body}>
            Each one below is the real thing, loaded from its own address. Pick a theme, copy
            the code, paste it into your page&apos;s HTML.
          </p>
          <EmbedGallery widgets={widgets} />
        </section>

        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="notes">
          <h2 id="notes" className={styles.h2}>How they work</h2>
          <ul className={styles.notes}>
            {NOTES.map((n, i) => (
              <li key={n.h} className={styles.note}>
                <span className={styles.noteNum}>{String(i + 1).padStart(2, "0")}</span>
                <p className={styles.noteP}>
                  <strong>{n.h}</strong>{" "}
                  {noteParts(n.p).map(({ part, code }, j) =>
                    code ? <code key={j} className={styles.code}>{part}</code> : <span key={j}>{part}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.body}>
            Need the numbers rather than a box? The same data is free as JSON from the{" "}
            <Link href="/api">open data API</Link>, citation lines are in the{" "}
            <Link href="/press">press &amp; data kit</Link>, and every figure comes as an
            image on the <Link href="/share">stat cards page</Link>.
          </p>
        </section>

        <KeepExploring current="/embed" />
      </div>
    </main>
  );
}
