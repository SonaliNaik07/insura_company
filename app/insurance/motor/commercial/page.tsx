import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Truck } from "lucide-react"

const coverageOptions = [
  { title: "Comprehensive Coverage", description: "Full protection for your commercial vehicles" },
  { title: "Third-Party Liability", description: "Mandatory coverage for business vehicles" },
  { title: "Goods in Transit", description: "Protection for cargo and goods being transported" },
  { title: "Driver Liability", description: "Coverage for employee drivers" },
]

const faqs = [
  {
    question: "What is commercial vehicle insurance?",
    answer:
      "Commercial vehicle insurance provides coverage for vehicles used primarily for business purposes, including delivery vans, trucks, and company cars.",
  },
  {
    question: "What vehicles are covered?",
    answer:
      "Coverage includes trucks, vans, pickup trucks, buses, taxis, and any vehicle registered for commercial use.",
  },
  {
    question: "Can I cover multiple commercial vehicles?",
    answer:
      "Yes, we offer fleet insurance options for businesses with multiple commercial vehicles under a single policy.",
  },
]

export default function CommercialInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="Commercial Vehicle Insurance"
        description="Comprehensive coverage for your business vehicles to keep your operations running smoothly."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Commercial Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your business vehicles with tailored commercial coverage solutions.
                    </p>
                  </div>
                  <LeadForm type="business" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Commercial Vehicle Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Commercial vehicle insurance provides protection for vehicles used for business purposes. Whether you
                  operate delivery trucks, company cars, or a fleet of service vehicles, this coverage ensures your
                  business operations are protected.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverageOptions.map((option, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Truck className="w-6 h-6 text-primary" />
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
