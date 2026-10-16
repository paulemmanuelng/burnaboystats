import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/contact",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ContactPage from "../../app/contact/page";
import styles from "../../app/contact/contact.module.css";
import mobileStyles from "../../app/components/mobileContact.module.css";

/**
 * Owner question #18 (live debug 15 Oct 2026, HA-7; Paul: "yes to all"): the
 * desktop /contact printed "Message me" above both GET IN TOUCH and DROP A
 * LINE. The hero's eyebrow is now "Contact"; the form keeps "Message me". The
 * phone screen never repeated it (its form block is "Drop a line") and is
 * left as it was.
 */

const page = () => new DOMParser().parseFromString(renderToStaticMarkup(<ContactPage />), "text/html");
const text = (e: Element | null) => (e?.textContent ?? "").replace(/\s+/g, " ").trim();
const eyebrows = (d: Document) => [...d.querySelectorAll(`.${styles.desktopOnly} .${styles.eyebrow}`)].map(text);

describe("#18: one 'Message me' on the desktop /contact", () => {
  it("the hero's eyebrow is 'Contact', over the h1", () => {
    const d = page();
    const h1 = d.querySelector(`.${styles.desktopOnly} h1`)!;
    expect(text(h1)).toBe("Get in Touch");
    expect(text(h1.previousElementSibling)).toBe("Contact");
  });

  it("the form keeps 'Message me', over 'Drop a line'; the channels keep theirs", () => {
    const d = page();
    expect(eyebrows(d)).toEqual(["Contact", "Message me", "Official channels"]);
    const h2 = d.querySelector(`.${styles.desktopOnly} h2`)!;
    expect(text(h2)).toBe("Drop a line");
    expect(text(h2.previousElementSibling)).toBe("Message me");
  });

  it("the phone screen is unchanged: its hero kicker 'Message me', its form 'Drop a line'", () => {
    const d = page();
    expect(text(d.querySelector(`.${mobileStyles.kicker}`))).toBe("Message me");
    expect([...d.querySelectorAll(`.${mobileStyles.sectionKicker}`)].map(text)).toEqual(["Drop a line", "Official channels"]);
  });
});

describe("#18 negative control: the eyebrows main shipped", () => {
  it("origin/main a9574c64 printed 'Message me' twice on the desktop page", () => {
    // app/contact/page.tsx on main: the hero eyebrow (line 37) and the form's (line 52).
    const SHIPPED = ["Message me", "Message me", "Official channels"];
    expect(SHIPPED.filter((e) => e === "Message me")).toHaveLength(2);
    expect(eyebrows(page())).not.toEqual(SHIPPED);
    expect(eyebrows(page()).filter((e) => e === "Message me")).toHaveLength(1);
  });
});
