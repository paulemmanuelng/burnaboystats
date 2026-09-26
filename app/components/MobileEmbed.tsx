"use client"; // the theme choice rewrites every preview and snippet

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileEmbed.module.css";
import CopyButton from "./CopyButton";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import {
  EMBED_THEMES,
  embedPath,
  embedSnippet,
  noteParts,
  type EmbedMeta,
  type EmbedTheme,
} from "../lib/embedSnippet";

/**
 * /embed on a phone — the deep-page grammar the API screen uses: back bar,
 * hero, then one block per widget. Each block shows the live box at the width
 * a phone column gives it, its snippet (wrapped, never scrolled sideways) and a
 * Copy button of its own, because there are four things to copy and no single
 * primary action for a bottom bar to carry. So the five-tab bar stays: /embed
 * is in BACK_BAR_ROUTES and not ACTION_BAR_ROUTES.
 *
 * Same widgets, notes and links as the desktop layout, handed in by the page.
 */
export default function MobileEmbed({
  widgets,
  lede,
  notes,
}: {
  widgets: EmbedMeta[];
  lede: string;
  notes: { h: string; p: string }[];
}) {
  const [theme, setTheme] = useState<EmbedTheme>("auto");

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/press" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Embed stats</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>For fan pages, blogs &amp; journalists</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. */}
        <h1 className={styles.title}>
          Embed Burna Boy&apos;s <span className={styles.gold}>stats</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
      </div>

      <div className={styles.themeBlock}>
        <span className={styles.themeLabel} id="embed-theme-m">
          Theme
        </span>
        <div className={styles.seg} role="radiogroup" aria-labelledby="embed-theme-m">
          {EMBED_THEMES.map((t) => {
            const on = theme === t.value;
            return (
              <button
                key={t.value}
                type="button"
                role="radio"
                aria-checked={on}
                className={`${styles.segOpt} ${on ? styles.segOn : ""}`}
                onClick={() => setTheme(t.value)}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <p className={styles.themeNote}>
          {theme === "auto"
            ? "Follows each reader's device, light or dark."
            : `Always ${theme}, whatever the reader's device.`}
        </p>
      </div>

      {widgets.map((w) => {
        const snippet = embedSnippet(w, theme);
        return (
          <section key={w.slug} className={styles.block} aria-labelledby={`embed-m-${w.slug}`}>
            <div className={styles.blockTop}>
              <h2 id={`embed-m-${w.slug}`} className={styles.blockTitle}>
                {w.name}
              </h2>
              <span className={styles.size}>
                {w.width} × {w.height}
              </span>
            </div>
            <p className={styles.what}>{w.what}</p>
            <iframe
              src={embedPath(w.slug, theme)}
              title={w.iframeTitle}
              width={w.width}
              height={w.height}
              className={styles.frame}
            />
            <pre className={styles.codeBox}>
              <code>{snippet}</code>
            </pre>
            <CopyButton value={snippet} className={styles.copyBtn} label="Copy code" fallback />
          </section>
        );
      })}

      <div className={styles.notes}>
        <h2 className={styles.blockTitle}>How they work</h2>
        {notes.map((n) => (
          <p key={n.h} className={styles.note}>
            <strong className={styles.noteLead}>{n.h}</strong>{" "}
            {noteParts(n.p).map(({ part, code }, j) =>
              code ? <code key={j} className={styles.code}>{part}</code> : <span key={j}>{part}</span>
            )}
          </p>
        ))}
        <p className={styles.note}>
          Need the numbers rather than a box? The same data is free as JSON from the{" "}
          <Link href="/api" className={styles.link}>
            open data API
          </Link>
          , citation lines are in the{" "}
          <Link href="/press" className={styles.link}>
            press &amp; data kit
          </Link>
          , and every figure comes as an image on the{" "}
          <Link href="/share" className={styles.link}>
            stat cards page
          </Link>
          .
        </p>
      </div>

      <div className={styles.spacer} />
    </div>
  );
}
