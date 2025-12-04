"use client";
import { useState } from "react"
import { PageHero } from "@/components/ui/page-hero"
import { Search, Calendar, ArrowRight, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "15 Fun Things To Do in Dubai on the UAE National Holiday",
    excerpt:
      "The UAE National Holiday is almost here, and the rush to plan something fun always hits. From fireworks to family activities, here are some of the best ways to celebrate in Dubai.",
    date: "December 1, 2025",
    image: "/articles/a4.webp",
    slug: "15-fun-things-to-do-in-dubai-on-uae-national-holiday",
  },
  {
    id: 2,
    title: "Why Is the Insurance Market Rising in Dubai?",
    excerpt:
      "Dubai is a destination that fosters the development of dreams into employment, yet these opportunities come with significant responsibility. Here’s why insurance demand is growing.",
    date: "November 24, 2025",
    image: "/articles/a1.png",
    slug: "why-is-the-insurance-market-rising-in-dubai",
  },
  {
    id: 3,
    title: "How to Check Insurance Status Online in the UAE?",
    excerpt:
      "Imagine you tried to file an emergency medical claim and ended up finding that your policy isn’t active. Learn exactly how to check your insurance status online in the UAE.",
    date: "November 17, 2025",
    image: "/articles/a2.png",
    slug: "how-to-check-insurance-status-online-in-the-uae",
  },
  {
    id: 4,
    title: "Proven Tips For Jobbers To Manage Personal Finance In The UAE",
    excerpt:
      "Managing money on a variable income can be tricky. These proven tips will help jobbers in the UAE handle budgeting, savings, and debt more confidently.",
    date: "November 10, 2025",
    image: "/articles/a3.jpg",
    slug: "proven-tips-for-jobbers-to-manage-personal-finance-in-the-uae",
  },
  {
    id: 5,
    title: "13 Best Earning App in UAE: How to Make and Protect Your Side Income",
    excerpt:
      "Side hustles are easier than ever with earning apps. Discover the best apps in the UAE to grow – and protect – your extra income.",
    date: "November 4, 2025",
    image: "/articles/a5.webp",
    slug: "13-best-earning-app-in-uae-how-to-make-and-protect-your-side-income",
  },
  {
    id: 6,
    title: "9 Important Tips For UAE Road Trips During Rainy Days",
    excerpt:
      "Rain in the UAE may be rare, but it changes driving conditions dramatically. Here are essential safety tips for your next rainy-day road trip.",
    date: "October 23, 2025",
    image: "/articles/a6.webp",
    slug: "9-important-tips-for-uae-road-trips-during-rainy-days",
  },
  {
    id: 7,
    title: "Which is the Best Health Insurance for UAE Visitors?",
    excerpt:
      "If you’re visiting the UAE, choosing the right health insurance plan is crucial. Understand coverage options, limits, and how to pick the best policy.",
    date: "October 7, 2025",
    image: "/articles/a6.webp",
    slug: "which-is-the-best-health-insurance-for-uae-visitors",
  },
  {
    id: 8,
    title: "How to Find the Best Travel Insurance Consultants in the UAE",
    excerpt:
      "Even the best planned tours can backfire with unexpected uncertainties. Here’s how to choose trustworthy travel insurance consultants in the UAE.",
    date: "September 29, 2025",
    image: "/articles/a7.webp",
    slug: "how-to-find-the-best-travel-insurance-consultants-in-the-uae",
  },

    {
    id: 9,
    title: "How to Find the Best Travel Insurance Consultants in the UAE",
    excerpt:
      "Even the best planned tours can backfire with unexpected uncertainties. Here’s how to choose trustworthy travel insurance consultants in the UAE.",
    date: "September 29, 2025",
    image: "/articles/a7.webp",
    slug: "how-to-find-the-best-travel-insurance-consultants-in-the-uae",
  },

    {
    id: 10,
    title: "How to Find the Best Travel Insurance Consultants in the UAE",
    excerpt:
      "Even the best planned tours can backfire with unexpected uncertainties. Here’s how to choose trustworthy travel insurance consultants in the UAE.",
    date: "September 29, 2025",
    image: "/articles/a7.webp",
    slug: "how-to-find-the-best-travel-insurance-consultants-in-the-uae",
  },
]

const recentPosts = blogPosts.slice(0, 5)

const categories = [
  { name: "Bike Insurance", count: 2 },
  { name: "Business Insurance", count: 14 },
  { name: "Car Insurance", count: 29 },
  { name: "Health Insurance", count: 37 },
  { name: "Insurance", count: 14 },
  { name: "Life Insurance", count: 15 },
  { name: "Motor Insurance", count: 2 },
  { name: "Third Party Liability insurance", count: 3 },
  { name: "Travel Insurance", count: 13 },
  { name: "Workmen Compensation Insurance", count: 2 },
]

export default function BlogsPage() {
  const postsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <main>
      <PageHero breadcrumb="Blogs" title="Blogs" />

      <section className="py-16 bg-[#f7fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* LEFT BLOG POSTS */}
            <div className="lg:col-span-2 space-y-10">
              {currentPosts.map((post) => (
                <article key={post.id} className="bg-white border border-[#e5edf2] rounded-md shadow-sm overflow-hidden">
                <img 
                  src={post.image} 
                  className="w-full h-auto object-contain bg-[#f1f5f9]" 
                />
                  <div className="px-6 pb-6 pt-4">
                    <div className="inline-flex items-center gap-2 bg-[#0b4a86] text-white text-[12px] px-4 py-2 rounded-md mb-4">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>

                    <h2 className="text-[20px] md:text-[22px] font-semibold text-[#011627] mb-3">
                      <Link href={`/blogs/${post.slug}`} className="hover:text-[#0b4a86]">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-[14px] text-[#5b6c80] mb-5">
                      {post.excerpt}
                    </p>

                    <Link href={`/blogs/${post.slug}`} className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#011627] bg-white border border-[#e0e7ee] rounded-full px-5 py-2 hover:bg-[#0b4a86] hover:text-white transition">
                      Continue Reading <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="mt-10 border border-[#0b4a86] rounded-md px-5 py-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-9 h-9 rounded-full border border-[#0b4a86] flex items-center justify-center 
                    ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white"}`}>
                    ←
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1
                    if (page === 1 || page === totalPages || Math.abs(currentPage - page) <= 1) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold 
                          ${currentPage === page 
                            ? "bg-[#0b4a86] text-white" 
                            : "border border-[#0b4a86] text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white"}`}>
                          {page}
                        </button>
                      )
                    }
                    if (page === currentPage - 2 || page === currentPage + 2)
                      return <span key={page} className="text-[#0b4a86] font-semibold">...</span>
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-9 h-9 rounded-full border border-[#0b4a86] flex items-center justify-center 
                    ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white"}`}>
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-8">

              {/* Search */}
              <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
                <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Search</h3>
                <div className="flex rounded-md overflow-hidden border border-[#eef3f7]">
                  <input className="flex-1 bg-[#fafcfd] px-4 py-3 text-sm focus:outline-none" type="text" />
                  <button className="w-11 bg-[#033b7c] flex items-center justify-center">
                    <Search className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
                <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="flex gap-3">
                      <div className="w-[70px] h-[70px] overflow-hidden rounded-md">
                        <img src={post.image} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <Link href={`/blogs/${post.slug}`} className="text-[14px] font-semibold hover:text-[#0b4a86]">
                          {post.title}
                        </Link>
                        <div className="text-[12px] flex items-center gap-2 text-[#6b7b8f]">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
                <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button key={cat.name} className="w-full bg-[#f8fbfd] px-4 py-3 text-[14px] rounded-md flex justify-between hover:bg-[#e9f3fb]">
                      {cat.name} ({cat.count}) <ChevronRight />
                    </button>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
                <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#d7deeb] flex items-center justify-center text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white transition">
                    <Facebook className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#d7deeb] flex items-center justify-center text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white transition">
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#d7deeb] flex items-center justify-center text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white transition">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#d7deeb] flex items-center justify-center text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white transition">
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#d7deeb] flex items-center justify-center text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white transition">
                    <Youtube className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
