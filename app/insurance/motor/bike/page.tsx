"use client"

import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bike, Bookmark } from "lucide-react"
import { useState } from "react"


const coverageTypes = [
  { title: "Comprehensive Bike Insurance", description: "Coverage: Includes third-party liability, theft, fire, natural disasters, and accidental damage. Benefits: All-encompassing protection for your bike and peace of mind for you." },
  { title: "Third-Party Liability Insurance", description: "Coverage: Provides financial compensation for injuries, disability, or death resulting from a bike accident. Benefits: Ensures financial support for you and your family during difficult times." },
  { title: "Personal Accident Cover", description: "Coverage: Protects against damages to third-party property and injuries to third parties. Benefits: Essential for legal compliance and protection against legal liabilities." },
  { title: "24/7 Customer Support", description: "Dedicated support team available round-the-clock to assist you with any queries or claims." },
]

const addOns = ["Roadside Assistance", "Agency Repair", "Passenger Cover", "Helmet Cover", "Personal Belongings Cover"]

const faqs = [
  {
    question: "What types of health insurance plans does iNSURA.ae powered by PIONEER offer?",
    answer:
      "iNSURA.ae powered by PIONEER provides a range of health insurance plans, including individual coverage, family plans, and specialized plans to meet diverse healthcare needs. Our plans are designed to offer comprehensive protection and flexibility.",
  },
  {
    question: "How can I get a quote for health insurance from iNSURA.ae powered by PIONEER?",
    answer: "Obtaining a health insurance quote is easy. Simply visit our website and fill out the online quote form. Provide relevant information about your health needs, and we’ll generate a personalized quote tailored to your requirements.",
  },
  {
    question: "How do I file a claim for health insurance with iNSURA.ae powered by PIONEER?",
    answer:
      "In the event of a medical expense, you can easily file a claim through our online portal or by contacting our dedicated claims team. We aim to process claims efficiently, ensuring you receive timely assistance.",
  },
  {
    question: "How do I renew my health insurance policy with iNSURA.ae powered by PIONEER?",
    answer: "Policy renewal is made easy with iNSURA.ae powered by PIONEER. You can renew your health insurance online through our user-friendly platform. We’ll also send you timely reminders to ensure continuous coverage.",
  },
  {
    question: "What if I have more questions or need assistance?",
    answer: "If you have additional questions or need assistance, our customer service team is here to help. Contact us through our website, via email, or by phone. Visit our “Contact Us” page for detailed information on how to reach us.",
  }  
  ]

export default function BikeInsurancePage() {
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

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

const handleFlip = (index: number) => {
  setFlippedIndex(flippedIndex === index ? null : index)
}

  return (
    <main>
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-primary min-h-[50vh] md:min-h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="/bike1.jpg"
            alt="Bike Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 text-white/80 mb-4 text-sm">
              <span>insura.ae</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span>Bike Insurance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
             Bike Insurance
            </h1>

            <p className="text-base sm:text-lg text-white/90">
              Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team with help you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Bike Insurance in UAE
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-500 leading-snug">
              With <span className="font-bold text-gray-500">BIKE INSURANCE</span> you ride worry free in UAE!!!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Lead Form Section */}
              <h3 className="text-2xl font-bold text-primary mb-2">
                Fill the form to get information about Bike Insurance
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Give us a few details and we’ll offer the best quotation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Mobile Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <Label className="font-medium">Concern Person name</Label>
                    <Input
                      placeholder="Enter concern name"
className="mt-2 h-11 md:h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <Label className="font-medium">
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="enter mobile number..."
className="mt-2 h-11 md:h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label className="font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="enter email id..."
                    className="mt-2 h-11 md:h-14 rounded-xl bg-blue-50 border-none"
                  />
                </div>

              {/* Upload Attachment */}
              <div>
                <Label className="font-medium mb-2">Upload Attachment</Label>
                  <input
                    type="file"
                    className="
                      text-sm
                      cursor-pointer
                      file:mr-4
                      file:py-2
                      file:px-4
                      file:border-0
                      file:bg-gray-300
                      file:text-black
                      hover:file:bg-gray-400
                    "
                  />
              </div>



                {/* Upload Attachment */}
              <div>
                <Label className="font-medium mb-2">Upload Attachment</Label>
                  <input
                    type="file"
                    className="
                      text-sm
                      cursor-pointer
                      file:mr-4
                      file:py-2
                      file:px-4
                      file:border-0
                      file:bg-gray-300
                      file:text-black
                      hover:file:bg-gray-400
                    "
                  />
              </div>



                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="bg-secondary w-full sm:w-auto px-6 py-4 text-sm"
                  >
                    Send Application
                  </Button>
                </div>

              </form>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {coverageTypes.map((type, index) => (
                  <div key={index} className="perspective group cursor-pointer"   onClick={() => handleFlip(index)}>
                    <div
  className={`
    relative
    h-48 md:h-56
    w-full
    transition-transform
    duration-700
    transform-style-3d
    group-hover:rotate-y-180
    ${flippedIndex === index ? "rotate-y-180" : ""}
  `}
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
                        <Bike className="w-10 h-10 text-white-400 mb-4" />
                        <h3 className="text-lg font-semibold text-center px-4">
                          {type.title}
                        </h3>
                        <span className="mt-2 text-xs text-white/70 sm:hidden">
  Tap to see details
</span>

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
<p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {type.description}
              </p>

                        <a
  href="#"
  onClick={(e) => {
    e.preventDefault()
    window.location.href = window.location.pathname
  }}
  className="
    flex items-center justify-center gap-1
    text-primary font-semibold text-lg
    px-3 py-1 rounded-md
    transition-all duration-200
    hover:bg-primary hover:text-white
  "
>
  Buy Now
  <Bookmark className="w-4 h-4" />
</a>

                      </div>
                    </div>
                  </div>
                ))}
              </div>


              {/* Why Bike Insurance */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
Why is it mandatory to have Bike insurance in UAE?</h2>
                <p className="text-muted-foreground mb-4">
                  Bike Insurance in UAE is mandatory for motorcyclists in order to lawfully ride a motorcycle on public roads. It is the insurance shield for policyholder from financial obligation for any harm or damage they may do to other people or their property, is usually included in the coverage. In addition, certain insurance companies could provide other coverage choices like theft and collision protection.
                </p>
<p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  At iNSURA  Powered by Pioneer you can evaluate insurance policies offered by top companies in order to get the best coverage at a reasonable cost. It’s also necessary to keep in mind that different insurance providers may have varying standards for motorbike insurance, such as minimum engine size or bike age.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
Why Choose iNSURA.ae powered by PIONEER for Your Bike Insurance in the UAE?</h2>
<p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Comprehensive Coverage: </span>Protect your bike against a wide range of risks including accidents, theft, vandalism, natural disasters, and fire.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Personal Injury Coverage: </span>Financial compensation for injuries or death resulting from a bike accident.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Third-Party Liability: </span>Coverage for damages or injuries caused to third parties, ensuring you are protected against costly legal disputes.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Third-Party Liability: </span>Ensure you’re financially protected against claims from third parties for injury or property damage caused by your bike.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Customizable Policies: </span>Tailor your insurance policy to suit your specific needs and budget.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Affordable Premiums: </span>Competitive pricing to ensure you get the best value for your money.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">Easy Claims Process: </span>Hassle-free and quick claims process to get you back on the road as soon as possible.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <span className="font-bold text-gray-500">24/7 Customer Support: </span>Dedicated support team available round-the-clock to assist you with any queries or claims.
                  </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
Bike Insurance: A Total Peace of Mind!</h2>
<p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Riding a motorbike is a exciting experience, presenting freedom and comfort at the open roads of the UAE. However, it`s important to make sure which you guard your self and your motorcycle with the proper coverage insurance earlier than you hit the road. In this article, we will discover the fine details of motorbike coverage, additionally referred to as two-wheeler coverage, withinside the UAE.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Weather situations withinside the Emirates can get harsh which can motive giant harm to vehicles, consisting of two-wheelers. In the case of an insured vehicle, the coverage company is chargeable for deciding to buy the damages triggered because of the weather.
                </p>
              </div>

              {/* Why We Stands Out Section */}
              <section className="py-12">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why we stands out?
                </h2>

                <ul className="space-y-4 list-disc pl-6 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">
                      Customer-Centric Approach:
                    </span>{" "}
                    We prioritize understanding your riding needs and offer personalized
                    insurance solutions.
                  </li>

                  <li>
                    <span className="font-semibold text-foreground">
                      Transparent Policies:
                    </span>{" "}
                    Clear terms and conditions with no hidden surprises, ensuring you know
                    exactly what you’re covered for.
                  </li>

                  <li>
                    <span className="font-semibold text-foreground">
                      24/7 Support:
                    </span>{" "}
                    Access to our support team round-the-clock for assistance with queries,
                    claims, or emergencies.
                  </li>

                  <li>
                    <span className="font-semibold text-foreground">
                      Quick and Easy Claims:
                    </span>{" "}
                    Hassle-free claims process to get you back on the road as soon as possible.
                  </li>
                </ul>
              </section>


              {/* VIDEO SECTION */}
              <section className="mt-16 relative z-20 isolate">
                <div className="relative overflow-hidden aspect-video bg-black transform-gpu will-change-transform">
                  <video
                    className="w-full h-full object-cover md:object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/bikeframe.png"
                  >
                    <source src="/bike.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>

              <div className="mt-12 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  Bike Insurance FAQ's
                </h2>
                <FAQ items={faqs} />
              </div>
            </div>

            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseInsura />
    </main>
  )
}