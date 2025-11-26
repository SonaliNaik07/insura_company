import { PageHero } from "@/components/ui/page-hero"
import { Plane, Globe, PlaneLanding, Users, Calendar, Users2, ExternalLink } from "lucide-react"
import Link from "next/link"

const travelProducts = [
  {
    icon: Plane,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage for all your travel needs including medical emergencies and trip cancellation.",
    href: "/insurance/travel/travel",
  },
  {
    icon: PlaneLanding,
    title: "Inbound Travel Insurance",
    description: "Coverage for visitors coming to the UAE with medical and emergency assistance.",
    href: "/insurance/travel/inbound",
  },
  {
    icon: Globe,
    title: "Outbound Travel Insurance",
    description: "Protect yourself when traveling abroad with international coverage.",
    href: "/insurance/travel/outbound",
  },
  {
    icon: Users,
    title: "Senior Citizen Insurance",
    description: "Specialized travel coverage designed for senior travelers with enhanced benefits.",
    href: "/insurance/travel/senior",
  },
  {
    icon: Calendar,
    title: "Annual Multi Trip",
    description: "Cost-effective coverage for frequent travelers with year-round protection.",
    href: "/insurance/travel/annual",
  },
  {
    icon: Users2,
    title: "Family Travel Insurance",
    description: "Comprehensive coverage for the whole family at affordable rates.",
    href: "/insurance/travel/family",
  },
]

export default function TravelInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Travel Insurance"
        title="Travel Insurance"
        description="Explore the world with confidence. Our travel insurance covers everything from trip cancellations to medical emergencies abroad."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelProducts.map((product) => (
              <div
                key={product.title}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="w-7 h-7 text-orange-500" />
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
