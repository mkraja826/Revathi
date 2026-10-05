import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/courses/saree-draping/" },
  title: "Saree Draping Course",
  description: "Explore saree draping training at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 04"
      title="Saree Draping"
      intro="A focused service skill for bridal and occasion work where fit, proportion and finish matter."
      image="https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Bridal saree styling reference"
      suitedFor="Makeup artists and beginners who want to add professional draping to their services."
      focus={["Preparation & pinning","Pleats, proportion & fit","Pallu placement & finish","Bridal and occasion draping"]}
    />
  );
}
