import type { Metadata } from "next";
import styles from "./primitives.module.css";

/**
 * Primitives scratch page — every shared variant on one screen.
 *
 * Asked for by the handoff's first task: build the shared primitives against
 * the tokens and show them all at once, before any page work. It exists so a
 * button or tag can be checked against the design in isolation, rather than
 * being judged inside a page where twelve other things are also moving.
 *
 * Not part of the site: noindex, and kept out of the sitemap and nav.
 */
export const metadata: Metadata = {
  title: "Primitives — Burna Boy Stats",
  description:
    "Internal scratch page: every shared button, tag, table and token variant in one place, for checking against the design.",
  robots: { index: false, follow: false },
  // Without this it inherits the root layout's alternates.canonical of "/",
  // so a noindex scratch page was declaring itself the homepage.
  alternates: { canonical: "/primitives" },
  // ...and `openGraph` inherits exactly the same way, which that fix missed:
  // the built HTML still carried `og:url` = https://burnaboystats.com plus the
  // home page's og:title and og:description. Same bug, one field over. The
  // scratch page keeps no opengraph-image of its own — it is not shared, and
  // the inherited root image is fine — but it should not claim to BE the home
  // page in markup any more than it should in a canonical.
  // `images` is spelled out because the root opengraph-image.tsx hangs off the
  // root's openGraph OBJECT: a page keeps the inherited picture only while it
  // inherits the whole block, so declaring a url here dropped the image and the
  // post-build og:image gate went red. Still no opengraph-image.tsx of its own —
  // a scratch page does not need a drawn card, just the site's.
  openGraph: {
    title: "Primitives — Burna Boy Stats",
    description: "Internal scratch page: shared buttons, tags, tables and tokens.",
    url: "/primitives",
    siteName: "Burna Boy Stats",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Burna Boy Stats" }],
  },
};

const TOKENS = [
  ["--bg", "Page"],
  ["--bg-soft", "Raised panel"],
  ["--bg-soft-2", "Inset / track"],
  ["--line", "Hairline divider"],
  ["--text", "Body"],
  ["--text-muted", "Secondary"],
  ["--dim", "Smallest meta"],
  ["--gold", "Brand"],
  ["--gold-bright", "Brand bright"],
  ["--gold-dim", "Brand dim"],
  ["--cyan", "Diamond · Top 10"],
  ["--silver", "Platinum · Top 40"],
  ["--green", "Live · positive"],
  ["--live", "Live-data pulse"],
];

export default function PrimitivesPage() {
  return (
    <main id="content" className={styles.page}>
      <header className={styles.head}>
        <p className={styles.kicker}>Internal · not indexed</p>
        <h1 className={styles.title}>Primitives</h1>
        <p className={styles.lede}>
          Every shared variant against the design tokens. Anton is 400-only
          everywhere; pills are always 999px; the data-meaning accents are never
          recoloured to gold.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>Tokens</h2>
        <div className={styles.swatches}>
          {TOKENS.map(([token, label]) => (
            <div key={token} className={styles.swatch}>
              <span className={styles.chip} style={{ background: `var(${token})` }} />
              <span className={styles.swatchName}>{token}</span>
              <span className={styles.swatchLabel}>{label}</span>
            </div>
          ))}
        </div>
        <div className={styles.surfaces}>
          <div className={styles.surface} style={{ background: "var(--bg)" }}>--bg</div>
          <div className={styles.surface} style={{ background: "var(--bg-soft)" }}>--bg-soft</div>
          <div className={styles.surface} style={{ background: "var(--bg-soft-2)" }}>--bg-soft-2</div>
        </div>
        <p className={styles.note}>
          The handoff&rsquo;s spec names alias onto these: <code>--color-bg</code>,{" "}
          <code>--color-surface</code>, <code>--color-surface-2</code>, <code>--color-divider</code>,{" "}
          <code>--color-text</code>, <code>--muted</code>, <code>--color-accent</code>. CSS lifted
          from a design file resolves unchanged.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Buttons</h2>
        <div className={styles.row}>
          <a href="#" className="btn btnPrimary">Primary ↗</a>
          <a href="#" className="btn btnSecondary">Secondary ↗</a>
          <a href="#" className="btn btnGhost">Ghost ↗</a>
          <button type="button" className="btn btnSecondary btnIcon" aria-label="Icon button">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button type="button" className="btn btnPrimary" disabled>Disabled</button>
        </div>
        <div className={`${styles.row} ${styles.blockWrap}`} style={{ marginTop: 14 }}>
          <button type="button" className="btn btnSecondary btnBlock">Block</button>
        </div>
        <p className={styles.note}>
          Hover a button: 3px lift, shadow deepens 0 8px 30px → 0 14px 44px.
          Secondary turns its border and label gold. The icon button is 36px on a
          mouse and 44px on touch; the lift is dropped under prefers-reduced-motion.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Segmented control</h2>
        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className={styles.kicker} style={{ marginBottom: 8 }}>View</legend>
          <div className="seg">
            <label className="segOpt"><input type="radio" name="p-view" defaultChecked /> All</label>
            <label className="segOpt"><input type="radio" name="p-view" /> Certified</label>
            <label className="segOpt"><input type="radio" name="p-view" /> Charted</label>
          </div>
        </fieldset>
        <p className={styles.note}>
          Radio-driven, so it works without JavaScript and reads to a screen reader
          as one named group. :has() paints the selected segment.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Tags</h2>
        <div className={styles.row}>
          <span className="tag tagAccent">Accent</span>
          <span className="tag tagNeutral">Neutral</span>
          <span className="tag tagOutline">Outline</span>
          <span className="tag tagDiamond">Diamond</span>
          <span className="tag tagPlatinum">Platinum</span>
          <span className="tag tagLive">Live</span>
        </div>
        <p className={styles.note}>
          The last three carry data meaning — certification tier and live state.
          They are never restyled to gold.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Table</h2>
        <table className="tableBase">
          <thead>
            <tr><th>Country</th><th>Chart</th><th>Peak</th></tr>
          </thead>
          <tbody>
            <tr><td>United Kingdom</td><td>Official Charts Company</td><td>1</td></tr>
            <tr><td>France</td><td>SNEP</td><td>1</td></tr>
            <tr><td>United States</td><td>Billboard Hot 100</td><td>17</td></tr>
            <tr>
              <td>Nigeria</td>
              <td>TurnTable Top 100</td>
              <td><span className="notReported" title="Not reported by the source">—</span></td>
            </tr>
          </tbody>
        </table>
        <p className={styles.note}>
          Row hover tints gold at 6%. Numerals are tabular. The em dash is state E —
          a figure the source never reported. It reads dim, and it never means zero.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Type scale</h2>
        <p className={styles.specimenKicker}>Kicker · Space Mono 700 · 11px · .16em</p>
        <p className={styles.specimenH1}>Page heading</p>
        <p className={styles.specimenH2}>Section heading</p>
        <p className={styles.specimenFigure}>221</p>
        <p className={styles.specimenBody}>
          Body copy in Geist. Every certification, chart peak and record —
          sourced line by line, updated the day it changes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Chrome &amp; focus</h2>
        <p className={styles.lede} style={{ marginTop: 0 }}>
          The sticky nav above and the footer below are the real ones. The warm wash
          behind this page is <code>body::before</code> and the vignette is{" "}
          <code>body::after</code> — both at negative z-index, so neither can dim
          content or swallow a click.
        </p>
        <div className={styles.row} style={{ marginTop: 16 }}>
          <a className="ui-link" href="#content">A chrome link</a>
          <button type="button" className="btn btnSecondary">Tab to me</button>
        </div>
        <p className={styles.note}>
          Every control takes a 2px --gold-bright ring at a 3px offset. Chrome links
          hold a 24px target on a mouse and 44px on touch.
        </p>
      </section>
    </main>
  );
}
