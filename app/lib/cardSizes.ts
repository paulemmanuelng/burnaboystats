/**
 * Share-card dimensions, in their own module with no `next/og` import.
 *
 * The builder is a client component and needs these numbers for its preview and
 * its label. Importing them from statCardImage.tsx pulled `next/og` — and with
 * it sharp and detect-libc — into the browser bundle, which fails the build
 * outright. Plain data belongs where both sides can reach it.
 */
export type CardRatio = "square" | "story";

export const CARD_SIZES: Record<CardRatio, { width: number; height: number }> = {
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
};
