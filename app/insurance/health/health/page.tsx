"use client"

import { Sidebar } from "@/components/content/sidebar"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  LayoutGrid,
  User,
  Tag,
} from "lucide-react"


const coverageTypes = [
  {
    title: "Tailored of the UAE",
    description: "Our group medical insurance plans are specifically crafted to align with the UAE's unique healthcare landscape. From Dubai to Abu Dhabi, ensure your team has access to top-tier medical facilities and services.",
    icon: LayoutGrid,
  },
  {
    title: "Enhanced Employee Well-being",
    description: "Investing in the health of your employees is an investment in the success of your business. Group medical insurance fosters a sense of security, boosting morale and overall job satisfaction.",
    icon: User,
  },
  {
    title: "Cost-Effective Solutions:",
    description: "Navigate the complex world of healthcare expenses with ease. Group medical insurance packages offer cost-effective solutions, ensuring your budget remains intact while providing quality healthcare for your team.",
    icon: Tag,
  },
  {
    title: "Group Health Insurance",
    description: "Covers employees within a company, offering standard features with some customization options.",
    icon: User,
  },
]

const faqs = [
  {
    question: "Is group medical insurance mandatory in UAE?",
    answer: "Yes, employers in Dubai and Abu Dhabi are required by law to provide health insurance to their employees.",
  },
  {
    question: "What's the minimum group size?",
    answer: "Group medical insurance is typically available for companies with 2 or more employees.",
  },
  {
    question: "Can employees add dependents?",
    answer:
      "Yes, employees can add family members including spouse and children to the group plan, usually at an additional premium.",
  },
]

export default function GroupMedicalPage() {
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
              <span>Health Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Health Insurance
            </h1>

            <p className="text-lg text-white/90">
              Health Insurance in UAE to save your medical expenses in. We are providing quotes from top insurance companies. Avail the offers & benefits of our health insurance services. Get your peace of mind now.            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">Health Insurance in UAE: Your Medical Expense Savior!</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
                  <div>
                    <Label className="font-medium">Who would you like to insure? *</Label>
                    <Input
                      placeholder="enter person name"
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

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

                  {/* Company Name */}
                  <div>
                    <Label className="font-medium">Company Name</Label>
                    <Input
                      placeholder="Enter company name"
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>

              {/* Upload Attachment */}
              <div>
                <Label className="font-medium mb-2">Upload Passport Copy</Label>
                  <input
                    type="file"
                    className="
                      text-xs
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
                <Label className="font-medium mb-2">Upload Visa Copy</Label>
                  <input
                    type="file"
                    className="
                      text-xs
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
                    className="bg-primary hover:bg-primary/90 px-2 py-4 text-sm"
                  >
                    Send Application
                  </Button>
                </div>

              </form>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Health Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Health insurance in the UAE is a financial product that helps cover the costs of medical care. It protects you from unexpected expenses related to hospital visits, surgeries, doctor consultations, and other healthcare services. With the right health insurance in the UAE, you no longer have to worry about paying out-of-pocket for expensive treatments.
                </p>
              </div>

               <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Types of Health Insurance in the UAE</h2>
                <p className="text-muted-foreground mb-4">
                  There are several types of health insurance available in the UAE, which are customised according to your requirements and necessity.   
                </p>
                <p className="text-muted-foreground mb-4">
                  Our commitment to excellence is evident in our prompt and efficient claim processing, ensuring minimal disruption to your operations. iNSURA.ae Powered by PIONEER extensive network of hospitals and clinics guarantees that your employees receive the best possible care without unnecessary delays. Whether it’s routine check-ups, specialist consultations, or emergency treatments, our policy covers it all, offering peace of mind to both employers and employees.
                </p>
                <p className="mb-6 font-bold">
                  Types are as follow:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mx-6">
                  <li>Critical Illness Health Insurance</li>
                  <li>Senior Citizen Health Insurance</li>
                  <li>
                    Individual Health Insurance
                  </li>
                  <li>
                    Family Health Insurance
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Critical Illness Health Insurance</h2>
                <p className="text-muted-foreground mb-4">
                  Critical illness insurance provides essential financial protection when life takes an unexpected turn. Designed to cover serious health conditions such as cancer, heart attacks, or strokes, it offers a safety net during challenging times. With this coverage, you can focus on recovery instead of worrying about mounting medical expenses. In the UAE, critical illness coverage is typically includes within comprehensive health insurance plans, ensuring access to the care you need without financial stress. It’s about securing peace of mind for you and your loved ones, making sure that unexpected health challenges don’t disrupt your future plans or stability.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">Senior Citizen Health Insurance</h2>
                <p className="text-muted-foreground mb-4">
                  Senior citizen health insurance plans provide crucial coverage for your parents or loved ones during medical emergencies. These policies offer benefits like cashless hospitalization, covering everything from doctor consultations and ICU charges to operation theatre costs and even dental care. They also extend coverage for diagnostic tests and ambulance services. What makes these plans indispensable is the financial security they provide, ensuring you don’t have to worry about out-of-pocket expenses during critical moments.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">Individual Health Insurance</h2>
                <p className="text-muted-foreground mb-4">
                  Individual health insurance plans are tailored to offer financial support during medical emergencies, ensuring you have coverage when it matters most. Available for anyone aged 18 and above, this plan is offer by top health insurance providers across the UAE. They typically cover expenses such as hospitalization, medical treatments, and other significant healthcare costs. What makes these plans even more appealing is their flexibility—they can often customized to suit your unique needs and budget, giving you peace of mind and the assurance of quality healthcare when needed.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">Family Health Insurance</h2>
                <p className="text-muted-foreground mb-4">
                  A family health insurance plan provides comprehensive coverage for your family members during medical emergencies. These plans come with valuable benefits, including cashless hospitalization for procedures like doctor consultations, ICU stays, and surgery costs. It also cover maternity care, dental treatments, diagnostic tests, and ambulance charges.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Why You Should Buy Health Insurance?</h2>
                <ul className="space-y-1 pl-5 list-disc ml-6 mb-10">
                  <li className="mb-8">
                    <span className="font-bold text-black">Financial Protection: </span>With the right health insurance in the UAE, you don’t have to worry about the rising costs of medical treatments. It provides you with financial protection from unexpected medical bills, ensuring you don’t face a financial crisis when you need medical care.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Comprehensive Coverage: </span>Health insurance covers a wide range of medical services, from doctor visits to surgeries and even emergency care. You get the care you need without the added stress of figuring out how to pay for it.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Emergency Medical Assistance: </span>Accidents and emergencies can happen at any time. Health insurance ensures that you receive immediate medical attention when needed, even in critical situations.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Quality Health Care: </span>With health insurance, you have access to the best healthcare providers in the UAE. You can get high-quality medical treatment without having to worry about the costs.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Preventive Care: </span>Health insurance in the UAE often includes coverage for routine check-ups and preventive care, helping you avoid serious health conditions before they become costly.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Specialist Consultation: </span>Need to see a specialist? Health insurance helps cover specialist consultations, ensuring you receive expert care when required.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Maternity Benefits: </span>Planning to start a family? Our health insurance plans include maternity benefits, covering prenatal, delivery, and postnatal care.
                  </li>
                  <li className="mb-8">
                    <span className="font-semibold">Mental Health Support: </span>Health insurance also provides coverage for mental health services, including therapy and counselling, so you can take care of your mental well-being
                  </li>
                </ul>


                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Health Insurance with Insura.ae?</h2>
                  <ol className="list-decimal space-y-1 pl-5 ml-6 mb-10">
                    <li className="mb-8">
                      <span className="font-bold text-black">Wide Choice: </span>We offer a range of health insurance in the UAE options tailored to fit your lifestyle, needs, and budget. We have you covered whether you’re seeking family or individual coverage.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Expert Advice: </span>Our team of insurance experts will help guide you through the process, ensuring you choose the best plan for your health and financial situation.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">No-Claim Bonus: </span>By maintaining a healthy lifestyle and not filing a claim, you can benefit from our no-claim bonus, giving you additional savings on your premiums.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Fast Claim Settlement: </span>We ensure that your claims are processed quickly and efficiently, so you can focus on getting the care you need, not dealing with paperwork.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Cashless Hospitalization: </span>Our network of hospitals and clinics allows you to receive treatment without paying upfront. With cashless hospitalization, you can focus on your recovery instead of the financial burden.
                    </li>
                  </ol>
                </div>

                <section className="w-full py-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <h2 className="text-xl font-bold text-primary mb-8">
      Key Features of iNSURA's Powered by Pioneer Health Insurance:
    </h2>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-left">
        <thead>
          <tr className="bg-emerald-700 text-white">
            <th className="px-6 py-4 font-semibold border border-emerald-800">
              Key Features
            </th>
            <th className="px-6 py-4 font-semibold border border-emerald-800">
              Insurance Benefits
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          <tr>
            <td className="px-6 py-4 border">Health Insurance Price</td>
            <td className="px-6 py-4 border">Starting at Just @ 4 AED / Per Day</td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Coverage Amount</td>
            <td className="px-6 py-4 border">1 Million AED</td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Minimum Health Insurance Entry Age</td>
            <td className="px-6 py-4 border">0 Yrs</td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Maximum Health Insurance Entry Age</td>
            <td className="px-6 py-4 border">99 Yrs</td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Process to Apply</td>
            <td className="px-6 py-4 border">
              Visit Insura.ae fill the form then our Health Insurance Manager directly
              contact you.
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Health Insurance Claim Procedure</td>
            <td className="px-6 py-4 border">Cashless / Reimbursement</td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Health Insurance is important for</td>
            <td className="px-6 py-4 border">
              Self, Family, Worker or Domestic Worker, Investor
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Health Insurance Covered</td>
            <td className="px-6 py-4 border">
              In-Patient Service, Out-Patient Service, Maternity Coverage, Dental Cover
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 border">Purchase / Renew Process</td>
            <td className="px-6 py-4 border">Online</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">When to Buy Health Insurance?</h2>
                  <p className="text-muted-foreground mb-4">
                    It’s recommended to get a trusted health insurance in the UAE as soon as you move to the UAE, as pre-existing conditions may not be covered for 30 to 90 days. Early coverage ensures you’re protected after this waiting period. If you plan to start a family, look for insurance that includes maternity and childcare coverage to be better prepared for health needs.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">Things to Know Before Buying Health Insurance in the UAE</h2>
                  <ul className="space-y-1 pl-5 list-disc ml-6 mb-10">
                    <li className="mb-8">
                      <span className="font-bold text-black">Types of Health Insurance: </span>Understand the different types of plans available, from individual to family or group coverage.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Policy Coverage: </span>Check what’s included in your health insurance policy. Are hospital visits, surgeries, and specialist consultations covered?
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Eligibility Criteria: </span>Ensure that you meet the eligibility requirements for the policy you’re interested in.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Budget: </span>Set a budget for your health insurance premiums. We offer flexible plans to suit every financial situation.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Customer Feedback: </span>Read customer reviews to see how our services have helped others. Our satisfied customers can attest to the quality of our plans.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">No-Claim Bonus: </span>Ask about our no-claim bonus and how it can reduce your premiums.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Claim Process: </span>Understand the process for making claims, ensuring you know exactly what steps to take when you need medical assistance.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">What is Covered Under Health Insurance</h2>
                  <ul className="space-y-1 pl-5 list-disc ml-6 mb-10">
                    <li className="mb-8">
                      <span className="font-bold text-black">In-Patient Service:-</span>Covers hospital stays, surgeries, and other inpatient treatments.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Out-Patient Service:- </span>Covers consultations with doctors and treatments that don’t require hospitalization.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Maternity Coverage:- </span>Covers prenatal, delivery, and postnatal care.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Pre-existing and Chronic Conditions:- </span>Depending on the plan, pre-existing conditions and chronic illnesses may be covered after a waiting period.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Emergency Cases:- </span>Emergency medical situations, such as accidents or sudden illnesses, are fully covered.
                    </li>
                  </ul>
                </div>

                {/* IMAGE DIVIDER SECTION */}
              <section className="mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-0">
                  <div className="overflow-hidden">
                    <img
                      src="/family3.jpg"   // ✅ replace with your image path
                      alt="Family Health Insurance Coverage"
                      className="w-full h-[670px] md:h-[350px] w-[2500px]"
                    />
                  </div>
                </div>
              </section>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Not Covered Under Health Insurance?</h2>
                <ul className="space-y-1 pl-5 list-disc ml-6 mb-10">
                    <li className="mb-8">
                      <span className="font-bold text-black">Surgical and Non-Surgical Treatment for Obesity: </span>Weight loss treatments are not typically covered.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Cosmetic Surgeries: </span>Elective cosmetic surgeries are excluded from coverage.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Growth Hormone Therapy Unless Medically Suggested: </span>Non-medical use of growth hormone therapy is not covered.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Services and Treatment for Contraception, Sex Transformation, or Sterilization. </span>Health insurance does not cover these therapies.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">External Prosthetic Devices and Medical Treatment: </span>These devices and related treatments are usually not covered.
                    </li>
                    <li className="mb-8">
                      <span className="font-bold text-black">Treatment Required Due to Injuries Caused by Professional Sports Activities: </span>Injuries sustained during professional sports are excluded from coverage.
                    </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility Criteria</h2>
                <ul>
                  <li className="mb-8">
                    <span className="font-bold text-black">For Adults – </span>18 to 99 years.
                  </li>
                  <li className="mb-8">
                    <span className="font-bold text-black">For Dependent Children – </span>From birth to 17 years.
                  </li>
                  <li>
                    <span className="font-bold text-black">Pre-Existing Health Condition Waiting Period –</span>6 months.
                  </li>
                </ul>
              </div>

              {/* ESSENTIAL DOCUMENTS SCROLLING SECTION */}
<section className="py-10 overflow-hidden bg-background">
  <div className="max-w-7xl mx-auto px-0">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
      3 Essential Documents Required for Health Insurance in UAE
    </h2>

    <div className="relative overflow-hidden">
      <div className="flex gap-6 w-max animate-scroll-right">
        
        {/* Original images */}
        <img
          src="/health1.webp"
          alt="Emirates ID"
          className="h-64 w-auto shadow-md"
        />
        <img
          src="/health2.webp"
          alt="Passport Copy"
          className="h-64 w-auto shadow-md"
        />
        <img
          src="/health3.webp"
          alt="UAE Visa"
          className="h-64 w-auto shadow-md"
        />

        {/* Duplicated images (IMPORTANT) */}
        <img
          src="/health1.webp"
          alt="Emirates ID"
          className="h-64 w-auto rounded-xl shadow-md"
        />
        <img
          src="/health2.webp"
          alt="Passport Copy"
          className="h-64 w-auto rounded-xl shadow-md"
        />
        <img
          src="/health3.webp"
          alt="UAE Visa"
          className="h-64 w-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll-right {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    /* 🚀 Faster animation */
    .animate-scroll-right {
      animation: scroll-right 12s linear infinite;
    }
  `}</style>

<ul>
  <li className="mb-6">
    <span className="font-bold text-black">Original Emirates ID: </span>Ensure your Emirates ID is up to date for verification.
  </li>
  <li className="mb-6">
    <span className="font-bold text-black">Original Passport: </span>Your passport is required for identification purposes.
  </li>
  <li>
    <span className="font-bold text-black">Original Residency Visa: </span>Applicable to expatriates for residency verification.
  </li>
</ul>
</section>

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