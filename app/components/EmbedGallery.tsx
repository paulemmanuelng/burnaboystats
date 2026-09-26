"use client"; // the theme choice rewrites every preview and snippet

import { useState } from "react";
import styles from "../embed/embed.module.css";
import CopyButton from "./CopyButton";
import {
  EMBED_THEMES,
  embedPath,
  embedSnippet,
  type EmbedMeta,
  type EmbedTheme,
} from "../lib/embedSnippet";

/**
 * /embed on a laptop: the theme picker, then one row per widget — the live box
 * as it will appear on a host page, and the snippet that produces it.
 *
 * The previews are the widgets themselves, framed from their own addresses, so
 * what the page shows is what a host page gets. The phone screen is its own
 * component (MobileEmbed) with the same pieces.
 */
export default function EmbedGallery({ widgets }: { widgets: EmbedMeta[] }) {
  const [theme, setTheme] = useState<EmbedTheme>("auto");

  return (
    <>
      <div className={styles.themeRow}>
        <span className={styles.themeLabel} id="embed-theme">
          Theme
        </span>
        <div className={styles.seg} role="radiogroup" aria-labelledby="embed-theme">
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

      <ol className={styles.list}>
        {widgets.map((w) => {
          const snippet = embedSnippet(w, theme);
          return (
            <li key={w.slug} className={styles.row}>
              <div className={styles.preview}>
                <iframe
                  src={embedPath(w.slug, theme)}
                  title={w.iframeTitle}
                  width={w.width}
                  height={w.height}
                  className={styles.frame}
                />
              </div>
              <div className={styles.rowBody}>
                <div className={styles.rowTop}>
                  <h3 className={styles.rowName}>{w.name}</h3>
                  <span className={styles.size}>
                    {w.width} × {w.height} px
                  </span>
                </div>
                <p className={styles.rowWhat}>{w.what}</p>
                {/* Wrapped, not scrolled: it is read and copied whole. */}
                <pre className={styles.snippet}>
                  <code>{snippet}</code>
                </pre>
                <CopyButton value={snippet} className={styles.copyBtn} label="Copy code" fallback />
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
