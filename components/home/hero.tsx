import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/happy-family-sitting-on-couch-in-living-room-with-.jpg" alt="Happy family" className="w-full h-full object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-lg">
          {/* Cyan Card */}
          <div className="bg-accent p-8 rounded-lg">
            <p className="text-accent-foreground text-lg leading-relaxed mb-8">
              With iNSURA.ae Powered by PIONEER, safeguarding your health has never been simpler—get instant customized
              quote.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-200"
            >
              Buy Now
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
      </div>
    </section>
  )
}
