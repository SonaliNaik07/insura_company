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
    title: "Loss or Damage to Goods ",
    description:
      "Protection against physical loss or damage during transit, including loading and unloading.",
  },
  {
    title: "Natural Disasters",
    description:
      "Coverage for perils like storms, earthquakes, floods, and other natural events.",
  },
  {
    title: "Theft and Piracy",
    description:
      "Protection against theft, hijacking, and piracy during transit.",
  },
  {
    title: "Accidents",
    description:
      "Coverage for damages due to accidents such as collisions, overturning, and grounding.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Marine Cargo Insurance?",
    answer: (
      <p>
        Marine cargo insurance covers loss or damage to goods during transit by
        sea, air, or land. It protects against various risks such as natural
        disasters, theft, and accidents.
      </p>
    ),
  },
  {
    question: "Why do my business need Marine Cargo Insurance?",
    answer: (
      <p>
        Marine cargo insurance is essential to protect your financial investment
        in goods during transit. It ensures you are compensated for losses or
        damages, providing financial stability and peace of mind.
      </p>
    ),
  },
  {
    question: "What does Marine Cargo Insurance cover?",
    answer: (
      <p>
        It typically covers loss or damage due to natural disasters, theft,
        piracy, accidents, and general average.
      </p>
    ),
  },
  {
    question: "Is Marine Cargo Insurance mandatory in the UAE?",
    answer: (
      <p>
        While not legally required, marine cargo insurance is highly recommended
        for businesses involved in international trade to mitigate financial
        risks.
      </p>
    ),
  },
  {
    question: "How do I choose the right Marine Cargo Insurance provider?",
    answer: (
      <p>
        Consider factors such as the provider’s experience, the
        comprehensiveness of their coverage, their claims process efficiency,
        and customer reviews. It is also beneficial to consult with an insurance
        advisor to ensure you select the best policy for your needs.
      </p>
    ),
  },
];

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [whyOpen, setWhyOpen] = useState<boolean[]>([true, false, false, false]);

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  const scrollToHero = () => {
  const el = document.getElementById("marine-hero");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="marine-hero">
      <PageHero
        breadcrumb="Marine Cargo Insurance"
        title="Marine Cargo Insurance"
        description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
      />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#003566] mb-4">
            Save Your Cargo with Marine Cargo Insurance
          </h2>
          <p className="text-base md:text-2xl text-[#4b4b4b] mb-8">
            Secure your shipments with Insura.ae’s <span className="text-[#494747] font-bold">Marine Cargo Insurance.</span>
            Protecting your goods across oceans, ensuring peace of mind and
            safety.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* FLIP CARDS SECTION */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
                Insure Your Goods Transportation
              </h2>

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

              {/* ================= NEW SECTION 1: ALL ABOUT + KEY FEATURES ================= */}
              <section className="space-y-6 mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  All about Marine Cargo Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Marine Cargo Insurance is a type of insurance that provides
                  coverage for goods being transported by sea, air, or land. It
                  protects against loss or damage to cargo due to various risks
                  such as natural disasters, accidents, theft, and piracy. The
                  insurance can be tailored to cover specific needs and routes,
                  offering comprehensive protection for shipments worldwide.
                  This type of insurance is crucial for businesses involved in
                  international trade to mitigate financial risks and ensure the
                  safety of their goods during transit.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  Key features of Marine Cargo Insurance
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-[#494a4c]">
                      Comprehensive Coverage:
                    </h3>
                    <p>
                      Marine cargo insurance covers a wide range of risks,
                      including loss or damage to goods during transit due to
                      natural disasters like storms, earthquakes, and floods, as
                      well as man-made risks like theft, piracy, and accidents.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#494a4c]">Global Reach:</h3>
                    <p>
                      This insurance provides protection for shipments on a
                      global scale. Whether goods are being transported
                      domestically or internationally, this insurance ensures
                      they are covered from the point of origin to the final
                      destination. This is particularly important for businesses
                      engaged in international trade, as it mitigates the risks
                      associated with long-distance shipping.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#494a4c]">
                      All–Risk Protection:
                    </h3>
                    <p>
                      This characteristic refers to the inclusion of coverage
                      for all potential perils that could affect the cargo,
                      except those specifically excluded in the policy. This
                      all-encompassing approach ensures that a wide array of
                      risks is managed, providing comprehensive protection for
                      the cargo.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#494a4c]">
                      Efficient Claims Process:
                    </h3>
                    <p>
                      A key feature of marine cargo insurance is the streamlined
                      and efficient process for filing and handling claims. This
                      ensures that in the event of a loss or damage, the cargo
                      owner can quickly receive compensation, minimizing any
                      disruption to business operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#494a4c]">
                      Financial Protection:
                    </h3>
                    <p>
                      It provides significant financial protection by covering
                      the cost of loss or damage to goods. This helps businesses
                      avoid substantial financial losses that could arise from
                      unforeseen incidents during transit, ensuring the
                      sustainability and profitability of the business.
                    </p>
                  </div>
                </div>
              </section>


             

              {/* ============ WHY CHOOSE INSURA (unchanged) ============ */}
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
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566] mb-4">
                    Why Choose iNSURA?
                  </h2>

                  <div className="space-y-4">
                    {/* 1 – Expertise and Experience */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                      onClick={() => toggleWhy(0)}
                        
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#494a4c]">
                          Expertise and Experience
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          With years of experience in the insurance industry, we
                          offer policies that cater to the unique needs of
                          businesses involved in international trade.
                        </div>
                      )}
                    </div>

                    {/* 2 – Personalized Service */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                       onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#494a4c]">
                          Personalized Service
                        </span>
                        <span className="text-lg text-[#003566]">
                           {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Our team understands your specific needs and provides
                          tailored insurance solutions to protect your cargo
                          effectively.
                        </div>
                      )}
                    </div>

                    {/* 3 – Efficient Claims Process */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#494a4c]">
                          Efficient Claims Process
                        </span>
                        <span className="text-lg text-[#003566]">
                         {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                        {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Streamlined claims process to ensure minimal
                          disruption to your business operations.
                        </div>
                      )}
                    </div>

                    {/* 4 – Competitive Pricing */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                      onClick={() => toggleWhy(3)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#494a4c]">
                          Competitive Pricing
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[3] ? "▲" : "▼"}
                        </span>
                      </button>

                     {whyOpen[3] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Enjoy comprehensive coverage at affordable rates.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    This policy ensures that your cargo is protected from
                    various risks during transit.
                  </p>

                  <button  onClick={scrollToHero} className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4">
                    Buy Now
                    
                  </button>
                </div>
              </section>

              {/* HOW MARINE CARGO INSURANCE HELPS BUSINESSES (unchanged) */}
              <section className="space-y-4 mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  How Marine Cargo Insurance Helps Businesses in UAE
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Marine cargo insurance is an essential asset for businesses in
                  the UAE involved in the import and export of goods. The UAE’s
                  strategic location as a global trade hub, with its bustling
                  ports and advanced logistics infrastructure, makes marine
                  cargo insurance crucial for ensuring the smooth operation and
                  financial stability of businesses. Here’s a detailed look at
                  how marine cargo insurance supports businesses in the UAE:
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Shipping goods internationally exposes businesses to numerous
                  risks, including natural disasters, theft, accidents, and
                  piracy. The UAE’s ports are some of the busiest in the world,
                  and with high volumes of traffic, the risk of mishaps
                  increases. This insurance provides comprehensive coverage
                  against these perils, ensuring that businesses are safeguarded
                  against potential losses. This protection is crucial for
                  maintaining business continuity and avoiding significant
                  financial setbacks.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The financial impact of losing or damaging goods in transit
                  can be devastating, especially for businesses dealing with
                  high-value items or bulk shipments. It compensates for such
                  losses, allowing businesses to recover the value of their
                  goods and maintain financial stability. This insurance acts as
                  a financial buffer, helping businesses manage cash flow and
                  avoid unexpected expenses that could disrupt operations. For
                  UAE businesses that rely heavily on imports and exports, this
                  financial security is indispensable.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The UAE is a central hub for global trade, connecting the
                  Middle East, Africa, and Asia with the rest of the world.
                  Marine cargo insurance offers coverage for shipments
                  transported globally, making it indispensable for businesses
                  engaged in international trade. It ensures that goods are
                  protected throughout their journey, from the point of origin
                  to the final destination, regardless of the transportation
                  method. Additionally, many countries and trading partners
                  require proof of insurance as part of their regulatory and
                  compliance standards. Having marine cargo insurance helps
                  businesses meet these requirements, facilitating smoother and
                  more efficient trade operations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  One of the most significant advantages of having this
                  insurance is the peace of mind it provides. Businesses can
                  focus on their core activities without worrying about
                  potential losses during transit. Knowing that their goods are
                  insured allows business owners and managers to operate with
                  greater confidence and make more strategic decisions. This
                  sense of security is invaluable, particularly for businesses
                  that rely heavily on timely and safe delivery of goods to meet
                  customer demands and maintain their reputation.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  These insurance policies typically include streamlined claims
                  processes, ensuring that businesses receive compensation
                  promptly in the event of a loss. This efficiency minimizes
                  disruption to business operations, as companies can quickly
                  recover and resume normal activities. The ability to handle
                  claims swiftly and effectively is crucial for maintaining
                  customer satisfaction and business relationships, as it
                  ensures that any issues are resolved without significant
                  delays.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The insurance policies can be tailored to meet the specific
                  needs of a business. Factors such as the type of goods being
                  transported, their value, the chosen route, and the mode of
                  transportation can all influence the terms and coverage of the
                  policy. This customization ensures that businesses receive the
                  most relevant and effective protection for their shipments,
                  maximizing the benefits of the insurance. For example, a
                  company importing electronics may need different coverage
                  compared to a business exporting perishable goods.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Having marine cargo insurance demonstrates a business’s
                  commitment to safeguarding its assets and fulfilling its
                  obligations to customers and partners. This commitment can
                  enhance a company’s reputation, building trust and credibility
                  in the marketplace. Customers and partners are more likely to
                  engage with businesses that take proactive steps to manage
                  risks and protect their interests.
                </p>
              </section>

              {/* CAR IMAGE BANNER (unchanged) */}
              <section className="mt-16 w-full">
                <img
                  src="/image-39.webp"
                  alt="Top-Notch Vehicle Insurance in UAE"
                  className="w-full rounded-lg object-cover"
                />
              </section>

              {/* ================= NEW SECTION 2: POTENTIAL LOSSES ================= */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  Potential Losses Without Marine Cargo Insurance
                </h2>

                <ol className="space-y-4 list-decimal list-inside text-muted-foreground leading-relaxed">
                  <li>
                    <span className="font-semibold text-[#494a4c]">
                      Uncovered Financial:
                    </span>{" "}
                    Without marine cargo insurance, businesses must bear the
                    full cost of any lost, stolen, or damaged goods, leading to
                    significant financial strain.
                  </li>

                  <li>
                    <span className="font-semibold text-[#494a4c]">
                      Disrupted Cash Flow:
                    </span>{" "}
                    Unexpected expenses from uninsured losses can severely
                    disrupt a company’s cash flow, affecting its ability to
                    operate smoothly and meet other financial obligations.
                  </li>

                  <li>
                    <span className="font-semibold text-[#494a4c]">
                      Regulatory and Compliance Issues:
                    </span>{" "}
                    Failing to meet insurance requirements for international
                    shipping can result in legal penalties and disrupted trade
                    relations.
                  </li>

                  <li>
                    <span className="font-semibold text-[#494a4c]">
                      Loss of Business Reputation:
                    </span>{" "}
                    Customers and partners may lose confidence in a business
                    that does not take necessary precautions to protect its
                    goods, leading to a potential loss of business
                    opportunities.
                  </li>

                  <li>
                    <span className="font-semibold text-[#494a4c]">
                      Operational Delays:
                    </span>{" "}
                    Uninsured losses can cause significant delays in the supply
                    chain, affecting production schedules and delivery times.
                  </li>
                </ol>

                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive protection is essential for the smooth
                  functioning and long-term success of businesses in today’s
                  complex and interconnected global trade environment,
                  especially in a strategic location like the UAE. Without it,
                  businesses face substantial financial, operational, and
                  reputational risks that could significantly hinder their
                  growth and stability.
                </p>
              </section>

              {/* VIDEO SECTION (unchanged) */}
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

              {/* FAQ – accordion (unchanged) */}
              <section className="space-y-4 mt-4">
                <h2 className="text-2xl md:text-2xl font-extrabold text-[#003566] text-center mb-4">
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
                          onClick={() =>
                            setOpenIndex(isOpen ? null : index)
                          }
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#01192f] text-white font-semibold text-xl md:text-xl"
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
                            <div className="text-xl md:text-xl leading-relaxed">
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
