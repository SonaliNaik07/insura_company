import { PageHero } from "@/components/ui/page-hero"
import { Phone, MessageCircle, Car } from "lucide-react"
import Link from "next/link"

const claimSteps = [
  {
    step: 1,
    title: "Report the Incident",
    description:
      "Contact us immediately after an incident. You can file online, via our mobile app, or call our 24/7 hotline.",
  },
  {
    step: 2,
    title: "Document Everything",
    description: "Gather all necessary documents including photos, police reports, and witness information.",
  },
  {
    step: 3,
    title: "Submit Your Claim",
    description: "Complete the claim form with all required details and supporting documents.",
  },
  {
    step: 4,
    title: "Claim Assessment",
    description: "Our team will review your claim and may contact you for additional information.",
  },
  {
    step: 5,
    title: "Settlement",
    description: "Once approved, receive your settlement quickly through your preferred payment method.",
  },
]

export default function ClaimsPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Claims"
        title="File a Claim"
        description="We're here to help you through the claims process. Our dedicated team ensures quick and hassle-free settlements."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Claim Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link
              href="/contact"
              className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                Contact Us
              </h3>
              <p className="text-muted-foreground">
                Reach out to our support team for assistance with your claim. We're available 24/7 to help you.
              </p>
            </Link>

            <Link
              href="/claims/roadside"
              className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                Roadside Assistance
              </h3>
              <p className="text-muted-foreground">
                Stuck on the road? Get immediate roadside assistance including towing, battery jump-start, and more.
              </p>
            </Link>
          </div>

          {/* Claim Process */}
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to File a Claim</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {claimSteps.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < claimSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <Phone className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">24/7 Claims Hotline</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              For emergencies and urgent claims, call our dedicated hotline. Our team is ready to assist you around the
              clock.
            </p>
            <a
              href="tel:+97143574547"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +971 4 357 4547
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
