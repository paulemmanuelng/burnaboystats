import { CANONICAL_ORIGIN } from "./seo";

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

/** What the /embed page shows for one widget. Plain data, so a server page can
 *  hand it to a client component. */
export interface EmbedMeta {
  slug: string;
  /** Row title on /embed — "Career streams". */
  name: string;
  /** One line on /embed saying what the box shows. */
  what: string;
  /** Suggested iframe size. The box itself reads from 300 to 400 px wide. */
  width: number;
  height: number;
  /** The iframe's title attribute: what a screen reader announces for it. */
  iframeTitle: string;
  /** The plain credit link under the iframe — anchor text and page. */
  credit: string;
  creditHref: string;
}

/** The widget's path on this site, with the theme if one was picked. Relative,
 *  so the /embed page's own previews load from whichever host serves it. */
export const embedPath = (slug: string, theme: EmbedTheme) =>
  `/embed/${slug}${theme === "auto" ? "" : `?theme=${theme}`}`;

const attr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * The HTML a site owner pastes: the iframe, then one plain credit line.
 *
 * The credit line is not decoration. A link INSIDE an iframe belongs to the
 * framed document, not to the page that embeds it, so search engines do not
 * reliably count it as a link from that page; a plain <a> in the host page's
 * own HTML is one. The box keeps its own link for readers, and the line is the
 * part that can carry weight for the site. Absolute URLs on the canonical
 * domain, so a snippet copied from a preview deployment still points home.
 */
export function embedSnippet(w: EmbedMeta, theme: EmbedTheme): string {
  const src = `${CANONICAL_ORIGIN}${embedPath(w.slug, theme)}`;
  return (
    `<iframe src="${attr(src)}" title="${attr(w.iframeTitle)}" width="${w.width}" height="${w.height}" ` +
    `style="border:0;max-width:100%" loading="lazy"></iframe>\n` +
    `<p><a href="${attr(`${CANONICAL_ORIGIN}${w.creditHref}`)}">${attr(w.credit)}</a></p>`
  );
}

/** A note's text split on backticks, so a token like `?theme=dark` can be set
 *  as code that does not break across lines. Both /embed layouts render the
 *  same notes through this. */
export const noteParts = (text: string) =>
  text.split("`").map((part, i) => ({ part, code: i % 2 === 1 }));
