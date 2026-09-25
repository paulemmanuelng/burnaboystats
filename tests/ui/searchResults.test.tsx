import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// useSearchParams reads the address bar, as the app router's does.
vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(window.location.search),
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/search",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SearchResults from "../../app/components/SearchResults";
import { searchIndex } from "../../app/lib/searchIndex";

/**
 * /search, as the debug pass of 24 Sep 2026 found it on the live site:
 *
 *   C-03  a section chip outlived the query that offered it. With "Compare"
 *         pressed, emptying the field printed "Browse 0 pages" beside "All
 *         101"; typing "cars" then printed "0 results … Nothing matches" with
 *         the chips offering "Records 1" and none of them pressed.
 *   C-08  the address bar kept the query the page was opened with, so Back
 *         from a result brought back "wizkid" over what the reader had typed,
 *         and Enter on /search left the URL at /search.
 */

const field = () => screen.getByRole("searchbox", { name: "Search query" });
const at = (url: string) => window.history.replaceState({}, "", url);

afterEach(() => at("/search"));

describe("C-03: a section chip never filters to nothing", () => {
  it("drops back to All when the query empties", async () => {
    at("/search?q=wizkid");
    render(<SearchResults initialQuery="wizkid" stats={{}} />);
    await userEvent.click(screen.getByRole("button", { name: /^Compare/ }));
    expect(screen.getByRole("button", { name: /^Compare/ })).toHaveAttribute("aria-pressed", "true");

    await userEvent.clear(field());

    // The live page said "Browse 0 pages".
    expect(screen.queryByText("Browse 0 pages")).not.toBeInTheDocument();
    expect(screen.getByText(`Browse ${searchIndex.length} pages`)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^All/ })).toHaveAttribute("aria-pressed", "true");
  });

  it("does not report nothing for a query that has results elsewhere", async () => {
    at("/search?q=wizkid");
    render(<SearchResults initialQuery="wizkid" stats={{}} />);
    await userEvent.click(screen.getByRole("button", { name: /^Compare/ }));
    await userEvent.clear(field());
    await userEvent.type(field(), "cars");

    // The live page said "Nothing matches “cars”" beside a "Records 1" chip.
    expect(screen.queryByText("Nothing matches “cars”")).not.toBeInTheDocument();
    expect(screen.queryByText(/^0 results$/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^All/ })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("link", { name: /Car Collection/ })).toBeInTheDocument();
  });
});

describe("C-08: the address bar follows the field", () => {
  it("writes the typed query to the URL", async () => {
    at("/search?q=wizkid");
    render(<SearchResults initialQuery="wizkid" stats={{}} />);
    await userEvent.clear(field());
    await userEvent.type(field(), "Dai Dai");

    await waitFor(() => expect(window.location.pathname + window.location.search).toBe("/search?q=Dai%20Dai"));
  });

  it("writes it at once on Enter", async () => {
    at("/search");
    render(<SearchResults initialQuery="" stats={{}} />);
    await userEvent.type(field(), "grammy{Enter}");
    expect(window.location.pathname + window.location.search).toBe("/search?q=grammy");
  });

  it("drops the parameter when the field is emptied", async () => {
    at("/search?q=wizkid");
    render(<SearchResults initialQuery="wizkid" stats={{}} />);
    await userEvent.clear(field());
    await waitFor(() => expect(window.location.pathname + window.location.search).toBe("/search"));
  });

  it("shows the address bar's query when the router hands back the first render's", () => {
    // Back from a result: the URL holds what the reader last typed, the
    // restored server tree still carries the query the page opened with.
    at("/search?q=Dai%20Dai");
    render(<SearchResults initialQuery="wizkid" stats={{}} />);
    expect(field()).toHaveValue("Dai Dai");
  });
});
