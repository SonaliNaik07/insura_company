"use client"
import { Sidebar } from "@/components/content/sidebar"
import { Button } from "@/components/ui/button"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { Check, Shield, Home, FileText, AlertTriangle } from "lucide-react"
import { FAQ } from "@/components/content/faq"
import { Bookmark } from "lucide-react"

const coverageTypes = [
  { title: "Accident Coverage", description: "Covers repair or replacement costs for damage to your commercial vehicle resulting from accidents. This includes damages regardless of who is at fault." },
  { title: "Third-Party Damage", description: "Covers damages or injuries caused to other vehicles, property, or individuals involved in the accident." },
  { title: "Theft and Vandalism", description: "Provides financial compensation for the loss or replacement of the vehicle if it is stolen and covers repairs for damage caused by malicious acts or vandalism." },
  { title: "Cargo Protection", description: "Covers the goods or cargo being transported in the vehicle against loss, theft, or damage while in transit. This is particularly important for businesses involved in logistics and transportation." },
]

const faqs = [
  {
    question: "What is commercial vehicle insurance?",
    answer:
      "Commercial Vehicle Insurance provides coverage for vehicles used in business activities. It protects against various risks such as accidents, theft, fire, and natural disasters. Insura.ae’s policy, powered by PIONEER, offers comprehensive protection tailored to the needs of businesses operating in the UAE",
  },
  {
    question: "What types of vehicles are covered under Insura.ae’s Commercial Vehicle Insurance?",
    answer:
      "iNSURA.ae Powered by PIONEER Commercial Vehicle Insurance covers a wide range of vehicles used for business purposes, including trucks, vans, buses, and specialized vehicles. The policy is designed to meet the needs of various industries and business operations.",
  },
  {
    question: "What does iNSURA.ae powered by PIONEER Commercial Vehicle Insurance cover?",
    answer: `
  <p><strong>The coverage includes:</strong></p>

  <ul class="list-disc pl-6 space-y-2 mt-3">
    <li><strong>Accident Protection:</strong> Repairs and compensation for damages and injuries.</li>

    <li><strong>Theft and Vandalism:</strong> Replacement or repair if stolen or damaged.</li>

    <li><strong>Fire and Natural Disasters:</strong> Protection against fire and natural hazards.</li>

    <li><strong>Third–Party Liability:</strong> Coverage for damages or injuries caused to others.</li>

    <li><strong>Goods in Transit:</strong> Protection for cargo during transportation.</li>

    <li><strong>Roadside Assistance:</strong> Emergency services like towing and fuel delivery.</li>

    <li><strong>Rental Vehicle Coverage:</strong> Cost of renting a replacement vehicle.</li>

    <li><strong>Driver Coverage:</strong> Personal accident and liability coverage for drivers.</li>
  </ul>
`,
  },

  {
    question:"What factors affect the cost of Commercial Vehicle Insurance?",
answer: `
  <p><strong>The cost of Commercial Vehicle Insurance is influenced by factors such as:</strong></p>

  <ul class="list-disc pl-6 space-y-2 mt-3">
    <li><strong>Type of Vehicle:</strong> The make, model, and value of the vehicle.</li>

    <li><strong>Usage:</strong> How the vehicle is used in business operations.</li>

    <li><strong>Driving History:</strong> The driving records of the vehicle operators.</li>

    <li><strong>Coverage Options:</strong> The extent of coverage and any additional features.</li>

    <li><strong>Fleet Size:</strong> For businesses with multiple vehicles, fleet size and management can affect pricing.</li>
  </ul>
`,
  },
  {
    question:"What is the process for renewing my Commercial Vehicle Insurance policy?",
    answer:"iNSURA.ae powered by PIONEER will typically send a renewal notice before your policy expires. You can renew your policy online, by phone, or through their customer service team. Renewal involves reviewing and updating your coverage details as needed.",
  }
]

export default function CommercialInsurancePage() {
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
              <span>Motor Insurance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commercial Vehicle Insurance
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
              Commercial Vehicle Insurance to Ease Your Business
            </h2>
            <h2 className="text-3xl md:text-3xl text-gray-500 leading-snug mb-10 mt-5">
              <span className="font-bold text-gray-500">Commercial Vehicle Insurance</span> is a specialized insurance policy designed to cover vehicles used for business purposes in UAE
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

              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Commercial Vehicle Insurance in UAE</h2>
                <p className="text-muted-foreground mb-4">
                  In the dynamic business environment of the UAE, commercial vehicles play a crucial role in operations across various industries. Whether it’s transporting goods, providing services, or managing logistics, ensuring that these vehicles are protected with comprehensive insurance is essential. <span className="font-bold text-gray-500">iNSURA.ae Powered by  PIONEER</span>, offers an exceptional Commercial Vehicle Insurance plan designed to cater to the unique needs of businesses operating in the UAE. This insurance provides extensive coverage and support to safeguard your commercial vehicles and ensure smooth business operations.
                </p>
                <h2 className="text-4xl font-bold text-foreground mb-4">What is Commercial Vehicle Insurance?</h2>
                <p className="text-muted-foreground mb-4">
                  Commercial Vehicle Insurance is a specialized insurance policy designed to cover vehicles used for business purposes. Unlike personal car insurance, which covers vehicles for private use, commercial vehicle insurance addresses the unique risks and requirements associated with vehicles used in commercial activities. Insura.ae’s Commercial Vehicle Insurance, powered by PIONEER, offers a comprehensive package that includes extensive coverage options tailored to meet the diverse needs of businesses.
                </p>
              </div>

                <section className="py-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Coverages:</h2>

                 <ul className="space-y-4 list-disc pl-6 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Accident Protection:</span>
                    <p className="text-muted-foreground mb-4">iNSURAa.ae Powered by PIONEER Commercial Vehicle Insurance covers damages resulting from accidents, whether the vehicle is at fault or not. This includes repairs to your commercial vehicle and compensation for any third-party damages or injuries. With the support of PIONEER, you can expect efficient and hassle-free claims processing, minimizing disruptions to your business.</p>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Theft and Vandalism </span>Commercial vehicles are often at risk of theft and vandalism. Insura.ae’s policy provides coverage for the loss or damage of your vehicle due to theft or vandalism. This protection helps mitigate the financial impact of such incidents, allowing you to quickly replace or repair your vehicle and continue your business operations.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Fire and Natural Disasters </span>The harsh climate and occasional natural disasters in the UAE can pose significant risks to commercial vehicles. Insura.ae’s Commercial Vehicle Insurance includes coverage for fire damage and losses caused by natural disasters like floods and sandstorms. This ensures that your vehicle is protected against environmental hazards that could disrupt your business.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Third-Party Liability </span>Liability coverage is a critical component of commercial vehicle insurance. Insura.ae’s policy provides protection if your vehicle causes damage to other people or property. This coverage helps meet legal requirements and shields your business from potentially substantial financial liabilities arising from third-party claims.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Goods in Transit </span>For businesses involved in transporting goods, Insura.ae’s Commercial Vehicle Insurance offers coverage for goods in transit. This feature ensures that your cargo is protected against loss or damage while being transported, providing additional security and peace of mind for businesses relying on transportation. 
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Roadside Assistance </span>Unexpected breakdowns can significantly impact business operations. Insura.ae’s policy includes 24/7 roadside assistance, offering services such as towing, fuel delivery, and minor repairs. This ensures that your commercial vehicle can quickly get back on the road, minimizing downtime and operational disruptions.
                  </li> 
                  <li>
                    <span className="font-semibold text-foreground">Rental Vehicle Coverage </span>If your commercial vehicle is out of service for repairs, Insura.ae provides rental vehicle coverage. This allows you to rent a replacement vehicle to maintain your business operations while your insured vehicle is being repaired or replaced.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Driver Coverage </span>Insura.ae’s policy includes coverage for drivers of your commercial vehicles. This includes personal accident coverage for drivers in the event of an accident, ensuring that your staff is protected while performing their duties.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Comprehensive Fleet Management</span> For businesses with multiple vehicles, Insura.ae offers fleet insurance solutions. This allows you to insure an entire fleet under a single policy, simplifying management and potentially offering cost savings. Fleet insurance is designed to provide consistent coverage and streamlined administration for businesses with diverse vehicle needs.
                  </li>
                  </ul>
              </section>

              <WhyChooseInsura />

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
                <p className="text-muted-foreground mb-4">
                  Commercial Vehicle Insurance in the UAE offers a wide range of coverage options to protect businesses and their vehicles from various risks. While the specific features may vary between insurance providers, key coverage components typically include accident protection, theft and vandalism, fire and natural disasters, third-party liability, goods in transit, roadside assistance, rental vehicle coverage, driver coverage, fleet management, comprehensive protection, legal expenses, personal property coverage, and environmental damage. Understanding these coverage options helps businesses choose the right insurance plan to ensure their commercial vehicles and operations are adequately protected.
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