"use client";
import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import { Bookmark } from "lucide-react";

// ---------- DATA ----------
const MULTI_FEATURES = [
  {
    icon: "/home.png",
    title: "Legal Compliance",
    details:
      "It ensures compliance with regulations, avoiding legal complications and penalties.",
  },
  {
    icon: "/home.png",
    title: "Trip Cancellation and Interruption",
    details:
      "Protects your financial investment in the trip by reimbursing non-refundable expenses in case of trip cancellation or interruption due to covered reasons.",
  },
  {
    icon: "/home.png",
    title: "Legal and Personal Liability Coverage",
    details:
      "By mitigating financial risks, it enhances your business's ability to weather disruptions.",
  },
  {
    icon: "/home.png",
    title: "Lost or Stolen Belongings",
    details:
      "Displaying a commitment to business protection enhances trust among customers and partners, signalling proactive risk management.",
  },
];

const MULTI_BENEFITS = [
  "Cost-Effective Solutions — comprehensive protection should be affordable, giving peace of mind without breaking the bank.",
  "Tailored for Global Ventures — coverage designed for international escapades, spanning the globe.",
  "Fast & Easy Process",
  "Quick Claim Handle",
  "Save Your Money",
  "Quality Health Insurance & Care",
];

const FAMILY_BENEFITS = [
  "Comprehensive coverage for family members",
  "Emergency medical assistance worldwide",
  "Protection against trip cancellations",
  "Coverage for lost or stolen belongings",
  "24/7 support during travel",
];

// ---------- CARD UI ----------
type MultiFeatureCardProps = {
  icon: string;
  title: string;
  details: string;
};

function MultiFeatureCard({ icon, title, details }: MultiFeatureCardProps) {
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
          <p className="text-gray-700 text-sm leading-relaxed">{details}</p>
          <Link
            href="#hero-section"
            className="w-full sm:w-auto mx-auto border border-[#06396B] text-[#06396B] bg-white flex items-center justify-center gap-2 
                      px-6 py-2 rounded-md text-sm font-medium 
                      hover:bg-[#06396B] hover:text-white transition"
          >
            Buy Now <Bookmark className="w-4 h-4" fill="currentColor" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------- MAIN PAGE ----------
export default function AnnualMultiTripInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating action buttons */}
      <FloatingActions />

      {/* HERO BANNER */}
<section id="hero-section" className="relative overflow-hidden min-h-[60vh] lg:min-h-[75vh]">
        {/* Background Image + Gradient */}
        <div className="absolute inset-0">
          <img
            src="/images/multi-trip-hero.jpg"
            alt="Traveler with suitcase"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#022647] via-[#022647]/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 sm:py-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 mb-5 text-sm">
            <Link href="/" className="hover:text-white">
              insura.ae
            </Link>
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="hover:text-white">Annual Multi Trip</span>
          </div>

          {/* Heading + Description */}
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Annual Multi Trip
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Need any type of policies over the world? Contact us without hesitation.
              Our expert support team will help you.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BELOW HERO */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <img
            src="/services-details.webp"
            className="w-full rounded-xl shadow-md"
            alt="Travel Insurance"
          />
        </div>
      </section>

      {/* MAIN GRID: LEFT (ALL CONTENT) + RIGHT (SIDEBAR) */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          {/* LEFT: FORM + ALL CONTENT (independent) */}
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-1 space-y-16">
            {/* FORM */}
            <section>
              <TravelLeadForm />
            </section>

            {/* SECTION — Intro */}
            <section className="bg-gray-50 py-2">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                  Is Business Insurance Mandatory in Dubai?
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Yes, in many places, including business insurance in Dubai &amp;
                  UAE, it is often a legal requirement. It ensures businesses are
                  financially equipped to handle unforeseen events and protects
                  business owners and employees.
                </p>
              </div>
            </section>

            {/* SECTION — What is Travel Insurance */}
            <section className="py-12 bg-gray-50">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                  What is Travel Insurance?
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Travel insurance ensures you are financially equipped to handle
                  unforeseen events, protecting both business and leisure trips.
                </p>
              </div>
            </section>

            {/* SECTION — Feature Grid (flip cards) */}
            <section className="py-14 bg-gray-50">
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-[#06396B] mb-4">
                  Why is Business Insurance Important?
                </h2>

                <div className="grid sm:grid-cols-2 gap-8">
                  {MULTI_FEATURES.map((feature, i) => (
                    <MultiFeatureCard key={i} {...feature} />
                  ))}
                </div>
              </div>
            </section>

            {/* TEXT + IMAGE + LIST */}
            <section className="py-14 bg-gray-50">
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-[#06396B]">
                  Why is Business Insurance Important?
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <h3 className="font-semibold">1. Cost-Effective Solutions</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe that comprehensive protection should be affordable.
                      Explore the world with peace of mind, knowing that your travel
                      insurance in Dubai will not break the bank.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">2. Tailored for Global Ventures</h3>
                    <p className="text-gray-700 leading-relaxed">
                      From the bustling streets of New York to the serene landscapes
                      of New Zealand, our travel insurance UAE is designed to
                      accompany you on your international escapades, offering coverage
                      that spans the globe.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5">
                    <img
                      src="/Travel_Insurance.webp"
                      className="rounded-xl shadow-md"
                      alt="Illustration"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      Our technicians believe in the value that give you high level of
                      coaching techniques for your better life.
                    </p>

                    <ul className="space-y-2 font-medium text-gray-800">
                      {FAMILY_BENEFITS.map((b, i) => (
                        <li key={i}>✔ {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* LEARN MORE */}
            <section className="py-14 bg-gray-50">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-[#06396B]">
                  Learn more about
                </p>
                <p className="text-2xs font-bold text-[#4B5563]">
                  How to Save Big on Travel Insurance in the UAE.
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT: SIDEBAR (independent, below on mobile) */}
          <aside className="col-span-12 lg:col-span-4 order-2 lg:order-2 space-y-6">
            <div className="relative">
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
          </aside>
        </div>
      </section>
            <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
`}</style>
    </main>
  );
}
