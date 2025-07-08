"use client";

import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Navbar from "@/components/in/Navbar";

export default function BookADemo() {
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const dateInput = document.getElementById("date");
      if (dateInput && typeof window !== "undefined") {
        flatpickr(dateInput, {
          minDate: "today",
          disable: [(date) => date.getDay() === 0 || date.getDay() === 6],
          dateFormat: "Y-m-d",
          onChange: (_, dateStr) => {
            setShowTimeSlots(!!dateStr);
          },
        });
      }
    }, 100); // wait for hydration/render

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative scroll-smooth">
      <Navbar />
      <section className="min-h-screen bg-white pt-28 px-4 md:px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">Schedule a Demo</h1>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Thank you for your interest. Please select a convenient slot and
              book a demo of ERP Next with our team.
            </p>

            <form id="erpScheduleForm" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Name<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email<span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-gray-700"
                >
                  Phone Number<span className="text-red-500"> *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  required
                  
                  placeholder="e.g. +91 123-456-7890"
                  pattern="[0-9+\s()-]{7,15}"
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block font-medium text-gray-700"
                >
                  Preferred Date<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="date"
                  name="preferred_date"
                  required
                  
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
              </div>

              {showTimeSlots && (
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Time<span className="text-red-500"> *</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="1pm"
                        name="time_slot"
                        value="1 PM"
                        required
                        
                      />
                      <span className="text-gray-500">1 PM</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="4pm"
                        name="time_slot"
                        value="4 PM"
                      />
                      <span className="text-gray-500">4 PM</span>
                    </label>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500">* mandatory fields</p>
              <button
                type="submit"
                className="mt-2 bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition"
              >
                Send
              </button>
            </form>
          </div>

          <div className="space-y-10 md:ps-10">
            <div>
              <h3 className="text-2xl font-semibold text-teal-700">
                United States
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                12231 178th place N.E.
                <br />
                Redmond, WA, 98052
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-teal-700">Europe</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                Tv. do Fala-Só 13B, 1250-096
                <br />
                Lisboa, Portugal
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-teal-700">India</h3>
              <p className="text-gray-700 text-md leading-relaxed">
                9G, Vaishnavi Cynosure, Telecom Nagar, Gachibowli
                <br />
                Hyderabad, Telangana 500032
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
