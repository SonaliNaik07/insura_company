"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why should I choose iNSURA for my insurance needs?",
    answer:
      "At iNSURA Powered by PIONEER INSURANCE, the focus is on exceptional customer service, competitive pricing, and tailored solutions to match each customer’s specific needs.",
  },
  {
    question: "How can I save on my insurance premiums?",
    answer:
      "Premiums can often be reduced by choosing higher deductibles, bundling multiple policies, maintaining a good claims history, and regularly reviewing coverage to avoid unnecessary extras.",
  },
  {
    question: "What is the process for renewing my insurance policy?",
    answer:
      "Before expiry you receive a renewal notice, then you can review your coverage, make any changes if needed, and complete payment online or through customer support to keep the policy active.",
  },
  {
    question: "Do iNSURA.ae offer online policy management?",
    answer:
      "Policies can typically be accessed online to view documents, download certificates, update details, and track renewals from a secure self‑service portal.",
  },
  {
    question: "How do I make a claim with iNSURA?",
    answer:
      "Making a claim with iNSURA Powered by PIONEER INSURANCE is designed to be simple: submit your claim online, via the mobile app, or contact the claims team, then share the required documents so they can process it efficiently.",
  },
  {
    question:
      "What's the coverage for natural disasters in my insurance policy?",
    answer:
      "Coverage for natural disasters depends on the specific policy and may include protection for damages caused by events such as floods, storms, or earthquakes when listed as covered perils.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "Coverage can usually be customized by adjusting sums insured, adding riders or optional benefits, and selecting deductibles that match your risk tolerance and budget.",
  },
  {
    question: "What is the process for canceling my insurance policy?",
    answer:
      "To cancel, you normally submit a written request or raise a cancellation through customer service, after which any applicable refunds, charges, or notice periods are applied as per policy terms.",
  },
  {
    question: "Can I change my coverage during the policy term?",
    answer:
      "Mid‑term changes such as increasing limits or adding benefits are often allowed, subject to underwriting approval and any additional premium that may apply.",
  },
  {
    question: "Is there a grace period if I miss my renewal date?",
    answer:
      "Many policies offer a short grace period to pay the renewal premium, but coverage conditions during this time and after expiry depend on the insurer’s rules.",
  },
];

export default function TravelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  return (
    <section className="py-20 bg-[#f5fbff] w-full">
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .faq-col-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .faq-col-right {
          animation: slideInRight 0.8s ease-out forwards;
          animation-delay: 0.1s;
        }
        .answer-open {
          animation: fadeSlideDown 0.35s ease-out forwards;
        }
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="text-center text-xs font-semibold text-[#00a6ff] tracking-[0.18em] uppercase mb-2">
          Your Answer
        </p>

        <h2 className="text-center text-[#03284c] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-10">
          Frequently asked questions
          <br />
          &amp; searching answer.
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="faq-col-left space-y-4">
            {leftFaqs.map((faq, i) => {
              const idx = i;
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-4 md:py-5 text-left"
                  >
                    <span className="text-[15px] md:text-[16px] font-semibold text-[#03284c]">
                      {faq.question}
                    </span>
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#00a6ff] text-white transition-transform duration-200">
                      {isOpen ? (
                        <Minus size={18} strokeWidth={3} />
                      ) : (
                        <Plus size={18} strokeWidth={3} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-[max-height] ease-out duration-300 bg-[#f9fbff] ${
                      isOpen ? "max-h-44 answer-open" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`px-6 pt-0 pb-4 md:pb-5 text-[13px] md:text-[14px] text-[#64748b] leading-relaxed ${
                        isOpen ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-col-right space-y-4">
            {rightFaqs.map((faq, i) => {
              const idx = i + leftFaqs.length;
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-4 md:py-5 text-left"
                  >
                    <span className="text-[15px] md:text-[16px] font-semibold text-[#03284c]">
                      {faq.question}
                    </span>
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#00a6ff] text-white transition-transform duration-200">
                      {isOpen ? (
                        <Minus size={18} strokeWidth={3} />
                      ) : (
                        <Plus size={18} strokeWidth={3} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-[max-height] ease-out duration-300 bg-[#f9fbff] ${
                      isOpen ? "max-h-44 answer-open" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`px-6 pt-0 pb-4 md:pb-5 text-[13px] md:text-[14px] text-[#64748b] leading-relaxed ${
                        isOpen ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
