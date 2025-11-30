"use client"

import Image from "next/image"

const articles = [
  {
    date: "Nov 24, 2025",
    title: "Why Is the Insurance Market Rising in Dubai?",
    image: "/articles/a1.png",
    excerpt:
      "Why is the Insurance Market Rising in Dubai? Dubai is a destination that fosters the development of dreams into employment...",
  },
  {
    date: "Nov 17, 2025",
    title: "How to Check Insurance Status Online in the UAE?",
    image: "/articles/a2.png",
    excerpt:
      "How to Check Insurance Status Online in the UAE? Imagine you tried to file an emergency medical claim and ended up...",
  },
  {
    date: "Nov 10, 2025",
    title: "Proven Tips For Jobbers To Manage Personal Finance In The UAE",
    image: "/articles/a3.jpg",
    excerpt:
      "Proven Tips For Jobbers To Manage Personal Finance In The UAEManaging personal finance in the UAE isn't just about counting...",
  },
]

export default function ArticlesSection() {
  return (
    <>
      {/* Articles Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
            Read Our Latest Articles
          </h2>

          <div className="w-24 h-[2px] bg-gray-300 mx-auto mb-10 sm:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {articles.map((article, i) => (
              <div key={i} className="text-left">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="rounded-md object-cover w-full h-[220px] md:h-[260px]"
                />

                <p className="text-[11px] text-gray-500 mt-3">{article.date}</p>

                <h3 className="text-base md:text-lg font-bold text-[#0A2342] mt-1">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {article.excerpt}
                </p>

                <a className="text-[#0052FF] text-sm font-medium mt-3 inline-flex items-center gap-1 cursor-pointer">
                  Read More <span className="text-[12px]">➜</span>
                </a>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12 md:mt-14 text-sm">
            <button className="w-7 h-7 rounded-full bg-[#0052FF] text-white">01</button>
            <button className="w-7 h-7 rounded-full text-gray-600 border border-gray-300">02</button>
            <button className="w-7 h-7 rounded-full text-gray-600 border border-gray-300">03</button>
            <span className="mx-2 text-gray-500">…</span>
            <button className="w-7 h-7 rounded-full border border-gray-300 text-gray-600">043</button>
          </div>

          <div className="mt-12 md:mt-14 h-[1px] bg-gray-300 w-full"></div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">

        {/* Hide background decorations on small screens (prevents overlap) */}
        <Image
          src="/subscription/pattern-left.png"
          width={240}
          height={240}
          alt="pattern-left"
          className="absolute bottom-0 left-0 hidden md:block"
        />

        <Image
          src="/subscription/pattern-right.png"
          width={270}
          height={220}
          alt="pattern-right"
          className="absolute bottom-0 right-0 opacity-20 hidden md:block"
        />

        <Image
          src="/noodles-arrow.png"
          width={40}
          height={40}
          alt="curve"
          className="absolute right-[35%] top-[35%] hidden md:block"
        />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative text-center md:text-left">

          <p className="text-[11px] sm:text-[12px] font-semibold text-[#0052FF] mb-2">
            Subscribe for free
          </p>

          <h2 className="text-xl sm:text-[26px] md:text-[32px] font-bold leading-snug text-[#0A2342] max-w-[550px] mx-auto md:mx-0">
            Join our email subscription now to get updates and notifications.
          </h2>

        </div>
      </section>
    </>
  )
}
