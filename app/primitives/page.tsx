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
        <p className={styles.note}>
          Hover a button: 3px lift, shadow deepens 0 8px 30px → 0 14px 44px.
          Secondary turns its border and label gold.
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
          </tbody>
        </table>
        <p className={styles.note}>Row hover tints gold at 6%. Numerals are tabular.</p>
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
    </main>
  );
}
