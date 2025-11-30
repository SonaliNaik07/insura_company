import Hero from "@/components/home/hero"
import { InsuranceCards } from "@/components/home/insurance-cards"
import { Stats } from "@/components/home/stats"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import BusinessBanner from "@/components/home/business-banner"
import { QuoteSection } from "@/components/home/quote-section"
import FAQSection from "@/components/home/faq-section"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import { CallToActionSection } from "@/components/home/CallToActionSection"
import ArticlesSection from "@/components/home/ArticlesSection"
export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <InsuranceCards />
       <QuoteSection />
      <Stats />    
      <BusinessBanner />
      <FAQSection />
      <TestimonialsSection />
      <CallToActionSection />
      <ArticlesSection />
    </main>
  )
}
