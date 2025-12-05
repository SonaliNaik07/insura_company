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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 lg:gap-14">
          {/* 1. Logo + Text */}
          <div className="xl:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-white">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="6" fill="currentColor" />
                </svg>
                <span className="ml-2 text-2xl font-bold tracking-wide">
                  iNSURA<span className="text-sm">.ae</span>
                </span>
              </div>
            </Link>

            <p className="text-sm md:text-base text-[#d6e3ff] leading-relaxed max-w-md text-justify">
              Many brokers will help you with a quote online or over the phone,
              but personal consultations are encouraged, to answer any questions
              you may have, ensure there are no misunderstandings and no detail
              is overlooked.
            </p>
          </div>

          {/* 2. Insurance */}
          <FooterColumn title="Insurance">
            <FooterItem href="/insurance/health/health">Health Insurance</FooterItem>
            <FooterItem href="/insurance/motor/car">Car Insurance</FooterItem>
            <FooterItem href="/insurance/business/business">Business Insurance</FooterItem>
            <FooterItem href="/insurance/motor/fleet">Fleet Insurance</FooterItem>
            <FooterItem href="/insurance/travel">Travel Insurance</FooterItem>
          </FooterColumn>

          {/* 3. Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterItem href="/roadside-assistance">Roadside Assistance</FooterItem>
            <FooterItem href="/contact">Contact Us</FooterItem>
            <FooterItem href="/faq">FAQ</FooterItem>
          </FooterColumn>

          {/* 4. Company */}
          <FooterColumn title="Company">
            <FooterItem href="/about">About Us</FooterItem>
            <FooterItem href="/privacy">Privacy Policy</FooterItem>
            <FooterItem href="/terms">Terms &amp; Conditions</FooterItem>
            <FooterItem href="/disclaimer">Disclaimer</FooterItem>
          </FooterColumn>

          {/* 5. Get In Touch – styled like your screenshot */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-[#e0ecff]">
              {/* Address */}
             <li className="flex items-start gap-3">
  <MapPin className="w-4 h-4 text-[#4da3ff] mt-1" />

  <div className="leading-relaxed space-y-1">
    <p className="whitespace-nowrap">Office #419, 4th Floor</p>
    <p className="whitespace-nowrap"> Street #10, Al Nasr Plaza</p>
    <p className="whitespace-nowrap">Office Tower, Oud Metha</p>
    <p className="whitespace-nowrap">Dubai, United Arab Emirates</p>
    
  </div>
</li>


              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4da3ff]" />
                <span>04–357–4547</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4da3ff]" />
                <span>support@insura.ae</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#223a57] rounded-lg px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-md">
            <p className="text-xs md:text-sm text-[#d6e3ff] text-center md:text-left">
              Copyright © 2025 Insura. All Rights Reserved.
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/insura.ae/"><Facebook className="w-4 h-4" /></SocialIcon>
              <SocialIcon href="https://x.com/Insuraae"><Twitter className="w-4 h-4" /></SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/insura-ae"><Linkedin className="w-4 h-4" /></SocialIcon>
              <SocialIcon href="https://www.instagram.com/insuraae"><Instagram className="w-4 h-4" /></SocialIcon>
              <SocialIcon href="https://www.youtube.com/channel/UC6ZzXNkqiN0sQAJ4w0NNBZA"><Youtube className="w-4 h-4" /></SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- small helpers to keep JSX clean ---------- */

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base md:text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-[#e0ecff]">{children}</ul>
    </div>
  )
}

function FooterItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-[#1284e8] flex items-center justify-center hover:bg-white hover:text-[#052645] transition-all"
    >
      {children}
    </Link>
  )
}
