import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9f6",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Revathi Blush Studio & Academy | LB Nagar, Hyderabad",
    template: "%s | Revathi Blush",
  },
  description:
    "Professional makeup academy and bridal studio in LB Nagar, Hyderabad. Explore makeup, bridal, hair styling, saree draping and masterclass programs.",
  keywords: [
    "makeup academy LB Nagar",
    "makeup academy Hyderabad",
    "bridal makeup artist LB Nagar",
    "professional makeup course Hyderabad",
    "Revathi Blush Studio Academy",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Revathi Blush Studio & Academy",
    description: "Professional makeup academy and bridal studio in LB Nagar, Hyderabad.",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "EducationalOrganization"],
  name: "Revathi Blush Studio & Academy",
  telephone: "+91 70956 57382",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shivapuri Colony",
    addressLocality: "L. B. Nagar",
    addressRegion: "Telangana",
    postalCode: "500074",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
