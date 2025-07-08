import React, { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const easeFn = cubicBezier(0.25, 0.1, 0.25, 1); // Type-safe easing

const modules = [
  {
    id: "CRM",
    title: "CRM",
    items: [
      { icon: "/svg/lead-management.svg", text: "Lead Management" },
      { icon: "/svg/Opportunity-tracking.svg", text: "Opportunity Tracking" },
      { icon: "/svg/Customer-Management.svg", text: "Customer Management" },
      { icon: "/svg/Workflow-Automation.svg", text: "Workflow Automation" },
      { icon: "/svg/Activity-Tracking.svg", text: "Activity Tracking" },
      { icon: "/svg/Quotation.svg", text: "Quotations" },
      {
        icon: "/svg/Sales-Order-Generation.svg",
        text: "Sales Order Generation",
      },
      { icon: "/svg/Reports-Analytucs.svg", text: "Reports and Analytics" },
    ],
  },
  {
    id: "HRMS",
    title: "HRMS",
    items: [
      {
        icon: "/svg/hrms/employee-lifecycle.svg",
        text: "Employee Lifecycle",
      },
      { icon: "/svg/hrms/leave-management.svg", text: "Leave Management" },
      {
        icon: "/svg/hrms/expense-management.svg",
        text: "Expense Management",
      },
      {
        icon: "/svg/hrms/performance-management.svg",
        text: "Performance Management",
      },
      { icon: "/svg/hrms/payroll-taxation.svg", text: "Payroll & Taxation" },
      { icon: "/svg/hrms/recruitment.svg", text: "Recruitment" },
      { icon: "/svg/hrms/training-event.svg", text: "Training Event" },
      { icon: "/svg/hrms/compliance.svg", text: "Compliance" },
    ],
  },
  {
    id: "Accounting",
    title: "Accounting",
    items: [
      {
        icon: "/svg/accounting/real-time-cash-flow-tracking.svg",
        text: "Real-time Cash Flow Tracking",
      },
      {
        icon: "/svg/accounting/chart-of-accounts.svg",
        text: "Chart of Accounts",
      },
      {
        icon: "/svg/accounting/bank-reconciliation.svg",
        text: "Bank Reconciliation",
      },
      {
        icon: "/svg/accounting/budgeting-forecasting.svg",
        text: "Budgeting & Forecasting",
      },
      {
        icon: "/svg/accounting/accounting-reports.svg",
        text: "Accounting Reports",
      },
      {
        icon: "/svg/accounting/asset-management.svg",
        text: "Asset Management",
      },
      {
        icon: "/svg/accounting/statutory-compliance .svg",
        text: "Statutory Compliance",
      },
      {
        icon: "/svg/accounting/multi-currency-support.svg",
        text: "Multi-Currency Support",
      },
    ],
  },
  {
    id: "Manufacturing",
    title: "Manufacturing",
    items: [
      {
        icon: "/svg/manufacturing/bill-of-materials.svg",
        text: "Bill of Materials (BOM)",
      },
      {
        icon: "/svg/manufacturing/work-order-management.svg",
        text: "Work Order Management",
      },
      {
        icon: "/svg/manufacturing/production-planning.svg",
        text: "Production Planning (PP)",
      },
      { icon: "/svg/manufacturing/job-cards.svg", text: "Job Cards" },
      {
        icon: "/svg/manufacturing/material-requirement-planning.svg",
        text: "Material Requirement Planning (MRP)",
      },
      {
        icon: "/svg/manufacturing/inventory-integration.svg",
        text: "Inventory Integration",
      },
      {
        icon: "/svg/manufacturing/quality-inspection.svg",
        text: "Quality Inspection",
      },
      {
        icon: "/svg/manufacturing/real-time-reporting.svg",
        text: "Real Time Reporting",
      },
    ],
  },
];

const ERPModulesComponent = () => {
  const [activeModule, setActiveModule] = useState<string>("CRM");

  const toggleModule = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? "" : moduleId);
  };

  const mainContainerVariants = {
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

  const accordionItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeFn },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="max-w-9xl mx-auto h-full">
        <motion.div
          className="flex items-center min-h-screen py-14 mt-[-8px] font-inter"
          variants={mainContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto p-6 bg-white">
            <div className="text-center mb-12">
              <motion.h1
                variants={headerVariants}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                <span className="highlighted-heading">One Smart System.</span>
              </motion.h1>

              <motion.h2
                variants={headerVariants}
                className="text-4xl md:text-5xl font-bold text-gray-800"
              >
                Many Powerful Modules.
              </motion.h2>
            </div>

            <motion.div
              className="space-y-4 mb-8"
              variants={mainContainerVariants}
            >
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                  variants={accordionItemVariants}
                >
                  <motion.button
                    onClick={() => toggleModule(module.id)}
                    className={`w-full px-6 py-4 text-left font-semibold text-lg transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      activeModule === module.id
                        ? "bg-gradient-to-r from-[rgb(44,141,138)] to-[rgb(30,88,91)] text-white border-0"
                        : "bg-white text-[rgb(44,141,138)] border-0 hover:bg-gradient-to-r hover:from-[rgb(44,141,138)] hover:to-[rgb(30,88,91)] hover:text-white"
                    }`}
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-xl font-bold">{module.title}</span>

                    {activeModule === module.id ? (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronUp className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ rotate: 180 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6" />
                      </motion.div>
                    )}
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {activeModule === module.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-8"
                          style={{ backgroundColor: "rgb(240, 249, 244)" }}
                        >
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.05,
                                },
                              },
                            }}
                            initial="hidden"
                            animate="visible"
                          >
                            {module.items.map((item, index) => (
                              <motion.div
                                key={index}
                                className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300"
                                variants={contentItemVariants}
                                whileHover={{
                                  scale: 1.03,
                                  backgroundColor: "rgba(255,255,255,0.7)",
                                }}
                              >
                                <div className="flex-shrink-0 w-14 h-12 flex items-center justify-center">
                                  <Image
                                    src={item.icon}
                                    alt={item.text}
                                    width={32}
                                    height={32}
                                  />
                                </div>
                                <span className="text-gray-800 font-medium text-base leading-tight">
                                  {item.text}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center">
              <motion.a
                href="https://calendly.com/sales-dg-n/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[rgb(44,141,138)] to-[rgb(30,88,91)] hover:from-[rgb(30,88,91)] hover:to-[rgb(44,141,138)] text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: easeFn }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ERPModulesComponent;
