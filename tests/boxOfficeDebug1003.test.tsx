import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../app/records/tours/revenue/page";
import CountriesPage from "../app/records/tours/revenue/countries/page";
import { chipOrder } from "../app/components/RevenueBoard";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { AFROBEATS_EDITED_ON, afrobeatsArtists } from "../app/data/afrobeats";
import { REVENUE_AS_OF, REVENUE_BODY, REVENUE_FOOTER_NOTE, REVENUE_READ_ON, REVENUE_REPORTS, REVENUE_SOURCE } from "../app/lib/revenueSource";
import { compactGross } from "../app/lib/grossLabel";
import { numberWord } from "../app/lib/homeData";
import { RUNS_HEADING, runRankCeiling } from "../app/lib/multiNightRuns";
import { countryInSentence, idSlug, revenueByCountry, runParts, usdFull, usdM } from "../app/lib/revenueByCountry";
import { footerFor } from "../app/lib/links";
import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import { GET as toursApi } from "../app/api/v1/tours/route";
import { cssRules, declaredAt } from "./fixtures/phoneTrees";
import { text, trees } from "./fixtures/phoneTrees";

// The boards keep the reader's chip in the address bar and in this history
// entry (lib/useBoardView; debug pass 4 Oct 2026, A-03). Each test starts on a
// fresh entry at the bare address, as a fresh visit does — not on the chip a
// previous test left there.
beforeEach(() => window.history.replaceState(null, "", "/"));

/**
 * The live debug pass of 3 Oct 2026 over the box-office pages
 * (/records/tours/revenue and /records/tours/revenue/countries), lane A — one
 * block per finding, each with the value or string the site shipped as its
 * negative control. The source-note leak (k1) is tests/tourRevenueServerOnly;
 * the gold ranks (bo-01, C2) are in tests/goldMarksHisRows too.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const revenue = trees(renderToStaticMarkup(<RevenuePage />));
const countriesHtml = renderToStaticMarkup(<CountriesPage />);
const countries = trees(countriesHtml);
const board = revenueByCountry();
const BOARD_CSS = read("app/records/tours/revenue/revenue.module.css");
const PHONE_CSS = read("app/components/mobileRevenue.module.css");

// ── k2 ──────────────────────────────────────────────────────────────────────
describe("k2: a phone row at 320 clips the city, never the year", () => {
  // The five rows the pass measured truncated at 320 (scrollWidth > clientWidth).
  const FIVE = [
    ["Burna Boy", "Washington, D.C.", "2024"],
    ["Burna Boy", "Washington, D.C.", "2022"],
    ["Burna Boy", "Hollywood, FL", "2024"],
    ["Tiwa Savage", "Silver Spring, MD", "2022"],
    ["Tiwa Savage", "San Francisco", "2022"],
  ] as const;
  const metas = () => [...revenue.phone!.querySelectorAll('[class*="metaSplit"]')];

  /** The year is in a part that never shrinks; the city is the part that clips. */
  const yearKept = (meta: Element, year: string) => {
    const parts = [...meta.children];
    const keep = parts.filter((p) => /metaKeep/.test(p.className));
    const city = parts.find((p) => /metaCity/.test(p.className));
    return keep.some((p) => p.textContent === ` · ${year}`) && !!city && !city.textContent!.includes(year);
  };

  it("every phone row reads “<artist> · <city> · <year>”, the city in its own clipping part", () => {
    expect(metas().length).toBe(revenueShows.length);
    const wrong = revenueShows.flatMap((s, i) => {
      const m = metas()[i];
      return m.textContent === `${s.artist} · ${s.city} · ${s.year}` && yearKept(m, s.year) ? [] : [`#${i + 1} "${m.textContent}"`];
    });
    expect(wrong).toEqual([]);
  });

  it("the five rows the pass measured are among them", () => {
    for (const [artist, city, year] of FIVE) {
      const m = metas().find((e) => e.textContent === `${artist} · ${city} · ${year}`);
      expect(m, `${artist} · ${city} · ${year}`).toBeDefined();
      expect(yearKept(m!, year)).toBe(true);
    }
  });

  it("the CSS: the line is a flex row; the artist and year keep their width, the city shrinks with an ellipsis", () => {
    expect(declaredAt(PHONE_CSS, ".metaSplit", "display", 320)).toBe("flex");
    expect(declaredAt(PHONE_CSS, ".metaKeep", "flex", 320)).toBe("none");
    expect(declaredAt(PHONE_CSS, ".metaKeep", "white-space", 320)).toBe("pre");
    expect(declaredAt(PHONE_CSS, ".metaCity", "min-width", 320)).toBe("0");
    expect(declaredAt(PHONE_CSS, ".metaCity", "overflow", 320)).toBe("hidden");
    expect(declaredAt(PHONE_CSS, ".metaCity", "text-overflow", 320)).toBe("ellipsis");
  });

  it("negative control: the meta line as shipped (one string, one ellipsis) fails", () => {
    const shipped = new DOMParser().parseFromString(
      `<div class="meta">Burna Boy · Washington, D.C. · 2024</div>`,
      "text/html",
    ).body.firstElementChild!;
    expect(yearKept(shipped, "2024")).toBe(false);
  });
});

// ── k3 (and Q4, 4 Oct 2026) ───────────────────────────────────────────────
describe("k3 / Q4: the phone top bar names the page, with no badge, and its label gives way first", () => {
  const LABEL = "Highest-grossing shows";
  const bar = () => revenue.phone!.querySelector('[class*="backBar"]')!;

  it("the label can shrink and ellipsise; the buttons cannot (k3's four declarations, kept)", () => {
    expect(declaredAt(PHONE_CSS, ".backLabel", "flex", 320)).toBe("0 1 auto");
    expect(declaredAt(PHONE_CSS, ".backLabel", "min-width", 320)).toBe("0");
    expect(declaredAt(PHONE_CSS, ".backLabel", "overflow", 320)).toBe("hidden");
    expect(declaredAt(PHONE_CSS, ".backLabel", "text-overflow", 320)).toBe("ellipsis");
    expect(declaredAt(PHONE_CSS, ".backLabel", "white-space", 320)).toBe("nowrap");
    expect(declaredAt(PHONE_CSS, ".backBtn", "flex", 320)).toBe("none");
    // The gaps close to 8px under 360, as before.
    expect(declaredAt(PHONE_CSS, ".backBar", "gap", 320)).toBe("8px");
    expect(declaredAt(PHONE_CSS, ".backBar", "gap", 390)).toBe("12px");
  });

  it("the shows bar carries the full name and no badge (Q4: the record card states the figure beneath)", () => {
    expect(text(bar().querySelector('[class*="backLabel"]'))).toBe(LABEL);
    expect(bar().querySelector('[class*="badge"]')).toBeNull();
    expect(text(bar())).not.toMatch(/\$\d/);
  });

  it("the full name fits the 320 bar now the badge is gone", () => {
    // The pass's own measurements at 320: a 284px row, 8px gaps, back and menu
    // 44px each; Space Mono 11px at 0.11em is 7.94px a character.
    const row = 284, buttons = 44 + 44, perChar = 7.94;
    const room = row - 2 * 8 - buttons;
    expect(LABEL.length * perChar).toBeLessThanOrEqual(room);
  });

  it("negative control: with the shipped badge (\"$6.15M\", 43px) the full name could not fit", () => {
    const row = 284, buttons = 44 + 44, perChar = 7.94, badge = 43;
    expect(LABEL.length * perChar).toBeGreaterThan(row - 3 * 8 - buttons - badge);
  });
});

// ── k4 ──────────────────────────────────────────────────────────────────────
describe("k4: his gold stays AA on a hovered row in light", () => {
  const GLOBALS = read("app/globals.css");
  /** The light half of a `--name: light-dark(#light, #dark)` token. */
  const lightOf = (name: string) => {
    const m = new RegExp(`--${name}:\\s*light-dark\\((#[0-9a-f]{6}),\\s*(#[0-9a-f]{6})\\)`, "i").exec(GLOBALS);
    if (!m) throw new Error(`no light-dark token --${name}`);
    return m[1];
  };
  const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const lum = (c: number[]) => {
    const [r, g, b] = c.map((v) => {
      const s = v / 255;
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const ratio = (a: number[], b: number[]) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const gold = rgb(lightOf("gold-ink"));
  const bg = rgb(lightOf("bg"));
  const raised = rgb(lightOf("bg-raised"));

  /** The `--hover` token's value in globals.css (4 Oct 2026: the hover moved
   *  into a token, so a row's `var(--hover)` resolves through it). */
  const hoverToken = () => {
    const m = /--hover:\s*([^;]+);/.exec(GLOBALS);
    if (!m) throw new Error("no --hover token");
    return m[1].trim();
  };
  /** The light hover fill a `.row:hover` background declares. */
  const lightHover = (value: string): number[] => {
    if (value === "var(--hover)") return lightHover(hoverToken());
    if (value === "var(--bg-raised)") return raised;
    const m = /^light-dark\(color-mix\(in srgb, var\(--bg-raised\) (\d+)%, var\(--bg\)\), var\(--bg-raised\)\)$/.exec(value);
    if (!m) throw new Error(`unrecognised hover: ${value}`);
    const p = Number(m[1]) / 100;
    return raised.map((v, i) => v * p + bg[i] * (1 - p));
  };

  it("the hovered row's light fill keeps #945e00 at 4.5:1 or more", () => {
    const hover = declaredAt(BOARD_CSS, ".row:hover", "background", 1440)!;
    expect(ratio(gold, lightHover(hover))).toBeGreaterThanOrEqual(4.5);
  });

  it("dark keeps --bg-raised", () => {
    const hover = declaredAt(BOARD_CSS, ".row:hover", "background", 1440)!;
    expect(hover).toBe("var(--hover)");
    expect(hoverToken()).toMatch(/, var\(--bg-raised\)\)$/);
  });

  it("negative control: the shipped hover (var(--bg-raised)) is 4.14:1, under AA", () => {
    const r = ratio(gold, lightHover("var(--bg-raised)"));
    expect(r).toBeLessThan(4.5);
    expect(r.toFixed(2)).toBe("4.14");
  });
});

// ── k6 ──────────────────────────────────────────────────────────────────────
describe("k6: one gold action on the phone revenue screen", () => {
  it("the countries link is a secondary button; the action bar is the only gold fill", () => {
    const a = revenue.phone!.querySelector('a[href="/records/tours/revenue/countries"]')!;
    expect(a.className).toMatch(/\bbtnSecondary\b/);
    expect(revenue.phone!.querySelectorAll(".btnPrimary").length).toBe(0);
    expect(revenue.phone!.querySelectorAll('[class*="actionPrimary"]').length).toBe(1);
  });

  it("negative control: the shipped link class counts as a second gold action", () => {
    const shipped = new DOMParser().parseFromString(`<a class="btn btnPrimary" href="/records/tours/revenue/countries">x</a>`, "text/html");
    expect(shipped.querySelectorAll(".btnPrimary").length).toBe(1);
  });
});

describe("the phone action bar leads to the countries board (owner, 4 Oct 2026)", () => {
  const bar = () => revenue.phone!.querySelector('[class*="actionBar"]')!;
  it("its one link goes to /records/tours/revenue/countries and says so", () => {
    const links = [...bar().querySelectorAll("a")];
    expect(links).toHaveLength(1);
    expect(links[0].getAttribute("href")).toBe("/records/tours/revenue/countries");
    expect(links[0].textContent!.trim()).toBe("Highest-grossing by country");
  });
  it("the screen carries no stat-card link", () => {
    expect(revenue.phone!.querySelector('a[href="/share"]')).toBeNull();
    expect(revenue.phone!.textContent).not.toMatch(/stat card/i);
  });
  it("negative control: the bar as it shipped in #413 fails both", () => {
    const shipped = new DOMParser().parseFromString(
      `<div class="actionBar"><a href="/share" class="actionPrimary">Make a stat card</a></div>`, "text/html");
    const a = shipped.querySelector("a")!;
    expect(a.getAttribute("href")).not.toBe("/records/tours/revenue/countries");
    expect(shipped.querySelector('a[href="/share"]')).not.toBeNull();
  });
});

// ── bo-02 ───────────────────────────────────────────────────────────────────
describe("bo-02: under 1240px the desktop board still prints every row's year", () => {
  const rows = () => [...revenue.desktop!.querySelectorAll('[role="row"]')].slice(1);

  it("each row's city line carries “ · <year>”, shown where the Tour column folds away", () => {
    expect(rows().length).toBe(revenueShows.length);
    const wrong = revenueShows.flatMap((s, i) => {
      const y = rows()[i].querySelector('[class*="cityYear"]');
      return y?.textContent === ` · ${s.year}` ? [] : [`#${i + 1}`];
    });
    expect(wrong).toEqual([]);
    expect(declaredAt(BOARD_CSS, ".cityYear", "display", 1440)).toBe("none");
    expect(declaredAt(BOARD_CSS, ".cityYear", "display", 1024)).toBe("inline");
    // …because the Tour cell is what goes below 1240.
    const fold = cssRules(BOARD_CSS).find(
      (r) => r.media === "@media (max-width: 1239px)" && r.selector.split(",").map((x) => x.trim()).includes(".row > :nth-child(4)"),
    );
    expect(fold?.body).toMatch(/display:\s*none/);
  });

  it("his two Capital One Arena nights now differ at 1024", () => {
    const visible1024 = (r: Element) => text(r.querySelector('[class*="venueCell"]'));
    const dc = rows().filter((r) => text(r).includes("Burna Boy") && text(r).includes("Capital One Arena")).map(visible1024);
    expect(dc.length).toBe(2);
    expect(new Set(dc).size).toBe(2);
  });

  it("negative control: the shipped city line (no year) makes them identical", () => {
    const shipped = ["Capital One Arena Washington, D.C.", "Capital One Arena Washington, D.C."];
    expect(new Set(shipped).size).toBe(1);
  });
});

// ── bo-04 ───────────────────────────────────────────────────────────────────
describe("bo-04: the chips run Burna Boy first, then by nights on the board", () => {
  const counts = revenueShows.reduce<Record<string, number>>((acc, s) => ({ ...acc, [s.artist]: (acc[s.artist] ?? 0) + 1 }), {});
  const descending = (order: string[]) => order.slice(1).every((a, i, xs) => i === 0 || counts[xs[i - 1]] >= counts[a]);

  it("from the data", () => {
    const order = chipOrder(counts);
    expect(order[0]).toBe("Burna Boy");
    expect(order.length).toBe(Object.keys(counts).length);
    expect(descending(order)).toBe(true);
  });

  it("the rendered chips follow it", () => {
    const chips = [...revenue.desktop!.querySelectorAll("button[aria-pressed]")].map((b) => b.childNodes[0].textContent);
    // All artists, then the runs chip (the owner, 4 Oct 2026), then the artists.
    expect(chips).toEqual(["All artists", RUNS_HEADING, ...chipOrder(counts)]);
  });

  it("negative control: the shipped order is not by count", () => {
    // The chip order the pass read off the live page.
    const shipped = ["Burna Boy", "Davido", "Asake", "Wizkid", "Rema", "Tyla", "Fally Ipupa", "Tiwa Savage", "Tems", "Fireboy DML"];
    expect(descending(shipped)).toBe(false);
  });
});

// ── bo-05 ───────────────────────────────────────────────────────────────────
describe("bo-05: the phone's biggest-night stat prints the rows' own figure", () => {
  it("the stat cell and row 01 read the same", () => {
    const top = revenueShows[0];
    const stat = revenue.phone!.querySelector('[class*="statValue"]')!;
    expect(text(stat)).toBe(compactGross(top.revenue));
    expect(text(revenue.phone!)).toContain(`${compactGross(top.revenue)}`);
  });

  it("negative control: the shipped stat ($X.XXM) differs from the row", () => {
    const top = revenueShows[0];
    expect(`$${(top.revenue / 1e6).toFixed(2)}M`).not.toBe(compactGross(top.revenue));
  });
});

// ── bo-06 ───────────────────────────────────────────────────────────────────
describe("bo-06: the runs note is derived and said once a layout", () => {
  const ceiling = runRankCeiling(revenueStands.map((s) => s.revenue), revenueShows.map((s) => s.revenue));

  /** Both layouts with the runs chip on: the note is said in its view since 4 Oct 2026. */
  const runsOn = () => {
    const r = render(<RevenuePage />);
    const desktop = r.container.querySelector('[class*="desktopOnly"]') as HTMLElement;
    const phone = [...r.container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
    // The chip by its label: getByRole over a whole layout takes seconds in jsdom.
    for (const tree of [desktop, phone]) {
      fireEvent.click([...tree.querySelectorAll("button[aria-pressed]")].find((b) => b.childNodes[0].textContent === RUNS_HEADING)!);
    }
    return { ...r, desktop, phone };
  };

  it("“top N” is the place the lowest-placed run would take among single nights", () => {
    for (const st of revenueStands) {
      const place = 1 + revenueShows.filter((s) => s.revenue > st.revenue).length;
      expect(place).toBeLessThanOrEqual(ceiling);
    }
    const v = runsOn();
    expect(text(v.desktop)).toContain(`each total would sit in the top ${numberWord(ceiling).toLowerCase()} of a board`);
    v.unmount();
  });

  it("the desktop says “no per-night split is invented” once, the phone once", () => {
    const count = (t: string) => (t.match(/no per-night split is invented/gi) ?? []).length;
    const v = runsOn();
    expect(count(text(v.desktop))).toBe(1);
    expect(count(text(v.phone))).toBe(1);
    v.unmount();
    // …and not at all while the chip is off: it belongs to the runs' view.
    expect(count(text(revenue.desktop!))).toBe(0);
    expect(count(text(revenue.phone!))).toBe(0);
  });

  it("negative control: the typed note as it shipped", () => {
    const page = read("app/records/tours/revenue/page.tsx");
    expect(page).not.toContain("each total would sit in the top five of a");
    // The shipped desktop text said it twice in a row.
    const shipped =
      "No per-night split is invented for them: each total would sit in the top five of a board of single nights it never had. Box-office reports … and no per-night split is invented for them.";
    expect((shipped.match(/no per-night split is invented/gi) ?? []).length).toBe(2);
  });
});

// ── bo-03 / sw-4 / C7, C11 ──────────────────────────────────────────────────
describe("bo-03 / sw-4 / C7: the box-office notes use the board's own source words", () => {
  const names = (note?: string) => !!note && /TouringData/.test(note) && /Pollstar/.test(note) && /Boxscore/.test(note);

  it("the footer note on /records and both box-office pages is REVENUE_FOOTER_NOTE", () => {
    for (const path of ["/records", "/records/tours/revenue", "/records/tours/revenue/countries"]) {
      expect(footerFor[path].note, path).toBe(REVENUE_FOOTER_NOTE);
      expect(names(footerFor[path].note), path).toBe(true);
    }
    expect(REVENUE_FOOTER_NOTE).toBe("Box-office figures via TouringData (Billboard Boxscore and Pollstar reports).");
  });

  it("the /records hub note and the countries method note print REVENUE_SOURCE", () => {
    const hub = read("app/records/page.tsx");
    expect(hub).toMatch(/\{REVENUE_SOURCE\}, as of \{REVENUE_AS_OF\}/);
    expect(hub).not.toContain("aggregating Billboard Boxscore");
    // Since the round-1 design (4 Oct 2026) the countries note is a list whose
    // Source line is REVENUE_SOURCE + ", as of " + REVENUE_AS_OF, as on the
    // shows page (review fix 18) — on both layouts.
    for (const tree of [countries.desktop!, countries.phone!])
      expect(text(tree)).toContain(`${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`);
  });

  it("the revenue page's footer links the countries page; /records/tours names it by its title", () => {
    expect(footerFor["/records/tours/revenue"].links.map((l) => l.href)).toContain("/records/tours/revenue/countries");
    const label = footerFor["/records/tours"].links.find((l) => l.href === "/records/tours/revenue/countries")?.label;
    expect(label).toBe("Highest-grossing artists by country");
  });

  // The two places the first pass left typed (review of #408): the home card's
  // note under his five shows, and /methodology's Tours & live card, which the
  // desktop page and MobileMethodology both render from the one `sources` row.
  it("the home note and /methodology's Tours & live card derive from REVENUE_BODY / REVENUE_REPORTS", async () => {
    const home = read("app/page.tsx");
    expect(home).toContain("Source: {REVENUE_BODY} ({REVENUE_REPORTS}) · the {topTour.name} grossed");
    expect(names(`Source: ${REVENUE_BODY} (${REVENUE_REPORTS})`)).toBe(true);
    const { default: Methodology } = await import("../app/methodology/page");
    const m = renderToStaticMarkup(<Methodology />).replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&");
    const card = `Box-office and attendance figures from ${REVENUE_REPORTS} as published by ${REVENUE_BODY}, where available`;
    expect(names(card)).toBe(true);
    // Both layouts: the desktop list and the phone's MobileMethodology.
    expect(m.split(card).length - 1).toBe(2);
    // Negative controls: the strings both places shipped at db02865b.
    expect(home).not.toContain("Source: TouringData / Billboard Boxscore");
    expect(m).not.toContain("Box-office and attendance figures from Billboard Boxscore and Pollstar where available");
    expect(names("Source: TouringData / Billboard Boxscore")).toBe(false);
    expect(names("Box-office and attendance figures from Billboard Boxscore and Pollstar where available")).toBe(false);
  });

  it("negative control: the shipped footer note and label fail", () => {
    expect(names("Box-office figures via Billboard Boxscore.")).toBe(false);
    expect("Box office by country").not.toBe("Highest-grossing artists by country");
  });
});

// ── sw-5 / C8 ───────────────────────────────────────────────────────────────
describe("sw-5 / C8: both box-office routes carry the board's read date", () => {
  const rows = sitemap();
  const dayOf = (path: string) => (rows.find((r) => r.url === `${siteUrl}${path}`)?.lastModified as Date | undefined)?.toISOString().slice(0, 10);

  it("in the sitemap, from REVENUE_READ_ON, and on the countries page's Dataset", () => {
    expect(REVENUE_READ_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // The feed can only move a route later, never earlier than its stamp.
    expect(dayOf("/records/tours/revenue")! >= REVENUE_READ_ON).toBe(true);
    expect(dayOf("/records/tours/revenue/countries")! >= REVENUE_READ_ON).toBe(true);
    expect(countriesHtml).toContain(`"dateModified":"${REVENUE_READ_ON}"`);
    // REVENUE_AS_OF is that day's month, never a second typed date.
    expect(REVENUE_AS_OF).toBe(new Date(`${REVENUE_READ_ON}T12:00:00Z`).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }));
  });

  it("negative control: the shipped stamp for the board (17 Sep) is older than the read", () => {
    expect("2026-09-17" < REVENUE_READ_ON).toBe(true);
  });

  // The finding's second half: #404 (merged 3 Oct 2026, ac1e9bf6) changed
  // CKay's and Olamide's "Trumpet" on their plaque and chart lists without a
  // register read, so verifiedOn (printed as "last verified") stays put and
  // an edited-on stamp dates the routes. The anchor is #404's own date, typed
  // here rather than read off AFROBEATS_EDITED_ON.
  const EDITED_404 = "2026-10-03";
  it.each(["/afrobeats/ckay", "/afrobeats/ckay/charts", "/afrobeats/olamide", "/afrobeats/olamide/charts"])(
    "%s is dated no earlier than #404's edit",
    (path) => {
      expect(dayOf(path), path).toBeDefined();
      expect(dayOf(path)! >= EDITED_404, `${path} says ${dayOf(path)}`).toBe(true);
    },
  );

  it("the date comes from the edited-on stamp, so verifiedOn keeps meaning the last register read", () => {
    for (const slug of ["ckay", "olamide"]) {
      expect(afrobeatsArtists.find((x) => x.slug === slug)?.swept, slug).toBe(true);
      expect(AFROBEATS_EDITED_ON[slug]).toBe(EDITED_404);
    }
    expect(read("app/sitemap.ts")).toMatch(/\[a\.verifiedOn, AFROBEATS_EDITED_ON\[a\.slug\]\]/);
  });

  it("negative control: the stamps the built sitemap shipped (18 Sep, 6 Sep) fail", () => {
    for (const shipped of ["2026-09-18", "2026-09-06"]) expect(shipped >= EDITED_404).toBe(false);
  });
});

// ── sw-3 ────────────────────────────────────────────────────────────────────
describe("sw-3: the home card of his five shows says they are his", () => {
  it("is titled “His highest-grossing shows” over homeData's topShows (his only)", () => {
    const home = read("app/page.tsx");
    expect(home).toContain(`<h3 className={styles.h3}>His highest-grossing shows</h3>`);
    expect(read("app/lib/homeData.ts")).toMatch(/topShows[\s\S]{0,200}artist === "Burna Boy"/);
    // Negative control: the shipped title, which reads as the whole board.
    expect(home).not.toContain(`<h3 className={styles.h3}>Highest-grossing shows</h3>`);
  });
});

// ── sw-7 ────────────────────────────────────────────────────────────────────
describe("sw-7: /api/v1/tours describes both box-office arrays", () => {
  it("names highestGrossingShows and multiNightStands, and keeps the key", async () => {
    const json = await toursApi().json();
    expect(json.description).toContain("`highestGrossingShows`");
    expect(json.description).toContain("`multiNightStands`");
    expect(json.description).toMatch(/not only his/);
    expect(Object.keys(json.data)).toEqual(expect.arrayContaining(["highestGrossingShows", "multiNightStands"]));
  });
});

// ── C1 ──────────────────────────────────────────────────────────────────────
describe("C1: every id on the countries page is one token, and every aria-labelledby resolves", () => {
  const problems = (doc: Document) => {
    const out: string[] = [];
    for (const el of doc.querySelectorAll("[id]")) if (/\s/.test(el.id)) out.push(`id "${el.id}" has whitespace`);
    for (const el of doc.querySelectorAll("[aria-labelledby]"))
      for (const ref of el.getAttribute("aria-labelledby")!.split(/\s+/).filter(Boolean))
        if (!doc.getElementById(ref)) out.push(`aria-labelledby "${ref}" resolves to nothing`);
    return out;
  };

  it("on both layouts", () => {
    expect(countries.d.querySelectorAll("[aria-labelledby]").length).toBeGreaterThan(4);
    expect(problems(countries.d)).toEqual([]);
    expect(idSlug("North America")).toBe("north-america");
  });

  it("negative control: the shipped North America section fails", () => {
    const shipped = new DOMParser().parseFromString(
      `<section aria-labelledby="k-North America"><h2 id="k-North America">North America</h2></section>`,
      "text/html",
    );
    expect(problems(shipped)).toEqual([
      `id "k-North America" has whitespace`,
      `aria-labelledby "k-North" resolves to nothing`,
      `aria-labelledby "America" resolves to nothing`,
    ]);
  });
});

// ── C2 / bo-01 (rendered), as N4 ruled (4 Oct 2026) ──────────────────────
describe("bo-01 / C2 / N4: no rank is gold on either box-office page, his included", () => {
  // The owner, 4 Oct 2026 (N4): gold marks his FIGURES; his name and every rank
  // are set like everyone else's. #408 had kept gold on his top-three ranks
  // (the board) and his No. 1s (the countries tables).
  const goldRanks = (tree: Element) => [...tree.querySelectorAll('[class*="rankTop"]')];
  it("on the revenue board", () => {
    expect(revenue.desktop!.querySelectorAll('[role="row"]').length).toBeGreaterThan(revenueShows.length);
    expect(goldRanks(revenue.desktop!)).toEqual([]);
    expect(goldRanks(revenue.phone!)).toEqual([]);
  });
  it("on the countries tables", () => {
    expect(board.hisLeads).toBeGreaterThan(0);
    expect(goldRanks(countries.desktop!)).toEqual([]);
  });
  it("and no rank class on either page carries gold", () => {
    expect(BOARD_CSS).not.toMatch(/\.rankTop\b/);
    for (const sel of [".rank", ".showRank"]) expect(declaredAt(BOARD_CSS, sel, "color", 1440), sel).not.toMatch(/--gold/);
    expect(declaredAt(PHONE_CSS, ".rank", "color", 390)).not.toMatch(/--gold/);
  });
  it("negative control: the rank cells as #408 shipped them light his rows", () => {
    // RevenueBoard.tsx and RevenueCountries.tsx at a7530590, verbatim.
    const shippedBoard = "className={`${styles.rank} ${s.artist === HIS && rank <= 3 ? styles.rankTop : \"\"}`}";
    const shippedCountries = "className={`${styles.rank} ${a.his && rank === 1 ? styles.rankTop : \"\"}`}";
    expect(shippedBoard).toMatch(/styles\.rankTop/);
    expect(shippedCountries).toMatch(/styles\.rankTop/);
    expect(read("app/components/RevenueBoard.tsx")).not.toMatch(/styles\.rankTop/);
    expect(read("app/components/RevenueCountries.tsx")).not.toMatch(/styles\.rankTop/);
  });
});

// ── C3 ──────────────────────────────────────────────────────────────────────
describe("C3: the phone countries screen keeps gold for his figure only", () => {
  const CSS = read("app/components/mobileRevenueCountries.module.css");
  // The round-1 design (4 Oct 2026) replaced the two stat cells with three
  // figure tiles (Nights · Continents · He leads); the rule is unchanged:
  // everyone's figures in ink, his gold. The badge stays plain muted text
  // (review fix 2).
  it("the badge (every artist's countries) and the nights figure are not gold; nor, since 4 Oct (A-04), “He leads”", () => {
    const badge = countries.phone!.querySelector('[class*="badge"]')!;
    expect(badge.className).toMatch(/mutedBadge/);
    const labels = [...countries.phone!.querySelectorAll('[class*="figLabel"]')];
    const value = (label: string) => labels.find((l) => text(l) === label)!.parentElement!.querySelector('[class*="figValue"]')!;
    expect(value("Nights").className).not.toMatch(/figHis/);
    expect(value("Continents").className).not.toMatch(/figHis/);
    // The owner's #420 ruling on the shows phone hero, carried here in the
    // debug pass of 4 Oct 2026 (A-04): the tiles are ink, "9 of 12" too.
    expect(value("He leads").className).not.toMatch(/figHis/);
    expect(declaredAt(CSS, ".mutedBadge.mutedBadge", "color", 390)).toBe("var(--text-muted)");
    expect(declaredAt(PHONE_CSS, ".figValue", "color", 390)).toBe("var(--text)");
    expect(declaredAt(CSS, ".figHis.figHis", "color", 390)).toBeUndefined();
    expect(PHONE_CSS).not.toMatch(/\.figHis\b/);
    expect(read("app/components/MobileRevenueCountries.tsx")).not.toMatch(/styles\.figHis/);
  });
  it("negative control: the tile as this page first shipped it took its gold from the shared sheet", () => {
    // MobileRevenueCountries.tsx at 590cae87 (PR #417 before the rebase onto #420), verbatim.
    const shipped = "<span className={`${styles.figValue} ${styles.figHis}`}>";
    expect(shipped).toMatch(/styles\.figHis/);
    // That sheet no longer declares it, so the class came out as "undefined" and the tile went ink.
    expect(declaredAt(PHONE_CSS, ".figHis", "color", 390)).toBeUndefined();
  });
  it("negative control: the shared classes alone are gold", () => {
    expect(declaredAt(PHONE_CSS, ".badge", "color", 390)).toBe("var(--gold)");
    expect(declaredAt(PHONE_CSS, ".statValue", "color", 390)).toBe("var(--gold)");
  });
});

// ── C4 ──────────────────────────────────────────────────────────────────────
describe("C4: the continent cards sit 18px under their heading", () => {
  it("as .standsLede leaves under the same heading on the board", () => {
    const css = read("app/records/tours/revenue/countries/countries.module.css");
    expect(declaredAt(css, ".cards", "margin", 1440)).toBe("18px 0 0");
    expect(declaredAt(BOARD_CSS, ".standsLede", "margin", 1440)).toBe("10px 0 18px");
  });
});

// ── C5 ──────────────────────────────────────────────────────────────────────
describe("C5: a run-only artist's row reads like a single night's, the run said once", () => {
  // Since the round-1 design (4 Oct 2026) a run prints inside its artist's
  // row with the board's run marker, its own gross and place, and the board's
  // run meta — on both layouts. Wizkid's O2 run is the case: no single night.
  const runOnly = board.countries.flatMap((c) => c.artists.filter((a) => !a.best && a.stands.length > 0).map((a) => ({ c, a })));
  it("the marker, then “<gross> · <venue>, <city> · <tour> · <dates> · <tickets> over <n> nights” — no “reported together”", () => {
    expect(runOnly.length).toBeGreaterThan(0);
    for (const { a } of runOnly)
      for (const st of a.stands) {
        // One money form a screen (fix 4): the short form on both since 4 Oct.
        const d = runParts(st, usdM);
        expect(text(countries.desktop!)).toContain(`${d.marker}${d.gross} · ${d.place} · ${d.meta}`);
        const p = runParts(st, usdM);
        expect(text(countries.phone!)).toContain(`${p.marker}${p.gross}${p.place} · ${p.meta}`);
      }
    for (const tree of [countries.desktop!, countries.phone!]) expect(text(tree)).not.toMatch(/reported together/i);
  });
  it("negative control: the shipped cell said it twice", () => {
    const shipped = "Nights reported together\n3 nights reported together · The O2 Arena, London (28–29 November and 1 December 2021)";
    expect((shipped.match(/nights reported together/gi) ?? []).length).toBe(2);
    expect((text(countries.desktop!).match(/Nights reported together\s*\d+ nights reported together/gi) ?? []).length).toBe(0);
  });
});

// ── C6 ──────────────────────────────────────────────────────────────────────
describe("C6: the ItemList names print the total it is ordered by", () => {
  const list = () => {
    const scripts = [...countriesHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    return scripts.find((s) => s["@type"] === "ItemList");
  };
  it("each name opens with its country's total", () => {
    const items = list().itemListElement as { name: string }[];
    board.countries.forEach((c, i) => {
      expect(items[i].name).toBe(`${c.name} — ${usdFull(c.total)} reported; led by ${c.leader.artist} (${usdFull(c.leader.total)})`);
    });
  });
  it("negative control: the shipped names ran out of order", () => {
    // The live JSON-LD's last three, verbatim: 378,802 above 502,612.
    const shipped = ["Ireland — Burna Boy, $378,802 reported", "Philippines — Tyla, $502,612 reported", "Singapore — Tyla, $385,207 reported"];
    const n = shipped.map((s) => Number(s.match(/\$([\d,]+)/)![1].replace(/,/g, "")));
    expect(n).not.toEqual([...n].sort((a, b) => b - a));
  });
});

// ── C9 ──────────────────────────────────────────────────────────────────────
describe("C9: a phone continent heading is its name alone", () => {
  it("exactly one labelled section per continent — the empty ones too — plus the ladder and the continent strip", () => {
    // Since the round-1 design (4 Oct 2026, Q1) Africa and South America have
    // sections of their own; the ladder and "By continent" are labelled too.
    const sections = [...countries.phone!.querySelectorAll("section[aria-labelledby]")].map((s) => s.getAttribute("aria-labelledby"));
    expect(sections).toEqual([
      "m-ladder-title",
      "m-continents-title",
      ...board.continents.map((k) => `m-${idSlug(k.continent)}-title`),
    ]);
    expect(board.continents.some((k) => k.countries.length === 0)).toBe(true);
  });
  it("each continent section's labelling h2 holds the continent only; its figures, where it has any, sit beside it", () => {
    for (const k of board.continents) {
      const s = countries.phone!.querySelector(`section[aria-labelledby="m-${idSlug(k.continent)}-title"]`)!;
      expect(s, k.continent).not.toBeNull();
      const h2 = countries.d.getElementById(s.getAttribute("aria-labelledby")!)!;
      expect(text(h2)).toBe(k.continent);
      if (k.countries.length > 0) expect(text(h2.parentElement)).toContain(usdM(k.total));
      else expect(text(h2.parentElement), k.continent).not.toMatch(/\$/);
    }
  });
  it("negative control: the shipped h2 ran the figures into the name", () => {
    expect("North America$34.31M · 60 nights").not.toBe("North America");
  });
});

// ── C10 ─────────────────────────────────────────────────────────────────────
describe("C10: under a million the short form is thousands", () => {
  it("$53K, $82K, $101K — and millions from $1M", () => {
    expect(usdM(53334)).toBe("$53K");
    expect(usdM(82481)).toBe("$82K");
    expect(usdM(100555)).toBe("$101K");
    expect(usdM(999_600)).toBe("$1.00M");
    expect(usdM(6_147_209)).toBe("$6.15M");
  });
  it("no “$0.xxM” on either layout", () => {
    expect(text(countries.d.body)).not.toMatch(/\$0\.\d\dM/);
  });
  it("negative control: the shipped form printed $0.05M", () => {
    expect(`$${(53334 / 1e6).toFixed(2)}M`).toBe("$0.05M");
  });
});

// ── sw-8 ────────────────────────────────────────────────────────────────────
describe("sw-8: the tables' labels say “the United States”", () => {
  it("in every country table's aria-label", () => {
    const labels = [...countries.desktop!.querySelectorAll('[role="table"]')].map((t) => t.getAttribute("aria-label"));
    for (const c of board.countries) expect(labels).toContain(`Box office leaders in ${countryInSentence(c.name)}`);
    expect(countryInSentence("United States")).toBe("the United States");
    expect(countryInSentence("Philippines")).toBe("the Philippines");
    expect(countryInSentence("Canada")).toBe("Canada");
    // Negative control: the shipped label.
    expect(labels).not.toContain("Box office leaders in United States");
  });
});
