import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/embed",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import EmbedGallery from "../../app/components/EmbedGallery";
import MobileEmbed from "../../app/components/MobileEmbed";
import { embedMetas, EMBED_SLUGS } from "../../app/lib/embedWidgets";

/**
 * The /embed page's two layouts, desktop (EmbedGallery) and phone
 * (MobileEmbed), are separate components in the same document — so anything
 * one offers, the other must too. Both show every widget live, both hand over a
 * snippet that matches what they show, and the theme picker moves the two
 * together, in each layout.
 */

const widgets = embedMetas();
const layouts = [
  ["desktop", () => render(<EmbedGallery widgets={widgets} />)],
  ["phone", () => render(<MobileEmbed widgets={widgets} lede="lede" notes={[{ h: "A.", p: "b" }]} />)],
] as const;

describe.each(layouts)("/embed, %s layout", (_name, mount) => {
  it("shows every widget from its own address, with its snippet", () => {
    const { container } = mount();
    const srcs = [...container.querySelectorAll("iframe")].map((f) => f.getAttribute("src"));
    expect(srcs).toEqual(EMBED_SLUGS.map((s) => `/embed/${s}`));
    const snippets = [...container.querySelectorAll("pre")].map((p) => p.textContent ?? "");
    expect(snippets).toHaveLength(EMBED_SLUGS.length);
    EMBED_SLUGS.forEach((s, i) => {
      expect(snippets[i]).toContain(`<iframe src="https://burnaboystats.com/embed/${s}"`);
    });
    // One Copy per widget.
    expect(screen.getAllByRole("button", { name: /copy code/i })).toHaveLength(EMBED_SLUGS.length);
  });

  it("the theme picker rewrites the previews and the snippets together", async () => {
    const user = userEvent.setup();
    const { container } = mount();
    const group = screen.getByRole("radiogroup");
    expect(within(group).getByRole("radio", { name: "Auto" })).toHaveAttribute("aria-checked", "true");

    await user.click(within(group).getByRole("radio", { name: "Dark" }));
    expect(within(group).getByRole("radio", { name: "Dark" })).toHaveAttribute("aria-checked", "true");
    const srcs = [...container.querySelectorAll("iframe")].map((f) => f.getAttribute("src"));
    expect(srcs).toEqual(EMBED_SLUGS.map((s) => `/embed/${s}?theme=dark`));
    for (const p of container.querySelectorAll("pre")) {
      expect(p.textContent).toMatch(/\/embed\/[a-z-]+\?theme=dark"/);
    }
  });
});

it("the two layouts offer the same snippets", () => {
  const a = render(<EmbedGallery widgets={widgets} />);
  const desk = [...a.container.querySelectorAll("pre")].map((p) => p.textContent);
  a.unmount();
  const b = render(<MobileEmbed widgets={widgets} lede="lede" notes={[]} />);
  const phone = [...b.container.querySelectorAll("pre")].map((p) => p.textContent);
  expect(phone).toEqual(desk);
  // And the phone carries the onward links the desktop page prints.
  for (const href of ["/api", "/press", "/share"]) {
    expect(b.container.querySelector(`a[href="${href}"]`), href).not.toBeNull();
  }
});
