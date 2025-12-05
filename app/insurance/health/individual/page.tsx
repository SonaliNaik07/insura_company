"use client"

import { Sidebar } from "@/components/content/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { FAQ } from "@/components/content/faq"
import { IdCard, CreditCard, Leaf, Lock, Bookmark } from "lucide-react"

const coverageTypes = [
  {
    title: "Tailored of the UAE",
    description: "Our group medical insurance plans are specifically crafted to align with the UAE's unique healthcare landscape. From Dubai to Abu Dhabi, ensure your team has access to top-tier medical facilities and services.",
    icon: IdCard,
  },
  {
    title: "Enhanced Employee Well-being",
    description: "Investing in the health of your employees is an investment in the success of your business. Group medical insurance fosters a sense of security, boosting morale and overall job satisfaction.",
    icon: CreditCard,
  },
  {
    title: "Cost-Effective Solutions:",
    description: "Navigate the complex world of healthcare expenses with ease. Group medical insurance packages offer cost-effective solutions, ensuring your budget remains intact while providing quality healthcare for your team.",
    icon: Leaf,
  },
  {
    title: "Group Health Insurance",
    description: "Covers employees within a company, offering standard features with some customization options.",
    icon: Lock,
  },
]

const faqs = [
  {
    question: "What does individual health insurance in the UAE typically cover?",
    answer:
      "Individual health insurance plans in the UAE generally cover a range of medical expenses including hospitalization, outpatient treatments, surgeries, consultations with specialists, diagnostic tests, and prescription medications. Some plans may also cover dental and optical care, maternity benefits, and wellness programs, depending on the specific policy and provider.",
  },
  {
    question: "Are there different types of health insurance plans available in the UAE?",
    answer:
      "Yes, health insurance plans in the UAE vary in coverage and cost. Common types include basic plans that cover essential medical needs, comprehensive plans that offer extensive coverage including maternity and chronic conditions, and high-end plans that may include access to a wider network of hospitals and additional benefits such as international coverage.",
  },
  {
    question: "How can I choose the right health insurance plan for my needs?",
    answer:
      "When choosing a health insurance plan in the UAE, consider factors such as your medical needs, budget, preferred hospitals and clinics, coverage for pre-existing conditions, maternity benefits if applicable, and whether you require international coverage. It’s advisable to compare different plans from reputable insurers and consider the network of hospitals and clinics included in the plan.",
  },
  {
    question: "Do health insurance plans in the UAE cover pre-existing conditions?",
    answer:
      "Yes, many health insurance plans in the UAE do cover pre-existing conditions, although there may be waiting periods before coverage becomes effective. It’s important to check the specific terms and conditions of the policy as coverage for pre-existing conditions can vary between insurers and plans.",
  },
  {
    question: "What are the benefits of having health insurance in the UAE?",
    answer: "Health insurance in the UAE provides several benefits including access to quality healthcare services without worrying about high medical costs. It ensures timely medical attention, coverage for emergency treatments, and access to specialists and hospitals of your choice. Health insurance also offers peace of mind, knowing that you and your family are financially protected against unexpected medical expenses. Additionally, having health insurance is mandatory for residents in the UAE under the Dubai Health Insurance Law and the mandatory health insurance scheme in Abu Dhabi, ensuring compliance with local regulations.",
  },
]

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
              <span>Individual Medical Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Individual Medical Insurance
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
              Individual Medical Insurance
            </h2>
            <h2 className="text-3xl md:text-3xl text-gray-500 leading-snug mb-5 mt-5">
              Keep Calm & and be Relax, because <span className="font-bold text-gray-500">INSURA’S INDIVIDUAL HEALTH INSURANCE IS HERE TO TAKE CARE</span> of  Your Peace of Mind & Your Medical Bills!!!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <section className="py-12">
                <p className="text-gray-500 text-foreground mb-4">Give us a few details and we’ll offer the best quotation</p>

                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Transparency and Reliability: </span>
                  </p>
                  <ul className="space-y-1 list-disc pl-6 text-muted-foreground mx-6">
                    <li>
                      Clear and straightforward policies. 
                    </li>
                    <li>
                      Dependable support during critical time.
                    </li> 
                  </ul>

                  <p className="text-gray-600 mb-1 mt-6">   
                    <span className="font-semibold">Financial Protection:</span>
                  </p>                     
                  <ul className="space-y-1 list-disc pl-6 text-muted-foreground mx-6">
                    <li>
                      Safeguard against high medical costs.
                    </li>
                    <li>
                      Financial peace of mind for individuals. 
                    </li>
                  </ul>

                  <p className="text-gray-600 mb-1 mt-2">
                    <span className="font-semibold">Expertise and Experience:</span>
                  </p>
                  <ul className="space-y-1 list-disc pl-6 text-muted-foreground mx-6">
                    <li>
                      Years of experience in the insurance industry.
                    </li>
                    <li>
                      Proven track record of excellence
                    </li>
                  </ul>
              </section>

              <p className="text-muted-foreground mb-8">
                Give us a few details and we’ll offer the best quotation.
              </p>

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
                <h2 className="text-3xl font-bold text-foreground mb-4">Best Individual Health Insurance Plan in UAE.</h2>
                <p className="text-muted-foreground mb-6">
                  iNSURA.ae Powered by PIONEER meticulously crafted Individual Medical Insurance Plans, designed specifically for residents of the UAE. Our commitment is rooted in providing comprehensive coverage that caters to your unique healthcare requirements.
                </p>
                <p className="text-muted-foreground mb-6">
                  At iNSURA.ae Powered by PIONEER, we prioritize quality service and customer satisfaction, ensuring you have access to an extensive network of healthcare providers and hospitals across the Emirates. Our plans are flexible, offering a range of options to suit your lifestyle and financial preferences. From essential medical services to emergency care and specialized treatments, we ensure you receive the care you need without compromising on quality.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you’re a UAE national, resident, or expatriate, our insurance plans offer transparency, reliability, and unwavering support during critical times. With iNSURA.ae Powered by PIONEER, you can rest assured knowing that your health and well-being are safeguarded through every healthcare decision.
                </p>
                <p className="text-muted-foreground mb-6">
                   <span className="font-bold text-gray-500">Join 1000+ who trust iNSURA.ae powered by PIONEER for their health insurance needs and experience the difference in personalized care and financial protection. Our commitment extends beyond mere coverage; it encompasses a dedication to enhancing your healthcare journey with seamless service and comprehensive support.</span>
                </p>
                <p className="text-muted-foreground mb-6">
                  Choose iNSURA.ae powered by PIONEER for peace of mind and security in every aspect of your health. Benefit from our years of expertise in the insurance industry and our unwavering commitment to excellence. Whether you’re looking for basic coverage or comprehensive plans that include additional benefits, iNSURA.ae powered by PIONEER is your trusted partner in navigating the complexities of healthcare in the UAE.
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
                <h2 className="text-3xl font-bold text-foreground mb-4">This is how group health insurance helping businesses in UAE:</h2>
                <p className="text-muted-foreground mb-6">
                  Group health insurance is a vital tool for business owners in the UAE, offering numerous benefits that enhance both employee satisfaction and the overall success of the company. By providing comprehensive health coverage to employees, business owners can create a healthier, more productive workforce and gain a competitive edge in attracting and retaining top talent.
                </p>
                <p className="text-muted-foreground mb-6">
                  Firstly, offering group health insurance helps business owners attract and retain skilled employees. In the competitive job market of the UAE, comprehensive health benefits are a significant draw for potential hires. Employees are more likely to join and stay with companies that offer robust health coverage, reducing turnover rates and the associated costs of recruitment and training.
                </p>
                <p className="text-muted-foreground mb-6">
                  Secondly, group health insurance fosters a healthier workforce. Employees with access to quality healthcare are more likely to seek preventive care and timely medical treatment, reducing the incidence of chronic illnesses and prolonged sick leaves. This leads to higher productivity, as healthier employees are less likely to miss work and more capable of performing their duties efficiently.
                </p>
                <p className="text-muted-foreground mb-6">
                  Moreover, group health insurance contributes to higher employee morale and job satisfaction. Knowing that their employer cares about their well-being and that of their families boosts employee loyalty and motivation. This positive work environment can enhance collaboration, innovation, and overall job performance, driving the company’s success.
                </p>
                <p className="text-muted-foreground mb-6">
                  From a financial perspective, group health insurance can be more cost-effective for business owners than individual plans. By pooling resources, businesses can negotiate better rates and coverage options with insurers, reducing the per-employee cost of health insurance. This financial efficiency allows business owners to provide valuable benefits without significantly impacting their bottom line.
                </p>
                <p className="text-muted-foreground mb-6">
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


            <div>
              </div>
              </div>
              <Sidebar />
            
          
        </div>
        </div>
      </section>

      <FAQ items={faqs} />
    </main>
  )
}