import { siteUrl } from "../../site";

// Recipient lives on the SERVER only — never shipped to the browser.
// Override in Vercel with a CONTACT_EMAIL env var to keep it out of the repo too.
const TO = process.env.CONTACT_EMAIL || "ukpakaemmanuel@gmail.com";

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message } = data || {};
  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (BurnaBoyStats contact form)",
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "New message from Burna Boy Stats",
      }),
    });
    const out = await res.json().catch(() => ({}));
    if (out && out.success === "true") {
      return Response.json({ ok: true });
    }
    return Response.json(
      { error: out.message || "Send failed", upstreamStatus: res.status },
      { status: 502 }
    );
  } catch (e) {
    return Response.json({ error: `Network error: ${e.message}` }, { status: 502 });
  }
}
