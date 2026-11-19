import { describe, it, expect, vi, beforeAll } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import TodaysNumber from "../app/components/TodaysNumber";
import MobileHome from "../app/components/MobileHome";
import SongPage from "../app/music/[song]/page";
import desk from "../app/components/todaysNumber.module.css";
import phone from "../app/components/mobileHome.module.css";
import { liveCharts, liveCountryCount, livePlacementCount, type LiveRelease } from "../app/data/liveCharts";
import { liveTopTen, LIVE_PANEL_NOTE } from "../app/lib/liveTopTen";
import { LIVE_CADENCE } from "../app/lib/liveChartMeta";
import { HOME_FEATURED_SONG, homeFeaturedSong } from "../app/lib/homeData";
import { songBySlug } from "../app/data/songs";
import { coverFor, monogramFor } from "../app/lib/covers";
import { releaseArt } from "../app/lib/liveReleaseArt";
import { artistBySlug } from "../app/data/afrobeats";
import { updates } from "../app/data/updates";
import { searchDocs } from "../app/lib/searchIndex";
// @ts-expect-error — plain .mjs registry shared with the build script
import { LIVE_ARTISTS, placementFloor } from "../scripts/live-artists.mjs";

/**
 * The home page's live panel, both layouts (Paul, 19 Nov 2026): the figure is
 * how many streaming charts have Burna Boy in their Top 10 right now, the cover
 * is “Bigger”, his track on Grand Theft Auto VI: The Album (Spotify's album
 * page, read by hand that evening, out on 20 Nov 2026), and the cover links
 * the song's own page. Until then the panel counted the countries where “Dai
 * Dai” was No. 1, beside the Dai Dai cover, linked to /dai-dai.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

/** The album art's own hash on Spotify's CDN, the same at every size rung. */
const GTA_ART = "b6a36f9f6b443ea9590de20c";

/** Counted here, not by liveTopTen: one chart per platform, kind and country
 *  with any of his releases at No. 1 to No. 10. */
function topTenCharts(releases: readonly LiveRelease[]): Set<string> {
  const charts = new Set<string>();
  for (const r of releases) {
    for (const p of r.platforms) {
      for (const e of p.entries) if (e.position >= 1 && e.position <= 10) charts.add(`${p.platform} / ${r.kind} / ${e.country}`);
    }
  }
  return charts;
}

/** A release for the fixtures: each placement as [platform, country, position]. */
const release = (title: string, kind: "song" | "album", placements: [string, string, number][]): LiveRelease => ({
  title,
  kind,
  platforms: [...new Set(placements.map(([p]) => p))].map((platform) => ({
    platform,
    numberOnes: 0,
    entries: placements.filter(([p]) => p === platform).map(([, country, position]) => ({ country, name: country, position })),
  })),
});

describe("the figure: streaming charts with him in the Top 10", () => {
  it("is the snapshot's count of distinct charts with any of his releases at 1–10", () => {
    const want = topTenCharts(liveCharts).size;
    const top = liveTopTen();
    // Today's snapshot holds Top 10 placements (56 charts on 19 Nov 2026);
    // a day without one is the fallback below.
    if (want > 0) expect(top).toMatchObject({ figure: want, counts: "charts" });
    else expect(top).toMatchObject({ figure: liveCountryCount, counts: "countries" });
  });

  it("counts a chart once when two releases share it, keeps a songs chart and an albums chart apart, and stops at No. 10", () => {
    const fixture = [
      release("Ye", "song", [["iTunes", "DM", 4], ["Apple Music", "NG", 3]]),
      // The same iTunes chart as "Ye": one chart, not two.
      release("On the Low", "song", [["iTunes", "DM", 5], ["Spotify", "GB", 11]]),
      // Apple Music's albums chart in Nigeria, not its songs chart.
      release("Love, Damini", "album", [["Apple Music", "NG", 2]]),
      // A worldwide chart is a chart; No. 10 is in, No. 11 is out.
      release("Dai Dai", "song", [["YouTube", "WW", 7], ["Deezer", "FR", 10], ["Deezer", "BE", 11]]),
    ];
    expect(topTenCharts(fixture).size).toBe(5);
    expect(liveTopTen(fixture)).toEqual({
      figure: 5,
      counts: "charts",
      caption: { desk: "charts with Burna Boy in the Top 10 right now", phone: "Charts with Burna Boy in the Top 10 right now" },
    });
    expect(liveTopTen([release("Ye", "song", [["iTunes", "DM", 4]]), release("On the Low", "song", [["iTunes", "DM", 5]])])).toEqual({
      figure: 1,
      counts: "charts",
      caption: { desk: "chart with Burna Boy in the Top 10 right now", phone: "Chart with Burna Boy in the Top 10 right now" },
    });
  });

  it("with nothing in a Top 10 it falls back to the countries he charts in, never a 0", () => {
    // Britain is one country under kworb's two codes, and a worldwide chart is no country.
    const none = [
      release("Ye", "song", [["Spotify", "GB", 14], ["Spotify", "WW", 40], ["Apple Music", "UK", 12]]),
      release("Love, Damini", "album", [["Apple Music", "NG", 30]]),
    ];
    const t = liveTopTen(none);
    expect(t).toEqual({
      figure: 2,
      counts: "countries",
      caption: { desk: "countries he is charting in right now", phone: "Countries he is charting in right now" },
    });
    expect(String(t.figure)).not.toBe("0");
    expect(liveTopTen([release("Ye", "song", [["Spotify", "GB", 14]])]).caption.phone).toBe("Country he is charting in right now");

    // The real snapshot with every placement pushed out of the Top 10: the
    // panel's reach is the site's own country count, and it is not 0 — the
    // builder will not publish his board under its placement floor.
    const pushedOut = liveCharts.map((r) => ({
      ...r,
      platforms: r.platforms.map((p) => ({ ...p, entries: p.entries.map((e) => ({ ...e, position: e.position + 10 })) })),
    }));
    expect(liveTopTen(pushedOut)).toMatchObject({ figure: liveCountryCount, counts: "countries" });
    expect(liveCountryCount).toBeGreaterThan(0);
    expect(livePlacementCount).toBeGreaterThanOrEqual(placementFloor(LIVE_ARTISTS["burna-boy"]));
  });
});

describe("both layouts print it", () => {
  const top = liveTopTen();
  const deskDoc = parse(renderToStaticMarkup(<TodaysNumber />));
  const phoneDoc = parse(renderToStaticMarkup(<MobileHome />));
  const hero = phoneDoc.querySelector(`.${phone.hero}`)!;
  const n = top.figure;
  /** The caption, written out here rather than read off liveTopTen. */
  const caption =
    top.counts === "charts"
      ? `${n === 1 ? "chart" : "charts"} with Burna Boy in the Top 10 right now`
      : `${n === 1 ? "country" : "countries"} he is charting in right now`;

  it("the desktop panel: the figure, then its caption", () => {
    expect(words(deskDoc.querySelector(`.${desk.figure}`))).toBe(String(n));
    expect(words(deskDoc.querySelector(`.${desk.caption}`))).toBe(caption);
  });

  it("the phone hero: the same figure, and the caption with a capital", () => {
    expect(hero).toBeTruthy();
    expect(words(hero.querySelector(`.${phone.figure}`))).toBe(String(n));
    expect(words(hero.querySelector(`.${phone.caption}`))).toBe(caption.charAt(0).toUpperCase() + caption.slice(1));
  });

  it("the kickers above are as they were, and the line under it is the cadence on both", () => {
    expect(words(deskDoc.querySelector(`.${desk.kickerLabel}`))).toBe("Streaming charts");
    expect(words(hero.querySelector(`.${phone.liveLineText}`))).toBe("Today's streaming charts");
    const note = `On streaming charts right now, ${LIVE_CADENCE}.`;
    expect(LIVE_PANEL_NOTE).toBe(note);
    expect(words(deskDoc.querySelector(`.${desk.note}`))).toBe(note);
    expect(words(hero.querySelector(`.${phone.arrivals}`))).toBe(note);
  });

  /** What is wrong with a panel's cover link, in words; [] when it is right. */
  function coverProblems(link: Element | null): string[] {
    if (!link) return ["no cover link"];
    const out: string[] = [];
    if (link.getAttribute("href") !== "/music/bigger") out.push(`links ${link.getAttribute("href")}`);
    if (!/^Bigger ↗$/.test(words(link.querySelector('[class*="coverLabel"]')))) out.push("not labelled “Bigger ↗”");
    const img = link.querySelector("img");
    if (!img?.getAttribute("src")?.includes(GTA_ART)) out.push("not the Grand Theft Auto VI album art");
    if (img?.getAttribute("alt") !== "") out.push("the art is not alt=\"\"");
    if (img?.parentElement?.tagName !== "PICTURE") out.push("the art is not in its <picture>");
    return out;
  }

  it("both covers are “Bigger”'s, labelled “Bigger ↗” and linked to /music/bigger", () => {
    for (const [name, link, size] of [
      ["TodaysNumber", deskDoc.querySelector(`a.${desk.cover}`), "104"],
      ["MobileHome", hero.querySelector(`a.${phone.cover}`), "88"],
    ] as const) {
      expect(coverProblems(link), name).toEqual([]);
      const img = link!.querySelector("img")!;
      // Spotify's 300px rung of the album's art, the size both covers asked for before.
      expect(img.getAttribute("src"), name).toBe(`https://i.scdn.co/image/ab67616d00001e02${GTA_ART}`);
      expect([img.getAttribute("width"), img.getAttribute("height")], name).toEqual([size, size]);
      expect((img.parentElement as HTMLElement).style.display, name).toBe("contents");
    }
  });

  it("negative control: the desktop cover as it shipped (verbatim, 24 Sep 2026) fails every check", () => {
    const shipped = parse(
      '<a class="todaysNumber-module__z8E5Na__cover" href="/dai-dai"><img src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="" width="104" height="104"/></a>',
    ).querySelector("a");
    expect(coverProblems(shipped)).toEqual([
      "links /dai-dai",
      "not labelled “Bigger ↗”",
      "not the Grand Theft Auto VI album art",
      "the art is not in its <picture>",
    ]);
  });

  it("neither panel links /dai-dai any more", () => {
    expect(deskDoc.querySelectorAll('a[href="/dai-dai"]')).toHaveLength(0);
    expect(hero.querySelectorAll('a[href="/dai-dai"]')).toHaveLength(0);
    // The phone screen's History made card, below the hero, still does.
    expect(phoneDoc.querySelectorAll('a[href="/dai-dai"]').length).toBeGreaterThan(0);
  });

  it("the song is chosen in one place: one slug, resolved through songs.ts", () => {
    expect(HOME_FEATURED_SONG).toBe("bigger");
    const s = songBySlug(HOME_FEATURED_SONG)!;
    expect(homeFeaturedSong).toEqual({ title: s.title, href: `/music/${s.slug}`, cover: s.cover });
    for (const f of ["app/components/TodaysNumber.tsx", "app/components/MobileHome.tsx"]) {
      const src = read(f);
      expect(src, f).toMatch(/homeFeaturedSong/);
      expect(src, f).toMatch(/liveTopTen\(\)/);
      // No cover or page typed in either layout, and the No. 1 figure's
      // source no longer read (comments may still name it).
      expect(src, f).not.toMatch(/i\.scdn\.co|"\/music\/bigger"|DAI_DAI_COVER|lib\/liveHeadline"|liveHeadline\(\)/);
    }
  });
});

describe("Olamide's “Bigger” never wears the Grand Theft Auto VI art", () => {
  const OLAMIDE_ART = "https://cdn-images.dzcdn.net/images/cover/1c8ad18ce500b89296d833be31d3f1c9/500x500-000000-80-0-0.jpg";

  it("the site catalogue's “Bigger” is Burna Boy's, and so is his live row's art", () => {
    expect(coverFor("Bigger")).toBe(songBySlug("bigger")!.cover);
    expect(releaseArt({ title: "Bigger", kind: "song" }).cover).toContain(GTA_ART);
  });

  it("a board artist's live row takes only the art it ships, and draws its monogram without it", () => {
    expect(releaseArt({ title: "Bigger", kind: "song" }, "board-artist")).toEqual({ letter: monogramFor("Bigger"), ep: false });
    expect(releaseArt({ title: "Bigger", kind: "song", cover: OLAMIDE_ART }, "board-artist").cover).toBe(OLAMIDE_ART);
    // His chart row on the board carries its own sleeve (Deezer's, 19 Nov 2026).
    const row = artistBySlug("olamide")!.charts.find((r) => r.title === "Bigger")!;
    expect(row.cover).toBeTruthy();
    expect(row.cover).not.toContain(GTA_ART);
    // The board's live page asks for a board artist's art at both of its call sites.
    const page = read("app/afrobeats/[artist]/live/page.tsx");
    expect(page.match(/releaseArt\(r, "board-artist"\)/g)).toHaveLength(2);
    expect(page).not.toMatch(/releaseArt\(r\)/);
  });

  it("negative control: the rule as it shipped (r.cover ?? coverFor) dressed an art-less “Bigger” in the album's sleeve", () => {
    const shipped = (r: { title: string; kind: "song" | "album"; cover?: string }) => r.cover ?? coverFor(r.title, r.kind);
    expect(shipped({ title: "Bigger", kind: "song" })).toContain(GTA_ART);
  });
});

describe("/music/bigger", () => {
  let doc: Document;
  beforeAll(async () => {
    doc = parse(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "bigger" }) })));
  });

  it("is a story-only page for an unreleased track: no Spotify link, no credit, the album's art", () => {
    const s = songBySlug("bigger")!;
    expect(s).toMatchObject({ title: "Bigger", year: 2026, album: "Grand Theft Auto VI: The Album", storyOnly: true });
    expect(s.spotify).toBeUndefined();
    expect(s.credit).toBeUndefined();
    expect(s.cover).toBe(`https://i.scdn.co/image/ab67616d0000b273${GTA_ART}`);
    expect(words(doc.querySelector("h1"))).toBe("Bigger");
    expect(doc.querySelector('a[href*="open.spotify.com"]')).toBeNull();
    expect(words(doc.body)).toContain("No chart or certification record — history only");
  });

  it("says only what the album page and the station's announcement say: no first, no only", () => {
    const s = songBySlug("bigger")!;
    const copy = [s.tagline, s.blurb, ...s.extraFacts.map((f) => `${f.v} ${f.l}`), ...s.faqs.flatMap((f) => [f.q, f.a]), s.metaTitle, s.metaDescription ?? ""].join(" ");
    expect(copy).not.toMatch(/\b(first|only)\b|makes history/i);
    for (const fact of ["Track 13", "of 34", "20 November 2026", "2:49", "AfroBank FM", "DJ Palms Trax"]) expect(copy, fact).toContain(fact);
  });

  it("the /updates line: 19 Nov, filed as the AfroBank FM story was, not a digest headliner", () => {
    const u = updates.find((x) => x.date === "2026-11-19" && x.href === "/music/bigger")!;
    expect(u).toBeTruthy();
    const station = updates.find((x) => /AfroBank FM/.test(x.text))!;
    expect(u.category).toBe(station.category);
    expect(u.big).toBeUndefined();
    expect(u.text.length).toBeLessThanOrEqual(300);
    expect(u.text).toContain("“Bigger”");
    expect(u.text).not.toMatch(/\b(first|only)\b|makes history/i);
  });

  it("search finds it by the words a fan types", () => {
    for (const q of ["bigger", "gta", "gta 6", "gta vi", "grand theft auto"]) {
      expect(searchDocs(q).map((d) => d.path), q).toContain("/music/bigger");
    }
    expect(searchDocs("bigger")[0].path).toBe("/music/bigger");
  });
});
