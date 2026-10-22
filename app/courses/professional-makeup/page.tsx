import type { Metadata } from "next";
import Link from "next/link";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/courses/professional-makeup/" },
  title: "Professional Makeup Artist Course | Revathi Blush",
  description: "Professional Makeup Artist Course at Revathi Blush, LB Nagar, Hyderabad. ₹25,000 course fee, ₹2,000 registration, practical training, bonus classes and certification.",
};

const curriculum = [
  "5 different makeup looks",
  "20+ professional hairstyles",
  "Bridal makeup techniques",
  "10 saree draping styles",
  "Pre-pleating techniques",
  "Professional product knowledge",
  "Client handling and consultation",
  "Digital marketing",
  "Live events experience",
  "Practice with international brands",
  "Certification",
  "Lifetime support",
  "Practical hands-on training",
];

const whatsapp = "https://wa.me/917095657382?text=" + encodeURIComponent("Hello Revathi Blush, I would like to enroll in the Professional Makeup Artist Course. Please share the next batch dates, total payable fee and registration details.");

export default function Page() {
  return (
    <main>
      <CourseDetailPage
        eyebrow="PROFESSIONAL MAKEUP ARTIST COURSE"
        title="Professional Makeup"
        intro="Learn professional makeup, bridal styling, hairstyles and saree draping through practical training at Revathi Blush in LB Nagar, Hyderabad."
        image="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1600&q=82"
        imageAlt="Professional makeup training reference"
        suitedFor="Beginners and aspiring professional makeup artists."
        focus={curriculum}
      />
      <section className="inner-section" aria-labelledby="course-fees-heading">
        <p className="eyebrow">COURSE DETAILS</p>
        <h2 id="course-fees-heading">Training, fees & enrollment.</h2>
        <div className="standards-list">
          <article className="standard-row"><span>01</span><h3>Course fee</h3><p>₹25,000</p></article>
          <article className="standard-row"><span>02</span><h3>Registration fee</h3><p>₹2,000 — confirm whether this is included in the course fee when enrolling.</p></article>
          <article className="standard-row"><span>03</span><h3>Class timings</h3><p>11:00 AM – 4:00 PM. Contact the academy for batch dates and course duration.</p></article>
          <article className="standard-row"><span>04</span><h3>Location</h3><p>LB Nagar, Hyderabad.</p></article>
        </div>
      </section>
      <section className="inner-section" aria-labelledby="course-bonuses-heading">
        <p className="eyebrow">SPECIAL OFFER</p>
        <h2 id="course-bonuses-heading">Two complimentary classes.</h2>
        <p>Professional Makeup Artist Course enrollment includes a free Beautician Course and a free Flower Making Class, as advertised by the academy. Please confirm offer availability for your batch.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Enquire about enrollment</a>
          <Link className="button button-ghost" href="/contact">Contact the academy</Link>
        </div>
        <p>Limited seats advertised. Call <a href="tel:+917095657382">7095657382</a> to check availability.</p>
      </section>
    </main>
  );
}
