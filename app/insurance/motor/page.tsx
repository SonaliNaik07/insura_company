import { PageHero } from "@/components/ui/page-hero"
import { Car, Bike, Truck, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

const motorProducts = [
  {
    icon: Car,
    title: "Car Insurance",
    description: "Comprehensive coverage for your car against accidents, theft, and damage with fast claim processing.",
    href: "/insurance/motor/car",
  },
  {
    icon: Bike,
    title: "Bike Insurance",
    description: "Protect your motorcycle with coverage for accidents, theft, and third-party liability.",
    href: "/insurance/motor/bike",
  },
  {
    icon: Truck,
    title: "Fleet Insurance",
    description: "Manage your entire vehicle fleet under one comprehensive insurance policy.",
    href: "/insurance/motor/fleet",
  },
  {
    icon: Shield,
    title: "Third Party Liability Insurance",
    description: "Meet legal requirements with coverage for damage caused to third parties.",
    href: "/insurance/motor/third-party",
  },
  {
    icon: Car,
    title: "New Vehicle Insurance",
    description: "Special coverage designed for brand new vehicles with enhanced protection.",
    href: "/insurance/motor/new-vehicle",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Insurance",
    description: "Protect your business vehicles including trucks, vans, and commercial fleets.",
    href: "/insurance/motor/commercial",
  },
]

export default function MotorInsurancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Motor Insurance"
        title="Motor Insurance"
        description="Drive with confidence knowing iNSURA has you covered. Our comprehensive motor insurance policies protect your vehicles."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorProducts.map((product) => (
              <div
                key={product.title}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="w-7 h-7 text-primary" />
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
