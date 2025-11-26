import { PageHero } from "@/components/ui/page-hero"
import { RefreshCw, Bell, FileCheck, Shield, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const renewalBenefits = [
  {
    icon: Bell,
    title: "Advance Renewal Notice",
    description: "Receive timely reminders before your policy expires so you never miss a renewal deadline.",
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Renew your policy in minutes through our streamlined online portal or mobile app.",
  },
  {
    icon: Shield,
    title: "Continuous Coverage",
    description: "Ensure uninterrupted protection with seamless transition to your new policy term.",
  },
  {
    icon: FileCheck,
    title: "Easy Documentation",
    description: "No need to resubmit documents. We keep your information secure and ready for renewal.",
  },
]

export default function RenewPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Renew"
        title="Renew Your Policy"
        description="Don't let your coverage lapse. Renew your insurance policy quickly and easily with iNSURA."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Renewal Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {renewalBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl p-6 border shadow-sm text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Renewal Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How to Renew</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Check Your Renewal Notice</h3>
                    <p className="text-muted-foreground">
                      {"You'll receive an email and SMS notification before your policy expires."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Review Your Coverage</h3>
                    <p className="text-muted-foreground">
                      Update your coverage options or keep your existing plan. Our team can help you choose.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Complete Payment</h3>
                    <p className="text-muted-foreground">
                      Pay securely online or contact our team for flexible payment options.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Receive Confirmation</h3>
                    <p className="text-muted-foreground">
                      Get instant confirmation and your updated policy documents via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Renewal CTA Card */}
            <div className="bg-primary rounded-2xl p-8 text-white">
              <RefreshCw className="w-12 h-12 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Ready to Renew?</h2>
              <p className="text-white/80 mb-6">
                Keep your coverage active and continue enjoying peace of mind. Renew your policy today or contact our
                team for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Renew Now
                </Link>
                <a
                  href="tel:+97143574547"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
