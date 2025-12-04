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
    title: "Coverage for Negligence",
    description:
      "Protects against claims of professional negligence, errors, or omissions in services provided.",
  },
  {
    title: "Legal Defense Costs",
    description:
      "Covers legal fees and expenses related to defending against a claim.",
  },
  {
    title: "Compensation Payments",
    description:
      "Provides financial compensation for damages awarded to the claimant.",
  },
  {
    title: "Reputation Protection",
    description:
      "Helps maintain your professional reputation by managing claims effectively.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is Professional Indemnity Insurance?",
    answer: (
      <p>
        Professional Indemnity Insurance (PI) provides coverage for legal costs
        and expenses incurred in your defense, as well as any damages or
        compensation awarded to clients if you are found liable for professional
        negligence, errors, or omissions in your services.
      </p>
    ),
  },
  {
    question: "Why do I need Professional Indemnity Insurance?",
    answer: (
      <p>
        Professional Indemnity Insurance is essential for protecting your
        business against financial losses arising from claims of professional
        negligence or mistakes. It safeguards your reputation and ensures you
        can continue operating without the financial burden of legal fees and
        compensation payments.
      </p>
    ),
  },
  {
    question: "Who needs Professional Indemnity Insurance?",
    answer: (
      <p>
        Professional Indemnity Insurance is crucial for a wide range of
        professionals, including consultants, accountants, architects,
        engineers, lawyers, healthcare professionals, IT professionals, and
        creative professionals such as designers and writers.
      </p>
    ),
  },
  {
    question: "How do I file a claim under Professional Indemnity Insurance?",
    answer: (
      <p>
        To file a claim, notify your insurer as soon as possible, provide all
        necessary documentation and details of the claim, and cooperate with the
        insurance company throughout the claims process to ensure timely and
        accurate resolution.
      </p>
    ),
  },
  {
    question: "How does Professional Indemnity Insurance benefit my business?",
    answer: (
      <p>
        PI Insurance protects your business from financial losses due to legal
        claims, enhances your reputation by demonstrating a commitment to high
        standards, and provides peace of mind, allowing you to focus on
        delivering quality services.
      </p>
    ),
  },
];

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ✅ NEW: multi-open state for “Why Choose iNSURA?”
  const [whyOpen, setWhyOpen] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  // ✅ NEW: scroll to hero on Buy Now
  const scrollToHero = () => {
    const el = document.getElementById("pi-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) – wrapped with ID for scrolling */}
      <section id="pi-hero">
        <PageHero
          breadcrumb="Professional Indemnity"
          title="Professional Indemnity"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#003566] mb-4">
            Professional Indemnity Insurance
          </h2>
          <p className="text-[17px] md:text-[25px] text-[#6b6b6b] leading-relaxed mb-8">
            Comprehensive Coverage Against Negligence Claims, Errors, and
            Omissions with Insura.ae’s{" "}
            <span className="font-semibold text-[#4b4b4b]">
              Professional Indemnity Insurance.
            </span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-16">
              {/* BREAKING DOWN POLICY HEADING */}
              <h2 className="text-3xl md:text-4xl font-semibold text-[#003566] mb-4">
                Buy to Protect Your Profession
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

              {/* (old text that you already had, kept as-is) */}
              <p className="text-muted-foreground leading-relaxed">
                Professional Indemnity Insurance (PI) provides coverage for legal costs and expenses incurred in your defense, as well as any damages or compensation awarded to clients if you are found liable for professional negligence or mistakes. This insurance is essential for professionals who provide advice, consultancy, or services to clients, protecting your business and reputation.
              </p>

              {/* ============ IMAGE 1 CONTENT (existing, kept) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  Who Needs Professional Indemnity Insurance?
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Professional Indemnity Insurance is crucial for a wide range
                  of professionals, including:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-semibold">Consultants:</span>{" "}
                    Management, IT, marketing, and other consultancy services.
                  </li>
                  <li>
                    <span className="font-semibold">Accountants:</span>{" "}
                    Financial advisors and auditors.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Architects and Engineers:
                    </span>{" "}
                    Construction and design professionals.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Lawyers and Solicitors:
                    </span>{" "}
                    Legal practitioners.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Healthcare Professionals:
                    </span>{" "}
                    Doctors, nurses, and medical practitioners.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Creative Professionals:
                    </span>{" "}
                    Designers, writers, and advertising professionals.
                  </li>
                  <li>
                    <span className="font-semibold">IT Professionals:</span>{" "}
                    Software developers, IT consultants, and cybersecurity
                    experts.
                  </li>
                </ul>
              </section>

              {/* KEY FEATURES – second part of first image */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  Key Features of iNSURA.AE Professional Indemnity Insurance
                </h2>

                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                  <li>
                    <span className="font-bold text-[#716c6c]">
                      Extensive Coverage:
                    </span>{" "}
                    Our policy offers comprehensive protection against claims of:
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>
                        <span className="font-bold text-[#716c6c]">
                          Professional Negligence –
                        </span>{" "}
                        Errors, omissions, or mistakes in your professional
                        services.
                      </li>
                      <li>
                        <span className="font-bold text-[#716c6c]">
                          Breach of Duty –
                        </span>{" "}
                        Failure to perform your professional duties adequately.
                      </li>
                      <li>
                        <span className="font-bold text-[#716c6c]">
                          Misrepresentation –
                        </span>{" "}
                        Providing inaccurate or misleading information.
                      </li>
                      <li>
                        <span className="font-bold text-[#716c6c]">
                          Defamation –
                        </span>{" "}
                        Unintentional libel or slander.
                      </li>
                      <li>
                        <span className="font-bold text-[#716c6c]">
                          Intellectual Property Infringement –
                        </span>{" "}
                        Unauthorised use of third-party intellectual property.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-bold text-[#716c6c]]">
                      Legal Defense Costs:
                    </span>{" "}
                    In the event of a claim, our insurance covers the legal
                    costs and expenses incurred in defending your case,
                    including court fees and attorney charges. This ensures that
                    you have the financial support needed to handle legal
                    proceedings without compromising your business&apos;s
                    financial stability.
                  </li>

                  <li>
                    <span className="font-bold text-[#716c6c]">
                      Compensation and Damages:
                    </span>{" "}
                    Our policy provides coverage for any compensation or damages
                    awarded to the claimant, ensuring that you can meet your
                    financial obligations without straining your business
                    resources. This includes settlements reached outside of
                    court as well as court-ordered payments.
                  </li>

                  <li>
                    <span className="font-bold text-[#716c6c]">
                      Retroactive Cover:
                    </span>{" "}
                    Our Professional Indemnity Insurance includes retroactive
                    cover, protecting you against claims arising from work
                    completed before the policy&apos;s inception, provided no
                    known claims or circumstances existed at the start of the
                    policy.
                  </li>

                  <li>
                    <span className="font-bold text-[#716c6c]">
                      Flexible Policy Options:
                    </span>{" "}
                    We offer customisable policy options to suit your specific
                    needs, with varying coverage limits, deductibles, and
                    additional benefits. This flexibility allows you to tailor
                    the policy to match the unique risks associated with your
                    profession.
                  </li>
                </ol>

                <button
                  className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  onClick={scrollToHero}
                >
                  Buy Now
                </button>
              </section>

              {/* ============ IMAGE 2 CONTENT – WHY CHOOSE INSURA (existing, kept) ============ */}
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
                    {/* 1 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          iNSURA.AE Workmen Compensation Insurance offers
                          extensive coverage, including medical expenses,
                          rehabilitation costs, and compensation for lost wages
                          due to workplace injuries or illnesses.
                        </div>
                      )}
                    </div>

                    {/* 2 – Dedicated Support */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          Dedicated Support
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Our dedicated team of insurance professionals provides
                          personalized service and ongoing support, helping you
                          navigate insurance complexities with ease.
                        </div>
                      )}
                    </div>

                    {/* 3 – Prompt Claims Settlement */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          Prompt Claims Settlement
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Our efficient claims handling process ensures quick
                          resolution and minimal disruption to your business
                          operations in the event of a claim.
                        </div>
                      )}
                    </div>

                    {/* 4 – Compliance Assurance */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(3)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#4b4b4b]">
                          Compliance Assurance
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[3] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[3] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We ensure that your business complies with UAE labor
                          laws, providing peace of mind and protection against
                          legal liabilities related to employee injuries.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    We ensure you follow the rules and give you the right
                    coverage for your business.
                  </p>

                  <button
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                    onClick={scrollToHero}
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* HOW PI HELPS PROFESSIONALS (kept content) */}
              <section className="space-y-4 mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003566]">
                  How Professional Indemnity Insurance helping Professionals in
                  UAE.
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  In the fast-paced and dynamic professional environment of the
                  UAE, businesses and individuals face various risks associated
                  with their services and advice. Professional Indemnity
                  Insurance (PI) plays a crucial role in safeguarding
                  professionals from the financial repercussions of claims
                  arising from negligence, errors, or omissions.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Professional Indemnity Insurance (PI) provides coverage for
                  legal costs and compensation payments, ensuring that
                  professionals can defend themselves against claims without
                  jeopardising their financial stability. This insurance covers
                  a range of scenarios, including professional negligence,
                  misrepresentation, breach of duty, and intellectual property
                  infringement. By covering these risks, PI helps professionals
                  maintain their reputation and business continuity.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For professionals in fields such as consultancy, accounting,
                  law, healthcare, and IT, the possibility of facing legal
                  claims is a significant concern. PI insurance offers peace of
                  mind by mitigating the financial impact of such claims. It
                  covers legal defence costs, court fees, and any compensation
                  awarded to claimants, allowing professionals to focus on their
                  work without the constant worry of potential lawsuits.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Having Professional Indemnity Insurance demonstrates a
                  commitment to high standards of service and accountability.
                  Clients are more likely to trust and engage with professionals
                  who have PI coverage, knowing that they are protected in case
                  of any errors or issues. This trust can lead to stronger
                  client relationships and a better reputation in the market.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  In the UAE, professionals operate in diverse sectors with
                  varying risks. Professional Indemnity Insurance can be
                  tailored to meet the specific needs of different professions,
                  providing relevant and adequate coverage. This flexibility
                  ensures that professionals receive protection suited to their
                  unique circumstances, enhancing their overall risk management
                  strategy.
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

              {/* SUCCESS STORIES WITH VIDEO */}
              <section className="space-y-6 mt-12">
                <p className="text-[#4b4b4b] font-semibold leading-relaxed">
                  Professional Indemnity Insurance is essential for professionals in the UAE,
                  offering financial protection, enhancing client trust, and providing tailored
                  coverage to meet specific professional risks, with the peace of mind that
                  comes from knowing they are protected, professionals can focus on delivering
                  exceptional services and driving their businesses forward.
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

              {/* FAQ */}
              <section className="space-y-4 mt-4">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#003566] text-center mb-4">
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
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#02192e] text-white font-semibold text-xl md:text-xl"
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
