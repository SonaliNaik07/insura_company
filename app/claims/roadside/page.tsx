"use client";

import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Phone, Car, Wrench, Battery, Key, Fuel } from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Wrench, title: "Towing Service", description: "24/7 towing to nearest garage or location of choice" },
  { icon: Battery, title: "Battery Jump Start", description: "Quick battery boost to get you moving" },
  { icon: Car, title: "Flat Tyre Change", description: "Roadside tyre replacement service" },
  { icon: Fuel, title: "Fuel Delivery", description: "Emergency fuel delivery when you run out" },
  { icon: Key, title: "Lockout Service", description: "Help when you're locked out of your vehicle" },
  { icon: Phone, title: "24/7 Helpline", description: "Round-the-clock assistance hotline" },
];

const steps = [
  "Call our 24/7 roadside assistance hotline",
  "Provide your policy number and location",
  "Describe the issue you're experiencing",
  "Stay safe and wait for our team to arrive",
];

const rsaFaqItems = [
  {
    question: "What is Roadside Assistance?",
    answer:
      "Roadside Assistance is a service provided by Insurance companies as part of your car insurance policy. It offers help in case your vehicle breaks down or encounters an issue while on the road, such as a flat tire, battery problems, or a minor accident.",
  },
  {
    question: "What services are included in Insura.ae Roadside Assistance?",
    answer:
      "Our Roadside Assistance includes towing, battery jump-starts, flat tire changes, fuel delivery, lockout services, and emergency repairs to get you back on the road quickly.",
  },
  {
    question: "Does Roadside Assistance cover vehicle recovery after an accident?",
    answer:
      "Yes, our Roadside Assistance covers vehicle recovery and towing to the nearest garage if your car is involved in an accident and cannot be driven.",
  },
  {
    question:
      "How quickly can I expect help to arrive after requesting Roadside Assistance?",
    answer:
      "Response times can vary based on location and traffic conditions, but Insura.ae aims to dispatch help within 30 to 60 minutes across most parts of the UAE.",
  },
  {
    question:
      "Is there a limit to the number of Roadside Assistance calls I can make?",
    answer:
      "Most plans include unlimited Roadside Assistance calls. However, it’s best to review your specific policy details or contact our customer service team for clarification.",
  },
];

export default function RoadsideAssistancePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first FAQ open

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main>
      <PageHero
        breadcrumb="Roadside Assistance"
        title="Roadside Assistance"
        description="24/7 support for breakdowns, towing, and emergencies wherever you are in the UAE."
          image="/business.png"
        
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN: text + tables + video + FAQ */}
          <div className="lg:col-span-2 space-y-12 text-justify">

              {/* Top line */}
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-2 text-foreground">
                Give us a few details and we’ll offer the best quotation.
              </p>
              <div className="h-px bg-border" />

              {/* Get Instant Help */}
              <div>
                <h2 className="text-4xl font-extrabold text-foreground mb-6">
                  Get Instant Help
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                  We understand that experiencing car troubles can be stressful and
                  frustrating, especially when you’re in a hurry or far away from
                  home. But don’t worry, Insura.ae is here to help you get back on the
                  road as quickly and safely as possible. Our team of dedicated
                  professionals is available 24/7 to provide you with the roadside
                  assistance you need. Whether you need a jump-start, a tire change, or
                  a tow, we’ve got you covered. So take a deep breath, and know that
                  help is on the way. We’re committed to delivering the highest level of
                  service and customer care, and we won’t rest until you’re back behind
                  the wheel with a smile on your face.
                </p>
              </div>

              {/* TABLE 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#022B69] mb-4">
                  Insurance Company
                </h3>

                <div className="border border-gray-300 overflow-x-auto text-[15px] w-full">
                  <table className="w-full border-collapse table-fixed">
                    <thead>
                      <tr className="bg-[#0c7b3d] text-white">
                        <th className="py-3 px-4 text-left font-semibold border border-gray-300 w-[45%]">
                          Insurance Company
                        </th>
                        <th className="py-3 px-4 text-left font-semibold border border-gray-300 w-[55%]">
                          Emergency Road Side Assistance(AAA)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          SUKOON INSURANCE COMPANY
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          800 6565 (Within the UAE) <br />
                          +971 4 387 6649 (Outside the UAE)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          THE NEW INDIA ASSURANCE COMPANY
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          800247772
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          ARABIAN SCANDINAVIAN INSURANCE COMPANY (PLC) - TAKAFUL
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          8007326 – Dubai, 600 575751 – ABU DHABI
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          LIVA INSURANCE
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          600544060
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          RAK INSURANCE
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          IMC on Toll Free Number: 600575751
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          SALAMA INSURANCE
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          800725262
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          AL BUHAIRAH NATIONAL INSURANCE COMPANY
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          8008181
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          AL SAGR NATIONAL INSURANCE COMPANY
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          8007541
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          GIG INSURANCE
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          800292
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* TABLE 2 */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-[#022B69] mb-4">
                    Insurance Company
                  </h3>

                  <div className="border border-gray-300 overflow-x-auto text-[15px] w-full">
                    <table className="w-full border-collapse table-fixed">
                      <thead>
                        <tr className="bg-[#0c7b3d] text-white">
                          <th className="py-3 px-4 text-left font-semibold border border-gray-300 w-[45%]">
                            Insurance Company
                          </th>
                          <th className="py-3 px-4 text-left font-semibold border border-gray-300 w-[55%]">
                            Emergency Road Side Assistance(AAA)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            ADAMJEE INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            8007326
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            NATIONAL GENERAL INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            8004900
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            ORIENT INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            600508181
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            ORIENTAL INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            600575751
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            NOOR TAKAFUL INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            8004101
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            QATAR INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            Toll Free Number 8004742 or +971 4 2224045 (Dubai) or
                            +971 2 6769466 (Abu Dhabi)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            TOKIO MARINE &amp; NICHIDO FIRE INSURANCE COMPANY
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            600 50 8181
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            RSA INSURANCE
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            800462372
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            AL WATBHBA INSURANCE
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            600575751
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            DUBAI NATIONAL INSURANCE
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            600575751
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            EMIRATES INSURANCE
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            Roadside Assistance 24/7 Emergency Hotline: 80073
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            METHAQ TAKAFUL INSURANCE
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            600565695
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">
                            DUBAI INSURANCE
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            800382467
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* VIDEO SECTION */}
              <div className="mt-12">
                <video
                  src="/new-Comp-1.mp4"
                  controls
                  className="w-full rounded-md shadow-lg"
                />
              </div>

              {/* FAQ SECTION – same column, right after video */}
              <div className="mt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#022B69]">
                  RSA FAQ&apos;s
                </h2>

                <div className="text-sm w-full">
                  {rsaFaqItems.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div key={item.question}>
                        {/* Question row */}
                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          className={`w-full px-6 py-4 flex items-center gap-3 font-semibold text-lg bg-[#03204d] text-white ${
                            index !== 0 ? "border-t border-white/20" : ""
                          }`}
                        >
                          {/* + / − on the LEFT */}
                          <span className="text-2xl leading-none">
                            {isOpen ? "−" : "+"}
                          </span>
                          <span className="text-left">{item.question}</span>
                        </button>

                        {/* Answer */}
                        {isOpen && (
                          <div className="bg-white border border-[#022B69] px-6 py-4 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: sidebar */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
