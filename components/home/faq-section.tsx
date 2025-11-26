"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Why choose iNSURA?",
    answer:
      "iNSURA offers comprehensive coverage, competitive rates, and exceptional customer service. We work with top insurance providers to bring you the best policies tailored to your needs.",
  },
  {
    question: "How can I save on my insurance premiums?",
    answer:
      "You can save through multi-policy discounts, safe driving records, maintaining good health, installing security devices, and choosing higher deductibles. Our agents can help identify the best savings for you.",
  },
  {
    question: "How do I renew my policy?",
    answer:
      "Renewing is easy! You'll receive an advance renewal notice. You can renew online through our portal, via our mobile app, or by contacting our support team directly.",
  },
  {
    question: "Can I manage my policy online?",
    answer:
      "Yes! Our online portal allows you to view policy details, make payments, file claims, download documents, and update your information anytime, anywhere.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "You can file a claim online through our portal, via our mobile app, or by contacting our 24/7 claims hotline. Our dedicated claims team will guide you through every step.",
  },
  {
    question: "Does insurance cover natural disasters?",
    answer:
      "Coverage for natural disasters varies by policy type. Most comprehensive policies include protection against floods, earthquakes, and storms. Check your policy details or contact us for specifics.",
  },
  {
    question: "Can I customize my coverage?",
    answer:
      "We offer flexible coverage options that can be tailored to your specific needs and budget. Our agents can help you build the perfect policy.",
  },
  {
    question: "How do I cancel my policy?",
    answer:
      "You can cancel your policy by contacting our customer service team. We'll guide you through the process and handle any refunds according to the policy terms.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our insurance services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-card-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
