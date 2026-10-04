"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["Academy", "/academy"],
  ["Courses", "/courses"],
  ["Bridal Studio", "/bridal-studio"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="announcement">Admissions open · Professional makeup batches · LB Nagar, Hyderabad</div>
      <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
        <Link href="/" className="brand" aria-label="Revathi Blush home">
          <span className="brand-mark">RB</span>
          <span><strong>REVATHI BLUSH</strong><small>STUDIO & ACADEMY</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="https://wa.me/917095657382" target="_blank">Enquire</Link>
        <button className={"menu-toggle " + (open ? "is-open" : "")} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span />
        </button>
      </header>
      <div className={"mobile-menu " + (open ? "is-open" : "")} aria-hidden={!open}>
        <nav>
          {links.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: (index * 45) + "ms" }}>{label}</Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>Professional makeup education & bridal artistry.</p>
          <a href="https://wa.me/917095657382" target="_blank" rel="noreferrer" className="button button-light">WhatsApp the Academy</a>
        </div>
      </div>
    </>
  );
}
