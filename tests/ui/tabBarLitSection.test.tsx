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

  it("and nothing else moved", () => {
    expect(lit("/")).toBe("Home");
    expect(lit("/music")).toBe("Music");
    expect(lit("/live-charts")).toBe("Charts");
    expect(lit("/records")).toBe("Records");
    expect(lit("/on-this-day")).toBe("Records");
    expect(lit("/timeline")).toBeNull();
    expect(lit("/updates")).toBeNull();
    // The patterns are anchored: a look-alike path lights nothing.
    expect(lit("/compared")).toBeNull();
    expect(lit("/afrobeats-x")).toBeNull();
  });
});
