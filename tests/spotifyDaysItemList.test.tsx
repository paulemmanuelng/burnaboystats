import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/africas-biggest",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../app/records/africas-biggest/page";
import {
  statBoxes,
  HIGHLIGHT,
  SPOTIFY_TOP_ARTISTS_DAILY,
  SPOTIFY_TOP_ARTISTS_DAYS_METHOD,
  spotifyTopArtistsDays,
} from "../app/data/africasBiggest";

/**
 * Live debug of the 7 Oct work, 8 Oct 2026 (seo-1007-02).
 *
 * The Spotify days board (#440, "Most days on Spotify's Global Daily Top
 * Artists chart") went out with no ItemList, while the Billboard boards and
 * the 500M board each have one. It now gets the same node, built from the
 * board's own rows, and like the weeks board it carries its counting rule:
 * the figure is a total across the archive, not a run.
 */

const BOX_ID = "spotify-top-artists-days";
const box = statBoxes.find((b) => b.id === BOX_ID)!;

const host = document.createElement("div");
host.innerHTML = renderToStaticMarkup(<AfricasBiggestPage />);
const blocks = [...host.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent ?? "");

type ListItem = { "@type": string; position: number; name: string };
type ItemList = { "@context": string; "@type": string; name: string; description?: string; numberOfItems: number; itemListElement: ListItem[] };

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

describe("the Spotify days board's ItemList on /records/africas-biggest", () => {
  it("every structured-data block on the page parses", () => {
    expect(blocks.length).toBeGreaterThan(0);
    for (const b of blocks) expect(() => JSON.parse(b), b.slice(0, 80)).not.toThrow();
  });

  const lists = blocks.map((b) => JSON.parse(b)).filter((j) => j["@type"] === "ItemList") as ItemList[];
  const ld = lists.find((j) => j.name === box.title);

  it("has one, named for the board", () => {
    expect(box, "no days board").toBeTruthy();
    expect(ld, `no ItemList named "${box.title}"`).toBeTruthy();
    expect(lists.filter((j) => j.name === box.title)).toHaveLength(1);
    expect(ld!["@context"]).toBe("https://schema.org");
  });

  it("lists the board's rows in the board's order, Burna Boy first", () => {
    const names = ld!.itemListElement.map((i) => i.name);
    expect(names[0]).toBe(HIGHLIGHT);
    expect(names).toEqual(box.entries!.map((e) => e.name));
    // …which are the reading's own ranking, not a typed list.
    expect(names).toEqual(spotifyTopArtistsDays.slice(0, names.length).map((r) => r.name));
    expect(ld!.numberOfItems).toBe(box.entries!.length);
    expect(ld!.itemListElement.map((i) => [i["@type"], i.position])).toEqual(names.map((_, i) => ["ListItem", i + 1]));
  });

  it("carries the counting rule, dated from the reading", () => {
    expect(ld!.description).toBe(SPOTIFY_TOP_ARTISTS_DAYS_METHOD);
    expect(SPOTIFY_TOP_ARTISTS_DAYS_METHOD).toContain(`the top ${SPOTIFY_TOP_ARTISTS_DAILY.chartSize} artists each day`);
    expect(SPOTIFY_TOP_ARTISTS_DAYS_METHOD).toContain(`since its archive began on ${longDate(SPOTIFY_TOP_ARTISTS_DAILY.archiveStart)}`);
    expect(SPOTIFY_TOP_ARTISTS_DAYS_METHOD).toContain(`As of the chart dated ${longDate(SPOTIFY_TOP_ARTISTS_DAILY.chartDate)}.`);
    expect(SPOTIFY_TOP_ARTISTS_DAYS_METHOD).toContain("a total, not one unbroken run");
  });

  it("joins the page's other four ItemLists, which are unchanged", () => {
    const titleOf = (id: string) => statBoxes.find((b) => b.id === id)!.title;
    expect(lists.map((j) => j.name)).toEqual(
      ["billboard-global-200-peak", "billboard-hot-100-peak", "most-hot-100-weeks", "most-500m-stream-songs", BOX_ID].map(titleOf),
    );
  });
});
