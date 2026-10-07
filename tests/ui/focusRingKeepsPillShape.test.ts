import { readFileSync } from "node:fs";

/**
 * V-global-09 (full-site debug, 5 Oct 2026; V-tourscars-04 was the same bug
 * seen on the box-office chips).
 *
 * On the live site, read in headless Chrome at 1440 and 390, dark and light,
 * 7 Oct: Tab onto any pill — the box-office board's artist chips, the
 * countries page's continent chips, the certifications tier chips, the
 * masthead's "Stat card", the search pill, the menu sheet's "Stat card" — and
 * it computed border-radius 3px instead of its 999px, so the pill turned into
 * a 3px-cornered box with a square gold ring around it. The cause was the
 * global keyboard ring in globals.css: `a:focus-visible, button:focus-visible
 * … { …; border-radius: 3px }` is (0,1,1), and every pill's own one-class
 * rule (`.chip { border-radius: 999px }`) is (0,1,0), so the ring's radius won.
 * Four components had patched it one by one (.mapLink, .switch, .featuredLink,
 * .jumpCardAlt…); the rest had not.
 *
 * The ring itself stays where it was; only its radius moves into a :where()
 * rule of zero specificity, so a control that draws its own corners keeps
 * them, and one that has none (a text link, a row) still gets the 3px.
 *
 * jsdom does not cascade module CSS or match :focus-visible, so the cascade is
 * worked out on the stylesheets: for each real pill, every rule that can set
 * its radius while it has keyboard focus, ranked by specificity and then by
 * order (globals.css loads before the modules).
 */

const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, "");
const read = (f: string) => strip(readFileSync(f, "utf8"));
const GLOBALS = read("app/globals.css");

type Spec = [number, number, number];
type Rule = { sel: string; body: string; order: number };

/** Innermost rules, @media wrappers dropped, in source order. */
const rulesOf = (css: string): Rule[] =>
  [...css.matchAll(/([^{}]*)\{([^{}]*)\}/g)].map(([, sel, body], order) => ({ sel: sel.trim(), body, order }));
const decl = (body: string, prop: string) =>
  new RegExp(`(?:^|;)\\s*${prop}\\s*:\\s*([^;]+)`).exec(body)?.[1].trim();
/** Selector list members, splitting on top-level commas only (not inside :where()). */
function members(sel: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of sel) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  out.push(cur.trim());
  return out;
}

/** [ids, classes + attributes + pseudo-classes, types]; :where(…) counts nothing. */
function specificity(sel: string): Spec {
  const rest = sel.replace(/:where\([^()]*\)/g, "");
  const ids = (rest.match(/#[\w-]+/g) ?? []).length;
  const classes = (rest.match(/\.[\w-]+|\[[^\]]*\]|:[\w-]+/g) ?? []).length;
  const types = (rest.replace(/\.[\w-]+|\[[^\]]*\]|:[\w-]+|#[\w-]+/g, " ").match(/[a-z][\w-]*/gi) ?? []).length;
  return [ids, classes, types];
}
const cmp = (a: Spec, b: Spec) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];

/**
 * The global rules that set a radius on ANY focused element of a kind (no
 * class in the selector): [member, radius, order]. Members qualified by a
 * class or attribute other than [tabindex] reach only their own component.
 */
function globalFocusRadii(css: string) {
  return rulesOf(css).flatMap(({ sel, body, order }) => {
    const r = decl(body, "border-radius");
    if (!r) return [];
    return members(sel)
      .filter((m) => /:focus-visible\)?$/.test(m) && !/\.[\w-]/.test(m))
      .map((m) => ({ member: m, radius: r, order }));
  });
}

/** Does a class-free focus member reach a <tag> with no tabindex? */
function reaches(member: string, tag: string): boolean {
  const base = member.replace(/:where\(:focus-visible\)$|:focus-visible$/, "");
  const where = /^:where\(([^()]*)\)$/.exec(base);
  const list = where ? where[1].split(",").map((s) => s.trim()) : [base];
  return list.includes(tag);
}

/** The radius a focused pill computes: the winner among its own rules and the global ring's. */
function focusedRadius(globals: string, file: string, cls: string, tag: string) {
  const own = file === "app/globals.css" ? globals : read(file);
  const candidates: { radius: string; spec: Spec; rank: number; from: string }[] = [];
  for (const g of globalFocusRadii(globals)) {
    if (reaches(g.member, tag)) candidates.push({ radius: g.radius, spec: specificity(g.member), rank: g.order, from: `globals ${g.member}` });
  }
  const mine = new RegExp(`^\\${cls}(:focus-visible)?$`);
  for (const { sel, body, order } of rulesOf(own)) {
    const r = decl(body, "border-radius");
    if (!r) continue;
    for (const m of members(sel)) {
      // Module CSS loads after globals.css, so its rules rank after every global one.
      if (mine.test(m)) candidates.push({ radius: r, spec: specificity(m), rank: (own === globals ? 0 : 1e6) + order, from: `${file} ${m}` });
    }
  }
  candidates.sort((a, b) => cmp(a.spec, b.spec) || a.rank - b.rank);
  return candidates.at(-1);
}

/** Real pills on the live site: the stylesheet, the class, the element. */
const PILLS: [string, string, string, string][] = [
  ["box-office artist chip (desktop)", "app/records/tours/revenue/revenue.module.css", ".chip", "button"],
  ["box-office artist chip (phone)", "app/components/mobileRevenue.module.css", ".chip", "button"],
  ["countries continent chip (phone)", "app/components/mobileRevenueCountries.module.css", ".chip", "a"],
  ["certifications tier chip", "app/certifications/certifications.module.css", ".fChip", "button"],
  ["masthead Stat card (.btn)", "app/globals.css", ".btn", "a"],
  ["menu sheet Stat card", "app/components/mobileNavSheet.module.css", ".statCard", "a"],
  ["search pill", "app/components/SearchPalette.module.css", ".trigger", "button"],
];

describe("V-global-09: keyboard focus keeps a pill's shape", () => {
  it("the global ring is still a 2px gold outline at a 2px offset, with no radius of its own", () => {
    const ring = rulesOf(GLOBALS).find(({ sel }) => members(sel).includes("a:focus-visible") && members(sel).includes("button:focus-visible"));
    expect(ring).toBeDefined();
    expect(decl(ring!.body, "outline")).toBe("2px solid var(--gold)");
    expect(decl(ring!.body, "outline-offset")).toBe("2px");
    expect(decl(ring!.body, "border-radius")).toBeUndefined();
  });

  it("a control with no corners of its own still gets the 3px softening, at zero specificity", () => {
    const radii = globalFocusRadii(GLOBALS);
    expect(radii.length).toBeGreaterThan(0);
    for (const tag of ["a", "button", "input", "select", "textarea", "summary"]) {
      const hit = radii.filter((g) => reaches(g.member, tag));
      expect(hit.map((g) => g.radius), tag).toEqual(["3px"]);
      expect(specificity(hit[0].member), tag).toEqual([0, 0, 0]);
    }
  });

  it.each(PILLS)("%s keeps its own radius under keyboard focus", (_name, file, cls, tag) => {
    const won = focusedRadius(GLOBALS, file, cls, tag);
    expect(won, `${cls} in ${file} declares no radius`).toBeDefined();
    expect(won!.radius, won!.from).toMatch(/^(999px|50%)$/);
  });

  it("negative control: the shipped global ring, verbatim, squares every one of them off", () => {
    // globals.css on origin/main (live 7 Oct 2026), verbatim.
    const shipped = `
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
summary:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
  border-radius: 3px;
}
`;
    // The shipped sheet with today's ring rules swapped back for the shipped one.
    const ring = rulesOf(GLOBALS).find(({ sel }) => members(sel).includes("a:focus-visible"))!;
    const where = rulesOf(GLOBALS).find(({ sel }) => /^:where\(a, button[^)]*\):where\(:focus-visible\)$/.test(sel))!;
    const before = GLOBALS.replace(`${ring.sel} {${ring.body}}`, shipped).replace(`${where.sel} {${where.body}}`, "");
    expect(before).not.toBe(GLOBALS);
    expect(before).not.toMatch(/:where\(:focus-visible\)/);
    for (const [name, file, cls, tag] of PILLS) {
      expect(focusedRadius(before, file, cls, tag)!.radius, name).toBe("3px");
    }
  });
});
