import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews & Student Stories",
  description: "Explore verified feedback and student-story updates from Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <main>
      <section className="reviews-hero">
        <p className="eyebrow">REVIEWS / STORIES</p>
        <h1>Real feedback<br /><em>only.</em></h1>
        <p>We would rather show fewer genuine experiences than fill the page with stock testimonials.</p>
      </section>

      <section className="inner-section reviews-status">
        <Reveal>
          <div className="review-score">
            <span>5.0</span>
            <div><strong>Google rating</strong><p>Current public profile rating. Review content will be added only when verified.</p></div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="reviews-copy">
            <p className="eyebrow">WHAT WILL LIVE HERE</p>
            <h2>Student journeys with context.</h2>
            <p>As verified feedback is collected, this page will pair each review with the relevant course or bridal service instead of showing anonymous quotes.</p>
            <Link href="/student-stories" className="text-link">Student stories →</Link>
          </div>
        </Reveal>
      </section>

      <section className="review-types">
        {[
          ["01","Academy experience","What students found useful in the learning process."],
          ["02","Skill progress","How practice changed confidence and consistency."],
          ["03","Bridal clients","Feedback tied to real service experiences."],
        ].map(([n,title,copy], i) => (
          <Reveal key={title} delay={i*60}>
            <article><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>
          </Reveal>
        ))}
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">EXPERIENCED REVATHI BLUSH?</p><h2>Your feedback helps the next person decide.</h2></div>
        <a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=Revathi%20Blush%20Studio%20%26%20Academy%20LB%20Nagar%20Hyderabad" target="_blank" rel="noreferrer">Open Google profile</a>
      </section>
    </main>
  );
}
