import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/by-the-numbers",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ByTheNumbersPage from "../app/records/by-the-numbers/page";
import { stats, type Freshness } from "../app/data/byTheNumbers";
import { CERTS_VERIFIED_ON } from "../app/data/certifications";
import { AWARDS_EDITED_ON, honours } from "../app/data/awards";
import { BURNA_LAST_CHART_SWEEP } from "../app/data/charts";
import { REVENUE_READ_ON } from "../app/lib/revenueSource";
import { HOT100_READ_ON } from "../app/data/hot100Weeks";
import { BURNA_HOT_100_ENTRIES_READ_ON } from "../app/data/africasBiggest";
import { BURNA_PEAK_LISTENERS_SET_ON, BURNA_YT_AUDIENCE_SET_ON } from "../app/data/africasBiggest";
import { SPOTIFY_STREAMS_PUBLISHED_ON, youtubeTotalViewsAsOf } from "../app/data/streamingTotals";
import { SPOTIFY_RANK_READ_ON } from "../app/data/spotify";
import { TOURS_EDITED_ON } from "../app/data/tours";
import { albums } from "../app/data/albums";
import { WORLD_CUP_OPENING_ON } from "../app/data/liveMoments";
import { lastUpdated } from "../app/lib/api";
import { provDateText, type ProvDate } from "../app/lib/provenance";
import config from "../scripts/watched-metrics.json";
import { decl, rules, winning } from "./fixtures/cssRules";
import btn from "../app/records/by-the-numbers/byTheNumbers.module.css";
import deep from "../app/components/mobileDeepPage.module.css";

/**
 * /records/by-the-numbers, design review 8 Oct 2026, J1-13 (fixes 23 and 31).
 *
 * Every one of the fifteen figures carries the date behind it — read off the
 * constant that dates it, labelled by how the figure is kept current — on
 * both layouts; the figures sit in a fixed slot (72px desktop, 52px phone) so
 * a big figure's labels line up with a regular one's; the page stamp is
 * "Updated {lastUpdated}"; and no subtitle says "currently" or carries its own
 * date in prose.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const DOC = parse(renderToStaticMarkup(<ByTheNumbersPage />));
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const desktop = (el: Element) => !!el.closest('[class*="desktopOnly"]');

const DESK_CSS = readFileSync("app/records/by-the-numbers/byTheNumbers.module.css", "utf8");
const PHONE_CSS = readFileSync("app/components/mobileDeepPage.module.css", "utf8");
const DATA_SRC = readFileSync("app/data/byTheNumbers.ts", "utf8");
const any = () => true;

const ukTwoBillionOn = honours.find((h) => h.title === "BRIT Billion Award" && /\b2 billion\b/.test(h.note ?? ""))?.date;
const newestAlbumOn = [...albums.map((a) => a.released ?? "")].sort().pop();

/** Fix 23's table: each figure's kind and the constant behind its date, by label. */
const WANT: Record<string, [Freshness, ProvDate]> = {
  Certifications: ["hand", { label: "Verified", day: CERTS_VERIFIED_ON }],
  "Award wins": ["hand", { label: "Updated", day: AWARDS_EDITED_ON }],
  "No. 1 chart placements": ["hand", { label: "Checked", day: BURNA_LAST_CHART_SWEEP }],
  "Highest-grossing African tour": ["hand", { label: "Read", day: REVENUE_READ_ON }],
  "Biggest concert by an African artist": ["hand", { label: "Read", day: REVENUE_READ_ON }],
  "Billboard Hot 100 entries": ["hand", { label: "Read", day: HOT100_READ_ON }],
  "Spotify monthly listeners, at peak": ["fixed", { label: "Set", day: BURNA_PEAK_LISTENERS_SET_ON }],
  "Spotify streams, all-time": ["daily", { label: "Read", day: SPOTIFY_STREAMS_PUBLISHED_ON }],
  "YouTube views, all-time": ["hand", { label: "Read", day: youtubeTotalViewsAsOf }],
  "YouTube monthly audience, at peak": ["fixed", { label: "Set", day: BURNA_YT_AUDIENCE_SET_ON }],
  "Global rank by Spotify listeners": ["daily", { label: "Read", day: SPOTIFY_RANK_READ_ON }],
  "UK streams": ["fixed", { label: "Set", day: ukTwoBillionOn! }],
  "Countries performed in": ["hand", { label: "Updated", day: TOURS_EDITED_ON }],
  "Studio albums": ["fixed", { label: "Set", day: newestAlbumOn! }],
  "African artist to headline a World Cup opening": ["fixed", { label: "Set", day: WORLD_CUP_OPENING_ON }],
};

const dateTimeOf = (d: ProvDate) => ("day" in d ? d.day : "month" in d ? d.month : undefined);

describe("every figure carries its freshness and the constant behind its date (fix 23)", () => {
  it("fifteen figures, each with the kind and the date fix 23 names", () => {
    expect(stats.length).toBe(15);
    // The Hot 100 date reaches the page through Africa's Biggest, the weeks
    // board's one home, and is HOT100_READ_ON itself.
    expect(BURNA_HOT_100_ENTRIES_READ_ON).toBe(HOT100_READ_ON);
    expect(Object.fromEntries(stats.map((s) => [s.label, [s.freshness, s.date]]))).toEqual(WANT);
  });

  it("each label fits its kind: daily → Read, fixed → Set, asOf → As of a month, hand → Verified/Checked/Read/Updated", () => {
    const fits = (f: Freshness, d: ProvDate) =>
      f === "daily" ? d.label === "Read" && "day" in d
      : f === "fixed" ? d.label === "Set" && "day" in d
      : f === "asOf" ? d.label === "As of" && "month" in d
      : ["Verified", "Checked", "Read", "Updated"].includes(d.label);
    expect(stats.filter((s) => !fits(s.freshness, s.date)).map((s) => s.label)).toEqual([]);
    // Negative controls: a fixed fact labelled Read, a daily one Set, a day "As of".
    expect(fits("fixed", { label: "Read", day: WORLD_CUP_OPENING_ON })).toBe(false);
    expect(fits("daily", { label: "Set", day: SPOTIFY_RANK_READ_ON })).toBe(false);
    expect(fits("asOf", { label: "Read", day: AWARDS_EDITED_ON })).toBe(false);
  });

  it("no date is typed into the stats: no day or month literal in byTheNumbers.ts", () => {
    const literal = /\b(day|month)\s*:\s*["'`]\d/;
    expect(DATA_SRC).not.toMatch(literal);
    expect(DATA_SRC).not.toMatch(/\b\d{4}-\d{2}-\d{2}\b/);
    // Negative control: the shape a typed date would take.
    expect(`date: { label: "Set", day: "2026-06-11" }`).toMatch(literal);
  });

  it("each daily figure's date is a constant the stats bot writes (field: publishedOn)", () => {
    const daily = stats.filter((s) => s.freshness === "daily");
    expect(daily.map((s) => s.label)).toEqual(["Spotify streams, all-time", "Global rank by Spotify listeners"]);
    const targets = config.metrics.flatMap((m) => ((m as { siteTargets?: { anchor: string; field?: string; file: string }[] }).siteTargets ?? []).map((t) => ({ id: m.id, ...t })));
    const want: [string, string, string][] = [
      ["spotify-total-streams", "app/data/streamingTotals.ts", "export const SPOTIFY_STREAMS_PUBLISHED_ON ="],
      ["spotify-listeners-rank", "app/data/spotify.ts", "export const SPOTIFY_RANK_READ_ON ="],
    ];
    for (const [id, file, anchor] of want) {
      const t = targets.find((x) => x.anchor === anchor);
      expect(t, anchor).toMatchObject({ id, file, field: "publishedOn" });
      expect(readFileSync(file, "utf8")).toMatch(new RegExp(`${anchor} "\\d{4}-\\d{2}-\\d{2}";`));
    }
  });
});

describe("both layouts print fifteen date lines from the constants", () => {
  const lines = (onDesktop: boolean) =>
    [...DOC.querySelectorAll("[data-provenance-date]")].filter((el) => desktop(el) === onDesktop && el.closest("a"));

  it.each([
    ["desktop", true],
    ["phone", false],
  ] as const)("%s", (_layout, onDesktop) => {
    const got = lines(onDesktop);
    expect(got.length).toBe(15);
    for (const s of stats) {
      const line = got.find((el) => words(el.closest("a")).includes(s.label));
      expect(line, s.label).toBeDefined();
      expect(line!.querySelector("time")?.getAttribute("datetime"), s.label).toBe(dateTimeOf(s.date));
      expect(words(line), s.label).toBe(`${s.date.label} ${provDateText(s.date)}`);
    }
  });

  it("the desktop date line sits after the sub and before the proof", () => {
    const names = ["numRow", "label", "sub", "asOf", "proof"] as const;
    const cells = [...DOC.querySelectorAll(`a.${btn.stat}`)];
    expect(cells.length).toBe(15);
    for (const cell of cells) {
      const order = [...cell.children].map((c) => names.find((n) => c.classList.contains(btn[n])));
      expect(order).toEqual([...names]);
    }
  });

  it("the phone cell: the figure first, in its slot, then the title, the sub and the date", () => {
    const names = ["figSlot", "figTitle", "rowSub", "figDate"] as const;
    const cells = [...DOC.querySelectorAll(`a.${deep.fig}`)];
    expect(cells.length).toBe(15);
    for (const cell of cells) {
      const order = [...cell.children].map((c) => names.find((n) => c.classList.contains(deep[n])));
      expect(order).toEqual([...names]);
      expect(cell.querySelector(`.${deep.figSlot} .${deep.figValue}`)).not.toBeNull();
    }
    // The other deep-page screens keep the row grammar: no figure cell there.
    expect(DOC.querySelectorAll(`.${deep.row}`).length).toBe(0);
  });
});

describe("the fixed figure slot (fix 31)", () => {
  it("desktop: the 48px and the big 60px figures share one 72px slot's bottom edge", () => {
    expect(winning(DESK_CSS, ".numRow", "height", (m) => m === null)).toBe("72px");
    expect(winning(DESK_CSS, ".numRow", "align-items", (m) => m === null)).toBe("flex-end");
    // No band moves the slot (the 901–1239 band shrinks only the figures).
    const heights = rules(DESK_CSS).filter((r) => r.selector.split(",").map((x) => x.trim()).includes(".numRow")).map((r) => decl(r.body, "height"));
    expect(heights).toEqual(["72px"]);
    // The figures are ink (J0-3).
    expect(winning(DESK_CSS, ".num", "color", any)).toBe("var(--text)");
  });

  it("phone: a 52px slot, the figure Anton 44 / 1 in ink, on its bottom edge", () => {
    expect(winning(PHONE_CSS, ".figSlot", "height", any)).toBe("52px");
    expect(winning(PHONE_CSS, ".figSlot", "align-items", any)).toBe("flex-end");
    expect(winning(PHONE_CSS, ".figValue", "font-size", any)).toBe("44px");
    expect(winning(PHONE_CSS, ".figValue", "line-height", any)).toBe("1");
    expect(winning(PHONE_CSS, ".figValue", "color", any)).toBe("var(--text)");
  });

  it("the date line: mono 700 11 / 0.1em upper case, the label muted, the date in ink", () => {
    for (const [css, line, value] of [
      [DESK_CSS, ".asOf", null],
      [PHONE_CSS, ".figDate", ".figDateValue"],
    ] as const) {
      expect(winning(css, line, "font-family", any)).toMatch(/--font-mono/);
      expect(winning(css, line, "font-weight", any)).toBe("700");
      expect(winning(css, line, "font-size", any)).toBe("11px");
      expect(winning(css, line, "letter-spacing", any)).toBe("0.1em");
      expect(winning(css, line, "text-transform", any)).toBe("uppercase");
      expect(winning(css, line, "color", any)).toBe("var(--text-muted)");
      if (value) expect(winning(css, value, "color", any)).toBe("var(--text)");
    }
  });
});

describe("the page stamp is 'Updated {lastUpdated}' on both layouts (fix 31)", () => {
  const want = `Updated ${provDateText({ label: "Updated", day: lastUpdated })}`;

  it("desktop: the hero stamp", () => {
    const stamp = DOC.querySelector('[class*="desktopOnly"] [class*="freshness"]');
    expect(words(stamp)).toBe(want);
    expect(stamp!.querySelector("time")?.getAttribute("datetime")).toBe(lastUpdated);
  });

  it("phone: the list's meta", () => {
    expect(words(DOC.querySelector('[class*="listMeta"]'))).toBe(want);
  });

  it("negative controls: the stamps as they shipped on 8 Oct 2026 fail", () => {
    // Verbatim from burnaboystats.com/records/by-the-numbers, 8 Oct 2026.
    const shipped = parse(
      `<div class="byTheNumbers-module__n-nFea__desktopOnly"><span class="byTheNumbers-module__n-nFea__freshness"><span class="byTheNumbers-module__n-nFea__freshDot" aria-hidden="true"></span>Updated <!-- -->October 2026</span></div><span class="mobileDeepPage-module__DIyF7a__listMeta">verified October 2026</span>`,
    );
    expect(words(shipped.querySelector('[class*="freshness"]'))).not.toBe(want);
    expect(shipped.querySelector('[class*="freshness"] time')).toBeNull();
    expect(words(shipped.querySelector('[class*="listMeta"]'))).not.toBe(want);
  });
});

describe("no subtitle says 'currently' or dates itself in prose", () => {
  const BAD = /\bcurrently\b|counted by hand on/;

  it("the fifteen subs", () => {
    expect(stats.filter((s) => BAD.test(s.sub)).map((s) => s.sub)).toEqual([]);
  });

  it("negative controls: the two subs as they shipped on 8 Oct 2026", () => {
    expect("where he currently sits among every artist worldwide").toMatch(BAD);
    expect("every video on his YouTube channel — counted by hand on 14 September 2026").toMatch(BAD);
  });
});
