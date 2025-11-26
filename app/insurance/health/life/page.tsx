import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Shield, AlertTriangle } from "lucide-react"

const lifeInsuranceTypes = [
  { title: "Term Life Insurance", description: "Affordable coverage for a specific period" },
  { title: "Whole Life Insurance", description: "Lifetime coverage with cash value accumulation" },
  { title: "Endowment Plans", description: "Savings plus protection combined" },
  { title: "Unit-Linked Plans", description: "Investment-linked insurance products" },
]

const coverageOptions = [
  "Death benefit for beneficiaries",
  "Critical illness coverage",
  "Permanent disability benefit",
  "Accidental death benefit",
  "Waiver of premium on disability",
]

const exclusions = [
  "Suicide within first year",
  "Death due to illegal activities",
  "Non-disclosure of health conditions",
  "War and terrorism (varies by policy)",
]

const faqs = [
  {
    question: "What is life insurance?",
    answer:
      "Life insurance provides financial protection for your family in case of your death. It ensures your loved ones are financially secure and can maintain their lifestyle.",
  },
  {
    question: "How much coverage do I need?",
    answer:
      "A general rule is 10-15 times your annual income. Consider your debts, family's expenses, children's education, and long-term goals when calculating coverage.",
  },
  {
    question: "What's the difference between term and whole life?",
    answer:
      "Term life provides coverage for a specific period and is more affordable. Whole life provides lifetime coverage and builds cash value over time.",
  },
  {
    question: "Can I change my beneficiary?",
    answer: "Yes, you can update your beneficiary at any time by submitting a written request to your insurer.",
  },
]

export default function LifeInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Health Insurance"
        title="Life Insurance"
        description="Secure your family's future with comprehensive life insurance coverage."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Life Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your family's financial future with the right life insurance plan.
                    </p>
                  </div>
                  <LeadForm type="health" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Life Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Life insurance provides financial protection for your family in case of your untimely death. It
                  ensures your loved ones can maintain their lifestyle, pay off debts, and meet future financial goals.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Types of Life Insurance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lifeInsuranceTypes.map((type, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="space-y-3">
                  {coverageOptions.map((option, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{option}</span>
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
