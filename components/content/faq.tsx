"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  items: FAQItem[]
}

export function FAQ({ title = "Frequently Asked Questions", items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-2 bg-background">

      <div className="space-y-1 max-w-4xl mx-auto px-4">
        {items.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div key={faq.question}>
              {/* Question */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#02182d] text-white font-semibold text-xl md:text-xl"
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
          )
        })}
      </div>
    </section>
  )
}