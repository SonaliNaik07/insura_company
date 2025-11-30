import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Building } from "lucide-react"

const coverageTypes = [
  { title: "Property Insurance", description: "Protection for your business premises and assets" },
  { title: "Liability Insurance", description: "Coverage against third-party claims" },
  { title: "Employee Protection", description: "Workmen compensation and group health" },
  { title: "Business Interruption", description: "Income protection during disruptions" },
]

const faqs = [
  {
    question: "What is business insurance?",
    answer:
      "Business insurance is a range of coverage options that protect companies against financial losses from various risks including property damage, liability claims, and employee-related incidents.",
  },
  {
    question: "What coverage does my business need?",
    answer:
      "The coverage you need depends on your industry, size, and risks. Common coverages include property, liability, workmen compensation, and professional indemnity.",
  },
]

export default function BusinessInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Business Insurance"
        description="Comprehensive protection for your business against various risks and liabilities."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Business Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your enterprise with comprehensive business insurance solutions.
                    </p>
                  </div>
                  <LeadForm type="business" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Business Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Business insurance provides protection against the various risks faced by companies. It helps
                  safeguard your business assets, employees, and operations from financial losses due to unforeseen
                  events.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageTypes.map((type, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
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
