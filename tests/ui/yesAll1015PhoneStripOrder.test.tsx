import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats/ayra-starr",
}));

import MobileCerts from "../../app/components/MobileCerts";
import type { Country, Release } from "../../app/data/certifications";
import { byMostCertified } from "../../app/lib/certs";
import { byStripOrder, mostCertified } from "../../app/lib/mostCertified";
import { titleKey } from "../../app/lib/titleKey";
import { afrobeatsArtists, certCount, countryCount, countryMeta, type AfroArtist } from "../../app/data/afrobeats";

/**
 * Question 23 of the 15 Oct 2026 live debug (Paul: "yes to all", cb-9): the
 * two "most certified" lists on a board artist's page disagreed after the top
 * three. The desktop strip orders by plaques, then the heaviest single plaque,
 * then the title (lib/mostCertified byStripOrder, fix 68); the phone's
 * "Most-certified releases" broke the same ties on the summed weight of every
 * plaque (lib/certs byMostCertified). Both now use the desktop's, on every
 * board artist's page; the phone still lists its albums first.
 *
 * Shipped on main (a9574c64), served by the dev server on 15 Oct 2026 at 402,
 * Ayra Starr's phone songs: "01 Rush", "02 Santa", "03 Bloody Samaritan",
 * "04 No Love", "05 Commas", "06 2 Sugar"; her desktop strip: Rush, Santa,
 * Bloody Samaritan, 2 Sugar, Commas.
 */

const propsFor = (a: AfroArtist) => {
  const releases: Release[] = a.releases.map((r) => ({
    title: r.title,
    certs: r.certs.map((c) => ({ c: c.c, level: c.level, ...(c.x ? { x: c.x } : {}) })),
  }));
  const countries: Record<string, Country> = Object.fromEntries(
    [...new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)))].map((code) => [code, countryMeta(code)]),
  );
  return {
    releases,
    albums: releases.filter((_, i) => a.releases[i].kind === "Albums"),
    history: [],
    countries,
    total: certCount(a),
    countryCount: countryCount(a),
    covers: Object.fromEntries(a.releases.map((r) => [r.title, r.cover])),
    portraitSlug: a.slug,
    backHref: "/afrobeats",
    backLabel: a.name,
    subject: a.name,
    showActionBar: false,
  };
};

const renderedTitles = (container: HTMLElement) =>
  [...container.querySelectorAll('[class*="rowTitle"]')].map((el) => (el.firstChild?.textContent ?? "").trim());

/** The phone's order: albums first, each block in `cmp`'s order. */
const phoneOrder = (props: ReturnType<typeof propsFor>, cmp: (a: Release, b: Release) => number) => {
  const albumKeys = new Set(props.albums.map((r) => titleKey(r.title)));
  const block = (r: Release) => (albumKeys.has(titleKey(r.title)) ? 0 : 1);
  return props.releases
    .slice()
    .sort((x, y) => block(x) - block(y) || cmp(x, y))
    .map((r) => r.title);
};

describe("Q23: the phone's most-certified list breaks ties as the desktop strip does", () => {
  it("Ayra Starr: the phone's songs open with the desktop strip's five, in its order", () => {
    const a = afrobeatsArtists.find((x) => x.slug === "ayra-starr")!;
    const props = propsFor(a);
    const strip = mostCertified(props.releases, 5).map((r) => r.title);
    const albumKeys = new Set(props.albums.map((r) => titleKey(r.title)));
    const stripSongs = strip.filter((t) => !albumKeys.has(titleKey(t)));
    const { container } = render(<MobileCerts {...props} />);
    const songs = renderedTitles(container).filter((t) => !albumKeys.has(titleKey(t)));
    expect(songs.slice(0, stripSongs.length)).toEqual(stripSongs);
  });

  it("every board artist: within each block the rendered order is byStripOrder", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const props = propsFor(a);
      const { container, unmount } = render(<MobileCerts {...props} />);
      const titles = renderedTitles(container);
      expect(titles, a.slug).toEqual(phoneOrder(props, byStripOrder).slice(0, titles.length));
      unmount();
    }
  });

  it("the case is real: on Ayra Starr's page the two comparators disagree inside the rows shown", () => {
    const props = propsFor(afrobeatsArtists.find((x) => x.slug === "ayra-starr")!);
    const shown = 10;
    expect(phoneOrder(props, byStripOrder).slice(0, shown)).not.toEqual(phoneOrder(props, byMostCertified).slice(0, shown));
  });

  it("negative control: the order main served fails the desktop strip's order", () => {
    const servedSongs = ["Rush", "Santa", "Bloody Samaritan", "No Love", "Commas", "2 Sugar"];
    const deskStrip = ["Rush", "Santa", "Bloody Samaritan", "2 Sugar", "Commas"];
    expect(servedSongs.slice(0, deskStrip.length)).not.toEqual(deskStrip);
  });
});
