import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Truck } from "lucide-react"

const benefits = [
  { title: "Cost Efficiency", description: "Reduced premiums through bulk coverage for multiple vehicles" },
  { title: "Simplified Management", description: "One policy for your entire fleet, easy renewals and claims" },
  { title: "Comprehensive Protection", description: "Coverage for all vehicle types including trucks, vans, and cars" },
  { title: "24/7 Support", description: "Round-the-clock claims assistance and roadside support" },
]

const faqs = [
  {
    question: "What is fleet insurance?",
    answer:
      "Fleet insurance is a single policy that covers multiple vehicles owned by a business, offering simplified management and cost savings compared to individual policies.",
  },
  {
    question: "How many vehicles do I need for fleet insurance?",
    answer:
      "Typically, fleet insurance is available for businesses with 5 or more vehicles, though this can vary by insurer.",
  },
  {
    question: "What types of vehicles can be covered?",
    answer:
      "Fleet insurance can cover cars, vans, trucks, motorcycles, and specialty vehicles used for business purposes.",
  },
]

export default function FleetInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="Fleet Insurance"
        description="Comprehensive coverage for your business fleet with simplified management and competitive rates."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Lead Form Section */}
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Your Fleet Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your business vehicles with a single comprehensive policy designed for fleet operators.
                    </p>
                  </div>
                  <LeadForm type="fleet" title="Get Fleet Quote" />
                </div>
              </div>

              {/* What is Fleet Insurance */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Fleet Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Fleet insurance provides coverage for multiple vehicles under a single policy. This is ideal for
                  businesses that operate several vehicles, including logistics companies, corporate fleets, and
                  transport services.
                </p>
                <p className="text-muted-foreground">
                  With fleet insurance, you benefit from simplified administration, consistent coverage across all
                  vehicles, and potential cost savings through bulk rates.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Benefits of Fleet Insurance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Truck className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
