import Link from "next/link";
import Reveal from "@/components/Reveal";

const courses = [
  { title: "Professional Makeup", copy: "A career-focused foundation for aspiring makeup artists.", href: "/courses/professional-makeup", number: "01" },
  { title: "Bridal Makeup", copy: "Learn refined bridal artistry across traditional and modern looks.", href: "/courses/bridal-makeup", number: "02" },
  { title: "Hair Styling", copy: "Build a versatile styling toolkit for bridal and occasion work.", href: "/courses/hair-styling", number: "03" },
  { title: "Saree Draping", copy: "Polished draping techniques for bridal and professional services.", href: "/courses/saree-draping", number: "04" },
  { title: "Masterclasses", copy: "Focused short-format learning for artists upgrading specific skills.", href: "/courses/masterclasses", number: "05" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">REVATHI BLUSH · HYDERABAD</p>
          <h1><span>Where beauty</span><span>becomes a profession.</span></h1>
          <p className="hero-copy">Professional makeup education and premium bridal artistry in LB Nagar, Hyderabad.</p>
          <div className="hero-actions">
            <Link href="/courses" className="button button-primary" data-cursor="EXPLORE">Explore Academy</Link>
            <Link href="/bridal-studio" className="button button-ghost" data-cursor="VIEW">Bridal Studio</Link>
          </div>
          <div className="hero-note"><span>Scroll to discover</span><i /></div>
        </div>
        <div className="hero-visual" data-cursor="VIEW">
          <div className="hero-frame hero-frame-one"><div className="placeholder-photo bridal-one"><span>BRIDAL<br />ARTISTRY</span></div></div>
          <div className="hero-frame hero-frame-two"><div className="placeholder-photo bridal-two"><span>ACADEMY<br />TRAINING</span></div></div>
          <div className="hero-orbit"><span>R</span><span>B</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Brand values"><div>LEARN · PRACTICE · CREATE · GROW · LEARN · PRACTICE · CREATE · GROW ·</div></section>

      <section className="section intro-section">
        <Reveal><p className="eyebrow">THE REVATHI BLUSH EXPERIENCE</p></Reveal>
        <div className="split-heading">
          <Reveal><h2>Learn. Create.<br /><em>Transform.</em></h2></Reveal>
          <Reveal delay={100}><div className="intro-copy"><p>Revathi Blush brings professional makeup education and bridal artistry together under one refined, career-focused brand.</p><Link href="/about" className="text-link">Meet Revathi →</Link></div></Reveal>
        </div>
        <div className="editorial-grid">
          <Reveal className="editorial-card tall"><div className="placeholder-photo portrait"><span>FOUNDER<br />PORTRAIT</span></div><small>01 · ARTIST</small></Reveal>
          <Reveal delay={120} className="editorial-card"><div className="placeholder-photo classroom"><span>HANDS-ON<br />TRAINING</span></div><small>02 · ACADEMY</small></Reveal>
          <Reveal delay={220} className="editorial-quote"><blockquote>“A premium learning environment designed to help talent become professional confidence.”</blockquote></Reveal>
        </div>
      </section>

      <section className="section courses-section">
        <div className="section-top"><div><p className="eyebrow">ACADEMY</p><h2>Turn your passion<br />into your profession.</h2></div><Link href="/courses" className="text-link">View all courses →</Link></div>
        <div className="course-list">
          {courses.map((course, index) => (
            <Reveal key={course.href} delay={index * 50}>
              <Link href={course.href} className="course-row" data-cursor="EXPLORE">
                <span className="course-number">{course.number}</span>
                <h3>{course.title}</h3>
                <p>{course.copy}</p>
                <span className="course-arrow">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <Reveal><p className="eyebrow eyebrow-light">WHY REVATHI BLUSH</p><h2>Training built around<br />real artistry.</h2></Reveal>
        <div className="feature-grid">
          {["Hands-on training","Professional techniques","Real model practice","Career-focused learning"].map((item, i) => (
            <Reveal key={item} delay={i * 75}><article><span>0{i+1}</span><h3>{item}</h3><p>Structured learning, refined presentation and practical experience designed for aspiring artists.</p></article></Reveal>
          ))}
        </div>
      </section>

      <section className="section students-section">
        <div className="section-top"><div><p className="eyebrow">STUDENT EXPERIENCE</p><h2>From student<br />to artist.</h2></div><Link href="/student-stories" className="text-link">Student stories →</Link></div>
        <div className="drag-gallery" data-cursor="DRAG">
          {["CLASSROOM","PRACTICE","PORTFOLIO","CERTIFICATION"].map((label, i) => <div className={"gallery-card gallery-card-" + (i+1)} key={label}><span>{String(i+1).padStart(2,"0")}</span><strong>{label}</strong></div>)}
        </div>
      </section>

      <section className="bridal-band">
        <div className="bridal-band-art"><div className="placeholder-photo bridal-large"><span>BRIDAL<br />PORTFOLIO</span></div></div>
        <div className="bridal-band-copy"><p className="eyebrow eyebrow-light">BRIDAL STUDIO</p><h2>Your day.<br />Your look.<br /><em>Uniquely you.</em></h2><p>Refined bridal artistry for weddings, engagements, receptions and special occasions.</p><Link href="/bridal-studio" className="button button-light" data-cursor="VIEW">Explore Bridal Studio</Link></div>
      </section>

      <section className="section testimonial-section">
        <Reveal><p className="eyebrow">STUDENT STORIES</p><blockquote>“The best training changes more than technique — it changes confidence.”</blockquote><p className="testimonial-note">Real student testimonials will be added from verified academy feedback.</p></Reveal>
        <div className="testimonial-meta"><span>REVATHI BLUSH ACADEMY</span><Link href="/testimonials">Read stories →</Link></div>
      </section>

      <section className="section faq-preview">
        <div><p className="eyebrow">QUESTIONS</p><h2>Everything you need<br />before you begin.</h2><Link href="/faq" className="text-link">View all FAQs →</Link></div>
        <div className="faq-static">
          {["Who can join the academy?","Do beginners need prior experience?","Is practical training included?","How can I enquire about fees?"].map((q,i)=><div key={q}><span>0{i+1}</span><p>{q}</p><b>+</b></div>)}
        </div>
      </section>

      <section className="cta-section">
        <p className="eyebrow eyebrow-light">READY WHEN YOU ARE</p>
        <h2>Start your beauty<br />career with confidence.</h2>
        <div className="hero-actions"><a className="button button-light" href="https://wa.me/917095657382" target="_blank" rel="noreferrer">WhatsApp the Academy</a><Link className="button button-outline-light" href="/contact">Contact / Admissions</Link></div>
      </section>
    </main>
  );
}
