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
    title: "Customised Solution ",
    description:
      "Policies are customized to match the unique requirements of every business for effective coverage.",
  },
  {
    title: "Cost-Effectiveness",
    description:
      "These Fidelity insurance plans are very affordable also it offer's significant protection without imposing a heavy cost burden.",
  },
  {
    title: "Professional Expertise",
    description:
      "Fidelity Insurance Company employs a team of professionals who have an expertise in assessing risks and crafting policies.",
  },
  {
    title: "Dedicated Risk Assesment Team ",
    description:
      "A specialized team has been established to assess the particular risks linked to your company's operations, serving as the basis for the most extensive coverage.",
  },
];

type FormErrors = {
  person?: string;
  mobile?: string;
  email?: string;
};

export default function WorkmenCompensationPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [whyOpen, setWhyOpen] = useState<boolean[]>([true, false, false]);

  const scrollToHero = () => {
    const el = document.getElementById("fidelity-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const person = (formData.get("person") as string | null)?.trim() || "";
    const mobile = (formData.get("mobile") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";

    const newErrors: FormErrors = {};
    if (!person) newErrors.person = "This field is required. Please input your name.";
    if (!mobile) newErrors.mobile = "This field is required. Please input a mobile number ";
    if (!email) newErrors.email = "This field is required. Please input a valid email.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="fidelity-hero">
        <PageHero
          breadcrumb="Fidelity Guarantee"
          title="Fidelity Guarantee"
          description="Fidelity Insurance to safeguard your small or medium enterprise in UAE against risks and ensure business continuity with customized coverage"
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Fidelity Insurance - Your Essential financial risk protection.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* FORM SECTION */}
              <section className="space-y-6">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Company name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter company name..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                    </div>

                    {/* Concern Person */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Concern Person name{" "}
                        <span className="text-red-500">*</span>
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
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
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
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
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
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Business Category
                    </label>
                    <select className="w-full p-3 rounded-lg bg-[#23b5ff] text-white outline-none">
                      <option>Event Inurance</option>
                      <option>Marine Cargo</option>
                      <option>Property all risks</option>
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

              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566]">
                  All about Fidelity Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  The purpose of Fidelity United Liability Insurance is to
                  safeguard companies from lawsuits alleging harm or damage
                  carried due to their operations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  It’s an essential financial safety net that aids in risk
                  management for any legal responsibilities. This has increased
                  its significance and appeal among companies looking to reduce
                  possible losses.
                </p>
                <h3 className="text-muted-foreground font-bold leading-relaxed">
                  Types of Fidelity insurance –{" "}
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="text-[#4f4c4c] font-bold">
                      Public liability Insurance{" "}
                    </span>
                    protects companies from lawsuits resulting from their
                    operations when they injure, lose, or destroy property
                    belonging to third parties.
                  </li>
                  <li>
                    <span className="text-[#4f4c4c] font-bold">
                      Workers’ Compensation
                    </span>{" "}
                    Under labor legislation, this kind of fidelity insurance
                    policy provides benefits to workers for illnesses, injuries,
                    or deaths that occur while they are working.
                  </li>
                  <li>
                    <span className="text-[#4f4c4c] font-bold">
                      Professional Indemnity Insurance{" "}
                    </span>
                    shields practitioners from financial loss or harm brought on
                    by carelessness, mistakes, or omissions in the services
                    rendered.
                  </li>
                </ul>
              </section>

              {/* FLIP CARDS */}
              <section>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566] text-center">
                  Key features of Fidelity Insurance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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

              {/* WHO NEEDS SECTION */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#003566]">
                  Who Needs Fidelity United Liability Insurance?
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  It is imperative for professionals and business owners who may
                  be held legally liable for their operations to get Fidelity
                  United Liability Insurance. This insurance aids in reducing the
                  financial risks connected to negligence, damage, or injury
                  claims.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  This insurance is beneficial to businesses of all sizes,
                  medical professionals, and product producers. As an example,
                  producers may be able to obtain product liability insurance to
                  protect themselves from losses brought on by defective goods.
                  Conversely, business owners frequently want coverage for
                  workplace injuries sustained by employees.
                </p>
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
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566] mb-4">
                    Why Choose iNSURA?
                  </h2>
                  <h3 className="mt-3 text-muted-foreground leading-relaxed">
                    We believe in going above and beyond to ensure your Business
                    totally protected.
                  </h3>
                  <div className="space-y-4">
                    {/* 1 – Budget Friendly Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#616364]">
                          Budget Friendly Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          iNSURA Identify the best fidelity insurance in uae by
                          considering your specific needs and budget and
                          customize insurance plans to align with your
                          requirements.
                        </div>
                      )}
                    </div>

                    {/* 2 – 10,000+ Satisfied Customers */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#616364]">
                          10,000+ Satistfied Customers
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          With over 10,000+ satisfied customers, iNSURA.ae is a
                          reliable name in the insurance sector.
                        </div>
                      )}
                    </div>

                    {/* 3 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#616364]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We go beyond standard coverage, offering a
                          comprehensive package.
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={scrollToHero}
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* TABLE SECTION */}
              <section className="mt-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-8">
                  Fidelity Liability Insurance Coverage Included
                </h2>

                <div className="border border-black rounded-md overflow-hidden">
                  {/* Public Liability */}
                  <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] border-b border-black">
                    <div className="pt-4 pb-4 pl-4 pr-2 font-semibold">
                      Public Liability
                    </div>

                    <div className="p-4 border-l border-black">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Death or physical harm to any individual not employed
                          by the insured or a subcontractor
                        </li>
                        <li>
                          Damage to non-owned, trust-owned, or controlled
                          property that is not under the insured’s, their
                          employees’, or their subcontractors' control and is
                          not covered by another policy
                        </li>
                        <li>
                          All fees and charges related to defending against any
                          claim made against the insured
                        </li>
                        <li>
                          The proposer may specify indemnity limits for any one
                          claim, incident, or duration of fidelity insurance.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Process to Claim */}
                  <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] border-b border-black">
                    <div className="pt-4 pb-4 pl-4 pr-2 font-semibold">
                      Process to Claim
                    </div>
                    <div className="p-4 border-l border-black">
                      Visit INSURA.ae Car Insurance page, fill your details in a
                      form available on the page, then wait — our Insurance
                      Manager will contact you.
                    </div>
                  </div>

                  {/* Insurance Claim Support */}
                  <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] border-b border-black">
                    <div className="pt-4 pb-4 pl-4 pr-2 font-semibold">
                      Insurance Claim Support
                    </div>
                    <div className="p-4 border-l border-black">
                      24 x 7 Support
                    </div>
                  </div>

                  {/* Coverages Available */}
                  <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] border-b border-black">
                    <div className="pt-4 pb-4 pl-4 pr-2 font-semibold">
                      Coverages Available
                    </div>
                    <div className="p-4 border-l border-black">
                      Driver Cover, Passenger Cover, Natural Calamities,
                      Replacement Of Vehicle, Roadside Assistance
                    </div>
                  </div>

                  {/* Purchase / Renew Process */}
                  <div className="grid grid-cols-1 md:grid-cols-[230px_1fr]">
                    <div className="pt-4 pb-4 pl-4 pr-2 font-semibold">
                      Purchase / Renew Process
                    </div>
                    <div className="p-4 border-l border-black">Online</div>
                  </div>
                </div>
              </section>

              {/* IMAGE BANNER */}
              <section className="mt-16 space-y-10">
                <div className="w-full">
                  <img
                    src="/event.webp"
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
