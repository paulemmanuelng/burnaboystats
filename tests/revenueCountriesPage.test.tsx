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
import { leaderLine, revenueByCountry, runParts, runsNote, summaryLine, usdM, usdFull } from "../app/lib/revenueByCountry";
import { AFRICA_NOTE, SOUTH_AMERICA_NOTE } from "../app/components/RevenueCountries";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
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
/** Each layout's money form (one a screen, review fix 4): the desktop's
 *  tables print full dollars, the phone the short form. */
const money = (w: "phone" | "desktop") => (w === "desktop" ? usdFull : usdM);
/** Each layout's leader line: the phone drops the closing "reported". */
const lead = (w: "phone" | "desktop", c: (typeof board.countries)[number]) =>
  leaderLine(c, money(w), { reported: w === "desktop" });

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
  it.each(both())("%s: every country's name and leader", (w, tree) => {
    const t = text(tree);
    for (const c of board.countries) {
      expect(t).toContain(c.name);
      expect(t).toContain(`${c.leader.artist} ${lead(w, c)}`);
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

  it.each(both())("%s: the derived summary, in the method note", (_w, tree) => {
    expect(text(tree.querySelector('[aria-label="How this page counts"]'))).toContain(summaryLine(board));
  });

  it.each(both())("%s: each country's line credits the leader with HIS total, not the country's", (w, tree) => {
    const heads = [...tree.querySelectorAll("h3")];
    const fmt = money(w);
    for (const c of board.countries) {
      const h = heads.find((e) => text(e).includes(c.name))!;
      const line = text(h.parentElement!);
      expect(line, c.name).toContain(fmt(c.leader.total));
      if (c.artists.length > 1) {
        expect(line, c.name).toContain(`${fmt(c.leader.total)} of ${fmt(c.total)}`);
        expect(line, c.name).not.toContain(`leads · ${fmt(c.total)}`);
      }
    }
  });
});

describe("Africa and South America are shown, not left out (owner rulings: Africa 3 Oct; South America Q1, 4 Oct 2026)", () => {
  const empty = board.continents.filter((k) => k.countries.length === 0).map((k) => k.continent);
  it("today both have no reported box office — otherwise these checks prove nothing", () => {
    expect(empty).toEqual(expect.arrayContaining(["Africa", "South America"]));
  });
  it.each(both())("%s: each has a strip cell and a closing section saying “No reported box office yet”, with its note", (_w, tree) => {
    const t = text(tree);
    for (const [k, note] of [["Africa", AFRICA_NOTE], ["South America", SOUTH_AMERICA_NOTE]] as const) {
      if (!empty.includes(k)) continue;
      // Twice a layout: the continent strip, and the place's own section.
      expect(t.split(note).length - 1, k).toBe(2);
      expect(t).toMatch(new RegExp(`${k}\\s*(—\\s*)?No reported box office yet`, "i"));
      const section = [...tree.querySelectorAll("section[aria-labelledby]")].find(
        (s) => text(tree.ownerDocument.getElementById(s.getAttribute("aria-labelledby")!)) === k,
      );
      expect(section, `${k} has its own section`).toBeDefined();
      expect(text(section)).toContain("No reported box office yet");
    }
  });
  it.each(both())("%s: the method note names both", (_w, tree) => {
    const t = text(tree.querySelector('[aria-label="How this page counts"]'));
    expect(t).toMatch(/Africa/);
    expect(t).toMatch(/South America/);
  });
  it("negative control: the shipped page (a7530590) drew Africa only — no South America anywhere", () => {
    // RevenueCountries.tsx at a7530590 filtered to `k.continent === "Africa" && k.countries.length === 0`.
    const shipped = board.continents.filter((k) => k.continent === "Africa" && k.countries.length === 0).map((k) => k.continent);
    expect(shipped).not.toContain("South America");
    // The canvas's South America note repeated its heading (review, item 2's nit).
    expect(SOUTH_AMERICA_NOTE).not.toMatch(/No reported box office/);
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
    // Rows of his in every country. The phone's continent rows print the
    // CONTINENT's total on the right, so it is never gold, even where he leads.
    expect(gold).toBe(hisCountryRows);
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
    }
    // A button on both: the desktop hero's primary; on the phone a secondary,
    // because the action bar is that screen's one gold action (k6, 3 Oct 2026).
    expect(r.desktop!.querySelector('a[href="/records/tours/revenue/countries"]')!.className).toMatch(/btnPrimary/);
    expect(r.phone!.querySelector('a[href="/records/tours/revenue/countries"]')!.className).toMatch(/btnSecondary/);
  });
});

describe("the board's words, and nothing it keeps as data only", () => {
  const html = renderToStaticMarkup(<CountriesPage />);
  it.each(both())("%s: multi-night runs, never stands (the revenue board's wording)", (_w, tree) => {
    expect(text(tree)).not.toMatch(/\bstands?\b/i);
  });
  it.each(both())("%s: every run sits inside its artist's row, marked, with its own figures", (w, tree) => {
    const t = text(tree);
    for (const c of board.countries)
      for (const a of c.artists)
        for (const st of a.stands) {
          const r = runParts(st, money(w));
          expect(t, `${c.name} ${a.artist}`).toContain(r.marker);
          expect(t, `${c.name} ${a.artist}`).toContain(`${r.place} · ${r.meta}`);
          expect(t, `${c.name} ${a.artist}`).toContain(r.gross);
        }
  });
  it("desktop: an artist with nights AND runs says the runs are in the total, never in the best night", () => {
    const t = text(desktop!);
    for (const c of board.countries) for (const a of c.artists) if (runsNote(a)) expect(t).toContain(runsNote(a)!);
  });
  it("no row's source line reaches the page", () => {
    for (const r of [...revenueShows, ...revenueStands]) expect(html).not.toContain(r.source);
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
