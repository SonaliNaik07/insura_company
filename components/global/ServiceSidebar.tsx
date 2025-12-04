"use client";

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
  { name: "Travel Insurance", icon: Plane },
  { name: "Life Insurance", icon: Users },
  { name: "House Insurance", icon: Home },
  { name: "Car Insurance", icon: Briefcase },
  { name: "Health Insurance", icon: Check },
];

export interface ServiceSidebarProps {
  /** name of the currently active service, e.g. "Travel Insurance" or "travel" */
  active?: string;
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ active }) => {
  return (
    <div className="space-y-8 lg:sticky lg:top-28">
      {/* Our Services */}
      <div className="bg-[#03284C] rounded-xl text-white shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Our Services</h3>
        </div>
        <div className="divide-y divide-white/10">
          {SERVICE_LINKS.map((item) => {
            const isActive = item.name === active; // renamed

            const Icon = item.icon;
            return (
              <button
                key={item.name}
                type="button"
                className={`w-full flex items-center justify-between px-6 py-4 text-sm ${
                  isActive
                    ? "bg-white text-[#03284C] font-semibold"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  {item.name}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Download */}
      <div className="bg-[#03284C] rounded-xl text-white shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Download</h3>
        </div>
        <div className="px-6 py-5">
          <button
            type="button"
            className="w-full flex items-center justify-between rounded-md bg-white text-[#03284C] px-4 py-3 text-sm font-semibold shadow-sm hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Brochure
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
