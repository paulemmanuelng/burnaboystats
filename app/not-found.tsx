import Link from "next/link";

export const metadata = { title: "Page Not Found — Burna Boy Stats" };

export default function NotFound() {
  return (
    <main>
      <header className="pageHeader container">
        <h1>
          404 — <span className="accent">Off the Grid</span>
        </h1>
        <p>That page doesn&apos;t exist. Even the African Giant can&apos;t find it.</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <Link href="/" className="btn btnPrimary">Back Home</Link>
        </div>
      </header>
    </main>
  );
}
