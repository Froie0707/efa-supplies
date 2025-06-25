'use client';

import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "We’ve been sourcing from EFA Supplies for 2 years now. Always fast and reliable!",
    author: "Principal – Davao Elementary School",
  },
  {
    quote: "Excellent service and quality products. Perfect for our school giveaways.",
    author: "Teacher Maria C.",
  },
  {
    quote: "We saved so much buying in bulk from EFA. Highly recommended!",
    author: "PTA President – Mindanao School",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-8">What Our Clients Say</h3>
      <blockquote className="italic text-lg text-gray-700 transition-opacity duration-500">
        “{testimonials[index].quote}”
        <footer className="mt-4 text-sm text-gray-500">— {testimonials[index].author}</footer>
      </blockquote>
    </section>
  );
}
