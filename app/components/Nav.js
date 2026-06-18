"use client"; // interactive: toggles the mobile menu

import { useState } from "react";
import Link from "next/link";

// Add a page here to add a menu item.
const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/certifications", label: "Certifications" },
  { href: "/tour", label: "Tour" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="navInner container">
        <Link href="/" className="brand" onClick={close}>
          BurnaBoy<span>Stats</span>
        </Link>

        {/* Hamburger — only visible on mobile (see globals.css) */}
        <button
          className="navToggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navToggleBar" />
          <span className="navToggleBar" />
          <span className="navToggleBar" />
        </button>

        <ul className={`navLinks ${open ? "navOpen" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={close}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
