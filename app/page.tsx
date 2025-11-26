import { Hero } from "@/components/home/hero"
import { InsuranceCards } from "@/components/home/insurance-cards"
import { Stats } from "@/components/home/stats"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { BusinessBanner } from "@/components/home/business-banner"
import { QuoteSection } from "@/components/home/quote-section"
import { FAQSection } from "@/components/home/faq-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <InsuranceCards />
      <Stats />
      <WhyChooseUs />
      <BusinessBanner />
      <QuoteSection />
      <FAQSection />
    </main>
  )
}
