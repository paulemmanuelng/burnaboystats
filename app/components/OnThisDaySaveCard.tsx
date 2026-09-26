"use client";

import { useState, type ReactNode } from "react";
import { saveCard } from "../lib/saveCard";

/**
 * "Save or share ↓" for a day's post card, on the phone.
 *
 * The stat cards' flow (lib/saveCard.ts): the native share sheet where the
 * phone can share files, else a download of the PNG, else the PNG in a new
 * tab. It is a real link to the PNG with a download name, so before the
 * script loads — or without it — the tap still saves the card.
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
  const [busy, setBusy] = useState(false);
  return (
    <a
      href={src}
      download={filename}
      className={className}
      aria-busy={busy || undefined}
      onClick={async (e) => {
        e.preventDefault();
        if (busy) return;
        setBusy(true);
        try {
          await saveCard(src, filename, shareText);
        } finally {
          setBusy(false);
        }
      }}
    >
      {children}
    </a>
  );
}
