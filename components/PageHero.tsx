import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  copy,
  hideEnquire = false,
  hideGallery = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  hideEnquire?: boolean;
  hideGallery?: boolean;
}) {
  const showActions = !hideEnquire || !hideGallery;

  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {showActions && (
          <div className="hero-actions">
            {!hideEnquire && <Link href="/contact" className="button button-primary">Contact us</Link>}
            {!hideGallery && <Link href="/gallery" className="text-link">View gallery →</Link>}
          </div>
        )}
      </div>
      <div className="page-hero-art" aria-hidden="true">
        <img src="/revathi-blush-logo-transparent.png" alt="" />
        <i />
        <small>STUDIO &amp; ACADEMY</small>
      </div>
    </section>
  );
}
