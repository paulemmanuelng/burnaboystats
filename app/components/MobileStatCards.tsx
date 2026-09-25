"use client"; // record picker, ratio toggle, and a blob download

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./mobileStatCards.module.css";
import ScrollRail from "./ScrollRail";
import { track } from "../lib/analytics";
import { CARD_SIZES, type CardRatio } from "../lib/cardSizes";
import type { CardChoice } from "./StatCardMaker";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { saveCard, canShareFiles, subscribeNever } from "../lib/saveCard";
import { BLANK_PIXEL } from "../lib/blankPixel";

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
  verified,
  origin,
}: {
  cards: CardChoice[];
  /** The date the figures were last checked, already formatted by /share.
   *  Desktop shows it in the aside as "Site updated / {date}"; this screen had no
   *  prop for it at all, so a phone reader got no "as of" date for a number
   *  they were about to post publicly. */
  verified: string;
  /** The canonical origin. The shared link is the chosen stat's own page —
   *  origin + card.href — never /share itself and never a ?stat= query, which
   *  would bring back Search Console's alternate-page duplicates (C-14, Paul,
   *  24 Sep 2026). */
  origin: string;
}) {
  const [id, setId] = useState(cards[0]?.id ?? "");
  // Story, per the design. The desktop maker keeps square.
  const [ratio, setRatio] = useState<CardRatio>("story");
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLImageElement>(null);

  // React listens for the preview's load from hydration on and does not
  // replay one that came first, so a card the browser had already finished
  // stayed dimmed at 35% for good. On 23 Sep 2026 production's phone card did
  // on a cold load and on every repeat visit, and gating the desktop PNG out
  // (below) lets the card finish sooner still. So the mount hands a load that
  // beat hydration to the same handlers, once.
  useEffect(() => {
    const img = cardRef.current;
    if (img?.complete) img.dispatchEvent(new Event(img.naturalWidth > 0 ? "load" : "error"));
  }, []);

  const card = cards.find((c) => c.id === id) ?? cards[0];
  const src = `/stat-card?stat=${id}&ratio=${ratio}${attempt ? `&r=${attempt}` : ""}`;
  const size = CARD_SIZES[ratio];
  const shareText = `Burna Boy — ${card.value} ${card.label}. ${card.source}.`;
  const shareUrl = `${origin}${card.href}`;
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
            onClick={() => {
              if (c.id === id) return;
              setLoading(true);
              setFailed(false);
              setId(c.id);
            }}
          >
            {c.chip}
          </button>
        ))}
      </ScrollRail>

      <div className={styles.stage}>
        {/* Gated to this layout. Both layouts' previews sit in every /share
            document, and an eager <img> is fetched even under display:none,
            so every phone downloaded the desktop maker's 767 KB square
            beside this 856 KB story, inside the LCP window (curl, 23 Sep
            2026). The preload scanner reads <source media> before it
            fetches: the hidden layout now gets the 1x1 and nothing else.
            display:contents keeps the <img> the stage's own child. */}
        <picture style={{ display: "contents" }}>
          <source media="(max-width: 900px)" srcSet={src} />
          <img
            ref={cardRef}
            className={`${styles.card} ${ratio === "story" ? styles.cardStory : styles.cardSquare} ${
              loading ? styles.cardLoading : ""
            }`}
            src={BLANK_PIXEL}
            fetchPriority="high"
            alt={`Stat card: ${card.value} ${card.label}`}
            width={size.width}
            height={size.height}
            onLoad={(e) => {
              // Above 900px this is the 1x1 standing in for the card. It must
              // not clear the loading state or warm a card nobody can see.
              if (e.currentTarget.currentSrc.startsWith("data:")) return;
              setLoading(false);
              // Warm the other shape, so the ratio toggle is instant — the
              // route is cacheable, so this is one background request.
              const other = ratio === "story" ? "square" : "story";
              new window.Image().src = `/stat-card?stat=${id}&ratio=${other}`;
            }}
            onError={() => {
              setLoading(false);
              setFailed(true);
            }}
          />
        </picture>
        {failed && (
          <div className={styles.failed} role="alert">
            <span>The card didn&apos;t render.</span>
            <button
              type="button"
              className={styles.retry}
              onClick={() => {
                setLoading(true);
                setFailed(false);
                setAttempt((n) => n + 1);
              }}
            >
              Try again
            </button>
          </div>
        )}
      </div>

      <div className={styles.ratios} role="group" aria-label="Card shape">
        {RATIOS.map((r) => (
          <button
            key={r.key}
            type="button"
            aria-pressed={ratio === r.key}
            className={`${styles.ratio} ${ratio === r.key ? styles.ratioOn : ""}`}
            onClick={() => {
              if (r.key === ratio) return;
              setLoading(true);
              setFailed(false);
              setRatio(r.key);
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      <p className={styles.note}>
        Renders at {size.width} × {size.height} px. Every card carries its source line.
      </p>
      {/* The stamp the desktop aside carries as "Site updated / {date}". The
          aside itself is deliberately desktop-only, but the date is a fact, not
          a panel — it belongs wherever the card is about to be posted. */}
      <p className={`${styles.note} ${styles.verified}`}>
        Site updated <span className={styles.verifiedDate}>{verified}</span>
      </p>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <button type="button" className={styles.primary} onClick={download} disabled={downloading}>
          {downloading ? "Preparing…" : label}
        </button>
        <div className={styles.secondaryRow}>
          <a
            className={styles.secondary}
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Post on X
          </a>
          <a
            className={styles.secondary}
            href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
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
