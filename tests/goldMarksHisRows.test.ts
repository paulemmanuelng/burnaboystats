import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { revenueShows } from "../app/data/tourRevenue";
import { rules, decl } from "./fixtures/cssRules";

// SCOPE OF THE RULE (Paul, 4 Oct 2026, ruling on c6 / tyla-totals-10).
// "Gold marks Burna, and only Burna" governs MIXED lists: board rows, ranks,
// leaders, head-to-heads — anywhere his figures sit beside other artists'.
// It does NOT govern a board artist's OWN page: asked "should gold stay
// Burna-only there too?", the owner said "no, do what's best", and the call is
// that the page's subject keeps gold on its own headline figures — the desktop
// "By the numbers" lead card (.numLead .numValue in artist.module.css) and the
// phone hero's total (mobileCerts.module.css .total, shared with Burna's own
// screen). The kicker above that total was gold too until the Job 0 gold budget
// (8 Oct 2026, J0-1: "kicker text is never gold"), which is later and wins; it
// is --text-muted now. The "own page" describe block below pins the exception
// so nobody "fixes" it into --text.
//
// The Job 0 gold budget (design review 8 Oct 2026, J0-1 with fixes 1 and 15)
// is the last block: gold marks him, what is live and the one action, and
// never a label, a year, a tag, a kicker, a count at rest or a heading.
//
// Gold marks HIS nights. Both revenue boards list other artists too — more than
// half of the rows on /records/tours/revenue, and Fally Ipupa's La Défense Arena night
// sits third in the top ten on /records/tours — so a gold gross applied to every
// row says the whole board is Burna Boy's. mobileRevenue.module.css had always
// scoped it (.gross muted, .grossHis gold); the two desktop boards had not.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

/** The colour declared for a class, from its own rule block. */
const colorOf = (css: string, cls: string): string | null => {
  const m = new RegExp(`\\.${cls}\\s*\\{([^}]*)\\}`).exec(css);
  if (!m) return null;
  const c = /color:\s*([^;]+);/.exec(m[1]);
  return c ? c[1].trim() : null;
};

const BOARDS: { what: string; css: string; tsx: string; base: string; his: string; ns?: string }[] = [
  {
    what: "the revenue board",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/components/RevenueBoard.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    // The runs were all his until Wizkid's O2 run joined them (3 Oct 2026); a
    // gold-by-default run gross would print his money. Since 4 Oct 2026 they
    // are the board's "Multi-night runs" chip, in the board's own rows, so
    // their gross takes the board's classes in RevenueBoard.tsx (the section
    // beneath the board, with .standGross / .standGrossHis, is gone).
    what: "the multi-night runs in the desktop board's runs chip",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/components/RevenueBoard.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    // The record night (N6, 4 Oct 2026): its figure is gold only while the
    // night is his — the design drew it gold whoever held No. 1.
    what: "the record-night card on the desktop shows page",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/records/tours/revenue/page.tsx",
    base: "recordFigure",
    his: "recordFigureHis",
  },
  {
    // The phone's record card: .recordFigure prints in ink and only
    // .recordFigureHis, applied while the night is his, carries the gold —
    // the same shape as the desktop card (review of #413).
    what: "the record-night card on the phone shows screen",
    css: "app/components/mobileRevenue.module.css",
    tsx: "app/components/MobileRevenue.tsx",
    base: "recordFigure",
    his: "recordFigureHis",
  },
  // Highest-Grossing Artists by Country, round-1 design (4 Oct 2026): every
  // figure on it that can be his — and is gold only on his rows.
  {
    what: "the country tables' totals on the desktop countries page",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/components/RevenueCountries.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    what: "the best single night in the desktop country tables",
    css: "app/records/tours/revenue/countries/countries.module.css",
    tsx: "app/components/RevenueCountries.tsx",
    base: "bestFig",
    his: "bestHis",
    ns: "own",
  },
  {
    what: "a run's gross inside a desktop country row",
    css: "app/records/tours/revenue/countries/countries.module.css",
    tsx: "app/components/RevenueCountries.tsx",
    base: "runFig",
    his: "runHis",
    ns: "own",
  },
  {
    what: "the leader's figure in a desktop country head and continent card",
    css: "app/records/tours/revenue/countries/countries.module.css",
    tsx: "app/components/RevenueCountries.tsx",
    base: "leadFig",
    his: "leadHis",
    ns: "own",
  },
  {
    what: "the phone countries rows' totals",
    css: "app/components/mobileRevenue.module.css",
    tsx: "app/components/MobileRevenueCountries.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    // Review fix 7: his best night was ink on the phone, gold on desktop.
    what: "the best single night in the phone countries rows",
    css: "app/components/mobileRevenueCountries.module.css",
    tsx: "app/components/MobileRevenueCountries.tsx",
    base: "bestFig",
    his: "bestHis",
    ns: "own",
  },
  {
    what: "a run's gross inside a phone country row",
    css: "app/components/mobileRevenueCountries.module.css",
    tsx: "app/components/MobileRevenueCountries.tsx",
    base: "runFig",
    his: "runHis",
    ns: "own",
  },
  {
    what: "the leader's figure in a phone country head and continent row",
    css: "app/components/mobileRevenueCountries.module.css",
    tsx: "app/components/MobileRevenueCountries.tsx",
    base: "leadFig",
    his: "leadHis",
    ns: "own",
  },
  {
    what: "the top-ten table on /records/tours",
    css: "app/records/tours/tours.module.css",
    tsx: "app/records/tours/page.tsx",
    base: "grossCell",
    his: "grossCellHis",
  },
  {
    what: "the mobile revenue list",
    css: "app/components/mobileRevenue.module.css",
    tsx: "app/components/MobileRevenue.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    // The /records hub's box-office table (found while shooting the 3 Oct
    // debug fixes): Fally Ipupa's La Défense Arena night sits third, and his
    // $3.16M printed gold on both layouts.
    what: "the box-office table on the desktop /records hub",
    css: "app/records/records.module.css",
    tsx: "app/records/page.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    what: "the box-office list on the phone /records hub",
    css: "app/components/mobileRecords.module.css",
    tsx: "app/components/MobileRecords.tsx",
    base: "showGross",
    his: "showGrossHis",
  },
];

describe("gold marks Burna Boy's grosses, not everyone's", () => {
  it("both boards actually list other artists — otherwise this test proves nothing", () => {
    const others = revenueShows.filter((s) => s.artist !== "Burna Boy");
    expect(others.length).toBeGreaterThan(0);
    expect(
      revenueShows.slice(0, 10).filter((s) => s.artist !== "Burna Boy").length,
      "the top ten is all his, so the top-ten table cannot show the bug",
    ).toBeGreaterThan(0);
  });

  it.each(BOARDS.map((b) => [b.what, b] as const))("%s: the base gross is not gold", (_w, b) => {
    const css = read(b.css);
    expect(colorOf(css, b.base), `${b.base} has no colour declared`).not.toBeNull();
    expect(
      colorOf(css, b.base),
      `${b.base} is gold by default, so every artist's gross reads as his`,
    ).not.toMatch(/--gold/);
  });

  it.each(BOARDS.map((b) => [b.what, b] as const))("%s: only the his-variant is gold", (_w, b) => {
    expect(colorOf(read(b.css), b.his), `${b.his} must carry the gold`).toMatch(/--gold/);
  });

  it.each(BOARDS.map((b) => [b.what, b] as const))("%s: applies it conditionally", (_w, b) => {
    const tsx = read(b.tsx);
    const ns = b.ns ?? "styles";
    expect(
      new RegExp(`${ns}\\.${b.his}\\b`).test(tsx),
      `${b.tsx} never references ${b.his}, so the gold can never appear`,
    ).toBe(true);
    expect(
      unconditional(tsx, b.his, ns),
      `${b.tsx} applies ${b.his} outside a "his ? … : …" branch, so it is gold for everyone`,
    ).toEqual([]);
  });
});

/** Every reference to styles.<cls> that is NOT the truthy branch of a ternary
 *  ("cond ? styles.cls : …") — i.e. a class that is applied whoever's row it is. */
const unconditional = (tsx: string, cls: string, ns = "styles"): string[] =>
  [...tsx.matchAll(new RegExp(`(.{0,40})${ns}\\.${cls}\\b`, "g"))]
    .filter((m) => !/\?\s*$/.test(m[1]))
    .map((m) => m[0].trim());

describe("the conditional check: negative control", () => {
  it("catches the phone record card as #413 first shipped it (151396b7)", () => {
    // MobileRevenue.tsx at 151396b7, verbatim: the gold .statValue was on the
    // figure for every artist, and the old BOARDS entry named it the his-class.
    const shipped = '<span className={`${styles.statValue} ${styles.recordFigure} ${record.his ? "" : styles.recordOther}`}>';
    expect(unconditional(shipped, "statValue")).not.toEqual([]);
    // …and passes the line as it ships now.
    expect(unconditional(read("app/components/MobileRevenue.tsx"), "recordFigureHis")).toEqual([]);
  });
});

describe("the /records hub: negative control", () => {
  it("the gross rules as they shipped at 6005ca8e are caught", () => {
    // records.module.css:212 and mobileRecords.module.css:216, verbatim.
    const desktop = `.gross {
  text-align: right;
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 19px;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
}`;
    const phone = `.showGross {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
  flex: none;
}`;
    expect(colorOf(desktop, "gross")).toMatch(/--gold/);
    expect(colorOf(phone, "showGross")).toMatch(/--gold/);
  });

  it("the hub shows another artist in its rows, so the rule is exercised", () => {
    // app/records/page.tsx feeds both layouts revenueShows.slice(0, 8).
    expect(revenueShows.slice(0, 8).some((s) => s.artist !== "Burna Boy")).toBe(true);
  });
});

// The rank cell and his name (debug pass 3 Oct 2026, bo-01 and C2; the owner,
// 4 Oct 2026, N4). #408 kept gold on HIS top-three ranks and his No. 1s, and
// his name printed gold on both pages. The rule now: gold = his figures only —
// his name and every rank take the same ink as everyone else's.
describe("gold marks his figures only: never a rank, never his name", () => {
  const BOARD_CSS = read("app/records/tours/revenue/revenue.module.css");

  it("neither box-office page lights a rank", () => {
    for (const f of ["app/components/RevenueBoard.tsx", "app/components/RevenueCountries.tsx", "app/components/MobileRevenue.tsx"]) {
      expect(read(f), f).not.toMatch(/styles\.rankTop/);
    }
    expect(BOARD_CSS).not.toMatch(/\.rankTop\s*\{/);
    for (const cls of ["rank", "showRank"]) expect(colorOf(BOARD_CSS, cls), cls).not.toMatch(/--gold/);
  });

  it("his name is set in the same ink as every other name", () => {
    expect(colorOf(BOARD_CSS, "hisName")).toBe(colorOf(BOARD_CSS, "otherName"));
    expect(colorOf(BOARD_CSS, "hisName")).not.toMatch(/--gold/);
  });

  it("negative control: the rules as #408 shipped them (a7530590) are caught", () => {
    // revenue.module.css at a7530590, verbatim.
    const shipped = `.rankTop { color: var(--gold); }
.hisName { font-weight: 600; font-size: 14.5px; color: var(--gold); }
.otherName { font-weight: 600; font-size: 14.5px; color: var(--text); }`;
    expect(colorOf(shipped, "rankTop")).toMatch(/--gold/);
    expect(colorOf(shipped, "hisName")).not.toBe(colorOf(shipped, "otherName"));
  });

  it("the data still puts another artist in the board's top three, so the rule is exercised", () => {
    expect(revenueShows.slice(0, 3).some((s) => s.artist !== "Burna Boy")).toBe(true);
  });
});

// The exception, pinned (Paul, 4 Oct 2026). A board artist's own page is not a
// mixed list: its lead figure is its subject's, as Burna's is on his. The
// mixed cell on the same page — the head-to-head — still gives gold to Burna
// only, and that is asserted here too, so the two halves of the ruling cannot
// drift into each other.
describe("a board artist's own page keeps gold for its own headline (ruling, 4 Oct 2026)", () => {
  const block = (css: string, selector: string) => {
    const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    const m = new RegExp(`(^|\\n)${esc}\\s*\\{([^}]*)\\}`).exec(css);
    return m ? m[2] : null;
  };
  const colour = (css: string, selector: string) => /color:\s*([^;]+);/.exec(block(css, selector) ?? "")?.[1].trim() ?? null;

  it("the desktop lead card's value is gold", () => {
    expect(colour(read("app/afrobeats/[artist]/artist.module.css"), ".numLead .numValue")).toBe("var(--gold)");
  });

  it("the phone hero's total is gold; its kicker is --text-muted (J0-1: kicker text is never gold)", () => {
    const css = read("app/components/mobileCerts.module.css");
    expect(colour(css, ".total")).toBe("var(--gold)");
    expect(colour(css, ".kicker")).toBe("var(--text-muted)");
  });

  it("the head-to-head on the same page still gives gold to Burna only", () => {
    const tsx = read("app/afrobeats/[artist]/page.tsx");
    expect(tsx).toMatch(/rival\.isBurna \? `\$\{styles\.compareValue\} \$\{styles\.compareGold\}` : styles\.compareValue/);
    // The plain cell declares no colour of its own (it inherits the text
    // colour); only the Burna variant adds gold.
    expect(colorOf(read("app/afrobeats/[artist]/artist.module.css"), "compareValue") ?? "inherited").not.toMatch(/--gold/);
    expect(colorOf(read("app/afrobeats/[artist]/artist.module.css"), "compareGold")).toBe("var(--gold)");
  });

  it("negative control: the selector reader sees the rule as it shipped, and a --text rule as not gold", () => {
    // artist.module.css:160 as shipped since #120 (173a1564, 20 Aug 2026).
    expect(colour(".numLead .numValue { color: var(--gold); }", ".numLead .numValue")).toBe("var(--gold)");
    expect(colour(".numLead .numValue { color: var(--text); }", ".numLead .numValue")).not.toBe("var(--gold)");
  });
});

// ── The Job 0 gold budget (design review 8 Oct 2026, J0-1 + fixes 1 and 15) ──
// Gold marks him, what is live and the one action. On every template it never
// marks kicker text, a year, a tag, a rank, a count at rest, a label or a
// meta line; on a board his name stays ink and only his figure is gold (N4);
// on Home his figures are ink at rest (fix 1); on the /afrobeats hub only his
// plaque-count tile and the rails are gold (fix 15). Every selector below was
// gold when J0-1 was built (gold census, d3c39eda) and is not gold now.
const GOLD_TOKEN = /--gold|--color-accent|--display-ramp|--floor-|--map-played|#945e00|#ffb627/i;
const TEXT_PROPS = ["color", "-webkit-text-fill-color", "-webkit-text-stroke"] as const;
/** Every rule (any @media) whose selector list contains `sel` exactly. */
const rulesFor = (css: string, sel: string) =>
  rules(css).filter((r) => r.selector.split(",").map((x) => x.trim()).includes(sel));
/** The gold text declarations `sel` still carries, anywhere in the sheet. */
const goldText = (css: string, sel: string) =>
  rulesFor(css, sel).flatMap((r) =>
    TEXT_PROPS.map((p) => [p, decl(r.body, p)] as const).filter(([, v]) => v && GOLD_TOKEN.test(v)).map(([p, v]) => `${p}: ${v}`),
  );

const NEVER_GOLD: Record<string, string[]> = {
  "app/about/about.module.css": [".tYear"],
  "app/afrobeats/[artist]/artist.module.css": [".kicker", ".rowCount", ".compareKicker", ".pendingKicker", ".chartCtaKicker", ".chartFig b"],
  "app/afrobeats/afrobeats.module.css": [".anchorTag", ".ruleMark", ".ruleKicker"],
  "app/analysis/analysis.module.css": [".tocNum", ".findingNum"],
  "app/api/api.module.css": [".badgeLicence", ".code", ".note code", ".caveatNum"],
  "app/certifications/certifications.module.css": [".focusBar b", ".filterMeta b"],
  "app/compare/compare.module.css": [".whyMark", ".cbThChevron"],
  "app/components/BirthdayCelebration.module.css": [".title"],
  "app/components/FollowPanel.module.css": [".eyebrow", ".installed"],
  "app/components/GlobeTeaser.module.css": [".kicker", ".num"],
  "app/components/ListenerMap.module.css": [".cardCount"],
  "app/components/PeakMap.module.css": [".tipPeak"],
  "app/components/StatCardMaker.module.css": [".previewLabel"],
  "app/components/SubscribeBox.module.css": [".kicker", ".bang"],
  "app/components/TierDonut.module.css": [".active .legendLabel"],
  "app/components/certLedger.module.css": [".kicker", ".certs"],
  "app/components/faqList.module.css": [".glyph"],
  "app/components/mobileAbout.module.css": [".tYear"],
  "app/components/mobileAfricasBiggest.module.css": [".boardBadgeLeads", ".rowHis .rank", ".rowHis .rowName", ".rowHis .rowSub", ".yearPillHis"],
  "app/components/mobileAfrobeatsHub.module.css": [".anchorTag"],
  "app/components/mobileAnalysis.module.css": [".findingKicker", ".statValue"],
  "app/components/mobileApi.module.css": [".verb", ".codeLine"],
  "app/components/mobileAwards.module.css": [".tallyWon", ".honourYear"],
  "app/components/mobileCerts.module.css": [".kicker", ".chip", ".focusBar b", ".rowCount", ".logKicker", ".albumTag", ".badgeMore[aria-expanded=\"true\"]"],
  "app/components/mobileDeepPage.module.css": [".rowLead .rank", ".rowLead .rowTitle", ".rowLead .rowValue", ".rowAccent .rank", ".rowAccent .rowValue", ".groupName", ".tileLead .tileRank"],
  "app/components/mobileHome.module.css": [".sectionKicker", ".railPeak"],
  "app/components/mobileListeners.module.css": [".cityCount", ".regionCount"],
  "app/components/mobileLiveCharts.module.css": [".kicker", ".sectionLabel", ".platformValue", ".caret", ".pos", ".platformBlockName", ".entryPos"],
  "app/components/mobileMusic.module.css": [".kicker", ".albumTracks"],
  "app/components/mobileOfficialCharts.module.css": [".statValue", ".focusBar b", ".more[aria-expanded=\"true\"]"],
  "app/components/mobileRecords.module.css": [".sectionLabel"],
  "app/components/mobileRevenue.module.css": [".statValue"],
  "app/components/mobileSections.module.css": [".name", ".caret"],
  "app/components/mobileTours.module.css": [".tourGross", ".caret", ".upcomingTag", ".upcomingWhen", ".upcomingDate", ".upcomingFoldGlyph"],
  "app/embed/embed.module.css": [".noteNum"],
  "app/live-charts/liveCharts.module.css": [".hint strong", ".caret", ".platformCardV", ".platformName", ".moveNew"],
  "app/methodology/methodology.module.css": [".principleNum"],
  "app/music/[song]/song.module.css": [".tagline", ".numValueLead", ".mobileBackYear"],
  "app/music/listeners/listeners.module.css": [".kicker"],
  "app/music/music.module.css": [".trackNum", ".cardTracks"],
  "app/page.module.css": [".eyebrow", ".kicker", ".tierKicker", ".tierTotalNum", ".firstYear"],
  "app/records/africas-biggest/africas-biggest.module.css": [".groupCount", ".boxTitleBig", ".leadsBadge", ".rankHim", ".nameHim", ".yearLabelHim", ".chipHim"],
  "app/records/awards/awards.module.css": [".honourOrg", ".filterMeta b"],
  "app/records/cars/[car]/car.module.css": [".baseTag", ".perfBasis", ".provKicker", ".sourceKicker"],
  "app/records/cars/cars.module.css": [".rank", ".highlightLabel", ".tallyNum", ".rankLead", ".usdLead", ".goldFlat", ".tileLead .tileRank", ".tileValue", ".tileLead .tileValue", ".mFormerTitle"],
  "app/records/charts/charts.module.css": [".filterMeta b", ".focusBar b", ".albumTag", ".splitNum"],
  "app/records/records.module.css": [".hisName"],
  "app/records/tours/tours.module.css": [".caret", ".grossFig", ".hisName", ".upcomingTag", ".upcomingWhen"],
  "app/records/visualized/visualized.module.css": [".captionLead"],
  "app/search/search.module.css": [".fieldIcon", ".resultsLabel", ".rowStat"],
  "app/timeline/timeline.module.css": [".eyebrow", ".eraSpan", ".todayKicker", ".todayValue"],
};

/** Tags and badges that turned into the one ink outline tag (J0-6 grammar):
 *  ink label, a --rule edge (or --btn-edge for a pressable pill), no wash. */
const INK_TAGS: [file: string, sel: string, edge: string | null][] = [
  ["app/afrobeats/afrobeats.module.css", ".anchorTag", "var(--rule)"],
  ["app/components/mobileAfrobeatsHub.module.css", ".anchorTag", "var(--rule)"],
  ["app/api/api.module.css", ".badgeLicence", "var(--rule)"],
  ["app/components/FollowPanel.module.css", ".installed", "var(--rule)"],
  ["app/components/mobileAfricasBiggest.module.css", ".boardBadgeLeads", "var(--rule)"],
  ["app/records/africas-biggest/africas-biggest.module.css", ".leadsBadge", "var(--rule)"],
  ["app/components/mobileHome.module.css", ".railPeak", "var(--rule)"],
  ["app/components/mobileTours.module.css", ".upcomingTag", "var(--rule)"],
  ["app/records/tours/tours.module.css", ".upcomingTag", "var(--rule)"],
  ["app/records/cars/[car]/car.module.css", ".baseTag", "var(--rule)"],
  ["app/components/mobileAfricasBiggest.module.css", ".yearPillHis", "var(--btn-edge)"],
  ["app/components/mobileCerts.module.css", '.badgeMore[aria-expanded="true"]', "var(--btn-edge)"],
  ["app/records/africas-biggest/africas-biggest.module.css", ".groupCount", null],
  ["app/records/africas-biggest/africas-biggest.module.css", ".chipHim", null],
];
const edgeOf = (body: string) => decl(body, "border-color") ?? decl(body, "border")?.match(/var\(--[\w-]+\)/)?.[0];

/** Gold that stays, each with the ruling that keeps it — so the budget above
 *  cannot be "completed" into deleting them. */
const STAYS_GOLD: [file: string, sel: string, why: string][] = [
  ["app/afrobeats/[artist]/artist.module.css", ".numLead .numValue", "a board artist's own lead figure (Paul, 4 Oct 2026)"],
  ["app/afrobeats/[artist]/artist.module.css", ".compareGold", "his head-to-head cell"],
  ["app/components/mobileCerts.module.css", ".total", "the hero figure"],
  ["app/afrobeats/afrobeats.module.css", ".tileAnchor .tileStat strong", "fix 15: his plaque-count tile"],
  ["app/components/mobileAfrobeatsHub.module.css", ".doorStat strong", "fix 15: his plaque-count tile, phone"],
  ["app/afrobeats/afrobeats.module.css", ".railNum", "fix 15: the rails stay gold for every artist (ruling 5 Oct)"],
  ["app/components/mobileAfrobeatsHub.module.css", ".pillNum", "fix 15: the rails, phone"],
  ["app/live-charts/liveCharts.module.css", ".summaryCell:first-child .summaryValue", "the page's live figure (C-4)"],
  ["app/components/mobileLiveCharts.module.css", ".summaryCell:first-child .summaryValue", "the page's live figure, phone (C-4)"],
  ["app/api/api.module.css", ".note a", "a text link (the .note code half went ink)"],
];

describe("J0-1: the gold budget — what is never gold", () => {
  it.each(Object.entries(NEVER_GOLD))("%s: none of its listed selectors carries gold text", (file, sels) => {
    const css = read(file);
    for (const sel of sels) {
      expect(rulesFor(css, sel).length, `${file} ${sel} is gone — update the table`).toBeGreaterThan(0);
      expect(goldText(css, sel), `${file} ${sel}`).toEqual([]);
    }
  });

  it.each(INK_TAGS)("%s %s is an ink outline tag: ink label, no gold edge or wash", (file, sel, edge) => {
    const hits = rulesFor(read(file), sel);
    expect(hits.length).toBeGreaterThan(0);
    for (const r of hits) expect(r.body, `${sel} still carries a gold edge or wash`).not.toMatch(GOLD_TOKEN);
    const last = hits[hits.length - 1].body;
    expect(decl(last, "color")).toBe("var(--text)");
    if (edge) expect(edgeOf(last)).toBe(edge);
  });

  it.each(STAYS_GOLD)("%s %s stays gold: %s", (file, sel) => {
    const v = rulesFor(read(file), sel).map((r) => decl(r.body, "color")).filter(Boolean).pop();
    expect(v).toMatch(/--gold/);
  });

  it("Home: his figures are ink at rest (fix 1); the scoreboard numerals turn gold on hover only (#238)", () => {
    const home = read("app/page.module.css");
    expect(goldText(home, ".tierTotalNum")).toEqual([]);
    expect(goldText(read("app/components/GlobeTeaser.module.css"), ".num")).toEqual([]);
    expect(goldText(read("app/components/certLedger.module.css"), ".certs")).toEqual([]);
    expect(rulesFor(home, ".scoreCell:hover .scoreValue").map((r) => decl(r.body, "color")).pop()).toBe("var(--gold)");
  });

  it("the /search Records tag, the phone RE-ENTRY marker, the /afrobeats scatter name and the error-page kicker are not gold", () => {
    expect(read("app/components/SearchResults.tsx").match(/Records:\s*\[[^\]]*\]/)?.[0]).toBe('Records: ["var(--text)", "var(--rule)"]');
    const re = read("app/components/MobileLiveCharts.tsx").match(/label: "RE-ENTRY", ink: "[^"]*"/)?.[0];
    expect(re).toBeDefined();
    expect(re).not.toMatch(GOLD_TOKEN);
    const name = read("app/components/HubScatter.tsx").match(/<text\b[^>]*>\s*\{d\.anchor \? d\.name\.toUpperCase\(\)/)?.[0];
    expect(name).toBeDefined();
    expect(name).not.toMatch(GOLD_TOKEN);
    const kicker = read("app/global-error.tsx").match(/style=\{\{[^}]*\}\}\s*>\s*Burna Boy Stats/)?.[0];
    expect(kicker).toBeDefined();
    expect(kicker).not.toMatch(GOLD_TOKEN);
  });

  it("the desktop NEW marker is green, as the phone prints it (C-17)", () => {
    expect(rulesFor(read("app/live-charts/liveCharts.module.css"), ".moveNew").map((r) => decl(r.body, "color")).pop()).toBe("var(--green)");
    expect(read("app/components/MobileLiveCharts.tsx")).toMatch(/label: "NEW", ink: "var\(--green\)"/);
  });

  it("negative control: the shipped rules and lines are caught", () => {
    // app/components/mobileCerts.module.css .kicker and app/page.module.css
    // .eyebrow on main d3c39eda, verbatim.
    const kicker = `.kicker {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--gold);
}`;
    const eyebrow = `.eyebrow {
  font-family: var(--font-mono), monospace;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.72rem;
  color: var(--gold);
  margin-bottom: 14px;
}.tierHead .eyebrow {
  margin-bottom: 0;
}`;
    expect(colorOf(kicker, "kicker")).toMatch(/--gold/);
    expect(goldText(kicker, ".kicker")).toEqual(["color: var(--gold)"]);
    expect(goldText(eyebrow, ".eyebrow")).toEqual(["color: var(--gold)"]);
    // A stroke-only numeral (analysis.module.css .findingNum as shipped).
    expect(goldText(".findingNum { color: transparent; -webkit-text-stroke: 1px var(--gold); }", ".findingNum")).toEqual(["-webkit-text-stroke: 1px var(--gold)"]);
    // The shipped TSX lines (MobileLiveCharts.tsx:37, SearchResults.tsx:29,
    // HubScatter.tsx:240 on d3c39eda).
    expect('if (e.status === "re") return { label: "RE-ENTRY", ink: "var(--gold-bright)" };'.match(/label: "RE-ENTRY", ink: "[^"]*"/)![0]).toMatch(GOLD_TOKEN);
    expect('Records: ["var(--gold-bright-ink)", "color-mix(in srgb, var(--gold-bright-ink) 45%, transparent)"],'.match(/Records:\s*\[[^\]]*\]/)![0]).toMatch(GOLD_TOKEN);
    const shippedText = `<text
                      x={p.dx}
                      y={p.dy}
                      textAnchor={p.anchor}
                      fontFamily="var(--font-mono), monospace"
                      fontSize={TYPE}
                      fill={d.anchor ? "var(--gold-bright-ink)" : "var(--text)"}
                    >
                      {d.anchor ? d.name.toUpperCase() : d.name}`;
    expect(shippedText.match(/<text\b[^>]*>\s*\{d\.anchor \? d\.name\.toUpperCase\(\)/)![0]).toMatch(GOLD_TOKEN);
    // The shipped "He leads" badge (mobileAfricasBiggest.module.css) fails the tag rule.
    const leads = `.boardBadgeLeads {
  border-color: var(--gold);
  background-color: var(--gold-fill);
  background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%);
  color: var(--ink-on-gold);
}`;
    expect(rulesFor(leads, ".boardBadgeLeads")[0].body).toMatch(GOLD_TOKEN);
  });
});
