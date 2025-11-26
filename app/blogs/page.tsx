import { PageHero } from "@/components/ui/page-hero"
import { Search, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "How to Check Insurance Status Online in the UAE?",
    excerpt:
      "Learn the simple steps to verify your insurance policy status online. Stay informed about your coverage and ensure your protection is always active.",
    date: "Nov 17, 2025",
    image: "/person-checking-insurance-documents-on-laptop-comp.jpg",
    slug: "check-insurance-status-online-uae",
  },
  {
    id: 2,
    title: "Proven Tips For Jobbers To Manage Personal Finance",
    excerpt:
      "Managing personal finances as a job seeker can be challenging. Discover practical strategies to budget effectively and secure your financial future.",
    date: "Nov 10, 2025",
    image: "/young-professional-managing-finances-with-calculat.jpg",
    slug: "tips-jobbers-manage-personal-finance",
  },
  {
    id: 3,
    title: "13 Best Earning Apps in UAE",
    excerpt:
      "Looking for ways to earn extra income? Explore the top earning apps available in the UAE that can help you make money from your smartphone.",
    date: "Nov 4, 2025",
    image: "/smartphone-showing-earning-apps-money-finance.jpg",
    slug: "best-earning-apps-uae",
  },
  {
    id: 4,
    title: "Understanding Car Insurance in Dubai: A Complete Guide",
    excerpt:
      "Navigate the complexities of car insurance in Dubai with our comprehensive guide. Learn about coverage types, requirements, and how to choose the best policy.",
    date: "Oct 28, 2025",
    image: "/car-driving-on-dubai-highway-with-city-skyline.jpg",
    slug: "car-insurance-dubai-guide",
  },
  {
    id: 5,
    title: "Health Insurance Benefits Every UAE Resident Should Know",
    excerpt:
      "Maximize your health insurance benefits with these essential tips. Understand what's covered and how to make the most of your medical coverage.",
    date: "Oct 21, 2025",
    image: "/doctor-consulting-patient-in-modern-hospital.jpg",
    slug: "health-insurance-benefits-uae",
  },
]

export default function BlogsPage() {
  return (
    <main>
      <PageHero breadcrumb="Blogs" title="Blog" />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <h2 className="text-xl font-semibold text-card-foreground mb-3 hover:text-primary transition-colors">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search Box */}
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">Search</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Searching Here..."
                    className="flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-4 py-3 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* About Insura */}
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">About Insura.ae</h3>
                <p className="text-muted-foreground mb-4">
                  iNSURA.ae Powered by Pioneer is a leading insurance broker company based in the UAE since 1990,
                  providing comprehensive insurance solutions.
                </p>
                <Link href="/about" className="text-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>

              {/* Our Insurance Card */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Our Insurance</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/insurance/motor"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Motor Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/health"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Health Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/business"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Business Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance/travel"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Travel Insurance
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4">Contact Info</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Office #419, 4th Floor, Al Nasr Plaza, Oud Metha – Dubai</p>
                  <p>Phone: +971 4 357 4547</p>
                  <p>Email: support@insura.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
