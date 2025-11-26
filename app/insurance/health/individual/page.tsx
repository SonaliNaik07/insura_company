import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Heart, AlertTriangle } from "lucide-react"

const coverageOptions = [
  { title: "Hospitalization", description: "Inpatient treatment and room charges" },
  { title: "Outpatient Care", description: "Doctor visits, diagnostics, and pharmacy" },
  { title: "Maternity", description: "Pre and post-natal care, delivery expenses" },
  { title: "Dental & Vision", description: "Routine dental and eye care coverage" },
]

const benefits = [
  "Access to network of 1000+ hospitals",
  "Cashless treatment at network facilities",
  "24/7 medical assistance helpline",
  "Annual health checkup included",
  "Worldwide emergency coverage",
  "Direct billing with hospitals",
]

const exclusions = [
  "Pre-existing conditions (waiting period applies)",
  "Cosmetic surgery",
  "Non-prescribed treatments",
  "Experimental treatments",
  "Self-inflicted injuries",
]

const faqs = [
  {
    question: "What is covered under individual medical insurance?",
    answer:
      "Individual medical insurance covers hospitalization, outpatient care, maternity (optional), dental, vision, and emergency treatments depending on your plan.",
  },
  {
    question: "Is there a waiting period for pre-existing conditions?",
    answer:
      "Yes, most plans have a waiting period of 6-24 months for pre-existing conditions. The exact period depends on the insurer and plan.",
  },
  {
    question: "Can I add family members to my plan?",
    answer:
      "Individual plans cover only the policyholder. For family coverage, consider our Family Health Insurance plans.",
  },
  {
    question: "How do I make a claim?",
    answer:
      "For network hospitals, simply show your insurance card for cashless treatment. For reimbursement claims, submit your bills and medical reports through our online portal.",
  },
]

export default function IndividualMedicalPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Health Insurance"
        title="Individual Medical Insurance"
        description="Comprehensive health coverage tailored to your personal healthcare needs."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Health Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your health with comprehensive individual medical coverage from top UAE insurers.
                    </p>
                  </div>
                  <LeadForm type="health" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Individual Medical Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Individual medical insurance provides comprehensive health coverage for hospitalization, outpatient
                  care, maternity, dental, and vision needs. It ensures you have access to quality healthcare without
                  the financial burden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageOptions.map((option, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-primary" />
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

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Exclusions</h2>
                <div className="bg-destructive/5 rounded-lg p-6 border border-destructive/20">
                  <div className="space-y-3">
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
