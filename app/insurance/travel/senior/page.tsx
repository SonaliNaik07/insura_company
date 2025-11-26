import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const benefits = [
  "Specialized coverage for ages 65+",
  "Pre-existing condition coverage available",
  "Enhanced medical coverage limits",
  "Emergency medical evacuation",
  "24/7 multilingual assistance",
  "No upper age limit on some plans",
]

const faqs = [
  {
    question: "Is there an age limit?",
    answer:
      "We offer plans for travelers of all ages, including specialized coverage for seniors 65 and above with no upper age limit on select plans.",
  },
  {
    question: "Are pre-existing conditions covered?",
    answer:
      "Some plans offer coverage for stable pre-existing conditions. Coverage varies by plan and condition, so please consult with our advisors.",
  },
]

export default function SeniorCitizenPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Senior Citizen Insurance"
        description="Specialized travel coverage designed for senior travelers."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Senior Travel Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Travel with peace of mind with coverage designed for your needs.
                    </p>
                  </div>
                  <LeadForm type="health" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Senior Citizen Travel Insurance</h2>
                <p className="text-muted-foreground mb-4">
                  Our senior citizen travel insurance is specially designed for travelers aged 65 and above. It provides
                  enhanced medical coverage and considers the unique needs of senior travelers.
                </p>
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
