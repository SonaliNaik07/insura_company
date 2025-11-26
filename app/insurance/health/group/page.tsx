import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Users } from "lucide-react"

const benefits = [
  "Attract and retain top talent",
  "Compliance with UAE labor law",
  "Cost-effective group rates",
  "Customizable coverage levels",
  "Easy administration and enrollment",
  "Comprehensive reporting",
]

const coverageOptions = [
  { title: "Inpatient Coverage", description: "Hospitalization, surgery, and room charges" },
  { title: "Outpatient Coverage", description: "Doctor consultations, diagnostics, pharmacy" },
  { title: "Maternity Benefits", description: "Pre and post-natal care for employees" },
  { title: "Dental & Vision", description: "Routine dental and eye care for staff" },
]

const faqs = [
  {
    question: "Is group medical insurance mandatory in UAE?",
    answer: "Yes, employers in Dubai and Abu Dhabi are required by law to provide health insurance to their employees.",
  },
  {
    question: "What's the minimum group size?",
    answer: "Group medical insurance is typically available for companies with 2 or more employees.",
  },
  {
    question: "Can employees add dependents?",
    answer:
      "Yes, employees can add family members including spouse and children to the group plan, usually at an additional premium.",
  },
]

export default function GroupMedicalPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Health Insurance"
        title="Group Medical Insurance"
        description="Comprehensive health coverage for your employees under one flexible policy."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Group Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Provide comprehensive health coverage for your team with our tailored group plans.
                    </p>
                  </div>
                  <LeadForm type="business" title="Get Group Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Group Medical Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Group medical insurance provides health coverage for employees under a single policy. It helps
                  businesses comply with UAE regulations while offering valuable benefits to attract and retain talent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Benefits for Your Business</h2>
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageOptions.map((option, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
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
