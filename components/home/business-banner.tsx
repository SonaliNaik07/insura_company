"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Activity,
  Plane,
  Building2,
  Anchor,
  ArrowRight,
} from "lucide-react";

type QuoteTabId = "car" | "health" | "travel" | "business" | "marine";

interface QuoteTabConfig {
  id: QuoteTabId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
  bulletsLeft?: string[];
  bulletsRight?: string[];
  bigTitleOverride?: string;
}

const quoteTabs: QuoteTabConfig[] = [
  {
    id: "car",
    label: "Car",
    icon: Home,
    title: "Car Insurance Quote:",
    description:
      "Drive with confidence knowing iNSURA.ae Powered by PIONEER INSURANCE has you covered with top-tier car insurance, ensuring you’re protected on every journey. Say goodbye to time-consuming insurance processes! With iNSURA in the UAE, you can secure instant best car insurance in UAE in just 30 minutes.",
    href: "/car-insurance",
  },
  {
    id: "health",
    label: "Health",
    icon: Activity,
    title: "Health insurance Quote:",
    description:
      "Stay healthy and worry-free with iNSURA.ae’s Powered by PIONEER INSURANCE health insurance—offering you the best coverage for all your medical needs. Health insurance in UAE & Dubai ensures access to quality medical care, including hospitalization, medications, and preventive services.",
    href: "/health-insurance",
  },
  {
    id: "travel",
    label: "Travel",
    icon: Plane,
    title: "Travel insurance Quote:",
    description:
      "Explore the world with confidence thanks to iNSURA.ae’s Powered by PIONEER INSURANCE travel insurance, covering you from unexpected mishaps on your adventures. Secure your travels with Insura’s reliable travel insurance plans.",
    href: "/travel-insurance",
  },
  {
    id: "business",
    label: "Business",
    icon: Building2,
    title: "Business insurance Quote:",
    description:
      "Protect your enterprise with iNSURA.ae’s Powered by PIONEER INSURANCE business insurance—providing robust coverage to keep your business thriving.",
    href: "/business-insurance",
  },
  {
    id: "marine",
    label: "Marine",
    icon: Anchor,
    bigTitleOverride: "View more insurance Quote:",
    title: "View more insurance Quote:",
    description:
      "Insurance provides protection against potential financial losses and gives peace of mind.",
    href: "/marine-insurance",
    bulletsLeft: [
      "Superior service options",
      "Endless lifetime help",
      "Your best software",
      "Life time support",
    ],
    bulletsRight: [
      "Resolving your concerns with us",
      "We provide awesome services",
      "Solve your problem with us",
      "Addressing issues with us",
    ],
  },
];

export default function InsuranceQuoteSection() {
  const [activeTab, setActiveTab] = useState<QuoteTabId>("car");

  const currentTab = quoteTabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="bg-[#E9EDF3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm md:text-base font-semibold text-[#0B73E0] mb-3">
              Get an Insurance Quote
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#00204A] leading-tight mb-6">
              Confused About Insurance <br className="hidden md:block" />
              Options? Learn More About <br className="hidden md:block" />
              Finding The Perfect Plan!
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {quoteTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all border
                      ${isActive
                        ? "bg-[#0B73E0] border-[#0B73E0] text-white shadow-sm"
                        : "bg-[#031B3A] border-[#031B3A] text-white/90 hover:bg-[#0B73E0]"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-extrabold text-[#00204A]">
                {currentTab.title}
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed text-[#4A4A4A]">
                {currentTab.description}
              </p>

              {/* Marine Bullets */}
              {currentTab.id === "marine" && (
                <div className="grid grid-cols-2 gap-4 text-sm text-[#00204A]">
                  <ul className="space-y-2">
                    {currentTab.bulletsLeft?.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#0B73E0]">✔</span>{item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {currentTab.bulletsRight?.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#0B73E0]">✔</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={currentTab.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-[#0B73E0] text-white text-sm md:text-base font-semibold shadow-md hover:bg-[#075ec0] transition-colors"
                >
                  View More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT BACKGROUND IMAGE */}
          <div className="hidden lg:block">
            <div
              className="w-full h-[550px] bg-cover bg-right bg-no-repeat"
              style={{ backgroundImage: "url('/happy-customer.jpg')" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
