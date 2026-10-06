import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/methodology",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MethodologyPage from "../../app/methodology/page";
import S from "../../app/methodology/methodology.module.css";
import ScrollRail, { RAIL_FADE } from "../../app/components/ScrollRail";
import railStyles from "../../app/components/scrollRail.module.css";

/**
 * V-core-05, the full-site debug of 5 Oct 2026. On a phone /methodology's
 * "Every threshold the compare page uses" table is ~750px in a 354px box.
 * Shipped (measured live in headless Chrome at 390 and 320, dark and light):
 * the Body column was 176px of nowrap names, so the first view showed the
 * names and the heading cut mid-word at the box's edge ("SINGLE · SILVER /
 * GOL"); scrolled right, the figures had no body beside them (the column was
 * not sticky); Colombia's "listed" note was cut on one side or the other; and
 * nothing said the box scrolled.
 *
 * Now, at ≤900px: the body column is pinned and narrowed (the name wraps
 * above the country); each figure column has a tier heading of its own; the
 * format's name and the "listed" note hold at the pin's edge; ScrollRail
 * fades the right edge while figures remain, and never the left (it would
 * wash out the pinned names). The desktop table is unchanged but for the
 * note, which now sits left-aligned as its rule always said.
 *
 * jsdom does no layout, so the sticky behaviour is checked from the sheet;
 * it was checked live by grafting the same rules and markup onto the shipped
 * page (390 dark and light, 320, 768, 900, 1024, 1440; start, middle and end
 * of the scroll): every row keeps its body in view, 3 figure columns sit
 * whole beside the pin at 390, no page overflow, and 1024/1440 unchanged.
 */

type Rule = { media: string | null; selector: string; body: string };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head);
      else out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
}
const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

const PHONE = "@media (max-width: 900px)";
const SHEET = readFileSync("app/methodology/methodology.module.css", "utf8");

/** The phone rule that pins the first cell of every row, if there is one. */
function pinRule(css: string) {
  const r = rules(css).find((x) => x.media === PHONE && x.selector === ".thresholdTable tr > :first-child");
  if (!r) return null;
  const ok =
    decl(r.body, "position") === "sticky" &&
    decl(r.body, "left") === "0" &&
    !!decl(r.body, "background") &&
    decl(r.body, "white-space") === "normal";
  return ok ? r : null;
}

/** Each figure column's own heading (a one-column <th> above it), or null. */
function columnHeads(table: Element): (string | null)[] {
  const first = table.querySelector("tbody tr")!;
  const cols = [...first.children].reduce((n, c) => n + Number(c.getAttribute("colspan") ?? 1), 0);
  const heads: (string | null)[] = Array(cols).fill(null);
  for (const tr of table.querySelectorAll("thead tr")) {
    let x = 0;
    for (const cell of tr.children) {
      const span = Number(cell.getAttribute("colspan") ?? 1);
      if (cell.tagName === "TH" && span === 1) heads[x] = cell.textContent;
      x += span;
    }
  }
  return heads.slice(1);
}

const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");
const thresholdTable = () => doc(renderToStaticMarkup(MethodologyPage())).querySelector('[aria-label="Threshold table"] table')!;

// The thead the live site shipped (5 Oct 2026).
const SHIPPED_THEAD =
  '<table><thead><tr><th scope="col">Body</th><th scope="col" colspan="4">Single · Silver / Gold / Platinum / Diamond</th><th scope="col" colspan="4">Album · Silver / Gold / Platinum / Diamond</th></tr></thead>' +
  '<tbody><tr><th scope="row">ARIA</th><td>—</td><td>35,000</td><td>70,000</td><td>—</td><td>20,000</td><td>35,000</td><td>70,000</td><td>500,000</td></tr></tbody></table>';
// The rules the live site shipped for the table's body column, its note and
// the phone block.
const SHIPPED_CSS = `.thresholdTable tbody th { text-align: left; font-weight: 600; white-space: nowrap; }
.thresholdListed { text-align: left; color: var(--text-muted); font-size: var(--type-caption); white-space: normal; min-width: 220px; }
@media (max-width: 900px) {
  .thresholdTable { min-width: 640px; }
}`;

describe("V-core-05: the phone threshold table keeps every figure beside its body", () => {
  it("the body column is pinned on a phone, with a background so the figures slide under it", () => {
    const r = pinRule(SHEET);
    expect(r).not.toBeNull();
    expect(decl(r!.body, "background")).toBe("var(--bg)");
    // Narrowed: a fixed pin, so the format label and the note can hold at its edge.
    expect(decl(r!.body, "width")).toBe("var(--pin)");
    expect(rules(SHEET).find((x) => x.media === PHONE && x.selector === ".tableScroll")?.body).toMatch(/--pin:\s*120px/);
  });

  it("every figure column names its own tier, on a row only a phone shows", () => {
    const t = thresholdTable();
    const tiers = ["Silver", "Gold", "Platinum", "Diamond"];
    expect(columnHeads(t)).toEqual([...tiers, ...tiers]);
    expect(t.querySelector(`thead tr.${S.tierRow}`)).not.toBeNull();
    const all = rules(SHEET);
    expect(decl(all.find((x) => x.media === null && x.selector === ".tierRow")!.body, "display")).toBe("none");
    expect(decl(all.find((x) => x.media === PHONE && x.selector === ".tierRow")!.body, "display")).toBe("table-row");
    // The desktop heading reads as it did; a phone drops its inline tier list.
    expect([...t.querySelectorAll("thead tr:first-child th")].map((th) => th.textContent)).toEqual([
      "Body",
      "Single · Silver / Gold / Platinum / Diamond",
      "Album · Silver / Gold / Platinum / Diamond",
    ]);
    expect(t.querySelectorAll(`thead .${S.tierList}`)).toHaveLength(2);
    expect(decl(all.find((x) => x.media === PHONE && x.selector === ".tierList")!.body, "display")).toBe("none");
  });

  it("the format's name and a 'listed' note hold at the pin's edge, the note clear of the 44px fade", () => {
    const t = thresholdTable();
    const notes = [...t.querySelectorAll("tbody td[colspan]")];
    expect(notes.length).toBeGreaterThan(0);
    for (const td of notes) expect(td.querySelector(`.${S.listedNote}`)?.textContent).toMatch(/^listed — /);
    const all = rules(SHEET).filter((x) => x.media === PHONE);
    for (const sel of [".format", ".listedNote"]) {
      const body = all.find((x) => x.selector === sel)!.body;
      expect(decl(body, "position"), sel).toBe("sticky");
      expect(decl(body, "left"), sel).toBe("calc(var(--pin) + 10px)");
    }
    // The note's measure: the box, less the pin, 10px of padding each side and
    // ScrollRail's fade — so no line of it sits under the fade.
    const max = decl(all.find((x) => x.selector === ".listedNote")!.body, "max-width")!;
    const less = Number(max.match(/^calc\(100cqi - var\(--pin\) - (\d+)px\)$/)![1]);
    expect(less).toBe(10 + 10 + RAIL_FADE);
    expect(decl(all.find((x) => x.selector === ".tableScroll")!.body, "container-type")).toBe("inline-size");
  });

  it("the note sits left-aligned as its rule says (a bare class lost to `.thresholdTable td`)", () => {
    const all = rules(SHEET).filter((x) => x.media === null);
    const note = all.find((x) => x.selector === ".thresholdTable .thresholdListed");
    expect(decl(note!.body, "text-align")).toBe("left");
    expect(all.find((x) => x.selector === ".thresholdListed")).toBeUndefined();
  });

  it("the table's scroll box is a ScrollRail that fades only its right edge", () => {
    const src = readFileSync("app/methodology/page.tsx", "utf8");
    expect(src).toContain('<ScrollRail className={styles.tableScroll} role="region" label="Threshold table" pinnedStart>');
    const box = doc(renderToStaticMarkup(MethodologyPage())).querySelector('[aria-label="Threshold table"]')!;
    expect(box.getAttribute("role")).toBe("region");
    expect(box.getAttribute("tabindex")).toBe("0");
  });

  it("negative control: the table and the rules the live site shipped", () => {
    expect(columnHeads(doc(SHIPPED_THEAD).querySelector("table")!).every((h) => h === null)).toBe(true);
    expect(pinRule(SHIPPED_CSS)).toBeNull();
    expect(rules(SHIPPED_CSS).find((x) => x.selector === ".thresholdListed")).toBeDefined();
  });
});

describe("ScrollRail pinnedStart: a pinned first column is never faded", () => {
  const mount = (pinnedStart: boolean) => {
    const spies = [
      vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(() => 749),
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => 354),
      // Mid-scroll, as at 390 with the table half read: more on both sides.
      vi.spyOn(HTMLElement.prototype, "scrollLeft", "get").mockImplementation(() => 198),
    ];
    const r = render(
      <ScrollRail className="t" role="region" label="Threshold table" pinnedStart={pinnedStart}>
        <table />
      </ScrollRail>,
    );
    const el = r.getByLabelText("Threshold table");
    fireEvent.scroll(el);
    const cls = el.className.split(/\s+/);
    spies.forEach((s) => s.mockRestore());
    r.unmount();
    return cls;
  };

  it("pinned: the end fades, the start does not", () => {
    const cls = mount(true);
    expect(cls).toContain(railStyles.fadeEnd);
    expect(cls).not.toContain(railStyles.fadeStart);
  });

  it("negative control: an unpinned rail fades both edges (every rail shipped so)", () => {
    const cls = mount(false);
    expect(cls).toContain(railStyles.fadeEnd);
    expect(cls).toContain(railStyles.fadeStart);
  });
});
