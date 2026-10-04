import Link from "next/link";
import Reveal from "@/components/Reveal";

const courses = [
  { title: "Professional Makeup", copy: "Foundations, finish and the working habits behind a professional kit.", href: "/courses/professional-makeup", number: "01" },
  { title: "Bridal Makeup", copy: "Bridal-focused artistry with attention to skin, detail and camera-ready finish.", href: "/courses/bridal-makeup", number: "02" },
  { title: "Hair Styling", copy: "Styling for bridal and occasion work, from prep through finishing.", href: "/courses/hair-styling", number: "03" },
  { title: "Saree Draping", copy: "A focused service skill for bridal and occasion dressing.", href: "/courses/saree-draping", number: "04" },
  { title: "Masterclasses", copy: "Short-format sessions for artists sharpening a specific part of their work.", href: "/courses/masterclasses", number: "05" },
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
  ["01", "Technique before trends", "Good work should hold up after the reel ends."],
  ["02", "Practice that shows", "Learning should be visible in the hand, not just in notes."],
  ["03", "Finish matters", "Skin, hair, drape and detail should feel considered as one look."],
  ["04", "Professional confidence", "The goal is not only to know the steps, but to work with assurance."],
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
            <Link href="/courses" className="button button-primary" data-cursor="EXPLORE">See the courses</Link>
            <Link href="/bridal-studio" className="button button-ghost" data-cursor="VIEW">View bridal work</Link>
          </div>
          <div className="hero-signoff">
            <span>REVATHI BLUSH</span>
            <i />
            <span>LB NAGAR</span>
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
          <div className="hero-caption">A studio practice.<br />A place to learn the craft.</div>
        </div>
      </section>

      <section className="studio-strip" aria-label="Revathi Blush services">
        <span>MAKEUP</span><i /> <span>HAIR</span><i /> <span>BRIDAL</span><i /> <span>ACADEMY</span>
      </section>

      <section className="section intro-section human-intro">
        <Reveal><p className="eyebrow">REVATHI BLUSH</p></Reveal>
        <div className="split-heading">
          <Reveal><h2>A working beauty brand.<br /><em>Built around the craft.</em></h2></Reveal>
          <Reveal delay={100}>
            <div className="intro-copy">
              <p>The studio and academy sit under one point of view: thoughtful technique, polished finishing and work that still feels like the person wearing it.</p>
              <Link href="/about" className="text-link">The story behind Revathi Blush →</Link>
            </div>
          </Reveal>
        </div>

        <div className="editorial-grid editorial-grid-human">
          <Reveal className="editorial-card tall">
            <img className="site-photo" src={temporaryImages.studioPractice} alt="Makeup artistry reference" />
            <small>THE CRAFT</small>
          </Reveal>
          <Reveal delay={120} className="editorial-card academy-shot">
            <img className="site-photo" src={temporaryImages.academyPractice} alt="Makeup training reference" />
            <small>THE ACADEMY</small>
          </Reveal>
          <Reveal delay={220} className="editorial-note">
            <span className="hand-note">studio note</span>
            <p>Beauty is personal. Technique is learned. The best work respects both.</p>
          </Reveal>
        </div>
      </section>

      <section className="section courses-section human-courses">
        <div className="section-top">
          <div><p className="eyebrow">COURSES</p><h2>Learn one skill well.<br />Then build from there.</h2></div>
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
            <h2>What should<br />show in the work.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="standards-lede">A beauty academy should feel practical, exact and personal. These are the principles guiding the Revathi Blush experience.</p>
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
          <div><p className="eyebrow">IN THE ACADEMY</p><h2>The process deserves<br />to be seen.</h2></div>
          <Link href="/student-stories" className="text-link">Student work →</Link>
        </div>
        <div className="drag-gallery">
          {[
            ["CLASSROOM", temporaryImages.academyPractice],
            ["PRACTICE", temporaryImages.makeupSession],
            ["PORTFOLIO", temporaryImages.bridalSecond],
            ["BRIDAL DETAIL", temporaryImages.bridalDetail],
          ].map(([label, image], i) => (
            <div className={"gallery-card gallery-card-" + (i+1)} key={label}>
              <img className="site-photo" src={image} alt={label + " reference"} loading="lazy" />
              <span>{String(i+1).padStart(2,"0")}</span><strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="bridal-band human-bridal">
        <div className="bridal-band-art">
          <img className="site-photo" src={temporaryImages.bridalDetail} alt="Indian bridal makeup reference" loading="lazy" />
          <small>BRIDAL / REVATHI BLUSH</small>
        </div>
        <div className="bridal-band-copy">
          <p className="eyebrow eyebrow-light">BRIDAL STUDIO</p>
          <h2>Still you.<br /><em>Just beautifully finished.</em></h2>
          <p>Bridal, engagement and occasion artistry with the final look shaped around the person, outfit and event.</p>
          <Link href="/bridal-studio" className="button button-light" data-cursor="VIEW">Bridal studio</Link>
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-index">05</div>
        <Reveal>
          <p className="eyebrow">LB NAGAR · HYDERABAD</p>
          <h2>A local studio with<br />a serious point of view.</h2>
          <p>Visit Revathi Blush for academy enquiries, course information and bridal consultations in Shivapuri Colony, LB Nagar.</p>
          <Link href="/contact" className="text-link">Visit / contact →</Link>
        </Reveal>
      </section>

      <section className="section faq-preview">
        <div>
          <p className="eyebrow">BEFORE YOU JOIN</p>
          <h2>A few useful<br />questions first.</h2>
          <Link href="/faq" className="text-link">All FAQs →</Link>
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
          <h2>Come by the studio.<br />Ask about the academy.</h2>
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
