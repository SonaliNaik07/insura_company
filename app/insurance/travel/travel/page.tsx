"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  PlaneLanding,
  Users2,
  Calendar,
  ExternalLink,
  Building,
  UserCheck,
  Clock,
  Hand,
} from "lucide-react";

import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import TravelFAQ from "@/components/global/TravelFAQ";

// ---------------------------------------------------------------------
// TRAVEL PRODUCTS (using images instead of lucide icons)
// ---------------------------------------------------------------------

const travelProducts = [
  {
    image: "/home.svg",
    title: "Medical Emergencies",
    description:
      "Cover unexpected medical expenses including hospital admission, surgeries, and emergency evacuations while traveling.",
    href: "/insurance/travel/medical-emergency",
  },
  {
    image: "/home.svg",
    title: "Trip Cancellation",
    description:
      "Protect prepaid bookings with reimbursement if your trip gets canceled or interrupted for valid circumstances.",
    href: "/insurance/travel/trip-cancellation",
  },
  {
    image: "/home.svg",
    title: "Lost or Delayed Baggage",
    description:
      "Get compensated for essentials if your belongings get lost, delayed, or damaged during your trip.",
    href: "/insurance/travel/lost-baggage",
  },
  {
    image: "/home.svg",
    title: "Travel Interruption",
    description:
      "Avoid financial burden if you must cut your trip short due to illness, emergency, or disasters.",
    href: "/insurance/travel/interruption",
  },
];

type TravelProductCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

function TravelProductCard({
  image,
  title,
  description,
  href,
}: TravelProductCardProps) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative w-full h-64 sm:h-72 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-[#06396B] rounded-xl shadow-md px-6 py-8 flex flex-col items-center justify-center text-center gap-4 [backface-visibility:hidden]">
          <Image
            src={image}
            alt={title}
            width={60}
            height={60}
            className="w-14 h-14 object-contain"
          />
          <h3 className="text-white font-semibold text-base">{title}</h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-md px-6 py-8 flex flex-col justify-between text-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-gray-700 text-sm leading-relaxed">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-[#06396B] font-semibold text-sm hover:gap-3 transition-all"
          >
            Buy Now <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// WHY iNSURA ACCORDION
// ---------------------------------------------------------------------

const whyItems = [
  {
    title: "Relief for Delays",
    body: "iNSURA.ae covers additional costs due to travel delays, ensuring minimal disruption.",
  },
  {
    title: "Personalised Expertise",
    body: "Benefit from tailored support suited to your unique travel needs.",
  },
  {
    title: "Budget-Friendly Plans",
    body: "Affordable coverage options that protect without breaking your travel budget.",
  },
  {
    title: "Effortless Application and Claims",
    body: "Smooth application & quick claim settlement — less stress, more adventure.",
  },
];

function WhyInsuraAccordion() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-3">
      {whyItems.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={item.title}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 text-left"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="font-semibold text-[#06396B] text-sm md:text-base flex items-center gap-2">
                <span>▶</span> {item.title}
              </span>
              <span className="text-xs text-gray-500">
                {isActive ? "−" : "+"}
              </span>
            </button>
            {isActive && (
              <div className="px-4 pb-3 pt-1 bg-white text-sm md:text-base text-gray-700">
                {item.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------

export default function TravelInsurancePage() {
  return (
    <main className="bg-white text-gray-900 relative">
      {/* FloatingActions MUST have z-index: 50 or higher to be on top */}
      <FloatingActions />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[60vh] lg:min-h-[75vh]">
        <div className="absolute inset-0">
          <img
            src="/bg-Image3.jpg"
            alt="Travel Insurance Hero"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#022647] via-[#022647]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-white/70 mb-5 text-sm">
            <Link href="/" className="hover:text-white">
              insura.ae
            </Link>
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="hover:text-white">Travel Insurance</span>
          </div>

          {/* Heading + Description */}
          <div className="max-w-xl md:max-w-2xl text-white space-y-5 px-2 sm:px-0">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Travel Insurance
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Love travelling? Don’t let worries be your baggage! Insura Travel
              Insurance in Dubai &amp; UAE ensures you explore with confidence.
              Turn your trips into truly carefree adventures!
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          MAIN GRID: LEFT (ALL CONTENT) + RIGHT (SIDEBAR)
         ================================================ */}
      <section id="travel-form" className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LEFT: FORM + ALL CONTENT SECTIONS (INDEPENDENT) */}
          <div className="col-span-12 lg:col-span-8 space-y-16 pb-16 order-2 lg:order-1">
            {/* LEFT: FORM (unchanged) */}
            <div>
              <TravelLeadForm />
            </div>

            {/* EVERYTHING BELOW = SINGLE COLUMN CONTENT (moved inside left col) */}

            {/* INTRO COPY */}
            <section className="lg:w-12/12 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[#06396B]">
                From sunrise flights to starry nights, Insura Travel Insurance
                in UAE shields you every mile.
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Do you prefer spending money on experiences rather than material
                things, but worry about the unexpected?{" "}
                <strong>Travel insurance in Dubai &amp; UAE</strong> can provide
                a safety net for the unexpected, whether you’re exploring Dubai,
                the UAE or beyond.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Whether it’s a missed flight, lost luggage or a sudden illness,
                our comprehensive coverage ensures that your adventures go
                smoothly. You can explore new destinations with peace of mind,
                knowing that Insura Travel Insurance in Dubai &amp; UAE has got
                you covered every step of the way.
              </p>
            </section>

            {/* WHY TRAVEL INSURANCE (4 flip cards) */}
              <section className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-[#06396B]">
                Travel Insurance Coverage Benefits
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 md:gap-10 mt-4">
                {travelProducts.map((item) => (
                  <TravelProductCard key={item.title} {...item} />
                ))}
              </div>
            </section>

            {/* INSURA.ae Powered by Pioneer Travel Insurance Plans */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-[#06396B]">
                INSURA.ae Powered by Pioneer Travel Insurance Plans
              </h2>

              {/* 1. Single Trip */}
              <div>
                <h3 className="font-bold text-[#06396B] text-lg mb-2">
                  1. Single Trip Travel Insurance
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 leading-relaxed list-disc list-inside">
                  <li>
                    <strong>Comprehensive Coverage:</strong> Protect yourself
                    from trip cancellations, medical emergencies, lost baggage
                    and more.
                  </li>
                  <li>
                    <strong>Flexible Options:</strong> Choose the coverage that
                    matches your travel itinerary and activities.
                  </li>
                  <li>
                    <strong>Peace of Mind:</strong> Travel with confidence,
                    knowing you are covered for unexpected events.
                  </li>
                </ul>
              </div>

              {/* 2. Annual Multi Trip */}
              <div>
                <h3 className="font-bold text-[#06396B] text-lg mb-2">
                  2. Annual Multi-Trip Travel Insurance
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 leading-relaxed list-disc list-inside">
                  <li>
                    <strong>Unlimited Trips:</strong> Ideal for frequent
                    travellers, with coverage for multiple trips throughout the
                    year.
                  </li>
                  <li>
                    <strong>Convenience:</strong> One policy for all your
                    travels, eliminating the need to buy insurance for each
                    trip.
                  </li>
                  <li>
                    <strong>Consistent Protection:</strong> Enjoy the same level
                    of coverage on every trip, with no gaps in protection.
                  </li>
                </ul>
              </div>

              {/* 3. Family Travel */}
              <div>
                <h3 className="font-bold text-[#06396B] text-lg mb-2">
                  3. Family Travel Insurance
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 leading-relaxed list-disc list-inside">
                  <li>
                    <strong>Comprehensive Family Coverage:</strong> Protect your
                    entire family with one policy covering medical emergencies,
                    trip interruptions and more.
                  </li>
                  <li>
                    <strong>Kid-Friendly Benefits:</strong> Special protection
                    for children, ensuring they receive the care they need.
                  </li>
                  <li>
                    <strong>Affordable Rates:</strong> Great value with
                    family-friendly pricing and discounts.
                  </li>
                </ul>
              </div>

              {/* Why Choose Insura for Travel Insurance? */}
              <div className="pt-2 space-y-3">
                <h3 className="text-xl font-bold text-[#06396B]">
                  Why Choose Insura for Travel Insurance?
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>24/7 Global Support:</strong> Our dedicated team is
                  available around the clock, including weekends, to assist you
                  no matter where you are in the world.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Affordable Coverage:</strong> We provide
                  cost-effective travel insurance plans to suit every budget.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Expert Assistance:</strong> Our experienced team
                  offers personalised guidance to help you choose the right
                  plan.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Simple Process:</strong> Enjoy a streamlined
                  application and claim process, making it easy to get covered
                  and receive assistance.
                </p>
              </div>
            </section>

            {/* ⭐ Why Choose iNSURA.ae Section */}
            <section className="py-10 bg-white">
              <div className=" space-y-8">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
                  {/* LEFT IMAGE */}
                  <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/outbound-family.jpg"
                      alt="Family traveler"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* RIGHT DETAILS (accordion-style) */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Blue Header Box */}
                    <div className="bg-[#E9F4FF] border border-gray-200 shadow-md rounded-lg px-6 py-4">
                      <h3 className="text-2xl font-extrabold text-[#06396B]">
                        Why Choose iNSURA.ae?
                      </h3>
                      <span className="text-xs font-semibold text-[#06396B] uppercase tracking-wide">
                        Powered by Pioneer
                      </span>
                    </div>

                    <WhyInsuraAccordion />
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits of Outbound Insurance – */}
          <section className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-[#06396B]">
                Benefits of Outbound Insurance –
              </h2>

              <ul className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
                <li>
                  <p className="font-semibold text-[#06396B]">
                    • Entire Travel Safety :-
                  </p>
                  <p>
                    Outbound insurance provides coverage for numerous travel
                    risks like trip cancellations, delays or interruptions,
                    ensuring that unforeseen events won’t financially strain
                    travellers.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-[#06396B]">
                    • Coverage for Medical Emergencies :-
                  </p>
                  <p>
                    It protects tourists from exorbitant medical expenses
                    outside of the United Arab Emirates by offering critical
                    medical coverage for situations overseas, including hospital
                    stays, treatments and emergency evacuations.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-[#06396B]">
                    • Protection Against Baggage Loss and Theft :-
                  </p>
                  <p>
                    This insurance provides comfort if priceless objects are
                    missing while travelling by guarding against the loss or
                    theft of luggage and personal belongings.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-[#06396B]">
                    • Legal Support International :-
                  </p>
                  <p>
                    It offers support with litigation, compensation claims and
                    legal actions conducted abroad in cases when tourists may
                    encounter legal difficulties.
                  </p>
                </li>
              </ul>
            </section>

            {/* Start Your Journey Today */}
          <section className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-[#06396B]">
                Start Your Journey Today!
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                So why are you still waiting? Protect your travels with Insura’s
                reliable Travel Insurance in Dubai and UAE.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Contact us for a free consultation and let our experts match you
                with the ideal coverage for your next adventure. With Insura,
                you’ll travel confidently, knowing you’re in safe hands.
              </p>
            </section>

            {/* FAQ */}
          <section className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-[#06396B] mb-5">
                Travel Insurance FAQ
              </h2>
              <TravelFAQ />
            </section>
          </div>

          {/* RIGHT: SIDEBAR (independent, sticky) */}
          <aside className="col-span-12 lg:col-span-4 order-1 lg:order-2 space-y-8">
                  {/* STICKY SIDEBAR ONLY */}
            <div>
              <ServiceSidebar active="Travel Insurance" />
            </div>

            {/* NOT STICKY — CONTACT CTA BANNER */}
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
                <div className="text-xs uppercase tracking-wide">Contact Us</div>
                <div className="text-sm font-semibold">+971 4 357 4547</div>
              </div>
            </div>

            {/* NOT STICKY — Reasons Section */}
            <div className="space-y-6">
              <div className="bg-[#06396B] text-white px-6 py-4 rounded-lg">
                <h3 className="text-lg font-semibold">
                  Reason&apos;s to choose iNSURA.ae powered by PIONEER?
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-center text-gray-800">
                <div className="flex flex-col items-center gap-3">
                  <Building className="w-10 h-10 md:w-12 md:h-12 text-[#06396B]" />
                  <p className="text-xs font-medium">
                    Collab with 100+ <br />
                    Insurance Companies
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <UserCheck className="w-10 h-10 md:w-12 md:h-12 text-[#06396B]" />
                  <p className="text-xs font-medium">
                    Trusted by 1,00,000+ <br />
                    policyholders
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Clock className="w-10 h-10 md:w-12 md:h-12 text-[#06396B]" />
                  <p className="text-xs font-medium">
                    24x7 Insurance <br />
                    Support
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Hand className="w-10 h-10 md:w-12 md:h-12 text-[#06396B]" />
                  <p className="text-xs font-medium">
                    Hassle Free <br />
                    Process
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
