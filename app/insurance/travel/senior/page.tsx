"use client";

import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";
import TravelLeadForm from "@/components/global/TravelLeadForm";
import { Bookmark } from "lucide-react";

// ---------- DATA ----------
const SENIOR_FEATURES = [
  {
    icon: "/home.png",
    title: "Emergency Medical Expenses",
    details:
      "Your health is our priority. Our coverage includes hospital bills, transportation for care, and treatment, ensuring peace of mind while abroad.",
  },
  {
    icon: "/home.png",
    title: "Loss of Personal Belongings",
    details:
      "Losing your passport or luggage can be distressing. With Insura, you're protected against theft or loss, helping you recover or replace essential items effortlessly.",
  },
  {
    icon: "/home.png",
    title: "Personal Accident Cover",
    details:
      "Accidents can happen anywhere. Our plan offers financial support for treatment, easing the burden of unexpected expenses during recovery.",
  },
  {
    icon: "/home.png",
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

// ---------- FLIP CARD UI ----------
function SeniorFeatureCard({ icon, title, details }: any) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative h-64 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-[#06396B] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
          <img src={icon} className="w-10 h-10" alt={title} />
          <p className="text-white font-semibold text-base mt-3">{title}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between text-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-gray-700 text-sm leading-relaxed">{details}</p>
          <Link
            href="#travel-form"
            className="w-full border border-[#06396B] text-[#06396B] bg-white flex items-center justify-center gap-2 px-8 py-2 rounded-md text-sm font-medium hover:bg-[#06396B] hover:text-white transition"
          >
            Buy Now <Bookmark className="w-4 h-4" fill="currentColor" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------- MAIN ----------
export default function SeniorCitizenInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      <FloatingActions />

      {/* HERO */}
      <section id="hero-section" className="relative h-[65vh] overflow-hidden">
        <img
          src="/bg-Image3.jpg"
          className="absolute inset-0 w-full h-full object-cover object-right"
          alt="Senior Citizen Insurance"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002047] via-[#002047]/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 mb-4 text-sm">
            <Link href="/" className="hover:text-white">insura.ae</Link>
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="hover:text-white">Senior Citizen Insurance</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Senior Citizen Insurance
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Do you have a passion for exploring the world, regardless of age? Senior citizen travel insurance in UAE is your security shield…
          </p>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BELOW HERO */}
      <section className="w-full bg-white py-10">
        <img
          src="/services-details.webp"
          className="w-full h-auto object-cover"
          alt="Travel Insurance Coverage"
        />
      </section>

      {/* LEFT + RIGHT WRAPPER */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 px-6 py-14">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-8 space-y-14">
          {/* FORM */}
          <div id="travel-form">
            <TravelLeadForm />
          </div>

          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold text-[#06396B] mb-4">
              What is Senior Citizen Travel Insurance?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Senior citizen travel insurance in UAE is tailored specifically for travellers aged 65 and above…
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your adventure, our protection—let us cover the unexpected!
            </p>
          </div>

          {/* FEATURES */}
          <div>
            <h2 className="text-3xl font-bold text-[#06396B] mb-6">
              Why is Business Insurance Important?
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {SENIOR_FEATURES.map((f, i) => (
                <SeniorFeatureCard key={i} {...f} />
              ))}
            </div>
          </div>

          {/* Exclusions */}
          <div>
            <h2 className="text-3xl font-bold text-[#06396B] mb-5">
              What Senior Citizen Travel Insurance Does Not Cover
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {SENIOR_EXCLUSIONS.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          {/* WHY CHOOSE US */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="/senior-couple.webp"
                className="rounded-xl w-full h-full object-cover shadow-md"
                alt="Senior Couple"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#06396B]">
                  Choose Insura for Senior Citizen Travel Insurance in UAE
                </h2>

                <ul className="space-y-2 font-medium text-gray-800">
                  {SENIOR_BENEFITS.map((b, i) => (
                    <li key={i}>✔ {b}</li>
                  ))}
                </ul>

                <Link
                  href="#hero-section"
                  className="inline-flex border border-[#06396B] text-[#06396B] px-6 py-2 rounded-md text-sm font-medium hover:bg-[#06396B] hover:text-white transition"
                >
                  Buy Now <Bookmark className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* LEARN MORE */}
          <div className="bg-gray-50 p-6 rounded-md">
            <p className="text-lg font-semibold text-[#06396B]">Learn more about</p>
            <p className="font-bold text-gray-700">
              How to Save Big on Travel Insurance in the UAE.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          <ServiceSidebar active="Senior Citizen Insurance" />
          <div className="rounded-xl overflow-hidden shadow-lg relative">
            <img
              src="/senior-couple.webp"
              className="w-full h-full object-cover"
              alt="Call us"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">Make your dream life get professional help</p>
              <p className="text-xs uppercase">Contact Us</p>
              <p className="font-semibold text-sm">+971 4 357 4547</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
