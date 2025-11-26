import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function BusinessBanner() {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/three-business-professionals-walking-and-talking-i.jpg" alt="Business Insurance" className="w-full h-full object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md">
          {/* Blue Card */}
          <div className="bg-primary p-8 rounded-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {"Let's plan your Business insurance"}
            </h2>
            <p className="text-white/80 mb-8">
              Your Business Insurance matter Secure Your Business & Future Get Peace of Mind Today!
            </p>
            <Link
              href="/insurance/business"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Buy Now
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
