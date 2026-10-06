// The date /analysis is stamped with, in one place for its Article's
// dateModified and the sitemap's lastmod.
//
// The page declared the NEWEST DATE ANYWHERE IN THE FEED (2026-10-04 on 5 Oct)
// while the sitemap, which rejects that fallback by design, said 17 Sep —
// two dates for one page (debug pass 5 Oct 2026, seo-12). The page's findings
// are computed from his certifications (Britain against America, where he goes
// Diamond) and chart entries, so its own evidence is the feed entries about it
// and the certification stamp. The chart data carries no stamp of its own, so
// this can under-date a chart-only change; it never claims a date nothing on
// the page backs.

import { updates } from "../data/updates";
import { CERTS_STAMP } from "../data/certifications";

export const ANALYSIS_STAMP: string = [
  ...updates.filter((u) => u.href === "/analysis" || u.href.startsWith("/analysis/")).map((u) => u.date),
  CERTS_STAMP,
]
  .sort()
  .at(-1)!;
