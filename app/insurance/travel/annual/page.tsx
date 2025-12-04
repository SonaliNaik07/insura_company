"use client";

import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";

// ---------- DATA ----------
const MULTI_FEATURES = [
  {
    icon: "/icons/compliance.svg",
    title: "Legal Compliance",
    details:
      "It ensures compliance with regulations, avoiding legal complications and penalties.",
  },
  {
    icon: "/icons/cancellation.svg",
    title: "Trip Cancellation and Interruption",
    details:
      "Protects your financial investment in the trip by reimbursing non-refundable expenses in case of trip cancellation or interruption due to covered reasons.",
  },
  {
    icon: "/icons/liability.svg",
    title: "Legal and Personal Liability Coverage",
    details:
      "By mitigating financial risks, it enhances your business's ability to weather disruptions.",
  },
  {
    icon: "/icons/luggage.svg",
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
export default function AnnualMultiTripInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating action buttons */}
      <FloatingActions />

      {/* HERO */}
      <section className="bg-[#022647] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 items-center gap-12">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs opacity-80">
              insura.ae • Annual Multi Trip
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold">Annual Multi Trip</h1>

            <p className="text-sm max-w-lg leading-relaxed">
              Need any type of policies over the world? Contact us without
              hesitation. Our expert support team will help you.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/multi-trip-hero.jpg"
              alt="Traveler with suitcase"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
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

      {/* FORM + SIDEBAR */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          {/* LEFT: FORM */}
          <div className="lg:col-span-8">
            <TravelLeadForm />
          </div>

          {/* RIGHT: SIDEBAR + IMAGE BELOW */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Sidebar */}
            <div className="lg:top-28 h-fit">
              {/* pass active label or slug as in your ServiceSidebar */}
              <ServiceSidebar active="Travel Insurance" />
            </div>

            {/* Contact CTA Image BELOW Sidebar */}
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

      {/* SECTION — Intro */}
      <section className="bg-gray-50 -mt-40 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 space-y-5">
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
        </div>
      </section>

      {/* SECTION — What is Travel Insurance */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:w-8/12 space-y-5">
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
      <section className="py-14 bg-gray-50 -mt-18">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 space-y-10">
            <h2 className="text-3xl font-bold text-[#06396B] mb-10">
              Why is Business Insurance Important?
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {MULTI_FEATURES.map((feature, i) => (
                <MultiFeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:w-8/12 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
            Benefits of Annual Multi Trip Insurance
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-gray-800">
            {MULTI_BENEFITS.map((benefit, i) => (
              <li key={i}>✔ {benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION — Learn More */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <p className="text-lg md:text-xl font-semibold text-[#06396B]">
            Learn more about
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#06396B]">
            How to Save Big on Travel Insurance in the UAE.
          </p>
        </div>
      </section>
    </main>
  );
}
