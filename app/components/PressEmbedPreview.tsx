"use client"; // loads only in the visible layout, in the page's theme

import { useEffect, useRef } from "react";
import { embedPath } from "../lib/embedSnippet";

/**
 * A live embed box on /press, under "Live stat boxes for your site" (J6-3,
 * design review 8 Oct 2026, fix 133).
 *
 * Both /press layouts sit in every document, so the server renders the
 * iframe's box with no `src`: a hidden layout never loads the widget, whatever
 * a browser does with a lazy iframe under display:none. On mount, if `media`
 * (the layout's own query) matches, the box gets its src, in the page's
 * resolved theme (`data-theme` on <html>, written before paint by the layout
 * and by the theme toggle). It follows a theme flip, and a layout that comes
 * into view later loads then.
 */
export default function PressEmbedPreview({
  slug,
  width,
  height,
  title,
  media,
  className,
}: {
  slug: string;
  width: number;
  height: number;
  title: string;
  /** The query that shows this layout: "(min-width: 901px)" or "(max-width: 900px)". */
  media: string;
  className?: string;
}) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = ref.current;
    if (!frame || typeof window.matchMedia !== "function") return;
    const shown = window.matchMedia(media);
    const root = document.documentElement;
    const sync = () => {
      if (!shown.matches) return;
      const src = embedPath(slug, root.dataset.theme === "light" ? "light" : "dark");
      if (frame.getAttribute("src") !== src) frame.setAttribute("src", src);
    };
    sync();
    const themeWatch = new MutationObserver(sync);
    themeWatch.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    shown.addEventListener?.("change", sync);
    return () => {
      themeWatch.disconnect();
      shown.removeEventListener?.("change", sync);
    };
  }, [slug, media]);

  return (
    <iframe
      ref={ref}
      title={title}
      width={width}
      height={height}
      loading="lazy"
      className={className}
      style={{ border: 0, maxWidth: "100%" }}
    />
  );
}
