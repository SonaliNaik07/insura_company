import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const coverageIncludes = [
  "Event cancellation",
  "Venue damage",
  "Public liability",
  "Equipment damage",
  "Weather-related cancellation",
  "Non-appearance of key persons",
]

const faqs = [
  {
    question: "What is event insurance?",
    answer:
      "Event insurance covers financial losses from event cancellation, postponement, or disruption, as well as liability for injuries or property damage during the event.",
  },
  {
    question: "What events can be covered?",
    answer:
      "Coverage is available for weddings, corporate events, concerts, exhibitions, sports events, and other public or private gatherings.",
  },
]

export default function EventInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Event Insurance"
        description="Comprehensive coverage for events against cancellation and liability."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Event Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your event investment with comprehensive coverage.
                    </p>
                  </div>
                  <LeadForm type="business" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Includes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coverageIncludes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
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
