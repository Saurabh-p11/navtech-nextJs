"use client";

import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Navbar from "@/components/in/Navbar";
import CoolModeDemo from "@/components/ui/CustomButton";

export default function BookADemo() {
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_date: "",
    time_slot: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

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
            setFormData((prev) => ({ ...prev, preferred_date: dateStr }));
          },
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\+?[0-9]{7,15}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) ? "" : "Invalid email address." }));
    }
    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) ? "" : "Invalid phone number." }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateEmail(formData.email) || !validatePhone(formData.phone)) return;

  try {
    const res = await fetch("/api/submit-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setResponseMessage("Thanks! Your demo has been scheduled.");

      // ✅ Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferred_date: "",
        time_slot: "",
      });
      setErrors({ email: "", phone: "" });
      setShowTimeSlots(false);

      // Optional: reset flatpickr value manually
      const dateInput = document.getElementById("date") as HTMLInputElement;
      if (dateInput) dateInput.value = "";
    } else {
      setResponseMessage(data.message || "Something went wrong.");
      setTimeout(() => setResponseMessage(""), 5000);
    }
  } catch  {
    setResponseMessage("Server error. Please try again later.");
  }
};


  return (
    <main className="relative scroll-smooth">
      <Navbar />
      <section className="min-h-screen bg-white pt-48 px-4 md:px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Schedule a Demo
            </h1>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Thank you for your interest. Please select a convenient slot and
              book a demo of ERP Next with our team.
            </p>

            <form id="erpScheduleForm" className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700">
                  Name<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  pattern="[A-Za-z\s]{2,50}"
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Email<span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium text-gray-700">
                  Phone Number<span className="text-red-500"> *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="e.g. +91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded text-gray-700"
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="date" className="block font-medium text-gray-700">
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
                        name="time_slot"
                        value="1 PM"
                        required
                        checked={formData.time_slot === "1 PM"}
                        onChange={handleChange}
                      />
                      <span className="text-gray-500">1 PM</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="time_slot"
                        value="4 PM"
                        checked={formData.time_slot === "4 PM"}
                        onChange={handleChange}
                      />
                      <span className="text-gray-500">4 PM</span>
                    </label>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500">* mandatory fields</p>

              <CoolModeDemo type="submit" label="Submit" disabled={!!errors.email || !!errors.phone} />

              {responseMessage && (
                <p className="text-sm text-green-600 mt-4">{responseMessage}</p>
              )}
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
