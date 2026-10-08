import { renderToStaticMarkup } from "react-dom/server";

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

/**
 * The design review of 8 Oct 2026 (docs/design/site-review-2026-10), the
 * visual lane of its quick wins: fixes that restore a rule the site already
 * set, each pinned against the markup or stylesheet production shipped.
 */

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
