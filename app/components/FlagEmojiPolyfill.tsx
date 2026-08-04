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
export default function FlagEmojiPolyfill() {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);

  return null;
}
