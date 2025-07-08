"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Add your image paths here
const clients = [
  "/apple.png",
  "/sony.png",
  "/cnn.png",
  "/bauermediagroup.png",
  "/pdx457806.png",
  "/retrotax.png",
  "/metaapply.png",
  "/kaveri.png",
  "/globalu.png",
  "/buildsquad.png",
  "/grooverpacker.png",
  "/imx.png",
  "/makusafe.png",
  "/nectar-team.png",
  "/startdate.png",
  "/runcoach.png",
  "/xfluencer.png",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function ClientsSection() {
  return (
    <motion.section
      id="ourClients"
      className="bg-white min-h-screen text-center flex  justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <h2 className="text-5xl font-bold text-black mb-4">Our Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Our team of 80+ engineers draws from years of experience working for
          and alongside top-tier companies and industries spanning the globe.
        </p>

        <motion.div
          className="flex flex-wrap  gap-6 justify-center items-center max-w-9xl mx-auto"
          variants={containerVariants}
        >
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center transition-all duration-300 ease-in-out"
              variants={itemVariants}
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={200}
                height={100}
                className="w-[140px] sm:w-[200px] h-14 object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
