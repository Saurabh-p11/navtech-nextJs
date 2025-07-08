"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen py-10 w-full flex justify-center items-center"
    >
      <div className="w-full max-w-7xl px-6">
        <motion.h2
          className="text-[28px] md:text-[48px] lg:text-[58px] xl:text-[68px] font-bold text-black capitalize leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Services -{" "}
          <span className="text-teal-600 lowercase">
            where passion meets technology
          </span>
          .
        </motion.h2>

        <motion.p
          className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] mt-6 text-black font-light opacity-80 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-teal-600 font-medium">
            "Everything fails all the time" – Amazon&apos;s CTO, Dr. Werner Vogels.
          </span>{" "}
          As technology grows more complex and budgets shrink, it pays to have
          experienced engineers. Our team offers breadth and depth across a
          range of technical areas.
        </motion.p>

        <div className="w-full py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800 font-sans">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl mb-2 font-bold">Digital Transformation</h3>
              <p className="text-lg text-gray-600">
                End-to-end Software Development, Staff Augmentation, Technical
                Consulting, Business Automation, Cloud Migration
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-2 font-bold">AI / ML</h3>
              <p className="text-lg text-gray-600">
                Machine Learning, Natural Language Processing, Computer Vision
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl mb-2 font-bold">
                Application Modernization
              </h3>
              <p className="text-lg text-gray-600">
                DevOps, Solution Architecture, Quality Assurance, Cloud
                Optimization (AWS, Azure, GCP)
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-2 font-bold">Security</h3>
              <p className="text-lg text-gray-600">
                Auditing and Compliance, Penetration Testing, SOC2, ISO 27001,
                GDPR
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl mb-2 font-bold">Bespoke Solutions</h3>
              <p className="text-lg text-gray-600">
                Complex Business Problems, Web Development, Mobile Development,
                UI/UX Design, Database Design
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-2 font-bold">Support & Maintenance</h3>
              <p className="text-lg text-gray-600">
                Post-launch Assistance, SLAs, Upgrades, Debugging –{" "}
                <span className="italic">
                  we have you covered through any lifecycle
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
