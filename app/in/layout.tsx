import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navtech India - Top Software Development Company in India",
  description:
    "Navtech India offers expert application development, cloud services, and tech consulting tailored to Indian enterprises.",
  metadataBase: new URL("https://www.navtech.io"),
  alternates: {
    canonical: "/in",
  },
  openGraph: {
    title: "Navtech India",
    description: "Expert software and cloud solutions for Indian markets.",
    url: "https://www.navtech.io/in",
    siteName: "Navtech India",
    locale: "en_IN",
    type: "website",
    images: ["/navtech-final-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navtech India",
    description: "Software development and cloud services tailored for India.",
    images: ["/navtech-final-logo.png"],
  },
};


export default function IndiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
