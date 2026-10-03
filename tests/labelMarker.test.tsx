import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
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
import CertificationsPage from "../app/certifications/page";
import artistStyles from "../app/afrobeats/[artist]/artist.module.css";
import mobileStyles from "../app/components/mobileCerts.module.css";
import explorerStyles from "../app/certifications/certifications.module.css";
import { isIssuerMarker } from "../app/lib/certs";
import { CERT_PROGRAMS } from "../app/data/certThresholds";
import { allItems, COUNTRIES } from "../app/data/certifications";
import { sweptArtists, countryMeta, labelPlaqueCount, afrobeatsArtists } from "../app/data/afrobeats";

/**
 * The owner's ask, 3 Oct 2026, with a phone screenshot of Tyla's album row
 * ("🇿🇦 Platinum | SONY MUSIC AFRICA"): "reduce the text size of sony music
 * africa so it fit perfectly". The badge marker now comes in two kinds,
 * derived from the data: a PROGRAMME ("Latin", RIAA Latin — on the 11px
 * floor, unchanged) and an ISSUER, a label's own award (`.badgeIssuer`, 9px).
 * The modifier must reach exactly the label-issued plaques, on all three
 * surfaces, and never a programme.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** Every marker on a rendered page, per surface: its text and whether it carries the issuer modifier. */
const SURFACES = [
  ["country strip", artistStyles],
  ["phone ledger", mobileStyles],
  ["desktop explorer", explorerStyles],
] as const;
const markers = (html: string) => {
  const d = doc(html);
  return Object.fromEntries(
    SURFACES.map(([name, s]) => [
      name,
      [...d.getElementsByClassName(s.badgeProgram)].map((el) => ({
        text: (el.textContent ?? "").trim(),
        issuer: el.classList.contains(s.badgeIssuer),
      })),
    ]),
  ) as Record<(typeof SURFACES)[number][0], { text: string; issuer: boolean }[]>;
};
const artistHtml = async (slug: string) => renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));

describe("isIssuerMarker: a label's own award, never a programme", () => {
  it("names the issuers and leaves the programme alone", () => {
    expect(isIssuerMarker("RIAA Latin")).toBe(false);
    expect(isIssuerMarker("Sony Music Africa")).toBe(true);
    expect(isIssuerMarker("Sony Music Colombia")).toBe(true);
  });

  it("on the board, a marker is an issuer exactly when the plaque is label-issued (source \"label\")", () => {
    let label = 0;
    for (const a of sweptArtists)
      for (const r of a.releases)
        for (const c of r.certs) {
          if (!c.body || c.body === countryMeta(c.c).body) continue;
          expect(isIssuerMarker(c.body), `${a.slug} ${r.title} ${c.c}`).toBe(c.source === "label");
          if (c.source === "label") label++;
        }
    expect(label).toBeGreaterThan(0);
  });

  it("in Burna Boy's ledger, every marker is a priced programme or the Colombian label plaque", () => {
    const issuers = new Set(
      allItems.flatMap((r) => r.certs.filter((c) => c.body && c.body !== COUNTRIES[c.c].body && isIssuerMarker(c.body)).map((c) => c.body)),
    );
    expect([...issuers]).toEqual(["Sony Music Colombia"]);
    expect(Object.keys(CERT_PROGRAMS)).toContain("RIAA Latin");
  });
});

describe("the issuer modifier on the page: Tyla's South African plaques, and only label-issued plaques", () => {
  it("Tyla: every Sony Music Africa marker carries it on all three surfaces, and nothing else does", async () => {
    const tyla = afrobeatsArtists.find((a) => a.slug === "tyla")!;
    const m = markers(await artistHtml("tyla"));
    // The strip shows South Africa once; the explorer every ZA plaque.
    expect(m["country strip"]).toEqual([{ text: "Sony Music Africa", issuer: true }]);
    expect(m["desktop explorer"]).toHaveLength(labelPlaqueCount(tyla));
    expect(m["phone ledger"].length).toBeGreaterThan(0);
    for (const [name] of SURFACES)
      for (const x of m[name]) expect(x, name).toEqual({ text: "Sony Music Africa", issuer: true });
  }, 120_000);

  it("Rema: the RIAA Latin marker stays a programme — no issuer modifier on any surface", async () => {
    const m = markers(await artistHtml("rema"));
    const all = SURFACES.flatMap(([name]) => m[name]);
    expect(all.some((x) => x.text === "Latin")).toBe(true);
    for (const x of all) expect(x).toEqual({ text: "Latin", issuer: false });
  }, 120_000);

  it("/certifications: Latin stays a programme; Dai Dai's Sony Music Colombia is an issuer", () => {
    const m = markers(renderToStaticMarkup(<CertificationsPage />));
    const all = [...m["phone ledger"], ...m["desktop explorer"]];
    expect(all.filter((x) => x.text === "Latin").every((x) => !x.issuer)).toBe(true);
    expect(all.some((x) => x.text === "Latin")).toBe(true);
    expect(all.filter((x) => x.text !== "Latin").every((x) => x.issuer && x.text === "Sony Music Colombia")).toBe(true);
  }, 120_000);
});

describe("the programme marker keeps the 11px floor; only the issuer marker is smaller", () => {
  const FILES = [
    "app/components/mobileCerts.module.css",
    "app/afrobeats/[artist]/artist.module.css",
    "app/certifications/certifications.module.css",
  ];
  const ruleBody = (css: string, sel: string) =>
    css.replace(/\/\*[\s\S]*?\*\//g, "").match(new RegExp(`(?:^|})\\s*\\${sel}\\s*\\{([^}]*)\\}`))?.[1];
  it.each(FILES)("%s: .badgeProgram is max(11px, …) and .badgeIssuer is 9px, after it", (f) => {
    const css = read(f);
    expect(ruleBody(css, ".badgeProgram")).toMatch(/font-size:\s*max\(11px,\s*[^)]+\)/);
    expect(ruleBody(css, ".badgeIssuer")).toMatch(/font-size:\s*9px/);
    // Same specificity, so the modifier must come later to win.
    expect(css.indexOf(".badgeIssuer {")).toBeGreaterThan(css.indexOf(".badgeProgram {"));
  });
});
