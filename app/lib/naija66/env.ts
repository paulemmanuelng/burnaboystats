import { memoryStore, redisEnv, upstashStore, type HuntStore } from "./store";

/**
 * What the hunt runs on, read from the environment at request time.
 *
 * Env vars read here (and nowhere else):
 *   NAIJA66_SECRET                                  the one secret
 *   KV_REST_API_URL + KV_REST_API_TOKEN, or
 *   UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN   the claim store
 *   NAIJA66_NOW, NAIJA66_ALLOW_NOW                  a local test clock (below)
 *   NODE_ENV, VERCEL, VERCEL_ENV                    which of those are allowed
 *
 * FAIL CLOSED. With no secret, or in production with no Redis, huntConfig()
 * is null and every route answers as though the hunt has not opened: claims
 * 503, badges blank, the board "opens at 9am". Nothing throws, so a missing
 * variable can never take a page down with it.
 */

/**
 * The local test hooks — the fake clock and the in-memory store under
 * `next start` — are allowed outside production, or on a machine that is not
 * Vercel when NAIJA66_ALLOW_NOW=1 says so explicitly. Never on Vercel
 * production, whatever else is set.
 */
export function testHooksAllowed(): boolean {
  const e = process.env;
  if (e.VERCEL_ENV === "production") return false;
  return e.NODE_ENV !== "production" || (!e.VERCEL && e.NAIJA66_ALLOW_NOW === "1");
}

/** The hunt's clock: NAIJA66_NOW (an ISO instant) where the test hooks are allowed. */
export function huntNow(): number {
  const override = process.env.NAIJA66_NOW;
  if (override && testHooksAllowed()) {
    const t = Date.parse(override);
    if (Number.isFinite(t)) return t;
  }
  return Date.now();
}

export type HuntConfig = { secret: string; store: HuntStore };

export function huntConfig(): HuntConfig | null {
  // Trimmed: a secret pasted into Vercel with a trailing newline would
  // otherwise derive five keys nobody holds.
  const secret = process.env.NAIJA66_SECRET?.trim();
  if (!secret) return null;
  const redis = redisEnv();
  if (redis) return { secret, store: upstashStore(redis.url, redis.token) };
  return testHooksAllowed() ? { secret, store: memoryStore() } : null;
}
