"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const coverageCards = [
  {
    title: "Comprehensive Coverage",
    description:
      "Protects against claims for bodily injury and property damage caused to third parties due to business activities..",
  },
  {
    title: "Legal Defense Costs",
    description:
      "Covers the legal expenses incurred in defending against claims, including court fees and attorney charges..",
  },
  {
    title: "Financial compensation",
    description:
      "Provides financial compensation for third-party injuries and property damage, including medical expenses and repair costs.",
  },
  {
    title: "Product Liability",
    description:
      "Includes coverage for claims arising from products supplied by the business that cause injury or damage.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Trade Credit Insurance?",
    answer: (
      <p>
        Trade Credit Insurance (TCI) is a type of insurance that protects
        businesses against the risk of non-payment by their clients. It
        covers losses arising from customer insolvency, protracted default,
        and political risks that might prevent payment.
      </p>
    ),
  },
  {
    question: "How does Trade Credit Insurance work?",
    answer: (
      <p>
        Trade Credit Insurance works by providing coverage for your
        receivables. If a customer fails to pay due to insolvency or
        prolonged default, the insurer compensates you for the insured
        amount, ensuring that your cash flow remains unaffected.
      </p>
    ),
  },
  {
    question: "Who should consider purchasing Trade Credit Insurance?",
    answer: (
      <p>
        Any business that extends credit to its customers should consider
        Trade Credit Insurance. This is particularly beneficial for
        companies involved in international trade or those with significant
        receivables.
      </p>
    ),
  },
  {
    question: "What risks are covered under Trade Credit Insurance?",
    answer: (
      <div>
        <p>Trade Credit Insurance typically covers:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Insolvency of the buyer</li>
          <li>Protracted default (non-payment over an extended period)</li>
          <li>
            Political risks (in some cases), such as war, expropriation, or
            currency transfer restrictions that prevent payment.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I purchase Trade Credit Insurance in the UAE?",
    answer: (
      <p>
        Trade Credit Insurance can be purchased through insurance brokers or
        directly from insurance companies that offer this type of coverage
        like iNSURA.AE. It’s advisable to compare policies and consult with
        an expert to find the best coverage for your specific needs.
      </p>
    ),
  },
];

type FormErrors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
  category?: string;
};

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [whyOpen, setWhyOpen] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const [errors, setErrors] = useState<FormErrors>({});

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const scrollToHero = () => {
    const el = document.getElementById("trade-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const company = (formData.get("company") as string | null)?.trim() || "";
    const person = (formData.get("person") as string | null)?.trim() || "";
    const mobile = (formData.get("mobile") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";
    const category = (formData.get("category") as string | null)?.trim() || "";

    const newErrors: FormErrors = {};

    
    if (!person) newErrors.person = "This field is required. Please input your name.";
    if (!mobile) newErrors.mobile = "This field is required. Please input a mobile number.";
    if (!email) newErrors.email = "This field is required. Please input a valid email.";
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // replace with real submit later
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="trade-hero">
        <PageHero
          breadcrumb=" Trade Credit Insurance"
          title="Trade Credit Insurance"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Trade Credit Insurance in UAE by iNSURA.AE
          </h2>
          <p className="text-xl md:text-2xl text-[#4b4b4b] mb-8">
            Secure your cash flow and grow confidently with Trade Credit
            Insurance by iNSURA.AE, tailored for UAE businesses and global
            operations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* FORM SECTION */}
              <section className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#003566]">
                  Buy Insurance That Fits You....
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* 2-column row: Company + Concern Person */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company name */}
                    <div>
                      <label className="block text-sm text-[#646161] font-semibold mb-2">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Enter company name..."
                        className="w-full p-3 rounded-lg bg-[#f2f7ff] outline-none"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Concern Person */}
                    <div>
                      <label className="block text-sm text-[#646161] font-semibold mb-2">
                        Concern Person name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="person"
                        type="text"
                        placeholder="Concern person name..."
                        className="w-full p-3 rounded-lg bg-[#f2f7ff] outline-none"
                      />
                      {errors.person && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.person}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 2-column row: Mobile + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mobile */}
                    <div>
                      <label className="block text-sm text-[#646161] font-semibold mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="mobile"
                        type="text"
                        placeholder="enter mobile number..."
                        className="w-full p-3 rounded-lg bg-[#f2f7ff] outline-none"
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-[#646161] font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="enter email id..."
                        className="w-full p-3 rounded-lg bg-[#f2f7ff] outline-none"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business category */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Business Category
                    </label>
                    <select
                      name="category"
                      className="w-full p-3 rounded-lg bg-[#23b5ff] text-white outline-none"
                    >
                      <option value="">Property all risks</option>
                      <option>Event Insurance</option>
                      <option>Marine cargo</option>
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.category}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0052cc] text-white rounded-md font-semibold"
                  >
                    Send Application
                  </button>
                </form>
              </section>

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

              {/* ============ NEW SECTION AFTER CARDS (IMAGE 1 CONTENT) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-3xl md:text-3xl font-extrabold text-[#003566]">
                  Trade Credit Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Trade Credit Insurance is essential for businesses that want
                  to protect their accounts receivable from the risk of
                  non-payment by clients. In the UAE, where economic activities
                  are rapidly growing and expanding globally, this insurance is
                  crucial for maintaining financial stability and ensuring
                  business growth. iNSURA.AE offers robust Trade Credit
                  Insurance solutions tailored to meet the specific needs of
                  businesses operating in the UAE and international markets.
                </p>

                <h3 className="font-semibold text-4xl text-[#003566] mt-4">
                  Key Features of Trade Credit Insurance:
                </h3>

                {/* Coverage of Non-Payment Risk */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">
                    Coverage of Non-Payment Risk:
                  </p>
                  <p className="leading-relaxed">
                    If a customer goes bankrupt or simply fails to pay, trade
                    credit insurance ensures you are compensated. This reduces
                    the financial impact of unpaid invoices. If you are selling
                    internationally, this insurance can cover losses due to
                    political events like war, revolution, or government actions
                    that prevent payment.
                  </p>
                </div>

                {/* Credit Limit Management */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">
                    Credit Limit Management:
                  </p>
                  <p className="leading-relaxed">
                    The insurer evaluates the creditworthiness of your
                    customers and assigns a credit limit to each one. This helps
                    you understand how much credit you can safely extend to each
                    customer. Insurers continuously monitor the financial health
                    of your customers and adjust credit limits as needed.
                  </p>
                </div>

                {/* Enhanced Credit Decisions */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">
                    Enhanced Credit Decisions:
                  </p>
                  <p className="leading-relaxed">
                    With trade credit insurance, you gain access to valuable
                    credit information and insights about potential and existing
                    customers, helping you make informed decisions about whom to
                    do business with. In the event of a non-payment, the
                    insurance typically covers a large portion of the
                    outstanding receivables, often between 75% and 95%. This
                    means that while you might not recover the full amount, you
                    still get a substantial portion back, mitigating the loss.
                  </p>
                </div>

                {/* Global Coverage */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">Global Coverage:</p>
                  <p className="leading-relaxed">
                    Trade credit insurance isn&apos;t limited to your home
                    country; it can cover sales to customers around the world,
                    giving you confidence to expand into new markets.
                  </p>
                </div>

                {/* Support for Business Growth */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">
                    Support for Business Growth:
                  </p>
                  <p className="leading-relaxed">
                    Knowing you are protected against non-payment, you can
                    confidently offer more favorable credit terms to your
                    customers, which can help increase sales. With protection in
                    place, you might be more willing to explore new markets and
                    take on new customers.
                  </p>
                </div>

                {/* Financial Stability */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">
                    Financial Stability:
                  </p>
                  <p className="leading-relaxed">
                    By reducing the risk of bad debts, trade credit insurance
                    helps stabilize your cash flow and balance sheet. This can
                    make your business more attractive to investors and lenders,
                    potentially leading to better financing terms.
                  </p>
                </div>

                {/* Policy Extensions */}
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-[#4e4f50]">
                    Policy Extensions:
                  </p>
                  <p className="leading-relaxed">
                    You can extend your policy to include other risks, such as
                    political risk insurance, which covers losses due to
                    political instability, or even pre-shipment risk, which
                    covers costs incurred before the goods are delivered.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-2">
                  Trade Credit Insurance not only protects against the risk of
                  non-payment but also provides tools and services to help you
                  manage credit risk, grow your business safely, and maintain
                  financial stability.
                </p>
                <button
                  onClick={scrollToHero}
                  className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                >
                  Buy Now
                </button>
              </section>

              {/* ============ WHY CHOOSE INSURA (KEPT SAME) ============ */}
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
                    {/* 1 – Expertise and Experience */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#5b5c5d]">
                          Specialized UAE Expertise
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          With extensive experience in the UAE market,
                          iNSURA.AE understands the local business environment
                          and regulatory landscape. This expertise enables us to
                          offer solutions perfectly suited to businesses
                          operating in the region.
                        </div>
                      )}
                    </div>

                    {/* 2 – Personalized Service */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#5b5c5d]">
                          Reliable Partner
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Our commitment to excellent service and customer
                          satisfaction makes us a reliable partner for your
                          business. We are dedicated to providing you with the
                          best possible insurance solutions and support.
                        </div>
                      )}
                    </div>

                    {/* 3 – Efficient Claims Process */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#5b5c5d]">
                          Competitive Pricing
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          In the event of a claim, our streamlined and
                          efficient claims process ensures timely resolution and
                          minimal disruption to your business. Our dedicated
                          claims team is always available to guide you through
                          the process and provide the necessary assistance.
                        </div>
                      )}
                    </div>

                    {/* 4 – Competitive Pricing */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(3)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#5b5c5d]">
                          Competitive Pricing
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[3] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[3] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We offer competitive rates for our Trade Credit
                          Insurance policies, ensuring you get the best value
                          for your investment.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Trade Credit Insurance by iNSURA.AE is designed to protect
                    your business from the risks of non-payment, ensuring
                    financial stability and supporting growth.
                  </p>

                  <button
                    onClick={scrollToHero}
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* ============ NEW SECTION AFTER WHY CHOOSE (IMAGE 2 CONTENT) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566]">
                  Trade Credit Insurance: Empowering Businesses in the UAE
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Trade Credit Insurance (TCI) is a pivotal financial tool for
                  businesses in the UAE, offering protection against the risk of
                  non-payment by clients. This coverage safeguards companies
                  from potential financial losses due to customer insolvency or
                  prolonged default, ensuring business continuity and stability
                  in an ever-evolving market.
                </p>

                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                  <li>
                    <span className="font-bold text-[#3c3d3d]">
                      Enhancing Cash Flow and Financial Stability:
                    </span>{" "}
                    One of the primary benefits of TCI is the enhancement of
                    cash flow and overall financial stability. By mitigating the
                    risk of unpaid invoices, businesses can maintain a steady
                    cash flow, essential for day-to-day operations and
                    long-term growth. This stability allows companies to
                    reinvest in their operations, explore new market
                    opportunities, and manage their working capital more
                    effectively.
                  </li>

                  <li>
                    <span className="font-bold text-[#3c3d3d]">
                      Facilitating Business Expansion:
                    </span>{" "}
                    TCI empowers businesses to expand their reach both locally
                    and internationally. With the assurance that their
                    receivables are protected, companies can confidently extend
                    credit terms to new customers, including those in
                    unfamiliar markets. This ability to offer competitive credit
                    terms can be a significant advantage in securing new clients
                    and fostering business growth.
                  </li>

                  <li>
                    <span className="font-bold text-[#3c3d3d]">
                      Strengthening Customer Relationships:
                    </span>{" "}
                    By offering trade credit terms to customers, businesses can
                    build stronger and more loyal customer relationships.
                    Clients appreciate the flexibility of credit terms, which
                    can enhance their purchasing power and foster long-term
                    partnerships. In turn, this can lead to increased sales
                    volumes and repeat business, contributing to the overall
                    growth and success of the company.
                  </li>

                  <li>
                    <span className="font-bold text-[#3c3d3d]">
                      Supporting Risk Management and Decision-Making:
                    </span>{" "}
                    TCI also plays a crucial role in risk management. Insurers
                    provide valuable insights and credit information about
                    potential and existing customers, helping businesses make
                    informed decisions. This intelligence can be instrumental in
                    identifying high-risk clients and adjusting credit limits
                    accordingly, thereby minimising the risk of bad debt.
                  </li>

                  <li>
                    <span className="font-bold text-[#3c3d3d]">
                      Boosting Confidence Among Stakeholders:
                    </span>{" "}
                    Having TCI in place can boost the confidence of various
                    stakeholders, including investors, lenders, and suppliers.
                    It demonstrates a proactive approach to managing financial
                    risks and enhances the company&apos;s creditworthiness.
                    This increased confidence can lead to better financing
                    terms, improved supplier relationships, and a stronger
                    overall market position.
                  </li>
                </ol>
              </section>

              {/* CAR IMAGE BANNER */}
              <section className="mt-16 w-full">
                <img
                  src="/image-39.webp"
                  alt="Top-Notch Vehicle Insurance in UAE"
                  className="w-full rounded-lg object-cover"
                />
              </section>

              {/* SUCCESS STORIES WITH VIDEO */}
              <section className="space-y-6 mt-12">
                <p className="text-muted-foreground font-bold leading-relaxed">
                  Trade Credit Insurance is an invaluable asset for businesses
                  in the UAE, offering protection against non-payment risks and
                  fostering growth, stability, and confidence. By leveraging
                  TCI, companies can navigate the complexities of trade with
                  greater assurance and achieve sustained success in a
                  competitive market.
                </p>

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

              {/* FAQ – accordion, starts right under the video */}
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
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#021d36] text-white font-semibold text-xl md:text-xl"
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
