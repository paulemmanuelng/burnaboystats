import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
// The share card is rendered for real, short of the PNG: ImageResponse keeps
// the element tree it was handed, so the test reads the colour Satori would draw.
vi.mock("next/og", () => ({
  ImageResponse: class {
    constructor(
      public element: React.ReactElement,
      public options: unknown,
    ) {}
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

/**
 * N6 (the owner, 4 Oct 2026): the record-night figure is gold only while that
 * night is his. The canvas (GXShowsDesk, GXShowsPhone, GXOG) drew it
 * `var(--gold)` / #ffb627 whoever held No. 1. Today the night is his, so the
 * live board cannot show the other half of the rule: this file puts another
 * artist's night at the top of the board — a copy of Fally Ipupa's La Défense
 * Arena row, a dollar above his London Stadium — and renders every place the
 * record figure prints.
 */

const BIGGER = vi.hoisted(() => ({ value: 0 }));
vi.mock("../app/data/tourRevenue", async (orig) => {
  const m = await orig<typeof import("../app/data/tourRevenue")>();
  const fally = m.revenueShows.find((s) => s.artist === "Fally Ipupa")!;
  BIGGER.value = m.revenueShows[0].revenue + 1;
  return { ...m, revenueShows: [{ ...fally, revenue: BIGGER.value }, ...m.revenueShows] };
});

import RevenuePage from "../app/records/tours/revenue/page";
import { showsBoard } from "../app/lib/showsBoard";
import { trees } from "./fixtures/phoneTrees";
import * as og from "../app/records/tours/revenue/opengraph-image";
import { ogLadder } from "../app/lib/og-image";
import { metadata } from "../app/records/tours/revenue/page";

type El = { props?: { style?: Record<string, unknown>; children?: unknown } };
/** Every element in a tree whose style matches, depth first. */
const find = (node: unknown, hit: (st: Record<string, unknown>) => boolean, out: El[] = []): El[] => {
  if (Array.isArray(node)) node.forEach((n) => find(n, hit, out));
  else if (node && typeof node === "object" && "props" in node) {
    const el = node as El;
    if (el.props?.style && hit(el.props.style)) out.push(el);
    find(el.props?.children, hit, out);
  }
  return out;
};
const GOLD = "#ffb627";
/** The big record figure on a ladder card: the one 76px Anton line. */
const bigFigure = (res: unknown) => {
  const hits = find((res as { element: unknown }).element, (st) => st.fontSize === 76);
  expect(hits.length, "the card has exactly one big figure").toBe(1);
  return hits[0].props!;
};

describe("N6: another artist at No. 1 — the record figure prints in ink", () => {
  const b = showsBoard();
  const page = trees(renderToStaticMarkup(<RevenuePage />));

  it("the board's No. 1 is not his here, so the rule is exercised", () => {
    expect(b.top.artist).toBe("Fally Ipupa");
    expect(b.top.his).toBe(false);
  });

  it("desktop card: no gold class on the figure", () => {
    const fig = page.desktop!.querySelector('[aria-label="The biggest night on the board"] [class*="recordFigure"]')!;
    expect(fig).not.toBeNull();
    expect(fig.className).not.toMatch(/recordFigureHis/);
  });

  it("phone card: no gold class on the figure", () => {
    const fig = page.phone!.querySelector('[aria-label="The biggest night on the board"] [class*="recordFigure"]')!;
    expect(fig).not.toBeNull();
    expect(fig.className).not.toMatch(/recordFigureHis/);
  });

  it("the share card: the record figure is drawn in ink, captioned with her night", () => {
    expect(og.generateImageMetadata().length).toBe(1);
    const card = og.default();
    const big = bigFigure(card);
    expect(big.style!.color).not.toBe(GOLD);
    expect(big.style!.color).toBe("#f5f4f0");
    const caps = find((card as unknown as { element: unknown }).element, (st) => st.maxWidth !== undefined);
    expect(caps.map((c) => String(c.props!.children)).join(" ")).toMatch(/^Fally Ipupa · La Défense Arena/);
  });

  it("the share card's caption keeps \"No. 1\" on one line (a no-break space)", () => {
    const cap = (c: string) => /No\.\u00a01 of \d+$/.test(c);
    const caps = find((og.default() as unknown as { element: unknown }).element, (st) => st.maxWidth !== undefined);
    expect(cap(String(caps[0].props!.children))).toBe(true);
    // Negative control: the caption as #413 first shipped it (151396b7), which
    // the 220px column broke between "No." and "1 of 82".
    expect(cap("Burna Boy · London Stadium · 2024 — No. 1 of 82")).toBe(false);
  });

  it("the meta description and the Dataset name the No. 1's artist and venue, never a typed one", () => {
    expect(metadata.description).toMatch(/led by Fally Ipupa's \$\d+\.\d{2}M La Défense Arena concert\./);
    expect(metadata.description).not.toMatch(/Burna Boy's/);
    const html = renderToStaticMarkup(<RevenuePage />);
    expect(html).toMatch(/led by Fally Ipupa's \$\d+\.\d{2}M La Défense Arena concert\./);
    expect(html).not.toMatch(/London Stadium concert/);
  });

  it("negative control: the share card's walker sees the gold when the figure is his", () => {
    const res = ogLadder({
      kicker: "k", title: "t", big: "$6,147,209", bigHis: true, bigCap: "c",
      graphTitle: "g", rows: [], path: "/records/tours/revenue", foot: "f",
    });
    expect(bigFigure(res).style!.color).toBe(GOLD);
  });

  it("negative control: the meta line as it shipped on main (0ec4cbe2) is caught", () => {
    // page.tsx at 0ec4cbe2, with the figure filled in as it printed.
    const shipped =
      "Every verified single-show gross by an African artist — 82 shows, ranked by box-office gross and led by Burna Boy's $6.15M London Stadium concert.";
    expect(shipped).toMatch(/Burna Boy's/);
    expect(shipped).not.toMatch(/led by Fally Ipupa's/);
  });

  it("negative control: with his night back on top the gold returns (the live board)", async () => {
    const { showsBoard: live } = await vi.importActual<typeof import("../app/lib/showsBoard")>("../app/lib/showsBoard");
    const { revenueShows: real } = await vi.importActual<typeof import("../app/data/tourRevenue")>("../app/data/tourRevenue");
    expect(live(real).top.his).toBe(true);
  });
});
