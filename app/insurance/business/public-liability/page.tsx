"use client";

import { useState, type ReactNode, FormEvent } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

type Errors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
  business?: string;
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
    question: "What is Pubkic Liability Insurance?",
    answer: (
      <p>
        Public Liability Insurance is a type of insurance that provides coverage
        for businesses against claims made by third parties for bodily injury or
        property damage arising from business operations.
      </p>
    ),
  },
  {
    question: "Who needs Public Liability Insurance in the UAE?",
    answer: (
      <p>
        Most businesses in the UAE can benefit from Public Liability Insurance,
        especially those that interact with the public or work on client
        premises. It may also be a regulatory requirement in certain industries.
      </p>
    ),
  },
  {
    question: "Is Public Liability Insurance mandatory in UAE?",
    answer: (
      <p>
        While not mandatory for all businesses, some sectors or government
        contracts may require Public Liability Insurance as a condition for
        operation or bidding. It’s important to check regulatory requirements
        specific to your industry.
      </p>
    ),
  },
  {
    question: "What incidents does Public Liability Insurance cover?",
    answer: (
      <p>
        It covers incidents such as slip-and-fall accidents, injuries caused by
        faulty products, damage to property during business activities, and
        legal expenses related to defending against claims.
      </p>
    ),
  },
  {
    question: "Can Public Liability Insurance cover professional negligence claims?",
    answer: (
      <p>
        No, Public Liability Insurance does not cover claims arising from
        professional services or advice. Professional Indemnity Insurance is
        specifically designed for such risks.
      </p>
    ),
  },
  {
    question: "What should I consider when choosing a Public Liability Insurance policy?",
    answer: (
      <p>
        Factors to consider include coverage limits, exclusions, policy terms,
        premiums, insurer reputation, and the insurer’s ability to handle claims
        efficiently.
      </p>
    ),
  },
];

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
   const [whyOpen, setWhyOpen] = useState<boolean[]>([
      true,
      false,
      false,
      false,
    ]);
  
    const [errors, setErrors] = useState<Errors>({});
  
    const toggleWhy = (index: number) => {
      setWhyOpen((prev) =>
        prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
      );
    };


  const scrollToHero = () => {
    const el = document.getElementById("public-liability-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as any;

    const newErrors: Errors = {};

    if (!form.company.value.trim()) {
      newErrors.company = "This field is required. Please input your name.";
    }
    if (!form.person.value.trim()) {
      newErrors.person = "This field is required. Please input your name.";
    }
    if (!form.mobile.value.trim()) {
      newErrors.mobile = "This field is required. Please input a mobile number .";
    }
    if (!form.email.value.trim()) {
      newErrors.email = "This field is required. Please input a valid email .";
    }
   

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("Form submitted successfully!");
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="public-liability-hero">
        <PageHero
          breadcrumb="Workmen Compensation Insurance"
          title="Public Liability"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#003566] mb-4">
            Public Liability Insurance in UAE
          </h2>
          <p className="text-[17px] md:text-[22px] text-[#6b6b6b] leading-relaxed mb-8">
            Comprehensive{" "}
            <span className="font-semibold text-[#4b4b4b]">
              Public Liability Insurance
            </span>
            &nbsp;for Third-Party Injuries and Property Damage with Insura.ae.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* FORM SECTION */}
              <section className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#003566]">
                 Protect Your Business with PL
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Company name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Company name 
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="enter company name..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.company ? "border" : ""
                      }`}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Concern Person */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Concern Person name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="person"
                      type="text"
                      placeholder="enter person name..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.person ? "border " : ""
                      }`}
                    />
                    {errors.person && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.person}
                      </p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="mobile"
                      type="text"
                      placeholder="enter mobile number..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.mobile ? "border" : ""
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="enter email id..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.email ? "border" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Business category */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select bussiness category
                    </label>
                    <select
                      name="business"
                      className={`w-full p-3 rounded-lg bg-[#23b5ff] text-white outline-none ${
                        errors.business ? "border " : ""
                      }`}
                    >
                      <option value="">select bussiness</option>
                      <option>Travel</option>
                      <option>Automobiles</option>
                    </select>
                   
                  </div>

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
                            onClick={scrollToHero}
                            className="flex items-center gap-2 px-4 py-2 rounded-md
                                       bg-white text-[#191c61] font-semibold text-sm
                                       border border-[#191c61]
                                       transition-all duration-300
                                       hover:bg-[#191c61] hover:text-white"
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

              {/* ============ NEW SECTION: ABOUT + KEY FEATURES (SECOND IMAGE) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  About Public Liability Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Public Liability Insurance provides coverage for legal costs
                  and compensation payments if your business activities cause
                  injury to a third party or damage to their property. This
                  insurance is essential for businesses that interact with the
                  public, ensuring you can operate with confidence and peace of
                  mind.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Public Liability Insurance is vital for a wide range of
                  businesses, including:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-semibold">Retail Stores:</span> Protect
                    against claims from customers visiting your premises.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Contractors and Tradesmen:
                    </span>{" "}
                    Cover for accidents or damage caused during work.
                  </li>
                  <li>
                    <span className="font-semibold">Events and Venues:</span>{" "}
                    Safeguard against incidents at events you organize or host.
                  </li>
                  <li>
                    <span className="font-semibold">Service Providers:</span>{" "}
                    Protection for businesses providing services to the public.
                  </li>
                  <li>
                    <span className="font-semibold">Office-Based Businesses:</span>{" "}
                    Coverage for incidents involving visitors to your office.
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-8">
                  Key Features of Our Public Liability Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  In the UAE, having car insurance is a legal necessity,
                  ensuring compliance. It serves as protection for your vehicle
                  and everyone inside it, including yourself. Moreover, it covers
                  the costs of damages and losses in accidents involving third
                  parties.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Extensive Coverage:</span>
                  <br />
                  <span className="font-semibold">Bodily Injury –</span> Protects
                  against claims for third-party injuries that occur on your
                  business premises or due to your business operations.
                  <br />
                  <span className="font-semibold">Property Damage –</span> Covers
                  costs associated with damage to third-party property caused by
                  your business activities.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Legal Defense Costs:</span>
                  <br />
                  <span className="font-semibold">
                    Comprehensive Legal Support –
                  </span>{" "}
                  Covers legal expenses, including attorney fees, court costs,
                  and settlement expenses, ensuring you have the financial
                  backing to defend against claims.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Financial Compensation:</span>
                  <br />
                  <span className="font-semibold">Claim Settlements –</span>{" "}
                  Provides financial compensation for claims awarded to third
                  parties, including medical expenses for injuries and repair or
                  replacement costs for damaged property.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Product Liability:</span>
                  <br />
                  <span className="font-semibold">Product Related Claims –</span>{" "}
                  Includes coverage for claims arising from products you
                  manufacture, distribute, or sell that cause injury or damage,
                  ensuring comprehensive protection for your business.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Customizable Policies:</span>
                  <br />
                  <span className="font-semibold">
                    Tailored Coverage Options –
                  </span>{" "}
                  Offers flexible policy options with varying coverage limits,
                  deductibles, and additional benefits, allowing you to
                  customize the policy to meet the specific needs of your
                  business.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold">Regulatory Compliance:</span>
                  <br />
                  <span className="font-semibold">
                    Meet Legal Requirements –
                  </span>{" "}
                  Assists in meeting local regulatory requirements and industry
                  standards for liability coverage, ensuring your business
                  operates within the legal framework.
                </p>

                <button
                  className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  onClick={scrollToHero}
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
                        <span className="font-bold text-[#585858]">
                          Expertise and Experience
                        </span>
                        <span className="text-lg text-[#003566]">
                         {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                       {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          With extensive experience in the insurance industry,
                          we understand the unique risks faced by businesses
                          across various sectors. Insura’s expertise allows us
                          to design policies that offer robust protection and
                          peace of mind.
                        </div>
                      )}
                    </div>

                    {/* 2 – Personalized Service */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                       onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#585858]">
                          Personalized Service
                        </span>
                        <span className="text-lg text-[#003566]">
                           {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We prioritize understanding your specific needs and
                          providing personalized insurance solutions. Our team
                          is dedicated to offering exceptional customer service,
                          ensuring that you receive the right coverage and
                          support.
                        </div>
                      )}
                    </div>

                    {/* 3 – Efficient Claims Process */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                     onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#585858]">
                          Efficient Claims Process
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          In the event of a claim, our streamlined and efficient
                          claims process ensures timely resolution and minimal
                          disruption to your business. Our dedicated claims team
                          is always available to guide you through the process
                          and provide the necessary assistance.
                        </div>
                      )}
                    </div>

                    {/* 4 – Competitive Pricing */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                         onClick={() => toggleWhy(3)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#585858]">
                          Competitive Pricing
                        </span>
                        <span className="text-lg text-[#003566]">
                           {whyOpen[3] ? "▲" : "▼"}
                        </span>
                      </button>

                         {whyOpen[3] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We offer competitive pricing for our Public Liability
                          Insurance policies, ensuring that you receive
                          excellent value for comprehensive coverage. Our goal
                          is to provide cost-effective solutions without
                          compromising on the quality of protection.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Our easy application process and responsive customer service
                    make it simple to get the coverage you need.
                  </p>

                  <button
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                    onClick={scrollToHero}
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* ============ NEW PUBLIC-LIABILITY IMPACT SECTION (THIRD IMAGE) ============ */}
              <section className="space-y-6 mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  How Public Liability Insurance are helping Businesses in UAE:
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Public liability insurance is a crucial component for businesses in the UAE, providing numerous benefits that help safeguard their operations and reputation. It covers legal costs and compensation claims made by third parties for injuries or property damage caused by your business activities. This ensures that businesses are not financially crippled by unforeseen incidents.
                </p>

                {/* 1 */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    By covering substantial claims, it prevents businesses from facing bankruptcy or severe financial strain.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Certain industries and activities in the UAE require businesses to have public liability insurance as part of their operational licenses. Compliance with these regulations ensures businesses can continue operating without legal hindrances.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    It helps in handling claims efficiently and compensating affected parties helps maintain the business’s reputation. It shows that the business is responsible and cares about its customers and the public.
                  </p>
                </div>

                {/* 4 */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Having public liability insurance can enhance public confidence in the business, knowing that it is prepared to handle any mishaps professionally. The process of acquiring public liability insurance often involves risk assessments, helping businesses identify potential hazards in their operations and implement preventive measures. PL helps mitigate the financial impact of accidents, allowing businesses to focus on growth and development rather than worrying about potential liabilities.
                  </p>
                </div>

                {/* 5 */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Public liability insurance primarily covers third parties, the emphasis on safety and risk management indirectly benefits employees by promoting a safer working environment.
                  </p>
                </div>

                {/* 6 */}
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    It covers a wide range of incidents, including slip-and-fall accidents, damage to property during business operations, and injuries caused by defective products. This versatility ensures comprehensive protection.
                  </p>
                </div>
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
                <p className="text-muted-foreground leading-relaxed">
                  By investing in public liability insurance, businesses in the UAE can operate with greater peace of mind, knowing they are protected against potential legal and financial setbacks that could arise from their interactions with the public.
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
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#021e38] text-white font-semibold text-xl md:text-xl"
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
                            <div className="text-sm md:text-base leading-relaxed">
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
