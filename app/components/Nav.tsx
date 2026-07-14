"use client"; // interactive: toggles the mobile menu + marks the active page

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/links";
import SearchPalette from "./SearchPalette";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Give the nav a solid, blurred backdrop once the user scrolls off the hero,
  // so links stay legible over album art and section titles below.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled || open ? " navScrolled" : ""}`}>
      <nav className="navInner container" aria-label="Primary">
        <Link href="/" className="brand" onClick={close}>
          BurnaBoy<span>Stats</span>
        </Link>

        <div className="navRight">
          {/* Site search — opens a ⌘K command palette */}
          <SearchPalette />

          {/* Hamburger — only visible on mobile (see globals.css) */}
          <button
            className="navToggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="navToggleBar" />
            <span className="navToggleBar" />
            <span className="navToggleBar" />
          </button>

          <ul id="primary-menu" className={`navLinks ${open ? "navOpen" : ""}`}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={active ? "navActive" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
