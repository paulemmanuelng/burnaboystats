import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import ContactForm from "../../app/components/ContactForm";

/**
 * Design review C-19, 8 Oct 2026: a failed send on /contact rendered in
 * `color: var(--text-muted)` — the field labels' grey — so the one message the
 * reader must not miss read like another label. It is shared by both layouts
 * (the phone screen renders the same form with idPrefix="m-").
 */
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("/contact: a failed send is shown in the error ink", () => {
  it.each([[{}], [{ idPrefix: "m-", stacked: true }]])("layout %#", async (props) => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 500, json: async () => ({}) })));
    const { container } = render(<ContactForm {...props} />);
    const pre = props.idPrefix ?? "";
    fireEvent.change(container.querySelector(`#${pre}name`)!, { target: { name: "name", value: "Ada" } });
    fireEvent.change(container.querySelector(`#${pre}email`)!, { target: { name: "email", value: "ada@example.com" } });
    fireEvent.change(container.querySelector(`#${pre}message`)!, { target: { name: "message", value: "Hi" } });
    fireEvent.submit(container.querySelector("form")!);
    const alert = await screen.findByRole("alert");
    expect(alert.textContent).toBe("Something went wrong — please try again in a moment.");
    // Production on 8 Oct: style="color:var(--text-muted);font-size:0.85rem".
    expect(alert.style.color).toBe("var(--error-ink)");
    expect(alert.style.borderLeft).toBe("2px solid var(--error-ink)");
  });
});
