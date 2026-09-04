import type { MetadataRoute } from "next";
import { siteUrl } from "./site";
import { updates } from "./data/updates";
import { songs } from "./data/songs";
import { albumPages } from "./data/albumPages";
import { afrobeatsArtists } from "./data/afrobeats";
import { LIVE_BOARDS } from "./data/liveBoards";
import { liveChartsUpdated } from "./data/liveCharts";
import { carSlugs } from "./data/cars";

// lastmod is derived from the real content log (updates.ts), NOT the build time.
// A sitemap where every URL always reads "modified now" on each deploy trains
// crawlers to ignore lastmod — so each route reports the date of the most recent
// update that actually touched it, falling back to the site's newest update.
const toDate = (iso: string) => new Date(`${iso}T12:00:00Z`);
const newestUpdate = toDate([...updates.map((u) => u.date)].sort().at(-1)!);

/**
 * Routes the live-charts pipeline rewrites on its own clock, and the stamp it
 * writes. The feed cannot describe these pages: nobody logs an updates.ts entry
 * when the hourly sweep moves a position, so their content date lives in the
 * generated data file instead — which is also the date the page itself declares
 * as `dateModified` in its Dataset node.
 *
 * Without this, a feed entry that merely LINKS to such a page freezes its
 * lastmod at the date of that entry: /live-charts advertised 2026-07-30, the
 * day of the last hand-written entry pointing there, while the page's own
 * Dataset node said 2026-09-04 and the board underneath it had been rebuilt
 * every hour in between. That is the site's most frequently changed page
 * understating itself by five weeks on the one signal crawlers use to decide
 * what to re-fetch — and it got that way BECAUSE it had feed entries, where the
 * boards with none at least fell back to the site's newest date.
 *
 * The later of the two dates wins, so a genuine feed entry about a live board
 * still counts.
 */
const pipelineStamp: Record<string, string> = {
  "/live-charts": liveChartsUpdated,
  ...Object.fromEntries(LIVE_BOARDS.map((b) => [`/afrobeats/${b.slug}/live`, b.updated])),
};

function lastModFor(path: string): Date {
  const p = path || "/";
  const dates = updates
    .filter((u) => p === "/" || u.href === p || u.href.startsWith(`${p}/`))
    .map((u) => u.date);
  const own = pipelineStamp[p];
  if (own) dates.push(own);
  return dates.length ? toDate(dates.sort().at(-1)!) : newestUpdate;
}

// Sitemap with per-route priority + change frequency so crawlers know which
// pages matter most and how often to re-check them. Data pages (charts, records)
// change most; about/contact rarely.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/dai-dai", priority: 0.9, changeFrequency: "weekly" },
    { path: "/dai-dai/es", priority: 0.7, changeFrequency: "weekly" },
    { path: "/updates", priority: 0.8, changeFrequency: "daily" },
    { path: "/records", priority: 0.9, changeFrequency: "weekly" },
    { path: "/records/by-the-numbers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/records/visualized", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/charts", priority: 0.9, changeFrequency: "weekly" },
    { path: "/live-charts", priority: 0.9, changeFrequency: "daily" },
    { path: "/certifications", priority: 0.8, changeFrequency: "weekly" },
    { path: "/music", priority: 0.8, changeFrequency: "weekly" },
    ...songs.map((sg) => ({ path: `/music/${sg.slug}`, priority: 0.8, changeFrequency: "weekly" as const })),
    ...albumPages.map((al) => ({ path: `/music/albums/${al.slug}`, priority: 0.8, changeFrequency: "weekly" as const })),
    { path: "/timeline", priority: 0.8, changeFrequency: "weekly" },
    { path: "/afrobeats", priority: 0.8, changeFrequency: "weekly" },
    // Swept artists only: the pending three are noindex until their registers
    // are read, and a sitemap entry for a noindexed page is a contradiction.
    ...afrobeatsArtists
      .filter((a) => a.swept)
      .map((a) => ({ path: `/afrobeats/${a.slug}`, priority: 0.7, changeFrequency: "weekly" as const })),
    // Chart boards exist only for artists whose sweep has run.
    ...afrobeatsArtists
      .filter((a) => a.charts.length > 0)
      .map((a) => ({ path: `/afrobeats/${a.slug}/charts`, priority: 0.7, changeFrequency: "weekly" as const })),
    // Live boards are rebuilt hourly; "daily" is the strongest signal this
    // sitemap's own type allows, and it is what /live-charts declares too.
    ...LIVE_BOARDS.map((b) => ({
      path: `/afrobeats/${b.slug}/live`,
      priority: 0.6,
      changeFrequency: "daily" as const,
    })),
    { path: "/analysis", priority: 0.8, changeFrequency: "weekly" },
    // A standing correction rather than a moving figure — it is written to be
    // found and cited years from now, so it is indexed at the same weight as
    // the analysis page it sits under.
    { path: "/analysis/spotify-unmerge", priority: 0.8, changeFrequency: "monthly" },
    { path: "/records/awards", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/tours", priority: 0.8, changeFrequency: "weekly" },
    { path: "/records/firsts", priority: 0.7, changeFrequency: "monthly" },
    { path: "/records/africas-biggest", priority: 0.8, changeFrequency: "weekly" },
    { path: "/share", priority: 0.7, changeFrequency: "monthly" },
    { path: "/records/tours/festivals", priority: 0.6, changeFrequency: "monthly" },
    { path: "/records/tours/revenue", priority: 0.6, changeFrequency: "monthly" },
    { path: "/records/cars", priority: 0.6, changeFrequency: "monthly" },
    ...carSlugs.map((slug) => ({ path: `/records/cars/${slug}`, priority: 0.5, changeFrequency: "monthly" as const })),
    { path: "/records/tours/map", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/api", priority: 0.7, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.6, changeFrequency: "monthly" },
    { path: "/curator", priority: 0.5, changeFrequency: "monthly" },
    { path: "/press", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
  ];
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: lastModFor(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
