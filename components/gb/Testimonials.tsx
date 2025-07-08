"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const testimonials = [
  {
    company: "Bauer Media",
    domain: "MEDIA, ADVERTISEMENT",
    logo: "/bauermedia.png",
    text: `The Navtech team created a new website with a sub-second load time that can be considered the best in class. Post-launch the site increased by more than 1M page impressions per month, responses to advertisers improved by more than 40% and engagement metrics went up across the board.`,
    linkedin: "https://www.linkedin.com/company/bauer-media-group/",
  },
  {
    company: "RetroTax",
    domain: "FINTECH",
    logo: "/retrotax-1.png",
    text: `The Navtech team has been instrumental to our recent growth. We've gone from hiring just 2 developers in 2015 to a team of more 15. They have helped us build scalable APIs, automated most of our workflows, built modern fault-tolerant cloud infrastructure on AWS, and built integrations to our platforms with various HRMS platforms.`,
    linkedin: "https://www.linkedin.com/company/retrotax/",
  },
  {
    company: "GroovePacker",
    domain: "SOFTWARE",
    logo: "/groovepacker2.png",
    text: `We've worked with Navtech on several projects over the past 5 years. Each experience has been very good and I feel fortunate that I found them early on. Communication with their team was excellent and they were very patient when aspects of the project changed. I have great confidence in their ability and look forward to working with them again on future projects.`,
    linkedin: "https://www.linkedin.com/company/groovepacker/",
  },
];

export default function TestimonialsSlider() {
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dragRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen py-10 w-full flex justify-center items-center"
    >
      <div className="w-full">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What do our clients say?
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Our work is trusted by professionals across industries. We believe
            the quality we produce will always be welcomed by our clients and
            partners.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          ref={dragRef}
          className="mt-12 w-full max-w-7xl mx-auto flex gap-6 overflow-x-auto px-4 pb-6 pt-2 cursor-grab select-none snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] max-w-[90%] sm:max-w-[360px] bg-white shadow-lg rounded-md p-6 my-6 text-left flex-shrink-0 snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={80}
                  height={80}
                  className="object-contain rounded-full shadow-md"
                />
                <div>
                  <p className="font-bold text-lg text-black">{t.company}</p>
                  <p className="text-xs text-gray-500">{t.domain}</p>
                </div>
              </div>
              <p className="text-gray-800 text-md leading-relaxed mb-4">
                "{t.text}"
              </p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <FaLinkedinIn className="text-lg text-gray-700 hover:text-teal-600" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Hide scrollbar cross-browser */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </motion.section>
  );
}
