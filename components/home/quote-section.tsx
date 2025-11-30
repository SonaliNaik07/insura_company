"use client";

import Link from "next/link";
import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* IMAGE LEFT */}
          <div className="relative w-full">
            <div className="w-full h-auto overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/family.webp" // replace with your real image
                alt="Family Happy Insurance"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="text-left">
            {/* Small Blue Top Title */}
            <p className="text-primary font-semibold text-sm md:text-base mb-3">
              Get Insurance in 30 MIN
            </p>

            {/* Main Big Bold Heading - EXACT TEXT */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00204A] leading-tight mb-6">
              Why trust iNSURA.ae<br />
              Powered by Pioneer For<br />
              Your Insurance Needs
            </h2>

            {/* Paragraph Exactly Styled */}
            <p className="text-gray-600 text-[15.5px] leading-relaxed mb-8">
              Choosing iNSURA.ae <span className="font-semibold">Powered by PIONEER INSURANCE</span> means
              choosing a partner dedicated to your peace of mind and security. With a track record of helping
              over 1000+ customers, we understand the importance of personalized insurance solutions.
              Whether it’s life, health, car, travel, or business insurance, we strive to exceed your
              expectations. Our team of caring experts works tirelessly to ensure you receive not just coverage,
              but support and understanding tailored to your unique circumstances. Trust iNSURA.ae
              Powered by PIONEER INSURANCE to protect what matters most to you, because your security and
              satisfaction are our top priorities.
            </p>

            {/* CTA BUTTON */}
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 transition-all"
            >
              Get Quote →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
