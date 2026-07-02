"use client"; // birthday-giveaway easter egg: click a wrapped word to reveal + copy a code

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import styles from "./HiddenCode.module.css";

// Lightweight obfuscation only (same approach as the contact-form email
// elsewhere in this codebase) — enough to stop a casual repo `grep`, not a
// determined dev reading the bundle. Each call site owns its own encoded
// string, so there's no single file listing every answer.
function decode(encoded: string): string {
  return atob(encoded);
}

export default function HiddenCode({ code, children }: { code: string; children: ReactNode }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- document.body isn't available during SSR; the portal can only mount client-side
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!pos) return;
    function onOutside(e: globalThis.MouseEvent) {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t) || popRef.current?.contains(t)) return;
      setPos(null);
    }
    function onScrollOrResize() {
      setPos(null);
    }
    document.addEventListener("click", onOutside);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      document.removeEventListener("click", onOutside);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pos]);

  const reveal = (e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCopied(false);
    setPos({ x: rect.left + rect.width / 2, y: rect.bottom + 8 });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      reveal(e);
    }
  };

  const copy = async () => {
    const value = decode(code);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard API unavailable (rare/older browser) — the code is still
      // visible and selectable by hand.
    }
  };

  return (
    <>
      <span
        ref={wrapRef}
        className={styles.trigger}
        role="button"
        tabIndex={0}
        aria-label="Hidden giveaway code — click to reveal"
        onClick={reveal}
        onKeyDown={onKeyDown}
      >
        {children}
      </span>

      {mounted && pos &&
        createPortal(
          <div
            ref={popRef}
            className={styles.popover}
            style={{ left: pos.x, top: pos.y }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.label}>🎉 You found a code!</span>
            <span className={styles.codeBox}>{decode(code)}</span>
            <button type="button" className={styles.copyBtn} onClick={copy}>
              {copied ? "Copied ✓" : "Copy code"}
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
