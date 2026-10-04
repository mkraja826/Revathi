import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Makeup Courses in LB Nagar, Hyderabad",
  description: "Explore professional makeup, bridal makeup, hair styling, saree draping and masterclass programs at Revathi Blush Studio & Academy.",
};

const programs = [
  {
    index: "01",
    title: "Professional Makeup",
    href: "/courses/professional-makeup",
    image: "https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1400&q=82",
    copy: "A foundation for students who want to understand makeup as a professional service, not just a look.",
  },
  {
    index: "02",
    title: "Bridal Makeup",
    href: "/courses/bridal-makeup",
    image: "https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1400&q=82",
    copy: "Bridal-focused artistry shaped around wear time, photography, outfit and occasion.",
  },
  {
    index: "03",
    title: "Hair Styling",
    href: "/courses/hair-styling",
    image: "https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1400&q=82",
    copy: "A practical styling path for bridal and occasion work.",
  },
  {
    index: "04",
    title: "Saree Draping",
    href: "/courses/saree-draping",
    image: "https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1400&q=82",
    copy: "A focused service skill for artists working with bridal and occasion clients.",
  },
  {
    index: "05",
    title: "Masterclasses",
    href: "/courses/masterclasses",
    image: "https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1400&q=82",
    copy: "Short-format sessions for artists who want to sharpen a particular technique.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="ACADEMY / COURSES"
        title="Choose what you want to get good at."
        copy="Five focused learning paths. Batch dates, duration and fees are shared directly by the academy."
      />

      <section className="inner-section course-catalogue">
        {programs.map((program, index) => (
          <Reveal key={program.href} delay={index * 55}>
            <article className="program-panel">
              <Link href={program.href} className="program-image" data-cursor="EXPLORE">
                <img src={program.image} alt={program.title + " course"} loading={index > 1 ? "lazy" : undefined} />
                <span>{program.index}</span>
              </Link>
              <div className="program-copy">
                <p className="eyebrow">PROGRAM {program.index}</p>
                <h2>{program.title}</h2>
                <p>{program.copy}</p>
                <p className="course-detail-note">Current syllabus, duration, fees and batch details are shared directly by the academy.</p>
                <div className="program-actions">
                  <Link className="text-link" href={program.href}>Course details →</Link>
                  <a className="text-link muted-link" href={"https://wa.me/917095657382?text=" + encodeURIComponent("Hi Revathi Blush, I would like details about the " + program.title + " course.")} target="_blank" rel="noreferrer">Ask about batch →</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="inner-cta">
        <div>
          <p className="eyebrow eyebrow-light">NOT SURE WHICH COURSE?</p>
          <h2>Tell us where you&apos;re starting from.</h2>
        </div>
        <a className="button button-light" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20please%20help%20me%20choose%20the%20right%20course." target="_blank" rel="noreferrer">Ask the academy</a>
      </section>
    </main>
  );
}
