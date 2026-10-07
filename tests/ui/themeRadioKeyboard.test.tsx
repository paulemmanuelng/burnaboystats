import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "../../app/components/ThemeToggle";

/**
 * The Appearance radiogroup from the keyboard (debug pass 5 Oct 2026,
 * V-global-18).
 *
 * The control is role=radiogroup with three role=radio buttons, but on the live
 * site (headless Chrome, 1440 footer and 390 menu sheet, dark and light, 7 Oct)
 * every option was its own Tab stop — Tab from the checked "Dark" landed on
 * "Light", from "Light" on "System" — and ArrowRight on the checked option did
 * nothing: focus and the stored theme stayed put. A radiogroup is one Tab stop
 * whose arrow keys move and pick. These tests walk both variants that draw the
 * group — the footer's icon-only "compact" and the sheet's labelled "full" —
 * and fail on the shipped component.
 */

beforeEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});
afterEach(() => {
  cleanup();
  localStorage.clear();
});

const VARIANTS = ["compact", "full"] as const;

function renderBetween(variant: (typeof VARIANTS)[number]) {
  render(
    <>
      <button type="button">before</button>
      <ThemeToggle variant={variant} />
      <button type="button">after</button>
    </>
  );
  const group = screen.getByRole("radiogroup", { name: "Appearance" });
  const radio = (name: string) => within(group).getByRole("radio", { name });
  return { radio };
}

describe.each(VARIANTS)("ThemeToggle %s — the Appearance radiogroup is one Tab stop", (variant) => {
  it.each(["dark", "light", "system"] as const)("stored %s: only the checked option is in the Tab order", async (stored) => {
    localStorage.setItem("theme", stored);
    const { radio } = renderBetween(variant);
    const name = stored[0].toUpperCase() + stored.slice(1);

    screen.getByRole("button", { name: "before" }).focus();
    await userEvent.tab();
    expect(radio(name)).toHaveFocus();
    expect(radio(name)).toHaveAttribute("aria-checked", "true");

    // The next Tab leaves the group; it does not walk to the other two options.
    await userEvent.tab();
    expect(screen.getByRole("button", { name: "after" })).toHaveFocus();

    // And Shift+Tab from after the group comes back to the checked option.
    await userEvent.tab({ shift: true });
    expect(radio(name)).toHaveFocus();
  });
});

describe.each(VARIANTS)("ThemeToggle %s — the arrow keys move and pick", (variant) => {
  it("ArrowRight on the checked Dark picks and focuses Light (on the live site focus and theme stayed on Dark)", async () => {
    const { radio } = renderBetween(variant);
    radio("Dark").focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(radio("Light")).toHaveFocus();
    expect(radio("Light")).toHaveAttribute("aria-checked", "true");
    expect(radio("Dark")).toHaveAttribute("aria-checked", "false");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");
    // The Tab stop moved with the choice.
    expect(radio("Light")).toHaveAttribute("tabindex", "0");
    expect(radio("Dark")).toHaveAttribute("tabindex", "-1");
    expect(radio("System")).toHaveAttribute("tabindex", "-1");
  });

  it("ArrowDown walks forward and wraps from System to Dark", async () => {
    localStorage.setItem("theme", "light");
    const { radio } = renderBetween(variant);
    radio("Light").focus();
    await userEvent.keyboard("{ArrowDown}");
    expect(radio("System")).toHaveFocus();
    expect(localStorage.getItem("theme")).toBe("system");
    await userEvent.keyboard("{ArrowDown}");
    expect(radio("Dark")).toHaveFocus();
    expect(radio("Dark")).toHaveAttribute("aria-checked", "true");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("ArrowLeft and ArrowUp walk back and wrap from Dark to System", async () => {
    const { radio } = renderBetween(variant);
    radio("Dark").focus();
    await userEvent.keyboard("{ArrowLeft}");
    expect(radio("System")).toHaveFocus();
    expect(radio("System")).toHaveAttribute("aria-checked", "true");
    expect(localStorage.getItem("theme")).toBe("system");
    await userEvent.keyboard("{ArrowUp}");
    expect(radio("Light")).toHaveFocus();
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("other keys are left alone, and a click still picks and takes the Tab stop", async () => {
    const { radio } = renderBetween(variant);
    radio("Dark").focus();
    await userEvent.keyboard("{Home}");
    expect(radio("Dark")).toHaveFocus();
    expect(localStorage.getItem("theme")).toBeNull();
    await userEvent.click(radio("System"));
    expect(radio("System")).toHaveAttribute("aria-checked", "true");
    expect(radio("System")).toHaveAttribute("tabindex", "0");
    expect(localStorage.getItem("theme")).toBe("system");
  });
});
