import { render, screen, fireEvent, act, within, cleanup } from "@testing-library/react";
import { readFileSync } from "node:fs";

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

import MobileTourMap from "../../app/components/MobileTourMap";
import TourMapDesktop from "../../app/components/TourMapDesktop";
import TourMapText from "../../app/components/TourMapText";
import ListenerMap from "../../app/components/ListenerMap";
import { tourMapProps, VIEWS } from "../../app/lib/tourMapData";
import MapPage from "../../app/records/tours/map/page";

/**
 * The two tour-map layouts, as the design response of 30 Sep 2026 draws
 * them (Tour Map.dc.html and its two states canvases). Separate components:
 * the phone is MobileTourMap, the desktop TourMapDesktop.
 */

let keyboard = false;
beforeEach(() => {
  keyboard = false;
  window.history.replaceState(null, "", "/records/tours/map");
  const matches = Element.prototype.matches;
  vi.spyOn(Element.prototype, "matches").mockImplementation(function (this: Element, sel: string) {
    if (sel === ":focus-visible") return keyboard && this === document.activeElement;
    return matches.call(this, sel);
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

const mapOf = (root: HTMLElement = document.body) =>
  within(root).getByRole("group", { name: /World map of the countries where a Burna Boy show is documented/ });
const stop = (root?: HTMLElement) => mapOf(root).querySelector<SVGElement>('[data-code][tabindex="0"]')!;
const nameOf = (code: number) => tourMapProps.countries.find((c) => c.code === code)!;

describe("both layouts drop + and − (items 1, 2)", () => {
  it("no zoom buttons on the phone or the desktop", () => {
    render(<MobileTourMap data={tourMapProps} />);
    render(<TourMapDesktop data={tourMapProps} />);
    expect(screen.queryByRole("button", { name: /Zoom (in|out)/ })).toBeNull();
  });
  it("negative control: the listeners map keeps its + and − (item 73), so the query finds them", () => {
    render(<ListenerMap />);
    expect(screen.getAllByRole("button", { name: /Zoom (in|out)/ })).toHaveLength(2);
  });
});

describe("the phone: region views, not a zoom", () => {
  it("four chips, one current; a chip moves the one map's view and the hint names it", () => {
    render(<MobileTourMap data={tourMapProps} />);
    const radios = within(screen.getByRole("radiogroup", { name: "Map view" })).getAllByRole("radio");
    expect(radios.map((r) => r.textContent)).toEqual(["World", "Europe", "Africa", "Caribbean"]);
    expect(radios.filter((r) => r.getAttribute("aria-checked") === "true").map((r) => r.textContent)).toEqual(["World"]);
    expect(screen.getByText("Tap a country for its shows. A tap near a small place counts.")).toBeInTheDocument();

    fireEvent.click(radios[1]);
    expect(radios[1]).toHaveAttribute("aria-checked", "true");
    expect(mapOf().getAttribute("viewBox")).toBe(VIEWS.europe.join(" "));
    expect(screen.getByText("Europe view. Tap a country for its shows.")).toBeInTheDocument();
    expect(document.querySelectorAll('svg[role="group"]')).toHaveLength(1); // one map, not two stacked
  });

  it("negative control: the shipped hint was mono prose about geometry", () => {
    const shipped = "Same Natural Earth geometry as desktop, fitted to the viewport. Tap a country for its shows.";
    expect(shipped).not.toBe("Tap a country for its shows. A tap near a small place counts.");
  });

  it("each region row's HEADER LINE is the button, labelled 'Show {Region} on the map' (items 13, 82)", () => {
    render(<MobileTourMap data={tourMapProps} />);
    const rows = screen.getAllByRole("button", { name: /^Show .+ on the map$/ });
    expect(rows.map((b) => b.getAttribute("aria-label"))).toEqual(tourMapProps.regions.map((r) => `Show ${r.region} on the map`));
    // The country names sit outside the button.
    expect(rows[0].textContent).not.toContain("Nigeria");
    fireEvent.click(screen.getByRole("button", { name: "Show Caribbean on the map" }));
    expect(screen.getByRole("radio", { name: "Caribbean" })).toHaveAttribute("aria-checked", "true");
    fireEvent.click(screen.getByRole("button", { name: "Show Asia on the map" }));
    expect(screen.getByRole("radio", { name: "World" })).toHaveAttribute("aria-checked", "true");
  });

  it("the badge reads '{57} countries', and the footnote's counts are the data's (items 19, 24)", () => {
    render(<MobileTourMap data={tourMapProps} />);
    expect(screen.getByText(`${tourMapProps.totals.countries} countries`)).toBeInTheDocument();
    expect(
      screen.getByText(
        "Eight small places, six Caribbean islands plus Mauritius and Kosovo, are shown as dots. The list above names every country.",
      ),
    ).toBeInTheDocument();
  });

  it("Enter selects: the panel opens in the flow under the map, with 44px link rows and a close", () => {
    render(<MobileTourMap data={tourMapProps} />);
    keyboard = true;
    act(() => stop().focus());
    const code = Number(document.activeElement!.getAttribute("data-code"));
    fireEvent.keyDown(document.activeElement!, { key: "Enter" });
    const panel = screen.getByRole("region", { name: nameOf(code).name });
    // After the map in the page, not over it.
    expect(mapOf().compareDocumentPosition(panel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    fireEvent.click(within(panel).getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("region", { name: nameOf(code).name })).toBeNull();
  });

  it("an arrow to a country outside the view switches to its home view, and says so", () => {
    render(<MobileTourMap data={tourMapProps} />);
    keyboard = true;
    fireEvent.click(screen.getByRole("radio", { name: "Caribbean" }));
    act(() => stop().focus());
    fireEvent.keyDown(document.activeElement!, { key: "Home" }); // the first in region order: Africa
    const first = nameOf(tourMapProps.order[0]);
    expect(first.region).toBe("Africa");
    expect(screen.getByRole("radio", { name: "Africa" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByText("Africa view.")).toBeInTheDocument();
  });
});

describe("the desktop: figures, legend, find box", () => {
  it("the headline strip and its caveat are the data's (item 10)", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    const t = tourMapProps.totals;
    for (const v of [String(t.documentedShows), String(t.cities), t.years, t.biggestNight.tickets]) expect(screen.getByText(v)).toBeInTheDocument();
    expect(screen.getByText(`${t.biggestNight.venue} · ${t.biggestNight.when}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Documented shows only. Tour itineraries on this site start in ${t.itinerariesFrom}, and cities are counted as each record names them.`),
    ).toBeInTheDocument();
  });

  it("find: a city match selects its country and says what is documented there", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    const box = screen.getByLabelText("Find a country or city");
    const dimmed = () =>
      [...document.querySelectorAll("tbody tr")].filter((tr) => /rowDim/.test(tr.className)).map((tr) => tr.querySelector("th")!.textContent);
    fireEvent.change(box, { target: { value: "T" } });
    expect(dimmed()).toEqual([]); // the list narrows from the third letter (B12)
    expect(screen.queryByText(/No documented show in/)).toBeNull();
    fireEvent.change(box, { target: { value: "Tor" } });
    expect(screen.queryByText(/No documented show in/)).toBeNull();
    // Toronto keeps North America lit; the rest cannot match and dim (B12).
    expect(dimmed()).toEqual(["Africa", "Europe", "Asia", "South America", "Caribbean", "Oceania"]);
    fireEvent.change(box, { target: { value: "Toronto" } });
    expect(screen.getByText("Toronto · Canada · 5 documented tour dates")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Canada" })).toBeInTheDocument();
    fireEvent.change(box, { target: { value: "Lima" } });
    expect(screen.getByText("No documented show in ‘Lima’.")).toBeInTheDocument();
  });

  it("a hover previews; a pinned card stays while the pointer crosses other countries (TM Desktop: selected || hover)", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    const ghana = () => mapOf().querySelector('[data-code="288"]')!;
    // Nothing pinned: the hover previews Ghana. This also proves the move
    // reaches the map, so the assertion below is not vacuous.
    fireEvent.pointerMove(ghana(), { pointerType: "mouse" });
    expect(screen.getByRole("region", { name: "Ghana, preview" })).toBeInTheDocument();
    fireEvent.pointerLeave(mapOf());

    fireEvent.click(screen.getByRole("button", { name: "Nigeria" }));
    fireEvent.pointerMove(ghana(), { pointerType: "mouse" });
    // Ghana lights on the map, but the card with Nigeria's links stays.
    expect(screen.getByRole("region", { name: "Nigeria" })).toBeInTheDocument();
    expect(screen.queryByRole("region", { name: "Ghana, preview" })).toBeNull();
  });

  it("a list button pins its card; the pin pushes ONE history entry, and a move replaces it (item 76)", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    const before = window.history.length;
    fireEvent.click(screen.getByRole("button", { name: "Nigeria" }));
    expect(window.location.search).toBe("?country=ng");
    expect(window.history.length).toBe(before + 1);
    fireEvent.click(screen.getByRole("button", { name: "Canada" }));
    expect(window.location.search).toBe("?country=ca");
    expect(window.history.length).toBe(before + 1);
    expect(screen.getByRole("region", { name: "Canada" })).toBeInTheDocument();
  });
});

describe("the card's side is measured, and measured again when a preview becomes a pin (item 4)", () => {
  // The 1024 band as measured live on 1 Oct 2026: the frame is 942 × 424
  // inside its 1px border, the card 280 wide; New Zealand's preview is 296px
  // tall and its pinned card 386px (the link rows arrive). New Zealand sits
  // under the card's column from y 354, so only the PINNED card covers it.
  const FRAME = { w: 942, h: 424 };
  const CARD = { w: 280, preview: 296, pinned: 386 };
  const NZ = 554;

  beforeEach(() => {
    // A ResizeObserver that reports as it starts observing, as browsers do,
    // so the frame's size reaches the component.
    class SyncRO {
      constructor(private cb: ResizeObserverCallback) {}
      observe() {
        this.cb([], this as unknown as ResizeObserver);
      }
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal("ResizeObserver", SyncRO);
    const isFrame = (el: HTMLElement) => [...el.children].some((c) => c.tagName.toLowerCase() === "svg" && c.getAttribute("role") === "group");
    const isCard = (el: HTMLElement) => el.getAttribute("role") === "region" && !!el.closest('[class*="cardSlot"]');
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(function (this: HTMLElement) {
      return isFrame(this) ? FRAME.w : 0;
    });
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockImplementation(function (this: HTMLElement) {
      return isFrame(this) ? FRAME.h : 0;
    });
    vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockImplementation(function (this: HTMLElement) {
      return isCard(this) ? CARD.w : 0;
    });
    vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(function (this: HTMLElement) {
      if (!isCard(this)) return 0;
      return /, preview$/.test(this.getAttribute("aria-label") ?? "") ? CARD.preview : CARD.pinned;
    });
  });
  afterEach(() => vi.unstubAllGlobals());

  const side = (name: string) => {
    const slot = screen.getByRole("region", { name }).parentElement!;
    return /cardLeft/.test(slot.className) ? "left" : /cardRight/.test(slot.className) ? "right" : "?";
  };
  const nz = () => mapOf().querySelector<SVGElement>(`[data-code="${NZ}"]`)!;

  it("the premise: New Zealand's top is below the preview card and above the pinned one", () => {
    const c = nameOf(NZ);
    const [, wy, ww] = VIEWS.world;
    const top = (c.box[1] - wy) * (FRAME.w / ww);
    expect(top).toBeGreaterThan(9 + CARD.preview);
    expect(top).toBeLessThan(9 + CARD.pinned);
  });

  it("hover New Zealand: top-right; click it: the pinned card moves top-left and the close-up hides", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    expect(screen.getByText("Western Europe")).toBeInTheDocument();
    fireEvent.pointerMove(nz(), { pointerType: "mouse" });
    expect(side("New Zealand, preview")).toBe("right");
    expect(screen.getByText("Western Europe")).toBeInTheDocument();

    fireEvent.click(nz());
    expect(side("New Zealand")).toBe("left");
    expect(screen.queryByText("Western Europe")).toBeNull(); // B17
  });

  it("the keyboard path too: focus previews top-right, Enter pins top-left", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    keyboard = true;
    act(() => nz().focus());
    expect(side("New Zealand, preview")).toBe("right");
    fireEvent.keyDown(nz(), { key: "Enter" });
    expect(side("New Zealand")).toBe("left");
    expect(screen.queryByText("Western Europe")).toBeNull();
  });

  it("the placement effect re-runs on the pin and on the frame's height", () => {
    const src = readFileSync("app/components/TourMapDesktop.tsx", "utf8");
    const from = src.indexOf("// Placement (item 4)");
    const effect = src.slice(from, src.indexOf("]);", from) + 3);
    const deps = placementDeps(effect.slice(effect.lastIndexOf("}, [")));
    expect(deps).toEqual(expect.arrayContaining(["card", "preview", "frame.w", "frame.h"]));
  });

  it("negative control: the first build's deps line misses the pin and the frame's height", () => {
    const firstBuild = "  }, [card, frame.w, views.world]);";
    const deps = placementDeps(firstBuild);
    expect(deps).toContain("card");
    expect(deps).not.toContain("preview");
    expect(deps).not.toContain("frame.h");
  });
});

/** The names in an effect's closing deps line, "}, [a, b.c]);". */
const placementDeps = (line: string) =>
  line
    .match(/\}, \[([^\]]*)\]\);/)![1]
    .split(",")
    .map((s) => s.trim());

describe("?country= deep links (§5)", () => {
  it("gb: the UK's card, pinned", () => {
    window.history.replaceState(null, "", "/records/tours/map?country=gb");
    render(<TourMapDesktop data={tourMapProps} />);
    expect(screen.getByRole("region", { name: "United Kingdom" })).toBeInTheDocument();
  });
  it("gb on the phone: the Europe view, the panel open", () => {
    window.history.replaceState(null, "", "/records/tours/map?country=gb");
    render(<MobileTourMap data={tourMapProps} />);
    expect(screen.getByRole("radio", { name: "Europe" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("region", { name: "United Kingdom" })).toBeInTheDocument();
  });
  it("pe: a real country with no documented show gets one honest line, no links", () => {
    window.history.replaceState(null, "", "/records/tours/map?country=pe");
    render(<MobileTourMap data={tourMapProps} />);
    expect(screen.getByText("No documented show in Peru.")).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "World" })).toHaveAttribute("aria-checked", "true");
  });
  it("xx: as if there were no parameter, and the parameter is dropped", () => {
    window.history.replaceState(null, "", "/records/tours/map?country=xx");
    render(<TourMapDesktop data={tourMapProps} />);
    expect(window.location.search).toBe("");
    // No card and no note: the only named region left is the list section.
    expect(screen.queryAllByRole("region").filter((r) => r.tagName !== "SECTION")).toEqual([]);
    expect(screen.queryByText(/No documented show in/)).toBeNull();
  });
});

describe("'Skip to country list' is the first stop inside the main content (item 14)", () => {
  const FOCUSABLE = 'a[href], button, input, select, textarea, [tabindex="0"]';
  /** The first Tab stop inside the layout that holds this skip link. */
  const firstStop = (skip: HTMLElement) => skip.parentElement!.querySelector(FOCUSABLE);

  it("in both layouts, ahead of the breadcrumb or back bar and the map", () => {
    render(<MapPage />);
    const skips = screen.getAllByRole("link", { name: "Skip to country list" });
    expect(skips.map((a) => a.getAttribute("href")).sort()).toEqual(["#country-list", "#country-list-m"]);
    for (const skip of skips) expect(firstStop(skip)).toBe(skip);
    // Each points at its own layout's list.
    for (const skip of skips) expect(skip.parentElement!.querySelector(skip.getAttribute("href")!)).not.toBeNull();
  });

  it("negative control: a skip link placed after the breadcrumb bar is not the first stop", () => {
    // The breadcrumb bar's first link, then the skip link: the order a
    // "Skip to content" reader would otherwise Tab through first.
    const layout = document.createElement("div");
    layout.innerHTML = '<nav><a href="/">Home</a></nav><div><a href="#country-list">Skip to country list</a></div>';
    document.body.append(layout);
    const skip = layout.querySelector<HTMLElement>('a[href="#country-list"]')!;
    expect(layout.querySelector(FOCUSABLE)).not.toBe(skip);
    layout.remove();
  });
});

describe("the text of every card, once, visually hidden (item 74)", () => {
  it("57 entries keyed by ?country, text only, visually hidden and not `hidden`", () => {
    const { container } = render(<TourMapText countries={tourMapProps.countries} itinerariesFrom={tourMapProps.totals.itinerariesFrom} />);
    const section = container.querySelector("section")!;
    expect(section.className).toBe("visuallyHidden");
    expect(section.hasAttribute("hidden")).toBe(false);
    expect(section.querySelectorAll("li")).toHaveLength(57);
    expect(section.querySelector("#country-gb")!.textContent).toContain("Documented: 10 tour dates");
    expect(section.querySelectorAll("a, button, [tabindex]")).toHaveLength(0);
  });
});
