import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, AlertTriangle } from "lucide-react"

const coverageIncludes = [
  "Loss or damage to cargo",
  "Theft during transit",
  "Natural disasters",
  "Sea, air, and land transit",
  "General average contributions",
  "Warehouse to warehouse coverage",
]

const exclusions = ["Improper packing", "Delay in delivery", "Inherent vice", "War and strikes (unless extended)"]

const faqs = [
  {
    question: "What is marine cargo insurance?",
    answer:
      "Marine cargo insurance covers goods in transit by sea, air, or land against loss, damage, or theft during transportation.",
  },
  {
    question: "What routes are covered?",
    answer: "Coverage can include international and domestic routes by sea, air, road, or rail transportation.",
  },
]

export default function MarineCargoPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Marine Cargo"
        description="Protect your goods during transit by sea, air, or land."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Marine Cargo Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your shipments with comprehensive cargo coverage.
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

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Exclusions</h2>
                <div className="bg-destructive/5 rounded-lg p-6 border border-destructive/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exclusions.map((exclusion, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        <span className="text-muted-foreground">{exclusion}</span>
                      </div>
                    ))}
                  </div>
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
