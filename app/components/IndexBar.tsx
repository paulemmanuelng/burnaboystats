"use client"; // holds the "{k} of {N}" the spy reports

import { useState } from "react";
import JumpSpy from "./JumpSpy";
import ScrollRail from "./ScrollRail";
import { backToTop } from "./BackToTop";
import styles from "./indexBar.module.css";

export type IndexItem = {
  id: string;
  label: string;
  /** A stop the counter does not count: at it, "{k} of {N}" gives way to this
   *  word. Africa's Biggest's questions, after its boards: "1 of 20" … "20 of
   *  20", then "Questions" (question 25, 15 Oct 2026). */
  uncounted?: string;
};

/**
 * The desktop docking index (Job 4 · J4-6; Wayfinding §6): a 44px bar sticky
 * under the 69px masthead. Left, the page's kicker; middle, its sections as
 * text links (the one in view ink over a 2px ember rule, JumpSpy at the 128px
 * line the jumps land on), fading and scrolling when they overflow; right,
 * "{k} of {N}" and "Top" — a gold text link with no glyph (fix 83), which
 * returns to the top and to <main>, as the back-to-top button does.
 *
 * N is the items' own length, the page's own section list (fix 81), less any
 * stop marked `uncounted`, which prints its own word instead; the server
 * prints "1 of {N}". Africa's Biggest counted its questions as a 21st stop on
 * a page of 20 boards (live debug 15 Oct 2026, REC-6; Paul: "yes", question
 * 25). data-dock="desk" is what globals.css keys the desktop anchor clearance
 * on. Desktop only: a phone's index is its DockIndex.
 *
 * `grid`: the sections sit two to a row (Africa's Biggest's boards), so a
 * row is current at its left board, or at the one the reader clicked
 * (JumpSpy's `grid`). Every other page leaves it off.
 */
export default function IndexBar({ kicker, items, grid = false }: { kicker: string; items: IndexItem[]; grid?: boolean }) {
  const [pos, setPos] = useState(0);
  const label = `${kicker}: sections`;
  const counted = items.filter((it) => !it.uncounted).length;
  const here = items[pos];
  const k = items.slice(0, pos + 1).filter((it) => !it.uncounted).length;
  return (
    <div className={styles.dockBar} data-dock="desk">
      <div className={styles.dockInner}>
        <span className={styles.dockKicker}>{kicker}</span>
        <JumpSpy
          key={items.map((it) => it.id).join("\n")}
          as="nav"
          className={styles.dockNav}
          label={label}
          offset={128}
          onCurrent={setPos}
          grid={grid}
        >
          <ScrollRail className={styles.dockRail} label={label}>
            {items.map((it) => (
              <a key={it.id} href={`#${it.id}`} className={styles.dockLink}>
                {it.label}
              </a>
            ))}
          </ScrollRail>
        </JumpSpy>
        <span className={styles.dockPos}>{here?.uncounted ?? `${k} of ${counted}`}</span>
        <a
          href="#content"
          className={styles.dockTop}
          onClick={(e) => {
            e.preventDefault();
            backToTop();
          }}
        >
          Top
        </a>
      </div>
    </div>
  );
}
