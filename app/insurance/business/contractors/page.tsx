"use client";

import { useState, type ReactNode } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const coverageCards = [
  {
    title: "Coverage of physical loss or damage",
    description:
      "This includes protection for the contract works (such as buildings or structures under construction), plant and machinery, building materials, and equipment. It covers damage caused by natural calamities (like earthquakes or floods) and accidents (such as fire or collapse).",
  },
  {
    title: "Legal Liability ",
    description:
      "The policy protects against legal liability arising from the contractor's activities during the construction project. This could include damage to third-party property or bodily injury to third parties caused by the construction activities.",
  },
  {
    title: "Third Party Liability",
    description:
      "C.A.R Insurance includes coverage for third-party liability claims. It provides financial protection against legal costs and compensation payments that may arise if a third party (like a member of the public) suffers injury or property damage due to the construction activities.",
  },
  {
    title: "Contractual Liability",
    description:
      "The policy covers liabilities that contractors may assume under the terms of their construction contracts. This ensures compliance with contractual obligations related to insurance coverage, which is often a requirement in construction agreements.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Contractors All Risks (CAR) Insurance?",
    answer: (
      <p>
        Contractors All Risks Insurance provides comprehensive coverage for property damage 
        and third-party injury or damage claims during construction projects. It protects both 
        the contractor and the principal (project owner) against various risks associated with 
        construction work.
      </p>
    ),
  },
  {
    question: "Who needs Contractors All Risks Insurance?",
    answer: (
      <p>
        This insurance is essential for contractors, subcontractors, builders, and property 
        developers engaged in construction projects. It ensures that all parties involved are 
        protected against potential losses or damages that could occur during the construction process.
      </p>
    ),
  },

  {
    question: "Who needs Professional Indemnity Insurance?",
    answer: (
      <p>
        Professional Indemnity Insurance is crucial for a wide range of professionals, including 
        consultants, accountants, architects, engineers, lawyers, healthcare professionals, 
        IT professionals, and creative professionals such as designers and writers.
      </p>
    ),
  },

  {
    question: "What does CAR Insurance cover?",
    answer: (
      <div>
        <p>CAR Insurance typically covers:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            Physical loss or damage to the construction works, including materials and equipment.
          </li>
          <li>
            Third-party liability for property damage or bodily injury arising from the construction activities.
          </li>
          <li>
            Additional covers such as protection against natural disasters, theft, and vandalism.
          </li>
        </ul>
      </div>
    ),
  },

  {
    question: "What types of construction projects are covered?",
    answer: (
      <div>
        <p>CAR Insurance covers a wide range of construction projects, including:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Residential buildings</li>
          <li>Commercial buildings</li>
          <li>Infrastructure projects (roads, bridges, tunnels)</li>
          <li>Industrial projects (factories, warehouses)</li>
        </ul>
      </div>
    ),
  },

  {
    question: "How can I purchase Contractors All Risks Insurance?",
    answer: (
      <p>
        You can purchase CAR Insurance by contacting an insurance broker or provider 
        specializing in construction insurance like iNSURA.AE. They will help you assess 
        your needs, provide quotes, and tailor a policy to suit your project requirements.
      </p>
    ),
  },
];

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ✅ NEW: multi-open state for "Why Choose iNSURA?"
  const [whyOpen, setWhyOpen] = useState<boolean[]>([true, false, false, false]);

  const toggleWhy = (index: number) => {
    setWhyOpen(prev =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  const scrollToHero = () => {
  const el = document.getElementById("contract-hero");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};


  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="contract-hero">
      <PageHero
        breadcrumb="Contractors All Risks"
        title="Contractors All Risks"
        description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
      />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#073158] mb-4">
            Contractors All Risks by Insura.ae
          </h2>
          <p className="text-base md:text-xl text-[#4b4b4b] mb-8">
            Protecting Projects, Empowering Builders:{" "}
            <span className="font-extrabold">Contractor All Risks</span> Insurance in the UAE by Insura.ae
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* BREAKING DOWN POLICY HEADING */}
              <h2 className="text-3xl md:text-4xl font-semibold text-[#003566] mb-4">
                Protect Your Projects Now!
              </h2>

              {/* FLIP CARDS */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageCards.map((card, index) => (
                    <div key={index} className="group [perspective:1200px]">
                      <div
                        className="relative h-72 w-full transition-transform duration-700
                                   [transform-style:preserve-3d]
                                   group-hover:[transform:rotateY(180deg)]"
                      >
                        {/* FRONT */}
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center
                                     rounded-xl bg-[#003566] text-white
                                     [backface-visibility:hidden]"
                        >
                          <Home className="w-10 h-10 mb-4 text-yellow-300" />
                          <p className="text-lg md:text-xl font-semibold text-center">
                            {card.title}
                          </p>
                        </div>

                        {/* BACK */}
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center gap-4
                                     rounded-xl bg-white text-[#656060] border
                                     [backface-visibility:hidden]
                                     [transform:rotateY(180deg)]"
                        >
                          <p className="text-center text-base md:text-lg font-medium px-4">
                            {card.description}
                          </p>

                          <button
                            type="button"
                            className="flex items-center gap-2 px-4 py-2 rounded-md
                                       bg-white text-[#191c61] font-semibold text-sm
                                       border border-[#191c61]
                                       transition-all duration-300
                                       hover:bg-[#191c61] hover:text-white"
                                        onClick={scrollToHero}
                          >
                            <span>Buy Now</span>
                            <span
                              className="h-4 w-4 flex items-center justify-center rounded-[3px]
                                         bg-[#191c61] text-white
                                         transition-all duration-300
                                         hover:bg-white hover:text-[#191c61]"
                            >
                              <Bookmark className="h-3 w-3" strokeWidth={3} />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= IMAGE 1 CONTENT: ALL ABOUT C.A.R + WHY YOU NEED IT ================= */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#003566]">
                  All about C.A.R Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Contractors All Risks Insurance (CAR Insurance) in the UAE is
                  a vital component for contractors and construction companies
                  engaged in various projects across the region. This
                  specialised insurance policy offers comprehensive coverage
                  against a wide range of risks that can potentially impact
                  construction sites, ensuring financial protection and
                  operational continuity.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It provides coverage for physical loss or damage to contract
                  works, which includes buildings, structures, and materials
                  involved in the construction process. This coverage extends to
                  protect against perils such as fire, lightning, explosion,
                  storm, flood, earthquake, theft, vandalism, and accidental
                  damage. These protections are crucial as they safeguard
                  contractors from financial losses that could arise from
                  unforeseen events during the course of construction projects.
                </p>

                <h3 className="text-xl md:text-4xl font-semibold text-[#003566] mt-6">
                  Why You Need Contractors All Risks Insurance in UAE
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Contractors All Risks (CAR) Insurance is crucial for
                  construction projects in the UAE due to several key factors
                  specific to the region. Here’s why CAR Insurance is essential
                  in the UAE, along with its key features:
                </p>

                <h4 className="text-lg md:text-3xl font-bold text-[#424344] mt-4">
                  Reasons Why You Need CAR Insurance in the UAE
                </h4>

                <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
                  <li>
                    <span className="font-bold">
                      Protection Against Natural and Man–Made Risks:
                    </span>{" "}
                    The UAE, like many other regions, faces risks such as fire,
                    storm, flood, earthquakes, theft, and vandalism. CAR
                    Insurance provides essential coverage against these perils,
                    ensuring that construction projects are financially
                    protected from unexpected damages that could otherwise lead
                    to significant financial losses.
                  </li>
                  <li>
                    <span className="font-bold">
                      Compliance with Legal and Contractual Requirements:
                    </span>{" "}
                    Many construction contracts in the UAE require contractors
                    to have CAR Insurance as a mandatory condition. This ensures
                    compliance with local regulatory requirements and
                    contractual obligations that demand insurance coverage
                    against potential risks during the construction phase.
                  </li>
                  <li>
                    <span className="font-bold">
                      Third–Party Liability Coverage:
                    </span>{" "}
                    CAR Insurance includes coverage for legal liabilities
                    arising from bodily injury or property damage to third
                    parties caused by construction activities. In the densely
                    populated urban areas of the UAE, where construction often
                    occurs close to residential and commercial properties, this
                    coverage is essential to protect against claims and
                    lawsuits.
                  </li>
                  <li>
                    <span className="font-bold">
                      Protection of Project Investments:
                    </span>{" "}
                    Construction projects involve substantial investments in
                    materials, equipment, and labour. CAR Insurance safeguards
                    these investments by covering repair and replacement costs
                    for damaged property, ensuring that unexpected setbacks do
                    not jeopardise project timelines or budgets.
                  </li>
                  <li>
                    <span className="font-bold">
                      Risk Management and Safety Enhancement:
                    </span>{" "}
                    Insurance providers offer risk management services and
                    advice to help contractors identify and mitigate potential
                    risks on construction sites. This proactive approach
                    enhances safety protocols and minimises the likelihood of
                    accidents or incidents, promoting a safer working
                    environment.
                  </li>
                </ul>
              </section>

              {/* ================= IMAGE 2 CONTENT: KEY FEATURES OF CAR ================= */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  Key Features of Contractors All Risks Insurance
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <span className="font-bold">
                      Physical Damage Coverage →
                    </span>{" "}
                    Comprehensive protection against damage to contract works,
                    buildings, structures, and materials caused by fire,
                    lightning, explosion, storm, flood, earthquake, theft,
                    vandalism, and accidental damage.
                  </p>
                  <p>
                    <span className="font-bold">
                      Third–Party Liability →
                    </span>{" "}
                    Coverage for legal liabilities arising from bodily injury or
                    property damage to third parties caused by construction
                    activities, including neighbouring properties and the
                    public.
                  </p>
                  <p>
                    <span className="font-bold">
                      Extensions and Optional Coverages →
                    </span>{" "}
                    Customisable options such as coverage for plant and
                    machinery, temporary works, professional fees, removal of
                    debris, and delay in start-up costs tailored to the specific
                    needs of construction projects in the UAE.
                  </p>
                  <p>
                    <span className="font-bold">
                      Risk Management Support →
                    </span>{" "}
                    Expert advice and services to assess and mitigate potential
                    risks, ensuring proactive risk management throughout the
                    project lifecycle.
                  </p>
                  <p>
                    <span className="font-bold">
                      Legal Compliance →
                    </span>{" "}
                    Ensures compliance with local laws and regulatory
                    requirements that mandate insurance coverage for
                    construction projects in the UAE, facilitating smooth
                    project approvals and operations.
                  </p>
                  <p>
                    <span className="font-bold">
                      Financial Security →
                    </span>{" "}
                    Protection against unforeseen financial losses that could
                    disrupt project schedules and budgets, providing contractors
                    with peace of mind to focus on project execution.
                  </p>
                </div>
              </section>

              {/* ============ IMAGE 2 CONTENT – WHY CHOOSE INSURA ============ */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-16">
                {/* LEFT IMAGE */}
                <div className="flex justify-center md:justify-start h-full">
                  <img
                    src="/services-details-img1.webp"
                    alt="Workmen Compensation Insurance"
                    className="rounded-lg w-full max-w-md object-contain"
                  />
                </div>

                {/* RIGHT ACCORDION */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mb-4">
                    Why Choose iNSURA?
                  </h2>

                  <div className="space-y-4">
                    {/* 1 – Specialized UAE Expertise */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#3b3b3c]">
                          Specialized UAE Expertise
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Deep understanding of local construction regulations
                          and market dynamics.
                        </div>
                      )}
                    </div>

                    {/* 2 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#3b3b3c]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Tailored policies covering physical damage,
                          third-party liabilities, and optional extensions.
                        </div>
                      )}
                    </div>

                    {/* 3 – Proactive Risk Management */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#3b3b3c]">
                          Proactive Risk Management
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Expert advice and strategies to minimize risks and
                          enhance project safety.
                        </div>
                      )}
                    </div>

                    {/* 4 – Customer-Centric Service */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(3)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#3b3b3c]">
                          Customer-Centric Service
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[3] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[3] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Dedicated support, prompt claims handling, and clear
                          communication throughout.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Choosing Insura.ae means partnering with a trusted insurer
                    that offers specialized expertise.
                  </p>

                  <button  onClick={scrollToHero} className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4">
                    Buy Now
                  </button>
                </div>
              </section>

              {/* ================= IMAGE 3 CONTENT: HOW CAR INSURANCE SUPPORTS CONTRACTORS ================= */}
              <section className="space-y-4 mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  How C.A.R Insurance Businesses Contractors in UAE:
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">
                    Contractors All Risks (CAR) Insurance
                  </span>{" "}
                  plays a crucial role in supporting businesses across the UAE’s
                  vibrant construction sector. Here’s how this Insurance is
                  instrumental in safeguarding businesses and facilitating their
                  operations:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  In the dynamic landscape of the UAE, where construction
                  projects are a cornerstone of economic growth, CAR Insurance
                  provides essential protection against various risks that can
                  impact businesses. It covers physical damage to contract
                  works, buildings, structures, and materials caused by perils
                  such as fire, theft, natural disasters, and accidental damage.
                  This coverage ensures that businesses can mitigate financial
                  losses and maintain project continuity, even in the face of
                  unforeseen events.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Moreover, CAR Insurance includes comprehensive third-party
                  liability coverage, addressing legal liabilities arising from
                  bodily injury or property damage to third parties caused by
                  construction activities. This aspect is crucial in densely
                  populated urban areas where construction often occurs near
                  residential or commercial properties, ensuring that businesses
                  are shielded from potential litigation and compensation costs.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It also helps businesses meet contractual requirements, as
                  many construction contracts in the UAE mandate contractors to
                  have adequate insurance coverage. By fulfilling these
                  obligations, businesses not only comply with regulatory
                  standards but also enhance their credibility and reliability
                  in the industry.
                </p>
              </section>

              {/* CAR IMAGE BANNER */}
              <section className="mt-16 w-full">
                <img
                  src="/image-39.webp"
                  alt="Top-Notch Vehicle Insurance in UAE"
                  className="w-full rounded-lg object-cover"
                />
              </section>

              {/* ================= IMAGE 4 CONTENT: FURTHERMORE + BEYOND FINANCIAL PROTECTION ================= */}
              <section className="space-y-4 mt-10">
                <p className="text-[#3b3b3c] font-semibold leading-relaxed">
                  Furthermore, CAR Insurance policies offered by insurers like
                  Insura.ae are customisable to meet the specific needs of different
                  projects. Optional extensions can include coverage for plant
                  and machinery, temporary works, professional fees, and more,
                  tailored to the unique risks and requirements of each business
                  venture.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond financial protection, CAR Insurance providers often
                  offer proactive risk management services. These services help
                  businesses identify potential risks, implement safety
                  measures, and mitigate hazards throughout the project
                  lifecycle. This proactive approach not only minimises the
                  likelihood of accidents but also enhances overall project
                  efficiency and safety standards.
                </p>
              </section>

              {/* SUCCESS STORIES WITH VIDEO */}
              <section className="space-y-6 mt-12">
                <div className="mt-6 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/XHOmBV4js_E"
                    title="Customer Success Story Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>

              {/* FAQ */}
              <section className="space-y-4 mt-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566] text-center mb-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-1 max-w-4xl mx-auto">
                  {faqItems.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div key={faq.question}>
                        {/* Question row */}
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#011b32] text-white font-semibold text-xl md:text-xl"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">
                              {isOpen ? "−" : "+"}
                            </span>
                            <span>{faq.question}</span>
                          </span>
                        </button>

                        {/* Answer */}
                        {isOpen && (
                          <div className="bg-white text-muted-foreground px-6 py-4 border border-t-0 border-[#003566]">
                            <div className="text-xl md:text-xle leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN – Sidebar */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
