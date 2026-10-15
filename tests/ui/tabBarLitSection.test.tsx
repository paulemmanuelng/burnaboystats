import { renderToStaticMarkup } from "react-dom/server";

let pathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => pathname,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileTabBar from "../../app/components/MobileTabBar";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import { sweptArtists } from "../../app/data/afrobeats";

/**
 * Debug V-global-15 (with V-afrobeats-08 and V-music-12), 6 Oct 2026: the
 * phone's tab bar lit no tab on /compare, on any pair page or country board,
 * or on the board hub /afrobeats — read live at 390, dark and light. Each is
 * now lit as its phone artboard lights it: Certs under every /compare page
 * ("Compare" M1–M3, and the trail Home › Certifications › Compare), Charts on
 * the hub ("Afrobeats - Mobile Hub"). The Dai Dai story stays unlit, because
 * the approved redesign draws its five tabs all muted.
 */

const lit = (path: string) => {
  pathname = path;
  const el = document.createElement("div");
  el.innerHTML = renderToStaticMarkup(<MobileTabBar />);
  if (!el.querySelector("nav")) return "NO BAR";
  const on = [...el.querySelectorAll('a[aria-current="page"]')];
  return on.map((a) => a.lastElementChild?.textContent).join("+") || null;
};

const comparePages = [
  "/compare",
  "/compare/in",
  ...allPairs().map(([a, b]) => `/compare/${pairSlug(a, b)}`),
  ...certCountryCodes().map((code) => `/compare/in/${countrySlug(code)}`),
];

/**
 * Question 28 (live debug 15 Oct 2026, REC-17; Paul: "yes"): no tab lit on
 * /timeline. The career timeline sits on the Records shelf beside On this
 * day (lib/recordBooks.ts), so it lights Records as the calendar does.
 */
describe("the phone tab bar lights the section a page belongs to", () => {
  it("Certs, and only Certs, on every /compare page", () => {
    // The live sweep counted 219; the list is the routes' own generators.
    expect(comparePages.length).toBeGreaterThan(200);
    const wrong = comparePages.filter((p) => lit(p) !== "Certs");
    expect(wrong).toEqual([]);
  });

  it("Charts on the board hub, as on the chart and live boards under it", () => {
    expect(lit("/afrobeats")).toBe("Charts");
    for (const a of sweptArtists) {
      expect(lit(`/afrobeats/${a.slug}/charts`), a.slug).toBe("Charts");
      expect(lit(`/afrobeats/${a.slug}/live`), a.slug).toBe("Charts");
      // An artist page carries the Compare action bar instead of the tabs.
      expect(lit(`/afrobeats/${a.slug}`), a.slug).toBe("NO BAR");
    }
  });

  it("no tab on the Dai Dai story, in either edition, as the redesign draws it", () => {
    expect(lit("/dai-dai")).toBeNull();
    expect(lit("/dai-dai/es")).toBeNull();
  });

  it("Records on the career timeline, as on the calendar (question 28, 15 Oct 2026)", () => {
    expect(lit("/timeline")).toBe("Records");
    // Anchored: only the page itself.
    expect(lit("/timelines")).toBeNull();
    expect(lit("/timeline/2013")).toBeNull();
  });

  it("and nothing else moved", () => {
    expect(lit("/")).toBe("Home");
    expect(lit("/music")).toBe("Music");
    expect(lit("/live-charts")).toBe("Charts");
    expect(lit("/records")).toBe("Records");
    expect(lit("/on-this-day")).toBe("Records");
    expect(lit("/updates")).toBeNull();
    // The patterns are anchored: a look-alike path lights nothing.
    expect(lit("/compared")).toBeNull();
    expect(lit("/afrobeats-x")).toBeNull();
  });
});

describe("negative control", () => {
  it("main's Records line (MobileTabBar.tsx:85, /^\\/on-this-day(\\/[^/]+)?$/) left /timeline unlit", () => {
    const SHIPPED = /^\/on-this-day(\/[^/]+)?$/;
    expect(SHIPPED.test("/timeline")).toBe(false);
    expect("/timeline".startsWith("/records")).toBe(false);
  });
});
