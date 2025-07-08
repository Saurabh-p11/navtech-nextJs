"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(180, 85%, 92%, 0.8) 0%, hsla(180, 70%, 85%, 0.4) 30%, hsla(180, 60%, 75%, 0.15) 60%, hsla(180, 50%, 65%, 0.05) 80%, transparent 100%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(180, 90%, 95%, 0.9) 0%, hsla(180, 80%, 88%, 0.5) 25%, hsla(180, 70%, 80%, 0.2) 50%, hsla(180, 60%, 70%, 0.08) 75%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(180, 95%, 98%, 0.95) 0%, hsla(180, 85%, 90%, 0.6) 20%, hsla(180, 75%, 82%, 0.3) 45%, hsla(180, 65%, 72%, 0.12) 70%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dynamicWidth = isMobile ? 280 : width;
  const dynamicHeight = isMobile ? 800 : height;
  const dynamicSmallWidth = isMobile ? 120 : smallWidth;
  const dynamicTranslateY = isMobile ? -200 : translateY;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    >

      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <div
          style={{
            transform: `translateY(${dynamicTranslateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${dynamicWidth}px`,
            height: `${dynamicHeight}px`,
            filter: "blur(1px)",
            mixBlendMode: "screen",
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${dynamicSmallWidth}px`,
            height: `${dynamicHeight}px`,
            filter: "blur(0.5px)",
            mixBlendMode: "overlay",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${dynamicSmallWidth}px`,
            height: `${dynamicHeight}px`,
            filter: "blur(0.3px)",
            mixBlendMode: "soft-light",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-full h-full z-10"
      >
        <div
          style={{
            transform: `translateY(${dynamicTranslateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${dynamicWidth}px`,
            height: `${dynamicHeight}px`,
            filter: "blur(1px)",
            mixBlendMode: "screen",
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${dynamicSmallWidth}px`,
            height: `${dynamicHeight}px`,
            filter: "blur(0.5px)",
            mixBlendMode: "overlay",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${dynamicSmallWidth}px`,
            height: `${dynamicHeight}px`,
            filter: "blur(0.3px)",
            mixBlendMode: "soft-light",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
