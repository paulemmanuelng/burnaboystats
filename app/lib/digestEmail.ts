// The digest as an email: a 600px table, inline styles, dark ground and gold —
// the site's look in the dialect every inbox renders. No web fonts (Gmail
// strips them), no external CSS, every link absolute, and Resend's
// unsubscribe placeholder in the footer, which Broadcasts replace per
// recipient. The plain-text twin is what a screen reader or a text-only
// client gets, and what the spam filters read alongside the HTML.
import type { Update } from "../data/updates";
import { digestWindow } from "./digest";

export const UNSUBSCRIBE_PLACEHOLDER = "{{{RESEND_UNSUBSCRIBE_URL}}}";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });

const BG = "#0d0b09";
const CARD = "#16130f";
const INK = "#f5f4f0";
const MUTED = "#bdb5a8";
const GOLD = "#ffb627";
const LINE = "#2a251f";
const FONT = "Arial, Helvetica, sans-serif";
const MONO = "Menlo, Consolas, 'Courier New', monospace";

export interface DigestRender {
  origin: string;
  now: Date;
  /** The unsubscribe link to print; defaults to Resend's placeholder. A test send passes a real URL. */
  unsubscribe?: string;
}

export function renderDigestHtml(items: Update[], { origin, now, unsubscribe = UNSUBSCRIBE_PLACEHOLDER }: DigestRender): string {
  const { from, to } = digestWindow(now);
  const rows = items
    .map((u, i) => {
      const url = `${origin}${u.href}`;
      const kicker = `${esc(u.category).toUpperCase()} · ${esc(longDate(u.date)).toUpperCase()}`;
      const lead = i === 0 || u.big;
      return `
        <tr>
          <td style="padding:0 0 14px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${CARD};border:1px solid ${lead ? "#5a4210" : LINE};border-radius:6px;">
              <tr>
                <td style="padding:18px 20px;">
                  <div style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${GOLD};padding-bottom:8px;">${kicker}</div>
                  <div style="font-family:${FONT};font-size:${lead ? 17 : 15}px;line-height:1.55;color:${INK};">${esc(u.text)}</div>
                  <div style="padding-top:12px;"><a href="${esc(url)}" style="font-family:${MONO};font-size:12px;letter-spacing:1px;color:${GOLD};text-decoration:none;">SEE THE FIGURE &#8599;</a></div>
                </td>
              </tr>
            </table>
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
</head>
<body style="margin:0;padding:0;background:${BG};">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:${BG};">${esc(items[0]?.text.slice(0, 120) ?? "")}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="padding:0 0 22px 0;">
              <a href="${esc(origin)}/updates" style="text-decoration:none;">
                <span style="font-family:${FONT};font-size:22px;font-weight:800;letter-spacing:1px;color:${INK};">BURNABOY</span><span style="font-family:${FONT};font-size:22px;font-weight:800;letter-spacing:1px;color:${GOLD};">STATS</span>
              </a>
              <div style="font-family:${MONO};font-size:11px;letter-spacing:1.5px;color:${MUTED};padding-top:8px;">THE WEEK TO ${esc(longDate(to)).toUpperCase()} · ${items.length} ${items.length === 1 ? "ENTRY" : "ENTRIES"}</div>
            </td>
          </tr>
          ${rows}
          <tr>
            <td style="padding:8px 0 0 0;border-top:1px solid ${LINE};">
              <p style="font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};margin:16px 0 0 0;">
                Every figure above links to the page it lives on, read at the body that publishes it. Sent on Saturdays, only in weeks something happened — the week here ran ${esc(longDate(from))} to ${esc(longDate(to))}.
              </p>
              <p style="font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};margin:12px 0 0 0;">
                <a href="${esc(origin)}/updates" style="color:${GOLD};text-decoration:none;">All updates</a> &nbsp;·&nbsp;
                <a href="${esc(origin)}/methodology" style="color:${GOLD};text-decoration:none;">How the numbers are checked</a> &nbsp;·&nbsp;
                <a href="${unsubscribe}" style="color:${MUTED};text-decoration:underline;">Unsubscribe</a>
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
  const lines = [
    `BURNABOYSTATS — the week to ${longDate(to)} (${items.length} ${items.length === 1 ? "entry" : "entries"})`,
    "",
    ...items.flatMap((u) => [`${u.category.toUpperCase()} · ${longDate(u.date)}`, u.text, `${origin}${u.href}`, ""]),
    `Every figure links to the page it lives on. Sent on Saturdays, only in weeks something happened — this one ran ${longDate(from)} to ${longDate(to)}.`,
    `All updates: ${origin}/updates`,
    `Unsubscribe: ${unsubscribe}`,
  ];
  return lines.join("\n");
}
