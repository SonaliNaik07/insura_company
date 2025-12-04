"use client";

import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import TravelFAQ from "@/components/global/TravelFAQ";

// ---------- DATA ----------
const OUTBOUND_FEATURES = [
  {
    icon: "/icons/liability.svg",
    title: "Personal Liability",
    details:
      "Accidents can occur, especially in a group. With Insura, personal liability coverage protects your family against unforeseen claims, safeguarding your finances and peace of mind.",
  },
  {
    icon: "/icons/repatriation.svg",
    title: "Repatriation of Family Members",
    details:
      "In case of an emergency, Insura facilitates the swift repatriation of family members, ensuring your loved ones are by your side when it matters most.",
  },
  {
    icon: "/icons/dental.svg",
    title: "Emergency Dental Care",
    details:
      "Toothaches can strike anytime! Insura covers emergency dental care, ensuring your family can seek treatment without the added stress of hefty bills while travelling.",
  },
  {
    icon: "/icons/luggage.svg",
    title: "Lost Luggage",
    details:
      "Losing luggage can derail a family trip. With Insura, you receive prompt compensation, helping you replace essentials quickly so your adventures can continue.",
  },
];

// ---------- CARD UI ----------
type OutboundFeatureCardProps = {
  icon: string;
  title: string;
  details: string;
};

function OutboundFeatureCard({ icon, title, details }: OutboundFeatureCardProps) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative w-full h-64 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 bg-[#06396B] rounded-xl shadow-md px-6 py-8 flex flex-col items-center justify-center text-center gap-4 [backface-visibility:hidden]">
          <img src={icon} alt={title} className="w-10 h-10" />
          <h3 className="text-white font-semibold text-base">{title}</h3>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-md px-6 py-8 flex flex-col items-center justify-center text-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-[#06396B] font-semibold text-base">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{details}</p>
          <button className="bg-[#06396B] text-white px-4 py-1 rounded text-sm font-medium hover:bg-[#042c4f] transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- MAIN PAGE ----------
export default function OutboundTravelInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating action buttons */}
      <FloatingActions />

      {/* HERO */}
      <section className="bg-[#022647] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="lg:w-8/12 grid lg:grid-cols-12 items-center gap-12">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs opacity-80">
                insura.ae • Outbound Travel Insurance
              </p>

              <h1 className="text-4xl lg:text-5xl font-bold">
                Outbound Travel Insurance
              </h1>

              <p className="text-sm max-w-lg leading-relaxed">
                Travel opens doors to unforgettable experiences, but unplanned
                events can flip vacations upside down. With Insura’s Outbound
                Travel Insurance, peace of mind travels with you.
              </p>
            </div>

            <div className="lg:col-span-5">
              <img
                src="/images/outbound-hero.jpg"
                alt="Traveler with mask and bag"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR (kept EXACTLY as before) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <TravelLeadForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="lg:top-28 h-fit">
              <ServiceSidebar active="Travel Insurance" />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <img
                src="/1.jpg"
                alt="Make your dream life get professional help"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                <p className="text-lg font-semibold leading-snug">
                  Make your dream life get professional help
                </p>
                <div className="text-xs uppercase tracking-wide">
                  Contact Us
                </div>
                <div className="text-sm font-semibold">+971 4 357 4547</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Section — Feature Grid */}
      <section className="py-12 bg-white -mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B] mb-4">
              How Outbound Travel Insurance Will Save Your Family Adventure
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Wondering how iNSURA.ae Powered by Pioneer Outbound Travel Insurance
              can protect your journey? Let’s break it down:
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {OUTBOUND_FEATURES.map((feature, i) => (
                <OutboundFeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Section — Family Travellers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/outbound-family.jpg"
                className="w-full h-full object-cover"
                alt="Family travelling together"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                Why Insura is the Best Choice for Outbound Travel?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                iNSURA.ae Powered by Pioneer offers full coverage to protect
                travelers from unexpected setbacks, including medical emergencies
                and trip interruptions.
              </p>

              <ul className="space-y-3 text-sm md:text-base text-gray-800">
                <li>✔ Family-Friendly Plans</li>
                <li>✔ Quick Claim Settlements</li>
                <li>✔ Global Reach</li>
                <li>✔ Tailored Policies</li>
                <li>✔ Peace of Mind</li>
              </ul>

              <div>
                <button className="bg-[#06396B] text-white px-8 py-2 rounded-md text-sm shadow hover:bg-[#042c4f] transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Section — Importance */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              Never underestimate the importance of Outbound Travel Insurance
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Outbound insurance provides coverage for numerous travel risks like
              trip cancellations, delays, or interruptions, ensuring that
              unforeseen events won’t financially strain travelers.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              It protects tourists from exorbitant medical expenses outside of the
              United Arab Emirates by offering critical medical coverage for
              situations overseas, including hospital stays, treatments, and
              emergency evacuations.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              This insurance provides comfort if priceless objects are missing
              while traveling by guarding against the loss or theft of luggage and
              personal belongings.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              It offers support with litigation, compensation claims, and legal
              actions conducted abroad in cases when tourists may encounter legal
              difficulties.
            </p>
          </div>
        </div>
      </section>

      {/* ⭐ Section — FAQ Title */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              Outbound Travel Insurance FAQ
            </h2>
            <TravelFAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
