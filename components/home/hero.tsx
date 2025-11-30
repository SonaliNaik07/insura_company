"use client"
import React, { useState, useEffect, useCallback } from 'react';

// Types
interface SlideData {
  id: number;
  title: string;
  description: string;
  linkHref: string;
  image: string;
  cardAlignment: 'left' | 'right';
  bgColorClass: string; 
  assetImage?: string;
}

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
  index: number;
}

// Custom Link Icon (No external dependency)
const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

// SLIDES DATA
const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Future from Insura Personalized Quotes!",
    description: "With iNSURA.ae Powered by PIONEER, safeguarding your health has never been simpler—get instant customized quote.",
    linkHref: "/quote/health",
    image: "/bg-Image3.jpg",
    cardAlignment: 'left',
    bgColorClass: 'bg-sky-500',
  },
  {
    id: 2,
    title: "Let's plan your Travel insurance",
    description: "Your Health Insurance matter Secure Your Health & Future Get Peace of Mind Today!",
    linkHref: "/quote/travel",
    image: "/1.jpg",
    cardAlignment: 'right',
    bgColorClass: 'bg-sky-500',
  },
  {
    id: 3,
    title: "Let's plan your Business insurance",
    description: "Your Business Insurance matter Secure Your Business & Future Get Peace of Mind Today!",
    linkHref: "/quote/business",
    image: "/business-people-walking-upstairs.jpg",
    cardAlignment: 'left',
    bgColorClass: 'bg-sky-500',
  },
  {
    id: 4,
    title: "Get Instant insurance",
    description: "iNSURA.ae Powered by PIONEER offers unbeatable savings—secure top-rated insurance from Insura.ae",
    linkHref: "/quote/car",
    image: "/BG.jpg",
    cardAlignment: 'left',
    bgColorClass: 'bg-sky-500',
    assetImage: "/car.png",
  }
];

// Slide Component (Responsive + Fix overflow)
const Slide = ({ slide, isActive }: SlideProps) => {
  const cardPosition = slide.cardAlignment === "left" ? "justify-start" : "justify-end";

  return (
    <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
      
      {/* Background Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover object-center"
      />
      <div className={`absolute inset-0 bg-black ${slide.id === 4 ? "opacity-10" : "opacity-30"}`} />

      {/* CONTENT CARD */}
      <div className={`absolute inset-0 flex items-center ${cardPosition} px-6 lg:px-20`}>
        <div className={`shadow-2xl rounded-xl text-white p-6 sm:p-10 w-full max-w-lg transition-all duration-700 transform
          ${slide.bgColorClass}
          ${isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
        `}>
          <h2 className="font-extrabold mb-4 text-3xl sm:text-4xl lg:text-5xl leading-snug">{slide.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8">{slide.description}</p>

          <a href={slide.linkHref} className="inline-flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-lg font-medium shadow-lg group">
            Buy Now
            <ExternalLinkIcon className="w-4 h-4 text-sky-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* CAR Layer (only Slide 4) */}
      {slide.id === 4 && (
        <img
          src={slide.assetImage}
          alt="car"
          className={`hidden lg:block absolute bottom-0 right-0 w-[50%] transition-all duration-700
          ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        />
      )}
    </div>
  );
};

// Main Component
export function BusinessBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex(i => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <Slide key={slide.id} slide={slide} isActive={i === activeIndex} index={i} />
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${i === activeIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default BusinessBanner;
