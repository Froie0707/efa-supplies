import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";

export const metadata = {
  title: "Where to Shop: Why Choose EFA Supplies | Davao School Supplies",
  description: "Looking for quality and affordable school supplies in Davao City? Learn why EFA Supplies is trusted by parents, teachers, and students.",
};

export default function WhyChooseEfaSuppliesPage() {
  return (
    <>
      <SEO
        title={metadata.title}
        description={metadata.description}
        url="/blog/why-choose-efa-supplies"
      />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Where to Shop: Why Choose EFA Supplies
        </h1>
        <p className="text-gray-600 mb-6 italic">
          Your Trusted School Supplies Store in Davao City
        </p>

        <Image
          src="/images/blog/efa-storefront.png"
          alt="EFA Supplies Davao Storefront"
          width={900}
          height={500}
          className="rounded-xl w-full mb-8 object-cover"
        />

        <p className="mb-4">
          Finding the right place to buy{" "}
          <strong>school supplies in Davao City</strong> can make a huge
          difference. Whether you're a parent preparing for the new school year,
          a teacher organizing your classroom, or a student looking for quality
          tools, you want a store that’s affordable, reliable, and committed to
          education.
        </p>

        <p className="mb-6">
          At <strong>EFA Supplies</strong>, we offer more than just notebooks
          and pens. We provide a customer-centered experience that supports your
          goals. Here’s why we’re Davao’s preferred partner in learning.
        </p>

        {/* Section: Who We Are */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Who We Are</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Quality school and office supplies</li>
          <li>Competitive prices</li>
          <li>Bulk packages for schools and teachers</li>
          <li>Personalized service for every customer</li>
        </ul>
        <p className="mb-6">
          EFA Supplies is a locally owned and operated store in Davao City,
          serving students and educators since 2020. Whether you need one
          notebook or a full classroom set, we treat every order with care.

          Learn more on our{" "}
          <Link href="/about" className="text-blue-600 underline">
            About Us
          </Link>{" "}
          page.
        </p>

        {/* Section: Delivery Options */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Convenient Location & Delivery Options
        </h2>
        <p className="mb-4">
          We're located at the heart of Davao City and offer delivery across the
          metro and nationwide. Perfect for busy parents, teachers, or schools
          ordering in bulk.
        </p>
        <p className="mb-6">
          Visit our{" "}
          <Link href="/contact" className="text-blue-600 underline">
            Contact Page
          </Link>{" "}
          for hours, address, and directions.
        </p>

        {/* Section: What Makes EFA Different */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What Makes EFA Supplies Different?
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          1. Complete School Supply Packages
        </h3>
        <p className="mb-4">
          We offer pre-packed kits for every grade—based on real school lists
          from Davao schools. Kits include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Preschool kits: crayons, scissors, markers</li>
          <li>Grade 1 kits: notebooks, pencils, coloring materials</li>
          <li>
            Senior high kits: scientific calculators, writing pads, presentation
            tools
          </li>
        </ul>
        <p className="mb-6">
          ✅ Want the full list? Visit our{" "}
          <Link
            href="/blog/back-to-school-supplies-2025"
            className="text-blue-600 underline"
          >
            Back-to-School Checklist 2025
          </Link>
          .

          <Image
            src="/images/blog/supply-kits.png"
            alt="EFA Supplies School Kits"
            width={900}
            height={500}
            className="rounded-xl my-6 w-full object-cover"
          />
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          2. Affordable, Competitive Pricing
        </h3>
        <p className="mb-6">
          We understand family budgets. That’s why we offer budget-friendly
          brands, wholesale prices, and discounts for bulk orders or loyal
          customers.

          Save more while getting quality that lasts.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          3. Bulk Orders for Schools & Teachers
        </h3>
        <p className="mb-6">
          We help schools and teachers streamline bulk orders with:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Custom quotations</li>
          <li>Flexible delivery</li>
          <li>Volume discounts</li>
        </ul>
        <p className="mb-6">
          Need help? Visit our{" "}
          <Link href="/services" className="text-blue-600 underline">
            Services
          </Link>{" "}
          page for classroom planning and supply assistance.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          4. Personalized Customer Support
        </h3>
        <p className="mb-6">
          Our staff gives one-on-one attention—whether you shop in person, by
          chat, or online. We'll help you find the right items, pack your kits,
          and deliver on time.

          You’re not just a transaction; you’re part of our learning community.
        </p>

        {/* Section: Products We Offer */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Products We Offer</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Writing tools: pens, markers, pencils, highlighters</li>
          <li>Notebooks, bond paper, index cards</li>
          <li>Art supplies: crayons, glue, scissors, paint</li>
          <li>Hygiene kits: alcohol, wipes, face masks</li>
          <li>Educational charts and posters</li>
          <li>School bags, lunch kits, water bottles</li>
          <li>Teacher essentials: folders, organizers, staplers</li>
        </ul>
        <p className="mb-6">
          Featuring trusted brands like <strong>Mongol, Crayola, Faber-Castell</strong>,
          and <strong>Pilot</strong>.
        </p>

        {/* Testimonials */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">What Our Customers Say</h2>
        <blockquote className="border-l-4 pl-4 italic text-gray-700 mb-4">
          ⭐⭐⭐⭐⭐ “EFA Supplies saved me time and stress during back-to-school season. The staff was helpful, and the Grade 2 kit had everything I needed.”<br />
          <span className="font-semibold">– Aileen M., Davao City</span>
        </blockquote>
        <blockquote className="border-l-4 pl-4 italic text-gray-700 mb-8">
          ⭐⭐⭐⭐⭐ “As a teacher, I love that I can order in bulk and have everything delivered straight to our school. Super convenient!”<br />
          <span className="font-semibold">– Mr. Reyes, Elementary Teacher</span>
        </blockquote>

        {/* How to Shop */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          How to Shop at EFA Supplies
        </h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Walk-in to our Davao City store</li>
          <li>Order online via Messenger or email</li>
          <li>Book delivery or pick-up service</li>
        </ol>
        <p className="mb-6">
          Need assistance? Contact us via our{" "}
          <Link href="/contact" className="text-blue-600 underline">
            Contact Page
          </Link>{" "}
          or message us on Facebook.
        </p>

        {/* Promo */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Ongoing Promos</h2>
        <p className="mb-6">
          🛍 <strong>June–August 2025 Promo:</strong> Spend ₱1,000 or more and
          receive a free EFA pencil case!
          <br />
          Visit our{" "}
          <Link href="/" className="text-blue-600 underline">
            homepage
          </Link>{" "}
          or <Link href="/blog" className="text-blue-600 underline">blog</Link>{" "}
          for updated promos and events.
        </p>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Final Thoughts: Why EFA Supplies?
        </h2>
        <p className="mb-6">
          There are many stores in Davao—but only EFA Supplies offers:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>✅ Community-based, family-first service</li>
          <li>✅ Pre-packed school kits by grade</li>
          <li>✅ Top brands at fair prices</li>
          <li>✅ Delivery in Davao and nationwide</li>
          <li>✅ Real support from real people</li>
        </ul>

        <p className="text-xl font-semibold">
          🧠 Start your school year right —{" "}
          <Link href="/services" className="text-blue-600 underline">
            shop with us today!
          </Link>
        </p>
      </section>
    </>
  );
}
