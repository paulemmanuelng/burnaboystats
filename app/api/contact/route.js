import { siteUrl } from "../../site";

// Recipient lives on the SERVER only — never shipped to the browser.
// Override it in Vercel with a CONTACT_EMAIL env var to keep it out of the repo too.
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
    if (!res.ok) throw new Error("Upstream error");
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }
}
