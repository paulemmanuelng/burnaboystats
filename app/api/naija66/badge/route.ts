import { NAIJA66_PRIZES } from "../../../data/naija66";
import { CLOSES_MS, huntIsOpen } from "../../../lib/naija66/clock";
import { keyFor, prizeForPath } from "../../../lib/naija66/crypto";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import { overPageBudget, readRecord, valveShut } from "../../../lib/naija66/state";
import { blankBadge, keyBadge } from "../../../lib/naija66/badgeImage";

/**
 * GET /api/naija66/badge?p=<pathname> — the picture in every page's key slot.
 *
 * Every page on the site asks, with its own pathname, so the page source is
 * identical everywhere and says nothing about which five are real. This route
 * does the same work for every request — hash the path, count the caller — and
 * answers with the key only when the path is a prize's page, that prize has
 * dropped, the hunt is open and nobody has claimed it. Every other answer is
 * one identical blank PNG (lib/naija66/badgeImage.tsx).
 *
 * THE BUDGET. 40 different pages per IP per quarter-hour (state.ts
 * overPageBudget); past that, every new page is blank until the next
 * quarter-hour. It counts pages, not requests: a page already asked about
 * answers as usual however often it comes back, so a player who revisits,
 * reloads or shares a carrier's IP with other players uses nothing up — only
 * a sweep of the sitemap does. Decoys count the same as real pages, so
 * sweeping costs the same as browsing.
 *
 * BEFORE THE STORE. Three answers need no store call, because they are the
 * same for every page: outside the hunt (before the first drop, from the
 * close), a `p` that is not a pathname, and an IP past 120 requests a minute
 * on this instance (state.ts valveShut) — so a loop cannot spend the Redis
 * quota the claims run on.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Hashed against when there is no secret, so a misconfigured deploy still does the work. */
const UNCONFIGURED = "naija66:unconfigured";

const PAGES_PER_WINDOW = 40;
const WINDOW_SECONDS = 15 * 60;
const REQUESTS_PER_MINUTE = 120;

export async function GET(req: Request) {
  const pathname = (new URL(req.url).searchParams.get("p") ?? "").slice(0, 300);
  const cfg = huntConfig();
  const prize = prizeForPath(cfg?.secret ?? UNCONFIGURED, pathname);
  if (!cfg) return blankBadge();
  const now = huntNow();
  if (!huntIsOpen(now) || !pathname.startsWith("/")) return blankBadge();
  if (valveShut(cfg.secret, req, "badge", REQUESTS_PER_MINUTE)) return blankBadge();

  try {
    if (await overPageBudget(cfg.store, cfg.secret, req, pathname, PAGES_PER_WINDOW, WINDOW_SECONDS)) {
      return blankBadge();
    }
    const entry = prize ? NAIJA66_PRIZES.find((p) => p.prize === prize) : undefined;
    if (!entry) return blankBadge();
    if (now < Date.parse(entry.dropsAt) || now >= CLOSES_MS) return blankBadge();
    if (await readRecord(cfg.store, entry.prize)) return blankBadge();
    return await keyBadge(keyFor(cfg.secret, entry.prize));
  } catch (err) {
    console.error("naija66 badge:", err instanceof Error ? err.message : "unknown error");
    return blankBadge();
  }
}
