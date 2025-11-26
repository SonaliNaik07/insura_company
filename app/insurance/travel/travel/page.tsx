import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Plane } from "lucide-react"

const coverageOptions = [
  { title: "Medical Emergencies", description: "Overseas medical treatment and hospitalization" },
  { title: "Trip Cancellation", description: "Reimbursement for cancelled or interrupted trips" },
  { title: "Lost Baggage", description: "Compensation for lost, stolen, or delayed luggage" },
  { title: "Flight Delays", description: "Coverage for additional expenses due to delays" },
]

const benefits = [
  "Worldwide coverage",
  "24/7 emergency assistance",
  "Medical evacuation coverage",
  "Personal liability protection",
  "Adventure sports coverage (optional)",
  "COVID-19 coverage included",
]

const faqs = [
  {
    question: "When should I buy travel insurance?",
    answer:
      "Buy travel insurance as soon as you book your trip. This ensures coverage for pre-departure cancellations and other unforeseen events.",
  },
  {
    question: "Does it cover COVID-19?",
    answer:
      "Yes, our travel insurance plans include coverage for COVID-19 related medical expenses and trip cancellations.",
  },
  {
    question: "What's covered under medical emergencies?",
    answer:
      "Medical emergencies include hospitalization, doctor visits, emergency dental treatment, and medical evacuation to your home country if needed.",
  },
]

export default function TravelInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Travel Insurance"
        description="Explore the world with confidence knowing you're protected against the unexpected."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Travel Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Travel worry-free with comprehensive coverage for your next adventure.
                    </p>
                  </div>
                  <LeadForm type="travel" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Travel Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Travel insurance provides essential protection against unexpected events during your trip. From
                  medical emergencies abroad to trip cancellations and lost luggage, it ensures you can travel with
                  peace of mind.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageOptions.map((option, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{option.title}</h3>
                      <p className="text-muted-foreground text-sm">{option.description}</p>
                    </div>
                  ))}
                </div>
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
