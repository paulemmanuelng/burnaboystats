import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { declaredAt } from "./fixtures/phoneTrees";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../app/afrobeats/[artist]/page";
import artistStyles from "../app/afrobeats/[artist]/artist.module.css";
import MobileLiveCharts from "../app/components/MobileLiveCharts";
import mobileLiveStyles from "../app/components/mobileLiveCharts.module.css";

/**
 * The design review of 8 Oct 2026 (docs/design/site-review-2026-10), the
 * visual lane of its quick wins: fixes that restore a rule the site already
 * set, each pinned against the markup or stylesheet production shipped.
 */

const css = (f: string) => readFileSync(join(process.cwd(), f), "utf8");

const parse = (html: string) => {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
};

describe("B-13: an artist page's onward row has one gold action", () => {
  // The finding's three pages, Ayra's purple primary among them.
  it.each(["wizkid", "tyla", "ayra-starr"])("%s: only 'Next' is filled; Compare is secondary", async (slug) => {
    const root = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
    const row = root.querySelector(`section.${artistStyles.onward}`)!;
    expect(row, "onward row not found").toBeTruthy();
    const primaries = [...row.querySelectorAll("a.btnPrimary")].map((a) => a.textContent);
    // Production on 8 Oct: ["Next: Ayra Starr →", "Compare ↗"] on Tyla's page.
    expect(primaries).toHaveLength(1);
    expect(primaries[0]).toMatch(/^Next: .+ →$/);
    const compare = [...row.querySelectorAll("a")].find((a) => a.textContent === "Compare ↗")!;
    expect(compare.className).toBe("btn btnSecondary");
  });
});

describe("MU-18: \"at No. 1\" is one colour on Live Charts — live green", () => {
  const DESK = css("app/live-charts/liveCharts.module.css");
  const PHONE = css("app/components/mobileLiveCharts.module.css");

  it("the summary, the platform tiles and the phone rows print it green (the reference)", () => {
    expect(declaredAt(DESK, ".liveInk", "color", 1440)).toBe("var(--green)");
    expect(declaredAt(DESK, ".platformCardNo1", "color", 1440)).toBe("var(--green)");
    expect(declaredAt(PHONE, ".rowNo1", "color", 390)).toBe("var(--green)");
  });

  it("the desktop release chip and row total follow it, not ochre", () => {
    // Production on 8 Oct: .chipNo1 var(--gold-bright-ink), .totalNo1 var(--gold).
    expect(declaredAt(DESK, ".chipNo1", "color", 1440)).toBe("var(--green)");
    expect(declaredAt(DESK, ".chipNo1", "background", 1440)).not.toMatch(/gold/);
    expect(declaredAt(DESK, ".totalNo1", "color", 1440)).toBe("var(--green)");
  });

  it("the phone tile's \"none at No. 1\" is muted — a zero is not a live No. 1", () => {
    const html = renderToStaticMarkup(
      <MobileLiveCharts
        releases={[]}
        platforms={[
          { platform: "Spotify", placements: 3, numberOnes: 2 },
          { platform: "Shazam", placements: 4, numberOnes: 0 },
        ]}
        placements={7}
        countries={3}
        numberOnes={2}
        updated="8 October 2026"
      />,
    );
    const root = parse(html);
    const tiles = [...root.querySelectorAll(`.${mobileLiveStyles.platformNo1}`)];
    expect(tiles.map((t) => t.textContent)).toEqual(["2 at No. 1", "none at No. 1"]);
    expect(tiles[0].classList.contains(mobileLiveStyles.platformNo1None)).toBe(false);
    expect(tiles[1].classList.contains(mobileLiveStyles.platformNo1None)).toBe(true);
    expect(declaredAt(PHONE, ".platformNo1None", "color", 390)).toBe("var(--text-muted)");
  });
});
