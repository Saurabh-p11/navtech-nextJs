"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  "Media, Entertainment & Advertisement",
  "Human Resources",
  "Tax & Compliance",
  "Health & Fitness",
  "Security",
  "Retail & Logistics",
  "Edtech",
];

const allServices = [
  {
    category: "Media, Entertainment & Advertisement",
    data: [
      {
        id: 1,
        company: "Premiere Digital",
        desc: "Optimized System to Enhance Speed, UI and Efficiency",
        img: "/pdx-pdx-media-escher.png",
        caseLink: "/PDX-PDX_Media_and_Eshere-casestudy.pdf",
      },
      {
        id: 2,
        company: "Bauer Media",
        desc: "Increasing Web Traffic with Innovative UI/UX Designs and Search Optimization",
        img: "/bauer-media.png",
        caseLink: "/Bauer-Media-casestudy.pdf",
      },
      {
        id: 3,
        company: "Premiere Digital",
        desc: "Custom Cloud Platform to Streamline Media Distribution Worldwide",
        img: "/pdx-spherex.png",
        caseLink: "/PDX_SPHEREX-casestudy.pdf",
      },
      {
        id: 4,
        company: "Premiere Digital",
        desc: "Integrated Cloud Content Management System for Faster Delivery",
        img: "/pdx-monika-version.png",
        caseLink: "/PDX-casestudy.pdf",
      },
      {
        id: 5,
        company: "Premiere Digital",
        desc: "Automated System to Manage and Deliver Assets Worldwide",
        img: "/pdx-media-portal.png",
        caseLink: "/PDX-MEDIA-PORTAL-casestudy.pdf",
      },
    ],
  },
  {
    category: "Human Resources",
    data: [
      {
        id: 1,
        company: "Wizehire",
        desc: "Re-Building Website For Speed, Scalability & Better User Experience",
        img: "/2-wizehire-wordpress.png",
        caseLink: "/WH-Wordpress-casestudy.pdf",
      },
      {
        id: 2,
        company: "InnerMetrix",
        desc: "Automated Web Application for Streamlining Trainings And Assessments",
        img: "/3-inner-metrix.png",
        caseLink: "/IMX-casestudy.pdf",
      },
      {
        id: 3,
        company: "Wizehire",
        desc: "App Modernization To Automate Hiring Operations",
        img: "/14-wizehire-garvit.png",
        caseLink: "/WH-application-casestudy.pdf",
      },
      {
        id: 4,
        company: "StartDate",
        desc: "AI Based Recruitment Platform",
        img: "/18-startdate.png",
        caseLink: "/Startdate-casestudy.pdf",
      },
    ],
  },
  {
    category: "Tax & Compliance",
    data: [
      {
        id: 1,
        company: "SOC2",
        desc: "Strengthening Security & Compliance Controls With SOC2",
        img: "/1-soc2.png",
        caseLink: "/SOC2-casestudy.pdf",
      },
      {
        id: 2,
        company: "RetroTax",
        desc: "Unified Platform With Integrations To Improve Tax Credit Operations",
        img: "/4-retrotax.png",
        caseLink: "/RetroTax-casestudy.pdf",
      },
    ],
  },
  {
    category: "Health & Fitness",
    data: [
      {
        id: 1,
        company: "Runcoach",
        desc: "Effective Customer Engagement with an intuitive Mobile App",
        img: "/17-runcoach.png",
        caseLink: "/Health_and_Fitness_Mobile_App-casestudy.pdf",
      },
    ],
  },
  {
    category: "Security",
    data: [
      {
        id: 1,
        company: "SOC2",
        desc: "Strengthening Security & Compliance Controls With SOC2",
        img: "/1-soc2.png",
        caseLink: "/SOC2-casestudy.pdf",
      },
      {
        id: 2,
        company: "MAKUSAFE",
        desc: "Scalable Data Collection from IoT Devices",
        img: "/16-makusafe.png",
        caseLink: "/MAKUSAFE_security-casestudy.pdf",
      },
    ],
  },
  {
    category: "Retail & Logistics",
    data: [
      {
        id: 1,
        company: "Groove Packer",
        desc: "Equipping E-Commerce Sellers With High Performant Application",
        img: "/6-groove-packer.png",
        caseLink: "/Groove_Packer-casestudy.pdf",
      },
      {
        id: 2,
        company: "MPJ",
        desc: "Integrated E-Commerce Platform To Drive Sales",
        img: "/5-mpj.png",
        caseLink: "/MPJ-casestudy.pdf",
      },
      {
        id: 3,
        company: "Maes Food",
        desc: "Enhancing Food Technology with AI",
        img: "/19-maes-food.png",
        caseLink:
          "/MaesFood-casestudy.pdf",
      },
    ],
  },
  {
    category: "Edtech",
    data: [
      {
        id: 1,
        company: "GBS",
        desc: "Personalized Engaging Learning Experiences",
        img: "/8-gbs.png",
        caseLink:
          "/GBS_Edtech-casestudy.pdf",
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const dragRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    isDownRef.current = true;
    dragRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - dragRef.current.offsetLeft;
    scrollLeft.current = dragRef.current.scrollLeft;
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (!dragRef.current) return;
    isDownRef.current = false;
    dragRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !dragRef.current) return;
    e.preventDefault();
    const x = e.pageX - dragRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    dragRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseLeave = () => {
    if (!dragRef.current) return;
    isDownRef.current = false;
    dragRef.current.classList.remove("cursor-grabbing");
  };

  const handleWheel = (e: React.WheelEvent) => e.preventDefault();
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  const filtered = allServices.find((s) => s.category === activeCategory);

  return (
    <motion.section
      id="servicesSection"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen py-10 w-full flex justify-center items-center"
    >
      <motion.div
        className="flex flex-col md:flex-row max-w-9xl w-full mx-auto py-10 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Left Tabs */}
        <motion.div
          className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <div
              key={cat}
              className={`cursor-pointer py-2 font-medium text-sm uppercase tracking-wide transition duration-200 ${
                activeCategory === cat
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </motion.div>

        {/* Right Drag Section */}
        <motion.div
          className="w-full md:w-3/4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div
            ref={dragRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
            onContextMenu={handleContextMenu}
            className="flex gap-6 cursor-grab active:cursor-grabbing select-none overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filtered?.data.map((service, index) => (
              <motion.div
                key={service.id}
                className="min-w-[280px] max-w-[280px] flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-sm text-gray-500 font-semibold mb-1">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="bg-white rounded-md shadow-md overflow-hidden mb-4">
                  <Image
                    src={service.img}
                    alt={service.company}
                    width={280}
                    height={400}
                    className="w-full h-[400px] object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-md text-black">
                    {service.company}
                  </p>
                  <p className="text-sm text-gray-600 leading-snug mb-2">
                    {service.desc}
                  </p>
                  <a
                    href={"/case-studies" + service.caseLink}
                    target="_blank"
                    className="text-sm text-black hover:text-teal-600 underline font-medium mt-1 inline-block"
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    Case Study
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
}
