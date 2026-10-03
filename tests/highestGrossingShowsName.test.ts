import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";
import { SEGMENT_LABELS } from "../app/lib/seo";
import { recordBooks } from "../app/lib/recordBooks";
import { searchIndex, searchDocs } from "../app/lib/searchIndex";

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

const OLD = /revenue per show|highest (reported )?revenue/i;

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
    // …while a comment and a search keyword are not reader text.
    expect(oldNameHits(`/* Revenue per show */ const k = { keywords: ["revenue per show"] };`)).toEqual([]);
  });

  it("no reader-facing string on the site says the old name", () => {
    const hits = sourceFiles(APP).flatMap((file) => {
      const src = readFileSync(file, "utf8");
      if (!/revenue/i.test(src)) return [];
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
});
