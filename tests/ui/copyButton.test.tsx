import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CopyButton from "../../app/components/CopyButton";

// The /api page offers two copy buttons (the curl line and the attribution
// string). The clipboard API rejects in plenty of real situations — an insecure
// context, a denied permission, a window that isn't focused — and a button that
// says "Copied ✓" when nothing reached the clipboard is worse than one that says
// nothing. These cover both paths, because neither can be exercised in an
// automated browser: writeText refuses whenever the document isn't focused.
describe("CopyButton", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  function stubClipboard(impl: () => Promise<void>) {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn(impl) },
      configurable: true,
      writable: true,
    });
  }

  it("writes the value and confirms in place", async () => {
    stubClipboard(() => Promise.resolve());
    render(<CopyButton value="curl https://example.test/api" />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Copy");

    await userEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "curl https://example.test/api"
    );
    await waitFor(() => expect(button).toHaveTextContent("Copied ✓"));
  });

  it("stays silent when the clipboard refuses, rather than claiming success", async () => {
    stubClipboard(() => Promise.reject(new Error("NotAllowedError")));
    render(<CopyButton value="anything" />);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    // Give the rejected promise a turn to settle before asserting.
    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalled());
    expect(button).toHaveTextContent("Copy");
    expect(button).not.toHaveTextContent("Copied");
  });
});
