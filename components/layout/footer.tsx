import Link from "next/link"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#052645] text-white overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* xl: 6 columns so logo spans 2, then 4 single columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12">
          {/* 1. Logo + Text */}
          <div className="xl:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-white">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="20" cy="20" r="6" fill="currentColor" />
                </svg>
                <span className="ml-2 text-2xl font-bold tracking-wide">
                  iNSURA<span className="text-sm">.ae</span>
                </span>
              </div>
            </Link>

            <p className="text-base text-[#d6e3ff] leading-7 w-[70%]">
              Many brokers will help you with a quote online or over the phone,
              but personal consultations are encouraged, to answer any questions
              you may have, ensure there are no misunderstandings and no detail
              is overlooked.
            </p>
          </div>

          {/* 2. Insurance */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Insurance</h3>
            <ul className="space-y-3 text-sm md:text-base text-[#e0ecff]">
              <li>
                <Link href="/insurance/health" className="hover:text-white">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/car" className="hover:text-white">
                  Car Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/business/business" className="hover:text-white">
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/fleet" className="hover:text-white">
                  Fleet Insurance
                </Link>
              </li>
              <li>
                <Link href="/insurance/travel" className="hover:text-white">
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm md:text-base text-[#e0ecff]">
              <li>
                <Link href="/roadside-assistance" className="hover:text-white">
                  Roadside Assistance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Company (own column now) */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm md:text-base text-[#e0ecff]">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Get In Touch</h3>
            <ul className="space-y-4 text-sm md:text-base text-[#e0ecff]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4da3ff] mt-1" />
                <span>
                  Office #419, 4th Floor,
                  <br />
                  Street #10, Al Nasr Plaza
                  <br />
                  Office Tower, Oud Metha
                  <br />
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4da3ff]" />
                <span>04–357–4547</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#4da3ff]" />
                <span>support@insura.ae</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#223a57] bg-opacity-90 rounded-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <p className="text-xs md:text-sm text-[#d6e3ff] text-center md:text-left">
              Copyright © 2025 Insura. All Rights Reserved.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/insura.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1284e8] flex items-center justify-center hover:bg-[#04223d] transition"
              >
                <Facebook className="w-4 h-4" />
              </Link>

              <Link
                href="https://x.com/i/flow/login?redirect_after_login=%2FInsuraae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1284e8] flex items-center justify-center hover:bg-[#04223d] transition"
              >
                <Twitter className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/insura-ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1284e8] flex items-center justify-center hover:bg-[#04223d] transition"
              >
                <Linkedin className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.instagram.com/insuraae/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1284e8] flex items-center justify-center hover:bg-[#04223d] transition"
              >
                <Instagram className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UC6ZzXNkqiN0sQAJ4w0NNBZA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1284e8] flex items-center justify-center hover:bg-[#04223d] transition"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
