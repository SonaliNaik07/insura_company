"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: "/icons/family-icon.svg", endValue: 6000, suffix: "+", label: "Policy Holder" },
  { icon: "/icons/claim.png", endValue: 600, suffix: "+", label: "Claim Served" },
  { icon: "/icons/satisfaction1.png", endValue: 99, suffix: "%", label: "Satisfaction Rate" },
];

export function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return; // counter only runs when visible

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    const timers: NodeJS.Timeout[] = [];

    stats.forEach((stat, idx) => {
      let current = 0;
      const increment = stat.endValue / steps;

      const timer = setInterval(() => {
        current += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[idx] = Math.floor(current);
          return updated;
        });

        if (current >= stat.endValue) clearInterval(timer);
      }, interval);

      timers.push(timer);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [animate]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-14">

          <img
            src="/insura_white_logo.jpg"
            alt="INSURA Logo"
            className="w-[200px] sm:w-[250px] lg:w-[300px] object-contain"
          />

          <h2
            ref={headingRef}
            className={`text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px] text-[#4A4A4A] leading-[1.3em] text-center max-w-[780px] px-2 transition-all duration-700 ${
              animate ? "animate-slideDown" : "opacity-0"
            }`}
          >
            Small Investments, Great Returns –<br />
            Your Budget-Friendly Insurance<br />
            Solution.
          </h2>

          <img
            src="/icons/star.png"
            alt="star"
            className="w-5 sm:w-6 h-5 sm:h-6 animate-pulse"
          />
        </div>
      
          <img
            src="/icons/star.png"
            alt="star"
            className="w-5 sm:w-6 h-5 sm:h-6 animate-pulse"
          />
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col items-center gap-10">

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-items-center">
            {stats.slice(0, 2).map((stat, idx) => (
              <div key={stat.label}
                className="w-full max-w-[500px] bg-[#F4F9FF] rounded-xl border border-[#DAE9FF] 
                           px-6 sm:px-10 py-6 sm:py-8 shadow-sm flex items-center gap-5 sm:gap-6"
              >
                <Image src={stat.icon} width={55} height={55} alt={stat.label} />

                <div className="w-px h-14 bg-[#0BA4E0] hidden sm:block"></div>

                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[28px] sm:text-[34px] font-bold text-[#00305A]">
                    {counts[idx]}{stat.suffix}
                  </span>
                  <span className="text-[15px] sm:text-[18px] font-medium text-[#00305A] leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="w-full max-w-[500px] bg-[#F4F9FF] border border-[#DAE9FF]
                         rounded-xl px-6 sm:px-10 py-6 sm:py-8 shadow-sm flex items-center gap-5 sm:gap-6"
          >
            <Image src={stats[2].icon} width={55} height={55} alt={stats[2].label} />

            <div className="w-px h-14 bg-[#0BA4E0] hidden sm:block"></div>

            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-[28px] sm:text-[34px] font-bold text-[#00305A]">
                {counts[2]}{stats[2].suffix}
              </span>
              <span className="text-[15px] sm:text-[18px] font-medium text-[#00305A] leading-snug">
                {stats[2].label}
              </span>
            </div>
          </div>
        </div>
    </section>
  );
}
