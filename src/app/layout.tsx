import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remove Background Online Free – AI Background Remover Tool",
  description: "Remove image backgrounds instantly with AI. 100% free, no signup required. Works entirely in your browser with complete privacy. Download transparent PNGs in seconds.",
  keywords: [
    "remove background",
    "background remover",
    "remove background online free",
    "AI background remover",
    "transparent background",
    "image background removal",
    "free background remover",
    "photo background eraser",
    "background removal tool",
    "online background remover",
  ],
  authors: [{ name: "AI Background Remover Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Remove Background Online Free – AI Background Remover Tool",
    description: "Remove image backgrounds instantly with AI. 100% free, no signup required. Works entirely in your browser with complete privacy.",
    url: "https://background-remover.ai",
    siteName: "AI Background Remover",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Background Remover - Remove backgrounds instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove Background Online Free – AI Background Remover Tool",
    description: "Remove image backgrounds instantly with AI. 100% free, works in your browser.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://background-remover.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AI Background Remover",
              "description": "Remove image backgrounds instantly with AI. 100% free, works entirely in your browser.",
              "url": "https://background-remover.ai",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "AI-powered background removal",
                "Instant processing",
                "100% free",
                "Works offline",
                "Complete privacy",
                "No signup required",
                "Transparent PNG download"
              ],
              "screenshot": "https://background-remover.ai/screenshot.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "15000",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
