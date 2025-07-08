"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function LogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const logos = [
    "globalu.png",
    "buildsquad.png",
    "imx.png",
    "makusafe.png",
    "nectar-team.png",
    "metaapply.png",
    "kaveri.png",
    "grooverpacker.png",
  ];

  const fullLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; 

    const smoothScroll = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
        container.scrollLeft = container.scrollWidth / 3;
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    // Start from 1st duplicate to hide reset flicker
    container.scrollLeft = container.scrollWidth / 3;

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-white pt-4 pb-8 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-12 overflow-x-scroll no-scrollbar px-8 scroll-smooth"
      >
        {fullLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] h-[90px] flex items-center justify-center"
          >
            <Image
              src={`/${logo}`}
              alt={logo.replace(".png", "")}
              width={140}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
