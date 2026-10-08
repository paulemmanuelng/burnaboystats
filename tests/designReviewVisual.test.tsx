import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { declared, declaredAt } from "./fixtures/phoneTrees";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../app/afrobeats/[artist]/page";
import artistStyles from "../app/afrobeats/[artist]/artist.module.css";
import MobileLiveCharts from "../app/components/MobileLiveCharts";
import mobileLiveStyles from "../app/components/mobileLiveCharts.module.css";

/**
 * The design review of 8 Oct 2026 (docs/design/site-review-2026-10), the
 * visual lane of its quick wins: fixes that restore a rule the site already
 * set, each pinned against the markup or stylesheet production shipped.
 */

const css = (f: string) => readFileSync(join(process.cwd(), f), "utf8");

const parse = (html: string) => {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
};

describe("B-13: an artist page's onward row has one gold action", () => {
  // The finding's three pages, Ayra's purple primary among them.
  it.each(["wizkid", "tyla", "ayra-starr"])("%s: only 'Next' is filled; Compare is secondary", async (slug) => {
    const root = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
    const row = root.querySelector(`section.${artistStyles.onward}`)!;
    expect(row, "onward row not found").toBeTruthy();
    const primaries = [...row.querySelectorAll("a.btnPrimary")].map((a) => a.textContent);
    // Production on 8 Oct: ["Next: Ayra Starr →", "Compare ↗"] on Tyla's page.
    expect(primaries).toHaveLength(1);
    expect(primaries[0]).toMatch(/^Next: .+ →$/);
    const compare = [...row.querySelectorAll("a")].find((a) => a.textContent === "Compare ↗")!;
    expect(compare.className).toBe("btn btnSecondary");
  });
});

describe("MU-18: \"at No. 1\" is one colour on Live Charts — live green", () => {
  const DESK = css("app/live-charts/liveCharts.module.css");
  const PHONE = css("app/components/mobileLiveCharts.module.css");

  it("the summary, the platform tiles and the phone rows print it green (the reference)", () => {
    expect(declaredAt(DESK, ".liveInk", "color", 1440)).toBe("var(--green)");
    expect(declaredAt(DESK, ".platformCardNo1", "color", 1440)).toBe("var(--green)");
    expect(declaredAt(PHONE, ".rowNo1", "color", 390)).toBe("var(--green)");
  });

  it("the desktop release chip and row total follow it, not ochre", () => {
    // Production on 8 Oct: .chipNo1 var(--gold-bright-ink), .totalNo1 var(--gold).
    expect(declaredAt(DESK, ".chipNo1", "color", 1440)).toBe("var(--green)");
    expect(declaredAt(DESK, ".chipNo1", "background", 1440)).not.toMatch(/gold/);
    expect(declaredAt(DESK, ".totalNo1", "color", 1440)).toBe("var(--green)");
  });

  it("the phone tile's \"none at No. 1\" is muted — a zero is not a live No. 1", () => {
    const html = renderToStaticMarkup(
      <MobileLiveCharts
        releases={[]}
        platforms={[
          { platform: "Spotify", placements: 3, numberOnes: 2 },
          { platform: "Shazam", placements: 4, numberOnes: 0 },
        ]}
        placements={7}
        countries={3}
        numberOnes={2}
        updated="8 October 2026"
      />,
    );
    const root = parse(html);
    const tiles = [...root.querySelectorAll(`.${mobileLiveStyles.platformNo1}`)];
    expect(tiles.map((t) => t.textContent)).toEqual(["2 at No. 1", "none at No. 1"]);
    expect(tiles[0].classList.contains(mobileLiveStyles.platformNo1None)).toBe(false);
    expect(tiles[1].classList.contains(mobileLiveStyles.platformNo1None)).toBe(true);
    expect(declaredAt(PHONE, ".platformNo1None", "color", 390)).toBe("var(--text-muted)");
  });
});

/** The reading measure every capped surface below must resolve to. */
const MEASURE = "var(--measure)";

describe("MU-06: prose on the song, album, Dai Dai, live-charts and listeners pages stops at the measure", () => {
  // [stylesheet, selector, what production measured on 8 Oct at 1440]
  const SURFACES: [string, string, string][] = [
    ["app/music/[song]/song.module.css", ".blurb", "song and album blurb, 95 a line at max-width: 82ch"],
    ["app/music/[song]/song.module.css", ".faqA", "song and album FAQ answers, 71–79 a line, uncapped"],
    ["app/dai-dai/dai-dai.module.css", ".faqA", "Dai Dai FAQ answers (EN and ES), 91–97 a line, uncapped"],
    ["app/components/DaiDaiReplay.module.css", ".foot", "Dai Dai replay footnote, 184 a line, uncapped"],
    ["app/live-charts/liveCharts.module.css", ".source", "live-charts source note, 146 a line at 104ch"],
    ["app/music/listeners/listeners.module.css", ".note", "listeners footnote, 123 a line at 84ch"],
  ];
  it.each(SURFACES)("%s %s", (file, selector) => {
    for (const w of [1440, 1024]) expect(declaredAt(css(file), selector, "max-width", w)).toBe(MEASURE);
  });
  it("the measure is the reading scale's 62ch", () => {
    expect(css("app/globals.css").match(/--measure:\s*([^;]+);/g)).toEqual(["--measure: 62ch;"]);
  });
});

describe("B-14: the board keeps the reading scale", () => {
  const HUB = css("app/afrobeats/afrobeats.module.css");
  const ARTIST = css("app/afrobeats/[artist]/artist.module.css");
  const CHARTS = css("app/records/charts/charts.module.css");

  it("the hub lede is the scale's lede at the measure (was 16px at 660px, 91 a line)", () => {
    expect(declaredAt(HUB, ".lede", "font-size", 1440)).toBe("var(--type-lede)");
    expect(declaredAt(HUB, ".lede", "line-height", 1440)).toBe("var(--type-lede-lh)");
    expect(declaredAt(HUB, ".lede", "max-width", 1440)).toBe(MEASURE);
  });

  // [stylesheet, selector, what production measured on 8 Oct at 1440]
  const CAPPED: [string, string, string][] = [
    ["hub", ".foot", "hub foot line, 219 a line, uncapped"],
    ["artist", ".faqA", "artist FAQ answers, 104–108 a line at 72ch"],
    ["artist", ".provenance", "provenance line, 129–132 a line at 760px"],
    ["charts", ".source", "board and /records/charts source note, 118 a line, uncapped"],
  ];
  const sheet = { hub: HUB, artist: ARTIST, charts: CHARTS } as const;
  it.each(CAPPED)("%s %s stops at the measure", (file, selector) => {
    for (const w of [1440, 1024]) expect(declaredAt(sheet[file as keyof typeof sheet], selector, "max-width", w)).toBe(MEASURE);
  });

  it("the charts lede was already at the measure's 62ch (822px live at 20px) and stays there", () => {
    expect(declaredAt(CHARTS, ".lede", "max-width", 1440)).toBe("62ch");
  });
});

describe("C-08: the prose pages stop at the measure", () => {
  // [stylesheet, selector, what production measured on 8 Oct at 1440]
  const CAPPED: [string, string, string][] = [
    ["app/faq/faq.module.css", ".a", "/faq answers, 72 a line at 760px"],
    ["app/press/press.module.css", ".p", "/press paragraphs, 15.5px at 72ch"],
    ["app/press/press.module.css", ".small", "/press certified-units note, 88 a line at 13px, uncapped"],
    ["app/curator/curator.module.css", ".p", "/curator paragraphs, 15.5px at 72ch"],
    ["app/about/about.module.css", ".tText", "/about timeline text, 82ch"],
    ["app/methodology/methodology.module.css", ".rejectReason", "/methodology claims answers, 80 a line, uncapped"],
  ];
  it.each(CAPPED)("%s %s", (file, selector) => {
    for (const w of [1440, 1024]) expect(declaredAt(css(file), selector, "max-width", w)).toBe(MEASURE);
  });

  it("/press and /curator set their prose in the scale's steps, not 15.5px and 13px literals", () => {
    for (const file of ["app/press/press.module.css", "app/curator/curator.module.css"]) {
      expect(declaredAt(css(file), ".p", "font-size", 1440)).toBe("var(--type-body)");
      expect(declaredAt(css(file), ".p", "line-height", 1440)).toBe("var(--type-body-lh)");
    }
    expect(declaredAt(css("app/press/press.module.css"), ".small", "font-size", 1440)).toBe("var(--type-small)");
  });
});

describe("R-26: the Records notes stop at the measure", () => {
  // [stylesheet, selector, what production measured on 8 Oct]
  const CAPPED: [string, string, string][] = [
    ["app/records/records.module.css", ".sourceNote", "/records box-office source note, 152 a line, uncapped"],
    ["app/records/cars/cars.module.css", ".noteText", "cars note box, 91 a line at 92ch"],
    ["app/records/cars/cars.module.css", ".noteFine", "cars note box fine print, 92ch"],
    ["app/records/firsts/firsts.module.css", ".text", "firsts detail lines, 91 a line at 92ch"],
    ["app/records/awards/awards.module.css", ".faqA", "awards FAQ answers, 93 a line at 1024, uncapped"],
  ];
  it.each(CAPPED)("%s %s", (file, selector) => {
    for (const w of [1440, 1024]) expect(declaredAt(css(file), selector, "max-width", w)).toBe(MEASURE);
  });
});

describe("CC-12: the year note on /certifications is a sentence in ink at the measure", () => {
  const CERTS = css("app/certifications/certifications.module.css");
  it("not gold, and not 178 characters wide", () => {
    // Production on 8 Oct: `.yearNote { color: var(--gold); font-size: 13.5px; margin: 0 0 18px; }`.
    expect(declaredAt(CERTS, ".yearNote", "color", 1440)).not.toMatch(/gold/);
    expect(declaredAt(CERTS, ".yearNote", "color", 1440)).toBe("var(--text-body)");
    expect(declaredAt(CERTS, ".yearNote", "max-width", 1440)).toBe(MEASURE);
  });
});

describe("R-06: the \"← Career records\" pill on /records/firsts and /records/awards is the site's button", () => {
  // The legacy text-link rule that sat over .btn, verbatim as it shipped in both files.
  const SHIPPED = `.back {
  display: inline-block;
  margin: 0 0 60px;
  font-family: var(--font-mono), monospace;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  color: var(--gold);
}`;
  const OVERRIDES = ["display", "font-size", "color", "letter-spacing", "margin"];

  it("negative control: the shipped rule overrides the button's box and label", () => {
    for (const prop of OVERRIDES) expect(declared(SHIPPED, ".back", prop), prop).not.toEqual([]);
  });

  it.each(["app/records/firsts/firsts.module.css", "app/records/awards/awards.module.css"])("%s: .back only spaces the pill", (file) => {
    for (const prop of OVERRIDES) expect(declared(css(file), ".back", prop), prop).toEqual([]);
    expect(declared(css(file), ".back", "margin-top")).toEqual(["18px"]);
  });
});

describe("R-07: the awards FAQ is the design's ruled list, not bordered cards with no padding", () => {
  const AWARDS = css("app/records/awards/awards.module.css");
  it("one .faqItem rule: 20px 0 and a bottom rule, as Records - Awards.dc.html draws it", () => {
    // Production on 8 Oct merged a legacy card (18px 20px padding, a full
    // border, bg-soft) with the design's row (20px 0): a box whose text sat
    // 1px inside its border, the two rows of cards touching.
    expect(declared(AWARDS, ".faqItem", "padding")).toEqual(["20px 0"]);
    expect(declared(AWARDS, ".faqItem", "border")).toEqual([]);
    expect(declared(AWARDS, ".faqItem", "background")).toEqual([]);
    expect(declared(AWARDS, ".faqItem", "border-bottom")).toEqual(["1px solid var(--line)"]);
  });
});
