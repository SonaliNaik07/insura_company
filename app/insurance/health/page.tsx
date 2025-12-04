"use client"

import { Sidebar } from "@/components/content/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { CheckCircle2, LifeBuoy, Hourglass } from "lucide-react"

const plans = [
  {
    title: "Term Life Insurance",
    icon: CheckCircle2,
    description:
      "Affordable Coverage provides financial protection for a specified term at a lower cost. Flexible Terms to choose coverage durations that suit your needs, from 10 to 30 years. Peace of Mind to insure your loved ones are financially secure even in your absence.",
  },
  {
    title: "Whole Life Insurance",
    icon: LifeBuoy,
    description:
      "Lifetime Protection coverage that lasts a lifetime, providing enduring peace of mind. Build cash value over time, which you can borrow against if needed. Stable Premiums to enjoy fixed premiums that won't increase as you age.",
  },
  {
    title: "Universal Life Insurance",
    icon: Hourglass,
    description:
      "Flexible Coverage to adjust your premiums and coverage amounts to fit your changing needs. Savings Component to accumulate savings with potential for growth, giving you more financial flexibility. Take advantage of tax-deferred growth on the cash value component.",
  },
]


const faqs = [
  {
    question: "What is covered under individual medical insurance?",
    answer:
      "Individual medical insurance covers hospitalization, outpatient care, maternity (optional), dental, vision, and emergency treatments depending on your plan.",
  },
  {
    question: "Is there a waiting period for pre-existing conditions?",
    answer:
      "Yes, most plans have a waiting period of 6-24 months for pre-existing conditions. The exact period depends on the insurer and plan.",
  },
  {
    question: "Can I add family members to my plan?",
    answer:
      "Individual plans cover only the policyholder. For family coverage, consider our Family Health Insurance plans.",
  },
  {
    question: "How do I make a claim?",
    answer:
      "For network hospitals, simply show your insurance card for cashless treatment. For reimbursement claims, submit your bills and medical reports through our online portal.",
  },
]

function InsuranceFlipCards() {
                return (
                  <section className="py-14">
                    <h2 className="text-4xl font-bold text-primary mb-12">
                      Choose Best Insurance for You
                    </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan, index) => {
          const Icon = plan.icon

          return (
            <div key={index} className="group [perspective:1200px]">
              <div
                className="
                  relative h-[420px] w-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >
                {/* FRONT */}
                <div
                  className="
                    absolute inset-0
                    bg-primary
                    flex flex-col
                    items-center justify-center
                    text-white
                    [backface-visibility:hidden]
                  "
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 mb-8">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-center leading-snug px-6">
                    {plan.title}
                  </h3>
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0
                    bg-white
                    p-8
                    text-center
                    shadow-lg
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                    flex flex-col
                  "
                >
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <button className="mt-auto text-primary font-semibold flex items-center justify-center gap-2">
                    Buy Now <span>🔖</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function IndividualMedicalPage() {
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
              <span>Life Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Life Insurance
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">
              Secure Your Future with the Best Life Insurance in the UAE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Mobile Number */}
                  {/* Name */}
                  <div>
                    <Label className="font-medium">Concern Person name</Label>
                    <Input
                      placeholder="Enter concern name"
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* 🔹 Flip cards section */}
    <InsuranceFlipCards />

    <div>
      <h2 className="text-3xl font-bold text-foreground mb-4">Life Insurance with iNSURA.ae Powered by PIONEER</h2>
      <p className="text-muted-foreground mb-6">
        At iNSURA Powered by PIONEER, we understand that life is unpredictable. That’s why we offer comprehensive life insurance solutions designed to provide you with peace of mind and financial security. With our hassle-free approach, expert guidance, and round-the-clock support, you can trust us to be there when it matters most.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-foreground mb-4">Why You Need Life Insurance in UAE?</h2>
      <p className="text-muted-foreground mb-6">Life insurance is a crucial financial safety net for you and your loved ones. Here’s why you should consider it:</p>
      <ul className="space-y-1 pl-5 list-disc ml-6 mb-10">
        <li className="mb-2 text-gray-500">
          <span className="font-bold">Financial Security:- </span>Ensure your family can maintain their standard of living and cover essential expenses in your absence.
        </li>
        <li className="mb-2 text-gray-500">
          <span className="font-bold">Debt Protection: </span>Prevent your loved ones from being burdened by outstanding debts, such as mortgages or loans.
        </li>
        <li className="mb-2 text-gray-500">
          <span className="font-bold">Education Fund: </span>Secure your children’s future by providing funds for their education. 
          <p>Peace of Mind: Know that your family is protected against financial hardships, giving you peace of mind.</p>
        </li>
      </ul>
    </div>

    <div>
            <WhyChooseInsura />
            </div>

            {/* IMAGE DIVIDER SECTION */}
              <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-0">
                  <div className="overflow-hidden">
                    <img
                      src="/life1.webp"   // ✅ replace with your image path
                      alt="Family Health Insurance Coverage"
                      className="w-full h-[670px] md:h-[350px] w-[2500px]"
                    />
                  </div>
                </div>
              </section>


              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How life insurance plays crucial role in Everyone's life</h2>
                <p className="text-muted-foreground mb-6">
                  Life insurance plays a crucial role in the lives of individuals in the UAE, offering essential financial protection, peace of mind, and support for various life goals. It provides a financial cushion to families in the event of the policyholder’s death, helping them maintain their standard of living and cover daily expenses.                
                </p>
                <p className="text-muted-foreground mb-6">
                  Additionally, life insurance ensures that outstanding debts such as mortgages, car loans, and personal loans are paid off, preventing the family from being burdened with financial liabilities.                
                </p>
                <p className="text-muted-foreground mb-6">
                  It also plays a significant role in future planning by ensuring funds are available for children’s education and other financial goals like purchasing a home, starting a business, or retirement.                
                </p>
                <p className="text-muted-foreground mb-6">
                  The peace of mind that comes from knowing loved ones will be taken care of financially cannot be overstated. Life insurance offers long-term financial security, which is particularly important in uncertain times. Policies often come with tax benefits, reducing the overall tax liability for policyholders.                
                </p>
                <p className="text-muted-foreground mb-6">
                  For businesses, life insurance is crucial for continuity, providing key person insurance and funding buy-sell agreements to ensure smooth operations in the event of an unexpected death of key employees or partners. Moreover, some life insurance policies in the UAE offer investment opportunities, allowing policyholders to grow their wealth while providing life cover, thus serving as a part of a diversified investment portfolio.                
                </p>
                <p className="text-muted-foreground mb-6">
                  In a country with a significant expatriate population, life insurance offers essential support, ensuring expatriates’ families are financially protected even if they are living far from their home countries. 
                </p>
              </div>

              {/* VIDEO SECTION */}
              <section className=" relative z-20 isolate">
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
                <FAQ items={faqs} />
              </div>

            <div>
              </div>
              </div>
              <Sidebar />
            
          
        </div>
        </div>
      </section>

    </main>
  )
}