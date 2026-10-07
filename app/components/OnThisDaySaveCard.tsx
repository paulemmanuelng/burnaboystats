"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { canShareFiles, fetchCard, saveCard } from "../lib/saveCard";

/**
 * "Save or share ↓" for a day's post card, on the phone.
 *
 * The stat cards' flow (lib/saveCard.ts): the native share sheet where the
 * phone can share files, else a download of the PNG, else the PNG in a new
 * tab. It is a real link to the PNG with a download name, so before the
 * script loads — or without it — the tap still saves the card.
 *
 * The card is fetched before the tap. The sheet opens only inside the tap's
 * user activation, and the PNG took 0.8 s warm and 1.6–2 s cold; held 6 s the
 * sheet was refused and the tap fell through to a download, while the button
 * looked untouched (debug pass 5 Oct 2026, V-otd-10). So where the tap opens
 * the sheet, the card is fetched once the button is within a screen of view,
 * after the page has loaded, and kept. A tap that still has to wait for it
 * says "Preparing…", as the stat cards' button does.
 */
export default function OnThisDaySaveCard({
  src,
  filename,
  shareText,
  className,
  children,
}: {
  src: string;
  filename: string;
  shareText: string;
  className?: string;
  children: ReactNode;
}) {
  const anchor = useRef<HTMLAnchorElement>(null);
  const card = useRef<{ src: string; blob: Promise<Blob>; ready: boolean } | null>(null);
  const inFlight = useRef(false);
  const [preparing, setPreparing] = useState(false);

  // One fetch per card, kept. A failed one is dropped so the next tap retries.
  const warm = useCallback(() => {
    let entry = card.current;
    if (!entry || entry.src !== src) {
      const next = { src, blob: fetchCard(src), ready: false };
      next.blob.then(
        () => {
          next.ready = true;
        },
        () => {
          if (card.current === next) card.current = null;
        }
      );
      card.current = entry = next;
    }
    return entry;
  }, [src]);

  useEffect(() => {
    const el = anchor.current;
    // A download needs no activation, so only a sharing phone fetches early.
    // The other layout's copy is display:none and never intersects.
    if (!el || !canShareFiles() || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        warm();
      },
      { rootMargin: "100% 0px" }
    );
    const start = () => io.observe(el);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      io.disconnect();
    };
  }, [warm]);

  return (
    <a
      ref={anchor}
      href={src}
      download={filename}
      className={className}
      aria-busy={preparing || undefined}
      onPointerDown={warm}
      onClick={async (e) => {
        e.preventDefault();
        if (inFlight.current) return;
        inFlight.current = true;
        const entry = warm();
        try {
          if (!entry.ready) {
            setPreparing(true);
            await entry.blob.catch(() => {});
            setPreparing(false);
          }
          await saveCard(src, filename, shareText, { card: entry.blob });
        } finally {
          inFlight.current = false;
          setPreparing(false);
        }
      }}
    >
      {preparing ? <span>Preparing…</span> : children}
    </a>
  );
}
