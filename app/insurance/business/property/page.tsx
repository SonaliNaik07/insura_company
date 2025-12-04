"use client";

import { useState, FormEvent } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

const coverageCards = [
  {
    title: "Home Insurance",
    description: "Home Insurance: To protect your home and belongings!.",
  },
  {
    title: "Real estate Insurance",
    description:
      "Real Estate Insurance: Your property is fully protected with real estate insurance!",
  },
  {
    title: "Natural Disaster",
    description:
      "Natural Disaster: Get covered for earthquakes, floods, hurricanes, and more!",
  },
  {
    title: "Group Health Insurance",
    description:
      "Covers employees within a company, offering standard features with some customization options.",
  },
];

const whyChooseItems = [
  {
    title: "Coverage for all types of property",
    content: (
      <ul className="list-disc ml-6 space-y-1 text-[#7e7b7b]">
        <li>Residential Property</li>
        <li>Commercial Property</li>
        <li>Industrial Property</li>
        <li>Personal Property</li>
      </ul>
    ),
  },
  {
    title: "Protection against a wide range of risks",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Fire, theft, vandalism, natural disasters, and more.
      </p>
    ),
  },
  {
    title: "Flexible policy terms",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Customized to meet your specific needs.
      </p>
    ),
  },
  {
    title: "Fast and efficient claims process",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Ensuring you get the support you need quickly.
      </p>
    ),
  },
  {
    title: "Affordable premiums",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Competitive rates without compromising on coverage.
      </p>
    ),
  },
];

const faqItems = [
  {
    question: "What is Property All Risks Insurance?",
    answer:
      "Property All Risks Insurance is a broad form of property cover that helps protect your buildings, contents and other insured assets against many sudden and unforeseen losses, except those specifically excluded in the policy.",
  },
  {
    question: "What does Property All Risks Insurance cover?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Fire and Explosion</li>
        <li>Theft and Burglary</li>
        <li>Vandalism and Malicious Damage</li>
        <li>Natural Disasters</li>
        <li>Accidental Damage</li>
        <li>Water Damage</li>
        <li>Impact Damage (e.g., from vehicles or falling objects)</li>
      </ul>
    ),
  },
  {
    question: "What types of properties can be insured under this policy?",
    answer: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Residential buildings and homes</li>
        <li>Commercial properties (offices, shops, warehouses)</li>
        <li>Industrial properties</li>
        <li>Personal property and belongings</li>
      </ul>
    ),
  },
  {
    question: "How is Property All Risks Insurance different from standard property insurance?",
    answer:
      "While standard property insurance typically covers specified risks, Property All Risks Insurance offers broader coverage, protecting against a wider range of potential damages and losses. It provides more comprehensive protection and peace of mind.",
  },
  {
    question: "Why choose iNSURA.ae for Property All Risks Insurance?",
    answer:
      "iNSURA.ae works with reputable insurers in the UAE to help you compare options, customise cover, and receive support throughout quotation, policy issuance and claims handling.",
  },
];

type Errors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
  business?: string;
};

export default function PropertyAllRisksPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // multi-open state for "Why Choose iNSURA?"
  const [whyOpen, setWhyOpen] = useState<boolean[]>([
    true,
    false,
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
    const el = document.getElementById("property-hero");
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
      newErrors.mobile = "This field is required.  Please input a phone number. ";
    }
    if (!form.email.value.trim()) {
      newErrors.email = "This field is required. Please input a valid email  ";
    }
    

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // You can replace this with real submit logic (API call, etc.)
    alert("Form submitted successfully!");
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="property-hero">
        <PageHero
          breadcrumb="Property All Risks Insurance"
          title="Property All Risks Insurance"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Property All Risks Insurance in UAE
          </h2>
          <p className="text-2xl md:text-lg text-[#4b4b4b] mb-8">
            Like Your Business Protect Your Property as Well in UAE with{" "}
            <span className="font-bold">
              Property All Risks Insurance in UAE.
            </span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* BUY INSURANCE + FORM */}
              <section className="space-y-6">
                <h3 className="text-4xl md:text-4xl font-semibold text-[#003566]">
                  Buy Insurance That Fits You….
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Company name */}
                  <div>
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Company name 
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="enter company name..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.company ? "border " : ""
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
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Concern Person name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="person"
                      type="text"
                      placeholder="enter person name..."
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none ${
                        errors.person ? "borde" : ""
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
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Select bussiness category
                    </label>
                    <select
                      name="business"
                      className={`w-full p-3 rounded-lg bg-[#f2f7ff] outline-none transition-colors hover:bg-[#23b5ff] hover:text-white ${
                        errors.business ? "border" : ""
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
                                         onClick={scrollToHero}

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

              {/* NOW YOU DON'T NEED TO WORRY SECTION */}
              <section className="space-y-4">
                <h2 className="text-3xl md:text-3xl font-semibold text-[#003566]">
                  Now You don&apos;t need to Worry About Your Property in UAE
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Owning property in the UAE comes with a sense of pride and
                  achievement. Whether it&apos;s a commercial building,
                  residential complex, or personal property, ensuring its safety
                  and security is paramount. At Insura.ae, we understand the
                  value of your investments and offer comprehensive Property All
                  Risks Insurance to provide you with peace of mind.
                </p>
              </section>

              {/* WHY YOU SHOULD HAVE PAR */}
              <section className="space-y-4">
                <h2 className="text-3xl md:text-3xl font-semibold text-[#003566]">
                  Why You Should Have Property All Risks Insurance in UAE?
                </h2>

                <ol className="space-y-4 list-decimal list-inside text-[#4a4848]">
                  <li>
                    <span className="font-bold text-[#4a4848]">
                      Comprehensive Coverage –{" "}
                    </span>
                    Our Property All Risks Insurance policy covers a wide range
                    of risks, including fire, theft, natural disasters,
                    accidental damage, and more. With this extensive protection,
                    you can rest assured that your property is safeguarded
                    against unforeseen events.
                  </li>
                  <li>
                    <span className="font-bold text-[#4a4848]">
                      Tailored Solutions –{" "}
                    </span>
                    We know that each property is unique, and so are its
                    insurance needs. Our team works closely with you to
                    customize an insurance plan that fits your specific
                    requirements, ensuring you get the best coverage possible.
                  </li>
                  <li>
                    <span className="font-bold text-[#4a4848]">
                      Financial Protection –{" "}
                    </span>
                    In the event of damage or loss, our insurance policy
                    provides financial compensation to help you recover and
                    rebuild without bearing the financial burden alone. This
                    support is crucial in maintaining your property’s value and
                    functionality.
                  </li>
                  <li>
                    <span className="font-bold text-[#4a4848]">
                      Expert Assistance –{" "}
                    </span>
                    Our experienced insurance advisors are here to guide you
                    through the process, from selecting the right coverage to
                    filing a claim. We are committed to providing exceptional
                    service and support every step of the way.
                  </li>
                </ol>
              </section>

              {/* SECURE YOUR PROPERTY */}
              <section className="space-y-4">
                <h2 className="text-3xl md:text-3xl font-semibold text-[#003566]">
                  Secure Your Property Today!!!
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Don’t let unforeseen events disrupt your peace of mind. With{" "}
                  <span className="text-[#4a4848] font-bold">
                    Insura.ae’s Property All Risks Insurance,
                  </span>{" "}
                  you can confidently protect your valuable assets. Contact us
                  today to learn more about our policies and get a quote
                  tailored to your needs.
                </p>
              </section>

              {/* WHY CHOOSE INSURA */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mt-6">
                {/* Left Image */}
                <div className="flex justify-center md:justify-start h-full">
                  <img
                    src="/services-details-img1.webp"
                    alt="Business Meeting"
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>

                {/* Right Accordion */}
                <div className="space-y-4 max-w-md h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl md:text-3xl font-semibold text-[#003566] mb-4">
                      Why Choose iNSURA?
                    </h2>

                    <div className="space-y-6">
                      {whyChooseItems.map((item, index) => {
                        const isOpen = whyOpen[index];

                        return (
                          <div
                            key={item.title}
                            className="border-b border-gray-200 pb-4"
                          >
                            <button
                              type="button"
                              onClick={() => toggleWhy(index)}
                              className="w-full flex items-center justify-between text-left"
                            >
                              <span className="font-semibold text-[16px] text-[#414142]">
                                {item.title}
                              </span>
                              <span className="text-lg text-[#003566]">
                                {isOpen ? "▲" : "▼"}
                              </span>
                            </button>

                            {isOpen && (
                              <div className="mt-3">{item.content}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom text + Button aligned at bottom */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                      Say goodbye to worries and ensure your property with
                      security in UAE.
                    </p>

                    <button
                      className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow"
                      onClick={scrollToHero}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </section>

              {/* HOW INSURA HAS HELPED 1000+ CUSTOMERS */}
              <section className="space-y-6 mt-16">
                <h2 className="text-3xl md:text-3xl font-bold text-[#003566]">
                  How Insura.ae Property All Risks Insurance has Helped 1000+
                  Customers in the UAE
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  At Insura.ae, we pride ourselves on providing top-notch
                  insurance solutions that meet the diverse needs of our
                  clients. Over the years, our Property All Risks Insurance has
                  helped more than 1000 customers across the UAE protect their
                  valuable assets and secure their investments. Here&apos;s how
                  we&apos;ve made a difference:
                </p>

                {/* 1 */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-2xl font-bold text-[#003566]">
                    Comprehensive Coverage Tailored to Individual Needs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-[#424242]">
                      Customized Insurance Plans:&nbsp;
                    </span>
                    Each property is unique, and so are its insurance
                    requirements. Our team of experts works closely with clients
                    to create tailored insurance plans that provide
                    comprehensive coverage for their specific needs. Whether
                    it&apos;s a residential building, commercial property, or
                    personal asset, we ensure our customers have the right
                    protection.
                  </p>
                </div>

                {/* 2 */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-2xl font-bold text-[#003566]">
                    Swift and Efficient Claims Process
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-[#424242]">
                      Fast Claims Settlement:&nbsp;
                    </span>
                    We understand the urgency of getting back on track after a
                    loss or damage. Our streamlined claims process ensures that
                    our customers receive prompt assistance and quick settlement
                    of their claims, minimizing their downtime and financial
                    stress.
                  </p>
                </div>

                {/* 3 */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-2xl font-bold text-[#003566]">
                    Financial Protection Against Unforeseen Events
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-[#424242]">
                      Peace of Mind:&nbsp;
                    </span>
                    Our Property All Risks Insurance provides financial
                    compensation for damages caused by fire, natural disasters,
                    theft, vandalism, and other unexpected events. This
                    financial protection helps our customers recover and rebuild
                    without bearing the full financial burden alone.
                  </p>
                </div>

                {/* 4 */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-2xl font-bold text-[#003566]">
                    Expert Guidance and Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-[#424242]">
                      Dedicated Customer Service:&nbsp;
                    </span>
                    Our experienced insurance advisors are always available to
                    guide customers through the insurance process. From
                    selecting the right coverage to filing a claim, we provide
                    ongoing support to ensure our customers feel confident and
                    informed every step of the way.
                  </p>
                </div>

                {/* 5 */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-2xl font-bold text-[#003566]">
                    Enhancing Property Value and Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-[#424242]">
                      Maintaining Property Value:&nbsp;
                    </span>
                    By protecting properties against potential risks, our
                    insurance solutions help maintain and even enhance the value
                    of our customers’ investments. This is particularly crucial
                    in the dynamic real estate market of the UAE.
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
                <h2 className="text-3xl md:text-3xl font-extrabold text-[#003566]">
                  Success Stories from Our Customers
                </h2>

                <h3 className="font-bold text-2xl text-[#01274b]">
                  Real-life Impact
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-[#434445]">
                    Business Continuity:
                  </span>
                  &nbsp;A local business owner faced significant fire damage to
                  their commercial property. Thanks to our comprehensive
                  coverage and quick claims process, they received the financial
                  support needed to rebuild and resume operations swiftly.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-[#434445]">
                    Residential Protection:
                  </span>
                  &nbsp;A homeowner experienced severe damage due to a sudden
                  storm. Our insurance policy covered the repair costs, allowing
                  the family to restore their home without financial strain.
                </p>

                {/* Embedded YouTube video */}
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
              <section className="space-y-4 mt-1">
                <div className="space-y-1">
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
                          className="w-full flex items-center gap-3 px-4 py-3 bg-[#032341] text-white font-semibold text-2xl md:text-xl"
                        >
                          <span className="text-xl">
                            {isOpen ? "−" : "+"}
                          </span>
                          <span className="text-left">{faq.question}</span>
                        </button>

                        {/* Answer */}
                        {isOpen && (
                          <div className="bg-white text-muted-foreground px-6 py-4 border border-t-0 border-[#003566]">
                            <div className="text-xl md:text-base leading-relaxed space-y-2">
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

            {/* RIGHT COLUMN – Sidebar exactly as is */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
