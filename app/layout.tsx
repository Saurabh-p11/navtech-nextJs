import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Navtech - Technology Consulting & Software Development Solutions",
  description:
    "Navtech provides consulting, solutions & services in application development, cloud computing, and product development. Offshore development centers in India & US with onshore/offshore delivery models.",
  keywords: [
    "technology consulting",
    "software development",
    "mobile app development",
    "android development",
    "ios development",
    "web app development",
    "cloud computing",
    "AWS services",
    "Azure services",
    "e-commerce development",
    "cloud migration",
    "cloud security",
    "offshore development",
    "product development",
    "digital strategy",
    "IT consulting",
    "application development",
  ],
  authors: [{ name: "Shyam Visamsetty", url: "https://www.navtech.io" }],
  creator: "Navtech",
  publisher: "Navtech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.navtech.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Navtech - Technology Consulting & Software Development Solutions",
    description:
      "Leading technology consulting company providing application development, cloud computing, and product development services with offshore development centers in India & US.",
    url: "https://www.navtech.io",
    siteName: "Navtech",
    images: [
      {
        url: "/navtech-final-logo.png",
        width: 1200,
        height: 630,
        alt: "Navtech - Technology Consulting Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navtech - Technology Consulting & Software Development Solutions",
    description:
      "Leading technology consulting company providing application development, cloud computing, and product development services with offshore development centers in India & US.",
    images: ["@/public/navtech-final-logo.png"],
    creator: "@navtech", 
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
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Navtech" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Navtech" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Navtech",
              url: "https://www.navtech.io",
              logo: "https://www.navtech.io/navtech-final-logo.png",
              description:
                "Technology consulting company providing application development, cloud computing, and product development services with offshore development centers in India & US.",
              founder: {
                "@type": "Person",
                name: "Shyam Visamsetty",
                jobTitle: "Founder & CEO",
                alumniOf: "Virginia Tech University",
              },
              sameAs: [
                "https://www.linkedin.com/company/navtech",
                "https://twitter.com/navtech",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://www.navtech.io/in/#contact",
              },
              areaServed: ["US", "India"],
              serviceType: [
                "Mobile App Development",
                "Web App Development",
                "Cloud Computing",
                "AWS Services",
                "Azure Services",
                "E-commerce Development",
                "Cloud Migration",
                "Digital Strategy",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
