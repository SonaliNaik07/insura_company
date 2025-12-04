import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { Button } from "@/components/ui/button"
import { FAQ } from "@/components/content/faq"
import { Check, Shield, Home, FileText, AlertTriangle } from "lucide-react"


const coverageTypes = [
  { title: "Third-Party Liability Insurance", description: "Mandatory coverage for damage to others" },
  { title: "Collision Insurance", description: "Protection against accident damages" },
  { title: "Comprehensive Coverage", description: "Full protection including theft and natural disasters" },
  { title: "Personal Injury Protection", description: "Medical expenses for driver and passengers" },
]

const addOns = [
  "Agency Repair (recommended for new vehicles)",
  "Zero Depreciation",
  "Roadside Assistance",
  "Passenger Cover",
  "Replacement Vehicle",
]

const faqs = [
  {
    question: "What is new vehicle insurance?",
    answer:
      "New vehicle insurance covers newly purchased cars against accidents, theft, natural disasters, and other damages.",
  },
  {
    question: "Is insurance mandatory for new vehicles in the UAE?",
    answer:
      "Yes, third-party liability insurance is legally required for all vehicles in the UAE.",
  },
  {
    question: "What types of coverage are available?",
    answer:
      "Coverage options include third-party liability, collision, comprehensive, and personal injury protection.",
  },
  {
    question: "Can I customize my car insurance policy?",
    answer:"Absolutely! iNSURA.ae powered by PIONEER understands that each driver has unique needs. We offer customizable policies, allowing you to add or remove coverage options to suit your requirements and budget.",
  },
  {
    question: "What should I do in case of an accident?",
    answer:"In the event of an accident, contact your insurance provider immediately and follow their instructions for filing a claim.",
  }
]

export default function NewVehicleInsurancePage() {
  return (
    <main>
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-primary min-h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="/car3.jpg"
            alt="Bike Insurance"
            className="w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 text-white/80 mb-4 text-sm">
              <span>insura.ae</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span>New Vehicle Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
             New Vehicle Insurance
            </h1>

            <p className="text-lg text-white/90">
              Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team with help you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           <div className="mb-15">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">Protect Your New Car with New Vehicle Insurance</h2>
            <h2 className="text-3xl md:text-3xl text-gray-500 leading-snug mt-2">
              Ensure your new vehicle is fully protected with our tailored New Vehicle Insurance plans designed to meet your needs and budget.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">Buy Insurance That Fits You....</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coverageTypes.map((type, index) => (
                  <div key={index} className="perspective group">
                    <div
                      className="
                        relative
                        h-56
                        w-full
                        transition-transform
                        duration-700
                        transform-style-3d
                        group-hover:rotate-y-180
                      "
                    >
                      {/* FRONT */}
                      <div
                        className="
                          absolute inset-0
                          bg-primary
                          flex flex-col
                          items-center
                          justify-center
                          text-white
                          backface-hidden
                        "
                      >
                        <Home className="w-10 h-10 text-white-400 mb-4" />
                        <h3 className="text-lg font-semibold text-center px-4">
                          {type.title}
                        </h3>
                      </div>

                      {/* BACK */}
                      <div
                        className="
                          absolute inset-0
                          bg-white
                          flex flex-col
                          items-center
                          justify-center
                          text-center
                          px-6
                          border
                          backface-hidden
                          rotate-y-180
                        "
                      >
                        <p className="text-muted-foreground mb-4">
                {type.description}
              </p>

                        <Button className="bg-primary px-6 py-2">
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Protect Your Vehicle with Comprehensive Coverage in UAE</h2>
                <p className="text-muted-foreground mb-4">
                  Purchasing a new vehicle is a significant investment, and ensuring it’s protected from unforeseen events is crucial. At <span className="font-bold text-gray-500">iNSURA.ae Powered by PIONEER</span>, we offer a range of insurance options tailored to meet the specific needs of new car owners in the UAE. Our goal is to provide peace of mind through comprehensive and reliable coverage.
                </p>
              </div>

              <div>
                <h2 className="text-5xl text-foreground mb-4">Why You Need New Vehicle Insurance in UAE</h2>
                  <p className="mb-1"><span className="font-bold text-gray-500">Legal Requirement:</span></p>
                  <p className="text-muted-foreground mb-4">In the UAE, third-party liability insurance is mandatory for all vehicle owners. It covers damages and injuries caused to other people and their property in an accident.</p>
                
                  <p className="mb-1"><span className="font-bold text-gray-500">Financial Protection:</span></p>
                  <p className="text-muted-foreground mb-4">Accidents can be costly. Collision and comprehensive insurance cover repair costs, theft, vandalism, and natural disasters, preventing significant out-of-pocket expenses.</p>

                  <p className="mb-1"><span className="font-bold text-gray-500">Personal Safety:</span></p>
                  <p className="text-muted-foreground mb-4">Personal Injury Protection (PIP) ensures medical expenses for you and your passengers are covered, providing essential support in the event of an accident.</p>

                  <p className="mb-1"><span className="font-bold text-gray-500">Peace of Mind:</span></p>
                  <p className="text-muted-foreground mb-4">Comprehensive coverage offers assurance that your new vehicle is protected against various risks, allowing you to drive with confidence.</p>
              </div>

              <div>
                      <WhyChooseInsura />
              </div>

              {/* IMAGE DIVIDER SECTION */}
              <section className="mt-10">
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <img
                      src="/car5.webp"   // ✅ replace with your image path
                      alt="Car Insurance Coverage"
                      className="w-full h-[320px] md:h-[320px] w-[2000px]"
                    />
                  </div>
                </div>
              </section>

              <div>
                <h2 className="text-5xl text-foreground mb-4">How New Vehicle Insurance Helps People in the UAE</h2>
                <p className="text-muted-foreground mb-4">
                  New vehicle insurance in the UAE is indispensable for ensuring legal, financial, and personal security. Legally, it ensures compliance with UAE laws, specifically third-party liability insurance, which is mandatory and helps avoid fines and legal complications. Financially, it provides significant relief by covering the costs of repairs and damages resulting from accidents, theft, vandalism, and natural disasters, thereby protecting car owners from substantial out-of-pocket expenses. This coverage is particularly crucial given the high repair costs associated with modern vehicles.
                </p>
                <p className="text-muted-foreground mb-4">
                  Moreover, new vehicle insurance includes Personal Injury Protection (PIP), which is vital for covering medical expenses for both the driver and passengers in the event of an accident. This aspect of the insurance ensures that medical bills do not become an additional burden during stressful times. Comprehensive coverage further extends this protection by offering peace of mind against a wide array of risks, from natural disasters to theft and vandalism, ensuring that car owners are protected from numerous unforeseen events.
                </p>
                <p className="text-muted-foreground mb-4">
                  In addition to these protections, many new vehicle insurance plans in the UAE come with 24/7 roadside assistance. This service is invaluable, providing immediate help in case of breakdowns, flat tires, or other roadside emergencies, thus ensuring safety and convenience. Having access to such assistance can be a significant relief, especially during long trips or in unfamiliar areas.
                </p>
                <p className="text-muted-foreground mb-4">
                  Overall, new vehicle insurance in the UAE offers a holistic safety net, encompassing legal compliance, financial protection, medical coverage, and practical roadside support. This comprehensive approach not only safeguards the vehicle but also enhances the overall driving experience, allowing car owners to navigate the roads with confidence and peace of mind. Whether dealing with everyday commutes or long journeys, new vehicle insurance is an essential aspect of responsible car ownership in the UAE.
                </p>
            </div>

              <div>
                                          <h2 className="text-4xl font-bold text-primary mb-2 mt-16 text-center">
                                            Frequently Asked Questions
                                          </h2>
                                          <FAQ items={faqs} />
                                        </div>
            </div>

            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}