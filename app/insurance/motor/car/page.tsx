"use client"

import { Sidebar } from "@/components/content/sidebar"
import { FAQ } from "@/components/content/faq"
import { WhyChooseInsura } from "@/components/content/why-choose-insura"
import { Car, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const coverageTypes = [
  {
    title: "Easy to Apply",
    description: "Applying for car insurance with Insura.ae is quick and effortless.",
  },
  { title: "Customized Insurance Options", description: "Multiple insurance options customized to fit your unique driving needs." },
  { title: "24X7 Insurance Service", description: "Enjoy 24/7 support as Insura.ae is always here for you." },
  { title: "Fastest Claim Support", description: "Receive swift claim support and ensure that you're never left waiting." },
]

const faqs = [
  {
    question: "What types of car insurance does iNSURA.ae powered by PIONEER offer?",
    answer:
      "iNSURA.ae powered by PIONEER provides a range of Car Insurance in UAE options, including comprehensive coverage, third-party liability, and additional coverage for personal injury and roadside assistance.",
  },
  {
    question: "How can I get a car insurance quote from iNSURA.ae powered by PIONEER?",
    answer:
      "You can easily obtain a quote by visiting our website and filling out the online quote form. Provide some basic information about your vehicle and personal details, and you’ll receive a customized quote promptly.",
  },
  {
    question: "Can I renew my car insurance policy online?",
    answer:
      "Absolutely! iNSURA.ae powered by PIONEER makes policy renewal convenient. You can renew your car insurance online through our user-friendly platform. We’ll also notify you in advance of your policy expiration to ensure uninterrupted coverage.",
  },
  {
    question: "Can I customize my car insurance policy?",
    answer:
      "Absolutely! iNSURA.ae powered by PIONEER understands that each driver has unique needs. We offer customizable policies, allowing you to add or remove coverage options to suit your requirements and budget.",
  },
  {
    question: "Is roadside assistance included in iNSURA.ae's powered by PIONEER car insurance?",
    answer: "If you have additional questions or need assistance, our customer service team is here to help. Contact us through our website, via email, or by phone. Visit our “Contact Us” page for detailed information on how to reach us.",
  },
]

const carBrands = [
  "BMW",
  "Toyota",
  "Ford",
  "Nissan",
  "Honda",
  "Mercedes-Benz",
  "Audi",
  "Kia",
  "Hyundai",
  "Chevrolet",
];

const years = Array.from({ length: 30 }, (_, i) => 2025 - i);



export default function CarInsurancePage() {
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
      <section className="relative overflow-hidden bg-primary min-h-[45vh] sm:min-h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="/motor-hero.jpg"
            alt="Car Insurance"
            className="w-full h-full object-cover object-center"
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

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Car Insurance
            </h1>

            <p className="text-lg text-white/90 text-base sm:text-lg leading-relaxed">
              Drive with confidence knowing Insura has you covered with
              comprehensive car insurance solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            {/* MAIN CONTENT */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary leading-snug mt-10">
              Car Insurance in UAE make you to drive Worry free!
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">              

            {/* FORM */}
              <h3 className="text-3xl text-primary mb-10">
                Buy Car Insurance in the UAE That Fits You…
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">

  {/* Name */}
  <div>
    <Label className="font-medium">
      Name <span className="text-red-500">*</span>
    </Label>
    <Input
      placeholder="Enter full name..."
      className="
        mt-2 h-12 sm:h-14 rounded-xl bg-blue-50 border-none
        placeholder:text-muted-foreground
        focus-visible:ring-2 focus-visible:ring-primary
      "
    />
  </div>

  {/* Email */}
  <div>
    <Label className="font-medium">
      Email Address <span className="text-red-500">*</span>
    </Label>
    <Input
      placeholder="Enter email id..."
      type="email"
      className="
        mt-2 h-12 sm:h-14 rounded-xl bg-blue-50 border-none
        placeholder:text-muted-foreground
        focus-visible:ring-2 focus-visible:ring-primary
      "
    />
  </div>

  {/* Mobile Number */}
  <div>
    <Label className="font-medium">
      Mobile Number <span className="text-red-500">*</span>
    </Label>
    <Input
      placeholder="+971 Enter mobile number..."
      className="
        mt-2 h-12 sm:h-14 rounded-xl bg-blue-50 border-none
        placeholder:text-muted-foreground
        focus-visible:ring-2 focus-visible:ring-primary
      "
    />
  </div>

  {/* Car Brand */}
  <div>
    <Label className="font-medium">What is your car's brand?</Label>
    <select
      className="
        mt-2 h-12 sm:h-14 rounded-xl bg-blue-50 border-none w-full
        text-gray-700 px-4
        focus-visible:ring-2 focus-visible:ring-primary
      "
    >
      <option value="">Select Brand</option>
      {carBrands.map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  </div>

  {/* Car Model */}
  <div>
    <Label className="font-medium">Select Model</Label>
    <Input
      placeholder="e.g., 3 Series"
      className="
        mt-2 h-12 sm:h-14 rounded-xl bg-blue-50 border-none
        focus-visible:ring-2 focus-visible:ring-primary
      "
    />
  </div>

  {/* Registration Year */}
  <div>
    <Label className="font-medium">In which year was your car registered?</Label>

    <select
      className="
        mt-2 h-12 sm:h-14 rounded-xl bg-blue-50 border-none w-full
        text-gray-700 px-4
        focus-visible:ring-2 focus-visible:ring-primary
      "
    >
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>

  {/* Submit */}
  <div className="pt-2">
    <Button
      type="submit"
      className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto px-6 py-4"
    >
      Send Application
    </Button>
  </div>
</form>




              {/* WHAT IS CAR INSURANCE */}
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-4">
                  What is Car Insurance?
                </h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                    Car insurance in the UAE is your financial safety, stepping in when life takes an unexpected turn. It is a shield protecting you from financial uncertainties caused by accidents, theft, or damage. In the UAE, it’s not just a safety measure—it’s the law, ensuring you and others are safeguarded against liabilities on the road. You can obtain the highest level of protection for your vehicle by paying a reasonable premium.
                </p>
              </div>

              <div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {coverageTypes.map((type, index) => (
    <div key={index} className="perspective group cursor-pointer"  onClick={() => handleFlip(index)}>
      <div
  className={`
    relative
    h-56
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
            rounded-xl
            flex flex-col
            items-center
            justify-center
            text-white
            backface-hidden
          "
        >
          <Car className="w-10 h-10 text-yellow-400 mb-4" />
          <h3 className="text-lg font-semibold text-center px-4">
            {type.title}
          </h3>

          {/* Mobile hint */}
  <span className="mt-2 text-xs text-white/70 sm:hidden">
    Tap to see details
  </span>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            bg-white
            rounded-xl
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
          <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
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

</div>


              {/* ADDITIONAL COVERS */}
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold mb-6">Types of Car Insurance in the UAE</h2>
                <p className="text-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  <strong className="text-foreground">Comprehensive insurance</strong> and <strong className="text-foreground">Third Party Car Insurance</strong> are the two main categories of auto insurance available in the UAE. These types cater to different levels of protection, ensuring there’s a plan suited for every driver. Whether you want all-around coverage or just the basics, you’re legally required to have at least one type of insurance to drive in the UAE.                
                </p>

                <h2 className="text-2xl text-primary font-semibold mb-6">Comprehensive Insurance</h2>
                <p className="text-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  The best protection for your car is comprehensive car insurance in the UAE. Why?It’s designed to protect not only you but also third parties involved in an accident. This type of insurance covers damages to your car caused by accidents, theft, fire, and even natural calamities like floods. Additionally, it extends coverage to third-party liabilities, ensuring everyone involved in an incident is safeguarded.
                </p>

                <p className="text-lg font-semibold text-foreground mb-6 mt-10 text-base sm:text-lg leading-relaxed">
                  Comprehensive insurance rates vary depending on several criteria, including:
                </p>
                 <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Driver’s Profile:</span> Age, driving experience, and record.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Vehicle Type:</span> Make, model, and year.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Location:</span> Where the car is registered.
                  </li>
                </ul>
              
                <h2 className="text-2xl text-primary font-semibold mb-6">Third-Party Car Insurance</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Third-party car insurance in the UAE is a basic yet essential protection plan. It’s designed to cover damages and injuries caused to another person or their property by your vehicle. While it doesn’t cover your car or personal injuries, it fulfils the mandatory insurance requirement in the UAE.
                </p>
                <p className="text-lg font-semibold text-foreground mb-6 mt-10 text-base sm:text-lg leading-relaxed">The cost of third-party insurance depends on:</p>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Driver and Vehicle Details: </span>Age, experience, type of car, and driving history.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Insurance Provider Policies: </span>Different insurers offer varied rates and coverage.
                  </li>
                </ul>
              </div>

              {/* WHY DO YOU NEED CAR INSURANCE */} 
              <div>
                <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-6">Why Do You Need Car Insurance?</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Car insurance in the UAE is more than just a legal requirement in the UAE—it’s a financial safeguard that offers essential protection. Here’s why you need it:
                </p>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Stay Legally Compliant:</span>Driving without car insurance in the UAE is against the law. A valid policy ensures you meet legal requirements and avoid hefty fines or penalties.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Protect Yourself from Financial Loss:</span>Accidents can lead to expensive repair bills or medical costs. Car insurance covers these expenses, saving you from unexpected financial burdens.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Cover Third-Party Liabilities:</span> If you accidentally damage someone’s vehicle or property, your car insurance covers the repair costs, protecting you from out-of-pocket expenses.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Handle Emergencies with Ease:</span>Whether it’s a breakdown, theft, or an accident, car insurance provides the support you need to navigate challenging situations with confidence.
                  </li>
                </ul>

                <h2 className="text-2xl text-primary font-bold mb-6">Additional Cover Options and Upgrades</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Enhance your car insurance in the UAE with additional covers that offer extra protection and convenience. These upgrades are specifically designed to make your driving experience stress-free, ensuring you’re ready for any unforeseen circumstances on the road.
                </p>

                <h2 className="text-2xl text-primary font-bold mb-6">Agency Repair</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Keep your car in pristine condition with repairs at authorised service centres. This option ensures that your vehicle is restored to manufacturer standards using genuine parts and expert technicians. It’s an ideal choice for maintaining your car’s value and performance.
                </p>

                <h2 className="text-2xl text-primary font-bold mb-6">Roadside Assistance</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Never be stranded on the road again. With roadside assistance, you can count on immediate help in emergencies like breakdowns, flat tyres, or even battery failures. This service ensures that you’re back on track swiftly, minimising disruptions to your journey.
                </p>

                <h2 className="text-2xl text-primary font-bold mb-6">Protected No-Claim</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Safeguard your no-claim discount even after an accident. This cover lets you retain your hard-earned discount, helping you save on future premiums while staying protected. It’s a smart way to ensure affordability and reliability in the long run.
                </p>

                <h2 className="text-2xl text-primary font-semibold mb-6">Personal Accident Benefits</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Prioritise the safety of everyone in your car. This add-on provides financial coverage for injuries to you or your passengers in the event of an accident. It’s a crucial benefit that adds an extra layer of protection for your loved ones.
                </p>
              </div>

              {/* WHY CHOOSE INSURA */}
              <div>
                <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-6">Why Choose Insura for Car Insurance?</h2>
                <p className="text-muted-foreground mb-4 text-base sm:text-lg leading-relaxed">
                  Choosing the right car insurance in the UAE can feel overwhelming, but Insura makes it easy by putting your needs first. Here’s why we stand out:
                </p>
                <ul className="space-y-5 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Expert Advice: </span>Our dedicated advisors go beyond the surface, offering well-researched and personalised guidance to ensure you find a policy that perfectly matches your requirements. Their expertise guarantees peace of mind and informed decisions.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Top Insurance Companies: </span>We partner with the UAE’s most trusted insurance providers, bringing you premium options that cater to diverse needs and budgets. With Insura, you get the best the market has to offer.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Instant Coverage: </span>Time is precious, and with Insura, you can secure your car insurance within minutes. Say goodbye to lengthy processes and hello to immediate peace of mind.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Exclusive Rewards: </span>Insura believes in giving back. Enjoy exciting perks and added benefits when you choose us, making your car insurance experience both valuable and rewarding.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Unmatched Reliability: </span>Our work is based on trust. From hassle-free claims processing to round-the-clock customer service, we ensure your journey with us is smooth and worry-free.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl text-primary font-semibold mb-6">How to Compare Car Insurance Online</h2>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Create a List of Providers: </span>Identify reputable insurance companies in the UAE to compare reliable options.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Check Coverage Inclusions: </span>Understand what each policy covers, such as accident, theft, and third-party liabilities.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Review Exclusions: </span>Know what’s not covered, like damages from illegal acts or floods, to avoid surprises.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Evaluate Add-Ons: </span>Consider extras like roadside assistance or personal accident benefits for better coverage.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Look for Discounts: </span>Explore offers for safe drivers, early renewals, or bundled policies to save money.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Read Customer Reviews: </span>Learn from others’ experiences with claim settlements and customer service.
                  </li>
                </ul>
              
                <h2 className="text-2xl text-primary font-bold mb-6">What Is Not Covered?</h2>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>Damages are caused while committing illegal acts.</li>
                  <li>Accidents involving a learner driver without proper supervision.</li>
                  <li>Damages to personal property inside the car.</li>
                  <li>Flood-related damages to vehicles driven through unsafe conditions.</li>
                </ul>

                <h2 className="text-2xl text-primary font-bold mb-6">Documents Required for Car Insurance :-</h2>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Car Details: </span>Registration, engine number, chassis number, and related details.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Driver Information: </span>Driving licence and Emirates ID.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Previous Policy: </span>If applicable, your existing insurance policy details.
                  </li>
                </ul>

                <h2 className="text-2xl text-primary font-bold mb-6">Tips for Low-Cost Car Insurance</h2>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Plan: </span>Avoid last-minute purchases to get better rates.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Seek Expert Advice: </span>Let professionals guide you to the best deals.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Focus Beyond Price: </span>Choose value over cost for better protection.
                  </li>
                </ul>

                <h2 className="text-2xl text-primary font-bold mb-6">Payment Options</h2>
                <ul className="space-y-1 pl-5 list-disc text-muted-foreground ml-6 mb-10">
                  <li>
                    <span className="font-semibold text-foreground">Credit Card: </span>Fast and secure online payments.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Bank Transfer:</span>Convenient and direct.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Cash: </span>Available at designated offices.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Cheque:</span>For traditional payment methods.
                  </li>
                </ul>
                </div>

              {/* INSURED INSTANTLY */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Insured Instantly – Fast, Reliable, and Affordable Car Insurance in UAE</h2>
                <p className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
                  Say hello to confident driving and goodbye to time-consuming processes! <strong className="text-foreground">iNSURA.ae Powered by Pioneer</strong> offers <strong className="text-foreground">the best car insurance</strong> options tailored to UAE drivers. Our quick, hassle-free service and affordable rates make securing your vehicle simple and stress-free. 
                </p>
                <p className="text-muted-foreground mb-12 text-base sm:text-lg leading-relaxed">Trust Insura.ae powered by Pioneer for reliable, comprehensive insurance solutions.</p>

                {/* KEY FEATURES TABLE */}

                <h2 className="text-xl font-bold text-foreground mb-6">
                  Key Features of iNSURA's Powered by Pioneer Car Insurance:
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="border border-border px-6 py-4 text-left font-bold">
                          Key Features
                        </th>
                        <th className="border border-border px-6 py-4 text-left font-bold">
                          Insurance Benefits
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      <tr>
                        <td className="border px-4 py-3 font-small text-muted-foreground">Starting from</td>
                        <td className="border px-4 py-3 font-small text-muted-foreground">2.8 AED / Per Day</td>
                      </tr>

                      <tr className="bg-muted/40">
                        <td className="border px-4 py-3 font-small text-muted-foreground">Coverage</td>
                        <td className="border px-4 py-3 font-small text-muted-foreground">Full & Comprehensive</td>
                      </tr>

                      <tr>
                        <td className="border px-4 py-3 font-small text-muted-foreground">Process to Claim</td>
                        <td className="border px-4 py-3 font-small text-muted-foreground">
                          Visit iNSURA.ae Car Insurance page, fill you details in a from available on page, then wait our Insuarnce Manager will connect you.
                        </td>
                      </tr>

                      <tr className="bg-muted/40">
                        <td className="border px-4 py-3 font-small text-muted-foreground">Insurance Claim Support</td>
                        <td className="border px-4 py-3 font-small text-muted-foreground">24 × 7 Support</td>
                      </tr>

                      <tr>
                        <td className="border px-4 py-3 font-small text-muted-foreground">Coverages Available</td>
                        <td className="border px-4 py-3 font-small text-muted-foreground">
                          Driver Cover, Passenger Cover, Natural Calamities, Replacement of Vehicle,
                          Roadside Assistance
                        </td>
                      </tr>

                      <tr className="bg-muted/40">
                        <td className="border px-4 py-3 font-small text-muted-foreground">Purchase / Renew Process</td>
                        <td className="border px-4 py-3 font-small text-muted-foreground">Online</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

      <WhyChooseInsura />


              {/* IMAGE DIVIDER SECTION */}
              <section className="mt-10">
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <img
                      src="/car5.webp"   // ✅ replace with your image path
                      alt="Car Insurance Coverage"
                      className="w-full h-[220px] sm:h-[320px] object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* 5 STEPS TO BUY CAR INSURANCE */}
              <section className="mt-10 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  {/* SECTION TITLE */}
                  <h2 className="text-3xl md:text-3xl font-bold text-black mb-10">
                    5 Steps to Buy the Best Car Insurance in the UAE
                  </h2>

                  {/* STEPS LIST */}
                  <div className="space-y-4 text-m">

                    <p>
                      <span className="font-semibold text-foreground">Step 1:</span>{" "}
                      Visit iNSURA.ae powered by PIONEER car insurance section on their website and fill out the lead form.
                    </p>

                    <p>
                      <span className="font-semibold text-foreground">Step 2:</span>{" "}
                      Compare plans on the quotes page and select the one that suits your needs.
                    </p>

                    <p>
                      <span className="font-semibold text-foreground">Step 3:</span>{" "}
                      Choose your preferred motor insurance plan and provider, then proceed
                      to the payment page.
                    </p>

                    <p>
                      <span className="font-semibold text-foreground">Step 4:</span>{" "}
                      Enter any additional details required before finalizing the purchase.
                    </p>

                    <p>
                      <span className="font-semibold text-foreground">Step 5:</span>{" "}
                      Complete the payment, and you’re all set!
                    </p>

                  </div>
                </div>
              </section>

              <hr className="mt-10 border-black" />

              {/* VIDEO SECTION */}
              <section className="mt-16 relative z-20 isolate">
                <div className="relative overflow-hidden aspect-video bg-black transform-gpu will-change-transform">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/carframe.png"
                  >
                    <source src="/car.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>

              <div>
                {/* FAQ SECTION */}
                <h2 className="max-w-3xl mx-auto px-2 sm:px-0 text-2xl sm:text-4xl font-bold text-primary mb-2 mt-16 text-center">
                  Car Insurance FAQ's
                </h2>
                      <FAQ items={faqs} />

              </div>
              
            </div>

            {/* SIDEBAR */}
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  )
}