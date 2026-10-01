import { NAIJA66_PRIZES } from "../../../data/naija66";
import { CLOSES_MS } from "../../../lib/naija66/clock";
import { claimTag, normaliseKey, prizeForKey, safeEqual, winnerCode } from "../../../lib/naija66/crypto";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import {
  BROKEN,
  NOT_OPEN,
  TOO_MANY,
  claimCookie,
  forgetRecords,
  json,
  mineByTag,
  mineFrom,
  overLimit,
  prizeKey,
  readCookie,
  readRecord,
  readRecords,
  tailOf,
  type Mine,
} from "../../../lib/naija66/state";

/**
 * POST /api/naija66/claim {key, token} — the first valid, dropped key wins its prize.
 *
 *   { won: true, prize, code, at }        this request's SET NX landed; the
 *                                          winner code goes in an httpOnly cookie
 *   { claimed: true, prize, at, tail }    a real key whose prize is already won
 *   { wrong: true }                       anything else — a wrong key, a real key
 *                                          before its drop, any key after the close:
 *                                          one answer, so it cannot be used to test
 *                                          a key early
 *   { alreadyWon: true, mine }            this browser already holds a win: one
 *                                          prize per person, and the key it sent
 *                                          stays open for somebody else
 *   429                                    past 8 attempts per IP in 10 minutes
 *   503                                    misconfigured (fails closed) or the store is down
 *
 * THE CLAIM TOKEN. The browser makes one random token, keeps it and sends it
 * with every claim (Naija66Provider.tsx). The winning record stores its tag
 * (crypto.ts claimTag). If the reply to a winning claim never arrives — the
 * phone lost signal, the tab closed, or Upstash ran the SET and its answer
 * was lost — the prize is still that browser's: its retry of the same key
 * gets the same { won } again, with the cookie set again, instead of "too
 * slow". The same tag also proves "already won" when the cookie is gone. The
 * full code still only ever reaches the browser that holds the token.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const cfg = huntConfig();
  if (!cfg) return json({ error: NOT_OPEN }, 503);
  const { secret, store } = cfg;
  const secure = new URL(req.url).protocol === "https:";
  const withCookie = (mine: Mine) => ({ "Set-Cookie": claimCookie(mine.code, secure) });

  try {
    if (await overLimit(store, secret, req, "claim", 8, 600)) return json({ error: TOO_MANY }, 429);

    let body: { key?: unknown; token?: unknown } | null;
    try {
      body = (await req.json()) as { key?: unknown; token?: unknown } | null;
    } catch {
      body = null;
    }
    const typed = body?.key;
    const tag = claimTag(secret, body?.token);
    const prize = prizeForKey(secret, normaliseKey(typed));

    // Checked before the key, so the answer says nothing about the key sent —
    // except, to the browser that won it, that this is its own prize's key.
    if (readCookie(req) || tag) {
      const records = await readRecords(store);
      const mine = mineFrom(req, records) ?? mineByTag(tag, records);
      if (mine) {
        // Its own key again — a retry of the claim that won: the same answer again.
        if (prize === mine.prize) return json({ won: true, ...mine }, 200, withCookie(mine));
        return json({ alreadyWon: true, mine }, 200, withCookie(mine));
      }
    }

    const entry = prize ? NAIJA66_PRIZES.find((p) => p.prize === prize) : undefined;
    const now = huntNow();
    if (!entry || now < Date.parse(entry.dropsAt) || now >= CLOSES_MS) return json({ wrong: true });

    const code = winnerCode(entry.prize);
    const at = new Date(now).toISOString();
    const won = await store.setNX(prizeKey(entry.prize), JSON.stringify(tag ? { code, at, th: tag } : { code, at }));
    forgetRecords();
    if (won) {
      return json({ won: true, prize: entry.prize, code, at }, 200, withCookie({ prize: entry.prize, code, at }));
    }
    const existing = await readRecord(store, entry.prize);
    // This browser's own earlier claim, whose reply it never got: the same answer again.
    if (existing && tag && existing.th && safeEqual(existing.th, tag)) {
      const mine = { prize: entry.prize, code: existing.code, at: existing.at };
      return json({ won: true, ...mine }, 200, withCookie(mine));
    }
    return json({
      claimed: true,
      prize: entry.prize,
      at: existing?.at ?? null,
      tail: existing ? tailOf(existing.code) : null,
    });
  } catch (err) {
    console.error("naija66 claim:", err instanceof Error ? err.message : "unknown error");
    return json({ error: BROKEN }, 503);
  }
}
