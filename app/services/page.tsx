import LayoutWrapper from "@/components/LayoutWrapper";
import HeroBanner from "@/components/HeroBanner";

export const metadata = {
  title: 'Our Services | EFA Supplies – Trusted School Supply Solutions in Davao City',
  description:
    'Discover a range of flexible and reliable school supply solutions from EFA Supplies. From bulk orders and retail products to custom kits and streamlined delivery, we empower classrooms across Davao City.',
  openGraph: {
    title: 'Our Services | EFA Supplies',
    description:
      'Flexible, reliable school supply solutions for schools, LGUs, and parents in Davao City. Explore bulk orders, retail products, custom kits, and more.',
    url: 'https://yourdomain.com/services',
    images: [
      {
        url: 'https://yourdomain.com/images/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Services at EFA Supplies',
      },
    ],
    siteName: 'EFA Supplies',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | EFA Supplies',
    description:
      'Trusted school supply solutions for every need in Davao City. Check out our bulk orders, retail products, custom kits, and more.',
    images: ['https://yourdomain.com/images/services-hero.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <HeroBanner
        title="Our Services"
        subtitle="Flexible and reliable school supply solutions for every need."
        imageUrl="/images/school-supplies-background.jpg"
        altText="A flat lay on a weathered wooden surface displays an open blank grid-lined notebook surrounded by a vibrant assortment of school supplies: colorful pencils, crayons, a watercolor paint set, pink sneakers, a calculator, scissors, and various novelty erasers."

      />

      {/* Overview */}
      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Empowering Classrooms, One Kit at a Time</h2>
        <p className="text-gray-700 sm:text-lg max-w-2xl mx-auto">
          We offer school supply services for students, schools, LGUs, and parents. Whether it's for a single class or an entire school division, we have flexible packages ready.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mt-16 px-4 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📦 Bulk Orders</h3>
          <p className="text-gray-600">Large volume packages ideal for schools and LGU programs.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🛍️ Retail Products</h3>
          <p className="text-gray-600">Single or small quantity orders available in-store or online.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🎁 Custom Kits</h3>
          <p className="text-gray-600">Personalized bundles for giveaways, school drives, or events.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🏷️ Labeling & Sorting</h3>
          <p className="text-gray-600">Organized and labeled by student, grade, or class section.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🚚 Local Delivery</h3>
          <p className="text-gray-600">Fast and reliable delivery within Davao City and nearby areas.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📝 Contract Support</h3>
          <p className="text-gray-600">We handle bulk contracts and POs for schools or government use.</p>
        </div>
      </section>

      <section className="mt-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Sample School Supply Kits</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🎒 Starter Kit</h3>
            <p className="text-gray-600">For Grades 1–3</p>
            <ul className="text-sm text-gray-600 mt-4 space-y-1">
              <li>✏️ 3 Pencils</li>
              <li>📓 4 Notebooks</li>
              <li>📏 Ruler & Crayons</li>
            </ul>
            <p className="mt-4 font-bold text-lg text-yellow-600">₱199 / student</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📘 Intermediate Kit</h3>
            <p className="text-gray-600">For Grades 4–6</p>
            <ul className="text-sm text-gray-600 mt-4 space-y-1">
              <li>✏️ 3 Pencils, 2 Pens</li>
              <li>📓 6 Notebooks</li>
              <li>✂️ Scissors, Glue, Crayons</li>
            </ul>
            <p className="mt-4 font-bold text-lg text-yellow-600">₱299 / student</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🧰 Custom Kit</h3>
            <p className="text-gray-600">For Any Grade Level</p>
            <ul className="text-sm text-gray-600 mt-4 space-y-1">
              <li>📝 Fully customizable items</li>
              <li>📦 Bulk sorting and labeling</li>
              <li>📍 School branding available</li>
            </ul>
            <p className="mt-4 font-bold text-lg text-yellow-600">Request Quote</p>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="mt-24 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="text-lg font-semibold mb-2">📋 Step 1: Request a Quote</h4>
            <p className="text-gray-600">Send us your supply list or package requirements. We’ll respond fast with options and pricing.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">🛒 Step 2: Confirm Order</h4>
            <p className="text-gray-600">We’ll prepare your supplies, bundle them, and provide an invoice or PO.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">🚛 Step 3: Delivery or Pickup</h4>
            <p className="text-gray-600">Get your orders delivered to your school or pick them up at our shop — fast and organized.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Why Schools Trust EFA Supplies</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">💰 Competitive Pricing</h3>
            <p className="text-sm text-gray-600">Fair prices for every budget size.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">🤝 Long-Term Partnerships</h3>
            <p className="text-sm text-gray-600">Repeat clients across Mindanao and Davao.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">📦 Hassle-Free Packing</h3>
            <p className="text-sm text-gray-600">We label and organize per class or teacher.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">⏱️ Fast Turnaround</h3>
            <p className="text-sm text-gray-600">Quick fulfillment even for bulk orders.</p>
          </div>
        </div>
      </section>

      <section className="mt-24 max-w-3xl mx-auto bg-yellow-100 rounded-lg px-6 py-10 text-center">
        <h2 className="text-xl font-bold mb-4">Stay Updated on Promotions</h2>
        <p className="mb-6 text-gray-700">Join our mailing list and get exclusive deals and school kit promos.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"  
            placeholder="Enter your email"
            className="px-4 py-2 rounded w-full sm:w-2/3 border border-gray-300 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>


      {/* CTA */}
      <section className="mt-24 px-4 max-w-6xl mx-auto bg-yellow-300 py-12 text-center rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Ready to place your order?</h3>
        <p className="mb-6 text-gray-800">We’re happy to prepare a quote or bundle tailored to your school or event.</p>
        <a
          href="/contact"
          className="inline-block bg-black text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>
    </LayoutWrapper>
  );
}
