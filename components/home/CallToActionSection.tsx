"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="relative bg-[#0080FF] text-white py-16 md:py-20 overflow-hidden">

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/zig-zag.png"
          alt="cta-background"
          fill
          className="object-contain md:object-cover opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT SIDE CONTENT */}
        <div className="text-center md:text-left w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-snug md:leading-tight">
            Get INSURANCE at <br /> most affordable price
          </h2>
        </div>

        {/* Vertical Divider – hide on small screens */}
        <div className="hidden md:block h-32 w-[2px] bg-white/60"></div>

        {/* RIGHT SIDE CONTENT */}
        <div className="text-center md:text-left max-w-[360px] w-full">
          <p className="text-white text-[14px] sm:text-[15px] leading-relaxed mb-5">
            Focus on growth with iNSURA.ae’s Powered by PIONEER tailored insurance solutions.
            Join over 1000 satisfied customers.
          </p>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-white/80 mb-[2px]">Take action now!</p>
              <a
                href="tel:+971585229332"
                className="text-base sm:text-lg font-bold tracking-wide whitespace-nowrap"
              >
                +971 585229332
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
