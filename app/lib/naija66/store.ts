/**
 * Where claims and rate-limit counters live.
 *
 * Production is Upstash Redis over its REST API, with plain fetch — no client
 * library, so no new dependency. Vercel's integration names the pair either
 * KV_REST_API_URL / KV_REST_API_TOKEN or UPSTASH_REDIS_REST_URL /
 * UPSTASH_REDIS_REST_TOKEN; both are read.
 *
 * The first claim of a prize is `SET naija66:prize:<i> <json> NX`. Redis runs
 * commands one at a time, so of any number of simultaneous claims exactly one
 * SET finds the key absent and gets "OK"; the rest get nil. That reply is the
 * whole of the atomicity — nothing reads-then-writes.
 *
 * Every call gives up after five seconds (see TIMEOUT_MS). A claim whose SET
 * landed but whose reply was lost is not lost to its winner: the claim route
 * recognises the same browser's retry (app/api/naija66/claim/route.ts).
 *
 * In development and tests, with no Redis configured, the same interface is
 * kept in memory. A Map written without an await between the check and the
 * set is just as atomic inside one Node process. It is refused in production
 * (see env.ts), because every serverless instance would have its own Map and a
 * prize could be "won" once per instance.
 */

export interface HuntStore {
  readonly kind: "redis" | "memory";
  /** SET key value NX — true only for the one caller whose write landed. */
  setNX(key: string, value: string): Promise<boolean>;
  get(key: string): Promise<string | null>;
  mget(keys: string[]): Promise<(string | null)[]>;
  /** INCR, and EXPIRE so the bucket dies on its own. Returns the new count. */
  hit(key: string, ttlSeconds: number): Promise<number>;
  /**
   * Adds `member` to the set at `key` the first time it is seen, and EXPIREs
   * the set. Returns the member's place in the order the set first saw its
   * members, from 0: an early member keeps its place however many come after.
   */
  order(key: string, member: string, ttlSeconds: number): Promise<number>;
}

// ── Upstash ────────────────────────────────────────────────────────────────

type UpstashReply = { result?: unknown; error?: string };

/**
 * How long one Upstash call may take. Past it the route answers "try again"
 * rather than holding the player's request open until the platform kills it.
 */
export const TIMEOUT_MS = 5000;

export function upstashStore(url: string, token: string): HuntStore {
  const base = url.replace(/\/+$/, "");
  const call = async (path: string, body: unknown): Promise<unknown> => {
    const res = await fetch(`${base}${path}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`Upstash answered ${res.status}`);
    return res.json();
  };
  const command = async (args: (string | number)[]) => {
    const reply = (await call("", args)) as UpstashReply;
    if (reply.error) throw new Error(`Upstash: ${reply.error}`);
    return reply.result;
  };
  return {
    kind: "redis",
    async setNX(key, value) {
      return (await command(["SET", key, value, "NX"])) === "OK";
    },
    async get(key) {
      const r = await command(["GET", key]);
      return typeof r === "string" ? r : null;
    },
    async mget(keys) {
      const r = await command(["MGET", ...keys]);
      return Array.isArray(r) ? r.map((v) => (typeof v === "string" ? v : null)) : keys.map(() => null);
    },
    async hit(key, ttlSeconds) {
      // One round trip: the count and its expiry travel together, so a bucket
      // can never be left without a TTL by a request that died between them.
      const replies = (await call("/pipeline", [
        ["INCR", key],
        ["EXPIRE", key, String(ttlSeconds)],
      ])) as UpstashReply[];
      const first = replies?.[0];
      if (!first || first.error || typeof first.result !== "number") throw new Error("Upstash: INCR failed");
      return first.result;
    },
    async order(key, member, ttlSeconds) {
      // A sorted set scored by the time each member was first seen: ZADD NX
      // never moves a member already there, so its rank is its place in line.
      const replies = (await call("/pipeline", [
        ["ZADD", key, "NX", String(Date.now()), member],
        ["ZRANK", key, member],
        ["EXPIRE", key, String(ttlSeconds)],
      ])) as UpstashReply[];
      const rank = replies?.[1];
      if (!rank || rank.error || typeof rank.result !== "number") throw new Error("Upstash: ZRANK failed");
      return rank.result;
    },
  };
}

// ── Memory ─────────────────────────────────────────────────────────────────

type MemoryState = {
  values: Map<string, string>;
  counters: Map<string, { n: number; until: number }>;
  orders?: Map<string, { members: Map<string, number>; until: number }>;
};

/**
 * One Map per process, on globalThis: Next bundles each route separately, so a
 * module-level Map would give the claim route and the status route a copy
 * each.
 */
const shared = globalThis as typeof globalThis & { __naija66Memory?: MemoryState };

export function memoryStore(state?: MemoryState): HuntStore {
  const s: MemoryState =
    state ?? (shared.__naija66Memory ??= { values: new Map(), counters: new Map(), orders: new Map() });
  return {
    kind: "memory",
    async setNX(key, value) {
      if (s.values.has(key)) return false;
      s.values.set(key, value);
      return true;
    },
    async get(key) {
      return s.values.get(key) ?? null;
    },
    async mget(keys) {
      return keys.map((k) => s.values.get(k) ?? null);
    },
    async hit(key, ttlSeconds) {
      const now = Date.now();
      const c = s.counters.get(key);
      const next = c && c.until > now ? { n: c.n + 1, until: c.until } : { n: 1, until: now + ttlSeconds * 1000 };
      s.counters.set(key, next);
      return next.n;
    },
    async order(key, member, ttlSeconds) {
      const now = Date.now();
      const orders = (s.orders ??= new Map());
      const live = orders.get(key);
      const o = live && live.until > now ? live : { members: new Map<string, number>(), until: now + ttlSeconds * 1000 };
      if (!o.members.has(member)) o.members.set(member, o.members.size);
      orders.set(key, o);
      return o.members.get(member)!;
    },
  };
}

/** Empties the in-memory store — tests only. */
export function resetMemoryStore() {
  shared.__naija66Memory = { values: new Map(), counters: new Map(), orders: new Map() };
}

/** The Redis REST pair Vercel set, whichever naming it used; null when neither. */
export function redisEnv(): { url: string; token: string } | null {
  const e = process.env;
  // As pairs: a URL from one naming with a token from the other is no store.
  if (e.KV_REST_API_URL && e.KV_REST_API_TOKEN) return { url: e.KV_REST_API_URL, token: e.KV_REST_API_TOKEN };
  if (e.UPSTASH_REDIS_REST_URL && e.UPSTASH_REDIS_REST_TOKEN) {
    return { url: e.UPSTASH_REDIS_REST_URL, token: e.UPSTASH_REDIS_REST_TOKEN };
  }
  return null;
}
