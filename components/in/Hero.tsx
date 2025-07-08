"use client";

import React from "react";
import Image from "next/image";
import erpLogo from "@/public/in/ERPNext.svg";
import erpScreen from "@/public/in/hero-image.svg";
import erpIcon from "@/public/in/erp-next-icon.svg";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Hero() {
  return (
    <section id="home" className="pb-10 bg-white">
      <div className="relative z-20 bg-gradient-to-b from-[#0b7a77] to-[#0f8a84] pt-24 min-h-[70vh] md:min-h-[96vh] overflow-visible flex justify-center items-end">
        <Spotlight />

        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Image
              src={erpLogo}
              alt="ERP Icon"
              width={450}
              height={250}
              className="mx-auto relative z-50 mix-blend-normal drop-shadow-[0_4px_20px_rgba(225,225,225,0.3)] w-full max-w-[200px] md:max-w-[300px] lg:max-w-[450px]"
            />
            <p className="mt-6 text-lg md:text-2xl text-white font-medium">
              #1 ERP Solution for Growing Businesses
            </p>
            <p className="mt-2 text-sm md:text-lg text-white opacity-90">
              We deliver tailored ERP solutions that streamline operations and
              support sustainable growth.
            </p>
            <p className="mt-6 text-lg md:text-2xl font-semibold text-white">
              Unlimited Users. Enterprise Ready
            </p>
            <p className="mt-2 text-sm md:text-lg text-white opacity-90">
              0 to ERP in 7 days - 100% Compliant - Business at fingertips
            </p>
            <a href="/in/book-a-demo">
              <button className="relative mt-6 inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0b7a77] px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Book a Demo
                </span>
              </button>
            </a>
          </div>

          <div className="relative z-20 flex justify-center mt-10 md:mt-16">
            <div className="relative flex justify-center items-end gap-4 md:gap-6 w-full px-2 md:px-0">
              <Image
                src={erpScreen}
                alt="ERP Screenshot 1"
                className="relative bottom-[-28px] w-full max-w-[500px] md:max-w-[1000px]"
              />
              <Image
                src={erpIcon}
                alt="ERP Icon"
                className="absolute -top-1 left-1/3 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 animate-bounce z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
