"use client"; // reads and writes the address bar and this history entry

import { useEffect, useLayoutEffect, useState } from "react";
import { dropDeepLink, readSavedView, replaceUrl, saveView } from "./deepLink";
import { RUNS_VIEW, type BoardView } from "./showsChips";
import { SHOWS_PARAM, artistSlug } from "./showsDeepLink";
import { useLinkedArtist } from "./useLinkedArtist";

/**
 * The chip a highest-grossing-shows board shows, on either layout, and the
 * address bar and history kept in step with it (debug pass 4 Oct 2026, A-03):
 *
 *  - an artist's chip puts `?artist=<slug>` in the address bar — the form the
 *    "Biggest shows" button links with — by replaceState, so no navigation and
 *    no new history entry; All, Multi-night runs, or a chip toggled off take
 *    the key out (fragment and query alike);
 *  - the chip is kept in this history entry (saveView) and read back before
 *    the first paint, so Back from the countries board returns the chip the
 *    reader left — the runs chip too, which has no address of its own.
 *
 * Until a chip is tapped or restored, the deep link (useLinkedArtist) decides.
 * `arrivedLinked` is true when the page opened on a deep link's artist — not
 * a Back to a chip the reader had picked here — for the one-off scroll to the
 * board (A-10).
 */

const RUNS_KEY = "runs";

type Saved = { view: string | null };

const encode = (v: BoardView): string | null => (v === RUNS_VIEW ? RUNS_KEY : v);
function decode(v: string | null | undefined, artists: readonly string[]): BoardView {
  if (v === RUNS_KEY) return RUNS_VIEW;
  return v && artists.includes(v) ? v : null;
}

/** The address bar names `artist` (or nobody), with no navigation. */
export function linkArtist(artist: string | null): void {
  dropDeepLink(SHOWS_PARAM);
  if (artist === null) return;
  const search = new URLSearchParams(window.location.search);
  search.set(SHOWS_PARAM, artistSlug(artist));
  replaceUrl(`${window.location.pathname}?${search.toString()}${window.location.hash}`);
}

export function useBoardView(artists: readonly string[], id: string) {
  const linked = useLinkedArtist(artists);
  const [picked, setPicked] = useState<BoardView | undefined>(undefined);
  // Whether this entry has been checked for a saved chip yet, and whether it
  // had one. Until it has, the page cannot know it "arrived" on the deep link:
  // a Back mounts client-side, where the address bar's artist is there on the
  // first render, before the saved chip is read.
  const [checked, setChecked] = useState(false);
  const [restored, setRestored] = useState(false);

  // Back (or Forward) to this entry: the chip the reader left, before paint —
  // a layout effect, as the other explorers read their saved filters.
  useLayoutEffect(() => {
    const restore = (saved: Saved | null) => {
      setChecked(true);
      if (!saved) return;
      setRestored(true);
      setPicked(decode(saved.view, artists));
    };
    restore(readSavedView<Saved>(id));
    // Read once, on mount: the artists are the board's, fixed for the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (picked !== undefined) saveView(id, { view: encode(picked) } satisfies Saved);
  }, [id, picked]);

  const view: BoardView = picked === undefined ? linked : picked;

  /** A chip tapped: the board, the address bar and this entry follow it. */
  const pick = (next: BoardView) => {
    setPicked(next);
    linkArtist(typeof next === "string" ? next : null);
  };

  return {
    view,
    pick,
    /** The page opened on the deep link's artist: nothing tapped, nothing
     *  restored (not a Back to a pick). */
    arrivedLinked: checked && !restored && picked === undefined && linked !== null,
  };
}
