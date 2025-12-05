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
  { name: "Travel Insurance", icon: Plane, href: "/insurance/travel/travel" },
  { name: "Life Insurance", icon: Users, href: "/insurance/health/life" },
  { name: "House Insurance", icon: Home, href: "/insurance/house" },
  { name: "Car Insurance", icon: Briefcase, href: "/insurance/motor/car" },
  { name: "Health Insurance", icon: Check, href: "/insurance/health/health" },
];

export interface ServiceSidebarProps {
  active?: string;
}

export default function ServiceSidebar({ active }: ServiceSidebarProps) {
  return (
    <aside className="space-y-6 h-fit">
      {/* SERVICES CARD */}
      <div className="bg-[#03284C] rounded-lg text-white shadow-md">
        <div className="px-5 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Our Services</h3>
        </div>

        <div className="px-6 pb-6 pt-5 space-y-4">
          {SERVICE_LINKS.map(({ name, icon: Icon, href }) => {
            const isActive = active === name;
            return (
              <Link
                key={name}
                href={href}
                className={`
                  w-full flex items-center justify-between
                  px-5 py-4 text-sm rounded-lg
                  border border-[#dce5ef]
                  transition-all duration-200
                  ${
                    isActive
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
              </Link>
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
          <a
            href="https://insura.ae/wp-content/uploads/2024/08/Insura-Company-profile-1.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 bg-white text-[#03284C] rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100 transition"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Brochure
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
