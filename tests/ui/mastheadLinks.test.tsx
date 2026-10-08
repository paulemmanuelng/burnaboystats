import { render, cleanup } from "@testing-library/react";

let path = "/compare";
vi.mock("next/navigation", () => ({
  usePathname: () => path,
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn() }),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Nav from "../../app/components/Nav";
import { navItems, footerColumns, footerSiteLinks } from "../../app/lib/links";
import { navGroups } from "../../app/lib/navGroups";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";

/**
 * J4-1 (design review 8 Oct 2026; fix 96 names this test): the masthead's
 * seven section links — Music · Certifications · Records · Live Charts ·
 * Afrobeats · Updates · Compare. Home goes (the wordmark is home); Compare
 * joins (J4-Q1, owner 8 Oct); About, FAQ and Contact move to the footer and
 * the sheet (fix 79: the compact footer's "About · FAQ · Contact" line).
 */

const SEVEN = ["Music", "Certifications", "Records", "Live Charts", "Afrobeats", "Updates", "Compare"];
const GONE = ["Home", "About", "FAQ", "Contact"];

/** The section links' labels, from the bar a reader sees. */
function barLabels(): string[] {
  const { container } = render(<Nav suggested={suggestedSearchDocs()} />);
  const ul = container.querySelector("#primary-menu")!;
  return [...ul.querySelectorAll("a")].map((a) => a.textContent!.trim());
}

/** The rule: seven, in this order, Compare among them, none of the four that left. */
const ruleBreaks = (labels: string[]) => [
  ...(labels.length === 7 ? [] : [`${labels.length} links`]),
  ...(labels.includes("Compare") ? [] : ["no Compare"]),
  ...GONE.filter((g) => labels.includes(g)).map((g) => `still has ${g}`),
];

afterEach(() => {
  cleanup();
  path = "/compare";
});

describe("J4-1: seven links in the masthead", () => {
  it("lib/links.ts and the bar both read Music · Certifications · Records · Live Charts · Afrobeats · Updates · Compare", () => {
    expect(navItems.map((i) => i.label)).toEqual(SEVEN);
    const bar = barLabels();
    expect(bar).toEqual(SEVEN);
    expect(ruleBreaks(bar)).toEqual([]);
  });

  it("Compare goes to /compare and is marked current there, in the bar's own active state", () => {
    const { container } = render(<Nav suggested={suggestedSearchDocs()} />);
    const compare = [...container.querySelectorAll("#primary-menu a")].find((a) => a.textContent === "Compare")!;
    expect(compare.getAttribute("href")).toBe("/compare");
    expect(compare.getAttribute("aria-current")).toBe("page");
    expect(compare.className).toBe("navActive");
  });

  it("the wordmark is home", () => {
    path = "/";
    const { container } = render(<Nav suggested={suggestedSearchDocs()} />);
    const brand = container.querySelector("a.brand")!;
    expect(brand.getAttribute("href")).toBe("/");
    // and no section link claims the home page
    expect(container.querySelector("#primary-menu a[aria-current]")).toBeNull();
  });

  it("nothing the old bar reached is lost: About, FAQ and Contact are in every footer and in the sheet", () => {
    const sheet = navGroups.flatMap((g) => g.items.map((i) => i.href));
    const homeFooter = footerColumns.flatMap((c) => c.links.map((l) => l.href));
    for (const href of ["/about", "/faq", "/contact"]) {
      expect(sheet, `${href} in the sheet`).toContain(href);
      expect(homeFooter, `${href} in the home footer`).toContain(href);
      expect(footerSiteLinks.map((l) => l.href), `${href} in the compact footer`).toContain(href);
    }
  });
});

describe("negative control", () => {
  it("the ten links main shipped (lib/links.ts on d3c39eda) break the rule", () => {
    const SHIPPED = ["Home", "Music", "Certifications", "Records", "Live Charts", "Afrobeats", "Updates", "About", "FAQ", "Contact"];
    expect(ruleBreaks(SHIPPED)).toEqual(["10 links", "no Compare", "still has Home", "still has About", "still has FAQ", "still has Contact"]);
  });
});
