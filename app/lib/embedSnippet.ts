import { CANONICAL_ORIGIN, SITE_NAME } from "./seo";

/**
 * The embed widgets' copy-ready snippet, and the pieces of a widget the
 * /embed page's two layouts need in the browser.
 *
 * Kept apart from embedWidgets.ts on purpose: that file imports the datasets
 * to derive each figure, and this one is imported by client components (the
 * theme choice rewrites the snippet as the reader picks), so it must not drag
 * a dataset into the bundle.
 */

export const EMBED_THEMES = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
] as const;
export type EmbedTheme = (typeof EMBED_THEMES)[number]["value"];

/**
 * The column widths every box was measured across, in px: at its suggested
 * height, each one fits at any width from `min` to `max`. The /embed page's
 * note prints this range, and every height in embedWidgets.ts was measured at
 * both ends of it — change it only after re-measuring.
 */
export const EMBED_FITS = { min: 280, max: 400 } as const;

/** What the /embed page shows for one widget. Plain data, so a server page can
 *  hand it to a client component. */
export interface EmbedMeta {
  slug: string;
  /** Row title on /embed — "Career streams". */
  name: string;
  /** One line on /embed saying what the box shows. */
  what: string;
  /** Suggested iframe size. The box itself fits any width in EMBED_FITS. */
  width: number;
  height: number;
  /** The iframe's title attribute: what a screen reader announces for it. */
  iframeTitle: string;
  /** The page the credit line under the iframe links to: the one the box's
   *  figure comes from (the box's own link, content.href). */
  creditHref: string;
}

/** The widget's path on this site, with the theme if one was picked. Relative,
 *  so the /embed page's own previews load from whichever host serves it. */
export const embedPath = (slug: string, theme: EmbedTheme) =>
  `/embed/${slug}${theme === "auto" ? "" : `?theme=${theme}`}`;

const attr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * The credit line's link text: the site's name, the same on every widget.
 *
 * Brand-led on purpose. Google's spam policies list keyword-rich links spread
 * across sites through widgets as link spam, and the first credit lines were
 * exactly that shape ("Burna Boy's career streams, live on Burna Boy Stats").
 * A credit names its source; the page it links to says what the figure is.
 */
export const EMBED_CREDIT = SITE_NAME;

/**
 * The HTML a site owner pastes: the iframe, then one plain credit line,
 * "Source: Burna Boy Stats", linked to the page the figure comes from.
 *
 * The line is the attribution the figures' licence asks for, in the host
 * page's own HTML, where it survives a reader who never clicks the box and a
 * page that strips iframes. A normal link with no rel, like any citation.
 * Absolute URLs on the canonical domain, so a snippet copied from a preview
 * deployment still points home.
 */
export function embedSnippet(w: EmbedMeta, theme: EmbedTheme): string {
  const src = `${CANONICAL_ORIGIN}${embedPath(w.slug, theme)}`;
  return (
    `<iframe src="${attr(src)}" title="${attr(w.iframeTitle)}" width="${w.width}" height="${w.height}" ` +
    `style="border:0;max-width:100%" loading="lazy"></iframe>\n` +
    `<p>Source: <a href="${attr(`${CANONICAL_ORIGIN}${w.creditHref}`)}">${attr(EMBED_CREDIT)}</a></p>`
  );
}

/** A note's text split on backticks, so a token like `?theme=dark` can be set
 *  as code that does not break across lines. Both /embed layouts render the
 *  same notes through this. */
export const noteParts = (text: string) =>
  text.split("`").map((part, i) => ({ part, code: i % 2 === 1 }));
