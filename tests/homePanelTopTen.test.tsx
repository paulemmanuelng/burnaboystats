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
import { HOME_FEATURED_SONG, homeFeaturedSong, featuredSong } from "../app/lib/homeData";
import { songBySlug, daiDaiStoryPage } from "../app/data/songs";
import { allChartItems } from "../app/data/charts";
import { allItems } from "../app/data/certifications";
import { readMetrics } from "../app/lib/cardTextWidth";
import { winning } from "./fixtures/cssRules";
import { coverFor, monogramFor } from "../app/lib/covers";
import { releaseArt } from "../app/lib/liveReleaseArt";
import { artistBySlug } from "../app/data/afrobeats";
import { updates } from "../app/data/updates";
import { bandEntry, bandFact } from "../app/lib/bandHeadline";
import { selectDigest, splitDigest } from "../app/lib/digest";
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
    // "Top" and "10" joined by a no-break space (see the phone's wrap below).
    expect(liveTopTen(fixture)).toEqual({
      figure: 5,
      counts: "charts",
      caption: { desk: "charts with Burna Boy in the Top\u00a010 right now", phone: "Charts with Burna Boy in the Top\u00a010 right now" },
    });
    expect(liveTopTen([release("Ye", "song", [["iTunes", "DM", 4]]), release("On the Low", "song", [["iTunes", "DM", 5]])])).toEqual({
      figure: 1,
      counts: "charts",
      caption: { desk: "chart with Burna Boy in the Top\u00a010 right now", phone: "Chart with Burna Boy in the Top\u00a010 right now" },
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
  /** The caption, written out here rather than read off liveTopTen, its
   *  "Top 10" joined by a no-break space. */
  const caption =
    top.counts === "charts"
      ? `${n === 1 ? "chart" : "charts"} with Burna Boy in the Top\u00a010 right now`
      : `${n === 1 ? "country" : "countries"} he is charting in right now`;

  // The captions as rendered, not folded by words(): the no-break space is
  // part of what is checked.
  it("the desktop panel: the figure, then its caption", () => {
    expect(words(deskDoc.querySelector(`.${desk.figure}`))).toBe(String(n));
    expect(deskDoc.querySelector(`.${desk.caption}`)?.textContent).toBe(caption);
  });

  it("the phone hero: the same figure, and the caption with a capital", () => {
    expect(hero).toBeTruthy();
    expect(words(hero.querySelector(`.${phone.figure}`))).toBe(String(n));
    expect(hero.querySelector(`.${phone.caption}`)?.textContent).toBe(caption.charAt(0).toUpperCase() + caption.slice(1));
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

  it("the song is chosen in one place: one slug, resolved through songs.ts or the Dai Dai story", () => {
    expect(HOME_FEATURED_SONG).toBe("bigger");
    const s = songBySlug(HOME_FEATURED_SONG)!;
    expect(homeFeaturedSong).toEqual({ title: s.title, href: `/music/${s.slug}`, cover: s.cover });
    // The likeliest next swap, back to “Dai Dai”, is the same one line: its
    // story is its own page, not a songs.ts row, and resolves to that page and
    // the cover the panel carried until 19 Nov 2026.
    expect(songBySlug("dai-dai")).toBeUndefined();
    expect(featuredSong("dai-dai")).toEqual({
      title: "Dai Dai",
      href: "/dai-dai",
      cover: "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4",
    });
    expect(featuredSong("dai-dai").cover).toBe(daiDaiStoryPage.cover);
    expect(() => featuredSong("no-such-song")).toThrow(/is not a song page/);
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

describe("on a phone “Top 10” stays on one line", () => {
  // Review of 19 Nov 2026: with an ordinary space between them, the hero's
  // caption broke "CHARTS WITH BURNA BOY IN THE TOP" / "10 RIGHT NOW" at every
  // width from 354 to 379px (most Androids at 360; the iPhone SE, mini and 6–8
  // at 375). Laid out here the way the browser lays it out: the site's Anton
  // (public/fonts; its kerning moves none of these letters) at the
  // stylesheet's size, upper case, in the hero's box, filled greedily and
  // broken only at ordinary spaces, since a no-break space is no break.
  const css = read("app/components/mobileHome.module.css");
  const base = (media: string | null) => media === null;
  const size = parseFloat(winning(css, ".caption", "font-size", base)!);
  const pad = parseFloat(winning(css, ".hero", "padding", base)!);
  const anton = readMetrics(readFileSync(join(process.cwd(), "public/fonts/Anton-Regular.ttf")));
  const width = (s: string) => ([...s].reduce((t, ch) => t + anton.advance(anton.glyph(ch.codePointAt(0)!)), 0) * size) / anton.unitsPerEm;
  /** The caption's lines on a screen `vw` px wide. */
  const lines = (text: string, vw: number) => {
    const out: string[] = [];
    for (const word of text.toUpperCase().split(" ")) {
      const joined = out.length ? `${out[out.length - 1]} ${word}` : null;
      if (joined !== null && width(joined) <= vw - 2 * pad) out[out.length - 1] = joined;
      else out.push(word);
    }
    return out;
  };
  const caption = liveTopTen([release("Ye", "song", [["iTunes", "DM", 4], ["Spotify", "NG", 2]])]).caption.phone;

  it("from 320 to 430px no line ends on “Top”: below 380 the line breaks before it", () => {
    for (let vw = 320; vw <= 430; vw++) expect(lines(caption, vw).some((l) => l.endsWith("TOP")), `${vw}px`).toBe(false);
    expect(lines(caption, 375)).toEqual(["CHARTS WITH BURNA BOY IN THE", "TOP\u00a010 RIGHT NOW"]);
    expect(lines(caption, 390)).toEqual(["CHARTS WITH BURNA BOY IN THE TOP\u00a010", "RIGHT NOW"]);
  });

  it("negative control: the caption as first built, with an ordinary space, split “Top” from “10” at 360 and 375", () => {
    expect([size, pad], "the stylesheet these widths were measured from").toEqual([24, 18]);
    const built = "Charts with Burna Boy in the Top 10 right now";
    for (const vw of [360, 375]) expect(lines(built, vw), `${vw}px`).toEqual(["CHARTS WITH BURNA BOY IN THE TOP", "10 RIGHT NOW"]);
    expect(lines(built, 390)).toEqual(["CHARTS WITH BURNA BOY IN THE TOP 10", "RIGHT NOW"]);
    // Every width it split at, by these metrics: 354 to 379, one run.
    const split: number[] = [];
    for (let vw = 320; vw <= 430; vw++) if (lines(built, vw).some((l) => l.endsWith("TOP"))) split.push(vw);
    expect([split[0], split.at(-1), split.length]).toEqual([354, 379, 26]);
  });
  // 20 Nov 2026 (the review's minor of 19 Nov): a three-digit figure at the
  // phone figure's 140px overflowed the hero at 320px beside the 88px cover.
  // MobileHome tags the figure with its digit count and the stylesheet steps
  // three or more digits down; laid out with the same Anton metrics.
  it("the phone figure fits beside the cover at 320px: two digits at the base size, three at the stepped size", () => {
    const fig = parseFloat(winning(css, ".figure", "font-size", base)!);
    const step = Number(/\.figure\[data-digits="3"\][^{]*\{[^}]*font-size:\s*(\d+)px/.exec(css)![1]);
    const gap = parseFloat(winning(css, ".figureRow", "gap", base)!);
    const widest = (n: number, px: number) =>
      (Math.max(...[..."0123456789"].map((d) => anton.advance(anton.glyph(d.codePointAt(0)!)))) * n * px) / anton.unitsPerEm;
    const room = 320 - 2 * pad - gap - 88;
    expect(widest(2, fig)).toBeLessThanOrEqual(room);
    expect(widest(3, step)).toBeLessThanOrEqual(room);
    // Negative control: three digits at the base size, as it shipped on 19 Nov.
    expect(widest(3, fig)).toBeGreaterThan(room);
  });

  it("MobileHome tags its figure with the digit count the stylesheet keys on", () => {
    const html = renderToStaticMarkup(<MobileHome />);
    expect(html).toContain(`data-digits="${String(liveTopTen().figure).length}"`);
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

  // Written the evening before release (out at midnight UK time, 20 Nov 2026),
  // when the album's tracklist gave “Bigger” no link: no track ID to cite, so
  // no play button, and no chart or certification row, so the "history only"
  // badge. Both checks follow the data, so the routine updates after release
  // (the verified track link, the first chart or certification row) need no
  // edit here: the play button is then that link, and the badge goes.
  it("is a story-only page: no credit, the album's art, a play button only once a verified link exists", () => {
    const s = songBySlug("bigger")!;
    expect(s).toMatchObject({ title: "Bigger", year: 2026, album: "Grand Theft Auto VI: The Album" });
    expect(s.credit).toBeUndefined();
    expect(s.cover).toBe(`https://i.scdn.co/image/ab67616d0000b273${GTA_ART}`);
    expect(words(doc.querySelector("h1"))).toBe("Bigger");
    const play = [...doc.querySelectorAll('a[href*="open.spotify.com"]')].map((a) => a.getAttribute("href"));
    if (s.spotify) {
      expect(s.spotify).toMatch(/^https:\/\/open\.spotify\.com\/track\/[A-Za-z0-9]{22}$/);
      expect(play.length).toBeGreaterThan(0);
      expect(new Set(play)).toEqual(new Set([s.spotify]));
    } else {
      expect(play).toEqual([]);
    }
    // The page's own test for the badge (songData): no chart entries and no certifications.
    const chart = allChartItems.find((r) => r.title === s.title);
    const cert = allItems.find((r) => r.title === s.title);
    const record = Boolean(chart?.entries.length || cert?.certs.length);
    expect(words(doc.body).includes("No chart or certification record — history only"), "the history-only badge").toBe(!record);
    if (!record) expect(s.storyOnly).toBe(true);
  });

  it("says only what the album page and the station's announcement say: no first, no only", () => {
    const s = songBySlug("bigger")!;
    const copy = [s.tagline, s.blurb, ...s.extraFacts.map((f) => `${f.v} ${f.l}`), ...s.faqs.flatMap((f) => [f.q, f.a]), s.metaTitle, s.metaDescription ?? ""].join(" ");
    expect(copy).not.toMatch(/\b(first|only)\b|makes history/i);
    for (const fact of ["Track 13", "of 34", "20 November 2026", "2:49", "AfroBank FM", "DJ Palms Trax"]) expect(copy, fact).toContain(fact);
  });

  // Paul, 19 Nov 2026 ("switch to gta news"): the line is big so the band
  // under the nav carries it (bandEntry: the newest big entry of the week),
  // while the 21 Nov email's two full-print headliners stay the NZ Gold and
  // the Grammy nomination (big entries sort by CATEGORY_RANK, Lifestyle last).
  it("the /updates line: 19 Nov, filed as the AfroBank FM story was, in the band but not an email headliner", () => {
    const u = updates.find((x) => x.date === "2026-11-19" && x.href === "/music/bigger")!;
    expect(u).toBeTruthy();
    const station = updates.find((x) => /AfroBank FM/.test(x.text))!;
    expect(u.category).toBe(station.category);
    expect(u.big).toBe(true);
    expect(bandEntry()).toBe(u);
    expect(bandFact()?.href).toBe("/music/bigger");
    const { headliners, rest } = splitDigest(selectDigest(updates, new Date("2026-11-21T12:00:00Z")));
    expect(headliners.map((h) => `${h.date} ${h.category}`)).toEqual(["2026-11-18 Certifications", "2026-11-16 Awards"]);
    expect(rest[0]).toBe(u);
    expect(u.text.length).toBeLessThanOrEqual(300);
    expect(u.text).toContain("“Bigger”");
    expect(u.text).not.toMatch(/\b(first|only)\b|makes history/i);
  });

  it("search finds it by the words a fan types", () => {
    // "gta6" and "gtavi" as fans tag the game, run together (review of 19 Nov 2026: they found nothing).
    for (const q of ["bigger", "gta", "gta 6", "gta6", "gta vi", "gtavi", "GTAVI", "grand theft auto"]) {
      expect(searchDocs(q).map((d) => d.path), q).toContain("/music/bigger");
    }
    expect(searchDocs("bigger")[0].path).toBe("/music/bigger");
  });
});
