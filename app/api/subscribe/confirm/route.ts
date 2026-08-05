import { NextResponse } from "next/server";
import { verifyEmail, looksLikeEmail } from "../../../lib/subscribeToken";

/** Step two: the emailed link lands here; a valid token joins the audience. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get("e") ?? "";
  const token = url.searchParams.get("t") ?? "";
  const key = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;

  if (!key || !audience || !looksLikeEmail(email) || !verifyEmail(email, token)) {
    return NextResponse.redirect(new URL("/updates?subscribed=invalid", url.origin));
  }

  const res = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  return NextResponse.redirect(
    new URL(res.ok ? "/updates?subscribed=1" : "/updates?subscribed=error", url.origin)
  );
}
