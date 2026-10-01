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
import { isPrizeWord, testPrizeOnPage } from "../../../lib/naija66/word.server";

/**
 * POST /api/naija66/reveal {p, w, token} — a tap on a word of a page. The code
 * hides behind ONE word on its prize's page (app/data/naija66Words.ts, server
 * only); the first tap on that word wins.
 *
 *   { won: true, prize, code, at }   this request's SET NX landed: a fresh random
 *                                    winner code, also set in an httpOnly cookie
 *   { claimed: true, prize, at }     the right word, but somebody tapped it first
 *   { alreadyWon: true }             the right word, but this browser already holds
 *                                    a win: one prize per person
 *   {}                               anything else — a wrong word, a decoy page, an
 *                                    awarded prize, a prize not yet dropped, the
 *                                    hunt closed: ONE answer, so a wrong word
 *                                    tells nothing
 *   429                              past 40 taps per IP a minute (players tap many words)
 *
 * THE SWEEP CAP. The page text is public, so a script could try every word on
 * a prize page in turn. Past 150 taps on one prize's page from one IP in an
 * hour, every tap there answers {} — the right word too — and nothing says
 * so, so a sweep never learns it was stopped. No player taps 150 different
 * words on one page in an hour; the hour resets, so a shared mobile IP is
 * held back an hour at most, never for the whole hunt.
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

/** Taps per IP a minute: players tap word after word looking for the code. */
const TAPS_PER_MINUTE = 40;
/** Word taps per IP on one prize's page an hour before every answer there is {} (the sweep cap). */
const SWEEP_CAP_PER_HOUR = 150;
/** The per-instance valve in front of the store, above the per-IP limit. */
const VALVE_PER_MINUTE = 60;

export async function POST(req: Request) {
  const cfg = huntConfig();
  if (!cfg) return json({ error: NOT_OPEN }, 503);
  const { secret, store } = cfg;
  const secure = new URL(req.url).protocol === "https:";
  const withCookie = (mine: Mine) => ({ "Set-Cookie": claimCookie(mine.code, secure) });

  try {
    // The per-instance valve first (no store call), then 40 a minute per IP.
    if (valveShut(secret, req, "reveal", VALVE_PER_MINUTE)) return json({ error: TOO_MANY }, 429);
    if (await overLimit(store, secret, req, "reveal", TAPS_PER_MINUTE, 60)) return json({ error: TOO_MANY }, 429);

    let body: { p?: unknown; w?: unknown; token?: unknown } | null;
    try {
      body = (await req.json()) as { p?: unknown; w?: unknown; token?: unknown } | null;
    } catch {
      body = null;
    }
    const pathname = typeof body?.p === "string" ? body.p.slice(0, 300) : "";
    const tag = claimTag(secret, body?.token);
    const entry = prizeOnPage(pathname) ?? testPrizeOnPage(pathname);
    const now = huntNow();
    if (!entry || now < Date.parse(entry.dropsAt) || now >= CLOSES_MS) return json({});
    // The sweep cap: counted before the word is looked at, and answered as a
    // wrong word, so a script stopped by it is told nothing.
    if (await overLimit(store, secret, req, `word${entry.prize}`, SWEEP_CAP_PER_HOUR, 3600)) return json({});
    // The wrong word answers exactly as a decoy page does.
    if (!isPrizeWord(entry.prize, body?.w)) return json({});

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
