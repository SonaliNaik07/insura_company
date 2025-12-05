import Link from "next/link"
import { Search, Banknote, Ambulance, User, Clock, CheckCircle } from "lucide-react"

export function Sidebar() {

  const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00284B" className="w-8 h-8">
    <path d="M4 22V2h16v20h-7v-6h-2v6H4zm4-4h2v-2H8v2zm0-4h2v-2H8v2zm0-4h2V8H8v2zm0-4h2V4H8v2zm4 8h2v-2h-2v2zm0-4h2V8h-2v2zm0-4h2V4h-2v2zm4 12h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V8h-2v2zm0-4h2V4h-2v2z"/>
  </svg>
);

const UserCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="#00284B"
    className="w-8 h-8"
  >
    <circle cx="24" cy="20" r="12" />
    <path d="M24 36c-10 0-20 6-20 14v4h28v-4c0-3.5 1.4-6.8 3.8-9.4C32.8 37.7 28.6 36 24 36z" />
    <path d="M50 28l-10 10-4-4-4 4 8 8 14-14-4-4z" />
  </svg>
)


const UserClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00284B" className="w-8 h-8">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
    1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 
    1.34-8 4v2h9.5a5.5 5.5 0 0 1 7.5-7.5V14h-3v2h5v-5h-2v1.53A5.48 
    5.48 0 0 1 12 14z"/>
  </svg>
);

const PeaceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="#00284B"
    className="w-8 h-8"
  >
    <path d="M40 6c-3 0-6 3-6 6v16h-4V10c0-3-3-6-6-6s-6 3-6 6v28l-3-4c-2-3-7-2-8 1-1 2 0 4 1 6l8 14v5c0 7 6 12 12 12h14c6 0 12-5 12-12V20c0-3-3-6-6-6s-6 3-6 6v8h-4V12c0-3-3-6-6-6z" />
  </svg>
);




  return (
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
      { name: "Car Insurance", href: "/insurance/motor/car" },
      { name: "Health Insurance", href: "/insurance/health/health" },
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
    href="https://insura.ae/wp-content/uploads/2024/08/Insura-Company-profile-1.pdf"
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
    src="/grand1.avif"
    alt="Contact Support"
    className="w-full h-[520px] object-cover"
  />


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
<div className="bg-white rounded-xl p-6 shadow-md text-center">

  {/* BLUE HEADER */}
  <div className="bg-[oklch(0.32_0.08_248)] text-white rounded-lg px-4 py-4 mb-6">
    <h3 className="text-xl font-bold leading-snug">
      Reason's to choose <br /> iNSURA.ae powered by PIONEER?
    </h3>
  </div>

  {/* ICON GRID */}
  <div className="grid grid-cols-2 gap-y-10 gap-x-4">

    {/* FIRST COLUMN - BUILDING */}
    <div className="flex flex-col items-center">
      <img
        src="/icons/building.png"
        alt="Building Icon"
        className="w-16 h-16 object-contain mb-3"
      />
      <p className="text-sm text-primary font-medium leading-relaxed">
        Collab with 100+ <br /> Insurance Companies
      </p>
    </div>

    {/* SECOND COLUMN - USER CHECK */}
    <div className="flex flex-col items-center">
      <img
        src="/icons/user-check.png"
        alt="User Check Icon"
        className="w-16 h-16 object-contain mb-3"
      />
      <p className="text-sm text-primary font-medium leading-relaxed">
        Trusted by <br /> 1,00,000+ policyholders
      </p>
    </div>

    {/* THIRD COLUMN - USER CLOCK */}
    <div className="flex flex-col items-center">
      <img
        src="/icons/user-clock.jpg"
        alt="24/7 Support Icon"
        className="w-16 h-16 object-contain mb-3"
      />
      <p className="text-sm text-primary font-medium leading-relaxed">
        24x7 Insurance <br /> Support
      </p>
    </div>

    {/* FOURTH COLUMN - PEACE HAND */}
    <div className="flex flex-col items-center">
      <img
        src="/icons/peaceIcon.jpg"
        alt="Peace Hand Icon"
        className="w-16 h-16 object-contain mb-3"
      />
      <p className="text-sm text-primary font-medium leading-relaxed">
        Hassle Free <br /> Process
      </p>
    </div>

  </div>

  {/* CTA BUTTON */}
  <Link
    href="/insurance"
    className="mt-8 inline-block bg-[oklch(0.32_0.08_248)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[oklch(0.32_0.08_228)] transition"
  >
    Buy Your Insurance Now!
  </Link>

</div>



          </div>
  )
}