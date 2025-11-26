import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-white">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="6" fill="currentColor" />
                </svg>
                <span className="ml-2 text-2xl font-bold text-white">
                  iNSURA<span className="text-sm">.ae</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With iNSURA.ae Powered by PIONEER, safeguarding your health has never been simpler—get instant customized
              quote.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-300 hover:text-white transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/claims" className="text-gray-300 hover:text-white transition-colors">
                  Claims
                </Link>
              </li>
              <li>
                <Link href="/renew" className="text-gray-300 hover:text-white transition-colors">
                  Renew
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Insurance Types</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/insurance/motor" className="text-gray-300 hover:text-white transition-colors">
                  Motor Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/health" className="text-gray-300 hover:text-white transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/business" className="text-gray-300 hover:text-white transition-colors">
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/travel" className="text-gray-300 hover:text-white transition-colors">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/health/life" className="text-gray-300 hover:text-white transition-colors">
                  Life Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Office #419, 4th Floor, Al Nasr Plaza, Oud Metha – Dubai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">+971 4 357 4547</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">support@insura.ae</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 rounded-l-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2025 iNSURA.ae. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
