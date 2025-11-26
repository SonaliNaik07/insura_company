import { PageHero } from "@/components/ui/page-hero"
import { Car, Heart, Briefcase, Plane, ExternalLink } from "lucide-react"
import Link from "next/link"

const insuranceCategories = [
  {
    icon: Car,
    title: "Motor Insurance",
    description: "Comprehensive coverage for your vehicles including car, bike, fleet, and commercial vehicles.",
    href: "/insurance/motor",
    color: "bg-blue-50",
    iconColor: "text-primary",
    items: [
      "Car Insurance",
      "Bike Insurance",
      "Fleet Insurance",
      "Third Party Liability",
      "New Vehicle Insurance",
      "Commercial Vehicle Insurance",
    ],
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Protect your health and your family with our comprehensive medical insurance plans.",
    href: "/insurance/health",
    color: "bg-red-50",
    iconColor: "text-red-500",
    items: ["Individual Medical Insurance", "Group Medical Insurance", "Health Insurance", "Life Insurance"],
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Safeguard your business with our range of commercial insurance solutions.",
    href: "/insurance/business",
    color: "bg-green-50",
    iconColor: "text-green-500",
    items: [
      "Business Insurance",
      "Property All Risks",
      "Workmen Compensation",
      "Professional Indemnity",
      "Public Liability",
      "Marine Cargo",
    ],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Travel worry-free with coverage for trips, medical emergencies, and more.",
    href: "/insurance/travel",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    items: [
      "Travel Insurance",
      "Inbound Travel",
      "Outbound Travel",
      "Senior Citizen",
      "Annual Multi Trip",
      "Family Travel Insurance",
    ],
  },
]

export default function InsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Insurance"
        title="Our Insurance Products"
        description="Explore our comprehensive range of insurance solutions designed to protect what matters most to you."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insuranceCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <h2 className="text-2xl font-semibold text-card-foreground mb-3">{category.title}</h2>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Explore {category.title}
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
