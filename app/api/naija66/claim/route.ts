import { NAIJA66_PRIZES } from "../../../data/naija66";
import { CLOSES_MS } from "../../../lib/naija66/clock";
import { normaliseKey, prizeForKey, winnerCode } from "../../../lib/naija66/crypto";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import {
  BROKEN,
  NOT_OPEN,
  TOO_MANY,
  claimCookie,
  forgetRecords,
  json,
  mineFrom,
  overLimit,
  prizeKey,
  readCookie,
  readRecord,
  readRecords,
  tailOf,
} from "../../../lib/naija66/state";

/**
 * POST /api/naija66/claim {key} — the first valid, dropped key wins its prize.
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
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const cfg = huntConfig();
  if (!cfg) return json({ error: NOT_OPEN }, 503);
  const { secret, store } = cfg;

  try {
    if (await overLimit(store, secret, req, "claim", 8, 600)) return json({ error: TOO_MANY }, 429);

    let typed: unknown;
    try {
      typed = ((await req.json()) as { key?: unknown } | null)?.key;
    } catch {
      typed = undefined;
    }

    // Checked before the key, so the answer says nothing about the key sent.
    if (readCookie(req)) {
      const mine = mineFrom(req, await readRecords(store));
      if (mine) return json({ alreadyWon: true, mine });
    }

    const prize = prizeForKey(secret, normaliseKey(typed));
    const entry = prize ? NAIJA66_PRIZES.find((p) => p.prize === prize) : undefined;
    const now = huntNow();
    if (!entry || now < Date.parse(entry.dropsAt) || now >= CLOSES_MS) return json({ wrong: true });

    const code = winnerCode(entry.prize);
    const at = new Date(now).toISOString();
    const won = await store.setNX(prizeKey(entry.prize), JSON.stringify({ code, at }));
    forgetRecords();
    if (won) {
      const secure = new URL(req.url).protocol === "https:";
      return json({ won: true, prize: entry.prize, code, at }, 200, { "Set-Cookie": claimCookie(code, secure) });
    }
    const existing = await readRecord(store, entry.prize);
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
