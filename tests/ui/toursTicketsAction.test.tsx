import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

/** The fixture switch: two shows on sale, the soonest and a later one. */
const { state, SALE } = vi.hoisted(() => ({
  state: { onSale: false },
  SALE: { "Apple Music Hall": "https://onsale.example/apple-music-hall", "London Stadium": "https://onsale.example/london-stadium" } as const,
}));
vi.mock("../../app/data/tours", async (importOriginal) => {
  const real = await importOriginal<typeof import("../../app/data/tours")>();
  const withSale = real.upcomingShows.map((u) => (u.venue in SALE ? { ...u, onSale: SALE[u.venue as keyof typeof SALE] } : u));
  return {
    ...real,
    get upcomingShows() {
      return state.onSale ? withSale : real.upcomingShows;
    },
  };
});

import ToursPage from "../../app/records/tours/page";
import { upcomingShows } from "../../app/data/tours";

/**
 * J3-13 (decided 8 Oct 2026: "Highest-grossing shows ↗"; fixes 65, 69, 73,
 * 76). While nothing is on sale, the tours page's one gold fill, on both
 * layouts, is "Highest-grossing shows ↗" to the box-office board, and the
 * generic Ticketmaster link is gone. Once a show has an on-sale URL of its
 * own, the soonest such show's "Tickets ↗" is the fill — in the desktop
 * panel and on the phone's bar — later ones are outlined, and the page's
 * action drops to an outline.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

function pageOn(iso: string, onSale: boolean) {
  state.onSale = onSale;
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${iso}T12:00:00Z`));
  const html = renderToStaticMarkup(ToursPage());
  vi.useRealTimers();
  state.onSale = false;
  const doc = parse(html);
  return { html, desk: doc.querySelector('[class*="_desktopOnly_"]')!, phone: doc.querySelector('[class*="_screen_"]')! };
}

/** The gold fills a layout carries: the global btnPrimary and the phone bar's. */
const fills = (root: Element) =>
  [...root.querySelectorAll('.btnPrimary, [class*="_actionPrimary_"]')].map((a) => ({ text: clean(a.textContent), href: a.getAttribute("href") }));

describe("nothing on sale (the data today)", () => {
  const { html, desk, phone } = pageOn("2026-10-14", false);

  it("the data has no on-sale show", () => {
    expect(upcomingShows.filter((u) => u.onSale)).toEqual([]);
  });

  it("desktop: one gold fill, 'Highest-grossing shows ↗' to the board, under the lede", () => {
    expect(fills(desk)).toEqual([{ text: "Highest-grossing shows ↗", href: "/records/tours/revenue" }]);
    const actions = desk.querySelector('[class*="_heroActions_"]')!;
    expect(actions.previousElementSibling!.className).toMatch(/_lede_/);
    expect(actions.nextElementSibling!.getAttribute("data-provenance")).toBe("p1");
  });

  it("phone: one gold fill, the bar reading 'Highest-grossing shows ↗' to the board", () => {
    expect(fills(phone)).toEqual([{ text: "Highest-grossing shows↗", href: "/records/tours/revenue" }]);
  });

  it("no Ticketmaster URL anywhere on either layout", () => {
    expect(html).not.toMatch(/ticketmaster/i);
  });
});

describe("two shows on sale (a fixture: Apple Music Hall, then London Stadium)", () => {
  const { desk, phone } = pageOn("2026-10-14", true);
  const ticketLinks = [...desk.querySelectorAll('[class*="_ticketPanel_"] a')];

  it("desktop: the soonest show's Tickets ↗ is the only gold fill; the later one is outlined", () => {
    expect(fills(desk)).toEqual([{ text: "Tickets ↗", href: SALE["Apple Music Hall"] }]);
    expect(ticketLinks.map((a) => [clean(a.textContent), a.getAttribute("href"), a.classList.contains("btnPrimary") ? "fill" : "outline"])).toEqual([
      ["Tickets ↗", SALE["Apple Music Hall"], "fill"],
      ["Tickets ↗", SALE["London Stadium"], "outline"],
    ]);
    for (const a of ticketLinks) {
      expect(a.getAttribute("target")).toBe("_blank");
      expect(a.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });

  it("desktop: the page's own action drops to an outline", () => {
    const board = [...desk.querySelectorAll('[class*="_heroActions_"] a')].find((a) => clean(a.textContent) === "Highest-grossing shows ↗")!;
    expect(board.className).toMatch(/\bbtnSecondary\b/);
    expect(board.className).not.toMatch(/\bbtnPrimary\b/);
  });

  it("phone: the bar reads 'Tickets ↗' to the soonest show's own page", () => {
    expect(fills(phone)).toEqual([{ text: "Tickets↗", href: SALE["Apple Music Hall"] }]);
  });

  it("once that show is played, the next on sale takes the fill", () => {
    const after = pageOn("2026-10-30", true);
    expect(fills(after.desk)).toEqual([{ text: "Tickets ↗", href: SALE["London Stadium"] }]);
    expect(fills(after.phone)).toEqual([{ text: "Tickets↗", href: SALE["London Stadium"] }]);
  });
});

describe("negative control: the Ticketmaster actions main shipped", () => {
  it("both fail: the generic artist page, labelled as tickets, as the screen's gold fill", () => {
    // records/tours/page.tsx and MobileTours.tsx on main (f20b5347), verbatim.
    const SHIPPED_DESK = `<a class="btn btnPrimary" href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272" target="_blank" rel="noopener noreferrer">Tickets · Ticketmaster ↗</a>`;
    const SHIPPED_PHONE = `<div class="_actionBar_x"><a href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272" target="_blank" rel="noopener noreferrer" class="_actionPrimary_x">Tickets · Ticketmaster<span aria-hidden="true">↗</span></a></div>`;
    expect(fills(parse(SHIPPED_DESK).body)).not.toEqual([{ text: "Highest-grossing shows ↗", href: "/records/tours/revenue" }]);
    expect(fills(parse(SHIPPED_PHONE).body)).not.toEqual([{ text: "Highest-grossing shows↗", href: "/records/tours/revenue" }]);
    expect(SHIPPED_DESK + SHIPPED_PHONE).toMatch(/ticketmaster/i);
  });
});
