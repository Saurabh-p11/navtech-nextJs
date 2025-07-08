"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import LogoSlider from "./LogoSlider";

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const animateCount = (
      end: number,
      setter: (val: number) => void,
      duration = 1000
    ) => {
      let start = 0;
      const increment = end / (duration / 16); // ~60fps
      const step = () => {
        start += increment;
        if (start < end) {
          setter(Math.floor(start));
          requestAnimationFrame(step);
        } else {
          setter(end);
        }
      };
      requestAnimationFrame(step);
    };

    animateCount(200, setCount1);
    animateCount(30, setCount2);
    animateCount(9, setCount3);
  }, []);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center pt-[100px] md:pt-0"
    >
      <div className="flex flex-wrap justify-center items-center h-full bg-white py-12">
        <motion.div 
          className="w-full md:w-[40%] pt-[40px] md:pt-[100px] order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl lg:text-5xl xxl:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Boutique <span className="text-teal-600">Software Engineering</span>{" "}
            Company
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-gray-600 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Highly resilient and globally available team of 80+ software
            engineers. No commitment. Free consultation and 30 day trial.
          </motion.p>
          
          <motion.div 
            className="mt-6 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              className="bg-teal-700 text-white hover:bg-teal-800"
              btnText="Contact Us"
            />
            <Button
              className="bg-white border text-black border-gray-300 px-5 py-2 rounded shadow hover:bg-gray-100"
              btnText="Find Your Industry"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-[60%] mt-0 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex gap-6 items-center justify-center flex-wrap md:mt-10 md:pt-10">
            <motion.div 
              className="custom-orange-gradient text-white rounded-xl p-4 md:p-7 shadow-lg w-27 md:w-54"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg md:text-3xl font-extrabold">{count1}+</div>
              <div className="text-xs sm:text-sm md:text-lg mt-2 leading-tight">
                Projects
                <br />
                Completed
              </div>
            </motion.div>

            <motion.div 
              className="custom-sky-gradient text-white rounded-xl p-4 md:p-7 shadow-lg  w-27 md:w-54"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg md:text-3xl font-extrabold">{count2}+</div>
              <div className="text-xs sm:text-sm md:text-lg mt-2 leading-tight">
                Happy Clients
                <br />
                Worldwide
              </div>
            </motion.div>

            <motion.div 
              className="custom-olive-gradient text-white rounded-xl p-4 md:p-7 shadow-lg  w-27 md:w-54"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg md:text-3xl font-extrabold">
                {count3 < 10 ? `0${count3}` : count3}+
              </div>
              <div className="text-xs sm:text-sm md:text-lg mt-2 leading-tight">
                Years of
                <br />
                Experience
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Image
              src="/banner-landingpage.png"
              alt="Navtech Logo"
              width={650}
              height={450}
              className="mx-auto pt-4"
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="max-w-9xl mx-auto w-full order-3 md:order-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <LogoSlider />
        </motion.div>
      </div>
    </motion.section>
  );
}