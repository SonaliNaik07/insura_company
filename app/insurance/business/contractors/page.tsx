import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const coverageIncludes = [
  "Works under construction",
  "Contractor's equipment",
  "Third-party liability",
  "Removal of debris",
  "Professional fees",
  "Extended maintenance coverage",
]

const faqs = [
  {
    question: "What is Contractors All Risks insurance?",
    answer:
      "CAR insurance provides comprehensive coverage for construction projects, protecting against damage to works, equipment, and third-party liability during the construction period.",
  },
  {
    question: "Who needs this coverage?",
    answer:
      "Contractors, developers, and project owners undertaking construction projects should have CAR insurance to protect their investment.",
  },
]

export default function ContractorsAllRisksPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Contractors All Risks"
        description="Comprehensive coverage for construction projects and contractor operations."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get CAR Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your construction projects with comprehensive coverage.
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
