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
    url: 'https://yourdomain.com',
    siteName: 'EFA Supplies',
    images: [
      {
        url: 'https://yourdomain.com/banner.jpg',
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


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
