import { CLOSES_MS } from "../../../lib/naija66/clock";
import { claimTag, safeEqual, winnerCode } from "../../../lib/naija66/crypto";
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
  prizeOnPage,
  readCookie,
  readRecord,
  readRecords,
  valveShut,
  type Mine,
} from "../../../lib/naija66/state";

/**
 * POST /api/naija66/reveal {p, token} — a tap on "Tap to reveal". First tap wins.
 *
 *   { won: true, prize, code, at }   this request's SET NX landed: a fresh random
 *                                    winner code, also set in an httpOnly cookie
 *   { claimed: true, prize, at }     somebody revealed it first
 *   { alreadyWon: true }             this browser already holds a win: one prize
 *                                    per person, and this code stays for somebody else
 *   {}                               not a dropped prize page, or the hunt is closed
 *   429                              past 8 taps per IP in 10 minutes
 *   503                              misconfigured (fails closed) or the store is down
 *
 * THE CLAIM TOKEN. The browser sends one random token with every tap
 * (lib/naija66/token.ts). The winning record stores its tag, so if the reply
 * to a winning tap never arrives, the same browser's next tap gets the same
 * { won } again, cookie and all, instead of "claimed".
 *
 * Only a POST reveals. A crawler following links sends GETs, and the spot
 * route never writes.
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
    if (valveShut(secret, req, "reveal", 30)) return json({ error: TOO_MANY }, 429);
    if (await overLimit(store, secret, req, "reveal", 8, 600)) return json({ error: TOO_MANY }, 429);

    let body: { p?: unknown; token?: unknown } | null;
    try {
      body = (await req.json()) as { p?: unknown; token?: unknown } | null;
    } catch {
      body = null;
    }
    const pathname = typeof body?.p === "string" ? body.p.slice(0, 300) : "";
    const tag = claimTag(secret, body?.token);
    const entry = prizeOnPage(pathname);
    const now = huntNow();
    if (!entry || now < Date.parse(entry.dropsAt) || now >= CLOSES_MS) return json({});

    // One prize per person: checked before the SET, so a winner's tap leaves
    // this code for somebody else.
    if (readCookie(req) || tag) {
      forgetRecords();
      const records = await readRecords(store);
      const mine = mineFrom(req, records) ?? mineByTag(tag, records);
      if (mine) {
        // Its own page again — a retry of the tap that won: the same answer again.
        if (mine.prize === entry.prize) return json({ won: true, ...mine }, 200, withCookie(mine));
        return json({ alreadyWon: true }, 200, withCookie(mine));
      }
    }

    const code = winnerCode(entry.prize);
    const at = new Date(now).toISOString();
    const won = await store.setNX(prizeKey(entry.prize), JSON.stringify(tag ? { code, at, th: tag } : { code, at }));
    forgetRecords();
    if (won) {
      const mine = { prize: entry.prize, code, at };
      return json({ won: true, ...mine }, 200, withCookie(mine));
    }
    const existing = await readRecord(store, entry.prize);
    // This browser's own earlier tap, whose reply it never got: the same answer again.
    if (existing && tag && existing.th && safeEqual(existing.th, tag)) {
      const mine = { prize: entry.prize, code: existing.code, at: existing.at };
      return json({ won: true, ...mine }, 200, withCookie(mine));
    }
    return json({ claimed: true, prize: entry.prize, at: existing?.at ?? null });
  } catch (err) {
    console.error("naija66 reveal:", err instanceof Error ? err.message : "unknown error");
    return json({ error: BROKEN }, 503);
  }
}
