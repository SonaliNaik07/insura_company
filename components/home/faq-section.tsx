"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why do I need Travel Insurance?",
    answer:
      "Travel insurance protects you against unanticipated costs that may arise while traveling, including medical crises, trip cancellations, lost or delayed luggage, and other unforeseen circumstances.",
  },
  {
    question: "Can we buy Travel Insurance after booking travelling plans?",
    answer:
      "Yes! You can buy travel insurance after booking — but some benefits apply only if purchased early such as trip cancellation cover.",
  },
  {
    question: "How can you buy Travel Insurance?",
    answer:
      "You can easily buy travel insurance online in minutes — choose plan, fill details, and pay securely.",
  },
  {
    question: "Why Travel Insurance is important in UAE?",
    answer:
      "It is necessary for many visas and protects from costly medical expenses, delays, lost baggage & emergencies.",
  },
];

export default function TravelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 bg-[#002a59] w-full">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-10">
          Travel Insurance FAQ
        </h2>

        {/* FAQ */}
        <div className="border border-white/20 divide-y divide-white/30">

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="w-full text-white">

                {/* BLUE HEADER */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 px-6 py-5
                  bg-[#00264d] text-white font-semibold text-[20px]
                  transition-all"
                >
                  {isOpen ? (
                    <Minus size={22} className="text-white" />
                  ) : (
                    <Plus size={22} className="text-white" />
                  )}
                  {faq.question}
                </button>

                {/* BLUE ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-60 py-5 px-6" : "max-h-0 py-0 px-6"}
                  bg-[#00264d]
                  `}
                >
                  <p className="text-white leading-relaxed text-[16px]">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
