import { NextResponse } from "next/server";
import { signEmail, looksLikeEmail } from "../../lib/subscribeToken";
import { CONFIRM_SUBJECT, renderConfirmHtml, renderConfirmText } from "../../lib/confirmEmail";

/**
 * Step one of the double opt-in: validate the address and send a confirmation
 * email. Nothing joins the audience until the link in that email is clicked —
 * the flow the spam laws (and inbox providers) expect.
 *
 * Three bot deterrents, none of them visible to a person:
 *   • the honeypot field "website": humans never see it, form-fillers fill it,
 *     and a filled honeypot gets a cheerful 200 so the bot moves on;
 *   • `elapsed`, the milliseconds between the box mounting and the submit —
 *     under 1.5 s is a script; it gets the same cheerful 200;
 *   • a per-instance rate limit by address and by IP. Serverless instances do
 *     not share memory, so this is a brake on a loop, not a wall — the cost it
 *     bounds is Resend sending a confirmation to an address that never asked.
 */
const WINDOW_MS = 60 * 60 * 1000;
const PER_IP = 10;
const PER_EMAIL = 3;
const seen = new Map<string, number[]>();
const over = (key: string, limit: number, now = Date.now()) => {
  const hits = (seen.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  seen.set(key, hits);
  return hits.length > limit;
};

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key || !process.env.RESEND_AUDIENCE_ID) {
    return NextResponse.json(
      { error: "Subscriptions aren't switched on yet — check back soon." },
      { status: 503 }
    );
  }

  let body: { email?: string; website?: string; elapsed?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  if (typeof body.elapsed === "number" && body.elapsed < 1500) return NextResponse.json({ ok: true }); // too fast for a thumb
  const email = (body.email ?? "").trim();
  if (!looksLikeEmail(email)) {
    return NextResponse.json({ error: "That doesn't look like an email address." }, { status: 400 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (over(`ip:${ip}`, PER_IP) || over(`email:${email.toLowerCase()}`, PER_EMAIL)) {
    return NextResponse.json({ error: "Too many tries — give it an hour and try again." }, { status: 429 });
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
      subject: CONFIRM_SUBJECT,
      html: renderConfirmHtml({ confirmUrl, origin }),
      text: renderConfirmText({ confirmUrl, origin }),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Couldn't send the confirmation — try again in a minute." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
