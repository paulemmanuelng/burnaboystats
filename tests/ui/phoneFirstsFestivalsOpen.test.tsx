import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/firsts",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import FirstsPage from "../../app/records/firsts/page";
import FestivalsPage from "../../app/records/tours/festivals/page";
import styles from "../../app/components/mobileSections.module.css";
import dockStyles from "../../app/components/dockIndex.module.css";
import type { Section } from "../../app/components/MobileSections";
import { firstGroups, allFirsts, firstGroupId } from "../../app/data/firsts";
import { festivals, concerts, otherShows } from "../../app/data/tours";
import { byYearDesc, FESTIVAL_GROUP_NAMES } from "../../app/lib/festivalOrder";
import { trees, text } from "../fixtures/phoneTrees";
import { rules, decl } from "../fixtures/cssRules";

/**
 * J4-10 (fix 81; J4-Q3 "Firsts and Festivals open in full on the phone: yes").
 *
 * The two phone screens that shared the accordion (Deep Pages 13 and 15) open
 * every section in full: every row is in the server HTML, each section is a
 * <section> with its own id under its own h2, and a docking index (J4-6's
 * DockIndex) between the hero and the sections jumps to them. Firsts' rows
 * carry their detail line ("all 54 with detail lines"); Festivals' chips read
 * "Headlined · {n}", the stat cell's own word (fix 81). The two sentences the
 * unfold made false ("Tap a category / section to open it.") are gone.
 *
 * Every count here is read from the data, never typed.
 */

const firstsHtml = () => renderToStaticMarkup(FirstsPage());
const festHtml = () => renderToStaticMarkup(FestivalsPage());
const phoneOf = (html: string) => {
  const { phone } = trees(html);
  expect(phone, "the phone screen").toBeTruthy();
  return phone!;
};
const clean = (s: string) => s.replace(/\s+/g, " ").trim();
const rowsIn = (root: Element) => [...root.querySelectorAll(`.${styles.row}`)];
const sectionsIn = (root: Element) => [...root.querySelectorAll("section")].filter((s) => s.querySelector(`:scope > h2.${styles.head}`));
const dockIn = (root: Element) => root.querySelector('[data-dock="phone"]');
const chipsIn = (dock: Element) => [...dock.querySelectorAll(`a.${dockStyles.dockChip}`)];

/** No toggle anywhere in the screen: nothing folds. */
const toggles = (root: Element) => [...root.querySelectorAll("button[aria-expanded], [aria-expanded]")];

/** Each section is a landmark named by its own h2, which carries the name and the count. */
function sectionShape(root: Element) {
  return sectionsIn(root).map((s) => {
    const h = s.querySelector(":scope > h2")!;
    return {
      id: s.id,
      labelledBy: s.getAttribute("aria-labelledby"),
      hId: h.id,
      name: text(h.querySelector(`.${styles.name}`)),
      count: text(h.querySelector(`.${styles.count}`)),
      rows: rowsIn(s).length,
    };
  });
}

const FEST_LISTS = [
  { id: "m-headlined", name: FESTIVAL_GROUP_NAMES.headlined, items: byYearDesc(festivals) },
  { id: "m-concerts", name: FESTIVAL_GROUP_NAMES.concerts, items: byYearDesc(concerts) },
  { id: "m-others", name: FESTIVAL_GROUP_NAMES.others, items: byYearDesc(otherShows) },
];
const appearances = festivals.length + concerts.length + otherShows.length;

describe("J4-10: phone Firsts opens in full, with its dock", () => {
  const phone = phoneOf(firstsHtml());

  it("nothing folds: no toggle in the screen", () => {
    expect(toggles(phone)).toEqual([]);
  });

  it("every milestone is in the server HTML, in the data's order, with its detail line", () => {
    const rows = rowsIn(phone);
    expect(rows).toHaveLength(allFirsts.length);
    rows.forEach((r, i) => {
      const f = allFirsts[i];
      // The year is the row's right-hand ink label since J4-7 (fix 85).
      expect(text(r.querySelector(`.${styles.year}`)), f.title).toBe(f.year);
      expect(text(r.querySelector(`.${styles.title}`)), f.title).toBe(clean(f.title));
      expect(text(r.querySelector(`.${styles.meta}`)), f.title).toBe(clean(f.text));
    });
  });

  it("one section per category, each with its id under its own h2 and its derived count", () => {
    expect(sectionShape(phone)).toEqual(
      firstGroups.map((g) => {
        const id = `m-${firstGroupId(g.label)}`;
        return { id, labelledBy: `${id}-h`, hId: `${id}-h`, name: g.label, count: `(${g.items.length})`, rows: g.items.length };
      }),
    );
  });

  it("a DockIndex between the hero and the sections: one chip per category, in order, with its count", () => {
    const dock = dockIn(phone)!;
    expect(dock, "the phone dock").not.toBeNull();
    expect(dock.querySelector("nav")?.getAttribute("aria-label")).toBe("Jump to a category");
    const chips = chipsIn(dock);
    expect(chips.map((a) => a.getAttribute("href"))).toEqual(firstGroups.map((g) => `#m-${firstGroupId(g.label)}`));
    expect(chips.map((a) => text(a.querySelector(`.${dockStyles.dockCount}`)))).toEqual(firstGroups.map((g) => String(g.items.length)));
    expect(chips.map((a) => a.firstChild?.textContent)).toEqual(firstGroups.map((g) => g.label));
    // Every chip lands on a section in this layout's tree.
    for (const a of chips) expect(phone.querySelector(`[id="${a.getAttribute("href")!.slice(1)}"]`), a.getAttribute("href")!).not.toBeNull();
    // In the flow after the hero, straight before the first section.
    expect(dock.previousElementSibling?.querySelector("h1")).not.toBeNull();
    expect(dock.nextElementSibling).toBe(sectionsIn(phone)[0]);
  });

  it("the note no longer tells the reader to tap a category open", () => {
    expect(text(phone)).not.toMatch(/Tap a/);
    expect(text(phone)).toContain("Every milestone was cross-checked against multiple sources before it was listed.");
  });

  it("the desktop keeps its ids, and the two layouts' ids never collide", () => {
    const { desktop, d } = trees(firstsHtml());
    for (const g of firstGroups) expect(desktop!.querySelector(`section[id="${firstGroupId(g.label)}"]`), g.label).not.toBeNull();
    const ids = [...d.querySelectorAll("[id]")].map((e) => e.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
});

describe("J4-10: phone Festivals opens in full, with its dock", () => {
  const phone = phoneOf(festHtml());

  it("nothing folds: no toggle and no + in the screen", () => {
    expect(toggles(phone)).toEqual([]);
    for (const s of sectionsIn(phone)) expect(text(s.querySelector(":scope > h2"))).not.toMatch(/[+−]/);
  });

  it("every appearance is in the server HTML, list by list, newest first", () => {
    expect(rowsIn(phone)).toHaveLength(appearances);
    const sections = sectionsIn(phone);
    FEST_LISTS.forEach((l, i) => {
      const rows = rowsIn(sections[i]);
      expect(rows.map((r) => text(r.querySelector(`.${styles.lead}`)))).toEqual(l.items.map((f) => f.year));
      expect(rows.map((r) => text(r.querySelector(`.${styles.title}`)))).toEqual(l.items.map((f) => clean(f.name)));
    });
  });

  it("one section per list, each with its id under its own h2 and its derived count", () => {
    expect(sectionShape(phone)).toEqual(
      FEST_LISTS.map((l) => ({ id: l.id, labelledBy: `${l.id}-h`, hId: `${l.id}-h`, name: l.name, count: `(${l.items.length})`, rows: l.items.length })),
    );
  });

  it("a DockIndex after the map link: 'Headlined · {n}' first (the stat cell's own word), then each list's name and count", () => {
    const dock = dockIn(phone)!;
    expect(dock, "the phone dock").not.toBeNull();
    const chips = chipsIn(dock);
    const firstCell = text(phone.querySelector('[class*="_statLabel_"]'));
    expect(firstCell).toBe("Headlined");
    expect(chips.map((a) => text(a))).toEqual([
      `${firstCell} · ${festivals.length}`,
      `${FESTIVAL_GROUP_NAMES.concerts} · ${concerts.length}`,
      `${FESTIVAL_GROUP_NAMES.others} · ${otherShows.length}`,
    ]);
    expect(chips.map((a) => a.getAttribute("href"))).toEqual(FEST_LISTS.map((l) => `#${l.id}`));
    for (const a of chips) expect(phone.querySelector(`[id="${a.getAttribute("href")!.slice(1)}"]`), a.getAttribute("href")!).not.toBeNull();
    expect(dock.previousElementSibling?.querySelector('a[href="/records/tours/map"]')).not.toBeNull();
    expect(dock.nextElementSibling).toBe(sectionsIn(phone)[0]);
    // The chips are in-page jumps: no glyph.
    expect(text(dock)).not.toMatch(/[↗→↓←↑]/);
  });

  it("the lede no longer tells the reader to tap a section open", () => {
    expect(text(phone)).not.toMatch(/Tap a/);
  });

  it("the phone ids are the desktop groups' with 'm-', and no id repeats", () => {
    const { desktop, d } = trees(festHtml());
    for (const l of FEST_LISTS) expect(desktop!.querySelector(`[id="${l.id.slice(2)}"]`), l.id).not.toBeNull();
    const ids = [...d.querySelectorAll("[id]")].map((e) => e.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
});

describe("J4-10: MobileSections is no longer an accordion", () => {
  const src = readFileSync(join(process.cwd(), "app/components/MobileSections.tsx"), "utf8");
  const css = readFileSync(join(process.cwd(), "app/components/mobileSections.module.css"), "utf8");

  it("a server component: no client directive, no state, no toggle", () => {
    expect(src.trimStart().startsWith('"use client"')).toBe(false);
    expect(src).not.toMatch(/useState|aria-expanded|onClick/);
  });

  it("its head is a heading, not a control: no pointer, no caret, no open-state wash", () => {
    const head = rules(css).filter((r) => r.selector === ".head");
    expect(head.length).toBe(1);
    expect(decl(head[0].body, "cursor")).toBeUndefined();
    expect(decl(head[0].body, "margin")).toBe("0");
    expect(rules(css).some((r) => /\.caret|\.headOpen/.test(r.selector))).toBe(false);
  });
});

describe("J4-10 negative control: the accordion as shipped", () => {
  // app/components/MobileSections.tsx on main e85e6efe (live until Job 4), its
  // render verbatim: the first section open on arrival, the rest shut, so only
  // the open one's rows reach the server HTML.
  function ShippedMobileSections({ sections, variant = "meta" }: { sections: Omit<Section, "id">[]; variant?: "meta" | "plain" }) {
    const [open, setOpen] = useState<number | undefined>(undefined);
    return (
      <>
        {sections.map((s, i) => {
          const isOpen = open === undefined ? i === 0 : open === i;
          const panelId = `sec-${s.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
          return (
            <div key={s.name} className={styles.section}>
              <button
                type="button"
                className={`${styles.head} ${isOpen ? styles.headOpen : ""}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className={`${styles.name} ${variant === "plain" ? styles.nameSm : ""}`}>{s.name}</span>
                <span className={styles.count}>({s.rows.length})</span>
                <span className={styles.caret} aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div id={panelId}>
                  {s.rows.map((r, ri) => (
                    <div key={`${ri}-${r.title}`} className={styles.row}>
                      <span className={variant === "plain" ? styles.leadDisplay : styles.lead}>{r.lead}</span>
                      <div className={styles.main}>
                        <div className={`${styles.title} ${variant === "plain" ? styles.plainTitle : ""}`}>{r.title}</div>
                        {r.meta && <div className={styles.meta}>{r.meta}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  }
  const rendered = (sections: Omit<Section, "id">[], variant?: "meta" | "plain") => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<ShippedMobileSections sections={sections} variant={variant} />);
    return host;
  };

  it("served only the first category of Firsts, and no detail lines", () => {
    // The shipped rows: the year and the milestone alone.
    const host = rendered(firstGroups.map((g) => ({ name: g.label, rows: g.items.map((f) => ({ lead: f.year, title: f.title })) })), "plain");
    expect(rowsIn(host)).toHaveLength(firstGroups[0].items.length);
    expect(rowsIn(host).length).toBeLessThan(allFirsts.length);
    expect(host.querySelectorAll(`.${styles.meta}`)).toHaveLength(0);
    expect(host.querySelectorAll("button[aria-expanded]")).toHaveLength(firstGroups.length);
    expect(sectionsIn(host)).toHaveLength(0);
  });

  it("served only the headlined festivals", () => {
    const host = rendered(FEST_LISTS.map((l) => ({ name: l.name, rows: l.items.map((f) => ({ lead: f.year, title: f.name, meta: f.location })) })));
    expect(rowsIn(host)).toHaveLength(festivals.length);
    expect(rowsIn(host).length).toBeLessThan(appearances);
    expect(text(host)).toMatch(/\+/);
  });

  it("and the two sentences as shipped told the reader to tap", () => {
    // firsts/page.tsx sourceNote and festivals/page.tsx's lede tail, main e85e6efe.
    for (const shipped of [
      "Every milestone was cross-checked against multiple sources before it was listed. Tap a category to open it.",
      "Tap a section to open it.",
    ]) expect(shipped).toMatch(/Tap a/);
  });
});
