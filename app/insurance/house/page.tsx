"use client";

import Link from "next/link";
import ServiceSidebar from "@/components/global/ServiceSidebar";
import FloatingActions from "@/components/global/FloatingActions";

export default function HouseInsurancePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Floating actions */}
      <FloatingActions />

      {/* HERO BANNER */}
      <section className="relative overflow-hidden min-h-[60vh] lg:min-h-[75vh]">
        {/* Background Image + Gradient */}
        <div className="absolute inset-0">
          <img
            src="/bg-Image3.jpg"
            alt="House Insurance"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#022647] via-[#022647]/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 sm:py-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 mb-5 text-sm">
            <Link href="/" className="hover:text-white">
              insura.ae
            </Link>
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="hover:text-white">House Insurance</span>
          </div>

          {/* Heading + Description */}
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              House Insurance
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Need any type of insurance policies over the world you can contact
              us without any hesitation. Our expert support team with help you.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GRID: LEFT (ALL CONTENT) + RIGHT (SIDEBAR) */}
      <section className="py-16 bg-white">
        {/* full-width image just under hero */}
        <div className="w-full">
          <img
            src="/group.webp"
            alt="Agent discussing Car Insurance - iNSURA.ae"
            className="w-full max-h-[460px] object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 mt-10">
          {/* LEFT COLUMN – ALL CONTENT */}
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-1 space-y-16 pb-12">
            {/* DESCRIPTION SECTION */}
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                Description of Car Insurance
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances in which toil and pain can
                procure.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Anyone who loves or pursues or desires to obtain pain of itself,
                because it is pain, but because occasionally circumstances in
                which toil and pain can procure.
              </p>

              {/* PLANS – TWO COLUMNS ON DESKTOP */}
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#06396B]">
                      1. International Plans
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Nemo enim ipsam voluptatem quia voluptas aspernatur odit
                      aut fugit.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#06396B]">
                      3. Student Study Plans
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Teprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#06396B]">
                      2. Domestic Plans
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Exercitationem ullam corporis suscipit laboriosam.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#06396B]">
                      4. Specialized Investigations
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      When our power of choice is untrammelled and when nothing
                      prevents.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AGENT + BENEFITS BLOCK */}
            <section className="space-y-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <img
                    src="/services-details-house.webp"
                    alt="Agent discussing Car Insurance - iNSURA.ae"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Our Technicians believe in the value that give you high
                    level of coaching techniques for your better life.
                  </p>

                  <ul className="space-y-2 text-sm md:text-base text-gray-800">
                    <li>✔ Fast &amp; Easy Process</li>
                    <li>✔ Quick Claim Handle</li>
                    <li>✔ Save Your Money</li>
                    <li>✔ Quality Health Insurance &amp; Care</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SERVICE BENEFITS */}
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#06396B]">
                Service Benefits
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment.
              </p>

              <ul className="space-y-2 text-sm md:text-base text-gray-800">
                <li>
                  ✔ When an unknown printer took a galley of type and scrambled.
                </li>
                <li>
                  ✔ When an unknown printer took a galley of type and scrambled.
                </li>
              </ul>
            </section>

            {/* STILL ANY QUERIES – CTA */}
            <section className="mt-4">
              <div className="w-full bg-[#F3F7FB] border border-gray-200 rounded-xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-base md:text-lg font-semibold text-[#06396B]">
                  Still Any Queries?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-[#06396B] text-white text-sm font-semibold shadow hover:bg-[#042c4f] transition"
                >
                  Get in Touch
                </Link>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR – SEPARATE, COMES AFTER LEFT ON MOBILE */}
          <aside className="col-span-12 lg:col-span-4 order-2 lg:order-2 space-y-6">
            {/* Our Services + Download (from shared ServiceSidebar) */}
            <div className="h-fit">
              <ServiceSidebar active="House Insurance" />
            </div>

            {/* Contact CTA Image */}
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <img
                src="/1.jpg"
                alt="Make your dream life get professional help"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                <p className="text-lg font-semibold leading-snug">
                  Make your dream life get professional help
                </p>
                <div className="text-xs uppercase tracking-wide">
                  Contact Us
                </div>
                <div className="text-sm font-semibold">+971 4 357 4547</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
