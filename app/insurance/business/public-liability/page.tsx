import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const coverageIncludes = [
  "Third-party bodily injury",
  "Third-party property damage",
  "Legal defense costs",
  "Settlement costs",
  "Court attendance costs",
  "Emergency medical expenses",
]

const faqs = [
  {
    question: "What is public liability insurance?",
    answer:
      "Public liability insurance covers your business against claims from third parties for injury or property damage caused by your business activities.",
  },
  {
    question: "Is it mandatory?",
    answer:
      "While not always legally required, public liability insurance is essential for any business that interacts with the public or operates on client premises.",
  },
]

export default function PublicLiabilityPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Public Liability"
        description="Protection against third-party injury and property damage claims."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Public Liability Quote</h2>
                    <p className="text-muted-foreground mb-6">Protect your business against third-party claims.</p>
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
