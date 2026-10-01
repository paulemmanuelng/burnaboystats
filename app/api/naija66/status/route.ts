import { NAIJA66_CLOSES } from "../../../data/naija66";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import { json, mineFrom, notReadyStatus, publicPrizes, readRecords, type HuntStatus } from "../../../lib/naija66/state";

/**
 * GET /api/naija66/status — the public board, and this browser's win if any.
 *
 * Each prize is sleeping, live, claimed (with the claim time and the winner
 * code's last two characters) or closed. The full code comes back only as
 * `mine`, and only to a request whose httpOnly cookie holds it.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const now = huntNow();
  const cfg = huntConfig();
  if (!cfg) return json(notReadyStatus(now));

  try {
    const records = await readRecords(cfg.store);
    const mine = mineFrom(req, records);
    const body: HuntStatus = {
      ready: true,
      now: new Date(now).toISOString(),
      closesAt: NAIJA66_CLOSES,
      prizes: publicPrizes(records, now),
      ...(mine ? { mine } : {}),
    };
    return json(body);
  } catch (err) {
    console.error("naija66 status:", err instanceof Error ? err.message : "unknown error");
    return json({ error: "The board is catching its breath — it will be back in a moment." }, 503);
  }
}
