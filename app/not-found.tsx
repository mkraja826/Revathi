import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This page stepped<br />out of frame.</h1>
      <p>Head back to Revathi Blush or explore the academy and bridal studio.</p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">Back home</Link>
        <Link className="button button-ghost" href="/courses">Explore courses</Link>
      </div>
    </main>
  );
}
