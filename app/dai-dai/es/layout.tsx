import type { ReactNode } from "react";
import DocumentLangEs from "./DocumentLangEs";

/**
 * The Spanish edition's own layout. It adds no markup and no design — it exists
 * only to scope one thing to this route: the document language.
 *
 * Scope is the whole point of putting it here rather than in a component the
 * page renders. This route is the site's only non-English page, so the
 * correction must apply to it and to nothing else; a layout is the boundary
 * Next.js mounts and unmounts on exactly that condition. See DocumentLangEs
 * for why the attribute is set in an effect and why it is restored on the way
 * out.
 */
export default function SpanishDaiDaiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocumentLangEs />
      {children}
    </>
  );
}
