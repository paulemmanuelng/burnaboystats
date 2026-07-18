"use client"; // interactive picker + Download (blob) + Web Share

import { useState } from "react";
import ShareButton from "./ShareButton";
import { track } from "../lib/analytics";
import styles from "./StatCardMaker.module.css";

type Choice = { id: string; chip: string };

// Receiptify/Volt.fm-style artifact: pick a Burna Boy record, preview the card
// (rendered by the /stat-card image route) and download or share it as a real
// 1080×1080 PNG. Only lightweight {id, chip} choices reach the client — the
// heavy data stays on the server behind the image route.
export default function StatCardMaker({
  cards,
  shareUrl,
}: {
  cards: Choice[];
  shareUrl: string;
}) {
  const [id, setId] = useState(cards[0]?.id ?? "");
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  const src = `/stat-card?stat=${id}`;

  function select(next: string) {
    if (next === id) return;
    setLoading(true);
    setId(next);
  }

  async function download() {
    try {
      setDownloading(true);
      track("stat_card_download", { stat: id });
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `burna-boy-${id}.png`;
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
    <div className={styles.maker}>
      <div className={styles.chips} role="group" aria-label="Choose a stat">
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

      <div className={styles.stage}>
        <div className={styles.frame} data-loading={loading ? "" : undefined}>
          {/* eslint-disable-next-line @next/next/no-img-element -- dynamic image route, not a static asset (next/image can't optimise it) */}
          <img
            className={styles.preview}
            src={src}
            alt="Burna Boy stat card preview"
            width={1200}
            height={900}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.download}
          onClick={download}
          disabled={downloading}
        >
          <span aria-hidden="true">↓</span>{" "}
          {downloading ? "Preparing…" : "Download PNG"}
        </button>
        <ShareButton
          url={shareUrl}
          title="Burna Boy · by the numbers"
          text="Burna Boy by the numbers — a stat card from burnaboystats.com"
          imageUrl={src}
          fileName={`burna-boy-${id}.png`}
        />
      </div>

      <p className={styles.hint}>1200×900 · made for sharing on X, WhatsApp &amp; more</p>
    </div>
  );
}
