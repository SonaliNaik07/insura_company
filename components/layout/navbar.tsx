"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Plus, Minus, Menu, X } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { MapPin, Phone, Mail } from "lucide-react";

const insuranceCategories = {
  motor: {
    title: "Motor",
    items: [
      { name: "Car Insurance", href: "/insurance/motor/car" },
      { name: "Bike Insurance", href: "/insurance/motor/bike" },
      { name: "Fleet Insurance", href: "/insurance/motor/fleet" },
      { name: "Third Party Liability Insurance", href: "/insurance/motor/third-party" },
      { name: "New Vehicle Insurance", href: "/insurance/motor/new-vehicle" },
      { name: "Commercial Vehicle Insurance", href: "/insurance/motor/commercial" },
    ],
  },
  health: {
    title: "Health",
    items: [
      { name: "Individual Medical Insurance", href: "/insurance/health/individual" },
      { name: "Group Medical Insurance", href: "/insurance/health/group" },
      { name: "Health Insurance", href: "/insurance/health/health" },
      { name: "Life Insurance", href: "/insurance/health/life" },
    ],
  },
  business: {
    title: "Business",
    items: [
      { name: "Business Insurance", href: "/insurance/business/business" },
      { name: "Property All Risks", href: "/insurance/business/property" },
      { name: "Workmen Compensation", href: "/insurance/business/workmen" },
      { name: "Professional Indemnity", href: "/insurance/business/professional" },
      { name: "Public Liability", href: "/insurance/business/public-liability" },
      { name: "Marine Cargo", href: "/insurance/business/marine" },
      { name: "Contractors All Risks", href: "/insurance/business/contractors" },
      { name: "Trade Credit", href: "/insurance/business/trade-credit" },
      { name: "Medical Malpractice", href: "/insurance/business/medical-malpractice" },
      { name: "Event Insurance", href: "/insurance/business/event" },
      { name: "Fidelity Guarantee", href: "/insurance/business/fidelity-guarantee" },
      { name: "Money Insurance Policy", href: "/insurance/business/money-insurance-policy" },
      { name: "Group Life Personal Accident – GLPA", href: "/insurance/business/group-life-personal-accident" },
      
    ],
  },
  travel: {
    title: "Travel",
    items: [
      { name: "Travel Insurance", href: "/insurance/travel/travel" },
      { name: "Inbound Travel Insurance", href: "/insurance/travel/inbound" },
      { name: "Outbound Travel Insurance", href: "/insurance/travel/outbound" },
      { name: "Senior Citizen Insurance", href: "/insurance/travel/senior" },
      { name: "Annual Multi Trip", href: "/insurance/travel/annual" },
      { name: "Family Travel Insurance", href: "/insurance/travel/family" },
    ],
  },
}

const claimItems = [
  { name: "Contact Us", href: "/contact" },
  { name: "Roadside Assistance", href: "/claims/roadside" },
]

export function Navbar() {
  const [insuranceOpen, setInsuranceOpen] = useState(false)
  const [claimOpen, setClaimOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [appsPanelOpen, setAppsPanelOpen] = useState(false) // ✅ NEW: 9-dot panel state

  const insuranceRef = useRef<HTMLDivElement>(null)
  const claimRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (insuranceRef.current && !insuranceRef.current.contains(event.target as Node)) {
        setInsuranceOpen(false)
        setExpandedCategory(null)
      }
      if (claimRef.current && !claimRef.current.contains(event.target as Node)) {
        setClaimOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const categoryRoutes: Record<string, string> = {
    motor: "/insurance/motor",
    health: "/insurance/health",
    business: "/insurance/business",
    travel: "/insurance/travel",
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
            <img src="/Insura_white_logo.png" alt="INSURA.ae" className="h-15" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium">
              About Us
            </Link>

            {/* Insurance Dropdown */}
            <div ref={insuranceRef} className="relative">
              <button
                onClick={() => {
                  setInsuranceOpen(!insuranceOpen)
                  setClaimOpen(false)
                }}
                className="flex items-center gap-1 text-foreground hover:text-primary font-medium"
              >
                Insurance
                {insuranceOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>

              {insuranceOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border min-w-[300px] py-2">
                  {Object.entries(insuranceCategories).map(([key, category]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50">

                        {/* ✅ ONLY Motor is clickable */}
                        {key === "motor" ? (
                          <Link
                            href={categoryRoutes[key]}
                            className="font-medium text-foreground hover:text-primary"
                            onClick={() => {
                              setInsuranceOpen(false)
                              setExpandedCategory(null)
                            }}
                          >
                            {category.title}
                          </Link>
                        ) : (
                          <span className="font-medium text-foreground cursor-default">
                            {category.title}
                          </span>
                        )}

                        {/* Expand button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleCategory(key)
                          }}
                        >
                          {expandedCategory === key ? (
                            <Minus className="w-4 h-4 text-primary" />
                          ) : (
                            <Plus className="w-4 h-4 text-primary" />
                          )}
                        </button>
                      </div>

                      {expandedCategory === key && (
                        <div className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border min-w-[280px] py-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-6 py-3 text-foreground hover:bg-gray-50 hover:text-primary"
                              onClick={() => {
                                setInsuranceOpen(false)
                                setExpandedCategory(null)
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Claim Dropdown */}
            <div ref={claimRef} className="relative">
              <button
                onClick={() => {
                  setClaimOpen(!claimOpen)
                  setInsuranceOpen(false)
                }}
                className="flex items-center gap-1 text-foreground hover:text-primary font-medium"
              >
                Claim
                {claimOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>

              {claimOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border min-w-[200px] py-2">
                  {claimItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-foreground hover:bg-gray-50 hover:text-primary"
                      onClick={() => setClaimOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/renew" className="text-foreground hover:text-primary font-medium">
              Renew
            </Link>
            <Link href="/blogs" className="text-foreground hover:text-primary font-medium">
              Blogs
            </Link>
          </div>

          {/* Social Icons & Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="https://www.facebook.com/insura.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>

              <Link
                href="https://x.com/Insuraae"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/insura-ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.instagram.com/insuraae/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UC6ZzXNkqiN0sQAJ4w0NNBZA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>

            <Link
              href="https://api.whatsapp.com/send?phone=971585229332&text=%22Hello!%20Thank%20you%20for%20reaching%20out%20to%20insura.%20We%27re%20here%20to%20help%20you%20with%20all%20your%20insurance%20needs.%20How%20can%20we%20assist%20you%20today%3F%22%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact Us
            </Link>

            {/* Grid Menu Icon (9-dot) */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setAppsPanelOpen(true)} // ✅ open slide panel
              aria-label="Open info panel"
            >
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-foreground rounded-full" />
                ))}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="px-4 py-2 text-foreground hover:text-primary font-medium">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 text-foreground hover:text-primary font-medium">
                About Us
              </Link>
              <div className="px-4">
                <button
                  onClick={() => setInsuranceOpen(!insuranceOpen)}
                  className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium"
                >
                  Insurance
                  <ChevronDown className={`w-4 h-4 transition-transform ${insuranceOpen ? "rotate-180" : ""}`} />
                </button>
                {insuranceOpen && (
                  <div className="pl-4 py-2 space-y-2">
                    {Object.entries(insuranceCategories).map(([key, category]) => (
                      <div key={key}>
                        <button
                          onClick={() => toggleCategory(key)}
                          className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary"
                        >
                          {category.title}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${expandedCategory === key ? "rotate-180" : ""}`}
                          />
                        </button>
                        {expandedCategory === key && (
                          <div className="pl-4 space-y-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block py-1 text-sm text-gray-600 hover:text-primary"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/claims" className="px-4 py-2 text-foreground hover:text-primary font-medium">
                Claim
              </Link>
              <Link href="/renew" className="px-4 py-2 text-foreground hover:text-primary font-medium">
                Renew
              </Link>
              <Link href="/blogs" className="px-4 py-2 text-foreground hover:text-primary font-medium">
                Blogs
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=971585229332&text=%22Hello!%20Thank%20you%20for%20reaching%20out%20to%20insura.%20We%27re%20here%20to%20help%20you%20with%20all%20your%20insurance%20needs.%20How%20can%20we%20assist%20you%20today%3F%22%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Slide-in PANEL for 9-dot button */}
      {/* Overlay */}
<div
  onClick={() => setAppsPanelOpen(false)}
  className={`fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
    appsPanelOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
/>

<div
  className={`fixed top-0 right-0 z-[60] h-full w-full sm:w-[380px] max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
    appsPanelOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close button */}
  <button
    onClick={() => setAppsPanelOpen(false)}
    className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100"
    aria-label="Close panel"
  >
    <X className="h-4 w-4" />
  </button>

  {/* Content */}
  <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-10">
    {/* Logo */}
    <div className="mb-6 flex justify-center">
      <img
        src="/Insura_white_logo.png"
        alt="INSURA.ae"
        className="h-16"
      />
    </div>

    {/* Text */}
    <p className="mb-8 text-[13px] leading-relaxed text-slate-700">
      insura has got your back with the best coverage at competitive rates. Our
      team of agents makes policy comparison easy and hassle‑free on our
      user‑friendly platform. Say goodbye to complex jargon and paperwork. With
      our seamless, user‑friendly platform, you&apos;ll be able to easily compare
      policies and make the best decision for you and your family.
    </p>

    {/* Contact block */}
    <div className="mt-auto space-y-4 text-[13px] text-slate-800">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[#06396B]">
          <MapPin className="h-3.5 w-3.5" />
        </span>
        <p className="leading-snug">
          Office #419, 4th Floor, Street #10, Al Nasr Plaza Office Tower, Oud
          Metha – Dubai – United Arab Emirates
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[#06396B]">
          <Phone className="h-3.5 w-3.5" />
        </span>
        <Link
          href="tel:+97143574547"
          className="text-[13px] font-medium text-slate-900 hover:text-[#06396B]"
        >
          04-357-4547
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[#06396B]">
          <Mail className="h-3.5 w-3.5" />
        </span>
        <Link
          href="mailto:support@insura.ae"
          className="text-[13px] font-medium text-slate-900 hover:text-[#06396B]"
        >
          support@insura.ae
        </Link>
      </div>
    </div>
  </div>
</div>

    </header>
  )
}

export default Navbar
