import { Shield, Award, Clock, Users, Phone, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Expert Advice",
    description: "Our team of insurance experts provides personalized guidance to help you choose the right coverage.",
  },
  {
    icon: Award,
    title: "Top Insurance Companies",
    description: "We partner with the most reputable insurance providers in the UAE for quality coverage.",
  },
  {
    icon: Clock,
    title: "Instant Coverage",
    description: "Get your policy issued instantly with our streamlined digital process.",
  },
  {
    icon: Users,
    title: "Rewards Program",
    description: "Earn rewards and discounts on your premiums with our loyalty program.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support for claims and assistance.",
  },
  {
    icon: ThumbsUp,
    title: "Reliability",
    description: "Trusted by thousands of customers across the UAE since 1990.",
  },
]

export function WhyChooseInsura() {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Insura?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We make insurance simple, affordable, and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-white/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
