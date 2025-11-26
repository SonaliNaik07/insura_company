import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, AlertTriangle } from "lucide-react"

const benefits = [
  "Legal compliance with UAE regulations",
  "Financial protection against third-party claims",
  "Coverage for bodily injury to others",
  "Coverage for property damage to others",
  "Peace of mind while driving",
  "Affordable premium rates",
]

const exclusions = [
  "Damage to your own vehicle",
  "Personal property inside the vehicle",
  "Injuries to the policyholder",
  "Damage caused while driving under influence",
]

const faqs = [
  {
    question: "What is third-party liability insurance?",
    answer:
      "Third-party liability insurance covers damage or injury you cause to other people or their property while driving. It's the minimum legal requirement in the UAE.",
  },
  {
    question: "Does it cover my own vehicle?",
    answer:
      "No, third-party liability insurance only covers damage you cause to others. For your own vehicle coverage, you need comprehensive insurance.",
  },
  {
    question: "Is it sufficient for my needs?",
    answer:
      "It depends on your situation. If you have an older vehicle, third-party might be sufficient. For newer or valuable vehicles, comprehensive coverage is recommended.",
  },
]

export default function ThirdPartyInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="Third Party Liability Insurance"
        description="Meet UAE legal requirements with affordable third-party liability coverage."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Third-Party Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Affordable coverage that meets UAE legal requirements for all vehicle owners.
                    </p>
                  </div>
                  <LeadForm type="car" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Third-Party Liability Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Third-party liability insurance is mandatory in the UAE for all registered vehicles. It covers damage
                  or injury you may cause to other people, their vehicles, or property while driving.
                </p>
                <p className="text-muted-foreground">
                  This is the most basic and affordable type of motor insurance, providing essential legal protection
                  without covering your own vehicle.
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

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Exclusions</h2>
                <div className="bg-destructive/5 rounded-lg p-6 border border-destructive/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
