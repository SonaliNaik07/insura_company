import Link from "next/link"

export function QuoteSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Insurance in <span className="text-accent">30 MIN</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Quick, hassle-free insurance quotes. Our streamlined process gets you covered fast without the paperwork
              headache.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <img src="/business-people-discussing-insurance-documents-in-.jpg" alt="Get Quote" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
