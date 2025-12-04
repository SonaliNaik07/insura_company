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
    title: "Protection for Healthcare Professionals",
    description:
      "Medical professionals face the constant risk of facing lawsuits due to the nature of their work. Even with the highest standards of care, errors can occur. Medical malpractice insurance provides financial protection and covers legal costs, settlements, and damages awarded in a lawsuit.",
  },
  {
    title: "Legal Requirement",
    description:
      "In many jurisdictions, including the UAE, medical malpractice insurance is a legal requirement for healthcare professionals. It ensures that medical practitioners adhere to industry standards and are financially prepared to handle potential claims.",
  },
  {
    title: "Financial Stability",
    description:
      "Property insurance protects businesses from financial losses arising from damage or loss of equipment, inventory, or property due to events such as fire, theft or natural disasters.",
  },
  {
    title: "Reputation Management",
    description:
      "A malpractice claim can significantly impact a medical professional's reputation. Having insurance in place not only provides financial protection but also aids in managing and mitigating reputational damage.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Medical Malpractice Insurance?",
    answer: (
      <p>
        Medical malpractice insurance is a type of professional liability
        insurance designed to protect healthcare professionals against claims of
        negligence or misconduct that result in patient injury or harm. It
        covers legal defense costs, settlements, and damages awarded in a
        lawsuit.
      </p>
    ),
  },
  {
    question: "Is Medical Malpractice Insurance Mandatory in the UAE?",
    answer: (
      <p>
        Yes, medical malpractice insurance is mandatory for healthcare
        professionals in the UAE. The regulatory bodies, such as the Ministry of
        Health and Prevention (MOHAP) and local health authorities, require
        medical practitioners to have this insurance as part of their licensing
        requirements.
      </p>
    ),
  },
  {
    question: "What Does Medical Malpractice Insurance Cover?",
    answer: (
      <div>
        <p>Medical malpractice insurance typically covers:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Legal Defense Costs: Expenses related to attorneys and courts.</li>
          <li>Settlement Payments: Amounts paid to settle claims out of court.</li>
          <li>
            Damages Awarded: Compensation ordered by the court to the plaintiff.
          </li>
          <li>
            Investigation Costs: Expenses incurred to investigate and assess the
            claim.
          </li>
          <li>
            Public Relations Support: Assistance with managing media coverage
            and public perception related to the claim.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Who Needs Medical Malpractice Insurance?",
    answer: (
      <div>
        <p>
          Medical malpractice insurance is necessary for a wide range of
          healthcare professionals, including:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Doctors</li>
          <li>Surgeons</li>
          <li>Nurses</li>
          <li>Dentists</li>
          <li>Pharmacists</li>
          <li>Therapists</li>
          <li>Allied health professionals</li>
          <li>Medical institutions such as hospitals and clinics</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Where Can I Get Medical Malpractice Insurance in the UAE?",
    answer: (
      <p>
        Medical malpractice insurance can be obtained from various insurance
        providers in the UAE like iNSURA.AE. It is important to choose a
        provider with a good reputation and expertise in the healthcare sector.
      </p>
    ),
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
    const el = document.getElementById("medical-hero");
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
      // replace this with real API call later
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="medical-hero">
        <PageHero
          breadcrumb="Medical Malpractice"
          title="Medical Malpractice"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003566] mb-4">
            Medical Malpractice Insurance in the UAE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-12 text-justify">

              {/* FORM SECTION */}
              <section className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#003566]">
                  Buy Insurance That Fits Your Business....
                </h3>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Company name 
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

              {/* ============ NEW SECTION AFTER CARDS (IMAGE 1 CONTENT) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#003566]">
                  Coverage Offered by Medical Malpractice Insurance
                </h2>

                <p className="font-semibold text-xl text-[#4b4b4b]">
                  Medical malpractice insurance typically offers coverage for:
                </p>

                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                  <li>
                    <span className="font-bold">Legal Defense Costs:</span>{" "}
                    Includes expenses related to hiring attorneys, court fees,
                    and other legal costs associated with defending against a
                    malpractice claim.
                  </li>
                  <li>
                    <span className="font-bold">Settlement Payments:</span>{" "}
                    If a claim is settled out of court, the insurance covers the
                    settlement amount, which can be substantial depending on the
                    severity of the case.
                  </li>
                  <li>
                    <span className="font-bold">Damages Awarded:</span> When
                    a court rules in favour of the plaintiff, the policy covers
                    damages awarded, which may include compensation for pain and
                    suffering, medical expenses, and loss of income.
                  </li>
                  <li>
                    <span className="font-bold">Investigation Costs:</span>{" "}
                    May cover the costs of investigating the claim to determine
                    its validity and assess the extent of liability.
                  </li>
                  <li>
                    <span className="font-bold">
                      Public Relations Support:
                    </span>{" "}
                    Some policies offer support for managing public relations
                    and addressing media coverage related to the claim.
                  </li>
                </ol>
              </section>

              {/* ============ LEGAL FRAMEWORK SECTION (IMAGE 2 CONTENT) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#003566]">
                  Legal Framework for Medical Malpractice in the UAE
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-bold text-[#4b4c4c]">
                      Federal Law No. 10 of 2008 →
                    </h3>
                    <p>
                      Known as the “Federal Law on Medical Liability,” this law
                      outlines the regulations and procedures for addressing
                      medical malpractice claims in the UAE. It establishes the
                      legal grounds for filing a claim and the processes
                      involved.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#4b4c4c]">
                      Regulatory Bodies →
                    </h3>
                    <p>
                      The UAE’s healthcare sector is regulated by various
                      bodies, including the Ministry of Health and Prevention
                      (MOHAP) and local health authorities. These bodies set
                      standards for medical practice and ensure compliance with
                      legal and ethical guidelines.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#4b4c4c]">
                      Legal Procedures →
                    </h3>
                    <p>
                      To file a medical malpractice claim, the affected party
                      must present evidence of negligence or misconduct. Claims
                      are typically submitted to the relevant health authority
                      or court, where they undergo investigation and legal
                      proceedings.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#4b4c4c]">
                      Time Limits →
                    </h3>
                    <p>
                      There are statutory time limits for filing medical
                      malpractice claims in the UAE. Generally, claims must be
                      filed within a specified period from the date of the
                      alleged malpractice or from when the harm was discovered.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#4b4c4c]">
                      Burden of Proof →
                    </h3>
                    <p>
                      The burden of proof lies with the plaintiff, who must show
                      that the healthcare provider’s actions fell below the
                      accepted standard of care and that this breach caused
                      harm.
                    </p>
                  </div>
                </div>
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
                    {/* 1 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#4d4e4e]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          At Insura.ae, we understand that the stakes are high
                          when it comes to medical malpractice insurance. Our
                          policies offer comprehensive coverage designed to
                          protect healthcare professionals from a range of risks
                          associated with medical malpractice claims.
                        </div>
                      )}
                    </div>

                    {/* 2 – Tailored Solutions */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#4d4e4e]">
                          Tailored Solutions
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Every healthcare provider’s needs are unique, and so
                          are the risks they face. Insura.ae offers tailored
                          insurance solutions to match your specific
                          requirements.
                        </div>
                      )}
                    </div>

                    {/* 3 – Expertise in UAE Market */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#4d4e4e]">
                          Expertise in the UAE Market
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Insura.ae specializes in the UAE insurance market,
                          with deep understanding of local regulations, industry
                          standards, and healthcare practices.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Choosing Insura.ae for your medical malpractice insurance
                    needs in the UAE offers a range of benefits and strong
                    protection for your practice.
                  </p>

                  <button
                    onClick={scrollToHero}
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* ============ BENEFITS SECTION – PART 1 (IMAGE 3) ============ */}
              <section className="space-y-6 mt-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                  Benefits of Having Medical Malpractice Insurance in the UAE
                </h2>

                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                  <li>
                    <span className="font-bold text-[#4b4c4c]">
                      Financial Protection
                    </span>
                    <p>
                      One of the primary benefits is the financial protection it
                      offers. Legal claims can be extremely costly, including
                      legal fees, settlements, and compensation payments.
                      Medical malpractice insurance helps ensure healthcare
                      professionals do not face financial ruin due to a single
                      claim.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold text-[#4b4c4c]">
                      Compliance with Legal Requirements
                    </span>
                    <p>
                      In the UAE, medical malpractice insurance is often a legal
                      requirement. Having this cover ensures compliance with
                      local laws and regulations, helping practitioners maintain
                      their licenses and continue practising without
                      interruptions.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold text-[#4b4c4c]">
                      Peace of Mind
                    </span>
                    <p>
                      Knowing you are covered provides significant peace of
                      mind. Healthcare professionals can focus on their duties
                      with confidence, knowing they have protection against
                      potential claims, which can improve job satisfaction and
                      performance.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold text-[#4b4c4c]">
                      Reputation Management
                    </span>
                    <p>
                      A malpractice claim can severely damage a medical
                      professional’s reputation. Insurance helps manage and
                      mitigate reputational damage, with some policies including
                      support for handling media coverage and public
                      perceptions.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold text-[#4b4c4c]">
                      Access to Legal Expertise
                    </span>
                    <p>
                      Policies often include access to legal experts and defence
                      teams experienced in medical malpractice cases. This
                      guidance and representation can increase the chances of a
                      favourable outcome.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold text-[#4b4c4c]">
                      Risk Management and Prevention
                    </span>
                    <p>
                      Many insurers offer risk management services as part of
                      their package, including training, resources, and
                      guidelines to help professionals minimise the likelihood
                      of malpractice claims through improved practices and
                      preventative measures.
                    </p>
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

              {/* ============ BENEFITS SECTION – PART 2 (IMAGE 4) ============ */}
              <section className="space-y-6 mt-10 text-muted-foreground">
                <ol start={7} className="space-y-6 list-decimal list-inside">
                  {/* 7 */}
                  <li>
                    <span className="font-semibold text-[#4b4c4c]">
                      Comprehensive Coverage
                    </span>
                    <p className="mt-2">
                      Medical malpractice insurance provides comprehensive
                      coverage for various aspects of a claim. This includes:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>
                        <strong>Legal Defense Costs:</strong> Covering expenses
                        related to hiring attorneys and court fees.
                      </li>
                      <li>
                        <strong>Settlement Payments:</strong> Handling
                        settlements made out of court.
                      </li>
                      <li>
                        <strong>Damages Awarded:</strong> Paying for
                        compensation awarded by the court to the plaintiff.
                      </li>
                      <li>
                        <strong>Investigation Costs:</strong> Covering the costs
                        of investigating the claim.
                      </li>
                      <li>
                        <strong>Public Relations Support:</strong> Managing
                        public relations and media coverage related to the
                        claim.
                      </li>
                    </ul>
                  </li>

                  {/* 8 */}
                  <li>
                    <span className="font-semibold text-[#4b4c4c]">
                      Enhanced Patient Trust
                    </span>
                    <p className="mt-2">
                      Patients are more likely to trust healthcare providers who
                      have medical malpractice insurance. Knowing that their
                      healthcare provider is insured reassures patients that
                      they are receiving care from a responsible and
                      professional practitioner who is prepared for any
                      eventuality. This trust can lead to improved patient
                      relationships and increased satisfaction with the care
                      provided.
                    </p>
                  </li>

                  {/* 9 */}
                  <li>
                    <span className="font-semibold text-[#4b4c4c]">
                      Protection Against Unforeseen Events
                    </span>
                    <p className="mt-2">
                      Medical practice involves a high degree of uncertainty,
                      and even the most skilled professionals can face
                      unexpected challenges. Medical malpractice insurance
                      provides a safety net against unforeseen events, such as
                      allegations of negligence or mistakes. This protection
                      allows healthcare providers to continue their practice
                      with the assurance that they are safeguarded against
                      unexpected legal and financial challenges.
                    </p>
                  </li>

                  {/* 10 */}
                  <li>
                    <span className="font-semibold text-[#4b4c4c]">
                      Support for Professional Growth
                    </span>
                    <p className="mt-2">
                      Having medical malpractice insurance supports
                      professional growth and development. Healthcare providers
                      can focus on advancing their skills and knowledge without
                      the constant worry of potential claims. This focus on
                      continuous improvement can lead to better patient outcomes
                      and a more fulfilling career in the medical field.
                    </p>
                  </li>

                  {/* 11 */}
                  <li>
                    <span className="font-semibold text-[#4b4c4c]">
                      Protection for Medical Institutions
                    </span>
                    <p className="mt-2">
                      Medical malpractice insurance is not only beneficial for
                      individual practitioners but also for medical
                      institutions. Hospitals, clinics, and other healthcare
                      facilities can face vicarious liability for the actions of
                      their staff. By ensuring that all medical professionals
                      are adequately insured, institutions can protect
                      themselves from significant financial losses and maintain
                      their operational stability.
                    </p>

                    <p className="mt-3">
                      Medical malpractice insurance is an essential safeguard
                      for healthcare professionals and institutions in the UAE.
                      It provides financial protection, ensures compliance with
                      legal requirements, and offers peace of mind.
                      Additionally, it helps manage reputational risks, provides
                      access to legal expertise, and includes risk management
                      services.
                    </p>
                  </li>
                </ol>
              </section>

              {/* SUCCESS STORIES WITH VIDEO */}
              <section className="space-y-6 mt-12">
                {/* VIDEO */}
                <div className="mt-6 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/XHOmBV4js_E"
                    title="Customer Success Story Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* NEW PARAGRAPH */}
                <p className="text-[#4b4c4c] font-semibold leading-relaxed">
                  By having comprehensive coverage, healthcare providers can
                  enhance patient trust, protect against unforeseen events, and
                  support their professional growth. Ultimately, medical
                  malpractice insurance is a critical component of a resilient
                  and reliable healthcare system.
                </p>
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
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#02182d] text-white font-semibold text-xl md:text-xl"
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
