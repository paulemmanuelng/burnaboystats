import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SpanishDaiDaiLayout from "../app/dai-dai/es/layout";
import { metadata as esMetadata } from "../app/dai-dai/es/page";
import { metadata as enMetadata } from "../app/dai-dai/page";
import nextConfig from "../next.config.mjs";

/**
 * /dai-dai/es is the site's only non-English page, and it was served under
 * `<html lang="en">`.
 *
 * Every other declaration on it said Spanish — a reciprocal hreflang pair with
 * /dai-dai, `og:locale: es_ES`, `inLanguage: "es"` in its Article node, and
 * `<main lang="es">` around the prose. The document-level one, which is the one
 * a browser, a screen reader and a rendering crawler actually read, said
 * English, because app/layout.tsx hard-codes it for the whole app and a nested
 * route cannot reopen <html> to disagree.
 *
 * The route's own layout corrects it after hydration and puts it back on the
 * way out. Both halves matter and the second is the easy one to lose: the site
 * never reloads the document between routes, so a correction without a cleanup
 * would follow the reader out of the Spanish page and leave every English page
 * after it claiming Spanish — one wrong lang traded for all of them.
 */

describe("the Spanish edition's document language", () => {
  it("sets <html lang> to Spanish while the route is mounted", () => {
    document.documentElement.lang = "en";
    const view = render(<SpanishDaiDaiLayout>{null}</SpanishDaiDaiLayout>);
    expect(document.documentElement.lang).toBe("es");
    view.unmount();
  });

  it("puts the previous language back when the reader leaves", () => {
    document.documentElement.lang = "en";
    const view = render(<SpanishDaiDaiLayout>{null}</SpanishDaiDaiLayout>);
    view.unmount();
    expect(document.documentElement.lang).toBe("en");
  });

  it("renders whatever the route puts inside it", () => {
    // The layout exists only to scope the language, so it must be transparent:
    // if it ever starts swallowing or wrapping the page, that is a design change
    // nobody asked for.
    document.documentElement.lang = "en";
    const view = render(
      <SpanishDaiDaiLayout>
        <p>la canción del Mundial</p>
      </SpanishDaiDaiLayout>,
    );
    expect(view.container.innerHTML).toBe("<p>la canción del Mundial</p>");
    view.unmount();
  });

  it("says Spanish at the transport layer too, for readers without JavaScript", async () => {
    const headers = await nextConfig.headers!();
    const rule = headers.find((h) => h.source === "/dai-dai/es");
    expect(rule, "next.config.mjs no longer declares the Spanish route's language").toBeDefined();
    expect(rule!.headers).toContainEqual({ key: "Content-Language", value: "es" });
  });
});

describe("the Dai Dai hreflang pair", () => {
  it("has each edition name both editions and the same x-default", () => {
    // hreflang is ignored unless it is reciprocal, so the two metadata blocks
    // have to agree exactly — including the self-reference each one owes.
    const expected = { en: "/dai-dai", es: "/dai-dai/es", "x-default": "/dai-dai" };
    expect(enMetadata.alternates?.languages).toEqual(expected);
    expect(esMetadata.alternates?.languages).toEqual(expected);
  });

  it("declares the Spanish edition's Open Graph locale as Spanish", () => {
    expect(esMetadata.openGraph?.locale).toBe("es_ES");
    expect(enMetadata.openGraph?.locale).toBe("en_US");
  });

  it("keeps each edition canonical to itself, not to the other", () => {
    // A translation that canonicalises to the original removes itself from the
    // index, which is the classic way an hreflang pair is thrown away.
    expect(esMetadata.alternates?.canonical).toBe("/dai-dai/es");
    expect(enMetadata.alternates?.canonical).toBe("/dai-dai");
  });
});
