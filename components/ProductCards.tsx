type Product = {
  name: string;
  image: string;
  description: string;
  linkText: string;
  linkHref: string;
};

export default function ProductCard({ name, image, description, linkText, linkHref }: Product) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href={linkHref} className="text-blue-600 font-medium hover:underline">
        {linkText}
      </a>
    </div>
  );
}
