import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-kicker">REVATHI BLUSH · HYDERABAD</div>
      <h2>Your journey into beauty<br />starts here.</h2>
      <div className="footer-actions">
        <a className="button button-light" href="https://wa.me/917095657382" target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
        <a className="button button-outline-light" href="tel:+917095657382">Call Academy</a>
      </div>
      <div className="footer-grid">
        <div>
          <strong>Revathi Blush</strong>
          <p>Professional Makeup Academy & Bridal Studio<br />Shivapuri Colony, LB Nagar, Hyderabad.</p>
          <a className="footer-phone" href="tel:+917095657382">+91 70956 57382</a>
        </div>
        <div><span>Explore</span><Link href="/academy">Academy</Link><Link href="/courses">Courses</Link><Link href="/bridal-studio">Bridal Studio</Link><Link href="/gallery">Gallery</Link></div>
        <div><span>Connect</span><Link href="/about">About Revathi</Link><Link href="/testimonials">Testimonials</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Revathi Blush Studio & Academy · LB Nagar, Hyderabad</span></div>
    </footer>
  );
}
