"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
    question: "How can we buy Travel Insurance?",
    answer:
      "You can easily buy travel insurance online — choose plan, fill details, pay securely & get policy instantly.",
  },
  {
    question: "Why is Travel Insurance important in the UAE?",
    answer:
      "Many countries and UAE visas require travel insurance and it protects from costly emergencies, delays & loss.",
  },
]

export default function TravelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-[#002a59] text-4xl md:text-5xl font-bold mb-10">
          Travel Insurance FAQ
        </h2>

        {/* Rounded Big Box */}
        <div className="bg-[#002a59] rounded-2xl border border-[#003b7a] overflow-hidden">

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <div key={i} className="border-b last:border-b-0 border-white/20">
                
                {/* Question Row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center py-5 px-6 text-left text-white font-semibold text-[18px]">
                  
                  <span>{faq.question}</span>

                  {isOpen ? (
                    <Minus size={20} className="text-white" />
                  ) : (
                    <Plus size={20} className="text-white" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-52 px-6 pb-5" : "max-h-0 px-6 pb-0"
                  }`}
                >
                  <p className="text-white/90 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
