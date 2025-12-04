"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

const coverageCards = [
  {
    title: "Liability Insurance ",
    description:
      "Liability Insurance is for businesses in the UAE. It protects your business against claims of injury or damage caused to third parties. This can include claims resulting from accidents, product defects, or professional errors or omissions.",
  },
  {
    title: "Work Compensation Insurance",
    description:
      "This insurance is mandatory in the UAE and covers medical expenses, disability payments, and lost wages for employees who are injured or fall ill while on the job. This type of insurance provides peace of mind for both employers and employees.",
  },
  {
    title: "Property insurance",
    description:
      "Property insurance protects businesses from financial losses arising from damage or loss of equipment, inventory, or property due to events such as fire, theft or natural disasters.",
  },
  {
    title: "Marine Insurance ",
    description:
      "Marine insurance covers the physical loss or damage of ships, cargo, terminals, and any transport by which the property is transferred, acquired, or held between the points of origin and the final destination.",
  },
  {
    title: "Professional indemnity",
    description:
      "Professional indemnity insurance will protect businesses from claims made against them by third parties for mistakes, omissions, errors, or financial loss",
  },
  {
    title: "Public Liability",
    description:
      "This insurance will indemnify against all sums which the insured shall become legally liable as an occupier of the premises due to accidents causing damage and/or bodily injury (Fatal or Non-Fatal) to Third Parties arising out of their Business.",
  },
];

type FormErrors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
};

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [whyOpen, setWhyOpen] = useState<boolean[]>([true, false, false, false]);
  const [errors, setErrors] = useState<FormErrors>({});

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const scrollToHero = () => {
    const el = document.getElementById("glpa-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const company = (formData.get("company") as string | null)?.trim() || "";
    const person = (formData.get("person") as string | null)?.trim() || "";
    const mobile = (formData.get("mobile") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";

    const newErrors: FormErrors = {};
    
    if (!person) newErrors.person = "This field is required. Please input your name.";
    if (!mobile) newErrors.mobile = "This field is required. Please input a phone number.";
    if (!email) newErrors.email = "This field is required. Please input a valid email.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // add actual submit logic later
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="glpa-hero">
        <PageHero
          breadcrumb="Group Life Personal Accident – GLPA"
          title="Group Life Personal Accident – GLPA"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team with help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Business Insurance in UAE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* IMAGE + FORM SECTION */}
              <section className="space-y-6">
                {/* Big image above form */}
                <div className="w-full">
                  <img
                    src="/group.webp" // change to your GLPA image
                    alt="Business Insurance in UAE"
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                {/* FORM */}
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Enter company name..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
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
                        placeholder="Concern person name..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                      {errors.person && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.person}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ROW 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="mobile"
                        type="text"
                        placeholder="enter mobile number..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
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
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Category Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Business Category
                    </label>
                    <select className="w-full p-3 rounded-lg bg-[#23b5ff] text-white outline-none">
                      <option>Property all risks</option>
                      <option>Group Life / GLPA</option>
                      <option>Workers Compensation</option>
                    </select>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0052cc] text-white font-semibold rounded-md shadow"
                  >
                    Send Application
                  </button>
                </form>
              </section>

              {/* FLIP CARDS */}
              <section>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
                  Buy Insurance That Fits Your Business....
                </h2>

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

              {/* WHY BUSINESS INSURANCE MANDATORY + FOCUS SECTION */}
              <section className="space-y-6 mt-10">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                    Why Business Insurance Mandatory in Dubai?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Business Insurance UAE serves as a protective shield for
                    your business, offering coverage against unexpected risks
                    such as property damage and liability claims. It&apos;s a
                    crucial financial safety net designed to keep your
                    operations secure.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In many places, including{" "}
                    <span className="font-semibold">
                      business insurance in Dubai &amp; UAE
                    </span>
                    , it is often a legal requirement. It ensures businesses are
                    financially equipped to handle unforeseen events and
                    protects business owners and employees.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                    Focus on Your Business with Peace of Mind
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold">Legal Compliance: </span>
                    It ensures compliance with regulations, avoiding legal
                    complications and penalties.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold">Employee Protection: </span>
                    Business Insurance often includes coverage for
                    employee-related risks, demonstrating a commitment to their
                    well-being.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold">
                      Operational Resilience:{" "}
                    </span>
                    By mitigating financial risks, it enhances your business&apos;s
                    ability to weather disruptions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold">Customer Trust: </span>
                    Displaying a commitment to business protection enhances
                    trust among customers and partners, signalling proactive
                    risk management.
                  </p>
                </div>
              </section>

              {/* WHY CHOOSE INSURA */}
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
                  <h2>
                    We believe in going above and beyond to ensure your vehicle is not only safeguarded on the road but also well-maintained.
                  </h2>
                  <div className="space-y-4">
                    {/* 1 – Budget Friendly Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          Budget Friendly Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          iNSURA Identify the best vehicle insurance in uae by considering your specific needs and budget and customize insurance plans to align with your requirements.
                        </div>
                      )}
                    </div>

                    {/* 2 – 10,000+ Satisfied Customers */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          10,000+ Satistfied Customers
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          With over 10,000+ satisfied customers, iNSURA.ae is a reliable name in the insurance sector.
                        </div>
                      )}
                    </div>

                    {/* 3 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We go beyond standard coverage, offering a comprehensive package that includes car maintenance and car wash services.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Protect your special occasions with Insura.ae and enjoy
                    peace of mind knowing that your event is in safe hands.
                  </p>

                  <button
                    onClick={scrollToHero}
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* LEGAL, OPERATIONAL, EMPLOYEE PROTECTION */}
              <section className="mt-16 space-y-10">
                {/* Top heading + paragraph */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                    Legal, Operational, and Employee Protection in UAE
                  </h2>
                  <p className="text-[#4b4b4b] leading-relaxed">
                    Business insurance in the UAE safeguards businesses against risks like
                    property damage and liability claims. It&apos;s legally required in
                    Dubai, ensuring compliance, employee protection, operational
                    resilience, and customer trust, with extra coverage through
                    employer&apos;s liability insurance.
                  </p>
                </div>

                {/* Image banner */}
                <div className="w-full">
                  <img
                    src="/event.webp" // change to your actual image path
                    alt="Protect Your Business with 360° Protection"
                    className="w-full rounded-lg object-cover"
                  />
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
