"use client"; // record picker, ratio toggle, and a blob download

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./mobileStatCards.module.css";
import ScrollRail from "./ScrollRail";
import { track } from "../lib/analytics";
import { CARD_SIZES, type CardRatio } from "../lib/cardSizes";
import type { CardChoice } from "./StatCardMaker";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { saveCard, canShareFiles, subscribeNever } from "../lib/saveCard";

/**
 * Mobile screen 24 — Stat cards.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 24. Its own screen rather than the desktop maker narrowed, for one reason the
 * design states outright in its own lede: **story ratio is the default on a
 * phone**. A story card is what actually gets posted from a phone, and the
 * desktop default is square — so the two need separate state, not one shared
 * toggle.
 *
 * The preview is an <img> at the same `/stat-card` route the download fetches,
 * so what you see is the file you get. The aside ("Behind this number") is
 * desktop-only; the design drops it here.
 */

const RATIOS: { key: CardRatio; label: string }[] = [
  { key: "story", label: "Story" },
  { key: "square", label: "Square" },
];

export default function MobileStatCards({
  cards,
  pageUrl,
}: {
  cards: CardChoice[];
  pageUrl: string;
}) {
  const [id, setId] = useState(cards[0]?.id ?? "");
  // Story, per the design. The desktop maker keeps square.
  const [ratio, setRatio] = useState<CardRatio>("story");
  const [downloading, setDownloading] = useState(false);

  const card = cards.find((c) => c.id === id) ?? cards[0];
  const src = `/stat-card?stat=${id}&ratio=${ratio}`;
  const size = CARD_SIZES[ratio];
  const shareText = `Burna Boy — ${card.label}. ${card.source}.`;
  // On a phone the primary action opens the share sheet (Save Image, or post
  // straight to an app), so the button should not promise a download.
  const shareable = useSyncExternalStore(subscribeNever, canShareFiles, () => false);
  const label = shareable ? "Save or share ↓" : "Download PNG ↓";

  async function download() {
    setDownloading(true);
    track("stat_card_download", { stat: id, ratio });
    // saveCard picks the route the device actually supports — the share sheet
    // on a phone, a real download elsewhere. See app/lib/saveCard.ts.
    await saveCard(src, `burna-boy-${id}-${ratio}.png`, shareText);
    setDownloading(false);
  }

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Stat cards</span>
        <span className={styles.badge}>{cards.length}</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Built for the timeline</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Stat <span className={styles.gold}>cards</span>
        </h1>
        <p className={styles.lede}>
          Pick a record, download a card. Story ratio is the default on a phone.
        </p>
      </div>

      <ScrollRail className={styles.rail} label="Choose a record">
        {cards.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={c.id === id}
            className={`${styles.chip} ${c.id === id ? styles.chipOn : ""}`}
            onClick={() => setId(c.id)}
          >
            {c.chip}
          </button>
        ))}
      </ScrollRail>

      <div className={styles.stage}>
        {/* eslint-disable-next-line @next/next/no-img-element -- dynamic image route, not a static asset (next/image can't optimise it) */}
        <img
          className={`${styles.card} ${ratio === "story" ? styles.cardStory : styles.cardSquare}`}
          src={src}
          alt={`Stat card: ${card.label}`}
          width={size.width}
          height={size.height}
        />
      </div>

      <div className={styles.ratios} role="group" aria-label="Card shape">
        {RATIOS.map((r) => (
          <button
            key={r.key}
            type="button"
            aria-pressed={ratio === r.key}
            className={`${styles.ratio} ${ratio === r.key ? styles.ratioOn : ""}`}
            onClick={() => setRatio(r.key)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <p className={styles.note}>
        Renders at 2× — {size.width * 2} × {size.height * 2} px. Every card carries its
        source line.
      </p>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <button type="button" className={styles.primary} onClick={download} disabled={downloading}>
          {downloading ? "Preparing…" : label}
        </button>
        <div className={styles.secondaryRow}>
          <a
            className={styles.secondary}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Post on X
          </a>
          <a
            className={styles.secondary}
            href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
