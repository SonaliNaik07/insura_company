import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* BIG CENTER HEADING (full width) */}
      <section className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold text-[#0d3eb0]">Contact Us</h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: FORM */}
          <div>
            {/* small left heading + description */}
            <h2 className="text-xl font-bold mb-2">Contact us</h2>
            <p className="text-sm text-gray-700 mb-6 max-w-xl">
              Leave the claim on us!! Get back on your feet quickly with our
              hassle-free claims process.
            </p>

            <form className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter full name..."
                  className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#f3f8ff] text-sm focus:outline-none focus:ring-2 focus:ring-[#1579ff]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="enter email id..."
                  className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#f3f8ff] text-sm focus:outline-none focus:ring-2 focus:ring-[#1579ff]"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="enter mobile number..."
                  className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#f3f8ff] text-sm focus:outline-none focus:ring-2 focus:ring-[#1579ff]"
                />
              </div>

              {/* Upload (only once) */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Upload Attachment
                </label>
                <input
                  type="file"
                  className="block text-sm
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-none file:border-0
                    file:bg-gray-200 file:text-black
                    file:font-semibold
                  "
                />
              </div>
               <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Upload Attachment
                </label>
                <input
                  type="file"
                  className="block text-sm
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-none file:border-0
                    file:bg-gray-200 file:text-black
                    file:font-semibold
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#1579ff] text-white text-sm font-semibold shadow-sm hover:bg-[#0f64d0] transition-colors"
              >
                Send Application
              </button>
            </form>
          </div>

         {/* RIGHT: CONTACT DETAILS */}
<div>
  <h2 className="text-xl font-bold mb-4 text-[#022B69]">
    Feel free to contact us
  </h2>

  <div className="space-y-4 text-[#022B69] text-[15px] leading-relaxed">

    {/* Phone */}
    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-black" />
      <span>04-357-4547</span>
    </div>

    {/* Email */}
    <div className="flex items-center gap-3">
      <Mail className="w-5 h-5 text-black" />
      <span>support@insura.ae</span>
    </div>

    {/* Address */}
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 mt-1 text-black" />
      <span>
        Office #419, 4th Floor, Street #10,<br />
        Al Nasr Plaza Office Tower, Oud Metha<br />
        Dubai, United Arab Emirates
      </span>
    </div>

  </div>
</div>

        </div>
      </section>
    </main>
  );
}
