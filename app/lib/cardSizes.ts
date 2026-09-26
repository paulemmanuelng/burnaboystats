/**
 * Share-card dimensions, in their own module with no `next/og` import.
 *
 * The builder is a client component and needs these numbers for its preview and
 * its label. Importing them from statCardImage.tsx pulled `next/og` — and with
 * it sharp and detect-libc — into the browser bundle, which fails the build
 * outright. Plain data belongs where both sides can reach it.
 */
export type CardRatio = "square" | "story" | "portrait";

export const CARD_SIZES: Record<CardRatio, { width: number; height: number }> = {
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
  // 4:5 — the tallest a feed post runs on Instagram and X without a crop. The
  // On this day cards (/on-this-day/<day>/card) are drawn at it; the stat-card
  // builders do not offer it, so their two ratio buttons are unchanged.
  portrait: { width: 1080, height: 1350 },
};
