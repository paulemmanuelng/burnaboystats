import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/cars",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CarsPage from "../../app/records/cars/page";
import styles from "../../app/records/cars/cars.module.css";
import { currentCars } from "../../app/data/cars";
import { marqueTally } from "../../app/lib/garage";

/**
 * V-tourscars-08 (full-site debug, 5 Oct 2026).
 *
 * The desktop /records/cars hero ends in a "By marque" tally — "5 Ferrari",
 * "3 Lamborghini", "2 Mercedes-Maybach"… Read live in headless Chrome at 1440
 * and 1024, dark and light, 7 Oct: all eight were bordered 999px pills
 * (1px solid var(--border), 7px 14px padding), the same edge and shape as the
 * site's filter chips (/updates' .chip is that very rule, and the board's
 * artist chips), but they were plain <span>s with cursor auto and no role,
 * and clicking "5 Ferrari" changed nothing (same URL, scroll and garage).
 * Grafted onto the live page, the figures with no edge and no padding read as
 * one static line at 1440 and 1024 in both themes ("5 Ferrari 3 Lamborghini
 * …"), and at 1024 the row went from two lines (93px) to one (26px). The
 * phone layout (MobileDeepPage) has no marque tally.
 *
 * jsdom does no layout, so this reads what the stylesheet gives a tally item
 * (no width query may put the pill back) and that the page renders each
 * marque as a figure, not as a link or button. The same reads run on the
 * shipped rule (origin/main, quoted), which fails them.
 */

const CSS = readFileSync("app/records/cars/cars.module.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks (any query), in source order. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, query });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return rules;
};

/** Every rule that styles a tally item, by whichever class name it uses. */
const itemRules = (rules: Rule[], cls: string) => rules.filter((r) => r.selector.split(/[\s>+~:]/)[0] === `.${cls}`);

/** The chip grammar: an edge or a pill. */
const chipProps = (d: Record<string, string>) =>
  Object.entries(d)
    .filter(([p, v]) => (/^border(-(top|right|bottom|left))?(-width|-style)?$/.test(p) && !/^(0|0px|none)\b/.test(v)) || p === "border-radius" || /^padding/.test(p) || p === "cursor")
    .map(([p, v]) => `${p}: ${v}`);

describe("V-tourscars-08: the 'By marque' tally reads as figures, not filter chips", () => {
  const rules = parse(CSS);

  it("a tally item has no edge, no pill and no padding — at any width", () => {
    const own = itemRules(rules, "tallyItem");
    expect(own.length).toBeGreaterThan(0);
    for (const r of own) expect(chipProps(r.decls), `${r.selector} ${r.query ?? ""}`).toEqual([]);
  });

  it("the old chip class is gone from the stylesheet", () => {
    expect(itemRules(rules, "tallyChip")).toEqual([]);
  });

  it("the row spaces the figures wider than a number sits from its marque", () => {
    const row = Object.assign({}, ...rules.filter((r) => r.selector === ".tally" && !r.query).map((r) => r.decls));
    const item = Object.assign({}, ...itemRules(rules, "tallyItem").filter((r) => !r.query).map((r) => r.decls));
    const [, column] = (row["gap"] as string).split(/\s+/);
    expect(parseFloat(column ?? row["gap"])).toBeGreaterThan(parseFloat(item["gap"]) * 2);
  });

  it("the page renders every marque as a static figure, in the tally's order", () => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<CarsPage />);
    const label = [...host.querySelectorAll("span")].find((s) => s.textContent?.trim() === "By marque");
    expect(label).toBeTruthy();
    const row = label!.parentElement!;
    expect(row.className).toBe(styles.tally);
    const items = [...row.children].filter((c) => c !== label);
    const tally = marqueTally(currentCars);
    expect(items.map((i) => i.textContent)).toEqual(tally.map(([make, n]) => `${n}${make}`));
    for (const i of items) {
      expect(i.tagName).toBe("SPAN");
      expect(i.className).toBe(styles.tallyItem);
      expect(i.getAttribute("role")).toBeNull();
      expect(i.getAttribute("tabindex")).toBeNull();
      expect(i.querySelector("a, button")).toBeNull();
    }
  });

  it("negative control: the shipped rule drew each marque as a bordered pill", () => {
    // origin/main, app/records/cars/cars.module.css, verbatim.
    const SHIPPED_CSS = `.tallyChip {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 7px 14px; border-radius: 999px;
  border: 1px solid var(--border); background: transparent; font-size: 13px;
}`;
    const own = itemRules(parse(SHIPPED_CSS), "tallyChip");
    expect(own).toHaveLength(1);
    expect(chipProps(own[0].decls)).toEqual(["padding: 7px 14px", "border-radius: 999px", "border: 1px solid var(--border)"]);
  });
});
