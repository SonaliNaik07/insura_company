import { PageHero } from "@/components/ui/page-hero"
import { Sidebar } from "@/components/content/sidebar"
import { FAQ } from "@/components/content/faq"
import { Phone, Car, Wrench, Battery, Key, Fuel } from "lucide-react"

const services = [
  { icon: Wrench, title: "Towing Service", description: "24/7 towing to nearest garage or location of choice" },
  { icon: Battery, title: "Battery Jump Start", description: "Quick battery boost to get you moving" },
  { icon: Car, title: "Flat Tyre Change", description: "Roadside tyre replacement service" },
  { icon: Fuel, title: "Fuel Delivery", description: "Emergency fuel delivery when you run out" },
  { icon: Key, title: "Lockout Service", description: "Help when you're locked out of your vehicle" },
  { icon: Phone, title: "24/7 Helpline", description: "Round-the-clock assistance hotline" },
]

const steps = [
  "Call our 24/7 roadside assistance hotline",
  "Provide your policy number and location",
  "Describe the issue you're experiencing",
  "Stay safe and wait for our team to arrive",
]

const faqs = [
  {
    question: "How do I request roadside assistance?",
    answer:
      "Call our 24/7 hotline, provide your policy number and location, and describe the issue. Our team will dispatch help immediately.",
  },
  {
    question: "Is roadside assistance included in my policy?",
    answer:
      "Roadside assistance is included in comprehensive motor insurance plans or can be added as an optional benefit to other plans.",
  },
  {
    question: "How long does it take for help to arrive?",
    answer: "Response times vary by location, but we aim to reach you within 30-60 minutes in urban areas.",
  },
  {
    question: "What areas are covered?",
    answer: "Our roadside assistance covers all UAE Emirates with a network of service providers across the country.",
  },
]

export default function RoadsideAssistancePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Claims"
        title="Roadside Assistance"
        description="24/7 support for breakdowns, towing, and emergencies wherever you are in the UAE."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Emergency Contact */}
              <div className="bg-primary text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Need Assistance Now?</h2>
                    <p className="text-white/80">Call our 24/7 emergency hotline</p>
                  </div>
                </div>
                <a href="tel:+97143574547" className="text-3xl font-bold text-accent hover:underline">
                  +971 4 357 4547
                </a>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Roadside Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Request */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">How to Request Assistance</h2>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
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

      <FAQ items={faqs} />
    </main>
  )
}
