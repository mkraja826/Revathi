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
        <div className="course-detail-image" data-cursor="VIEW">
          <img src={image} alt={imageAlt} />
          <span>REVATHI BLUSH / ACADEMY</span>
        </div>
      </section>

      <section className="course-detail-body">
        <Reveal>
          <div className="course-who">
            <p className="eyebrow">WHO IT&apos;S FOR</p>
            <h2>{suitedFor}</h2>
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

      <section className="course-info-band">
        <div><span>BATCH</span><strong>Ask academy</strong></div>
        <div><span>DURATION</span><strong>Shared on enquiry</strong></div>
        <div><span>FEES</span><strong>Shared on enquiry</strong></div>
        <div><span>LOCATION</span><strong>LB Nagar, Hyderabad</strong></div>
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">READY TO ASK?</p><h2>Get the current batch details directly.</h2></div>
        <a className="button button-light" href={"https://wa.me/917095657382?text=" + message} target="_blank" rel="noreferrer">WhatsApp academy</a>
      </section>
    </main>
  );
}
