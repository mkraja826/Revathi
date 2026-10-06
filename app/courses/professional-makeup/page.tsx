import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/courses/professional-makeup/" },
  title: "Professional Makeup Course",
  description: "Explore the Professional Makeup course at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 01"
      title="Professional Makeup"
      intro="Learn essential makeup skills for professional client work."
      image="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Professional makeup training reference"
      suitedFor="Beginners and aspiring makeup artists."
      focus={["Skin preparation & product understanding","Base, complexion & finish","Eye makeup & balance","Professional workflow & presentation"]}
    />
  );
}
