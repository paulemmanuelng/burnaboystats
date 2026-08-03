"use client"; // dispatches a window event

/**
 * The hero's "See the tracklist" action. It asks the album grid's dialog to
 * open a release by title, so the page itself stays a server component and
 * there is still only one dialog on the page.
 */
export default function TracklistTrigger({ title }: { title: string }) {
  return (
    <button
      type="button"
      className="btn btnPrimary"
      onClick={() => window.dispatchEvent(new CustomEvent("open-tracklist", { detail: title }))}
    >
      See the tracklist
    </button>
  );
}
