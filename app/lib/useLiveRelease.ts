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
let snapshot: Promise<Map<string, LiveRelease>> | null = null;

function load(): Promise<Map<string, LiveRelease>> {
  snapshot ??= fetch("/api/v1/live-charts")
    .then((r) => {
      if (!r.ok) throw new Error(`live snapshot ${r.status}`);
      return r.json() as Promise<{ releases: LiveRelease[] }>;
    })
    .then((d) => new Map(d.releases.map((r) => [r.title, r])))
    .catch((e) => {
      snapshot = null;
      throw e;
    });
  return snapshot;
}

export function useLiveRelease(title: string, active: boolean) {
  const [state, setState] = useState<{
    release?: LiveRelease;
    error?: boolean;
  }>({});
  // Bumped by retry so the effect re-runs after a cleared failure.
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!active) return;
    let on = true;
    load()
      .then((m) => on && setState({ release: m.get(title) }))
      .catch(() => on && setState({ error: true }));
    return () => {
      on = false;
    };
  }, [active, title, attempt]);

  return {
    release: state.release,
    error: !!state.error,
    loading: active && !state.release && !state.error,
    retry: () => {
      setState({});
      setAttempt((n) => n + 1);
    },
  };
}
