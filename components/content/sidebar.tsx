import Link from "next/link"
import { Search, Plus } from "lucide-react"

export function Sidebar() {
  return (
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
      <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Plus className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Our Insurance</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/insurance/motor" className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Motor Insurance
            </Link>
          </li>
          <li>
            <Link href="/insurance/health" className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Health Insurance
            </Link>
          </li>
          <li>
            <Link href="/insurance/business" className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Business Insurance
            </Link>
          </li>
          <li>
            <Link href="/insurance/travel" className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Travel Insurance
            </Link>
          </li>
          <li>
            <Link href="/insurance/health/life" className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Life Insurance
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
