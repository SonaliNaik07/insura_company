import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const benefits = [
  "Medical coverage while in UAE",
  "Emergency evacuation",
  "24/7 assistance in multiple languages",
  "Loss of passport coverage",
  "Personal accident protection",
  "Legal assistance",
]

const faqs = [
  {
    question: "Who needs inbound travel insurance?",
    answer:
      "Anyone visiting the UAE from abroad should have inbound travel insurance to cover medical emergencies, accidents, and other unexpected events during their stay.",
  },
  {
    question: "Is it mandatory for visa?",
    answer:
      "Travel insurance is recommended and may be required for certain visa types. It's always advisable to have coverage when traveling internationally.",
  },
]

export default function InboundTravelPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Inbound Travel Insurance"
        description="Comprehensive coverage for visitors traveling to the UAE."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Inbound Travel Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect visitors to the UAE with comprehensive travel coverage.
                    </p>
                  </div>
                  <LeadForm type="travel" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Inbound Travel Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Inbound travel insurance provides coverage for visitors traveling to the UAE. It protects against
                  medical emergencies, accidents, and other unexpected events during their stay in the country.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseInsura />
      <FAQ items={faqs} />
    </main>
  )
}
