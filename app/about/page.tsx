import StatsSection from "@/components/StatsSection";
import TeamCard from "@/components/TeamCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import TimelineItem from "@/components/TimelineItem";
import MapLocation from "@/components/Location";

import Image from "next/image";

export const metadata = {
  title: 'About EFA Supplies | School Supplies in Davao City',
  description: 'Learn about EFA Supplies, a trusted school supply provider in Davao City. Discover our story, mission, team, and why we’re a partner in education.',
};


export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <img
                src="/images/school-supplies-background.jpg"
                alt="About EFA Supplies"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Empowering Education Through Quality School Supplies
                </h1>
            </div>
        </section>


      {/* Overview */}
      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="sm:text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-700">
            EFA Supplies is a trusted school supply provider in Davao City, offering affordable and dependable products for students, teachers, and institutions.
        </p>
        </section>


      {/* Mission & Vision */}
      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
            <h3 className="text-xl font-semibold mb-2">🎯 Our Mission</h3>
            <p className="text-gray-600">
            To provide accessible, budget-friendly school essentials that help elevate learning outcomes in every Filipino classroom.
            </p>
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-2">🚀 Our Vision</h3>
            <p className="text-gray-600">
            To be the top choice for school supplies across Mindanao — known for quality, reliability, and service.
            </p>
        </div>
        </section>


      {/* Our Story */}
      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Our Story</h3>
        <p className="text-gray-700">
          Established in 2020, EFA Supplies began as a small local shop serving schools around Davao City. Over the years, we’ve grown into a full-service provider offering bulk orders, retail items, and custom school kits — all delivered with passion for education.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-6">Why Choose EFA Supplies?</h2>
        <ul className="grid sm:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Affordable bulk pricing & custom kits</li>
          <li>Prompt delivery across Davao City</li>
          <li>Custom labeling and bundling</li>
          <li>Trusted by teachers and LGUs</li>
        </ul>
      </section>

      {/* Animated Counter Section */}
       <StatsSection />


      {/* Meet the Team */}
      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Meet Our Team</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TeamCard
                image="/images/image1.jpg"
                name="Ella Abayon"
                role="Founder & Operations Lead"
            />

            <TeamCard
                image="/images/image1.jpg"
                name="Mark Santos"
                role="Logistics Coordinator"
            />

            <TeamCard
                image="/images/image1.jpg"
                name="Grace L."
                role="Customer Support"
            />
        </div>
      </section>

      {/* Company Timeline */}
      <section className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
        <div className="space-y-4 border-l-4 border-yellow-400 pl-6">
            <TimelineItem
                year="2020 – Founded"
                description="Started with a small storefront in Davao City."
            />
            <TimelineItem
                year="2021 – First School Partnerships"
                description="Served 5 local schools with custom supply kits."
            />
            <TimelineItem
                year="2023 – Delivery Expansion"
                description="Launched in-house delivery across Davao."
            />
        </div>
      </section>

      <TestimonialSlider />

      {/* Google Map Embed */}
      <MapLocation />

      {/* Final CTA */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-yellow-300 py-12 text-center rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Partner with EFA Supplies</h3>
        <p className="mb-6 text-gray-800">We’re here to support your educational needs — from classrooms to campuses.</p>
        <a
          href="/contact"
          className="inline-block bg-black text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}   
