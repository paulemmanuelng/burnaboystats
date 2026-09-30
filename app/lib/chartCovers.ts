import { coverFor } from "./covers";

/**
 * Cover art for the chart pages, by release title, built on the server.
 *
 * MobileOfficialCharts and ChartExplorer used to call coverFor(title) in the
 * browser, which shipped the site's catalogue (songs.ts, albums.ts and
 * covers.ts) in the /records/charts bundle. The page builds this map from the
 * very arrays it renders and passes the SAME object to both components, so the
 * RSC payload carries it once. A board artist's page already passes its own.
 *
 * coverFor is called with the title alone, as the components called it. A
 * title with no art is left out; the components draw no art for it, as before.
 */
export function chartCovers(...lists: readonly (readonly { title: string }[])[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const list of lists) {
    for (const { title } of list) {
      const art = coverFor(title);
      if (art !== undefined) map[title] = art;
    }
  }
  return map;
}
