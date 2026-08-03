import { render } from "@testing-library/react";
import StatBox from "../../app/components/StatBox";
import { revenueShows } from "../../app/data/tourRevenue";
import { statBoxes, type LeaderboardBox } from "../../app/data/africasBiggest";

// The revenue board used to be rendered through StatBox, and tourRevenue.ts
// exported a helper that shaped it. /records/tours/revenue now has its own
// RevenueBoard, so the helper is gone — but this fixture is still the most
// punishing real-world input StatBox can get, so it's built here instead.
const revenueBox: LeaderboardBox = {
  id: "highest-revenue-per-show",
  title: "Highest reported revenue per show",
  meta: "test",
  layout: "list",
  entries: revenueShows.map((s) => ({
    name: s.artist,
    sub: `${s.flag} ${s.venue}, ${s.city} · ${s.tour} · ${s.year}`,
    value: `$${s.revenue.toLocaleString("en-US")}`,
  })),
  source: "test",
};

// Regression test for a real bug: StatBox used to key list entries by artist
// name alone, which is safe when every name in a box is unique (the original
// Africa's Biggest boxes) but breaks once a box has many entries sharing one
// name (the revenue leaderboard is ~70% "Burna Boy") — React logs a "same
// key" console.error when that happens, silently, without failing any build.
describe("StatBox", () => {
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    errorSpy.mockRestore();
  });

  function expectNoDuplicateKeyWarning() {
    const hit = errorSpy.mock.calls.find((args) =>
      args.some((a) => typeof a === "string" && /same key/i.test(a))
    );
    expect(hit).toBeUndefined();
  }

  it("renders the full revenue leaderboard (mostly duplicate artist names) without a key warning", () => {
    // Guard the premise: this case only tests anything while the real data
    // actually repeats a name. If the board ever became one-row-per-artist the
    // assertion below would pass for the wrong reason.
    const names = revenueBox.entries!.map((e) => e.name);
    expect(new Set(names).size).toBeLessThan(names.length);

    render(<StatBox box={revenueBox} />);
    expectNoDuplicateKeyWarning();
  });

  it("renders every Africa's Biggest stat box without a key warning", () => {
    for (const box of statBoxes) {
      const { unmount } = render(<StatBox box={box} />);
      expectNoDuplicateKeyWarning();
      unmount();
    }
  });

  it("handles a worst-case synthetic list where every entry shares one name", () => {
    render(
      <StatBox
        box={{
          id: "synthetic",
          title: "Synthetic",
          meta: "test",
          layout: "list",
          entries: Array.from({ length: 10 }, (_, i) => ({ name: "Same Name", value: `${i}` })),
          source: "test",
        }}
      />
    );
    expectNoDuplicateKeyWarning();
  });
});
