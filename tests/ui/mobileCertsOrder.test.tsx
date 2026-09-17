import { render } from "@testing-library/react";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats/seyi-vibez",
}));

import MobileCerts from "../../app/components/MobileCerts";
import type { Country, Release } from "../../app/data/certifications";
import { byMostCertified } from "../../app/lib/certs";
import { titleKey } from "../../app/lib/titleKey";
import {
  afrobeatsArtists,
  certCount,
  countryCount,
  countryMeta,
  type AfroArtist,
} from "../../app/data/afrobeats";

/**
 * "Most-certified releases" on the phone ranks by the SAME comparator as the
 * desktop explorer — count, then the summed weight of the tiers. Until 17 Sep
 * 2026 the phone sorted by count alone and broke ties by nothing, so on Seyi
 * Vibez's board (one plaque per title, all Nigerian) Bullion Van's single Gold
 * sat at 09 while Gwagwalada's 5× Platinum, Instagram's 5×, Where I'm From's
 * 4×, 99's and Giza's 3× were outside the ten. Rendered order, not the sort's.
 */

const propsFor = (a: AfroArtist) => {
  const releases: Release[] = a.releases.map((r) => ({
    title: r.title,
    certs: r.certs.map((c) => ({ c: c.c, level: c.level, ...(c.x ? { x: c.x } : {}) })),
  }));
  const countries: Record<string, Country> = Object.fromEntries(
    [...new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)))].map((code) => [
      code,
      countryMeta(code),
    ]),
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
  [...container.querySelectorAll('[class*="rowTitle"]')].map((el) =>
    (el.textContent ?? "").replace(/Album$/, "").trim(),
  );

describe("the phone's most-certified list ranks like the desktop", () => {
  it("Seyi Vibez: the multi-Platinum singles lead, Bullion Van does not", () => {
    const a = afrobeatsArtists.find((x) => x.slug === "seyi-vibez")!;
    const { container } = render(<MobileCerts {...propsFor(a)} />);
    const titles = renderedTitles(container);
    expect(titles.slice(0, 3)).toEqual(["Cana", "Gwagwalada", "Instagram"]);
    expect(titles).not.toContain("Bullion Van"); // the negative control: today's live list had it at 09
  });

  it("every swept artist: within the albums block and the songs block, the rendered order is byMostCertified", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const props = propsFor(a);
      const { container, unmount } = render(<MobileCerts {...props} />);
      const titles = renderedTitles(container);
      const albumKeys = new Set(props.albums.map((r) => titleKey(r.title)));
      const expected = props.releases
        .slice()
        .sort((x, y) => {
          const xa = albumKeys.has(titleKey(x.title)) ? 0 : 1;
          const ya = albumKeys.has(titleKey(y.title)) ? 0 : 1;
          return xa - ya || byMostCertified(x, y);
        })
        .map((r) => r.title)
        .slice(0, titles.length);
      expect(titles, a.slug).toEqual(expected);
      unmount();
    }
  });
});
