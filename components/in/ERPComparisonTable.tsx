"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const easeFn = cubicBezier(0.25, 0.1, 0.25, 1); // Type-safe easing

const comparisonData = [
  {
    label: "Licensing cost (Per Year)",
    erpnext: "-",
    zoho: "₹15,00,000 /- \n(₹1250 per user/mo)",
    odoo: "₹10,68,000 /- \n(₹890 per user/mo)",
    erpnextBgOdd: "bg-[#e3f4ec]",
    erpnextBgEven: "bg-[#f3faf6]",
    zohoBgOdd: "bg-[#fde2d5]",
    zohoBgEven: "bg-[#fef2ec]",
    odooBgOdd: "bg-[#e4f5f9]",
    odooBgEven: "bg-[#f3fbfc]",
  },
  {
    label: "One time Implementation Cost\n(1000 hours effort estimated)",
    erpnext: "₹9,00,000 /- *",
    zoho: "₹9,00,000 /- *",
    odoo: "₹9,00,000 /- *",
    erpnextBgOdd: "bg-[#f3faf6]",
    erpnextBgEven: "bg-[#e3f4ec]",
    zohoBgOdd: "bg-[#fef2ec]",
    zohoBgEven: "bg-[#fde2d5]",
    odooBgOdd: "bg-[#f3fbfc]",
    odooBgEven: "bg-[#e4f5f9]",
  },
  {
    label: "Hosting Charges",
    erpnext: "₹90,000 /- *",
    zoho: "-",
    odoo: "-",
    erpnextBgOdd: "bg-[#e3f4ec]",
    erpnextBgEven: "bg-[#f3faf6]",
    zohoBgOdd: "bg-[#fde2d5]",
    zohoBgEven: "bg-[#fef2ec]",
    odooBgOdd: "bg-[#e4f5f9]",
    odooBgEven: "bg-[#f3fbfc]",
  },
  {
    label: "Total Cost of Ownership",
    isNested: true,
    subRows: [
      {
        label: "Year 1",
        erpnext: "₹9,90,000 /- *",
        zoho: "₹24,00,000 /- *",
        odoo: "₹19,68,000 /- *",
      },
      {
        label: "Year 2",
        erpnext: "₹2,40,000 /- *",
        zoho: "₹15,90,000 /- **",
        odoo: "₹11,53,440 /- ***",
      },
      {
        label: "For 5 years",
        erpnext: "₹19,50,000 /- *",
        zoho: "₹93,55,640 /- *",
        odoo: "₹71,64,528 /- *",
        highlight: true,
      },
    ],
  },
  {
    label: "Implementation Time",
    erpnext: "7 – 30 Days",
    zoho: "30 – 45 Days",
    odoo: "30 – 45 Days",
    erpnextBgOdd: "bg-[#f3faf6]",
    erpnextBgEven: "bg-[#e3f4ec]",
    zohoBgOdd: "bg-[#fef2ec]",
    zohoBgEven: "bg-[#fde2d5]",
    odooBgOdd: "bg-[#f3fbfc]",
    odooBgEven: "bg-[#e4f5f9]",
  },
  {
    label: "Ease of Use",
    erpnext: "/svg/checkmark.svg",
    zoho: "/svg/checkmark.svg",
    odoo: "/svg/partial-checkmark.svg",
    isIcon: true,
    erpnextBgOdd: "bg-[#e3f4ec]",
    erpnextBgEven: "bg-[#f3faf6]",
    zohoBgOdd: "bg-[#fde2d5]",
    zohoBgEven: "bg-[#fef2ec]",
    odooBgOdd: "bg-[#e4f5f9]",
    odooBgEven: "bg-[#f3fbfc]",
  },
  {
    label: "Customizations",
    erpnext: "/svg/checkmark.svg",
    zoho: "/svg/partial-checkmark.svg",
    odoo: "/svg/checkmark.svg",
    isIcon: true,
    erpnextBgOdd: "bg-[#f3faf6]",
    erpnextBgEven: "bg-[#e3f4ec]",
    zohoBgOdd: "bg-[#fef2ec]",
    zohoBgEven: "bg-[#fde2d5]",
    odooBgOdd: "bg-[#f3fbfc]",
    odooBgEven: "bg-[#e4f5f9]",
  },
  {
    label: "Add-on Integrations",
    erpnext: "/svg/checkmark.svg",
    zoho: "/svg/checkmark.svg",
    odoo: "/svg/checkmark.svg",
    isIcon: true,
    erpnextBgOdd: "bg-[#e3f4ec]",
    erpnextBgEven: "bg-[#f3faf6]",
    zohoBgOdd: "bg-[#fde2d5]",
    zohoBgEven: "bg-[#fef2ec]",
    odooBgOdd: "bg-[#e4f5f9]",
    odooBgEven: "bg-[#f3fbfc]",
  },
  {
    label: "Statutory Compliance\n(GST & e-Way Bill, e-Invoicing)",
    erpnext: "/svg/checkmark.svg",
    zoho: "/svg/checkmark.svg",
    odoo: "/svg/partial-checkmark.svg",
    isIcon: true,
    erpnextBgOdd: "bg-[#f3faf6]",
    erpnextBgEven: "bg-[#e3f4ec]",
    zohoBgOdd: "bg-[#fef2ec]",
    zohoBgEven: "bg-[#fde2d5]",
    odooBgOdd: "bg-[#f3fbfc]",
    odooBgEven: "bg-[#e4f5f9]",
  },
  {
    label: "Local Language\n(Localization)",
    erpnext: "/svg/checkmark.svg",
    zoho: "/svg/partial-checkmark.svg",
    odoo: "/svg/partial-checkmark.svg",
    isIcon: true,
    erpnextBgOdd: "bg-[#e3f4ec]",
    erpnextBgEven: "bg-[#f3faf6]",
    zohoBgOdd: "bg-[#fde2d5]",
    zohoBgEven: "bg-[#fef2ec]",
    odooBgOdd: "bg-[#e4f5f9]",
    odooBgEven: "bg-[#f3fbfc]",
  },
];

export default function ERPComparisonTable() {
  const [activeProduct, setActiveProduct] = useState<
    "erpnext" | "zoho" | "odoo"
  >("erpnext");

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveProduct(event.target.value as "erpnext" | "zoho" | "odoo");
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeFn,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeFn },
    },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: easeFn },
    },
  };

  const mobileTableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeFn },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: easeFn },
    },
  };

  const savingsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.5, ease: easeFn },
    },
  };

  const legendItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeFn },
    },
  };

  return (
    <motion.section
      id="why-erpnext"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-inter"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800"
          variants={headerVariants}
        >
          Why <span className="highlighted-heading">ERP Next</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-10 text-base"
          variants={headerVariants}
        >
          Pricing for 100 Users
        </motion.p>

        <motion.div
          className="hidden lg:block overflow-x-auto mb-4"
          variants={sectionVariants}
        >
          <div className="grid grid-cols-[minmax(250px,_1fr)_repeat(3,_minmax(180px,_1fr))] gap-x-5 gap-y-0 border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="col-span-1 p-4 bg-white text-left font-bold text-gray-800"></div>
            <div
              className="col-span-1 p-8 text-center text-white font-bold rounded-tl-xl"
              style={{
                background: "linear-gradient(90deg, #2c8d8a 0%, #1e585b 100%)",
              }}
            >
              <img
                src="/svg/erpnext-white.svg"
                alt="ERPNext"
                className="mx-auto h-22"
              />
            </div>
            <div
              className="col-span-1 p-8 text-center text-white font-bold"
              style={{
                background: "linear-gradient(90deg, #f75f40 0%, #de441e 100%)",
              }}
            >
              <img src="/svg/zoho.svg" alt="Zoho" className="mx-auto h-22" />
            </div>
            <div
              className="col-span-1 p-8 text-center text-white font-bold rounded-tr-xl"
              style={{
                background: "linear-gradient(90deg, #6bc7de 0%, #457fa4 100%)",
              }}
            >
              <img src="/svg/oodo.svg" alt="Odoo" className="mx-auto h-22" />
            </div>

            {comparisonData.map((row, rowIndex) =>
              row.isNested ? (
                <React.Fragment key={`nested-group-${rowIndex}`}>
                  {row.subRows.map((subRow, subIndex) => (
                    <motion.div
                      key={`${row.label}-${subIndex}`}
                      className="contents"
                      variants={tableRowVariants}
                    >
                      <div
                        className={`col-span-1 p-4  text-left font-bold text-gray-800 ${
                          subIndex === 0 ? "pt-8" : ""
                        }`}
                      >
                        {subIndex === 0 && (
                          <div className="flex justify-start items-center">
                            <div className="font-bold">{row.label}</div>
                          </div>
                        )}
                      </div>
                      <div
                        className={`col-span-1 p-4 border-b border-gray-200 text-center text-gray-800 text-sm md:text-base ${
                          subRow.highlight
                            ? "bg-gradient-to-r from-[#2c8d8a] to-[#1e585b] text-white font-bold"
                            : subIndex % 2 === 0
                            ? "bg-[#e3f4ec]"
                            : "bg-[#f3faf6]"
                        }`}
                      >
                        {subRow.label}: {subRow.erpnext}
                      </div>
                      <div
                        className={`col-span-1 p-4 border-b border-gray-200 text-center text-gray-800 text-sm md:text-base ${
                          subRow.highlight
                            ? "bg-gradient-to-r from-[#f75f40] to-[#de441e] text-white font-bold"
                            : subIndex % 2 === 0
                            ? "bg-[#fde2d5]"
                            : "bg-[#fef2ec]"
                        }`}
                      >
                        {subRow.label}: {subRow.zoho}
                      </div>
                      <div
                        className={`col-span-1 p-4 border-b border-gray-200 text-center text-gray-800 text-sm md:text-base ${
                          subRow.highlight
                            ? "bg-gradient-to-r from-[#6bc7de] to-[#457fa4] text-white font-bold"
                            : subIndex % 2 === 0
                            ? "bg-[#e4f5f9]"
                            : "bg-[#f3fbfc]"
                        }`}
                      >
                        {subRow.label}: {subRow.odoo}
                      </div>
                    </motion.div>
                  ))}
                </React.Fragment>
              ) : (
                <motion.div
                  key={row.label}
                  className="contents"
                  variants={tableRowVariants}
                >
                  <div className="col-span-1 p-4  text-left font-bold text-gray-800">
                    {row.label.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < row.label.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`col-span-1 p-4 border-b border-gray-200 text-center text-gray-800 text-sm md:text-base ${
                      rowIndex % 2 === 0 ? row.erpnextBgOdd : row.erpnextBgEven
                    }`}
                  >
                    {row.isIcon ? (
                      <img
                        src={row.erpnext}
                        alt="icon"
                        className="mx-auto h-6"
                      />
                    ) : (
                      row.erpnext
                    )}
                  </div>
                  <div
                    className="col-span-1 p-4 border-b border-gray-200 text-center text-gray-800 text-sm md:text-base"
                    style={{
                      backgroundColor:
                        rowIndex % 2 === 0 ? row.zohoBgOdd : row.zohoBgEven,
                    }}
                  >
                    {row.isIcon ? (
                      <img src={row.zoho} alt="icon" className="mx-auto h-6" />
                    ) : (
                      row.zoho
                    )}
                  </div>
                  <div
                    className="col-span-1 p-4 border-b border-gray-200 text-center text-gray-800 text-sm md:text-base"
                    style={{
                      backgroundColor:
                        rowIndex % 2 === 0 ? row.odooBgOdd : row.odooBgEven,
                    }}
                  >
                    {row.isIcon ? (
                      <img src={row.odoo} alt="icon" className="mx-auto h-6" />
                    ) : (
                      row.odoo
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <div className="lg:hidden mb-8">
          <div className="py-4">
            <select
              id="product-select"
              className="w-full appearance-none bg-gray-50 border-2 border-gray-300 rounded-lg py-2 px-4 text-base font-medium text-gray-700 cursor-pointer transition-all duration-200 hover:bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.25rem",
              }}
              onChange={handleProductChange}
              value={activeProduct}
            >
              <option value="erpnext">ERPNext</option>
              <option value="zoho">Zoho</option>
              <option value="odoo">Odoo</option>
            </select>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct}
              variants={mobileTableVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div
                className="p-6 text-center"
                style={{
                  background:
                    activeProduct === "erpnext"
                      ? "linear-gradient(90deg, #2c8d8a 0%, #1e585b 100%)"
                      : activeProduct === "zoho"
                      ? "linear-gradient(90deg, #f75f40 0%, #de441e 100%)"
                      : "linear-gradient(90deg, #6bc7de 0%, #457fa4 100%)",
                }}
              >
                <img
                  src={
                    activeProduct === "erpnext"
                      ? "/svg/erpnext-white.svg"
                      : activeProduct === "zoho"
                      ? "/svg/zoho.svg"
                      : "/svg/oodo.svg"
                  }
                  alt={activeProduct}
                  className="mx-auto h-22"
                />
              </div>

              <div className="lg:hidden mb-8">
                <table className="w-full bg-white text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        colSpan={2}
                        className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Feature
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((row, rowIndex) =>
                      row.isNested ? (
                        row.subRows.map((subRow, subIndex) => (
                          <tr
                            key={`${row.label}-mobile-${subIndex}`}
                            className={
                              subIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            {subIndex === 0 && (
                              <td
                                className="w-1/4 px-2 py-2 whitespace-normal text-xs font-bold text-gray-900 align-top"
                                rowSpan={row.subRows.length}
                              >
                                {row.label}
                              </td>
                            )}
                            <td
                              className={`px-2 py-2 whitespace-normal text-xs text-gray-800 ${
                                subRow.highlight
                                  ? "bg-gradient-to-r from-[#2c8d8a] to-[#1e585b] text-white font-bold"
                                  : ""
                              }`}
                            >
                              <strong>{subRow.label}:</strong>{" "}
                              {subRow[activeProduct]}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr
                          key={row.label}
                          className={
                            rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="w-1/4 px-2 py-2 whitespace-normal text-xs font-bold text-gray-900">
                            {row.label.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < row.label.split("\n").length - 1 && <br />}
                              </span>
                            ))}
                          </td>
                          <td className="px-2 py-2 whitespace-normal text-xs text-gray-800">
                            {row.isIcon ? (
                              <img
                                src={row[activeProduct]}
                                alt="icon"
                                className="h-4 mx-auto"
                              />
                            ) : (
                              row[activeProduct]
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="px-2">
          <p className="text-gray-600 text-right text-sm mt-6 mb-4">
            **6% avg increase in per user subscription | ***8% avg increase in
            per user subscription
          </p>

          <motion.div
            className="bg-gradient-to-r from-[#2c8d8a] to-[#1e585b] text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg"
            variants={savingsVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="font-bold text-lg md:text-2xl leading-tight">
              Savings of 70% with ERPNext for a period of 5 years
            </span>
            <motion.a
              href="https://calendly.com/sales-dg-n/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.a>
          </motion.div>

          <p className="text-gray-600 text-right text-sm mt-6">
            *GST as applicable
          </p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 mt-16 max-w-4xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-2"
            variants={legendItemVariants}
          >
            <img
              src="/svg/checkmark.svg"
              alt="Fully Supported"
              className="w-6 h-6"
            />
            <span className="text-gray-800 font-semibold text-lg">
              Fully Supported
            </span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            variants={legendItemVariants}
          >
            <img
              src="/svg/partial-checkmark.svg"
              alt="Partially Supported"
              className="w-6 h-6"
            />
            <span className="text-gray-800 font-semibold text-lg">
              Partially Supported
            </span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            variants={legendItemVariants}
          >
            <img
              src="/svg/crossmark.svg"
              alt="Not Supported"
              className="w-6 h-6"
            />
            <span className="text-gray-800 font-semibold text-lg">
              Not Supported
            </span>
          </motion.div>
        </motion.div>
      </div>
      ;
    </motion.section>
  );
}
