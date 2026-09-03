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
 * Eager images also get a media-gated preload, which React hoists into <head>
 * — the earliest a fetch can start, and what keeps the first tiles prompt on
 * the layout that shows them.
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
        <link rel="preload" as="image" imageSrcSet={srcSet} imageSizes={sizes} media={media} />
      )}
      <picture style={{ display: "contents" }}>
        <source media={media} srcSet={srcSet} sizes={sizes} />
        <img {...img} src={BLANK_PIXEL} alt={alt} className={className} />
      </picture>
    </>
  );
}
