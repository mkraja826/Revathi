import Link from "next/link";

export default function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className="hero-actions">
          <Link href="/contact" className="button button-primary">Enquire now</Link>
          <Link href="/gallery" className="text-link">View our work →</Link>
        </div>
      </div>
      <div className="page-hero-art" aria-hidden="true">
        <span>RB</span>
        <i />
        <small>STUDIO &amp; ACADEMY</small>
      </div>
    </section>
  );
}
