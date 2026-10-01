import { huntIsOpen } from "../../../lib/naija66/clock";
import { claimTag } from "../../../lib/naija66/crypto";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import {
  claimCookie,
  json,
  mineByTag,
  mineFrom,
  prizeOnPage,
  readRecord,
  valveShut,
} from "../../../lib/naija66/state";

/**
 * GET /api/naija66/spot?p=<pathname> — does this page hold a code right now?
 *
 * Every page on the site asks, with its own pathname, during the hunt window
 * (HuntKeySlot.tsx). The answers:
 *
 *   {}                              not a prize page, or a prize page whose
 *                                   drop has not come: ONE answer for both, and
 *                                   neither touches the store
 *   { here: true, prize }           a dropped, unclaimed prize page
 *   { claimed: true, prize, at }    its code has been revealed
 *   { won: true, prize, code, at }  …to this browser: its cookie holds the code,
 *                                   or its claim token (the x-naija66-token
 *                                   header) is the one the winning tap stored.
 *                                   The token route re-sets the cookie, so a
 *                                   winner whose reveal reply was lost gets the
 *                                   code back on the next visit, reload or not.
 *
 * THE STORE. Only the five prize pages, once dropped, cost a store call: the
 * page check comes first. The prize paths are public (app/data/naija66.ts
 * ships in the client bundle), so there is nothing to hide by spending store
 * work on every other page.
 *
 * A GET never claims anything: only a POST to /api/naija66/reveal, from a tap,
 * does. It never throws to the client: a misconfigured hunt, a store error or
 * an address past 120 prize-page asks a minute on one instance (valveShut) all
 * answer {}.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REQUESTS_PER_MINUTE = 120;

const NOTHING = {};

export async function GET(req: Request) {
  try {
    const pathname = (new URL(req.url).searchParams.get("p") ?? "").slice(0, 300);
    const cfg = huntConfig();
    if (!cfg) return json(NOTHING);
    const now = huntNow();
    if (!huntIsOpen(now) || !pathname.startsWith("/")) return json(NOTHING);
    const entry = prizeOnPage(pathname);
    if (!entry || now < Date.parse(entry.dropsAt)) return json(NOTHING);
    if (valveShut(cfg.secret, req, "spot", REQUESTS_PER_MINUTE)) return json(NOTHING);

    const record = await readRecord(cfg.store, entry.prize);
    if (!record) return json({ here: true, prize: entry.prize });
    const records = [1, 2, 3, 4, 5].map((i) => (i === entry.prize ? record : null));
    const mine =
      mineFrom(req, records) ?? mineByTag(claimTag(cfg.secret, req.headers.get("x-naija66-token")), records);
    if (mine) {
      const secure = new URL(req.url).protocol === "https:";
      return json({ won: true, ...mine }, 200, { "Set-Cookie": claimCookie(mine.code, secure) });
    }
    return json({ claimed: true, prize: entry.prize, at: record.at });
  } catch (err) {
    console.error("naija66 spot:", err instanceof Error ? err.message : "unknown error");
    return json(NOTHING);
  }
}
