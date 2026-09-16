// The digest as an email: a 600px table, inline styles, dark ground and gold —
// the site's look in the dialect every inbox renders. No web fonts (Gmail
// strips them), no external CSS, every link absolute, and Resend's
// unsubscribe placeholder in the footer, which Broadcasts replace per
// recipient. The plain-text twin is what a screen reader or a text-only
// client gets, and what the spam filters read alongside the HTML.
//
// Shape (design response §Emails): the headliners run IN FULL as cards,
// numbered 01 02; then a rule, ALSO THIS WEEK · N ENTRIES, and the rest as a
// ruled list of first sentences with SEE THE FIGURE ↗ inline — the whole
// entry is one tap away on the page the link opens. ~420 words, not ~1,100.
// The headliners earn their place by size and position, not a gold border.
// Board: "Digest email — 600" and "— 375" in design_handoff_burnaboystats/
// designs/desktop/Saturday Digest.dc.html, values verbatim.
import type { Update } from "../data/updates";
import { digestWindow, splitDigest, firstSentence, weekRange } from "./digest";
import { BG, CARD, CARD_LINE, INK, MUTED, FINE, GOLD, FONT, MONO, esc } from "./emailChrome";

export const UNSUBSCRIBE_PLACEHOLDER = "{{{RESEND_UNSUBSCRIBE_URL}}}";

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });

const kickerOf = (u: Update) => `${esc(u.category).toUpperCase()} · ${esc(longDate(u.date)).toUpperCase()}`;
const count = (n: number) => `${n} ${n === 1 ? "ENTRY" : "ENTRIES"}`;

export interface DigestRender {
  origin: string;
  now: Date;
  /** The unsubscribe link to print; defaults to Resend's placeholder. A test send passes a real URL. */
  unsubscribe?: string;
}

export function renderDigestHtml(items: Update[], { origin, now, unsubscribe = UNSUBSCRIBE_PLACEHOLDER }: DigestRender): string {
  const { from, to } = digestWindow(now);
  const { headliners, rest } = splitDigest(items);

  const cards = headliners
    .map((u, i) => {
      const url = esc(`${origin}${u.href}`);
      return `
          <tr>
            <td style="padding:0 0 14px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${CARD};border:1px solid ${CARD_LINE};border-radius:6px;">
                <tr>
                  <td class="card" style="padding:20px 22px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${GOLD};">${kickerOf(u)}</td>
                        <td align="right" style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${MUTED};white-space:nowrap;">0${i + 1}</td>
                      </tr>
                    </table>
                    <div class="big" style="font-family:${FONT};font-size:17px;line-height:1.55;color:${INK};padding-top:10px;">${esc(u.text)}</div>
                    <div style="padding-top:12px;"><a href="${url}" style="font-family:${MONO};font-size:12px;letter-spacing:1px;color:${GOLD};text-decoration:none;">SEE THE FIGURE &#8599;&#xFE0E;</a></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
    })
    .join("");

  const list = rest.length
    ? `
          <tr>
            <td style="padding:8px 0 4px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${MUTED};white-space:nowrap;padding-right:12px;">ALSO THIS WEEK &middot; ${count(rest.length)}</td>
                  <td width="100%"><div style="height:1px;line-height:1px;font-size:1px;background:${CARD_LINE};">&nbsp;</div></td>
                </tr>
              </table>
            </td>
          </tr>` +
      rest
        .map((u) => {
          const url = esc(`${origin}${u.href}`);
          return `
          <tr>
            <td style="padding:16px 0;border-bottom:1px solid ${CARD_LINE};">
              <div style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${GOLD};">${kickerOf(u)}</div>
              <div style="font-family:${FONT};font-size:15px;line-height:1.55;color:${INK};padding-top:8px;">${esc(firstSentence(u.text))} <a href="${url}" style="font-family:${MONO};font-size:12px;letter-spacing:1px;color:${GOLD};text-decoration:none;white-space:nowrap;">SEE THE FIGURE &#8599;&#xFE0E;</a></div>
            </td>
          </tr>`;
        })
        .join("")
    : "";

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
     surrounding style back. Apple honours it; every other client ignores it. */
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
  /* The narrow case is the one this column was designed for; at 375 only the
     paddings and the headliner size tighten. Clients that drop <style> keep
     the 600 values, which still read on a phone. */
  @media only screen and (max-width: 480px) {
    .pad { padding: 20px 12px !important; }
    .card { padding: 16px !important; }
    .big { font-size: 16px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${BG};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:${BG};">${esc(items[0]?.text.slice(0, 120) ?? "")}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
    <tr>
      <td align="center" class="pad" style="padding:28px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:baseline;">
                    <a href="${esc(origin)}/updates" style="text-decoration:none;">
                      <span style="font-family:${FONT};font-size:22px;font-weight:800;letter-spacing:1px;color:${INK};">BURNABOY</span><span style="font-family:${FONT};font-size:22px;font-weight:800;letter-spacing:1px;color:${GOLD};">STATS</span>
                    </a>
                  </td>
                  <td align="right" style="vertical-align:baseline;font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${MUTED};">THE WEEK TO ${esc(longDate(to)).toUpperCase()} &middot; ${count(items.length)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td style="padding:18px 0 20px 0;"><div style="height:1px;line-height:1px;font-size:1px;background:${CARD_LINE};">&nbsp;</div></td></tr>
          ${cards}
          ${list}
          <tr>
            <td style="padding:22px 0 0 0;">
              <p style="font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};margin:0;">
                Every figure above links to the page it lives on, read at the body that publishes it. Sent on Saturdays at 18:00 London time, only in weeks something happened &mdash; this one ran ${esc(weekRange(from, to))}. A quiet week sends nothing.
              </p>
              <p style="font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};margin:12px 0 0 0;">
                <a href="${esc(origin)}/updates" style="color:${GOLD};text-decoration:none;">All updates</a> &nbsp;&middot;&nbsp;
                <a href="${esc(origin)}/methodology" style="color:${GOLD};text-decoration:none;">How the numbers are checked</a> &nbsp;&middot;&nbsp;
                <a href="${unsubscribe}" style="color:${MUTED};text-decoration:underline;">Unsubscribe</a>
              </p>
              <p style="font-family:${FONT};font-size:11px;line-height:1.6;color:${FINE};margin:14px 0 0 0;">
                You're getting this because you confirmed at burnaboystats.com/updates. An unofficial fan site &mdash; not affiliated with or endorsed by Burna Boy.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderDigestText(items: Update[], { origin, now, unsubscribe = UNSUBSCRIBE_PLACEHOLDER }: DigestRender): string {
  const { from, to } = digestWindow(now);
  const { headliners, rest } = splitDigest(items);
  const lines = [
    `BURNABOYSTATS — the week to ${longDate(to)} (${items.length} ${items.length === 1 ? "entry" : "entries"})`,
    "",
    ...headliners.flatMap((u, i) => [`0${i + 1} · ${u.category.toUpperCase()} · ${longDate(u.date)}`, u.text, `${origin}${u.href}`, ""]),
    ...(rest.length
      ? [
          `ALSO THIS WEEK · ${rest.length} ${rest.length === 1 ? "entry" : "entries"}`,
          "",
          ...rest.flatMap((u) => [`${u.category.toUpperCase()} · ${longDate(u.date)}`, firstSentence(u.text), `${origin}${u.href}`, ""]),
        ]
      : []),
    `Every figure links to the page it lives on, read at the body that publishes it. Sent on Saturdays at 18:00 London time, only in weeks something happened — this one ran ${weekRange(from, to)}. A quiet week sends nothing.`,
    `All updates: ${origin}/updates`,
    `How the numbers are checked: ${origin}/methodology`,
    `Unsubscribe: ${unsubscribe}`,
    "",
    "You're getting this because you confirmed at burnaboystats.com/updates. An unofficial fan site — not affiliated with or endorsed by Burna Boy.",
  ];
  return lines.join("\n");
}
