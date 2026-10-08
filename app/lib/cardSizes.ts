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

/**
 * The width /share's previews ask the /stat-card route for (?w=720): the same
 * drawing, resized and sent as a WebP. The maker showed the full 1080px PNG
 * as its preview — 831 KB for the phone's story, 745 KB for the desktop
 * square, and another ~800 KB on every chip tap, in boxes 354 and 460 CSS
 * pixels wide (design review C-05, 8 Oct 2026). The full PNG is what Download
 * and "Save or share" fetch, and only they fetch it. One width and no others,
 * so the route cannot be asked for a thousand cache variants.
 */
export const STAT_CARD_PREVIEW_WIDTH = 720;

/** The card file a reader saves: the full PNG at CARD_SIZES[ratio]. */
export const statCardFile = (id: string, ratio: CardRatio) => `/stat-card?stat=${id}&ratio=${ratio}`;

/** The same card as a preview. `attempt` re-requests a URL the browser just
 *  marked bad (the Retry button). */
export const statCardPreview = (id: string, ratio: CardRatio, attempt = 0) =>
  `${statCardFile(id, ratio)}&w=${STAT_CARD_PREVIEW_WIDTH}${attempt ? `&r=${attempt}` : ""}`;
