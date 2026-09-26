/**
 * An On this day card, as a file and as a preview.
 *
 * /on-this-day/<day>/card is the 1080×1350 PNG a reader saves and posts
 * (about 725 KB). A page that only SHOWS the card asks for ?w=560 (desktop,
 * a 280px preview at 2×) or ?w=320 (the phone's 144px thumbnail): a WebP
 * resized from the same drawing, a few tens of KB. Two widths and no others,
 * so the route cannot be asked for a thousand cache variants.
 */
export const CARD_PREVIEW_WIDTHS = [320, 560] as const;

/** The card itself: 4:5, the tallest a feed post runs on Instagram and X
 *  without a crop (lib/onThisDayImages.tsx draws it). */
export const CARD_SIZE = { width: 1080, height: 1350 } as const;
export type CardPreviewWidth = (typeof CARD_PREVIEW_WIDTHS)[number];

export const cardPath = (slug: string) => `/on-this-day/${slug}/card`;
export const cardPreviewSrc = (slug: string, w: CardPreviewWidth) => `${cardPath(slug)}?w=${w}`;
export const cardFilename = (slug: string) => `burna-boy-on-this-day-${slug}.png`;

/**
 * The ?w= a request asked for: undefined when it asked for none (the full
 * PNG), null when it asked for a width the route does not serve.
 */
export function parsePreviewWidth(raw: string | null): CardPreviewWidth | undefined | null {
  if (raw === null) return undefined;
  return CARD_PREVIEW_WIDTHS.find((w) => String(w) === raw) ?? null;
}
