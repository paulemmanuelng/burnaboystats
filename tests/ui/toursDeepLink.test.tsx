import { render, screen, cleanup, act, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursExplorer from "../../app/components/ToursExplorer";
import MobileTours from "../../app/components/MobileTours";
import { tours } from "../../app/data/tours";
import { onThisDayEvents } from "../../app/lib/onThisDay";
import { DATE_PARAM, TOUR_PARAM, showDateIso, tourForSlug, tourSlug } from "../../app/lib/tourDeepLink";

/**
 * V-otd-02 (debug pass, 5 Oct 2026). On This Day's show rows linked a bare
 * /records/tours, where every night sits inside a collapsed tour: on
 * /on-this-day/1-april, "Burna Boy played Brighton Music Hall, Boston" landed
 * on the top of Tours & Live with the venue nowhere on screen (0 visible
 * copies on a phone; on desktop only I Told Them… is open). Each row now
 * carries #tour=<slug>&date=<day>, and both tours layouts open that tour and
 * bring the night's row into view.
 */

const BRIGHTON = "/records/tours#tour=african-giant-tour&date=2019-04-01";
const AGT = /African Giant Tour/;
const ITT = /I Told Them… Tour/;

const phone = () =>
  render(
    <MobileTours
      tours={tours}
      topGross="$30.46M"
      topTourName="I Told Them…"
      countryCount={40}
      regionCount={6}
      biggestNight="60,000"
      biggestVenue="London Stadium"
      yearSpan="2018–2026"
      hisShowCount={20}
      revenueShowCount={60}
      appearanceCount={50}
      headlinedCount={30}
    />
  );

/** Stand in a box for every element (jsdom has no layout) and record scrolls. */
function watchScrolls() {
  const calls: { el: Element; o: ScrollIntoViewOptions }[] = [];
  const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
  const had = proto.scrollIntoView;
  proto.scrollIntoView = function (this: Element, o?: ScrollIntoViewOptions) {
    calls.push({ el: this, o: o! });
  };
  vi.spyOn(Element.prototype, "getClientRects").mockImplementation(() => [{}] as unknown as DOMRectList);
  return { calls, restore: () => (proto.scrollIntoView = had) };
}

let restore = () => {};
afterEach(() => {
  cleanup();
  restore();
  vi.restoreAllMocks();
  window.history.replaceState(null, "", "/");
});

const button = (name: RegExp) => screen.getByRole("button", { name });

describe("On This Day's show rows name the night", () => {
  it("1 April: Brighton Music Hall links to its tour and its date", () => {
    const e = onThisDayEvents.find((x) => x.headline === "Burna Boy played Brighton Music Hall, Boston")!;
    expect(e.href).toBe(BRIGHTON);
  });

  it("every tour night without a gross row lands on a real tour and one of its dates", () => {
    const nights = onThisDayEvents.filter((e) => e.kind === "show" && e.href.startsWith("/records/tours#"));
    expect(nights.length).toBeGreaterThanOrEqual(69); // the sweep counted 69 tour nights on a bare link
    for (const e of nights) {
      const hash = new URLSearchParams(e.href.split("#")[1]);
      const tour = tourForSlug(hash.get(TOUR_PARAM), tours);
      expect(tour, e.id).not.toBeNull();
      expect(tour!.dates!.some((d) => showDateIso(d.date) === hash.get(DATE_PARAM)), e.id).toBe(true);
    }
    // No tour night is left on the bare hub: only the two dated live moments
    // (the World Cup final, the AFCON finale), which the desktop page lists
    // as moments rather than inside a tour.
    const bare = onThisDayEvents.filter((e) => e.kind === "show" && e.href === "/records/tours");
    expect(bare.every((e) => e.source.data === "liveMoments")).toBe(true);
  });

  it("every tour's slug is its own", () => {
    const slugs = tours.map((t) => tourSlug(t.name));
    expect(new Set(slugs).size).toBe(tours.length);
    expect(slugs).toContain("i-told-them-tour");
    expect(slugs).toContain("love-damini-tour");
  });
});

describe("the tours page opens the night a link names", () => {
  it("phone: every tour starts shut; the link opens African Giant and centres Brighton Music Hall", () => {
    const w = watchScrolls();
    restore = w.restore;
    window.history.replaceState(null, "", BRIGHTON);
    const { container } = phone();
    expect(button(AGT)).toHaveAttribute("aria-expanded", "true");
    const row = container.querySelector('[data-show="2019-04-01"]')!;
    expect(row.textContent).toContain("Brighton Music Hall");
    expect(w.calls.map((c) => [c.el, c.o])).toEqual([[row, { block: "center", behavior: "instant" }]]);
  });

  it("desktop: the link opens African Giant over the default and centres the night's row", () => {
    const w = watchScrolls();
    restore = w.restore;
    window.history.replaceState(null, "", BRIGHTON);
    const { container } = render(<ToursExplorer tours={tours} />);
    expect(button(AGT)).toHaveAttribute("aria-expanded", "true");
    expect(button(ITT)).toHaveAttribute("aria-expanded", "false");
    const row = container.querySelector('tr[data-show="2019-04-01"]')!;
    expect(row.textContent).toContain("Brighton Music Hall");
    expect(w.calls.map((c) => [c.el, c.o])).toEqual([[row, { block: "center", behavior: "instant" }]]);
  });

  it("a date that is not one of the tour's nights still opens the tour, and goes to its row", () => {
    const w = watchScrolls();
    restore = w.restore;
    window.history.replaceState(null, "", "/records/tours#tour=african-giant-tour&date=1999-01-01");
    phone();
    expect(button(AGT)).toHaveAttribute("aria-expanded", "true");
    expect(w.calls.map((c) => c.el)).toEqual([button(AGT)]);
  });

  it("a change of fragment on the page opens the tour it names", () => {
    const w = watchScrolls();
    restore = w.restore;
    phone();
    expect(button(AGT)).toHaveAttribute("aria-expanded", "false");
    act(() => {
      window.history.replaceState(null, "", BRIGHTON);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    expect(button(AGT)).toHaveAttribute("aria-expanded", "true");
    expect(w.calls).toHaveLength(1);
  });

  it("picking another tour takes the link out of the address bar, so a reload does not put it back", () => {
    restore = watchScrolls().restore;
    window.history.replaceState(null, "", BRIGHTON);
    render(<ToursExplorer tours={tours} />);
    fireEvent.click(button(ITT));
    expect(button(ITT)).toHaveAttribute("aria-expanded", "true");
    expect(window.location.hash).toBe("");
    expect(window.location.pathname).toBe("/records/tours");
  });

  it("an unknown tour opens nothing new and moves nothing", () => {
    const w = watchScrolls();
    restore = w.restore;
    window.history.replaceState(null, "", "/records/tours#tour=no-such-tour&date=2019-04-01");
    render(<ToursExplorer tours={tours} />);
    expect(button(ITT)).toHaveAttribute("aria-expanded", "true"); // the design's default stands
    expect(w.calls).toEqual([]);
  });

  it("negative control: the link as it shipped (/records/tours) left Brighton Music Hall shut away on both layouts", () => {
    const w = watchScrolls();
    restore = w.restore;
    window.history.replaceState(null, "", "/records/tours");
    const desk = render(<ToursExplorer tours={tours} />);
    const mob = phone();
    expect(desk.container.textContent).not.toContain("Brighton Music Hall");
    expect(mob.container.textContent).not.toContain("Brighton Music Hall");
    expect(w.calls).toEqual([]);
  });
});
