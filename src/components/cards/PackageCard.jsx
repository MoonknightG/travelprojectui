import Image from "next/image";

export default function PackageCard({ title, image, price, packages }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow bg-white">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          className="h-[360px] w-full object-cover"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full">
          {packages}+ Packages
        </span>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Title */}
        <h3 className="absolute bottom-4 left-6 text-white text-xl font-semibold">
          {title}
        </h3>
      </div>

      {/* Price Box */}
      <div className="p-4">
        <div className="bg-gray-100 rounded-xl py-2 text-center">
          <p className="text-xs text-gray-500">Package Starting</p>
          <p className="font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
}
