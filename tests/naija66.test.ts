// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

// These suites exercise the reveal mechanics on prize 1's and prize 2's pages.
// Paul awarded those two on X (1 Oct 2026), so the live config marks them
// `awarded`; here that flag is cleared so the mechanics stay tested. The
// awarded overlay itself is tested on the real config in
// tests/naija66Awarded.test.ts.
vi.mock("../app/data/naija66", async (importOriginal) => {
  const real = await importOriginal<typeof import("../app/data/naija66")>();
  return { ...real, NAIJA66_PRIZES: real.NAIJA66_PRIZES.map(({ awarded: _awarded, ...p }) => p) };
});
import { NAIJA66_PRIZES } from "../app/data/naija66";

/**
 * Naija @ 66 — the reveal hunt's server, driven the way a browser drives it:
 * the three route handlers under app/api/naija66/ (spot, reveal, status), with
 * the in-memory store and a clock set through NAIJA66_NOW.
 *
 * The prize pages are read from the committed config rather than typed here,
 * so this file names no page; "/test/decoy" stands for every other page.
 */

const SECRET = "made-up-secret-for-tests-only";
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const page = (prize: number) => NAIJA66_PRIZES[prize - 1].path;
const P1 = page(1);
const P2 = page(2);
const DECOY = "/test/decoy";

// ── The clock ────────────────────────────────────────────────────────────────
const BEFORE = "2026-10-01T07:59:59Z"; // 08:59:59 WAT, a second before the first drop
const AT_0905 = "2026-10-01T08:05:00Z"; // 09:05 WAT: prize 1 live, prize 2 not yet
const AT_1205 = "2026-10-01T11:05:00Z"; // 12:05 WAT: prizes 1 and 2 dropped
const CLOSED = "2026-10-02T23:00:00Z"; // the close itself

const ENV_KEYS = [
  "NAIJA66_SECRET",
  "NAIJA66_NOW",
  "NAIJA66_ALLOW_NOW",
  "KV_REST_API_URL",
  "KV_REST_API_TOKEN",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "VERCEL",
  "VERCEL_ENV",
];

async function fresh(now: string) {
  vi.resetModules();
  for (const k of ENV_KEYS) vi.stubEnv(k, undefined as unknown as string);
  vi.stubEnv("NAIJA66_SECRET", SECRET);
  vi.stubEnv("NAIJA66_NOW", now);
  const store = await import("../app/lib/naija66/store");
  store.resetMemoryStore();
  delete (globalThis as { __naija66Records?: unknown }).__naija66Records;
  delete (globalThis as { __naija66Valve?: unknown }).__naija66Valve;
  return {
    spotRoute: await import("../app/api/naija66/spot/route"),
    revealRoute: await import("../app/api/naija66/reveal/route"),
    statusRoute: await import("../app/api/naija66/status/route"),
  };
}

type Routes = Awaited<ReturnType<typeof fresh>>;
let r: Routes;

const at = (now: string) => vi.stubEnv("NAIJA66_NOW", now);

const spot = (
  p: string,
  { ip = "198.51.100.1", cookie, token }: { ip?: string; cookie?: string; token?: string } = {},
) =>
  r.spotRoute.GET(
    new Request(`https://burnaboystats.com/api/naija66/spot?p=${encodeURIComponent(p)}`, {
      headers: {
        "x-forwarded-for": `${ip}, 10.0.0.1`,
        ...(cookie ? { cookie } : {}),
        ...(token ? { "x-naija66-token": token } : {}),
      },
    }),
  );

const reveal = (
  p: unknown,
  { ip = "203.0.113.7", cookie, token }: { ip?: string; cookie?: string; token?: unknown } = {},
) =>
  r.revealRoute.POST(
    new Request("https://burnaboystats.com/api/naija66/reveal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": ip,
        ...(cookie ? { cookie } : {}),
      },
      body: JSON.stringify(token === undefined ? { p } : { p, token }),
    }),
  );

/** Two browsers' claim tokens, shaped the way lib/naija66/token.ts makes them. */
const TOKEN_A = "fedcba9876543210fedcba9876543210";
const TOKEN_B = "00112233445566778899aabbccddeeff";

const status = (cookie?: string) =>
  r.statusRoute.GET(
    new Request("https://burnaboystats.com/api/naija66/status", { headers: cookie ? { cookie } : {} }),
  );

const headerList = (res: Response) => [...res.headers.entries()].sort();
const answer = async (res: Response) => [res.status, await res.text(), headerList(res)];
/** The cookie a browser would send back, from a Set-Cookie header. */
const cookieFrom = (res: Response) => res.headers.get("set-cookie")!.split(";")[0];

beforeEach(async () => {
  r = await fresh(AT_0905);
});
afterEach(() => {
  vi.unstubAllEnvs();
});

describe("winner codes", () => {
  it("are NG66-<prize>-<six alphabet characters>, random each time", async () => {
    const { winnerCode, prizeOfCode } = await import("../app/lib/naija66/crypto");
    const codes = Array.from({ length: 50 }, () => winnerCode(3));
    for (const c of codes) {
      expect(c).toMatch(new RegExp(`^NG66-3-[${ALPHABET}]{6}$`));
      expect(prizeOfCode(c)).toBe(3);
    }
    expect(new Set(codes).size).toBeGreaterThan(45);
    expect(prizeOfCode("NG66-ABCDEF")).toBeNull();
  });
});

// ── Spot ─────────────────────────────────────────────────────────────────────

describe("GET /api/naija66/spot", () => {
  it("answers a decoy and a prize page before its drop identically: same status, body and headers", async () => {
    const decoy = await answer(await spot(DECOY));
    const early = await answer(await spot(P2)); // drops at 12pm WAT
    expect(early).toEqual(decoy);
    expect(decoy[0]).toBe(200);
    expect(decoy[1]).toBe("{}");
    expect(new Map(decoy[2] as [string, string][]).get("cache-control")).toBe("no-store");
  });

  it("says here on a dropped, unclaimed prize page, and claimed once revealed", async () => {
    expect(await (await spot(P1)).json()).toEqual({ here: true, prize: 1 });
    const won = await (await reveal(P1)).json();
    expect(won.won).toBe(true);
    const after = await spot(P1, { ip: "198.51.100.9" });
    const j = await after.json();
    expect(j).toEqual({ claimed: true, prize: 1, at: won.at });
    expect(JSON.stringify(j)).not.toContain(won.code);
  });

  it("shows the code again only to the browser holding its cookie", async () => {
    const res = await reveal(P1);
    const won = await res.json();
    expect(await (await spot(P1, { cookie: cookieFrom(res) })).json()).toEqual(won);
    const forged = won.code.slice(0, -1) + (won.code.endsWith("A") ? "B" : "A");
    expect((await (await spot(P1, { cookie: `naija66=${forged}` })).json()).claimed).toBe(true);
  });

  it("GET never claims: a hundred spot checks leave the prize unclaimed", async () => {
    for (let i = 0; i < 100; i++) await spot(P1, { ip: `198.18.1.${i % 50}` });
    expect((await (await status()).json()).prizes[0].state).toBe("live");
    expect(await (await spot(P1, { ip: "198.18.2.1" })).json()).toEqual({ here: true, prize: 1 });
  });

  it("is {} for every page before the hunt opens and once it closes", async () => {
    at(CLOSED);
    for (let i = 1; i <= 5; i++) expect(await (await spot(page(i))).text()).toBe("{}");
    at(BEFORE);
    expect(await (await spot(P1)).text()).toBe("{}");
  });

  it("one address (a shared mobile IP) browsing 200 other pages still sees the prize page", async () => {
    const ip = "192.0.2.50";
    for (let i = 0; i < 200; i++) expect(await (await spot(`/test/decoy-${i}`, { ip })).text()).toBe("{}");
    expect(await (await spot(P1, { ip })).json()).toEqual({ here: true, prize: 1 });
  });

  it("a winner whose reveal reply was lost gets the code back from spot by its token, cookie and all", async () => {
    const won = await (await reveal(P1, { token: TOKEN_A })).json(); // the reply never reaches the browser
    expect(won.won).toBe(true);
    const back = await spot(P1, { ip: "198.51.100.20", token: TOKEN_A }); // a reload: no cookie, token kept
    expect(await back.json()).toEqual(won);
    expect(cookieFrom(back)).toBe(`naija66=${won.code}`);
    expect(back.headers.get("set-cookie")).toMatch(/HttpOnly/);
  });

  it("negative control: another browser's token, a malformed one, or none is told it was claimed", async () => {
    const won = await (await reveal(P1, { token: TOKEN_A })).json();
    const claimed = { claimed: true, prize: 1, at: won.at };
    for (const token of [TOKEN_B, "not-a-token", undefined]) {
      const res = await spot(P1, { ip: "198.51.100.21", token });
      expect(await res.json(), String(token)).toEqual(claimed);
      expect(res.headers.get("set-cookie"), String(token)).toBeNull();
    }
  });

  it("a token wins nothing on another prize's page: that page still says here", async () => {
    at(AT_1205);
    await reveal(P1, { token: TOKEN_A });
    expect(await (await spot(P2, { token: TOKEN_A })).json()).toEqual({ here: true, prize: 2 });
  });

  it("negative control: a player going back and forth between two pages 60 times is never limited", async () => {
    for (let i = 0; i < 60; i++) {
      const j = await (await spot(i % 2 ? DECOY : P1, { ip: "192.0.2.70" })).json();
      expect(j).toEqual(i % 2 ? {} : { here: true, prize: 1 });
    }
  });

  it("never throws to the client: a store failure answers {}", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("down", { status: 500 })));
    try {
      vi.stubEnv("KV_REST_API_URL", "https://example-redis.test");
      vi.stubEnv("KV_REST_API_TOKEN", "tok");
      const res = await spot(P1);
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("{}");
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

// ── Reveal ───────────────────────────────────────────────────────────────────

describe("POST /api/naija66/reveal", () => {
  it("is atomic: of ten simultaneous reveals on one page, exactly one wins", async () => {
    const results = await Promise.all(
      Array.from({ length: 10 }, (_, i) => reveal(P1, { ip: `198.18.0.${i + 1}` }).then((x) => x.json())),
    );
    expect(results.filter((j) => j.won === true)).toHaveLength(1);
    expect(results.filter((j) => j.claimed === true)).toHaveLength(9);
    const winner = results.find((j) => j.won)!;
    expect(winner.prize).toBe(1);
    expect(winner.code).toMatch(new RegExp(`^NG66-1-[${ALPHABET}]{6}$`));
    for (const lost of results.filter((j) => j.claimed)) {
      expect(lost).toEqual({ claimed: true, prize: 1, at: winner.at });
      expect(JSON.stringify(lost)).not.toContain(winner.code);
    }
  });

  it("two browsers, same moment: exactly one wins", async () => {
    const [a, b] = await Promise.all([
      reveal(P1, { ip: "a", token: TOKEN_A }),
      reveal(P1, { ip: "b", token: TOKEN_B }),
    ]);
    const js = [await a.json(), await b.json()];
    expect(js.filter((j) => j.won).length).toBe(1);
    expect(js.filter((j) => j.claimed).length).toBe(1);
  });

  it("gives a decoy, a not-yet-dropped prize page and a closed hunt nothing", async () => {
    const decoy = await reveal(DECOY, { ip: "1" });
    const early = await reveal(P2, { ip: "2" });
    at(CLOSED);
    const closed = await reveal(P1, { ip: "3" }); // prize 1 was live, never claimed
    const answers = await Promise.all([decoy, early, closed].map(answer));
    expect(answers[1]).toEqual(answers[0]);
    expect(answers[2]).toEqual(answers[0]);
    expect(answers[0][1]).toBe("{}");
    expect(decoy.headers.get("set-cookie")).toBeNull();
    expect((await (await status()).json()).prizes[0].state).toBe("closed");
  });

  it("trips after 8 taps per IP in 10 minutes, with a friendly 429", async () => {
    for (let i = 0; i < 8; i++) expect((await reveal(DECOY, { ip: "9.9.9.9" })).status).toBe(200);
    const ninth = await reveal(P1, { ip: "9.9.9.9" });
    expect(ninth.status).toBe(429);
    expect((await ninth.json()).error).toMatch(/ten minutes/);
    expect((await (await reveal(P1, { ip: "9.9.9.10" })).json()).won).toBe(true);
  });

  it("one prize per person: a winner's cookie cannot take a second", async () => {
    at(AT_1205);
    const first = await reveal(P1, { ip: "5.5.5.5" });
    const again = await reveal(P2, { ip: "5.5.5.5", cookie: cookieFrom(first) });
    expect(await again.json()).toEqual({ alreadyWon: true });
    // Prize 2 is still there for somebody else.
    expect(await (await spot(P2, { ip: "6.6.6.5" })).json()).toEqual({ here: true, prize: 2 });
    expect((await (await reveal(P2, { ip: "6.6.6.6" })).json()).won).toBe(true);
  });

  it("the token also proves one prize per person when the cookie is gone", async () => {
    at(AT_1205);
    expect((await (await reveal(P1, { token: TOKEN_A })).json()).won).toBe(true);
    expect(await (await reveal(P2, { ip: "7.7.7.10", token: TOKEN_A })).json()).toEqual({ alreadyWon: true });
    expect((await (await reveal(P2, { token: TOKEN_B })).json()).won).toBe(true);
  });

  it("a winner whose reply never arrived gets the same win again from the same browser's retry", async () => {
    const first = await reveal(P1, { ip: "7.7.7.7", token: TOKEN_A });
    const won = await first.json();
    expect(won.won).toBe(true);
    const retry = await reveal(P1, { ip: "7.7.7.8", token: TOKEN_A });
    expect(await retry.json()).toEqual(won);
    expect(retry.headers.get("set-cookie")).toBe(first.headers.get("set-cookie"));
    const other = await (await reveal(P1, { ip: "8.8.8.8", token: TOKEN_B })).json();
    expect(other).toEqual({ claimed: true, prize: 1, at: won.at });
    expect(await (await status()).text()).not.toMatch(/"th"/);
  });

  it("negative control: without its token, the same retry is told it was claimed", async () => {
    const won = await (await reveal(P1, { token: TOKEN_A })).json();
    expect(won.won).toBe(true);
    expect(await (await reveal(P1, { ip: "7.7.7.9" })).json()).toEqual({ claimed: true, prize: 1, at: won.at });
  });

  it("sets an httpOnly, path-scoped cookie with the code", async () => {
    const res = await reveal(P1);
    const { code } = await res.json();
    const setCookie = res.headers.get("set-cookie")!;
    expect(setCookie).toMatch(/HttpOnly/);
    expect(setCookie).toMatch(/Path=\/api\/naija66/);
    expect(setCookie).toMatch(/SameSite=Lax/);
    expect(setCookie).toMatch(/Secure/);
    expect(cookieFrom(res)).toBe(`naija66=${code}`);
  });

  it("ignores a body that is not one", async () => {
    for (const p of [null, 42, "", "music", { a: 1 }]) expect(await (await reveal(p)).text()).toBe("{}");
    expect((await (await status()).json()).prizes[0].state).toBe("live");
  });
});

// ── Status ───────────────────────────────────────────────────────────────────

describe("GET /api/naija66/status", () => {
  it("walks each prize from sleeping to live to claimed, and to closed", async () => {
    at(BEFORE);
    let s = await (await status()).json();
    expect(s.ready).toBe(true);
    expect(s.prizes.map((p: { state: string }) => p.state)).toEqual(["sleeping", "sleeping", "sleeping", "sleeping", "sleeping"]);
    at(AT_1205);
    s = await (await status()).json();
    expect(s.prizes.map((p: { state: string }) => p.state)).toEqual(["live", "live", "sleeping", "sleeping", "sleeping"]);
    const won = await (await reveal(P2)).json();
    s = await (await status()).json();
    expect(s.prizes[1]).toEqual({ prize: 2, dropsAt: "2026-10-01T11:00:00Z", state: "claimed", claimedAt: won.at, tail: won.code.slice(-2) });
    at(CLOSED);
    s = await (await status()).json();
    expect(s.prizes.map((p: { state: string }) => p.state)).toEqual(["closed", "claimed", "closed", "closed", "closed"]);
    expect((await status()).headers.get("cache-control")).toBe("no-store");
  });

  it("returns the full winner code only to the browser holding its cookie", async () => {
    const res = await reveal(P1);
    const { code } = await res.json();
    const holder = await (await status(cookieFrom(res))).json();
    expect(holder.mine).toEqual({ prize: 1, code, at: holder.prizes[0].claimedAt });
    const stranger = await (await status()).text();
    expect(stranger).not.toContain(code);
    expect(JSON.parse(stranger).mine).toBeUndefined();
  });
});

// ── Failing closed ───────────────────────────────────────────────────────────

describe("fails closed in production without its environment", () => {
  const prod = () => {
    vi.stubEnv("NODE_ENV", "production");
  };

  it("with no Redis: reveals 503, spot {}, the board asleep and not ready", async () => {
    prod();
    const c = await reveal(P1);
    expect(c.status).toBe(503);
    expect(await c.json()).toEqual({ error: "The hunt isn't open yet." });
    expect(await (await spot(P1)).text()).toBe("{}");
    const s = await (await status()).json();
    expect(s.ready).toBe(false);
  });

  it("with no secret, anywhere", async () => {
    vi.stubEnv("NAIJA66_SECRET", "");
    expect((await reveal(P1)).status).toBe(503);
    expect(await (await spot(P1)).text()).toBe("{}");
    expect((await (await status()).json()).ready).toBe(false);
  });

  it("the local test hooks never switch on on Vercel, whatever else is set", async () => {
    prod();
    vi.stubEnv("NAIJA66_ALLOW_NOW", "1");
    vi.stubEnv("VERCEL", "1");
    expect((await reveal(P1)).status).toBe(503);
    const { testHooksAllowed, huntNow } = await import("../app/lib/naija66/env");
    expect(testHooksAllowed()).toBe(false);
    vi.stubEnv("VERCEL_ENV", "production");
    vi.stubEnv("NODE_ENV", "test");
    expect(testHooksAllowed()).toBe(false);
    expect(Math.abs(huntNow() - Date.now())).toBeLessThan(5000);
  });

  it("negative control: off Vercel, NAIJA66_ALLOW_NOW=1 is what lets a local `next start` run", async () => {
    prod();
    vi.stubEnv("NAIJA66_ALLOW_NOW", "1");
    const { testHooksAllowed, huntNow } = await import("../app/lib/naija66/env");
    expect(testHooksAllowed()).toBe(true);
    expect(huntNow()).toBe(Date.parse(AT_0905));
    expect((await (await reveal(P1)).json()).won).toBe(true);
  });
});

// ── The Upstash store, against a fake REST endpoint ──────────────────────────

describe("the Upstash REST store", () => {
  /** A fake Upstash REST endpoint over a Map, recording every call. */
  function fakeUpstash({ loseSetReply = false } = {}) {
    const data = new Map<string, string>();
    const calls: { url: string; body: unknown; auth: string | null; signal: unknown }[] = [];
    let setsLost = 0;
    const fetchStub = vi.fn(async (url: string, init?: RequestInit) => {
      const body = JSON.parse(String(init?.body));
      calls.push({ url, body, auth: new Headers(init?.headers).get("authorization"), signal: init?.signal });
      const run = (cmd: (string | number)[]): unknown => {
        const [op, k, ...rest] = cmd.map(String);
        if (op === "SET") return rest.includes("NX") && data.has(k) ? null : (data.set(k, rest[0]), "OK");
        if (op === "GET") return data.get(k) ?? null;
        if (op === "MGET") return [k, ...rest].map((x) => data.get(x) ?? null);
        if (op === "INCR") return data.set(k, String(Number(data.get(k) ?? 0) + 1)), Number(data.get(k));
        if (op === "EXPIRE") return 1;
        throw new Error(op);
      };
      const result = url.endsWith("/pipeline") ? body.map((c: string[]) => ({ result: run(c) })) : { result: run(body) };
      // The SET ran; its answer never came back.
      if (loseSetReply && !url.endsWith("/pipeline") && body[0] === "SET" && setsLost++ === 0) {
        throw new DOMException("The operation was aborted due to timeout", "TimeoutError");
      }
      return new Response(JSON.stringify(result), { status: 200 });
    });
    vi.stubGlobal("fetch", fetchStub);
    return { calls, data };
  }

  it("speaks SET NX, GET, MGET and an INCR+EXPIRE pipeline", async () => {
    const { calls } = fakeUpstash();
    try {
      const { upstashStore, TIMEOUT_MS } = await import("../app/lib/naija66/store");
      const s = upstashStore("https://example-redis.test/", "tok");
      expect(await s.setNX("k", "v1")).toBe(true);
      expect(await s.setNX("k", "v2")).toBe(false);
      expect(await s.get("k")).toBe("v1");
      expect(await s.mget(["k", "nope"])).toEqual(["v1", null]);
      expect(await s.hit("c", 60)).toBe(1);
      expect(await s.hit("c", 60)).toBe(2);
      expect(calls[0]).toMatchObject({ url: "https://example-redis.test", body: ["SET", "k", "v1", "NX"], auth: "Bearer tok" });
      expect(calls.at(-1)!.url).toBe("https://example-redis.test/pipeline");
      expect(calls.at(-1)!.body).toEqual([["INCR", "c"], ["EXPIRE", "c", "60"]]);
      // Every call can give up: none waits on Upstash for ever.
      expect(TIMEOUT_MS).toBe(5000);
      for (const c of calls) expect(c.signal).toBeInstanceOf(AbortSignal);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("a SET that landed but whose reply was lost: 503, then the same browser's retry wins", async () => {
    const { calls } = fakeUpstash({ loseSetReply: true });
    try {
      vi.stubEnv("KV_REST_API_URL", "https://example-redis.test");
      vi.stubEnv("KV_REST_API_TOKEN", "tok");
      const lost = await reveal(P1, { token: TOKEN_A });
      expect(lost.status).toBe(503);
      expect(lost.headers.get("set-cookie")).toBeNull();
      expect(calls.some((c) => (c.body as string[])[0] === "SET")).toBe(true);
      const retry = await reveal(P1, { ip: "7.7.7.12", token: TOKEN_A });
      const j = await retry.json();
      expect(j.won).toBe(true);
      expect(j.code).toMatch(new RegExp(`^NG66-1-[${ALPHABET}]{6}$`));
      expect(cookieFrom(retry)).toBe(`naija66=${j.code}`);
      // Somebody else is still too slow.
      expect((await (await reveal(P1, { ip: "7.7.7.13", token: TOKEN_B })).json()).claimed).toBe(true);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("a SET whose reply was lost, then a reload: spot hands the winner the code by token, with the cookie", async () => {
    fakeUpstash({ loseSetReply: true });
    try {
      vi.stubEnv("KV_REST_API_URL", "https://example-redis.test");
      vi.stubEnv("KV_REST_API_TOKEN", "tok");
      expect((await reveal(P1, { token: TOKEN_A })).status).toBe(503);
      delete (globalThis as { __naija66Records?: unknown }).__naija66Records; // another instance
      const back = await spot(P1, { ip: "7.7.7.14", token: TOKEN_A });
      const j = await back.json();
      expect(j.won).toBe(true);
      expect(j.code).toMatch(new RegExp(`^NG66-1-[${ALPHABET}]{6}$`));
      expect(cookieFrom(back)).toBe(`naija66=${j.code}`);
      // The board then shows it too: the recovered cookie unlocks `mine`.
      expect((await (await status(cookieFrom(back))).json()).mine.code).toBe(j.code);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("spot spends no store call on a decoy or a prize page before its drop; a dropped prize page does", async () => {
    const { calls } = fakeUpstash();
    try {
      vi.stubEnv("KV_REST_API_URL", "https://example-redis.test");
      vi.stubEnv("KV_REST_API_TOKEN", "tok");
      for (let i = 0; i < 50; i++) expect(await (await spot(`/test/decoy-${i}`)).text()).toBe("{}");
      expect(await (await spot(P2)).text()).toBe("{}"); // drops at 12pm WAT
      expect(calls).toHaveLength(0);
      expect(await (await spot(P1)).json()).toEqual({ here: true, prize: 1 });
      expect(calls.length).toBeGreaterThan(0); // negative control: the counter does count
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("reads either naming Vercel uses, as a pair", async () => {
    const { redisEnv } = await import("../app/lib/naija66/store");
    expect(redisEnv()).toBeNull();
    vi.stubEnv("UPSTASH_REDIS_REST_URL", "https://u.test");
    expect(redisEnv()).toBeNull(); // a URL with no token is no store
    vi.stubEnv("UPSTASH_REDIS_REST_TOKEN", "t");
    expect(redisEnv()).toEqual({ url: "https://u.test", token: "t" });
    vi.stubEnv("KV_REST_API_URL", "https://kv.test");
    vi.stubEnv("KV_REST_API_TOKEN", "kt");
    expect(redisEnv()).toEqual({ url: "https://kv.test", token: "kt" });
  });
});

