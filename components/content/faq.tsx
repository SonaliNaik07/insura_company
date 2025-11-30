"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-primary font-semibold">Your Answer</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently asked questions & <br /> searching answer.
          </h3>
        </div>

        {/* Shared Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => {
              const value = `item-${index}`
              const isOpen = openItem === value

              return (
                <AccordionItem
                  key={value}
                  value={value}
                  className="bg-[#F4F8FC] rounded-lg border border-[#e2e8f0]"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-semibold text-[#0A2342]">
                    <div className="flex justify-between w-full items-center">
                      {item.question}
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-5 text-[#3A4750] leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </div>
        </Accordion>
      </div>
    </section>
  )
}
