'use client';
import { useState } from "react";

export default function Footer() {

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to a backend, Mailchimp, or other service later.
    alert(`Thanks for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-24">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">EFA Supplies</h4>
          <p className="text-sm text-gray-400">
            Reliable school supplies for students, teachers, and institutions in Davao City.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Email: info@efasupplies.com</li>
            <li>Phone: +63 912 345 6789</li>
            <li>Location: Davao City, Philippines</li>
          </ul>
        </div>

        {/* Socials / Newsletter (optional) */}
        <div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="flex space-x-4 text-gray-400">
              <li><a rel="canonical" href="https://www.facebook.com/profile.php?id=61577994260757" aria-label="Facebook" className="hover:text-white">📘</a></li>
              <li><a href="#" aria-label="Instagram" className="hover:text-white">📸</a></li>
              <li><a href="#" aria-label="Twitter" className="hover:text-white">🐦</a></li>
            </ul>
          </div>

          <div className="py-4">
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter for updates & promos:</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 px-3 py-2 rounded text-black"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
          
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EFA Supplies. All rights reserved.
      </div>
    </footer>
  );
}
