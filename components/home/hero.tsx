"use client";
import React, { useState, useEffect, useCallback } from "react";

// Types
interface SlideData {
  id: number;
  title: string;
  description: string;
  linkHref: string;
  image: string;
  cardAlignment: "left" | "right";
  bgColorClass: string;
  assetImage?: string;
}

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
  index: number;
}

// Custom Link Icon
const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

// All cards/slides
const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Future from Insura Personalized Quotes!",
    description:
      "With iNSURA.ae Powered by PIONEER, safeguarding your health has never been simpler—get instant customized quote.",
    linkHref: "/quote/health",
    image: "/bg-Image3.jpg",
    cardAlignment: "left",
    bgColorClass: "bg-sky-500",
  },
  {
    id: 2,
    title: "Let's plan your Travel insurance",
    description:
      "Your Health Insurance matter Secure Your Health & Future Get Peace of Mind Today!",
    linkHref: "/quote/travel",
    image: "/1.jpg",
    cardAlignment: "right",
    bgColorClass: "bg-sky-500",
  },
  {
    id: 3,
    title: "Let's plan your Business insurance",
    description:
      "Your Business Insurance matter Secure Your Business & Future Get Peace of Mind Today!",
    linkHref: "/quote/business",
    image: "/business-people-walking-upstairs.jpg",
    cardAlignment: "left",
    bgColorClass: "bg-sky-500",
  },
  {
    id: 4,
    title: "Get Instant insurance",
    description:
      "iNSURA.ae Powered by PIONEER offers unbeatable savings—secure top-rated insurance from Insura.ae",
    linkHref: "/quote/car",
    image: "/BG.jpg",
    cardAlignment: "left",
    bgColorClass: "bg-sky-500",
    assetImage: "/car.png",
  },
];

// Shared animation for every card
const Slide = ({ slide, isActive }: SlideProps) => {
  const cardPosition =
    slide.cardAlignment === "left" ? "justify-start" : "justify-end";

  // -1 = from left, 1 = from right
  const dir = slide.cardAlignment === "left" ? -1 : 1;
  const offscreen = `translateX(${dir * 140}%)`;

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      {/* Background */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover object-center"
      />
      <div
        className={`absolute inset-0 bg-black ${
          slide.id === 4 ? "opacity-10" : "opacity-30"
        }`}
      />

      {/* Cards container */}
      <div
        className={`absolute inset-0 flex items-center ${cardPosition} px-6 lg:px-20`}
      >
        <div className="relative w-full max-w-lg overflow-visible">
          {/* 1️⃣ WHITE CARD (for this slide) */}
          <div
            className="absolute inset-0 rounded-xl bg-white/95 shadow-2xl"
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "600ms",
              transitionTimingFunction: "cubic-bezier(0.24, 0.8, 0.32, 1)",
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? "translateX(0) translateY(0) scale(1)"
                : `${offscreen} translateY(10px) scale(0.98)`,
            }}
          />

          {/* 2️⃣ BLUE CARD (for the same slide, after white) */}
          <div
            className={`relative z-10 shadow-2xl rounded-xl text-white p-6 sm:p-10 ${slide.bgColorClass}`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "650ms",
              transitionTimingFunction: "cubic-bezier(0.24, 0.8, 0.32, 1)",
              transitionDelay: isActive ? "450ms" : "0ms",
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? "translateX(0) translateY(0) scale(1)"
                : `${offscreen} translateY(10px) scale(1)`,
            }}
          >
            {/* 3️⃣ TEXT (for the same slide, falls from top) */}
            <div
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "450ms",
                transitionTimingFunction: "ease-out",
                transitionDelay: isActive ? "800ms" : "0ms",
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? "translateY(0)"
                  : "translateY(-40px)",
              }}
            >
              <h2 className="font-extrabold mb-4 text-3xl sm:text-4xl lg:text-5xl leading-snug">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8">
                {slide.description}
              </p>

              <a
                href={slide.linkHref}
                className="inline-flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-lg font-medium shadow-lg group"
              >
                Buy Now
                <ExternalLinkIcon className="w-6 h-6 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Extra image only for slide 4 */}
{/* Extra image only for slide 4 */}
{slide.id === 4 && (
  <img
    src={slide.assetImage}
    alt="car"
    className={`hidden lg:block absolute -bottom-10 right-[4%] w-[65%] z-20 drop-shadow-xl transition-all duration-700 ${
      isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"
    }`}
  />
)}

    </div>
  );
};

// Main Component – uses Slide for every card in SLIDES
export function BusinessBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % SLIDES.length),
    []
  );

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {SLIDES.map((slide, i) => (
        <Slide
          key={slide.id}
          slide={slide}
          isActive={i === activeIndex}
          index={i}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default BusinessBanner;
