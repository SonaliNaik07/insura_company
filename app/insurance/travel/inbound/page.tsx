"use client";

import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import TravelFAQ from "@/components/global/TravelFAQ";

// ---------- DATA ----------
const INBOUND_FEATURES = [
  {
    icon: "/home.svg",
    title: "Medical Expenses & Hospitalization Abroad",
    details:
"What if you fall ill or face a medical emergency far from home? With Insura’s coverage, unexpected hospital bills are handled, allowing you to focus on recovery, not expenses.",  },
  {
    icon: "/home.svg",
    title: "Trip Cancellation Protection",
    details:
"Flights can get cancelled, but your trip doesn’t have to be a financial loss. Insura ensures that cancellations don’t ruin your adventure by covering unexpected costs.",  },
  {
    icon: "/home.svg",
    title: "Personal Accident Coverage",
    details:
      "Worrying about accidental injuries while travelling? Insura steps in to support you, covering medical bills and offering peace of mind.",
  },
  {
    icon: "/home.svg",
    title: "Medical Transfer in Case of Illness or Accident",
    details:
      "If a medical evacuation is needed, Insura arranges a swift, safe transfer to the best care, so you’re never left stranded.",
  },
  {
    icon: "/home.svg",
    title: "Delayed Departure (After 12 Hours)",
    details:
      "Missed flights or delayed departures don’t have to spoil your plans. Insura compensates for delays, making sure your journey continues smoothly.",
  },
  {
    icon: "/home.svg",
    title: "Passport Loss Protection",
    details:
      "Lost your passport in a foreign country? Insura covers the costs and provides guidance, ensuring that a simple mishap doesn’t derail your adventure.",
  },
];

// ---------- CARD UI ----------
type InboundFeatureCardProps = {
  icon: string;
  title: string;
  details: string;
};

function InboundFeatureCard({ icon, title, details }: InboundFeatureCardProps) {
  return (
    <div className="group [perspective:1000px]">
      {/* only change: h-64 -> h-80 */}
      <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
export default function InboundTravelInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating action buttons */}
      <FloatingActions />

{/* HERO BANNER */}
<section className="relative overflow-hidden min-h-[60vh] lg:min-h-[75vh]">
  
  {/* Background Image + Gradient */}
  <div className="absolute inset-0">
    <img
      src="/bg-Image3.jpg"
      alt="Family enjoying safe travel"
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
      <span className="hover:text-white">Inbound Travel Insurance</span>
    </div>

    {/* Heading + Description */}
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
        Inbound Travel Insurance
      </h1>

      <p className="text-lg text-white/90 leading-relaxed">
        So, you’ve finally booked that solo trip to a far-off destination,
        but what about those unpredictable bumps that could turn your
        dream getaway into a stressful saga?
      </p>
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

      {/* ⭐ Section — Feature Grid (Left Only) */}
      <section className="pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-7/12 space-y-6">
  
             <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
Why Inbound Travel Insurance?
            </h2>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
What if securing Insura’s Inbound Travel Insurance is the only thing between you and your ideal journey? Ready to discover how to safeguard every moment? Keep reading – your solutions are here!
            </p> 
  
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
Exploring the world alone is exhilarating, but without proper protection, trip cancellations, luggage delays, or sudden medical emergencies can turn your dream journey into a nightmare. Imagine being miles away from home, managing these problems all on your own. That’s where iNSURA’s powered by Pioneer  Inbound Travel Insurance steps in. 
            </p>
<p className="text-sm md:text-base font-semibold italic text-gray-600 leading-relaxed">
  It’s more than just a policy; it’s your invisible shield, safeguarding your every move.
</p>


             <p className="text-sm md:text-base text-gray-700 leading-relaxed">
Why stress over what could go wrong when you can travel with the peace of mind that comes from knowing you’re covered? Insura ensures that when the unexpected happens, you’re not alone. Instead, you can focus on the thrill of discovery, free from worry. Ready to turn those travel hiccups into distant memories? Trust iNSURA powered by Pioneer to keep your journey safe and seamless, so you can chase experiences, not problems!            </p>
 

            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              How Inbound Travel Insurance Saves Your Journey
            </h2>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Wondering how iNSURA.ae powered by Pioneer Inbound Travel
              Insurance can turn potential travel disasters into mere hiccups?
              Let’s break it down:
            </p>

            {/* increased gap because cards are bigger */}
            <div className="grid sm:grid-cols-2 gap-10 mt-6">
              {INBOUND_FEATURES.map((feature, i) => (
                <InboundFeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Section — Solo Travellers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-7/12 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
              {/* LEFT IMAGE */}
              <div className="sm:col-span-5 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/inbound.webp"
                  className="w-full h-full object-cover"
                  alt="Solo Traveller Girl"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="sm:col-span-7 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-[#06396B]">
                  Why Insura is the Best Choice for Solo Travellers?
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Insura offers comprehensive coverage to protect solo travelers
                  from unexpected setbacks, including medical emergencies and
                  trip interruptions.
                </p>

                <ul className="space-y-3 text-sm md:text-base text-gray-800">
                  <li>✔ Instant Medical Assistance</li>
                  <li>✔ Full Trip Cancellation Refunds</li>
                  <li>✔ Accident Coverage Anytime, Anywhere</li>
                  <li>✔ Compensation for Flight Delays</li>
                  <li>✔ Support for Passport Loss</li>
                </ul>

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
        <div className="px-6 lg:px-12 lg:w-7/12 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
            Never underestimate the importance of Inbound Travel Insurance
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            When you travel to the United Arab Emirates, inbound travel
            insurance protects you against unplanned medical illnesses and
            accidents.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            The cost of emergency medical care and repatriation costs are
            covered as basic benefits. Please see your insurance policy plan for
            further information. As soon as you've made the initial deposit for
            your trip, you should buy travel insurance. The sooner you buy, the
            sooner your vacation is protected by coverage.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Individual journeys up to 92 days each trip are covered by our
            yearly inbound travel insurance package. During the insurance
            period, an unlimited number of journeys may be taken, up to the
            maximum number of days paid per trip.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            You should have a stress-free, amazing trip to the United Arab
            Emirates. And that’s exactly what our inbound travel insurance is
            meant to provide.
          </p>
        </div>
      </section>

      {/* ⭐ Section — FAQ Title (left aligned) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
              Inbound Travel Insurance FAQ
            </h2>
            <TravelFAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
