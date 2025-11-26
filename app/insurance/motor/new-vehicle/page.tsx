import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Shield } from "lucide-react"

const coverageTypes = [
  { title: "Third-Party Liability", description: "Mandatory coverage for damage to others" },
  { title: "Collision Coverage", description: "Protection against accident damage" },
  { title: "Comprehensive Coverage", description: "Full protection including theft and natural disasters" },
  { title: "Personal Injury Protection", description: "Medical expenses for driver and passengers" },
]

const addOns = [
  "Agency Repair (recommended for new vehicles)",
  "Zero Depreciation",
  "Roadside Assistance",
  "Passenger Cover",
  "Replacement Vehicle",
]

const faqs = [
  {
    question: "Why is agency repair important for new vehicles?",
    answer:
      "Agency repair ensures your new vehicle is serviced at authorized dealerships with genuine parts, maintaining your warranty and vehicle value.",
  },
  {
    question: "What coverage is recommended for new cars?",
    answer:
      "For new vehicles, we recommend comprehensive coverage with agency repair and zero depreciation add-ons to maximize protection.",
  },
  {
    question: "How soon can I get coverage?",
    answer:
      "With Insura, you can get instant coverage for your new vehicle, allowing you to drive off the showroom with peace of mind.",
  },
]

export default function NewVehicleInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="New Vehicle Insurance"
        description="Protect your new investment with comprehensive coverage tailored for new vehicles."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Insure Your New Vehicle</h2>
                    <p className="text-muted-foreground mb-6">
                      Get comprehensive protection for your new car with agency repair and premium coverage options.
                    </p>
                  </div>
                  <LeadForm type="car" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Add-ons</h2>
                <div className="space-y-3">
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
