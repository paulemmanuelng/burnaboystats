/**
 * Country code → emoji flag for the live-charts boards.
 *
 * kworb labels Britain "UK", but the emoji flag standard only knows ISO
 * "GB" — the computed 🇺🇰 sequence has no glyph on ANY platform, so the UK
 * row rendered as bare letter boxes even on a Mac. "WW" is kworb's
 * worldwide chart, which is not a country at all; it gets the globe. Both
 * desktop and mobile boards had their own copy of this helper, which is
 * how the alias got missed — one shared copy now.
 */
const ALIASES: Record<string, string> = { UK: "GB" };

export const flagFor = (code: string): string => {
  const c = ALIASES[code.toUpperCase()] ?? code.toUpperCase();
  if (c === "WW") return "🌐";
  if (!/^[A-Z]{2}$/.test(c)) return "";
  return String.fromCodePoint(...[...c].map((ch) => 0x1f1a5 + ch.charCodeAt(0)));
};
