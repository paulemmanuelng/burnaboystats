import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent, within } from "@testing-library/react";

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
import RevenueBoard from "../app/components/RevenueBoard";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { showsBoard, pct, scaleWidth } from "../app/lib/showsBoard";
import { REVENUE_AS_OF, REVENUE_SOURCE } from "../app/lib/revenueSource";
import { RUNS_HEADING, RUNS_LEDE } from "../app/lib/multiNightRuns";
import { compactGross } from "../app/lib/grossLabel";
import { usdFull } from "../app/lib/revenueByCountry";
import { declaredAt } from "./fixtures/phoneTrees";
import { text, trees } from "./fixtures/phoneTrees";

/**
 * Highest-grossing shows, the new design — Claude Design round 1 (4 Oct 2026),
 * Job 2 ("the record night"), built with the review's fixes 11–19 and the
 * owner's rulings Q4, N2, N4 and N6. One block per new behaviour, each with a
 * negative control taken from a string the site or the canvas actually carried.
 * Q4 and k3 live in tests/boxOfficeDebug1003; N4's rank and name rules in
 * tests/goldMarksHisRows; N6 with another artist at No. 1 in
 * tests/recordNightGold.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const BOARD_CSS = read("app/records/tours/revenue/revenue.module.css");
const PHONE_CSS = read("app/components/mobileRevenue.module.css");
const GLOBALS = read("app/globals.css");
const page = trees(renderToStaticMarkup(<RevenuePage />));
const b = showsBoard();
const boardShows = revenueShows.map(({ source: _s, ...r }) => r);

// ── The figures ─────────────────────────────────────────────────────────────
describe("the hero's figures are derived from the board's rows (lib/showsBoard.ts)", () => {
  it("each recomputes from tourRevenue.ts", () => {
    const his = revenueShows.filter((s) => s.artist === "Burna Boy");
    const sum = (xs: typeof revenueShows) => xs.reduce((t, s) => t + s.revenue, 0);
    expect(b.count).toBe(revenueShows.length);
    expect(b.hisCount).toBe(his.length);
    expect(b.hisTop10).toBe(revenueShows.slice(0, 10).filter((s) => s.artist === "Burna Boy").length);
    expect(b.boardGross).toBe(sum(revenueShows));
    expect(b.hisGross).toBe(sum(his));
    expect(b.millionPlus).toBe(revenueShows.filter((s) => s.revenue >= 1e6).length);
    expect(b.top).toMatchObject({ venue: revenueShows[0].venue, revenue: revenueShows[0].revenue });
    expect(b.last.revenue).toBe(revenueShows.at(-1)!.revenue);
    expect(b.spread).toBe(Math.round(revenueShows[0].revenue / revenueShows.at(-1)!.revenue));
  });

  it("the artists' shares cover the board exactly, largest first, his among them", () => {
    expect(b.artists.reduce((t, a) => t + a.gross, 0)).toBe(b.boardGross);
    expect(b.artists.reduce((t, a) => t + a.count, 0)).toBe(b.count);
    expect(b.artists.map((a) => a.gross)).toEqual([...b.artists.map((a) => a.gross)].sort((x, y) => y - x));
    expect(b.artists.find((a) => a.his)!.share).toBeCloseTo(b.hisShare, 12);
    expect(new Set(b.artists.map((a) => a.artist)).size).toBe(new Set(revenueShows.map((s) => s.artist)).size);
  });

  it("the page prints them, not typed copies: both layouts", () => {
    const d = text(page.desktop!), p = text(page.phone!);
    for (const t of [d, p]) {
      expect(t).toContain(`${b.hisTop10} of 10`);
      expect(t).toContain(pct(b.hisShare));
      expect(t).toContain(`Shows · ${b.artists.length} artists`);
    }
    expect(d).toContain(`${b.millionPlus}Nights of $1M or more`);
    const src = read("app/records/tours/revenue/page.tsx");
    expect(src).not.toMatch(/\b(9 of 10|65\.7%|130×)/);
  });

  it("negative control: the canvas's typed count of small shares (\"six artists hold under 3%\") is wrong", () => {
    // Highest-Grossing Shows.dc.html, direction 2b: "six artists hold under 3% each" (review fix 19).
    const under3 = b.artists.filter((a) => a.share < 0.03).length;
    expect(under3).not.toBe(6);
    expect(under3).toBe(5);
  });
});

// ── Hero labels (fix 15) and ledes (fix 3) ─────────────────────────────────
describe("fix 15: the share is labelled a share, and the spread a ratio", () => {
  it("“His share of the board” on both layouts; “Top night ÷ smallest” on the record card", () => {
    expect(text(page.desktop!)).toContain("His share of the board");
    expect(text(page.phone!)).toContain("His share of the board");
    expect(text(page.desktop!.querySelector('[aria-label="The biggest night on the board"]'))).toContain(`${b.spread}×Top night ÷ smallest`);
  });
  it("negative control: the canvas's labels are gone", () => {
    // GXShowsPhone: "His gross" over 65.7%; GXShowsDesk: "The smallest night" under 130×.
    expect(text(page.phone!)).not.toMatch(/His gross\b/i);
    expect(text(page.desktop!)).not.toContain("The smallest night");
  });
});

describe("fix 3: the lede says what is on the board — verified nights", () => {
  it("names the top and the bottom from the data", () => {
    const lede = `Every reported single night by an African artist we have verified, ranked by gross — from ${usdFull(b.top.revenue)} to ${usdFull(b.last.revenue)}.`;
    expect(text(page.desktop!)).toContain(lede);
  });
  it("negative control: the canvas's lede claimed every reported night", () => {
    expect(text(page.desktop!)).not.toContain("Every single night reported for an African artist");
  });
});

// ── One money form a screen ─────────────────────────────────────────────────
describe("one money form on each layout", () => {
  it("the desktop prints full dollars only; the phone the rows' compact form only", () => {
    expect(text(page.desktop!)).not.toMatch(/\$\d+\.\d+[MK]\b/);
    expect(text(page.phone!)).not.toMatch(/\$\d{1,3}(,\d{3})+/);
    expect(text(page.phone!)).toContain(compactGross(b.hisGross));
    expect(text(page.phone!)).toContain(compactGross(b.last.revenue));
  });
  it("negative control: the canvas's phone printed the record in full above compact rows", () => {
    const canvasPhone = "$6,147,209 Burna Boy · London Stadium, London · 58,973 tickets … $6.147M";
    expect(canvasPhone).toMatch(/\$\d{1,3}(,\d{3})+/);
  });
});

// ── The share bar ───────────────────────────────────────────────────────────
describe("the share bar: one segment per artist, his gold, a 2px ground gap", () => {
  it.each([
    ["desktop", () => page.desktop!],
    ["phone", () => page.phone!],
  ] as const)("%s", (_w, tree) => {
    const bar = tree().querySelector('[class*="shareBar"]')!;
    expect(bar.getAttribute("role")).toBe("img");
    expect(bar.getAttribute("aria-label")).toBe(b.artists.map((a) => `${a.artist} ${pct(a.share)}`).join(", "));
    const segs = [...bar.children];
    expect(segs.length).toBe(b.artists.length);
    segs.forEach((s, i) => {
      expect(/segHis/.test(s.className), b.artists[i].artist).toBe(b.artists[i].his);
      expect(parseFloat((s as HTMLElement).style.width)).toBeCloseTo(100 * b.artists[i].share, 2);
    });
  });
  it("the gap and the segment inks, on both stylesheets", () => {
    for (const css of [BOARD_CSS, PHONE_CSS]) {
      expect(declaredAt(css, ".shareBar", "gap", 1440)).toBe("2px");
      expect(declaredAt(css, ".seg", "background", 1440)).toBe("var(--other)");
      expect(declaredAt(css, ".segHis", "background", 1440)).toBe("var(--gold-fill)");
    }
  });
});

// ── Tokens (§8, fix 9, #408 k4) ────────────────────────────────────────────
describe("the new tokens: --other, --hover, --hatch", () => {
  const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const lum = (c: number[]) => {
    const [r, g, bl] = c.map((v) => {
      const s = v / 255;
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const ratio = (a: string, c: string) => {
    const [x, y] = [lum(rgb(a)), lum(rgb(c))].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const pair = (name: string) => {
    const m = new RegExp(`--${name}:\\s*light-dark\\((#[0-9a-f]{6}),\\s*(#[0-9a-f]{6})\\)`, "i").exec(GLOBALS);
    if (!m) throw new Error(`no --${name}`);
    return [m[1], m[2]];
  };
  /** A cool neutral: its blue channel at or above its red. */
  const cool = (hex: string) => rgb(hex)[2] >= rgb(hex)[0];

  it("--other clears 3:1 on the page in both themes, and is cool beside the gold on paper (fix 9)", () => {
    const [light, dark] = pair("other");
    const [bgL, bgD] = pair("bg");
    expect(ratio(light, bgL)).toBeGreaterThanOrEqual(3);
    expect(ratio(dark, bgD)).toBeGreaterThanOrEqual(3);
    expect(cool(light)).toBe(true);
    expect(dark).toBe("#74747e");
  });
  it("negative control: the drawn light --other (#857d71) is the gold's own warm brown", () => {
    expect(cool("#857d71")).toBe(false);
  });
  it("--hover is #408 k4's mix; --hatch has both arms", () => {
    expect(GLOBALS).toContain("--hover: light-dark(color-mix(in srgb, var(--bg-raised) 40%, var(--bg)), var(--bg-raised));");
    expect(GLOBALS).toMatch(/--hatch:\s*light-dark\(rgba\(23, 20, 15, 0\.10\), rgba\(245, 244, 240, 0\.10\)\);/);
    // The canvas's literal light hover is not minted.
    expect(GLOBALS).not.toMatch(/--hover:\s*#f0ebe2/i);
  });
});

// ── The board: scale bars and the chips (desktop) ──────────────────────────
describe("desktop board: scale bars against No. 1, kept under a filter; ranks kept; count announced", () => {
  it("every row's bar is its gross ÷ No. 1, his gold", () => {
    const { container } = render(<RevenueBoard shows={boardShows} />);
    const rows = [...container.querySelectorAll('[role="row"]')].slice(1);
    expect(rows.length).toBe(revenueShows.length);
    rows.forEach((r, i) => {
      const fill = r.querySelector('[class*="scaleFill"]') as HTMLElement;
      expect(parseFloat(fill.style.width)).toBe(parseFloat(scaleWidth(revenueShows[i].revenue, revenueShows[0].revenue)));
      expect(/scaleFillHis/.test(fill.className)).toBe(revenueShows[i].artist === "Burna Boy");
    });
  });

  it("filtering to Tiwa Savage keeps her board ranks and the No. 1 scale, and announces the count", () => {
    const { container, getByRole } = render(<RevenueBoard shows={boardShows} />);
    const live = container.querySelector('[aria-live="polite"]')!;
    expect(live.textContent).toBe(`${revenueShows.length} of ${revenueShows.length} shown`);
    fireEvent.click(getByRole("button", { name: /^Tiwa Savage/ }));
    const hers = revenueShows.map((s, i) => ({ s, rank: i + 1 })).filter((r) => r.s.artist === "Tiwa Savage");
    expect(live.textContent).toBe(`${hers.length} of ${revenueShows.length} shown`);
    const rows = [...container.querySelectorAll('[role="row"]')].slice(1);
    expect(rows.map((r) => r.children[0].textContent)).toEqual(hers.map((h) => String(h.rank).padStart(2, "0")));
    rows.forEach((r, i) => {
      expect(parseFloat((r.querySelector('[class*="scaleFill"]') as HTMLElement).style.width)).toBe(parseFloat(scaleWidth(hers[i].s.revenue, revenueShows[0].revenue)));
    });
    // Negative control: rescaled to her own top night, her first bar would be full.
    expect(scaleWidth(hers[0].s.revenue, hers[0].s.revenue)).toBe("100.00%");
    expect(parseFloat(rows[0].querySelector<HTMLElement>('[class*="scaleFill"]')!.style.width)).toBeLessThan(10);
  });

  it("the chip on-state is an ember edge and wash with an ink label — never gold (N2)", () => {
    for (const css of [BOARD_CSS, PHONE_CSS]) {
      expect(declaredAt(css, ".chipOn", "border-color", 1440)).toBe("var(--ember)");
      expect(declaredAt(css, ".chipOn", "color", 1440)).toBe("var(--text)");
      expect(declaredAt(css, ".chipOn", "background", 1440)).toMatch(/^color-mix\(in srgb, var\(--ember\)/);
      expect(declaredAt(css, ".chipOn", "background", 1440)).not.toMatch(/gold/);
      expect(declaredAt(css, ".chipOn", "background-color", 1440)).toBeUndefined();
    }
  });
  it("negative control: the shipped on-states — the board's ember label, the certs rail's gold fill", () => {
    // mobileRevenue.module.css at a7530590, and mobileCerts.module.css's .chipOn as live.
    const shippedBoard = ".chipOn { background: color-mix(in srgb, var(--ember) calc(16% * var(--wash-strength)), transparent); border-color: var(--ember); color: var(--ember); }";
    expect(declaredAt(shippedBoard, ".chipOn", "color", 390)).not.toBe("var(--text)");
    expect(declaredAt(read("app/components/mobileCerts.module.css"), ".chipOn", "background-color", 390)).toBe("var(--gold-fill)");
  });

  it("focus: 2px gold over a 2px ground gap, on both layouts' chips", () => {
    for (const css of [BOARD_CSS, PHONE_CSS]) {
      expect(declaredAt(css, ".chip:focus-visible", "box-shadow", 1440)).toBe("0 0 0 2px var(--bg), 0 0 0 4px var(--gold)");
    }
  });

  it("the bars grow on first view only, and reduced motion is honoured by the global rule", () => {
    expect(BOARD_CSS).toMatch(/\.boardGrow \.scaleFill \{ animation: barGrow var\(--dur-slow\)/);
    expect(GLOBALS).toMatch(/@media \(prefers-reduced-motion: reduce\) \{\s*\*, \*::before, \*::after \{\s*animation-duration: 0\.001ms !important;/);
  });
});

// ── The phone: chips, live count, active chip ──────────────────────────────
describe("phone: artist chips keep ranks, announce the count, and name the filter", () => {
  it("Wizkid: one row at his board rank, “1 of 82 shows · Wizkid”", () => {
    const { container } = render(<RevenuePage />);
    const phone = container.querySelector('[class*="screen"]') as HTMLElement;
    const rail = phone.querySelector('[role="group"]') as HTMLElement;
    const chips = [...rail.querySelectorAll("button")].map((x) => x.childNodes[0].textContent);
    expect(chips[0]).toBe("All");
    // The runs chip sits between All and Burna Boy (the owner, 4 Oct 2026).
    expect(chips[1]).toBe(RUNS_HEADING);
    expect(chips[2]).toBe("Burna Boy");
    fireEvent.click(within(rail).getByRole("button", { name: /^Wizkid/ }));
    const rank = revenueShows.findIndex((s) => s.artist === "Wizkid") + 1;
    const n = revenueShows.filter((s) => s.artist === "Wizkid").length;
    expect(text(phone.querySelector('[aria-live="polite"]'))).toBe(`${n} of ${revenueShows.length} shows · Wizkid`);
    const rows = [...phone.querySelectorAll('[class*="showRow"]')];
    expect(rows.length).toBe(n);
    expect(text(rows[0].children[0])).toBe(String(rank).padStart(2, "0"));
    expect(within(rail).getByRole("button", { name: /^Wizkid/ }).getAttribute("aria-pressed")).toBe("true");
  });
});

// ── Multi-night runs (fix 12) ───────────────────────────────────────────────
// Since 4 Oct 2026 the runs are the rail's second chip on both layouts, not a
// section beneath the board: the lede is read from the chip's view.
describe("fix 12: RUNS_LEDE verbatim at the runs' head on both layouts, then the derived note", () => {
  it.each(["runs-title", "runs-title-m"])("%s", (id) => {
    const { container, unmount } = render(<RevenuePage />);
    const desktop = container.querySelector('[class*="desktopOnly"]') as HTMLElement;
    const phone = [...container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
    const tree = id === "runs-title" ? desktop : phone;
    // The chip by its label: getByRole over a whole layout takes seconds in jsdom.
    fireEvent.click([...tree.querySelectorAll("button[aria-pressed]")].find((b) => b.childNodes[0].textContent === RUNS_HEADING)!);
    const sec = container.querySelector(`section[aria-labelledby="${id}"]`)!;
    const head = text(sec.querySelector("p"));
    expect(head.startsWith(RUNS_LEDE)).toBe(true);
    expect(head).toMatch(/No per-night split is invented for them: each total would sit in the top \w+ of a board of single nights it never had\.$/);
    // Every run: its nights, and its combined tickets in the tickets column;
    // its tour where the layout's row has a Tour column (the desktop's).
    const rows = id === "runs-title" ? [...sec.querySelectorAll('[role="row"]')].slice(1) : [...phone.querySelectorAll('[class*="showRow"]')];
    expect(rows.length).toBe(revenueStands.length);
    revenueStands.forEach((s, i) => {
      if (id === "runs-title") expect(text(rows[i])).toContain(s.tour);
      expect(text(rows[i])).toContain(`${s.shows} nights`);
      expect(text(rows[i].querySelector('[class*="showTickets"]'))).toBe(s.tickets);
    });
    unmount();
  });
  it("negative control: the canvas's phone lede was not RUNS_LEDE", () => {
    // GXShowsPhone.dc.html:62, verbatim.
    const canvas = "Reported only as one combined total, so listed here rather than ranked against single nights. No per-night split is invented.";
    expect(canvas.startsWith(RUNS_LEDE)).toBe(false);
  });
});

// ── Source note (fix 18) ────────────────────────────────────────────────────
describe("fix 18: the source line is REVENUE_SOURCE + “, as of ” + REVENUE_AS_OF on both layouts", () => {
  const sourceOf = (tree: Element) => {
    const dts = [...tree.querySelectorAll('section[aria-label="Sources and method"] dt')];
    return text(dts.find((d) => text(d) === "Source")!.nextElementSibling);
  };
  it("desktop and phone", () => {
    expect(sourceOf(page.desktop!)).toBe(`${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`);
    expect(sourceOf(page.phone!)).toBe(`${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`);
  });
  it("negative control: the canvas's typed phone source fails", () => {
    const canvas = `TouringData, republishing Billboard Boxscore and Pollstar; cross-checked with press · ${REVENUE_AS_OF}.`;
    expect(canvas).not.toBe(`${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`);
  });
});

// ── The way to the countries page ──────────────────────────────────────────
describe("the countries page link: primary on desktop, secondary on the phone (item 13)", () => {
  it("both present", () => {
    expect(page.desktop!.querySelector('a[href="/records/tours/revenue/countries"]')!.className).toMatch(/btnPrimary/);
    const a = page.phone!.querySelector('a[href="/records/tours/revenue/countries"]')!;
    expect(a.className).toMatch(/btnSecondary/);
    expect(text(a.firstElementChild)).toBe("Artists by country");
    expect(a.lastElementChild!.getAttribute("aria-hidden")).toBe("true");
  });
});

// ── The share card (fix 11) ─────────────────────────────────────────────────
describe("fix 11: the share card's ladder names each bar's artist", () => {
  const og = read("app/records/tours/revenue/opengraph-image.tsx");
  it("labels are “{artist} · {venue}”, from the data, and the card is versioned on them", () => {
    expect(og).toMatch(/label: `\$\{s\.artist\} · \$\{s\.venue\}`/);
    expect(og).toMatch(/ogId\(`\$\{JSON\.stringify\(card\)\}/);
    expect(og).toMatch(/bigHis: b\.top\.his/);
    const labels = revenueShows.slice(0, 12).map((s) => `${s.artist} · ${s.venue}`);
    expect(new Set(labels.slice(2, 4)).size).toBe(2);
  });
  it("negative control: the canvas's venue-only labels made rows 03 and 04 identical", () => {
    const canvas = revenueShows.slice(2, 4).map((s) => `${s.flag} ${s.venue}`);
    expect(new Set(canvas).size).toBe(1);
  });
});
