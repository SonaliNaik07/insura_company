import { PageHero } from "@/components/ui/page-hero"
import { Search } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main>
      <PageHero
        breadcrumb="About Us"
        title="About Us"
        description="Need any type of insurance policies over the world you can contact us without any hesitation. Our expert support team with help you."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Insura.ae</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Welcome to <strong className="text-foreground">Insura.ae Powered by Pioneer</strong> – the insurance
                  broker company that's got you covered! We are a leading insurance broker company based in the UAE
                  since 1990.
                </p>
                <p className="mb-4">
                  We provide a comprehensive range of insurance products and services to individuals, families, and
                  businesses. Our mission is to help our clients protect themselves and their assets from risks while
                  providing them peace of mind and financial security.
                </p>
                <p className="mb-4">
                  At Insura.ae, we understand that insurance can be complex and overwhelming. That's why we've made it
                  our mission to simplify the process and provide our clients with personalized solutions that meet
                  their unique needs.
                </p>
                <p className="mb-4">
                  Our team of experienced insurance professionals is dedicated to providing exceptional service and
                  support. Whether you're looking for car insurance, health insurance, travel insurance, or business
                  insurance, we have the expertise to help you find the right coverage at the right price.
                </p>
                <p>
                  We work with the most reputable insurance companies in the UAE to bring you a wide range of options,
                  ensuring you get the best coverage for your needs. Our commitment to excellence has earned us the
                  trust of thousands of clients across the UAE.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search Box */}
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">Search</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Searching Here..."
                    className="flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-4 py-3 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Our Insurance Card */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Our Insurance</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/insurance/motor"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Motor Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/health"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Health Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/business"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Business Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/travel"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Travel Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/health/life"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Life Insurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
