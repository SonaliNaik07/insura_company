"use client";

import {
  useState,
  type ReactNode,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const coverageCards = [
  {
    title: "Liability Insurance",
    description:
      "Liability Insurance is for businesses in the UAE. It protects your business against claims of injury or damage caused to third parties. This can include claims resulting from accidents, product defects, or professional errors or omissions.",
  },
  {
    title: "Workers Compensation Insurance",
    description:
      "This insurance is mandatory in the UAE and covers medical expenses, disability payments, and lost wages for employees who are injured or fall ill while on the job. This type of insurance provides peace of mind for both employers and employees.",
  },
  {
    title: "Property Insurance",
    description:
      "Property insurance protects businesses from financial losses arising from damage or loss of equipment, inventory, or property due to events such as fire, theft or natural disasters.",
  },
  {
    title: "Marine Insurance",
    description:
      "Marine insurance covers the physical loss or damage of ships, cargo, terminals, and any transport by which the property is transferred, acquired, or held between the points of origin and the final destination.",
  },
  {
    title: "Professional Indemnity",
    description:
      "Professional indemnity insurance will protect businesses from claims made against them by third parties for mistakes, omissions, errors, or financial loss.",
  },
  {
    title: "Public Liability",
    description:
      "This insurance will indemnify against all sums which the insured shall become legally liable as an occupier of the premises due to accidents causing damage and/or bodily injury (Fatal or Non-Fatal) to Third Parties arising out of their business.",
  },
];

type FormData = {
  companyName: string;
  contactPerson: string;
  mobile: string;
  email: string;
  category: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function WorkmenCompensationPage() {
  // form state
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    mobile: "",
    email: "",
    category: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // multi-open accordion for Why Choose iNSURA
  const [whyOpen, setWhyOpen] = useState<boolean[]>([true, false, false]);

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    // company name optional (no star), others required
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "This field is required. Please input your name.";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "This field is required. Please input a mobile number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required. Please input a valid email.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("GLPA / Business Insurance form submitted:", formData);
  };

  // scroll hero for Buy Now buttons
  const scrollToHero = () => {
    const el = document.getElementById("glpa-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
           <div className="lg:col-span-2 space-y-12 text-justify">

              {/* IMAGE + FORM SECTION */}
              <section className="space-y-6">
                <div className="w-full">
                  <img
                    src="/group.webp"
                    alt="Business Insurance in UAE"
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                <form
                  className="space-y-8"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name (optional) */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Company name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter company name..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 "
                      />
                    </div>

                    {/* Concern Person */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Concern Person name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Concern person name..."
                        className={`w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400  ${
                          errors.contactPerson
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {errors.contactPerson && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.contactPerson}
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
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="enter mobile number..."
                        className={`w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400  ${
                          errors.mobile
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm  text-[#797575] font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="enter email id..."
                        className={`w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400  ${
                          errors.email
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
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
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-[#23b5ff] text-white outline-none"
                    >
                      <option value="">Select category</option>
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

              {/* FLIP CARDS – Buy Insurance That Fits Your Business */}
              <section className="mt-10 space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566]">
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
                          <Home className="w-8 h-8 mb-3 text-yellow-300" />
                          <p className="text-base md:text-lg font-semibold text-center px-4">
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
                          <p className="text-center text-sm md:text-base font-medium px-4">
                            {card.description}
                          </p>

                          <button
                            type="button"
                            onClick={scrollToHero}
                            className="flex items-center gap-2 px-4 py-2 rounded-md
                              bg-white text-[#191c61] font-semibold text-xs md:text-sm
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
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566]">
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
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566]">
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
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#003566] mb-4">
                    Why Choose iNSURA?
                  </h2>

                  <div className="space-y-4">
                    {/* 1 – Comprehensive Coverage Options */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#696b6c]">
                          Comprehensive Coverage Options
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Insura.ae offers a wide range of coverage options
                          tailored to meet the specific needs of various
                          businesses and industries.
                        </div>
                      )}
                    </div>

                    {/* 2 – Competitive Pricing */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#696b6c]">
                          Competitive Pricing
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We understand that budgeting is crucial for planning.
                          Insura.ae provides competitively priced policies that
                          offer extensive coverage without breaking the bank.
                        </div>
                      )}
                    </div>

                    {/* 3 – Hassle-Free Claims Process */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#696b6c]">
                          Hassle-Free Claims Process
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          In the unfortunate event that you need to make a
                          claim, Insura.ae ensures a smooth and efficient claims
                          journey with dedicated support.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Protect your business with Insura.ae and enjoy peace of mind
                    knowing that your operations, employees, and liabilities are
                    in safe hands.
                  </p>

                  <button
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                    onClick={scrollToHero}
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* LEGAL / OPERATIONAL SECTION */}
              <section className="mt-16 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566]">
                    Legal, Operational, and Employee Protection in UAE
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Business insurance in the UAE safeguards businesses against
                    risks like property damage and liability claims. It&apos;s
                    often legally required in Dubai, ensuring compliance,
                    employee protection, operational resilience, and customer
                    trust, with extra coverage through employer&apos;s
                    liability insurance.
                  </p>
                </div>

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
