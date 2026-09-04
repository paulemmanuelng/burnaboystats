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
 * So the attribute is corrected in an effect, which is the strongest fix
 * available from inside this route:
 *   - It lands before any rendering crawler takes its snapshot, so what gets
 *     indexed carries lang="es".
 *   - It runs AFTER hydration on purpose. Setting it earlier (an inline script
 *     during parse) would leave React hydrating an <html> whose lang no longer
 *     matches the server output, and React 19 answers an attribute mismatch on a
 *     hydration boundary by re-rendering rather than patching — a whole-tree
 *     client render on the site's second-biggest page, to fix a string.
 *   - The cleanup restores whatever was there before. Client-side navigation
 *     never reloads the document, so without it a reader who followed the "in
 *     English" link would carry lang="es" onto /dai-dai and every English page
 *     after it — a wrong lang on one page traded for a wrong lang on all of them.
 *
 * What it does NOT fix is the attribute in the served bytes, which is the root
 * layout's to give. The Spanish PROSE is already marked server-side — the page
 * renders <main lang="es"> — so a reader with JavaScript off still gets the
 * content correctly announced; it is the document-level declaration that needs
 * this.
 */
export default function DocumentLangEs() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.lang;
    root.lang = "es";
    return () => {
      root.lang = previous;
    };
  }, []);

  return null;
}
