import Image from "next/image";

type TeamCardProps = {
  image: string;
  name: string;
  role: string;
};

export default function TeamCard({ image, name, role }: TeamCardProps) {
  return (
    <div className="text-center">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="mx-auto rounded-full"
      />
      <h4 className="font-semibold mt-4">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
