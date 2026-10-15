import { act, cleanup, render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import LandedRow, { LANDED_ATTR } from "../../app/components/LandedRow";
import RevenuePage from "../../app/records/tours/revenue/page";
import { nightAnchor, nightHref } from "../../app/lib/showsDeepLink";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * Owner question #30 (live debug 15 Oct 2026, revenue-01; Paul: "yes to
 * all"): a tour table's "No. 13 ↗" landed its row on the box-office board
 * just under the navbar, and nothing marked which of the 82 rows it was. The
 * linked row is now lit on either layout: LandedRow marks the row the
 * fragment names (and its twin in the other layout) with data-landed, and
 * both boards' stylesheets light it.
 */

const DESK = read("app/records/tours/revenue/revenue.module.css");
const PHONE = read("app/components/mobileRevenue.module.css");
const body = (css: string, sel: string) =>
  rules(css)
    .filter((r) => r.media === null && r.selector === sel)
    .map((r) => r.body)
    .join(";");

/** Two layouts' rows, as the page renders them: k-night-n and m-night-n. */
function board(ranks: number[]) {
  document.body.innerHTML = ranks.map((n) => `<div id="${nightAnchor(n, "k")}"></div><div id="${nightAnchor(n, "m")}"></div>`).join("");
}
const lit = () => [...document.querySelectorAll(`[${LANDED_ATTR}]`)].map((e) => e.id);
const go = (hash: string) => {
  window.history.replaceState(null, "", `/records/tours/revenue${hash}`);
  act(() => {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  });
};

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
  window.history.replaceState(null, "", "/");
});

describe("#30: the row a 'No. n ↗' link lands on is lit", () => {
  it("on arrival: the named row and its twin in the other layout, nothing else", () => {
    board([12, 13, 14]);
    window.history.replaceState(null, "", nightHref(13, "k"));
    render(<LandedRow />, { container: document.body.appendChild(document.createElement("div")) });
    expect(lit()).toEqual(["k-night-13", "m-night-13"]);
  });

  it("a phone link lights the same night", () => {
    board([2, 13]);
    window.history.replaceState(null, "", nightHref(2, "m"));
    render(<LandedRow />, { container: document.body.appendChild(document.createElement("div")) });
    expect(lit()).toEqual(["k-night-2", "m-night-2"]);
  });

  it("a new fragment moves the mark; one that names no night clears it", () => {
    board([1, 13]);
    window.history.replaceState(null, "", nightHref(13, "k"));
    render(<LandedRow />, { container: document.body.appendChild(document.createElement("div")) });
    go("#k-night-1");
    expect(lit()).toEqual(["k-night-1", "m-night-1"]);
    go("#view=runs");
    expect(lit()).toEqual([]);
    go("#m-night-13");
    expect(lit()).toEqual(["k-night-13", "m-night-13"]);
    go("");
    expect(lit()).toEqual([]);
  });

  it("the page mounts it, and every night row's id is one it reads", () => {
    expect(readFileSync("app/records/tours/revenue/page.tsx", "utf8")).toMatch(/<LandedRow \/>/);
    const d = new DOMParser().parseFromString(renderToStaticMarkup(<RevenuePage />), "text/html");
    const ids = [...d.querySelectorAll('[id*="-night-"]')].map((e) => e.id);
    expect(ids.filter((i) => i.startsWith("k-")).length).toBeGreaterThan(50);
    expect(ids.filter((i) => i.startsWith("m-")).length).toBe(ids.filter((i) => i.startsWith("k-")).length);
    expect(ids.filter((i) => !/^[km]-night-\d+$/.test(i))).toEqual([]);
  });

  it("both boards light it on the hover surface with an ink edge, never gold", () => {
    for (const [css, sel] of [
      [DESK, ".row[data-landed]"],
      [PHONE, ".showRow[data-landed]"],
    ] as const) {
      const b = body(css, sel);
      expect(decl(b, "background"), sel).toBe("var(--hover)");
      expect(decl(b, "box-shadow"), sel).toBe("inset 3px 0 0 var(--text-muted)");
      expect(b, sel).not.toMatch(/gold|ember/);
    }
    // The phone rule outranks the other artists' wash (.rowOther, one class).
    expect(rules(PHONE).some((r) => r.selector === ".rowOther")).toBe(true);
  });
});

describe("#30 negative control: the board main shipped", () => {
  it("origin/main a9574c64 had no rule for a linked row on either board", () => {
    // revenue.module.css and mobileRevenue.module.css on main: the linked row's
    // only rule was its scroll margin, verbatim; no :target anywhere.
    const SHIPPED_DESK = ".row[id] { scroll-margin-top: calc(88px + env(safe-area-inset-top, 0px)); }";
    const SHIPPED_PHONE = ".showRow[id] { scroll-margin-top: calc(141px + env(safe-area-inset-top, 0px)); }";
    for (const css of [SHIPPED_DESK, SHIPPED_PHONE]) {
      expect(css).not.toMatch(/:target|data-landed|background/);
    }
    expect(DESK).toContain(SHIPPED_DESK);
    expect(PHONE).toContain(SHIPPED_PHONE);
    expect(body(DESK, ".row[data-landed]")).not.toBe("");
  });
});
