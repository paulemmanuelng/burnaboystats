import { render } from "@testing-library/react";
import { readdirSync } from "node:fs";

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
import ChartsPage from "../../app/afrobeats/[artist]/charts/page";
import CertificationsPage from "../../app/certifications/page";
import {
  afrobeatsArtists,
  artistBySlug,
  offRegisterCount,
  offRegisterPhrase,
  artistInView,
  AFROBEATS_LAST_FULL_SWEEP,
  AFROBEATS_LAST_CHART_SWEEP,
} from "../../app/data/afrobeats";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import {
  certTotals,
  certsInView,
  creditSwitchable,
  emptyViewSentence,
  homeCodeFor,
  scopeSwitchable,
  viewKey,
  viewsOffered,
  type CertView,
} from "../../app/lib/certScope";
import mobileStyles from "../../app/components/mobileCerts.module.css";
import artistStyles from "../../app/afrobeats/[artist]/artist.module.css";
import certStyles from "../../app/certifications/certifications.module.css";

/**
 * The live debug pass of everything built on 3 Oct 2026, lane B: the
 * certifications pages. Each case quotes the string the live site shipped as
 * its negative control.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));
const artist = async (slug: string) => render(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
const hashOf = (v: CertView) =>
  [v.credit === "lead" ? "feat=0" : "", v.scope === "intl" ? "home=0" : ""].filter(Boolean).join("&");
const phoneLede = (c: HTMLElement) => c.querySelector(`.${mobileStyles.lede}`)!.textContent!;
const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Every (artist, view) the switches offer, with its count. */
const offeredViews = () =>
  afrobeatsArtists
    .filter((a) => a.swept)
    .flatMap((a) => {
      const home = homeCodeFor(a.country);
      const featured = featuredTitlesOf(a.slug);
      const offered = { scope: scopeSwitchable(a.releases, home), credit: creditSwitchable(a.releases, featured) };
      return viewsOffered(offered).map((v) => ({ a, v, t: certTotals(certsInView(a.releases, { home, featured }, v)) }));
    });

describe("tyla-totals-5: the phone lede says when plaques were not read in a register", () => {
  // Round 2 of the design (4 Oct 2026) moved the off-register detail out of
  // the lede into the caption under the tier bars. The lede keeps a derived
  // qualifier — "…own register, except {n} noted below — …" — in exactly the
  // views that hold an off-register plaque, or it would claim every plaque
  // was a register row (11 of Tyla's 75 are not; 1 of Tems's 76).
  const QUALIFIER = /read in the issuing body's own register, except (\d+) noted below — from /;
  const qualified = (lede: string) => Number(lede.match(QUALIFIER)?.[1] ?? 0);
  const caption = (c: HTMLElement) => c.querySelector(`.${mobileStyles.provenance}`)?.textContent ?? null;
  const cases = offeredViews()
    .filter((x) => ["tyla", "tems", "wizkid"].includes(x.a.slug))
    .map((x) => [x.a.slug, viewKey(x.v), x] as const);

  it.each(cases)("%s %s", async (slug, _key, x) => {
    const n = offRegisterCount(artistInView(x.a, x.v));
    const hash = hashOf(x.v);
    at(`/afrobeats/${slug}${hash ? `#${hash}` : ""}`);
    const { container } = await artist(slug);
    const lede = phoneLede(container);
    expect(qualified(lede)).toBe(n);
    if (!n) expect(lede).not.toContain("except");
    // The bracket is gone from the lede in every view; the caption carries it.
    expect(lede).not.toContain("(except");
    const phrase = offRegisterPhrase(x.a, "short", x.v);
    expect(Boolean(phrase)).toBe(n > 0);
    expect(caption(container)).toBe(
      `${phrase ? `Read off-register: ${phrase}. ` : ""}Last verified ${longDate(x.a.verifiedOn)}.`,
    );
  });

  it("the views the review named: Tyla every view, Tems all and international; not Tems lead, not Wizkid", () => {
    const n = (slug: string, v: CertView) => offRegisterCount(artistInView(artistBySlug(slug)!, v));
    const ALL: CertView = { scope: "all", credit: "all" };
    const INTL: CertView = { scope: "intl", credit: "all" };
    const LEAD: CertView = { scope: "all", credit: "lead" };
    const BOTH: CertView = { scope: "intl", credit: "lead" };
    for (const v of [ALL, INTL, LEAD, BOTH]) expect(n("tyla", v), viewKey(v)).toBeGreaterThan(0);
    expect(n("tems", ALL)).toBeGreaterThan(0);
    expect(n("tems", INTL)).toBeGreaterThan(0);
    expect(n("tems", LEAD)).toBe(0);
    expect(n("tems", BOTH)).toBe(0);
    expect(n("wizkid", ALL)).toBe(0);
  });

  it("negative controls: the lede as it shipped, and the canvas's round-2 lede", () => {
    // Live until this change (3 Oct 2026, #406): the detail in a bracket.
    const SHIPPED =
      "Every Tyla plaque, read in the issuing body's own register (except 10 plaques in South Africa, 9 from the label's own award and 1 from its own announcement; 1 in France from SNEP's own announcement) — 75 across 24 countries, from 13 certified releases. Last verified 3 October 2026.";
    expect(qualified(SHIPPED)).toBe(0);
    // CertPhone.dc.html's Tyla lede: no qualifier at all — it claims every
    // plaque is a register row.
    const CANVAS = "Every Tyla plaque, read in the issuing body's own register — from 13 certified releases.";
    expect(qualified(CANVAS)).toBe(0);
  });
});

describe("c1/c2: one release is a release", () => {
  it("phone lede: Tiwa Savage #home=0, Oxlade #feat=0&home=0", async () => {
    for (const [slug, hash] of [
      ["tiwa-savage", "home=0"],
      ["oxlade", "feat=0&home=0"],
    ]) {
      at(`/afrobeats/${slug}#${hash}`);
      const { container, unmount } = await artist(slug);
      const lede = phoneLede(container);
      expect(lede, slug).toContain("from 1 certified release.");
      // Negative control: what the live page printed.
      expect(lede, slug).not.toContain("from 1 certified releases");
      unmount();
    }
  });

  it("desktop explorer: Kizz Daniel #home=0", async () => {
    at("/afrobeats/kizz-daniel#home=0");
    const { container } = await artist("kizz-daniel");
    const t = container.textContent!.replace(/\s+/g, " ");
    expect(t).toContain("Showing 1 of 1 release ·");
    expect(t).not.toContain("Showing 1 of 1 releases");
  });
});

describe("c3: a view that holds nothing says so in one sentence, not in 0s", () => {
  const empties = offeredViews().filter((x) => x.t.total === 0);

  it("the views that are empty today are BNXN's and Tiwa Savage's International + Lead", () => {
    expect(empties.map((x) => `${x.a.slug}#${hashOf(x.v)}`).sort()).toEqual(["bnxn#feat=0&home=0", "tiwa-savage#feat=0&home=0"]);
  });

  it.each(empties.map((x) => [x.a.slug, x.v] as const))("%s: phone and desktop", async (slug, v) => {
    const a = artistBySlug(slug)!;
    at(`/afrobeats/${slug}#${hashOf(v)}`);
    const { container } = await artist(slug);
    const sentence = emptyViewSentence(a.name, v, a.country);
    // Phone: the sentence in the lede's place, no tier bars.
    expect(phoneLede(container)).toBe(sentence);
    expect(container.querySelector(`.${mobileStyles.tierList}`)).toBeNull();
    // Desktop: no numbers grid, no country strip; the sentence instead.
    expect(container.querySelector(`.${artistStyles.numGrid}`)).toBeNull();
    expect(container.querySelector("#countries")).toBeNull();
    expect([...container.querySelectorAll(`.${artistStyles.provenance}`)].some((p) => p.textContent === sentence)).toBe(true);
    // Negative control: the furniture the live page drew.
    expect(container.textContent).not.toContain("0 across 0 countries, from 0 certified releases");
    expect(container.textContent).not.toContain("0 countries · best tier shown");
  });

  it("BNXN's sentence, word for word", () => {
    expect(emptyViewSentence("BNXN", { scope: "intl", credit: "lead" }, "Nigeria")).toBe(
      "Every international plaque BNXN holds is a featured appearance — turn Featured appearances back on to see them.",
    );
  });

  it("negative control: a view with plaques keeps its furniture and no sentence", async () => {
    const full = offeredViews().find((x) => x.a.slug === "bnxn" && viewKey(x.v) === "intl")!;
    expect(full.t.total).toBeGreaterThan(0);
    at("/afrobeats/bnxn#home=0");
    const { container } = await artist("bnxn");
    expect(container.querySelector(`.${artistStyles.numGrid}`)).not.toBeNull();
    expect(container.querySelector("#countries")).not.toBeNull();
    expect(container.textContent).not.toContain("turn Featured appearances back on");
  });
});

describe("c5: /certifications' narrowed summary label stays one short line", () => {
  it("the label is short in every view; the narrowing is in the note", async () => {
    for (const hash of ["", "#home=0", "#feat=0", "#feat=0&home=0"]) {
      at(`/certifications${hash}`);
      const { container, unmount } = render(<CertificationsPage />);
      const cell = container.querySelector(`.${certStyles.summaryCell}`)!;
      const label = cell.querySelector(`.${certStyles.summaryLabel}`)!.textContent!;
      expect(label.length, hash).toBeLessThanOrEqual("Total certifications".length);
      // Negative control: the label the narrowed view shipped.
      expect(label).not.toBe("International certifications as lead artist");
      const note = cell.querySelector(`.${certStyles.summaryNote}`)!.textContent!;
      if (hash.includes("home=0")) expect(note, hash).toContain("Outside Nigeria");
      if (hash.includes("feat=0")) expect(note.toLowerCase(), hash).toContain("lead credits");
      unmount();
    }
  });
});

describe("tyla-totals-4: 'every register' dates the last full sweep", () => {
  const long = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

  it("the constants are the newest sweep records on disk", () => {
    const newest = (re: RegExp) =>
      readdirSync("docs/sweeps")
        .map((f) => f.match(re)?.[1])
        .filter((d): d is string => Boolean(d))
        .sort()
        .at(-1);
    expect(AFROBEATS_LAST_FULL_SWEEP).toBe(newest(/^sweep-(\d{4}-\d{2}-\d{2})\.md$/));
    expect(AFROBEATS_LAST_CHART_SWEEP).toBe(newest(/^charts-sweep-(\d{4}-\d{2}-\d{2})\.md$/));
    // Tyla's verifiedOn moved past it on a partial read — the case at issue.
    expect(artistBySlug("tyla")!.verifiedOn > AFROBEATS_LAST_FULL_SWEEP).toBe(true);
  });

  it("Tyla's head-to-head and charts page", async () => {
    at("/afrobeats/tyla");
    const { container, unmount } = await artist("tyla");
    const t = container.textContent!;
    expect(t).toContain(`this board was last re-read at every register on ${long(AFROBEATS_LAST_FULL_SWEEP)}.`);
    // Negative control: the line that shipped.
    expect(t).not.toContain("this board was last re-read at every register on 3 October 2026");
    // "Last verified" keeps verifiedOn.
    expect(t).toContain(`Last verified ${long(artistBySlug("tyla")!.verifiedOn)}`);
    unmount();

    const charts = render(await ChartsPage({ params: Promise.resolve({ artist: "tyla" }) }));
    const c = charts.container.textContent!;
    expect(c).toContain(`chart sweep of ${long(AFROBEATS_LAST_CHART_SWEEP)}`);
    expect(c).not.toContain("Last re-read at every register on 3 October 2026");
    expect(c).not.toContain("The board was last re-read at every register on 3 October 2026");
  });
});
