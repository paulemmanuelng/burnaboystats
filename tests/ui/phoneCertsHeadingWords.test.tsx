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

  it.each(["wizkid", "tyla", "ayra-starr"])("/afrobeats/%s", async (slug) => {
    const t = heading(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
    expect(runsTogether(t), t).toBe(false);
    expect(t).toMatch(/^[^:]+: \d+ .+ across \d+ countr(y|ies)$/);
  });

  it("/certifications (the same screen, Burna Boy's)", () => {
    const t = heading(renderToStaticMarkup(<CertificationsPage />));
    expect(runsTogether(t), t).toBe(false);
    expect(t).toMatch(/^Burna Boy: \d+ certifications across \d+ countries$/);
  });
});
