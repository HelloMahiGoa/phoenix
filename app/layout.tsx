import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phoenixcloudtech.com"),
  title: {
    template: "%s | Phoenix Cloud Technologies",
    default: "Phoenix Cloud Technologies | Oracle Cloud HCM & Payroll Specialists",
  },
  description:
    "Phoenix Cloud Technologies delivers disciplined Oracle Cloud HCM & Payroll implementations through FLIGHT methodology, CloudifAI™ delivery model, ZentoH™ orchestration, and GLIDE™ managed services.",
  keywords: [
    "Oracle Cloud HCM",
    "Oracle Cloud Payroll",
    "Oracle HCM Implementation",
    "FLIGHT Methodology",
    "CloudifAI",
    "ZentoH",
    "GLIDE Managed Services",
    "Phoenix Cloud Technologies",
  ],
  authors: [{ name: "Phoenix Cloud Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.phoenixcloudtech.com",
    siteName: "Phoenix Cloud Technologies",
    title: "Phoenix Cloud Technologies | Oracle Cloud HCM & Payroll Specialists",
    description:
      "Outcome-led Oracle Cloud HCM & Payroll delivery. Disciplined methodology. Measurable results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Cloud Technologies | Oracle Cloud HCM & Payroll Specialists",
    description: "Outcome-led Oracle Cloud HCM & Payroll delivery. Disciplined methodology. Measurable results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Phoenix Cloud Technologies",
    url: "https://www.phoenixcloudtech.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@phoenixcloudtech.com",
      contactType: "customer service",
    },
    description:
      "Oracle Cloud HCM & Payroll implementation specialists delivering structured, outcome-led engagements.",
    sameAs: ["https://www.linkedin.com/company/phoenixcloudtech"],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
