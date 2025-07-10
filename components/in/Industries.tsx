import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    { name: "Manufacturing", icon: "/svg/manufacturing.svg" },
    { name: "Retail", icon: "/svg/retail.svg" },
    { name: "Logistics", icon: "/svg/logistics.svg" },
    { name: "E-Commerce", icon: "/svg/e-commerce.svg" },
    { name: "Pharma", icon: "/svg/pharmaceutical.svg" },
    { name: "Construction", icon: "/svg/construction.svg" },
  ];

  const stats = [
    {
      number: "250+",
      description: "Projects Completed",
      icon: "/svg/projects.svg",
    },
    {
      number: "50+",
      description: "Happy Clients Worldwide",
      icon: "/svg/clients.svg",
    },
    {
      number: "10+",
      description: "Years of Experience",
      icon: "/svg/experience.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#f2f9f4] font-inter py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <section className="text-center mb-16 max-w-4xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl text-gray-800 font-bold mb-4"
        >
          <span className="highlighted-heading">Industries</span> We Serve
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Image
                src={industry.icon}
                alt={industry.name}
                width={88}
                height={88}
                className="mb-3"
              />
              <p className="text-xl font-medium text-gray-800">
                {industry.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mb-16 w-full max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border border-gray-200"
              variants={cardVariants}
              whileHover={{ translateY: -5, transition: { duration: 0.3 } }}
            >
              <Image
                src={stat.icon}
                alt={stat.description}
                width={84}
                height={84}
                className="mb-6"
              />
              <h3 className="text-5xl font-extrabold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-xl text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.a
        href="https://calendly.com/sales-dg-n/demo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[rgb(44,141,138)] to-[rgb(30,88,91)] hover:from-[rgb(30,88,91)] hover:to-[rgb(44,141,138)] text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        Book a Demo
      </motion.a>
    </div>
  );
}
