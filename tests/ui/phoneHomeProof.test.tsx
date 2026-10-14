import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileHome from "../../app/components/MobileHome";
import LiveBand from "../../app/components/LiveBand";
import styles from "../../app/components/mobileHome.module.css";
import band from "../../app/components/liveBand.module.css";
import { bandFact, bandEntry, latestKicker, openingClause } from "../../app/lib/bandHeadline";
import { updates } from "../../app/data/updates";
import { read, winning } from "../fixtures/cssRules";
import { allItems, CERTS_VERIFIED_ON } from "../../app/data/certifications";
import { registerBodies } from "../../app/lib/provenanceSpecs";
import { MORE_HREF, p1Shown } from "../../app/lib/provenance";
import { shortDay, shortStamp } from "../../app/lib/dates";

/**
 * The phone home's proof (design review 8 Oct 2026, Job 1).
 *
 * J1-2: under the hero buttons, P1 — the register bodies behind his
 * certifications, most plaques first, four and "+ N more" to the registers
 * (fix 9); "Verified" and the day the registers were read (fix 10); "How it's
 * counted ↗" to /methodology#registers (fixes 11, 29). The approved hero above
 * it is unchanged. The canvas's "RIAA, BPI, SNEP, IFPI" is a stale sample
 * (fix 33): the names are derived.
 *
 * J1-3 (fixes 26, 33): under the P1, a Latest row: the entry the desktop band
 * leads with (bandFact: since #469 the week's `big` headliner, else the newest
 * entry), its opening clause clamped to two lines and its own date, as one
 * link to /updates. The desktop band links the entry's own page.
 */

const ROOT = join(__dirname, "..", "..");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const doc = parse(renderToStaticMarkup(<MobileHome />));
const hero = doc.querySelector(`.${styles.hero}`)!;

/** Where the P1 sits in a phone hero's markup, in words; [] when it sits
 *  after "Explore the music" and before the stat grid, once. */
function placeProblems(src: string): string[] {
  const p1 = src.indexOf("<MobileProvenance");
  if (p1 < 0) return ["no P1 in the phone hero"];
  const out: string[] = [];
  if (p1 < src.indexOf("styles.secondary")) out.push("P1 above the buttons");
  if (p1 > src.indexOf("styles.statGrid")) out.push("P1 below the stat grid");
  return out;
}

describe("J1-2: P1 under the phone home's buttons", () => {
  it("one P1, inside the hero, after 'Explore the music' and before the stat grid", () => {
    const p1s = doc.querySelectorAll('[data-provenance="p1"]');
    expect(p1s).toHaveLength(1);
    expect(hero.contains(p1s[0])).toBe(true);
    const secondary = hero.querySelector(`.${styles.secondary}`)!;
    expect(secondary.compareDocumentPosition(p1s[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(p1s[0].compareDocumentPosition(doc.querySelector(`.${styles.statGrid}`)!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(placeProblems(readFileSync(join(ROOT, "app/components/MobileHome.tsx"), "utf8"))).toEqual([]);
  });

  it("names the register bodies behind his plaques, four and '+ N more' to the registers", () => {
    const p1 = doc.querySelector('[data-provenance="p1"]')!;
    const { shown, more } = p1Shown(registerBodies(allItems));
    expect(more).toBeGreaterThan(0);
    const line = p1.querySelector("[data-provenance-sources]")!;
    expect(words(line)).toBe(`Sources: ${shown.join(", ")} + ${more} more sources`);
    const moreLink = line.querySelector("a")!;
    expect(moreLink.getAttribute("href")).toBe(MORE_HREF);
  });

  it("dates it 'Verified' on the day the registers were read, and links how it's counted", () => {
    const p1 = doc.querySelector('[data-provenance="p1"]')!;
    const date = p1.querySelector("[data-provenance-date]")!;
    expect(words(date)).toBe(`Verified ${shortStamp(CERTS_VERIFIED_ON)}`);
    expect(date.querySelector("time")!.getAttribute("datetime")).toBe(CERTS_VERIFIED_ON);
    const how = p1.querySelector("a[data-provenance-method]")!;
    expect(how.getAttribute("href")).toBe("/methodology#registers");
    expect(words(how)).toBe("How it's counted ↗");
    // The phone leaves Open data to the P3s (J0-9).
    expect(p1.querySelector('a[href^="/api/"]')).toBeNull();
  });

  it("sits 6px under the buttons whatever order the sheets load in, and its date never breaks", () => {
    // A single .p1Slot (0,1,0) ties the component's .p1 { margin: 0 } and lost
    // in next dev: 0px, not 6px, at every phone width (review, 14 Oct 2026).
    const home = readFileSync(join(ROOT, "app/components/mobileHome.module.css"), "utf8");
    const single = /^\.p1Slot \{/m;
    expect(home).toMatch(/^\.p1Slot\.p1Slot \{ margin-top: 6px; \}$/m);
    expect(home).not.toMatch(single);
    // "Updated 10 Oct / 2026" at 320: the day stays whole on the phone row.
    const prov = readFileSync(join(ROOT, "app/components/mobileProvenance.module.css"), "utf8");
    expect(prov).toMatch(/^\.p1Row time \{ white-space: nowrap; \}$/m);
    // Negative control: mobileHome.module.css on f0810e2a, verbatim.
    expect(".p1Slot { margin-top: 6px; }").toMatch(single);
  });

  it("negative controls: the hero as shipped has no P1; the canvas's names are not the data's", () => {
    // app/components/MobileHome.tsx on main e85e6efe (14 Oct 2026), verbatim.
    const SHIPPED = `        <Link href="/music" className={styles.secondary}>
          Explore the music ↗
        </Link>
      </div>

      {/* Stat grid — four, two-up */}
      <div className={styles.statGrid}>`;
    expect(placeProblems(SHIPPED)).toEqual(["no P1 in the phone hero"]);
    // Proof.dc.html §1 draws "Sources: RIAA, BPI, SNEP, IFPI" (fix 33: stale).
    expect(p1Shown(registerBodies(allItems)).shown).not.toEqual(["RIAA", "BPI", "SNEP", "IFPI"]);
  });
});

describe("J1-3: the Latest row shows the band's entry and links the feed", () => {
  const fact = bandFact()!;
  const row = doc.querySelector(`.${styles.latest}`)!;

  it("one whole-row link to /updates, after the P1 and before the stat grid", () => {
    expect(fact).not.toBeNull();
    expect(doc.querySelectorAll(`.${styles.latest}`)).toHaveLength(1);
    expect(row.tagName).toBe("A");
    expect(row.getAttribute("href")).toBe("/updates");
    expect(hero.contains(row)).toBe(true);
    const p1 = doc.querySelector('[data-provenance="p1"]')!;
    expect(p1.compareDocumentPosition(row) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(row.compareDocumentPosition(doc.querySelector(`.${styles.statGrid}`)!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    // → for a whole row that is one link (Option A), outside the name.
    expect(words(row.querySelector(`.${styles.latestArrow}`))).toBe("→");
    expect(row.querySelector(`.${styles.latestArrow}`)!.getAttribute("aria-hidden")).toBe("true");
  });

  it("the band's own entry: its headline, its date, '{Latest | its category} · {d Mon}'", () => {
    expect(words(row.querySelector(`.${styles.latestHeadline}`))).toBe(fact.headline);
    const time = row.querySelector("time")!;
    expect(time.getAttribute("datetime")).toBe(fact.date);
    // "Latest" only while the band's entry is the feed's newest; else the
    // entry's category, the word the desktop band prints beside it.
    const word = bandEntry() === updates[0] ? "Latest" : fact.kicker;
    expect(latestKicker()).toBe(word);
    expect(words(row.querySelector(`.${styles.latestKicker}`))).toBe(`${word} · ${shortDay(fact.date)}`);
    expect(fact.headline).toBe(openingClause(bandEntry()!.text));
  });

  it("says 'Latest' only of the newest entry: a headliner under newer lines reads its category", () => {
    const line = (start: string) => updates.find((u) => u.text.startsWith(start))!;
    const gta = line("Burna Boy will co-host a radio station in Grand Theft Auto VI");
    const kca = line("Up for a Kids' Choice Award");
    expect(gta.big).toBe(true);
    // The feed's top on 10 Oct: an unmarked line over the GTA VI headliner.
    expect(bandEntry([kca, gta])).toBe(gta);
    expect(latestKicker([kca, gta])).toBe(gta.category);
    // Once the headliner is the newest entry, or ages out, the row says Latest.
    expect(latestKicker([gta, kca])).toBe("Latest");
    expect(latestKicker([{ ...kca, date: "2026-10-16" }, gta])).toBe("Latest");
    expect(latestKicker([])).toBeNull();
    // Negative control: the row as the review read it typed "Latest" whatever
    // the entry (MobileHome.tsx on f0810e2a, verbatim); on the 10 Oct feed that
    // word sat over GTA VI with the KCA line newer.
    const REVIEWED = "Latest · <time dateTime={latest.date}>{shortDay(latest.date)}</time>";
    expect(readFileSync(join(ROOT, "app/components/MobileHome.tsx"), "utf8")).not.toContain(REVIEWED);
    expect(bandEntry([kca, gta])).not.toBe(kca);
  });

  it("the same entry the desktop band prints, which links the entry's own page", () => {
    const desk = parse(renderToStaticMarkup(<LiveBand />));
    const link = desk.querySelector(`.${band.headlineLink}`)!;
    expect(words(link)).toBe(words(row.querySelector(`.${styles.latestHeadline}`)));
    expect(link.getAttribute("href")).toBe(fact.href);
    expect(desk.querySelector("time")!.getAttribute("datetime")).toBe(fact.date);
  });

  it("two lines at most, 14px Geist 600; every headline the feed can produce is 73 characters or fewer", () => {
    const css = read(join(ROOT, "app/components/mobileHome.module.css"));
    const top = (m: string | null) => m === null;
    expect(winning(css, ".latestHeadline", "-webkit-line-clamp", top)).toBe("2");
    expect(winning(css, ".latestHeadline", "overflow", top)).toBe("hidden");
    expect(winning(css, ".latestHeadline", "font-size", top)).toBe("14px");
    expect(winning(css, ".latestHeadline", "font-weight", top)).toBe("600");
    expect(winning(css, ".latest", "min-height", top)).toBe("56px");
    for (const u of updates) expect(openingClause(u.text).length, u.date).toBeLessThanOrEqual(73);
  });

  it("negative controls: the raw entry is not a headline; the long 7 Oct entry trims on a word", () => {
    // The feed's own text runs to 300 characters: the row prints its clause.
    const longest = [...updates].sort((a, b) => b.text.length - a.text.length)[0];
    expect(longest.text.length).toBeGreaterThan(73);
    // The 7 Oct 2026 Turkey entry, the long state fix 26 asks for.
    const turkey = updates.find((u) => u.text.startsWith("“Dai Dai” is Diamond in Turkey"))!;
    expect(openingClause(turkey.text)).toBe("“Dai Dai” is Diamond in Turkey, which has no register, so labels issue…");
    // fix 26: "dated updates[0].date" — since #469 the band can lead with an
    // older headliner, so the row takes the entry's own date, never the
    // newest entry's when they differ.
    if (bandEntry() !== updates[0]) expect(row.querySelector("time")!.getAttribute("datetime")).not.toBe(updates[0].date);
  });
});
