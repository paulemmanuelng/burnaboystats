import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";
import { SEGMENT_LABELS } from "../app/lib/seo";
import { recordBooks } from "../app/lib/recordBooks";
import { searchIndex, searchDocs } from "../app/lib/searchIndex";
import { JUMP } from "../app/lib/visualizedSections";

/**
 * /records/tours/revenue is "Highest-grossing shows" (the owner, 3 Oct 2026):
 * the figures are gross ticket sales, not revenue, and the page now matches
 * its child "Highest-Grossing Artists by Country" and the "Multi-night runs"
 * section. The URL stays.
 *
 * The guard reads every string a reader can see — string and template
 * literals, and the joined text of each JSX element, so a gold split such as
 * `Revenue per <span>show</span>` is read as one phrase — and fails on the old
 * names. Comments, code identifiers, URLs and search keywords are not reader
 * text: "revenue per show" stays a search keyword on purpose so the old words
 * still find the page.
 */

// "Biggest single shows" (the phone /records hub's heading, missed by #406)
// and "the revenue board" (the countries page's method note) joined on 4 Oct
// 2026 — debug pass 3 Oct, bo-07/sw-2 and sw-1.
const OLD = /revenue per show|highest (reported )?revenue|biggest single shows|revenue board/i;

const ROOT = join(__dirname, "..");
const APP = join(ROOT, "app");

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return sourceFiles(p);
    return /\.(tsx?|mjs)$/.test(name) ? [p] : [];
  });
}

/** Is this literal an entry of a `keywords: [...]` array (search terms, never shown)? */
function inKeywords(node: ts.Node): boolean {
  for (let n: ts.Node | undefined = node.parent; n; n = n.parent) {
    if (ts.isPropertyAssignment(n)) return n.name.getText() === "keywords";
    if (ts.isJsxElement(n) || ts.isFunctionLike(n)) return false;
  }
  return false;
}

/** The text of a JSX element with its tags removed: "Highest <span>Revenue Per Show</span>" → "Highest Revenue Per Show". */
function jsxText(node: ts.Node): string {
  if (ts.isJsxText(node)) return node.text;
  if (ts.isJsxExpression(node)) {
    const e = node.expression;
    return e && (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) ? e.text : " ";
  }
  if (ts.isJsxElement(node)) return node.children.map(jsxText).join("");
  if (ts.isJsxSelfClosingElement(node)) return " ";
  return "";
}

/** Every reader-facing phrase in a source text that still says the old name. */
function oldNameHits(source: string, file = "snippet.tsx"): string[] {
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const hits: string[] = [];
  const visit = (node: ts.Node) => {
    let text: string | undefined;
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      if (!inKeywords(node)) text = node.text;
    } else if (ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
      text = node.text;
    } else if (ts.isJsxElement(node)) {
      text = jsxText(node).replace(/\s+/g, " ");
    }
    if (text && OLD.test(text)) hits.push(text.trim());
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return hits;
}

describe("/records/tours/revenue is called “Highest-grossing shows”", () => {
  it("negative control: the shipped headings are caught", () => {
    // The desktop h1 and the phone h1 as they shipped before the rename.
    expect(oldNameHits(`const a = (<h1 className={styles.h1}>
              Highest <span className="inkText">Revenue Per Show</span>
            </h1>);`)).not.toEqual([]);
    expect(oldNameHits(`const b = (<h1 className={styles.title}>
          Revenue per <span className={styles.gold}>show</span>
        </h1>);`)).not.toEqual([]);
    expect(oldNameHits(`export const alt = "Burna Boy — Highest Revenue Per Show";`)).not.toEqual([]);
    expect(oldNameHits(`const j = { name: "Highest reported revenue per show — African artists" };`)).not.toEqual([]);
    // The phone /records hub's heading and the countries method note, as shipped at 6005ca8e.
    expect(oldNameHits(`const m = (<h2 className={styles.h2}>Biggest single shows</h2>);`)).not.toEqual([]);
    expect(
      oldNameHits(`export const METHOD_NOTE =
  "What counts: per-show box-office grosses as reported by Billboard Boxscore & Pollstar (as aggregated by TouringData) and cross-checked against press reporting — the rows of the revenue board. An artist's total";`),
    ).not.toEqual([]);
    // …while a comment and a search keyword are not reader text.
    expect(oldNameHits(`/* Revenue per show */ const k = { keywords: ["revenue per show"] };`)).toEqual([]);
  });

  it("no reader-facing string on the site says the old name", () => {
    const hits = sourceFiles(APP).flatMap((file) => {
      const src = readFileSync(file, "utf8");
      if (!/revenue|biggest single/i.test(src)) return [];
      return oldNameHits(src, file).map((h) => `${relative(ROOT, file)}: ${h}`);
    });
    expect(hits).toEqual([]);
  });

  it("the page, its trail, its record-book card and its search entry carry the new name", () => {
    const page = readFileSync(join(APP, "records/tours/revenue/page.tsx"), "utf8");
    // Split-word gold: only the split word is gold, as on the child page.
    expect(page).toContain(`Highest-Grossing <span className="inkText">Shows</span>`);
    const phone = readFileSync(join(APP, "components/MobileRevenue.tsx"), "utf8");
    expect(phone).toContain(`<span className={styles.backLabel}>Highest-grossing</span>`);
    expect(phone).toContain(`Highest-grossing <span className={styles.gold}>shows</span>`);

    expect(SEGMENT_LABELS.revenue).toBe("Highest-Grossing Shows");
    expect(recordBooks.find((b) => b.href === "/records/tours/revenue")?.title).toBe("Highest-Grossing Shows");
    const doc = searchIndex.find((d) => d.path === "/records/tours/revenue")!;
    expect(doc.title).toBe("Highest-Grossing Shows");
    // The old words still find it.
    expect(doc.keywords).toEqual(expect.arrayContaining(["revenue per show", "highest-grossing shows"]));
    expect(searchDocs("revenue per show")[0]?.path).toBe("/records/tours/revenue");
    expect(searchDocs("highest-grossing shows")[0]?.path).toBe("/records/tours/revenue");
  });

  it("the /records hub's box-office heading is the same on both layouts", () => {
    // Both layouts get the treatment: #406 renamed the desktop hub only.
    const h2 = (file: string) =>
      [...readFileSync(join(APP, file), "utf8").matchAll(/<h2 className=\{styles\.h2\}>([^<]*)<\/h2>/g)].map((m) => m[1].trim());
    expect(h2("records/page.tsx")).toContain("Highest-grossing shows");
    expect(h2("components/MobileRecords.tsx")).toContain("Highest-grossing shows");
  });
});

/**
 * The same ruling reaches /records/visualized: its "Tickets vs …" scatter plots
 * the board's box-office grosses — gross ticket sales, not revenue — so its
 * heading, axis label, accessible names, caption, phone block and jump chip say
 * "gross". Only the scatter is read here: "revenue" elsewhere on the page
 * (streaming, the złoty methodology) is a different measure and stays.
 */

/** Every literal piece of an expression: "a", `a${x}b` → ["a", "b"]. */
function literalParts(e: ts.Expression | undefined): string[] {
  if (!e) return [];
  if (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) return [e.text];
  if (ts.isTemplateExpression(e)) return [e.head.text, ...e.templateSpans.map((sp) => sp.literal.text)];
  return [];
}

/**
 * The reader-facing strings around every <ScatterChart> in a source: its own
 * string props (axis labels, accessible name), the text of the <section> it
 * sits in (heading, caption), and the string fields of the phone block object
 * it is the chart of (title, note).
 */
function scatterStrings(source: string): string[] {
  const sf = ts.createSourceFile("snippet.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const out: string[] = [];
  const visit = (node: ts.Node) => {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText() === "ScatterChart") {
      for (const a of node.attributes.properties) {
        if (!ts.isJsxAttribute(a) || !a.initializer) continue;
        const init = a.initializer;
        if (ts.isStringLiteral(init)) out.push(init.text);
        else if (ts.isJsxExpression(init)) out.push(...literalParts(init.expression));
      }
      for (let n: ts.Node | undefined = node.parent; n; n = n.parent) {
        if (ts.isJsxElement(n) && n.openingElement.tagName.getText() === "section") {
          out.push(jsxText(n).replace(/\s+/g, " ").trim());
          break;
        }
        if (ts.isObjectLiteralExpression(n)) {
          for (const p of n.properties)
            if (ts.isPropertyAssignment(p)) out.push(...literalParts(p.initializer));
          break;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return out;
}

const SAYS_REVENUE = /revenue/i;

describe("/records/visualized: the box-office scatter says “gross”, not “revenue”", () => {
  it("negative control: the scatter as it shipped is caught", () => {
    // The desktop section and the phone block, verbatim as they shipped.
    const desktop = scatterStrings(`const d = (
        <section id="tickets-revenue" className={styles.wrap}>
          <div className={styles.eyebrow}>Box office</div>
          <h2 className={styles.h2}>Tickets vs revenue</h2>
          <div className={styles.chartBody}>
            <ScatterChart
              points={scatter}
              xLabel="Tickets sold"
              yLabel="Gross revenue"
              ariaLabel={\`Scatter plot of tickets sold versus gross revenue across \${scatter.length} verified single shows\`}
            />
          </div>
          <p className={styles.caption}>
            Each dot is a show — <span className={styles.captionLead}>gold is Burna Boy</span>.
            Revenue tracks ticket count closely, but higher-priced rooms sit above the line:{" "}
          </p>
        </section>);`);
    expect(desktop.filter((t) => SAYS_REVENUE.test(t)).length).toBe(3); // h2+caption section text, yLabel, ariaLabel
    const phone = scatterStrings(`const blocks = [{
            title: "Tickets vs revenue",
            note: "Each dot is one show — how a night's attendance turned into its gross.",
            chart: (
              <ScatterChart
                points={scatter}
                xLabel="Tickets sold"
                yLabel="Revenue"
                ariaLabel="Tickets sold against revenue for the verified single shows by African artists"
              />
            ),
          }];`);
    expect(phone.filter((t) => SAYS_REVENUE.test(t))).toEqual([
      "Revenue",
      "Tickets sold against revenue for the verified single shows by African artists",
      "Tickets vs revenue",
    ]);
  });

  it("the page's scatters — both layouts — never say “revenue”", () => {
    const src = readFileSync(join(APP, "records/visualized/page.tsx"), "utf8");
    const strings = scatterStrings(src);
    // Both scatters were found, with their headings: the guard is reading the page.
    expect(strings).toContain("Tickets vs gross");
    expect(strings.some((t) => t.includes("Tickets vs gross") && t.includes("Gross tracks ticket count"))).toBe(true);
    expect(strings.filter((t) => t === "Gross (USD)").length).toBe(2);
    expect(strings.filter((t) => SAYS_REVENUE.test(t))).toEqual([]);
  });

  it("the jump chip to the scatter says “gross” too", () => {
    const chip = JUMP.find((j) => j.href === "#tickets-revenue");
    expect(chip?.label).toBe("Tickets vs gross");
    expect(JUMP.filter((j) => SAYS_REVENUE.test(j.label))).toEqual([]);
  });
});
