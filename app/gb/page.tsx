"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/gb/Hero";
import Services from "@/components/gb/Services";
import ServicesSection from "@/components/gb/ServicesSection";
import TestimonialsSlider from "@/components/gb/Testimonials";
import FoundersMessage from "@/components/gb/FoundersMessage";
import ClientsSection from "@/components/gb/ClientsSection";
import Contact from "@/components/gb/Contact";
import Navbar from "@/components/gb/Navbar";
import DotNavigation from "@/components/gb/DotNavigation";
import PageLayout from "@/components/gb/ui/PageLayout";

const sections = [
  "hero",
  "services",
  "servicesSection",
  "testimonials",
  "foundersMessage",
  "ourClients",
  "contact",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= sections.length) return;
    
    setIsScrolling(true);
    setCurrentIndex(index);
    
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    }
    
    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;

    e.preventDefault();

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
      scrollToSection(nextIndex);
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [currentIndex, isScrolling, scrollToSection]); // add scrollToSection


  return (
    <main 
      ref={mainRef}
      className="overflow-y-scroll relative"
      style={{
        scrollBehavior: isScrolling ? 'smooth' : 'auto',
      }}
    >
      <Navbar />
      <DotNavigation
        currentIndex={currentIndex}
        onSectionChange={scrollToSection}
      />

      <PageLayout id="hero" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <Hero />
        </div>
      </PageLayout>

      <PageLayout id="services" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <Services />
        </div>
      </PageLayout>

      <PageLayout id="servicesSection" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <ServicesSection />
        </div>
      </PageLayout>

      <PageLayout id="testimonials" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <TestimonialsSlider />
        </div>
      </PageLayout>

      <PageLayout id="foundersMessage" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <FoundersMessage />
        </div>
      </PageLayout>

      <PageLayout id="ourClients" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 5 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <ClientsSection />
        </div>
      </PageLayout>
     
      <PageLayout id="contact" className="snap-start min-h-screen transform transition-transform duration-1000 ease-in-out">
        <div className={`transform transition-all duration-1000 ease-out ${
          currentIndex === 6 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-90'
        }`}>
          <Contact />
        </div>
      </PageLayout>
    </main>
  );
}
