import Link from "next/link";
import Reveal from "./Reveal";

type CourseDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  focus?: string[];
  suitedFor: string;
};

export default function CourseDetailPage({ eyebrow, title, intro, image, imageAlt, focus, suitedFor }: CourseDetailProps) {
  const message = encodeURIComponent("Hi Revathi Blush, I would like details about the " + title + " course.");
  const learningPaths = [
    ["Professional Makeup", "/courses/professional-makeup"],
    ["Bridal Makeup", "/courses/bridal-makeup"],
    ["Hair Styling", "/courses/hair-styling"],
    ["Saree Draping", "/courses/saree-draping"],
    ["Masterclasses", "/courses/masterclasses"],
  ].filter(([label]) => label !== title);

  return (
    <main className="course-detail-page">
      <section className="course-detail-hero">
        <div className="course-detail-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={"https://wa.me/917095657382?text=" + message} target="_blank" rel="noreferrer">Ask about the next batch</a>
            <Link className="button button-ghost" href="/courses">All courses</Link>
          </div>
        </div>
        <div className="course-detail-image">
          <img src={image} alt={imageAlt} fetchPriority="high" />
          <span>REVATHI BLUSH / ACADEMY</span>
        </div>
      </section>

      <section className="course-detail-body">
        <Reveal>
          <div className="course-who">
            <p className="eyebrow">BEFORE YOU ENROL</p>
            <h2>Contact the academy to check whether this course suits your experience level and goals.</h2>
          </div>
        </Reveal>

        <div className="course-focus">
          <Reveal><p className="eyebrow">COURSE INFORMATION</p></Reveal>
          {[
            ["01", "Current syllabus", "Shared by the academy on enquiry"],
            ["02", "Duration", "Confirmed for the current batch"],
            ["03", "Fees", "Shared directly before enrolment"],
            ["04", "Batch schedule", "Confirmed by the academy"],
          ].map(([number, label, value], index) => (
            <Reveal key={label} delay={index * 60}>
              <div className="course-focus-row course-focus-row-info">
                <span>{number}</span>
                <h3>{label}</h3>
                <p>{value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="course-join">
        <div className="course-join-heading">
          <p className="eyebrow">HOW TO JOIN</p>
          <h2>Three simple steps.</h2>
        </div>
        <div className="course-join-grid">
          <article><span>01</span><h3>Enquire</h3><p>Tell the academy which course you are interested in and your current experience level.</p></article>
          <article><span>02</span><h3>Confirm</h3><p>Get the current syllabus, fees, duration and available batch information directly.</p></article>
          <article><span>03</span><h3>Decide</h3><p>Choose the batch only after the current details are clear and suitable for you.</p></article>
        </div>
      </section>

      <section className="related-courses">
        <div className="related-courses-head">
          <p className="eyebrow">OTHER LEARNING PATHS</p>
          <h2>Explore other courses.</h2>
        </div>
        <div className="related-course-links">
          {learningPaths.map(([label, href], index) => (
            <Link key={href} href={href}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">READY TO ASK?</p><h2>Get the latest batch details.</h2></div>
        <a className="button button-light" href={"https://wa.me/917095657382?text=" + message} target="_blank" rel="noreferrer">WhatsApp academy</a>
      </section>
    </main>
  );
}
