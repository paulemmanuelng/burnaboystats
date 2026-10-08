import { CREDIT_KEY, OFF_VALUE, SCOPE_KEY } from "./certScope";

/**
 * A shared certifications link paints its own view first (design review
 * CC-22, 8 Oct 2026).
 *
 * The page is static, and only the "all" view is in its HTML: a link that
 * turns a switch off — /certifications#feat=0&home=0, an artist's #home=0 —
 * painted "Certified worldwide · 251" and then, once hydrated, swapped to
 * "Outside Nigeria · Lead credits · 125". That is a flash of a different
 * headline figure on exactly the links people share.
 *
 * The pattern is the box-office board's (lib/showsDeepLink): the page's own
 * inline script marks <html> before the blocks are parsed, the page's <style>
 * hides every block the switches recount (visibility, so nothing moves), and
 * useCertView drops the mark once the page's render shows the link's view. A
 * render that never comes cannot strand the blocks: the mark lifts itself
 * after four seconds.
 *
 * Pure: no data import, so the client hook can read the names.
 */

/** On <html> from first paint until the switches' view has rendered. */
export const CERT_VIEW_MARK = "data-cert-view-pending";
/** On each block the switches recount, both layouts. */
export const CERT_SWAP = "data-cert-swap";

/** The inline script. It reads a key as readDeepLink does — the fragment
 *  first, an empty value there meaning nothing, then the query — and marks
 *  the page only when a switch is off, as parseScope/parseCredit read it. */
export const CERT_VIEW_PRE_PAINT =
  `try{var f=new URLSearchParams(location.hash.slice(1)),q=new URLSearchParams(location.search);` +
  `function r(k){var v=f.get(k);return v!==null?v:q.get(k)}` +
  `if(r(${JSON.stringify(SCOPE_KEY)})===${JSON.stringify(OFF_VALUE)}||r(${JSON.stringify(CREDIT_KEY)})===${JSON.stringify(OFF_VALUE)}){` +
  `var d=document.documentElement;d.setAttribute(${JSON.stringify(CERT_VIEW_MARK)},"");` +
  `setTimeout(function(){d.removeAttribute(${JSON.stringify(CERT_VIEW_MARK)})},4000)}}catch(e){}`;

/** Hides the recounted blocks while the mark is on. */
export const CERT_VIEW_PRE_PAINT_CSS = `html[${CERT_VIEW_MARK}] [${CERT_SWAP}]{visibility:hidden}`;

/** Spread onto a block the switches recount. */
export const certSwap = { [CERT_SWAP]: "" } as const;
