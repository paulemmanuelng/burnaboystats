// The emails' palette and type — the site's look in the dialect every inbox
// renders. Hexes, deliberately: an email does not read globals.css, and
// `color-scheme: dark` is the only theming a mail client honours. Shared by
// the confirmation (confirmEmail.ts) and the digest (digestEmail.ts) so the
// two look like one sender. Values: the design response's palette table.
export const BG = "#0d0b09";
export const CARD = "#16130f";
export const CARD_LINE = "#2a251f";
export const INK = "#f5f4f0";
export const BODY = "#cfc7bb";
export const MUTED = "#bdb5a8";
export const FINE = "#8a8279";
export const GOLD = "#ffb627";
export const INK_ON_GOLD = "#14100a";
export const FONT = "Arial, Helvetica, sans-serif";
export const MONO = "Menlo, Consolas, 'Courier New', monospace";

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
