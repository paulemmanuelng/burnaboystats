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
    const body = calls[0].body as { to: string; html: string };
    expect(body.to).toBe("reader@example.com");
    expect(body.html).toContain(`/api/subscribe/confirm?e=reader%40example.com&t=${signEmail("reader@example.com")}`);
    expect(calls.some((c) => c.url.includes("/audiences/"))).toBe(false);
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
