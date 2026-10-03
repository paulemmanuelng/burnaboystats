import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue/countries",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CountriesPage from "../app/records/tours/revenue/countries/page";
import RevenuePage from "../app/records/tours/revenue/page";
import { revenueByCountry, usdM, usdFull } from "../app/lib/revenueByCountry";
import { BACK_BAR_ROUTES, ACTION_BAR_ROUTES } from "../app/lib/mobileScreens";
import { text, trees } from "./fixtures/phoneTrees";

/**
 * /records/tours/revenue/countries renders two trees — the phone screen and
 * the desktop column — from the one derived board. Both must carry every
 * country's FULL ranked list (no accordion, no "top three"), the honest Africa
 * card, and gold on his figures only.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const board = revenueByCountry();
const { phone, desktop } = trees(renderToStaticMarkup(<CountriesPage />));
const both = () => [
  ["phone", phone!],
  ["desktop", desktop!],
] as const;

describe("both layouts render", () => {
  it("has a phone screen and a desktop column, one h1 each", () => {
    expect(phone).toBeDefined();
    expect(desktop).not.toBeNull();
    expect(phone!.querySelectorAll("h1").length).toBe(1);
    expect(desktop!.querySelectorAll("h1").length).toBe(1);
  });

  it("the phone screen has its own back bar and action bar", () => {
    expect(BACK_BAR_ROUTES.has("/records/tours/revenue/countries")).toBe(true);
    expect(ACTION_BAR_ROUTES.has("/records/tours/revenue/countries")).toBe(true);
  });
});

describe("every country, with its full ranked list, on both layouts", () => {
  it.each(both())("%s: every country's name and leader", (_w, tree) => {
    const t = text(tree);
    for (const c of board.countries) {
      expect(t).toContain(c.name);
      expect(t).toContain(`${c.leader.artist} leads`);
    }
  });

  it.each(both())("%s: one row per artist per country — the whole list", (_w, tree) => {
    const rows = board.countries.reduce((n, c) => n + c.artists.length, 0);
    const heads = [...tree.querySelectorAll("h3")];
    expect(heads.length).toBe(board.countries.length);
    // Each country's rows follow its heading; count the ranks printed.
    const ranks = [...tree.querySelectorAll('[class*="rank"]')].filter((e) => /^\d\d$/.test(text(e)));
    expect(ranks.length).toBe(rows);
  });

  it("desktop prints each artist's total in full, phone in short form", () => {
    const d = text(desktop!);
    const p = text(phone!);
    for (const c of board.countries)
      for (const a of c.artists) {
        expect(d).toContain(usdFull(a.total));
        expect(p).toContain(usdM(a.total));
      }
  });

  it.each(both())("%s: the derived summary", (_w, tree) => {
    expect(text(tree)).toContain(
      `${board.showCount} reported shows in ${board.countryCount} countries on ${board.continentCount} continents`,
    );
  });
});

describe("Africa is shown, not left out (owner ruling 2)", () => {
  it.each(both())("%s: the Africa card says no reported box office yet", (_w, tree) => {
    const africa = board.continents.find((k) => k.continent === "Africa")!;
    if (africa.countries.length === 0) expect(text(tree)).toMatch(/Africa.*No reported box office yet/);
  });
});

describe("gold marks his figures only", () => {
  const css = read("app/components/mobileRevenue.module.css");
  it("the phone rows use the board's gross / grossHis pair", () => {
    expect(read("app/components/MobileRevenueCountries.tsx")).toMatch(/styles\.grossHis/);
    expect(/\.gross\s*\{[^}]*color:\s*var\(--text-muted\)/.test(css)).toBe(true);
  });
  it("the desktop rows use the board's gross / grossHis pair", () => {
    expect(read("app/components/RevenueCountries.tsx")).toMatch(/styles\.grossHis/);
  });
  it.each(both())("%s: one gold gross per row of his, none on anyone else's", (_w, tree) => {
    const gold = [...tree.querySelectorAll('[class*="grossHis"]')].length;
    const hisCountryRows = board.countries.reduce((n, c) => n + c.artists.filter((a) => a.his).length, 0);
    const hisContinentLeads = board.continents.filter((k) => k.leader?.his).length;
    // Rows of his in every country, plus the phone's continent rows he leads.
    expect(gold).toBe(hisCountryRows + (_w === "phone" ? hisContinentLeads : 0));
  });
});

describe("linked both ways", () => {
  it.each(both())("%s: links back to the revenue board", (_w, tree) => {
    expect(tree.querySelector('a[href="/records/tours/revenue"]')).not.toBeNull();
  });

  it("the revenue board links here from both layouts", () => {
    const r = trees(renderToStaticMarkup(<RevenuePage />));
    for (const tree of [r.phone!, r.desktop!]) {
      const a = tree.querySelector('a[href="/records/tours/revenue/countries"]');
      expect(a).not.toBeNull();
      expect(a!.className).toMatch(/btnPrimary/);
    }
  });
});

describe("nothing typed", () => {
  it("the page and its components carry no hand-written figure", () => {
    for (const f of [
      "app/records/tours/revenue/countries/page.tsx",
      "app/records/tours/revenue/countries/opengraph-image.tsx",
      "app/components/RevenueCountries.tsx",
      "app/components/MobileRevenueCountries.tsx",
    ]) {
      const prose = read(f)
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "")
        .replace(/className=\{?[^}>]*\}?/g, "");
      // A dollar figure, or a count followed by shows/countries/continents.
      expect(prose, f).not.toMatch(/\$\d|\b\d+\s+(shows|countries|continents)\b/);
    }
  });
});
