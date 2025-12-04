"use client";
import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

const faqs = [
  {
    question: "What is Business Insurance?",
    answer:
      "Business insurance is a type of coverage designed to protect businesses from potential losses due to unforeseen events such as property damage, legal liability, employee-related risks, and other operational hazards.",
  },
  {
    question: "Why is Business Insurance important in the UAE?",
    answer:
      "Business insurance is crucial in the UAE as it helps protect companies from financial losses due to accidents, lawsuits, natural disasters, and other risks. It ensures business continuity and can help businesses comply with legal requirements.",
  },
  {
    question: "Is Business Insurance mandatory in the UAE?",
    answer:
      "Some types of business insurance are mandatory in the UAE, such as workers’ compensation and health insurance for employees, and motor insurance for company vehicles. Other covers, like liability or property insurance, may not be legally required but are highly recommended based on your business activities.",
  },
  {
    question: "How are Business Insurance premiums calculated in the UAE?",
    answer:
      "Premiums are typically calculated based on factors such as the nature of your business, size of operations, annual revenue, number of employees, claims history, coverage limits, and the types of risks involved in your industry.",
  },
  {
    question: "How can a business in the UAE choose the right insurance provider?",
    answer:
      "Businesses should compare quotes from multiple insurers or work with a trusted broker, review coverage details carefully, check the insurer’s reputation and claims support, and ensure the policy is tailored to their specific risks and regulatory requirements.",
  },
];

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
      "Professional indemnity insurance will protect businesses from claims made against them by third parties for mistakes, omissions, errors, or financial loss",
  },
  {
    title: "Public Liability",
    description:
      "This insurance will indemnify against all sums which the insured shall become legally liable as an occupier of the premises due to accidents causing damage and/or bodily injury (Fatal or Non-Fatal) to Third Parties arising out of their Business.",
  },
];

const whyItems = [
  {
    title: "Comprehensive Coverage Options",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base">
        <li>
          iNSURA.ae powered by PIONEER offers a wide range of insurance products
          tailored for different industries.
        </li>
        <li>
          Policies cover everything from liability and property insurance to
          employee protection.
        </li>
      </ul>
    ),
  },
  {
    title: "Competitive Premiums",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base">
        <li>Affordable premium rates without compromising coverage quality.</li>
        <li>Flexible payment plans available.</li>
      </ul>
    ),
  },
  {
    title: "Customized Insurance Solutions",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base">
        <li>
          Policies tailored to match your business’s specific risks and
          requirements.
        </li>
        <li>Avoid paying for coverage you don’t need.</li>
      </ul>
    ),
  },
  {
    title: "Fast and Efficient Claims Processing",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A] text-sm md:text-base">
        <li>Quick and transparent claims process.</li>
        <li>Dedicated claims support teams.</li>
      </ul>
    ),
  },
];

type FormState = {
  company: string;
  person: string;
  mobile: string;
  email: string;
  category: string;
};

type FormErrors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
  category?: string;
};

export default function BusinessInsurancePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // multi-open for "Why choose" accordion
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

  // ---------- FORM STATE + VALIDATION ----------
  const [form, setForm] = useState<FormState>({
    company: "",
    person: "",
    mobile: "",
    email: "",
    category: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ❗ prevent page reload / jumping up

    const newErrors: FormErrors = {};

    if (!form.company.trim()) {
      newErrors.company = "This field is required. Please input company name.";
    }

    if (!form.person.trim()) {
      newErrors.person = "This field is required. Please input your name.";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "This field is required. Please input a phone number.";
    }

    if (!form.email.trim()) {
      newErrors.email = "This field is required. Please input a valid email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.category) {
      newErrors.category = "Please select a business category.";
    }

    setErrors(newErrors);

    // if there are errors, just stop here (form stays in place, red messages show)
    if (Object.keys(newErrors).length > 0) return;

    // TODO: send data to API here if you want
    console.log("Form submitted:", form);
  };

  const scrollToHero = () => {
    const el = document.getElementById("business-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <main>
      {/* HERO */}
      <section id="business-hero">
        <PageHero
          breadcrumb="Business Insurance"
          title="Business Insurance"
          description="Protect your business from unexpected twist and turn, your success deserves reliable support."
        />
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-10">
            Business Insurance to Secure Your Business Legacy in UAE!
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-12">
              {/* FORM */}
              <section className="bg-white p-8  shadow-md ">
                <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#797575] font-semibold mb-2">
                        Company name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter company name..."
                        className={`w-full p-3 rounded-lg bg-blue-50 outline-none ${
                          errors.company ? "border" : ""
                        }`}
                        value={form.company}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                      />
                   
                    </div>

                    <div>
                      <label className="block text-[#797575] font-semibold mb-2">
                        Concern Person name <span className="text-[#f15f5f]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Concern person name..."
                        className={`w-full p-3 rounded-lg bg-blue-50 outline-none ${
                          errors.person ? "border " : ""
                        }`}
                        value={form.person}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            person: e.target.value,
                          }))
                        }
                      />
                      {errors.person && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.person}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#797575] font-semibold mb-2">
                        Mobile Number <span className="text-[#f15f5f]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="enter mobile number..."
                        className={`w-full p-3 rounded-lg bg-blue-50 outline-none ${
                          errors.mobile ? "border" : ""
                        }`}
                        value={form.mobile}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            mobile: e.target.value,
                          }))
                        }
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[#797575] font-semibold mb-2">
                        Email Address <span className="text-[#f15f5f]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="enter email id..."
                        className={`w-full p-3 rounded-lg bg-blue-50 outline-none ${
                          errors.email ? "border " : ""
                        }`}
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#797575] font-semibold mb-2">
                      Business Category
                    </label>
                    <select
                      className={`w-full p-3 rounded-lg bg-blue-50 outline-none hover:bg-sky-100 ${
                        errors.category ? "border " : ""
                      }`}
                      value={form.category}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    >
                      <option value="">Select business</option>
                      <option value="event">Event Insurance</option>
                      <option value="property">Property All Risks</option>
                      <option value="marine">Marine Cargo</option>
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.category}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold"
                  >
                    Send Application
                  </button>
                </form>
              </section>

              {/* Paragraph */}
              <div className="mt-12 max-w-3xl">
                <p className="text-[35px] font-normal text-gray-700 leading-snug">
                  Your Business needs to be run Smoothly that’s Why You Need{" "}
                  <span className="font-bold text-[#555353]">
                    Business Insurance Policy
                  </span>{" "}
                  in UAE.
                </p>
              </div>

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
                                     rounded-xl bg-white text-[#484848] border
                                     [backface-visibility:hidden]
                                     [transform:rotateY(180deg)]"
                        >
                          <p className="text-center text-base md:text-lg font-medium px-4">
                            {card.description}
                          </p>

                          <button type="button" onClick={scrollToTop}
                            className="flex items-center gap-2 px-4 py-2 rounded-md
                                       bg-white text-[#191c61] font-semibold text-sm
                                       border border-[#191c61] hover:bg-[#191c61] hover:text-white"
                          >
                            <span>Buy Now</span>

                            <span
                              className="h-4 w-4 flex items-center justify-center rounded-[3px]
                                         bg-[#191c61] text-white hover:bg-white hover:text-[#191c61]"
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

              {/* (rest of your content stays the same) */}
              {/* ... ALL THE CONTENT BELOW IS UNCHANGED EXCEPT THE BUY NOW BUTTON THAT SCROLLS ... */}

              <section className="space-y-10">
                {/* Protecting Your Enterprise */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-3xl font-semibold text-[#003566]">
                    Protecting Your Enterprise with Business Insurance by
                    iNSURA.ae
                  </h2>
                  <p className="text-muted-foreground  leading-relaxed">
                    <span className="font-bold text-[#3b3939]">
                      {" "}
                      iNSURA Powered by Pioneer Insurance{" "}
                    </span>
                    is here to safeguard what you’ve built with top-notch,
                    affordable business insurance tailored for UAE businesses.
                    Your business is the result of relentless dedication,
                    strategic planning, and countless sacrifices. At Insura.ae,
                    we understand the value of your hard work. Let us protect
                    what you’ve built, so you can focus on growing it.
                  </p>
                </div>
{/* WHY YOU NEED INSURANCE */} <div className="space-y-4">
   <h2 className="text-4xl md:text-3xl font-semibold text-[#003566]"> Why Your Business Needs Insurance </h2> 
   <p className="text-muted-foreground leading-relaxed"> Business insurance is not just a safety net, it’s a crucial investment in your company’s future.
     Here’s why every business should have insurance: </p>
      <ul className="space-y-3 text-muted-foreground"> 
        <li> <span className="font-bold text-[#5b5757]"> Risk Mitigation – </span>{" "} Protects against financial losses due to property damage, lawsuits, or other unforeseen circumstances. </li> 
        <li> <span className="font-bold text-[#5b5757]"> Legal Requirements – </span>{" "} Many types of insurance, such as workers’ compensation, are mandatory by law, ensuring compliance and avoiding penalties. </li> 
        <li> <span className="font-bold text-[#5b5757]"> Continuity Planning – </span>{" "} Helps your business recover quickly from unexpected events, minimizing downtime and maintaining operations. </li> </ul> </div>
         {/* HOW INSURA HELPS */} 
         <div className="space-y-4">
           <h2 className="text-3xl md:text-3xl font-bold text-[#003566]"> How iNSURA.ae Powered by Pioneer Will Help You. </h2> 
           <p className="text-muted-foreground  leading-relaxed"> In a dynamic business environment where risks and uncertainties are ever-present, <span className="font-bold text-[#4a4848]">iNSURA.ae Powered by Pioneer Insurance</span> stands as your trusted partner. We meticulously gather and evaluate insurance options to secure the best coverage for your business in Dubai and the UAE. </p> 
           <p className="text-muted-foreground  leading-relaxed">Our goal is to protect you from potential threats, ensuring you have the confidence and resources to navigate changes seamlessly. With our 24/7 support, we handle the complexities of insurance, allowing you to focus on achieving your organisational goals without worrying about the unforeseen. Let us be the shield that keeps your business safeguarded and your objectives on track.</p> </div>
            {/* BUSINESS INSURANCE PLANS */} <div className="space-y-10 text-[#4A4A4A]"> <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2B51]"> iNSURA.ae Business Insurance Plans </h2> 
            {/* PLAN 1 */} <div> <p className="text-xl font-semibold text-[#000000]"> 1. General Liability Insurance </p> <ul className="list-disc ml-6 space-y-2">
               <li><span className="text-[#686666] font-bold">Comprehensive Protection – 
                </span>Safeguard your business from third-party claims of bodily injury, property damage, and more.</li> 
               <li><span className="text-[#686666] font-bold">Peace of Mind –</span>
               
               Ensure your business is protected against legal liabilities and potential financial losses.</li> 
               <li><span className="text-[#686666] font-bold">Flexible Coverage – </span>Tailor your policy to match your business’s specific risks and requirements.</li> </ul> </div>
                {/* PLAN 2 */} <div> <p className="text-xl font-semibold text-[#000000]"> 2. Property Insurance </p> 
                <ul className="list-disc ml-6 space-y-2"> 
                  <li><span className="text-[#686666] font-bold">Asset Protection –</span> Cover your business property, including buildings, equipment, and inventory, against damage or loss.</li>
                
                 <li><span className="text-[#686666] font-bold">Natural Disasters Coverage – </span>Protect your assets from events like fires, floods, and earthquakes.</li> 
                 <li><span className="text-[#686666] font-bold">Business Interruption – </span>Ensure your business can recover quickly with coverage for lost income during disruptions.</li> </ul> </div> 
                 
                 {/* PLAN 3 */} <div> <p className="text-xl font-semibold text-[#000000]"> 3. Workers' Compensation Insurance </p> 
                 <ul className="list-disc ml-6 space-y-2"> 
                  <li><span className="text-[#686666] font-bold">Employee Coverage – </span>Provide medical benefits and wage replacement for employees injured on the job.</li> 
                 <li><span className="text-[#686666] font-bold">Legal Compliance –</span> Meet your legal obligations and protect your business from potential lawsuits.</li>
                 
                  <li><span className="text-[#686666] font-bold">Employee Well-being –</span> Demonstrate your commitment to your employees’ health and safety.</li> </ul> </div> 
                  {/* PLAN 4 */} <div> <p className="text-xl font-semibold text-[#000000]"> 4. Professional Liability Insurance </p>
                  
                   <ul className="list-disc ml-6 space-y-2"> 
                    <li><span className="text-[#686666] font-bold">Error and Omissions Protection – </span>Cover your business against claims of negligence or mistakes in professional services.</li>
                    <li><span className="text-[#686666] font-bold">Reputation Management – </span>Protect your business reputation and financial stability.</li>
                     <li><span className="text-[#686666] font-bold">Customized Policies –</span> Tailor your coverage to fit the specific risks associated with your industry.</li>
                     </ul> </div> </div>
             

                {/* WHY CHOOSE INSURA — accordion section, only Buy Now changed to call scrollToHero */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
                  <div className="flex justify-center md:justify-start">
                    <img
                      src="/services-details-img1.webp"
                      alt="Business Meeting"
                      className="rounded-lg w-full h-[400px] object-cover"
                    />
                  </div>

                  <div className="space-y-6 max-w-md">
                    <h2 className="text-3xl md:text-3xl font-semibold text-[#003566]">
                      Why Choose iNSURA powered by PIONEER?
                    </h2>

                    <div className="space-y-4">
                      {whyItems.map((item, idx) => (
                        <div
                          key={item.title}
                          className="border-b border-gray-200 pb-3"
                        >
                          <button
                            type="button"
                            onClick={() => toggleWhy(idx)}
                            className="w-full flex items-center justify-between text-left font-semibold text-[#4A4A4A]"
                          >
                            <span>{item.title}</span>
                            <span className="text-lg">
                              {whyOpen[idx] ? "▲" : "▼"}
                            </span>
                          </button>

                          {whyOpen[idx] && (
                            <div className="mt-2">{item.content}</div>
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="text-[#4A4A4A] leading-relaxed">
                      We want you to focus on your business — we will take care
                      of its insurance.
                    </p>
<button
  className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow"
  type="button"
  onClick={scrollToTop}   // ← Add this line only
>
  Buy Now
</button>

                  </div>
                </section>



{/* 3 EASY STEPS */} 
<section className="space-y-6 mt-12">
   <h2 className="text-3xl md:text-3xl font-bold text-[#003566]"> Insura.ae Values Your Time — Get Business Insurance in 3 Easy Steps </h2>
    <p className="text-muted-foreground leading-relaxed"> <span className="font-extrabold text-[#514f4f]"> Share Requirements – </span>{" "} 
    Simply tell us about your business needs and preferences. 
    We’ll use this information to find the best insurance options tailored specifically for you. 
    </p> 
    <p className="text-muted-foreground leading-relaxed">
       <span className="font-extrabold text-[#514f4f]"> Compare Options – </span>{" "}
        We’ll gather and compare comprehensive policies from leading UAE insurers,
         ensuring you get the most suitable coverage at the best price. </p> 
         <p className="text-muted-foreground leading-relaxed"> 
          <span className="font-extrabold text-[#514f4f]"> Get Covered – </span>{" "} 
          Choose the plan that fits your needs, and we’ll handle the paperwork and implementation,
           providing you with full protection efficiently and effortlessly. </p> 
           </section> 
           {/* CUSTOMIZED SOLUTIONS */} 
           <section className="space-y-6 mt-12">
             <h2 className="text-3xl md:text-3xl font-semibold text-[#003566]">
               Customized Solutions for Your Business </h2> 
               <p className="text-[#494848] leading-relaxed">
                 At iNSURA.ae powered by PIONEER, we understand that every business is unique.
                  Our expert team works closely with you to assess your specific risks and tailor insurance solutions that meet your needs.
                   Whether you’re a small startup or a large corporation, our goal is to provide comprehensive coverage
                    that protects your business’s assets, employees, and reputation.​</p>
                     <div className="flex justify-center"> 
                      <img src="/Untitled.webp" 
                      alt="Business Insurance Benefits" 
                      className="rounded-lg w-full max-w-4xl object-cover" />
                       </div>
                        </section>
                         {/* HOW BUSINESS INSURANCE HELPS */} 
                         <section className="space-y-4 mt-10">
                           <h2 className="text-3xl md:text-3xl font-extrabold text-[#003566]">
                             How Business Insurance Helps Businesses in the UAE </h2>
                              <p className="text-[#494848] leading-relaxed">
                                 Business insurance is essential for protecting businesses in the UAE,
                                  offering a wide range of benefits that ensure stability, compliance, and growth.
                                   Here’s how business insurance helps businesses thrive in this dynamic market.
                                    </p> 
                                    <ul className="list-disc ml-6 space-y-6 text-muted-foreground">
                                       <li> <span className="font-extrabold text-[#555353]"> 
                                        Protection Against Liabilities – </span>{" "}
                                         Businesses face numerous risks daily, 
                                         from accidents to lawsuits.
                                          Public liability insurance covers legal costs and 
                                          compensation claims if a business is held responsible for injury or property
                                           damage to third parties. Similarly, product liability insurance is crucial for 
                                           businesses that manufacture or supply products, protecting against claims of
                                            injury or damage caused by those products. This layer of protection helps 
                                            businesses manage unforeseen incidents without financial strain. </li>
                                             <li> <span className="font-bold text-[#555353]"> Safeguarding Assets – </span>{" "}
                                              Property insurance is vital for protecting business premises and contents 
                                              against risks such as fire, theft, and natural disasters. Additionally,
                                               equipment insurance covers the cost of repairing or replacing essential 
                                               
                                               business equipment that gets damaged or stolen. These insurances ensure 
                                               that businesses can recover quickly from incidents that could otherwise 
                                               cause significant financial losses. </li> 
                                               <li> <span className="font-bold text-[#555353]"> 
                                                Ensuring Financial Stability – </span>{" "} 
                                                Business interruption insurance compensates for
                                                 lost income and operating expenses if a business
                                                  is temporarily unable to operate due to a covered event.
                                                   This support helps maintain financial stability during downtime, 
                                                   allowing businesses to focus on recovery rather than financial distress.
                                                    Credit insurance also protects against the risk of non-payment by customers,
                                                     ensuring steady cash flow and financial health.. </li>
                                                      <li> <span className="font-bold text-[#555353]">
                                                         Employee Protection and Legal Compliance – </span>{" "}
                                                          Workers’ compensation insurance covers medical expenses
                                                          
                                                           and lost wages for employees who get injured or fall ill due to their job,
                                                           
                                                            while health insurance, required by law, provides medical coverage for employees.
                                                             These insurances not only protect employees but also ensure businesses comply
                                                              with UAE laws and regulations, avoiding legal penalties and fines. </li> 
                                                              <li> <span className="font-bold text-[#555353]"> 
                                                                Enhancing Reputation and Managing Risk – </span>{" "} 
                                                                Having comprehensive insurance demonstrates responsibility and reliability to customers,
                                                                 partners, and stakeholders, enhancing the business’s reputation.
                                                                  It also helps manage and mitigate various risks associated with operations,
                                                                   enabling businesses to focus on growth and 
                                                                   expansion without constant worry about potential financial setbacks.
                                                                    </li> 
                                                                    <li> <span className="font-bold text-[#555353]"> 
                                                                      Attracting and Retaining Talent – </span>{" "} 
                                                                      Offering health and life insurance benefits can attract and retain talented employees, contributing to overall job satisfaction and loyalty.
                                                                       This ensures a stable and motivated workforce, essential for business success. </li> </ul> 
                                                                       <div className="mt-8 flex justify-center"> 
                                                                        <video className="rounded-lg w-full max-w-4xl" controls> 
                                                                          <source src="/invideo.mp4" type="video/mp4" /> </video> </div> </section>
                                                                           {/* BUSINESS FAQ */}
                                                                            <section className="py-16 bg-background">
                                                                               <div className="max-w-3xl mx-auto px-4">
                                                                                 <h2 className="text-3xl md:text-3xl font-semibold text-[#031f39] text-center mb-8"> Business Insurance FAQ </h2>
                                                                                 
                                                                                 
                                                                                  <div className="space-y-1"> {faqs.map((faq, index) => { const isOpen = openIndex === index; return ( <div key={faq.question}>
                                                                                     <button type="button" onClick={() => setOpenIndex(isOpen ? null : index) }
                                                                                      className="w-full flex items-center gap-3 px-4 py-3 bg-[#02192e] text-white font-semibold text-xl md:text-xl" >
                                                                                         <span className="text-2xl"> {isOpen ? "−" : "+"} </span> <span className="text-left">{faq.question}</span> </button>
                                                                                       {isOpen && ( <div className="bg-white text-muted-foreground px-6 py-4 border border-t-0 border-[#003566]">
                                                                                         <p className="text-xl md:text-xl leading-relaxed"> {faq.answer} </p> </div> )} 
                                                                                       </div> );
                                                                                      
                                                                                      })}
                                                                                        </div> </div> 
                                                                                        </section>








                {/* ... keep the remaining sections & FAQ exactly as in your last version ... */}

                {/* 3 EASY STEPS, CUSTOMIZED SOLUTIONS, HOW BUSINESS INSURANCE HELPS, VIDEO, FAQ */}
              </section>
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
