import { NAIJA66_PRIZES } from "../../../data/naija66";
import { CLOSES_MS } from "../../../lib/naija66/clock";
import { keyFor, prizeForPath } from "../../../lib/naija66/crypto";
import { huntConfig, huntNow } from "../../../lib/naija66/env";
import { overLimit, readRecord } from "../../../lib/naija66/state";
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
 * 30 requests a minute per IP; past that, blank. The limit is on everything,
 * decoys included, so sweeping the sitemap costs the same as browsing it.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Hashed against when there is no secret, so a misconfigured deploy still does the work. */
const UNCONFIGURED = "naija66:unconfigured";

export async function GET(req: Request) {
  const pathname = (new URL(req.url).searchParams.get("p") ?? "").slice(0, 300);
  const cfg = huntConfig();
  const prize = prizeForPath(cfg?.secret ?? UNCONFIGURED, pathname);
  if (!cfg) return blankBadge();

  try {
    if (await overLimit(cfg.store, cfg.secret, req, "badge", 30, 60)) return blankBadge();
    const entry = prize ? NAIJA66_PRIZES.find((p) => p.prize === prize) : undefined;
    if (!entry) return blankBadge();
    const now = huntNow();
    if (now < Date.parse(entry.dropsAt) || now >= CLOSES_MS) return blankBadge();
    if (await readRecord(cfg.store, entry.prize)) return blankBadge();
    return await keyBadge(keyFor(cfg.secret, entry.prize));
  } catch (err) {
    console.error("naija66 badge:", err instanceof Error ? err.message : "unknown error");
    return blankBadge();
  }
}
