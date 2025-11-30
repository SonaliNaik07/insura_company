"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function TestimonialsAndPartners() {

  const logos = [
    "/logo/w1.webp", "/logo/w2.webp", "/logo/w3.webp", "/logo/w4.webp",
    "/logo/w5.webp", "/logo/w6.webp", "/logo/w7.png", "/logo/w8.webp",
    "/logo/w9.webp", "/logo/w10.webp"
  ]

  const testimonials = [
    {
      name: "Romy Mathew",
      review: "Excellent support and timely update. Thanks to Aakash Jadham. @health insurance",
      date: "2024-08-09",
      avatar: "/avatar.png"
    }
  ]

  return (
    <>
      {/* ---------- TESTIMONIALS SECTION ---------- */}
      <section className="pt-20 pb-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row justify-between gap-10 items-center lg:items-start">

          {/* LEFT */}
          <div className="max-w-[500px] text-center lg:text-left">
            <p className="text-[#0052FF] text-lg lg:text-xl font-semibold mb-3">Testimonials</p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A2342] leading-snug mb-10">
              See what our customers <br /> have to say about us
            </h2>

            {/* Review Card */}
            <div className="bg-[#F6F8FB] border border-[#E5E9F2] rounded-xl p-6 md:p-7 shadow-sm">
              <p className="text-sm leading-relaxed text-[#3A4750] mb-4">
                {testimonials[0].review}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <Image src={testimonials[0].avatar} width={36} height={36} className="rounded-full" alt="customer" />
                  <div className="text-xs">
                    <p className="font-semibold text-[#0A2342]">{testimonials[0].name}</p>
                    <p className="text-gray-500 text-[11px]">{testimonials[0].date}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="hidden lg:flex w-7 h-7 border border-gray-300 rounded-full items-center justify-center">
                    <ChevronLeft size={14} className="text-[#0A2342]" />
                  </button>
                  <button className="hidden lg:flex w-7 h-7 border border-gray-300 rounded-full items-center justify-center">
                    <ChevronRight size={14} className="text-[#0A2342]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] mx-auto">
            <Image
              src="/testimonal.png"
              alt="support-agent"
              width={460}
              height={520}
              className="relative z-10 w-full h-auto object-contain left-2/9"
            />

            {/* Rotating Clover */}
            <Image
              src="/icons/Group.png"
              alt="clover-decoration"
              width={120}
              height={180}
              className="absolute -top-6 sm:-top-4 md:-top-2 left-1/2 -translate-x-1/2 lg:left-auto lg:top-8 lg:-right-55 rotate-slow opacity-90 z-0"
            />

            {/* Rating Card */}
            <div className="rating-card absolute bottom-3 lg:bottom-[40px] left-1/2 -translate-x-1/2 lg:left-auto lg:right-[180px] bg-[#002D62] text-white w-[130px] md:w-[160px] h-[130px] md:h-[160px] rounded-xl shadow-lg flex flex-col items-center justify-center z-20 opacity-0 translate-y-6 animate-slideUp">
              <div className="bg-[#0052FF] w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-3">
                <Image src="/icons/handshake.png" alt="rating-icon" width={22} height={22} />
              </div>
              <p className="text-[22px] md:text-[28px] font-bold leading-none">4.9</p>
              <p className="text-[11px] md:text-[13px] text-white/80 mt-1">Avg Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUSTED PARTNERS SECTION ---------- */}
      <section className="pt-10 pb-20 bg-white relative overflow-hidden">
        <Image
          src="/icons/testimonial_right_img.png"
          alt="Decoration"
          width={110}
          height={110}
          className="absolute left-5 top-5 opacity-90 hidden md:block"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">

          <div className="w-full lg:w-1/3 lg:pl-10 text-center lg:text-left">
            <p className="text-gray-900 mb-2 font-semibold text-[17px]">Our Trusted</p>
            <h2 className="text-[28px] md:text-[34px] font-extrabold leading-[1.15] text-blue-500">
              Insurance <br /> companies
            </h2>
          </div>

          <div className="hidden lg:block h-16 w-[2px] bg-gray-300/50"></div>

          <div className="w-full lg:w-2/3">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={900}
              spaceBetween={16}
              slidesPerView={2}
              breakpoints={{
                500: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
              }}
            >
              {logos.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-[70px] md:h-[90px]">
                    <Image
                      src={src}
                      alt={`Insurance Logo ${index + 1}`}
                      width={160}
                      height={90}
                      className="object-contain w-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* Animation */}
      <style jsx global>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotate-slow {
          animation: spinSlow 50s linear infinite;
        }

        @keyframes slideUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </>
  )
}
