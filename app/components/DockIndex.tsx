import JumpSpy from "./JumpSpy";
import ScrollRail from "./ScrollRail";
import styles from "./dockIndex.module.css";

export type DockItem = { id: string; label: string; count?: number };

/**
 * The phone's docking index (Job 4 · J4-6; Wayfinding §6): the countries
 * page's chip row, 52px, in the flow under the hero until it docks under the
 * 69px back bar. Each chip is an in-page jump (no glyph); the one for the
 * section in view takes N2's selected state (JumpSpy, at the 136px line the
 * jumps land on), and the row keeps it clear of its edge fades. Nothing folds.
 *
 * `top` overrides where it docks, for a back bar with no safe-area inset
 * (/timeline's). data-dock="phone" is what globals.css keys the phone's
 * anchor clearance on. Phones only: from 901 the page's IndexBar, if any, is
 * the index.
 *
 * Keyed on its ids, so a filter that changes the list (the docks list only
 * what a filter shows, fix 90) re-reads the targets.
 */
export default function DockIndex({ label, items, top }: { label: string; items: DockItem[]; top?: string }) {
  return (
    <div
      className={styles.dock}
      data-dock="phone"
      style={top ? ({ "--dock-top": top } as React.CSSProperties) : undefined}
    >
      <JumpSpy key={items.map((it) => it.id).join("\n")} as="nav" label={label} offset={136}>
        <ScrollRail className={styles.dockRail} label={label}>
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className={styles.dockChip}>
              {it.label}
              {it.count != null && <span className={styles.dockCount}>{it.count}</span>}
            </a>
          ))}
        </ScrollRail>
      </JumpSpy>
    </div>
  );
}
