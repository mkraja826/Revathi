import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/" },
  title: "Revathi Blush Studio & Academy | LB Nagar, Hyderabad",
  description: "Professional makeup academy and bridal studio in LB Nagar, Hyderabad. Explore courses, bridal artistry, student work and enquiries.",
};


const courses = [
  { title: "Professional Makeup", copy: "Learn essential makeup techniques, product use and professional working methods.", href: "/courses/professional-makeup", number: "01" },
  { title: "Bridal Makeup", copy: "Learn bridal makeup for long wear, photography and different wedding occasions.", href: "/courses/bridal-makeup", number: "02" },
  { title: "Hair Styling", copy: "Learn practical hair styling for bridal and special occasions.", href: "/courses/hair-styling", number: "03" },
  { title: "Saree Draping", copy: "Learn saree draping techniques for bridal and special occasions.", href: "/courses/saree-draping", number: "04" },
  { title: "Masterclasses", copy: "Focused sessions for makeup artists who want to improve a specific skill.", href: "/courses/masterclasses", number: "05" },
];

const temporaryImages = {
  bridalHero: "https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1600&q=82",
  bridalSecond: "https://images.unsplash.com/photo-1781187009755-0cbc0c4cd2b3?auto=format&fit=crop&w=1200&q=82",
  studioPractice: "https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1400&q=82",
  academyPractice: "https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1400&q=82",
  bridalDetail: "https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1600&q=82",
  makeupSession: "https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1400&q=82",
};

const standards = [
  ["01", "Strong foundations", "Learn techniques you can use confidently in real client work."],
  ["02", "Hands-on practice", "Build your skills through practical work and guided correction."],
  ["03", "Attention to detail", "Learn to bring makeup, hair and styling together as one complete look."],
  ["04", "Work with confidence", "Understand the process so you can work more confidently and consistently."],
];

export default function Home() {
  return (
    <main>
      <section className="hero human-hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">REVATHI BLUSH · STUDIO & ACADEMY · HYDERABAD</p>
          <h1><span>For brides.</span><span>For artists in the making.</span></h1>
          <p className="hero-copy">Professional makeup education and bridal artistry from LB Nagar, Hyderabad.</p>
          <div className="hero-actions">
            <Link href="/courses" className="button button-primary" data-cursor="EXPLORE">View courses</Link>
            <Link href="/bridal-studio" className="button button-ghost" data-cursor="VIEW">Bridal makeup</Link>
          </div>
        </div>

        <div className="hero-visual art-directed-hero">
          <div className="hero-frame hero-frame-one">
            <img className="site-photo" src={temporaryImages.bridalHero} alt="Bridal makeup inspiration" fetchPriority="high" />
            <small>01 / BRIDAL</small>
          </div>
          <div className="hero-frame hero-frame-two">
            <img className="site-photo" src={temporaryImages.makeupSession} alt="Makeup artist at work" />
            <small>02 / ACADEMY</small>
          </div>
          <div className="hero-caption">Bridal makeup services.<br />Professional beauty training.</div>
        </div>
      </section>

      <section className="studio-strip" aria-label="Revathi Blush services">
        <span>MAKEUP</span><i /> <span>HAIR</span><i /> <span>BRIDAL</span><i /> <span>ACADEMY</span>
      </section>

      <section className="section intro-section human-intro">
        <Reveal><p className="eyebrow">REVATHI BLUSH</p></Reveal>
        <div className="split-heading">
          <Reveal><h2>Bridal makeup and<br /><em>professional beauty training.</em></h2></Reveal>
          <Reveal delay={100}>
            <div className="intro-copy">
              <p>Revathi Blush combines bridal makeup services with practical beauty training at one studio in LB Nagar, Hyderabad.</p>
              <Link href="/about" className="text-link">About Revathi Blush →</Link>
            </div>
          </Reveal>
        </div>

        <div className="editorial-grid editorial-grid-human">
          <Reveal className="editorial-card tall">
            <img className="site-photo" src={temporaryImages.studioPractice} alt="Makeup artistry reference" />
            <small>BRIDAL MAKEUP</small>
          </Reveal>
          <Reveal delay={120} className="editorial-card academy-shot">
            <img className="site-photo" src={temporaryImages.academyPractice} alt="Makeup training reference" />
            <small>BEAUTY TRAINING</small>
          </Reveal>
          <Reveal delay={220} className="editorial-note">
            <span className="hand-note">studio note</span>
            <p>Personal service for clients. Practical training for students.</p>
          </Reveal>
        </div>
      </section>

      <section className="section courses-section human-courses">
        <div className="section-top">
          <div><p className="eyebrow">COURSES</p><h2>Choose the beauty skill<br />you want to learn.</h2></div>
          <Link href="/courses" className="text-link">All courses →</Link>
        </div>
        <div className="course-list">
          {courses.map((course, index) => (
            <Reveal key={course.href} delay={index * 45}>
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

      <section className="section dark-section standards-section">
        <div className="standards-heading">
          <Reveal>
            <p className="eyebrow eyebrow-light">THE STANDARD</p>
            <h2>What we focus on<br />in training.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="standards-lede">Training focuses on clear technique, practical experience, attention to detail and confidence.</p>
          </Reveal>
        </div>
        <div className="standards-list">
          {standards.map(([number,title,copy], i) => (
            <Reveal key={title} delay={i * 70}>
              <article className={"standard-row standard-row-" + (i + 1)}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section students-section">
        <div className="section-top">
          <div><p className="eyebrow">IN THE ACADEMY</p><h2>Learn through<br />practice and progress.</h2></div>
          <Link href="/student-stories" className="text-link">Academy & student work →</Link>
        </div>
        <div className="gallery-scroll-shell">
          <div className="gallery-scroll-hint" aria-hidden="true"><span>Swipe / drag</span><b>→</b></div>
          <div className="drag-gallery">
          {[
            ["CLASSROOM", temporaryImages.academyPractice],
            ["PRACTICE", temporaryImages.makeupSession],
            ["PORTFOLIO", temporaryImages.bridalSecond],
            ["BRIDAL DETAIL", temporaryImages.bridalDetail],
          ].map(([label, image], i) => (
            <div className={"gallery-card gallery-card-" + (i+1)} key={label}>
              <img className="site-photo" src={image} alt={label + " reference"} loading="lazy" />
              <span>{String(i+1).padStart(2,"0")} /</span><strong>{label}</strong>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="bridal-band human-bridal">
        <div className="bridal-band-art">
          <img className="site-photo" src={temporaryImages.bridalDetail} alt="Indian bridal makeup reference" loading="lazy" />
          <small>BRIDAL / REVATHI BLUSH</small>
        </div>
        <div className="bridal-band-copy">
          <p className="eyebrow eyebrow-light">BRIDAL STUDIO</p>
          <h2>Bridal makeup<br /><em>planned around you.</em></h2>
          <p>Makeup for weddings, engagements, receptions and special occasions, planned around your outfit, event and preferred style.</p>
          <Link href="/bridal-studio" className="button button-light" data-cursor="VIEW">Bridal makeup services</Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-index">05</div>
        <Reveal>
          <p className="eyebrow">LB NAGAR · HYDERABAD</p>
          <h2>Studio and academy<br />in LB Nagar, Hyderabad.</h2>
          <p>Visit Revathi Blush in Shivapuri Colony for course information, academy admissions and bridal makeup enquiries.</p>
          <Link href="/contact" className="text-link">Contact & directions →</Link>
        </Reveal>
      </section>

      <section className="section faq-preview">
        <div>
          <p className="eyebrow">BEFORE YOU JOIN</p>
          <h2>Common questions<br />before you enquire.</h2>
          <Link href="/faq" className="text-link">View all FAQs →</Link>
        </div>
        <div className="faq-static">
          {["Who can join the academy?","Do beginners need prior experience?","Is practical training included?","How do I ask about fees and batches?"].map((q,i)=>
            <Link href="/faq" key={q}><span>0{i+1}</span><p>{q}</p><b>↗</b></Link>
          )}
        </div>
      </section>

      <section className="cta-section human-cta">
        <div>
          <p className="eyebrow eyebrow-light">LB NAGAR · HYDERABAD</p>
          <h2>Contact the studio<br />or ask about a course.</h2>
        </div>
        <div className="cta-side">
          <p>For course admissions, bridal enquiries and batch information.</p>
          <div className="hero-actions">
            <a className="button button-light" href="https://wa.me/917095657382" target="_blank" rel="noreferrer">WhatsApp</a>
            <Link className="button button-outline-light" href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
