"use client";

import { PageHero } from "@/components/ui/page-hero";

const faqs = [
  {
    question: "How can I save on my insurance premiums?",
    answer:
      "There are several ways to reduce your insurance premium with iNSURA Powered by PIONEER INSURANCE. You can take advantage of multi-policy discounts, safe-driving benefits, no-claim bonuses, and special promotional offers. Our team can also review your current cover and suggest adjustments so you get suitable protection at a more cost-effective price.",
  },
  {
    question: "What’s the coverage for natural disasters in my insurance policy?",
    answer:
      "Coverage for natural disasters such as floods, storms, or earthquakes depends on the type of insurance policy you have and the options you select. Some policies include this protection automatically, while others require an add-on. Our team can help you check your policy wording and explain exactly what natural disaster coverage is included in your plan.",
  },
  {
    question: "What is the process for renewing my insurance policy?",
    answer:
      "Renewing your policy with iNSURA Powered by PIONEER INSURANCE is simple. We will send you a renewal reminder before your policy expiry date, so you have enough time to review your cover. You can then renew online, by sharing your details with our team, or by contacting our customer support. Once payment and confirmation are completed, your new policy term will start without any interruption in coverage.",
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* HERO */}
     

      {/* FAQ LIST */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="border border-gray-200 bg-white shadow-sm"
              >
                {/* top strip with number + question */}
                <div className="px-6 py-4 bg-[#f7f8fb]">
                  <p className="font-semibold text-[#003566] text-base md:text-lg">
                    <span className="mr-2">{index + 1}</span>
                    {item.question}
                  </p>
                </div>

                {/* answer */}
                <div className="px-6 py-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
