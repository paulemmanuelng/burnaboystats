import { huntIsOpen } from "../../../lib/naija66/clock";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import { json, mineFrom, overPageBudget, prizeOnPage, readRecord, valveShut } from "../../../lib/naija66/state";

/**
 * GET /api/naija66/spot?p=<pathname> — does this page hold a code right now?
 *
 * Every page on the site asks, with its own pathname, during the hunt window
 * (HuntKeySlot.tsx). The answers:
 *
 *   {}                              not a prize page, or a prize page whose
 *                                   drop has not come: ONE answer for both, with
 *                                   the same work done (the page budget is spent
 *                                   either way), so it cannot be used to test a
 *                                   page early
 *   { here: true, prize }           a dropped, unclaimed prize page
 *   { claimed: true, prize, at }    its code has been revealed
 *   { won: true, prize, code, at }  …to this browser, whose cookie holds the code
 *
 * A GET never claims anything: only a POST to /api/naija66/reveal, from a tap,
 * does. It never throws to the client: a misconfigured hunt, a store error, an
 * address past 120 requests a minute on one instance (valveShut) or past 40
 * different pages a quarter-hour (overPageBudget) all answer {}.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PAGES_PER_WINDOW = 40;
const WINDOW_SECONDS = 15 * 60;
const REQUESTS_PER_MINUTE = 120;

const NOTHING = {};

export async function GET(req: Request) {
  try {
    const pathname = (new URL(req.url).searchParams.get("p") ?? "").slice(0, 300);
    const cfg = huntConfig();
    if (!cfg) return json(NOTHING);
    const now = huntNow();
    if (!huntIsOpen(now) || !pathname.startsWith("/")) return json(NOTHING);
    if (valveShut(cfg.secret, req, "spot", REQUESTS_PER_MINUTE)) return json(NOTHING);
    if (await overPageBudget(cfg.store, cfg.secret, req, pathname, PAGES_PER_WINDOW, WINDOW_SECONDS)) {
      return json(NOTHING);
    }
    const entry = prizeOnPage(pathname);
    if (!entry || now < Date.parse(entry.dropsAt)) return json(NOTHING);

    const record = await readRecord(cfg.store, entry.prize);
    if (!record) return json({ here: true, prize: entry.prize });
    const records = [1, 2, 3, 4, 5].map((i) => (i === entry.prize ? record : null));
    const mine = mineFrom(req, records);
    if (mine) return json({ won: true, ...mine });
    return json({ claimed: true, prize: entry.prize, at: record.at });
  } catch (err) {
    console.error("naija66 spot:", err instanceof Error ? err.message : "unknown error");
    return json(NOTHING);
  }
}
