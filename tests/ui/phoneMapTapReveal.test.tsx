import { render, screen, fireEvent, act, within, cleanup } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/map",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));
// The hit shapes load after idle; without them a tap resolves to the shape
// under the finger (codeAt), which is all a test with no layout can give.
vi.mock("../../app/components/useTourMapHits", async (orig) => ({
  ...(await orig<typeof import("../../app/components/useTourMapHits")>()),
  useTourMapHits: () => null,
}));

import MobileTourMap from "../../app/components/MobileTourMap";
import { tourMapProps } from "../../app/lib/tourMapData";

/**
 * V-tourscars-03 (debug pass, 5 Oct 2026): on the phone tour map a tap opens
 * the country's panel in the flow under the map, and that is below the fold.
 * Read live in headless Chrome at 390x844 with the page at the top: the map
 * at 400–660, the panel's top at 750, the fixed "Festivals & shows" bar from
 * 769, so 19px of the panel's border showed and its name sat under the bar;
 * at 375x667 the bar starts at 592 and none of the panel showed. The page
 * scrolled only for a ?country= deep link, never for a tap.
 *
 * Now a tap (or Enter) whose panel head (name, region, Close) is not clear of
 * the bar scrolls to where a deep link opens: the chips under the back bar
 * (their scroll-margin-top, 84px), the map whole, the panel's top beneath
 * (262px at 390x844, the panel's head then at 489–547 over a bar at 769). On
 * a screen too short for all three, just far enough to clear the head. A head
 * already in view moves nothing.
 *
 * jsdom has no layout, so the rects below are the live ones, before the tap.
 */

type Geo = { chipsTop: number; headBottom: number; barTop: number };
let geo: Geo;
let scrollBy: ReturnType<typeof vi.fn>;

const isHead = (el: Element) => el.parentElement?.getAttribute("role") === "region" && el.parentElement.firstElementChild === el;
const isBar = (el: Element) => typeof el.className === "string" && /actionBar/.test(el.className);
const isChips = (el: Element) => el.getAttribute("role") === "radiogroup";
const rect = (top: number, bottom: number) => ({ top, bottom, left: 0, right: 390, width: 390, height: bottom - top, x: 0, y: top, toJSON() {} }) as DOMRect;

beforeEach(() => {
  window.history.replaceState(null, "", "/records/tours/map");
  scrollBy = vi.fn();
  vi.spyOn(window, "scrollBy").mockImplementation(scrollBy as unknown as typeof window.scrollBy);
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function (this: Element) {
    if (isHead(this)) return rect(geo.headBottom - 58, geo.headBottom);
    if (isBar(this)) return rect(geo.barTop, geo.barTop + 75);
    if (isChips(this)) return rect(geo.chipsTop, geo.chipsTop + 44);
    return rect(0, 0);
  });
  // .chips' scroll-margin-top, calc(84px + env(safe-area-inset-top)), as the
  // browser computes it with no inset; jsdom does not load the CSS module.
  const real = window.getComputedStyle.bind(window);
  vi.spyOn(window, "getComputedStyle").mockImplementation((el: Element, pseudo?: string | null) => {
    const cs = real(el, pseudo);
    return isChips(el) ? new Proxy(cs, { get: (t, k) => (k === "scrollMarginTop" ? "84px" : Reflect.get(t, k)) }) : cs;
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

const mapOf = () => screen.getByRole("group", { name: /World map of the countries where a Burna Boy show is documented/ });
const tap = (code: number) => fireEvent.click(mapOf().querySelector(`[data-code="${code}"]`)!);
const NG = 566;
const US = 840;

describe("a tap brings the panel's head out from under the 'Festivals & shows' bar (V-tourscars-03)", () => {
  it("390x844 at the top: the page scrolls 262px, to the deep link's spot", () => {
    geo = { chipsTop: 346, headBottom: 808, barTop: 769 }; // panel top 750
    render(<MobileTourMap data={tourMapProps} />);
    tap(NG);
    expect(screen.getByRole("region", { name: "Nigeria" })).toBeInTheDocument();
    expect(window.location.search).toBe("?country=ng");
    expect(scrollBy).toHaveBeenCalledTimes(1);
    expect(scrollBy).toHaveBeenCalledWith({ top: 346 - 84, behavior: "smooth" });
  });

  it("375x667 scrolled 150 (the whole map in view, none of the panel): 112px, to the same spot", () => {
    geo = { chipsTop: 196, headBottom: 658, barTop: 592 };
    render(<MobileTourMap data={tourMapProps} />);
    tap(US);
    expect(screen.getByRole("region", { name: "United States" })).toBeInTheDocument();
    expect(scrollBy).toHaveBeenCalledWith({ top: 112, behavior: "smooth" });
  });

  it("320x568 scrolled 200: the deep link's spot (62px) would leave the head under the bar, so it scrolls 126px to clear it", () => {
    geo = { chipsTop: 146, headBottom: 627, barTop: 501 };
    render(<MobileTourMap data={tourMapProps} />);
    tap(NG);
    expect(scrollBy).toHaveBeenCalledWith({ top: 126, behavior: "smooth" });
  });

  it("under reduced motion the scroll is instant", () => {
    geo = { chipsTop: 346, headBottom: 808, barTop: 769 };
    const mm = window.matchMedia;
    window.matchMedia = (q: string) => ({ ...mm(q), matches: q === "(prefers-reduced-motion: reduce)" });
    try {
      render(<MobileTourMap data={tourMapProps} />);
      tap(NG);
    } finally {
      window.matchMedia = mm;
    }
    expect(scrollBy).toHaveBeenCalledWith({ top: 262, behavior: "auto" });
  });

  it("Enter on a country is a tap too", () => {
    geo = { chipsTop: 346, headBottom: 808, barTop: 769 };
    render(<MobileTourMap data={tourMapProps} />);
    const ng = mapOf().querySelector<SVGElement>(`[data-code="${NG}"]`)!;
    act(() => ng.focus());
    fireEvent.keyDown(ng, { key: "Enter" });
    expect(screen.getByRole("region", { name: "Nigeria" })).toBeInTheDocument();
    expect(scrollBy).toHaveBeenCalledWith({ top: 262, behavior: "smooth" });
  });

  it("tapping the country already open, from the top again, brings its panel back up", () => {
    geo = { chipsTop: 346, headBottom: 808, barTop: 769 };
    render(<MobileTourMap data={tourMapProps} />);
    tap(NG);
    tap(NG);
    expect(scrollBy).toHaveBeenCalledTimes(2);
  });

  it("a head already clear of the bar moves nothing: 390x844 scrolled 150, and the 820x1180 tablet", () => {
    geo = { chipsTop: 196, headBottom: 659, barTop: 769 };
    render(<MobileTourMap data={tourMapProps} />);
    tap(NG);
    expect(screen.getByRole("region", { name: "Nigeria" })).toBeInTheDocument();
    cleanup();
    geo = { chipsTop: 292, headBottom: 738, barTop: 1105 };
    render(<MobileTourMap data={tourMapProps} />);
    tap(US);
    expect(screen.getByRole("region", { name: "United States" })).toBeInTheDocument();
    expect(scrollBy).not.toHaveBeenCalled();
  });

  it("nothing scrolls without a tap: not on a deep-link load, not on Close", () => {
    geo = { chipsTop: 346, headBottom: 808, barTop: 769 };
    window.history.replaceState(null, "", "/records/tours/map?country=gb");
    render(<MobileTourMap data={tourMapProps} />);
    const panel = screen.getByRole("region", { name: "United Kingdom" });
    expect(scrollBy).not.toHaveBeenCalled();
    fireEvent.click(within(panel).getByRole("button", { name: "Close" }));
    expect(scrollBy).not.toHaveBeenCalled();
  });

  it("the head the measure reads is the panel's name line, region and Close", () => {
    geo = { chipsTop: 346, headBottom: 808, barTop: 769 };
    render(<MobileTourMap data={tourMapProps} />);
    tap(NG);
    const head = screen.getByRole("region", { name: "Nigeria" }).firstElementChild as HTMLElement;
    expect(head.textContent).toContain("Nigeria");
    expect(head.textContent).toContain("Africa");
    expect(within(head).getByRole("button", { name: "Close" })).toBeInTheDocument();
  });
});
