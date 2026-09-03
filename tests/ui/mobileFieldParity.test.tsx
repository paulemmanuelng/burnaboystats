import { render, screen } from "@testing-library/react";

// Both screens carry a real app-router BackLink, which throws outside a mounted
// router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/share",
}));

import MobileStatCards from "../../app/components/MobileStatCards";
import MobileMethodology from "../../app/components/MobileMethodology";

/**
 * Facts the mobile layout was silently dropping.
 *
 * Neither of these was a missing element the eye would catch — one was a prop
 * the page never passed, the other a field the mobile prop TYPE omitted, so the
 * value was type-checked out of existence on its way down. Both layouts looked
 * finished; the desktop one simply knew something the phone one did not.
 */

const CARDS = [
  {
    id: "certifications",
    chip: "Certifications",
    label: "742 certifications",
    detail: "Across 28 countries",
    source: "burnaboystats.com",
    href: "/certifications",
  },
];

describe("/share — the verified date", () => {
  // /share passed `verified` to the desktop StatCardMaker only. A phone reader
  // got no "as of" date for a number they were about to post publicly, which is
  // the one piece of provenance that matters at the moment of posting.
  it("shows the date the figures were last checked", () => {
    render(
      <MobileStatCards cards={CARDS} verified="3 September 2026" pageUrl="https://example.com/share" />
    );
    expect(screen.getByText("3 September 2026")).toBeInTheDocument();
  });
});

describe("/methodology — a source's composition", () => {
  // `tag` was absent from MobileMethodology's own prop type, so the computed
  // chart split ("14 national · 6 Billboard country · 2 global") reached the
  // desktop page and nothing else. It appears nowhere else on a phone.
  it("renders each source's tag alongside its area", () => {
    render(
      <MobileMethodology
        lede="Every number here is meant to be trusted."
        reviewedLabel="3 September 2026"
        principles={[{ h: "Primary sources only", p: "Read from the body's own register." }]}
        sources={[
          {
            area: "Charts",
            tag: "14 national · 6 Billboard country · 2 global",
            detail: "The chart body that owns each chart.",
          },
        ]}
        sections={[{ h: "How often it's updated", p: "As each milestone is confirmed." }]}
      />
    );

    expect(screen.getByText("Charts")).toBeInTheDocument();
    expect(screen.getByText("14 national · 6 Billboard country · 2 global")).toBeInTheDocument();
  });
});
