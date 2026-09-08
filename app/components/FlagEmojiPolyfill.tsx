"use client"; // font injection needs the real browser

import { useEffect } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

/**
 * Windows renders country-flag emoji as bare letter pairs ("NG", "GB") —
 * Chrome and Edge there ship no flag glyphs. This injects Twemoji's
 * flags-only webfont (~78KB, loaded ONLY when the browser fails a flag
 * render test, so Apple and Android users never download it) and the
 * global font stack lists "Twemoji Country Flags" first so the injected
 * face wins wherever a flag appears — chart chips, cert badges, live
 * boards and prose alike. Everything else falls through: the font
 * contains nothing but flag sequences.
 */
/**
 * Self-hosted, deliberately. Called with no arguments the package injects an
 * @font-face pointing at cdn.jsdelivr.net — a third-party font fetch that the
 * CSP's `font-src 'self' data:` does not allow and that nothing on a Mac would
 * ever reveal, because the polyfill only fires when the flag render test fails.
 * The package ships the woff2 itself, so it is copied into public/fonts and
 * served from our own origin: the policy stays honest and the third party goes.
 */
export default function FlagEmojiPolyfill() {
  useEffect(() => {
    polyfillCountryFlagEmojis("Twemoji Country Flags", "/fonts/TwemojiCountryFlags.woff2");
  }, []);

  return null;
}
