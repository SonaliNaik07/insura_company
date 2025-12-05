"use client"

import { Sidebar } from "@/components/content/sidebar"
import { FAQ } from "@/components/content/faq"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"


const faqs = [
  {
    question: "What types of health insurance plans does iNSURA.ae powered by PIONEER offer?",
    answer:
      "iNSURA.ae powered by PIONEER provides a range of health insurance plans, including individual coverage, family plans, and specialized plans to meet diverse healthcare needs. Our plans are designed to offer comprehensive protection and flexibility.",
  },
  {
    question: "How can I get a quote for health insurance from iNSURA.ae powered by PIONEER?",
    answer:
      "Obtaining a health insurance quote is easy. Simply visit our website and fill out the online quote form. Provide relevant information about your health needs, and we’ll generate a personalized quote tailored to your requirements.",
  },
  {
    question: "How do I file a claim for health insurance with iNSURA.ae powered by PIONEER?",
    answer:
      "In the event of a medical expense, you can easily file a claim through our online portal or by contacting our dedicated claims team. We aim to process claims efficiently, ensuring you receive timely assistance.",
  },
  {
    question: "How do I renew my health insurance policy with iNSURA.ae powered by PIONEER?",
    answer:"Policy renewal is made easy with iNSURA.ae powered by PIONEER. You can renew your health insurance online through our user-friendly platform. We’ll also send you timely reminders to ensure continuous coverage.",
  },
  {
    question: "What if I have more questions or need assistance?",
    answer: "If you have additional questions or need assistance, our customer service team is here to help. Contact us through our website, via email, or by phone. Visit our “Contact Us” page for detailed information on how to reach us.",
  }
]

export default function ThirdPartyInsurancePage() {

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
            src="/motor-hero.jpg"
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
              <span>Third Party Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
             Third Party Liability Insurance
            </h1>

            <p className="text-lg text-white/90">
              Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team with help you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-snug">
              Third Party Liability Insurance:
            </h2>
            <h2 className="text-2xl md:text-3xl text-gray-500 leading-snug">
              Safety Beyond Self, <span className="font-bold text-gray-500">Third-Party Liability Insurance</span> for a Responsible Drive​!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
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
                    className="bg-secondary hover:bg-secondary/90 px-2 py-4 text-sm"
                  >
                    Send Application
                  </Button>
                </div>

              </form>

              <div>
                <h2 className="text-3xl font-bold text-primary text-foreground mb-4">Essential Third-Party Liability Insurance with iNSURA powered by PIONEER</h2>
                <p className="text-muted-foreground mb-4">
                  In today’s uncertain world, protecting yourself from unexpected legal and financial risks is paramount. <span className="font-bold text-gray-500">iNSURA.ae powered by PIONEER</span> offers robust third-party liability insurance plans designed to safeguard individuals from potential expenses arising from accidents involving others. Whether you’re a freelancer, consultant, or managing personal responsibilities, our insurance solutions provide comprehensive coverage and peace of mind.
                </p>
              </div>

              <section className="py-12">
                <h2 className="text-3xl font-bold text-primary text-foreground mb-4">Why You Need Third-Party Liability Insurance</h2>
                <ul className="space-y-4 list-disc pl-6 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground ">Financial Protection: </span>Cover legal expenses, settlements, and compensation if you’re held responsible for injuring someone or damaging their property.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Legal Compliance: </span>Many sectors require this insurance to operate legally, showing you’re prepared for unexpected situations.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Risk Management: </span>Protects your savings and assets from unexpected claims that could impact your financial stability.
                  </li>
                </ul>
              </section>

              <section className="py-12">
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Benefits of Third-Party Liability
                </h2>

                {/* Benefit 1 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground text-primary mb-4">
                    1. Financial Safety Net for Others:
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold text-muted-foreground">
                      Bodily Injury Coverage:
                    </span>{" "}
                    If an accident harms someone, this insurance covers their medical
                    expenses and compensates for their suffering.
                  </p>

                  <p className="text-muted-foreground">
                    <span className="font-semibold text-muted-foreground">
                      Property Damage Coverage:
                    </span>{" "}
                    If another person’s property is damaged, the insurance takes care of the
                    repair or replacement costs.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground text-primary mb-4">
                    2. Meeting Legal Requirements:
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold text-muted-foreground">
                      Mandatory Coverage:
                    </span>{" "}
                    UAE drivers require this insurance for driving legally.
                  </p>

                  <p className="text-muted-foreground">
                    <span className="font-semibold text-muted-foreground">
                      No Penalties:
                    </span>{" "}
                    With insurance, you avoid penalties and legal troubles.
                  </p>
                </div>
              </section>

              {/* IMAGE DIVIDER SECTION */}
              <section className="mt-10">
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <img
                      src="/thirdparty1.webp"   // ✅ replace with your image path
                      alt="Car Insurance Coverage"
                      className="w-full h-[520px] md:h-[520px] w-[2500px]"
                    />
                  </div>
                </div>
              </section>

              {/* VIDEO SECTION */}
              <section className="mt-16 relative z-20 isolate">
                <div className="relative overflow-hidden aspect-video bg-black transform-gpu will-change-transform">
                  <video
                    className="w-full h-full object-contain"
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

                <div>
                                            <h2 className="text-4xl font-bold text-primary mb-2 mt-16 text-center">
                                              Third party Liability Insurance FAQ's
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