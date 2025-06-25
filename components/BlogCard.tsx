import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
  date,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white border rounded-2xl shadow hover:shadow-md transition overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-500">{date}</p>
          <h2 className="text-lg font-bold mt-1 mb-2 text-blue-700">{title}</h2>
          <p className="text-gray-600 text-sm">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}