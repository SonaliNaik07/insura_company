"use client";

import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import TravelFAQ from "@/components/global/TravelFAQ";

// ---------- DATA ----------
const COVERAGE_BOXES = [
  {
    icon: "/icons/medical.svg",
    title: "Medical Emergencies",
    details:
      "Unexpected illness or injury can be costly overseas. Travel insurance can help with hospital stays, treatment and emergency medical evacuation as per the selected plan.",
  },
  {
    icon: "/icons/cancel.svg",
    title: "Trip Cancellations",
    details:
      "Protects your financial investment in the trip by reimbursing non-refundable expenses in case of trip cancellation or interruption due to covered reasons.",
  },
  {
    icon: "/icons/baggage.svg",
    title: "Lost or Delayed Baggage",
    details:
      "If your baggage is delayed, lost, or stolen, your plan can help cover essentials or replacements so your trip continues smoothly.",
  },
  {
    icon: "/icons/travel.svg",
    title: "Travel Interruptions",
    details:
      "Extended delays may bring extra hotel, meal or transport bills. Travel insurance can ease the financial impact of these issues.",
  },
];

type EssentialFlipCardProps = {
  icon: string;
  title: string;
  details: string;
};

function EssentialFlipCard({ icon, title, details }: EssentialFlipCardProps) {
  return (
    <div className="ti-flip-card group">
      <div className="ti-flip-inner">
        {/* Front */}
        <div className="ti-flip-face ti-flip-front bg-[#06396B] rounded-xl flex flex-col items-center justify-center gap-4 shadow-md px-6 py-5 text-center">
          <img src={icon} className="w-10 h-10" alt={title} />
          <h3 className="text-white font-semibold text-base">{title}</h3>
        </div>
        {/* Back */}
        <div className="ti-flip-face ti-flip-back bg-[#06396B] rounded-xl flex flex-col justify-center px-6 py-5 shadow-md text-left">
          <h3 className="text-white font-semibold text-base mb-3">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{details}</p>
        </div>
      </div>
    </div>
  );
}

export default function TravelInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Flip card CSS */}
      <style>{`
        .ti-flip-card { perspective: 1000px; height: 230px; }
        .ti-flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.7s; transform-style: preserve-3d; }
        .ti-flip-card:hover .ti-flip-inner { transform: rotateY(180deg); }
        .ti-flip-face { position: absolute; inset: 0; backface-visibility: hidden; }
        .ti-flip-back { transform: rotateY(180deg); }
      `}</style>

      {/* Floating actions */}
      <FloatingActions />

      {/* HERO */}
      <section className="bg-[#022647] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 items-center gap-12">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs opacity-80">
              insura.ae • Travel Insurance
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold">
              Travel Insurance
            </h1>

            <p className="text-sm max-w-lg leading-relaxed">
              Love travelling? Don’t let worries be your baggage! Insura Travel
              Insurance in Dubai &amp; UAE ensures you explore with confidence.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/travel-hero-main.jpg"
              alt="Traveller enjoying scenic destination"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <TravelLeadForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="lg:top-28 h-fit">
              <ServiceSidebar active="Travel Insurance" />
            </div>

            <div className="bg-[#03284C] text-white px-6 py-4 rounded-md shadow-lg text-sm font-semibold flex justify-between items-center">
              <span>Download Brochure</span>
              <img src="/icons/download-white.png" className="w-4 h-4" />
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="/car.png" alt="Traveller" className="w-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-white font-semibold text-sm">
                📞 +971 4 357 4547
              </div>
            </div>

            <div className="bg-[#06396B] text-white text-xs font-semibold text-center rounded-md py-3">
              Reason&apos;s to choose iNSURA.ae <br /> powered by PIONEER
            </div>

            <div className="grid grid-cols-2 gap-8 text-center text-[#06396B]">
              <div>
                <img src="/icons/building.svg" className="w-10 h-10 mx-auto" />
                <p className="text-xs font-semibold mt-2">
                  Collab with 100+ <br /> Insurance Companies
                </p>
              </div>
              <div>
                <img src="/icons/tick-user.svg" className="w-10 h-10 mx-auto" />
                <p className="text-xs font-semibold mt-2">
                  Trusted by 1,00,000+ <br /> policyholders
                </p>
              </div>
              <div>
                <img src="/icons/support.svg" className="w-10 h-10 mx-auto" />
                <p className="text-xs font-semibold mt-2">
                  24x7 Insurance <br /> Support
                </p>
              </div>
              <div>
                <img src="/icons/peace.svg" className="w-10 h-10 mx-auto" />
                <p className="text-xs font-semibold mt-2">
                  Hassle Free <br /> Process
                </p>
              </div>
            </div>

            <button className="bg-[#06396B] text-white px-6 py-2 text-sm rounded-md font-semibold w-fit mx-auto">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="pb-6 bg-white -mt-170">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-7/12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              From sunrise flights to starry nights, Insura Travel Insurance in UAE shields you every mile.
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Do you prefer spending money on experiences rather than material things?{" "}
              <span className="font-semibold">Travel insurance in Dubai &amp; UAE</span>{" "}
              provides a safety net whether you're exploring Dubai, the UAE, or worldwide.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Whether it's a missed flight, lost baggage, or sudden illness — your trip stays smooth.
            </p>
          </div>
        </div>
      </section>

      {/* FLIP CARDS + PLANS */}
      <section className="pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
            Why Travel Insurance is Essential
          </h2>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {COVERAGE_BOXES.map((box, i) => (
                <EssentialFlipCard key={i} {...box} />
              ))}
            </div>
          </div>

          {/* Plans content you asked to add */}
          <div className="lg:w-7/12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              iNSURA.ae Powered by Pioneer Travel Insurance Plans
            </h2>

            {/* 1. Single Trip */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#06396B]">
                1. Single Trip Travel Insurance:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-base md:text-lg text-gray-700">
                <li>
                  <span className="font-semibold">Comprehensive Coverage:</span>{" "}
                  Protect yourself from trip cancellations, medical emergencies, lost baggage, and more.
                </li>
                <li>
                  <span className="font-semibold">Flexible Options:</span>{" "}
                  Choose the coverage that matches your travel itinerary and activities.
                </li>
                <li>
                  <span className="font-semibold">Peace of Mind:</span>{" "}
                  Travel with confidence, knowing you’re covered for unexpected events.
                </li>
              </ul>
            </div>

            {/* 2. Annual Multi-Trip */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#06396B]">
                2. Annual Multi-Trip Travel Insurance:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-base md:text-lg text-gray-700">
                <li>
                  <span className="font-semibold">Unlimited Trips:</span>{" "}
                  Ideal for frequent travelers, offering coverage for multiple trips throughout the year.
                </li>
                <li>
                  <span className="font-semibold">Convenience:</span>{" "}
                  One policy for all your travels, eliminating the need to buy insurance for each trip.
                </li>
                <li>
                  <span className="font-semibold">Consistent Protection:</span>{" "}
                  Enjoy the same level of coverage on every trip, with no gaps in protection.
                </li>
              </ul>
            </div>

            {/* 3. Family Travel */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#06396B]">
                3. Family Travel Insurance:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-base md:text-lg text-gray-700">
                <li>
                  <span className="font-semibold">Comprehensive Family Coverage:</span>{" "}
                  Protect your entire family with a single policy, covering medical emergencies, trip interruptions, and more.
                </li>
                <li>
                  <span className="font-semibold">Kid-Friendly Benefits:</span>{" "}
                  Special provisions for children, ensuring they receive the care they need.
                </li>
                <li>
                  <span className="font-semibold">Affordable Rates:</span>{" "}
                  Get great value with family-friendly pricing and discounts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Insura – detailed version */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-7/12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              Why Choose Insura for Travel Insurance?
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-gray-700">
              <li>
                <span className="font-semibold">24/7 Global Support:</span>{" "}
                Our dedicated team is available around the clock, including weekends, to assist you no matter where you are in the world.
              </li>
              <li>
                <span className="font-semibold">Affordable Coverage:</span>{" "}
                We provide cost-effective travel insurance plans to suit every budget.
              </li>
              <li>
                <span className="font-semibold">Expert Assistance:</span>{" "}
                Our experienced team offers personalized guidance to help you choose the right plan for your travel needs.
              </li>
              <li>
                <span className="font-semibold">Simple Process:</span>{" "}
                Enjoy a streamlined application and claims process, making it easy to get covered and receive assistance.
              </li>
            </ul>
          </div>
        </div>
      </section>

{/* Image + Why Choose iNSURA.ae block */}
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* left column width wrapper */}
    <div className="lg:w-8/12 grid lg:grid-cols-12 gap-8">
      {/* LEFT IMAGE */}
      <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/images/travel-choose.jpg"
          alt="Traveller with suitcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-7">
        <div className="w-full lg:w-9/12 space-y-4">
          <div className="bg-[#DBF2FF] px-6 py-4 rounded-md shadow">
            <h3 className="text-xl font-bold text-[#03284C]">
              Why Choose iNSURA.ae?
            </h3>
            <p className="text-[11px] font-semibold text-[#03284C] mt-1">
              POWERED BY PIONEER
            </p>
          </div>

          <ul className="space-y-3 text-sm font-semibold text-[#06396B]">
            <li>› Relief for Delays</li>
            <li>› Personalised Expertise</li>
            <li>› Budget-Friendly Plans</li>
            <li>› Effortless Claims</li>
          </ul>

          <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
            At Insura, we make your memories your treasure for life at the most affordable price.
          </p>

          <button className="bg-[#06396B] text-white px-8 py-2 rounded-full text-sm shadow hover:bg-[#042c4f]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Journey Section – bigger text, fully left */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-6/12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#06396B]">
              Start Your Journey Today!
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              So why are you still waiting? Protect your travels with Insura&apos;s
              reliable Travel Insurance in Dubai and UAE.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Contact us for a free consultation and let our experts match you with
              the ideal coverage for your next adventure. With Insura, you&apos;ll
              travel confidently, knowing you&apos;re in safe hands.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              Travel Insurance FAQ
            </h2>
            <TravelFAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
