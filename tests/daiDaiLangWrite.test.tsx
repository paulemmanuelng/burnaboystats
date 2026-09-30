import { render } from "@testing-library/react";
import { useEffect } from "react";
import SpanishDaiDaiLayout from "../app/dai-dai/es/layout";

/**
 * /dai-dai/es writes <html lang> only when it has to (speed pass, 30 Sep 2026).
 *
 * On a full load the root layout's pre-paint script has already set "es", and
 * DocumentLangEs's effect set it again. Writing an attribute its own value is
 * still a mutation: it invalidated style for the whole document, and on this
 * page that was a restyle of ~2,073 elements right after hydration (11-17 ms on
 * a 4x-throttled phone). The effect now writes only when the value differs.
 * A client-side arrival from /dai-dai still finds "en" and writes "es".
 *
 * A MutationObserver sees every write, same value or not, as a browser does.
 */
function langWrites(start: string, act: () => void): { writes: number; lang: string } {
  const root = document.documentElement;
  root.lang = start;
  const mo = new MutationObserver(() => {});
  mo.observe(root, { attributes: true, attributeFilter: ["lang"] });
  act();
  const writes = mo.takeRecords().length;
  mo.disconnect();
  return { writes, lang: root.lang };
}

describe("DocumentLangEs writes lang only when it differs", () => {
  it("after a full load (lang already es): no write at all", () => {
    let view: ReturnType<typeof render> | undefined;
    const r = langWrites("es", () => {
      view = render(<SpanishDaiDaiLayout>{null}</SpanishDaiDaiLayout>);
    });
    expect(r).toEqual({ writes: 0, lang: "es" });
    view!.unmount();
  });

  it("after a client-side arrival (lang en): one write, and it ends es", () => {
    let view: ReturnType<typeof render> | undefined;
    const r = langWrites("en", () => {
      view = render(<SpanishDaiDaiLayout>{null}</SpanishDaiDaiLayout>);
    });
    expect(r).toEqual({ writes: 1, lang: "es" });
    view!.unmount();
  });

  it("leaving sets en", () => {
    document.documentElement.lang = "es";
    const view = render(<SpanishDaiDaiLayout>{null}</SpanishDaiDaiLayout>);
    view.unmount();
    expect(document.documentElement.lang).toBe("en");
  });

  it("negative control: the shipped unconditional effect writes once even when lang is already es", () => {
    // DocumentLangEs's effect as shipped, verbatim.
    function Shipped() {
      useEffect(() => {
        const root = document.documentElement;
        root.lang = "es";
        return () => {
          root.lang = "en";
        };
      }, []);
      return null;
    }
    let view: ReturnType<typeof render> | undefined;
    const r = langWrites("es", () => {
      view = render(<Shipped />);
    });
    expect(r).toEqual({ writes: 1, lang: "es" });
    view!.unmount();
  });
});
