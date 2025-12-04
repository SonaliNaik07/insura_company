"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

interface Post {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface Category {
  name: string;
  count: number;
}

const initialPosts: Post[] = [
  { id: 1, title: "15 Fun Things To Do In Dubai on the UAE National Holiday", date: "Dec 1, 2025", image: "/articles/a4.webp" },
  { id: 2, title: "Why Is The Insurance Market Shaking In Dubai?", date: "Nov 24, 2025", image: "/articles/a1.png" },
  { id: 3, title: "How To Check Insurance Status Online in UAE?", date: "Nov 17, 2025", image: "/articles/a2.png" },
  { id: 4, title: "Proven Tips For Jobseekers In Insurance", date: "Nov 10, 2025", image: "/articles/a3.jpg" },
  { id: 5, title: "Best Saving Apps In UAE: Start Earning Today", date: "Nov 4, 2025", image: "/articles/a5.webp" },
];

const categories: Category[] = [
  { name: "Bike Insurance", count: 4 },
  { name: "Business Insurance", count: 14 },
  { name: "Car Insurance", count: 28 },
  { name: "Health Insurance", count: 37 },
  { name: "Insurance", count: 14 },
  { name: "Life Insurance", count: 24 },
  { name: "Motor Insurance", count: 2 },
  { name: "Third Party Liability Insurance", count: 43 },
  { name: "Travel Insurance", count: 20 },
  { name: "Workmen Compensation Insurance", count: 2 },
];

export default function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // 🔹 Search filter
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = initialPosts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  // 🔹 Category selection
  const handleCategorySelect = (categoryName: string) => {
    setActiveCategory(categoryName);
    console.log(`Category selected: ${categoryName}`); // 🔹 Tracking event
  };

  return (
    <aside className="space-y-8 w-full">

      {/* Search */}
      <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
        <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Search</h3>
        <div className="flex rounded-md overflow-hidden border border-[#eef3f7]">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-[#fafcfd] px-4 py-3 text-sm focus:outline-none"
          />
          <button className="w-12 bg-[#0b4a86] flex items-center justify-center hover:bg-[#083460] transition">
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
        <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Recent Posts</h3>

        {filteredPosts.length === 0 ? (
          <p className="text-[13px] text-gray-500">No results found.</p>
        ) : (
          <ul className="space-y-4">
            {filteredPosts.map((post) => (
              <li key={post.id} className="flex gap-3">
                <div className="w-[70px] h-[70px] overflow-hidden rounded-md bg-gray-100 flex-shrink-0">
                  <img src={post.image} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-[14px] font-semibold hover:text-[#0b4a86] leading-tight"
                  >
                    {post.title}
                  </Link>
                  <div className="text-[12px] flex items-center gap-2 text-[#6b7b8f] mt-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Categories */}
      <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
        <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategorySelect(cat.name)}
              className={` w-full px-4 py-3 text-[14px] rounded-md flex justify-between items-center transition
                ${activeCategory === cat.name
                  ? "bg-[#0b4a86] text-white"
                  : "bg-[#f8fbfd] hover:bg-[#e9f3fb] text-[#011627]"
                }`}
            >
              {cat.name} ({cat.count})
              <ChevronRight
                className={`w-4 h-4 transition
                  ${activeCategory === cat.name ? "text-white" : "text-[#0b4a86]"}
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <SocialSection />
    </aside>
  );
}

// 🔹 Extract Social section (with tracking + tooltip)
function SocialSection() {
  const trackClick = (platform: string) => {
    console.log(`Social clicked: ${platform}`); // 🔹 Tracking event log
  };

  return (
    <div className="bg-white border border-[#e5edf2] rounded-md shadow-sm p-5">
      <h3 className="text-[18px] font-semibold text-[#011627] mb-4">Follow Us</h3>
      <div className="flex items-center gap-4">
        <IconLink href="https://www.facebook.com/insura.ae/" label="Facebook" onClick={() => trackClick("Facebook")}>
          <Facebook className="w-5 h-5" />
        </IconLink>
        <IconLink href="https://x.com/Insuraae" label="Twitter / X" onClick={() => trackClick("Twitter")}>
          <Twitter className="w-5 h-5" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/insura-ae/" label="LinkedIn" onClick={() => trackClick("LinkedIn")}>
          <Linkedin className="w-5 h-5" />
        </IconLink>
        <IconLink href="https://www.instagram.com/insuraae/" label="Instagram" onClick={() => trackClick("Instagram")}>
          <Instagram className="w-5 h-5" />
        </IconLink>
        <IconLink href="https://www.youtube.com/channel/UC6ZzXNkqiN0sQAJ4w0NNBZA" label="YouTube" onClick={() => trackClick("YouTube")}>
          <Youtube className="w-5 h-5" />
        </IconLink>
      </div>
    </div>
  );
}

const IconLink = ({
  href,
  label,
  children,
  onClick,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <div className="relative group">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={label}
      className="w-10 h-10 rounded-full border border-[#d7deeb] flex items-center justify-center
                 text-[#0b4a86] hover:bg-[#0b4a86] hover:text-white transition"
    >
      {children}
    </Link>

<span
  className="
    absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
    px-2 py-1 text-[11px]
    bg-[#011627] text-white rounded-md shadow-sm
    opacity-0 group-hover:opacity-100
    translate-y-1 group-hover:translate-y-0
    transition-all duration-300 pointer-events-none
  "
>
  {label}
</span>

  </div>
);
