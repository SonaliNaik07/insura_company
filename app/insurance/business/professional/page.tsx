import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const coverageIncludes = [
  "Professional negligence claims",
  "Errors and omissions",
  "Legal defense costs",
  "Settlement costs",
  "Breach of duty",
  "Misrepresentation",
]

const professionsCovered = [
  "Lawyers",
  "Accountants",
  "Architects",
  "Engineers",
  "IT Consultants",
  "Healthcare Professionals",
  "Financial Advisors",
  "Real Estate Agents",
]

const faqs = [
  {
    question: "What is professional indemnity insurance?",
    answer:
      "Professional indemnity insurance protects professionals against claims of negligence, errors, or omissions in their professional services.",
  },
  {
    question: "Who needs this insurance?",
    answer:
      "Any professional providing advice or services should have PI insurance, including lawyers, accountants, architects, engineers, consultants, and healthcare providers.",
  },
]

export default function ProfessionalIndemnityPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Professional Indemnity"
        description="Protect your professional reputation with coverage against negligence claims."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Professional Indemnity Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Safeguard your professional practice against negligence claims.
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Professions Covered</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {professionsCovered.map((profession, index) => (
                    <div key={index} className="bg-muted rounded-lg p-4 text-center">
                      <span className="text-foreground font-medium">{profession}</span>
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
