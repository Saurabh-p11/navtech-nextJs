"use client";

import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className=" py-16 sm:py-24 bg-[#f2f9f4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Why Businesses Choose Us
            </h2>

            <div className="space-y-6">
              <ul className="relative pl-8">
                <div className="absolute left-3 top-0 h-full w-0.5 bg-[rgb(20,113,111)]"></div>

                <li className="relative mb-6">
                  <div className="absolute -left-6.5 top-0.5 w-4 h-4 bg-[rgb(20,113,111)] rounded-full border-2 border-white"></div>
                  <p className="text-lg text-[rgb(20,113,111)]">
                    <span className="text-black font-light">Top-Class </span>
                    <strong> ERP Consultation</strong>
                  </p>
                </li>

                <li className="relative mb-6">
                  <div className="absolute -left-6.5 top-0.5 w-4 h-4 bg-[rgb(20,113,111)] rounded-full border-2 border-white"></div>
                  <p className="text-lg text-[rgb(20,113,111)]">
                    <span className="text-black font-light">World-Class </span>
                    <strong> Implementation Support</strong>
                  </p>
                </li>

                <li className="relative mb-6">
                  <div className="absolute -left-6.5 top-0.5 w-4 h-4 bg-[rgb(20,113,111)] rounded-full border-2 border-white"></div>
                  <p className="text-lg text-[rgb(20,113,111)]">
                    <span className="text-black font-light">Tailored for </span>
                    <strong> SMBs and Growing Enterprises</strong>
                  </p>
                </li>

                <li className="relative">
                  <div className="absolute -left-6.5 top-0.5 w-4 h-4 bg-[rgb(20,113,111)] rounded-full border-2 border-white"></div>
                  <p className="text-lg text-[rgb(20,113,111)]">
                    <span className="text-black font-light">Get </span>
                    <strong>started within days </strong>
                    <span className="text-black font-light">
                      and not months
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0 relative w-full h-[300px] md:h-[400px">
            <Image
              src="/svg/why-us.png"
              alt="ERPNext Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
