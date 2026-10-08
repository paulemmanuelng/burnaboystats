import { readFileSync } from "node:fs";
import { join } from "node:path";
import { faqs } from "../app/data/faqs";
import { albums, eps } from "../app/data/albums";
import { cars } from "../app/data/cars";
import { carFaqs } from "../app/lib/carFaqs";
import { biggestAnswer } from "../app/lib/biggestArtist";
import { BURNA_BOY_REAL_NAME, BURNA_BOY_BIRTH_DATE } from "../app/lib/seo";

/**
 * The /faq answers the four searches the site is found by most (Search
 * Console, three months to 4 Oct 2026): "burna boy real name", "burna boy
 * albums", "how many cars does burna boy have", "who is the biggest artist in
 * africa". Each exists, leads with the answer, and is built from the data —
 * checked against the rows here, with the answer each one shipped until 8 Oct
 * 2026 as the negative control.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const stripComments = (src: string) => src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "");
const answer = (q: string) => {
  const f = faqs.find((x) => x.q === q);
  expect(f, `the FAQ asks "${q}"`).toBeTruthy();
  return f!.a;
};

describe("What is Burna Boy's real name?", () => {
  const a = answer("What is Burna Boy's real name?");

  it("answers in its first sentence, from the one home of the name and the date", () => {
    expect(a.startsWith(`Burna Boy's real name is ${BURNA_BOY_REAL_NAME}.`)).toBe(true);
    expect(BURNA_BOY_REAL_NAME).toBe("Damini Ebunoluwa Ogulu");
    expect(BURNA_BOY_BIRTH_DATE).toBe("1991-07-02");
    expect(a).toContain("born on 2 July 1991 in Port Harcourt");
  });

  it("data/faqs.ts types the name and the date nowhere", () => {
    const src = stripComments(read("app/data/faqs.ts"));
    expect(src).not.toMatch(/Damini|1991/);
    // Negative control: the answer as it shipped.
    expect(
      "Burna Boy's real name is Damini Ebunoluwa Ogulu. He was born on 2 July 1991 in Port Harcourt, Rivers State, Nigeria, and performs under the stage name Burna Boy.",
    ).toMatch(/Damini|1991/);
  });
});

describe("How many albums does Burna Boy have?", () => {
  const a = answer("How many albums does Burna Boy have?");
  const ordered = [...albums].sort((x, y) => x.released!.localeCompare(y.released!));
  const typedCount = /\b\d+ studio albums\b/;

  it("leads with the count, then every album with its year, in release order, then the EPs", () => {
    expect(a.startsWith(`Burna Boy has released ${albums.length} studio albums — `)).toBe(true);
    const at = ordered.map((x) => a.indexOf(`${x.title} (${x.year})`));
    expect(at.every((i) => i >= 0)).toBe(true);
    expect(at.every((i, k) => k === 0 || i > at[k - 1])).toBe(true);
    expect(a).toContain(`plus ${eps.length} EPs.`);
  });

  it("types no count and no title", () => {
    const src = stripComments(read("app/data/faqs.ts"));
    expect(src).not.toMatch(typedCount);
    expect(src).not.toContain("No Sign of Weakness");
    // Negative control: the line data/faqs.ts carried until 8 Oct 2026.
    expect(
      "    a: `Burna Boy has released 8 studio albums — L.I.F.E (2013), On a Spaceship (2015), Outside (2018), African Giant (2019), Twice as Tall (2020), Love, Damini (2022), I Told Them… (2023) and No Sign of Weakness (2025) — plus 2 EPs.`,",
    ).toMatch(typedCount);
  });
});

describe("How many cars does Burna Boy have?", () => {
  const a = answer("How many cars does Burna Boy have?");
  const current = cars.filter((c) => !c.status);
  const byValue = [...current].sort((x, y) => y.valueUsd - x.valueUsd);
  const total = `$${(current.reduce((s, c) => s + c.valueUsd, 0) / 1e6).toFixed(2)}M+`;
  const marques = [...new Set(byValue.map((c) => c.make))];
  const accountsForEveryCar = (text: string) =>
    text.includes(`${current.length} confirmed cars`) && text.includes("recorded but not counted");

  it("is /records/cars's answer, word for word, first", () => {
    const own = carFaqs.find((f) => f.q === "How many cars does Burna Boy have?")!.a;
    expect(a.startsWith(own)).toBe(true);
    expect(a.startsWith(`Burna Boy currently owns ${current.length} confirmed cars.`)).toBe(true);
  });

  it("then the garage's worth and its marques, read off the rows", () => {
    expect(a).toContain(`worth a reported ${total}`);
    for (const m of marques) expect(a, m).toContain(m);
    expect(accountsForEveryCar(a)).toBe(true);
  });

  it("negative control: the answer as shipped never mentioned the cars it does not count", () => {
    const SHIPPED = `Burna Boy currently has ${current.length} cars — a collection worth a reported ${total}, spanning Ferrari, Lamborghini, Rolls-Royce, McLaren, Bugatti, Porsche and Mercedes. Only vehicles confirmed still in his possession are counted; ones he has since sold (a Ferrari 458 Italia and 488 Spider) are listed separately.`;
    expect(accountsForEveryCar(SHIPPED)).toBe(false);
  });
});

describe("Who is the biggest artist in Africa?", () => {
  it("is asked in the searched words, and answered as /records/africas-biggest answers it", () => {
    expect(answer("Who is the biggest artist in Africa?")).toBe(biggestAnswer);
    expect(biggestAnswer.startsWith("“Biggest” has no single measure")).toBe(true);
  });

  it("the question it replaced is gone, so the page does not answer one search twice", () => {
    expect(faqs.map((f) => f.q)).not.toContain("Is Burna Boy the biggest African artist?");
  });
});
