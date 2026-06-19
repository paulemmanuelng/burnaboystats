"use client"; // error boundaries must be client components

import Link from "next/link";

// Catches unexpected runtime errors in any page and shows a friendly recovery
// screen instead of a blank page.
export default function Error({ reset }) {
  return (
    <main id="content" className="container errorPage">
      <p className="eyebrow">Error</p>
      <h1 className="errorTitle">Something went wrong</h1>
      <p className="lead errorLead">
        An unexpected error occurred. Try again, or head back to the home page.
      </p>
      <div className="panelActions errorActions">
        <button className="btn btnPrimary" onClick={() => reset()}>
          Try again
        </button>
        <Link className="btn btnSecondary" href="/">
          Go home
        </Link>
      </div>
    </main>
  );
}
