"use client"; // dispatches a window event

/**
 * The hero's third action. It opens the same palette the nav and ⌘K use, by
 * dispatching an event rather than lifting that component's state — the
 * palette stays self-contained and there is still only one of it on the page.
 */
export default function SearchTrigger() {
  return (
    <button
      type="button"
      className="btn btnGhost"
      onClick={() => window.dispatchEvent(new Event("open-search"))}
    >
      Search the dataset ⌘K
    </button>
  );
}
