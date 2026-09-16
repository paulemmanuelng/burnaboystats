// The digest as an email: a 600px table, inline styles, dark ground and gold —
// the site's look in the dialect every inbox renders. No web fonts, no
// external CSS, every link absolute, one image (the site's own crown, self-
// hosted), and Resend's unsubscribe placeholder in the footer, which
// Broadcasts replace per recipient. The plain-text twin is what a screen
// reader or a text-only client gets, and what the spam filters read alongside
// the HTML.
//
// Shape (design response, 16 Sep 2026 — docs/design/design-response-digest-
// email-2026-09-16.md): a masthead (crown, wordmark, the week line, a 2px gold
// rule), then ONE ruled list with every entry whole — the headliners at 19px,
// the rest at 15px, each entry's opening clause in bold and the whole entry
// one anchor whose visible affordance is its own URL — then a gold rule, the
// footer's two sentences, three link cells, the gold sign-off band and the
// legal line. No cards, no numerals, no divider: size and position are the
// hierarchy, and nothing sits on a tint that a mail client's recolouring
// would collapse. Values verbatim from the board "Digest — 600" and its
// media-query table.
import type { Update } from "../data/updates";
import { digestWindow, splitDigest, splitClause, weekRange, weekRangeShort, digestPreheader } from "./digest";
import { BG, CARD_LINE, INK, MUTED, FINE, GOLD, INK_ON_GOLD, FONT, MONO, FINE_SIZE, CROWN, esc } from "./emailChrome";

export const UNSUBSCRIBE_PLACEHOLDER = "{{{RESEND_UNSUBSCRIBE_URL}}}";

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });

/** "CORRECTION · CHARTS · 2 SEPTEMBER" — corrections are keyed on their opening words; there is no field. */
const isCorrection = (u: Update) => /^A correction\b/.test(u.text);
const kickerOf = (u: Update) => `${isCorrection(u) ? "CORRECTION · " : ""}${u.category.toUpperCase()} · ${longDate(u.date).toUpperCase()}`;
const count = (n: number) => `${n} ${n === 1 ? "ENTRY" : "ENTRIES"}`;

export interface DigestRender {
  origin: string;
  now: Date;
  /** The unsubscribe link to print; defaults to Resend's placeholder. A test send passes a real URL. */
  unsubscribe?: string;
}

/** The masthead both emails open on: crown, wordmark, one mono line, a 2px gold rule. */
export function mastheadHtml(origin: string, line: string): string {
  return `
          <tr>
            <td class="mast cell" style="padding:20px 24px 18px;border-bottom:2px solid ${GOLD};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:top;padding:2px 14px 0 0;"><img class="crown" src="${esc(origin)}${CROWN.path}" width="${CROWN.width}" height="${CROWN.height}" alt="${esc(CROWN.alt)}" style="display:block;width:${CROWN.width}px;height:${CROWN.height}px;border:0;"></td>
                  <td style="vertical-align:top;">
                    <a class="wm" href="${esc(origin)}/updates" style="display:block;font-family:${FONT};font-size:24px;line-height:28px;font-weight:bold;letter-spacing:1px;color:${INK};text-decoration:none;white-space:nowrap;">BURNABOY<span style="color:${GOLD};">STATS</span></a>
                    <div class="week" style="font-family:${MONO};font-size:11px;line-height:16px;letter-spacing:1px;color:${MUTED};padding-top:4px;">${line}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
}

export function renderDigestHtml(items: Update[], { origin, now, unsubscribe = UNSUBSCRIBE_PLACEHOLDER }: DigestRender): string {
  const { from, to } = digestWindow(now);
  const { headliners } = splitDigest(items);
  const preheader = digestPreheader(items, from, to);
  // Filler after the preheader so a client's snippet does not run on into the
  // masthead text: zero-width non-joiners and non-breaking spaces, invisible.
  const filler = "&zwnj;&nbsp;".repeat(Math.max(0, 40 - Math.ceil(preheader.length / 4)));

  const rows = items
    .map((u) => {
      const big = headliners.includes(u);
      const { clause, rest } = splitClause(u.text);
      const url = esc(`${origin}${u.href}`);
      return `
          <tr>
            <td class="entry cell" style="padding:20px 24px;border-bottom:1px solid ${CARD_LINE};">
              <a href="${url}" style="display:block;color:${INK};text-decoration:none;">
                <div style="font-family:${MONO};font-size:11px;line-height:16px;letter-spacing:1px;color:${MUTED};">${kickerOf(u)}</div>
                <div class="${big ? "big" : "text"}" style="font-family:${FONT};font-size:${big ? 19 : 15}px;line-height:${big ? 28 : 23}px;mso-line-height-rule:exactly;color:${INK};padding-top:8px;"><strong style="font-weight:bold;">${esc(clause)}</strong>${esc(rest)}</div>
                <div style="font-family:${MONO};font-size:12px;line-height:18px;color:${GOLD};padding-top:8px;">burnaboystats.com${esc(u.href)} &#8599;&#xFE0E;</div>
              </a>
            </td>
          </tr>`;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>Burna Boy Stats — the week to ${esc(longDate(to))}</title>
<style>
  /* iOS Mail wraps dates it recognises in its own links, which would paint
     "dated 13 September" blue inside an ink sentence; this hands them the
     surrounding style back. Apple honours it; every other client ignores it.
     (Inside an entry's own anchor the detector does not run at all.) */
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
  /* The board's media-query table — every value that changes at 375, and
     nothing else. Clients that drop <style> keep the 600 values, which still
     read in a 343–375 column. */
  @media only screen and (max-width: 480px) {
    .pad { padding: 16px 0 !important; }
    .cell { padding-left: 16px !important; padding-right: 16px !important; }
    .mast { padding-top: 16px !important; }
    .crown { width: 36px !important; height: 32px !important; }
    .wm { font-size: 20px !important; line-height: 24px !important; }
    .week { letter-spacing: 0 !important; }
    .entry { padding-top: 16px !important; padding-bottom: 16px !important; }
    .big { font-size: 18px !important; line-height: 27px !important; }
    .foot { padding-top: 20px !important; }
    .fine { font-size: 13px !important; line-height: 19px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${BG};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:${BG};mso-hide:all;">${esc(preheader)}${filler}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
    <tr>
      <td align="center" class="pad" style="padding:24px 0;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">${mastheadHtml(origin, `THE SATURDAY DIGEST &middot; ${esc(weekRangeShort(from, to)).toUpperCase()} &middot; ${count(items.length)}`)}${rows}
          <tr>
            <td class="cell" style="padding:0 24px;">
              <div style="height:0;border-top:2px solid ${GOLD};font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td class="foot cell" style="padding:24px 24px 8px;">
              <p style="font-family:${FONT};font-size:13px;line-height:20px;color:${MUTED};margin:0;">Every figure above links to the page it lives on, read at the body that publishes it.</p>
              <p style="font-family:${FONT};font-size:13px;line-height:20px;color:${MUTED};margin:0;padding-top:10px;">Sent on Saturdays at 18:00 London, only in weeks something happened &mdash; this one ran ${esc(weekRange(from, to))}. A quiet week sends nothing.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="padding-top:6px;">
                <tr>
                  <td style="padding:13px 24px 13px 0;"><a href="${esc(origin)}/updates" style="font-family:${MONO};font-size:12px;line-height:18px;letter-spacing:1px;color:${GOLD};text-decoration:none;">ALL UPDATES &#8599;&#xFE0E;</a></td>
                  <td style="padding:13px 24px 13px 0;"><a href="${esc(origin)}/methodology" style="font-family:${MONO};font-size:12px;line-height:18px;letter-spacing:1px;color:${GOLD};text-decoration:none;">HOW THE NUMBERS ARE CHECKED &#8599;&#xFE0E;</a></td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:13px 0;"><a href="${unsubscribe}" style="font-family:${MONO};font-size:12px;line-height:18px;letter-spacing:1px;color:${MUTED};text-decoration:underline;">UNSUBSCRIBE</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="cell" style="padding:10px 24px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${GOLD}" style="background:${GOLD};padding:22px 24px;color:${INK_ON_GOLD};">
                    <div style="font-family:${FONT};font-size:20px;line-height:24px;font-weight:bold;letter-spacing:1px;color:${INK_ON_GOLD};">BURNABOYSTATS</div>
                    <div style="font-family:${MONO};font-size:11px;line-height:16px;letter-spacing:2px;color:${INK_ON_GOLD};padding-top:6px;">THE NUMBERS, VERIFIED &middot; SATURDAYS &middot; 18:00 LONDON</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="cell" style="padding:14px 24px 4px;">
              <p class="fine" style="font-family:${FONT};font-size:${FINE_SIZE}px;line-height:18px;color:${FINE};margin:0;">You're getting this because you confirmed at burnaboystats.com/updates. An unofficial fan site &mdash; not affiliated with or endorsed by Burna Boy.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** The plain-text twin, exactly as tests/fixtures/digest-2026-09-19.txt has it for that week. */
export function renderDigestText(items: Update[], { origin, now, unsubscribe = UNSUBSCRIBE_PLACEHOLDER }: DigestRender): string {
  const { from, to } = digestWindow(now);
  const lines = [
    "BURNABOYSTATS",
    `The Saturday digest · ${weekRangeShort(from, to)} · ${items.length} ${items.length === 1 ? "entry" : "entries"}`,
    "",
    ...items.flatMap((u) => [`${isCorrection(u) ? "CORRECTION · " : ""}${u.category.toUpperCase()} · ${longDate(u.date)}`, u.text, `${origin}${u.href}`, ""]),
    "Every figure above links to the page it lives on, read at the body that publishes it.",
    `Sent on Saturdays at 18:00 London, only in weeks something happened — this one ran ${weekRange(from, to)}. A quiet week sends nothing.`,
    "",
    "All updates",
    `${origin}/updates`,
    "",
    "How the numbers are checked",
    `${origin}/methodology`,
    "",
    "Unsubscribe",
    unsubscribe,
    "",
    "Burnaboystats — the numbers, verified.",
    "",
    "You're getting this because you confirmed at burnaboystats.com/updates.",
    "An unofficial fan site — not affiliated with or endorsed by Burna Boy.",
  ];
  return lines.join("\n");
}
