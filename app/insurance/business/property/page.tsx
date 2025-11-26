import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, AlertTriangle } from "lucide-react"

const coverageIncludes = [
  "Fire and lightning damage",
  "Theft and burglary",
  "Natural disasters (flood, storm, earthquake)",
  "Accidental damage",
  "Glass breakage",
  "Business equipment and inventory",
]

const exclusions = ["Wear and tear", "War and terrorism", "Nuclear risks", "Gradual deterioration"]

const faqs = [
  {
    question: "What is Property All Risks Insurance?",
    answer:
      "Property All Risks insurance provides comprehensive coverage for your business property against damage from fire, theft, natural disasters, and accidental causes.",
  },
  {
    question: "What property is covered?",
    answer:
      "Coverage includes buildings, fixtures, equipment, inventory, and other business assets specified in the policy.",
  },
]

export default function PropertyAllRisksPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Property All Risks"
        description="Comprehensive protection for your business property against all types of damage."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Property Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your business property with comprehensive all-risks coverage.
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
