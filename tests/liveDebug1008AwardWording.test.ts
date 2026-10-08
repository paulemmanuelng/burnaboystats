import { describe, it, expect } from "vitest";
import { GET as llms } from "../app/llms.txt/route";
import { GET as index } from "../app/api/v1/route";
import { GET as stats } from "../app/api/v1/stats/route";
import { GET as charts } from "../app/api/v1/charts/route";
import { GET as certifications } from "../app/api/v1/certifications/route";
import { GET as songs } from "../app/api/v1/songs/route";
import { GET as tours } from "../app/api/v1/tours/route";
import { GET as afrobeats } from "../app/api/v1/afrobeats/route";
import { GET as liveCharts } from "../app/api/v1/live-charts/route";
import { GET as liveChartsArtist } from "../app/api/v1/live-charts/[artist]/route";
import { afrobeatsArtists } from "../app/data/afrobeats";

/**
 * Live debug of 8 Oct 2026, desktop-D1008-desk-02: #459 made "certification"
 * the one noun and kept "award" for awards, and it edited llms.txt and the
 * /api/v1 descriptions for that rule ("the label's own award" became "the
 * label's own plaque"). Its scan read rendered pages only, so two of these
 * text surfaces kept a certification called an award:
 *
 *   llms.txt          "An upgrade replaces the earlier award rather than
 *                      adding to it."
 *   /api/v1/afrobeats "an upgrade replaces the earlier award rather than
 *                      adding to it" and "a lower tier awarded on top of
 *                      `level` in the same award"
 *
 * This reads every one of them the way a consumer does: the text llms.txt
 * serves, and every string in every /api/v1 JSON response other than the
 * awards endpoint's own (whose subject is awards). "Awarded" and "awarding"
 * are the verb, and stay.
 */

/** Every use of the word these surfaces have for an award itself. */
const AWARD_USES = [
  /\/api\/v1\/awards\b/g, // the awards endpoint and awards.csv
  /\bAwards \(\d+ wins from \d+ nominations\b/g, // llms.txt, the awards definition
  /\btours, awards and firsts\b/g, // llms.txt, /records
];
const plaqueAwards = (t: string) => {
  let rest = t;
  for (const re of AWARD_USES) rest = rest.replace(re, "");
  return [...rest.matchAll(/.{0,40}\bawards?\b.{0,20}/gi)].map((m) => m[0]);
};

/** Every string in a JSON value, joined one per line. */
const strings = (v: unknown): string[] =>
  typeof v === "string" ? [v] : Array.isArray(v) ? v.flatMap(strings) : v && typeof v === "object" ? Object.values(v).flatMap(strings) : [];
const json = async (res: Response | Promise<Response>) => (await (await res).json()) as Record<string, unknown>;

describe("desktop-D1008-desk-02 (live debug 8 Oct 2026): the machine-readable surfaces never call a certification an award", () => {
  it("llms.txt", async () => {
    expect(plaqueAwards(await llms().text())).toEqual([]);
  });

  it.each([
    ["/api/v1/stats", stats],
    ["/api/v1/charts", charts],
    ["/api/v1/certifications", certifications],
    ["/api/v1/songs", songs],
    ["/api/v1/tours", tours],
    ["/api/v1/afrobeats", afrobeats],
    ["/api/v1/live-charts", liveCharts],
  ] as [string, () => Response][])("%s", async (_path, get) => {
    expect(plaqueAwards(strings(await json(get())).join("\n"))).toEqual([]);
  });

  it("/api/v1/live-charts/{artist}, every board artist", async () => {
    for (const a of afrobeatsArtists) {
      const res = await liveChartsArtist(new Request("http://x/"), { params: Promise.resolve({ artist: a.slug }) });
      if (!res.ok) continue; // an artist without a live board answers 404
      expect(plaqueAwards(strings(await res.json()).join("\n")), a.slug).toEqual([]);
    }
  });

  it("/api/v1, every entry but the awards endpoint's own", async () => {
    const body = await json(index());
    const data = body.data as { endpoints: { path: string }[]; downloads: { path: string }[] };
    const entries = [...data.endpoints, ...data.downloads].filter((e) => !e.path.includes("/awards"));
    expect(entries.length).toBeGreaterThan(6);
    const rest = { ...body, data: { endpoints: [], downloads: [] } };
    expect(plaqueAwards(strings([rest, entries]).join("\n"))).toEqual([]);
  });

  it("negative control: the lines the site served on 8 Oct 2026 are caught, and an award is not", () => {
    for (const line of [
      "An upgrade replaces the earlier award rather than adding to it.", // llms.txt
      "a plaque is one title in one country at its CURRENT tier, and an upgrade replaces the earlier award rather than adding to it.", // /api/v1/afrobeats
      "A certification with a `plus` carries a lower tier awarded on top of `level` in the same award", // the same
    ])
      expect(plaqueAwards(line), line).not.toEqual([]);
    for (const kept of [
      "- Awards (83 wins from 248 nominations across", // llms.txt
      "- [Career records](https://burnaboystats.com/records): tours, awards and firsts.",
      "https://burnaboystats.com/api/v1/awards.csv (248 nominations)",
      "Every certification, by release, with the awarding body and level.", // the verb
      "and any lower tier awarded on top, as Mexico's AMPROFON prints",
    ])
      expect(plaqueAwards(kept), kept).toEqual([]);
  });
});
