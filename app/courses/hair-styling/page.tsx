import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/courses/hair-styling/" },
  title: "Hair Styling Course",
  description: "Explore professional hair styling training at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 03"
      title="Hair Styling"
      intro="Learn practical hair styling for bridal and special occasions."
      image="https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Hair and makeup styling reference"
      suitedFor="Beginners and makeup artists who want to add hair styling to their services."
      focus={["Hair preparation & sectioning","Volume, texture & control","Updos and occasion styling","Finishing & durability"]}
    />
  );
}
