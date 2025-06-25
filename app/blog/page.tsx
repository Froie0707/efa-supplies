'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title: "Back-to-School Checklist 2025",
    excerpt: "Here’s what every student should have this year. View our full guide.",
    image: "/images/blog/back-to-school.jpg",
    slug: "back-to-school-supplies-2025",
    date: "June 20, 2025",
  },
  {
    title: "How to Save on Bulk School Supplies",
    excerpt: "Tips on buying school supplies in bulk while staying on budget.",
    image: "/images/blog/bulk-supplies.jpg",
    slug: "save-on-bulk-school-supplies",
    date: "May 30, 2025",
  },
  {
    title: "Where to Shop: Why Choose EFA Supplies",
    excerpt: "Discover why EFA Supplies is Davao City’s trusted school supply store. From pre-packed school kits to personalized service and nationwide delivery, we make back-to-school shopping stress-free and affordable.",
    image: "/images/blog/bulk-supplies.jpg",
    slug: "why-choose-efa-supplies",
    date: "June 25, 2025",
  },
  // Add more posts as needed
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SEO
        title="EFA Supplies Blog | Tips & Guides for Schools in Davao"
        description="Read helpful articles about school supply planning, bulk ordering, education news, and more from EFA Supplies."
        url="https://yourdomain.com/blog"
        // image="https://yourdomain.com/images/blog-banner.jpg"
        // type="website"
      />

      {/* Hero / Banner */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="/images/blog-banner.jpg"
          alt="EFA Blog Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            EFA Supplies Blog
          </h1>
        </div>
      </section>

      {/* Blog Intro + Search */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Helpful Guides & School Tips</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Stay updated with practical guides, educational supply tips, and insights for teachers, parents, and school admins in Davao City.
        </p>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-80"
        />
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No posts found matching your search.
          </p>
        )}
      </section>


      {/* Newsletter CTA */}
      <section className="bg-yellow-300 py-12 px-6 text-center rounded-xl max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Blog</h2>
        <p className="text-gray-800 mb-6">
          Get new school tips and supply updates straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border w-full sm:w-80"
          />
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
