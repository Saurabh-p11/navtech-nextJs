"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import PageLayout from "./ui/PageLayout";

export default function ContactSection() {
  return (
    <PageLayout id="contact" className="h-screen">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen py-10 w-full flex justify-center items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left Column */}
            <div className="flex-1">
              <Mail className="w-10 h-10 text-teal-600 mb-4" />
              <h2 className="text-3xl font-bold text-black mb-4">Let&apos;s Talk</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4 max-w-md">
                We are here to help you. We work in a range of industries and
                specialize in an array of complex technologies. There is no risk
                or commitment. Let&apos;s find a creative way to grow your business
                or solve your problem.
              </p>
              <a
                href="mailto:sales@navtech.io"
                className="text-teal-600 font-medium hover:underline text-lg"
              >
                sales@navtech.io
              </a>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-teal-600">
                  United States
                </h3>
                <p className="text-gray-600">
                  12231 178th Place N.E.<br />
                  Redmond, WA, 98052
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-teal-600">Europe</h3>
                <p className="text-gray-600">
                  Tv. do Fala-Só 13B, 1250-096<br />
                  Lisboa, Portugal
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-teal-600">India</h3>
                <p className="text-gray-600">
                  9G, Vaishnavi Cynosure, Telecom Nagar,<br />
                  Gachibowli, Hyderabad, Telangana 500032
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center text-gray-600 text-sm space-y-2">
            <p>
              Work with us – Mail your resume to{" "}
              <a
                href="mailto:careers@navtech.io"
                className="text-teal-600 font-medium hover:underline"
              >
                careers@navtech.io
              </a>
            </p>
            <p className="text-xs text-gray-500">
              No Risk Trial • All Timezones • 80+ Engineers
            </p>
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
}
