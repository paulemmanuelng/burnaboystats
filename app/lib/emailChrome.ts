// The emails' palette and type — the site's look in the dialect every inbox
// renders. Hexes, deliberately: an email does not read globals.css, and a
// mail client's dark mode recolours what it likes. Shared by the confirmation
// (confirmEmail.ts) and the digest (digestEmail.ts) so the two look like one
// sender. Values: the digest-email design response's palette table, plus the
// one raised surface Paul's "cool elements" round brought back — bordered and
// railed, never a tint doing a job on its own.
export const BG = "#0d0b09";
/** The one raised surface — the headliners' card. Always with a 1px hairline
 *  border and a gold rail, so it stands even where a client flattens tints. */
export const RAISED = "#16130f";
export const CARD_LINE = "#2a251f";
export const INK = "#f5f4f0";
export const BODY = "#cfc7bb";
export const MUTED = "#bdb5a8";
export const FINE = "#8a8279";
export const GOLD = "#ffb627";
export const INK_ON_GOLD = "#14100a";
export const FONT = "Arial, Helvetica, sans-serif";
// Android has none of the named faces; `monospace` at the end is what gives it
// Droid Sans Mono rather than a serif fallback.
export const MONO = "Menlo, Consolas, 'Droid Sans Mono', monospace";
/** The legal line: 12px is the floor — nothing in any client scales it up. */
export const FINE_SIZE = 12;
/** The crown, self-hosted: the one image either email carries. 2× asset, 80×70. */
export const CROWN = { path: "/email/crown-email-2x.png", width: 40, height: 35, alt: "Burnaboystats" };

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
