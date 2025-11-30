"use client"

import { useState, useEffect, useRef } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Why should I choose iNSURA for my insurance needs?",
    answer:
      "At iNSURA Powered by PIONEER INSURANCE, we pride ourselves on providing exceptional customer service, competitive pricing, and tailored insurance solutions to meet your unique needs. With our extensive industry experience and commitment to excellence, you can trust that your insurance is in good hands.",
  },
  {
    question: "How do I make a claim with iNSURA?",
    answer:
      "Making a claim with iNSURA Powered by PIONEER INSURANCE is simple and straightforward. You can file a claim online, through our mobile app, or by contacting our dedicated claims team. We'll guide you through the process and ensure your claim is handled efficiently.",
  },
  {
    question: "How can I save on my insurance premiums?",
    answer:
      "There are several ways to save on your insurance premiums with iNSURA Powered by PIONEER INSURANCE. Take advantage of our multi-policy discounts, safe driving discounts, and other special offers. Our team can also provide personalized recommendations to help you find the most cost-effective coverage.",
  },
  {
    question: "What's the coverage for natural disasters in my insurance policy?",
    answer:
      "The coverage for natural disasters, such as floods, earthquakes, or storms, varies depending on the type of insurance policy you have. Our team can provide you with the details of the coverage included in your specific policy.",
  },
  {
    question: "What is the process for renewing my insurance policy?",
    answer:
      "Renewing your insurance policy with iNSURA Powered by PIONEER INSURANCE is a breeze. We’ll send you a renewal notice well in advance, and you can easily renew online or by contacting our customer service team. We’ll ensure a seamless transition to your new policy term.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "At iNSURA Powered by PIONEER INSURANCE, we understand that one-size-fits-all insurance solutions don’t work for everyone. That’s why we offer the flexibility to customize your coverage based on your specific needs and budget. Our team will work with you to design the perfect insurance package.",
  },
  {
    question: "Do iNSURA.ae offer online policy management?",
    answer:
      "Absolutely! With iNSURA Powered by PIONEER INSURANCE, you can manage your insurance policies online 24/7. View your policy details, make changes, file claims, and more – all from the comfort of your own device.",
  },
  {
    question: "What is the process for canceling my insurance policy?",
    answer:
      "If you need to cancel your insurance policy with iNSURA Powered by PIONEER INSURANCE, we make the process simple and straightforward. Just contact our customer service team, and they'll guide you through the necessary steps. We'll ensure a smooth and hassle-free cancellation.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-primary font-semibold">Your Answer</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Frequently asked questions & <br /> searching answer.
          </h3>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const isLeft = i % 2 === 0

            return (
              <div
                key={i}
                className={`rounded-lg border transition-all duration-300 overflow-hidden
                ${isOpen ? "border-blue-600 bg-[#EBF3FF] shadow-sm" : "border-[#E2E8F0] bg-[#F4F8FC]"}
                ${visible ? (isLeft ? "animate-leftIn" : "animate-rightIn") : "opacity-0"}
              `}
                style={{ height: isOpen ? "auto" : "65px" }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between px-6 py-5 font-semibold text-[#0A2342] text-left"
                >
                  {faq.question}
                  {isOpen ? <Minus className="text-blue-600" /> : <Plus className="text-blue-600" />}
                </button>

                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-80 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-6">
                    <p className="text-[#3A4750] text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes leftIn {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes rightIn {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-leftIn {
          animation: leftIn 0.75s ease-out forwards;
        }
        .animate-rightIn {
          animation: rightIn 0.75s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
