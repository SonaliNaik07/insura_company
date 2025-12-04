// app/insurance/motor/page.tsx

import { Car, Bike, Truck, ShieldCheck, Umbrella, HeartHandshake, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import React from "react"

// app/insurance/motor/page.tsx

type MotorCard = {
  image: string
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const motorCards: MotorCard[] = [
  {
    image: "/car2.webp",
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Car Insurance",
    description:
      "Drive with confidence knowing iNSURA.ae has you covered with top-tier car insurance, ensuring you're protected on every journey.",
    href: "/insurance/motor/car",
  },
  {
    image: "/bike1.webp",
    icon: <Bike className="w-8 h-8 text-primary" />,
    title: "Bike Insurance",
    description:
      "Protect your two-wheeler against accidents, theft, and third-party damages with reliable coverage across the UAE.",
    href: "/insurance/motor/bike",
  },
  {
    image: "/fleet2.webp",
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Fleet Insurance",
    description:
      "Comprehensive insurance solutions designed for businesses managing multiple vehicles under one policy.",
    href: "/insurance/motor/fleet",
  },
  {
    image: "/agency1.webp",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Agency Insurance",
    description:
      "Secure your vehicle with confidence knowing iNSURA.ae has you covered with top-tier agency insurance, ensuring your investment is protected.",
    href: "/insurance/motor/agency",
  },
  {
    image: "/vehicle1.webp",
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "New Vehicle Insurance",
    description:
      "Drive your new vehicle with confidence knowing iNSURA.ae has you covered with premium insurance protection from day one.",
    href: "/insurance/motor/new-vehicle",
  },
  {
    image: "/full1.webp",
    icon: <Umbrella className="w-8 h-8 text-primary" />,
    title: "Full Insurance",
    description:
      "Drive with confidence knowing iNSURA.ae has you covered with top-tier full insurance, ensuring you're protected on every journey.",
    href: "/insurance/motor/full-insurance",
  },
  {
  image: "/third1.webp",
  icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  title: "Third Party Liability Insurance",
  description:
    "Drive with confidence knowing iNSURA.ae has you covered with top-tier third-party insurance, ensuring you're protected on every journey.",
  href: "/insurance/motor/third-party",
},
{
  image: "/commercial1.webp",
  icon: <Truck className="w-8 h-8 text-primary" />,
  title: "Commercial Insurance",
  description:
    "Operate with confidence knowing iNSURA.ae has you covered with top-tier commercial insurance, ensuring your business is protected on every journey, no matter the challenges you face.",
  href: "/insurance/motor/commercial",
},
]

export default function MotorInsurancePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] bg-primary overflow-hidden">
        <img
          src="/motor-hero.jpg"
          alt="Motor Insurance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <p className="text-sm mb-3 opacity-80">
            insura.ae <span className="mx-2">•</span> Motor
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Motor
          </h1>
          <p className="text-sm sm:text-lg max-w-xl leading-relaxed">
            Need any type of insurance policies over the world you can contact us
            without any hesitation. Our expert support team will help you.
          </p>
        </div>
      </section>

      {/* MOTOR INSURANCE CARDS */}
      <section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {motorCards.map((item) => (
    <Link
      key={item.title}
      href={item.href}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition"
    >
      {/* IMAGE BLOCK */}
      <div className="relative h-56">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* ARROW ICON — ABOVE IMAGE EDGE */}
        <span
          className="
            absolute right-6 bottom-[-22px]
            z-20
            inline-flex items-center justify-center
            w-11 h-11 rounded-full
            bg-white text-primary
            border border-primary
            shadow-md
            transform transition-all duration-300
            opacity-0 scale-75
            group-hover:opacity-100 group-hover:scale-100
            pointer-events-none
          "
        >
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>

      {/* ZIG-ZAG CUT – 5 POINTS */}
<div
  className="h-8 bg-white -mt-6"
  style={{
    clipPath:
      "polygon(0 45%, 25% 60%, 50% 45%, 75% 60%, 100% 45%, 100% 100%, 0 100%)",
  }}
/>



      {/* CONTENT */}
      <div className="px-6 pb-8 pt-6 text-left space-y-4">
        {/* ICON FLIP */}
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="inline-block transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
            {item.icon}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-foreground">
          {item.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </Link>
  ))}
</div>


  </div>
</section>


    </main>
  )
}