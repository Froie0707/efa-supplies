import Image from "next/image";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | EFA Supplies</title>
        <meta name="description" content="Contact EFA Supplies — your trusted provider of school supplies in Davao City. Reach out for inquiries, bulk orders, or partnerships." />
      </Head>

      <main className="w-full">
        {/* Hero Banner */}
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <img
            src="/images/school-supplies-background.jpg"
            alt="Contact EFA Supplies"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Let’s Connect
            </h1>
            <p className="text-white mt-4 max-w-xl">
              Have questions or ready to place a bulk order? We’re here to help!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-4 py-2" required />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded px-4 py-2" required />
              <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded px-4 py-2 h-32" required />
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded">
                Send Message
              </button>
            </form>
          </div>

          {/* Business Info */}
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Business Information</h3>
            <ul className="text-gray-700 space-y-3 text-sm">
              <li><strong>📍 Address:</strong> Davao City, Philippines</li>
              <li><strong>📞 Phone:</strong> +63 912 345 6789</li>
              <li><strong>📧 Email:</strong> info@efasupplies.ph</li>
              <li><strong>🕒 Business Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </section>

        {/* Google Map Embed */}
        <section className="mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Find Us on the Map</h2>
          <div className="rounded overflow-hidden shadow-md aspect-video">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.51017307615!2d125.63091167864991!3d7.0964042604162305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d246bac4b79%3A0xb413f019edade0fa!2sSM%20Lanang!5e0!3m2!1sen!2sph!4v1750790464058!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 bg-yellow-300 py-12 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Looking for Bulk Supplies?</h3>
          <p className="mb-6 text-gray-800">We work with schools, organizations, and LGUs. Let’s partner up!</p>
          <a href="/services" className="inline-block bg-black text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition">
            View Our Services
          </a>
        </section>
      </main>
    </>
  );
}
