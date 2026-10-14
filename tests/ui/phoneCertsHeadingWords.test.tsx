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

import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertificationsPage from "../../app/certifications/page";
import mobileCertsStyles from "../../app/components/mobileCerts.module.css";

/**
 * Design review B-01 (code part), 8 Oct 2026; afrobeatsA-21 (5 Oct), still
 * live: the phone certifications screen's <h1> ran its words together —
 * "WIZKID, CERTIFICATIONS: 159AWARDS21 COUNTRIES" — because the figure, the
 * unit and the country count sit in separate spans and a <br> with no space
 * between them. The visible heading is unchanged; hidden separators keep the
 * words apart for anyone navigating by headings.
 */
const heading = (html: string) => {
  const host = document.createElement("div");
  host.innerHTML = html;
  const h1 = host.querySelector(`h1.${mobileCertsStyles.totalRow}`)!;
  // The accessible name: aria-label when present, else the text (as shipped).
  return (h1.getAttribute("aria-label") ?? h1.textContent!).replace(/\s+/g, " ").trim();
};

describe("B-01: the phone certifications heading reads as words", () => {
  // The heading as it shipped on /afrobeats/wizkid (text nodes as they ran).
  const SHIPPED = "Wizkid, certifications: 159Awards21 countries";
  const runsTogether = (t: string) => /\d[A-Za-z]|[A-Za-z]\d/.test(t);

  it("negative control: the shipped heading runs its figure into its words", () => {
    expect(runsTogether(SHIPPED)).toBe(true);
  });

  // A board artist's phone h1 is the name since J3-9 (design review 8 Oct
  // 2026, fix 72); the figure row under it says its count once, as words, and
  // hides the spans that run together.
  it.each(["wizkid", "tyla", "ayra-starr"])("/afrobeats/%s", async (slug) => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
    const phone = host.querySelector(`.${mobileCertsStyles.screen}`)!;
    expect(phone.querySelector("h1")!.classList.contains(mobileCertsStyles.artistName)).toBe(true);
    const row = phone.querySelector(`.${mobileCertsStyles.totalRow}`)!;
    const said = row.querySelector(".visuallyHidden")!.textContent!;
    expect(runsTogether(said), said).toBe(false);
    expect(said).toMatch(/^\d+ .+ across \d+ countr(y|ies)$/);
    for (const part of [row.querySelector(`.${mobileCertsStyles.total}`)!, row.querySelector(`.${mobileCertsStyles.totalUnit}`)!])
      expect(part.getAttribute("aria-hidden")).toBe("true");
  });

  it("/certifications (the same screen, Burna Boy's)", () => {
    const t = heading(renderToStaticMarkup(<CertificationsPage />));
    expect(runsTogether(t), t).toBe(false);
    expect(t).toMatch(/^Burna Boy: \d+ certifications across \d+ countries$/);
  });
});
