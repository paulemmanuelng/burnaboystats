import { render, screen } from "@testing-library/react";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));

import CertExplorer from "../../app/components/CertExplorer";
import MobileCerts from "../../app/components/MobileCerts";
import {
  COUNTRIES,
  albums,
  singles,
  features,
  allItems,
  totalAwards,
  countryCount,
} from "../../app/data/certifications";

/**
 * The Dai Dai story's "every certification" link carries
 * /certifications#release=Dai%20Dai, and DaiDaiStory renders at every width —
 * so that link is tapped on phones. /certifications renders BOTH layouts into
 * the DOM at once: the desktop explorer inside a `.desktopOnly` div, the mobile
 * screen beside it. Only the desktop half ever read the fragment, so the same
 * link that arrived filtered on a laptop arrived on a phone as the full
 * unfiltered ledger, with nothing on screen to say a filter had been intended.
 *
 * Both layouts are asserted here for that reason: a deep-link read added to one
 * component is invisibly missing from the other, and neither test would fail.
 * This is the sibling of tests/ui/chartSongDeepLink.test.tsx, which covers the
 * same story's ?song= link into /records/charts.
 */

const withRelease = (release: string) =>
  window.history.replaceState({}, "", `/certifications#release=${encodeURIComponent(release)}`);

// history={[]} deliberately: the dated log repeats release names, and this test
// is about which rows the LEDGER shows. Empty hides that section outright.
const mobileProps = {
  releases: allItems,
  albums,
  history: [],
  countries: COUNTRIES,
  total: totalAwards(),
  countryCount,
};

describe("#release= deep link into the certifications ledger", () => {
  afterEach(() => window.history.replaceState({}, "", "/certifications"));

  it("focuses the release on the mobile screen", () => {
    withRelease("Dai Dai");
    render(<MobileCerts {...mobileProps} />);

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
    // And says so, with a way back — a filter the reader never set has to be
    // both visible and clearable.
    expect(screen.getByRole("button", { name: /show all releases/i })).toBeInTheDocument();
  });

  it("focuses the release in the desktop explorer", () => {
    withRelease("Dai Dai");
    render(
      <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} />
    );

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /show all releases/i })).toBeInTheDocument();
  });

  it("leaves both layouts unfiltered with no fragment", () => {
    const { unmount } = render(<MobileCerts {...mobileProps} />);
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: /show all releases/i })).not.toBeInTheDocument();
    unmount();

    render(
      <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} />
    );
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: /show all releases/i })).not.toBeInTheDocument();
  });
});
