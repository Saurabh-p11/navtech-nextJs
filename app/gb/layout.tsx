
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navtech UK - Digital Transformation & Cloud Services",
  description:
    "Navtech UK delivers premium cloud, software, and product development services across the UK and Europe.",
  metadataBase: new URL("https://www.navtech.io"),
  alternates: {
    canonical: "/gb",
  },
  openGraph: {
    title: "Navtech UK",
    description: "Leading UK provider of software and cloud services.",
    url: "https://www.navtech.io/gb",
    siteName: "Navtech UK",
    locale: "en_GB",
    type: "website",
    images: ["/navtech-final-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navtech UK",
    description: "Cloud and software development solutions in the UK.",
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