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
/**
 * Apple's systems (macOS, iOS, iPadOS — whose Safari says "Macintosh") and
 * Android draw flag emoji natively, so there the test is skipped outright. It
 * draws emoji into a canvas and reads the pixels back, twice: 38–49 ms of main
 * thread on a throttled phone, in the same task that finishes hydration — the
 * moment a reader is starting to scroll. Everywhere else (Windows, Linux,
 * ChromeOS) it runs as before.
 */
export const DRAWS_FLAGS = /\b(iPhone|iPad|iPod|Macintosh|Android)\b/;

export default function FlagEmojiPolyfill() {
  useEffect(() => {
    if (DRAWS_FLAGS.test(navigator.userAgent)) return;
    polyfillCountryFlagEmojis("Twemoji Country Flags", "/fonts/TwemojiCountryFlags.woff2");
  }, []);

  return null;
}
