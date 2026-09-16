// The digest as an email: a 600px table, inline styles, dark ground and gold —
// the site's look in the dialect every inbox renders. No web fonts, no
// external CSS, every link absolute, one image (the site's own crown, self-
// hosted), and Resend's unsubscribe placeholder in the footer, which
// Broadcasts replace per recipient. The plain-text twin is what a screen
// reader or a text-only client gets, and what the spam filters read alongside
// the HTML.
//
// Shape (16 Sep 2026, Paul's brief after the designer's round: "too plain,
// should have some cool elements — learn from the web"; built from a research
// pass over the best-set newsletters and product emails and four rendered
// variants): a masthead — the crown on a bordered tile, the wordmark, the week
// line — then the WEEK STRIP, seven day cells with the days an entry is dated
// ruled in gold and the send day filled; then the entries, each opening on an
// index (01/08 in gold), the category as an outlined mono pill and the date;
// the two headliners on the one raised surface with a 4px gold rail, their
// opening clause set as a 23px display line over a 17px deck; the rest as a
// hairline ledger at 16px with the clause bold inline; every entry whole and
// one anchor whose visible affordance is its own URL. A 2px gold rule opens
// the footer: two sentences, three 44px link cells, the framed gold sign-off
// band, the legal line. Nothing rides on a tint alone — the raised surface
// has a border and a rail, the send day's fill sits beside its bold number —
// so a mail client's recolouring leaves the structure standing.
import type { Update } from "../data/updates";
import { digestWindow, splitDigest, splitClause, weekRange, weekRangeShort, digestPreheader } from "./digest";
import { BG, RAISED, CARD_LINE, INK, MUTED, FINE, GOLD, INK_ON_GOLD, FONT, MONO, FINE_SIZE, CROWN, esc } from "./emailChrome";

export const UNSUBSCRIBE_PLACEHOLDER = "{{{RESEND_UNSUBSCRIBE_URL}}}";

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });

/** "CORRECTION · CHARTS · 2 SEPTEMBER" — corrections are keyed on their opening words; there is no field. */
const isCorrection = (u: Update) => /^A correction\b/.test(u.text);
const kickerOf = (u: Update) => `${isCorrection(u) ? "CORRECTION · " : ""}${esc(u.category).toUpperCase()} · ${esc(longDate(u.date)).toUpperCase()}`;
const count = (n: number) => `${n} ${n === 1 ? "ENTRY" : "ENTRIES"}`;

export interface DigestRender {
  origin: string;
  now: Date;
  /** The unsubscribe link to print; defaults to Resend's placeholder. A test send passes a real URL. */
  unsubscribe?: string;
}

/** The masthead both emails open on: crown, wordmark, one mono line, a 2px gold rule.
 *  `inset` is the cell's side padding — the digest's 24px column inset, or 0
 *  where the body beneath sits flush, as the confirmation's does. */
export function mastheadHtml(origin: string, line: string, inset = 24): string {
  return `
          <tr>
            <td class="mast${inset ? " cell" : ""}" style="padding:20px ${inset}px 18px;border-bottom:2px solid ${GOLD};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:top;padding:2px 14px 0 0;"><img class="crown" src="${esc(origin)}${CROWN.path}" width="${CROWN.width}" height="${CROWN.height}" alt="${esc(CROWN.alt)}" style="display:block;width:${CROWN.width}px;height:${CROWN.height}px;border:0;"></td>
                  <td style="vertical-align:top;">
                    <a class="wm" href="${esc(origin)}/updates" style="display:block;font-family:${FONT};font-size:24px;line-height:28px;mso-line-height-rule:exactly;font-weight:bold;letter-spacing:1px;color:${INK};text-decoration:none;white-space:nowrap;">BURNABOY<span style="color:${GOLD};">STATS</span></a>
                    <div class="week" style="font-family:${MONO};font-size:11px;line-height:16px;mso-line-height-rule:exactly;letter-spacing:1px;color:${MUTED};padding-top:4px;">${line}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
}

/** The seven day cells of the week: letter above number; a day an entry is
 *  dated gets a bold gold number and a 2px gold rule, the send day is a filled
 *  gold cell. Computed from the window and the entries' dates alone. */
function weekStripHtml(items: Update[], from: string, to: string): string {
  const has = new Set(items.map((u) => u.date));
  const cells: string[] = [];
  for (let t = Date.parse(`${from}T12:00:00Z`); t <= Date.parse(`${to}T12:00:00Z`); t += 86_400_000) {
    const d = new Date(t);
    const iso = d.toISOString().slice(0, 10);
    const letter = "SMTWTFS"[d.getUTCDay()];
    const send = iso === to;
    const marked = has.has(iso);
    const td = send
      ? `bgcolor="${GOLD}" style="width:14.28%;background:${GOLD};padding:8px 0 7px;border-top:1px solid ${GOLD};border-bottom:2px solid ${GOLD};"`
      : marked
        ? `style="width:14.28%;padding:8px 0 7px;border-top:1px solid ${CARD_LINE};border-bottom:2px solid ${GOLD};"`
        : `style="width:14.28%;padding:8px 0 8px;border-top:1px solid ${CARD_LINE};border-bottom:1px solid ${CARD_LINE};"`;
    const letterColor = send ? INK_ON_GOLD : marked ? MUTED : FINE;
    const numberColor = send ? INK_ON_GOLD : marked ? GOLD : FINE;
    cells.push(
      `<td align="center" ${td}><div style="font-family:${MONO};font-size:10px;line-height:14px;${X}letter-spacing:1px;color:${letterColor};">${letter}</div><div class="day" style="font-family:${FONT};font-size:16px;line-height:20px;${X}font-weight:${send || marked ? "bold" : "normal"};color:${numberColor};padding-top:3px;">${d.getUTCDate()}</div></td>`,
    );
  }
  return cells.join("\n                  ");
}

const X = "mso-line-height-rule:exactly;";
const pad2 = (n: number) => String(n).padStart(2, "0");

/** The index row every entry opens on: 01/08 in gold, the category as an outlined pill, the date. */
function indexRowHtml(i: number, n: number, u: Update): string {
  const category = `${isCorrection(u) ? "CORRECTION · " : ""}${esc(u.category).toUpperCase()}`;
  return (
    `<div style="font-size:0;line-height:0;">` +
    `<span class="idx" style="display:inline-block;vertical-align:middle;font-family:${FONT};font-size:30px;line-height:34px;${X}font-weight:bold;color:${GOLD};">${pad2(i + 1)}</span>` +
    `<span class="of" style="display:inline-block;vertical-align:middle;font-family:${MONO};font-size:12px;line-height:34px;${X}letter-spacing:1px;color:${FINE};padding:0 14px 0 2px;">/${pad2(n)}</span>` +
    `<span style="display:inline-block;vertical-align:middle;border:1px solid ${FINE};border-radius:3px;padding:3px 8px;font-family:${MONO};font-size:10px;line-height:14px;${X}letter-spacing:1px;color:${MUTED};">${category}</span>` +
    `<span style="display:inline-block;vertical-align:middle;font-family:${MONO};font-size:11px;line-height:34px;${X}letter-spacing:1px;color:${MUTED};padding-left:10px;">${esc(longDate(u.date)).toUpperCase()}</span>` +
    `</div>`
  );
}

export function renderDigestHtml(items: Update[], { origin, now, unsubscribe = UNSUBSCRIBE_PLACEHOLDER }: DigestRender): string {
  const { from, to } = digestWindow(now);
  const { headliners } = splitDigest(items);
  const preheader = digestPreheader(items, from, to);
  // Filler after the preheader so a client's snippet does not run on into the
  // masthead text: zero-width non-joiners and non-breaking spaces, invisible.
  const filler = "&zwnj;&nbsp;".repeat(Math.max(0, 40 - Math.ceil(preheader.length / 4)));
  const n = items.length;
  const urlLine = (u: Update) =>
    `<div style="font-family:${MONO};font-size:12px;line-height:18px;${X}color:${GOLD};padding-top:14px;">burnaboystats.com${esc(u.href)} &#8599;&#xFE0E;</div>`;

  let firstPlain = true;
  const rows = items
    .map((u, i) => {
      const url = esc(`${origin}${u.href}`);
      const { clause, rest } = splitClause(u.text);
      if (headliners.includes(u)) {
        // A headliner: the one raised surface, a 1px hairline and a 4px gold
        // rail, the clause set as a display line, the rest as its deck.
        const last = !(items[i + 1] && headliners.includes(items[i + 1]));
        return `
          <tr>
            <td class="cell" style="padding:${i === 0 ? 20 : 12}px 24px ${last ? 22 : 0}px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="head" bgcolor="${RAISED}" style="background:${RAISED};border:1px solid ${CARD_LINE};border-left:4px solid ${GOLD};padding:22px 24px 24px 22px;">
                    <a href="${url}" style="display:block;color:${INK};text-decoration:none;">
                      ${indexRowHtml(i, n, u)}
                      <div class="display" style="font-family:${FONT};font-size:23px;line-height:29px;${X}font-weight:bold;color:${INK};padding-top:16px;"><strong style="font-weight:bold;">${esc(clause)}</strong></div>
                      <div class="lede" style="font-family:${FONT};font-size:17px;line-height:26px;${X}color:${INK};padding-top:8px;">${esc(rest.trim())}</div>
                      ${urlLine(u)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
      }
      const top = firstPlain ? `border-top:1px solid ${CARD_LINE};` : "";
      firstPlain = false;
      return `
          <tr>
            <td class="entry cell" style="padding:22px 24px;border-bottom:1px solid ${CARD_LINE};${top}">
              <a href="${url}" style="display:block;color:${INK};text-decoration:none;">
                ${indexRowHtml(i, n, u)}
                <div class="text" style="font-family:${FONT};font-size:16px;line-height:24px;${X}color:${INK};padding-top:14px;"><strong style="font-weight:bold;">${esc(clause)}</strong>${esc(rest)}</div>
                ${urlLine(u)}
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
  /* Every value that changes at phone width, and nothing else. Clients that
     drop <style> keep the 600 values, which still read in a 343–375 column. */
  @media only screen and (max-width: 480px) {
    .pad { padding: 12px 0 !important; }
    .cell { padding-left: 16px !important; padding-right: 16px !important; }
    .crowncell { width: 60px !important; }
    .mastcell { padding: 14px 16px !important; }
    .wm { font-size: 20px !important; line-height: 24px !important; }
    .week { letter-spacing: 0 !important; }
    .day { font-size: 15px !important; line-height: 19px !important; }
    .head { padding: 18px 16px 20px 16px !important; }
    .entry { padding-top: 18px !important; padding-bottom: 18px !important; }
    .idx { font-size: 26px !important; line-height: 30px !important; }
    .of { padding-right: 10px !important; }
    .display { font-size: 20px !important; line-height: 26px !important; }
    .lede { font-size: 16px !important; line-height: 24px !important; }
    .text { font-size: 15px !important; line-height: 23px !important; }
    .foot { padding-top: 20px !important; }
    .band { padding: 22px 18px !important; }
    .bandword { font-size: 24px !important; line-height: 28px !important; letter-spacing: 2px !important; }
    .bandline { letter-spacing: 1px !important; }
    .fine { font-size: 13px !important; line-height: 19px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${BG};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;${X}color:${BG};mso-hide:all;">${esc(preheader)}${filler}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BG}" style="background:${BG};">
    <tr>
      <td align="center" class="pad" style="padding:24px 0;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <!-- Masthead: the crown on its own bordered tile, the wordmark and the week line beside it -->
          <tr>
            <td class="cell" style="padding:0 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="crowncell" width="72" align="center" style="width:72px;padding:0;vertical-align:middle;border:1px solid ${CARD_LINE};">
                    <a href="${esc(origin)}/updates" style="display:block;padding:20px 0;text-decoration:none;"><img class="crown" src="${esc(origin)}${CROWN.path}" width="${CROWN.width}" height="${CROWN.height}" alt="${esc(CROWN.alt)}" style="display:block;margin:0 auto;width:${CROWN.width}px;height:${CROWN.height}px;border:0;"></a>
                  </td>
                  <td class="mastcell" style="padding:14px 0 14px 20px;vertical-align:middle;">
                    <a class="wm" href="${esc(origin)}/updates" style="display:block;font-family:${FONT};font-size:24px;line-height:28px;${X}font-weight:bold;letter-spacing:1px;color:${INK};text-decoration:none;white-space:nowrap;">BURNABOY<span style="color:${GOLD};">STATS</span></a>
                    <div class="week" style="font-family:${MONO};font-size:11px;line-height:16px;${X}letter-spacing:1px;color:${MUTED};padding-top:4px;">THE SATURDAY DIGEST &middot; ${esc(weekRangeShort(from, to)).toUpperCase()} &middot; ${count(n)}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- The week: seven day cells; a day an entry is dated carries a gold rule, the send day is filled -->
          <tr>
            <td class="cell" style="padding:16px 24px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  ${weekStripHtml(items, from, to)}
                </tr>
              </table>
            </td>
          </tr>${rows}
          <tr>
            <td class="cell" style="padding:26px 24px 0;">
              <div style="height:0;border-top:2px solid ${GOLD};font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td class="foot cell" style="padding:22px 24px 8px;">
              <p style="font-family:${FONT};font-size:13px;line-height:20px;${X}color:${MUTED};margin:0;">Every figure above links to the page it lives on, read at the body that publishes it.</p>
              <p style="font-family:${FONT};font-size:13px;line-height:20px;${X}color:${MUTED};margin:0;padding-top:10px;">Sent on Saturdays at 18:00 London, only in weeks something happened &mdash; this one ran ${esc(weekRange(from, to))}. A quiet week sends nothing.</p>
              <!-- Inline-block anchors, 13px of padding on each, so every link is
                   its own 44px target and the two gold ones wrap to two rows at
                   375 on their own. -->
              <div style="padding-top:6px;font-size:0;line-height:0;">
                <a href="${esc(origin)}/updates" style="display:inline-block;padding:13px 24px 13px 0;font-family:${MONO};font-size:12px;line-height:18px;${X}letter-spacing:1px;color:${GOLD};text-decoration:none;">ALL UPDATES &#8599;&#xFE0E;</a>
                <a href="${esc(origin)}/methodology" style="display:inline-block;padding:13px 24px 13px 0;font-family:${MONO};font-size:12px;line-height:18px;${X}letter-spacing:1px;color:${GOLD};text-decoration:none;">HOW THE NUMBERS ARE CHECKED &#8599;&#xFE0E;</a>
              </div>
              <div style="font-size:0;line-height:0;">
                <a href="${unsubscribe}" style="display:inline-block;padding:13px 0;font-family:${MONO};font-size:12px;line-height:18px;${X}letter-spacing:1px;color:${MUTED};text-decoration:underline;">UNSUBSCRIBE</a>
              </div>
            </td>
          </tr>
          <!-- Sign-off band: the one gold field, with an inset ink frame -->
          <tr>
            <td class="cell" style="padding:12px 24px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${GOLD}" style="background:${GOLD};padding:6px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="band" style="border:1px solid ${INK_ON_GOLD};padding:28px 26px;">
                          <div class="bandword" style="font-family:${FONT};font-size:28px;line-height:32px;${X}font-weight:bold;letter-spacing:3px;color:${INK_ON_GOLD};">BURNABOYSTATS</div>
                          <div class="bandline" style="font-family:${MONO};font-size:11px;line-height:16px;${X}letter-spacing:2px;color:${INK_ON_GOLD};padding-top:10px;">THE NUMBERS, VERIFIED &middot; SATURDAYS &middot; 18:00 LONDON</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="cell" style="padding:16px 24px 4px;">
              <p class="fine" style="font-family:${FONT};font-size:${FINE_SIZE}px;line-height:18px;${X}color:${FINE};margin:0;">You're getting this because you confirmed at burnaboystats.com/updates. An unofficial fan site &mdash; not affiliated with or endorsed by Burna Boy.</p>
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
