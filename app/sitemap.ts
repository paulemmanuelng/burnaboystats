import type { MetadataRoute } from "next";
import { allPairs, pairSlug } from "./lib/comparePairs";
import { certCountryCodes, countrySlug } from "./lib/certCountry";
import { siteUrl } from "./site";
import { songs } from "./data/songs";
import { albumPages } from "./data/albumPages";
import { afrobeatsArtists } from "./data/afrobeats";
import { LIVE_BOARDS } from "./data/liveBoards";
import { carSlugs } from "./data/cars";
import { isIndexableDay, onThisDayDays } from "./lib/onThisDay";
import { lastModFor } from "./lib/routeStamps";

// Each route's <lastmod> is lastModFor's: the evidence-backed date, or none.
// The rule, the feed and the content stamps live in app/lib/routeStamps.ts,
// which the /records cards read too.

/**
 * hreflang, said a second time in the sitemap.
 *
 * The two Dai Dai editions already cross-declare each other with <link
 * rel="alternate"> in their own <head>, which is one of the three ways Google
 * accepts hreflang. The sitemap is another, and the two reinforce rather than
 * compete: a crawler that reads the sitemap before rendering either page learns
 * the pairing on discovery instead of on render. Both requirements hold —
 * every URL in the set names itself, and both URLs are in this sitemap.
 */
const daiDaiLanguages = {
  en: `${siteUrl}/dai-dai`,
  es: `${siteUrl}/dai-dai/es`,
  "x-default": `${siteUrl}/dai-dai`,
};
const hreflang: Record<string, Record<string, string>> = {
  "/dai-dai": daiDaiLanguages,
  "/dai-dai/es": daiDaiLanguages,
};

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
    { path: "/compare", priority: 0.7, changeFrequency: "weekly" },
    // One page per pair of the roster's artists, canonical order only.
    ...allPairs().map(([a, b]) => ({ path: `/compare/${pairSlug(a, b)}`, priority: 0.6, changeFrequency: "weekly" as const })),
    { path: "/compare/in", priority: 0.7, changeFrequency: "weekly" },
    // One board per market the roster holds a plaque in.
    ...certCountryCodes().map((code) => ({ path: `/compare/in/${countrySlug(code)}`, priority: 0.6, changeFrequency: "weekly" as const })),
    { path: "/music", priority: 0.8, changeFrequency: "weekly" },
    { path: "/music/listeners", priority: 0.6, changeFrequency: "monthly" },
    ...songs.map((sg) => ({ path: `/music/${sg.slug}`, priority: 0.8, changeFrequency: "weekly" as const })),
    ...albumPages.map((al) => ({ path: `/music/albums/${al.slug}`, priority: 0.8, changeFrequency: "weekly" as const })),
    { path: "/timeline", priority: 0.8, changeFrequency: "weekly" },
    // The calendar, and the day pages a search engine is asked to index: two
    // or more milestones (isIndexableDay). A one-milestone day is noindex, and
    // a sitemap entry for a noindexed page is a contradiction.
    { path: "/on-this-day", priority: 0.7, changeFrequency: "weekly" },
    ...onThisDayDays
      .filter(isIndexableDay)
      .map((d) => ({ path: `/on-this-day/${d.slug}`, priority: 0.5, changeFrequency: "monthly" as const })),
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
    // Live boards are rebuilt several times a day; "daily" is the strongest signal this
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
    { path: "/records/tours/revenue/countries", priority: 0.6, changeFrequency: "monthly" },
    { path: "/records/cars", priority: 0.6, changeFrequency: "monthly" },
    ...carSlugs.map((slug) => ({ path: `/records/cars/${slug}`, priority: 0.5, changeFrequency: "monthly" as const })),
    { path: "/records/tours/map", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/api", priority: 0.7, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.6, changeFrequency: "monthly" },
    { path: "/curator", priority: 0.5, changeFrequency: "monthly" },
    { path: "/press", priority: 0.6, changeFrequency: "monthly" },
    // Naija @ 66, the Independence Day key hunt (1-2 Oct 2026): its board moved
    // through the hunt; it now stands as the finished results page, so it was
    // advertised as "daily" for nothing until 5 Oct 2026 (debug pass, core-21).
    { path: "/naija66", priority: 0.5, changeFrequency: "monthly" },
    { path: "/embed", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
  ];
  return routes.map((r) => {
    const lastModified = lastModFor(r.path);
    const languages = hreflang[r.path || "/"];
    return {
      url: `${siteUrl}${r.path}`,
      // Spread, not `lastModified: undefined` — Next writes the element from a
      // truthiness check, but a key that is present and undefined is still a
      // key, and the tests read these rows directly.
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      ...(languages ? { alternates: { languages } } : {}),
    };
  });
}
