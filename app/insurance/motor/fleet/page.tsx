"use client"

import { Sidebar } from "@/components/content/sidebar"
import { FAQ } from "@/components/content/faq"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const faqs = [
  {
    question: "What is fleet insurance, and who needs it?",
    answer:
      "Fleet insurance is a type of commercial vehicle insurance that covers multiple vehicles under a single policy. It is ideal for businesses with two or more vehicles, such as delivery services, construction companies, and transport firms, ensuring all vehicles in the fleet are protected.",
  },
  {
    question: "What types of vehicles can be covered under a fleet insurance policy?",
    answer:
      "Fleet insurance in the UAE can cover a wide range of vehicles, including cars, trucks, vans, buses, and special-purpose vehicles like construction machinery. The policy can be tailored to meet the specific needs of the business.",
  },
  {
    question: "What factors affect the cost of fleet insurance in the UAE?",
    answer:
      "The cost of fleet insurance depends on several factors, including the number of vehicles in the fleet, the type of vehicles, the driving records of the drivers, the nature of the business, and the level of coverage chosen.",
  },
  {
    question: "Can fleet insurance cover both comprehensive and third-party liability?",
    answer: "Yes, fleet insurance policies in the UAE can offer both comprehensive and third-party liability coverage. Comprehensive coverage protects against damages to the insured vehicles as well as third-party liabilities, while third-party liability covers only damages caused to others.",
  },
  {
    question: "Can iNSURA's fleet insurance policy help reduce costs for my business?",
    answer: "Yes, iNSURA powered by Pioneer offers cost-saving options such as discounts for insuring multiple vehicles under one policy, implementing driver safety programs, and opting for a higher deductible. Our team works with you to find the most efficient and cost-effective solution for your fleet.",
  }
]

export default function FleetInsurancePage() {
  const [formData, setFormData] = useState({
      company: "",
      person: "",
      mobile: "",
      email: "",
    })
  
      const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
    }

  return (
    <main>
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-primary min-h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="/bike1.jpg"
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
              <span>Fleet Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
             Fleet Insurance
            </h1>

            <p className="text-lg text-white/90">
              Get Fleet Insurance in UAE at the best price. Visit iNSURA Powered by Pioneer to get the best vehicle fleet insurance rates online from reputable fleet insurance companies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">
              Securing Your Fleet with Fleet Insurance in the UAE
            </h2>
            <h2 className="text-3xl md:text-3xl text-gray-500 leading-snug mb-10 mt-5">
              Run your commercial vehicles tension free because now <span className="font-bold text-gray-500">iNSURA Powered by Pioneer</span> is here to Insure all your vehicles with most affordable <span className="font-bold text-gray-500">Fleet Insurance in UAE.</span>
            </h2>
          </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <h2 className="text-2xl font-bold text-primary text-foreground mb-4">Lets connect to discuss about the Fleet Insurance.</h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Company Name */}
                  <div>
                    <Label className="font-medium">Company name</Label>
                    <Input
                      placeholder="Enter company name..."
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <Label className="font-medium">Concern Person name</Label>
                    <Input
                      placeholder="Enter concern name..."
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

                  {/* Email */}
                <div>
                  <Label className="font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="enter email id..."
                    className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                  />
                </div>

                  {/* Mobile */}
                  <div>
                    <Label className="font-medium">
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="enter mobile number..."
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 px-2 py-4 text-sm"
                  >
                    Send Application
                  </Button>
                </div>

              </form>

              <p className="text-muted-foreground mb-4">
                  Fleet insurance is not just a coverage choice; it's a proactive step to ensure your entire vehicle fleet stays protected in the dynamic landscape of the UAE. At <span className="font-bold text-gray-500">iNSURA.ae powered by PIONEER</span>, we prioritize the safety and longevity of your fleet, offering comprehensive coverage tailored to your business needs.
              </p>

              {/* What is Fleet Insurance */}
              <div>
                <h2 className="text-2xl font-bold text-primary text-foreground mb-4">Comprehensive Fleet Insurance Solutions by iNSURA powered by PIONEER:</h2>
                <p className="text-muted-foreground mb-4">
                  Managing a fleet of vehicles is a significant responsibility, and protecting them is crucial to the success of your business. We offer comprehensive fleet insurance plans designed to safeguard your vehicles, drivers, and operations against unforeseen risks. Whether you operate a small fleet or manage a large fleet across multiple locations, our tailored insurance solutions provide peace of mind and ensure your business stays on the move.
                </p>
              </div>

              <section className="py-12">
                <h2 className="text-2xl font-bold text-primary text-foreground mb-4">Why Your Business Needs Fleet Insurance</h2>

                 <ul className="space-y-4 list-disc pl-6 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Protection Against Risks: </span>Cover for damages to fleet vehicles from accidents, theft, vandalism, fire, or natural disasters.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Third-Party Liability: </span> Financial protection against claims from third parties for bodily injury or property damage caused by your fleet.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Legal Compliance: </span> Many jurisdictions require businesses to have fleet insurance to operate legally on public roads.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Business Continuity: </span> Ensure minimal disruption to your operations by covering vehicle repairs and replacement costs promptly.
                  </li> 
                  </ul>
              </section>

              <section className="py-12">
                <h2 className="text-5xl font-semibold text-primary text-foreground mb-4">Why we stands out?</h2>

                 <ol className="space-y-4 list-disc pl-6 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Industry Expertise: </span>Specialized knowledge in fleet insurance to address the unique risks faced by businesses in various sectors.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Customer Support: </span>  Dedicated assistance available 24/7 for claims processing, policy inquiries, and emergency situations..
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Risk Management Solutions: </span> Proactive approach to minimizing risks and optimizing fleet performance through tailored insurance strategies.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Long-term Partnership: </span> Commitment to building lasting relationships with clients by providing reliable and responsive service.
                  </li> 
                  </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary text-foreground mb-6">Why choose insura.ae for fleet insurance</h2>
                <p className="text-muted-foreground mb-4">
                  We offer the best motor fleet insurance Dubai and UAE, with plans crafted to fit the unique requirements of your business. Experience tailored coverage and proactive risk management to keep your fleet rolling smoothly.
                </p>

                <a
  href="/insurance/motor/fleet"
  className="bg-[#003566] hover:bg-[#02182d] text-yellow-400 font-semibold text-sm px-2 py-2 transition-colors inline-block mb-4"
>
  Get a Quote
</a>



      {/* Closing paragraph */}
      <p className="text-muted-foreground leading-relaxed">
        Secure the future of your fleet with the right coverage. Get a quote today from iNSURA.ae powered by PIONEER – where protection meets proactive fleet management. Your fleet’s tomorrow deserves the assurance of today.
      </p>
              </section>
              
              {/* IMAGE DIVIDER SECTION */}
              <section className="mt-10">
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <img
                      src="/fleet1.webp"   // ✅ replace with your image path
                      alt="Car Insurance Coverage"
                      className="w-full h-[520px] md:h-[520px] w-[2500px]"
                    />
                  </div>
                </div>
              </section>

              <div>

              </div>
                <h2 className="text-4xl font-bold text-primary mb-2 mt-16 text-center">
                  Fleet Insurance FAQ's
                </h2>
                <FAQ items={faqs} />
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