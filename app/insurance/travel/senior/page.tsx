"use client";

import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";

// ---------- DATA ----------
const SENIOR_FEATURES = [
  {
    icon: "/icons/medical.svg",
    title: "Emergency Medical Expenses",
    details:
      "Your health is our priority. Our coverage includes hospital bills, transportation for care, and treatment, ensuring peace of mind while abroad.",
  },
  {
    icon: "/icons/belongings.svg",
    title: "Loss of Personal Belongings",
    details:
      "Losing your passport or luggage can be distressing. With Insura, you're protected against theft or loss, helping you recover or replace essential items effortlessly.",
  },
  {
    icon: "/icons/accident.svg",
    title: "Personal Accident Cover",
    details:
      "Accidents can happen anywhere. Our plan offers financial support for treatment, easing the burden of unexpected expenses during recovery.",
  },
  {
    icon: "/icons/covid.svg",
    title: "COVID-19 Coverage",
    details:
      "Your safety matters. We provide COVID-19 coverage for necessary medical assistance while travelling.",
  },
];

const SENIOR_EXCLUSIONS = [
  "Pre-existing Health Issues: Coverage typically excludes pre-existing conditions affecting your travel experience.",
  "Advised Travel Restrictions: Claims aren’t honoured for trips to dangerous or flagged areas.",
  "Substance Influence: Accidents under the influence of drugs or alcohol lack coverage.",
  "Inadequate Vaccinations: Claims are denied if vaccinations don’t meet destination requirements.",
];

const SENIOR_BENEFITS = [
  "Tailored Coverage",
  "Comprehensive Benefits",
  "Affordable Premiums",
  "Easy Claims Process",
  "Trusted Partnership",
];

// ---------- CARD UI ----------
type SeniorFeatureCardProps = {
  icon: string;
  title: string;
  details: string;
};

function SeniorFeatureCard({ icon, title, details }: SeniorFeatureCardProps) {
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
export default function SeniorCitizenInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating actions */}
      <FloatingActions />

{/* HERO BANNER */}
<section className="relative overflow-hidden min-h-[55vh]">
  {/* Background + Gradient */}
  <div className="absolute inset-0">
    <img
      src="/bg-Image3.jpg"
      alt="Senior Citizen Insurance"
      className="w-full h-full object-cover object-right"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#002047] via-[#002047]/90 to-transparent" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-white/70 mb-4 text-sm">
      <Link href="/" className="hover:text-white">insura.ae</Link>
      <span className="w-1.5 h-1.5 bg-white rounded-full" />
      <Link href="/insurance/travel/senior" className="hover:text-white">
        Senior Citizen Insurance
      </Link>
    </div>

    {/* Heading + Text */}
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Senior Citizen Insurance
      </h1>

      <p className="text-lg text-white/90 leading-relaxed">
        Do you have a passion for exploring the world, regardless of age? Or are you planning an unforgettable trip with your elderly parents? Senior citizen travel <span className="font-semibold">insurance in UAE</span> is your security shield, designed to keep your adventures worry-free. Let us show you why this coverage is your trusted companion for safe and secure travels.
      </p>
    </div>
  </div>
</section>


      {/* FORM + SIDEBAR (white) */}
      <section className="py-16">
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
                src="/senior-couple.webp"
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

      {/* Intro (white) */}
      <section className="py-12 -mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              What is Senior Citizen Travel Insurance?
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Senior citizen travel insurance in UAE is tailored specifically for
              travellers aged 65 and above, providing essential coverage for their
              unique needs. From unexpected medical emergencies to trip
              cancellations, this policy ensures peace of mind throughout their
              journey.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Unlike standard insurance, senior plans offer enhanced medical
              coverage, affordable premiums, and benefits designed for older
              travellers. When you're planning a trip for your elderly loved one,
              this insurance is a must-have for a safe and secure adventure.
            </p>
            <p className="text-sm md:text-base text-gray-700 font-semibold leading-relaxed">
              Your adventure, our protection—let us cover the unexpected!
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid (white) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B] mb-4">
              How Senior Citizen Travel Insurance Can Make a Difference
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              With senior citizen travel insurance in UAE, you can embark on your
              adventures knowing that you are fully protected against life’s
              unexpected twists and turns.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {SENIOR_FEATURES.map((feature, i) => (
                <SeniorFeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusions (white) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-8/12 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              What Senior Citizen Travel Insurance Does Not Cover
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-700">
              {SENIOR_EXCLUSIONS.map((exclusion, i) => (
                <li key={i}>{exclusion}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Understanding these exclusions helps you prepare better for your
              adventures. With proper planning and awareness, you can embark on
              your journey knowing you’re protected where it truly matters!
            </p>
          </div>
        </div>
      </section>

{/* Why Choose Us (white) */}
<section className="py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="lg:w-8/12 grid lg:grid-cols-12 gap-10 items-center">

      {/* Larger Image Container */}
      <div className="lg:col-span-5 h-[380px] md:h-[400px] lg:h-[220px]  overflow-hidden shadow-lg">
        <img
          src="/senior-couple.webp"
          alt="Senior couple with luggage"
          className="w-full h-full object-cover object-center lg:object-right scale-[1.2] md:scale-[1.1] lg:scale-100 transition-transform duration-500"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="lg:col-span-7 space-y-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#06396B]">
          Choose Insura for Senior Citizen Travel Insurance in UAE
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          At Insura, we understand your unique needs and strive to offer the
          best travel insurance tailored specifically for you. Here’s why
          choosing Insura makes all the difference:
        </p>

        <ul className="space-y-3 text-sm md:text-base text-gray-800">
          {SENIOR_BENEFITS.map((benefit, i) => (
            <li key={i}>✔ {benefit}</li>
          ))}
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

      {/* Learn More (you can keep gray-50 or white; here kept gray-50 for contrast) */}
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
