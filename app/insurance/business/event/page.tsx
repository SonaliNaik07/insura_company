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
    title: "Financial Protection ",
    description:
      "One of the primary reasons to invest in event insurance is the financial protection it offers. Organizing an event involves substantial costs, from venue rentals and catering to entertainment and decorations.",
  },
  {
    title: "Liability Coverage",
    description:
      "Events, regardless of their scale, pose potential risks to attendees, staff, and property. Accidents, injuries, or property damage can occur, leading to legal liabilities.",
  },
  {
    title: "Vendor Issues",
    description:
      "Events often rely on multiple vendors, such as caterers, photographers, and entertainers. If a vendor fails to deliver their services due to unforeseen circumstances, it can disrupt the entire event.",
  },
  {
    title: "Peace of Mind ",
    description:
      "Knowing that you have comprehensive insurance coverage allows you to focus on enjoying your event rather than worrying about potential problems.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What Does Event Insurance Cover?",
    answer: (
      <div>
        <p>
          Naturally, the coverage will differ based on the kind of policy you
          choose, however in the case of a complete event insurance policy that
          combines cancellation and event liability coverage, the following will
          usually be covered by your policy –
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            Liability Insurance protects you against any personal harm or
            property damage to third parties that results from your demonstrated
            negligence, as well as the related costs of legal defense.
          </li>
          <li>Settlement Payments: Amounts paid to settle claims out of court.</li>
          <li>
            Property Insurance cover items lost or damaged while being
            transported to and from the event. It covers stock, stands,
            furniture, and samples used during the event.
          </li>
          <li>
            Cancellation Insurance covers expenses if an unanticipated and
            unavoidable occurrence such as a storm, flood, fire, or theft of
            important items like exhibits that were crucial to the event
            prevents our event from going on.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What Is Not Covered Under Your Event Insurance?",
    answer: (
      <div>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            Any non-appearance claims for any individual who isn’t listed in the
            policy. Your insurer may reject any non-appearance claims for any
            individual who isn’t listed in the policy.
          </li>
          <li>Settlement Payments: Amounts paid to settle claims out of court.</li>
          <li>
            Any physical harm or disability claims where it has been established
            that the victim was under the influence of drugs that cause
            intoxication.
          </li>
        </ul>
      </div>
    ),
  },

  {
    question: "How Can I Get Low Cost Event Insurance?",
    answer: (
      <p>
        There is not any trick or tip to find low cost insurance. Also, never
        trust on cheap Insurance policies. Search best event insurance provider
        in UAE like iNSURA.ae where you will get Insurance with tons of
        benefits.
      </p>
    ),
  },

  {
    question: "Why Choose Event Insurance With iNSURA.ae",
    answer: (
      <div>
        <p>
          At iNSURA.ae offer the best possible customer service and have a deep
          understanding of the demands of today’s business clients. Here are
          just a few of the reasons you ought to pick us for your demands in
          business insurance:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            Dedicated insurance advisor to help answer your questions and help
            you with your purchase.
          </li>
          <li>
            Responsive, reliable and dedicated claims manager to offer advice,
            reassurance and assistance when you need it most..
          </li>
          <li>
            Competitive prices and comprehensive products providing the cover
            you need at a price you can afford from the insurers you can trust.
          </li>
          <li>
            Great value-added services such as discount vouchers that are sent
            with your policy: you just keep on saving with iNSURA.ae
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
    question: "What Do I Need To Get An Event Insurance Quote?",
    answer: (
      <div>
        <p>
          The process to obtaining an event insurance quotation is easy and
          stress-free. We will take care of everything and present you with a
          range of quotations if you can just give us a few essential details.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Name – </li>
          <li>Phone No. – </li>
          <li>Email Address – </li>
        </ul>
        <p>
          In addition, please provide some more information about your event,
          like operational dates, kind of events, the spot, expected
          registration, etc. The more details you can give us, the better, as it
          will help us get you the best quote! We need to know the type of event
          you are organizing.
        </p>
      </div>
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
    const el = document.getElementById("event-hero");
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
      // Replace with actual submit logic later
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="event-hero">
        <PageHero
          breadcrumb=" Event Insurance"
          title="Event Insurance"
          description="Your events are protected by Event Insurance from unforeseen circumstances that could negatively impact occasion revenues and expenses."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Event Insurance in UAE - Comprehensive Protection for Your Special
            Occasions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-12 text-justify">

              {/* FORM SECTION */}
              <section className="space-y-6">
                <h3 className="text-3xl md:text-2xl  text-[#616060]">
                  Insura.ae Event Insurance provides comprehensive coverage,
                  peace of mind, and financial security for every special
                  occasion in the UAE.
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

              {/* ============ NEW SECTION 1: ALL ABOUT EVENT INSURANCE ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                  All about Event Insurance
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Organizing an event, whether it’s a wedding, corporate
                  gathering, concert, or festival, involves meticulous planning
                  and significant investment. Even when every detail is carefully
                  arranged, unforeseen incidents can disrupt the best-laid
                  plans. Event insurance steps in to provide peace of mind and
                  financial protection against such risks.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Event insurance is a specialized form of coverage designed to
                  protect organizers, hosts, and attendees from financial losses
                  due to unexpected incidents that could disrupt or cancel an
                  event. These incidents can range from severe weather
                  conditions and accidents to illness and vendor issues.
                  Policies can be tailored to cover many types of events,
                  including but not limited to:
                </p>

                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Weddings</li>
                  <li>Corporate events</li>
                  <li>Concerts and music festivals</li>
                  <li>Sporting events</li>
                  <li>Trade shows and exhibitions</li>
                  <li>Private parties and celebrations</li>
                </ul>
              </section>

              {/* ============ NEW SECTION 2: TYPES + BENEFITS ============ */}
              <section className="space-y-6 mt-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                    Types of Event Insurance Coverage
                  </h2>

                  <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                    <li>
                      <span className="font-bold">
                        Event Cancellation/Postponement Insurance:
                      </span>{" "}
                      This coverage reimburses you for non-refundable expenses if
                      your event is canceled or postponed due to circumstances
                      beyond your control, such as severe weather, illness, or
                      venue unavailability.
                    </li>

                    <li>
                      <span className="font-bold">
                        Public Liability Insurance:
                      </span>{" "}
                      Protects you against claims made by third parties for
                      bodily injury or property damage that occurs during your
                      event. This is crucial for events with large crowds or
                      higher-risk activities.
                    </li>

                    <li>
                      <span className="font-bold">
                        Vendor Non-Appearance Insurance:
                      </span>{" "}
                      If a key vendor, such as a caterer or entertainer, fails
                      to show up due to unforeseen reasons, this coverage helps
                      with the cost of finding a replacement or compensates for
                      losses caused by their absence.
                    </li>

                    <li>
                      <span className="font-bold">Weather Insurance:</span>{" "}
                      Important for outdoor events. It covers losses due to
                      adverse weather conditions, such as heavy rain or extreme
                      heat, that could force you to cancel or reschedule.
                    </li>

                    <li>
                      <span className="font-bold">
                        Equipment Insurance:
                      </span>{" "}
                      Events often rely on specialized equipment like
                      audio-visual systems, staging and tents. This coverage
                      protects against damage or loss of rented or owned
                      equipment used during the event.
                    </li>

                    <li>
                      <span className="font-bold">
                        Personal Accident Insurance:
                      </span>{" "}
                      Provides compensation for accidental injuries sustained by
                      organizers, staff, or attendees and can extend to medical
                      expenses, disability benefits and, in some cases, death
                      benefits.
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                    Benefits of having Event Insurance in UAE
                  </h2>

                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <span className="font-bold">Financial Protection – </span>
                     Event insurance safeguards your investment by covering non-refundable expenses and losses due to cancellations, postponements, or unexpected disruptions. This protection ensures that your financial stability is maintained even if the event does not go as planned.
                    </p>

                    <p>
                      <span className="font-bold">Liability Coverage – </span>
                     Events can pose risks to attendees, staff, and property. Event insurance includes liability coverage, protecting you from legal and financial responsibilities arising from accidents, injuries, or property damage that occur during your event.
                    </p>

                    <p>
                      <span className="font-bold">Vendor Issues – </span>
                    If a vendor fails to deliver their services due to unforeseen circumstances, event insurance can cover the costs of finding a replacement or compensate for the loss. This ensures that your event proceeds smoothly despite vendor-related disruptions.
                    </p>

                    <p>
                      <span className="font-bold">Peace of Mind – </span>
                     Knowing that you have comprehensive insurance coverage allows you to focus on enjoying your event rather than worrying about potential problems. Event insurance provides peace of mind, allowing you and your guests to fully immerse yourselves in the occasion without stress.
                    </p>

                    <p>
                      <span className="font-bold">Legal Compliance – </span>
                     Some venues and local regulations in the UAE may require proof of insurance before hosting an event. Having event insurance ensures you comply with these requirements and avoid potential legal issues
                    </p>

                    <p>
                      <span className="font-bold">
                        Professional Support –{" "}
                      </span>
                      Insurers provide expert support and guidance when choosing
                      coverage and handling claims, ensuring you get the best
                      protection and assistance when needed.
                    </p>

                    <p>
                      <span className="font-bold">
                        Enhanced Reputation –{" "}
                      </span>
                      Having event insurance demonstrates a commitment to safety and professionalism, enhancing your reputation as a responsible event organizer. This can attract more attendees and vendors, knowing that they are participating in a well-protected event.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============ WHY CHOOSE INSURA (KEPT SAME, BUY NOW SCROLLS) ============ */}
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
                        <span className="font-bold text-[#505051]">
                          Comprehensive Coverage Options
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Insura.ae offers a wide range of coverage options
                          tailored to meet the specific needs of various events.
                        </div>
                      )}
                    </div>

                    {/* 2 – Tailored Solutions */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#505051]">
                          Competitive Pricing
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          We understand that budgeting is crucial for event
                          planning. Insura.ae provides competitively priced
                          insurance policies that offer extensive coverage
                          without breaking the bank.
                        </div>
                      )}
                    </div>

                    {/* 3 – Expertise in UAE Market */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#505051]">
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
                          process.
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

              <section className="mt-16 space-y-10">
                {/* Top heading + paragraph */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                    Legal, Operational, and Employee Protection in UAE
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
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

                {/* What makes a successful event */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-3xl font-semibold text-[#003566]">
                    What makes a successful event?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Planning ahead is very helpful, and it should cover both what you
                    want to happen and what you don&apos;t want to happen. You can&apos;t
                    predict every possibility that could have an impact on your event,
                    no matter how well-organized you are or how many checklists you
                    make. It is imperative that you arrange event insurance as it can
                    provide protection against unforeseen and unplanned &quot;surprises&quot;
                    and ensure that your event is the talk of the town for all the right
                    reasons!
                  </p>
                </div>
              </section>

              {/* FAQ – accordion, starts right under the image */}
              <section className="space-y-4 mt-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] text-center mb-4">
                  Event Insurance FAQ
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
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#01162a] text-white font-semibold text-xl md:text-xl"
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
