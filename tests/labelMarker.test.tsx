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
    expect(isIssuerMarker("Sony Music")).toBe(true);
    expect(isIssuerMarker("Epic Records")).toBe(true);
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

  it("in Burna Boy's ledger, every marker is a priced programme or a label plaque (Colombia's, South Africa's)", () => {
    // Turkey's Diamond (7 Oct 2026) draws no marker: its issuer, Sony Music
    // Türkiye, IS Turkey's listed body (no register exists there), so there is
    // nothing beyond the country's own body to print; its `source` and the
    // chip's hover say "label-issued plaque".
    const issuers = new Set(
      allItems.flatMap((r) => r.certs.filter((c) => c.body && c.body !== COUNTRIES[c.c].body && isIssuerMarker(c.body)).map((c) => c.body)),
    );
    // "All Eyes on Me"'s 19× names Sony Music Africa since 3 Oct 2026.
    // Colombia's is Sony Music's since 7 Oct 2026 (the Platinum replaced Sony
    // Music Colombia's Gold).
    expect([...issuers].sort()).toEqual(["Sony Music", "Sony Music Africa"]);
    expect(Object.keys(CERT_PROGRAMS)).toContain("RIAA Latin");
  });
});

describe("the issuer modifier on the page: Tyla's South African plaques, and only label-issued plaques", () => {
  it("Tyla: every label marker (Sony Music Africa, Epic Records) carries it on all three surfaces, and nothing else does", async () => {
    const tyla = afrobeatsArtists.find((a) => a.slug === "tyla")!;
    const m = markers(await artistHtml("tyla"));
    // The strip shows each label country once — South Africa, and Turkey since
    // 7 Oct 2026 (Epic Records' plaque); the explorer every label plaque.
    expect([...m["country strip"]].sort((a, b) => a.text.localeCompare(b.text))).toEqual([
      { text: "Epic Records", issuer: true },
      { text: "Sony Music Africa", issuer: true },
    ]);
    expect(m["desktop explorer"]).toHaveLength(labelPlaqueCount(tyla));
    expect(m["phone ledger"].length).toBeGreaterThan(0);
    for (const [name] of SURFACES)
      for (const x of m[name]) expect(["Sony Music Africa", "Epic Records"], name).toContain(x.text);
    for (const [name] of SURFACES) for (const x of m[name]) expect(x.issuer, name).toBe(true);
  }, 120_000);

  it("Rema: the RIAA Latin marker stays a programme — no issuer modifier on any surface", async () => {
    const m = markers(await artistHtml("rema"));
    const all = SURFACES.flatMap(([name]) => m[name]);
    expect(all.some((x) => x.text === "Latin")).toBe(true);
    for (const x of all) expect(x).toEqual({ text: "Latin", issuer: false });
  }, 120_000);

  it("/certifications: Latin stays a programme; Dai Dai's Colombian Sony Music is an issuer", () => {
    const m = markers(renderToStaticMarkup(<CertificationsPage />));
    const all = [...m["phone ledger"], ...m["desktop explorer"]];
    expect(all.filter((x) => x.text === "Latin").every((x) => !x.issuer)).toBe(true);
    expect(all.some((x) => x.text === "Latin")).toBe(true);
    // Since 3 Oct 2026 "All Eyes on Me"'s 19× names its issuer too (Sony Music Africa).
    expect(all.filter((x) => x.text !== "Latin").every((x) => x.issuer && ["Sony Music", "Sony Music Africa"].includes(x.text))).toBe(true);
    expect(new Set(all.filter((x) => x.issuer).map((x) => x.text))).toEqual(new Set(["Sony Music", "Sony Music Africa"]));
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
    // Debug pass, 3 Oct 2026 (tyla-totals-6): the issuer marker does not
    // inherit the programme marker's fade — 9px gold at 0.85 measured 3.75:1
    // on the light page. Negative control: the rule as it shipped had none.
    expect(ruleBody(css, ".badgeIssuer")).toMatch(/opacity:\s*1\s*;/);
  });

  it("negative control: the .badgeIssuer that shipped carries no opacity", () => {
    const shipped = `.badgeProgram { font-size: max(11px, 0.82em); opacity: 0.85; }
.badgeIssuer {
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  font-size: 9px;
  letter-spacing: 0.04em;
  line-height: 1;
}`;
    expect(ruleBody(shipped, ".badgeIssuer")).not.toMatch(/opacity:\s*1\s*;/);
  });
});
