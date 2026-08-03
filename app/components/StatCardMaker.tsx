"use client"; // interactive picker + ratio toggle + Download (blob)

import { useState } from "react";
import Link from "next/link";
import styles from "./StatCardMaker.module.css";
import { track } from "../lib/analytics";
import { CARD_SIZES, type CardRatio } from "../lib/cardSizes";

/**
 * The stat-card builder, from designs/desktop/Share.dc.html and mobile
 * screen 24.
 *
 * The preview is an <img> pointed at the same `/stat-card` route the download
 * fetches, so what you see is exactly the file you get — there is no second,
 * DOM-based renderer that could drift from the PNG. It also means a card can be
 * linked to directly.
 *
 * Only lightweight choices reach the client; the figures live on the server
 * behind that route.
 */

export type CardChoice = {
  id: string;
  chip: string;
  label: string;
  detail: string;
  source: string;
  href: string;
};

const RATIOS: { key: CardRatio; label: string }[] = [
  { key: "square", label: "Square" },
  { key: "story", label: "Story" },
];

export default function StatCardMaker({
  cards,
  verified,
  pageUrl,
}: {
  cards: CardChoice[];
  verified: string;
  pageUrl: string;
}) {
  const [id, setId] = useState(cards[0]?.id ?? "");
  const [ratio, setRatio] = useState<CardRatio>("square");
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  const card = cards.find((c) => c.id === id) ?? cards[0];
  const src = `/stat-card?stat=${id}&ratio=${ratio}`;
  const size = CARD_SIZES[ratio];
  const shareText = `Burna Boy — ${card.label}. ${card.source}.`;

  function select(next: string) {
    if (next === id) return;
    setLoading(true);
    setId(next);
  }

  function selectRatio(next: CardRatio) {
    if (next === ratio) return;
    setLoading(true);
    setRatio(next);
  }

  async function download() {
    try {
      setDownloading(true);
      track("stat_card_download", { stat: id, ratio });
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `burna-boy-${id}-${ratio}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      /* best-effort — the user can still long-press/right-click the preview */
    } finally {
      setDownloading(false);
    }
  }

  return (
    <>
      <section className={`${styles.wrap} ${styles.pickerPad}`}>
        <div className={styles.picker} role="group" aria-label="Choose a record">
          <span className={styles.pickerLabel}>Pick a record</span>
          {cards.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`${styles.chip} ${c.id === id ? styles.chipOn : ""}`}
              aria-pressed={c.id === id}
              onClick={() => select(c.id)}
            >
              {c.chip}
            </button>
          ))}
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.mainPad}`}>
        <div className={styles.split}>
          <div>
            <div className={styles.previewHead}>
              <span className={styles.previewLabel}>
                Preview · {size.width}×{size.height}
              </span>
              <div className={styles.ratios} role="group" aria-label="Card shape">
                {RATIOS.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    aria-pressed={ratio === r.key}
                    className={`${styles.ratio} ${ratio === r.key ? styles.ratioOn : ""}`}
                    onClick={() => selectRatio(r.key)}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.stage}>
              {/* eslint-disable-next-line @next/next/no-img-element -- dynamic image route, not a static asset (next/image can't optimise it) */}
              <img
                className={`${styles.card} ${
                  ratio === "story" ? styles.cardStory : styles.cardSquare
                } ${loading ? styles.cardLoading : ""}`}
                src={src}
                alt={`Stat card: ${card.label}`}
                width={size.width}
                height={size.height}
                onLoad={() => setLoading(false)}
              />
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primary}
                onClick={download}
                disabled={downloading}
              >
                {downloading ? "Preparing…" : "↓ Download PNG"}
              </button>
              <a
                className={styles.secondary}
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Post on X ↗
              </a>
              <a
                className={styles.secondary}
                href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>
            <p className={styles.note}>
              Downloads render at {size.width}×{size.height}, and every card carries its
              source line — so a screenshot can always be traced back to the chart body
              behind it.
            </p>
          </div>

          <div className={styles.aside}>
            <div className={styles.asideKicker}>Behind this number</div>
            <h2 className={styles.asideH}>{card.label}</h2>
            <p className={styles.asideP}>{card.detail}</p>
            <div className={styles.meta}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Source</span>
                <span className={styles.metaValue}>{card.source}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Verified</span>
                <span className={styles.metaValue}>{verified}</span>
              </div>
            </div>
            <Link href={card.href} className={styles.asideLink}>
              See the full record →
            </Link>
            <p className={styles.asideFoot}>
              Every figure links to the page that documents it. If one looks wrong,{" "}
              <Link href="/contact">send the primary source</Link> — corrections go up
              fast.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.pills}`}>
        <Link href="/" className="btn btnSecondary">← Home</Link>
        <Link href="/records/by-the-numbers" className="btn btnPrimary">
          By the numbers ↗
        </Link>
        <Link href="/api" className="btn btnSecondary">Open data API ↗</Link>
      </section>
    </>
  );
}
