import { getImageProps } from "next/image";
import { BLANK_PIXEL } from "../lib/blankPixel";

/**
 * A local image that is fetched only when its layout is the one showing.
 *
 * Desktop and mobile markup both sit in every document with one hidden by
 * display:none, and a hidden EAGER <img> is still fetched. So an index that
 * eager-loads its first tiles for both layouts would bill every visitor for
 * the tiles of the layout they never see. The preload scanner evaluates a
 * <source media> before it fetches, so the real srcset lives there and the
 * <img> itself carries a 1x1 — see app/lib/blankPixel.ts. Same mechanism as
 * MobileCerts' portrait, for a next/image-generated srcset.
 *
 * Eager images also get a media-gated preload. It has a srcset and no href,
 * and React only hoists a preload into <head> when it has an href — so this
 * one is emitted where it stands. It still arrives in the first flight of
 * HTML, before the <picture> it serves, and it is the request the tile is
 * painted from.
 *
 * That makes its priority the one that counts. An image preload with no hint
 * goes out at Low, and on 23 Sep 2026 Lighthouse flagged /records/cars for
 * exactly that: the phone's first tile, its LCP element, was requested
 * without fetchpriority=high. So both the preload and the eager <img> carry
 * it; lazy tiles carry none. The media gate is untouched, so each layout
 * still fetches only its own tiles.
 */
export default function GatedImage({
  src,
  alt,
  width,
  height,
  sizes,
  media,
  eager = false,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  /** The media query under which this layout is visible. */
  media: string;
  eager?: boolean;
  className?: string;
}) {
  const {
    props: { srcSet, src: _src, ...img },
  } = getImageProps({
    src,
    alt,
    width,
    height,
    sizes,
    ...(eager ? { priority: true } : { loading: "lazy" as const }),
  });
  return (
    <>
      {eager && srcSet && (
        <link
          rel="preload"
          as="image"
          imageSrcSet={srcSet}
          imageSizes={sizes}
          media={media}
          fetchPriority="high"
        />
      )}
      <picture style={{ display: "contents" }}>
        <source media={media} srcSet={srcSet} sizes={sizes} />
        <img
          {...img}
          src={BLANK_PIXEL}
          alt={alt}
          className={className}
          fetchPriority={eager ? "high" : undefined}
        />
      </picture>
    </>
  );
}
