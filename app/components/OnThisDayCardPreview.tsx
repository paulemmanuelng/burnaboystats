"use client";

import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

/**
 * A day page's card preview, which wears the site's loading skeleton until the
 * card is in.
 *
 * The card is drawn on request (app/on-this-day/[day]/card/route.ts) and the
 * CDN keeps it for an hour, so the first visit after a deploy or a quiet spell
 * waits for the drawing: 0.5–1.6 s on burnaboystats.com on 7 Oct 2026
 * (x-vercel-cache MISS), against 0.1–0.2 s for a cached card. Until then the
 * preview's box stood empty, the colour of the stage around it (V-otd-05).
 * `loadingClassName` paints the skeleton under the image; the card's load
 * clears it, and so does a failure, which leaves the alt text on the plain box.
 *
 * React does not replay a load that came before hydration, so a card the
 * browser had already finished is handed to the same handlers on mount, as on
 * /share (StatCardMaker, MobileStatCards).
 */
export default function OnThisDayCardPreview({
  className,
  loadingClassName,
  alt,
  ...img
}: Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad" | "onError"> & {
  alt: string;
  /** The skeleton, worn until the card has loaded or failed. */
  loadingClassName: string;
}) {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el?.complete) el.dispatchEvent(new Event(el.naturalWidth > 0 ? "load" : "error"));
  }, []);

  const classes = [className, loading && loadingClassName].filter(Boolean).join(" ");
  return (
    // eslint-disable-next-line @next/next/no-img-element -- a route-drawn WebP, sized by the route
    <img
      ref={ref}
      {...img}
      alt={alt}
      className={classes || undefined}
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
    />
  );
}
