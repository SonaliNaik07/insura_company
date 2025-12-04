"use client";

import Link from "next/link";
import {
  Plane,
  Users,
  Home,
  Briefcase,
  Check,
  ArrowRight,
  Download,
} from "lucide-react";

const SERVICE_LINKS = [
  { name: "Travel Insurance", icon: Plane, href: "/travel-insurance" },
  { name: "Life Insurance", icon: Users, href: "/life-insurance" },
  { name: "House Insurance", icon: Home, href: "/house-insurance" },
  { name: "Car Insurance", icon: Briefcase, href: "/car-insurance" },
  { name: "Health Insurance", icon: Check, href: "/health-insurance" },
];

export interface ServiceSidebarProps {
  active?: string;
}

export default function ServiceSidebar({ active }: ServiceSidebarProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">

      {/* SERVICES CARD */}
      <div className="bg-[#03284C] rounded-lg text-white shadow-md">
        <div className="px-5 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Our Services</h3>
        </div>

        <div className="px-6 pb-6 pt-5 space-y-4">
          {SERVICE_LINKS.map(({ name, icon: Icon }) => {
            const isActive = active === name;
            return (
              <button
                key={name}
                type="button"
                className={`
                  w-full flex items-center justify-between
                  px-5 py-4 text-sm rounded-lg
                  border border-[#dce5ef]
                  transition-all duration-200
                  ${isActive
                    ? "bg-white text-[#03284C] font-semibold"
                    : "bg-[#eef4f9] text-[#03284C] hover:bg-white hover:border-[#b8cadb]"
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  {name}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            );
          })}
        </div>

      </div>

      {/* DOWNLOAD CARD */}
      <div className="bg-[#03284C] rounded-lg text-white shadow-md">
        <div className="px-5 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Download</h3>
        </div>

        <div className="p-4">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 bg-white text-[#03284C] rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100 transition"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Brochure
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
}
