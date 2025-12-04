"use client";
import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";

// -------------------------------- Data --------------------------------

const FAMILY_FEATURES = [
  {
    icon: "/home.svg",
    title: "Legal Compliance",
    short:
      "It ensures compliance with regulations, avoiding legal complications and penalties.",
    details:
      "It ensures compliance with regulations, avoiding legal complications and penalties, so your family trip can stay focused on enjoyment instead of paperwork.",
  },
  {
    icon: "/home.svg",
    title: "Trip Cancellation and Interruption",
    short:
      "Protects your financial investment in the trip by reimbursing non‑refundable expenses.",
    details:
      "Protects your financial investment in the trip by reimbursing non‑refundable expenses in case of trip cancellation or interruption due to covered reasons.",
  },
  {
    icon: "/home.svg",
    title: "Legal and Personal Liability Coverage",
    short:
      "Covers legal and personal liability arising from accidents during your journey.",
    details:
      "By mitigating financial and legal risks, it enhances your ability to handle unforeseen incidents while travelling with your family.",
  },
  {
    icon: "/home.svg",
    title: "Lost or Stolen Belongings",
    short:
      "Provides cover for loss or theft of baggage and personal belongings on your trip.",
    details:
      "Displaying a commitment to protecting your belongings enhances trust among your family and helps you manage losses from stolen or misplaced items.",
  },
];

const FAMILY_BENEFITS = [
  "Fast & Easy Process",
  "Quick Claim Handle",
  "Save Your Money",
  "Quality Health Insurance & Care",
];

// ------------------------- FLIP CARD UI --------------------------------

type FamilyFeatureCardProps = {
  icon: string;
  title: string;
  short: string;
  details: string;
};

function FamilyFeatureCard({
  icon,
  title,
  short,
  details,
}: FamilyFeatureCardProps) {
  return (
    <div className="group h-[260px] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 bg-[#06396B] flex flex-col items-center justify-center text-center gap-3 px-6 shadow-md [backface-visibility:hidden]">
          <img src={icon} className="w-10 h-10" alt={title} />
          <p className="text-white font-semibold text-lg">{title}</p>
          <p className="text-white/80 text-sm leading-relaxed">{short}</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center px-8 py-6 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {/* icon on back */}
          <img src={icon} className="w-6 h-6 mb-3" alt={title} />
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {details}
          </p>

          {/* Buy Now with bookmark-style icon */}
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-[#06396B]">
            Buy Now
            <span className="inline-block w-3 h-4 bg-[#06396B]" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------- Main Page --------------------------------

export default function FamilyTravelInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating action buttons */}
      <FloatingActions />

{/* HERO BANNER */}
<section className="relative overflow-hidden min-h-[60vh] lg:min-h-[75vh]">

  {/* Background Image + Gradient */}
  <div className="absolute inset-0">
    <img
      src="/images/family-hero.jpg"
      alt="Family Hero"
      className="w-full h-full object-cover object-right"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#022647] via-[#022647]/90 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 sm:py-32">

    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-white/70 mb-5 text-sm">
      <Link href="/" className="hover:text-white">insura.ae</Link>
      <span className="w-1.5 h-1.5 bg-white rounded-full" />
      <span className="hover:text-white">Family Travel Insurance</span>
    </div>

    {/* Heading + Description */}
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
        Family Travel Insurance
      </h1>

      <p className="text-lg text-white/90 leading-relaxed">
        Need any type of policies over the world you can contact us without any hesitation. 
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
              <ServiceSidebar active="travel" />
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

      {/* SECTION 1 */}
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

      {/* SECTION 2 */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              What is Travel Insurance
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

      {/* FLIP CARDS (Left aligned only) */}
      <section className="py-14 bg-gray-50 -mt-18">
        <div className="max-w-7xl mx-auto px-6">
          {/* Restrict width to left column only */}
          <div className="lg:w-8/12 space-y-10">
            <h2 className="text-3xl font-bold text-[#06396B] mb-10">
              Why is Business Insurance Important?
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {FAMILY_FEATURES.map((feature, i) => (
                <FamilyFeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEXT + IMAGE + LIST */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-bold text-[#06396B]">
            Why is Business Insurance Important?
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:w-8/12">
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

          <div className="grid lg:grid-cols-12 gap-10 lg:w-8/12 items-center">
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
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="text-lg font-semibold text-[#06396B]">
            Learn more about
          </p>
          <p className="text-2xl font-bold text-[#06396B]">
            How to Save Big on Travel Insurance in the UAE.
          </p>
        </div>
      </section>
    </main>
  );
}
