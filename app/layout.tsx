import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#B9FF66",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://positivus-agency.vercel.app"),
  title: {
    default: "Positivus — Digital Marketing Agency & Growth Platform",
    template: "%s | Positivus Digital Marketing",
  },
  description:
    "Navigating the digital landscape for success. Positivus delivers high-impact SEO, PPC, social media marketing, content creation, and real-time analytics to help your business scale.",
  keywords: [
    "Digital Marketing Agency",
    "SEO Optimization",
    "Pay-Per-Click Advertising",
    "Social Media Marketing",
    "Content Creation",
    "Analytics & Tracking",
    "Next.js 16 Agency Template",
    "Tailwind CSS v4",
    "ScrollCraft Animation",
    "React 19",
  ],
  authors: [{ name: "Positivus Team" }],
  creator: "Positivus",
  publisher: "Positivus Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Positivus — Digital Marketing Agency",
    description:
      "Navigating the digital landscape for success. Full-service digital marketing agency delivering scalable SEO, PPC, and content strategies.",
    url: "https://positivus-agency.vercel.app",
    siteName: "Positivus",
    images: [
      {
        url: "/images/hero-illustration.svg",
        width: 1200,
        height: 630,
        alt: "Positivus Digital Marketing Agency Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Positivus — Digital Marketing Agency",
    description:
      "Navigating the digital landscape for success through high-impact SEO, PPC, and content strategies.",
    images: ["/images/hero-illustration.svg"],
    creator: "@positivus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="font-sans antialiased bg-white text-[#191A23] min-h-screen">
        {children}
      </body>
    </html>
  );
}
