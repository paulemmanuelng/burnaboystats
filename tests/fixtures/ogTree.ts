import type { ReactElement, ReactNode } from "react";
import { OgLockup } from "../../app/lib/og-lockup";

/**
 * Walk a link-preview card's element tree as the renderer is handed it: plain
 * host elements with `style`, the figure cards' parts expanded as the
 * renderer expands them, and OgLockup (not expanded: it is the lockup, held
 * whole). For the Job 6 card guards
 * (ogLockupUnchanged, ogMinText28, shareOgIsDefaultStatCard).
 *
 * Record a route's tree with a stub in place of next/og's ImageResponse:
 *   const drawn = vi.hoisted(() => [] as unknown[]);
 *   vi.mock("next/og", () => ({ ImageResponse: class { constructor(el: unknown) { drawn.push(el); return new Response(""); } } }));
 * The empty body then passes straight through compactPreview.
 */

export type Style = Record<string, unknown>;
export type Node = { type: unknown; style: Style; props: Record<string, unknown>; kids: Node[]; text: string[] };

const isElement = (n: unknown): n is ReactElement<Record<string, unknown>> =>
  typeof n === "object" && n !== null && "type" in n && "props" in n;

/** The tree, with each element's own text children and its element children.
 *  A function component other than OgLockup is expanded, as the renderer
 *  expands it (og-figure.tsx's Figure, MonoLines, BodyBox…). */
export function tree(el: ReactNode): Node {
  if (!isElement(el)) throw new Error("not an element");
  if (typeof el.type === "function" && el.type !== OgLockup) {
    return tree((el.type as (p: unknown) => ReactNode)(el.props));
  }
  const props = el.props ?? {};
  const kids: Node[] = [];
  const text: string[] = [];
  const visit = (c: unknown) => {
    if (c === null || c === undefined || c === false || c === true) return;
    if (Array.isArray(c)) return c.forEach(visit);
    if (typeof c === "string" || typeof c === "number") return void text.push(String(c));
    if (isElement(c)) {
      // A fragment's children are its parent's.
      if (typeof c.type === "symbol") return visit((c.props as { children?: unknown }).children);
      kids.push(tree(c));
    }
  };
  if (el.type !== OgLockup) visit(props.children);
  return { type: el.type, style: (props.style as Style) ?? {}, props, kids, text };
}

/** Every node, depth first. */
export const all = (n: Node): Node[] => [n, ...n.kids.flatMap(all)];

/** The node whose child is the lockup: the lockup's wrapper. */
export const lockupWrapper = (root: Node) => all(root).filter((n) => n.kids.some((k) => k.type === OgLockup));

/** The foot: the node that prints exactly BURNABOYSTATS.COM. */
export const foot = (root: Node) => all(root).filter((n) => n.text.join("") === "BURNABOYSTATS.COM");

/** The card's body: every node under the frame, less the lockup wrapper and the foot. */
export function body(root: Node): Node[] {
  const skip = new Set([...lockupWrapper(root), ...foot(root)]);
  const out: Node[] = [];
  const walk = (n: Node) => {
    if (skip.has(n)) return;
    out.push(n);
    n.kids.forEach(walk);
  };
  root.kids.forEach(walk);
  return out;
}

/** Every string a set of nodes prints, each node's text joined. */
export const texts = (nodes: Node[]) => nodes.map((n) => n.text.join("")).filter((t) => t.trim() !== "");

/** The font sizes a set of nodes sets, with the text each one carries. */
export const fontSizes = (nodes: Node[]) =>
  nodes.filter((n) => n.style.fontSize !== undefined).map((n) => ({ size: Number(n.style.fontSize), text: n.text.join("") }));
