"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type InsuranceType = {
  image: string;      // top photo
  iconSrc: string;    // small blue icon under cut
  title: string;
  caption: string;    // text above each card
  description: string;
  href: string;
  highlight?: boolean;
};

const insuranceTypes: InsuranceType[] = [
  {
    image: "/car-insurance.jpg",
    iconSrc: "/icons/car-insurance.webp",
    title: "Car Insurance",
    caption: "Car Insurance with Ton's of Benefits !!!",
    description:
      "Drive with confidence knowing iNSURA.ae Powered by PIONEER INSURANCE has you covered with top-tier car insurance, ensuring you're protected on every journey.",
    href: "/insurance/motor/car",
  },
  {
    image: "/health-insurance.jpg",
    iconSrc: "/icons/health-insurance.webp",
    title: "Health Insurance",
    caption: "Health Insurance at Affordable Prices with Additional Perks !!!",
    description:
      "Stay healthy and worry-free with iNSURA.ae Powered by PIONEER INSURANCE health insurance—offering you the best coverage for all your medical needs.",
    href: "/insurance/health",
    highlight: true, // blue border like in screenshot
  },
  {
    image: "/business-insurance.jpg",
    iconSrc: "/icons/business.webp",
    title: "Business Insurance",
    caption: "Most Affordable Business Insurance in the UAE !!!",
    description:
      "Protect your enterprise with iNSURA.ae Powered by PIONEER INSURANCE business insurance—providing robust coverage to keep your business thriving.",
    href: "/insurance/business",
  },
  {
    image: "/life-insurance.jpg",
    iconSrc: "/icons/life.webp",
    title: "Life Insurance",
    caption: "Life Insurance with 1 Million AED Coverage !!!",
    description:
      "Secure your family's future with iNSURA.ae Powered by PIONEER INSURANCE life insurance—providing peace of mind and financial stability when it's needed most.",
    href: "/insurance/health/life",
  },
  {
    image: "/travel-insurance.jpg",
    iconSrc: "/icons/travel.webp",
    title: "Travel Insurance",
    caption: "Travel Worry free with Travel Insurance !!!",
    description:
      "Explore the world with confidence thanks to iNSURA.ae Powered by PIONEER INSURANCE travel insurance, covering you from unexpected mishaps on your adventures.",
    href: "/insurance/travel",
  },
];

export function InsuranceCards() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top label + heading exactly like screenshot */}
        <p className="text-xs md:text-sm font-semibold text-primary tracking-wide">
          One-Stop Insurance Destination
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground leading-snug">
          Explore Our Wide Range of Insurance Services to Protect
          <br className="hidden md:block" />
          What Matters to You Most
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {insuranceTypes.map((item, index) => (
            <div
              key={item.title}
              className="w-full max-w-[360px] flex flex-col items-stretch"
            >
              {/* Caption above each card (blue text) */}
              <p className="text-primary font-semibold text-xs md:text-2xl mb-3">
                {item.caption}
              </p>

              {/* Card */}
              <div
                className={`group relative bg-card rounded-xl border shadow-sm transition-all duration-300 overflow-hidden flex flex-col h-full
                ${ item.highlight
                    ? "border-primary shadow-[0_0_0_1px_rgba(37,99,235,0.35)]"
                    : "border-border"
                } hover:shadow-lg`}
              >

                {/* Top image */}
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Diagonal white cut between image & content */}
                <div
                  className="w-full h-10 bg-card -mt-4"
                  style={{
                    clipPath: "polygon(0 0, 100% 45%, 100% 100%, 0% 100%)",
                  }}
                />

                {/* Main content */}
                <div className="px-6 pb-8 pt-2 text-left flex flex-col gap-3">
                  {/* Icon image - rotates on hover */}
                  <img
                    src={item.iconSrc}
                    alt={`${item.title} icon`}
                    className="w-10 h-10 transform transition-transform duration-500 group-hover:rotate-180"
                  />

                  <h3 className="text-lg font-semibold text-card-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Circular arrow button on the diagonal edge */}
              <Link
                href={item.href}
                className="absolute top-[150px] right-5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#0BA4E0] text-[#0BA4E0] shadow-md transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
