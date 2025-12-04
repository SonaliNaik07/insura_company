"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Why do I need Travel Insurance?",
    answer:
      "It helps with unexpected costs while travelling, such as medical emergencies, cancellations, delays, and lost baggage or personal items.",
    defaultOpen: true,
  },
  {
    question: "Can we buy Travel Insurance after booking travelling plans?",
    answer:
      "Yes, you usually can. But arranging cover early often gives extra benefits like cancellation protection before departure.",
  },
  {
    question: "How can we buy Travel Insurance?",
    answer:
      "Send us your trip details and contact information. Our team will compare suitable options and help you issue the policy quickly.",
  },
  {
    question: "Why is Travel Insurance important in the UAE?",
    answer:
      "Overseas medical costs, delays and disruptions can be expensive when travelling from the UAE. Insurance helps protect both your plans and your budget.",
  },
];

const TravelFAQ: React.FC = () => {
  const defaultIndex = FAQ_ITEMS.findIndex((item) => item.defaultOpen);
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultIndex > -1 ? defaultIndex : 0
  );

  return (
    <div className="border border-[#03284C] rounded-xl overflow-hidden shadow-md">
      {FAQ_ITEMS.map((item, index) => (
        <div key={index} className="border-b last:border-b-0">
          <button
            type="button"
            onClick={() =>
              setOpenIndex((prev) => (prev === index ? null : index))
            }
            className={`w-full flex items-center justify-between px-4 md:px-6 py-4 text-left text-sm md:text-base font-semibold ${
              openIndex === index
                ? "bg-[#03284C] text-white"
                : "bg-white text-[#03284C]"
            }`}
          >
            <span>{item.question}</span>
            <span className="ml-4 text-lg">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 md:px-6 py-4 bg-white text-sm text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TravelFAQ;
