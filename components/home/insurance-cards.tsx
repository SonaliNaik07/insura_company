import Link from "next/link"
import { Car, Heart, Briefcase, Users, Plane, ExternalLink } from "lucide-react"

const insuranceTypes = [
  {
    icon: Car,
    title: "Car Insurance",
    description:
      "Drive with confidence knowing iNSURA has you covered. Our comprehensive car insurance policies protect your vehicle against accidents, theft, and damage, with competitive rates and fast claim processing.",
    color: "bg-blue-50",
    iconColor: "text-primary",
    href: "/insurance/motor/car",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description:
      "Stay healthy and worry-free with our flexible health insurance plans. From routine check-ups to major medical expenses, we've got you covered with a wide network of hospitals and healthcare providers.",
    color: "bg-red-50",
    iconColor: "text-red-500",
    href: "/insurance/health",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description:
      "Protect your enterprise with comprehensive business insurance solutions. From property damage to liability coverage, we help safeguard your business assets and ensure continuity.",
    color: "bg-green-50",
    iconColor: "text-green-500",
    href: "/insurance/business",
  },
  {
    icon: Users,
    title: "Life Insurance",
    description:
      "Secure your family's future with our life insurance plans. Provide financial protection for your loved ones and ensure their well-being even in your absence.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    href: "/insurance/health/life",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description:
      "Explore the world with confidence. Our travel insurance covers trip cancellations, medical emergencies abroad, lost luggage, and more for worry-free adventures.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    href: "/insurance/travel",
  },
]

export function InsuranceCards() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Insurance Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            iNSURA has got your back with the best coverage at competitive rates. Say goodbye to complex jargon and
            paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((insurance) => (
            <div
              key={insurance.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border"
            >
              <div className={`w-14 h-14 ${insurance.color} rounded-xl flex items-center justify-center mb-4`}>
                <insurance.icon className={`w-7 h-7 ${insurance.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{insurance.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{insurance.description}</p>
              <Link
                href={insurance.href}
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
  )
}
