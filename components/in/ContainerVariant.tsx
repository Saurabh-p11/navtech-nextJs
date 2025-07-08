import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Phone } from "lucide-react";

const pricingCards = [
  {
    title: "CRM",
    icon: "/svg/lead-management.svg",
    link: "tel:+917788990990",
  },
  {
    title: "HRM",
    icon: "/svg/hrms/employee-lifecycle.svg",
    link: "tel:+917788990990",
  },
  {
    title: "Accounting",
    icon: "/svg/accounting/accounting-reports.svg",
    link: "tel:+917788990990",
    featured: true,
  },
  {
    title: "Manufacturing",
    icon: "/svg/manufacturing/production-planning.svg",
    link: "tel:+917788990990",
  },
];

export default function PricingComponent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
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

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 
      },
    },
  };

  return (
    <motion.section
      id="pricing"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-inter bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
          variants={headerVariants}
        >
          <span className="highlighted-heading">Simple,</span> Transparent Pricing
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center mb-8 bg-white ps-4 rounded-full shadow-md max-w-fit mx-auto"
          variants={textVariants}
        >
          <div className="text-lg font-medium text-gray-700 sm:mr-4 mb-2 sm:mb-0">
            <p>Do It Yourself Package - Starting at</p>
          </div>
          <div className="bg-teal-600 text-white font-bold py-2 px-6 rounded-full text-xl">
            <p>₹90,000/-* per year.</p>
          </div>
        </motion.div>

        <motion.p
          className="text-2xl font-bold text-gray-800 mb-12"
          variants={textVariants}
        >
          Implementation Packages
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {pricingCards.map((card, index) => {
            const iconControls = useAnimation();
            const textControls = useAnimation();

            const handleCardHoverStart = () => {
              iconControls.start({ opacity: 1, x: 0 });
              textControls.start({ x: 12 });
            };

            const handleCardHoverEnd = () => {
              iconControls.start({ opacity: 0, x: -10 });
              textControls.start({ x: 0 });
            };

            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center border-2 border-teal-500 shadow-xl"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={handleCardHoverStart}
                onHoverEnd={handleCardHoverEnd}
              >
                <div className="img-icon text-center mb-4">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-6">
                  {card.title}
                </div>

                <div className="pricing-price"></div>
                <div className="quote-button">
                  <motion.a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-teal-600 font-semibold py-3 px-6 rounded-full text-base transition-all duration-300 transform relative overflow-hidden underline hover:no-underline"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute left-0"
                      initial={{ opacity: 0, x: -10 }}
                      animate={iconControls}
                      transition={{ duration: 0.3 }}
                    >
                      <Phone className="w-5 h-5 mr-2 text-teal-600" />
                    </motion.span>

                    <motion.span
                      initial={{ x: 0 }}
                      animate={textControls}
                      transition={{ duration: 0.3 }}
                    >
                      Get a Quote
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
