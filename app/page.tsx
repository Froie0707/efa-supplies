import ProductCard from "@/components/ProductCards";
import TestimonialSlider from "@/components/TestimonialSlider";
import { products } from "@/lib/products";
import Image from "next/image";

export default function Home() {
  return (
    
    <section className="w-full mb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        {/* Background Image */}
        <img
          src="/images/school-supplies-background.jpg"
          alt="A flat lay on a weathered wooden surface displays an open blank grid-lined notebook surrounded by a vibrant assortment of school supplies: colorful pencils, crayons, a watercolor paint set, pink sneakers, a calculator, scissors, and various novelty erasers."
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            School Supplies for Every Learner in Davao City
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-6">
            EFA Supplies offers reliable, affordable essentials for students, teachers, and schools — available in bulk or retail.
          </p>

          <a
            href="/contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
          >
            Contact Us Today
          </a>
        </div>

      </div>

      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              description={product.description}
              linkText={product.linkText}
              linkHref={product.linkHref}
            />
          ))}
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Why Choose EFA Supplies?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">🎯 Affordable Pricing</h3>
            <p className="text-sm text-gray-600">Budget-friendly options for students and schools.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">📦 Bulk & Retail</h3>
            <p className="text-sm text-gray-600">Order by the piece or by the hundreds.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">🚚 Fast Delivery</h3>
            <p className="text-sm text-gray-600">Prompt deliveries throughout Davao City.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">🤝 School Partnerships</h3>
            <p className="text-sm text-gray-600">We serve private & public institutions.</p>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">From Our Blog</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Back-to-School Checklist 2025</h3>
            <p className="text-sm text-gray-600">Here’s what every student should have this year. View our full guide.</p>
            <a href="/blog/back-to-school-supplies-2025" className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Do you deliver outside Davao City?</h3>
            <p className="text-sm text-gray-600">Currently, we focus on local deliveries within Davao, but you may inquire for nearby areas.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do you accept bulk school contracts?</h3>
            <p className="text-sm text-gray-600">Yes! We have partnerships with schools and LGUs. Contact us for a quote.</p>
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Quick Inquiry</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded h-24" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>


      {/* <section className="mt-20 bg-yellow-300 py-12 px-6 text-center rounded-xl max-w-6xl mx-auto"> */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-yellow-300 py-12 text-center rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Ready to place your order?</h2>
        <p className="mb-6 text-gray-800">We’re just one message away. Get your supplies now and start the school year strong!</p>
        <a
          href="/contact"
          className="inline-block bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>

    </section>
  );
}