import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Revathi Blush Studio & Academy | LB Nagar, Hyderabad",
    template: "%s | Revathi Blush",
  },
  description:
    "Professional makeup academy and premium bridal studio in LB Nagar, Hyderabad. Explore makeup, bridal, hair styling, saree draping and masterclass programs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
