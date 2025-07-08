"use client";
import { useEffect } from "react";
import { animate } from "framer-motion";
import Navbar from "@/components/in/Navbar";
import Hero from "@/components/in/Hero";
import ERPModulesComponent from "@/components/in/ERPModules";
import Industries from "@/components/in/Industries";
import PricingComponent from "@/components/in/ContainerVariant";
import ERPComparisonTable from "@/components/in/ERPComparisonTable";
import WhyChooseUs from "@/components/in/WhyChooseUs";
import ClientLogos from "@/components/in/ClientLogos";
import Footer from "@/components/in/Footer";

export default function IndiaHome() {
  
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName !== "A" || !target.hash) return;

      const id = target.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY;

        animate(window.scrollY, top, {
          duration: 0.8,
          onUpdate: (latest) => window.scrollTo(0, latest),
        });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <main className="relative scroll-smooth">
      <Navbar />
      <Hero />
      <ERPModulesComponent />
      <Industries />
      <PricingComponent />
      <ERPComparisonTable />
      <WhyChooseUs />
      <ClientLogos />
      <Footer />
    </main>
  );
}