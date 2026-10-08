import { readFileSync } from "node:fs";
import { join } from "node:path";

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

import { metadata as aboutMeta } from "../app/about/page";
import { metadata as faqMeta } from "../app/faq/page";
import { metadata as musicMeta } from "../app/music/page";
import { metadata as biggestMeta } from "../app/records/africas-biggest/page";
import { metadata as carsMeta } from "../app/records/cars/page";
import { albums, eps } from "../app/data/albums";
import { allItems } from "../app/data/certifications";
import { allNoms } from "../app/data/awards";
import { cars } from "../app/data/cars";
import { faqs } from "../app/data/faqs";
import { allChartItems } from "../app/data/charts";
import { songs } from "../app/data/songs";
import { songMetaDescription } from "../app/lib/songMeta";
import { statBoxes, spotifyLeadStreams } from "../app/data/africasBiggest";
import { BIGGEST_MEASURED_IDS, clearMeasureLeader, type Measure } from "../app/lib/biggestArtist";
import { modelShort } from "../app/lib/garage";
import { cardinalWord } from "../app/lib/plural";
import {
  TITLE_MAX,
  DESCRIPTION_MAX,
  aboutTitle,
  aboutDescription,
  faqDescription,
  musicTitle,
  musicDescription,
  africasBiggestTitle,
  africasBiggestDescription,
  carsDescription,
  songChartDescription,
  firstThatFits,
} from "../app/lib/searchSnippets";

/**
 * Answer-first titles and descriptions for the pages the top searches land on
 * (Search Console, three months to 4 Oct 2026: positions 2–8, clicked a
 * fraction of a per cent of the time). For each page:
 *
 *   - the snippet carries the answer the search asks for, checked against the
 *     data's own rows rather than the constants the page passes in;
 *   - it is derived: the builder given a different figure gives a different
 *     line, and the page's source types none of the figures;
 *   - it fits the SEO gate's 60 / 160 characters;
 *   - the line the page shipped until 8 Oct 2026, verbatim, fails the check.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const stripComments = (src: string) => src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "");
/** A page's title and description, as source: its metadata call up to `path:`. */
const metadataBlock = (file: string) => {
  const src = stripComments(read(file));
  const i = src.indexOf("export const metadata");
  return src.slice(i, src.indexOf("path:", i));
};
const fits = (m: { title?: unknown; description?: unknown }) => {
  expect(String(m.title).length, String(m.title)).toBeLessThanOrEqual(TITLE_MAX);
  expect(String(m.description).length, String(m.description)).toBeLessThanOrEqual(DESCRIPTION_MAX);
};

const REAL_NAME = "Damini Ebunoluwa Ogulu";
const certCount = allItems.reduce((n, r) => n + r.certs.length, 0);
const winCount = allNoms.filter((n) => n.won).length;
const current = cars.filter((c) => !c.status);
const byValue = [...current].sort((a, b) => b.valueUsd - a.valueUsd);
const garageTotal = `$${(current.reduce((s, c) => s + c.valueUsd, 0) / 1e6).toFixed(2)}M+`;

describe("firstThatFits", () => {
  it("takes the first candidate inside the limit, and the last when none is", () => {
    expect(firstThatFits(["a".repeat(61), "b".repeat(60), "c"], 60)).toBe("b".repeat(60));
    expect(firstThatFits(["a".repeat(70), "b".repeat(65)], 60)).toBe("b".repeat(65));
  });
});

/* ── /about ─────────────────────────────────────────────────────────── */

describe("/about answers “burna boy real name” in the title and the description", () => {
  const title = String(aboutMeta.title);
  const description = String(aboutMeta.description);
  const namesHimFirst = (t: string) => t.startsWith(`Burna Boy's Real Name: ${REAL_NAME}`);
  const answersFirst = (d: string) => d.startsWith(`Burna Boy's real name is ${REAL_NAME}. He was born on 2 July 1991 in Port Harcourt`);

  it("the answer leads both", () => {
    expect(namesHimFirst(title)).toBe(true);
    expect(answersFirst(description)).toBe(true);
    fits(aboutMeta);
  });

  it("is built from the one home of the name and the date", () => {
    const f = { realName: "Someone Else", birthDate: "1990-01-31", birthplace: "Lagos, Nigeria", grammyWins: 1 };
    expect(aboutTitle(f)).toContain("Someone Else");
    expect(aboutDescription(f)).toContain("born on 31 January 1990 in Lagos, Nigeria");
    const block = metadataBlock("app/about/page.tsx");
    expect(block).not.toMatch(/Damini|1991|Port Harcourt/);
  });

  it("negative control: the title as shipped puts the name last, and its metadata typed the facts", () => {
    expect(namesHimFirst("Burna Boy Real Name & Biography — Damini Ebunoluwa Ogulu")).toBe(false);
    const SHIPPED_BLOCK = `export const metadata = pageMetadata({
  title: "Burna Boy Real Name & Biography — Damini Ebunoluwa Ogulu",
  description:
    "Burna Boy's real name is Damini Ebunoluwa Ogulu, born 2 July 1991 in Port Harcourt, Nigeria — the full biography of the Grammy-winning African Giant.",`;
    expect(SHIPPED_BLOCK).toMatch(/Damini|1991|Port Harcourt/);
  });
});

/* ── /faq ───────────────────────────────────────────────────────────── */

describe("/faq says what it is searched for, and answers the first of it", () => {
  const title = String(faqMeta.title);
  const description = String(faqMeta.description);
  const namesTheSearches = (t: string) => ["Real Name", "Albums", "Cars"].every((w) => t.includes(w));
  const answersAndCounts = (d: string) =>
    d.startsWith(`Burna Boy's real name is ${REAL_NAME}.`) &&
    d.includes(`${albums.length} studio albums`) &&
    d.includes(`${current.length} confirmed cars`) &&
    d.includes(`${certCount} certifications`) &&
    d.includes(`${winCount} award wins`) &&
    d.includes(`${faqs.length} quick answers`);

  it("the title names the searches; the description answers the real name and counts the rest", () => {
    expect(namesTheSearches(title)).toBe(true);
    expect(answersAndCounts(description)).toBe(true);
    fits(faqMeta);
  });

  it("every question the title names is one the FAQ answers", () => {
    const qs = faqs.map((f) => f.q);
    expect(qs).toContain("What is Burna Boy's real name?");
    expect(qs).toContain("How many albums does Burna Boy have?");
    expect(qs).toContain("How many cars does Burna Boy have?");
    expect(qs.some((q) => /awards/i.test(q))).toBe(true);
  });

  it("moves with the data", () => {
    const f = { realName: REAL_NAME, albums: albums.length, cars: current.length, certifications: certCount, awardWins: winCount, questions: faqs.length };
    expect(faqDescription({ ...f, albums: f.albums + 1 })).toContain(`${f.albums + 1} studio albums`);
    expect(faqDescription({ ...f, cars: f.cars + 1 })).not.toBe(description);
    expect(metadataBlock("app/faq/page.tsx")).not.toMatch(/\d/);
  });

  it("negative control: the description as shipped answers nothing", () => {
    expect(namesTheSearches("Burna Boy FAQ — Grammys, Certifications, Records & Stats")).toBe(false);
    expect(
      answersAndCounts(
        "Quick answers to the most-asked questions about Burna Boy — Grammys, certifications, his highest-grossing tour, Hot 100 entries and more.",
      ),
    ).toBe(false);
  });
});

/* ── /music ─────────────────────────────────────────────────────────── */

describe("/music lists the albums in order — the answer to “burna boy albums”", () => {
  const title = String(musicMeta.title);
  const description = String(musicMeta.description);
  // Release order, read off the rows' own dates here.
  const ordered = [...albums].sort((a, b) => a.released!.localeCompare(b.released!));
  const listsEveryAlbumInOrder = (d: string) => {
    const at = ordered.map((a) => d.indexOf(a.title));
    return at.every((i) => i >= 0) && at.every((i, k) => k === 0 || i > at[k - 1]);
  };

  it("every studio album has a release date to order by", () => {
    for (const a of albums) expect(a.released, a.title).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("the title is the search, counted; the description is the list", () => {
    expect(title.startsWith("Burna Boy Albums in Order")).toBe(true);
    expect(title).toContain(`All ${albums.length} Studio Albums`);
    expect(description.startsWith(`Burna Boy has ${albums.length} studio albums: `) || description.startsWith(`Burna Boy's ${albums.length} studio albums: `)).toBe(true);
    expect(listsEveryAlbumInOrder(description)).toBe(true);
    fits(musicMeta);
  });

  it("moves with the data: a ninth album joins the list, and the line still fits", () => {
    const more = [...ordered, { title: "A Ninth Album", year: 2027 }];
    const d = musicDescription(more, eps.length);
    expect(d).toContain("A Ninth Album");
    expect(d.length).toBeLessThanOrEqual(DESCRIPTION_MAX);
    expect(musicTitle(10).length).toBeLessThanOrEqual(TITLE_MAX);
    expect(metadataBlock("app/music/page.tsx")).not.toMatch(/\d|L\.I\.F\.E|Weakness/);
  });

  it("negative control: the description as shipped named the first and last album only", () => {
    const SHIPPED = `Burna Boy's full discography: 8 studio albums (L.I.F.E to No Sign of Weakness), 2 EPs, tracklists, biggest hits and guest features.`;
    expect(listsEveryAlbumInOrder(SHIPPED)).toBe(false);
    expect("Burna Boy Discography — All 8 Studio Albums, EPs & Songs".startsWith("Burna Boy Albums")).toBe(false);
  });
});

/* ── /records/africas-biggest ───────────────────────────────────────── */

describe("/records/africas-biggest asks “who is the biggest artist in Africa”, and answers by measure", () => {
  const title = String(biggestMeta.title);
  const description = String(biggestMeta.description);
  const asksTheSearch = (t: string) => /Biggest Artist in Africa/i.test(t);

  // The measures' leaders, recounted from the boards here: the joint group at
  // the top of each measured list board, the newest closed year of the
  // streaming board, and the lead-credit streams reading.
  type E = { name: string; value?: string; tie?: true };
  const topGroup = (entries: E[]) => {
    const group = [entries[0]];
    for (const e of entries.slice(1)) {
      if (e.tie || (e.value !== undefined && e.value === entries[0].value)) group.push(e);
      else break;
    }
    return group.map((e) => e.name);
  };
  const recount: Measure[] = BIGGEST_MEASURED_IDS.map((id) => {
    const b = statBoxes.find((x) => x.id === id)!;
    const leaders = b.layout === "year" ? topGroup(b.rows!.find((r) => !r.inProgress)!.entries) : topGroup(b.entries!);
    return { id, label: id, leaders };
  });
  const topLead = Math.max(...spotifyLeadStreams.map((r) => r.lead));
  recount.push({ id: "lead", label: "lead", leaders: spotifyLeadStreams.filter((r) => r.lead === topLead).map((r) => r.name) });
  const leader = clearMeasureLeader(recount);

  it("the title asks the search", () => {
    expect(asksTheSearch(title)).toBe(true);
    expect(description.startsWith("Who is the biggest artist in Africa? No single measure decides it")).toBe(true);
    fits(biggestMeta);
  });

  it("names an artist only with the count the boards give, and only when the count singles one out", () => {
    for (const m of recount) expect(m.leaders.length, m.id).toBeGreaterThan(0);
    if (leader) {
      expect(title).toContain(`${leader.name} Leads ${leader.leads} of ${recount.length} Measures`);
      expect(description).toContain(`${leader.name} leads ${leader.leads} of the ${recount.length} I count`);
      // The measures the leader does not lead alone are said to belong to
      // someone, and the first artist named for them leads or shares one.
      const left = recount.length - leader.leads;
      if (left > 0) {
        expect(description).toContain(`lead or share the other ${left}`);
        const named = /; ([^,;]+?)(?:,| and | lead or share)/.exec(description)![1];
        expect(recount.some((m) => m.leaders.includes(named)), named).toBe(true);
      }
    } else {
      expect(title).not.toMatch(/Leads/);
    }
  });

  it("the rule: a tie, or a rival whose shared leads reach the count, names nobody", () => {
    const m = (leaders: string[]): Measure => ({ id: leaders.join(), label: "", leaders });
    expect(clearMeasureLeader([m(["A"]), m(["A"]), m(["B"])])).toEqual({ name: "A", leads: 2, of: 3 });
    expect(clearMeasureLeader([m(["A"]), m(["B"])])).toBeNull();
    expect(clearMeasureLeader([m(["A"]), m(["A"]), m(["B", "C"]), m(["B", "D"])])).toBeNull();
    const none = { boards: 20, measures: 14, leader: null, others: ["A", "B"] };
    expect(africasBiggestTitle(none)).not.toMatch(/Leads/);
    expect(africasBiggestDescription(none)).not.toMatch(/ leads /);
    expect(africasBiggestTitle({ ...none, leader: { name: "A", leads: 9 } })).toContain("A Leads 9 of 14 Measures");
  });

  it("types no figure and no name", () => {
    const block = metadataBlock("app/records/africas-biggest/page.tsx");
    expect(block).not.toMatch(/\d|Burna Boy|Wizkid|Tems/);
  });

  it("negative control: the title and description as shipped never asked the question", () => {
    expect(asksTheSearch("Africa's Biggest Artists — Charts & Streaming Records")).toBe(false);
    expect(
      "The biggest African artists by the numbers — Billboard Global 200 peaks, most-streamed on Spotify each year and streaming records, with Burna Boy in context.".startsWith(
        "Who is the biggest artist in Africa?",
      ),
    ).toBe(false);
  });
});

/* ── /records/cars ──────────────────────────────────────────────────── */

describe("/records/cars answers “how many cars does burna boy have” first", () => {
  const description = String(carsMeta.description);
  const top = byValue[0];
  const answersHowMany = (d: string) => d.startsWith(`Burna Boy owns ${current.length} confirmed cars worth a reported ${garageTotal}`);
  const namesTheTopCar = (d: string) => d.includes(`${top.valueNaira} ${top.make} ${modelShort(top.model)}`);

  it("count, total and top car, from the rows", () => {
    expect(answersHowMany(description)).toBe(true);
    expect(namesTheTopCar(description)).toBe(true);
    expect(carsMeta.openGraph?.description).toContain(`${top.valueNaira} ${top.make} ${modelShort(top.model)}`);
    fits(carsMeta);
  });

  it("moves with the data, and the page types no car or price", () => {
    const f = { cars: current.length, total: garageTotal, topCar: "Bugatti Chiron", topCarPrice: "₦9 billion" };
    expect(carsDescription({ ...f, cars: f.cars + 1 })).toContain(`owns ${f.cars + 1} confirmed cars`);
    const block = metadataBlock("app/records/cars/page.tsx");
    expect(block).not.toMatch(/₦|Bugatti|Chiron/);
  });

  it("negative control: the description as shipped led with the garage and typed the Chiron", () => {
    const SHIPPED = `Every car in Burna Boy's garage, priced and sourced: ${current.length} vehicles worth a reported ${garageTotal}, led by his ₦9bn one-of-one Bugatti Chiron.`;
    expect(answersHowMany(SHIPPED)).toBe(false);
    expect(namesTheTopCar(SHIPPED)).toBe(false);
  });
});

/* ── /music/alone ───────────────────────────────────────────────────── */

describe("/music/alone says what the page holds: where it charted and where it is certified", () => {
  const alone = songs.find((s) => s.slug === "alone")!;
  const national = allChartItems.find((r) => r.title === "Alone")!.entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX");
  const best = [...national].sort((a, b) => a.peak - b.peak)[0];
  const certCountries = new Set(allItems.find((r) => r.title === "Alone")!.certs.map((c) => c.c)).size;
  const fromTheData = (d: string) =>
    d.includes(`charted in ${cardinalWord(national.length)} countries`) &&
    d.includes(`No. ${best.peak} in Nigeria`) &&
    d.includes(`certified in ${cardinalWord(certCountries)}`);

  it("the premise: its best national peak is Nigeria's", () => {
    expect(best.c).toBe("NG");
  });

  it("the chart count, the best peak and the certified countries are the data's", () => {
    const description = songMetaDescription(alone);
    expect(fromTheData(description)).toBe(true);
    expect(description.startsWith("Burna Boy's “Alone” (Black Panther: Wakanda Forever, 2022)")).toBe(true);
    expect(description.length).toBeLessThanOrEqual(DESCRIPTION_MAX);
  });

  it("moves with the data", () => {
    const f = { song: "Burna Boy's “Alone”", from: ["Black Panther: Wakanda Forever"], year: 2022, countries: "eight", peaks: ["No. 17 in Nigeria", "No. 19 in France"], certified: "six" };
    expect(songChartDescription({ ...f, certified: "seven" })).toContain("certified in seven");
    expect(songChartDescription({ ...f, peaks: ["No. 9 in Nigeria"] })).toContain("No. 9 in Nigeria");
    const src = stripComments(read("app/data/songs.ts"));
    const block = src.slice(src.indexOf('slug: "alone"'), src.indexOf('slug: "23"'));
    expect(block).not.toMatch(/metaDescription:\s*\n?\s*[`"]/);
  });

  it("negative control: the description as shipped typed two peaks and left out Nigeria's", () => {
    const SHIPPED = `Burna Boy's “Alone” from Black Panther: Wakanda Forever (2022): No. 19 in France, No. 28 in the UK, and certified in six countries.`;
    expect(fromTheData(SHIPPED)).toBe(false);
  });
});
