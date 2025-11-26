import { PageHero } from "@/components/ui/page-hero"
import { LeadForm } from "@/components/forms/lead-form"
import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Check, Shield, FileText, AlertTriangle } from "lucide-react"

const coverageTypes = [
  {
    title: "Comprehensive Coverage",
    description: "Full protection against accidents, theft, fire, and natural disasters",
  },
  { title: "Third-Party Liability", description: "Covers damage or injury caused to others" },
  { title: "Personal Accident Cover", description: "Protection for driver and passengers" },
  { title: "Roadside Assistance", description: "24/7 emergency support on the road" },
]

const additionalCovers = [
  "Agency Repair",
  "Roadside Assistance",
  "Protected No-Claim Bonus",
  "Personal Accident Cover",
  "Replacement Vehicle",
  "Off-Road Coverage",
]

const exclusions = [
  "Damage due to illegal acts",
  "Driving without a valid license",
  "Personal property inside the vehicle",
  "Flood damage (unless specified)",
  "Wear and tear",
  "Mechanical breakdown",
]

const documents = [
  "Valid UAE driving license",
  "Emirates ID",
  "Vehicle registration card (Mulkiya)",
  "Previous insurance policy (if renewal)",
  "No Claim Certificate",
]

const faqs = [
  {
    question: "What documents are required for car insurance?",
    answer:
      "You need a valid UAE driving license, Emirates ID, vehicle registration card (Mulkiya), and previous insurance policy if renewing.",
  },
  {
    question: "How long does it take to get coverage?",
    answer:
      "With Insura, you can get instant coverage once your application is approved. Most policies are issued within minutes.",
  },
  {
    question: "Can I transfer my no-claim bonus?",
    answer:
      "Yes, you can transfer your no-claim bonus from your previous insurer. This can help reduce your premium significantly.",
  },
  {
    question: "What should I do in case of an accident?",
    answer:
      "Call the police immediately, document the scene with photos, exchange details with other parties, and contact our 24/7 claims helpline.",
  },
  {
    question: "Is third-party liability insurance mandatory?",
    answer: "Yes, third-party liability insurance is mandatory in the UAE for all registered vehicles.",
  },
]

export default function CarInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="Car Insurance"
        description="Drive with confidence knowing iNSURA has you covered with comprehensive car insurance solutions."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Lead Form - Hero Section */}
              <div className="bg-accent/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get Your Car Insurance Quote</h2>
                    <p className="text-muted-foreground mb-6">
                      Protect your vehicle with comprehensive coverage starting from just AED 2.8/day. Get instant
                      quotes from top insurers.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Instant policy issuance",
                        "24/7 claims support",
                        "Agency repair option",
                        "Roadside assistance",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <LeadForm type="car" title="Get Free Quote" />
                </div>
              </div>

              {/* What is Car Insurance */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Car Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Car insurance is a legal requirement in the UAE and serves as a financial safeguard against unexpected
                  events. It protects you from the financial burden of accidents, theft, and damage to your vehicle or
                  third parties.
                </p>
                <p className="text-muted-foreground">
                  Whether you choose comprehensive coverage or third-party liability, having the right car insurance
                  ensures you can drive with peace of mind knowing you're protected against unforeseen circumstances.
                </p>
              </div>

              {/* Coverage Types */}
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

              {/* Additional Cover Options */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Additional Cover Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalCovers.map((cover, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{cover}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What's Not Covered (Exclusions)</h2>
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

              {/* Documents Required */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Documents Required</h2>
                <div className="bg-muted rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-primary text-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">2.8</div>
                    <div className="text-white/80 text-sm">AED/Day</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Claims Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <div className="text-white/80 text-sm">Partner Garages</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">Instant</div>
                    <div className="text-white/80 text-sm">Policy Issuance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
