import { PageHero } from "@/components/ui/page-hero"
import {
  Briefcase,
  Building,
  HardHat,
  Scale,
  Users,
  Ship,
  Construction,
  CreditCard,
  Stethoscope,
  Calendar,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const businessProducts = [
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Comprehensive protection for your business operations and assets.",
    href: "/insurance/business/business",
  },
  {
    icon: Building,
    title: "Property All Risks",
    description: "Cover your commercial property against all risks including fire, theft, and natural disasters.",
    href: "/insurance/business/property",
  },
  {
    icon: HardHat,
    title: "Workmen Compensation",
    description: "Protect your employees with coverage for work-related injuries and illnesses.",
    href: "/insurance/business/workmen",
  },
  {
    icon: Scale,
    title: "Professional Indemnity",
    description: "Coverage for professionals against claims of negligence or inadequate work.",
    href: "/insurance/business/professional",
  },
  {
    icon: Users,
    title: "Public Liability",
    description: "Protect your business from claims by members of the public.",
    href: "/insurance/business/public-liability",
  },
  {
    icon: Ship,
    title: "Marine Cargo",
    description: "Insurance coverage for goods in transit by sea, air, or land.",
    href: "/insurance/business/marine",
  },
  {
    icon: Construction,
    title: "Contractors All Risks",
    description: "Comprehensive coverage for construction projects and contractors.",
    href: "/insurance/business/contractors",
  },
  {
    icon: CreditCard,
    title: "Trade Credit",
    description: "Protect your business against non-payment by customers.",
    href: "/insurance/business/trade-credit",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description: "Coverage for healthcare professionals against malpractice claims.",
    href: "/insurance/business/medical-malpractice",
  },
  {
    icon: Calendar,
    title: "Event Insurance",
    description: "Protect your events against cancellation, liability, and other risks.",
    href: "/insurance/business/event",
  },
]

export default function BusinessInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Business Insurance"
        title="Business Insurance"
        description="Protect your enterprise with comprehensive business insurance solutions tailored to your industry."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessProducts.map((product) => (
              <div
                key={product.title}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
