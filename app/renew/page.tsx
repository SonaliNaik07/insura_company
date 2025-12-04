"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "What is Trade Credit Insurance?",
    answer: (
      <p>
        Trade Credit Insurance (TCI) is a type of insurance that protects
        businesses against the risk of non-payment by their clients. It covers
        losses arising from customer insolvency, protracted default, and
        political risks that might prevent payment.
      </p>
    ),
  },
  {
    question: "How does Trade Credit Insurance work?",
    answer: (
      <p>
        Trade Credit Insurance works by providing coverage for your receivables.
        If a customer fails to pay due to insolvency or prolonged default, the
        insurer compensates you for the insured amount, ensuring that your cash
        flow remains unaffected.
      </p>
    ),
  },
  {
    question: "Who should consider purchasing Trade Credit Insurance?",
    answer: (
      <p>
        Any business that extends credit to its customers should consider Trade
        Credit Insurance. This is particularly beneficial for companies
        involved in international trade or those with significant receivables.
      </p>
    ),
  },
  {
    question: "What risks are covered under Trade Credit Insurance?",
    answer: (
      <div>
        <p>Trade Credit Insurance typically covers:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Insolvency of the buyer</li>
          <li>Protracted default (non-payment over an extended period)</li>
          <li>
            Political risks (in some cases), such as war, expropriation, or
            currency transfer restrictions that prevent payment.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I purchase Trade Credit Insurance in the UAE?",
    answer: (
      <p>
        Trade Credit Insurance can be purchased through insurance brokers or
        directly from insurance companies that offer this type of coverage like
        iNSURA.AE. It’s advisable to compare policies and consult with an
        expert to find the best coverage for your specific needs.
      </p>
    ),
  },
];

type FormErrors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
  category?: string;
};

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [errors, setErrors] = useState<FormErrors>({});

  const scrollToHero = () => {
    const el = document.getElementById("renew-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const company = (formData.get("company") as string | null)?.trim() || "";
    const person = (formData.get("person") as string | null)?.trim() || "";
    const mobile = (formData.get("mobile") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";
    const category = (formData.get("category") as string | null)?.trim() || "";

    const newErrors: FormErrors = {};

    if (!person)
      newErrors.person = "This field is required. Please input your name.";
    if (!mobile)
      newErrors.mobile =
        "This field is required. Please input a mobile number.";
    if (!email)
      newErrors.email =
        "This field is required. Please input a valid email.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="renew-hero">
        <PageHero
          breadcrumb="Renew Insurance"
          title="Renew"
          description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-4">
            Don't risk it, renew your insurance​
          </h2>

          {/* 1️⃣ IMAGE FIRST */}
          <div className="mt-3 mb-5">
            <img
              src="/group.webp"
              alt="Customer renewing insurance"
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
           <div className="lg:col-span-2 space-y-12 text-justify">

              {/* FORM */}
              <section className="space-y-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
  {/* ROW 1: Company + Concern Person (2 columns) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Company name */}
    <div>
      <label className="block text-sm text-[#646161] font-semibold mb-2">
        Company name 
      </label>
      <input
        name="company"
        type="text"
        placeholder="Enter company name..."
        className="w-full h-11 px-3 rounded-md bg-[#f4f8ff] outline-none text-sm"
      />
      {errors.company && (
        <p className="text-red-500 text-xs mt-1">{errors.company}</p>
      )}
    </div>

    {/* Concern Person */}
    <div>
      <label className="block text-sm text-[#646161] font-semibold mb-2">
        First Name <span className="text-red-500">*</span>
      </label>
      <input
        name="person"
        type="text"
        placeholder="Enter full name..."
        className="w-full h-11 px-3 rounded-md bg-[#f4f8ff] outline-none text-sm"
      />
      {errors.person && (
        <p className="text-red-500 text-xs mt-1">{errors.person}</p>
      )}
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm text-[#646161] font-semibold mb-2">
      Email Address <span className="text-red-500">*</span>
    </label>
    <input
      name="email"
      type="email"
      placeholder="enter email id..."
      className="w-full h-11 px-3 rounded-md bg-[#f4f8ff] outline-none text-sm"
    />
    {errors.email && (
      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
    )}
  </div>

  {/* Mobile */}
  <div>
    <label className="block text-sm text-[#646161] font-semibold mb-2">
      Mobile Number <span className="text-red-500">*</span>
    </label>
    <input
      name="mobile"
      type="text"
      placeholder="enter mobile number..."
      className="w-full h-11 px-3 rounded-md bg-[#f4f8ff] outline-none text-sm"
    />
    {errors.mobile && (
      <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
    )}
  </div>

  {/* Upload Attachment 1 */}
  <div>
    <label className="block text-xs text-[#646161] font-semibold mb-1">
      Upload Attachment
    </label>

    <label
      className="inline-block px-4 py-2 rounded-md bg-gray-200 text-black text-sm cursor-pointer
                 hover:bg-[#0052cc] hover:text-white transition"
    >
      Choose File
      <input type="file" name="attachment1" className="hidden" />
    </label>

    <span className="ml-2 text-sm text-gray-500">No file chosen</span>
  </div>

  {/* Upload Attachment 2 */}
  <div>
    <label className="block text-xs text-[#646161] font-semibold mb-1">
      Upload Attachment
    </label>

    <label
      className="inline-block px-4 py-2 rounded-md bg-gray-200 text-black text-sm cursor-pointer
                 hover:bg-[#0052cc] hover:text-white transition"
    >
      Choose File
      <input type="file" name="attachment2" className="hidden" />
    </label>

    <span className="ml-2 text-sm text-gray-500">No file chosen</span>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="inline-flex items-center px-6 py-2 bg-[#0052cc] text-white text-sm font-semibold rounded-md"
  >
    Send Application
  </button>
</form>

              </section>

              {/* CONTENT BLOCK */}
              <section className="space-y-4 mt-10">
                <h2 className="text-3xl md:text-3xl font-extrabold text-[#003566]">
                  Renew your Insurance Plan
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold">Updated Coverage:</span> Renewing your policy gives you the opportunity
                  to review and update your coverage based on any changes in your circumstances.
                  You can adjust your coverage to ensure that it meets your current needs.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  <span className="font-bold">Premium Discounts:</span> We offer premium discounts for customers who
                  renew their policies. This can help you save money on the cost of your insurance coverage.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  <span className="font-bold">No Need to Start Over:</span> If you let your insurance policy lapse and then
                  want to get coverage again later, you may have to start over with a new policy. This could result
                  in higher premiums or more limited coverage. Avoid this situation by renewing your policy today.
                </p>
              </section>

              {/* IMAGE 2 / BANNER */}
              <section className="mt-16 w-full">
                <img
                  src="/image-1.png.webp"
                  alt="Top-Notch Vehicle Insurance in UAE"
                  className="w-full rounded-lg object-cover"
                />
              </section>

              {/* 🔹 NEW: LINE + VIDEO BEFORE FAQ 🔹 */}
              <section className="mt-10">
                {/* thin line like reference */}
                <hr className="border-t border-[#151515] mb-6" />
                <video className="w-full rounded-lg" controls>
                  {/* change src to your actual mp4 path */}
                  <source src="/invideo-ai.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </section>

              {/* FAQ */}
              <section className="space-y-4 mt-4">
                <h2 className="text-2xl md:text-2xl font-extrabold text-[#003566] text-center mb-4">
                  RENEW FAQ's
                </h2>

                <div className="space-y-1 max-w-4xl mx-auto">
                  {faqItems.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div key={faq.question}>
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#021d36] text-white font-semibold text-xl md:text-xl"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">
                              {isOpen ? "−" : "+"}
                            </span>
                            <span>{faq.question}</span>
                          </span>
                        </button>

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
