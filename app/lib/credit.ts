import { CANONICAL_ORIGIN, SITE_NAME } from "./seo";

/**
 * The one credit line — what the site asks anyone who uses its figures to
 * print — in its three forms: plain, linked, and dated for a file.
 *
 * "Data from Burna Boy Stats (burnaboystats.com)". Until 8 Oct 2026 there were
 * four: /press offered "Data: Burna Boy Stats (burnaboystats.com)", the
 * dataset citation began "Source: Burna Boy Stats (burnaboystats.com)", the
 * /api box read "Data from Burna Boy Stats — https://burnaboystats.com" and
 * every JSON response carried "Data from Burna Boy Stats
 * (https://burnaboystats.com)" (design review C-17). "Data from" is the form
 * the site served most — every /api/v1 response and the /api box — and the
 * bare domain is the form /press and the citation already used.
 */
export const CREDIT_HOST = new URL(CANONICAL_ORIGIN).host;

export const CREDIT_LINE = `Data from ${SITE_NAME} (${CREDIT_HOST})`;

/** The same line as HTML: the same words, the name linked — to the home page
 *  by default, or to the page a figure came from (the /embed snippet).
 *
 *  The link text is the site's name, brand-led on purpose: Google's spam
 *  policies list keyword-rich links spread across sites through widgets as
 *  link spam, and the first embed credits were exactly that shape ("Burna
 *  Boy's career streams, live on Burna Boy Stats"). A credit names its
 *  source; the page it links to says what the figure is. */
export const creditLineHtml = (href: string = CANONICAL_ORIGIN, escape: (s: string) => string = (s) => s) =>
  `Data from <a href="${escape(href)}">${escape(SITE_NAME)}</a> (${CREDIT_HOST})`;

/** The dated form, for a dataset or a file: "…, as of 7 October 2026. CC BY 4.0." */
export const creditLineDated = (dateLabel: string) => `${CREDIT_LINE}, as of ${dateLabel}. CC BY 4.0.`;
