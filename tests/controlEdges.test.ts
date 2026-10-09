import { describe, it, expect } from "vitest";
import { decl, read, rules } from "./fixtures/cssRules";
import { THEMES, tokenContrast } from "./fixtures/tokenColours";

/**
 * Job 0 · J0-11 (design review 8 Oct 2026, panel 8): if you can press it and
 * its edge is what shows it, the edge is --btn-edge (3.95 / 3.78 : 1 on the
 * page). Everything else is --line (1.28 / 1.31) or --border: cards, rows,
 * dividers, table rules and tiles are decoration.
 *
 * Controls: unselected chips, secondary and icon buttons, segmented frames,
 * inputs, the search pill, the back circle, the switch track. The masthead's
 * search pill and theme flip moved in Job 0's last commit (the masthead lands
 * once).
 */

const EDGE = "var(--btn-edge)";
/** Every rule whose selector list is exactly `sel` (any media). */
const exact = (css: string, sel: string) => {
  const want = sel.split(",").map((s) => s.trim());
  return rules(css).filter((r) => {
    const got = r.selector.split(",").map((s) => s.trim());
    return got.length === want.length && got.every((s, i) => s === want[i]);
  });
};
/** The edge colour each rule draws: from border / border-color, a divider's side border, or the switch track's inset ring. */
const edges = (css: string, sel: string) =>
  exact(css, sel)
    .map((r) => {
      const b = decl(r.body, "border");
      if (b && b !== "0" && b !== "none") return b.replace(/^1px (solid|dashed) /, "");
      const bc = decl(r.body, "border-color");
      if (bc) return bc;
      // a segment's divider
      const side = decl(r.body, "border-right") ?? decl(r.body, "border-left");
      if (side) return side.replace(/^1px (solid|dashed) /, "");
      const inset = decl(r.body, "box-shadow")?.match(/^inset 0 0 0 1px (.+)$/)?.[1];
      return inset;
    })
    .filter((v): v is string => v !== undefined);

// [file, selector, what it is]
const CONTROLS: [string, string, string][] = [
  // unselected chips — desktop
  ["app/certifications/certifications.module.css", ".fChip", "filter chips (both blocks)"],
  ["app/records/awards/awards.module.css", ".fChip", "filter chips"],
  ["app/records/charts/charts.module.css", ".fChip", "filter chips"],
  ["app/search/search.module.css", ".chip", "section filter chips"],
  ["app/updates/updates.module.css", ".chip", "category chips"],
  ["app/components/StatCardMaker.module.css", ".chip", "/share record chips"],
  ["app/music/[song]/song.module.css", ".pick", "the song picker"],
  ["app/faq/faq.module.css", ".jumpChip", "jump chips"],
  ["app/records/firsts/firsts.module.css", ".jumpChip", "jump chips"],
  ["app/timeline/timeline.module.css", ".jumpChip", "jump chips"],
  ["app/compare/compare.module.css", ".chip", "suggestion chips (links)"],
  // unselected chips — phone
  ["app/components/mobileAfricasBiggest.module.css", ".chip", "board chips"],
  ["app/components/mobileAfricasBiggest.module.css", ".yearPill", "year pills"],
  ["app/components/mobileAwards.module.css", ".chip", "filter chips"],
  ["app/components/mobileDeepPage.module.css", ".chip", "deep-page chip rail"],
  ["app/components/mobileFaq.module.css", ".chip", "jump chips"],
  ["app/components/mobileOfficialCharts.module.css", ".chip", "filter chips"],
  ["app/components/mobileStatCards.module.css", ".chip", "record chips"],
  ["app/components/mobileUpdates.module.css", ".chip", "category chips"],
  ["app/components/mobileCerts.module.css", ".chip", "certifications chips (already --btn-edge, E-02)"],
  // segmented frames, and the dividers inside the two the fix-round canvas draws
  ["app/components/themeToggle.module.css", ".seg", "Appearance"],
  ["app/components/themeToggle.module.css", ".opt:not(:last-child)", "Appearance's dividers"],
  ["app/embed/embed.module.css", ".seg", "/embed theme picker"],
  ["app/embed/embed.module.css", ".segOpt:not(:last-child)", "/embed theme picker's dividers"],
  ["app/components/mobileEmbed.module.css", ".seg", "/embed theme picker, phone"],
  ["app/components/mobileEmbed.module.css", ".segOpt:not(:last-child)", "its dividers"],
  ["app/compare/compare.module.css", ".seg", "the compare mode"],
  ["app/components/StatCardMaker.module.css", ".ratios", "/share ratio segment"],
  ["app/records/charts/charts.module.css", ".viewToggle", "the view toggle"],
  ["app/components/mobileStatCards.module.css", ".ratio", "ratio segment, phone"],
  ["app/components/statCardButton.module.css", ".ratioBtn", "the stat-card dialog's ratio buttons"],
  // inputs (the phone /search field rested on a gold edge)
  ["app/globals.css", ".input, .textarea", "the site's form fields"],
  ["app/components/SubscribeBox.module.css", ".input", "the email field"],
  ["app/search/search.module.css", ".field", "the /search field (both layouts)"],
  ["app/compare/compare.module.css", ".searchInput", "the compare search"],
  ["app/components/mobileNavSheet.module.css", ".search", "the menu sheet's search pill"],
  ["app/components/SearchPalette.module.css", ".trigger", "the masthead's search pill"],
  // secondary and icon buttons
  ["app/components/copyButton.module.css", ".copy", "the one Copy button (already --btn-edge, CP6)"],
  ["app/components/BackToTop.module.css", ".btn", "back to top"],
  ["app/components/themeToggle.module.css", ".mini", "the masthead's theme flip"],
  ["app/components/BirthdayCelebration.module.css", ".close", "the banner's close"],
  ["app/components/SearchPalette.module.css", ".escBtn", "the palette's Esc"],
  ["app/globals.css", ".modalClose", "the dialog close"],
  ["app/music/music.module.css", ".dialogClose", "the tracklist close"],
  ["app/certifications/certifications.module.css", ".clearBtn", "clear filters (both blocks)"],
  ["app/records/awards/awards.module.css", ".clearBtn", "clear filters"],
  ["app/records/charts/charts.module.css", ".clearBtn", "clear filters"],
  ["app/search/search.module.css", ".clear", "clear the query"],
  ["app/records/by-the-numbers/byTheNumbers.module.css", ".shareBtn", "share"],
  ["app/components/worldMap.module.css", ".zoomBtn", "map zoom"],
  ["app/afrobeats/[artist]/artist.module.css", ".mobileBackBtn", "the back circle"],
  ["app/compare/compare.module.css", ".searchBtn", "search"],
  ["app/compare/compare.module.css", ".slotClear", "clear a slot"],
  ["app/compare/compare.module.css", ".moreToggle", "show more (dashed)"],
  ["app/compare/compare.module.css", ".featuredLink", "featured pair links (pills)"],
  ["app/compare/compare.module.css", ".ngAction", "the Nigeria strip's toggle link"],
  ["app/compare/compare.module.css", ".cbChange", "Change country"],
  ["app/components/mobileCerts.module.css", ".focusClear", "clear the focus"],
  ["app/components/mobileCerts.module.css", ".allBtn", "show all"],
  ["app/components/mobileCerts.module.css", ".boardBtn", "the board button"],
  ["app/components/mobileCerts.module.css", ".badgeMore", "more badges (dashed)"],
  ["app/components/mobileOfficialCharts.module.css", ".focusClear", "clear the focus"],
  ["app/components/mobileLiveCharts.module.css", ".allBtn", "show all"],
  ["app/components/mobileMusic.module.css", ".moreBtn", "show more"],
  ["app/components/mobileRecords.module.css", ".allBtn", "all"],
  // the switch track (off): the on track's gold is a state (fix 72)
  ["app/components/certSwitches.module.css", ".dot", "the certifications switches"],
  ["app/compare/compare.module.css", ".dot", "the compare switches"],
];

// Not controls: a span, a label or a status. They keep their decoration edge,
// so the rule is not applied past what it names.
const DECORATION: [string, string, string][] = [
  ["app/records/africas-biggest/africas-biggest.module.css", ".chip", "a board entry (a span holding a link)"],
  ["app/live-charts/liveCharts.module.css", ".chip", "a platform tally (a span)"],
  ["app/components/onThisDayBand.module.css", ".pill", "the kind label (KindPill, a span)"],
  ["app/components/mobileOnThisDay.module.css", ".homePill", "the kind label, phone"],
];

describe("J0-11: a control's edge is --btn-edge", () => {
  it.each(CONTROLS)("%s %s (%s)", (file, sel) => {
    const found = edges(read(file), sel);
    expect(found.length, `${file} ${sel} draws an edge`).toBeGreaterThan(0);
    for (const e of found) expect(e, `${file} ${sel}`).toBe(EDGE);
  });

  it("--btn-edge clears 3:1 on the page and on a card, in both themes", () => {
    for (const t of THEMES)
      for (const ground of ["--bg", "--bg-soft"]) expect(tokenContrast("--btn-edge", ground, t), `${ground} ${t}`).toBeGreaterThanOrEqual(3);
  });

  it("no control's hover takes its edge back under 3:1", () => {
    for (const [file, sel] of CONTROLS) {
      const base = sel.split(",")[0].trim();
      for (const r of rules(read(file)).filter((x) => x.selector.split(",").map((s) => s.trim()).includes(`${base}:hover`))) {
        const bc = decl(r.body, "border-color");
        if (bc) expect(bc, `${file} ${base}:hover`).not.toMatch(/--line|--border\b|--rule-soft/);
      }
    }
  });
});

describe("J0-11: decoration keeps its edge", () => {
  it.each(DECORATION)("%s %s (%s)", (file, sel) => {
    const found = edges(read(file), sel);
    expect(found.length).toBeGreaterThan(0);
    for (const e of found) expect(e).not.toBe(EDGE);
  });
});

describe("J0-11 negative controls: the shipped edges fail", () => {
  it("Appearance .seg on --border and the email field on --line, as shipped (d3c39eda)", () => {
    // app/components/themeToggle.module.css .seg on d3c39eda, verbatim.
    const seg = `.seg {
  display: inline-flex;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg-soft);
}`;
    // app/components/SubscribeBox.module.css .input on d3c39eda, verbatim.
    const input = `.input {
  flex: 1 1 200px;
  min-width: 0;
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono), monospace;
  /* 16px stops iOS zooming the page into the field on focus. */
  font-size: 16px;
  letter-spacing: 0.02em;
}`;
    expect(edges(seg, ".seg")).toEqual(["var(--border)"]);
    expect(edges(input, ".input")).toEqual(["var(--line)"]);
    // and why: neither edge reaches 3:1 on the page
    for (const t of THEMES) {
      expect(tokenContrast("--line", "--bg", t)).toBeLessThan(3);
      expect(tokenContrast("--border", "--bg", t)).toBeLessThan(3);
    }
  });

  it("the phone /search field resting on a gold edge, as shipped, fails", () => {
    const shipped = `.field { margin-top: 0; min-height: 52px; border-color: var(--gold); }`;
    expect(edges(shipped, ".field")).toEqual(["var(--gold)"]);
  });
});
