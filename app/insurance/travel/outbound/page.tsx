import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const benefits = [
  "Worldwide medical coverage",
  "Trip cancellation protection",
  "Lost baggage compensation",
  "Flight delay coverage",
  "Emergency evacuation",
  "24/7 global assistance",
]

const faqs = [
  {
    question: "What destinations are covered?",
    answer:
      "Our outbound travel insurance covers travel to all countries worldwide, with specific plans for Schengen countries if required.",
  },
  {
    question: "Do I need Schengen travel insurance?",
    answer:
      "If traveling to Europe's Schengen zone, you need insurance meeting specific requirements (minimum €30,000 coverage). We offer Schengen-compliant plans.",
  },
]

export default function OutboundTravelPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Outbound Travel Insurance"
        description="Comprehensive coverage for UAE residents traveling abroad."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Outbound Travel Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your international trips with comprehensive worldwide coverage.
                    </p>
                  </div>
                  <LeadForm type="travel" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Outbound Travel Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Outbound travel insurance provides coverage for UAE residents traveling abroad. It protects against
                  medical emergencies, trip cancellations, lost luggage, and other travel-related incidents while you're
                  overseas.
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
