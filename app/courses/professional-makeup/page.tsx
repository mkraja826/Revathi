import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "Professional Makeup Course",
  description: "Explore the Professional Makeup course at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 01"
      title="Professional Makeup"
      intro="A strong starting point for students who want to learn makeup as a real client-facing skill."
      image="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Professional makeup training reference"
      suitedFor="Beginners and aspiring artists who want a more structured foundation."
      focus={["Skin preparation & product understanding","Base, complexion & finish","Eye makeup & balance","Professional workflow & presentation"]}
    />
  );
}
