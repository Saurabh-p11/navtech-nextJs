"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundersMessage() {
  return (
    <motion.section
      className="min-h-screen w-full bg-white py-20 px-6 flex justify-center items-center text-center"
      id="foundersMessage"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Shyam Visamsetty is the founding CEO, with widespread experience in
          building platforms with high-velocity project teams. He is a
          technology & entrepreneurial enthusiast solving core business
          problems. After having worked at Qualcomm & Apple in Cupertino, CA, he
          embarked on a journey to become a serial entrepreneur, primarily
          within IT consulting and solutions, leveraging the talent in the USA
          and India. His zeal for innovation and helping companies grow has
          given him the opportunity to lead a team of hard-working, resilient
          engineers who excel everyday.
        </p>

        <div className="mt-10 flex flex-col items-center">
          <Image
            src="/shyam-v.png?p=dntJXicE"
            alt="Shyam Visamsetty"
            width={80}
            height={80}
            className="rounded-full"
          />
          <p className="mt-4 text-lg font-bold text-black">Shyam Visamsetty</p>
          <p className="text-sm text-gray-500">Founder & CEO, Navtech</p>
        </div>
      </div>
    </motion.section>
  );
}
