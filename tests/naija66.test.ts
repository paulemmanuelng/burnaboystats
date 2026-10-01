// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createHmac } from "node:crypto";

/**
 * Naija @ 66 — the Independence Day key hunt's server, driven the way a
 * browser drives it: the three route handlers under app/api/naija66/, with
 * the in-memory store and a clock set through NAIJA66_NOW.
 *
 * Everything here runs on a MADE-UP secret. The real one never enters the
 * repo, so the committed pathHashes cannot be exercised directly; instead the
 * data module is swapped for one whose five hashes are this secret's hashes of
 * five made-up paths (/test/prize-1 … /test/prize-5). Same drop times, same
 * close, same code paths.
 */

const SECRET = "made-up-secret-for-tests-only";
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** The spec, re-implemented independently of app/lib/naija66/crypto.ts. */
const specHmac = (m: string) => createHmac("sha256", SECRET).update(m).digest();
const specPathHash = (p: string) => specHmac(`naija66:path:${p}`).toString("hex").slice(0, 32);
const specKey = (i: number) =>
  "NG66-" + [...specHmac(`naija66:key:${i}`).subarray(0, 6)].map((b) => ALPHABET[b % 32]).join("");

/** Fixed vectors for SECRET, computed once from the spec and written down. */
const VECTORS = {
  paths: {
    "/test/prize-1": "86408d006f9e1149df91a4b28cee8a92",
    "/test/prize-2": "0c3586ef87ded6e105591ebf10898286",
    "/test/prize-3": "0dffc35cbb69149abfeab20428b0090d",
    "/test/prize-4": "a87ab697b3e69eaee0a8c33ac2c758c6",
    "/test/prize-5": "abdc5828fc7f3cc0bd732e7c198f0058",
    "/test/decoy": "ac104bdca4f3f9085607c29a82e0b1d3",
  } as Record<string, string>,
  keys: ["NG66-XGMQ7Y", "NG66-GTGFHZ", "NG66-24TKFJ", "NG66-HFUWXB", "NG66-CY7VWT"],
};

vi.mock("../app/data/naija66", async (importOriginal) => {
  const real = await importOriginal<typeof import("../app/data/naija66")>();
  const test = [
    "86408d006f9e1149df91a4b28cee8a92",
    "0c3586ef87ded6e105591ebf10898286",
    "0dffc35cbb69149abfeab20428b0090d",
    "a87ab697b3e69eaee0a8c33ac2c758c6",
    "abdc5828fc7f3cc0bd732e7c198f0058",
  ];
  return { ...real, NAIJA66_PRIZES: real.NAIJA66_PRIZES.map((p, i) => ({ ...p, pathHash: test[i] })) };
});

// ── The clock ────────────────────────────────────────────────────────────────
const BEFORE = "2026-10-01T07:59:59Z"; // 08:59:59 WAT, a second before the first drop
const AT_0905 = "2026-10-01T08:05:00Z"; // 09:05 WAT: prize 1 live, prize 2 not yet
const AT_1205 = "2026-10-01T11:05:00Z"; // 12:05 WAT: prizes 1 and 2 dropped
const AT_2105 = "2026-10-01T20:05:00Z"; // every key dropped
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
    badgeRoute: await import("../app/api/naija66/badge/route"),
    claimRoute: await import("../app/api/naija66/claim/route"),
    statusRoute: await import("../app/api/naija66/status/route"),
  };
}

type Routes = Awaited<ReturnType<typeof fresh>>;
let r: Routes;

const at = (now: string) => vi.stubEnv("NAIJA66_NOW", now);

const badge = (p: string, ip = "198.51.100.1") =>
  r.badgeRoute.GET(
    new Request(`https://burnaboystats.com/api/naija66/badge?p=${encodeURIComponent(p)}&v=1`, {
      headers: { "x-forwarded-for": `${ip}, 10.0.0.1` },
    }),
  );

const claim = (
  key: unknown,
  { ip = "203.0.113.7", cookie, token }: { ip?: string; cookie?: string; token?: unknown } = {},
) =>
  r.claimRoute.POST(
    new Request("https://burnaboystats.com/api/naija66/claim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": ip,
        ...(cookie ? { cookie } : {}),
      },
      body: JSON.stringify(token === undefined ? { key } : { key, token }),
    }),
  );

/** Two browsers' claim tokens, shaped the way Naija66Provider makes them. */
const TOKEN_A = "fedcba9876543210fedcba9876543210";
const TOKEN_B = "00112233445566778899aabbccddeeff";

const status = (cookie?: string) =>
  r.statusRoute.GET(
    new Request("https://burnaboystats.com/api/naija66/status", { headers: cookie ? { cookie } : {} }),
  );

const bytes = async (res: Response) => Buffer.from(await res.arrayBuffer());
const headerList = (res: Response) => [...res.headers.entries()].sort();
/** The cookie a browser would send back, from a Set-Cookie header. */
const cookieFrom = (res: Response) => res.headers.get("set-cookie")!.split(";")[0];

beforeEach(async () => {
  r = await fresh(AT_0905);
});
afterEach(() => {
  vi.unstubAllEnvs();
});

// ── Derivation ───────────────────────────────────────────────────────────────

describe("derivation, exactly as the brief specifies it", () => {
  it("pathHash is the first 32 hex characters of HMAC(secret, 'naija66:path:' + p)", async () => {
    const { pathHash } = await import("../app/lib/naija66/crypto");
    for (const [p, h] of Object.entries(VECTORS.paths)) {
      expect(pathHash(SECRET, p)).toBe(h);
      expect(specPathHash(p)).toBe(h);
    }
  });

  it("key(i) maps the first 6 bytes of HMAC(secret, 'naija66:key:' + i) onto the alphabet", async () => {
    const { keyFor, ALPHABET: A } = await import("../app/lib/naija66/crypto");
    expect(A).toBe(ALPHABET);
    VECTORS.keys.forEach((k, i) => {
      expect(keyFor(SECRET, i + 1)).toBe(k);
      expect(specKey(i + 1)).toBe(k);
      expect(k).toMatch(/^NG66-[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/);
    });
  });

  it("finds a prize page by its hash and no other page", async () => {
    const { prizeForPath } = await import("../app/lib/naija66/crypto");
    expect(prizeForPath(SECRET, "/test/prize-3")).toBe(3);
    expect(prizeForPath(SECRET, "/test/decoy")).toBeNull();
    expect(prizeForPath(SECRET, "/test/prize-3/")).toBeNull(); // usePathname never has the slash
    expect(prizeForPath("another-secret", "/test/prize-3")).toBeNull();
  });

  it("normalises a typed key: any case, spaces, dashes around, prefix optional", async () => {
    const { normaliseKey } = await import("../app/lib/naija66/crypto");
    const k = VECTORS.keys[0];
    const body = k.slice(5);
    for (const typed of [k, k.toLowerCase(), ` ${k} `, body, body.toLowerCase(), `ng66 ${body}`, `NG66–${body}`, `-${k}-`, `NG66${body}`]) {
      expect(normaliseKey(typed), JSON.stringify(typed)).toBe(k);
    }
    for (const typed of ["", "NG66-", "NG66-ABC", "NG66-ABCDEFG", "NG66-0O1I00", 42, null, undefined, "x".repeat(65)]) {
      expect(normaliseKey(typed), JSON.stringify(typed)).toBeNull();
    }
    // A body may itself start "NG66" — the alphabet has N, G and 6.
    expect(normaliseKey("ng66xy")).toBe("NG66-NG66XY");
  });

  it("winner codes are NG66-<prize>-<six alphabet characters>", async () => {
    const { winnerCode, prizeOfCode } = await import("../app/lib/naija66/crypto");
    for (let i = 1; i <= 5; i++) {
      const c = winnerCode(i);
      expect(c).toMatch(new RegExp(`^NG66-${i}-[${ALPHABET}]{6}$`));
      expect(prizeOfCode(c)).toBe(i);
    }
    expect(prizeOfCode(VECTORS.keys[0])).toBeNull();
  });
});

// ── The badge ────────────────────────────────────────────────────────────────

describe("GET /api/naija66/badge", () => {
  it("answers a decoy and a real page before its drop with byte-identical blanks and identical headers", async () => {
    const decoy = await badge("/test/decoy");
    const early = await badge("/test/prize-2"); // real, drops at 12pm WAT
    expect(decoy.status).toBe(200);
    expect(early.status).toBe(200);
    expect(headerList(early)).toEqual(headerList(decoy));
    const [a, b] = [await bytes(decoy), await bytes(early)];
    expect(b.equals(a)).toBe(true);
    expect(a.subarray(1, 4).toString()).toBe("PNG");
    expect(decoy.headers.get("cache-control")).toBe("no-store");
    expect(decoy.headers.get("content-type")).toBe("image/png");
  });

  it("the blank is a 1x1 fully transparent PNG", async () => {
    const sharp = (await import("sharp")).default;
    const { data, info } = await sharp(await bytes(await badge("/test/decoy"))).raw().toBuffer({ resolveWithObject: true });
    expect([info.width, info.height, info.channels]).toEqual([1, 1, 4]);
    expect(data[3]).toBe(0);
  });

  it("draws the key on a prize page from its drop time, and blanks it once claimed", async () => {
    const decoy = await bytes(await badge("/test/decoy"));
    const live = await badge("/test/prize-1");
    const png = await bytes(live);
    expect(live.headers.get("content-type")).toBe("image/png");
    expect(live.headers.get("cache-control")).toBe("no-store");
    expect(png.equals(decoy)).toBe(false);
    const sharp = (await import("sharp")).default;
    const meta = await sharp(png).metadata();
    expect([meta.width, meta.height]).toEqual([360, 96]);

    expect((await (await claim(VECTORS.keys[0])).json()).won).toBe(true);
    expect((await bytes(await badge("/test/prize-1"))).equals(decoy)).toBe(true);
  });

  it("is blank for every page once the hunt closes, and before it opens", async () => {
    const decoy = await bytes(await badge("/test/decoy"));
    at(CLOSED);
    for (let i = 1; i <= 5; i++) expect((await bytes(await badge(`/test/prize-${i}`))).equals(decoy)).toBe(true);
    at(BEFORE);
    expect((await bytes(await badge("/test/prize-1"))).equals(decoy)).toBe(true);
  });

  it("gives one IP 40 different pages a quarter-hour, decoys counted; past that, new pages are blank", async () => {
    const decoy = await bytes(await badge("/test/decoy", "192.0.2.50"));
    for (let i = 0; i < 39; i++) await badge(`/test/decoy-${i}`, "192.0.2.50"); // 40 pages so far
    const limited = await badge("/test/prize-1", "192.0.2.50"); // the 41st page
    expect((await bytes(limited)).equals(decoy)).toBe(true);
    expect(headerList(limited)).toEqual(headerList(await badge("/test/decoy", "192.0.2.51")));
    expect((await bytes(await badge("/test/prize-1", "192.0.2.50"))).equals(decoy)).toBe(true); // and stays so
    // Another address is its own budget.
    expect((await bytes(await badge("/test/prize-1", "192.0.2.52"))).equals(decoy)).toBe(false);
  });

  it("never spends the budget on a page already asked about: revisits and reloads are free", async () => {
    const decoy = await bytes(await badge("/test/decoy", "192.0.2.60"));
    const first = await bytes(await badge("/test/prize-1", "192.0.2.60")); // page 2 of 40
    expect(first.equals(decoy)).toBe(false);
    for (let i = 0; i < 38; i++) await badge(`/test/decoy-${i}`, "192.0.2.60"); // pages 3 to 40: the budget is spent
    expect((await bytes(await badge("/test/decoy-new", "192.0.2.60"))).equals(decoy)).toBe(true);
    // The prize page it already saw still answers, however often it comes back.
    for (let i = 0; i < 20; i++) expect((await bytes(await badge("/test/prize-1", "192.0.2.60"))).equals(first)).toBe(true);
  });

  it("negative control: a player going back and forth between two pages 60 times is never limited", async () => {
    const decoy = await bytes(await badge("/test/decoy", "192.0.2.70"));
    for (let i = 0; i < 60; i++) {
      expect((await bytes(await badge(i % 2 ? "/test/decoy" : "/test/prize-1", "192.0.2.70"))).equals(decoy)).toBe(
        i % 2 === 1,
      );
    }
  });
});

// ── The badge, in front of the store ─────────────────────────────────────────

describe("GET /api/naija66/badge before the store", () => {
  /** Routes on a fake Upstash, counting every REST call the badge makes. */
  async function onUpstash(now: string) {
    const calls: string[] = [];
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init?: RequestInit) => {
        calls.push(url);
        const body = JSON.parse(String(init?.body));
        if (url.endsWith("/pipeline")) {
          return new Response(JSON.stringify(body.map((c: string[]) => ({ result: c[0] === "ZRANK" ? 0 : 1 }))));
        }
        return new Response(JSON.stringify({ result: body[0] === "MGET" ? [null, null, null, null, null] : null }));
      }),
    );
    r = await fresh(now);
    vi.stubEnv("KV_REST_API_URL", "https://example-redis.test");
    vi.stubEnv("KV_REST_API_TOKEN", "tok");
    return calls;
  }
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("answers blank without a store call outside the hunt, and for a p that is not a pathname", async () => {
    const calls = await onUpstash(BEFORE);
    await badge("/test/prize-1");
    at(CLOSED);
    await badge("/test/prize-1");
    at(AT_0905);
    await badge("test/prize-1");
    await badge("");
    expect(calls).toEqual([]);
    await badge("/test/decoy"); // negative control: in the hunt, a pathname does reach the store
    expect(calls.length).toBeGreaterThan(0);
  });

  it("shuts the valve on an IP past 120 requests a minute on one instance, before any store call", async () => {
    const calls = await onUpstash(AT_0905);
    for (let i = 0; i < 120; i++) await badge("/test/decoy", "192.0.2.80");
    const spent = calls.length;
    expect(spent).toBeGreaterThanOrEqual(120);
    const blank = await bytes(await badge("/test/decoy", "192.0.2.81"));
    const shut = await badge("/test/prize-1", "192.0.2.80"); // the 121st
    expect((await bytes(shut)).equals(blank)).toBe(true);
    expect(calls.length).toBe(spent + 1); // only 192.0.2.81's request reached the store
  });
});

// ── Claims ───────────────────────────────────────────────────────────────────

describe("POST /api/naija66/claim", () => {
  it("is atomic: of ten simultaneous claims on one key, exactly one wins", async () => {
    const results = await Promise.all(
      Array.from({ length: 10 }, (_, i) => claim(VECTORS.keys[0], { ip: `198.18.0.${i + 1}` }).then((x) => x.json())),
    );
    expect(results.filter((j) => j.won === true)).toHaveLength(1);
    expect(results.filter((j) => j.claimed === true)).toHaveLength(9);
    const winner = results.find((j) => j.won)!;
    expect(winner.prize).toBe(1);
    expect(winner.code).toMatch(new RegExp(`^NG66-1-[${ALPHABET}]{6}$`));
    for (const lost of results.filter((j) => j.claimed)) {
      expect(lost).toEqual({ claimed: true, prize: 1, at: winner.at, tail: winner.code.slice(-2) });
      expect(JSON.stringify(lost)).not.toContain(winner.code);
    }
  });

  it("two browsers, same moment: exactly one wins", async () => {
    const [a, b] = await Promise.all([claim(VECTORS.keys[0], { ip: "a" }), claim(VECTORS.keys[0], { ip: "b" })]);
    const js = [await a.json(), await b.json()];
    expect(js.filter((j) => j.won).length).toBe(1);
    expect(js.filter((j) => j.claimed).length).toBe(1);
  });

  it("gives a wrong key, an early key and a closed-hunt key the same answer", async () => {
    const wrong = await claim("NG66-AAAAAA", { ip: "1" });
    const early = await claim(VECTORS.keys[1], { ip: "2" }); // prize 2 drops at 12pm WAT
    at(CLOSED);
    const closed = await claim(VECTORS.keys[0], { ip: "3" }); // prize 1 was live, never claimed
    const answers = await Promise.all([wrong, early, closed].map(async (x) => [x.status, await x.text(), headerList(x)]));
    expect(answers[1]).toEqual(answers[0]);
    expect(answers[2]).toEqual(answers[0]);
    expect(answers[0][0]).toBe(200);
    expect(JSON.parse(answers[0][1] as string)).toEqual({ wrong: true });
    expect(wrong.headers.get("set-cookie")).toBeNull();
  });

  it("accepts the key however it is typed", async () => {
    const j = await (await claim(`  ${VECTORS.keys[0].slice(5).toLowerCase()} `)).json();
    expect(j.won).toBe(true);
  });

  it("trips after 8 attempts per IP in 10 minutes, with a friendly 429", async () => {
    for (let i = 0; i < 8; i++) expect((await claim("NG66-AAAAAA", { ip: "9.9.9.9" })).status).toBe(200);
    const ninth = await claim(VECTORS.keys[0], { ip: "9.9.9.9" });
    expect(ninth.status).toBe(429);
    expect((await ninth.json()).error).toMatch(/ten minutes/);
    // The right key from that IP did not claim anything; another IP still can.
    expect((await (await claim(VECTORS.keys[0], { ip: "9.9.9.10" })).json()).won).toBe(true);
  });

  it("one prize per person: a winner's browser cannot take a second", async () => {
    at(AT_1205);
    const first = await claim(VECTORS.keys[0], { ip: "5.5.5.5" });
    const cookie = cookieFrom(first);
    const again = await (await claim(VECTORS.keys[1], { ip: "5.5.5.5", cookie })).json();
    expect(again.alreadyWon).toBe(true);
    expect(again.mine.prize).toBe(1);
    // Prize 2 is still there for somebody else.
    expect((await (await claim(VECTORS.keys[1], { ip: "6.6.6.6" })).json()).won).toBe(true);
  });

  it("a winner whose reply never arrived gets the same win again from the same browser's retry", async () => {
    const first = await claim(VECTORS.keys[0], { ip: "7.7.7.7", token: TOKEN_A });
    const won = await first.json();
    expect(won.won).toBe(true);
    // The reply is lost: no cookie reached the browser. It tries the same key again.
    const retry = await claim(VECTORS.keys[0], { ip: "7.7.7.8", token: TOKEN_A });
    expect(await retry.json()).toEqual(won);
    expect(retry.headers.get("set-cookie")).toBe(first.headers.get("set-cookie"));
    // Typed differently, and with the cookie back, it is still the same win.
    expect(await (await claim(` ${VECTORS.keys[0].toLowerCase()}`, { token: TOKEN_A, cookie: cookieFrom(retry) })).json()).toEqual(won);
    // Anybody else is too slow, and learns only the last two characters.
    const other = await (await claim(VECTORS.keys[0], { ip: "8.8.8.8", token: TOKEN_B })).json();
    expect(other).toEqual({ claimed: true, prize: 1, at: won.at, tail: won.code.slice(-2) });
    // The board never shows the token's tag.
    expect(await (await status()).text()).not.toMatch(/"th"/);
  });

  it("negative control: without its token, the same retry is told it was too slow", async () => {
    const won = await (await claim(VECTORS.keys[0], { token: TOKEN_A })).json();
    expect(won.won).toBe(true);
    const bare = await (await claim(VECTORS.keys[0], { ip: "7.7.7.9" })).json();
    expect(bare).toEqual({ claimed: true, prize: 1, at: won.at, tail: won.code.slice(-2) });
  });

  it("the token also proves one prize per person when the cookie is gone", async () => {
    at(AT_1205);
    const won = await (await claim(VECTORS.keys[0], { token: TOKEN_A })).json();
    const again = await claim(VECTORS.keys[1], { ip: "7.7.7.10", token: TOKEN_A });
    const j = await again.json();
    expect(j).toEqual({ alreadyWon: true, mine: { prize: 1, code: won.code, at: won.at } });
    expect(cookieFrom(again)).toBe(`naija66=${won.code}`);
    expect((await (await claim(VECTORS.keys[1], { token: TOKEN_B })).json()).won).toBe(true);
  });

  it("ignores a token that is not one, and still claims", async () => {
    for (const token of ["", "short", "G".repeat(32), 42, null, { a: 1 }, "A".repeat(32)]) {
      r = await fresh(AT_0905);
      const j = await (await claim(VECTORS.keys[0], { token })).json();
      expect(j.won, JSON.stringify(token)).toBe(true);
      const bare = await (await claim(VECTORS.keys[0], { ip: "7.7.7.11", token })).json();
      expect(bare.claimed, JSON.stringify(token)).toBe(true);
    }
  });
});

// ── Status and the cookie ────────────────────────────────────────────────────

describe("GET /api/naija66/status", () => {
  it("walks each prize from sleeping to live to claimed, and to closed", async () => {
    at(BEFORE);
    let s = await (await status()).json();
    expect(s.ready).toBe(true);
    expect(s.prizes.map((p: { state: string }) => p.state)).toEqual(["sleeping", "sleeping", "sleeping", "sleeping", "sleeping"]);
    at(AT_1205);
    s = await (await status()).json();
    expect(s.prizes.map((p: { state: string }) => p.state)).toEqual(["live", "live", "sleeping", "sleeping", "sleeping"]);
    const won = await (await claim(VECTORS.keys[1])).json();
    s = await (await status()).json();
    expect(s.prizes[1]).toEqual({ prize: 2, dropsAt: "2026-10-01T11:00:00Z", state: "claimed", claimedAt: won.at, tail: won.code.slice(-2) });
    at(CLOSED);
    s = await (await status()).json();
    expect(s.prizes.map((p: { state: string }) => p.state)).toEqual(["closed", "claimed", "closed", "closed", "closed"]);
    expect((await status()).headers.get("cache-control")).toBe("no-store");
  });

  it("returns the full winner code only to the browser holding its cookie", async () => {
    const res = await claim(VECTORS.keys[0]);
    const { code } = await res.json();
    const setCookie = res.headers.get("set-cookie")!;
    expect(setCookie).toMatch(/HttpOnly/);
    expect(setCookie).toMatch(/Path=\/api\/naija66/);
    expect(setCookie).toMatch(/SameSite=Lax/);
    expect(setCookie).toMatch(/Secure/);

    const holder = await (await status(cookieFrom(res))).json();
    expect(holder.mine).toEqual({ prize: 1, code, at: holder.prizes[0].claimedAt });

    const stranger = await (await status()).text();
    expect(stranger).not.toContain(code);
    expect(JSON.parse(stranger).mine).toBeUndefined();
    expect(JSON.parse(stranger).prizes[0].tail).toBe(code.slice(-2));

    // A forged cookie — the right prize, the wrong six characters — proves nothing.
    const forged = code.slice(0, -1) + (code.endsWith("A") ? "B" : "A");
    const f = await (await status(`naija66=${forged}`)).text();
    expect(f).not.toContain(code);
    expect(JSON.parse(f).mine).toBeUndefined();
  });

  it("negative control: the forged-cookie check would pass a real holder", async () => {
    const res = await claim(VECTORS.keys[0]);
    const { code } = await res.json();
    expect(JSON.parse(await (await status(`naija66=${code}`)).text()).mine.code).toBe(code);
  });
});

// ── Failing closed ───────────────────────────────────────────────────────────

describe("fails closed in production without its environment", () => {
  const prod = () => {
    vi.stubEnv("NODE_ENV", "production");
  };

  it("with no Redis: claims 503, badges blank, the board asleep and not ready", async () => {
    const decoy = await bytes(await badge("/test/decoy"));
    prod();
    const c = await claim(VECTORS.keys[0]);
    expect(c.status).toBe(503);
    expect(await c.json()).toEqual({ error: "The hunt isn't open yet." });
    const b = await badge("/test/prize-1");
    expect((await bytes(b)).equals(decoy)).toBe(true);
    const s = await (await status()).json();
    expect(s.ready).toBe(false);
    expect(s.prizes.every((p: { state: string }) => p.state === "sleeping")).toBe(true);
  });

  it("with no secret, anywhere", async () => {
    vi.stubEnv("NAIJA66_SECRET", "");
    expect((await claim(VECTORS.keys[0])).status).toBe(503);
    expect((await (await status()).json()).ready).toBe(false);
  });

  it("the local test hooks never switch on on Vercel, whatever else is set", async () => {
    prod();
    vi.stubEnv("NAIJA66_ALLOW_NOW", "1");
    vi.stubEnv("VERCEL", "1");
    expect((await claim(VECTORS.keys[0])).status).toBe(503);
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
    expect((await (await claim(VECTORS.keys[0])).json()).won).toBe(true);
  });
});

// ── The Upstash store, against a fake REST endpoint ──────────────────────────

describe("the Upstash REST store", () => {
  /** A fake Upstash REST endpoint over a Map, recording every call. */
  function fakeUpstash({ loseSetReply = false } = {}) {
    const data = new Map<string, string>();
    const zsets = new Map<string, Map<string, number>>();
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
        if (op === "ZADD") {
          const [nx, score, member] = rest;
          const z = zsets.get(k) ?? new Map<string, number>();
          zsets.set(k, z);
          if (nx !== "NX") throw new Error("ZADD without NX");
          return z.has(member) ? 0 : (z.set(member, Number(score)), 1);
        }
        if (op === "ZRANK") {
          const z = [...(zsets.get(k) ?? new Map<string, number>())].sort((a, b) => a[1] - b[1] || (a[0] < b[0] ? -1 : 1));
          const i = z.findIndex(([m]) => m === rest[0]);
          return i < 0 ? null : i;
        }
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

  it("speaks SET NX, GET, MGET, an INCR+EXPIRE pipeline and a ZADD NX+ZRANK+EXPIRE pipeline", async () => {
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
      // Places in line: first seen, first placed, and a return keeps its place.
      expect(await s.order("z", "a", 1800)).toBe(0);
      expect(await s.order("z", "b", 1800)).toBe(1);
      expect(await s.order("z", "a", 1800)).toBe(0);
      expect(await s.order("z", "c", 1800)).toBe(2);
      const zadd = calls.at(-1)!.body as string[][];
      expect(zadd.map((c) => c[0])).toEqual(["ZADD", "ZRANK", "EXPIRE"]);
      expect(zadd[0].slice(0, 3)).toEqual(["ZADD", "z", "NX"]);
      expect(zadd[2]).toEqual(["EXPIRE", "z", "1800"]);
      // Every call can give up: none waits on Upstash for ever.
      expect(TIMEOUT_MS).toBe(5000);
      for (const c of calls) expect(c.signal).toBeInstanceOf(AbortSignal);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("the in-memory store keeps the same places in line", async () => {
    const { memoryStore } = await import("../app/lib/naija66/store");
    const s = memoryStore({ values: new Map(), counters: new Map() });
    expect([await s.order("z", "a", 60), await s.order("z", "b", 60), await s.order("z", "a", 60)]).toEqual([0, 1, 0]);
    expect(await s.order("other", "b", 60)).toBe(0);
  });

  it("a SET that landed but whose reply was lost: 503, then the same browser's retry wins", async () => {
    const { calls } = fakeUpstash({ loseSetReply: true });
    try {
      vi.stubEnv("KV_REST_API_URL", "https://example-redis.test");
      vi.stubEnv("KV_REST_API_TOKEN", "tok");
      const lost = await claim(VECTORS.keys[0], { token: TOKEN_A });
      expect(lost.status).toBe(503);
      expect(lost.headers.get("set-cookie")).toBeNull();
      expect(calls.some((c) => (c.body as string[])[0] === "SET")).toBe(true);
      const retry = await claim(VECTORS.keys[0], { ip: "7.7.7.12", token: TOKEN_A });
      const j = await retry.json();
      expect(j.won).toBe(true);
      expect(j.code).toMatch(new RegExp(`^NG66-1-[${ALPHABET}]{6}$`));
      expect(cookieFrom(retry)).toBe(`naija66=${j.code}`);
      // Somebody else is still too slow.
      expect((await (await claim(VECTORS.keys[0], { ip: "7.7.7.13", token: TOKEN_B })).json()).claimed).toBe(true);
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
