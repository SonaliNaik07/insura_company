import { Award, Handshake, ThumbsUp } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Superior Service",
    description:
      "Experience excellence with our dedicated team of insurance professionals who are committed to providing personalized solutions.",
  },
  {
    icon: Handshake,
    title: "Reputable Partners",
    description:
      "We work with the most trusted insurance providers in the UAE to bring you reliable coverage and peace of mind.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction",
    description:
      "Your satisfaction is our priority. We go above and beyond to ensure you're completely happy with our services.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choosing iNSURA means choosing a partner dedicated to your peace of mind and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
