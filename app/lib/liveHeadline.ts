import { liveCharts, liveCountryCount } from "../data/liveCharts";

/**
 * The single most striking thing that is true right now, derived from the live
 * chart snapshot rather than written by hand.
 *
 * The homepage used to open with "every certification, every chart record,
 * every milestone" — an accurate description of a filing cabinet, and no reason
 * for anyone to read the second screen. The site knows far better facts than
 * that; this surfaces the best one and lets it change on its own as the data
 * moves, which is also the only honest way to promise "always current".
 *
 * Ranked by distinct countries at No. 1, because "No. 1 in 62 countries" is a
 * bigger claim than any placement count — and falls back to reach when nothing
 * is topping a chart, so the hero is never empty.
 */
export interface LiveHeadline {
  /** The release doing the work, e.g. "Dai Dai". Null when nothing is topping. */
  title: string | null;
  /** Distinct countries where it is No. 1 right now. */
  countries: number;
  lead: string;
  detail: string;
}

export function liveHeadline(): LiveHeadline {
  let best: { title: string; countries: number } | null = null;

  for (const release of liveCharts) {
    const atNumberOne = new Set<string>();
    for (const platform of release.platforms) {
      for (const entry of platform.entries) {
        if (entry.position === 1) atNumberOne.add(entry.country);
      }
    }
    if (atNumberOne.size > (best?.countries ?? 0)) {
      best = { title: release.title, countries: atNumberOne.size };
    }
  }

  if (best && best.countries > 1) {
    return {
      title: best.title,
      countries: best.countries,
      lead: `“${best.title}” is No. 1 in ${best.countries} countries`,
      // The qualifier is not decoration. This counts platform charts, where the
      // song tops 64 territories; on official national charts the figure is 21.
      // The whole site rests on never blurring those two, so the homepage — the
      // page most people see and the only one they may ever see — has to say
      // which kind of No. 1 it means.
      detail: "on streaming charts · right now",
    };
  }

  // Nothing at No. 1 — lead with reach instead of leaving the hero silent.
  const reach = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  return {
    title: null,
    countries: 0,
    lead: `Charting in ${liveCountryCount} countries`,
    detail: `${reach} live placements on streaming charts`,
  };
}
