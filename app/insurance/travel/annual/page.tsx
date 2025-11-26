import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const benefits = [
  "Unlimited trips in one year",
  "Cost-effective for frequent travelers",
  "Worldwide coverage",
  "No need to buy insurance for each trip",
  "Convenient and hassle-free",
  "Family options available",
]

const faqs = [
  {
    question: "How many trips can I take?",
    answer:
      "Annual multi-trip insurance covers unlimited trips within the policy year, typically with a maximum duration per trip (usually 30-90 days).",
  },
  {
    question: "Is it worth it?",
    answer:
      "If you travel 3 or more times a year, annual multi-trip insurance is usually more cost-effective than buying single trip policies each time.",
  },
]

export default function AnnualMultiTripPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Annual Multi Trip"
        description="One policy for all your trips throughout the year."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Annual Multi Trip Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Cover all your trips for the year with a single convenient policy.
                    </p>
                  </div>
                  <LeadForm type="travel" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Annual Multi Trip Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Annual multi-trip insurance provides coverage for unlimited trips throughout the year under a single
                  policy. It's perfect for frequent travelers who want the convenience of year-round protection without
                  purchasing separate policies for each trip.
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
