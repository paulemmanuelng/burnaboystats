/**
 * The document language of the site's one non-English route, /dai-dai/es.
 *
 * The root layout hard-codes `<html lang="en">`, and only the root layout can
 * render <html>. So the Spanish edition's document language is set twice:
 *
 *   - PRE_PAINT_LANG runs inside the root layout's inline pre-paint script, so
 *     a document loaded on /dai-dai/es says "es" before its first paint and
 *     before hydration — not only after the route's effect has run. <html>
 *     carries suppressHydrationWarning for the theme attribute the same script
 *     writes, and React does not rewrite attributes it finds on hydration.
 *   - DocumentLangEs (the route's layout) sets it on a client-side arrival and
 *     sets "en" again on the way out, because the inline script only runs on a
 *     full document load.
 *
 * Readers without JavaScript still get "en" on <html>: the Spanish prose itself
 * carries <main lang="es">, and next.config sends Content-Language: es.
 */
export const SPANISH_PATH = /^\/dai-dai\/es(?:\/|$)/;

export const PRE_PAINT_LANG = `if(${SPANISH_PATH}.test(location.pathname))document.documentElement.lang="es";`;
