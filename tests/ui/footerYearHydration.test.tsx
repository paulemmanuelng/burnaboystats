import { act } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

/**
 * The home page's copyright year, across a year boundary.
 *
 * FooterNav is a client component mounted in the ROOT layout, so its module is
 * evaluated in two different processes: on the server when the page is built,
 * and in the browser when the page is read. It called `new Date().getFullYear()`
 * during render, so those two evaluations answered differently for every reader
 * who opened a page built the previous year — and this site's pages are static,
 * so "built the previous year" is an ordinary state for a page to be in, not a
 * midnight-on-31-December curiosity.
 *
 * React does not patch a hydration mismatch in place. It discards the server's
 * subtree and re-renders it on the client, which is why a one-character
 * difference in a footer is worth a test.
 *
 * The two processes are simulated by resetting the module registry between the
 * server render and the hydration — that is the only way to make the module's
 * own clock read twice in one test process, and it is exactly what happens in
 * production.
 */

const container = () => document.body.appendChild(document.createElement("div"));

async function footerBuiltIn(year: number) {
  vi.setSystemTime(new Date(`${year}-06-15T12:00:00Z`));
  vi.resetModules();
  return (await import("../../app/components/FooterNav")).default;
}

beforeEach(() => vi.useFakeTimers({ toFake: ["Date"] }));
afterEach(() => {
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("FooterNav — the copyright year", () => {
  it("hydrates cleanly when the build year and the reader's year differ", async () => {
    const Built = await footerBuiltIn(2026);
    // renderToString separates adjacent text children with `<!-- -->` markers,
    // which is exactly what makes its output hydratable — strip them to read it.
    const html = renderToString(<Built />);
    expect(html.replace(/<!-- -->/g, "")).toContain("© 2026");

    const Read = await footerBuiltIn(2027);
    const root = container();
    root.innerHTML = html;

    const recoverable: string[] = [];
    await act(async () => {
      hydrateRoot(root, <Read />, {
        onRecoverableError: (e) => recoverable.push(String((e as Error)?.message ?? e)),
      });
    });

    // A hydration mismatch arrives here, and it is not a warning: React has
    // already thrown the server's footer away and rebuilt it.
    expect(recoverable, recoverable.join("\n")).toEqual([]);
  });

  it("keeps the year the page was published in", async () => {
    const Built = await footerBuiltIn(2026);
    const html = renderToString(<Built />);

    const Read = await footerBuiltIn(2027);
    const root = container();
    root.innerHTML = html;
    await act(async () => {
      hydrateRoot(root, <Read />, { onRecoverableError: () => {} });
    });

    // A copyright line states when the page was last published. For a static
    // page that is the build, not the moment a reader happened to open it.
    expect(root.textContent).toContain("© 2026");
    expect(root.textContent).not.toContain("© 2027");
  });

  it("renders no year at all on the compact footer", async () => {
    // Every page but "/" gets the compact bar, which has no copyright line —
    // so the clock read was only ever on the home page.
    vi.resetModules();
    vi.doMock("next/navigation", () => ({ usePathname: () => "/records/charts" }));
    const Compact = (await import("../../app/components/FooterNav")).default;
    expect(renderToString(<Compact />)).not.toContain("©");
    vi.doUnmock("next/navigation");
  });
});
