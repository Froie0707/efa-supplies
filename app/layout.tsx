import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'EFA Supplies | School Supplies in Davao City',
  description: 'Affordable school supplies in Davao City. Bulk and retail services by EFA Supplies.',
  openGraph: {
    title: 'EFA Supplies | School Supplies in Davao City',
    description: 'Affordable school supplies in Davao City. Bulk and retail services by EFA Supplies.',
    url: 'https://efa-supplies.vercel.app',
    siteName: 'EFA Supplies',
    images: [
      {
        url: 'https://efa-supplies.vercel.app/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'EFA Supplies Banner',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@efasupplies',
    creator: '@efasupplies',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "OfficeEquipmentStore",
  "name": "EFA Supplies",
  "image": "https://efa-supplies.vercel.app/logo.png", 
  "url": "https://efa-supplies.vercel.app",
  "telephone": "+63 954 925 6730",
  "description": "EFA Supplies is your trusted source for affordable and quality school supplies in Davao City. Whether you're a parent preparing for back-to-school, a student looking for essentials, or a teacher sourcing classroom tools, we’ve got everything you need. We offer school starter kits for Grade 1, back-to-school bundles for Kinder, and customized supply packages for public school students in Davao. Our store features ballpen bundles, notebooks, intermediate pads, yellow pad paper, and bond paper in short, long, and A4 sizes. We proudly serve families, teachers, and institutions with budget-friendly school supplies, DepEd-ready classroom kits, and bulk orders for schools in Davao.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Holy Cross Drive, R. Castillo St., Agdao",
    "addressLocality": "Davao City",
    "addressRegion": "Davao del Sur",
    "postalCode": "8000",
    "addressCountry": "PH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 7.0879714,
    "longitude": 125.6291973
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/efasupplies", 
    // "https://www.instagram.com/efasupplies"
  ]
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
