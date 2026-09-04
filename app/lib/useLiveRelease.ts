"use client"; // a hook — fetches the live snapshot for the on-demand panels

import { useEffect, useState } from "react";
import type { LiveRelease } from "../data/liveCharts";

/**
 * The full live-charts snapshot, fetched once per page and shared.
 *
 * The page used to ship every country row of every release in its own HTML —
 * ~790 rows a visitor may never open, and the single heaviest payload on the
 * site. Now the page carries only the summaries, and the first panel a reader
 * opens triggers ONE fetch of the whole snapshot (57KB of JSON, cached by the
 * CDN); every later panel opens instantly from this module-level cache.
 *
 * The promise is cleared on failure so a retry can actually retry.
 */
// One cached promise PER endpoint. It was a single module-level promise, which
// was right while Burna Boy had the only live-charts page — with the board's
// artists it would have served his snapshot on their pages.
const snapshots = new Map<string, Promise<Map<string, LiveRelease>>>();

function load(source: string): Promise<Map<string, LiveRelease>> {
  const cached = snapshots.get(source);
  if (cached) return cached;
  const pending = fetch(source)
    .then((r) => {
      if (!r.ok) throw new Error(`live snapshot ${r.status}`);
      return r.json() as Promise<{ releases: LiveRelease[] }>;
    })
    .then((d) => new Map(d.releases.map((r) => [r.title, r])))
    .catch((e) => {
      snapshots.delete(source);
      throw e;
    });
  snapshots.set(source, pending);
  return pending;
}

export function useLiveRelease(title: string, active: boolean, source = "/api/v1/live-charts") {
  const [state, setState] = useState<{
    release?: LiveRelease;
    /**
     * The fetch came back. Tracked separately from `release`, which is
     * `undefined` in TWO different situations that used to be indistinguishable:
     * before the snapshot settles, and after a snapshot that settled fine but
     * carries no row for this title. `loading` was derived from `!release`, so
     * the second case left it true forever — the panel spun for the whole life
     * of the page and the caller's error branch was never reached.
     */
    loaded?: boolean;
    error?: boolean;
  }>({});
  // Bumped by retry so the effect re-runs after a cleared failure.
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!active) return;
    let on = true;
    load(source)
      .then((m) => on && setState({ release: m.get(title), loaded: true }))
      .catch(() => on && setState({ error: true }));
    return () => {
      on = false;
    };
  }, [active, title, attempt, source]);

  return {
    release: state.release,
    /** The snapshot could not be fetched at all. */
    error: !!state.error,
    /**
     * The snapshot arrived and has no row for this title. NOT an error, and
     * worth telling apart: the pages are statically generated while
     * /api/v1/live-charts is served `stale-while-revalidate=86400`, so a
     * release that entered a chart since the reader's cached snapshot was taken
     * is on the page and absent from the JSON. Reporting that as "couldn't
     * load" asserts a network failure that did not happen.
     */
    missing: !!state.loaded && !state.release,
    loading: active && !state.loaded && !state.error,
    retry: () => {
      // Drop the cached snapshot as well. `load` only clears it on failure, so
      // a retry after a fetch that SUCCEEDED-but-empty re-awaited the very same
      // resolved promise and could only ever produce the same empty answer —
      // a button that could not do anything.
      snapshots.delete(source);
      setState({});
      setAttempt((n) => n + 1);
    },
  };
}
