/**
 * The hunt's word matching, shared by the browser (HuntKeySlot.tsx, which reads
 * the word under a tap) and the reveal route (which compares it). Holds no
 * word: those live server-side only, in app/data/naija66Words.ts.
 *
 * A token is a run of letters and digits, or a number with commas or periods
 * inside it ("1,234", "15.34"). Apostrophes and hyphens split tokens, so the
 * name in "Name's" is its own token.
 */
const TOKEN = /\p{N}+(?:[.,]\p{N}+)+|[\p{L}\p{M}\p{N}]+/gu;

/** Lowercased, NFKC, surrounding punctuation stripped; null when nothing is left. */
export function normaliseWord(w: unknown): string | null {
  if (typeof w !== "string") return null;
  const s = w
    .slice(0, 64)
    .normalize("NFKC")
    .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "")
    .toLowerCase();
  return s || null;
}

/** The tokens of `text` that touch character offset `offset` (a caret sits between two). */
export function tokensAt(text: string, offset: number): { word: string; start: number; end: number }[] {
  const out: { word: string; start: number; end: number }[] = [];
  for (const m of text.matchAll(TOKEN)) {
    const start = m.index ?? 0;
    const end = start + m[0].length;
    if (start <= offset && offset <= end) out.push({ word: m[0], start, end });
    if (start > offset) break;
  }
  return out;
}

type CaretDoc = Document & {
  caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
  caretRangeFromPoint?: (x: number, y: number) => Range | null;
};

const inside = (r: DOMRect, x: number, y: number, slack = 1) =>
  x >= r.left - slack && x <= r.right + slack && y >= r.top - slack && y <= r.bottom + slack;

/**
 * The word under a click at (x, y), or null — read from the caret position at
 * that point, and only when the point is on the word's own box (a click in the
 * blank space past a line's end puts the caret after its last word).
 */
export function wordAtPoint(doc: Document, x: number, y: number): string | null {
  const d = doc as CaretDoc;
  let node: Node | null = null;
  let offset = 0;
  try {
    if (typeof d.caretPositionFromPoint === "function") {
      const p = d.caretPositionFromPoint(x, y);
      if (p) ({ offsetNode: node, offset } = p);
    } else if (typeof d.caretRangeFromPoint === "function") {
      const r = d.caretRangeFromPoint(x, y);
      if (r) ({ startContainer: node, startOffset: offset } = r);
    }
  } catch {
    node = null;
  }
  // Fallback: the clicked text node's word at the selection's caret.
  if (!node) {
    const sel = doc.getSelection?.();
    if (sel?.anchorNode) ({ anchorNode: node, anchorOffset: offset } = sel);
  }
  if (!node || node.nodeType !== Node.TEXT_NODE) return null;
  const text = (node as Text).data;
  for (const t of tokensAt(text, offset)) {
    try {
      const range = doc.createRange();
      range.setStart(node, t.start);
      range.setEnd(node, t.end);
      // No layout to test against (jsdom): trust the caret.
      if (typeof range.getClientRects !== "function") return t.word;
      const rects = Array.from(range.getClientRects());
      if (rects.length === 0 || rects.every((r) => r.width === 0 && r.height === 0)) return t.word;
      if (rects.some((r) => inside(r, x, y))) return t.word;
    } catch {
      /* try the next token */
    }
  }
  return null;
}
