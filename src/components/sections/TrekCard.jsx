import Image from "next/image";

export default function TrekCard({ title, price, image }) {
  return (
    <div className="rounded-5xl overflow-hidden shadow hover:shadow-xl transition group">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-[140px] object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 mt-1">{price}</p>
      </div>
    </div>
  );
}
