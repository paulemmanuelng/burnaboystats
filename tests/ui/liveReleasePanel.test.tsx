import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/live-charts",
}));

import MobileLiveCharts, { type ReleasePreview } from "../../app/components/MobileLiveCharts";

/**
 * The open state of a live-charts row, and the three answers it can get.
 *
 * useLiveRelease derived `loading` from `!release`, and `release` is undefined
 * in two different situations: before the snapshot lands, and after a snapshot
 * that landed fine and carried no row for this title. The second one therefore
 * pinned `loading` true for the life of the page — the row spun forever and the
 * caller's own error branch, sitting right under the loading return, could
 * never be reached.
 *
 * That second situation is not hypothetical. The pages are statically generated
 * and /api/v1/live-charts is served `stale-while-revalidate=86400`, while the
 * hourly bot redeploys new snapshots — so a release that entered a chart since
 * the reader's cached copy was taken is on the page and absent from the JSON.
 * It is also not an error, and the panel must not claim a fetch failed when one
 * did not: that is a statement about the site's own plumbing, and this site's
 * whole product is that its statements are true.
 */

const preview = (title: string): ReleasePreview => ({
  kind: "song",
  title,
  total: 1,
  no1: 1,
  top: [{ country: "NG", position: 1, movement: 0 }],
});

const snapshot = (title: string) => ({
  releases: [
    {
      title,
      kind: "song",
      platforms: [
        {
          platform: "Spotify",
          numberOnes: 1,
          entries: [{ country: "NG", name: "Nigeria", position: 1, movement: 0 }],
        },
      ],
    },
  ],
});

// The module-level snapshot cache is keyed by source, so every test needs its
// own endpoint or it inherits the previous test's resolved promise.
let n = 0;
const nextSource = () => `/api/test/live-${n++}`;

function mount(source: string, title = "Dai Dai") {
  return render(
    <MobileLiveCharts
      releases={[preview(title)]}
      platforms={[{ platform: "Spotify", placements: 1, numberOnes: 1 }]}
      placements={1}
      countries={1}
      numberOnes={1}
      updated="4 September 2026"
      source={source}
    />
  );
}

const openRow = () => userEvent.click(screen.getByRole("button", { name: /Dai Dai/ }));

afterEach(() => vi.unstubAllGlobals());

describe("MobileLiveCharts — a row's open panel", () => {
  it("renders the country list when the snapshot carries the release", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, json: async () => snapshot("Dai Dai") }))
    );
    mount(nextSource());
    await openRow();

    expect(await screen.findByText("Nigeria")).toBeInTheDocument();
    expect(screen.queryByText(/Loading the country list/i)).not.toBeInTheDocument();
  });

  it("stops loading when the snapshot came back without this release", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, json: async () => snapshot("Last Last") }))
    );
    mount(nextSource());
    await openRow();

    // The permanent spinner, stated as the assertion that used to fail: the
    // panel has to settle on something.
    expect(await screen.findByText(/Not in the snapshot/i)).toBeInTheDocument();
    expect(screen.queryByText(/Loading the country list/i)).not.toBeInTheDocument();
    // And it must not blame the network for a fetch that succeeded.
    expect(screen.queryByText(/Couldn't load the country list/i)).not.toBeInTheDocument();
  });

  it("re-fetches when the reader asks for the latest snapshot", async () => {
    // First call answers without the release; the second, after the hourly bot
    // has published, carries it. The retry only reaches that second answer if
    // it drops the cached promise — `load` clears the cache on failure only, so
    // a retry after a successful-but-empty fetch re-awaited the same resolved
    // promise and could never return anything different.
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => snapshot("Last Last") })
      .mockResolvedValue({ ok: true, json: async () => snapshot("Dai Dai") });
    vi.stubGlobal("fetch", fetchMock);

    mount(nextSource());
    await openRow();
    await screen.findByText(/Not in the snapshot/i);

    await userEvent.click(screen.getByRole("button", { name: /fetch the latest/i }));
    expect(await screen.findByText("Nigeria")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("says the fetch failed only when it actually failed", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 503 })));
    mount(nextSource());
    await openRow();

    expect(await screen.findByText(/Couldn't load the country list/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /try again/i })).toBeInTheDocument();
    expect(screen.queryByText(/Loading the country list/i)).not.toBeInTheDocument();
  });
});
