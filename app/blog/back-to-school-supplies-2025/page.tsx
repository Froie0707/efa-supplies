// app/blog/back-to-school-supplies-2025/page.tsx
import Image from "next/image";
import SEO from "@/components/SEO";
import Link from "next/link";

export const metadata = {
  title: 'Back-to-School Checklist 2025 | EFA Supplies',
  description: 'Get ready for the 2025 school year with our must-have back-to-school supplies checklist for every grade. Shop quality school supplies in Davao City from EFA Supplies.',
};

export default function BackToSchoolChecklist2025() {
  return (
    <>
      <SEO
        title={metadata.title}
        description={metadata.description}
        url="/blog/back-to-school-supplies-2025"
      />
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Back-to-School Checklist 2025: Must-Have Supplies for Every Grade
        </h1>

        <p className="text-lg mb-4">
          The start of the school year is an exciting time for students and parents alike.
          But before classes begin, one important task remains—<strong>buying the right school supplies</strong>.
          A well-prepared student is more confident, organized, and ready to succeed.
        </p>

        <p className="mb-6">
          Whether you’re shopping for a kindergartener or a senior high student, this 2025 checklist will
          help ensure nothing is left behind. EFA Supplies, your trusted school supply store in Davao City,
          created this guide to help every student start strong.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎒 General Essentials (All Grades)</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Ergonomic backpack</li>
          <li>Notebooks and writing pads</li>
          <li>Pens, pencils, erasers, sharpeners</li>
          <li>Glue, scissors, and ruler</li>
          <li>Colored pencils or crayons</li>
          <li>Folder organizers and pencil case</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🧒 Preschool & Kindergarten</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Jumbo crayons and pencils</li>
          <li>Storybooks and flashcards</li>
          <li>Sketchpad and art supplies</li>
          <li>Safety scissors and name tags</li>
          <li>Extra clothes, lunch box, water bottle</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">📘 Grades 1–3 (Lower Elementary)</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Notebooks for each subject</li>
          <li>Intermediate pad and graph paper</li>
          <li>Plastic envelope folders</li>
          <li>Flashcards and mini whiteboard (optional)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">📚 Grades 4–6 (Upper Elementary)</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>8 subject notebooks</li>
          <li>Bond papers (short and long)</li>
          <li>Correction tape, USB drive</li>
          <li>Art materials, sticky notes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎓 Grades 7–10 (Junior High)</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Specialty notebooks</li>
          <li>Scientific calculator</li>
          <li>USB flash drive, cartolina, manila paper</li>
          <li>Presentation tools</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🎓 Grades 11–12 (Senior High)</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Laptops or tablets (optional)</li>
          <li>Binder notebooks, dividers</li>
          <li>Lab or accounting notebooks</li>
          <li>Sketch pads, safety gear (TVL)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🧼 Hygiene Checklist</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Alcohol or hand sanitizer</li>
          <li>Face mask and wipes</li>
          <li>Water bottle and lunch box</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🛒 Why Shop at EFA Supplies?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Affordable packages for all grades</li>
          <li>Quality brands like Mongol, Crayola, Pilot</li>
          <li>Custom labeling available</li>
          <li>Delivery or in-store pickup in Davao City</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          🎁 <strong>Promo:</strong> Free pencil case for every ₱1,000 spent this July 2025!
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">📆 Timeline: When to Buy</h2>
        <table className="w-full text-sm border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">June</td>
              <td className="p-2 border">Check school supply list</td>
            </tr>
            <tr>
              <td className="p-2 border">Early July</td>
              <td className="p-2 border">Start shopping for essentials</td>
            </tr>
            <tr>
              <td className="p-2 border">Late July</td>
              <td className="p-2 border">Label and organize items</td>
            </tr>
            <tr>
              <td className="p-2 border">August</td>
              <td className="p-2 border">School begins 🎉</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-10 mb-4">✅ Final Tips for Parents</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Let your child choose colors or styles</li>
          <li>Always label each item</li>
          <li>Check school announcements for specific requirements</li>
        </ul>

        <p className="mt-6">
          The right school supplies set the tone for a successful school year.
          Shop smarter and earlier with EFA Supplies—Davao City’s trusted partner in education.
        </p>

        <div className="mt-10 text-center">
          <Link
            href=""
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Shop School Supplies Now
          </Link>
        </div>
      </section>
    </>
  );
}
