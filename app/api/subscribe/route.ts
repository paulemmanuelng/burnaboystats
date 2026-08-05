import { NextResponse } from "next/server";
import { signEmail, looksLikeEmail } from "../../lib/subscribeToken";

/**
 * Step one of the double opt-in: validate the address and send a confirmation
 * email. Nothing joins the audience until the link in that email is clicked —
 * the flow the spam laws (and inbox providers) expect.
 *
 * The honeypot field is called "website": humans never see it, bots fill it,
 * and a filled honeypot gets a cheerful 200 so the bot moves on.
 */
export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key || !process.env.RESEND_AUDIENCE_ID) {
    return NextResponse.json(
      { error: "Subscriptions aren't switched on yet — check back soon." },
      { status: 503 }
    );
  }

  let body: { email?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  const email = (body.email ?? "").trim();
  if (!looksLikeEmail(email)) {
    return NextResponse.json({ error: "That doesn't look like an email address." }, { status: 400 });
  }

  const origin = new URL(req.url).origin;
  const confirmUrl = `${origin}/api/subscribe/confirm?e=${encodeURIComponent(email)}&t=${signEmail(email)}`;
  const from = process.env.RESEND_FROM || "Burna Boy Stats <updates@burnaboystats.com>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: email,
      subject: "Confirm your Burna Boy Stats subscription",
      html: `<div style="font-family:Arial,Helvetica,sans-serif;background:#0d0b09;color:#f5f4f0;padding:36px 24px;max-width:560px;margin:0 auto">
        <div style="font-size:20px;font-weight:800;letter-spacing:1px">BURNABOY<span style="color:#ffb627">STATS</span></div>
        <p style="color:#cfc7bb;line-height:1.6;margin:18px 0 26px">One tap and you're in — the biggest Burna Boy chart, certification and record news lands in this inbox every Saturday evening.</p>
        <a href="${confirmUrl}" style="display:inline-block;background:#ffb627;color:#0d0b09;font-weight:800;text-decoration:none;padding:13px 26px;border-radius:4px">Confirm subscription</a>
        <p style="color:#8a8279;font-size:12px;line-height:1.6;margin-top:28px">If you didn't request this, ignore it — nothing happens without the tap.</p>
      </div>`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Couldn't send the confirmation — try again in a minute." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
