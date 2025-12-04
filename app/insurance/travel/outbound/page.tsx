"use client";
import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import TravelFAQ from "@/components/global/TravelFAQ";

// ---------- DATA ----------
const OUTBOUND_FEATURES = [
  {
    icon: "/home.svg",
    title: "Personal Liability",
    details:
      "Accidents can occur, especially in a group. With Insura, personal liability coverage protects your family against unforeseen claims, safeguarding your finances and peace of mind.",
  },
  {
    icon: "/home.svg",
    title: "Repatriation of Family Members",
    details:
      "In case of an emergency, Insura facilitates the swift repatriation of family members, ensuring your loved ones are by your side when it matters most.",
  },
  {
    icon: "/home.svg",
    title: "Emergency Dental Care",
    details:
      "Toothaches can strike anytime! Insura covers emergency dental care, ensuring your family can seek treatment without the added stress of hefty bills while travelling.",
  },
  {
    icon: "/home.svg",
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

      {/* HERO BANNER */}
      <section className="relative overflow-hidden min-h-[60vh] lg:min-h-[75vh]">
        {/* Background Image + Gradient */}
        <div className="absolute inset-0">
          <img
            src="/images/outbound-hero.jpg"
            alt="Traveler with mask and bag"
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
            <span className="hover:text-white">Outbound Travel Insurance</span>
          </div>

          {/* Heading + Description */}
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Outbound Travel Insurance
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Travel opens doors to unforgettable experiences, but unplanned
              events can flip vacations upside down. With Insura’s Outbound
              Travel Insurance, peace of mind travels with you.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* MAIN GRID: LEFT (ALL CONTENT) + RIGHT (SIDEBAR)     */}
      {/* Mobile: LEFT first (order-1), RIGHT second (order-2) */}
      {/* Desktop: 8 / 4 columns                              */}
      {/* ==================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* LEFT: FORM + ALL CONTENT (independent) */}
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-1 space-y-16 pb-16">
            {/* FORM */}
            <section>
              <TravelLeadForm />
            </section>

            {/* ⭐ Section — Feature Grid (in LEFT column, content unchanged) */}
            <section className="py-12 bg-white mt-30">
              <div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#06396B] mb-4 -mt-20">
                    Outbound Insurance for your safe Journey!
                  </h2>
                  <p className="text-sm md:text-base text-gray-700">
                    When UAE citizens or residents travel from their place of
                    residence in the UAE to any other country outside, this plan
                    provides emergency medical care, emergency medical
                    evacuation, repatriation, and security evacuation. The plan
                    maximum and age are the basis for rates. COVID-19 EXPENSES
                    are paid for and handled similarly to medical expenses. For
                    those who have already departed on their trip, not available.
                  </p>

                  <p className="text-sm md:text-base text-gray-700">
                    Travel insurance is a must these days since a pandemic like
                    the coronavirus can financially ruin your trip, protecting
                    your business or leisure travels in case of an unforeseen
                    event. Purchasing travel insurance to cover all of these
                    scenarios is a good decision. You can trust on iNSURA.ae
                    powered by Pioneer to safeguard you with the best
                    international insurers so you may travel worry-free. It is
                    necessary to obtain outbound coverage prior to leaving the
                    UAE.
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#06396B] mb-4 mt-10">
                    How Outbound Travel Insurance Will Save Your Family Adventure
                  </h2>
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
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/outbound-family.jpg"
                      className="w-full h-full object-cover"
                      alt="Family travelling together"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-5">
                    <h2 className="text-4xl md:text-4xl font-bold text-[#06396B]">
                      Why Insura is the Best Choice for Outbound Travel?
                    </h2>

                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      iNSURA.ae Powered by Pioneer offers full coverage to protect
                      travelers from unexpected setbacks, including medical
                      emergencies and trip interruptions.
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
                <div className="space-y-5">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                    Never underestimate the importance of Outbound Travel Insurance
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Outbound insurance provides coverage for numerous travel risks
                    like trip cancellations, delays, or interruptions, ensuring
                    that unforeseen events won’t financially strain travelers.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    It protects tourists from exorbitant medical expenses outside
                    of the United Arab Emirates by offering critical medical
                    coverage for situations overseas, including hospital stays,
                    treatments, and emergency evacuations.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    This insurance provides comfort if priceless objects are
                    missing while traveling by guarding against the loss or theft
                    of luggage and personal belongings.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    It offers support with litigation, compensation claims, and
                    legal actions conducted abroad in cases when tourists may
                    encounter legal difficulties.
                  </p>
                </div>
              </div>
            </section>

            {/* ⭐ Section — Benefits of Outbound Insurance */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="space-y-6 text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                    Benefits of Outbound Insurance -
                  </h2>

                  <ul className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
                    {/* Entire Travel Safety */}
                    <li>
                      <p className="font-semibold text-[#06396B]">
                        Entire Travel Safety :-
                      </p>
                      <p>
                        Outbound insurance provides coverage for numerous travel
                        risks like trip cancellations, delays, or interruptions,
                        ensuring that unforeseen events won’t financially strain
                        travelers.
                      </p>
                    </li>

                    {/* Medical Emergencies */}
                    <li>
                      <p className="font-semibold text-[#06396B]">
                        Coverage for Medical Emergencies :-
                      </p>
                      <p>
                        It protects tourists from exorbitant medical expenses
                        outside of the United Arab Emirates by offering critical
                        medical coverage for situations overseas, including
                        hospital stays, treatments, and emergency evacuations.
                      </p>
                    </li>

                    {/* Baggage Loss */}
                    <li>
                      <p className="font-semibold text-[#06396B]">
                        Protection Against Baggage Loss and Theft :-
                      </p>
                      <p>
                        This insurance provides comfort if priceless objects are
                        missing while traveling by guarding against the loss or
                        theft of luggage and personal belongings.
                      </p>
                    </li>

                    {/* Legal Support */}
                    <li>
                      <p className="font-semibold text-[#06396B]">
                        Legal Support International :-
                      </p>
                      <p>
                        It offers support with litigation, compensation claims,
                        and legal actions conducted abroad in cases when tourists
                        may encounter legal difficulties.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ⭐ Section — FAQ Title */}
            <section className="py-8 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                    Outbound Travel Insurance FAQ
                  </h2>
                  <TravelFAQ />
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: SIDEBAR (independent, always second on mobile) */}
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
    </main>
  );
}
