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
  Bookmark
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
    question: "What is Group Health Insurance?",
    answer: "Group Health Insurance is a type of health coverage provided to a group of individuals, usually employees of a company, under a single policy. It offers comprehensive health benefits to all members of the group, providing coverage for medical expenses, treatments, and other health-related services.",
  },
  {
  question: "What does Group Health Insurance by Insura.ae cover?",
  answer: `
    iNSURA.ae Powered by PIONEER Group Health Insurance typically covers:

    <ul class="list-disc pl-6 space-y-2 mt-3">
      <li><strong>Inpatient Care:</strong> Hospitalization, surgeries, and treatments requiring an overnight stay.</li>
      <li><strong>Outpatient Care:</strong> Doctor visits, specialist consultations, diagnostic tests, and treatments not requiring hospitalization.</li>
      <li><strong>Emergency Services:</strong> Coverage for emergency medical treatment and ambulance services.</li>
      <li><strong>Prescription Medications:</strong> Costs for prescribed medications and drugs.</li>
      <li><strong>Maternity Benefits:</strong> Coverage for prenatal and postnatal care, childbirth, and related expenses.</li>
      <li><strong>Preventive Services:</strong> Screenings, vaccinations, and wellness check-ups.</li>
      <li><strong>Mental Health:</strong> Counseling and treatment for mental health conditions.</li>
      <li><strong>Pre-existing Conditions:</strong> Coverage for certain pre-existing conditions, subject to policy terms.</li>
    </ul>
  `,
},


  {
    question: "Does the Group Health Insurance policy cover international medical expenses?",
    answer:
      "Coverage for international medical expenses may vary depending on the policy. Some Group Health Insurance plans include international coverage for emergency medical treatment, while others may offer it as an optional add-on. Check with Insura.ae for details on international coverage options.",
  },
  {
    question: "Are dependents covered under the Group Health Insurance plan?",
    answer: "Coverage for dependents, such as spouses and children, is often included but may depend on the specific policy. Employers or organizations will provide information on dependent coverage options as part of the Group Health Insurance plan.",
  },
  {
    question: "What happens if an employee leaves the company?",
    answer: "When an employee leaves the company, their Group Health Insurance coverage typically ends. The specifics will be outlined in the policy terms. Employees may need to explore alternative health insurance options or discuss continuation coverage with Insura.ae if available.",
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
            src="/family2.jpg"
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
              <span>Group Medical Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Group Medical Insurance
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
              Group Medical Insurance in UAE
            </h2>
            <h2 className="text-3xl md:text-3xl text-gray-500 leading-snug mb-5 mt-5">
              Make Your Employees Happy with surprise of <span className="font-bold text-gray-500">Group Medical Insurance</span>, because Happy & Healthy Employee Creates, Healthy & Happy Work Place.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug">Buy Insurance That Fits You....</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Mobile Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <Label className="font-medium">Company Name</Label>
                    <Input
                      placeholder="Enter company name"
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>
                  {/* Name */}
                  <div>
                    <Label className="font-medium">Concern Person name</Label>
                    <Input
                      placeholder="concern person name"
                      className="mt-2 h-14 rounded-xl bg-blue-50 border-none"
                    />
                  </div>
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
                              <h2 className="text-2xl font-bold text-foreground mb-4">Why Individual Medical Insurance Matters in the UAE:</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {coverageTypes.map((type, index) => {
                                const Icon = type.icon
              
                                return (
                                  <div key={index} className="perspective group">
                                    <div
                                      className="
                                        relative h-56 w-full
                                        transition-transform duration-700
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
                                          items-center justify-center
                                          text-white
                                          backface-hidden
                                        "
                                      >
                                        <Icon className="w-10 h-10 text-yellow-400 mb-4" />
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
                                          items-center justify-center
                                          text-center px-6
                                          border
                                          backface-hidden
                                          rotate-y-180
                                        "
                                      >
                                        <p className="text-muted-foreground mb-4">
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
                                )
                              })}
                            </div>

               <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Buy Most Affordable Group Insurance Policy in UAE</h2>
                <p className="text-muted-foreground mb-4">
                  Choosing the iNSURA.ae Powered by PIONEER Group Medical Insurance Policy in the UAE means prioritizing the health and well-being of your employees. Our comprehensive coverage ensures that your team has access to top-tier medical facilities and services across the UAE. With a focus on flexibility, our plans are tailored to meet the diverse needs of businesses, providing various options to suit different budgets and requirements.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our commitment to excellence is evident in our prompt and efficient claim processing, ensuring minimal disruption to your operations. iNSURA.ae Powered by PIONEER extensive network of hospitals and clinics guarantees that your employees receive the best possible care without unnecessary delays. Whether it’s routine check-ups, specialist consultations, or emergency treatments, our policy covers it all, offering peace of mind to both employers and employees.
                </p>
                <p className="text-muted-foreground mb-4">
                  Investing in our group medical insurance policy not only safeguards your employees’ health but also enhances their productivity and morale. A healthy workforce is a productive workforce. When employees know that their health needs are covered, they can focus better on their work, leading to increased efficiency and job satisfaction. This ultimately translates to better performance and growth for your business.
                </p>
                <p className="text-muted-foreground mb-4">
                  Moreover, providing robust health insurance demonstrates your commitment to employee welfare, which can significantly improve retention rates. In a competitive job market, offering comprehensive health benefits can make your company stand out as an employer of choice, attracting top talent and reducing turnover.
                </p>
                <p className="text-muted-foreground mb-4">
                  <span className="font-bold text-gray-500">At iNSURA.ae powered by Pioneer, we understand the importance of balancing quality and cost. Our solutions are designed to be cost-effective without compromising on the quality of care. This means you can provide excellent health benefits to your employees while managing your budget effectively.</span>
                </p>
                <p className="text-muted-foreground mb-4">
                  Trust iNSURA.AE to deliver reliable, comprehensive, and cost-effective health insurance solutions that keep your business and its most valuable assets—your employees—protected and thriving.
                </p>
              </div>

              <div>
                <WhyChooseInsura />
              </div>

              {/* IMAGE DIVIDER SECTION */}
              <section className="mt-10">
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <img
                      src="/car5.webp" 
                      alt="Car Insurance Coverage"
                      className="w-full h-[320px] md:h-[320px] w-[2000px]"
                    />
                  </div>
                </div>
              </section>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">This is how group health insurance helping businesses in UAE:</h2>
                <p className="text-muted-foreground mb-4">
                  Group health insurance is a vital tool for business owners in the UAE, offering numerous benefits that enhance both employee satisfaction and the overall success of the company. By providing comprehensive health coverage to employees, business owners can create a healthier, more productive workforce and gain a competitive edge in attracting and retaining top talent.
                </p>
                <p className="text-muted-foreground mb-4">
                  Firstly, offering group health insurance helps business owners attract and retain skilled employees. In the competitive job market of the UAE, comprehensive health benefits are a significant draw for potential hires. Employees are more likely to join and stay with companies that offer robust health coverage, reducing turnover rates and the associated costs of recruitment and training.
                </p>
                <p className="text-muted-foreground mb-4">
                  Secondly, group health insurance fosters a healthier workforce. Employees with access to quality healthcare are more likely to seek preventive care and timely medical treatment, reducing the incidence of chronic illnesses and prolonged sick leaves. This leads to higher productivity, as healthier employees are less likely to miss work and more capable of performing their duties efficiently.
                </p>
                <p className="text-muted-foreground mb-4">
                  Moreover, group health insurance contributes to higher employee morale and job satisfaction. Knowing that their employer cares about their well-being and that of their families boosts employee loyalty and motivation. This positive work environment can enhance collaboration, innovation, and overall job performance, driving the company’s success.
                </p>
                <p className="text-muted-foreground mb-4">
                  From a financial perspective, group health insurance can be more cost-effective for business owners than individual plans. By pooling resources, businesses can negotiate better rates and coverage options with insurers, reducing the per-employee cost of health insurance. This financial efficiency allows business owners to provide valuable benefits without significantly impacting their bottom line.
                </p>
                <p className="text-muted-foreground mb-4">
                  Additionally, offering group health insurance can improve the company’s reputation. Businesses known for providing excellent health benefits are seen as responsible and caring employers, which can enhance their brand image and attract customers, investors, and partners who value corporate social responsibility.
                </p>
              </div>

              <div className="relative w-full aspect-video overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/XHOmBV4js_E?si=ASjoTXrXmqOyu6j6"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
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