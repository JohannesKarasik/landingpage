import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dermify — Apps for Med Spas",
    template: "%s | Dermify",
  },
  description:
    "Dermify helps med spas launch beautifully branded client apps in minutes—loyalty, memberships, offers, bookings, and revenue tools in one platform.",
  keywords: [
    "med spa app",
    "med spa apps",
    "aesthetic clinic app",
    "medspa software",
    "med spa loyalty app",
    "med spa membership app",
    "med spa offers",
    "patient app",
    "clinic mobile app",
    "white-label med spa app",
    "Dermify",
  ],
  authors: [{ name: "Dermify" }],
  creator: "Dermify",
  publisher: "Dermify",

  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Dermify — Launch Med Spa Apps in Minutes",
    description:
      "Launch beautifully branded client apps for your med spa—loyalty, memberships, offers, bookings, and revenue insights in one place.",
    url: "https://dermify.app",
    siteName: "Dermify",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dermify — Launch Med Spa Apps in Minutes",
    description:
      "Branded med spa client apps with loyalty, memberships, offers, bookings, and analytics—live in minutes.",
    creator: "@dermifyapp",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://dermify.app",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
