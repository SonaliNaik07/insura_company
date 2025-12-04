import { Search, Banknote, Ambulance, User, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main>
      {/* ABOUT PAGE HERO */}
<section className="relative bg-primary overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/family1.jpg"
      alt="About Hero"
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary/90 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="max-w-xl">
      <div className="flex items-center gap-2 text-white/80 mb-4">
        <span>insura.ae</span>
        <span className="w-2 h-2 bg-primary rounded-full" />
        <span>About Us</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        About Us
      </h1>

      <p className="text-white/80 text-lg">
        Need any type of insurance policies over the world you can contact us
        without any hesitation. Our expert support team will help you.
      </p>
    </div>
  </div>
</section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Insura.ae</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Welcome to <strong className="text-foreground">Insura.ae Powered by Pioneer</strong> – the insurance broker company that's got you covered! We are a leading insurance broker company based in the UAE since 1990. We provide a comprehensive range of insurance products and services to individuals, families, and businesses. Our mission is to help our clients protect themselves and their assets from risks while providing them peace of mind and financial security.
                </p>
                <p className="mb-4">
                  We understand that insurance can be complicated, which is why we strive to make the process as simple and transparent as possible. Our team of experienced insurance professionals is dedicated to helping our clients navigate the complex world of insurance and find the best coverage to meet their unique needs and budget.
                </p>
                <p className="mb-4">
                  At Insura.ae Powered by Pioneer, we are passionate about making insurance accessible to everyone, which is why we offer a wide range of insurance policies and services at competitive prices with a bare minimum of time. Whether you need health insurance, life insurance, home insurance, car insurance, or business insurance,  We're excited to help you protect what matters most, and we can't wait to welcome you to the Insura.ae Powered by Pioneer family
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Goal and Vision</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">At Insura.ae Powered by PIONEER we are driven by a simple yet powerful vision: to make insurance accessible to everyone. We believe that insurance should be more than just a product that you buy to fulfill a legal requirement. It should be a tool that empowers you to protect what matters most to you – your health, your family, your home, your business, and your dreams.</p>
                  <p className="mb-4">We are committed to building long-lasting relationships with our customers based on trust, transparency, and respect. We want to be your partner in navigating the complex world of insurance, providing you with the knowledge and resources you need to make informed decisions about your coverage.</p>
                </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">We are committed to building long-lasting relationships with our customers based on trust, transparency, and respect ultimate customer service in their cliam, We want to be your partner in navigating the complex world of insurance, providing you with the knowledge and resources you need to make informed decisions about your coverage.</p>
                  <p className="mb-4">Join us on our mission to democratize insurance and protect what matters most. Let us be your guide, your advocate, and your ally in the journey of life.</p>
                </div>

                {/* Image Section */}
<div className="mt-10 mb-40">
  <img
    src="/family3.jpg"
    alt="Protect What You Love with Insura.ae"
    className="w-full object-cover"
  />
</div>

<hr className="mt-10 border-black" />

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search Box */}
                <div className="flex w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Searching Here..."
                    className="flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-4 py-3 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>

{/* Our Insurance Card (New Design) */}
<div className="bg-[oklch(0.32_0.08_248)] rounded-lg p-4 lg:p-8">
  <h3 className="text-2xl font-bold text-white mb-3">
    Our Insurance
  </h3>

  <ul className="space-y-3">
    {[
      { name: "Travel Insurance", href: "/insurance/travel" },
      { name: "Life Insurance", href: "/insurance/health/life" },
      { name: "House Insurance", href: "/insurance/house" },
      { name: "Car Insurance", href: "/insurance/motor" },
      { name: "Health Insurance", href: "/insurance/health" },
    ].map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className="
            flex items-center justify-between
            bg-white
            px-6 py-3
            rounded-lg
            text-secondary font-semibold
            hover:bg-gray-100
            transition
          "
        >
          <span>{item.name}</span>
          <span className="text-xl">→</span>
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Download Card */}
<div className="bg-[oklch(0.32_0.08_248)] rounded-lg p-4 lg:p-6">
  <h3 className="text-2xl font-bold text-white mb-4">
    Download
  </h3>

  <a
    href="/Insura-Company-profile-1.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center justify-between
      bg-white
      px-5 py-4
      rounded-lg
      font-semibold
      text-primary
      hover:bg-gray-100
      transition
    "
  >
    <span>Download Brochure</span>

    {/* Download Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
      />
    </svg>
  </a>
</div>

{/* Contact CTA Card */}
<div className="relative rounded-lg overflow-hidden shadow-md">
  {/* Background Image */}
  <img
    src="/oldlady.jpg"
    alt="Contact Support"
    className="w-full h-[520px] object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Vertical Name Tag */}
  <div className="absolute top-6 right-0 bg-secondary px-3 py-4">
    <span className="text-white font-semibold tracking-wide rotate-90 block origin-bottom-right">
      Jessica Brown
    </span>
  </div>

  {/* Content */}
  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
    <h3 className="text-2xl font-bold leading-tight mb-4">
      Make your dream <br />
      life get professional <br />
      help
    </h3>

    <div className="flex items-center gap-4 mt-4">
      {/* Phone Icon */}
      <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-1.272.636a11.042 11.042 0 005.516 5.516l.636-1.272a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>

      {/* Phone Number */}
      <a
        href="tel:+97143574547"
        className="text-xl font-bold tracking-wide hover:underline"
      >
        +971 4 357 4547
      </a>
    </div>
  </div>
</div>

{/* Why Pick Insura */}
<div className="bg-[oklch(0.32_0.08_248)] rounded-xl p-6 text-center">
  <h3 className="text-xl font-bold text-white mb-6 leading-snug">
    Why Pick Insura Your <br /> Insurance Provider?
  </h3>

  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
    {/* Affordable Coverage */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-3">
        <Banknote className="w-8 h-8 text-primary" />
      </div>
      <p className="text-sm text-white/90 font-medium">
        Affordable <br /> Coverage
      </p>
    </div>

    {/* Premium Medical */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-3">
        <Ambulance className="w-8 h-8 text-primary" />
      </div>
      <p className="text-base text-primary/90 font-medium">
        Premium Medical <br /> Treatment Access
      </p>
    </div>

    {/* 24/7 Support */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3">
<div className="relative w-8 h-8 text-primary">
  <User className="w-8 h-8" />
  <Clock className="w-3 h-3 absolute -bottom-1 -right-1 bg-white rounded-full p-[1px]" />
</div>      </div>
      <p className="text-base text-primary/90 font-medium">
        24/7 <br /> Support
      </p>
    </div>

    {/* Instant Claim */}
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3">
        <CheckCircle className="w-8 h-8 text-primary" />
      </div>
      <p className="text-base text-primary/90 font-medium">
        Instant Claim <br /> Processing
      </p>
    </div>
  </div>

  {/* CTA */}
  <Link
    href="/insurance"
    className="
      mt-6 inline-block
      bg-white
      text-primary
      px-6 py-3
      rounded-lg
      font-semibold
      hover:bg-gray-100
      transition
    "
  >
    Buy Your Insurance Now!
  </Link>
</div>
          </div>
        </div>
        </div>
      </section>
    </main>
  )
}