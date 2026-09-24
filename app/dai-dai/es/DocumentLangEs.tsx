"use client";

import { useEffect } from "react";

/**
 * Corrects the document's language to Spanish on /dai-dai/es.
 *
 * The served HTML says `<html lang="en">`, because app/layout.tsx hard-codes it
 * and a nested layout cannot re-open <html> — in the App Router only the root
 * layout may. This page is a real, indexed Spanish edition that cross-declares
 * hreflang with /dai-dai, and shipping it under a document language of English
 * contradicts its own alternate links, its `og:locale: es_ES` and the
 * `inLanguage: "es"` in its Article node. Four declarations said Spanish and the
 * one the browser and the accessibility tree actually read said English.
 *
 * Two pieces set it, one per way of arriving (see lib/documentLang.ts):
 *   - A full load of /dai-dai/es: the root layout's inline pre-paint script
 *     sets "es" during parse, before first paint. React does not rewrite
 *     attributes it finds on hydration, and <html> already suppresses the
 *     warning for the theme attribute the same script writes. Until 24 Sep
 *     2026 this effect was the only fix, so lang said "en" until hydration.
 *   - A client-side arrival: no document load, so no inline script. This
 *     effect sets "es".
 *
 * Leaving sets "en" — explicitly, not "whatever was there before". After a
 * full load the value found here is already "es" (the inline script wrote it),
 * so restoring it would carry Spanish onto /dai-dai and every English page
 * after it. Client-side navigation never reloads the document, so nothing
 * else would put it back.
 *
 * What neither fixes is the attribute in the served bytes, which is the root
 * layout's to give. The Spanish PROSE is already marked server-side — the page
 * renders <main lang="es"> — so a reader with JavaScript off still gets the
 * content correctly announced.
 */
export default function DocumentLangEs() {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = "es";
    return () => {
      root.lang = "en";
    };
  }, []);

  return null;
}
