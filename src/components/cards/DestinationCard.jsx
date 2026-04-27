import Image from "next/image";

export default function DestinationCard({
  title,
  image,
  packages,
  price,
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          className="h-[360px] w-full object-cover"
        />

        {/* Packages Badge */}
        <div className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full">
          {packages}+ Packages
        </div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Title */}
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
          {title}
        </h3>
      </div>

      {/* Price */}
      <div className="p-4 flex justify-between text-sm">
        <span className="text-gray-500">Starting Price</span>
        <span className="font-semibold">{price}</span>
      </div>
    </div>
  );
}
