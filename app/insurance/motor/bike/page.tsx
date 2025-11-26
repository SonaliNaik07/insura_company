import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Shield } from "lucide-react"

const coverageTypes = [
  { title: "Comprehensive Coverage", description: "Full protection against accidents, theft, fire, and vandalism" },
  { title: "Third-Party Liability", description: "Covers damage or injury caused to others" },
  { title: "Personal Accident Cover", description: "Protection for the rider" },
]

const addOns = ["Roadside Assistance", "Agency Repair", "Passenger Cover", "Helmet Cover", "Personal Belongings Cover"]

const faqs = [
  {
    question: "What documents are required for bike insurance?",
    answer:
      "You need a valid UAE driving license, Emirates ID, vehicle registration card (Mulkiya), and previous insurance policy if renewing.",
  },
  {
    question: "Is bike insurance mandatory in UAE?",
    answer: "Yes, third-party liability insurance is mandatory for all motorcycles registered in the UAE.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Contact our 24/7 claims helpline, provide your policy details and accident information, and our team will guide you through the process.",
  },
]

export default function BikeInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="Bike Insurance"
        description="Protect your motorcycle with comprehensive coverage tailored for UAE riders."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Lead Form Section */}
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Your Bike Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Ride with confidence knowing you're protected with comprehensive motorcycle coverage.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Comprehensive coverage",
                        "Third-party liability",
                        "Personal accident cover",
                        "Roadside assistance",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <LeadForm type="bike" title="Get Free Quote" />
                </div>
              </div>

              {/* Why Bike Insurance */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Bike Insurance is Mandatory in UAE</h2>
                <p className="text-muted-foreground mb-4">
                  In the UAE, all registered motorcycles must have at least third-party liability insurance. This
                  protects you financially if you cause damage to someone else's property or injure another person while
                  riding.
                </p>
                <p className="text-muted-foreground">
                  Beyond legal compliance, bike insurance provides peace of mind and financial protection against theft,
                  accidents, and natural disasters.
                </p>
              </div>

              {/* Coverage Types */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {coverageTypes.map((type, index) => (
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

              {/* Add-ons */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Available Add-ons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{addon}</span>
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
