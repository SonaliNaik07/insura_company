import { PageHero } from "@/components/ui/page-hero"
import { Heart, Users, Shield, UserCheck, ExternalLink } from "lucide-react"
import Link from "next/link"

const healthProducts = [
  {
    icon: UserCheck,
    title: "Individual Medical Insurance",
    description: "Personal health coverage tailored to your individual needs and budget.",
    href: "/insurance/health/individual",
  },
  {
    icon: Users,
    title: "Group Medical Insurance",
    description: "Comprehensive health coverage for your employees and their families.",
    href: "/insurance/health/group",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Flexible health insurance plans covering routine check-ups to major medical expenses.",
    href: "/insurance/health/health",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Secure your family's financial future with our comprehensive life insurance plans.",
    href: "/insurance/health/life",
  },
]

export default function HealthInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Health Insurance"
        title="Health Insurance"
        description="Stay healthy and worry-free with our flexible health insurance plans covering all your medical needs."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthProducts.map((product) => (
              <div
                key={product.title}
                className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
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
