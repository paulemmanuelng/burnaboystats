import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));

import MobileCerts from "../../app/components/MobileCerts";
import { COUNTRIES, albums, allItems, totalAwards, countryCount } from "../../app/data/certifications";

/**
 * V-afrobeats-01 (debug pass, 5 Oct 2026): the phone ledger's "Show the top 10"
 * sits at the FOOT of the opened list, so folding it removes every row above
 * the button. Nothing moved the page back, the browser clamped the scroll to
 * the shorter page, and the reader landed on the FAQ: the button 187px off the
 * top on /afrobeats/wizkid and 4,973px on /certifications, from a tap at
 * y=382. The fix holds the button under the finger (lib/holdInPlace). jsdom
 * has no layout, so the button's top is stood in from the live figures — 382
 * open, −4,973 folded — and the test checks the page scrolls it back.
 */

const props = {
  releases: allItems,
  albums,
  history: [],
  countries: COUNTRIES,
  total: totalAwards(),
  countryCount,
};

/** The button's top while the list is open, and after it has folded. */
function standIn(el: HTMLElement, open: number, folded: number) {
  vi.spyOn(el, "getBoundingClientRect").mockImplementation(
    () => ({ top: el.getAttribute("aria-expanded") === "true" ? open : folded }) as DOMRect
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("folding the phone ledger back to the top 10 keeps the button on screen", () => {
  it("opening the list does not scroll: the new rows land below row 10", async () => {
    render(<MobileCerts {...props} />);
    const btn = screen.getByRole("button", { name: /^All \d+ releases$/ });
    standIn(btn, 382, 382);
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    expect(btn).toHaveAccessibleName("Show the top 10");
    expect(scrollBy).not.toHaveBeenCalled();
  });

  it("'Show the top 10' tapped at y=382 stays at 382 (it fell to −4,973 on /certifications)", async () => {
    render(<MobileCerts {...props} />);
    const btn = screen.getByRole("button", { name: /^All \d+ releases$/ });
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    const rowsOpen = screen.getAllByText(/^\d+ certs?$/).length;

    standIn(btn, 382, -4973);
    let anchorDuring = "";
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {
      anchorDuring = document.documentElement.style.overflowAnchor;
    });
    await userEvent.click(btn);

    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveAccessibleName(/^All \d+ releases$/);
    expect(screen.getAllByText(/^\d+ certs?$/).length).toBeLessThan(rowsOpen);
    expect(scrollBy).toHaveBeenCalledWith({ top: -5355, behavior: "instant" });
    expect(anchorDuring).toBe("none");
    await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
  });
});
