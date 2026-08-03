import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppState from "../../app/components/AppState";
import FilterEmpty from "../../app/components/FilterEmpty";

// The five app states share one shell, which makes one rule easy to break: an
// app-level state IS the page, so its title is the page h1, while an in-page
// state sits inside a page that already has one. scripts/check-seo.mjs fails
// the build on a second h1, but only for pages it can crawl — not-found and
// error aren't in the sitemap, and the filtered empty states only exist after a
// click. So the rule is guarded here instead.
describe("AppState", () => {
  it("uses an h1 for an app-level state", () => {
    render(<AppState appLevel glyph="404" title="No record of that page" body="…" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "No record of that page"
    );
  });

  it("renders no heading at all for an in-page state", () => {
    render(<AppState compact title="No entries match" body="…" />);
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByText("No entries match")).toBeInTheDocument();
  });

  it("shows the error reference only when one exists", () => {
    const { rerender } = render(<AppState tone="error" title="Broke" body="…" />);
    expect(screen.queryByText("Reference")).toBeNull();

    rerender(<AppState tone="error" title="Broke" body="…" reference="ERR_4471" />);
    expect(screen.getByText("Reference")).toBeInTheDocument();
    expect(screen.getByText("ERR_4471")).toBeInTheDocument();
  });
});

describe("FilterEmpty", () => {
  it("names the combination and drops only the narrowest filter", async () => {
    const onClear = vi.fn();
    const drop = vi.fn();
    render(
      <FilterEmpty
        body="There's no Diamond certification from Spain. That's a real gap in the record, not a missing page."
        onClear={onClear}
        narrowest={{ label: "Spain", drop }}
      />
    );

    expect(screen.getByText(/no Diamond certification from Spain/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /Drop “Spain”/ }));
    expect(drop).toHaveBeenCalledTimes(1);
    expect(onClear).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("offers only the clear button when nothing narrower is active", () => {
    render(<FilterEmpty body="…" onClear={() => {}} />);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });
});
