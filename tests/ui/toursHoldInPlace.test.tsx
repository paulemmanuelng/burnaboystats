import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

/**
 * V-tourscars-01 (debug pass, 5 Oct 2026): both tours accordions keep one tour
 * open, so opening a tour BELOW the open one shuts the panel above it. On the
 * live site the clicked row rose from y=500 to y=−658 on desktop (I Told Them…
 * open, Love, Damini clicked) and from 400 to −1,145 on a phone (No Sign of
 * Weakness open, I Told Them… tapped): the reader lost the row they opened.
 * The fix holds the row under the pointer (lib/holdInPlace). jsdom has no
 * layout, so the row's top is stood in from the open state — the measured
 * figures — and the test checks the page scrolls the row back.
 */

const ITT = /I Told Them… Tour/;
const NSOW = /No Sign of Weakness Tour/;
const LD = /Love, Damini Tour/;
const row = (name: RegExp) => screen.getByRole("button", { name });

/** The row's top while `above` is open, and after it has shut. */
function standIn(el: HTMLElement, above: HTMLElement, open: number, shut: number) {
  vi.spyOn(el, "getBoundingClientRect").mockImplementation(
    () => ({ top: above.getAttribute("aria-expanded") === "true" ? open : shut }) as DOMRect
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

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

describe("opening a tour below the open one keeps the opened row on screen", () => {
  it("desktop: I Told Them… open, Love, Damini clicked at y=500 stays at 500", async () => {
    render(<ToursExplorer tours={tours} />);
    const itt = row(ITT);
    const ld = row(LD);
    expect(itt).toHaveAttribute("aria-expanded", "true"); // the design's default
    standIn(ld, itt, 500, -658);
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    let anchorDuring = "";
    scrollBy.mockImplementation(() => {
      anchorDuring = document.documentElement.style.overflowAnchor;
    });
    await userEvent.click(ld);
    expect(ld).toHaveAttribute("aria-expanded", "true");
    expect(itt).toHaveAttribute("aria-expanded", "false");
    expect(scrollBy).toHaveBeenCalledWith({ top: -1158, behavior: "instant" });
    expect(anchorDuring).toBe("none");
    await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
  });

  it("phone: No Sign of Weakness open, I Told Them… tapped at y=400 stays at 400", async () => {
    phone();
    const nsow = row(NSOW);
    const itt = row(ITT);
    await userEvent.click(nsow);
    expect(nsow).toHaveAttribute("aria-expanded", "true");
    standIn(itt, nsow, 400, -1145);
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    await userEvent.click(itt);
    expect(itt).toHaveAttribute("aria-expanded", "true");
    expect(nsow).toHaveAttribute("aria-expanded", "false");
    expect(scrollBy).toHaveBeenCalledWith({ top: -1545, behavior: "instant" });
    await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
  });

  it("opening a tour ABOVE the open one, or shutting the open one, does not scroll", async () => {
    render(<ToursExplorer tours={tours} />);
    const itt = row(ITT);
    const nsow = row(NSOW);
    vi.spyOn(nsow, "getBoundingClientRect").mockImplementation(() => ({ top: 300 }) as DOMRect);
    vi.spyOn(itt, "getBoundingClientRect").mockImplementation(() => ({ top: 420 }) as DOMRect);
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    await userEvent.click(nsow); // above the open I Told Them…: nothing above it moves
    expect(nsow).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(nsow); // shut it: its own panel goes, below it
    expect(nsow).toHaveAttribute("aria-expanded", "false");
    expect(scrollBy).not.toHaveBeenCalled();
  });
});
