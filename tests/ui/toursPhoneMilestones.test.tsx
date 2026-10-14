import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../../app/records/tours/page";
import styles from "../../app/components/mobileTours.module.css";
import { liveMoments } from "../../app/data/liveMoments";
import { liveMomentHref } from "../../app/lib/liveMomentLinks";
import { trees, text } from "../fixtures/phoneTrees";
import { read, rules, decl, winning } from "../fixtures/cssRules";

/**
 * J4-9 (fixes 81 and 92; C-27, Paul 14 Oct "use the defaults"): the phone
 * tours screen gains the desktop's "Record nights & live milestones" — every
 * moment in the data's order, in full, after "More from the road" and before
 * the footnote, with no fold. The heading is the desktop h2's own words, not
 * the canvas's "17 nights on record" (only two of the moments are records or
 * firsts, and several are not nights); the meta reads "{n} moments" from the
 * data. A moment that is a record wears the ink outline "Record" tag and one
 * that is a first "First", as on the desktop (C-27). A moment with a page is
 * one whole-row link ending in →, the road rows' gold arrow; nothing else in
 * the block is gold.
 */

const phone = () => trees(renderToStaticMarkup(ToursPage())).phone!;
const block = (root: Element) => root.querySelector('section[aria-labelledby="m-moments"]');
const rows = (root: Element) => [...(block(root)?.querySelectorAll(`.${styles.momentRow}`) ?? [])];

describe("J4-9: the phone tours milestones block", () => {
  it("one block, after 'More from the road' and before the footnote, headed by the desktop's words", () => {
    const root = phone();
    const b = block(root)!;
    expect(b, "the milestones block").not.toBeNull();
    const h2 = b.querySelector("h2#m-moments")!;
    expect(text(h2)).toBe("Record nights & live milestones");
    const road = root.querySelector("#more-from-the-road")!.closest("nav")!;
    expect(road.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const p3 = root.querySelector('[data-provenance="p3"]')!;
    expect(p3, "the footnote").not.toBeNull();
    expect(b.compareDocumentPosition(p3) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(b.nextElementSibling).toBe(p3);
  });

  it("the meta counts the data's moments", () => {
    expect(text(block(phone())!.querySelector(`.${styles.momentsKicker}`))).toBe(`${liveMoments.length} moments`);
  });

  it("every moment, in the data's order, in full: year, title, the whole text", () => {
    const rs = rows(phone());
    expect(rs).toHaveLength(liveMoments.length);
    rs.forEach((r, i) => {
      const m = liveMoments[i];
      expect(text(r.querySelector(`.${styles.momentYear}`)), m.title).toBe(m.year);
      expect(text(r.querySelector(`.${styles.momentTitle}`)), m.title).toBe(m.title);
      expect(text(r.querySelector(`.${styles.momentText}`)), m.title).toBe(text(Object.assign(document.createElement("p"), { textContent: m.text })));
    });
  });

  it("'Record' exactly on the record rows and 'First' exactly on the first rows (C-27)", () => {
    const rs = rows(phone());
    const tags = rs.map((r) => [...r.querySelectorAll(`.${styles.recordBadge}`)].map((t) => text(t)));
    expect(tags).toEqual(liveMoments.map((m) => [...(m.record ? ["Record"] : []), ...(m.first ? ["First"] : [])]));
    expect(liveMoments.some((m) => m.record)).toBe(true);
    expect(liveMoments.some((m) => m.first)).toBe(true);
  });

  it("a moment with a page is one link to it, ending in →; one without is no link", () => {
    rows(phone()).forEach((r, i) => {
      const href = liveMomentHref(liveMoments[i], i);
      if (href) {
        expect(r.tagName, liveMoments[i].title).toBe("A");
        expect(r.getAttribute("href")).toBe(href);
        expect(text(r.querySelector(`.${styles.roadArrow}`))).toBe("→");
        expect(r.querySelectorAll("a")).toHaveLength(0);
      } else {
        expect(r.tagName).not.toBe("A");
        expect(r.querySelector(`.${styles.roadArrow}`)).toBeNull();
      }
    });
  });

  it("rows are at least 72px, and the only gold in the block is the row arrow (the road rows' rule)", () => {
    const css = read("app/components/mobileTours.module.css");
    expect(parseFloat(winning(css, ".momentRow", "min-height", () => true)!)).toBeGreaterThanOrEqual(72);
    const GOLD = /--gold|--display-ramp|#945e00|#ffb627/i;
    for (const r of rules(css).filter((r) => /\.moment/.test(r.selector))) {
      for (const p of ["color", "background", "background-color", "border", "border-color", "box-shadow"]) {
        const v = decl(r.body, p);
        if (v && GOLD.test(v)) expect(`${r.selector} ${p}`, "gold outside the arrow").toBe(".momentRow:focus-visible box-shadow");
      }
    }
    expect(winning(css, ".roadArrow", "color", () => true)).toBe("var(--gold)");
    expect(winning(css, ".momentYear", "color", () => true)).toBe("var(--text)");
    expect(winning(css, ".momentTitle", "color", () => true) ?? "inherit").not.toMatch(GOLD);
  });
});

describe("J4-9 negative controls", () => {
  it("the shipped phone screen had no milestones at all", () => {
    // MobileTours on main e85e6efe: the road nav, then straight to the
    // footnote (`<MobileProvenance size="p3" …>`), no momentRow anywhere.
    const shipped =
      `<div class="${styles.screen}"><nav aria-labelledby="more-from-the-road" class="${styles.road}"><h2 id="more-from-the-road" class="${styles.roadHead}">More from the road</h2></nav>` +
      `<div data-provenance="p3"></div></div>`;
    const host = document.createElement("div");
    host.innerHTML = shipped;
    expect(rows(host)).toHaveLength(0);
    expect(block(host)).toBeNull();
  });

  it("the canvas's heading, '17 nights on record', is not the heading", () => {
    // Wayfinding §7 as first drawn (fix 92): only two of the moments are a
    // record or a first, and several are not nights.
    expect(text(block(phone())!.querySelector("h2"))).not.toBe("17 nights on record");
    expect(liveMoments.filter((m) => m.record || m.first).length).toBeLessThan(liveMoments.length);
  });
});
