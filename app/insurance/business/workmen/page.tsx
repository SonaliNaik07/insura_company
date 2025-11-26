import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { HardHat } from "lucide-react"

const coverageOptions = [
  { title: "Medical Expenses", description: "Coverage for work-related injuries and illnesses" },
  { title: "Disability Benefits", description: "Compensation for temporary or permanent disability" },
  { title: "Death Benefits", description: "Financial support for employee's family" },
  { title: "Legal Costs", description: "Coverage for employer liability claims" },
]

const faqs = [
  {
    question: "Is workmen compensation mandatory?",
    answer:
      "Yes, workmen compensation insurance is mandatory in the UAE for all employers to cover their employees against workplace injuries.",
  },
  {
    question: "Who is covered?",
    answer:
      "All employees including full-time, part-time, and contract workers are covered under workmen compensation insurance.",
  },
]

export default function WorkmenCompensationPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Workmen Compensation & Employers Liability"
        description="Protect your employees and business with mandatory workplace coverage."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Workmen Compensation Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Comply with UAE law and protect your employees with comprehensive coverage.
                    </p>
                  </div>
                  <LeadForm type="business" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Workmen Compensation Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Workmen compensation insurance is mandatory in the UAE and covers employees for workplace injuries and
                  illnesses. It provides financial protection for medical expenses, disability, and death benefits.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageOptions.map((option, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <HardHat className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{option.title}</h3>
                      <p className="text-muted-foreground text-sm">{option.description}</p>
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
