// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { signEmail, verifyEmail, looksLikeEmail } from "../app/lib/subscribeToken";

// The two halves of the double opt-in, driven the way a browser and an inbox
// drive them, with Resend's API mocked. The routes are imported fresh per
// block so the module-level rate limiter starts empty.

const post = (body: unknown, headers: Record<string, string> = {}) =>
  new Request("https://burnaboystats.com/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });

describe("subscribeToken", () => {
  beforeEach(() => { process.env.SUBSCRIBE_SECRET = "test-secret"; });
  it("signs case-insensitively and verifies in constant time", () => {
    const t = signEmail("Reader@Example.com");
    expect(t).toHaveLength(32);
    expect(verifyEmail("reader@example.com", t)).toBe(true);
    expect(verifyEmail("reader@example.com", t.replace(/./, "0"))).toBe(false);
    expect(verifyEmail("other@example.com", t)).toBe(false);
    expect(verifyEmail("reader@example.com", "short")).toBe(false);
  });
  it("accepts an address shape, not a sentence", () => {
    expect(looksLikeEmail("a@b.co")).toBe(true);
    expect(looksLikeEmail("no at sign")).toBe(false);
    expect(looksLikeEmail("a@b")).toBe(false);
  });
});

describe("POST /api/subscribe", () => {
  const calls: { url: string; body: unknown }[] = [];
  beforeEach(() => {
    vi.resetModules();
    calls.length = 0;
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_AUDIENCE_ID = "aud_test";
    process.env.SUBSCRIBE_SECRET = "test-secret";
    vi.stubGlobal("fetch", vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, body: JSON.parse(String(init?.body ?? "{}")) });
      return new Response(JSON.stringify({ id: "em_1" }), { status: 200 });
    }));
  });
  afterEach(() => vi.unstubAllGlobals());

  it("answers 503, and sends nothing, until Resend is configured", async () => {
    delete process.env.RESEND_API_KEY;
    const { POST } = await import("../app/api/subscribe/route");
    const res = await POST(post({ email: "a@b.co", elapsed: 5000 }));
    expect(res.status).toBe(503);
    expect(calls).toHaveLength(0);
  });
  it("sends a confirmation email carrying the signed link, and joins nobody", async () => {
    const { POST } = await import("../app/api/subscribe/route");
    const res = await POST(post({ email: "reader@example.com", elapsed: 5000 }));
    expect(res.status).toBe(200);
    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe("https://api.resend.com/emails");
    const body = calls[0].body as { to: string; subject: string; html: string; text: string };
    expect(body.to).toBe("reader@example.com");
    const link = `https://burnaboystats.com/api/subscribe/confirm?e=reader%40example.com&t=${signEmail("reader@example.com")}`;
    // The HTML carries the link twice — the button and the raw line for
    // clients that strip buttons — with its ampersand escaped as HTML wants;
    // the plain text carries it once, raw, so it can be copied.
    expect(body.html.split(`href="${link.replace("&", "&amp;")}"`)).toHaveLength(3);
    expect(body.html).not.toContain(`&t=`);
    expect(body.text).toContain(link);
    expect(calls.some((c) => c.url.includes("/audiences/"))).toBe(false);
  });
  it("the confirmation reads as the design's: one job, one tap", async () => {
    const { POST } = await import("../app/api/subscribe/route");
    await POST(post({ email: "reader@example.com", elapsed: 5000 }));
    const body = calls[0].body as { subject: string; html: string; text: string };
    expect(body.subject).toBe("Confirm your Saturday digest");
    // Preheader, kicker, headline, sentence, button, ignore line, footer — in that order.
    const order = [
      "One tap. Nothing is sent until you do.",
      "THE SATURDAY DIGEST &middot; ONE TAP TO CONFIRM",
      "Confirm, and you're in.",
      "sent Saturdays at 18:00 London time",
      "CONFIRM SUBSCRIPTION",
      "Didn't ask for this? Ignore it",
      "If the button doesn't work, open this link",
      "An unofficial fan site",
    ];
    const at = order.map((s) => body.html.indexOf(s));
    expect(at.every((i) => i >= 0)).toBe(true);
    expect([...at].sort((a, b) => a - b)).toEqual(at);
    expect(body.html).toContain('width="600"');
    expect(body.html).not.toMatch(/fonts\.googleapis|@import|<link|<img/);
    for (const s of ["Confirm, and you're in.", "Didn't ask for this?", "An unofficial fan site"]) expect(body.text).toContain(s);
  });
  it("swallows a bot quietly: a filled honeypot or a sub-1.5s submit gets 200 and no email", async () => {
    const { POST } = await import("../app/api/subscribe/route");
    expect((await POST(post({ email: "a@b.co", website: "http://spam", elapsed: 5000 }))).status).toBe(200);
    expect((await POST(post({ email: "a@b.co", elapsed: 300 }))).status).toBe(200);
    expect(calls).toHaveLength(0);
  });
  it("rejects a non-address with a sentence", async () => {
    const { POST } = await import("../app/api/subscribe/route");
    const res = await POST(post({ email: "not an email", elapsed: 5000 }));
    expect(res.status).toBe(400);
    expect((await res.json()).error).toMatch(/email address/);
  });
  it("rate-limits repeat tries for one address", async () => {
    const { POST } = await import("../app/api/subscribe/route");
    const statuses: number[] = [];
    for (let i = 0; i < 4; i++) statuses.push((await POST(post({ email: "again@example.com", elapsed: 5000 }, { "x-forwarded-for": `10.0.0.${i}` }))).status);
    expect(statuses).toEqual([200, 200, 200, 429]);
    expect(calls).toHaveLength(3);
  });
});

describe("GET /api/subscribe/confirm", () => {
  const calls: { url: string; body: unknown }[] = [];
  beforeEach(() => {
    vi.resetModules();
    calls.length = 0;
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_AUDIENCE_ID = "aud_test";
    process.env.SUBSCRIBE_SECRET = "test-secret";
    vi.stubGlobal("fetch", vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, body: JSON.parse(String(init?.body ?? "{}")) });
      return new Response(JSON.stringify({ id: "ct_1" }), { status: 201 });
    }));
  });
  afterEach(() => vi.unstubAllGlobals());

  const get = (qs: string) => new Request(`https://burnaboystats.com/api/subscribe/confirm?${qs}`);

  it("joins the audience on a valid link and lands the reader on /updates?subscribed=1", async () => {
    const { GET } = await import("../app/api/subscribe/confirm/route");
    const res = await GET(get(`e=${encodeURIComponent("reader@example.com")}&t=${signEmail("reader@example.com")}`));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe("https://burnaboystats.com/updates?subscribed=1");
    expect(calls[0].url).toBe("https://api.resend.com/audiences/aud_test/contacts");
    expect(calls[0].body).toEqual({ email: "reader@example.com", unsubscribed: false });
  });
  it("joins nobody on a forged or stale token", async () => {
    const { GET } = await import("../app/api/subscribe/confirm/route");
    const res = await GET(get(`e=${encodeURIComponent("reader@example.com")}&t=${"0".repeat(32)}`));
    expect(res.headers.get("location")).toBe("https://burnaboystats.com/updates?subscribed=invalid");
    expect(calls).toHaveLength(0);
  });
});
