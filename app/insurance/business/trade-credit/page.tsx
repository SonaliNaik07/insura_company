import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check } from "lucide-react"

const benefits = [
  "Protection against customer defaults",
  "Improved cash flow management",
  "Business continuity assurance",
  "Access to credit information",
  "Enhanced borrowing capacity",
  "Domestic and export coverage",
]

const faqs = [
  {
    question: "What is trade credit insurance?",
    answer:
      "Trade credit insurance protects businesses against losses from customer non-payment due to insolvency or protracted default.",
  },
  {
    question: "Who needs trade credit insurance?",
    answer:
      "Any business that sells goods or services on credit terms should consider trade credit insurance to protect their receivables.",
  },
]

export default function TradeCreditPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Trade Credit Insurance"
        description="Protect your business against customer payment defaults."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Trade Credit Quote</h2>
                    <p className="text-muted-foreground mb-6">Protect your receivables against customer defaults.</p>
                  </div>
                  <LeadForm type="business" title="Get Quote" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
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
