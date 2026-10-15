import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../../app/afrobeats/[artist]/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import { afrobeatsArtists } from "../../app/data/afrobeats";
import { liveBoardFor } from "../../app/data/liveBoards";
import { showsHrefFor } from "../../app/lib/showsBoard";
import { SHOWS_LABEL } from "../../app/lib/showsDeepLink";
import artistStyles from "../../app/afrobeats/[artist]/artist.module.css";
import charts from "../../app/records/charts/charts.module.css";

/**
 * Job 3 · J3-10 (design review 8 Oct 2026; fixes 67, 69): the board artist's
 * desktop hero loses its two board buttons ("Official charts — N entries",
 * "Live charts — N placements today") to the switcher under the breadcrumb,
 * and Compare becomes the hero's gold primary, with "Biggest shows ↗" beside
 * it while the artist has nights on the box-office board. The charts page's
 * onward row gains "{artist} · live now ↗" (fix 69: a link to another page).
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const text = (e: Element) => e.textContent!.replace(/\s+/g, " ").trim();

/** Every problem with a hero's actions: they are Compare (primary) and, where shown, Biggest shows (secondary). */
function heroProblems(actions: Element, slug: string, shows: string | undefined): string[] {
  const out: string[] = [];
  const links = [...actions.querySelectorAll("a")];
  const want = shows ? ["Compare ↗", `${SHOWS_LABEL} ↗`] : ["Compare ↗"];
  const got = links.map(text);
  if (JSON.stringify(got) !== JSON.stringify(want)) out.push(`links ${JSON.stringify(got)}`);
  const compare = links.find((a) => text(a) === "Compare ↗");
  if (!compare?.classList.contains("btnPrimary")) out.push("Compare is not the primary");
  if (compare && compare.getAttribute("href") !== `/compare?a=${slug}`) out.push(`Compare goes to ${compare.getAttribute("href")}`);
  const primaries = links.filter((a) => a.classList.contains("btnPrimary"));
  if (primaries.length !== 1) out.push(`${primaries.length} primaries`);
  if (shows) {
    const s = links.find((a) => text(a) === `${SHOWS_LABEL} ↗`);
    if (!s?.classList.contains("btnSecondary")) out.push("Biggest shows is not secondary");
  }
  return out;
}

describe("the board hero: Compare, and Biggest shows where there is one", () => {
  it.each(afrobeatsArtists.map((a) => a.slug))("%s", async (slug) => {
    const doc = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
    const actions = doc.querySelector(`.${artistStyles.heroActions}`)!;
    expect(heroProblems(actions, slug, showsHrefFor(slug)), slug).toEqual([]);
  });

  it("negative control: Tyla's hero as served on 8 Oct has the two board buttons and a secondary Compare", () => {
    // job1-scratch/live_afrobeats_tyla.html, the hero's actions verbatim.
    const SHIPPED =
      '<div class="artist-module__co1L-q__heroActions"><a class="btn btnPrimary" href="/afrobeats/tyla/charts">Official chart peaks — <!-- -->187<!-- --> entries</a><a class="btn btnSecondary artist-module__co1L-q__heroLive" href="/afrobeats/tyla/live"><span class="artist-module__co1L-q__liveDot" aria-hidden="true"></span>Live charts — <!-- -->55<!-- --> placements today</a><span class="artist-module__co1L-q__heroPair"><a class="btn btnSecondary" href="/compare?a=tyla">Compare ↗</a><a class="btn btnSecondary" href="/records/tours/revenue?artist=tyla">Biggest shows<!-- --> ↗</a></span></div>';
    const problems = heroProblems(parse(SHIPPED).body.firstElementChild!, "tyla", "/records/tours/revenue?artist=tyla");
    expect(problems).toContain("Compare is not the primary");
    expect(problems.some((p) => p.startsWith("links "))).toBe(true);
  });
});

describe("the charts page's onward row: “{artist} · live now ↗”", () => {
  it.each(afrobeatsArtists.filter((a) => a.charts.length > 0).map((a) => a.slug))("%s", async (slug) => {
    const a = afrobeatsArtists.find((x) => x.slug === slug)!;
    const doc = parse(renderToStaticMarkup(await ArtistChartsPage({ params: Promise.resolve({ artist: slug }) })));
    const row = doc.querySelector(`.${charts.actions}`)!;
    const liveLink = [...row.querySelectorAll("a")].find((l) => l.getAttribute("href") === `/afrobeats/${slug}/live`);
    if (liveBoardFor(slug)) {
      expect(liveLink, slug).toBeDefined();
      expect(text(liveLink!)).toBe(`${a.name} · live now ↗`);
      expect(liveLink!.classList.contains("btnSecondary")).toBe(true);
    } else expect(liveLink, slug).toBeUndefined();
  });
});
