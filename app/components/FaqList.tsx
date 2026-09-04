"use client"; // the phone-only collapse

import { useEffect, useId, useState } from "react";
import styles from "./faqList.module.css";

/** Where every mobile screen on this site takes over from the desktop layout. */
const PHONE = "(max-width: 900px)";

export interface Faq {
  q: string;
  a: string;
}

/**
 * The FAQ list on /music/[song], /dai-dai and /dai-dai/es.
 *
 * A flat, open list on a laptop. A tap-to-open list on a phone, first answer
 * already showing.
 *
 * The ORDER of those two states is the whole design, and it is the opposite of
 * the obvious one.
 *
 * These answers were `display: none` below 900px until #170 and #171. The pages
 * emit FAQPage structured data at every width, so a phone reader — and
 * Googlebot, which renders at phone width — got the questions and never the
 * answers: 32 questions across the 14 song pages, eight more on the site's
 * most-trafficked page, several of them live searches ("Who are the Ghetto Kids
 * who performed with Shakira and Burna Boy?"). Collapsing them again is safe
 * only while the answers stay in the HTML and one tap away, so this renders
 * OPEN and collapses afterwards:
 *
 *   - the server render, the no-JS render and the first client render are all
 *     `collapsible === false` — the flat markup #170 and #171 shipped, every
 *     answer painted, no button, no `hidden`;
 *   - an effect, after mount, asks whether this is a phone, and only then turns
 *     the questions into buttons and folds all but the first away.
 *
 * So a reader whose JavaScript never arrives keeps every answer, and no
 * collapsed state can ever reach the built HTML — grep `.next/server/app` and
 * the answers are there in full. Rendering collapsed and expanding on desktop
 * would put #170 straight back for anyone whose JS fails, and would need a
 * width guess at hydration time.
 *
 * Desktop is not merely unchanged, it is untouched: with `collapsible` false
 * this renders `<h3>` + `<p>` and nothing else — no button in the tab order, no
 * ids, no attributes — which is exactly the markup these pages had before this
 * component existed. That holds when a desktop reader narrows the window too:
 * the media query is listened to, so the accordion appears and disappears with
 * the breakpoint rather than being decided once at load.
 */
export default function FaqList({
  items,
  classes,
}: {
  items: Faq[];
  /**
   * The page's own class names. /music/[song] rules its questions off in a
   * ruled list and /dai-dai stacks them as cards; both looks stay in their own
   * stylesheet, and this component adds only the mechanics of the control.
   */
  classes: { list: string; item: string; q: string; a: string };
}) {
  const [collapsible, setCollapsible] = useState(false);
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set([0]));
  const id = useId();

  useEffect(() => {
    const mq = window.matchMedia(PHONE);
    const sync = () => setCollapsible(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className={classes.list}>
      {items.map((f, i) => {
        // Open is the default everywhere the accordion is not active, so a
        // stale `open` set can never hide anything on a laptop.
        const isOpen = !collapsible || open.has(i);
        return (
          <div key={f.q} className={classes.item}>
            {/* Still an h3 with the question as its text: the heading outline
                and the FAQPage schema both describe it that way, and the
                button's accessible name is the question itself, so it needs no
                label of its own. */}
            <h3 className={classes.q}>
              {collapsible ? (
                <button
                  type="button"
                  className={styles.toggle}
                  aria-expanded={isOpen}
                  aria-controls={`${id}a${i}`}
                  onClick={() => toggle(i)}
                >
                  <span>{f.q}</span>
                  <span className={styles.glyph} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              ) : (
                f.q
              )}
            </h3>
            {/* `hidden`, not a class: it hides the answer and drops it from the
                accessibility tree in one attribute, it needs no CSS to work,
                and — the reason it is worth saying — it is what
                faqMobileVisibility.test.tsx now walks for. A class-based
                collapse would have been invisible to that guard, which is the
                one thing standing between this page and #170 happening twice. */}
            <p
              className={classes.a}
              id={collapsible ? `${id}a${i}` : undefined}
              hidden={!isOpen}
            >
              {f.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}
