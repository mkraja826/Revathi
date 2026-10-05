"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="announcement">REVATHI BLUSH · LB NAGAR · HYDERABAD</div>
      <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
        <Link href="/" className="brand" aria-label="Revathi Blush home">
          <span className="brand-mark brand-mark-logo"><img src="/revathi-logo-official.svg" alt="" aria-hidden="true" /></span>
          <span><strong>REVATHI BLUSH</strong><small>STUDIO & ACADEMY</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={isActive(href) ? "is-active" : ""} aria-current={isActive(href) ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href="https://wa.me/917095657382" target="_blank" rel="noreferrer">Enquire</a>

        <button
          className={"menu-toggle " + (open ? "is-open" : "")}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span /><span />
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={"mobile-menu " + (open ? "is-open" : "")}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open || undefined}
        aria-label="Site navigation"
      >
        <div className="mobile-menu-index">MENU · REVATHI BLUSH</div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? "is-active" : ""}
              aria-current={isActive(href) ? "page" : undefined}
              style={{ transitionDelay: (index * 45) + "ms" }}
            >
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>Professional makeup education & bridal artistry in LB Nagar, Hyderabad.</p>
          <a href="https://wa.me/917095657382" target="_blank" rel="noreferrer" className="button button-light">WhatsApp the Academy</a>
        </div>
      </div>
    </>
  );
}
