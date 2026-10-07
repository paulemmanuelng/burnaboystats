import { render, screen, fireEvent, act, cleanup } from "@testing-library/react";

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
 * V-tourscars-06 (debug pass, 5 Oct 2026): on the phone tour map, with the
 * United States open (?country=us), a tap on the "Europe" region row switched
 * the map to the Europe view, the hint read "Europe view. Tap a country for
 * its shows.", and the UNITED STATES panel stayed open under a map that no
 * longer showed it, with ?country=us still in the address. Read live in
 * headless Chrome at 390x844, dark and light; the view chips did the same.
 *
 * Now a view picked from a chip or a region row that leaves the open country
 * off the map closes its panel and drops ?country=. A country the new view
 * still shows keeps its panel: the design keeps played countries from other
 * regions lit inside a view (Morocco in Europe, Florida in the Caribbean).
 * Keyboard moves on the map switch the view to follow focus and leave the
 * selection alone.
 */

const US = 840;
const GB = 826;

const open = (a2: string) => {
  window.history.replaceState(null, "", `/records/tours/map?country=${a2}`);
  render(<MobileTourMap data={tourMapProps} />);
};
const chip = (name: string) => screen.getByRole("radio", { name });
const row = (region: string) => screen.getByRole("button", { name: `Show ${region} on the map` });
const panel = (name: string) => screen.queryByRole("region", { name });
const mapOf = () => screen.getByRole("group", { name: /World map of the countries where a Burna Boy show is documented/ });

beforeEach(() => window.history.replaceState(null, "", "/records/tours/map"));
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("a view that leaves the open country off the map closes its panel (V-tourscars-06)", () => {
  it("the finding: ?country=us, then the Europe region row", () => {
    open("us");
    expect(panel("United States")).toBeInTheDocument();
    fireEvent.click(row("Europe"));
    expect(chip("Europe")).toHaveAttribute("aria-checked", "true");
    expect(screen.getByText("Europe view. Tap a country for its shows.")).toBeInTheDocument();
    expect(panel("United States")).not.toBeInTheDocument();
    expect(window.location.search).toBe("");
    expect(screen.getByText("Europe view. Selection cleared.")).toBeInTheDocument();
  });

  it.each([
    ["us", "United States", "Europe"],
    ["us", "United States", "Africa"],
    ["gb", "United Kingdom", "Africa"],
  ])("?country=%s (%s), then the %s chip", (a2, name, view) => {
    open(a2);
    fireEvent.click(chip(view));
    expect(chip(view)).toHaveAttribute("aria-checked", "true");
    expect(panel(name)).not.toBeInTheDocument();
    expect(window.location.search).toBe("");
  });

  it("an arrow key across the chips is a pick too", () => {
    open("us");
    const world = chip("World");
    act(() => world.focus());
    fireEvent.keyDown(world, { key: "ArrowRight" });
    expect(chip("Europe")).toHaveAttribute("aria-checked", "true");
    expect(panel("United States")).not.toBeInTheDocument();
  });

  it("a panel this page opened goes back one history entry, as Close does", () => {
    const back = vi.spyOn(window.history, "back").mockImplementation(() => {});
    render(<MobileTourMap data={tourMapProps} />);
    fireEvent.click(mapOf().querySelector(`[data-code="${US}"]`)!);
    expect(panel("United States")).toBeInTheDocument();
    expect(window.location.search).toBe("?country=us");
    fireEvent.click(chip("Europe"));
    expect(panel("United States")).not.toBeInTheDocument();
    expect(back).toHaveBeenCalledTimes(1);
  });
});

describe("a view that still shows the open country keeps its panel", () => {
  it.each([
    ["us", "United States", "Caribbean"], // Florida
    ["ma", "Morocco", "Europe"],
    ["gb", "United Kingdom", "World"],
  ])("?country=%s (%s), then the %s chip", (a2, name, view) => {
    open(a2);
    fireEvent.click(chip(view));
    expect(chip(view)).toHaveAttribute("aria-checked", "true");
    expect(panel(name)).toBeInTheDocument();
    expect(window.location.search).toBe(`?country=${a2}`);
  });

  it("?country=gb, then the Europe and Asia region rows", () => {
    open("gb");
    fireEvent.click(row("Europe"));
    expect(panel("United Kingdom")).toBeInTheDocument();
    fireEvent.click(row("Asia"));
    expect(chip("World")).toHaveAttribute("aria-checked", "true");
    expect(panel("United Kingdom")).toBeInTheDocument();
    expect(window.location.search).toBe("?country=gb");
  });

  it("a keyboard move that switches the view to follow focus leaves the selection alone", () => {
    open("gb");
    expect(chip("Europe")).toHaveAttribute("aria-checked", "true");
    const gb = mapOf().querySelector<SVGElement>(`[data-code="${GB}"]`)!;
    act(() => gb.focus());
    fireEvent.keyDown(gb, { key: "End" }); // the last of the 57, outside Europe
    expect(chip("World")).toHaveAttribute("aria-checked", "true");
    expect(panel("United Kingdom")).toBeInTheDocument();
    expect(window.location.search).toBe("?country=gb");
  });
});
