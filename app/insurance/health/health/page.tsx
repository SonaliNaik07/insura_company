import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Heart } from "lucide-react"

const coverageTypes = [
  { title: "Basic Plan", description: "Essential coverage for hospitalization and emergencies" },
  { title: "Standard Plan", description: "Balanced coverage including outpatient care" },
  { title: "Comprehensive Plan", description: "Full coverage with maternity, dental, and vision" },
  { title: "Premium Plan", description: "Maximum coverage with worldwide benefits" },
]

const benefits = [
  "Mandatory compliance with UAE health law",
  "Access to quality healthcare",
  "Financial protection against medical expenses",
  "Cashless treatment at network hospitals",
  "24/7 medical assistance",
]

const faqs = [
  {
    question: "Is health insurance mandatory in UAE?",
    answer:
      "Yes, health insurance is mandatory for all residents in Dubai, Abu Dhabi, and gradually being implemented across all Emirates.",
  },
  {
    question: "What's the difference between basic and comprehensive plans?",
    answer:
      "Basic plans cover essential hospitalization and emergencies. Comprehensive plans include outpatient care, maternity, dental, and vision benefits.",
  },
  {
    question: "Can I choose my own doctor?",
    answer:
      "Yes, you can visit any doctor within your insurance network. Some plans also offer reimbursement for out-of-network visits.",
  },
]

export default function HealthInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Health Insurance"
        title="Health Insurance"
        description="Comprehensive health coverage plans to protect you and your family's wellbeing."
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
                      Find the perfect health plan for your needs with instant quotes from top insurers.
                    </p>
                  </div>
                  <LeadForm type="health" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Health Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Health insurance is mandatory in the UAE and serves as a financial safeguard against medical expenses.
                  It provides access to quality healthcare including hospitalization, outpatient care, and preventive
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageTypes.map((type, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
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
