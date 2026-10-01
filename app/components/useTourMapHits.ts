"use client";

import { useEffect, useState } from "react";
import { toHitShape, type HitShape } from "../lib/tourMapHit";

/**
 * The played countries' outlines, for nearest-tap (lib/tourMapHit.ts).
 *
 * The map itself draws from the static sprite and needs no path data in the
 * page. Measuring a tap against an OUTLINE does, so the shapes module is
 * loaded here — lazily, once the page is idle, as its own chunk (the one the
 * listeners map already uses). Until it arrives a tap still works: it takes
 * the country under the finger, read from the element's data-code.
 */
let loading: Promise<Map<number, HitShape>> | null = null;
const load = () =>
  (loading ??= import("../data/worldShapes").then(
    (m) => new Map(m.worldShapes.map((s) => [s.code, toHitShape(s.code, s.d)])),
  ));

export function useTourMapHits(codes: number[]): HitShape[] | null {
  const [shapes, setShapes] = useState<HitShape[] | null>(null);
  const key = codes.join(",");
  useEffect(() => {
    let live = true;
    const want = key.split(",").map(Number);
    const go = () =>
      load().then((m) => {
        if (live) setShapes(want.flatMap((c) => m.get(c) ?? []));
      });
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number; cancelIdleCallback?: (id: number) => void };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(go);
      return () => {
        live = false;
        w.cancelIdleCallback?.(id);
      };
    }
    const t = setTimeout(go, 200);
    return () => {
      live = false;
      clearTimeout(t);
    };
  }, [key]);
  return shapes;
}

/** The country a pointer event landed on, read off the element (data-code). */
export const codeAt = (target: EventTarget | null): number | null => {
  const v = target instanceof Element ? target.closest("[data-code]")?.getAttribute("data-code") : null;
  return v ? Number(v) : null;
};
