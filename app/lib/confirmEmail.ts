// The confirmation email — one job: the tap that completes the double opt-in.
// A 600px table in the digest's own dialect (app/lib/digestEmail.ts): dark
// ground, gold, Arial, no web fonts, the crown as its one image. Colours are
// the email's own hexes, because an inbox does not read globals.css. Board:
// "Confirmation email — 600" in design_handoff_burnaboystats/designs/desktop/
// Saturday Digest.dc.html, values verbatim — with the digest's masthead in
// place of its lockup-and-kicker, as the second-round response (§4.9)
// recommends, so the two emails are visibly one sender.
import { BG, CARD_LINE, INK, FINE, GOLD, INK_ON_GOLD, BODY, FONT, MONO, FINE_SIZE, esc } from "./emailChrome";
import { mastheadHtml } from "./digestEmail";

export const CONFIRM_SUBJECT = "Confirm your Saturday digest";
export const CONFIRM_PREHEADER = "One tap. Nothing is sent until you do.";

export function renderConfirmHtml({ confirmUrl, origin }: { confirmUrl: string; origin: string }): string {
  const url = esc(confirmUrl);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>${esc(CONFIRM_SUBJECT)}</title>
<style>
  /* The masthead is the digest's, so it moves the way the digest's does at 375
     (the board's media-query table, masthead rows only). */
  @media only screen and (max-width: 480px) {
    .mast { padding-top: 16px !important; }
    .crown { width: 36px !important; height: 32px !important; }
    .wm { font-size: 20px !important; line-height: 24px !important; }
    .week { letter-spacing: 0 !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${BG};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:${BG};mso-hide:all;">${esc(CONFIRM_PREHEADER)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
    <tr>
      <td align="center" style="padding:28px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">${mastheadHtml(origin, "THE SATURDAY DIGEST &middot; ONE TAP TO CONFIRM", 0)}
          <tr>
            <td style="padding:22px 0 0;">
              <div style="font-family:${FONT};font-size:26px;line-height:1.2;font-weight:800;color:${INK};">Confirm, and you're in.</div>
              <p style="font-family:${FONT};font-size:15px;line-height:1.6;color:${BODY};margin:14px 0 0 0;max-width:520px;">You asked for the Saturday digest at this address: the week's chart peaks, certifications and records, sent Saturdays at 18:00 London time &mdash; only in weeks something happened, and never more than once a week.</p>
              <div style="padding:26px 0 0 0;"><a href="${url}" style="display:inline-block;background:${GOLD};color:${INK_ON_GOLD};font-family:${MONO};font-weight:700;font-size:13px;letter-spacing:1px;text-decoration:none;padding:15px 26px;border-radius:999px;">CONFIRM SUBSCRIPTION</a></div>
              <p style="font-family:${FONT};font-size:12px;line-height:1.6;color:${FINE};margin:26px 0 0 0;">Didn't ask for this? Ignore it &mdash; nothing is stored and nothing is sent without the tap.</p>
              <p style="font-family:${MONO};font-size:11px;line-height:1.6;color:${FINE};margin:14px 0 0 0;word-break:break-all;">If the button doesn't work, open this link: <a href="${url}" style="color:${FINE};text-decoration:underline;">${url}</a></p>
            </td>
          </tr>
          <tr><td style="padding:26px 0 16px 0;"><div style="height:1px;line-height:1px;font-size:1px;background:${CARD_LINE};">&nbsp;</div></td></tr>
          <tr>
            <td style="padding:0;">
              <p style="font-family:${FONT};font-size:${FINE_SIZE}px;line-height:1.6;color:${FINE};margin:0;"><a href="${esc(origin)}" style="color:${GOLD};text-decoration:none;">burnaboystats.com</a> &middot; An unofficial fan site &mdash; not affiliated with or endorsed by Burna Boy.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderConfirmText({ confirmUrl, origin }: { confirmUrl: string; origin: string }): string {
  return [
    "BURNABOYSTATS — the Saturday digest · one tap to confirm",
    "",
    "Confirm, and you're in.",
    "",
    "You asked for the Saturday digest at this address: the week's chart peaks, certifications and records, sent Saturdays at 18:00 London time — only in weeks something happened, and never more than once a week.",
    "",
    `Confirm subscription: ${confirmUrl}`,
    "",
    "Didn't ask for this? Ignore it — nothing is stored and nothing is sent without the tap.",
    "",
    `${origin} · An unofficial fan site — not affiliated with or endorsed by Burna Boy.`,
  ].join("\n");
}
