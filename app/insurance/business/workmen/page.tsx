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
};

const coverageCards = [
  {
    title: "Medical Coverage",
    description:
      "Takes care of medical costs related to work-related injuries or illnesses.",
  },
  {
    title: "Recovery Assistance",
    description:
      "Supports employees in recovery, ensuring they get the necessary care and treatment.",
  },
  {
    title: "Compensation Provision:",
    description:
      "Provides financial compensation to employees who suffer injuries or illnesses due to their jobs.",
  },
  {
    title: "Responsibility Demonstration",
    description:
      "It goes beyond legal requirements, serving as evidence of being a responsible employer who prioritizes the well-being of their workforce.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Workmen Compensation Insurance?",
    answer: (
      <p>
        Workmen Compensation Insurance provides financial protection to employees
        who suffer work-related injuries or illnesses. It ensures they receive
        medical care, wage replacement, and other statutory benefits, while also
        protecting employers from large unexpected expenses and legal claims.
      </p>
    ),
  },
  {
    question: "Is Workmen Compensation Insurance mandatory in the UAE?",
    answer: (
      <p>
        Yes, Workmen Compensation Insurance is mandatory in the UAE. Under UAE
        labour law, employers must provide compensation for work-related injuries
        or illnesses. Having this insurance ensures legal compliance and offers
        financial protection for both employers and employees.
      </p>
    ),
  },
  {
    question: "What does Workmen Compensation Insurance cover?",
    answer: (
      <div>
        <p className="mb-3">Workmen Compensation Insurance typically covers:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Medical Expenses:</span> Costs related
            to the treatment of work-related injuries or illnesses.
          </li>
          <li>
            <span className="font-semibold">Lost Wages:</span> Compensation for
            lost income due to an employee&apos;s inability to work.
          </li>
          <li>
            <span className="font-semibold">Disability Benefits:</span> Financial
            support for temporary or permanent disabilities resulting from
            workplace accidents.
          </li>
          <li>
            <span className="font-semibold">Death Benefits:</span> Compensation to
            the family or beneficiaries in case of an employee&apos;s death due to
            a work-related incident.
          </li>
          <li>
            <span className="font-semibold">Legal Costs:</span> Coverage for legal
            expenses incurred in defending claims related to work-related injuries
            or illnesses.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Who is eligible for Workmen Compensation Insurance in the UAE?",
    answer: (
      <p>
        All employees working under an employment contract in the UAE are
        eligible for Workmen Compensation Insurance. This includes full-time,
        part-time, temporary, and seasonal workers. Employers are responsible for
        providing this coverage to their employees.
      </p>
    ),
  },
  {
    question: "How are Workmen Compensation Insurance premiums calculated?",
    answer: (
      <div>
        <p className="mb-3">
          The cost of Workmen Compensation Insurance premiums is based on
          several factors, including:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Nature of Business:</span> The type
            of industry and associated risks.
          </li>
          <li>
            <span className="font-semibold">Number of Employees:</span> The total
            number of employees covered under the policy.
          </li>
          <li>
            <span className="font-semibold">Payroll Size:</span> The total payroll
            amount of the company.
          </li>
          <li>
            <span className="font-semibold">Claims History:</span> The employer&apos;s
            history of previous claims and workplace safety record.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ✅ MULTI-OPEN STATE FOR “WHY CHOOSE iNSURA?”
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

  // ✅ SCROLL TO HERO FUNCTION
  const scrollToHero = () => {
    const el = document.getElementById("workmen-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as any;

    const newErrors: Errors = {};

    
    if (!form.person.value.trim()) {
      newErrors.person = "This field is required. Please input your name.";
    }
    if (!form.mobile.value.trim()) {
      newErrors.mobile = "This field is required. Please input a mobile number.";
    }
    if (!form.email.value.trim()) {
      newErrors.email = "This field is required. Please input a valid email.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("Form submitted successfully!");
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) WITH ID FOR SCROLL */}
      <section id="workmen-hero">
        <PageHero
          breadcrumb="Workmen Compensation Insurance"
          title="Workmen Compensation & Employer’s Liability"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Workmen Compensation Insurance in UAE
          </h2>
          <p className="text-base md:text-lg text-[#4b4b4b] mb-8">
            Secure your business, protect employees with comprehensive Workmen Compensation
            Insurance,{" "}
            <span className="font-bold">Workmen Compensation Insurance</span>
            <span>
              &nbsp;ensuring financial support and safety for all workplace-related injuries.
            </span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* FORM SECTION */}
              <section className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                  Protect your employees now...
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Company name */}
                  <div>
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Company name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="enter company name..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.company ? "border" : ""
                      }`}
                    />
                    
                  </div>

                  {/* Concern Person */}
                  <div>
                    <label className="block text-sm text-[#797575]  font-semibold mb-2">
                      Concern Person name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="person"
                      type="text"
                      placeholder="enter person name..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.person ? "border" : ""
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
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
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
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="enter email id..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.email ? "border " : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0052cc] text-white rounded-md font-semibold"
                  >
                    Send Application
                  </button>
                </form>
              </section>

              {/* BREAKING DOWN POLICY HEADING */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
                Breaking Down the Workmen&apos;s Compensation Insurance Policy
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

              {/* ============ IMAGE 1 CONTENT ============ */}
              <section className="space-y-6 mt-10">
                {/* MAIN HEADING */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#0A2740] leading-snug">
                  Most Essential Insurance for Businesses in Dubai <br /> and Across the UAE
                </h2>

                {/* PARAGRAPH */}
                <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  In Dubai and across the UAE, businesses face diverse risks that highlight the
                  importance of comprehensive insurance coverage. Among the most essential policies
                  is <span className="font-semibold">Workmen Compensation Insurance</span>, which
                  safeguards employers from liabilities arising from workplace injuries or illnesses.
                  This coverage not only ensures compliance with local regulations but also provides
                  financial protection against medical expenses and lost wages for employees.
                </p>

                {/* WHY CHOOSE SECTION */}
                <h3 className="text-xl md:text-2xl font-extrabold text-[#515253] mt-4">
                  Why Choose Workmen Compensation Insurance:
                </h3>

                <ul className="list-disc ml-6 space-y-4">
                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#515253]">Legal Compliance</span> <br />
                    Mandatory under UAE labor laws, it protects both employers and employees.
                  </li>

                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#515253]">Financial Security</span> <br />
                    Covers medical costs, rehabilitation, and compensation for injured employees.
                  </li>

                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#515253]">Business Continuity</span> <br />
                    Mitigates financial risks associated with workplace accidents, fostering
                    employee loyalty and operational stability.
                  </li>
                </ul>

                {/* KEY BENEFITS SECTION */}
                <h3 className="text-xl md:text-2xl font-extrabold text-[#515253] mt-4">
                  Key Benefits of Workmen Compensation Insurance:
                </h3>

                <ul className="list-disc ml-6 space-y-4">
                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#515253]">Employee Protection:</span>
                    &nbsp;Ensures prompt medical treatment and compensation for work-related
                    injuries or illnesses.
                  </li>

                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#515253]">Legal Compliance:</span>
                    &nbsp;Mandatory under UAE labor laws for all businesses employing staff.
                  </li>

                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#515253]">Financial Security:</span>
                    &nbsp;Covers medical expenses, rehabilitation costs, and lost wages, reducing
                    financial strain on employers.
                  </li>

                  <li className="text-[#4A4A4A] leading-relaxed">
                    <span className="font-semibold text-[#0A2740]">
                      Enhanced Employer–Employee Relations:
                    </span>
                    &nbsp;Demonstrates commitment to employee welfare and safety, enhancing morale
                    and productivity.
                  </li>
                </ul>

                {/* FINAL PARAGRAPH */}
                <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg">
                  By investing in Workmen Compensation Insurance, businesses in Dubai and the UAE
                  not only fulfill legal obligations but also foster a secure and supportive work
                  environment, essential for sustainable growth and success.
                </p>

                {/* BUTTON */}
                <button
                  className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-2 hover:bg-[#02224d] transition"
                  onClick={scrollToHero}
                >
                  Buy Now
                </button>
              </section>

              {/* ============ IMAGE 2 CONTENT – WHY CHOOSE INSURA ============ */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-16">
                {/* LEFT IMAGE */}
                <div className="flex justify-center md:justify-start h-full">
                  <img
                    src="/Workmen.webp"
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
                    {/* 1 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#515253]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          iNSURA.AE Workmen Compensation Insurance offers extensive coverage,
                          including medical expenses, rehabilitation costs, and compensation
                          for lost wages due to workplace injuries or illnesses.
                        </div>
                      )}
                    </div>

                    {/* 2 – Dedicated Support */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#515253]">
                          Dedicated Support
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Our dedicated team of insurance professionals provides
                          personalized service and ongoing support, helping you navigate
                          insurance complexities with ease.
                        </div>
                      )}
                    </div>

                    {/* 3 – Prompt Claims Settlement */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#515253]">
                          Prompt Claims Settlement
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Our efficient claims handling process ensures quick resolution and
                          minimal disruption to your business operations in the event of a
                          claim.
                        </div>
                      )}
                    </div>

                    {/* 4 – Compliance Assurance */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(3)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#515253]">
                          Compliance Assurance
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[3] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[3] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We ensure that your business complies with UAE labor laws,
                          providing peace of mind and protection against legal liabilities
                          related to employee injuries.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    We ensure you follow the rules and give you the right coverage for
                    your business.
                  </p>

                  <button
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                    onClick={scrollToHero}
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* HOW INSURA.AE WORKMEN COMPENSATION HAS HELPED 1000+ INDUSTRIALISTS & BUSINESSES */}
              <section className="space-y-6 mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  How Insura.ae&apos;s Workmen Compensation Insurance helping 1000+ Industrialists & Businesses in the UAE
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  At Insura.ae, we are proud to have provided comprehensive Workmen Compensation Insurance to over 1000 industrialists and businesses across the UAE, ensuring their financial security and legal compliance. Here&apos;s how we have made a significant impact:
                </p>

                {/* 1 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">
                    1. Comprehensive Protection for Employees
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our insurance policies cover medical expenses, rehabilitation costs, and compensation for lost wages due to workplace injuries or illnesses.
                    This financial support ensures that employees receive the care they need without financial strain.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">
                    2. Ensuring Legal Compliance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By choosing Insura.ae, businesses comply with UAE labor laws, avoiding hefty fines and legal repercussions.
                    Our policies are designed to meet all regulatory requirements, providing peace of mind to employers.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">
                    3. Efficient Claims Process
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our streamlined and efficient claims handling process ensures that businesses can swiftly navigate the complexities of filing a claim.
                    This minimizes downtime and financial disruption, allowing businesses to continue their operations smoothly.
                  </p>
                </div>

                {/* 4 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">
                    4. Customized Insurance Solutions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand that each business is unique. Our insurance advisors work closely with clients to tailor Workmen Compensation Insurance
                    policies that suit their specific needs, ensuring optimal coverage without unnecessary costs.
                  </p>
                </div>

                {/* 5 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">
                    5. Enhancing Employee Morale
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By providing comprehensive protection and demonstrating a commitment to employee welfare,
                    businesses have seen improved employee morale and productivity.
                    This leads to a more motivated and loyal workforce.
                  </p>
                </div>

                {/* 6 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">
                    6. Financial Stability for Businesses
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In the event of a workplace incident, our insurance policies provide critical financial support,
                    preventing unexpected expenses from crippling the business.
                    This stability is essential for long-term growth and success.
                  </p>
                </div>

                {/* 7 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#515253]">7. Risk Management Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer proactive risk management advice to help businesses identify potential hazards and implement safety measures.
                    This reduces the likelihood of workplace accidents and enhances overall safety.
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
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  Join the Growing Community of Satisfied Clients
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  With over 1000+ satisfied industrialists and businesses, Insura.ae has established itself as a trusted provider of Workmen Compensation Insurance in the UAE. Our commitment to exceptional service, tailored solutions, and comprehensive coverage has earned us the loyalty and trust of our clients.
                </p>

                <button
                  className="px-6 py-2 bg-[#003566] text-[#ffd34d]  font-semibold rounded-md shadow mt-4"
                  onClick={scrollToHero}
                >
                  Buy Now
                </button>

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
                <h2 className="text-2xl md:text-2xl font-extrabold text-[#032341] text-center mb-4">
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
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#021d35] text-white font-semibold text-xl md:text-xl"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">{isOpen ? "−" : "+"}</span>
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
