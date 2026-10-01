import { NAIJA66_CLOSES, NAIJA66_PRIZES } from "../../data/naija66";
import { CLOSES_MS } from "./clock";
import { ipTag, prizeOfCode, safeEqual } from "./crypto";
import type { HuntStore } from "./store";

/**
 * The hunt's shared server pieces: the claim records, the public board built
 * from them, the winner's cookie and the rate limits. Used by the three routes
 * under app/api/naija66/ (spot, reveal, status).
 */

/** The prize whose code hides on this page, if any (app/data/naija66.ts). */
/** The prize whose code hides on this page — never one already awarded off the site. */
export const prizeOnPage = (pathname: string) => NAIJA66_PRIZES.find((p) => p.path === pathname && !p.awarded);

/**
 * What a claim stores: the winner code, when it was claimed, and — when the
 * browser sent one — the tag of its claim token (crypto.ts claimTag), so the
 * same browser's retry is recognised if the reply to the winning claim never
 * arrived. The tag never leaves the server.
 */
export type ClaimRecord = { code: string; at: string; th?: string };

export const prizeKey = (prize: number) => `naija66:prize:${prize}`;

function parseRecord(raw: string | null): ClaimRecord | null {
  if (!raw) return null;
  try {
    const r = JSON.parse(raw) as Partial<ClaimRecord>;
    if (typeof r.code !== "string" || typeof r.at !== "string") return null;
    return typeof r.th === "string" ? { code: r.code, at: r.at, th: r.th } : { code: r.code, at: r.at };
  } catch {
    return null;
  }
}

/**
 * The five claim records, in prize order.
 *
 * Against Redis the answer is held for a few seconds per instance: the board
 * polls every 20 seconds from every open tab, and without this each poll is a
 * billed command. A claim clears it on the instance that made it; another
 * instance can lag by at most the TTL, which only delays a "claimed" label.
 */
const RECORDS_TTL_MS = 4000;
const cache = globalThis as typeof globalThis & { __naija66Records?: { at: number; records: (ClaimRecord | null)[] } };

export async function readRecords(store: HuntStore): Promise<(ClaimRecord | null)[]> {
  const hit = cache.__naija66Records;
  if (store.kind === "redis" && hit && Date.now() - hit.at < RECORDS_TTL_MS) return hit.records;
  const raw = await store.mget(NAIJA66_PRIZES.map((p) => prizeKey(p.prize)));
  const records = raw.map(parseRecord);
  if (store.kind === "redis") cache.__naija66Records = { at: Date.now(), records };
  return records;
}

export async function readRecord(store: HuntStore, prize: number): Promise<ClaimRecord | null> {
  const hit = cache.__naija66Records;
  if (store.kind === "redis" && hit && Date.now() - hit.at < RECORDS_TTL_MS) return hit.records[prize - 1] ?? null;
  return parseRecord(await store.get(prizeKey(prize)));
}

export const forgetRecords = () => {
  delete cache.__naija66Records;
};

// ── The public board ────────────────────────────────────────────────────────

export type PrizeState = "sleeping" | "live" | "claimed" | "closed";

export type PublicPrize = {
  prize: number;
  dropsAt: string;
  state: PrizeState;
  claimedAt?: string;
  /** The winner code's last two characters — "ends …MZ" — and nothing more. */
  tail?: string;
};

export type Mine = { prize: number; code: string; at: string };

export type HuntStatus = {
  /**
   * False when the hunt is misconfigured: the board says it opens at 9am (or,
   * past 9am, that it isn't open yet) and the home banner stops saying "live".
   */
  ready: boolean;
  /** The server's clock, so a board with a wrong phone clock still reads right. */
  now: string;
  closesAt: string;
  prizes: PublicPrize[];
  mine?: Mine;
};

export const tailOf = (code: string) => code.slice(-2);

export function publicPrizes(records: (ClaimRecord | null)[], now: number): PublicPrize[] {
  return NAIJA66_PRIZES.map((p, i) => {
    const r = records[i];
    if (p.awarded && !r) return { prize: p.prize, dropsAt: p.dropsAt, state: "claimed" };
    if (r) return { prize: p.prize, dropsAt: p.dropsAt, state: "claimed", claimedAt: r.at, tail: tailOf(r.code) };
    const state: PrizeState = now >= CLOSES_MS ? "closed" : now >= Date.parse(p.dropsAt) ? "live" : "sleeping";
    return { prize: p.prize, dropsAt: p.dropsAt, state };
  });
}

/** The board a misconfigured deploy shows: everything asleep, nothing claimed. */
export const notReadyStatus = (now: number): HuntStatus => ({
  ready: false,
  now: new Date(now).toISOString(),
  closesAt: NAIJA66_CLOSES,
  prizes: NAIJA66_PRIZES.map((p) => ({ prize: p.prize, dropsAt: p.dropsAt, state: "sleeping" })),
});

// ── The winner's cookie ─────────────────────────────────────────────────────

/**
 * httpOnly, and scoped to /api/naija66: page scripts cannot read it and no
 * other request carries it. The full winner code is only ever sent back to a
 * request holding it.
 */
export const COOKIE = "naija66";
const COOKIE_PATH = "/api/naija66";
const COOKIE_MAX_AGE = 14 * 24 * 60 * 60;

export function claimCookie(code: string, secure: boolean): string {
  return [
    `${COOKIE}=${code}`,
    `Path=${COOKIE_PATH}`,
    `Max-Age=${COOKIE_MAX_AGE}`,
    "HttpOnly",
    "SameSite=Lax",
    ...(secure ? ["Secure"] : []),
  ].join("; ");
}

export function readCookie(req: Request, name = COOKIE): string | null {
  const header = req.headers.get("cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k !== name) continue;
    try {
      return decodeURIComponent(v.join("="));
    } catch {
      return null;
    }
  }
  return null;
}

/** The claim this request's cookie proves, checked against the stored code. */
export function mineFrom(req: Request, records: (ClaimRecord | null)[]): Mine | null {
  const code = readCookie(req);
  const prize = code ? prizeOfCode(code) : null;
  const record = prize ? records[prize - 1] : null;
  if (!code || !prize || !record || !safeEqual(record.code, code)) return null;
  return { prize, code: record.code, at: record.at };
}

/** The claim a browser's claim-token tag proves: the record that tag won, if any. */
export function mineByTag(tag: string | null, records: (ClaimRecord | null)[]): Mine | null {
  if (!tag) return null;
  for (const [i, r] of records.entries()) {
    if (r?.th && safeEqual(r.th, tag)) return { prize: i + 1, code: r.code, at: r.at };
  }
  return null;
}

// ── Requests and responses ──────────────────────────────────────────────────

/** Vercel sets x-forwarded-for to the client first; x-real-ip is the fallback. */
export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || req.headers.get("x-real-ip")?.trim() || "unknown";
}

/** Fixed-window counter: true once this IP has gone past `limit` in the window. */
export async function overLimit(
  store: HuntStore,
  secret: string,
  req: Request,
  bucket: string,
  limit: number,
  windowSeconds: number,
): Promise<boolean> {
  const window = Math.floor(Date.now() / (windowSeconds * 1000));
  const key = `naija66:rl:${bucket}:${ipTag(secret, clientIp(req))}:${window}`;
  return (await store.hit(key, windowSeconds * 2)) > limit;
}

/**
 * A per-instance valve in front of the store: an address past `limit`
 * requests a minute on this server instance is answered without a store call
 * at all, so a loop hammering one route cannot spend the Redis quota the hunt
 * runs on. In memory only, keyed like every other bucket (never by address).
 */
const valves = globalThis as typeof globalThis & { __naija66Valve?: Map<string, { n: number; until: number }> };
const VALVE_CAP = 10_000;

export function valveShut(secret: string, req: Request, bucket: string, limit: number): boolean {
  const now = Date.now();
  const map = (valves.__naija66Valve ??= new Map());
  if (map.size > VALVE_CAP) {
    for (const [k, v] of map) if (v.until <= now) map.delete(k);
    if (map.size > VALVE_CAP) map.clear();
  }
  const key = `${bucket}:${ipTag(secret, clientIp(req))}`;
  const c = map.get(key);
  const next = c && c.until > now ? { n: c.n + 1, until: c.until } : { n: 1, until: now + 60_000 };
  map.set(key, next);
  return next.n > limit;
}

/** The reveal route's sentences a player can be shown. */
export const NOT_OPEN = "The hunt isn't open yet.";
export const TOO_MANY = "That's a lot of tries — give it ten minutes, then have another go.";
export const BROKEN = "Something went wrong on our side — try again in a moment.";

export const NO_STORE = { "Cache-Control": "no-store" } as const;

export const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  Response.json(body, { status, headers: { ...NO_STORE, ...headers } });
