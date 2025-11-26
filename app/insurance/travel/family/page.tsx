import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const benefits = [
  "Coverage for entire family under one policy",
  "Children often covered free",
  "Cost-effective compared to individual plans",
  "Simplified claims process",
  "24/7 family assistance hotline",
  "Medical evacuation for all members",
]

const faqs = [
  {
    question: "Who is covered under family travel insurance?",
    answer:
      "Family travel insurance typically covers parents and their dependent children (usually up to age 18 or 21 if in full-time education) traveling together.",
  },
  {
    question: "Are children covered for free?",
    answer:
      "Many family plans include children at no extra cost when traveling with insured parents. The exact terms vary by plan.",
  },
]

export default function FamilyTravelPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Family Travel Insurance"
        description="Comprehensive coverage for the whole family's travel adventures."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Family Travel Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your entire family with comprehensive travel coverage.
                    </p>
                  </div>
                  <LeadForm type="travel" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Family Travel Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Family travel insurance provides coverage for the entire family under a single policy. It's a
                  cost-effective way to ensure everyone is protected during your family vacation or trip.
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
